// ============================================================================
// GALERÍA DE VIDEOS PURA (SOLO X/TWITTER)
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - BASE DE DATOS DE VIDEOS POR CATEGORÍAS (SOLO X)
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
        },
        'fabrizio': {
            id: 'fabrizio',
            nombre: '😎 Fabrizio',
            imagen: 'https://pbs.twimg.com/profile_images/1777001206605565952/smP9wJjU_400x400.jpg',
            color: '#1DA1F2',
            descripcion: 'Videos especiales de Fabrizio'
        }
    },
    
    // BASE DE DATOS DE VIDEOS (SOLO LINKS DE X/TWITTER)
    videos: {
        // CATEGORÍA: MÚSICA
        'musica': [
            {
                id: 'video_musica_1',
                nombre: 'Música Lo-Fi para estudiar',
                descripcion: 'Playlist de 1 hora de música lo-fi desde X',
                duracion: '1:00:00',
                plataforma: 'x',
                url: 'https://x.com/i/status/1987332070730047737',
                favorito: true
            },
            {
                id: 'video_musica_2',
                nombre: 'Jazz relajante',
                descripcion: 'Stream de jazz en vivo desde X',
                duracion: '2:00:00',
                plataforma: 'x',
                url: 'https://x.com/i/status/1987332070730047737',
                favorito: false
            }
        ],
        
        // CATEGORÍA: ANIME
        'anime': [
            {
                id: 'video_anime_1',
                nombre: 'Opening Quintillizas',
                descripcion: 'Opening completo HD desde X',
                duracion: '1:30',
                plataforma: 'x',
                url: 'https://twitter.com/animetv_jp/status/1767777777777777777',
                favorito: true
            },
            {
                id: 'video_anime_2',
                nombre: 'AMV - Anime Music Video',
                descripcion: 'Edit épico con música',
                duracion: '3:45',
                plataforma: 'x',
                url: 'https://twitter.com/AMV_Edits/status/1888888888888888888',
                favorito: false
            }
        ],
        
        // CATEGORÍA: MEMES
        'memes': [
            {
                id: 'video_memes_1',
                nombre: 'Memes del día',
                descripcion: 'Compilación de memes virales',
                duracion: '5:20',
                plataforma: 'x',
                url: 'https://twitter.com/MemesDaily/status/1999999999999999999',
                favorito: true
            },
            {
                id: 'video_memes_2',
                nombre: 'Fails divertidos',
                descripcion: 'Los mejores fails de la semana',
                duracion: '4:15',
                plataforma: 'x',
                url: 'https://twitter.com/FailArmy/status/1777777777777777777',
                favorito: false
            }
        ],
        
        // CATEGORÍA: FABRIZIO (NUEVA)
        'fabrizio': [
            {
                id: 'video_fabrizio_1',
                nombre: 'Fabrizio - Video 1',
                descripcion: 'Video especial de Fabrizio',
                duracion: '0:30',
                plataforma: 'x',
                url: 'https://twitter.com/FabrizioFan/status/1666666666666666666',
                favorito: true
            },
            {
                id: 'video_fabrizio_2',
                nombre: 'Fabrizio - Video 2',
                descripcion: 'Otro video increíble',
                duracion: '0:45',
                plataforma: 'x',
                url: 'https://twitter.com/FabrizioFan/status/1777777777777777777',
                favorito: true
            }
        ]
    }
};

// ============================================================================
// 2. FUNCIONES PARA X/TWITTER
// ============================================================================

// Función para obtener tweet ID desde URL de X
function obtenerTweetId(url) {
    try {
        // Extraer ID del tweet de varias formas posibles
        const match = url.match(/\/(\d+)(?:\?|$)/);
        return match ? match[1] : null;
    } catch (e) {
        console.error('Error obteniendo tweet ID:', e);
        return null;
    }
}

// Función para reproducir video de X
function reproducirVideoX(video) {
    videoActual = video;
    
    const tweetId = obtenerTweetId(video.url);
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-video-reproductor');
    const descElement = document.getElementById('descripcion-video-reproductor');
    
    if (tituloElement) tituloElement.textContent = video.nombre;
    if (descElement) descElement.innerHTML = `
        <strong>Duración:</strong> ${video.duracion}<br>
        <strong>Categoría:</strong> ${galeriaVideosConfig.categorias[categoriaActual].nombre}<br>
        <strong>Plataforma:</strong> X (Twitter)<br>
        <strong>Descripción:</strong> ${video.descripcion}
    `;
    
    // Contenedor de video
    const contenedorVideo = document.getElementById('contenedor-video-dinamico');
    if (!contenedorVideo) return;
    
    // Limpiar contenedor
    contenedorVideo.innerHTML = '';
    
    if (tweetId) {
        // Usar Twitter Embed API
        contenedorVideo.innerHTML = `
            <div class="twitter-embed-container" style="width: 100%; max-width: 550px; margin: 0 auto;">
                <blockquote class="twitter-tweet">
                    <a href="${video.url}"></a>
                </blockquote>
            </div>
        `;
        
        // Cargar widget de Twitter
        cargarTwitterWidget();
    } else {
        // Mostrar enlace directo como alternativa
        contenedorVideo.innerHTML = `
            <div class="twitter-link-fallback">
                <h3>🔗 Enlace directo al tweet:</h3>
                <a href="${video.url}" target="_blank" class="twitter-link">
                    ${video.url}
                </a>
                <p class="twitter-nota">Abre este enlace en una nueva pestaña para ver el video</p>
            </div>
        `;
    }
    
    cambiarPantalla('pantalla-reproductor-video');
}

// Función para cargar widget de Twitter
function cargarTwitterWidget() {
    // Eliminar script existente si hay
    const scriptExistente = document.querySelector('script[src*="twitter.com/widgets.js"]');
    if (scriptExistente) {
        scriptExistente.remove();
    }
    
    // Crear nuevo script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    
    script.onload = function() {
        console.log('✅ Widget de Twitter cargado');
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
        }
    };
    
    script.onerror = function() {
        console.error('❌ Error cargando widget de Twitter');
        mostrarFallbackTwitter();
    };
    
    document.head.appendChild(script);
}

// Fallback si Twitter widget falla
function mostrarFallbackTwitter() {
    const contenedorVideo = document.getElementById('contenedor-video-dinamico');
    if (!contenedorVideo || !videoActual) return;
    
    contenedorVideo.innerHTML = `
        <div class="twitter-fallback" style="text-align: center; padding: 40px;">
            <h3>🐦 Video de X (Twitter)</h3>
            <p>No se pudo cargar el widget embebido, pero puedes ver el video directamente:</p>
            <a href="${videoActual.url}" target="_blank" 
               style="display: inline-block; margin: 20px; padding: 15px 30px; 
                      background: #1DA1F2; color: white; border-radius: 10px; 
                      text-decoration: none; font-weight: bold;">
                👉 Ver video en X
            </a>
            <p><small>Se abrirá en una nueva pestaña</small></p>
        </div>
    `;
}

// ============================================================================
// 3. FUNCIONES PRINCIPALES MODIFICADAS
// ============================================================================

// Función para reproducir video (ahora solo X)
function reproducirVideo(video) {
    reproducirVideoX(video);
}

// ============================================================================
// 4. MODIFICAR PANTALLAS PARA MOSTRAR ICONO DE X
// ============================================================================

function crearPantallasGaleriaVideos() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-galerias-videos')) {
        const pantallasHTML = `
            <!-- PANTALLA DE CATEGORÍAS DE VIDEOS -->
            <div id="pantalla-galerias-videos" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🐦 VIDEOS DE X (TWITTER)</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🐦 Galería de Videos de X</h1>
                    <p class="subtitulo">Videos embebidos directamente desde Twitter/X</p>
                    
                    <div class="info-plataforma" style="text-align: center; margin: 20px 0; padding: 15px; background: rgba(29, 161, 242, 0.1); border-radius: 10px;">
                        <p style="color: #1DA1F2; font-weight: bold;">📱 Todos los videos provienen de X (Twitter)</p>
                        <p style="color: #8899A6; font-size: 0.9rem;">Se reproducen directamente en la app</p>
                    </div>
                    
                    <div class="contenedor-categorias-videos" id="contenedor-categorias-videos">
                        <!-- Las categorías se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-galeria">
                        <p>📊 ${Object.keys(galeriaVideosConfig.videos).reduce((total, cat) => 
                            total + (galeriaVideosConfig.videos[cat] ? galeriaVideosConfig.videos[cat].length : 0), 0)} 
                            videos disponibles</p>
                        <p>🎬 Solo videos de X, sin descargas ni mazos</p>
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
                    
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0;">
                        <h2 id="contador-videos-categoria" style="margin: 0;">Videos disponibles</h2>
                        <span style="background: #1DA1F2; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem;">
                            🐦 X
                        </span>
                    </div>
                    
                    <div class="contenedor-lista-videos" id="contenedor-lista-videos">
                        <!-- Los videos se cargan aquí dinámicamente -->
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE REPRODUCTOR DE VIDEO -->
            <div id="pantalla-reproductor-video" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-video-reproductor">Reproduciendo Video de X</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAListaVideos()">← Volver a Lista</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="reproductor-container">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
                            <h2 style="margin: 0;">🎬 Video de X</h2>
                            <span style="background: #1DA1F2; color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">
                                🐦 X (Twitter)
                            </span>
                        </div>
                        
                        <div id="contenedor-video-dinamico" style="min-height: 500px;">
                            <!-- Aquí se carga dinámicamente el video de X -->
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
                                <button class="boton-terciario" onclick="abrirEnTwitter()" 
                                        style="background: #1DA1F2; color: white;">
                                    🐦 Abrir en X
                                </button>
                            </div>
                            
                            <div class="nota-importante">
                                <p>💡 <strong>Nota:</strong> Los videos se cargan directamente desde X (Twitter). Necesitas conexión a internet.</p>
                                <p>📱 Si el video no se carga, usa el botón "Abrir en X" para verlo directamente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        console.log("✅ Pantallas de galería de videos de X creadas dinámicamente");
        
        // Agregar estilos específicos para X
        agregarEstilosGaleriaX();
    }
}

// Función para agregar estilos específicos para X
function agregarEstilosGaleriaX() {
    if (document.getElementById('estilos-galeria-x')) return;
    
    const estilos = `
        <style id="estilos-galeria-x">
            /* ESTILOS ESPECÍFICOS PARA X */
            .galeria-categoria-card {
                background: linear-gradient(135deg, #15202b, #1c2938);
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
            }
            
            .galeria-categoria-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 30px rgba(29, 161, 242, 0.3);
                border-color: #1DA1F2;
            }
            
            .galeria-categoria-card::before {
                content: '🐦';
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 1.2rem;
                opacity: 0.7;
            }
            
            .twitter-embed-container {
                margin: 20px auto;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                background: #15202b;
            }
            
            .twitter-link-fallback {
                background: #15202b;
                border-radius: 15px;
                padding: 30px;
                text-align: center;
                border: 2px solid #1DA1F2;
            }
            
            .twitter-link {
                display: block;
                color: #1DA1F2;
                text-decoration: none;
                font-weight: bold;
                margin: 20px 0;
                padding: 15px;
                background: rgba(29, 161, 242, 0.1);
                border-radius: 10px;
                word-break: break-all;
            }
            
            .twitter-link:hover {
                background: rgba(29, 161, 242, 0.2);
            }
            
            .twitter-nota {
                color: #8899A6;
                font-size: 0.9rem;
                margin-top: 10px;
            }
            
            .twitter-fallback {
                background: #15202b;
                border-radius: 15px;
                padding: 40px;
                border: 2px solid #1DA1F2;
            }
            
            /* Mejorar estilos de lista de videos para X */
            .video-item-card {
                background: linear-gradient(135deg, rgba(29, 161, 242, 0.1), rgba(29, 161, 242, 0.05));
                border-radius: 15px;
                padding: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                border-left: 5px solid #1DA1F2;
                position: relative;
            }
            
            .video-item-card:hover {
                transform: translateX(10px);
                background: linear-gradient(135deg, rgba(29, 161, 242, 0.15), rgba(29, 161, 242, 0.1));
                box-shadow: 0 5px 15px rgba(29, 161, 242, 0.2);
            }
            
            .video-item-card::before {
                content: '🐦';
                position: absolute;
                top: 10px;
                right: 10px;
                opacity: 0.5;
            }
            
            .boton-twitter {
                background: #1DA1F2;
                color: white;
                border: none;
                border-radius: 10px;
                padding: 10px 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: bold;
            }
            
            .boton-twitter:hover {
                background: #1a91da;
                transform: translateY(-2px);
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 5. FUNCIONES ADICIONALES PARA X
// ============================================================================

function abrirEnTwitter() {
    if (videoActual && videoActual.url) {
        window.open(videoActual.url, '_blank');
    }
}

// ============================================================================
// 6. FUNCIONES DE TESTING MEJORADAS PARA X
// ============================================================================

// Agregar un video de X desde consola
window.agregarVideoX = function(categoriaId, nombre, descripcion, urlTwitter, duracion = '1:00') {
    if (!galeriaVideosConfig.videos[categoriaId]) {
        galeriaVideosConfig.videos[categoriaId] = [];
    }
    
    const nuevoVideo = {
        id: `video_${categoriaId}_${Date.now()}`,
        nombre: nombre,
        descripcion: descripcion,
        duracion: duracion,
        plataforma: 'x',
        url: urlTwitter,
        favorito: false
    };
    
    galeriaVideosConfig.videos[categoriaId].push(nuevoVideo);
    console.log(`✅ Video de X agregado a "${categoriaId}":`, nombre);
    console.log(`🔗 URL: ${urlTwitter}`);
    
    // Actualizar si esta categoría está activa
    if (categoriaActual === categoriaId) {
        cargarVideosPorCategoria(categoriaId);
    }
    
    return nuevoVideo;
};

// Verificar URLs de X
window.verificarVideosX = function() {
    console.log("🔍 Verificando videos de X:");
    
    Object.keys(galeriaVideosConfig.videos).forEach(catId => {
        console.log(`\n📂 Categoría: ${catId}`);
        galeriaVideosConfig.videos[catId].forEach((video, idx) => {
            const tweetId = obtenerTweetId(video.url);
            console.log(`  ${idx + 1}. ${video.nombre}`);
            console.log(`     URL: ${video.url}`);
            console.log(`     Tweet ID: ${tweetId || 'No detectado'}`);
            console.log(`     Plataforma: ${video.plataforma}`);
        });
    });
};

// Buscar videos por palabra clave
window.buscarVideosX = function(palabraClave) {
    const resultados = [];
    
    Object.keys(galeriaVideosConfig.videos).forEach(catId => {
        galeriaVideosConfig.videos[catId].forEach(video => {
            if (video.nombre.toLowerCase().includes(palabraClave.toLowerCase()) ||
                video.descripcion.toLowerCase().includes(palabraClave.toLowerCase())) {
                resultados.push({
                    categoria: catId,
                    video: video
                });
            }
        });
    });
    
    console.log(`🔎 Resultados para "${palabraClave}":`, resultados.length);
    resultados.forEach((r, idx) => {
        console.log(`${idx + 1}. [${r.categoria}] ${r.video.nombre}`);
        console.log(`   ${r.video.url}`);
    });
    
    return resultados;
};

// ============================================================================
// 7. INICIALIZACIÓN MEJORADA
// ============================================================================

// Modificar la función de inicio para mostrar info de X
function iniciarGaleriaVideos() {
    cambiarPantalla('pantalla-galerias-videos');
    
    // Crear pantallas si no existen
    crearPantallasGaleriaVideos();
    
    // Cargar categorías
    cargarCategoriasVideos();
    
    console.log("🐦 Galería de videos de X iniciada");
    console.log("📱 Todos los videos son de Twitter/X");
    console.log("🔧 Comandos disponibles desde consola:");
    console.log("   - agregarVideoX(categoria, nombre, desc, url, duracion)");
    console.log("   - verificarVideosX()");
    console.log("   - buscarVideosX(palabraClave)");
}

// ============================================================================
// 8. EXPORTAR FUNCIONES
// ============================================================================

window.iniciarGaleriaVideos = iniciarGaleriaVideos;
window.reproducirVideo = reproducirVideo;
window.abrirEnTwitter = abrirEnTwitter;
window.agregarVideoX = agregarVideoX;
window.verificarVideosX = verificarVideosX;
window.buscarVideosX = buscarVideosX;

console.log("✅ Galería de videos de X cargada correctamente");
console.log("🐦 Usa iniciarGaleriaVideos() para comenzar");
