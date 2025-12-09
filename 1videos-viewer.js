// ============================================================================
// SISTEMA DE VISOR DE VIDEOS H - COMO NHENTAI PARA VIDEOS
// VERSIÓN COMPLETA CON GOOGLE DRIVE LINKS
// ============================================================================

const videosViewer = {
    // BASE DE DATOS DE VIDEOS POR COLECCIÓN Y SUBCOLECCIÓN
    videosDatabase: {
        // COLECCIÓN 1
        'coleccion1': {
            'subcoleccion1': [
                {
                    titulo: 'Ichika - Escena Íntima 1',
                    url: 'https://drive.google.com/uc?export=download&id=TU_ID_DE_GOOGLE_DRIVE_1',
                    duracion: '5:30',
                    descripcion: 'Ichika en una escena especial',
                    tags: ['ichika', 'intimo', 'especial']
                },
                {
                    titulo: 'Nino - Momento Privado',
                    url: 'https://drive.google.com/uc?export=download&id=TU_ID_DE_GOOGLE_DRIVE_2',
                    duracion: '4:20',
                    descripcion: 'Nino en un momento íntimo',
                    tags: ['nino', 'privado', 'romantico']
                },
                // Agrega más videos...
            ],
            'subcoleccion2': [
                // Videos de esta subcolección
            ],
            'subcoleccion3': [
                // Videos de esta subcolección
            ]
        },
        // COLECCIÓN 2
        'coleccion2': {
            'subcoleccion1': [
                // Videos...
            ]
        }
    },

    // MAZOS DE PALABRAS PARA CADA SUBCONTENEDOR (igual que el sistema de mazos)
    mazosDatabase: {
        'subcoleccion1': {
            mazo1: [
                { japones: '愛', lectura: 'ai', opciones: ['Amor', 'Cariño', 'Afecto', 'Pasión'], respuesta: 0 },
                { japones: '恋', lectura: 'koi', opciones: ['Amor romántico', 'Enamoramiento', 'Romance', 'Pasión'], respuesta: 0 },
                // ... 10 palabras
            ],
            mazo2: [
                // Más palabras...
            ],
            mazo3: [],
            mazo4: [],
            mazo5: []
        }
    },

    config: {
        maxWidth: '90vw',
        maxHeight: '80vh',
        showControls: true,
        autoPlay: false,
        loop: false,
        backgroundColor: '#000000',
        preload: 'auto'
    },

    estado: {
        videos: [],
        videoActual: 0,
        pantallaVisible: false,
        reproduciendo: false,
        coleccionActual: '',
        subcoleccionActual: '',
        modoQuiz: false,
        mazoActual: [],
        preguntaActual: 0,
        respuestasCorrectas: 0,
        respuestasIncorrectas: 0
    },

    elementos: {
        contenedor: null,
        video: null,
        overlay: null,
        controles: null,
        info: null,
        botones: null
    },

    // INICIALIZACIÓN
    inicializar: function() {
        this.crearEstructuraHTML();
        this.configurarEventos();
        this.cargarEstado();
        console.log("🎬 Sistema de videos H inicializado");
    },

    // ESTRUCTURA HTML DEL VISOR
    crearEstructuraHTML: function() {
        // Contenedor principal
        this.elementos.contenedor = document.createElement('div');
        this.elementos.contenedor.id = 'visor-videos';
        this.elementos.contenedor.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background-color: ${this.config.backgroundColor};
            z-index: 99999; display: none; overflow-y: auto; overflow-x: hidden;
            padding: 20px;
        `;

        // Contenedor de video
        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            display: flex; justify-content: center; align-items: center;
            min-height: 70vh; position: relative; z-index: 0;
            margin-bottom: 20px;
        `;

        // Elemento video
        this.elementos.video = document.createElement('video');
        this.elementos.video.id = 'video-h-actual';
        this.elementos.video.style.cssText = `
            max-width: ${this.config.maxWidth}; max-height: ${this.config.maxHeight};
            border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            background: #000;
        `;
        this.elementos.video.controls = this.config.showControls;
        this.elementos.video.preload = this.config.preload;

        // Información del video
        this.elementos.info = document.createElement('div');
        this.elementos.info.id = 'info-video';
        this.elementos.info.style.cssText = `
            text-align: center; color: white; margin-top: 15px;
            background: rgba(255,255,255,0.1); padding: 15px;
            border-radius: 10px; border: 1px solid #ff6b9d;
        `;

        // Controles personalizados
        this.crearControles();

        // Ensamblar estructura
        videoContainer.appendChild(this.elementos.video);
        this.elementos.contenedor.appendChild(videoContainer);
        this.elementos.contenedor.appendChild(this.elementos.info);
        this.elementos.contenedor.appendChild(this.elementos.controles);

        document.body.appendChild(this.elementos.contenedor);
    },

    // CREAR CONTROLES PERSONALIZADOS
    crearControles: function() {
        this.elementos.controles = document.createElement('div');
        this.elementos.controles.style.cssText = `
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            background: rgba(0,0,0,0.8); border-radius: 10px; padding: 15px 25px;
            display: flex; gap: 15px; align-items: center; z-index: 2;
            border: 2px solid #ff6b9d;
        `;

        // Botón anterior
        const btnAnterior = this.crearBoton('video-prev', '◀ Anterior', '#ff6b9d', () => this.videoAnterior());
        
        // Botón siguiente
        const btnSiguiente = this.crearBoton('video-next', 'Siguiente ▶', '#4a90e2', () => this.videoSiguiente());
        
        // Botón reproducir/pausa
        const btnPlayPause = this.crearBoton('video-play', '⏯️', '#00cc6a', () => this.togglePlayPause());
        
        // Botón modo quiz
        const btnQuiz = this.crearBoton('video-quiz', '📝 Quiz', '#ffd700', () => this.iniciarQuiz());
        
        // Botón cerrar
        const btnCerrar = this.crearBoton('video-close', '✕ Cerrar', '#ff4444', () => this.ocultar());

        // Contador
        this.elementos.contador = document.createElement('div');
        this.elementos.contador.id = 'contador-videos';
        this.elementos.contador.style.cssText = `
            color: white; font-weight: bold; min-width: 120px; text-align: center;
            font-size: 1.1rem;
        `;

        // Agregar controles
        this.elementos.controles.appendChild(btnAnterior);
        this.elementos.controles.appendChild(this.elementos.contador);
        this.elementos.controles.appendChild(btnSiguiente);
        this.elementos.controles.appendChild(btnPlayPause);
        this.elementos.controles.appendChild(btnQuiz);
        this.elementos.controles.appendChild(btnCerrar);
    },

    crearBoton: function(id, texto, color, funcion) {
        const btn = document.createElement('button');
        btn.id = id;
        btn.innerHTML = texto;
        btn.style.cssText = `
            background: ${color}; color: white; border: none;
            border-radius: 8px; padding: 10px 15px; cursor: pointer;
            font-weight: bold; transition: all 0.3s ease;
        `;
        btn.onclick = funcion;
        btn.onmouseover = () => btn.style.opacity = '0.9';
        btn.onmouseout = () => btn.style.opacity = '1';
        return btn;
    },

    // CONFIGURAR EVENTOS
    configurarEventos: function() {
        document.addEventListener('keydown', (e) => this.manejarTeclado(e));
        
        this.elementos.video.addEventListener('ended', () => {
            console.log("Video terminado");
            if (this.estado.modoQuiz) {
                this.mostrarPreguntaQuiz();
            }
        });
    },

    // MOSTRAR VIDEOS DE UNA SUBCONTENEDOR
    mostrar: function(coleccionId, subcoleccionId, videoIndex = 0) {
        const videos = this.obtenerVideosDeSubcoleccion(coleccionId, subcoleccionId);
        if (!videos.length) {
            alert(`No hay videos en ${coleccionId} > ${subcoleccionId}`);
            return false;
        }

        this.estado.videos = videos;
        this.estado.videoActual = videoIndex;
        this.estado.pantallaVisible = true;
        this.estado.coleccionActual = coleccionId;
        this.estado.subcoleccionActual = subcoleccionId;
        this.estado.modoQuiz = false;

        this.elementos.contenedor.style.display = "block";
        document.body.style.overflow = "hidden";

        this.cargarVideoActual();
        this.actualizarControles();
        return true;
    },

    // CARGAR VIDEO ACTUAL
    cargarVideoActual: function() {
        if (!this.estado.videos.length) return;

        const videoData = this.estado.videos[this.estado.videoActual];
        
        // Actualizar elemento video
        this.elementos.video.src = videoData.url;
        this.elementos.video.load();

        // Actualizar información
        this.elementos.info.innerHTML = `
            <h3 style="color: #ff6b9d; margin-bottom: 8px;">${videoData.titulo}</h3>
            <p style="color: #cccccc; margin-bottom: 5px;">${videoData.descripcion}</p>
            <div style="color: #4a90e2; font-weight: bold;">
                Duración: ${videoData.duracion} | Tags: ${videoData.tags.join(', ')}
            </div>
        `;

        this.actualizarContador();
    },

    // NAVEGACIÓN ENTRE VIDEOS
    videoAnterior: function() {
        if (this.estado.videoActual > 0) {
            this.estado.videoActual--;
            this.cargarVideoActual();
        }
    },

    videoSiguiente: function() {
        if (this.estado.videoActual < this.estado.videos.length - 1) {
            this.estado.videoActual++;
            this.cargarVideoActual();
        }
    },

    togglePlayPause: function() {
        if (this.elementos.video.paused) {
            this.elementos.video.play();
            this.estado.reproduciendo = true;
        } else {
            this.elementos.video.pause();
            this.estado.reproduciendo = false;
        }
    },

    // MANEJAR TECLADO
    manejarTeclado: function(e) {
        if (!this.estado.pantallaVisible) return;

        switch(e.key) {
            case "ArrowLeft": this.videoAnterior(); break;
            case "ArrowRight": this.videoSiguiente(); break;
            case " ": this.togglePlayPause(); break;
            case "Escape": this.ocultar(); break;
            case "q": case "Q": this.iniciarQuiz(); break;
        }
    },

    // OCULTAR VISOR
    ocultar: function() {
        this.estado.pantallaVisible = false;
        this.elementos.contenedor.style.display = "none";
        document.body.style.overflow = "";
        this.elementos.video.pause();
        this.elementos.video.src = "";
    },

    // ACTUALIZAR CONTROLES
    actualizarControles: function() {
        const prev = document.getElementById("video-prev");
        const next = document.getElementById("video-next");

        if (prev) prev.disabled = this.estado.videoActual === 0;
        if (next) next.disabled = this.estado.videoActual === this.estado.videos.length - 1;

        this.actualizarContador();
    },

    actualizarContador: function() {
        if (this.elementos.contador) {
            this.elementos.contador.innerHTML = `
                <span style="color:#ff6b9d">${this.estado.videoActual + 1}</span>
                <span style="color:#ccc"> / </span>
                <span style="color:#4a90e2">${this.estado.videos.length}</span>
                ${this.estado.modoQuiz ? ' | <span style="color:#ffd700">📝 QUIZ ACTIVO</span>' : ''}
            `;
        }
    },

    // OBTENER VIDEOS DE UNA SUBCONTENEDOR
    obtenerVideosDeSubcoleccion: function(coleccionId, subcoleccionId) {
        if (this.videosDatabase[coleccionId] && 
            this.videosDatabase[coleccionId][subcoleccionId]) {
            return this.videosDatabase[coleccionId][subcoleccionId];
        }
        return [];
    },

    // OBTENER MAZOS DE UNA SUBCONTENEDOR
    obtenerMazosDeSubcoleccion: function(subcoleccionId) {
        if (this.mazosDatabase[subcoleccionId]) {
            return this.mazosDatabase[subcoleccionId];
        }
        return {};
    },

    // ============================================================================
    // SISTEMA DE QUIZ PARA VIDEOS
    // ============================================================================

    iniciarQuiz: function() {
        const mazos = this.obtenerMazosDeSubcoleccion(this.estado.subcoleccionActual);
        
        if (!mazos || Object.keys(mazos).length === 0) {
            alert('No hay mazos de palabras para esta subcolección');
            return;
        }

        // Seleccionar un mazo al azar
        const mazoKeys = Object.keys(mazos);
        const mazoSeleccionado = mazoKeys[Math.floor(Math.random() * mazoKeys.length)];
        
        this.estado.mazoActual = [...mazos[mazoSeleccionado]];
        this.estado.preguntaActual = 0;
        this.estado.respuestasCorrectas = 0;
        this.estado.respuestasIncorrectas = 0;
        this.estado.modoQuiz = true;

        this.mezclarPreguntas();
        
        // Crear pantalla de quiz
        this.crearPantallaQuiz();
        
        console.log(`📝 Quiz iniciado con mazo: ${mazoSeleccionado}`);
    },

    crearPantallaQuiz: function() {
        // Crear overlay de quiz
        const quizOverlay = document.createElement('div');
        quizOverlay.id = 'quiz-video-overlay';
        quizOverlay.style.cssText = `
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85); z-index: 10;
            display: flex; flex-direction: column; align-items: center;
            justify-content: center; color: white; padding: 20px;
        `;

        // Contenido del quiz
        quizOverlay.innerHTML = `
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #ff6b9d; margin-bottom: 10px;">📝 QUIZ DE PALABRAS</h2>
                <p style="color: #cccccc;">Completa el quiz después del video</p>
                <div style="font-size: 1.2rem; margin: 15px 0;">
                    <span style="color: #ffd700;">Pregunta: </span>
                    <span id="quiz-pregunta-num">1</span>/<span id="quiz-total-preguntas">${this.estado.mazoActual.length}</span>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; width: 80%; max-width: 500px;">
                <div id="quiz-palabra-japones" style="font-size: 3rem; font-weight: bold; color: white; margin-bottom: 20px; text-align: center;">
                    愛
                </div>
                <div id="quiz-lectura" style="font-size: 1.5rem; color: #ffa500; margin-bottom: 30px; text-align: center; min-height: 40px;">
                    
                </div>
                
                <div id="quiz-opciones" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <!-- Opciones se generan dinámicamente -->
                </div>
                
                <div id="quiz-resultado" style="font-size: 1.3rem; font-weight: bold; text-align: center; min-height: 40px; margin: 15px 0;">
                    
                </div>
                
                <button id="quiz-siguiente" onclick="videosViewer.siguientePreguntaQuiz()" 
                    style="display: none; background: #4a90e2; color: white; border: none; 
                    border-radius: 10px; padding: 12px 25px; font-size: 1.1rem; 
                    font-weight: bold; cursor: pointer; width: 100%;">
                    Continuar
                </button>
            </div>
            
            <button onclick="videosViewer.cerrarQuiz()" 
                style="margin-top: 20px; background: #ff4444; color: white; 
                border: none; border-radius: 10px; padding: 10px 20px; cursor: pointer;">
                Cancelar Quiz
            </button>
        `;

        // Agregar al contenedor
        this.elementos.contenedor.appendChild(quizOverlay);
        
        // Mostrar primera pregunta
        this.mostrarPreguntaQuiz();
    },

    mostrarPreguntaQuiz: function() {
        if (this.estado.preguntaActual >= this.estado.mazoActual.length) {
            return this.mostrarResultadosQuiz();
        }

        const pregunta = this.estado.mazoActual[this.estado.preguntaActual];
        
        // Actualizar contadores
        document.getElementById('quiz-pregunta-num').textContent = this.estado.preguntaActual + 1;
        document.getElementById('quiz-total-preguntas').textContent = this.estado.mazoActual.length;
        
        // Mostrar palabra japonesa
        document.getElementById('quiz-palabra-japones').textContent = pregunta.japones;
        document.getElementById('quiz-lectura').textContent = '';
        
        // Limpiar resultado anterior
        const resultado = document.getElementById('quiz-resultado');
        resultado.textContent = '';
        resultado.style.color = '';
        
        // Ocultar botón siguiente
        document.getElementById('quiz-siguiente').style.display = 'none';
        
        // Mezclar opciones
        const opcionesMezcladas = [...pregunta.opciones].sort(() => Math.random() - 0.5);
        
        // Generar botones de opciones
        const contenedorOpciones = document.getElementById('quiz-opciones');
        contenedorOpciones.innerHTML = opcionesMezcladas.map(opcion => `
            <button class="quiz-opcion" onclick="videosViewer.verificarRespuestaQuiz('${opcion}', '${pregunta.opciones[pregunta.respuesta]}', '${pregunta.lectura}')"
                style="background: #333333; color: white; border: none; border-radius: 10px; 
                padding: 15px; font-size: 1.1rem; cursor: pointer; transition: all 0.3s ease;">
                ${opcion}
            </button>
        `).join('');
    },

    verificarRespuestaQuiz: function(respuestaSeleccionada, respuestaCorrecta, lectura) {
        const opciones = document.querySelectorAll('.quiz-opcion');
        const resultado = document.getElementById('quiz-resultado');
        
        opciones.forEach(opcion => {
            opcion.disabled = true;
            if (opcion.textContent === respuestaCorrecta) {
                opcion.style.background = 'linear-gradient(135deg, #00ff88, #00cc6a)';
                opcion.style.color = '#1e1e1e';
            } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
                opcion.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8e8e)';
                opcion.style.color = 'white';
            }
        });
        
        // Mostrar lectura
        document.getElementById('quiz-lectura').textContent = `(${lectura})`;
        
        if (respuestaSeleccionada === respuestaCorrecta) {
            resultado.textContent = '¡Correcto! 🎉';
            resultado.style.color = '#00ff88';
            this.estado.respuestasCorrectas++;
            
            setTimeout(() => {
                this.estado.preguntaActual++;
                this.mostrarPreguntaQuiz();
            }, 1000);
        } else {
            resultado.textContent = `Incorrecto. La respuesta es: ${respuestaCorrecta}`;
            resultado.style.color = '#ff4444';
            this.estado.respuestasIncorrectas++;
            
            document.getElementById('quiz-siguiente').style.display = 'block';
        }
    },

    siguientePreguntaQuiz: function() {
        this.estado.preguntaActual++;
        this.mostrarPreguntaQuiz();
    },

    mostrarResultadosQuiz: function() {
        const porcentaje = Math.round((this.estado.respuestasCorrectas / this.estado.mazoActual.length) * 100);
        
        // Reemplazar overlay con resultados
        const quizOverlay = document.getElementById('quiz-video-overlay');
        quizOverlay.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <h2 style="color: #ff6b9d; margin-bottom: 20px;">📊 RESULTADOS DEL QUIZ</h2>
                
                <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 15px; 
                    max-width: 400px; margin: 0 auto; border: 2px solid #4a90e2;">
                    
                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 3rem; font-weight: bold; color: ${porcentaje >= 80 ? '#00ff88' : porcentaje >= 60 ? '#ffd700' : '#ff4444'};">
                            ${porcentaje}%
                        </div>
                        <div style="color: #cccccc; margin-top: 10px;">Porcentaje de aciertos</div>
                    </div>
                    
                    <div style="text-align: left; margin-bottom: 25px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <span style="color: #cccccc;">Preguntas totales:</span>
                            <span style="color: white; font-weight: bold;">${this.estado.mazoActual.length}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <span style="color: #cccccc;">Correctas:</span>
                            <span style="color: #00ff88; font-weight: bold;">${this.estado.respuestasCorrectas}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #cccccc;">Incorrectas:</span>
                            <span style="color: #ff4444; font-weight: bold;">${this.estado.respuestasIncorrectas}</span>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 20px; padding: 15px; background: rgba(255,107,157,0.1); border-radius: 10px; border: 1px solid #ff6b9d;">
                        <div style="color: #ff6b9d; font-weight: bold; margin-bottom: 5px;">Recompensa:</div>
                        <div style="color: #ffd700; font-size: 1.2rem;">
                            ${porcentaje >= 80 ? '+3 S/. 💰' : porcentaje >= 60 ? '+1 S/. 💰' : '+0.5 S/. 💰'}
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 25px;">
                    <button onclick="videosViewer.cerrarQuiz()" 
                        style="background: linear-gradient(135deg, #4a90e2, #7b68ee); color: white; 
                        border: none; border-radius: 10px; padding: 12px 30px; font-size: 1.1rem; 
                        font-weight: bold; cursor: pointer; margin: 0 10px;">
                        Volver al Video
                    </button>
                    <button onclick="videosViewer.reiniciarQuiz()" 
                        style="background: linear-gradient(135deg, #00ff88, #00cc6a); color: #1e1e1e; 
                        border: none; border-radius: 10px; padding: 12px 30px; font-size: 1.1rem; 
                        font-weight: bold; cursor: pointer; margin: 0 10px;">
                        Repetir Quiz
                    </button>
                </div>
            </div>
        `;
        
        // Dar recompensa económica
        if (porcentaje >= 80 && sistemaEconomia) {
            sistemaEconomia.agregarDinero(3, "Quiz videos H 80%+");
        } else if (porcentaje >= 60 && sistemaEconomia) {
            sistemaEconomia.agregarDinero(1, "Quiz videos H 60%+");
        } else if (sistemaEconomia) {
            sistemaEconomia.agregarDinero(0.5, "Quiz videos H completado");
        }
    },

    reiniciarQuiz: function() {
        this.estado.preguntaActual = 0;
        this.estado.respuestasCorrectas = 0;
        this.estado.respuestasIncorrectas = 0;
        this.mezclarPreguntas();
        this.mostrarPreguntaQuiz();
    },

    cerrarQuiz: function() {
        const quizOverlay = document.getElementById('quiz-video-overlay');
        if (quizOverlay) {
            quizOverlay.remove();
        }
        this.estado.modoQuiz = false;
        this.actualizarControles();
    },

    mezclarPreguntas: function() {
        for (let i = this.estado.mazoActual.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.estado.mazoActual[i], this.estado.mazoActual[j]] = [this.estado.mazoActual[j], this.estado.mazoActual[i]];
        }
    },

    // ============================================================================
    // FUNCIONES PARA AGREGAR VIDEOS DESDE LA INTERFAZ
    // ============================================================================

    agregarBotonVideoATarjetas: function() {
        // Esta función se llamará desde main.js para agregar botones a las tarjetas
        // Similar a como funciona el sistema de manga
    },

    // CARGAR Y GUARDAR ESTADO
    cargarEstado: function() {
        const data = localStorage.getItem("videosViewerState");
        if (!data) return;

        const estado = JSON.parse(data);
        this.estado.coleccionActual = estado.coleccionActual || '';
        this.estado.subcoleccionActual = estado.subcoleccionActual || '';
    },

    guardarEstado: function() {
        localStorage.setItem("videosViewerState", JSON.stringify({
            coleccionActual: this.estado.coleccionActual,
            subcoleccionActual: this.estado.subcoleccionActual
        }));
    }
};

// INICIALIZAR AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    videosViewer.inicializar();
    window.videosViewer = videosViewer;
});
