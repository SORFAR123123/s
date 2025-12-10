// ============================================================================
// SISTEMA ANIME PARA FABRI - CON TIMESTAMPS Y VIDEO EN JAPONÉS RAW
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN MEJORADA - CON 2 VIDEOS POR ANIME (ESPAÑOL/JAPONÉS)
// ============================================================================

const animeConfig = {
    // 5 animes para estudiar - CON TIMESTAMPS Y 2 IDIOMAS
    animes: {
        'anime1': {
            id: 'anime1',
            nombre: '✨ Quintillizas Nakano',
            imagen: 'https://pbs.twimg.com/media/G7fvMrtWcAA1Y-W?format=png&name=900x900',
            descripcion: 'Aprende japonés con las quintillizas',
            color: '#ff6b9d',
            // 2 VIDEOS: ESPAÑOL Y JAPONÉS RAW
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: [
                        { tiempo: '0:30', descripcion: 'Introducción personajes', segundos: 30 },
                        { tiempo: '5:15', descripcion: 'Escena clave', segundos: 315 },
                        { tiempo: '12:40', descripcion: 'Momento romántico', segundos: 760 },
                        { tiempo: '20:20', descripcion: 'Final del capítulo', segundos: 1220 }
                    ]
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_1', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: [
                        { tiempo: '0:30', descripcion: 'Introducción (japonés)', segundos: 30 },
                        { tiempo: '5:15', descripcion: 'Vocabulario útil', segundos: 315 },
                        { tiempo: '12:40', descripcion: 'Diálogo rápido', segundos: 760 }
                    ]
                }
            }
        },
        'anime2': {
            id: 'anime2',
            nombre: '🏫 Yamada Lv999',
            imagen: 'https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900',
            descripcion: 'Vocabulario de romance escolar',
            color: '#00b4d8',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_2', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        },
        'anime3': {
            id: 'anime3',
            nombre: '🌙 Kimetsu no Yaiba',
            imagen: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400',
            descripcion: 'Vocabulario de acción y fantasía',
            color: '#ff6d00',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_3', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        },
        'anime4': {
            id: 'anime4',
            nombre: '⚔️ Jujutsu Kaisen',
            imagen: 'https://images.unsplash.com/photo-1639322537502-9e1f6bf2c3a5?w-400',
            descripcion: 'Términos de hechicería y batallas',
            color: '#7209b7',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_4', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        },
        'anime5': {
            id: 'anime5',
            nombre: '🏀 Slam Dunk',
            imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
            descripcion: 'Vocabulario deportivo y escolar',
            color: '#ff006e',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_5', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        }
    },
    
    // Configuración general
    mazosPorAnime: 5,
    palabrasPorMazo: 10,
    
    // Idioma por defecto
    idiomaPorDefecto: 'español'
};

// ============================================================================
// 2. VARIABLES GLOBALES MEJORADAS
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;

// ============================================================================
// 3. FUNCIONES PRINCIPALES MEJORADAS
// ============================================================================

// Función para cargar un anime específico - VERSIÓN MEJORADA
function cargarAnime(animeId) {
    animeActual = animeId;
    const anime = animeConfig.animes[animeId];
    
    // Restablecer idioma al por defecto
    idiomaVideoActual = animeConfig.idiomaPorDefecto;
    
    // Obtener video según idioma actual
    videoAnimeActual = anime.videos[idiomaVideoActual];
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-anime');
    const descElement = document.getElementById('descripcion-anime');
    const videoInfoElement = document.getElementById('info-video-anime');
    
    if (tituloElement) tituloElement.textContent = anime.nombre;
    if (descElement) descElement.textContent = anime.descripcion;
    if (videoInfoElement) {
        videoInfoElement.innerHTML = `
            <div class="video-info-header">
                <span class="video-idioma-badge">🎬 ${videoAnimeActual.nombre}</span>
                <span class="video-timestamps-badge">⏱️ ${videoAnimeActual.timestamps ? videoAnimeActual.timestamps.length : 0} timestamps</span>
            </div>
        `;
    }
    
    // Cargar mazos de este anime
    cargarMazosAnime(animeId);
    
    // Cargar el video
    cargarVideoAnime(animeId, idiomaVideoActual);
    
    cambiarPantalla('pantalla-anime-detalle');
    console.log(`🎬 Cargando anime: ${anime.nombre} (${idiomaVideoActual})`);
}

// NUEVA FUNCIÓN: Cargar video con opción de idioma
function cargarVideoAnime(animeId, idioma = 'español') {
    const anime = animeConfig.animes[animeId];
    if (!anime || !anime.videos[idioma]) {
        console.error(`❌ No hay video en ${idioma} para ${animeId}`);
        return;
    }
    
    idiomaVideoActual = idioma;
    videoAnimeActual = anime.videos[idioma];
    
    // Construir URL del video
    const videoUrl = `https://drive.google.com/file/d/${videoAnimeActual.driveId}/preview`;
    
    // Actualizar iframe
    const videoElement = document.getElementById('video-anime');
    if (videoElement) {
        videoElement.src = videoUrl;
        videoElement.title = `${anime.nombre} - ${videoAnimeActual.nombre}`;
    }
    
    // Actualizar información de video
    const videoInfoElement = document.getElementById('info-video-anime');
    if (videoInfoElement) {
        videoInfoElement.innerHTML = `
            <div class="video-info-header">
                <span class="video-idioma-badge">🎬 ${videoAnimeActual.nombre}</span>
                <span class="video-timestamps-badge">⏱️ ${videoAnimeActual.timestamps ? videoAnimeActual.timestamps.length : 0} timestamps</span>
                <button class="boton-pequeno" onclick="mostrarTimestampsAnime()">Ver Timestamps</button>
            </div>
        `;
    }
    
    // Actualizar botones de idioma
    actualizarBotonesIdioma(animeId);
    
    // Mostrar notificación
    mostrarNotificacionAnime(`🎬 Idioma cambiado a: ${videoAnimeActual.nombre}`);
}

// NUEVA FUNCIÓN: Cambiar idioma del video
function cambiarIdiomaVideo(idioma) {
    if (!animeActual) return;
    
    cargarVideoAnime(animeActual, idioma);
}

// NUEVA FUNCIÓN: Actualizar botones de idioma
function actualizarBotonesIdioma(animeId) {
    const anime = animeConfig.animes[animeId];
    const contenedor = document.getElementById('botones-idioma-anime');
    
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(anime.videos).forEach(idioma => {
        const video = anime.videos[idioma];
        const boton = document.createElement('button');
        boton.className = `boton-idioma ${idioma === idiomaVideoActual ? 'activo' : ''}`;
        boton.textContent = `${video.nombre} ${video.timestamps && video.timestamps.length > 0 ? '⏱️' : ''}`;
        boton.onclick = () => cambiarIdiomaVideo(idioma);
        boton.title = `Cambiar a ${video.nombre}`;
        
        contenedor.appendChild(boton);
    });
}

// NUEVA FUNCIÓN: Mostrar timestamps del video actual
function mostrarTimestampsAnime() {
    if (!videoAnimeActual || !videoAnimeActual.timestamps || videoAnimeActual.timestamps.length === 0) {
        mostrarNotificacionAnime('📝 Este video no tiene timestamps configurados');
        return;
    }
    
    // Crear ventana emergente de timestamps
    const modal = document.createElement('div');
    modal.id = 'modal-timestamps-anime';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
    `;
    
    let timestampsHTML = '<div class="timestamps-header">⏱️ Puntos destacados:</div>';
    
    videoAnimeActual.timestamps.forEach((ts, index) => {
        timestampsHTML += `
            <div class="timestamp-item" onclick="saltarATimestampAnime(${ts.segundos})">
                <span class="timestamp-tiempo">${ts.tiempo}</span>
                <span class="timestamp-desc">${ts.descripcion}</span>
                <span class="timestamp-saltar">▶️ Ir</span>
            </div>
        `;
    });
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #2d2d2d, #1a1a1a);
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 100%;
            border: 3px solid #ff6b9d;
            box-shadow: 0 10px 40px rgba(255, 107, 157, 0.3);
            max-height: 80vh;
            overflow-y: auto;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #ff6b9d;
            ">
                <h2 style="color: #ff6b9d; margin: 0;">🎬 Timestamps del Video</h2>
                <button onclick="document.getElementById('modal-timestamps-anime').remove()" 
                        style="
                            background: #ff4444;
                            color: white;
                            border: none;
                            padding: 8px 15px;
                            border-radius: 10px;
                            cursor: pointer;
                            font-weight: bold;
                        ">
                    ✖ Cerrar
                </button>
            </div>
            
            <div style="color: white; margin-bottom: 15px;">
                <p><strong>Anime:</strong> ${animeConfig.animes[animeActual].nombre}</p>
                <p><strong>Idioma:</strong> ${videoAnimeActual.nombre}</p>
                <p><strong>Total timestamps:</strong> ${videoAnimeActual.timestamps.length}</p>
            </div>
            
            <div style="margin: 20px 0;">
                ${timestampsHTML}
            </div>
            
            <div style="
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                text-align: center;
            ">
                <button onclick="agregarTimestampAnimeDesdeConsola()"
                        style="
                            background: rgba(0, 255, 136, 0.2);
                            color: #00ff88;
                            border: 1px solid #00ff88;
                            padding: 10px 20px;
                            border-radius: 10px;
                            cursor: pointer;
                            margin: 5px;
                            font-weight: bold;
                        ">
                    ⚡ Agregar timestamp desde consola
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// NUEVA FUNCIÓN: Saltar a timestamp específico
function saltarATimestampAnime(segundos) {
    if (!animeActual || !videoAnimeActual) return;
    
    // Construir URL con timestamp
    const videoUrl = `https://drive.google.com/file/d/${videoAnimeActual.driveId}/preview?t=${segundos}s`;
    
    // Actualizar iframe
    const videoElement = document.getElementById('video-anime');
    if (videoElement) {
        videoElement.src = videoUrl;
    }
    
    // Cerrar modal si está abierto
    const modal = document.getElementById('modal-timestamps-anime');
    if (modal) {
        modal.remove();
    }
    
    mostrarNotificacionAnime(`⏱️ Saltando a ${Math.floor(segundos/60)}:${(segundos%60).toString().padStart(2, '0')}`);
}

// ============================================================================
// 4. FUNCIÓN PARA CREAR PANTALLAS DINÁMICAS - VERSIÓN MEJORADA
// ============================================================================

function crearPantallasAnime() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME - MEJORADA -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME CON TIMESTAMPS + JAPONÉS RAW</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 VIDEOS PARA FABRI</h1>
                    <p class="subtitulo">Selecciona un anime - Ahora con 2 idiomas y timestamps ⏱️</p>
                    
                    <div class="info-idiomas">
                        <div class="idioma-info-item">
                            <span class="idioma-badge español">🇪🇸 Español</span>
                            <span>Audio en español para contexto</span>
                        </div>
                        <div class="idioma-info-item">
                            <span class="idioma-badge japones">🇯🇵 Japonés Raw</span>
                            <span>Audio original para práctica avanzada</span>
                        </div>
                        <div class="idioma-info-item">
                            <span class="idioma-badge timestamps">⏱️ Timestamps</span>
                            <span>Saltar a partes específicas del video</span>
                        </div>
                    </div>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-anime">
                        <p>📚 5 animes × 5 mazos cada uno = 25 mazos de vocabulario</p>
                        <p>🎬 Cada anime tiene 2 versiones: Español y Japonés Raw</p>
                        <p>⏱️ Timestamps para navegación rápida en videos</p>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE DETALLE DE ANIME - MEJORADA CON SELECTOR DE IDIOMA -->
            <div id="pantalla-anime-detalle" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-anime">Anime</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAAnimeSeleccion()">← Volver a Animes</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="anime-detalle-container">
                        <!-- SELECTOR DE IDIOMA -->
                        <div class="selector-idioma-container">
                            <h3>🎬 Selecciona el idioma del video:</h3>
                            <div class="botones-idioma" id="botones-idioma-anime">
                                <!-- Los botones de idioma se generan aquí -->
                            </div>
                            <div class="info-video-anime" id="info-video-anime">
                                <!-- Información del video actual -->
                            </div>
                        </div>
                        
                        <!-- REPRODUCTOR DE VIDEO CON TIMESTAMPS -->
                        <div class="video-anime-container">
                            <div class="video-container-anime">
                                <iframe id="video-anime" 
                                        width="100%" 
                                        height="315"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        title="Video del anime">
                                </iframe>
                            </div>
                            
                            <!-- BOTÓN DE TIMESTAMPS -->
                            <div class="controles-video-anime">
                                <button class="boton-principal" onclick="mostrarTimestampsAnime()" 
                                        style="background: linear-gradient(135deg, #00ff88, #00cc6a);">
                                    ⏱️ Ver Timestamps
                                </button>
                                <button class="boton-secundario" onclick="saltarATimestampAnime(0)">
                                    🔄 Reiniciar Video
                                </button>
                            </div>
                            
                            <p class="video-desc" id="descripcion-anime">Mira el video y luego practica el vocabulario</p>
                        </div>
                        
                        <!-- MAZOS DE VOCABULARIO -->
                        <div class="mazos-anime-container">
                            <h3>📚 Mazos de Vocabulario</h3>
                            <p>Practica las palabras que aparecen en este anime:</p>
                            
                            <div class="contenedor-mazos-anime" id="contenedor-mazos-anime">
                                <!-- Los mazos se cargan aquí dinámicamente -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        
        // Agregar estilos específicos para el sistema anime mejorado
        agregarEstilosAnimeMejorado();
        
        console.log("✅ Pantallas anime creadas dinámicamente (con timestamps y 2 idiomas)");
    }
}

// Función para agregar estilos específicos del sistema anime mejorado
function agregarEstilosAnimeMejorado() {
    // Verificar si los estilos ya existen
    if (document.getElementById('estilos-anime-mejorado')) return;
    
    const estilos = `
        <style id="estilos-anime-mejorado">
            /* ESTILOS PARA EL SISTEMA ANIME MEJORADO */
            
            /* INFO IDIOMAS EN PANTALLA DE SELECCIÓN */
            .info-idiomas {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin: 20px 0;
                flex-wrap: wrap;
                padding: 15px;
                background: rgba(255, 107, 157, 0.1);
                border-radius: 15px;
                border: 2px solid #ff6b9d;
            }
            
            .idioma-info-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                min-width: 150px;
                padding: 10px;
            }
            
            .idioma-badge {
                padding: 8px 15px;
                border-radius: 10px;
                font-weight: bold;
                margin-bottom: 8px;
                display: inline-block;
                font-size: 1rem;
            }
            
            .idioma-badge.español {
                background: linear-gradient(135deg, #4a90e2, #2a6ec7);
                color: white;
            }
            
            .idioma-badge.japones {
                background: linear-gradient(135deg, #ff4444, #cc0000);
                color: white;
            }
            
            .idioma-badge.timestamps {
                background: linear-gradient(135deg, #00ff88, #00cc6a);
                color: white;
            }
            
            .idioma-info-item span:last-child {
                color: #cccccc;
                font-size: 0.9rem;
            }
            
            /* SELECTOR DE IDIOMA */
            .selector-idioma-container {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                margin-bottom: 20px;
                border: 2px solid #4a90e2;
            }
            
            .selector-idioma-container h3 {
                color: #4a90e2;
                margin-bottom: 15px;
                text-align: center;
            }
            
            .botones-idioma {
                display: flex;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
                margin-bottom: 15px;
            }
            
            .boton-idioma {
                padding: 12px 25px;
                border-radius: 12px;
                border: 2px solid #4a90e2;
                background: rgba(74, 144, 226, 0.2);
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                min-width: 120px;
                font-size: 1rem;
            }
            
            .boton-idioma:hover {
                background: rgba(74, 144, 226, 0.4);
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(74, 144, 226, 0.4);
            }
            
            .boton-idioma.activo {
                background: linear-gradient(135deg, #4a90e2, #2a6ec7);
                border-color: #00ff88;
                box-shadow: 0 0 15px rgba(74, 144, 226, 0.6);
            }
            
            .info-video-anime {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                padding: 15px;
                margin-top: 10px;
                border-left: 4px solid #ff6b9d;
            }
            
            .video-info-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .video-idioma-badge {
                background: rgba(255, 107, 157, 0.2);
                color: #ff6b9d;
                padding: 8px 15px;
                border-radius: 20px;
                font-weight: bold;
                border: 1px solid #ff6b9d;
            }
            
            .video-timestamps-badge {
                background: rgba(0, 255, 136, 0.2);
                color: #00ff88;
                padding: 8px 15px;
                border-radius: 20px;
                font-weight: bold;
                border: 1px solid #00ff88;
            }
            
            /* CONTROLES DE VIDEO */
            .controles-video-anime {
                display: flex;
                gap: 15px;
                margin: 15px 0;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            /* TIMESTAMPS EN MODAL */
            .timestamp-item {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                padding: 12px 15px;
                margin: 8px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                transition: all 0.2s ease;
                border-left: 3px solid #00ff88;
            }
            
            .timestamp-item:hover {
                background: rgba(0, 255, 136, 0.2);
                transform: translateX(5px);
            }
            
            .timestamp-tiempo {
                color: #00ff88;
                font-weight: bold;
                min-width: 50px;
                font-family: monospace;
            }
            
            .timestamp-desc {
                color: #ffffff;
                flex: 1;
                margin: 0 15px;
            }
            
            .timestamp-saltar {
                color: #ff6b9d;
                font-weight: bold;
                background: rgba(255, 107, 157, 0.1);
                padding: 5px 10px;
                border-radius: 5px;
                transition: all 0.2s ease;
                font-size: 0.9rem;
            }
            
            .timestamp-item:hover .timestamp-saltar {
                background: rgba(255, 107, 157, 0.3);
            }
            
            /* ANIME CARD MEJORADA */
            .anime-card {
                position: relative;
                overflow: hidden;
            }
            
            .anime-card::after {
                content: '🎬';
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 10px;
                font-size: 0.9rem;
                z-index: 2;
            }
            
            .anime-card::before {
                content: '⏱️';
                position: absolute;
                top: 10px;
                left: 10px;
                background: rgba(0, 255, 136, 0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 10px;
                font-size: 0.9rem;
                z-index: 2;
            }
            
            /* NOTIFICACIONES ESPECÍFICAS */
            .notificacion-anime {
                background: linear-gradient(135deg, #ff6b9d, #ff4081) !important;
                border-left: 5px solid #00ff88 !important;
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .info-idiomas {
                    flex-direction: column;
                    align-items: center;
                }
                
                .idioma-info-item {
                    width: 100%;
                    max-width: 250px;
                }
                
                .botones-idioma {
                    flex-direction: column;
                    align-items: center;
                }
                
                .boton-idioma {
                    width: 100%;
                    max-width: 200px;
                }
                
                .video-info-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                }
                
                .controles-video-anime {
                    flex-direction: column;
                    align-items: center;
                }
                
                .controles-video-anime button {
                    width: 100%;
                    max-width: 250px;
                }
            }
            
            @media (max-width: 480px) {
                .anime-card::before,
                .anime-card::after {
                    font-size: 0.8rem;
                    padding: 4px 8px;
                }
                
                .idioma-badge {
                    font-size: 0.9rem;
                    padding: 6px 12px;
                }
                
                .boton-idioma {
                    padding: 10px 15px;
                    font-size: 0.9rem;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 5. FUNCIONES DE NOTIFICACIÓN
// ============================================================================

function mostrarNotificacionAnime(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #ff4081);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(255, 107, 157, 0.5);
        border-left: 5px solid #00ff88;
    `;
    notificacion.textContent = mensaje;
    notificacion.className = 'notificacion-anime';
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// ============================================================================
// 6. FUNCIONES DE CONSOLA PARA TIMESTAMPS
// ============================================================================

// Agregar timestamp a un video de anime desde consola
window.agregarTimestampAnime = function(animeId, idioma, segundos, descripcion) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return false;
    }
    
    const video = anime.videos[idioma];
    if (!video) {
        console.log(`❌ No hay video en ${idioma} para ${animeId}`);
        return false;
    }
    
    // Crear array de timestamps si no existe
    if (!video.timestamps) {
        video.timestamps = [];
    }
    
    // Formatear tiempo
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    const tiempoFormateado = `${minutos}:${segs.toString().padStart(2, '0')}`;
    
    // Agregar timestamp
    video.timestamps.push({
        tiempo: tiempoFormateado,
        descripcion: descripcion,
        segundos: segundos
    });
    
    console.log(`✅ Timestamp agregado a "${anime.nombre}" (${idioma}):`);
    console.log(`   ⏱️ ${tiempoFormateado} - ${descripcion}`);
    
    // Si este video está actualmente seleccionado, actualizar
    if (animeActual === animeId && idiomaVideoActual === idioma) {
        mostrarNotificacionAnime(`⏱️ Timestamp agregado: ${tiempoFormateado}`);
    }
    
    return true;
};

// Agregar timestamps desde consola (interfaz amigable)
window.agregarTimestampAnimeDesdeConsola = function() {
    if (!animeActual || !videoAnimeActual) {
        console.log("❌ No hay anime o video seleccionado");
        return;
    }
    
    console.log("⚡ AGREGAR TIMESTAMPS A ANIME DESDE CONSOLA");
    console.log(`Anime: ${animeConfig.animes[animeActual].nombre}`);
    console.log(`ID Anime: ${animeActual}`);
    console.log(`Idioma actual: ${idiomaVideoActual}`);
    console.log(`ID Video: ${videoAnimeActual.driveId}`);
    console.log("");
    console.log("📝 Ejemplo de comando:");
    console.log(`   agregarTimestampAnime('${animeActual}', '${idiomaVideoActual}', 30, 'Inicio del capítulo')`);
    console.log(`   agregarTimestampAnime('${animeActual}', '${idiomaVideoActual}', 135, 'Diálogo importante')`);
    console.log(`   agregarTimestampAnime('${animeActual}', '${idiomaVideoActual}', 340, 'Vocabulario clave')`);
    console.log("");
    console.log("🔄 Para cambiar de idioma:");
    console.log(`   cargarVideoAnime('${animeActual}', 'español') // Para español`);
    console.log(`   cargarVideoAnime('${animeActual}', 'japones') // Para japonés raw`);
};

// Cambiar ID de Drive para un video específico
window.cambiarDriveIdAnime = function(animeId, idioma, nuevoDriveId) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return false;
    }
    
    if (!anime.videos[idioma]) {
        console.log(`❌ No hay video en ${idioma} para ${animeId}`);
        return false;
    }
    
    anime.videos[idioma].driveId = nuevoDriveId;
    console.log(`✅ ID de Drive actualizado para ${anime.nombre} (${idioma}): ${nuevoDriveId}`);
    
    // Si este video está actualmente reproduciéndose, actualizar
    if (animeActual === animeId && idiomaVideoActual === idioma) {
        cargarVideoAnime(animeId, idioma);
    }
    
    return true;
};

// Ver timestamps de un anime
window.verTimestampsAnime = function(animeId, idioma = 'español') {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return;
    }
    
    const video = anime.videos[idioma];
    if (!video) {
        console.log(`❌ No hay video en ${idioma} para ${animeId}`);
        return;
    }
    
    if (!video.timestamps || video.timestamps.length === 0) {
        console.log(`📝 "${anime.nombre}" (${idioma}) no tiene timestamps`);
        return;
    }
    
    console.log(`⏱️ Timestamps de "${anime.nombre}" (${idioma}):`);
    video.timestamps.forEach((ts, index) => {
        console.log(`   ${index + 1}. ${ts.tiempo} - ${ts.descripcion} (${ts.segundos}s)`);
    });
};

// ============================================================================
// 7. ACTUALIZAR OTRAS FUNCIONES (PARA MANTENER COMPATIBILIDAD)
// ============================================================================

// Las funciones existentes de mazos y quiz NO se modifican
// Solo necesitamos actualizar cargarListaAnimes() para mostrar info de timestamps

function cargarListaAnimes() {
    const contenedor = document.getElementById('contenedor-animes');
    if (!contenedor) {
        console.error("❌ No se encontró el contenedor de animes");
        return;
    }
    
    contenedor.innerHTML = '';
    
    Object.keys(animeConfig.animes).forEach(animeId => {
        const anime = animeConfig.animes[animeId];
        const div = document.createElement('div');
        div.className = 'anime-card';
        div.style.borderColor = anime.color;
        div.onclick = () => cargarAnime(animeId);
        
        // Contar timestamps totales
        let totalTimestamps = 0;
        if (anime.videos) {
            Object.values(anime.videos).forEach(video => {
                if (video.timestamps) {
                    totalTimestamps += video.timestamps.length;
                }
            });
        }
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">5 mazos de vocabulario</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-extra-info">
                <span class="anime-idiomas">🎬 2 idiomas</span>
                <span class="anime-timestamps-count">⏱️ ${totalTimestamps} timestamps</span>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
}

// ============================================================================
// 8. ACTUALIZAR FUNCIONES DE EXPORTACIÓN
// ============================================================================

// Hacer funciones nuevas disponibles globalmente
window.cargarVideoAnime = cargarVideoAnime;
window.cambiarIdiomaVideo = cambiarIdiomaVideo;
window.mostrarTimestampsAnime = mostrarTimestampsAnime;
window.saltarATimestampAnime = saltarATimestampAnime;
window.agregarTimestampAnime = agregarTimestampAnime;
window.agregarTimestampAnimeDesdeConsola = agregarTimestampAnimeDesdeConsola;
window.cambiarDriveIdAnime = cambiarDriveIdAnime;
window.verTimestampsAnime = verTimestampsAnime;

console.log("✅ Sistema anime MEJORADO cargado correctamente");
console.log("🎬 Novedades:");
console.log("   - 2 idiomas por anime: Español y Japonés Raw");
console.log("   - Timestamps clicables para navegación rápida");
console.log("   - Selector de idioma en tiempo real");
console.log("   - Funciones de administración desde consola");
console.log("");
console.log("🔧 Funciones nuevas desde consola:");
console.log("   - cargarVideoAnime(animeId, idioma)");
console.log("   - agregarTimestampAnime(animeId, idioma, segundos, descripcion)");
console.log("   - cambiarDriveIdAnime(animeId, idioma, nuevoDriveId)");
console.log("   - verTimestampsAnime(animeId, idioma)");
console.log("");
console.log("💡 Usa iniciarSistemaAnime() para comenzar");
