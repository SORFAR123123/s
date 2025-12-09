// ============================================================================
// GALERÍA DE VIDEOS PURA (SIN MAZOS) - CON IMÁGENES POR VIDEO
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - BASE DE DATOS DE VIDEOS POR CATEGORÍAS
// ============================================================================

const galeriaVideosConfig = {
    categorias: {
        'musica': {
            id: 'musica',
            nombre: 'Quintillizas potonas',
            imagen: 'https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small',
            color: '#ff6b6b',
            descripcion: 'Música para estudiar y relajarse'
        },
        'naturaleza': {
            id: 'naturaleza',
            nombre: '🦊  Yae kitsune potona 🦊 ',
            imagen: 'https://pbs.twimg.com/media/G7whSr6WQAASlUq?format=jpg&name=small',
            color: '#00b894',
            descripcion: 'Paisajes y sonidos de la naturaleza'
        },
        'asmr': {
            id: 'asmr',
            nombre: 'Potonas Reales',
            imagen: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400',
            color: '#6c5ce7',
            descripcion: 'Sonidos relajantes y susurros'
        },
        'anime': {
            id: 'anime',
            nombre: '🎬 Cosplay potonas ricas',
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
    
    // BASE DE DATOS DE VIDEOS (IDs de Google Drive) - CON IMÁGENES POR VIDEO
    videos: {
        // CATEGORÍA: MÚSICA
        'musica': [
            {
                id: 'video_musica_1',
                nombre: 'Quintis potonas',
                descripcion: 'Playlist de 1 hora de música lo-fi',
                duracion: '60:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://pbs.twimg.com/media/G7wfStPXUAA1Ra2?format=png&name=small',
                favorito: true
            },
            {
                id: 'video_musica_2',
                nombre: 'Nino mariposa potona',
                descripcion: 'El mejor poto tsundere chupa enojada',
                duracion: '45:30',
                driveId: '11hBAFRHLV6hnaVLYZEuZPISvL-TvsJZO',
                imagen: 'https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large',
                favorito: false
            },
            {
                id: 'video_musica_3',
                nombre: 'Miku potona',
                descripcion: 'El mejor poto timido',
                duracion: '50:15',
                driveId: '1n-U5gThXn-JIn17eDyyalAf2aelTbfEb',
                imagen: 'https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large',
                favorito: false
            },
            {
                id: 'video_musica_4',
                nombre: 'Sonidos de piano para dormir',
                descripcion: 'Melodías suaves de piano nocturno',
                duracion: '90:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_musica_5',
                nombre: 'Música ambiente electrónica',
                descripcion: 'Sintetizadores y paisajes sonoros',
                duracion: '75:20',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&fit=crop',
                favorito: false
            }
        ],
        
        // CATEGORÍA: NATURALEZA
        'naturaleza': [
            {
                id: 'video_naturaleza_1',
                nombre: 'Yae potona sweet darling',
                descripcion: 'Paseo por un bosque con hojas cayendo',
                duracion: '30:00',
                driveId: '1i90Pj3BMSfc63lQXguevklfB6yV84PSX',
                imagen: 'https://pbs.twimg.com/media/G7whKvWXkAAhMuQ?format=png&name=small',
                favorito: true
            },
            {
                id: 'video_naturaleza_2',
                nombre: ' Yae potona sweetiefox',
                descripcion: 'Sonidos de agua corriente y cascadas',
                duracion: '45:00',
                driveId: '1YS1Dn1BFFmD9Zv0jNVGtFB9G2lqLwOQl',
                imagen: 'https://pbs.twimg.com/media/G7whSr6WQAASlUq?format=jpg&name=small',
                favorito: false
            },
            {
                id: 'video_naturaleza_3',
                nombre: 'Yae y raiden potonas',
                descripcion: 'Timelapse de un amanecer montañoso',
                duracion: '10:00',
                driveId: '1Scu-K-FxU5qIhk8EWGtRDYPyiTnrFwzW',
                imagen: 'https://pbs.twimg.com/media/G7wh28DXMAAw3CG?format=jpg&name=small',
                favorito: true
            },
            {
                id: 'video_naturaleza_4',
                nombre: 'Fuego crepitante',
                descripcion: 'Sonido de leña ardiendo en una fogata',
                duracion: '60:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_naturaleza_5',
                nombre: 'Océano y olas',
                descripcion: 'Sonidos relajantes del mar',
                duracion: '90:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: ASMR
        'asmr': [
            {
                id: 'video_asmr_1',
                nombre: 'Potona 1 cyberlycrush',
                descripcion: 'Susurros suaves en español',
                duracion: '45:00',
                driveId: '1gZiqaAgR5eA5Og1CO5CIfESd3QUY2Tmy',
                imagen: 'https://pbs.twimg.com/media/G7wi-5vXwAACmBr?format=png&name=small',
                favorito: true
            },
            {
                id: 'video_asmr_2',
                nombre: 'Vanebp19 potona argentina',
                descripcion: 'Sonidos de golpecitos en distintas superficies',
                duracion: '30:00',
                driveId: '1CSwJaxMgxKFkYGFspgcbSC6BuS8QA-0_',
                imagen: 'https://pbs.twimg.com/media/G7wjg6vW8AAhxc0?format=png&name=small',
                favorito: false
            },
            {
                id: 'video_asmr_3',
                nombre: 'Cepillado de micrófono',
                descripcion: 'Sonidos de cepillos y texturas',
                duracion: '20:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_asmr_4',
                nombre: 'ASMR de manos',
                descripcion: 'Movimientos y sonidos con las manos',
                duracion: '25:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_asmr_5',
                nombre: 'Desencuadernación de libros',
                descripcion: 'Sonidos de páginas y libros antiguos',
                duracion: '35:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&fit=crop',
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
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_anime_2',
                nombre: 'Momentos épicos de Kimetsu',
                descripcion: 'Compilación de mejores batallas',
                duracion: '15:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_anime_3',
                nombre: 'Edits de romance',
                descripcion: 'Mejores momentos románticos de animes',
                duracion: '10:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_anime_4',
                nombre: 'AMV - Anime Music Video',
                descripcion: 'Edit con música épica',
                duracion: '3:45',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_anime_5',
                nombre: 'Comedia anime',
                descripcion: 'Los momentos más graciosos',
                duracion: '20:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: MEMES
        'memes': [
            {
                id: 'video_memes_1',
                nombre: 'Memes virales del mes',
                descripcion: 'Los memes más graciosos de internet',
                duracion: '25:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_memes_2',
                nombre: 'Fails graciosos',
                descripcion: 'Los mejores fails y caídas divertidas',
                duracion: '18:30',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_memes_3',
                nombre: 'Animales graciosos',
                descripcion: 'Los animales más divertidos de internet',
                duracion: '22:15',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: GAMING
        'gaming': [
            {
                id: 'video_gaming_1',
                nombre: 'Momento épico en Fortnite',
                descripcion: 'Victoria épica contra el squad',
                duracion: '5:45',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_gaming_2',
                nombre: 'Clutch en Valorant',
                descripcion: 'Ace en la última ronda',
                duracion: '3:20',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_gaming_3',
                nombre: 'Speedrun de Mario 64',
                descripcion: 'Récord mundial en 120 estrellas',
                duracion: '45:30',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: COCINA
        'cocina': [
            {
                id: 'video_cocina_1',
                nombre: 'ASMR de cocina japonesa',
                descripcion: 'Preparación de sushi con sonidos crujientes',
                duracion: '30:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_cocina_2',
                nombre: 'Corte de vegetales ASMR',
                descripcion: 'Sonidos satisfactorios de corte',
                duracion: '25:15',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_cocina_3',
                nombre: 'Batido de bebida burbujeante',
                descripcion: 'Sonidos de burbujas y mezclado',
                duracion: '18:40',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: LLUVIA
        'lluvia': [
            {
                id: 'video_lluvia_1',
                nombre: 'Lluvia en el bosque',
                descripcion: 'Sonido de lluvia en un bosque denso',
                duracion: '60:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'video_lluvia_2',
                nombre: 'Tormenta eléctrica',
                descripcion: 'Truenos y relámpagos con lluvia intensa',
                duracion: '45:30',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'video_lluvia_3',
                nombre: 'Lluvia en la ventana',
                descripcion: 'Gotas golpeando suavemente el cristal',
                duracion: '90:00',
                driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                imagen: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&fit=crop',
                favorito: true
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
    
    console.log("🎬 Galería de videos iniciada");
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
        div.style.borderLeftColor = categoria.color;
        div.onclick = () => reproducirVideo(video);
        
        div.innerHTML = `
            <div class="video-item-imagen-container">
                <img src="${video.imagen || categoria.imagen}" 
                     alt="${video.nombre}" 
                     class="video-item-imagen"
                     onerror="this.src='${categoria.imagen}'">
                <div class="video-item-overlay">
                    <div class="video-play-button">▶️</div>
                </div>
            </div>
            <div class="video-item-content">
                <div class="video-item-header">
                    <span class="video-numero">${index + 1}</span>
                    <span class="video-favorito">${video.favorito ? '⭐' : ''}</span>
                </div>
                <div class="video-item-nombre">${video.nombre}</div>
                <div class="video-item-desc">${video.descripcion}</div>
                <div class="video-item-footer">
                    <span class="video-duracion">⏱️ ${video.duracion}</span>
                    <span class="video-play">▶️ Reproducir</span>
                </div>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
    
    cambiarPantalla('pantalla-lista-videos');
}

// Función para reproducir un video
function reproducirVideo(video) {
    videoActual = video;
    
    const videoUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-video-reproductor');
    const descElement = document.getElementById('descripcion-video-reproductor');
    const imagenElement = document.getElementById('imagen-video-reproductor');
    
    if (tituloElement) tituloElement.textContent = video.nombre;
    if (descElement) descElement.innerHTML = `
        <div class="descripcion-contenido">
            <p><strong>Duración:</strong> ${video.duracion}</p>
            <p><strong>Categoría:</strong> ${galeriaVideosConfig.categorias[categoriaActual].nombre}</p>
            <p><strong>Descripción:</strong> ${video.descripcion}</p>
        </div>
    `;
    if (imagenElement) {
        imagenElement.src = video.imagen || galeriaVideosConfig.categorias[categoriaActual].imagen;
        imagenElement.alt = video.nombre;
    }
    
    // Cargar iframe de video
    const iframeElement = document.getElementById('iframe-video-reproductor');
    if (iframeElement) {
        iframeElement.src = videoUrl;
        iframeElement.title = `Reproduciendo: ${video.nombre}`;
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
                        <p>🎬 Solo videos, sin mazos ni quizzes</p>
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
            
            <!-- PANTALLA DE REPRODUCTOR DE VIDEO -->
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
                        
                        <div class="video-header-container">
                            <img id="imagen-video-reproductor" src="" alt="Miniatura del video" class="video-thumbnail">
                            <div class="video-header-info">
                                <h3 id="descripcion-video-reproductor">Información del video</h3>
                            </div>
                        </div>
                        
                        <div class="iframe-video-container">
                            <iframe id="iframe-video-reproductor" 
                                    width="100%" 
                                    height="500"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    title="Reproductor de video">
                            </iframe>
                        </div>
                        
                        <div class="video-info-container">
                            <div class="controles-video">
                                <button class="boton-principal" onclick="marcarComoFavorito()">
                                    ⭐ Marcar como Favorito
                                </button>
                                <button class="boton-secundario" onclick="volverAListaVideos()">
                                    ← Ver Más Videos
                                </button>
                            </div>
                            
                            <div class="nota-importante">
                                <p>💡 <strong>Nota:</strong> Los videos se cargan desde Google Drive. Si no se reproduce, verifica que el ID sea correcto.</p>
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
            
            /* LISTA DE VIDEOS - CON IMÁGENES */
            .contenedor-lista-videos {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                gap: 20px;
                margin: 20px 0;
                padding: 10px;
            }
            
            .video-item-card {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                border-left: 5px solid;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .video-item-card:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
            }
            
            .video-item-imagen-container {
                position: relative;
                width: 100%;
                height: 200px;
                overflow: hidden;
            }
            
            .video-item-imagen {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
            
            .video-item-card:hover .video-item-imagen {
                transform: scale(1.1);
            }
            
            .video-item-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .video-item-card:hover .video-item-overlay {
                opacity: 1;
            }
            
            .video-play-button {
                background: rgba(255, 107, 157, 0.8);
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                color: white;
                animation: pulse 1.5s infinite;
            }
            
            .video-item-content {
                padding: 15px;
            }
            
            .video-item-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
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
            
            .video-item-nombre {
                font-size: 1.2rem;
                font-weight: bold;
                color: white;
                margin-bottom: 8px;
                height: 50px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            
            .video-item-desc {
                font-size: 0.9rem;
                color: #cccccc;
                margin-bottom: 15px;
                line-height: 1.4;
                height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            
            .video-item-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
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
            
            /* REPRODUCTOR */
            .reproductor-container {
                max-width: 900px;
                margin: 0 auto;
            }
            
            .video-header-container {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                border: 2px solid #4a90e2;
                align-items: center;
            }
            
            .video-thumbnail {
                width: 150px;
                height: 100px;
                border-radius: 10px;
                object-fit: cover;
                border: 3px solid #ff6b9d;
                flex-shrink: 0;
            }
            
            .video-header-info {
                flex: 1;
            }
            
            .video-header-info h3 {
                color: white;
                margin-bottom: 10px;
                line-height: 1.6;
            }
            
            .descripcion-contenido p {
                margin: 5px 0;
                color: #cccccc;
            }
            
            .descripcion-contenido strong {
                color: #ff6b9d;
            }
            
            .iframe-video-container {
                background: #000;
                border-radius: 15px;
                overflow: hidden;
                margin: 20px 0;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                border: 3px solid #4a90e2;
            }
            
            .video-info-container {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #ff6b9d;
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
                margin: 0;
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
            
            /* ANIMACIÓN PULSE */
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .galeria-categoria-card {
                    width: 100%;
                    max-width: 300px;
                }
                
                .contenedor-lista-videos {
                    grid-template-columns: 1fr;
                }
                
                .iframe-video-container iframe {
                    height: 300px;
                }
                
                .video-header-container {
                    flex-direction: column;
                    text-align: center;
                }
                
                .video-thumbnail {
                    width: 100%;
                    max-width: 250px;
                    height: 150px;
                    margin: 0 auto;
                }
                
                .controles-video {
                    flex-direction: column;
                }
                
                .controles-video button {
                    width: 100%;
                }
            }
            
            @media (max-width: 480px) {
                .video-item-imagen-container {
                    height: 150px;
                }
                
                .video-item-nombre {
                    font-size: 1.1rem;
                    height: 40px;
                }
                
                .video-item-desc {
                    font-size: 0.85rem;
                    height: 35px;
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
// 7. FUNCIONES DE TESTING PARA DESARROLLO
// ============================================================================

// Agregar un video a una categoría desde consola
window.agregarVideoAGaleria = function(categoriaId, videoData) {
    if (!galeriaVideosConfig.videos[categoriaId]) {
        galeriaVideosConfig.videos[categoriaId] = [];
    }
    
    // Asegurarse de que tenga un ID único
    if (!videoData.id) {
        videoData.id = `video_${categoriaId}_${Date.now()}`;
    }
    
    // Asegurarse de que tenga una imagen por defecto si no se especifica
    if (!videoData.imagen && galeriaVideosConfig.categorias[categoriaId]) {
        videoData.imagen = galeriaVideosConfig.categorias[categoriaId].imagen;
    }
    
    galeriaVideosConfig.videos[categoriaId].push(videoData);
    console.log(`✅ Video agregado a categoría "${categoriaId}":`, videoData.nombre);
    
    // Si esta categoría está actualmente cargada, actualizar
    if (categoriaActual === categoriaId && 
        document.getElementById('pantalla-lista-videos').classList.contains('activa')) {
        cargarVideosPorCategoria(categoriaId);
    }
    
    return true;
};

// Ver estado de la galería
window.verEstadoGaleria = function() {
    console.log("🎬 ESTADO DE LA GALERÍA DE VIDEOS:");
    console.log("- Categorías disponibles:", Object.keys(galeriaVideosConfig.categorias).length);
    console.log("- Categoría actual:", categoriaActual);
    console.log("- Video actual:", videoActual ? videoActual.nombre : "Ninguno");
    
    // Contar videos por categoría
    Object.keys(galeriaVideosConfig.videos).forEach(catId => {
        console.log(`  ${catId}: ${galeriaVideosConfig.videos[catId].length} videos`);
    });
};

// Cambiar ID de Google Drive de un video
window.cambiarDriveIdVideo = function(categoriaId, videoId, nuevoDriveId) {
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
    
    video.driveId = nuevoDriveId;
    console.log(`✅ ID de Drive actualizado para ${video.nombre}: ${nuevoDriveId}`);
    
    // Si este video está actualmente reproduciéndose, actualizar
    if (videoActual && videoActual.id === videoId) {
        const iframe = document.getElementById('iframe-video-reproductor');
        if (iframe) {
            iframe.src = `https://drive.google.com/file/d/${nuevoDriveId}/preview`;
        }
    }
    
    return true;
};

// Cambiar imagen de un video
window.cambiarImagenVideo = function(categoriaId, videoId, nuevaImagen) {
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
    
    video.imagen = nuevaImagen;
    console.log(`✅ Imagen actualizada para ${video.nombre}: ${nuevaImagen}`);
    
    // Si este video está actualmente visible, actualizar
    if ((videoActual && videoActual.id === videoId) || categoriaActual === categoriaId) {
        // Recargar la lista si estamos en esa categoría
        if (categoriaActual === categoriaId && 
            document.getElementById('pantalla-lista-videos').classList.contains('activa')) {
            cargarVideosPorCategoria(categoriaId);
        }
        // Actualizar miniatura en el reproductor
        if (videoActual && videoActual.id === videoId) {
            const imgElement = document.getElementById('imagen-video-reproductor');
            if (imgElement) {
                imgElement.src = nuevaImagen;
            }
        }
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
    
    console.log(`🎬 Videos en ${categoriaId}:`);
    videos.forEach((video, index) => {
        console.log(`  ${index + 1}. ${video.nombre} (${video.duracion})`);
        console.log(`     ID Drive: ${video.driveId}`);
        console.log(`     Imagen: ${video.imagen || 'Usa imagen por defecto'}`);
        console.log(`     Favorito: ${video.favorito ? '⭐' : 'No'}`);
    });
};

// Reiniciar galería (testing)
window.reiniciarGaleriaVideos = function() {
    if (confirm("¿Estás seguro de reiniciar TODA la galería de videos?\nSe perderán los videos agregados manualmente.")) {
        // Solo vaciar los videos, manteniendo la estructura
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

// Función para obtener una imagen aleatoria de Unsplash por categoría
window.obtenerImagenAleatoriaPorCategoria = function(categoriaId) {
    const categoriasImagenes = {
        'musica': [
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&fit=crop',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&fit=crop',
            'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&fit=crop',
            'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&fit=crop'
        ],
        'naturaleza': [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&fit=crop',
            'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&fit=crop',
            'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&fit=crop',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&fit=crop'
        ],
        'anime': [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&fit=crop',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&fit=crop'
        ],
        'asmr': [
            'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&fit=crop',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&fit=crop',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&fit=crop'
        ]
    };
    
    const imagenes = categoriasImagenes[categoriaId] || [galeriaVideosConfig.categorias[categoriaId]?.imagen || 'https://via.placeholder.com/400x200'];
    return imagenes[Math.floor(Math.random() * imagenes.length)];
};

// ============================================================================
// 8. EXPORTAR FUNCIONES PARA USO GLOBAL
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

console.log("✅ Galería de videos pura cargada correctamente");
console.log("🎥 Usa iniciarGaleriaVideos() para comenzar");
console.log("🖼️ Ahora cada video tiene su propia imagen");
console.log("🔧 Funciones de testing disponibles desde consola:");
console.log("   - agregarVideoAGaleria(categoriaId, videoData)");
console.log("   - verEstadoGaleria()");
console.log("   - cambiarDriveIdVideo(categoriaId, videoId, nuevoDriveId)");
console.log("   - cambiarImagenVideo(categoriaId, videoId, nuevaImagen)");
console.log("   - verVideosCategoria(categoriaId)");
console.log("   - obtenerImagenAleatoriaPorCategoria(categoriaId)");
console.log("   - reiniciarGaleriaVideos()");
