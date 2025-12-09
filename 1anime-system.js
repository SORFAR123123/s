// ============================================================================
// SISTEMA DE ANIME + MAZOS - TODO EN UNO
// ============================================================================

const animeSystem = {
    
    // ============================================================================
    // BASE DE DATOS DE VIDEOS Y MAZOS
    // ============================================================================
    
    database: {
        // SUB1_1 - The Last Summer
        'sub1_1': {
            video: {
                id: 'video_sub1_1',
                titulo: "The Last Summer - Episodio 1",
                url: "https://drive.google.com/file/d/TU_ID_DE_VIDEO_AQUI/preview",
                thumbnail: "https://pbs.twimg.com/media/G5_unInW4AA4bVq?format=png&name=small",
                duracion: "5:30",
                descripcion: "Comienzo de la historia de verano"
            },
            mazos: {
                // 3 MAZOS DE 10 PALABRAS CADA UNO
                'mazo1_sub1_1': {
                    nombre: "Mazo 1 - Vocabulario Básico",
                    palabras: [
                        { japones: '夏', lectura: 'natsu', opciones: ['Verano', 'Invierno', 'Otoño', 'Primavera'], respuesta: 0 },
                        { japones: '最後', lectura: 'saigo', opciones: ['Último', 'Primero', 'Mejor', 'Peor'], respuesta: 0 },
                        { japones: '思い出', lectura: 'omoide', opciones: ['Recuerdo', 'Sueño', 'Deseo', 'Miedo'], respuesta: 0 },
                        { japones: '海', lectura: 'umi', opciones: ['Mar', 'Montaña', 'Río', 'Lago'], respuesta: 0 },
                        { japones: '青春', lectura: 'seishun', opciones: ['Juventud', 'Vejez', 'Infancia', 'Madurez'], respuesta: 0 },
                        { japones: '恋', lectura: 'koi', opciones: ['Amor', 'Odio', 'Amistad', 'Celos'], respuesta: 0 },
                        { japones: '別れ', lectura: 'wakare', opciones: ['Despedida', 'Encuentro', 'Saludo', 'Conversación'], respuesta: 0 },
                        { japones: '始まり', lectura: 'hajimari', opciones: ['Comienzo', 'Final', 'Mitad', 'Pausa'], respuesta: 0 },
                        { japones: '約束', lectura: 'yakusoku', opciones: ['Promesa', 'Mentira', 'Secreto', 'Regalo'], respuesta: 0 },
                        { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Eternidad'], respuesta: 0 }
                    ]
                },
                'mazo2_sub1_1': {
                    nombre: "Mazo 2 - Diálogos Principales",
                    palabras: [
                        { japones: 'また会おう', lectura: 'mata aou', opciones: ['Nos vemos otra vez', 'Adiós para siempre', 'Hola', 'Gracias'], respuesta: 0 },
                        { japones: '忘れないで', lectura: 'wasurenaide', opciones: ['No me olvides', 'Recuérdame', 'Te extrañaré', 'Te amo'], respuesta: 0 },
                        { japones: '幸せだった', lectura: 'shiawase datta', opciones: ['Fui feliz', 'Estoy triste', 'Tengo miedo', 'Me enojo'], respuesta: 0 },
                        { japones: '君が好き', lectura: 'kimi ga suki', opciones: ['Me gustas', 'Te odio', 'Te admiro', 'Te respeto'], respuesta: 0 },
                        { japones: 'ありがとう', lectura: 'arigatou', opciones: ['Gracias', 'Lo siento', 'Por favor', 'De nada'], respuesta: 0 },
                        { japones: 'さようなら', lectura: 'sayounara', opciones: ['Adiós', 'Hola', 'Buenas noches', 'Hasta luego'], respuesta: 0 },
                        { japones: '大丈夫', lectura: 'daijoubu', opciones: ['Está bien', 'Peligro', 'Ayuda', 'Emergencia'], respuesta: 0 },
                        { japones: '頑張って', lectura: 'ganbatte', opciones: ['Esfuérzate', 'Descansa', 'Duerme', 'Come'], respuesta: 0 },
                        { japones: '信じて', lectura: 'shinjite', opciones: ['Cree en mí', 'Escúchame', 'Mírame', 'Sígueme'], respuesta: 0 },
                        { japones: '愛してる', lectura: 'aishiteru', opciones: ['Te amo', 'Te quiero', 'Me importas', 'Te adoro'], respuesta: 0 }
                    ]
                },
                'mazo3_sub1_1': {
                    nombre: "Mazo 3 - Expresiones de Verano",
                    palabras: [
                        { japones: '日焼け', lectura: 'hiyake', opciones: ['Bronceado', 'Quemadura', 'Piel blanca', 'Pecas'], respuesta: 0 },
                        { japones: '花火', lectura: 'hanabi', opciones: ['Fuegos artificiales', 'Flores', 'Estrellas', 'Luces'], respuesta: 0 },
                        { japones: '祭り', lectura: 'matsuri', opciones: ['Festival', 'Ceremonia', 'Reunión', 'Fiesta'], respuesta: 0 },
                        { japones: '浴衣', lectura: 'yukata', opciones: ['Yukata', 'Kimono', 'Uniforme', 'Vestido'], respuesta: 0 },
                        { japones: '風鈴', lectura: 'fuurin', opciones: ['Campana de viento', 'Ventilador', 'Aire acondicionado', 'Ventana'], respuesta: 0 },
                        { japones: 'スイカ', lectura: 'suika', opciones: ['Sandía', 'Melón', 'Uva', 'Manzana'], respuesta: 0 },
                        { japones: 'かき氷', lectura: 'kakigoori', opciones: ['Raspado de hielo', 'Helado', 'Jugo', 'Refresco'], respuesta: 0 },
                        { japones: '夕立', lectura: 'yuudachi', opciones: ['Chubasco vespertino', 'Amanecer', 'Atardecer', 'Noche'], respuesta: 0 },
                        { japones: '蝉時雨', lectura: 'semishigure', opciones: ['Canto de cigarras', 'Lluvia', 'Viento', 'Trueno'], respuesta: 0 },
                        { japones: '星空', lectura: 'hoshizora', opciones: ['Cielo estrellado', 'Luna llena', 'Amanecer', 'Arcoíris'], respuesta: 0 }
                    ]
                }
            }
        },
        
        // SUB2_1 - Toono Esuke
        'sub2_1': {
            video: {
                id: 'video_sub2_1',
                titulo: "Toono Esuke - Aventura 1",
                url: "https://drive.google.com/file/d/TU_ID_DE_VIDEO_AQUI_2/preview",
                thumbnail: "https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=small",
                duracion: "6:15",
                descripcion: "Primera aventura del héroe"
            },
            mazos: {
                'mazo1_sub2_1': {
                    nombre: "Mazo 1 - Vocabulario de Aventura",
                    palabras: [
                        { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Peligro', 'Viaje', 'Exploración'], respuesta: 0 },
                        { japones: '勇者', lectura: 'yuusha', opciones: ['Héroe', 'Villano', 'Guía', 'Aliado'], respuesta: 0 },
                        { japones: '魔法', lectura: 'mahou', opciones: ['Magia', 'Ciencia', 'Tecnología', 'Arte'], respuesta: 0 },
                        { japones: '戦い', lectura: 'tatakai', opciones: ['Batalla', 'Paz', 'Negociación', 'Descanso'], respuesta: 0 },
                        { japones: '勝利', lectura: 'shouri', opciones: ['Victoria', 'Derrota', 'Empate', 'Rendición'], respuesta: 0 },
                        { japones: '仲間', lectura: 'nakama', opciones: ['Compañero', 'Enemigo', 'Extraño', 'Líder'], respuesta: 0 },
                        { japones: '伝説', lectura: 'densetsu', opciones: ['Leyenda', 'Historia', 'Mito', 'Realidad'], respuesta: 0 },
                        { japones: '剣', lectura: 'ken', opciones: ['Espada', 'Escudo', 'Lanza', 'Arco'], respuesta: 0 },
                        { japones: '怪物', lectura: 'kaibutsu', opciones: ['Monstruo', 'Animal', 'Humano', 'Dios'], respuesta: 0 },
                        { japones: '宝物', lectura: 'takaramono', opciones: ['Tesoro', 'Basura', 'Regalo', 'Herramienta'], respuesta: 0 }
                    ]
                }
            }
        },
        
        // SUB2_4 - Más contenido
        'sub2_4': {
            video: {
                id: 'video_sub2_4',
                titulo: "Toono Esuke - Capítulo Especial",
                url: "https://drive.google.com/file/d/TU_ID_DE_VIDEO_AQUI_3/preview",
                thumbnail: "https://pbs.twimg.com/media/G7rKvyBXEAA81vi?format=png&name=small",
                duracion: "7:45",
                descripcion: "Capítulo especial con escenas inéditas"
            },
            mazos: {
                'mazo1_sub2_4': {
                    nombre: "Mazo 1 - Diálogos Especiales",
                    palabras: [
                        { japones: '特別', lectura: 'tokubetsu', opciones: ['Especial', 'Normal', 'Común', 'Ordinario'], respuesta: 0 },
                        { japones: '秘密', lectura: 'himitsu', opciones: ['Secreto', 'Público', 'Conocido', 'Obvio'], respuesta: 0 },
                        { japones: '発見', lectura: 'hakken', opciones: ['Descubrimiento', 'Pérdida', 'Búsqueda', 'Creación'], respuesta: 0 },
                        { japones: '驚き', lectura: 'odoroki', opciones: ['Sorpresa', 'Aburrimiento', 'Miedo', 'Alegría'], respuesta: 0 },
                        { japones: '運命', lectura: 'unmei', opciones: ['Destino', 'Suerte', 'Casualidad', 'Elección'], respuesta: 0 },
                        { japones: '決意', lectura: 'ketsui', opciones: ['Determinación', 'Duda', 'Indecisión', 'Miedo'], respuesta: 0 },
                        { japones: '成長', lectura: 'seichou', opciones: ['Crecimiento', 'Decadencia', 'Estancamiento', 'Regresión'], respuesta: 0 },
                        { japones: '絆', lectura: 'kizuna', opciones: ['Vínculo', 'Separación', 'Distancia', 'Olvido'], respuesta: 0 },
                        { japones: '希望', lectura: 'kibou', opciones: ['Esperanza', 'Desesperación', 'Duda', 'Miedo'], respuesta: 0 },
                        { japones: '永遠', lectura: 'eien', opciones: ['Eternidad', 'Momentáneo', 'Temporal', 'Breve'], respuesta: 0 }
                    ]
                }
            }
        }
    },
    
    // ============================================================================
    // ESTADO DEL SISTEMA
    // ============================================================================
    
    estado: {
        subcontenedorActual: '',
        videoSeleccionado: null,
        pantallaActual: '', // 'video' o 'mazos'
        modoVideo: false
    },
    
    // ============================================================================
    // FUNCIONES PRINCIPALES
    // ============================================================================
    
    // INICIALIZAR SISTEMA
    inicializar: function() {
        console.log("🎬 Sistema de Anime inicializado");
        // Cargar estado guardado si existe
        this.cargarEstado();
    },
    
    // CARGAR ESTADO GUARDADO
    cargarEstado: function() {
        try {
            const datos = localStorage.getItem('animeSystemState');
            if (datos) {
                const estado = JSON.parse(datos);
                this.estado = { ...this.estado, ...estado };
                console.log("📂 Estado de anime cargado");
            }
        } catch (e) {
            console.error("Error cargando estado de anime:", e);
        }
    },
    
    // GUARDAR ESTADO
    guardarEstado: function() {
        try {
            localStorage.setItem('animeSystemState', JSON.stringify(this.estado));
            return true;
        } catch (e) {
            console.error("Error guardando estado de anime:", e);
            return false;
        }
    },
    
    // ============================================================================
    // MOSTRAR VIDEOS DISPONIBLES
    // ============================================================================
    
    mostrarVideos: function(subcontenedorId) {
        if (!this.database[subcontenedorId]) {
            this.mostrarMensaje("No hay videos disponibles para este subcontenedor");
            return;
        }
        
        this.estado.subcontenedorActual = subcontenedorId;
        this.estado.pantallaActual = 'video';
        
        const videoData = this.database[subcontenedorId].video;
        
        // Crear pantalla de video
        const pantallaHTML = `
            <div id="pantalla-anime-video" class="pantalla activa">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">📺 ANIME - ${videoData.titulo}</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="animeSystem.volverASubcontenedores()">← Volver</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <div class="contenido-anime">
                        <div class="video-info">
                            <h2>${videoData.titulo}</h2>
                            <p class="descripcion-video">${videoData.descripcion}</p>
                            <div class="meta-video">
                                <span class="duracion">⏱️ ${videoData.duracion}</span>
                                <span class="mazos-disponibles">🎯 3 mazos disponibles</span>
                            </div>
                        </div>
                        
                        <div class="reproductor-container">
                            <div class="video-wrapper">
                                <iframe 
                                    src="${videoData.url}" 
                                    frameborder="0" 
                                    allowfullscreen
                                    class="video-anime"
                                    allow="autoplay; encrypted-media"
                                ></iframe>
                                <div class="video-overlay"></div>
                            </div>
                            
                            <div class="controles-video">
                                <button class="boton-video" onclick="animeSystem.mostrarMazosDeVideo('${subcontenedorId}')">
                                    📚 VER MAZOS DE ESTE VIDEO
                                </button>
                                <button class="boton-video secundario" onclick="animeSystem.volverASubcontenedores()">
                                    ← VOLVER A LISTA
                                </button>
                            </div>
                        </div>
                        
                        <div class="info-extra">
                            <p>💡 <strong>Consejo:</strong> Mira el video primero, luego practica con los mazos</p>
                            <p>🎯 <strong>3 mazos disponibles</strong> con vocabulario específico de este episodio</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar pantallas actuales
        document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
        
        // Agregar nueva pantalla
        document.body.insertAdjacentHTML('beforeend', pantallaHTML);
    },
    
    // ============================================================================
    // MOSTRAR MAZOS DE UN VIDEO
    // ============================================================================
    
    mostrarMazosDeVideo: function(subcontenedorId) {
        if (!this.database[subcontenedorId]) {
            this.mostrarMensaje("No hay mazos disponibles para este video");
            return;
        }
        
        this.estado.subcontenedorActual = subcontenedorId;
        this.estado.pantallaActual = 'mazos';
        
        const videoData = this.database[subcontenedorId].video;
        const mazos = this.database[subcontenedorId].mazos;
        const mazosArray = Object.values(mazos);
        
        // Crear pantalla de mazos
        const pantallaHTML = `
            <div id="pantalla-anime-mazos" class="pantalla activa">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎯 MAZOS DE ANIME</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="animeSystem.volverAVideo('${subcontenedorId}')">← Ver Video</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <div class="contenido-mazos-anime">
                        <div class="header-mazos">
                            <h2>${videoData.titulo}</h2>
                            <p class="subtitulo-mazos">Selecciona un mazo para practicar (10 palabras cada uno)</p>
                            <div class="estadisticas-mazos">
                                <span class="estadistica">📁 Mazos: ${mazosArray.length}</span>
                                <span class="estadistica">📝 Palabras: ${mazosArray.length * 10}</span>
                                <span class="estadistica">🎯 Recomendado: Ver video primero</span>
                            </div>
                        </div>
                        
                        <div class="lista-mazos-anime" id="lista-mazos-anime">
                            ${this.generarListaMazosHTML(mazos, subcontenedorId)}
                        </div>
                        
                        <div class="info-practica">
                            <h3>💡 Cómo estudiar con anime:</h3>
                            <ol class="instrucciones">
                                <li>Mira el video completo (5-7 minutos)</li>
                                <li>Identifica palabras que no entendiste</li>
                                <li>Practica con los mazos en orden</li>
                                <li>Vuelve a ver el video y notarás la diferencia</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar pantallas actuales
        document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
        
        // Agregar nueva pantalla
        document.body.insertAdjacentHTML('beforeend', pantallaHTML);
    },
    
    // GENERAR HTML DE LISTA DE MAZOS
    generarListaMazosHTML: function(mazos, subcontenedorId) {
        let html = '';
        let contador = 1;
        
        for (const [mazoId, mazoData] of Object.entries(mazos)) {
            html += `
                <div class="mazo-anime-card" onclick="animeSystem.cargarMazo('${subcontenedorId}', '${mazoId}')">
                    <div class="mazo-anime-header">
                        <div class="mazo-numero">${contador}</div>
                        <div class="mazo-info">
                            <h3 class="mazo-titulo">${mazoData.nombre}</h3>
                            <div class="mazo-details">
                                <span class="mazo-detail">📝 10 palabras</span>
                                <span class="mazo-detail">⏱️ 5-7 minutos</span>
                                <span class="mazo-detail">🎯 ${this.obtenerDificultad(contador)}</span>
                            </div>
                        </div>
                        <div class="mazo-action">
                            <button class="boton-cargar-mazo" onclick="event.stopPropagation(); animeSystem.cargarMazo('${subcontenedorId}', '${mazoId}')">
                                🚀 PRACTICAR
                            </button>
                        </div>
                    </div>
                    <div class="mazo-preview">
                        <span class="preview-label">Palabras de ejemplo:</span>
                        <div class="preview-words">
                            ${mazoData.palabras.slice(0, 3).map(p => 
                                `<span class="preview-word">${p.japones} (${p.lectura})</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `;
            contador++;
        }
        
        return html || '<div class="mensaje-vacio">No hay mazos disponibles</div>';
    },
    
    // OBTENER DIFICULTAD SEGÚN NÚMERO DE MAZO
    obtenerDificultad: function(numeroMazo) {
        switch(numeroMazo) {
            case 1: return 'Fácil ⭐';
            case 2: return 'Medio ⭐⭐';
            case 3: return 'Difícil ⭐⭐⭐';
            default: return 'Personalizado';
        }
    },
    
    // ============================================================================
    // CARGAR MAZO AL SISTEMA PRINCIPAL
    // ============================================================================
    
    cargarMazo: function(subcontenedorId, mazoId) {
        if (!this.database[subcontenedorId] || !this.database[subcontenedorId].mazos[mazoId]) {
            this.mostrarMensaje("Error: Mazo no encontrado");
            return;
        }
        
        const mazoData = this.database[subcontenedorId].mazos[mazoId];
        
        console.log("🎬 Cargando mazo de anime:", mazoData.nombre);
        
        // Cargar al sistema principal (variables globales)
        mazoActual = [...mazoData.palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        // Mezclar preguntas
        for (let i = mazoActual.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz');
        
        // Cambiar título especial para mazo de anime
        document.getElementById('contador-preguntas').innerHTML = `
            🎬 ANIME - ${mazoData.nombre}: 
            <span id="numero-pregunta">1</span>/<span id="total-preguntas">${mazoActual.length}</span>
        `;
        
        // Mostrar primera pregunta
        if (typeof mostrarPregunta === 'function') {
            mostrarPregunta();
        }
        
        // Registrar en sistema de palabras falladas (opcional)
        if (typeof sistemaPalabrasFalladas !== 'undefined') {
            console.log("📝 Mazo de anime registrado en sistema de falladas");
        }
    },
    
    // ============================================================================
    // NAVEGACIÓN
    // ============================================================================
    
    volverAVideo: function(subcontenedorId) {
        if (this.database[subcontenedorId]) {
            this.mostrarVideos(subcontenedorId);
        } else {
            this.volverASubcontenedores();
        }
    },
    
    volverASubcontenedores: function() {
        // Volver a la pantalla de subcontenedores
        if (typeof cambiarPantalla === 'function') {
            cambiarPantalla('pantalla-subcontenedores');
        }
    },
    
    // ============================================================================
    // UTILIDADES
    // ============================================================================
    
    mostrarMensaje: function(mensaje, tipo = 'info') {
        // Crear notificación temporal
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${tipo === 'error' ? '#ff4444' : '#4a90e2'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 10000;
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
    
    agregarVideoTest: function(subcontenedorId, titulo, url) {
        if (!this.database[subcontenedorId]) {
            this.database[subcontenedorId] = {
                video: {
                    id: `video_${subcontenedorId}`,
                    titulo: titulo,
                    url: url,
                    thumbnail: "https://via.placeholder.com/300x200/4a90e2/ffffff?text=Video+Test",
                    duracion: "5:00",
                    descripcion: "Video de prueba agregado dinámicamente"
                },
                mazos: {
                    'mazo_test': {
                        nombre: "Mazo de Prueba",
                        palabras: [
                            { japones: 'テスト', lectura: 'tesuto', opciones: ['Prueba', 'Examen', 'Test', 'Evaluación'], respuesta: 0 },
                            { japones: '成功', lectura: 'seikou', opciones: ['Éxito', 'Fracaso', 'Intento', 'Esfuerzo'], respuesta: 0 }
                        ]
                    }
                }
            };
            console.log("✅ Video de prueba agregado a", subcontenedorId);
            return true;
        }
        return false;
    },
    
    verVideosDisponibles: function() {
        console.log("📺 Videos disponibles:");
        Object.entries(this.database).forEach(([subId, data]) => {
            console.log(`${subId}: ${data.video.titulo} (${data.video.duracion})`);
            console.log(`  Mazos: ${Object.keys(data.mazos).length}`);
        });
    }
};

// ============================================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    animeSystem.inicializar();
    window.animeSystem = animeSystem;
    console.log("✅ Sistema de Anime cargado y listo");
});

// ============================================================================
// FUNCIONES GLOBALES PARA TESTING
// ============================================================================

window.agregarVideoAnime = function(subcontenedorId, titulo, url) {
    return animeSystem.agregarVideoTest(subcontenedorId, titulo, url);
};

window.verAnimeDisponible = function() {
    animeSystem.verVideosDisponibles();
};

window.cargarMazoAnime = function(subcontenedorId, mazoId) {
    return animeSystem.cargarMazo(subcontenedorId, mazoId);
};
