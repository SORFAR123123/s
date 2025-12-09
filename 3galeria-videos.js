// ============================================================================
// GALERÍA DE VIDEOS PURA (SIN MAZOS) - VERSIÓN MEJORADA
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - BASE DE DATOS DE VIDEOS POR CATEGORÍAS
// ============================================================================

const galeriaVideosConfig = {
    categorias: {
        'musica': {
            id: 'musica',
            nombre: '🎵 Música Relajante',
            imagen: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
            color: '#ff6b6b',
            descripcion: 'Música para estudiar y relajarse'
        },
        'naturaleza': {
            id: 'naturaleza',
            nombre: '🌿 Naturaleza',
            imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400',
            color: '#00b894',
            descripcion: 'Paisajes y sonidos de la naturaleza'
        },
        'asmr': {
            id: 'asmr',
            nombre: '🎧 ASMR',
            imagen: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400',
            color: '#6c5ce7',
            descripcion: 'Sonidos relajantes y susurros'
        },
        'anime': {
            id: 'anime',
            nombre: '🎬 Anime',
            imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
            color: '#fd79a8',
            descripcion: 'Opening, endings y momentos especiales'
        },
        'memes': {
            id: 'memes',
            nombre: '😂 Memes y Comedia',
            imagen: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400',
            color: '#fdcb6e',
            descripcion: 'Videos divertidos y memes'
        },
        'gaming': {
            id: 'gaming',
            nombre: '🎮 Gaming',
            imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            color: '#00cec9',
            descripcion: 'Gameplays y momentos épicos'
        },
        'cocina': {
            id: 'cocina',
            nombre: '🍳 Cocina ASMR',
            imagen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
            color: '#e17055',
            descripcion: 'Sonidos de cocina y recetas'
        },
        'lluvia': {
            id: 'lluvia',
            nombre: '☔ Lluvia y Tormentas',
            imagen: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400',
            color: '#0984e3',
            descripcion: 'Sonidos de lluvia y tormenta'
        },
        'ciencia': {
            id: 'ciencia',
            nombre: '🔬 Ciencia y Documentales',
            imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
            color: '#a29bfe',
            descripcion: 'Documentales y curiosidades científicas'
        },
        'animacion': {
            id: 'animacion',
            nombre: '✨ Animaciones Cortas',
            imagen: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400',
            color: '#ff7675',
            descripcion: 'Animaciones y cortometrajes'
        }
    },
    
    // BASE DE DATOS DE VIDEOS (URLs múltiples: Drive, Twitter, YouTube, etc.)
    videos: {
        // CATEGORÍA: MÚSICA
        'musica': [
            {
                id: 'video_musica_1',
                nombre: 'Música Lo-Fi para estudiar',
                descripcion: 'Playlist de 1 hora de música lo-fi',
                duracion: '60:00',
                url: 'https://x.com/i/status/1987332070730047737',
                tipo: 'twitter',
                favorito: true
            },
            {
                id: 'video_musica_2',
                nombre: 'Música clásica relajante',
                descripcion: 'Las mejores piezas clásicas para concentración',
                duracion: '45:30',
                url: 'https://x.com/i/status/1987332070730047737',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_musica_3',
                nombre: 'Jazz suave para trabajar',
                descripcion: 'Jazz instrumental sin distracciones',
                duracion: '50:15',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_musica_4',
                nombre: 'Sonidos de piano para dormir',
                descripcion: 'Melodías suaves de piano nocturno',
                duracion: '90:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_musica_5',
                nombre: 'Música ambiente electrónica',
                descripcion: 'Sintetizadores y paisajes sonoros',
                duracion: '75:20',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            }
        ],
        
        // CATEGORÍA: NATURALEZA
        'naturaleza': [
            {
                id: 'video_naturaleza_1',
                nombre: 'Bosque en otoño',
                descripcion: 'Paseo por un bosque con hojas cayendo',
                duracion: '30:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_naturaleza_2',
                nombre: 'Cascadas y ríos',
                descripcion: 'Sonidos de agua corriente y cascadas',
                duracion: '45:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_naturaleza_3',
                nombre: 'Amanecer en la montaña',
                descripcion: 'Timelapse de un amanecer montañoso',
                duracion: '10:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_naturaleza_4',
                nombre: 'Fuego crepitante',
                descripcion: 'Sonido de leña ardiendo en una fogata',
                duracion: '60:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_naturaleza_5',
                nombre: 'Océano y olas',
                descripcion: 'Sonidos relajantes del mar',
                duracion: '90:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            }
        ],
        
        // CATEGORÍA: ASMR
        'asmr': [
            {
                id: 'video_asmr_1',
                nombre: 'Susurros para dormir',
                descripcion: 'Susurros suaves en español',
                duracion: '45:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_asmr_2',
                nombre: 'Tapping en objetos',
                descripcion: 'Sonidos de golpecitos en distintas superficies',
                duracion: '30:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_asmr_3',
                nombre: 'Cepillado de micrófono',
                descripcion: 'Sonidos de cepillos y texturas',
                duracion: '20:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_asmr_4',
                nombre: 'ASMR de manos',
                descripcion: 'Movimientos y sonidos con las manos',
                duracion: '25:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_asmr_5',
                nombre: 'Desencuadernación de libros',
                descripcion: 'Sonidos de páginas y libros antiguos',
                duracion: '35:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            }
        ],
        
        // CATEGORÍA: ANIME
        'anime': [
            {
                id: 'video_anime_1',
                nombre: 'Opening de Quintillizas',
                descripcion: 'Opening completo HD',
                duracion: '1:30',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_anime_2',
                nombre: 'Momentos épicos de Kimetsu',
                descripcion: 'Compilación de mejores batallas',
                duracion: '15:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_anime_3',
                nombre: 'Edits de romance',
                descripcion: 'Mejores momentos románticos de animes',
                duracion: '10:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            },
            {
                id: 'video_anime_4',
                nombre: 'AMV - Anime Music Video',
                descripcion: 'Edit con música épica',
                duracion: '3:45',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: false
            },
            {
                id: 'video_anime_5',
                nombre: 'Comedia anime',
                descripcion: 'Los momentos más graciosos',
                duracion: '20:00',
                url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview',
                tipo: 'drive',
                favorito: true
            }
        ],
        
        // CATEGORÍA: MEMES (EJEMPLOS CON DIFERENTES TIPOS)
        'memes': [
            {
                id: 'video_meme_twitter_1',
                nombre: 'Meme viral de Twitter',
                descripcion: 'Lo más viral de esta semana',
                duracion: '0:22',
                url: 'https://video.twimg.com/amplify_video/1789945684354752512/vid/avc1/1280x720/6K4I-31TRjE32-7B.mp4?tag=16',
                tipo: 'twitter',
                favorito: true
            },
            {
                id: 'video_meme_youtube_1',
                nombre: 'Compilación graciosa YouTube',
                descripcion: 'Los mejores fails del mes',
                duracion: '5:30',
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                tipo: 'youtube',
                favorito: false
            },
            {
                id: 'video_meme_direct_1',
                nombre: 'GIF animado viral',
                descripcion: 'Directo desde servidor',
                duracion: '0:05',
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                tipo: 'direct',
                favorito: false
            }
        ]
    }
};

// ============================================================================
// 2. VARIABLES GLOBALES DEL SISTEMA
// ============================================================================

let categoriaActual = '';
let videoActual = null;

// ============================================================================
// 3. FUNCIONES PRINCIPALES DEL SISTEMA
// ============================================================================

// Función para iniciar la galería desde el menú principal
function iniciarGaleriaVideos() {
    cambiarPantalla('pantalla-galerias-videos');
    
    // Crear pantallas si no existen
    crearPantallasGaleriaVideos();
    
    // Cargar categorías
    cargarCategoriasVideos();
    
    console.log("🎬 Galería de videos iniciada - Ahora soporta: Google Drive, Twitter, YouTube, URLs directas");
}

// Función para cargar las categorías
function cargarCategoriasVideos() {
    const contenedor = document.getElementById('contenedor-categorias-videos');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(galeriaVideosConfig.categorias).forEach(categoriaId => {
        const categoria = galeriaVideosConfig.categorias[categoriaId];
        const div = document.createElement('div');
        div.className = 'galeria-categoria-card';
        div.style.borderColor = categoria.color;
        div.onclick = () => cargarVideosPorCategoria(categoriaId);
        
        // Verificar si hay videos en esta categoría
        const tieneVideos = galeriaVideosConfig.videos[categoriaId] && 
                           galeriaVideosConfig.videos[categoriaId].length > 0;
        const cantidadVideos = tieneVideos ? galeriaVideosConfig.videos[categoriaId].length : 0;
        
        div.innerHTML = `
            <img src="${categoria.imagen}" alt="${categoria.nombre}" class="galeria-imagen"
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${categoria.nombre}'">
            <div class="galeria-texto">${categoria.nombre}</div>
            <div class="galeria-info">${cantidadVideos} videos</div>
            <div class="galeria-desc">${categoria.descripcion}</div>
        `;
        
        contenedor.appendChild(div);
    });
}

// Función para cargar videos de una categoría
function cargarVideosPorCategoria(categoriaId) {
    categoriaActual = categoriaId;
    const categoria = galeriaVideosConfig.categorias[categoriaId];
    const videos = galeriaVideosConfig.videos[categoriaId] || [];
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-categoria-videos');
    const contadorElement = document.getElementById('contador-videos-categoria');
    
    if (tituloElement) tituloElement.textContent = categoria.nombre;
    if (contadorElement) contadorElement.textContent = `${videos.length} videos disponibles`;
    
    // Cargar lista de videos
    const contenedor = document.getElementById('contenedor-lista-videos');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    if (videos.length === 0) {
        contenedor.innerHTML = `
            <div class="mensaje-vacio">
                <h3>🎬 Sin videos aún</h3>
                <p>Esta categoría está vacía.</p>
                <p>¡Agrega videos usando la consola!</p>
                <button class="boton-principal" onclick="volverACategorias()">
                    ← Volver a Categorías
                </button>
            </div>
        `;
        return;
    }
    
    videos.forEach((video, index) => {
        const div = document.createElement('div');
        div.className = 'video-item-card';
        div.onclick = () => reproducirVideo(video);
        
        // Obtener icono según tipo
        const tipoIcono = obtenerIconoTipoVideo(video.tipo);
        const tipoClase = obtenerClaseTipoVideo(video.tipo);
        const tipoTexto = obtenerTextoAmigableTipo(video.tipo);
        
        div.innerHTML = `
            <div class="video-item-header">
                <span class="video-numero">${index + 1}</span>
                <div class="video-tipo-container">
                    <span class="video-favorito">${video.favorito ? '⭐' : ''}</span>
                    <span class="video-tipo-badge ${tipoClase}" title="${tipoTexto}">
                        ${tipoIcono}
                    </span>
                </div>
            </div>
            <div class="video-item-nombre">${video.nombre}</div>
            <div class="video-item-desc">${video.descripcion}</div>
            <div class="video-item-footer">
                <span class="video-duracion">⏱️ ${video.duracion}</span>
                <span class="video-play">▶️ Reproducir</span>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
    
    cambiarPantalla('pantalla-lista-videos');
}

// Función para reproducir un video (VERSIÓN MEJORADA MULTIPLATAFORMA)
function reproducirVideo(video) {
    videoActual = video;
    
    let videoUrl = '';
    let esIframe = true;
    let tipoVideo = video.tipo || 'drive'; // Por defecto drive
    
    // DETECTAR TIPO DE VIDEO SI NO ESTÁ ESPECIFICADO
    if (!video.tipo && video.url) {
        tipoVideo = detectarTipoVideo(video.url);
    }
    
    // CONSTRUIR URL SEGÚN TIPO
    switch (tipoVideo) {
        case 'drive':
            // Extraer ID de Drive de la URL
            const match = video.url.match(/\/d\/([^\/]+)/);
            if (match && match[1]) {
                videoUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
            } else {
                videoUrl = video.url;
            }
            esIframe = true;
            break;
            
        case 'twitter':
            videoUrl = video.url;
            esIframe = false; // Twitter usa video directo
            break;
            
        case 'youtube':
            // Convertir a embed
            if (video.url.includes('embed')) {
                videoUrl = video.url;
            } else if (video.url.includes('youtu.be/')) {
                const id = video.url.split('youtu.be/')[1]?.split('?')[0];
                videoUrl = `https://www.youtube.com/embed/${id}`;
            } else if (video.url.includes('v=')) {
                const id = video.url.split('v=')[1]?.split('&')[0];
                videoUrl = `https://www.youtube.com/embed/${id}`;
            } else {
                videoUrl = video.url;
            }
            esIframe = true;
            break;
            
        case 'vimeo':
            if (video.url.includes('player.vimeo.com')) {
                videoUrl = video.url;
            } else {
                const id = video.url.split('vimeo.com/')[1]?.split('?')[0];
                videoUrl = `https://player.vimeo.com/video/${id}`;
            }
            esIframe = true;
            break;
            
        default: // 'direct' o cualquier otro
            videoUrl = video.url;
            esIframe = false;
    }
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-video-reproductor');
    const descElement = document.getElementById('descripcion-video-reproductor');
    const tipoTexto = obtenerTextoAmigableTipo(tipoVideo);
    
    if (tituloElement) tituloElement.textContent = video.nombre;
    if (descElement) descElement.innerHTML = `
        <strong>Duración:</strong> ${video.duracion}<br>
        <strong>Categoría:</strong> ${galeriaVideosConfig.categorias[categoriaActual].nombre}<br>
        <strong>Origen:</strong> ${tipoTexto}<br>
        <strong>Descripción:</strong> ${video.descripcion}
    `;
    
    // Cargar el video según el tipo
    const iframeElement = document.getElementById('iframe-video-reproductor');
    const videoElement = document.getElementById('video-directo-reproductor');
    const tipoInfoElement = document.getElementById('tipo-video-info');
    
    if (esIframe) {
        // Usar iframe para Google Drive, YouTube, Vimeo, etc.
        if (iframeElement) {
            iframeElement.src = videoUrl;
            iframeElement.style.display = 'block';
            iframeElement.title = `Reproduciendo: ${video.nombre}`;
        }
        if (videoElement) {
            videoElement.style.display = 'none';
            videoElement.src = ''; // Limpiar
        }
    } else {
        // Usar elemento <video> para URLs directas (Twitter, MP4, etc.)
        if (videoElement) {
            videoElement.src = videoUrl;
            videoElement.style.display = 'block';
            videoElement.controls = true;
            videoElement.title = `Reproduciendo: ${video.nombre}`;
            
            // Intentar reproducir automáticamente (con mute para evitar bloqueos)
            videoElement.muted = true;
            videoElement.play().catch(e => {
                console.log("Autoplay bloqueado, usuario debe hacer clic");
            });
        }
        if (iframeElement) {
            iframeElement.style.display = 'none';
            iframeElement.src = ''; // Limpiar
        }
    }
    
    // Mostrar información del tipo
    if (tipoInfoElement) {
        tipoInfoElement.textContent = `Tipo: ${tipoTexto}`;
        tipoInfoElement.className = `tipo-info ${tipoVideo}-info`;
    }
    
    cambiarPantalla('pantalla-reproductor-video');
}

// ============================================================================
// 4. FUNCIONES DE NAVEGACIÓN
// ============================================================================

function volverACategorias() {
    cambiarPantalla('pantalla-galerias-videos');
}

function volverAListaVideos() {
    if (categoriaActual) {
        cargarVideosPorCategoria(categoriaActual);
    } else {
        volverACategorias();
    }
}

// ============================================================================
// 5. CREAR PANTALLAS DINÁMICAMENTE
// ============================================================================

function crearPantallasGaleriaVideos() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-galerias-videos')) {
        const pantallasHTML = `
            <!-- PANTALLA DE CATEGORÍAS DE VIDEOS -->
            <div id="pantalla-galerias-videos" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎥 GALERÍA DE VIDEOS</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎥 Galería de Videos</h1>
                    <p class="subtitulo">Selecciona una categoría para ver los videos</p>
                    
                    <div class="contenedor-categorias-videos" id="contenedor-categorias-videos">
                        <!-- Las categorías se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-galeria">
                        <p>📚 ${Object.keys(galeriaVideosConfig.videos).reduce((total, cat) => 
                            total + (galeriaVideosConfig.videos[cat] ? galeriaVideosConfig.videos[cat].length : 0), 0)} 
                            videos organizados por categorías</p>
                        <p>🎬 Soporta: Google Drive, Twitter, YouTube, URLs directas</p>
                        <p>🔧 Usa <strong>agregarVideoAGaleria()</strong> desde consola</p>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE LISTA DE VIDEOS POR CATEGORÍA -->
            <div id="pantalla-lista-videos" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-categoria-videos">Categoría</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverACategorias()">← Volver a Categorías</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h2 id="contador-videos-categoria">Videos disponibles</h2>
                    
                    <div class="contenedor-lista-videos" id="contenedor-lista-videos">
                        <!-- Los videos se cargan aquí dinámicamente -->
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE REPRODUCTOR DE VIDEO (VERSIÓN MEJORADA) -->
            <div id="pantalla-reproductor-video" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-video-reproductor">Reproduciendo Video</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAListaVideos()">← Volver a Lista</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="reproductor-container">
                        <h2>🎬 Video en Reproducción</h2>
                        
                        <div class="video-tipo-indicator">
                            <span id="tipo-video-info" class="tipo-info">Cargando...</span>
                        </div>
                        
                        <div class="iframe-video-container">
                            <!-- Iframe para Google Drive, YouTube, Vimeo -->
                            <iframe id="iframe-video-reproductor" 
                                    width="100%" 
                                    height="500"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    title="Reproductor de video"
                                    style="display: none;">
                            </iframe>
                            
                            <!-- Video directo para Twitter, MP4s, WebM, etc. -->
                            <video id="video-directo-reproductor" 
                                   width="100%" 
                                   height="500"
                                   controls
                                   style="display: none;"
                                   class="video-reproductor-directo">
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        
                        <div class="video-info-container">
                            <h3 id="descripcion-video-reproductor">Información del video</h3>
                            
                            <div class="controles-video">
                                <button class="boton-principal" onclick="marcarComoFavorito()">
                                    ⭐ Marcar como Favorito
                                </button>
                                <button class="boton-secundario" onclick="volverAListaVideos()">
                                    ← Ver Más Videos
                                </button>
                            </div>
                            
                            <div class="nota-importante">
                                <p>💡 <strong>Nota:</strong> La galería soporta múltiples plataformas:</p>
                                <ul class="plataformas-lista">
                                    <li>✅ Google Drive (iframe)</li>
                                    <li>✅ Twitter (video directo .mp4)</li>
                                    <li>✅ YouTube (embed)</li>
                                    <li>✅ URLs directas (.mp4, .webm, .ogg)</li>
                                    <li>✅ Vimeo (embed)</li>
                                </ul>
                                <p>Para agregar videos desde consola: <code>agregarVideoAGaleria('categoria', datosVideo)</code></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        console.log("✅ Pantallas de galería de videos creadas dinámicamente");
        
        // Agregar estilos específicos si no están en el CSS principal
        agregarEstilosGaleria();
    }
}

// Función para agregar estilos específicos
function agregarEstilosGaleria() {
    // Verificar si los estilos ya existen
    if (document.getElementById('estilos-galeria-videos')) return;
    
    const estilos = `
        <style id="estilos-galeria-videos">
            /* ESTILOS PARA GALERÍA DE VIDEOS */
            .galeria-categoria-card {
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
            }
            
            .galeria-categoria-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
            }
            
            .galeria-imagen {
                width: 100%;
                height: 180px;
                border-radius: 15px;
                object-fit: cover;
                border: 3px solid white;
                margin-bottom: 15px;
            }
            
            .galeria-texto {
                font-size: 1.3rem;
                font-weight: bold;
                color: white;
                margin-bottom: 8px;
            }
            
            .galeria-info {
                font-size: 1rem;
                color: #ffd700;
                font-weight: bold;
                margin-bottom: 8px;
            }
            
            .galeria-desc {
                font-size: 0.9rem;
                color: #cccccc;
                font-style: italic;
            }
            
            .contenedor-categorias-videos {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                margin: 30px 0;
            }
            
            /* LISTA DE VIDEOS - MEJORADA */
            .contenedor-lista-videos {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin: 20px 0;
                max-height: 500px;
                overflow-y: auto;
                padding: 10px;
            }
            
            .video-item-card {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
                border-radius: 15px;
                padding: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                border-left: 5px solid;
                border-left-color: ${galeriaVideosConfig.categorias[categoriaActual] ? galeriaVideosConfig.categorias[categoriaActual].color : '#4a90e2'};
            }
            
            .video-item-card:hover {
                transform: translateX(10px);
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
            }
            
            .video-item-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
            }
            
            .video-tipo-container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .video-numero {
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
            
            .video-favorito {
                color: #ffd700;
                font-size: 1.2rem;
            }
            
            .video-tipo-badge {
                display: inline-block;
                padding: 4px 10px;
                border-radius: 12px;
                font-size: 0.8rem;
                font-weight: bold;
                color: white;
                cursor: help;
            }
            
            .video-tipo-badge.drive { background: #4285F4; }
            .video-tipo-badge.twitter { background: #1DA1F2; }
            .video-tipo-badge.youtube { background: #FF0000; }
            .video-tipo-badge.direct { background: #00C851; }
            .video-tipo-badge.vimeo { background: #1ab7ea; }
            
            .video-item-nombre {
                font-size: 1.2rem;
                font-weight: bold;
                color: white;
                margin-bottom: 8px;
            }
            
            .video-item-desc {
                font-size: 0.9rem;
                color: #cccccc;
                margin-bottom: 15px;
                line-height: 1.4;
            }
            
            .video-item-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .video-duracion {
                color: #4a90e2;
                font-weight: bold;
            }
            
            .video-play {
                color: #00ff88;
                font-weight: bold;
                background: rgba(0, 255, 136, 0.1);
                padding: 5px 10px;
                border-radius: 10px;
            }
            
            /* REPRODUCTOR MEJORADO */
            .reproductor-container {
                max-width: 900px;
                margin: 0 auto;
            }
            
            .video-tipo-indicator {
                text-align: center;
                margin: 10px 0;
            }
            
            .tipo-info {
                display: inline-block;
                padding: 5px 15px;
                border-radius: 15px;
                font-weight: bold;
                color: white;
            }
            
            .drive-info { background: #4285F4; }
            .twitter-info { background: #1DA1F2; }
            .youtube-info { background: #FF0000; }
            .direct-info { background: #00C851; }
            .vimeo-info { background: #1ab7ea; }
            
            .iframe-video-container {
                background: #000;
                border-radius: 15px;
                overflow: hidden;
                margin: 20px 0;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                border: 3px solid #4a90e2;
                min-height: 500px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .video-reproductor-directo {
                border-radius: 15px;
                background: #000;
                border: 3px solid #4a90e2;
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                display: block;
            }
            
            .video-info-container {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #ff6b9d;
            }
            
            .video-info-container h3 {
                color: white;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .controles-video {
                display: flex;
                gap: 15px;
                margin: 20px 0;
                flex-wrap: wrap;
            }
            
            .nota-importante {
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 10px 15px;
                border-radius: 5px;
                margin-top: 20px;
            }
            
            .nota-importante p {
                color: #ffd700;
                margin: 5px 0;
                font-size: 0.9rem;
            }
            
            .plataformas-lista {
                margin: 10px 0;
                padding-left: 20px;
            }
            
            .plataformas-lista li {
                color: #ffffff;
                margin: 5px 0;
                font-size: 0.9rem;
            }
            
            /* MENSAJE VACÍO */
            .mensaje-vacio {
                text-align: center;
                padding: 50px 20px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                border: 2px dashed #4a90e2;
            }
            
            .mensaje-vacio h3 {
                color: #4a90e2;
                margin-bottom: 15px;
                font-size: 1.5rem;
            }
            
            .mensaje-vacio p {
                color: #cccccc;
                margin-bottom: 10px;
                font-size: 1rem;
            }
            
            .info-galeria {
                text-align: center;
                margin: 30px 0;
                padding: 15px;
                background: rgba(255, 107, 157, 0.1);
                border-radius: 10px;
                border-left: 4px solid #ff6b9d;
            }
            
            .info-galeria p {
                color: #ff6b9d;
                margin: 5px 0;
                font-weight: bold;
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .galeria-categoria-card {
                    width: 100%;
                    max-width: 300px;
                }
                
                .iframe-video-container,
                .video-reproductor-directo {
                    height: 300px;
                }
                
                .iframe-video-container iframe,
                .video-reproductor-directo {
                    height: 300px;
                }
                
                .controles-video {
                    flex-direction: column;
                }
                
                .controles-video button {
                    width: 100%;
                }
                
                .video-tipo-badge {
                    font-size: 0.7rem;
                    padding: 3px 8px;
                }
            }
            
            @media (max-width: 480px) {
                .iframe-video-container,
                .video-reproductor-directo {
                    height: 250px;
                }
                
                .video-item-card {
                    padding: 15px;
                }
                
                .video-item-nombre {
                    font-size: 1.1rem;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 6. FUNCIONES ADICIONALES
// ============================================================================

function marcarComoFavorito() {
    if (!videoActual || !categoriaActual) return;
    
    const videosCategoria = galeriaVideosConfig.videos[categoriaActual];
    if (!videosCategoria) return;
    
    const videoIndex = videosCategoria.findIndex(v => v.id === videoActual.id);
    if (videoIndex === -1) return;
    
    // Cambiar estado de favorito
    videosCategoria[videoIndex].favorito = !videosCategoria[videoIndex].favorito;
    videoActual.favorito = videosCategoria[videoIndex].favorito;
    
    // Mostrar mensaje
    const mensaje = videoActual.favorito ? 
        '⭐ Video marcado como favorito' : 
        '📝 Video quitado de favoritos';
    
    mostrarNotificacionGaleria(mensaje);
    
    // Actualizar interfaz si estamos en la lista
    if (document.getElementById('pantalla-lista-videos').classList.contains('activa')) {
        cargarVideosPorCategoria(categoriaActual);
    }
}

function mostrarNotificacionGaleria(mensaje) {
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

// ============================================================================
// 7. FUNCIONES DE UTILIDAD PARA TIPOS DE VIDEO
// ============================================================================

function detectarTipoVideo(url) {
    if (!url) return 'unknown';
    
    if (url.includes('drive.google.com')) return 'drive';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('twitter.com') || url.includes('twimg.com') || url.includes('twvideo.com')) return 'twitter';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || 
        url.endsWith('.mov') || url.endsWith('.avi') || url.includes('video/')) {
        return 'direct';
    }
    return 'unknown';
}

function obtenerIconoTipoVideo(tipo) {
    switch(tipo) {
        case 'drive': return '📁';
        case 'twitter': return '🐦';
        case 'youtube': return '📺';
        case 'vimeo': return '🎬';
        case 'direct': return '🔗';
        default: return '❓';
    }
}

function obtenerClaseTipoVideo(tipo) {
    return tipo || 'unknown';
}

function obtenerTextoAmigableTipo(tipo) {
    switch(tipo) {
        case 'drive': return 'Google Drive';
        case 'twitter': return 'Twitter';
        case 'youtube': return 'YouTube';
        case 'vimeo': return 'Vimeo';
        case 'direct': return 'URL Directa';
        default: return 'Desconocido';
    }
}

// ============================================================================
// 8. FUNCIONES DE TESTING Y MANEJO DESDE CONSOLA
// ============================================================================

// Agregar un video a una categoría desde consola (VERSIÓN MEJORADA)
window.agregarVideoAGaleria = function(categoriaId, videoData) {
    if (!galeriaVideosConfig.videos[categoriaId]) {
        galeriaVideosConfig.videos[categoriaId] = [];
    }
    
    // Detectar tipo automáticamente si no se especifica
    if (!videoData.tipo && videoData.url) {
        videoData.tipo = detectarTipoVideo(videoData.url);
    }
    
    // Asegurarse de que tenga un ID único
    if (!videoData.id) {
        videoData.id = `video_${categoriaId}_${Date.now()}`;
    }
    
    // Asegurarse de que tenga duración
    if (!videoData.duracion) {
        videoData.duracion = '0:00';
    }
    
    // Asegurarse de que tenga favorito
    if (videoData.favorito === undefined) {
        videoData.favorito = false;
    }
    
    galeriaVideosConfig.videos[categoriaId].push(videoData);
    console.log(`✅ Video agregado a categoría "${categoriaId}":`, videoData.nombre);
    console.log(`   Tipo: ${videoData.tipo}, URL: ${videoData.url}`);
    
    // Si esta categoría está actualmente cargada, actualizar
    if (categoriaActual === categoriaId && 
        document.getElementById('pantalla-lista-videos').classList.contains('activa')) {
        cargarVideosPorCategoria(categoriaId);
    }
    
    return videoData.id;
};

// Función especial para agregar videos de Twitter
window.agregarVideoTwitter = function(categoriaId, nombre, urlTwitter, descripcion = "", duracion = "0:00") {
    const videoData = {
        id: `twitter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        nombre: nombre,
        descripcion: descripcion,
        duracion: duracion,
        url: urlTwitter,
        tipo: 'twitter',
        favorito: false
    };
    
    return window.agregarVideoAGaleria(categoriaId, videoData);
};

// Función especial para agregar videos de YouTube
window.agregarVideoYouTube = function(categoriaId, nombre, urlYouTube, descripcion = "", duracion = "0:00") {
    const videoData = {
        id: `youtube_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        nombre: nombre,
        descripcion: descripcion,
        duracion: duracion,
        url: urlYouTube,
        tipo: 'youtube',
        favorito: false
    };
    
    return window.agregarVideoAGaleria(categoriaId, videoData);
};

// Función especial para agregar videos directos (MP4, etc.)
window.agregarVideoDirecto = function(categoriaId, nombre, urlDirecta, descripcion = "", duracion = "0:00") {
    const videoData = {
        id: `direct_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        nombre: nombre,
        descripcion: descripcion,
        duracion: duracion,
        url: urlDirecta,
        tipo: 'direct',
        favorito: false
    };
    
    return window.agregarVideoAGaleria(categoriaId, videoData);
};

// Convertir videos antiguos (driveId) al nuevo formato (url + tipo)
window.actualizarVideosAnteriores = function() {
    let actualizados = 0;
    
    Object.keys(galeriaVideosConfig.videos).forEach(categoria => {
        galeriaVideosConfig.videos[categoria].forEach(video => {
            if (video.driveId && !video.url) {
                // Convertir driveId a url
                video.url = `https://drive.google.com/file/d/${video.driveId}/preview`;
                video.tipo = 'drive';
                delete video.driveId;
                actualizados++;
            }
            // También actualizar si tiene url pero no tipo
            else if (video.url && !video.tipo) {
                video.tipo = detectarTipoVideo(video.url);
                actualizados++;
            }
        });
    });
    
    console.log(`✅ ${actualizados} videos actualizados al nuevo formato`);
    
    // Recargar si hay categoría actual
    if (categoriaActual) {
        cargarVideosPorCategoria(categoriaActual);
    }
    
    return actualizados;
};

// Ver estado de la galería
window.verEstadoGaleria = function() {
    console.log("🎬 ESTADO DE LA GALERÍA DE VIDEOS:");
    console.log("- Categorías disponibles:", Object.keys(galeriaVideosConfig.categorias).length);
    console.log("- Categoría actual:", categoriaActual);
    console.log("- Video actual:", videoActual ? `${videoActual.nombre} (${videoActual.tipo})` : "Ninguno");
    
    // Contar videos por categoría y tipo
    let totalVideos = 0;
    Object.keys(galeriaVideosConfig.videos).forEach(catId => {
        const videos = galeriaVideosConfig.videos[catId];
        if (videos && videos.length > 0) {
            console.log(`  📁 ${catId}: ${videos.length} videos`);
            
            // Contar por tipo
            const tipos = {};
            videos.forEach(video => {
                const tipo = video.tipo || 'unknown';
                tipos[tipo] = (tipos[tipo] || 0) + 1;
            });
            
            Object.keys(tipos).forEach(tipo => {
                console.log(`    ↳ ${tipo}: ${tipos[tipo]}`);
            });
            
            totalVideos += videos.length;
        }
    });
    
    console.log(`- Total videos en sistema: ${totalVideos}`);
};

// Cambiar URL de un video
window.cambiarUrlVideo = function(categoriaId, videoId, nuevaUrl) {
    const videos = galeriaVideosConfig.videos[categoriaId];
    if (!videos) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return false;
    }
    
    const video = videos.find(v => v.id === videoId);
    if (!video) {
        console.log(`❌ Video ${videoId} no encontrado en ${categoriaId}`);
        return false;
    }
    
    const viejaUrl = video.url;
    video.url = nuevaUrl;
    video.tipo = detectarTipoVideo(nuevaUrl);
    
    console.log(`✅ URL actualizada para ${video.nombre}:`);
    console.log(`   Vieja: ${viejaUrl}`);
    console.log(`   Nueva: ${nuevaUrl}`);
    console.log(`   Tipo detectado: ${video.tipo}`);
    
    // Si este video está actualmente reproduciéndose, actualizar
    if (videoActual && videoActual.id === videoId) {
        reproducirVideo(video);
    }
    
    return true;
};

// Ver todos los videos de una categoría
window.verVideosCategoria = function(categoriaId) {
    const videos = galeriaVideosConfig.videos[categoriaId];
    if (!videos) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return;
    }
    
    console.log(`🎬 Videos en ${categoriaId} (${videos.length}):`);
    videos.forEach((video, index) => {
        console.log(`  ${index + 1}. ${video.nombre} (${video.duracion})`);
        console.log(`     Tipo: ${video.tipo || 'N/A'}`);
        console.log(`     URL: ${video.url}`);
        console.log(`     Favorito: ${video.favorito ? '⭐' : 'No'}`);
        console.log(`     Desc: ${video.descripcion}`);
        console.log('');
    });
};

// Probar diferentes tipos de URLs
window.probarTiposVideo = function() {
    console.log("🧪 PROBANDO DETECCIÓN DE TIPOS:");
    
    const ejemplos = [
        { url: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/preview', tipo: 'drive' },
        { url: 'https://video.twimg.com/amplify_video/123456789.mp4', tipo: 'twitter' },
        { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', tipo: 'youtube' },
        { url: 'https://youtu.be/dQw4w9WgXcQ', tipo: 'youtube' },
        { url: 'https://vimeo.com/123456789', tipo: 'vimeo' },
        { url: 'https://ejemplo.com/video.mp4', tipo: 'direct' },
        { url: 'https://ejemplo.com/video.webm', tipo: 'direct' },
        { url: 'https://ejemplo.com/video.ogg', tipo: 'direct' }
    ];
    
    ejemplos.forEach(ejemplo => {
        const detectado = detectarTipoVideo(ejemplo.url);
        const correcto = detectado === ejemplo.tipo;
        console.log(`${correcto ? '✅' : '❌'} ${ejemplo.url} -> ${detectado} (esperado: ${ejemplo.tipo})`);
    });
};

// Reiniciar galería (testing)
window.reiniciarGaleriaVideos = function() {
    if (confirm("¿Estás seguro de reiniciar TODA la galería de videos?\nSe perderán los videos agregados manualmente.")) {
        // Guardar la estructura original
        const categoriasOriginales = { ...galeriaVideosConfig.categorias };
        
        // Limpiar videos (mantener estructura básica)
        Object.keys(galeriaVideosConfig.videos).forEach(cat => {
            galeriaVideosConfig.videos[cat] = [];
        });
        
        console.log("🔄 Galería de videos reiniciada");
        
        // Recargar si está activa
        if (categoriaActual) {
            cargarVideosPorCategoria(categoriaActual);
        }
    }
};

// Ejemplo rápido para agregar video de prueba
window.agregarVideoPrueba = function() {
    const categoria = 'memes';
    const videoData = {
        nombre: 'Video de prueba Twitter',
        descripcion: 'Este es un video de prueba agregado desde consola',
        duracion: '0:30',
        url: 'https://video.twimg.com/amplify_video/1789945684354752512/vid/avc1/1280x720/6K4I-31TRjE32-7B.mp4?tag=16',
        tipo: 'twitter',
        favorito: true
    };
    
    return window.agregarVideoAGaleria(categoria, videoData);
};

// ============================================================================
// 9. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

// Hacer funciones disponibles globalmente
window.iniciarGaleriaVideos = iniciarGaleriaVideos;
window.cargarCategoriasVideos = cargarCategoriasVideos;
window.cargarVideosPorCategoria = cargarVideosPorCategoria;
window.reproducirVideo = reproducirVideo;
window.volverACategorias = volverACategorias;
window.volverAListaVideos = volverAListaVideos;
window.marcarComoFavorito = marcarComoFavorito;
window.crearPantallasGaleriaVideos = crearPantallasGaleriaVideos;

console.log("✅ Galería de videos MULTIPLATAFORMA cargada correctamente");
console.log("🎥 Usa iniciarGaleriaVideos() para comenzar");
console.log("🔧 Funciones de testing disponibles desde consola:");
console.log("   - agregarVideoAGaleria(categoriaId, videoData)");
console.log("   - agregarVideoTwitter(categoriaId, nombre, url, descripcion, duracion)");
console.log("   - agregarVideoYouTube(categoriaId, nombre, url, descripcion, duracion)");
console.log("   - agregarVideoDirecto(categoriaId, nombre, url, descripcion, duracion)");
console.log("   - actualizarVideosAnteriores() - Para migrar videos antiguos");
console.log("   - verEstadoGaleria()");
console.log("   - cambiarUrlVideo(categoriaId, videoId, nuevaUrl)");
console.log("   - verVideosCategoria(categoriaId)");
console.log("   - probarTiposVideo()");
console.log("   - agregarVideoPrueba() - Agrega un video de Twitter de prueba");
console.log("   - reiniciarGaleriaVideos()");

// Inicializar automáticamente la migración si hay videos antiguos
setTimeout(() => {
    let tieneVideosAntiguos = false;
    Object.keys(galeriaVideosConfig.videos).forEach(cat => {
        galeriaVideosConfig.videos[cat].forEach(video => {
            if (video.driveId && !video.url) {
                tieneVideosAntiguos = true;
            }
        });
    });
    
    if (tieneVideosAntiguos) {
        console.log("🔄 Se detectaron videos en formato antiguo (driveId)");
        console.log("💡 Usa actualizarVideosAnteriores() para migrarlos al nuevo formato");
    }
}, 1000);
