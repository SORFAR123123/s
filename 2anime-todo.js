[file name]: 2anime-todo.js
[file content begin]
// ============================================================================
// SISTEMA ANIME MEJORADO - CON DOS VIDEOS Y TIMESTAMPS COMO GALERÍA
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - DATOS DE ANIMES CON DOS VIDEOS Y TIMESTAMPS
// ============================================================================

const animeConfig = {
    // 5 animes para estudiar - AHORA CON DOS VIDEOS CADA UNO
    animes: {
        'anime1': {
            id: 'anime1',
            nombre: '✨ Quintillizas Nakano',
            imagen: 'https://pbs.twimg.com/media/G7fvMrtWcAA1Y-W?format=png&name=900x900',
            descripcion: 'Aprende japonés con las quintillizas',
            color: '#ff6b9d',
            // NUEVO: DOS VIDEOS POR ANIME
            videos: [
                {
                    id: 'video_sub_espanol',
                    nombre: '📺 Con Subtítulos Español',
                    descripcion: 'Video con subtítulos en español para entender contexto',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'subtitulado',
                    timestamps: [
                        { tiempo: '0:30', descripcion: 'Introducción de las quintillizas', segundos: 30 },
                        { tiempo: '5:15', descripcion: 'Futaro como tutor', segundos: 315 },
                        { tiempo: '12:40', descripcion: 'Escena de estudio', segundos: 760 },
                        { tiempo: '18:20', descripcion: 'Momento romántico', segundos: 1100 }
                    ]
                },
                {
                    id: 'video_raw_japones',
                    nombre: '🎌 Raw Japonés',
                    descripcion: 'Video original en japonés para entrenar el oído',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'raw',
                    timestamps: [
                        { tiempo: '0:45', descripcion: 'Diálogo rápido', segundos: 45 },
                        { tiempo: '6:30', descripcion: 'Conversación casual', segundos: 390 },
                        { tiempo: '14:15', descripcion: 'Expresiones emocionales', segundos: 855 },
                        { tiempo: '20:00', descripcion: 'Final del episodio', segundos: 1200 }
                    ]
                }
            ]
        },
        'anime2': {
            id: 'anime2',
            nombre: '🏫 Yamada Lv999',
            imagen: 'https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900',
            descripcion: 'Vocabulario de romance escolar y gaming',
            color: '#00b4d8',
            videos: [
                {
                    id: 'video_sub_espanol',
                    nombre: '📺 Con Subtítulos Español',
                    descripcion: 'Subtítulos para entender la historia',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'subtitulado'
                },
                {
                    id: 'video_raw_japones',
                    nombre: '🎌 Raw Japonés',
                    descripcion: 'Audio original sin subtítulos',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'raw'
                }
            ]
        },
        'anime3': {
            id: 'anime3',
            nombre: '🌙 Kimetsu no Yaiba',
            imagen: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400',
            descripcion: 'Vocabulario de acción y fantasía',
            color: '#ff6d00',
            videos: [
                {
                    id: 'video_sub_espanol',
                    nombre: '📺 Con Subtítulos Español',
                    descripcion: 'Subtítulos en español',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'subtitulado'
                },
                {
                    id: 'video_raw_japones',
                    nombre: '🎌 Raw Japonés',
                    descripcion: 'Audio original japonés',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'raw'
                }
            ]
        },
        'anime4': {
            id: 'anime4',
            nombre: '⚔️ Jujutsu Kaisen',
            imagen: 'https://images.unsplash.com/photo-1639322537502-9e1f6bf2c3a5?w-400',
            descripcion: 'Términos de hechicería y batallas',
            color: '#7209b7',
            videos: [
                {
                    id: 'video_sub_espanol',
                    nombre: '📺 Con Subtítulos Español',
                    descripcion: 'Versión con subtítulos',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'subtitulado'
                },
                {
                    id: 'video_raw_japones',
                    nombre: '🎌 Raw Japonés',
                    descripcion: 'Versión sin subtítulos',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'raw'
                }
            ]
        },
        'anime5': {
            id: 'anime5',
            nombre: '🏀 Slam Dunk',
            imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
            descripcion: 'Vocabulario deportivo y escolar',
            color: '#ff006e',
            videos: [
                {
                    id: 'video_sub_espanol',
                    nombre: '📺 Con Subtítulos Español',
                    descripcion: 'Subtítulos en español',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'subtitulado'
                },
                {
                    id: 'video_raw_japones',
                    nombre: '🎌 Raw Japonés',
                    descripcion: 'Versión original japonesa',
                    duracion: '24:00',
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R', // Reemplaza con tu ID real
                    tipo: 'raw'
                }
            ]
        }
    },
    
    // Configuración general
    mazosPorAnime: 5,
    palabrasPorMazo: 10
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS ANIMES (MISMO QUE ANTES)
// ============================================================================

const animeVocabulario = {
    // ANIME 1 - Quintillizas Nakano
    'anime1': {
        'mazo1': [
            { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Amigas', 'Compañeras'], respuesta: 0 },
            { japones: '恋愛', lectura: 'renai', opciones: ['Amor romántico', 'Amistad', 'Familia', 'Respeto'], respuesta: 0 },
            { japones: '勉強', lectura: 'benkyou', opciones: ['Estudio', 'Trabajo', 'Juego', 'Descanso'], respuesta: 0 },
            { japones: '試験', lectura: 'shiken', opciones: ['Examen', 'Tarea', 'Proyecto', 'Práctica'], respuesta: 0 },
            { japones: '家庭教師', lectura: 'kateikyoushi', opciones: ['Tutor', 'Profesor', 'Estudiante', 'Director'], respuesta: 0 },
            { japones: '笑顔', lectura: 'egao', opciones: ['Sonrisa', 'Llanto', 'Enojo', 'Sorpresa'], respuesta: 0 },
            { japones: '約束', lectura: 'yakusoku', opciones: ['Promesa', 'Mentira', 'Secreto', 'Verdad'], respuesta: 0 },
            { japones: '心配', lectura: 'shinpai', opciones: ['Preocupación', 'Alegría', 'Calma', 'Confianza'], respuesta: 0 },
            { japones: '勇気', lectura: 'yuuki', opciones: ['Valentía', 'Miedo', 'Duda', 'Timidez'], respuesta: 0 },
            { japones: '幸せ', lectura: 'shiawase', opciones: ['Felicidad', 'Tristeza', 'Enojo', 'Aburrimiento'], respuesta: 0 }
        ],
        'mazo2': [
            { japones: '想い', lectura: 'omoi', opciones: ['Sentimientos', 'Pensamientos', 'Palabras', 'Acciones'], respuesta: 0 },
            { japones: '支える', lectura: 'sasaeru', opciones: ['Apoyar', 'Criticar', 'Ignorar', 'Abandonar'], respuesta: 0 },
            { japones: '成長', lectura: 'seichou', opciones: ['Crecimiento', 'Estancamiento', 'Retroceso', 'Cambio'], respuesta: 0 },
            { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Historia'], respuesta: 0 },
            { japones: '信じる', lectura: 'shinjiru', opciones: ['Creer', 'Dudar', 'Negar', 'Olvidar'], respuesta: 0 },
            { japones: '特別', lectura: 'tokubetsu', opciones: ['Especial', 'Común', 'Normal', 'Ordinario'], respuesta: 0 },
            { japones: '大切', lectura: 'taisetsu', opciones: ['Importante', 'Insignificante', 'Común', 'Despreciable'], respuesta: 0 },
            { japones: '頑張る', lectura: 'ganbaru', opciones: ['Esforzarse', 'Rendirse', 'Descansar', 'Evitar'], respuesta: 0 },
            { japones: '絆', lectura: 'kizuna', opciones: ['Vínculo', 'Separación', 'Distancia', 'Aislamiento'], respuesta: 0 },
            { japones: '恋', lectura: 'koi', opciones: ['Amor', 'Odio', 'Indiferencia', 'Amistad'], respuesta: 0 }
        ],
        'mazo3': generarPalabrasGenericas(10),
        'mazo4': generarPalabrasGenericas(10),
        'mazo5': generarPalabrasGenericas(10)
    },
    
    // ANIME 2 - Yamada Lv999 (reducido por brevedad)
    'anime2': {
        'mazo1': generarPalabrasGenericas(10),
        'mazo2': generarPalabrasGenericas(10),
        'mazo3': generarPalabrasGenericas(10),
        'mazo4': generarPalabrasGenericas(10),
        'mazo5': generarPalabrasGenericas(10)
    },
    
    // Resto de animes similares...
};

// ============================================================================
// 3. VARIABLES GLOBALES DEL SISTEMA ANIME
// ============================================================================

let animeActual = '';
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;
let videoAnimeActual = null; // NUEVO: Para controlar qué video se está viendo

// ============================================================================
// 4. FUNCIONES PRINCIPALES DEL SISTEMA ANIME MEJORADO
// ============================================================================

function iniciarSistemaAnime() {
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado (ahora con dos videos y timestamps)");
}

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
        
        // Verificar si tiene videos
        const tieneVideos = anime.videos && anime.videos.length > 0;
        const tieneVocabulario = animeVocabulario[animeId] && 
                               Object.keys(animeVocabulario[animeId]).length > 0;
        
        let infoTexto = '';
        if (tieneVideos && tieneVocabulario) {
            infoTexto = '🎬 2 videos + 📚 5 mazos';
        } else if (tieneVideos) {
            infoTexto = '🎬 2 videos';
        } else if (tieneVocabulario) {
            infoTexto = '📚 5 mazos';
        } else {
            infoTexto = '🚧 En preparación';
        }
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">${infoTexto}</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-video-info">🎬 2 videos (Subs + Raw)</div>
        `;
        
        contenedor.appendChild(div);
    });
}

// FUNCIÓN MEJORADA PARA CARGAR ANIME CON DOS VIDEOS
function cargarAnime(animeId) {
    animeActual = animeId;
    const anime = animeConfig.animes[animeId];
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-anime');
    const descElement = document.getElementById('descripcion-anime');
    
    if (tituloElement) tituloElement.textContent = anime.nombre;
    if (descElement) descElement.textContent = anime.descripcion;
    
    // CARGAR LOS DOS VIDEOS (ahora en lugar de uno)
    cargarVideosAnime(anime);
    
    // Cargar mazos de este anime
    cargarMazosAnime(animeId);
    
    cambiarPantalla('pantalla-anime-detalle');
    console.log(`🎬 Cargando anime: ${anime.nombre} (2 videos disponibles)`);
}

// NUEVA FUNCIÓN: Cargar los dos videos del anime
function cargarVideosAnime(anime) {
    const contenedorVideos = document.getElementById('contenedor-videos-anime');
    if (!contenedorVideos) return;
    
    contenedorVideos.innerHTML = '';
    
    if (!anime.videos || anime.videos.length === 0) {
        contenedorVideos.innerHTML = `
            <div class="mensaje-vacio-videos">
                <p>🎬 Videos no disponibles aún</p>
                <p>Usa la consola para agregarlos</p>
            </div>
        `;
        return;
    }
    
    anime.videos.forEach((video, index) => {
        const div = document.createElement('div');
        div.className = 'video-anime-card';
        div.style.borderColor = anime.color;
        div.onclick = () => reproducirVideoAnime(video, anime);
        
        // Indicador de tipo de video
        const icono = video.tipo === 'subtitulado' ? '📺' : '🎌';
        const tipoTexto = video.tipo === 'subtitulado' ? 'Con Subs Español' : 'Raw Japonés';
        const tieneTimestamps = video.timestamps && video.timestamps.length > 0;
        
        div.innerHTML = `
            <div class="video-anime-header">
                <span class="video-anime-numero">${index + 1}</span>
                <span class="video-anime-icono">${icono}</span>
                ${tieneTimestamps ? '<span class="video-timestamps-badge">⏱️</span>' : ''}
            </div>
            <div class="video-anime-nombre">${video.nombre}</div>
            <div class="video-anime-tipo">${tipoTexto}</div>
            <div class="video-anime-desc">${video.descripcion}</div>
            <div class="video-anime-footer">
                <span class="video-anime-duracion">⏱️ ${video.duracion}</span>
                <span class="video-anime-play">▶️ Ver video</span>
            </div>
        `;
        
        contenedorVideos.appendChild(div);
    });
}

// FUNCIÓN MEJORADA: Reproducir video con timestamps (como en galería)
function reproducirVideoAnime(video, anime) {
    videoAnimeActual = video;
    
    // Construir URL
    const videoUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-video-anime');
    const descElement = document.getElementById('descripcion-video-anime');
    const animeNombreElement = document.getElementById('anime-nombre-video');
    
    if (tituloElement) tituloElement.textContent = video.nombre;
    if (descElement) descElement.textContent = video.descripcion;
    if (animeNombreElement) animeNombreElement.textContent = anime.nombre;
    
    // Cargar iframe de video
    const iframeElement = document.getElementById('iframe-video-anime');
    if (iframeElement) {
        iframeElement.src = videoUrl;
        iframeElement.title = `${anime.nombre} - ${video.nombre}`;
    }
    
    // MOSTRAR TIMESTAMPS (si los tiene)
    mostrarTimestampsAnime(video);
    
    cambiarPantalla('pantalla-video-anime');
    
    console.log(`🎬 Reproduciendo: ${video.nombre} de ${anime.nombre}`);
}

// NUEVA FUNCIÓN: Mostrar timestamps en video anime (igual que en galería)
function mostrarTimestampsAnime(video) {
    const contenedorTimestamps = document.getElementById('contenedor-timestamps-anime');
    if (!contenedorTimestamps) return;
    
    if (!video.timestamps || video.timestamps.length === 0) {
        contenedorTimestamps.innerHTML = `
            <div class="sin-timestamps-anime">
                <p>📝 Este video no tiene timestamps configurados</p>
                <button class="boton-pequeno" onclick="agregarTimestampsAnimeDesdeConsola()">
                    ⚡ Agregar desde consola
                </button>
            </div>
        `;
        return;
    }
    
    let html = '<div class="timestamps-header-anime">⏱️ Puntos destacados:</div>';
    
    video.timestamps.forEach((ts, index) => {
        html += `
            <div class="timestamp-item-anime" onclick="saltarATimestampAnime(${ts.segundos})">
                <span class="timestamp-tiempo-anime">${ts.tiempo}</span>
                <span class="timestamp-desc-anime">${ts.descripcion}</span>
                <span class="timestamp-saltar-anime">▶️ Ir</span>
            </div>
        `;
    });
    
    html += `
        <div class="timestamps-footer-anime">
            <button class="boton-pequeno" onclick="agregarTimestampActualAnime()">
                ➕ Agregar timestamp actual
            </button>
            <button class="boton-pequeno" onclick="editarTimestampsAnimeDesdeConsola()">
                ✏️ Editar desde consola
            </button>
        </div>
    `;
    
    contenedorTimestamps.innerHTML = html;
}

// Función para saltar a timestamp en video anime
function saltarATimestampAnime(segundos) {
    if (!videoAnimeActual || !animeActual) return;
    
    const anime = animeConfig.animes[animeActual];
    const video = videoAnimeActual;
    
    // Reiniciar video desde el timestamp
    const videoUrl = `https://drive.google.com/file/d/${video.driveId}/preview?t=${segundos}s`;
    
    const iframeElement = document.getElementById('iframe-video-anime');
    if (iframeElement) {
        iframeElement.src = videoUrl;
    }
    
    // Mostrar notificación
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    mostrarNotificacionAnime(`⏱️ Saltando a ${minutos}:${segs.toString().padStart(2, '0')}`);
}

// Resto de funciones del anime (cargarMazosAnime, iniciarQuizAnime, etc.) se mantienen igual...

// ============================================================================
// FUNCIONES DE NAVEGACIÓN MEJORADAS
// ============================================================================

function volverAAnimeDetalle() {
    if (animeActual) {
        cargarAnime(animeActual);
    } else {
        cambiarPantalla('pantalla-anime-seleccion');
    }
}

function volverAAnimeSeleccion() {
    cambiarPantalla('pantalla-anime-seleccion');
}

function volverDeVideoAAnime() {
    cambiarPantalla('pantalla-anime-detalle');
}

// ============================================================================
// FUNCIONES DE TIMESTAMPS PARA ANIME
// ============================================================================

function agregarTimestampActualAnime() {
    if (!videoAnimeActual || !animeActual) {
        mostrarNotificacionAnime("❌ No hay video actual");
        return;
    }
    
    // Simular tiempo actual (en un sistema real, obtendrías el tiempo del iframe)
    const tiempoAleatorio = Math.floor(Math.random() * 3600);
    const minutos = Math.floor(tiempoAleatorio / 60);
    const segundos = tiempoAleatorio % 60;
    const tiempoFormateado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    
    const descripcion = prompt(`Agregar timestamp en ${tiempoFormateado}\nDescripción:`, "Escena importante");
    
    if (descripcion) {
        if (!videoAnimeActual.timestamps) {
            videoAnimeActual.timestamps = [];
        }
        
        videoAnimeActual.timestamps.push({
            tiempo: tiempoFormateado,
            descripcion: descripcion,
            segundos: tiempoAleatorio
        });
        
        mostrarTimestampsAnime(videoAnimeActual);
        mostrarNotificacionAnime(`✅ Timestamp agregado: ${tiempoFormateado}`);
        
        console.log(`💾 Para guardar permanentemente:`);
        console.log(`   agregarTimestampAAnime('${animeActual}', '${videoAnimeActual.id}', ${tiempoAleatorio}, '${descripcion}')`);
    }
}

// ============================================================================
// CREAR PANTALLAS DINÁMICAS MEJORADAS
// ============================================================================

function crearPantallasAnime() {
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME PARA ESTUDIAR JAPONÉS</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 Anime para Estudiar Japonés</h1>
                    <p class="subtitulo">Selecciona un anime - ¡Ahora con 2 videos por anime! 🎬</p>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-anime-mejorada">
                        <p>📺 <strong>Cada anime incluye:</strong></p>
                        <p>🎬 <strong>Video con Subs Español</strong> - Para entender contexto</p>
                        <p>🎌 <strong>Video Raw Japonés</strong> - Para entrenar el oído</p>
                        <p>⏱️ <strong>Timestamps</strong> - Puntos clave del video</p>
                        <p>📚 <strong>5 mazos de vocabulario</strong> - Palabras del anime</p>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE DETALLE DE ANIME - AHORA CON DOS VIDEOS -->
            <div id="pantalla-anime-detalle" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-anime">Anime</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAAnimeSeleccion()">← Volver a Animes</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h2 id="descripcion-anime">Descripción del anime</h2>
                    
                    <!-- SECCIÓN DE VIDEOS -->
                    <div class="seccion-videos-anime">
                        <h3>🎬 Videos del Anime</h3>
                        <p class="subtitulo-seccion">Mira el anime con subtítulos o en japonés original ⏱️</p>
                        
                        <div class="contenedor-videos-anime" id="contenedor-videos-anime">
                            <!-- Los dos videos se cargan aquí -->
                        </div>
                        
                        <div class="info-videos-anime">
                            <p>💡 <strong>Consejo:</strong> Primero mira el video con subtítulos para entender, luego el raw para practicar.</p>
                            <p>⏱️ <strong>Timestamps:</strong> Marca momentos importantes para repasar después.</p>
                        </div>
                    </div>
                    
                    <!-- SECCIÓN DE MAZOS -->
                    <div class="seccion-mazos-anime">
                        <h3>📚 Mazos de Vocabulario</h3>
                        <p>Practica las palabras que aparecen en este anime:</p>
                        
                        <div class="contenedor-mazos-anime" id="contenedor-mazos-anime">
                            <!-- Los mazos se cargan aquí -->
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE VIDEO ANIME - CON TIMESTAMPS -->
            <div id="pantalla-video-anime" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">
                            <span id="anime-nombre-video">Anime</span> - <span id="titulo-video-anime">Video</span>
                        </div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverDeVideoAAnime()">← Volver al Anime</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="video-anime-container">
                        <h2 id="descripcion-video-anime">Descripción del video</h2>
                        
                        <div class="iframe-video-container-anime">
                            <iframe id="iframe-video-anime" 
                                    width="100%" 
                                    height="500"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    title="Video del anime">
                            </iframe>
                        </div>
                        
                        <!-- TIMESTAMPS PARA ANIME -->
                        <div class="timestamps-container-anime" id="contenedor-timestamps-anime">
                            <!-- Los timestamps se cargarán aquí -->
                        </div>
                        
                        <div class="video-controls-anime">
                            <button class="boton-principal" onclick="volverDeVideoAAnime()">
                                ← Ver el otro video
                            </button>
                            <button class="boton-secundario" onclick="volverAAnimeDetalle()">
                                📚 Practicar vocabulario
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE QUIZ ANIME (se mantiene igual) -->
            <div id="pantalla-quiz-anime" class="pantalla">
                <!-- ... mismo contenido que antes ... -->
            </div>
            
            <!-- PANTALLA DE RESULTADOS ANIME (se mantiene igual) -->
            <div id="pantalla-resultados-anime" class="pantalla">
                <!-- ... mismo contenido que antes ... -->
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        agregarEstilosAnimeMejorado();
        console.log("✅ Pantallas anime creadas (con dos videos y timestamps)");
    }
}

// ============================================================================
// ESTILOS MEJORADOS PARA ANIME
// ============================================================================

function agregarEstilosAnimeMejorado() {
    if (document.getElementById('estilos-anime-mejorado')) return;
    
    const estilos = `
        <style id="estilos-anime-mejorado">
            /* TARJETAS DE ANIME MEJORADAS */
            .anime-card {
                background: linear-gradient(135deg, #2d2d2d, #3d3d3d);
                border-radius: 20px;
                padding: 20px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 3px solid;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                margin: 10px;
                width: 280px;
                position: relative;
                overflow: hidden;
            }
            
            .anime-card:hover {
                transform: translateY(-8px) scale(1.03);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
            }
            
            .anime-imagen {
                width: 100%;
                height: 180px;
                border-radius: 15px;
                object-fit: cover;
                border: 3px solid white;
                margin-bottom: 15px;
            }
            
            .anime-texto {
                font-size: 1.3rem;
                font-weight: bold;
                color: white;
                margin-bottom: 8px;
            }
            
            .anime-info {
                font-size: 1rem;
                color: #ffd700;
                font-weight: bold;
                margin-bottom: 8px;
                background: rgba(255, 215, 0, 0.1);
                padding: 5px 10px;
                border-radius: 10px;
                display: inline-block;
            }
            
            .anime-desc {
                font-size: 0.9rem;
                color: #cccccc;
                font-style: italic;
                margin-bottom: 8px;
            }
            
            .anime-video-info {
                font-size: 0.85rem;
                color: #4a90e2;
                font-weight: bold;
                background: rgba(74, 144, 226, 0.1);
                padding: 5px 10px;
                border-radius: 10px;
                margin-top: 5px;
            }
            
            /* SECCIÓN DE VIDEOS EN DETALLE */
            .seccion-videos-anime {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #ff6b9d;
            }
            
            .subtitulo-seccion {
                color: #cccccc;
                font-style: italic;
                margin-bottom: 20px;
            }
            
            .contenedor-videos-anime {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            
            .video-anime-card {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
                border-radius: 15px;
                padding: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                border-left: 5px solid;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .video-anime-card:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
            }
            
            .video-anime-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
            }
            
            .video-anime-numero {
                background: #ff6b9d;
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
            
            .video-anime-icono {
                font-size: 1.5rem;
            }
            
            .video-anime-nombre {
                font-size: 1.2rem;
                font-weight: bold;
                color: white;
                margin-bottom: 8px;
            }
            
            .video-anime-tipo {
                font-size: 0.9rem;
                color: #4a90e2;
                font-weight: bold;
                margin-bottom: 10px;
                background: rgba(74, 144, 226, 0.1);
                padding: 5px 10px;
                border-radius: 10px;
                display: inline-block;
            }
            
            .video-anime-desc {
                font-size: 0.9rem;
                color: #cccccc;
                margin-bottom: 15px;
                line-height: 1.4;
            }
            
            .video-anime-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .video-anime-duracion {
                color: #00ff88;
                font-weight: bold;
            }
            
            .video-anime-play {
                color: #ff6b9d;
                font-weight: bold;
                background: rgba(255, 107, 157, 0.1);
                padding: 5px 10px;
                border-radius: 10px;
                transition: all 0.2s ease;
            }
            
            .video-anime-card:hover .video-anime-play {
                background: rgba(255, 107, 157, 0.3);
            }
            
            /* REPRODUCTOR DE VIDEO ANIME */
            .video-anime-container {
                max-width: 900px;
                margin: 0 auto;
            }
            
            .iframe-video-container-anime {
                background: #000;
                border-radius: 15px;
                overflow: hidden;
                margin: 20px 0;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                border: 3px solid #4a90e2;
            }
            
            /* TIMESTAMPS PARA ANIME */
            .timestamps-container-anime {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #00ff88;
            }
            
            .timestamps-header-anime {
                color: #00ff88;
                font-weight: bold;
                font-size: 1.2rem;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .timestamp-item-anime {
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
            
            .timestamp-item-anime:hover {
                background: rgba(0, 255, 136, 0.2);
                transform: translateX(5px);
            }
            
            .timestamp-tiempo-anime {
                color: #00ff88;
                font-weight: bold;
                min-width: 50px;
                font-family: monospace;
            }
            
            .timestamp-desc-anime {
                color: #ffffff;
                flex: 1;
                margin: 0 15px;
            }
            
            .timestamp-saltar-anime {
                color: #ff6b9d;
                font-weight: bold;
                background: rgba(255, 107, 157, 0.1);
                padding: 5px 10px;
                border-radius: 5px;
                transition: all 0.2s ease;
                font-size: 0.9rem;
            }
            
            .timestamp-item-anime:hover .timestamp-saltar-anime {
                background: rgba(255, 107, 157, 0.3);
            }
            
            .timestamps-footer-anime {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            
            .sin-timestamps-anime {
                color: #cccccc;
                text-align: center;
                padding: 20px;
                font-style: italic;
            }
            
            /* INFO MEJORADA */
            .info-anime-mejorada {
                background: linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(74, 144, 226, 0.1));
                border-radius: 15px;
                padding: 20px;
                margin: 30px 0;
                border-left: 4px solid #ff6b9d;
                border-right: 4px solid #4a90e2;
            }
            
            .info-anime-mejorada p {
                color: white;
                margin: 8px 0;
                padding-left: 20px;
                position: relative;
            }
            
            .info-anime-mejorada p:before {
                content: "→";
                position: absolute;
                left: 0;
                color: #ff6b9d;
                font-weight: bold;
            }
            
            .info-anime-mejorada strong {
                color: #ffd700;
            }
            
            .info-videos-anime {
                background: rgba(74, 144, 226, 0.1);
                border-radius: 10px;
                padding: 15px;
                margin-top: 20px;
                border-left: 4px solid #4a90e2;
            }
            
            .info-videos-anime p {
                color: #4a90e2;
                margin: 5px 0;
                font-size: 0.9rem;
            }
            
            .mensaje-vacio-videos {
                text-align: center;
                padding: 30px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                border: 2px dashed #4a90e2;
                color: #cccccc;
                font-style: italic;
            }
            
            .video-controls-anime {
                display: flex;
                gap: 15px;
                margin: 20px 0;
                flex-wrap: wrap;
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .anime-card {
                    width: 100%;
                    max-width: 300px;
                }
                
                .contenedor-videos-anime {
                    grid-template-columns: 1fr;
                }
                
                .iframe-video-container-anime iframe {
                    height: 300px;
                }
                
                .video-controls-anime {
                    flex-direction: column;
                }
                
                .video-controls-anime button {
                    width: 100%;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// FUNCIONES DE CONSOLA PARA TIMESTAMPS ANIME
// ============================================================================

// Agregar timestamp a video de anime
window.agregarTimestampAAnime = function(animeId, videoId, segundos, descripcion) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return false;
    }
    
    const video = anime.videos?.find(v => v.id === videoId);
    if (!video) {
        console.log(`❌ Video ${videoId} no encontrado en ${animeId}`);
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
    
    console.log(`✅ Timestamp agregado a "${anime.nombre}" - "${video.nombre}":`);
    console.log(`   ⏱️ ${tiempoFormateado} - ${descripcion}`);
    
    // Si este video está actualmente visible, actualizar
    if (videoAnimeActual && videoAnimeActual.id === videoId && animeActual === animeId) {
        mostrarTimestampsAnime(videoAnimeActual);
    }
    
    return true;
};

// Ver timestamps de video anime
window.verTimestampsAnime = function(animeId, videoId) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return;
    }
    
    const video = anime.videos?.find(v => v.id === videoId);
    if (!video) {
        console.log(`❌ Video ${videoId} no encontrado en ${animeId}`);
        return;
    }
    
    if (!video.timestamps || video.timestamps.length === 0) {
        console.log(`📝 "${anime.nombre}" - "${video.nombre}" no tiene timestamps`);
        return;
    }
    
    console.log(`⏱️ Timestamps de "${anime.nombre}" - "${video.nombre}":`);
    video.timestamps.forEach((ts, index) => {
        console.log(`   ${index + 1}. ${ts.tiempo} - ${ts.descripcion} (${ts.segundos}s)`);
    });
};

// Función para mostrar notificaciones anime
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
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Función para agregar timestamps desde consola
window.agregarTimestampsAnimeDesdeConsola = function() {
    if (!videoAnimeActual || !animeActual) {
        console.log("❌ No hay video de anime seleccionado");
        return;
    }
    
    const anime = animeConfig.animes[animeActual];
    console.log("⚡ AGREGAR TIMESTAMPS A ANIME DESDE CONSOLA");
    console.log(`Anime: ${anime.nombre}`);
    console.log(`Video: ${videoAnimeActual.nombre}`);
    console.log(`ID Video: ${videoAnimeActual.id}`);
    console.log("");
    console.log("📝 Ejemplos de comandos:");
    console.log(`1. agregarTimestampAAnime('${animeActual}', '${videoAnimeActual.id}', 30, 'Introducción')`);
    console.log(`2. agregarTimestampAAnime('${animeActual}', '${videoAnimeActual.id}', 135, 'Momento clave')`);
    console.log(`3. agregarTimestampAAnime('${animeActual}', '${videoAnimeActual.id}', 340, 'Diálogo importante')`);
    console.log("");
    console.log("🔧 Otras funciones:");
    console.log(`- verTimestampsAnime('${animeActual}', '${videoAnimeActual.id}')`);
};

// Función para editar timestamps desde consola
window.editarTimestampsAnimeDesdeConsola = function() {
    if (!videoAnimeActual || !animeActual) {
        console.log("❌ No hay video de anime seleccionado");
        return;
    }
    
    console.log("✏️ EDITAR TIMESTAMPS DE ANIME");
    
    if (!videoAnimeActual.timestamps || videoAnimeActual.timestamps.length === 0) {
        console.log("❌ Este video no tiene timestamps");
        console.log("💡 Usa: agregarTimestampsAnimeDesdeConsola()");
        return;
    }
    
    console.log("");
    console.log("📋 Timestamps actuales:");
    videoAnimeActual.timestamps.forEach((ts, index) => {
        console.log(`   [${index}] ${ts.tiempo} - ${ts.descripcion} (${ts.segundos}s)`);
    });
    
    console.log("");
    console.log("🔧 Comandos disponibles:");
    console.log(`1. videoAnimeActual.timestamps[0].descripcion = 'Nueva descripción'`);
    console.log(`2. videoAnimeActual.timestamps[0].segundos = 45 // Cambia el tiempo`);
    console.log(`3. mostrarTimestampsAnime(videoAnimeActual) // Refrescar`);
};

// ============================================================================
// FUNCIONES DE TESTING MEJORADAS
// ============================================================================

// Agregar video a anime
window.agregarVideoAAnime = function(animeId, videoData) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return false;
    }
    
    if (!anime.videos) {
        anime.videos = [];
    }
    
    // Asegurar ID único
    if (!videoData.id) {
        videoData.id = `video_${animeId}_${Date.now()}`;
    }
    
    // Asegurar tipo
    if (!videoData.tipo) {
        videoData.tipo = videoData.nombre.includes('Subtítulo') ? 'subtitulado' : 'raw';
    }
    
    anime.videos.push(videoData);
    console.log(`✅ Video agregado a ${anime.nombre}:`, videoData.nombre);
    
    // Si este anime está actualmente cargado, actualizar
    if (animeActual === animeId && 
        document.getElementById('pantalla-anime-detalle').classList.contains('activa')) {
        cargarVideosAnime(anime);
    }
    
    return true;
};

// Ver estado de anime
window.verEstadoAnimeMejorado = function() {
    console.log("🎬 ESTADO DEL SISTEMA ANIME MEJORADO:");
    console.log("- Anime actual:", animeActual);
    console.log("- Video actual:", videoAnimeActual ? videoAnimeActual.nombre : "Ninguno");
    console.log("- Animes configurados:", Object.keys(animeConfig.animes).length);
    
    // Contar videos por anime
    Object.keys(animeConfig.animes).forEach(animeId => {
        const anime = animeConfig.animes[animeId];
        const totalVideos = anime.videos ? anime.videos.length : 0;
        const videosConTimestamps = anime.videos ? 
            anime.videos.filter(v => v.timestamps && v.timestamps.length > 0).length : 0;
        
        console.log(`  ${animeId}: ${totalVideos} videos (${videosConTimestamps} con timestamps)`);
    });
};

// ============================================================================
// EXPORTAR FUNCIONES MEJORADAS
// ============================================================================

window.iniciarSistemaAnime = iniciarSistemaAnime;
window.cargarAnime = cargarAnime;
window.reproducirVideoAnime = reproducirVideoAnime;
window.saltarATimestampAnime = saltarATimestampAnime;
window.mostrarTimestampsAnime = mostrarTimestampsAnime;
window.agregarTimestampActualAnime = agregarTimestampActualAnime;
window.volverAAnimeSeleccion = volverAAnimeSeleccion;
window.volverAAnimeDetalle = volverAAnimeDetalle;
window.volverDeVideoAAnime = volverDeVideoAAnime;
window.crearPantallasAnime = crearPantallasAnime;

console.log("✅ Sistema anime MEJORADO cargado correctamente");
console.log("🎬 Ahora cada anime tiene 2 videos:");
console.log("   📺 Con subtítulos español");
console.log("   🎌 Raw japonés (sin subtítulos)");
console.log("⏱️ Con sistema de timestamps clicables");
console.log("🎨 Interfaz mejorada con estilos especiales");
console.log("🔧 Funciones de timestamps para anime:");
console.log("   - agregarTimestampAAnime(animeId, videoId, segundos, descripcion)");
console.log("   - verTimestampsAnime(animeId, videoId)");
console.log("   - agregarTimestampsAnimeDesdeConsola()");
console.log("   - editarTimestampsAnimeDesdeConsola()");
console.log("🎯 ¡Perfecto para estudiar japonés!");
[file content end]
