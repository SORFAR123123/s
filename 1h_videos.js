// ============================================================================
// SISTEMA DE VIDEOS H PARA PAPI FABRI - BASE DE DATOS COMPLETA
// ============================================================================

const videosHSystem = {
    // ============================================================================
    // BASE DE DATOS DE VIDEOS H
    // ============================================================================
    
    videosData: {
        'video1': {
            id: 'video1',
            nombre: 'Anime H - Colección 1',
            descripcion: 'Vocabulario básico de situaciones íntimas',
            imagen: 'https://via.placeholder.com/300x200/ff1493/ffffff?text=Video+H+1',
            videoUrl: 'https://drive.google.com/file/d/TU_ID_DE_DRIVE_1/preview',
            mazos: {
                'mazo1': {
                    nombre: '📚 Escena 1 - Inicio',
                    palabras: [
                        { japones: 'キス', lectura: 'kisu', opciones: ['Beso', 'Abrazo', 'Caricia', 'Mirada'], respuesta: 0 },
                        { japones: '抱きしめる', lectura: 'dakishimeru', opciones: ['Abrazar', 'Empujar', 'Ignorar', 'Observar'], respuesta: 0 },
                        { japones: '愛してる', lectura: 'aishiteru', opciones: ['Te amo', 'Te odio', 'No sé', 'Tal vez'], respuesta: 0 },
                        { japones: '肌', lectura: 'hada', opciones: ['Piel', 'Ropa', 'Cabello', 'Ojos'], respuesta: 0 },
                        { japones: '触る', lectura: 'sawaru', opciones: ['Tocar', 'Mirar', 'Oír', 'Oler'], respuesta: 0 },
                        { japones: '感じる', lectura: 'kanjiru', opciones: ['Sentir', 'Pensar', 'Hablar', 'Caminar'], respuesta: 0 },
                        { japones: '熱い', lectura: 'atsui', opciones: ['Caliente', 'Frío', 'Tibio', 'Húmedo'], respuesta: 0 },
                        { japones: '呼吸', lectura: 'kokyuu', opciones: ['Respiración', 'Latido', 'Sudor', 'Temblor'], respuesta: 0 },
                        { japones: '目を閉じる', lectura: 'me o tojiru', opciones: ['Cerrar los ojos', 'Abrir los ojos', 'Mirar fijamente', 'Parpadear'], respuesta: 0 },
                        { japones: '囁く', lectura: 'sasayaku', opciones: ['Susurrar', 'Gritar', 'Cantar', 'Reír'], respuesta: 0 }
                    ]
                },
                'mazo2': {
                    nombre: '🔥 Escena 2 - Desarrollo',
                    palabras: [
                        { japones: '脱ぐ', lectura: 'nugu', opciones: ['Desvestirse', 'Vestirse', 'Cubrirse', 'Abrigarse'], respuesta: 0 },
                        { japones: '服', lectura: 'fuku', opciones: ['Ropa', 'Piel', 'Sudor', 'Calor'], respuesta: 0 },
                        { japones: '恥ずかしい', lectura: 'hazukashii', opciones: ['Vergonzoso', 'Emocionante', 'Aburrido', 'Normal'], respuesta: 0 },
                        { japones: '体', lectura: 'karada', opciones: ['Cuerpo', 'Mente', 'Alma', 'Corazón'], respuesta: 0 },
                        { japones: '見つめる', lectura: 'mitsumeru', opciones: ['Mirar fijamente', 'Evitar la mirada', 'Cerrar los ojos', 'Mirar rápido'], respuesta: 0 },
                        { japones: '美しい', lectura: 'utsukushii', opciones: ['Hermoso', 'Feo', 'Común', 'Extraño'], respuesta: 0 },
                        { japones: '興奮する', lectura: 'koufun suru', opciones: ['Excitarse', 'Calmarse', 'Dormirse', 'Aburrirse'], respuesta: 0 },
                        { japones: '欲望', lectura: 'yokubou', opciones: ['Deseo', 'Repulsión', 'Indiferencia', 'Miedo'], respuesta: 0 },
                        { japones: '我慢する', lectura: 'gaman suru', opciones: ['Aguantar', 'Rendirse', 'Gritar', 'Correr'], respuesta: 0 },
                        { japones: '求め合う', lectura: 'motomeau', opciones: ['Buscarse mutuamente', 'Evitarse', 'Ignorarse', 'Pelear'], respuesta: 0 }
                    ]
                },
                'mazo3': {
                    nombre: '💖 Escena 3 - Intimidad',
                    palabras: [
                        { japones: '優しく', lectura: 'yasashiku', opciones: ['Suavemente', 'Fuerte', 'Rápido', 'Lento'], respuesta: 0 },
                        { japones: '激しく', lectura: 'hageshiku', opciones: ['Intensamente', 'Suavemente', 'Lentamente', 'Tímidamente'], respuesta: 0 },
                        { japones: '快感', lectura: 'kaikan', opciones: ['Placer', 'Dolor', 'Molestia', 'Indiferencia'], respuesta: 0 },
                        { japones: '喘ぐ', lectura: 'aegu', opciones: ['Jadear', 'Reír', 'Llorar', 'Cantar'], respuesta: 0 },
                        { japones: '叫ぶ', lectura: 'sakebu', opciones: ['Gritar', 'Susurrar', 'Callar', 'Respirar'], respuesta: 0 },
                        { japones: '震える', lectura: 'furueru', opciones: ['Temblar', 'Quedarse quieto', 'Saltar', 'Correr'], respuesta: 0 },
                        { japones: '汗', lectura: 'ase', opciones: ['Sudor', 'Lágrimas', 'Saliva', 'Sangre'], respuesta: 0 },
                        { japones: '深く', lectura: 'fukaku', opciones: ['Profundamente', 'Superficialmente', 'Ligeramente', 'Rápidamente'], respuesta: 0 },
                        { japones: '繋がる', lectura: 'tsunagaru', opciones: ['Conectarse', 'Separarse', 'Alejarse', 'Odiarse'], respuesta: 0 },
                        { japones: '一体感', lectura: 'ittaikan', opciones: ['Sensación de unidad', 'Soledad', 'Distancia', 'Extrañeza'], respuesta: 0 }
                    ]
                },
                'mazo4': {
                    nombre: '🌟 Escena 4 - Clímax',
                    palabras: [
                        { japones: '頂点', lectura: 'chouten', opciones: ['Punto máximo', 'Punto bajo', 'Inicio', 'Final'], respuesta: 0 },
                        { japones: '達する', lectura: 'tassuru', opciones: ['Alcanzar', 'Fallar', 'Intentar', 'Comenzar'], respuesta: 0 },
                        { japones: '解放感', lectura: 'kaihoukan', opciones: ['Sensación de liberación', 'Opresión', 'Ansiedad', 'Miedo'], respuesta: 0 },
                        { japones: '虚脱感', lectura: 'kyodatsukan', opciones: ['Sensación de vacío', 'Energía', 'Euforia', 'Ira'], respuesta: 0 },
                        { japones: '満たされる', lectura: 'mitasareru', opciones: ['Sentirse satisfecho', 'Frustrado', 'Vacío', 'Hambriento'], respuesta: 0 },
                        { japones: 'くつろぐ', lectura: 'kutsurogu', opciones: ['Relajarse', 'Tensarse', 'Preocuparse', 'Estresarse'], respuesta: 0 },
                        { japones: '抱き合う', lectura: 'dakiau', opciones: ['Abrazarse', 'Empujarse', 'Ignorarse', 'Pelear'], respuesta: 0 },
                        { japones: '慈しむ', lectura: 'itsukushimu', opciones: ['Acariciar con cariño', 'Golpear', 'Ignorar', 'Rechazar'], respuesta: 0 },
                        { japones: '温もり', lectura: 'nukumori', opciones: ['Calor corporal', 'Frío', 'Distancia', 'Dureza'], respuesta: 0 },
                        { japones: '安らぎ', lectura: 'yasuragi', opciones: ['Tranquilidad', 'Ansiedad', 'Excitación', 'Miedo'], respuesta: 0 }
                    ]
                },
                'mazo5': {
                    nombre: '📖 Vocabulario General',
                    palabras: [
                        { japones: '恋人', lectura: 'koibito', opciones: ['Novio/Novia', 'Amigo', 'Enemigo', 'Extraño'], respuesta: 0 },
                        { japones: '関係', lectura: 'kankei', opciones: ['Relación', 'Separación', 'Distancia', 'Odio'], respuesta: 0 },
                        { japones: '夜', lectura: 'yoru', opciones: ['Noche', 'Día', 'Tarde', 'Mañana'], respuesta: 0 },
                        { japones: '秘密', lectura: 'himitsu', opciones: ['Secreto', 'Público', 'Conocido', 'Obvio'], respuesta: 0 },
                        { japones: '情熱', lectura: 'jounetsu', opciones: ['Pasión', 'Indiferencia', 'Odio', 'Miedo'], respuesta: 0 },
                        { japones: '本能', lectura: 'honnou', opciones: ['Instinto', 'Razón', 'Pensamiento', 'Cálculo'], respuesta: 0 },
                        { japones: '官能', lectura: 'kannou', opciones: ['Sensualidad', 'Asexualidad', 'Frialdad', 'Indiferencia'], respuesta: 0 },
                        { japones: '悦び', lectura: 'yorokobi', opciones: ['Gozo', 'Sufrimiento', 'Aburrimiento', 'Indiferencia'], respuesta: 0 },
                        { japones: '恍惚', lectura: 'koukotsu', opciones: ['Éxtasis', 'Desesperación', 'Normalidad', 'Tristeza'], respuesta: 0 },
                        { japones: '愛撫', lectura: 'aibu', opciones: ['Caricia íntima', 'Golpe', 'Empujón', 'Ignorar'], respuesta: 0 }
                    ]
                }
            }
        },
        
        'video2': {
            id: 'video2',
            nombre: 'Anime H - Colección 2',
            descripcion: 'Diálogos y expresiones íntimas',
            imagen: 'https://via.placeholder.com/300x200/ff69b4/ffffff?text=Video+H+2',
            videoUrl: 'https://drive.google.com/file/d/TU_ID_DE_DRIVE_2/preview',
            mazos: generarMazosParaVideo('video2')
        },
        
        'video3': {
            id: 'video3',
            nombre: 'Anime H - Colección 3',
            descripcion: 'Situaciones especiales y fetiches',
            imagen: 'https://via.placeholder.com/300x200/dd4477/ffffff?text=Video+H+3',
            videoUrl: 'https://drive.google.com/file/d/TU_ID_DE_DRIVE_3/preview',
            mazos: generarMazosParaVideo('video3')
        },
        
        'video4': {
            id: 'video4',
            nombre: 'Anime H - Colección 4',
            descripcion: 'Expresiones de placer y dolor',
            imagen: 'https://via.placeholder.com/300x200/ff1493/ffffff?text=Video+H+4',
            videoUrl: 'https://drive.google.com/file/d/TU_ID_DE_DRIVE_4/preview',
            mazos: generarMazosParaVideo('video4')
        },
        
        'video5': {
            id: 'video5',
            nombre: 'Anime H - Colección 5',
            descripcion: 'Finales y momentos post-intimidad',
            imagen: 'https://via.placeholder.com/300x200/c71585/ffffff?text=Video+H+5',
            videoUrl: 'https://drive.google.com/file/d/TU_ID_DE_DRIVE_5/preview',
            mazos: generarMazosParaVideo('video5')
        }
    },
    
    // ============================================================================
    // VARIABLES DE ESTADO
    // ============================================================================
    
    videoActual: null,
    mazosActuales: null,
    
    // ============================================================================
    // FUNCIONES DEL SISTEMA
    // ============================================================================
    
    // Inicializar sistema
    inicializar: function() {
        console.log("🎬 Sistema de Videos H inicializado");
        console.log("📊 Videos disponibles:", Object.keys(this.videosData).length);
    },
    
    // Cargar lista de videos (pantalla principal)
    cargarListaVideos: function() {
        const contenedor = document.getElementById('contenedor-videos-h');
        if (!contenedor) {
            console.error("No se encontró el contenedor de videos H");
            return;
        }
        
        contenedor.innerHTML = '';
        
        Object.values(this.videosData).forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-h-card';
            videoCard.onclick = () => this.cargarVideo(video.id);
            
            videoCard.innerHTML = `
                <img src="${video.imagen}" alt="${video.nombre}" class="video-h-imagen">
                <div class="video-h-texto">${video.nombre}</div>
                <div class="video-h-info">5 mazos disponibles</div>
            `;
            
            contenedor.appendChild(videoCard);
        });
    },
    
    // Cargar un video específico
    cargarVideo: function(videoId) {
        const videoData = this.videosData[videoId];
        if (!videoData) {
            console.error("Video no encontrado:", videoId);
            return;
        }
        
        this.videoActual = videoData;
        this.mazosActuales = videoData.mazos;
        
        // Actualizar pantalla
        document.getElementById('titulo-video-h').textContent = videoData.nombre;
        document.getElementById('descripcion-video-h').textContent = videoData.descripcion;
        
        // Configurar reproductor de Google Drive
        const videoFrame = document.getElementById('video-h-frame');
        if (videoFrame) {
            videoFrame.src = videoData.videoUrl;
            console.log("🎥 Cargando video:", videoData.videoUrl);
        }
        
        // Cargar mazos
        this.cargarMazosDelVideo();
        
        // Cambiar a pantalla de video
        cambiarPantalla('pantalla-video-h-detalle');
    },
    
    // Cargar los mazos del video actual
    cargarMazosDelVideo: function() {
        const contenedor = document.getElementById('contenedor-mazos-video-h');
        if (!contenedor || !this.mazosActuales) {
            console.error("No se puede cargar mazos");
            return;
        }
        
        contenedor.innerHTML = '';
        
        Object.keys(this.mazosActuales).forEach(mazoKey => {
            const mazo = this.mazosActuales[mazoKey];
            const mazoCard = document.createElement('div');
            mazoCard.className = 'mazo-video-h-card';
            mazoCard.onclick = () => this.iniciarMazo(mazoKey);
            
            mazoCard.innerHTML = `
                <div class="mazo-video-h-texto">${mazo.nombre}</div>
                <div class="mazo-video-h-info">10 palabras</div>
            `;
            
            contenedor.appendChild(mazoCard);
        });
    },
    
    // Iniciar un mazo del video actual
    iniciarMazo: function(mazoId) {
        if (!this.mazosActuales || !this.mazosActuales[mazoId]) {
            console.error("Mazo no encontrado:", mazoId);
            return;
        }
        
        const mazoData = this.mazosActuales[mazoId];
        
        // Preparar el mazo para el sistema de quiz
        mazoActual = [...mazoData.palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        // Mezclar preguntas
        this.mezclarPreguntas();
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz');
        
        // Cambiar título para indicar que es de Videos H
        document.getElementById('contador-preguntas').innerHTML = `
            🎬 VIDEO H: <span id="numero-pregunta">1</span>/<span id="total-preguntas">${mazoActual.length}</span>
        `;
        
        // Mostrar primera pregunta
        mostrarPregunta();
    },
    
    // Mezclar preguntas del mazo actual
    mezclarPreguntas: function() {
        for (let i = mazoActual.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
        }
    },
    
    // Volver a la lista de videos
    volverAListaVideos: function() {
        // Pausar video si está reproduciendo
        const videoFrame = document.getElementById('video-h-frame');
        if (videoFrame) {
            // Para iframes de Google Drive, no podemos pausar directamente
            // pero podemos recargar la página para detenerlo
            videoFrame.src = '';
        }
        
        cambiarPantalla('pantalla-videos-h');
        this.cargarListaVideos();
    },
    
    // Volver al menú principal
    volverAlMenuPrincipal: function() {
        // Limpiar iframe de video
        const videoFrame = document.getElementById('video-h-frame');
        if (videoFrame) {
            videoFrame.src = '';
        }
        
        cambiarPantalla('pantalla-inicio');
    }
};

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

// Generar mazos genéricos para videos (cuando no hay vocabulario específico)
function generarMazosParaVideo(videoId) {
    const mazos = {};
    const nombresMazos = [
        '📚 Escena 1 - Inicio',
        '🔥 Escena 2 - Desarrollo', 
        '💖 Escena 3 - Intimidad',
        '🌟 Escena 4 - Clímax',
        '📖 Vocabulario General'
    ];
    
    for (let i = 1; i <= 5; i++) {
        mazos[`mazo${i}`] = {
            nombre: nombresMazos[i-1],
            palabras: generarPalabrasH(10)
        };
    }
    
    return mazos;
}

// Generar palabras H genéricas
function generarPalabrasH(cantidad) {
    const palabrasHBase = [
        { japones: 'キス', lectura: 'kisu', opciones: ['Beso', 'Abrazo', 'Caricia', 'Mirada'], respuesta: 0 },
        { japones: '抱きしめる', lectura: 'dakishimeru', opciones: ['Abrazar', 'Empujar', 'Ignorar', 'Observar'], respuesta: 0 },
        { japones: '愛してる', lectura: 'aishiteru', opciones: ['Te amo', 'Te odio', 'No sé', 'Tal vez'], respuesta: 0 },
        { japones: '肌', lectura: 'hada', opciones: ['Piel', 'Ropa', 'Cabello', 'Ojos'], respuesta: 0 },
        { japones: '触る', lectura: 'sawaru', opciones: ['Tocar', 'Mirar', 'Oír', 'Oler'], respuesta: 0 },
        { japones: '感じる', lectura: 'kanjiru', opciones: ['Sentir', 'Pensar', 'Hablar', 'Caminar'], respuesta: 0 },
        { japones: '熱い', lectura: 'atsui', opciones: ['Caliente', 'Frío', 'Tibio', 'Húmedo'], respuesta: 0 },
        { japones: '呼吸', lectura: 'kokyuu', opciones: ['Respiración', 'Latido', 'Sudor', 'Temblor'], respuesta: 0 },
        { japones: '脱ぐ', lectura: 'nugu', opciones: ['Desvestirse', 'Vestirse', 'Cubrirse', 'Abrigarse'], respuesta: 0 },
        { japones: '恥ずかしい', lectura: 'hazukashii', opciones: ['Vergonzoso', 'Emocionante', 'Aburrido', 'Normal'], respuesta: 0 }
    ];
    
    const palabras = [];
    for (let i = 0; i < cantidad; i++) {
        palabras.push({...palabrasHBase[i % palabrasHBase.length]});
    }
    return palabras;
}

// Inicializar cuando se carga
if (typeof window !== 'undefined') {
    window.videosHSystem = videosHSystem;
    window.generarPalabrasH = generarPalabrasH;
    
    // Inicializar automáticamente cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            if (videosHSystem.inicializar) {
                videosHSystem.inicializar();
            }
        }, 100);
    });
}
