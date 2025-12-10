// ============================================================================
// GALERÍA DE AUDIOS PURA (SIN MAZOS) - CON TIMESTAMPS Y GOOGLE DRIVE
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - BASE DE DATOS DE AUDIOS POR CATEGORÍAS (CON TIMESTAMPS)
// ============================================================================

const galeriaAudiosConfig = {
    categorias: {
        'musica': {
            id: 'musica',
            nombre: '🎵 Música para Estudiar',
            imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&fit=crop',
            color: '#ff6b6b',
            descripcion: 'Música lo-fi, clásica y ambiente para concentrarse'
        },
        'asmr': {
            id: 'asmr',
            nombre: '🎧 ASMR Relajante',
            imagen: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&fit=crop',
            color: '#6c5ce7',
            descripcion: 'Susurros, sonidos relajantes y triggers ASMR'
        },
        'sonidos': {
            id: 'sonidos',
            nombre: '🌊 Sonidos de la Naturaleza',
            imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&fit=crop',
            color: '#00b894',
            descripcion: 'Lluvia, bosque, fuego, olas y más'
        },
        'podcasts': {
            id: 'podcasts',
            nombre: '🎙️ Podcasts en Español',
            imagen: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&fit=crop',
            color: '#fd79a8',
            descripcion: 'Charlas, historias y conversaciones interesantes'
        },
        'meditacion': {
            id: 'meditacion',
            nombre: '🧘 Meditaciones Guiadas',
            imagen: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&fit=crop',
            color: '#a29bfe',
            descripcion: 'Meditaciones para relajar y enfocar la mente'
        },
        'japones': {
            id: 'japones',
            nombre: '🗾 Audio en Japonés',
            imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&fit=crop',
            color: '#ff7675',
            descripcion: 'Diálogos, listening practice y conversaciones'
        },
        'blancoruido': {
            id: 'blancoruido',
            nombre: '📻 Ruido Blanco',
            imagen: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=400&fit=crop',
            color: '#74b9ff',
            descripcion: 'Ruido blanco, rosa y marrón para concentración'
        },
        'audiocuentos': {
            id: 'audiocuentos',
            nombre: '📖 Audio-cuentos',
            imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&fit=crop',
            color: '#55efc4',
            descripcion: 'Cuentos narrados y audiolibros cortos'
        },
        'focus': {
            id: 'focus',
            nombre: '🎯 Sonidos para Enfocarse',
            imagen: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&fit=crop',
            color: '#fdcb6e',
            descripcion: 'Sonidos específicos para productividad'
        },
        'dormir': {
            id: 'dormir',
            nombre: '😴 Sonidos para Dormir',
            imagen: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&fit=crop',
            color: '#0984e3',
            descripcion: 'Melodías y sonidos para conciliar el sueño'
        }
    },
    
    // BASE DE DATOS DE AUDIOS (IDs de Google Drive) - CON TIMESTAMPS
    audios: {
        // CATEGORÍA: MÚSICA
        'musica': [
            {
                id: 'audio_musica_1',
                nombre: 'Lo-Fi Study Beats',
                descripcion: '2 horas de música lo-fi para estudiar',
                duracion: '120:00',
                driveId: 'DRIVE_ID_AQUI', // Reemplazar con ID real
                imagen: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&fit=crop',
                favorito: true,
                timestamps: [
                    { tiempo: '0:30', descripcion: 'Inicio suave', segundos: 30 },
                    { tiempo: '25:15', descripcion: 'Cambio de ritmo', segundos: 1515 },
                    { tiempo: '48:40', descripcion: 'Mejor melodía', segundos: 2920 },
                    { tiempo: '75:20', descripcion: 'Parte relajante', segundos: 4520 }
                ]
            },
            {
                id: 'audio_musica_2',
                nombre: 'Piano Clásico para Concentración',
                descripcion: 'Melodías de piano clásico suaves',
                duracion: '90:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'audio_musica_3',
                nombre: 'Chill Hop Vibes',
                descripcion: 'Música chill hop para trabajar',
                duracion: '60:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: ASMR
        'asmr': [
            {
                id: 'audio_asmr_1',
                nombre: 'Susurros en Japonés ASMR',
                descripcion: 'Susurros suaves y triggers en japonés',
                duracion: '45:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&fit=crop',
                favorito: true,
                timestamps: [
                    { tiempo: '1:20', descripcion: 'Inicio susurros', segundos: 80 },
                    { tiempo: '12:45', descripcion: 'Tapping session', segundos: 765 },
                    { tiempo: '28:30', descripcion: 'Mejor parte', segundos: 1710 }
                ]
            },
            {
                id: 'audio_asmr_2',
                nombre: 'ASMR de Páginas y Libros',
                descripcion: 'Sonidos de páginas y libros antiguos',
                duracion: '30:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'audio_asmr_3',
                nombre: 'ASMR de Cepillado y Sonidos',
                descripcion: 'Sonidos de cepillos y texturas',
                duracion: '40:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: SONIDOS NATURALEZA
        'sonidos': [
            {
                id: 'audio_sonidos_1',
                nombre: 'Lluvia Relajante en el Bosque',
                descripcion: 'Sonido de lluvia suave con truenos lejanos',
                duracion: '180:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&fit=crop',
                favorito: true,
                timestamps: [
                    { tiempo: '5:30', descripcion: 'Inicio lluvia', segundos: 330 },
                    { tiempo: '42:15', descripcion: 'Truenos suaves', segundos: 2535 },
                    { tiempo: '89:20', descripcion: 'Intensidad máxima', segundos: 5360 }
                ]
            },
            {
                id: 'audio_sonidos_2',
                nombre: 'Olas del Océano',
                descripcion: 'Sonido constante de olas rompiendo',
                duracion: '120:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&fit=crop',
                favorito: false
            },
            {
                id: 'audio_sonidos_3',
                nombre: 'Fuego Crepitante',
                descripcion: 'Sonido de leña ardiendo en fogata',
                duracion: '90:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&fit=crop',
                favorito: true
            }
        ],
        
        // CATEGORÍA: PODCASTS
        'podcasts': [
            {
                id: 'audio_podcasts_1',
                nombre: 'Historias Cortas en Español',
                descripcion: 'Narración de historias cortas interesantes',
                duracion: '45:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?w=400&fit=crop',
                favorito: true
            },
            {
                id: 'audio_podcasts_2',
                nombre: 'Conversaciones sobre Tecnología',
                descripcion: 'Diálogo interesante sobre avances tech',
                duracion: '60:00',
                driveId: 'DRIVE_ID_AQUI',
                imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&fit=crop',
                favorito: false
            }
        ]
    }
};

// ============================================================================
// 2. VARIABLES GLOBALES DEL SISTEMA
// ============================================================================

let categoriaAudioActual = '';
let audioActual = null;

// ============================================================================
// 3. FUNCIONES PRINCIPALES DEL SISTEMA
// ============================================================================

// Función para iniciar la galería desde el menú principal
function iniciarGaleriaAudios() {
    cambiarPantalla('pantalla-galerias-audios');
    
    // Crear pantallas si no existen
    crearPantallasGaleriaAudios();
    
    // Cargar categorías
    cargarCategoriasAudios();
    
    console.log("🎧 Galería de audios iniciada (con timestamps)");
}

// Función para cargar las categorías
function cargarCategoriasAudios() {
    const contenedor = document.getElementById('contenedor-categorias-audios');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(galeriaAudiosConfig.categorias).forEach(categoriaId => {
        const categoria = galeriaAudiosConfig.categorias[categoriaId];
        const div = document.createElement('div');
        div.className = 'galeria-categoria-audio-card';
        div.style.borderColor = categoria.color;
        div.onclick = () => cargarAudiosPorCategoria(categoriaId);
        
        // Verificar si hay audios en esta categoría
        const tieneAudios = galeriaAudiosConfig.audios[categoriaId] && 
                           galeriaAudiosConfig.audios[categoriaId].length > 0;
        const cantidadAudios = tieneAudios ? galeriaAudiosConfig.audios[categoriaId].length : 0;
        
        div.innerHTML = `
            <img src="${categoria.imagen}" alt="${categoria.nombre}" class="galeria-audio-imagen"
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${categoria.nombre}'">
            <div class="galeria-audio-texto">${categoria.nombre}</div>
            <div class="galeria-audio-info">${cantidadAudios} audios</div>
            <div class="galeria-audio-desc">${categoria.descripcion}</div>
        `;
        
        contenedor.appendChild(div);
    });
}

// Función para cargar audios de una categoría
function cargarAudiosPorCategoria(categoriaId) {
    categoriaAudioActual = categoriaId;
    const categoria = galeriaAudiosConfig.categorias[categoriaId];
    const audios = galeriaAudiosConfig.audios[categoriaId] || [];
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-categoria-audios');
    const contadorElement = document.getElementById('contador-audios-categoria');
    
    if (tituloElement) tituloElement.textContent = categoria.nombre;
    if (contadorElement) contadorElement.textContent = `${audios.length} audios disponibles`;
    
    // Cargar lista de audios
    const contenedor = document.getElementById('contenedor-lista-audios');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    if (audios.length === 0) {
        contenedor.innerHTML = `
            <div class="mensaje-vacio-audio">
                <h3>🎧 Sin audios aún</h3>
                <p>Esta categoría está vacía.</p>
                <p>¡Agrega audios usando la consola!</p>
                <button class="boton-principal" onclick="volverACategoriasAudios()">
                    ← Volver a Categorías
                </button>
            </div>
        `;
        return;
    }
    
    audios.forEach((audio, index) => {
        const div = document.createElement('div');
        div.className = 'audio-item-card';
        div.style.borderLeftColor = categoria.color;
        div.onclick = () => reproducirAudio(audio);
        
        // Mostrar indicador de timestamps si el audio los tiene
        const tieneTimestamps = audio.timestamps && audio.timestamps.length > 0;
        const timestampsBadge = tieneTimestamps ? 
            '<span class="audio-timestamps-badge" title="Tiene timestamps">⏱️</span>' : '';
        
        div.innerHTML = `
            <div class="audio-item-imagen-container">
                <img src="${audio.imagen || categoria.imagen}" 
                     alt="${audio.nombre}" 
                     class="audio-item-imagen"
                     onerror="this.src='${categoria.imagen}'">
                <div class="audio-item-overlay">
                    <div class="audio-play-button">▶️</div>
                </div>
            </div>
            <div class="audio-item-content">
                <div class="audio-item-header">
                    <span class="audio-numero">${index + 1}</span>
                    <span class="audio-favorito">${audio.favorito ? '⭐' : ''}</span>
                    ${timestampsBadge}
                </div>
                <div class="audio-item-nombre">${audio.nombre}</div>
                <div class="audio-item-desc">${audio.descripcion}</div>
                <div class="audio-item-footer">
                    <span class="audio-duracion">⏱️ ${audio.duracion}</span>
                    <span class="audio-play">▶️ Reproducir</span>
                </div>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
    
    cambiarPantalla('pantalla-lista-audios');
}

// ============================================================================
// FUNCIÓN PARA REPRODUCIR AUDIO CON TIMESTAMPS - VERSIÓN AUDIO
// ============================================================================

// FUNCIÓN ORIGINAL (para reproducción normal)
function reproducirAudio(audio) {
    reproducirAudioConTimestamp(audio, 0);
}

// NUEVA FUNCIÓN: Reproductor con soporte de timestamps
function reproducirAudioConTimestamp(audio, timestampSegundos = 0) {
    audioActual = audio;
    
    // Construir URL con timestamp si se especifica
    let audioUrl = `https://drive.google.com/file/d/${audio.driveId}/preview`;
    if (timestampSegundos > 0) {
        audioUrl += `?t=${timestampSegundos}s`;
    }
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-audio-reproductor');
    const descElement = document.getElementById('descripcion-audio-reproductor');
    const imagenElement = document.getElementById('imagen-audio-reproductor');
    
    if (tituloElement) tituloElement.textContent = audio.nombre;
    if (descElement) descElement.innerHTML = `
        <div class="descripcion-audio-contenido">
            <p><strong>Duración:</strong> ${audio.duracion}</p>
            <p><strong>Categoría:</strong> ${galeriaAudiosConfig.categorias[categoriaAudioActual].nombre}</p>
            <p><strong>Descripción:</strong> ${audio.descripcion}</p>
            ${audio.timestamps && audio.timestamps.length > 0 ? 
                `<p><strong>⏱️ Timestamps:</strong> ${audio.timestamps.length} puntos destacados</p>` : 
                ''}
        </div>
    `;
    if (imagenElement) {
        imagenElement.src = audio.imagen || galeriaAudiosConfig.categorias[categoriaAudioActual].imagen;
        imagenElement.alt = audio.nombre;
    }
    
    // Cargar iframe de audio (Google Drive convierte audio a reproductor)
    const iframeElement = document.getElementById('iframe-audio-reproductor');
    if (iframeElement) {
        iframeElement.src = audioUrl;
        iframeElement.title = `Reproduciendo: ${audio.nombre}`;
    }
    
    // MOSTRAR TIMESTAMPS
    mostrarTimestampsEnReproductorAudio(audio);
    
    cambiarPantalla('pantalla-reproductor-audio');
    
    // Mostrar notificación si hay timestamp
    if (timestampSegundos > 0) {
        const minutos = Math.floor(timestampSegundos / 60);
        const segs = timestampSegundos % 60;
        const tiempoFormateado = `${minutos}:${segs.toString().padStart(2, '0')}`;
        mostrarNotificacionAudio(`⏱️ Audio cargado desde ${tiempoFormateado}`);
    }
}

// ============================================================================
// FUNCIONES DE TIMESTAMPS PARA AUDIO
// ============================================================================

function mostrarTimestampsEnReproductorAudio(audio) {
    const contenedorTimestamps = document.getElementById('contenedor-timestamps-audio');
    if (!contenedorTimestamps) return;
    
    if (!audio.timestamps || audio.timestamps.length === 0) {
        contenedorTimestamps.innerHTML = `
            <div class="sin-timestamps-audio">
                <p>📝 Este audio no tiene timestamps configurados</p>
                <button class="boton-pequeno-audio" onclick="agregarTimestampsDesdeConsolaAudio()">
                    ⚡ Agregar desde consola
                </button>
            </div>
        `;
        return;
    }
    
    let html = '<div class="timestamps-audio-header">⏱️ Puntos destacados:</div>';
    
    audio.timestamps.forEach((ts, index) => {
        html += `
            <div class="timestamp-audio-item" onclick="reproducirAudioConTimestamp(audioActual, ${ts.segundos})">
                <span class="timestamp-audio-tiempo">${ts.tiempo}</span>
                <span class="timestamp-audio-desc">${ts.descripcion}</span>
                <span class="timestamp-audio-saltar">▶️ Ir</span>
            </div>
        `;
    });
    
    // Agregar botón para agregar más timestamps desde consola
    html += `
        <div class="timestamps-audio-footer">
            <button class="boton-pequeno-audio" onclick="agregarTimestampActualAudio()">
                ➕ Agregar timestamp actual
            </button>
            <button class="boton-pequeno-audio" onclick="editarTimestampsDesdeConsolaAudio()">
                ✏️ Editar desde consola
            </button>
        </div>
    `;
    
    contenedorTimestamps.innerHTML = html;
}

// Función para saltar a un timestamp específico (alternativa)
function saltarATimestampAudio(segundos) {
    if (!audioActual) {
        mostrarNotificacionAudio("❌ No hay audio seleccionado");
        return;
    }
    
    // Usar la nueva función para reiniciar el audio desde el timestamp
    reproducirAudioConTimestamp(audioActual, segundos);
}

// Función para agregar timestamp desde la posición actual (simulada)
function agregarTimestampActualAudio() {
    if (!audioActual) {
        mostrarNotificacionAudio("❌ No hay audio actual");
        return;
    }
    
    // Simulamos que estamos en un tiempo aleatorio
    const tiempoAleatorio = Math.floor(Math.random() * 3600); // Entre 0 y 3600 segundos (1 hora)
    const minutos = Math.floor(tiempoAleatorio / 60);
    const segundos = tiempoAleatorio % 60;
    const tiempoFormateado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    
    // Pedir descripción al usuario
    const descripcion = prompt(`Agregar timestamp en ${tiempoFormateado}\nDescripción:`, "Punto destacado");
    
    if (descripcion) {
        if (!audioActual.timestamps) {
            audioActual.timestamps = [];
        }
        
        const nuevoTimestamp = {
            tiempo: tiempoFormateado,
            descripcion: descripcion,
            segundos: tiempoAleatorio
        };
        
        audioActual.timestamps.push(nuevoTimestamp);
        mostrarTimestampsEnReproductorAudio(audioActual);
        
        mostrarNotificacionAudio(`✅ Timestamp agregado: ${tiempoFormateado} - ${descripcion}`);
        
        // Mostrar comando para guardar permanentemente
        console.log(`💾 Para guardar permanentemente este timestamp, ejecuta:`);
        console.log(`   agregarTimestampAAudio('${categoriaAudioActual}', '${audioActual.id}', ${tiempoAleatorio}, '${descripcion}')`);
    }
}

// ============================================================================
// 4. FUNCIONES DE NAVEGACIÓN
// ============================================================================

function volverACategoriasAudios() {
    cambiarPantalla('pantalla-galerias-audios');
}

function volverAListaAudios() {
    if (categoriaAudioActual) {
        cargarAudiosPorCategoria(categoriaAudioActual);
    } else {
        volverACategoriasAudios();
    }
}

// ============================================================================
// 5. CREAR PANTALLAS DINÁMICAMENTE (ESPECÍFICO PARA AUDIO)
// ============================================================================

function crearPantallasGaleriaAudios() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-galerias-audios')) {
        const pantallasHTML = `
            <!-- PANTALLA DE CATEGORÍAS DE AUDIOS -->
            <div id="pantalla-galerias-audios" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎧 GALERÍA DE AUDIOS CON TIMESTAMPS</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎧 Galería de Audios</h1>
                    <p class="subtitulo">Selecciona una categoría para escuchar los audios ⏱️</p>
                    
                    <div class="contenedor-categorias-audios" id="contenedor-categorias-audios">
                        <!-- Las categorías se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-galeria-audio">
                        <p>🎵 ${Object.keys(galeriaAudiosConfig.audios).reduce((total, cat) => 
                            total + (galeriaAudiosConfig.audios[cat] ? galeriaAudiosConfig.audios[cat].length : 0), 0)} 
                            audios organizados por categorías</p>
                        <p>⏱️ Con timestamps clicables</p>
                        <p>🎧 Solo audios, sin mazos ni quizzes</p>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE LISTA DE AUDIOS POR CATEGORÍA -->
            <div id="pantalla-lista-audios" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-categoria-audios">Categoría</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverACategoriasAudios()">← Volver a Categorías</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h2 id="contador-audios-categoria">Audios disponibles</h2>
                    
                    <div class="contenedor-lista-audios" id="contenedor-lista-audios">
                        <!-- Los audios se cargan aquí dinámicamente -->
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE REPRODUCTOR DE AUDIO (ESPECÍFICO PARA AUDIO) -->
            <div id="pantalla-reproductor-audio" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-audio-reproductor">Reproduciendo Audio</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAListaAudios()">← Volver a Lista</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="reproductor-audio-container">
                        <h2>🎧 Audio en Reproducción ⏱️</h2>
                        
                        <div class="audio-header-container">
                            <img id="imagen-audio-reproductor" src="" alt="Portada del audio" class="audio-thumbnail">
                            <div class="audio-header-info">
                                <h3 id="descripcion-audio-reproductor">Información del audio</h3>
                            </div>
                        </div>
                        
                        <div class="iframe-audio-container">
                            <iframe id="iframe-audio-reproductor" 
                                    width="100%" 
                                    height="100"
                                    frameborder="0"
                                    allow="autoplay"
                                    title="Reproductor de audio">
                            </iframe>
                        </div>
                        
                        <!-- CONTENEDOR DE TIMESTAMPS PARA AUDIO -->
                        <div class="timestamps-audio-container" id="contenedor-timestamps-audio">
                            <!-- Los timestamps se cargarán aquí dinámicamente -->
                        </div>
                        
                        <div class="audio-info-container">
                            <div class="controles-audio">
                                <button class="boton-principal" onclick="marcarAudioComoFavorito()">
                                    ⭐ Marcar como Favorito
                                </button>
                                <button class="boton-secundario" onclick="volverAListaAudios()">
                                    ← Ver Más Audios
                                </button>
                            </div>
                            
                            <div class="nota-importante-audio">
                                <p>💡 <strong>Nota:</strong> Los audios se cargan desde Google Drive. Si no se reproduce, verifica que el ID sea correcto.</p>
                                <p>⏱️ <strong>Timestamps:</strong> Haz clic en cualquier timestamp para saltar a esa parte del audio.</p>
                                <p>🎧 <strong>Consejo:</strong> Puedes minimizar esta pantalla y seguir escuchando mientras estudias.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        console.log("✅ Pantallas de galería de audios creadas dinámicamente (con timestamps)");
        
        // Agregar estilos específicos para audio
        agregarEstilosGaleriaAudios();
    }
}

// Función para agregar estilos específicos (ESPECÍFICO PARA AUDIO)
function agregarEstilosGaleriaAudios() {
    // Verificar si los estilos ya existen
    if (document.getElementById('estilos-galeria-audios')) return;
    
    const estilos = `
        <style id="estilos-galeria-audios">
            /* ESTILOS ESPECÍFICOS PARA GALERÍA DE AUDIOS */
            .galeria-categoria-audio-card {
                background: linear-gradient(135deg, #1e3c72, #2a5298);
                border-radius: 20px;
                padding: 20px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 3px solid;
                box-shadow: 0 8px 25px rgba(30, 60, 114, 0.3);
                margin: 10px;
                width: 280px;
            }
            
            .galeria-categoria-audio-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 30px rgba(30, 60, 114, 0.5);
            }
            
            .galeria-audio-imagen {
                width: 100%;
                height: 180px;
                border-radius: 15px;
                object-fit: cover;
                border: 3px solid #4cc9f0;
                margin-bottom: 15px;
            }
            
            .galeria-audio-texto {
                font-size: 1.3rem;
                font-weight: bold;
                color: white;
                margin-bottom: 8px;
            }
            
            .galeria-audio-info {
                font-size: 1rem;
                color: #4cc9f0;
                font-weight: bold;
                margin-bottom: 8px;
            }
            
            .galeria-audio-desc {
                font-size: 0.9rem;
                color: #cccccc;
                font-style: italic;
            }
            
            .contenedor-categorias-audios {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                margin: 30px 0;
            }
            
            /* LISTA DE AUDIOS */
            .contenedor-lista-audios {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                gap: 20px;
                margin: 20px 0;
                padding: 10px;
            }
            
            .audio-item-card {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                border-left: 5px solid;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .audio-item-card:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
            }
            
            .audio-item-imagen-container {
                position: relative;
                width: 100%;
                height: 200px;
                overflow: hidden;
            }
            
            .audio-item-imagen {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
            
            .audio-item-card:hover .audio-item-imagen {
                transform: scale(1.1);
            }
            
            .audio-item-overlay {
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
            
            .audio-item-card:hover .audio-item-overlay {
                opacity: 1;
            }
            
            .audio-play-button {
                background: rgba(76, 201, 240, 0.8);
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                color: white;
                animation: pulse-audio 1.5s infinite;
            }
            
            @keyframes pulse-audio {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            .audio-item-content {
                padding: 15px;
            }
            
            .audio-item-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            
            .audio-numero {
                background: #4cc9f0;
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
            
            .audio-favorito {
                color: #ffd700;
                font-size: 1.2rem;
            }
            
            .audio-timestamps-badge {
                color: #00ff88;
                font-size: 1rem;
                cursor: help;
            }
            
            .audio-item-nombre {
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
            
            .audio-item-desc {
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
            
            .audio-item-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .audio-duracion {
                color: #90e0ef;
                font-weight: bold;
            }
            
            .audio-play {
                color: #4cc9f0;
                font-weight: bold;
                background: rgba(76, 201, 240, 0.1);
                padding: 5px 10px;
                border-radius: 10px;
            }
            
            /* REPRODUCTOR DE AUDIO ESPECÍFICO */
            .reproductor-audio-container {
                max-width: 900px;
                margin: 0 auto;
            }
            
            .audio-header-container {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                border: 2px solid #4cc9f0;
                align-items: center;
            }
            
            .audio-thumbnail {
                width: 150px;
                height: 150px;
                border-radius: 10px;
                object-fit: cover;
                border: 3px solid #4cc9f0;
                flex-shrink: 0;
            }
            
            .audio-header-info {
                flex: 1;
            }
            
            .audio-header-info h3 {
                color: white;
                margin-bottom: 10px;
                line-height: 1.6;
            }
            
            .descripcion-audio-contenido p {
                margin: 5px 0;
                color: #cccccc;
            }
            
            .descripcion-audio-contenido strong {
                color: #4cc9f0;
            }
            
            /* IFRAME DE AUDIO - ALTURA MÁS PEQUEÑA QUE VIDEO */
            .iframe-audio-container {
                background: #000;
                border-radius: 15px;
                overflow: hidden;
                margin: 20px 0;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                border: 3px solid #4cc9f0;
                height: 100px; /* Más pequeño que el video */
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .iframe-audio-container iframe {
                width: 100%;
                height: 100%;
                border: none;
            }
            
            /* TIMESTAMPS CONTAINER PARA AUDIO */
            .timestamps-audio-container {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #00ff88;
            }
            
            .timestamps-audio-header {
                color: #00ff88;
                font-weight: bold;
                font-size: 1.2rem;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .timestamp-audio-item {
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
            
            .timestamp-audio-item:hover {
                background: rgba(0, 255, 136, 0.2);
                transform: translateX(5px);
            }
            
            .timestamp-audio-tiempo {
                color: #00ff88;
                font-weight: bold;
                min-width: 50px;
                font-family: monospace;
            }
            
            .timestamp-audio-desc {
                color: #ffffff;
                flex: 1;
                margin: 0 15px;
            }
            
            .timestamp-audio-saltar {
                color: #4cc9f0;
                font-weight: bold;
                background: rgba(76, 201, 240, 0.1);
                padding: 5px 10px;
                border-radius: 5px;
                transition: all 0.2s ease;
                font-size: 0.9rem;
            }
            
            .timestamp-audio-item:hover .timestamp-audio-saltar {
                background: rgba(76, 201, 240, 0.3);
            }
            
            .timestamps-audio-footer {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            
            .boton-pequeno-audio {
                background: rgba(76, 201, 240, 0.2);
                color: #4cc9f0;
                border: 1px solid #4cc9f0;
                padding: 8px 15px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.2s ease;
            }
            
            .boton-pequeno-audio:hover {
                background: rgba(76, 201, 240, 0.4);
                transform: translateY(-2px);
            }
            
            .sin-timestamps-audio {
                color: #cccccc;
                text-align: center;
                padding: 20px;
                font-style: italic;
            }
            
            .sin-timestamps-audio p {
                margin-bottom: 10px;
            }
            
            .audio-info-container {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #4cc9f0;
            }
            
            .controles-audio {
                display: flex;
                gap: 15px;
                margin: 20px 0;
                flex-wrap: wrap;
            }
            
            .nota-importante-audio {
                background: rgba(76, 201, 240, 0.1);
                border-left: 4px solid #4cc9f0;
                padding: 10px 15px;
                border-radius: 5px;
                margin-top: 20px;
            }
            
            .nota-importante-audio p {
                color: #4cc9f0;
                margin: 5px 0;
                font-size: 0.9rem;
            }
            
            /* MENSAJES VACÍOS Y DE ÉXITO PARA AUDIO */
            .mensaje-vacio-audio {
                text-align: center;
                padding: 50px 20px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                border: 2px dashed #4cc9f0;
            }
            
            .mensaje-vacio-audio h3 {
                color: #4cc9f0;
                margin-bottom: 15px;
                font-size: 1.5rem;
            }
            
            .mensaje-vacio-audio p {
                color: #cccccc;
                margin-bottom: 10px;
                font-size: 1rem;
            }
            
            .info-galeria-audio {
                text-align: center;
                margin: 30px 0;
                padding: 15px;
                background: rgba(76, 201, 240, 0.1);
                border-radius: 10px;
                border-left: 4px solid #4cc9f0;
            }
            
            .info-galeria-audio p {
                color: #4cc9f0;
                margin: 5px 0;
                font-weight: bold;
            }
            
            /* RESPONSIVE PARA AUDIO */
            @media (max-width: 768px) {
                .galeria-categoria-audio-card {
                    width: 100%;
                    max-width: 300px;
                }
                
                .contenedor-lista-audios {
                    grid-template-columns: 1fr;
                }
                
                .iframe-audio-container {
                    height: 80px;
                }
                
                .audio-header-container {
                    flex-direction: column;
                    text-align: center;
                }
                
                .audio-thumbnail {
                    width: 120px;
                    height: 120px;
                    margin: 0 auto;
                }
                
                .controles-audio {
                    flex-direction: column;
                }
                
                .controles-audio button {
                    width: 100%;
                }
                
                .timestamps-audio-footer {
                    flex-direction: column;
                }
                
                .timestamp-audio-item {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 5px;
                }
                
                .timestamp-audio-tiempo, .timestamp-audio-desc, .timestamp-audio-saltar {
                    width: 100%;
                }
            }
            
            @media (max-width: 480px) {
                .audio-item-imagen-container {
                    height: 150px;
                }
                
                .audio-item-nombre {
                    font-size: 1.1rem;
                    height: 40px;
                }
                
                .audio-item-desc {
                    font-size: 0.85rem;
                    height: 35px;
                }
                
                .iframe-audio-container {
                    height: 60px;
                }
            }
            
            /* ANIMACIÓN ESPECIAL PARA AUDIO */
            @keyframes audio-wave {
                0%, 100% { transform: scaleY(0.3); }
                50% { transform: scaleY(1); }
            }
            
            .audio-playing-indicator {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3px;
                height: 30px;
                margin: 10px 0;
            }
            
            .audio-wave-bar {
                width: 4px;
                height: 20px;
                background: #4cc9f0;
                animation: audio-wave 1s ease-in-out infinite;
            }
            
            .audio-wave-bar:nth-child(2) { animation-delay: 0.1s; }
            .audio-wave-bar:nth-child(3) { animation-delay: 0.2s; }
            .audio-wave-bar:nth-child(4) { animation-delay: 0.3s; }
            .audio-wave-bar:nth-child(5) { animation-delay: 0.4s; }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 6. FUNCIONES ADICIONALES PARA AUDIO
// ============================================================================

function marcarAudioComoFavorito() {
    if (!audioActual || !categoriaAudioActual) return;
    
    const audiosCategoria = galeriaAudiosConfig.audios[categoriaAudioActual];
    if (!audiosCategoria) return;
    
    const audioIndex = audiosCategoria.findIndex(a => a.id === audioActual.id);
    if (audioIndex === -1) return;
    
    // Cambiar estado de favorito
    audiosCategoria[audioIndex].favorito = !audiosCategoria[audioIndex].favorito;
    audioActual.favorito = audiosCategoria[audioIndex].favorito;
    
    // Mostrar mensaje
    const mensaje = audioActual.favorito ? 
        '⭐ Audio marcado como favorito' : 
        '📝 Audio quitado de favoritos';
    
    mostrarNotificacionAudio(mensaje);
    
    // Actualizar interfaz si estamos en la lista
    if (document.getElementById('pantalla-lista-audios').classList.contains('activa')) {
        cargarAudiosPorCategoria(categoriaAudioActual);
    }
}

function mostrarNotificacionAudio(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4cc9f0, #4361ee);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(76, 201, 240, 0.5);
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// ============================================================================
// 7. FUNCIONES DE TIMESTAMPS PARA CONSOLA (AUDIO)
// ============================================================================

// Agregar timestamp a un audio desde consola
window.agregarTimestampAAudio = function(categoriaId, audioId, segundos, descripcion) {
    const audios = galeriaAudiosConfig.audios[categoriaId];
    if (!audios) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return false;
    }
    
    const audio = audios.find(a => a.id === audioId);
    if (!audio) {
        console.log(`❌ Audio ${audioId} no encontrado en ${categoriaId}`);
        return false;
    }
    
    // Crear array de timestamps si no existe
    if (!audio.timestamps) {
        audio.timestamps = [];
    }
    
    // Formatear tiempo
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    const tiempoFormateado = `${minutos}:${segs.toString().padStart(2, '0')}`;
    
    // Agregar timestamp
    audio.timestamps.push({
        tiempo: tiempoFormateado,
        descripcion: descripcion,
        segundos: segundos
    });
    
    console.log(`✅ Timestamp agregado a "${audio.nombre}":`);
    console.log(`   ⏱️ ${tiempoFormateado} - ${descripcion}`);
    
    // Si este audio está actualmente reproduciéndose, actualizar
    if (audioActual && audioActual.id === audioId) {
        mostrarTimestampsEnReproductorAudio(audioActual);
    }
    
    return true;
};

// Ver timestamps de un audio
window.verTimestampsAudio = function(categoriaId, audioId) {
    const audios = galeriaAudiosConfig.audios[categoriaId];
    if (!audios) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return;
    }
    
    const audio = audios.find(a => a.id === audioId);
    if (!audio) {
        console.log(`❌ Audio ${audioId} no encontrado en ${categoriaId}`);
        return;
    }
    
    if (!audio.timestamps || audio.timestamps.length === 0) {
        console.log(`📝 "${audio.nombre}" no tiene timestamps`);
        return;
    }
    
    console.log(`⏱️ Timestamps de "${audio.nombre}":`);
    audio.timestamps.forEach((ts, index) => {
        console.log(`   ${index + 1}. ${ts.tiempo} - ${ts.descripcion} (${ts.segundos}s)`);
    });
};

// Eliminar timestamp de un audio
window.eliminarTimestampAudio = function(categoriaId, audioId, index) {
    const audios = galeriaAudiosConfig.audios[categoriaId];
    if (!audios) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return false;
    }
    
    const audio = audios.find(a => a.id === audioId);
    if (!audio) {
        console.log(`❌ Audio ${audioId} no encontrado en ${categoriaId}`);
        return false;
    }
    
    if (!audio.timestamps || audio.timestamps.length === 0) {
        console.log(`❌ El audio no tiene timestamps`);
        return false;
    }
    
    if (index < 0 || index >= audio.timestamps.length) {
        console.log(`❌ Índice ${index} fuera de rango`);
        return false;
    }
    
    const timestampEliminado = audio.timestamps.splice(index, 1)[0];
    console.log(`🗑️ Timestamp eliminado de "${audio.nombre}":`);
    console.log(`   ⏱️ ${timestampEliminado.tiempo} - ${timestampEliminado.descripcion}`);
    
    // Si este audio está actualmente reproduciéndose, actualizar
    if (audioActual && audioActual.id === audioId) {
        mostrarTimestampsEnReproductorAudio(audioActual);
    }
    
    return true;
};

// Agregar timestamps desde consola (interfaz amigable)
window.agregarTimestampsDesdeConsolaAudio = function() {
    if (!audioActual) {
        console.log("❌ No hay audio seleccionado");
        return;
    }
    
    console.log("⚡ AGREGAR TIMESTAMPS DESDE CONSOLA (AUDIO)");
    console.log(`Audio: ${audioActual.nombre}`);
    console.log(`Categoría: ${categoriaAudioActual}`);
    console.log(`ID Audio: ${audioActual.id}`);
    console.log("");
    console.log("📝 Ejemplos de comandos:");
    console.log(`1. agregarTimestampAAudio('${categoriaAudioActual}', '${audioActual.id}', 30, 'Inicio suave')`);
    console.log(`2. agregarTimestampAAudio('${categoriaAudioActual}', '${audioActual.id}', 135, 'Mejor parte')`);
    console.log(`3. agregarTimestampAAudio('${categoriaAudioActual}', '${audioActual.id}', 340, 'Cambio de ritmo')`);
    console.log("");
    console.log("🔧 Otras funciones útiles:");
    console.log(`- verTimestampsAudio('${categoriaAudioActual}', '${audioActual.id}')`);
    console.log(`- eliminarTimestampAudio('${categoriaAudioActual}', '${audioActual.id}', 0) // Elimina el primer timestamp`);
    
    // Crear array de timestamps si no existe
    if (!audioActual.timestamps) {
        audioActual.timestamps = [];
        console.log("✅ Array de timestamps creado para este audio");
    }
};

// Editar timestamps desde consola
window.editarTimestampsDesdeConsolaAudio = function() {
    if (!audioActual) {
        console.log("❌ No hay audio seleccionado");
        return;
    }
    
    console.log("✏️ EDITAR TIMESTAMPS DESDE CONSOLA (AUDIO)");
    console.log(`Audio: ${audioActual.nombre}`);
    
    if (!audioActual.timestamps || audioActual.timestamps.length === 0) {
        console.log("❌ Este audio no tiene timestamps");
        console.log("💡 Usa: agregarTimestampsDesdeConsolaAudio()");
        return;
    }
    
    console.log("");
    console.log("📋 Timestamps actuales:");
    audioActual.timestamps.forEach((ts, index) => {
        console.log(`   [${index}] ${ts.tiempo} - ${ts.descripcion} (${ts.segundos}s)`);
    });
    
    console.log("");
    console.log("🔧 Comandos disponibles:");
    console.log(`1. audioActual.timestamps[0].descripcion = 'Nueva descripción'`);
    console.log(`2. audioActual.timestamps[0].segundos = 45 // Cambia el tiempo`);
    console.log(`3. mostrarTimestampsEnReproductorAudio(audioActual) // Refrescar`);
};

// ============================================================================
// 8. FUNCIONES DE TESTING PARA DESARROLLO (AUDIO)
// ============================================================================

// Agregar un audio a una categoría desde consola
window.agregarAudioAGaleria = function(categoriaId, audioData) {
    if (!galeriaAudiosConfig.audios[categoriaId]) {
        galeriaAudiosConfig.audios[categoriaId] = [];
    }
    
    // Asegurarse de que tenga un ID único
    if (!audioData.id) {
        audioData.id = `audio_${categoriaId}_${Date.now()}`;
    }
    
    // Asegurarse de que tenga una imagen por defecto si no se especifica
    if (!audioData.imagen && galeriaAudiosConfig.categorias[categoriaId]) {
        audioData.imagen = galeriaAudiosConfig.categorias[categoriaId].imagen;
    }
    
    galeriaAudiosConfig.audios[categoriaId].push(audioData);
    console.log(`✅ Audio agregado a categoría "${categoriaId}":`, audioData.nombre);
    
    // Si esta categoría está actualmente cargada, actualizar
    if (categoriaAudioActual === categoriaId && 
        document.getElementById('pantalla-lista-audios').classList.contains('activa')) {
        cargarAudiosPorCategoria(categoriaId);
    }
    
    return true;
};

// Ver estado de la galería de audios
window.verEstadoGaleriaAudios = function() {
    console.log("🎧 ESTADO DE LA GALERÍA DE AUDIOS:");
    console.log("- Categorías disponibles:", Object.keys(galeriaAudiosConfig.categorias).length);
    console.log("- Categoría actual:", categoriaAudioActual);
    console.log("- Audio actual:", audioActual ? audioActual.nombre : "Ninguno");
    
    if (audioActual && audioActual.timestamps) {
        console.log(`- Timestamps del audio actual: ${audioActual.timestamps.length}`);
    }
    
    // Contar audios por categoría
    Object.keys(galeriaAudiosConfig.audios).forEach(catId => {
        const audiosConTimestamps = galeriaAudiosConfig.audios[catId].filter(a => a.timestamps && a.timestamps.length > 0).length;
        console.log(`  ${catId}: ${galeriaAudiosConfig.audios[catId].length} audios (${audiosConTimestamps} con timestamps)`);
    });
};

// Cambiar ID de Google Drive de un audio
window.cambiarDriveIdAudio = function(categoriaId, audioId, nuevoDriveId) {
    const audios = galeriaAudiosConfig.audios[categoriaId];
    if (!audios) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return false;
    }
    
    const audio = audios.find(a => a.id === audioId);
    if (!audio) {
        console.log(`❌ Audio ${audioId} no encontrado en ${categoriaId}`);
        return false;
    }
    
    audio.driveId = nuevoDriveId;
    console.log(`✅ ID de Drive actualizado para ${audio.nombre}: ${nuevoDriveId}`);
    
    // Si este audio está actualmente reproduciéndose, actualizar
    if (audioActual && audioActual.id === audioId) {
        const iframe = document.getElementById('iframe-audio-reproductor');
        if (iframe) {
            iframe.src = `https://drive.google.com/file/d/${nuevoDriveId}/preview`;
        }
    }
    
    return true;
};

// Cambiar imagen de un audio
window.cambiarImagenAudio = function(categoriaId, audioId, nuevaImagen) {
    const audios = galeriaAudiosConfig.audios[categoriaId];
    if (!audios) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return false;
    }
    
    const audio = audios.find(a => a.id === audioId);
    if (!audio) {
        console.log(`❌ Audio ${audioId} no encontrado en ${categoriaId}`);
        return false;
    }
    
    audio.imagen = nuevaImagen;
    console.log(`✅ Imagen actualizada para ${audio.nombre}: ${nuevaImagen}`);
    
    // Si este audio está actualmente visible, actualizar
    if ((audioActual && audioActual.id === audioId) || categoriaAudioActual === categoriaId) {
        // Recargar la lista si estamos en esa categoría
        if (categoriaAudioActual === categoriaId && 
            document.getElementById('pantalla-lista-audios').classList.contains('activa')) {
            cargarAudiosPorCategoria(categoriaId);
        }
        // Actualizar miniatura en el reproductor
        if (audioActual && audioActual.id === audioId) {
            const imgElement = document.getElementById('imagen-audio-reproductor');
            if (imgElement) {
                imgElement.src = nuevaImagen;
            }
        }
    }
    
    return true;
};

// Ver todos los audios de una categoría
window.verAudiosCategoria = function(categoriaId) {
    const audios = galeriaAudiosConfig.audios[categoriaId];
    if (!audios) {
        console.log(`❌ Categoría ${categoriaId} no encontrada`);
        return;
    }
    
    console.log(`🎧 Audios en ${categoriaId}:`);
    audios.forEach((audio, index) => {
        console.log(`  ${index + 1}. ${audio.nombre} (${audio.duracion})`);
        console.log(`     ID Drive: ${audio.driveId}`);
        console.log(`     Imagen: ${audio.imagen || 'Usa imagen por defecto'}`);
        console.log(`     Favorito: ${audio.favorito ? '⭐' : 'No'}`);
        console.log(`     Timestamps: ${audio.timestamps ? audio.timestamps.length + ' puntos' : 'No tiene'}`);
    });
};

// Reiniciar galería de audios (testing)
window.reiniciarGaleriaAudios = function() {
    if (confirm("¿Estás seguro de reiniciar TODA la galería de audios?\nSe perderán los audios agregados manualmente.")) {
        // Solo vaciar los audios, manteniendo la estructura
        Object.keys(galeriaAudiosConfig.audios).forEach(cat => {
            galeriaAudiosConfig.audios[cat] = [];
        });
        
        console.log("🔄 Galería de audios reiniciada");
        
        // Recargar si está activa
        if (categoriaAudioActual) {
            cargarAudiosPorCategoria(categoriaAudioActual);
        }
    }
};

// Función para obtener una imagen aleatoria por categoría de audio
window.obtenerImagenAleatoriaPorCategoriaAudio = function(categoriaId) {
    const categoriasImagenes = {
        'musica': [
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&fit=crop',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&fit=crop',
            'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop'
        ],
        'asmr': [
            'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&fit=crop',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&fit=crop',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&fit=crop'
        ],
        'sonidos': [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&fit=crop',
            'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&fit=crop',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&fit=crop',
            'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&fit=crop'
        ],
        'podcasts': [
            'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&fit=crop',
            'https://images.unsplash.com/photo-1559508551-44bff1de756b?w=400&fit=crop',
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&fit=crop'
        ],
        'meditacion': [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&fit=crop',
            'https://images.unsplash.com/photo-1545389336-cf090243ffd7?w=400&fit=crop'
        ]
    };
    
    const imagenes = categoriasImagenes[categoriaId] || [galeriaAudiosConfig.categorias[categoriaId]?.imagen || 'https://via.placeholder.com/400x200'];
    return imagenes[Math.floor(Math.random() * imagenes.length)];
};

// ============================================================================
// 9. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

// Hacer funciones disponibles globalmente
window.iniciarGaleriaAudios = iniciarGaleriaAudios;
window.cargarCategoriasAudios = cargarCategoriasAudios;
window.cargarAudiosPorCategoria = cargarAudiosPorCategoria;
window.reproducirAudio = reproducirAudio;
window.reproducirAudioConTimestamp = reproducirAudioConTimestamp;
window.volverACategoriasAudios = volverACategoriasAudios;
window.volverAListaAudios = volverAListaAudios;
window.marcarAudioComoFavorito = marcarAudioComoFavorito;
window.crearPantallasGaleriaAudios = crearPantallasGaleriaAudios;
window.mostrarTimestampsEnReproductorAudio = mostrarTimestampsEnReproductorAudio;
window.saltarATimestampAudio = saltarATimestampAudio;
window.agregarTimestampActualAudio = agregarTimestampActualAudio;

console.log("✅ Galería de audios con TIMESTAMPS cargada correctamente");
console.log("🎧 Usa iniciarGaleriaAudios() para comenzar");
console.log("⏱️ Los timestamps ahora son clicables y te llevan a partes específicas del audio");
console.log("🔧 Funciones de timestamps disponibles desde consola:");
console.log("   - agregarTimestampAAudio(categoriaId, audioId, segundos, descripcion)");
console.log("   - verTimestampsAudio(categoriaId, audioId)");
console.log("   - eliminarTimestampAudio(categoriaId, audioId, index)");
console.log("   - agregarTimestampsDesdeConsolaAudio()");
console.log("   - editarTimestampsDesdeConsolaAudio()");
console.log("🔧 Funciones generales para audios:");
console.log("   - agregarAudioAGaleria(categoriaId, audioData)");
console.log("   - verEstadoGaleriaAudios()");
console.log("   - cambiarDriveIdAudio(categoriaId, audioId, nuevoDriveId)");
console.log("   - cambiarImagenAudio(categoriaId, audioId, nuevaImagen)");
console.log("   - verAudiosCategoria(categoriaId)");
console.log("   - obtenerImagenAleatoriaPorCategoriaAudio(categoriaId)");
console.log("   - reiniciarGaleriaAudios()");
console.log("");
console.log("📝 PARA USAR:");
console.log("1. Sube audios MP3 a Google Drive");
console.log("2. Haz clic derecho → Obtener enlace compartible");
console.log("3. Copia el ID del archivo (ej: 1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R)");
console.log("4. Usa cambiarDriveIdAudio() para asignarlo a un audio existente");
console.log("5. ¡Reproduce y disfruta!");
