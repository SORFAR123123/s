// ============================================================================
// SISTEMA DE VIDEOS H - LÓGICA PRINCIPAL
// ============================================================================

const sistemaVideosH = {
    // Estado actual
    estado: {
        coleccionActual: '',
        mazoActual: [],
        preguntaActual: 0,
        respuestasCorrectas: 0,
        respuestasIncorrectas: 0,
        modoVideo: false,
        pantallaActual: ''
    },
    
    // Elementos DOM
    elementos: {
        pantallaColecciones: null,
        pantallaColeccionDetalle: null,
        pantallaVideo: null,
        pantallaQuiz: null,
        pantallaResultados: null
    },
    
    // Inicializar sistema
    inicializar: function() {
        console.log("🎬 Inicializando sistema de Videos H...");
        this.crearPantallasHTML();
        this.cargarEstado();
        this.configurarEventos();
        
        console.log("✅ Sistema de Videos H inicializado");
    },
    
    // Crear pantallas HTML dinámicamente
    crearPantallasHTML: function() {
        // Pantalla de colecciones
        this.crearPantallaColecciones();
        
        // Pantalla de detalle de colección
        this.crearPantallaColeccionDetalle();
        
        // Pantalla de video
        this.crearPantallaVideo();
        
        // Pantalla de quiz (se reutiliza la existente)
        // Pantalla de resultados (se reutiliza la existente)
    },
    
    crearPantallaColecciones: function() {
        const html = `
        <div id="pantalla-videos-h-colecciones" class="pantalla">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador">🎬 VIDEOS H PARA PAPI FABRI</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <h1>🎬 Videos H para Papi Fabri</h1>
                <p class="subtitulo">Selecciona una colección para ver el video y practicar</p>
                
                <div class="contenedor-tarjetas" id="contenedor-colecciones-videos-h">
                    <!-- Las colecciones se cargarán dinámicamente -->
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', html);
        this.elementos.pantallaColecciones = document.getElementById('pantalla-videos-h-colecciones');
    },
    
    crearPantallaColeccionDetalle: function() {
        const html = `
        <div id="pantalla-videos-h-detalle" class="pantalla">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador" id="titulo-coleccion-video">Colección</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="sistemaVideosH.volverAColecciones()">← Volver a Colecciones</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <!-- SECCIÓN DE VIDEO -->
                <div class="video-coleccion-container">
                    <h2 id="nombre-coleccion-video">Nombre Colección</h2>
                    <p class="descripcion-coleccion" id="descripcion-coleccion-video">Descripción de la colección</p>
                    
                    <div class="video-grande-container">
                        <button class="boton-ver-video" onclick="sistemaVideosH.verVideoColeccion()">
                            🎬 VER VIDEO COMPLETO
                            <small>Haz clic para reproducir</small>
                        </button>
                    </div>
                    
                    <div class="info-coleccion">
                        <div class="info-item">
                            <span class="info-label">📊 Mazos disponibles:</span>
                            <span class="info-valor" id="total-mazos-coleccion">5</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">📝 Palabras por mazo:</span>
                            <span class="info-valor" id="palabras-por-mazo">10</span>
                        </div>
                    </div>
                </div>
                
                <!-- SECCIÓN DE MAZOS -->
                <h3 class="subtitulo-mazos">🎯 Mazos de Práctica</h3>
                <p class="descripcion-mazos">Practica el vocabulario relacionado con esta colección</p>
                
                <div class="contenedor-mazos-videos-h" id="contenedor-mazos-videos-h">
                    <!-- Los mazos se cargarán dinámicamente -->
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', html);
        this.elementos.pantallaColeccionDetalle = document.getElementById('pantalla-videos-h-detalle');
        
        // Añadir estilos específicos
        this.agregarEstilosCSS();
    },
    
    crearPantallaVideo: function() {
        const html = `
        <div id="pantalla-video-h-reproductor" class="pantalla">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador" id="titulo-video-h">Reproduciendo Video</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="sistemaVideosH.volverADetalleColeccion()">← Volver a Colección</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <div class="contenido-video-h">
                    <h2 id="nombre-video-h">Video de Colección</h2>
                    
                    <div class="reproductor-video-container">
                        <iframe id="iframe-video-h" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div class="controles-video-h">
                        <button class="boton-principal" onclick="sistemaVideosH.volverADetalleColeccion()">
                            ✅ Cerrar Video y Volver
                        </button>
                        <button class="boton-secundario" onclick="sistemaVideosH.abrirEnNuevaPestana()">
                            🔗 Abrir en Nueva Pestaña
                        </button>
                    </div>
                    
                    <div class="info-video-h">
                        <p>💡 <strong>Consejo:</strong> Estudia el vocabulario después de ver el video para mejor comprensión.</p>
                    </div>
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', html);
        this.elementos.pantallaVideo = document.getElementById('pantalla-video-h-reproductor');
    },
    
    agregarEstilosCSS: function() {
        const estilos = `
        <style>
        /* Estilos específicos para Videos H */
        .video-coleccion-container {
            background: linear-gradient(135deg, #2d1b4e, #4a2b8c);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            border: 3px solid #ff6b9d;
            box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        }
        
        .video-grande-container {
            background: rgba(0, 0, 0, 0.5);
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            margin: 25px 0;
            border: 2px dashed #4a90e2;
        }
        
        .boton-ver-video {
            background: linear-gradient(135deg, #ff6b9d, #ff4081);
            color: white;
            border: none;
            border-radius: 15px;
            padding: 25px 40px;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
            border: 3px solid #ffd700;
        }
        
        .boton-ver-video:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(255, 107, 157, 0.6);
            background: linear-gradient(135deg, #ff4081, #ff6b9d);
        }
        
        .boton-ver-video small {
            font-size: 1rem;
            color: #ffd700;
            font-weight: normal;
        }
        
        .info-coleccion {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid rgba(255, 107, 157, 0.3);
        }
        
        .info-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 12px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #4a90e2;
        }
        
        .info-label {
            color: #cccccc;
            font-size: 0.9rem;
            display: block;
            margin-bottom: 5px;
        }
        
        .info-valor {
            color: #ffd700;
            font-size: 1.3rem;
            font-weight: bold;
        }
        
        .subtitulo-mazos {
            color: #ff6b9d;
            text-align: center;
            margin: 30px 0 15px;
            font-size: 1.5rem;
        }
        
        .descripcion-mazos {
            color: #cccccc;
            text-align: center;
            margin-bottom: 25px;
            font-size: 1.1rem;
        }
        
        .contenedor-mazos-videos-h {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .mazo-card-video-h {
            background: linear-gradient(135deg, #9c27b0, #673ab7);
            border-radius: 20px;
            padding: 25px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(156, 39, 176, 0.3);
            border: 3px solid #7b1fa2;
        }
        
        .mazo-card-video-h:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(156, 39, 176, 0.5);
        }
        
        .mazo-imagen-video-h {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid white;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #ff6b9d, #ff4081);
            padding: 10px;
        }
        
        .mazo-texto-video-h {
            font-size: 1.2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 10px;
        }
        
        .mazo-info-video-h {
            font-size: 0.9rem;
            color: #e0e0e0;
        }
        
        /* Pantalla de video */
        .reproductor-video-container {
            background: #000;
            border-radius: 15px;
            padding: 10px;
            margin: 20px 0;
            border: 3px solid #ff6b9d;
            overflow: hidden;
        }
        
        #iframe-video-h {
            width: 100%;
            height: 500px;
            border-radius: 10px;
        }
        
        .controles-video-h {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin: 25px 0;
        }
        
        .info-video-h {
            background: rgba(255, 107, 157, 0.1);
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            color: #ffd700;
            font-size: 1rem;
            border: 1px solid #ff6b9d;
        }
        
        @media (max-width: 768px) {
            .boton-ver-video {
                padding: 20px;
                font-size: 1.2rem;
            }
            
            #iframe-video-h {
                height: 300px;
            }
            
            .contenedor-mazos-videos-h {
                grid-template-columns: 1fr;
            }
        }
        </style>`;
        
        document.head.insertAdjacentHTML('beforeend', estilos);
    },
    
    configurarEventos: function() {
        // Los eventos se configuran en los onclick de los botones
    },
    
    cargarEstado: function() {
        try {
            const datos = localStorage.getItem('sistemaVideosH');
            if (datos) {
                const estado = JSON.parse(datos);
                this.estado = { ...this.estado, ...estado };
            }
        } catch (e) {
            console.error("Error cargando estado Videos H:", e);
        }
    },
    
    guardarEstado: function() {
        try {
            localStorage.setItem('sistemaVideosH', JSON.stringify(this.estado));
        } catch (e) {
            console.error("Error guardando estado Videos H:", e);
        }
    },
    
    // ============================================================================
    // FUNCIONES DE NAVEGACIÓN
    // ============================================================================
    
    mostrarColecciones: function() {
        this.ocultarTodasPantallas();
        this.elementos.pantallaColecciones.classList.add('activa');
        this.cargarColecciones();
        this.estado.pantallaActual = 'colecciones';
    },
    
    cargarColecciones: function() {
        const contenedor = document.getElementById('contenedor-colecciones-videos-h');
        if (!contenedor) return;
        
        contenedor.innerHTML = '';
        const colecciones = obtenerTodasColecciones();
        
        colecciones.forEach(coleccion => {
            const card = document.createElement('div');
            card.className = 'lastsummer-card';
            card.onclick = () => this.cargarColeccionDetalle(coleccion.id);
            
            card.innerHTML = `
                <img src="${coleccion.imagen}" alt="${coleccion.nombre}" class="lastsummer-imagen">
                <div class="lastsummer-texto">${coleccion.nombre}</div>
                <div class="lastsummer-info">${coleccion.descripcion}</div>
                <div class="lastsummer-info">${coleccion.mazos} mazos disponibles</div>
            `;
            
            contenedor.appendChild(card);
        });
    },
    
    cargarColeccionDetalle: function(coleccionId) {
        const coleccion = obtenerColeccion(coleccionId);
        if (!coleccion) {
            console.error("Colección no encontrada:", coleccionId);
            return;
        }
        
        this.estado.coleccionActual = coleccionId;
        this.guardarEstado();
        
        // Actualizar interfaz
        document.getElementById('titulo-coleccion-video').textContent = coleccion.nombre;
        document.getElementById('nombre-coleccion-video').textContent = coleccion.nombre;
        document.getElementById('descripcion-coleccion-video').textContent = coleccion.descripcion;
        document.getElementById('total-mazos-coleccion').textContent = coleccion.mazos;
        document.getElementById('palabras-por-mazo').textContent = coleccion.palabrasPorMazo;
        
        // Cargar mazos
        this.cargarMazosColeccion(coleccionId);
        
        // Mostrar pantalla
        this.ocultarTodasPantallas();
        this.elementos.pantallaColeccionDetalle.classList.add('activa');
        this.estado.pantallaActual = 'detalle';
    },
    
    cargarMazosColeccion: function(coleccionId) {
        const contenedor = document.getElementById('contenedor-mazos-videos-h');
        if (!contenedor) return;
        
        contenedor.innerHTML = '';
        const mazos = obtenerTodosMazosColeccion(coleccionId);
        
        // Si no hay mazos específicos, generar 5 genéricos
        const totalMazos = mazos.length > 0 ? mazos.length : 5;
        
        for (let i = 1; i <= totalMazos; i++) {
            const mazoId = `mazo${i}`;
            const mazo = mazos[i-1] || {
                id: mazoId,
                nombre: `Mazo ${i}`,
                palabras: obtenerMazoColeccion(coleccionId, mazoId) || generarPalabrasGenericas(10)
            };
            
            const card = document.createElement('div');
            card.className = 'mazo-card-video-h';
            card.onclick = () => this.cargarMazo(mazoId);
            
            card.innerHTML = `
                <div class="mazo-imagen-video-h">🎯</div>
                <div class="mazo-texto-video-h">${mazo.nombre}</div>
                <div class="mazo-info-video-h">${mazo.palabras.length} palabras</div>
                <div class="mazo-info-video-h">Vocabulario especializado</div>
            `;
            
            contenedor.appendChild(card);
        }
    },
    
    cargarMazo: function(mazoId) {
    const coleccionId = this.estado.coleccionActual;
    const palabras = obtenerMazoColeccion(coleccionId, mazoId);
    
    if (!palabras || palabras.length === 0) {
        console.error("No se pudieron cargar las palabras del mazo");
        return;
    }
    
    // GUARDAR EN VARIABLES GLOBALES DEL SISTEMA PRINCIPAL
    window.mazoActual = [...palabras];
    window.preguntaActual = 0;
    window.respuestasCorrectas = 0;
    window.respuestasIncorrectas = 0;
    
    // Mezclar preguntas
    for (let i = window.mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [window.mazoActual[i], window.mazoActual[j]] = [window.mazoActual[j], window.mazoActual[i]];
    }
    
    console.log("🎬 Mazo de Videos H cargado:", window.mazoActual.length, "palabras");
    
    // INTEGRACIÓN 1: Usar cambiarPantalla del sistema principal
    if (typeof cambiarPantalla === 'function') {
        cambiarPantalla('pantalla-quiz');
    } else {
        // Fallback manual
        document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
        document.getElementById('pantalla-quiz').classList.add('activa');
    }
    
    // INTEGRACIÓN 2: Cambiar título para identificar que es de Videos H
    setTimeout(() => {
        const contador = document.getElementById('contador-preguntas');
        if (contador) {
            contador.innerHTML = `
                🎬 VIDEOS H: <span id="numero-pregunta">1</span>/<span id="total-preguntas">${window.mazoActual.length}</span>
            `;
        }
        
        // INTEGRACIÓN 3: Llamar a mostrarPregunta del sistema principal
        if (typeof mostrarPregunta === 'function') {
            mostrarPregunta();
        } else {
            console.error("❌ Error: función mostrarPregunta no encontrada");
        }
    }, 100);
}
    
    iniciarQuiz: function() {
        // Configurar variables globales para el quiz
        window.mazoActual = this.estado.mazoActual;
        window.preguntaActual = 0;
        window.respuestasCorrectas = 0;
        window.respuestasIncorrectas = 0;
        
        // Mezclar preguntas
        for (let i = window.mazoActual.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [window.mazoActual[i], window.mazoActual[j]] = [window.mazoActual[j], window.mazoActual[i]];
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz');
        
        // Cambiar título para indicar que es de Videos H
        document.getElementById('contador-preguntas').innerHTML = `
            🎬 VIDEOS H: <span id="numero-pregunta">1</span>/<span id="total-preguntas">${window.mazoActual.length}</span>
        `;
        
        // Mostrar primera pregunta usando la función existente
        if (typeof mostrarPregunta === 'function') {
            mostrarPregunta();
        } else {
            console.error("Función mostrarPregunta no encontrada");
        }
    },
    
    verVideoColeccion: function() {
        const coleccion = obtenerColeccion(this.estado.coleccionActual);
        if (!coleccion || !coleccion.videoDriveId) {
            alert("No hay video disponible para esta colección");
            return;
        }
        
        const videoUrl = obtenerUrlVideoDrive(coleccion.videoDriveId, 'embed');
        
        // Actualizar interfaz
        document.getElementById('titulo-video-h').textContent = coleccion.nombre;
        document.getElementById('nombre-video-h').textContent = coleccion.nombre;
        
        const iframe = document.getElementById('iframe-video-h');
        iframe.src = videoUrl;
        
        // Mostrar pantalla de video
        this.ocultarTodasPantallas();
        this.elementos.pantallaVideo.classList.add('activa');
        this.estado.pantallaActual = 'video';
        this.estado.modoVideo = true;
    },
    
    abrirEnNuevaPestana: function() {
        const coleccion = obtenerColeccion(this.estado.coleccionActual);
        if (coleccion && coleccion.videoDriveId) {
            const videoUrl = obtenerUrlVideoDrive(coleccion.videoDriveId, 'vista');
            window.open(videoUrl, '_blank');
        }
    },
    
    volverAColecciones: function() {
        this.mostrarColecciones();
    },
    
    volverADetalleColeccion: function() {
        if (this.estado.coleccionActual) {
            this.cargarColeccionDetalle(this.estado.coleccionActual);
        } else {
            this.mostrarColecciones();
        }
    },
    
    ocultarTodasPantallas: function() {
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
    },
    
    // ============================================================================
    // FUNCIONES AUXILIARES
    // ============================================================================
    
    // Para ser llamado desde el menú principal
    iniciarSistema: function() {
        this.mostrarColecciones();
    }
};

// ============================================================================
// FUNCIONES GLOBALES PARA INTEGRACIÓN
// ============================================================================

// Función para iniciar desde el menú principal
window.iniciarVideosH = function() {
    sistemaVideosH.iniciarSistema();
};

// Hacer sistema globalmente accesible
window.sistemaVideosH = sistemaVideosH;
