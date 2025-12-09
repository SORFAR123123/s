// ============================================================================
// VIDEOS H PARA PAPI FABRI - SISTEMA PRINCIPAL
// ============================================================================

const videosHParaFabri = {
    // Base de datos de videos H
    videos: {
        'video1': {
            id: 'video1',
            titulo: 'Anime H 1 - Tentación Escolar',
            thumbnail: 'https://pbs.twimg.com/media/G7fvMrtWcAA1Y-W?format=png&name=900x900',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view', // Reemplaza con ID real
            descripcion: 'Estudiantes traviesas después de clases',
            mazos: {
                'mazo1': { nombre: 'Vocabulario Básico', palabrasRef: 'video1_mazo1' },
                'mazo2': { nombre: 'Diálogos Clave', palabrasRef: 'video1_mazo2' },
                'mazo3': { nombre: 'Expresiones Especiales', palabrasRef: 'video1_mazo3' },
                'mazo4': { nombre: 'Contexto Escolar', palabrasRef: 'video1_mazo4' },
                'mazo5': { nombre: 'Situaciones Íntimas', palabrasRef: 'video1_mazo5' }
            }
        },
        'video2': {
            id: 'video2',
            titulo: 'Anime H 2 - Hermana Mayor',
            thumbnail: 'https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view?usp=sharing',
            descripcion: 'Hermana mayor cuida de su hermanito',
            mazos: {
                'mazo1': { nombre: 'Familia y Parentesco', palabrasRef: 'video2_mazo1' },
                'mazo2': { nombre: 'Cuidados Diarios', palabrasRef: 'video2_mazo2' },
                'mazo3': { nombre: 'Confesiones', palabrasRef: 'video2_mazo3' },
                'mazo4': { nombre: 'Momento Familiar', palabrasRef: 'video2_mazo4' },
                'mazo5': { nombre: 'Intimidad Sorpresa', palabrasRef: 'video2_mazo5' }
            }
        },
        'video3': {
            id: 'video3',
            titulo: 'Anime H 3 - Profesora Privada',
            thumbnail: 'https://via.placeholder.com/300x200/6bff9b/000000?text=Video+H+3',
            videoDrive: 'https://drive.google.com/file/d/VIDEO_ID_3/view',
            descripcion: 'Clases particulares muy especiales',
            mazos: {
                'mazo1': { nombre: 'Vocabulario Académico', palabrasRef: 'video3_mazo1' },
                'mazo2': { nombre: 'Lecciones Prácticas', palabrasRef: 'video3_mazo2' },
                'mazo3': { nombre: 'Evaluación Personal', palabrasRef: 'video3_mazo3' },
                'mazo4': { nombre: 'Tutoría Especial', palabrasRef: 'video3_mazo4' },
                'mazo5': { nombre: 'Examen Final', palabrasRef: 'video3_mazo5' }
            }
        },
        'video4': {
            id: 'video4',
            titulo: 'Anime H 4 - Vecina Tentadora',
            thumbnail: 'https://via.placeholder.com/300x200/ff9b6b/000000?text=Video+H+4',
            videoDrive: 'https://drive.google.com/file/d/VIDEO_ID_4/view',
            descripcion: 'La vecina de alambre de púa',
            mazos: {
                'mazo1': { nombre: 'Vida en el Barrio', palabrasRef: 'video4_mazo1' },
                'mazo2': { nombre: 'Visitas Inesperadas', palabrasRef: 'video4_mazo2' },
                'mazo3': { nombre: 'Préstamos y Favores', palabrasRef: 'video4_mazo3' },
                'mazo4': { nombre: 'Secretos Vecinales', palabrasRef: 'video4_mazo4' },
                'mazo5': { nombre: 'Noche de Confesiones', palabrasRef: 'video4_mazo5' }
            }
        },
        'video5': {
            id: 'video5',
            titulo: 'Anime H 5 - Idol Secreta',
            thumbnail: 'https://via.placeholder.com/300x200/6b9bff/ffffff?text=Video+H+5',
            videoDrive: 'https://drive.google.com/file/d/VIDEO_ID_5/view',
            descripcion: 'La doble vida de una idol',
            mazos: {
                'mazo1': { nombre: 'Mundo del Espectáculo', palabrasRef: 'video5_mazo1' },
                'mazo2': { nombre: 'Fans y Admiradores', palabrasRef: 'video5_mazo2' },
                'mazo3': { nombre: 'Vida Pública vs Privada', palabrasRef: 'video5_mazo3' },
                'mazo4': { nombre: 'Encuentro Secreto', palabrasRef: 'video5_mazo4' },
                'mazo5': { nombre: 'Confesión en el Escenario', palabrasRef: 'video5_mazo5' }
            }
        }
    },

    // Estado actual
    estado: {
        videoActual: null,
        mazosActuales: null,
        pantallaActual: 'seleccion' // 'seleccion' o 'video'
    },

    // ============================================================================
    // FUNCIONES PRINCIPALES
    // ============================================================================

    // Inicializar sistema
    inicializar: function() {
        console.log("🎬 Sistema Videos H para Papi Fabri inicializado");
        // Cargar desde localStorage si existe
        const datos = this.cargarDatos();
        if (datos) {
            this.estado = datos;
        }
    },

    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('videosHParaFabri');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos videos H:", e);
            return null;
        }
    },

    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('videosHParaFabri', JSON.stringify(this.estado));
            return true;
        } catch (e) {
            console.error("Error guardando datos videos H:", e);
            return false;
        }
    },

    // ============================================================================
    // NAVEGACIÓN PRINCIPAL
    // ============================================================================

    // Función para iniciar desde el menú principal
    iniciarDesdeMenu: function() {
        console.log("🚀 Iniciando Videos H para Papi Fabri");
        this.mostrarPantallaSeleccion();
        cambiarPantalla('pantalla-videos-h-seleccion');
    },

    // Mostrar pantalla de selección (5 thumbnails)
    mostrarPantallaSeleccion: function() {
        this.estado.pantallaActual = 'seleccion';
        this.estado.videoActual = null;
        this.guardarDatos();

        // Crear/actualizar pantalla si no existe
        this.crearPantallaSeleccion();

        // Cargar thumbnails
        this.cargarThumbnails();
    },

    // Crear pantalla de selección en el DOM
    crearPantallaSeleccion: function() {
        // Verificar si ya existe la pantalla
        let pantalla = document.getElementById('pantalla-videos-h-seleccion');
        
        if (!pantalla) {
            pantalla = document.createElement('div');
            pantalla.id = 'pantalla-videos-h-seleccion';
            pantalla.className = 'pantalla';
            pantalla.innerHTML = `
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 Videos H para Papi Fabri</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 Videos H para Papi Fabri</h1>
                    <p class="subtitulo">Selecciona un video para verlo o estudiar sus mazos</p>
                    
                    <div class="contenedor-videos-h" id="contenedor-videos-h">
                        <!-- Los thumbnails se cargarán aquí -->
                    </div>
                    
                    <div class="info-videos-h">
                        <p>💖 Cada video tiene 5 mazos de vocabulario especializado</p>
                        <p>🎯 Click en un video para acceder a sus mazos y ver el video</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(pantalla);
        }
    },

    // Cargar los 5 thumbnails
    cargarThumbnails: function() {
        const contenedor = document.getElementById('contenedor-videos-h');
        if (!contenedor) return;

        contenedor.innerHTML = '';

        Object.values(this.videos).forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.className = 'video-h-card';
            videoDiv.onclick = () => this.seleccionarVideo(video.id);
            
            videoDiv.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.titulo}" class="video-h-thumbnail">
                <div class="video-h-overlay">
                    <div class="video-h-titulo">${video.titulo}</div>
                    <div class="video-h-descripcion">${video.descripcion}</div>
                    <div class="video-h-info">5 mazos disponibles</div>
                </div>
            `;
            
            contenedor.appendChild(videoDiv);
        });
    },

    // Seleccionar un video (al hacer click en thumbnail)
    seleccionarVideo: function(videoId) {
        const video = this.videos[videoId];
        if (!video) {
            console.error("Video no encontrado:", videoId);
            return;
        }

        console.log("🎬 Video seleccionado:", video.titulo);
        this.estado.videoActual = videoId;
        this.estado.mazosActuales = video.mazos;
        this.estado.pantallaActual = 'video';
        this.guardarDatos();

        // Mostrar pantalla específica del video
        this.mostrarPantallaVideo();
    },

    // Mostrar pantalla específica del video seleccionado
    mostrarPantallaVideo: function() {
        const video = this.videos[this.estado.videoActual];
        if (!video) {
            console.error("No hay video actual seleccionado");
            this.mostrarPantallaSeleccion();
            return;
        }

        // Crear/actualizar pantalla si no existe
        this.crearPantallaVideo();

        // Actualizar contenido
        document.getElementById('titulo-video-h').textContent = video.titulo;
        document.getElementById('descripcion-video-h').textContent = video.descripcion;
        
        // Actualizar botón de ver video con enlace real
        const botonVerVideo = document.getElementById('boton-ver-video-h');
        if (botonVerVideo) {
            botonVerVideo.onclick = () => this.verVideoCompleto(video.videoDrive);
        }

        // Cargar mazos del video
        this.cargarMazosVideo();
        
        // Cambiar a esta pantalla
        cambiarPantalla('pantalla-video-h-especifico');
    },

    // Crear pantalla específica del video en el DOM
    crearPantallaVideo: function() {
        let pantalla = document.getElementById('pantalla-video-h-especifico');
        
        if (!pantalla) {
            pantalla = document.createElement('div');
            pantalla.id = 'pantalla-video-h-especifico';
            pantalla.className = 'pantalla';
            pantalla.innerHTML = `
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-video-h">Video H</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="videosHParaFabri.volverASeleccion()">← Volver a Videos</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <!-- BOTÓN GRANDE PARA VER VIDEO -->
                    <div class="seccion-ver-video-h">
                        <button class="boton-ver-video-grande" id="boton-ver-video-h">
                            🎬 VER VIDEO COMPLETO
                        </button>
                        <p class="info-video-h" id="descripcion-video-h">Descripción del video</p>
                    </div>
                    
                    <h2>📚 Mazos de este Video</h2>
                    <p class="subtitulo">Estudia el vocabulario específico de este video</p>
                    
                    <div class="contenedor-mazos-video-h" id="contenedor-mazos-video-h">
                        <!-- Los mazos se cargarán aquí -->
                    </div>
                    
                    <div class="info-mazos-video-h">
                        <p>🎯 Cada mazo contiene 10 palabras relacionadas al video</p>
                        <p>💕 Completa al 100% para desbloquear recompensas especiales</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(pantalla);
        }
    },

    // Cargar mazos del video actual
    cargarMazosVideo: function() {
        const contenedor = document.getElementById('contenedor-mazos-video-h');
        if (!contenedor) return;

        const video = this.videos[this.estado.videoActual];
        if (!video || !video.mazos) return;

        contenedor.innerHTML = '';

        Object.entries(video.mazos).forEach(([mazoId, mazo]) => {
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-video-h-card';
            mazoDiv.onclick = () => this.cargarMazoVideo(mazoId, mazo.palabrasRef);
            
            mazoDiv.innerHTML = `
                <div class="mazo-video-h-icono">📖</div>
                <div class="mazo-video-h-contenido">
                    <div class="mazo-video-h-nombre">${mazo.nombre}</div>
                    <div class="mazo-video-h-info">10 palabras especializadas</div>
                </div>
                <div class="mazo-video-h-flecha">→</div>
            `;
            
            contenedor.appendChild(mazoDiv);
        });
    },

    // Cargar un mazo específico del video (iniciar quiz)
    cargarMazoVideo: function(mazoId, palabrasRef) {
        console.log("📚 Cargando mazo Videos H:", mazoId, "ref:", palabrasRef);
        
        // Obtener palabras del vocabulario específico
        let palabras = [];
        
        if (typeof vocabularioVideosH !== 'undefined' && 
            vocabularioVideosH[palabrasRef]) {
            palabras = vocabularioVideosH[palabrasRef];
            console.log(`✅ Encontradas ${palabras.length} palabras para ${palabrasRef}`);
        } else {
            console.warn("⚠️ No se encontró vocabulario para:", palabrasRef);
            console.log("🔍 Claves disponibles:", Object.keys(vocabularioVideosH || {}));
            // Usar palabras genéricas como fallback
            palabras = generarPalabrasVideoH(10);
        }

        // Configurar el sistema de quiz principal
        mazoActual = [...palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        // Crear estructura del quiz si no existe
        crearEstructuraQuizVideoH();
        
        // Cambiar título para identificar que es práctica especial
        const tituloElement = document.getElementById('contador-preguntas-video-h');
        if (tituloElement) {
            const video = this.videos[this.estado.videoActual];
            tituloElement.textContent = `VIDEO H: ${video.titulo} - Mazo ${mazoId}`;
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantallaVideoH('pantalla-quiz-video-h');
        
        // Usar nuestra función especial para Videos H
        mostrarPreguntaVideoH();
    },

    // Ver video completo en Google Drive
    verVideoCompleto: function(urlDrive) {
        console.log("🎥 Abriendo video:", urlDrive);
        
        // Abrir en nueva pestaña
        window.open(urlDrive, '_blank');
        
        // Opcional: Mostrar mensaje
        this.mostrarMensaje("🎬 Video abierto en nueva pestaña. ¡Disfruta!");
    },

    // Volver a la pantalla de selección
    volverASeleccion: function() {
        this.mostrarPantallaSeleccion();
    },

    // ============================================================================
    // FUNCIONES AUXILIARES
    // ============================================================================

    // Mostrar mensaje temporal
    mostrarMensaje: function(mensaje) {
        // Crear notificación temporal
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b9d, #ff2e63);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        notificacion.textContent = mensaje;
        
        document.body.appendChild(notificacion);
        
        setTimeout(() => {
            notificacion.remove();
        }, 3000);
    },

    // ============================================================================
    // FUNCIONES DE TESTING
    // ============================================================================

    // Forzar selección de video (testing)
    testSeleccionarVideo: function(videoId) {
        if (this.videos[videoId]) {
            this.seleccionarVideo(videoId);
            return true;
        }
        return false;
    },

    // Ver todos los videos disponibles
    verTodosVideos: function() {
        console.log("🎬 Videos H disponibles:");
        Object.values(this.videos).forEach(video => {
            console.log(`- ${video.titulo}: ${video.videoDrive}`);
        });
    }
};

// ============================================================================
// FUNCIONES AUXILIARES PARA VIDEOS H
// ============================================================================

// Función de respaldo para generar palabras genéricas
function generarPalabrasVideoH(cantidad) {
    const palabras = [];
    const palabrasBase = [
        { japones: '言葉', lectura: 'kotoba', opciones: ['Palabra', 'Lenguaje', 'Expresión', 'Término'], respuesta: 0 },
        { japones: '時間', lectura: 'jikan', opciones: ['Tiempo', 'Hora', 'Momento', 'Duración'], respuesta: 0 },
        { japones: '場所', lectura: 'basho', opciones: ['Lugar', 'Espacio', 'Sitio', 'Ubicación'], respuesta: 0 },
        { japones: '人', lectura: 'hito', opciones: ['Persona', 'Gente', 'Humano', 'Individuo'], respuesta: 0 },
        { japones: '物', lectura: 'mono', opciones: ['Cosa', 'Objeto', 'Artículo', 'Elemento'], respuesta: 0 }
    ];
    
    for (let i = 0; i < cantidad; i++) {
        palabras.push({...palabrasBase[i % palabrasBase.length]});
    }
    return palabras;
}

// ============================================================================
// FUNCIÓN ESPECIAL PARA VIDEOS H - REEMPLAZO DE mostrarPregunta
// ============================================================================

function mostrarPreguntaVideoH() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        // CORRECCIÓN: Asegurar que los elementos existen
        const numPreguntaElem = document.getElementById('numero-pregunta-video-h');
        const totalPreguntasElem = document.getElementById('total-preguntas-video-h');
        const palabraJaponesElem = document.getElementById('palabra-japones-video-h');
        const lecturaElem = document.getElementById('lectura-video-h');
        const resultadoElem = document.getElementById('resultado-video-h');
        const botonSiguienteElem = document.getElementById('boton-siguiente-video-h');
        const contenedorOpcionesElem = document.getElementById('contenedor-opciones-video-h');
        
        if (!numPreguntaElem || !palabraJaponesElem || !contenedorOpcionesElem) {
            console.error("❌ Elementos del quiz no encontrados. Creando estructura...");
            crearEstructuraQuizVideoH();
            // Volver a obtener los elementos después de crearlos
            return mostrarPreguntaVideoH();
        }
        
        // Actualizar elementos
        numPreguntaElem.textContent = preguntaActual + 1;
        if (totalPreguntasElem) {
            totalPreguntasElem.textContent = mazoActual.length;
        }
        palabraJaponesElem.textContent = pregunta.japones;
        if (lecturaElem) lecturaElem.textContent = '';
        if (resultadoElem) {
            resultadoElem.textContent = '';
            resultadoElem.className = 'resultado';
        }
        if (botonSiguienteElem) {
            botonSiguienteElem.style.display = 'none';
        }
        
        // Limpiar opciones anteriores
        contenedorOpcionesElem.innerHTML = '';
        
        // Mezclar opciones
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        // Crear botones de opciones
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuestaVideoH(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
            contenedorOpcionesElem.appendChild(botonOpcion);
        });
    } else {
        // Mostrar resultados finales
        mostrarResultadosVideoH();
    }
}

// ============================================================================
// FUNCIÓN PARA VERIFICAR RESPUESTAS EN VIDEOS H
// ============================================================================

function verificarRespuestaVideoH(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-video-h .opcion');
    const resultado = document.getElementById('resultado-video-h');
    const lecturaElem = document.getElementById('lectura-video-h');
    const palabraActual = document.getElementById('palabra-japones-video-h').textContent;
    
    // Deshabilitar botones
    opcionesDOM.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Marcar respuestas correctas e incorrectas
    opcionesDOM.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar pronunciación
    if (lecturaElem) {
        lecturaElem.textContent = `(${lectura})`;
    }
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        if (resultado) {
            resultado.textContent = '¡Correcto!';
            resultado.className = 'resultado correcto';
        }
        respuestasCorrectas++;
        
        // Navegación automática para respuestas correctas
        setTimeout(() => {
            siguientePreguntaVideoH();
        }, 1000);
        
    } else {
        if (resultado) {
            resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
            resultado.className = 'resultado incorrecto';
        }
        respuestasIncorrectas++;
        
        // Registrar palabra fallada
        if (typeof sistemaPalabrasFalladas !== 'undefined') {
            sistemaPalabrasFalladas.registrarPalabraFallada(
                palabraActual,
                respuestaSeleccionada,
                respuestaCorrecta,
                lectura,
                opciones
            );
        }
        
        // Mostrar botón "Continuar"
        const botonSiguienteElem = document.getElementById('boton-siguiente-video-h');
        if (botonSiguienteElem) {
            botonSiguienteElem.style.display = 'block';
        }
    }
}

// ============================================================================
// FUNCIONES AUXILIARES PARA VIDEOS H
// ============================================================================

function siguientePreguntaVideoH() {
    preguntaActual++;
    mostrarPreguntaVideoH();
}

function crearEstructuraQuizVideoH() {
    console.log("🛠️ Creando estructura del quiz para Videos H...");
    
    // Verificar si la pantalla de quiz existe
    let pantallaQuiz = document.getElementById('pantalla-quiz-video-h');
    if (!pantallaQuiz) {
        // Crear pantalla básica del quiz
        pantallaQuiz = document.createElement('div');
        pantallaQuiz.id = 'pantalla-quiz-video-h';
        pantallaQuiz.className = 'pantalla';
        pantallaQuiz.innerHTML = `
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador" id="contador-preguntas-video-h">
                        PRÁCTICA VIDEOS H: <span id="numero-pregunta-video-h">1</span>/<span id="total-preguntas-video-h">10</span>
                    </div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="videosHParaFabri.volverASeleccion()">← Volver</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                    </div>
                </div>
                
                <div class="quiz-container" style="max-width: 600px; margin: 0 auto;">
                    <div class="palabra-central" id="palabra-japones-video-h" style="font-size: 48px; text-align: center; margin: 30px 0;"></div>
                    <div class="lectura" id="lectura-video-h" style="text-align: center; font-size: 20px; color: #666; margin-bottom: 30px;"></div>
                    
                    <div class="contenedor-opciones" id="contenedor-opciones-video-h" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 30px 0;">
                        <!-- Las opciones se generarán aquí -->
                    </div>
                    
                    <div class="resultado" id="resultado-video-h" style="text-align: center; font-size: 24px; margin: 20px 0; min-height: 40px;"></div>
                    
                    <div class="botones-quiz" style="text-align: center; margin-top: 30px;">
                        <button class="boton-siguiente" id="boton-siguiente-video-h" onclick="siguientePreguntaVideoH()" style="display: none; padding: 15px 30px; font-size: 18px;">
                            Continuar →
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(pantallaQuiz);
        console.log("✅ Estructura del quiz para Videos H creada");
    }
}

function mostrarResultadosVideoH() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // Crear pantalla de resultados
    let pantallaResultados = document.getElementById('pantalla-resultados-video-h');
    if (!pantallaResultados) {
        pantallaResultados = document.createElement('div');
        pantallaResultados.id = 'pantalla-resultados-video-h';
        pantallaResultados.className = 'pantalla';
        document.body.appendChild(pantallaResultados);
    }
    
    pantallaResultados.innerHTML = `
        <div class="contenedor">
            <div class="barra-superior">
                <div class="contador">📊 RESULTADOS VIDEOS H</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="videosHParaFabri.volverASeleccion()">← Volver a Videos</button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                </div>
            </div>
            
            <div style="text-align: center; padding: 50px 20px;">
                <h1 style="color: #ff6b9d; margin-bottom: 30px;">🎬 Quiz Completado!</h1>
                
                <div style="background: rgba(255, 107, 157, 0.1); border-radius: 20px; padding: 30px; max-width: 500px; margin: 0 auto;">
                    <div style="font-size: 24px; margin-bottom: 20px;">📊 Tu puntuación:</div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                        <div style="text-align: center;">
                            <div style="font-size: 36px; color: #00ff88;">${respuestasCorrectas}</div>
                            <div style="color: #888;">Correctas</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 36px; color: #ff4444;">${respuestasIncorrectas}</div>
                            <div style="color: #888;">Incorrectas</div>
                        </div>
                    </div>
                    
                    <div style="font-size: 48px; color: ${porcentaje >= 80 ? '#00ff88' : porcentaje >= 60 ? '#ff9800' : '#ff4444'}; margin: 30px 0;">
                        ${porcentaje}%
                    </div>
                    
                    <div style="margin: 30px 0;">
                        ${porcentaje === 100 ? '🎉 ¡Perfecto! ¡Eres un experto!' : 
                          porcentaje >= 80 ? '👍 ¡Excelente trabajo!' : 
                          porcentaje >= 60 ? '😊 Buen trabajo, sigue practicando' : 
                          '💪 Sigue estudiando, mejorarás'}
                    </div>
                </div>
                
                <div style="margin-top: 40px; display: flex; gap: 15px; justify-content: center;">
                    <button class="boton-principal" onclick="repetirQuizVideoH()" style="padding: 15px 30px;">
                        🔄 Repetir Quiz
                    </button>
                    <button class="boton-secundario" onclick="videosHParaFabri.volverASeleccion()" style="padding: 15px 30px;">
                        ← Volver a Videos
                    </button>
                </div>
            </div>
        </div>
    `;
    
    cambiarPantallaVideoH('pantalla-resultados-video-h');
}

function repetirQuizVideoH() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Mezclar preguntas nuevamente
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
    
    cambiarPantallaVideoH('pantalla-quiz-video-h');
    mostrarPreguntaVideoH();
}

function cambiarPantallaVideoH(idPantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Mostrar la pantalla solicitada
    const pantalla = document.getElementById(idPantalla);
    if (pantalla) {
        pantalla.classList.add('activa');
    } else {
        console.error("❌ Pantalla no encontrada:", idPantalla);
    }
}

// ============================================================================
// FUNCIÓN GLOBAL PARA INICIAR DESDE EL MENÚ
// ============================================================================

function iniciarVideosHParaPapiFabri() {
    if (typeof videosHParaFabri !== 'undefined') {
        videosHParaFabri.iniciarDesdeMenu();
    } else {
        console.error("❌ Sistema Videos H no cargado");
        mostrarNotificacionVideoH("Error: Sistema Videos H no disponible");
    }
}

function mostrarNotificacionVideoH(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #ff2e63);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// ============================================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

// Inicializar cuando se carga la página
if (typeof videosHParaFabri !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            videosHParaFabri.inicializar();
            console.log("✅ Sistema Videos H listo");
        }, 500);
    });
}

// ============================================================================
// FUNCIONES DE TESTING DESDE CONSOLA
// ============================================================================

// Probar sistema Videos H
window.testVideosH = function(videoId = 'video1', mazoId = 'mazo1') {
    if (typeof videosHParaFabri !== 'undefined') {
        console.log("🧪 Testing Videos H...");
        videosHParaFabri.iniciarDesdeMenu();
        
        // Seleccionar video automáticamente después de un delay
        setTimeout(() => {
            if (videosHParaFabri.videos[videoId]) {
                videosHParaFabri.seleccionarVideo(videoId);
                
                // Seleccionar mazo después de otro delay
                setTimeout(() => {
                    const video = videosHParaFabri.videos[videoId];
                    if (video && video.mazos[mazoId]) {
                        const mazo = video.mazos[mazoId];
                        videosHParaFabri.cargarMazoVideo(mazoId, mazo.palabrasRef);
                    }
                }, 1000);
            }
        }, 500);
    }
};

// Ver estado del sistema Videos H
window.verEstadoVideosH = function() {
    console.log("📊 Estado Videos H:");
    console.log("- Video actual:", videosHParaFabri.estado.videoActual);
    console.log("- Pantalla actual:", videosHParaFabri.estado.pantallaActual);
    console.log("- Videos disponibles:", Object.keys(videosHParaFabri.videos).length);
    return videosHParaFabri.estado;
};
