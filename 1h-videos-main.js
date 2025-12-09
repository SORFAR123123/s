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
        console.log("📚 Cargando mazo:", mazoId, "ref:", palabrasRef);
        
        // Obtener palabras del vocabulario específico
        let palabras = [];
        
        if (typeof vocabularioVideosH !== 'undefined' && 
            vocabularioVideosH[palabrasRef]) {
            palabras = vocabularioVideosH[palabrasRef];
        } else {
            console.warn("⚠️ No se encontró vocabulario para:", palabrasRef);
            // Usar palabras genéricas como fallback
            palabras = generarPalabras(10);
        }

        // Configurar el sistema de quiz principal
        mazoActual = [...palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        // Cambiar título para identificar que es práctica especial
        const tituloElement = document.getElementById('contador-preguntas');
        if (tituloElement) {
            const video = this.videos[this.estado.videoActual];
            tituloElement.textContent = `PRÁCTICA ESPECIAL: ${video.titulo}`;
        }
        
        mezclarPreguntas();
        cambiarPantalla('pantalla-quiz');
        mostrarPregunta();
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
// FUNCIÓN GLOBAL PARA INICIAR DESDE EL MENÚ
// ============================================================================

function iniciarVideosHParaPapiFabri() {
    if (typeof videosHParaFabri !== 'undefined') {
        videosHParaFabri.iniciarDesdeMenu();
    } else {
        console.error("❌ Sistema Videos H no cargado");
        mostrarNotificacion("Error: Sistema Videos H no disponible");
    }
}

// ============================================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

// Inicializar cuando se carga la página
if (typeof videosHParaFabri !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            videosHParaFabri.inicializar();
        }, 500);
    });
}
