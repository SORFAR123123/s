// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES
// ============================================================================

// Aquí puedes cambiar las URLs de todas las imágenes
const configImagenes = {
    contenedores: {
        'contenedor1': 'imagenes/contenedor1.jpg',
        'contenedor2': 'imagenes/contenedor2.jpg',
        'contenedor3': 'imagenes/contenedor3.jpg',
        'contenedor4': 'imagenes/contenedor4.jpg',
        'contenedor5': 'imagenes/contenedor5.jpg',
        'contenedor6': 'imagenes/contenedor6.jpg',
        'contenedor7': 'imagenes/contenedor7.jpg',
        'contenedor8': 'imagenes/contenedor8.jpg',
        'contenedor9': 'imagenes/contenedor9.jpg',
        'contenedor10': 'imagenes/contenedor10.jpg'
    },
    subcontenedores: {
        'sub1_1': 'https://pbs.twimg.com/media/G5_unInW4AA4bVq?format=png&name=large',
        'sub1_2': 'https://pbs.twimg.com/media/G5_vVCEX0AAnsA7?format=jpg&name=large',
        'sub1_3': 'https://pbs.twimg.com/media/G5_vDqIXgAAa8et?format=png&name=large',
        'sub1_4': 'imagenes/sub1_4.jpg',
        'sub1_5': 'imagenes/sub1_5.jpg',
        'sub2_1': 'imagenes/sub2_1.jpg',
        'sub2_2': 'imagenes/sub2_2.jpg',
        'sub2_3': 'imagenes/sub2_3.jpg',
        'sub2_4': 'imagenes/sub2_4.jpg',
        'sub2_5': 'imagenes/sub2_5.jpg',
        'sub3_1': 'imagenes/sub3_1.jpg',
        'sub3_2': 'imagenes/sub3_2.jpg',
        'sub3_3': 'imagenes/sub3_3.jpg',
        'sub3_4': 'imagenes/sub3_4.jpg',
        'sub3_5': 'imagenes/sub3_5.jpg',
        'sub4_1': 'imagenes/sub4_1.jpg',
        'sub4_2': 'imagenes/sub4_2.jpg',
        'sub4_3': 'imagenes/sub4_3.jpg',
        'sub4_4': 'imagenes/sub4_4.jpg',
        'sub4_5': 'imagenes/sub4_5.jpg',
        'sub5_1': 'imagenes/sub5_1.jpg',
        'sub5_2': 'imagenes/sub5_2.jpg',
        'sub5_3': 'imagenes/sub5_3.jpg',
        'sub5_4': 'imagenes/sub5_4.jpg',
        'sub5_5': 'imagenes/sub5_5.jpg',
        'sub6_1': 'imagenes/sub6_1.jpg',
        'sub6_2': 'imagenes/sub6_2.jpg',
        'sub6_3': 'imagenes/sub6_3.jpg',
        'sub6_4': 'imagenes/sub6_4.jpg',
        'sub6_5': 'imagenes/sub6_5.jpg',
        'sub7_1': 'imagenes/sub7_1.jpg',
        'sub7_2': 'imagenes/sub7_2.jpg',
        'sub7_3': 'imagenes/sub7_3.jpg',
        'sub7_4': 'imagenes/sub7_4.jpg',
        'sub7_5': 'imagenes/sub7_5.jpg',
        'sub8_1': 'imagenes/sub8_1.jpg',
        'sub8_2': 'imagenes/sub8_2.jpg',
        'sub8_3': 'imagenes/sub8_3.jpg',
        'sub8_4': 'imagenes/sub8_4.jpg',
        'sub8_5': 'imagenes/sub8_5.jpg',
        'sub9_1': 'imagenes/sub9_1.jpg',
        'sub9_2': 'imagenes/sub9_2.jpg',
        'sub9_3': 'imagenes/sub9_3.jpg',
        'sub9_4': 'imagenes/sub9_4.jpg',
        'sub9_5': 'imagenes/sub9_5.jpg',
        'sub10_1': 'imagenes/sub10_1.jpg',
        'sub10_2': 'imagenes/sub10_2.jpg',
        'sub10_3': 'imagenes/sub10_3.jpg',
        'sub10_4': 'imagenes/sub10_4.jpg',
        'sub10_5': 'imagenes/sub10_5.jpg'
    },
    mazos: {
        'mazo1': 'imagenes/mazo1.jpg',
        'mazo2': 'imagenes/mazo2.jpg',
        'mazo3': 'imagenes/mazo3.jpg',
        'mazo4': 'imagenes/mazo4.jpg',
        'mazo5': 'imagenes/mazo5.jpg'
    },
    rpg: {
        novia: 'imagenes/novia.jpg',
        fondo: 'imagenes/fondo-rpg.jpg',
        iconoFlores: 'imagenes/flores.png',
        iconoChocolates: 'imagenes/chocolates.png',
        iconoJoyas: 'imagenes/joyas.png'
    }
};

// ============================================================================
// VIDEOS DE RECOMPENSA
// ============================================================================

const videosRecompensa = [
    {
        id: 1,
        titulo: "¡Felicidades! Logro Desbloqueado 🎉",
        url: "https://assets.mixkit.co/videos/preview/mixkit-a-girl-blowing-a-bubblegum-balloon-47846-large.mp4",
        duracion: "10s"
    },
    {
        id: 2,
        titulo: "¡Excelente Trabajo! ⭐",
        url: "https://assets.mixkit.co/videos/preview/mixkit-fireworks-in-the-night-sky-3057-large.mp4",
        duracion: "15s"
    },
    {
        id: 3,
        titulo: "¡Eres Increíble! 💪",
        url: "https://assets.mixkit.co/videos/preview/mixkit-audience-clapping-and-cheering-478-large.mp4",
        duracion: "12s"
    },
    {
        id: 4,
        titulo: "¡Perfecto! 🏆",
        url: "https://assets.mixkit.co/videos/preview/mixkit-gold-trophy-for-the-winner-47845-large.mp4",
        duracion: "8s"
    },
    {
        id: 5,
        titulo: "¡Misión Cumplida! 🚀",
        url: "https://assets.mixkit.co/videos/preview/mixkit-a-rocket-flying-into-the-sky-43809-large.mp4",
        duracion: "11s"
    }
];

// ============================================================================
// VIDEOS +18 PARA MOMENTOS ÍNTIMOS
// ============================================================================

const videosIntimos = {
    beso: "https://assets.mixkit.co/videos/preview/mixkit-couple-kissing-on-the-bed-44463-large.mp4",
    caricias: "https://assets.mixkit.co/videos/preview/mixkit-hands-caressing-a-woman-s-back-44462-large.mp4",
    intimidad1: "https://assets.mixkit.co/videos/preview/mixkit-romantic-bedroom-scene-44461-large.mp4",
    intimidad2: "https://assets.mixkit.co/videos/preview/mixkit-passionate-romantic-scene-44460-large.mp4"
};

// Función para cambiar las URLs de videos íntimos
function cambiarVideoIntimo(escenaId, nuevaUrl) {
    if (videosIntimos[escenaId]) {
        videosIntimos[escenaId] = nuevaUrl;
        console.log(`Video de ${escenaId} actualizado a: ${nuevaUrl}`);
        return true;
    }
    return false;
}

// Funciones globales para cambiar videos desde consola
window.cambiarVideoIntimo = function(escenaId, nuevaUrl) {
    return cambiarVideoIntimo(escenaId, nuevaUrl);
};

window.cambiarTodosVideosIntimos = function(configuraciones) {
    let exitosas = 0;
    configuraciones.forEach(config => {
        if (cambiarVideoIntimo(config.escena, config.url)) {
            exitosas++;
        }
    });
    return exitosas;
};

// ============================================================================
// SISTEMA RPG DE NOVIA
// ============================================================================

const rpgNovia = {
    // Estado de la relación
    estado: {
        nombreNovia: "Sakura",
        nivelRelacion: 1,
        experiencia: 0,
        afinidad: 50, // 0-100
        estadoAnimo: "feliz",
        energia: 100,
        ultimaVisita: null,
        conversacionesDesbloqueadas: [],
        escenasDesbloqueadas: []
    },
    
    // Economía del RPG
    economia: {
        moneda: "S/.",
        nombre: "Soles",
        saldo: 0,
        inventario: {
            condones: 0,
            flores: 0,
            chocolates: 0,
            joyas: 0
        }
    },
    
    // Sistema +18
    contenidoAdulto: {
        desbloqueado: false,
        escenasDisponibles: [
            { id: "beso", nombre: "Beso Apasionado", costoCondones: 1, afinidadRequerida: 30 },
            { id: "caricias", nombre: "Carícias Íntimas", costoCondones: 1, afinidadRequerida: 50 },
            { id: "intimidad1", nombre: "Primera Noche", costoCondones: 1, afinidadRequerida: 70 },
            { id: "intimidad2", nombre: "Noche de Pasión", costoCondones: 2, afinidadRequerida: 85 }
        ],
        escenasCompletadas: []
    },
    
    // Conversaciones y diálogos
    conversaciones: {
        saludos: [
            "¡Hola mi amor! 💕 ¿Cómo estás?",
            "¡Qué alegría verte! 😊",
            "Te extrañaba tanto... 🥰",
            "¡Mi vida ha llegado! 💖"
        ],
        conversacionesNormales: [
            { pregunta: "¿Qué has hecho hoy?", respuestas: ["Estudié mucho para ti 💪", "Pensé en ti todo el día 😘", "Practiqué japonés para impresionarte 📚"] },
            { pregunta: "¿Te gustaría salir?", respuestas: ["¡Claro! Donde tú quieras 💃", "Solo contigo iría a cualquier lugar 🌸", "Me encanta pasar tiempo contigo 🎮"] },
            { pregunta: "¿Qué te parece mi progreso?", respuestas: ["Estoy muy orgullosa de ti 🏆", "Eres mi campeón favorito ⭐", "Cada día te superas más 💫"] }
        ],
        conversacionesIntimas: [
            { pregunta: "¿Qué sientes por mí?", respuestas: ["Eres el amor de mi vida 💞", "Nunca había sentido esto por nadie 🌹", "Quiero estar contigo para siempre 💍"] },
            { pregunta: "¿Te gusta cuando estamos cerca?", respuestas: ["Tu cercania me vuelve loca 🔥", "Siento mariposas en el estómago 🦋", "Es lo que más espero del día 🌙"] }
        ]
    }
};

// ============================================================================
// ESTRUCTURA PRINCIPAL MODIFICADA
// ============================================================================

// Nueva estructura: 10 contenedores → 3 sub-contenedores → 5 mazos → 10 palabras específicas
const estructura = {
    'contenedor1': {
        nombre: 'The Last Summer 1',
        subcontenedores: {
            'sub1_1': { 
                nombre: 'Sub-Contenedor 1.1', 
                mazos: generarMazosEspecificos('sub1_1') 
            },
            'sub1_2': { 
                nombre: 'Sub-Contenedor 1.2', 
                mazos: generarMazosEspecificos('sub1_2') 
            },
            'sub1_3': { 
                nombre: 'Sub-Contenedor 1.3', 
                mazos: generarMazosEspecificos('sub1_3') 
            }
        }
    },
    'contenedor2': {
        nombre: 'The Last Summer 2',
        subcontenedores: {
            'sub2_1': { 
                nombre: 'Sub-Contenedor 2.1', 
                mazos: generarMazosEspecificos('sub2_1') 
            },
            'sub2_2': { 
                nombre: 'Sub-Contenedor 2.2', 
                mazos: generarMazosEspecificos('sub2_2') 
            },
            'sub2_3': { 
                nombre: 'Sub-Contenedor 2.3', 
                mazos: generarMazosEspecificos('sub2_3') 
            }
        }
    },
    'contenedor3': {
        nombre: 'The Last Summer 3',
        subcontenedores: {
            'sub3_1': { 
                nombre: 'Sub-Contenedor 3.1', 
                mazos: generarMazosEspecificos('sub3_1') 
            },
            'sub3_2': { 
                nombre: 'Sub-Contenedor 3.2', 
                mazos: generarMazosEspecificos('sub3_2') 
            },
            'sub3_3': { 
                nombre: 'Sub-Contenedor 3.3', 
                mazos: generarMazosEspecificos('sub3_3') 
            }
        }
    },
    'contenedor4': {
        nombre: 'Contenedor 4',
        subcontenedores: {
            'sub4_1': { 
                nombre: 'Sub-Contenedor 4.1', 
                mazos: generarMazosEspecificos('sub4_1') 
            },
            'sub4_2': { 
                nombre: 'Sub-Contenedor 4.2', 
                mazos: generarMazosEspecificos('sub4_2') 
            },
            'sub4_3': { 
                nombre: 'Sub-Contenedor 4.3', 
                mazos: generarMazosEspecificos('sub4_3') 
            }
        }
    },
    'contenedor5': {
        nombre: 'Contenedor 5',
        subcontenedores: {
            'sub5_1': { 
                nombre: 'Sub-Contenedor 5.1', 
                mazos: generarMazosEspecificos('sub5_1') 
            },
            'sub5_2': { 
                nombre: 'Sub-Contenedor 5.2', 
                mazos: generarMazosEspecificos('sub5_2') 
            },
            'sub5_3': { 
                nombre: 'Sub-Contenedor 5.3', 
                mazos: generarMazosEspecificos('sub5_3') 
            }
        }
    },
    'contenedor6': {
        nombre: 'Contenedor 6',
        subcontenedores: {
            'sub6_1': { 
                nombre: 'Sub-Contenedor 6.1', 
                mazos: generarMazosEspecificos('sub6_1') 
            },
            'sub6_2': { 
                nombre: 'Sub-Contenedor 6.2', 
                mazos: generarMazosEspecificos('sub6_2') 
            },
            'sub6_3': { 
                nombre: 'Sub-Contenedor 6.3', 
                mazos: generarMazosEspecificos('sub6_3') 
            }
        }
    },
    'contenedor7': {
        nombre: 'Contenedor 7',
        subcontenedores: {
            'sub7_1': { 
                nombre: 'Sub-Contenedor 7.1', 
                mazos: generarMazosEspecificos('sub7_1') 
            },
            'sub7_2': { 
                nombre: 'Sub-Contenedor 7.2', 
                mazos: generarMazosEspecificos('sub7_2') 
            },
            'sub7_3': { 
                nombre: 'Sub-Contenedor 7.3', 
                mazos: generarMazosEspecificos('sub7_3') 
            }
        }
    },
    'contenedor8': {
        nombre: 'Contenedor 8',
        subcontenedores: {
            'sub8_1': { 
                nombre: 'Sub-Contenedor 8.1', 
                mazos: generarMazosEspecificos('sub8_1') 
            },
            'sub8_2': { 
                nombre: 'Sub-Contenedor 8.2', 
                mazos: generarMazosEspecificos('sub8_2') 
            },
            'sub8_3': { 
                nombre: 'Sub-Contenedor 8.3', 
                mazos: generarMazosEspecificos('sub8_3') 
            }
        }
    },
    'contenedor9': {
        nombre: 'Contenedor 9',
        subcontenedores: {
            'sub9_1': { 
                nombre: 'Sub-Contenedor 9.1', 
                mazos: generarMazosEspecificos('sub9_1') 
            },
            'sub9_2': { 
                nombre: 'Sub-Contenedor 9.2', 
                mazos: generarMazosEspecificos('sub9_2') 
            },
            'sub9_3': { 
                nombre: 'Sub-Contenedor 9.3', 
                mazos: generarMazosEspecificos('sub9_3') 
            }
        }
    },
    'contenedor10': {
        nombre: 'Contenedor 10',
        subcontenedores: {
            'sub10_1': { 
                nombre: 'Sub-Contenedor 10.1', 
                mazos: generarMazosEspecificos('sub10_1') 
            },
            'sub10_2': { 
                nombre: 'Sub-Contenedor 10.2', 
                mazos: generarMazosEspecificos('sub10_2') 
            },
            'sub10_3': { 
                nombre: 'Sub-Contenedor 10.3', 
                mazos: generarMazosEspecificos('sub10_3') 
            }
        }
    }
};

// Función para generar mazos específicos con palabras únicas para cada subcontenedor
function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    
    // Generar 5 mazos específicos para cada subcontenedor
    for (let i = 1; i <= 5; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

// Función para generar palabras específicas para cada mazo
function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    // Base de datos de palabras organizadas por subcontenedor y mazo
    const palabrasDatabase = {
        // THE LAST SUMMER 1
        'sub1_1': {
    1: [
        { japones: '今朝', lectura: 'kesa', opciones: ['Esta mañana', 'Esta tarde', 'Anoche', 'Ayer'], respuesta: 0 },
        { japones: '処', lectura: 'tokoro', opciones: ['Lugar', 'Tiempo', 'Persona', 'Cosa'], respuesta: 0 },
        { japones: '出掛け', lectura: 'dekake', opciones: ['Salir', 'Entrar', 'Quedarse', 'Volver'], respuesta: 0 },
        { japones: '女将', lectura: 'okami', opciones: ['Dueña', 'Mesera', 'Cliente', 'Cocinera'], respuesta: 0 },
        { japones: '寂しい', lectura: 'sabishii', opciones: ['Solitario', 'Alegre', 'Ocupado', 'Ruidoso'], respuesta: 0 },
        { japones: '憩い', lectura: 'ikoi', opciones: ['Descanso', 'Trabajo', 'Ejercicio', 'Estudio'], respuesta: 0 },
        { japones: '手伝い', lectura: 'tetsudai', opciones: ['Ayuda', 'Obstáculo', 'Problema', 'Solución'], respuesta: 0 },
        { japones: '撮る', lectura: 'toru', opciones: ['Tomar foto', 'Escribir', 'Leer', 'Escuchar'], respuesta: 0 },
        { japones: '見送る', lectura: 'miokuru', opciones: ['Despedir', 'Recibir', 'Ignorar', 'Saludar'], respuesta: 0 },
        { japones: '限る', lectura: 'kagiru', opciones: ['Limitar', 'Ampliar', 'Permitir', 'Prohibir'], respuesta: 0 }
    ],
    2: [
        { japones: '吐息', lectura: 'toiki', opciones: ['Suspiro', 'Risa', 'Grito', 'Llanto'], respuesta: 0 },
        { japones: '応援', lectura: 'ouen', opciones: ['Apoyo', 'Crítica', 'Indiferencia', 'Oposición'], respuesta: 0 },
        { japones: '文句', lectura: 'monku', opciones: ['Queja', 'Elogio', 'Sugerencia', 'Pregunta'], respuesta: 0 },
        { japones: '構う', lectura: 'kamau', opciones: ['Preocuparse', 'Ignorar', 'Aceptar', 'Rechazar'], respuesta: 0 },
        { japones: '残り香', lectura: 'nokorika', opciones: ['Aroma residual', 'Sonido', 'Imagen', 'Sabor'], respuesta: 0 },
        { japones: '減る', lectura: 'heru', opciones: ['Disminuir', 'Aumentar', 'Mantener', 'Cambiar'], respuesta: 0 },
        { japones: '誰彼', lectura: 'dareka', opciones: ['Alguien', 'Nadie', 'Todos', 'Algo'], respuesta: 0 },
        { japones: '過激', lectura: 'kageki', opciones: ['Extremo', 'Moderado', 'Suave', 'Normal'], respuesta: 0 },
        { japones: '開き直る', lectura: 'hirakinarou', opciones: ['Cambiar de actitud', 'Mantenerse', 'Rendirse', 'Avanzar'], respuesta: 0 },
        { japones: '関係ない', lectura: 'kankeinai', opciones: ['No relacionado', 'Importante', 'Relevante', 'Conectado'], respuesta: 0 }
    ],
    3: [
        { japones: '刺激', lectura: 'shigeki', opciones: ['Estímulo', 'Calma', 'Aburrimiento', 'Paz'], respuesta: 0 },
        { japones: '否定', lectura: 'hitei', opciones: ['Negación', 'Afirmación', 'Duda', 'Aceptación'], respuesta: 0 },
        { japones: '宝の持ち腐れ', lectura: 'takarano mochiguse', opciones: ['Talento desperdiciado', 'Tesoro', 'Pobreza', 'Generosidad'], respuesta: 0 },
        { japones: '心配', lectura: 'shinpai', opciones: ['Preocupación', 'Tranquilidad', 'Confianza', 'Seguridad'], respuesta: 0 },
        { japones: '性欲', lectura: 'seiyoku', opciones: ['Deseo sexual', 'Hambre', 'Sed', 'Cansancio'], respuesta: 0 },
        { japones: '機会', lectura: 'kikai', opciones: ['Oportunidad', 'Peligro', 'Problema', 'Obstáculo'], respuesta: 0 },
        { japones: '活かす', lectura: 'ikasu', opciones: ['Aprovechar', 'Desperdiciar', 'Ignorar', 'Rechazar'], respuesta: 0 },
        { japones: '経験不足', lectura: 'keiken busoku', opciones: ['Falta de experiencia', 'Mucha experiencia', 'Talento', 'Habilidad'], respuesta: 0 },
        { japones: '言い寄る', lectura: 'iiyoru', opciones: ['Acercarse a alguien', 'Alejarse', 'Ignorar', 'Evitar'], respuesta: 0 },
        { japones: '飽きる', lectura: 'akiru', opciones: ['Cansarse', 'Entusiasmarse', 'Continuar', 'Empezar'], respuesta: 0 }
    ],
    4: [
        { japones: '合格', lectura: 'goukaku', opciones: ['Aprobar', 'Reprobar', 'Intentar', 'Estudiar'], respuesta: 0 },
        { japones: '圧し潰す', lectura: 'asshitsubusu', opciones: ['Aplastar', 'Levantar', 'Construir', 'Reparar'], respuesta: 0 },
        { japones: '密着', lectura: 'micchaku', opciones: ['Pegado', 'Separado', 'Distante', 'Aislado'], respuesta: 0 },
        { japones: '届く', lectura: 'todoku', opciones: ['Llegar', 'Partir', 'Perderse', 'Desaparecer'], respuesta: 0 },
        { japones: '巻きつく', lectura: 'makitsuku', opciones: ['Enrollarse', 'Desenrollar', 'Cortar', 'Pegar'], respuesta: 0 },
        { japones: '惜しい', lectura: 'oshii', opciones: ['Lamentable', 'Afortunado', 'Normal', 'Extraño'], respuesta: 0 },
        { japones: '拒否権', lectura: 'kyohiken', opciones: ['Derecho a veto', 'Permiso', 'Aprobación', 'Acuerdo'], respuesta: 0 },
        { japones: '経験', lectura: 'keiken', opciones: ['Experiencia', 'Ignorancia', 'Teoría', 'Estudio'], respuesta: 0 },
        { japones: '膣', lectura: 'chitsu', opciones: ['Vagina', 'Pene', 'Ano', 'Pecho'], respuesta: 0 },
        { japones: '蒸す', lectura: 'musu', opciones: ['Humedecer', 'Secar', 'Calentar', 'Enfriar'], respuesta: 0 }
    ],
    5: [
        { japones: '大体', lectura: 'daitai', opciones: ['Aproximadamente', 'Exactamente', 'Completamente', 'Parcialmente'], respuesta: 0 },
        { japones: '起きる', lectura: 'okiru', opciones: ['Despertar', 'Dormir', 'Soñar', 'Descansar'], respuesta: 0 },
    ]
},
        'sub1_2': {
            1: [
                { japones: '学校', lectura: 'gakkou', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], respuesta: 0 },
                { japones: '勉強', lectura: 'benkyou', opciones: ['Estudio', 'Juego', 'Descanso', 'Trabajo'], respuesta: 0 },
                { japones: '教室', lectura: 'kyoushitsu', opciones: ['Salón de clases', 'Oficina', 'Cocina', 'Baño'], respuesta: 0 },
                { japones: '先生', lectura: 'sensei', opciones: ['Profesor', 'Estudiante', 'Director', 'Padre'], respuesta: 0 },
                { japones: '生徒', lectura: 'seito', opciones: ['Estudiante', 'Profesor', 'Padre', 'Vecino'], respuesta: 0 },
                { japones: '試験', lectura: 'shiken', opciones: ['Examen', 'Tarea', 'Proyecto', 'Presentación'], respuesta: 0 },
                { japones: '宿題', lectura: 'shukudai', opciones: ['Tarea', 'Examen', 'Proyecto', 'Investigación'], respuesta: 0 },
                { japones: '卒業', lectura: 'sotsugyou', opciones: ['Graduación', 'Ingreso', 'Transferencia', 'Abandono'], respuesta: 0 },
                { japones: '入学', lectura: 'nyuugaku', opciones: ['Ingreso', 'Graduación', 'Transferencia', 'Abandono'], respuesta: 0 },
                { japones: 'クラス', lectura: 'kurasu', opciones: ['Clase', 'Escuela', 'Grupo', 'Equipo'], respuesta: 0 }
            ],
            2: [
                { japones: '部活', lectura: 'bukatsu', opciones: ['Club escolar', 'Trabajo', 'Estudio', 'Descanso'], respuesta: 0 },
                { japones: '文化祭', lectura: 'bunkasai', opciones: ['Festival cultural', 'Deporte', 'Examen', 'Vacaciones'], respuesta: 0 },
                { japones: '運動会', lectura: 'undoukai', opciones: ['Día deportivo', 'Ceremonia', 'Examen', 'Fiesta'], respuesta: 0 },
                { japones: '修学旅行', lectura: 'shuugakuryokou', opciones: ['Viaje escolar', 'Vacaciones', 'Trabajo', 'Estudio'], respuesta: 0 },
                { japones: '夏休み', lectura: 'natsuyasumi', opciones: ['Vacaciones de verano', 'Vacaciones de invierno', 'Fin de semana', 'Feriado'], respuesta: 0 },
                { japones: '冬休み', lectura: 'fuyuyasumi', opciones: ['Vacaciones de invierno', 'Vacaciones de verano', 'Fin de semana', 'Feriado'], respuesta: 0 },
                { japones: '春休み', lectura: 'haruyasumi', opciones: ['Vacaciones de primavera', 'Vacaciones de verano', 'Fin de semana', 'Feriado'], respuesta: 0 },
                { japones: '新学期', lectura: 'shingakki', opciones: ['Nuevo semestre', 'Vacaciones', 'Exámenes', 'Graduación'], respuesta: 0 },
                { japones: '終業式', lectura: 'shuugyoushiki', opciones: ['Ceremonia de fin de clases', 'Ceremonia de inicio', 'Graduación', 'Ingreso'], respuesta: 0 },
                { japones: '始業式', lectura: 'shigyoushiki', opciones: ['Ceremonia de inicio de clases', 'Ceremonia de fin', 'Graduación', 'Ingreso'], respuesta: 0 }
            ],
            // ... continuar con los otros mazos para sub1_2 y otros subcontenedores
            3: [
                { japones: '美術', lectura: 'bijutsu', opciones: ['Arte', 'Ciencia', 'Matemáticas', 'Historia'], respuesta: 0 },
                { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Arte', 'Deporte', 'Ciencia'], respuesta: 0 },
                { japones: '体育', lectura: 'taiiku', opciones: ['Educación física', 'Matemáticas', 'Historia', 'Arte'], respuesta: 0 },
                { japones: '理科', lectura: 'rika', opciones: ['Ciencia', 'Matemáticas', 'Historia', 'Arte'], respuesta: 0 },
                { japones: '社会', lectura: 'shakai', opciones: ['Estudios sociales', 'Matemáticas', 'Ciencia', 'Arte'], respuesta: 0 },
                { japones: '国語', lectura: 'kokugo', opciones: ['Lengua japonesa', 'Matemáticas', 'Ciencia', 'Historia'], respuesta: 0 },
                { japones: '数学', lectura: 'suugaku', opciones: ['Matemáticas', 'Ciencia', 'Historia', 'Arte'], respuesta: 0 },
                { japones: '英語', lectura: 'eigo', opciones: ['Inglés', 'Japonés', 'Español', 'Francés'], respuesta: 0 },
                { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Geografía', 'Ciencia', 'Matemáticas'], respuesta: 0 },
                { japones: '地理', lectura: 'chiri', opciones: ['Geografía', 'Historia', 'Ciencia', 'Matemáticas'], respuesta: 0 }
            ],
            4: [
                { japones: '図書館', lectura: 'toshokan', opciones: ['Biblioteca', 'Laboratorio', 'Gimnasio', 'Oficina'], respuesta: 0 },
                { japones: '実験', lectura: 'jikken', opciones: ['Experimento', 'Estudio', 'Investigación', 'Observación'], respuesta: 0 },
                { japones: '研究', lectura: 'kenkyuu', opciones: ['Investigación', 'Estudio', 'Experimento', 'Observación'], respuesta: 0 },
                { japones: '発表', lectura: 'happyou', opciones: ['Presentación', 'Examen', 'Tarea', 'Proyecto'], respuesta: 0 },
                { japones: '討論', lectura: 'touron', opciones: ['Debate', 'Conversación', 'Charla', 'Monólogo'], respuesta: 0 },
                { japones: '質問', lectura: 'shitsumon', opciones: ['Pregunta', 'Respuesta', 'Explicación', 'Afirmación'], respuesta: 0 },
                { japones: '解答', lectura: 'kaitou', opciones: ['Respuesta', 'Pregunta', 'Problema', 'Solución'], respuesta: 0 },
                { japones: '問題', lectura: 'mondai', opciones: ['Problema', 'Solución', 'Pregunta', 'Respuesta'], respuesta: 0 },
                { japones: '理解', lectura: 'rikai', opciones: ['Comprensión', 'Confusión', 'Duda', 'Ignorancia'], respuesta: 0 },
                { japones: '知識', lectura: 'chishiki', opciones: ['Conocimiento', 'Ignorancia', 'Duda', 'Confusión'], respuesta: 0 }
            ],
            5: [
                { japones: '才能', lectura: 'sainou', opciones: ['Talento', 'Esfuerzo', 'Suerte', 'Oportunidad'], respuesta: 0 },
                { japones: '創造', lectura: 'souzou', opciones: ['Creatividad', 'Imitación', 'Copia', 'Repetición'], respuesta: 0 },
                { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Descubrimiento', 'Creación', 'Innovación'], respuesta: 0 },
                { japones: '発見', lectura: 'hakken', opciones: ['Descubrimiento', 'Invención', 'Creación', 'Innovación'], respuesta: 0 },
                { japones: '分析', lectura: 'bunseki', opciones: ['Análisis', 'Síntesis', 'Resumen', 'Conclusión'], respuesta: 0 },
                { japones: '理論', lectura: 'riron', opciones: ['Teoría', 'Práctica', 'Hipótesis', 'Conclusión'], respuesta: 0 },
                { japones: '実践', lectura: 'jissen', opciones: ['Práctica', 'Teoría', 'Estudio', 'Investigación'], respuesta: 0 },
                { japones: '応用', lectura: 'ouyou', opciones: ['Aplicación', 'Teoría', 'Práctica', 'Estudio'], respuesta: 0 },
                { japones: '基礎', lectura: 'kiso', opciones: ['Base', 'Avanzado', 'Complejo', 'Difícil'], respuesta: 0 },
                { japones: '応用', lectura: 'ouyou', opciones: ['Avanzado', 'Básico', 'Simple', 'Fácil'], respuesta: 0 }
            ]
        },
        'sub1_3': {
            1: [
                { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Amigos', 'Vecinos', 'Compañeros'], respuesta: 0 },
                { japones: '父', lectura: 'chichi', opciones: ['Padre', 'Madre', 'Hermano', 'Hermana'], respuesta: 0 },
                { japones: '母', lectura: 'haha', opciones: ['Madre', 'Padre', 'Hermano', 'Hermana'], respuesta: 0 },
                { japones: '兄弟', lectura: 'kyoudai', opciones: ['Hermanos', 'Padres', 'Abuelos', 'Tíos'], respuesta: 0 },
                { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Primos', 'Tíos'], respuesta: 0 },
                { japones: '祖父', lectura: 'sofu', opciones: ['Abuelo', 'Abuela', 'Padre', 'Madre'], respuesta: 0 },
                { japones: '祖母', lectura: 'sobo', opciones: ['Abuela', 'Abuelo', 'Madre', 'Padre'], respuesta: 0 },
                { japones: '親戚', lectura: 'shinseki', opciones: ['Parientes', 'Amigos', 'Vecinos', 'Conocidos'], respuesta: 0 },
                { japones: '家庭', lectura: 'katei', opciones: ['Hogar', 'Escuela', 'Trabajo', 'Comunidad'], respuesta: 0 },
                { japones: '愛情', lectura: 'aijou', opciones: ['Amor familiar', 'Amistad', 'Respeto', 'Admiración'], respuesta: 0 }
            ],
            // ... y así continuar para los demás mazos
            2: [
                { japones: '家', lectura: 'ie', opciones: ['Casa', 'Apartamento', 'Edificio', 'Escuela'], respuesta: 0 },
                { japones: '庭', lectura: 'niwa', opciones: ['Jardín', 'Parque', 'Bosque', 'Campo'], respuesta: 0 },
                { japones: '台所', lectura: 'daidokoro', opciones: ['Cocina', 'Baño', 'Sala', 'Dormitorio'], respuesta: 0 },
                { japones: '寝室', lectura: 'shinshitsu', opciones: ['Dormitorio', 'Sala', 'Cocina', 'Baño'], respuesta: 0 },
                { japones: '浴室', lectura: 'yokushitsu', opciones: ['Baño', 'Cocina', 'Sala', 'Dormitorio'], respuesta: 0 },
                { japones: 'リビング', lectura: 'ribingu', opciones: ['Sala de estar', 'Dormitorio', 'Cocina', 'Baño'], respuesta: 0 },
                { japones: '玄関', lectura: 'genkan', opciones: ['Entrada', 'Salida', 'Pasillo', 'Ventana'], respuesta: 0 },
                { japones: '屋根', lectura: 'yane', opciones: ['Techo', 'Piso', 'Pared', 'Ventana'], respuesta: 0 },
                { japones: '窓', lectura: 'mado', opciones: ['Ventana', 'Puerta', 'Pared', 'Techo'], respuesta: 0 },
                { japones: 'ドア', lectura: 'doa', opciones: ['Puerta', 'Ventana', 'Pared', 'Techo'], respuesta: 0 }
            ],
            3: [
                { japones: '朝食', lectura: 'choushoku', opciones: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], respuesta: 0 },
                { japones: '昼食', lectura: 'chuushoku', opciones: ['Almuerzo', 'Desayuno', 'Cena', 'Merienda'], respuesta: 0 },
                { japones: '夕食', lectura: 'yuushoku', opciones: ['Cena', 'Desayuno', 'Almuerzo', 'Merienda'], respuesta: 0 },
                { japones: '食事', lectura: 'shokuji', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], respuesta: 0 },
                { japones: '料理', lectura: 'ryouri', opciones: ['Cocina', 'Comida', 'Bebida', 'Postre'], respuesta: 0 },
                { japones: '食材', lectura: 'shokuzai', opciones: ['Ingredientes', 'Utensilios', 'Recetas', 'Platos'], respuesta: 0 },
                { japones: '味', lectura: 'aji', opciones: ['Sabor', 'Olor', 'Texto', 'Apariencia'], respuesta: 0 },
                { japones: '栄養', lectura: 'eiyou', opciones: ['Nutrición', 'Sabor', 'Calorías', 'Vitaminas'], respuesta: 0 },
                { japones: '健康', lectura: 'kenkou', opciones: ['Salud', 'Enfermedad', 'Ejercicio', 'Descanso'], respuesta: 0 },
                { japones: '美味しい', lectura: 'oishii', opciones: ['Delicioso', 'Desagradable', 'Normal', 'Amargo'], respuesta: 0 }
            ],
            4: [
                { japones: '習慣', lectura: 'shuukan', opciones: ['Hábito', 'Costumbre', 'Rutina', 'Tradición'], respuesta: 0 },
                { japones: '日常', lectura: 'nichijou', opciones: ['Vida cotidiana', 'Extraordinario', 'Especial', 'Raro'], respuesta: 0 },
                { japones: '規則', lectura: 'kisoku', opciones: ['Regla', 'Excepción', 'Sugerencia', 'Recomendación'], respuesta: 0 },
                { japones: '時間割', lectura: 'jikanwari', opciones: ['Horario', 'Calendario', 'Agenda', 'Lista'], respuesta: 0 },
                { japones: '予定', lectura: 'yotei', opciones: ['Plan', 'Improvisación', 'Sorpresa', 'Accidente'], respuesta: 0 },
                { japones: '準備', lectura: 'junbi', opciones: ['Preparación', 'Improvisación', 'Descuidar', 'Olvidar'], respuesta: 0 },
                { japones: '整理', lectura: 'seiri', opciones: ['Organización', 'Desorden', 'Confusión', 'Caos'], respuesta: 0 },
                { japones: '掃除', lectura: 'souji', opciones: ['Limpieza', 'Suciedad', 'Desorden', 'Confusión'], respuesta: 0 },
                { japones: '洗濯', lectura: 'sentaku', opciones: ['Lavado', 'Secado', 'Planchado', 'Doblar'], respuesta: 0 },
                { japones: '買い物', lectura: 'kaimono', opciones: ['Compras', 'Ventas', 'Intercambio', 'Regalo'], respuesta: 0 }
            ],
            5: [
                { japones: '伝統', lectura: 'dentou', opciones: ['Tradición', 'Innovación', 'Moda', 'Tendencia'], respuesta: 0 },
                { japones: '文化', lectura: 'bunka', opciones: ['Cultura', 'Naturaleza', 'Tecnología', 'Ciencia'], respuesta: 0 },
                { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Futuro', 'Presente', 'Pasado'], respuesta: 0 },
                { japones: '祭事', lectura: 'saiji', opciones: ['Evento ceremonial', 'Fiesta', 'Reunión', 'Celebración'], respuesta: 0 },
                { japones: '正月', lectura: 'shougatsu', opciones: ['Año Nuevo', 'Navidad', 'Cumpleaños', 'Aniversario'], respuesta: 0 },
                { japones: 'お盆', lectura: 'obon', opciones: ['Festival de los muertos', 'Año Nuevo', 'Navidad', 'Cumpleaños'], respuesta: 0 },
                { japones: '七夕', lectura: 'tanabata', opciones: ['Festival de las estrellas', 'Año Nuevo', 'Navidad', 'Cumpleaños'], respuesta: 0 },
                { japones: 'こどもの日', lectura: 'kodomonohi', opciones: ['Día del niño', 'Día de la madre', 'Día del padre', 'Navidad'], respuesta: 0 },
                { japones: '成人式', lectura: 'seijinshiki', opciones: ['Ceremonia de la mayoría de edad', 'Graduación', 'Boda', 'Funeral'], respuesta: 0 },
                { japones: '敬老の日', lectura: 'keirounohi', opciones: ['Día del respeto a los ancianos', 'Día del niño', 'Día de la madre', 'Navidad'], respuesta: 0 }
            ]
        }
        // ... continuar para los otros subcontenedores (sub2_1, sub2_2, etc.)
    };

    // Si no hay palabras específicas para este subcontenedor y mazo, usar palabras por defecto
    if (palabrasDatabase[subcontenedorId] && palabrasDatabase[subcontenedorId][numeroMazo]) {
        return palabrasDatabase[subcontenedorId][numeroMazo];
    } else {
        // Fallback a palabras genéricas si no hay específicas
        return generarPalabras(10);
    }
}

// Función de respaldo para generar palabras genéricas
function generarPalabras(cantidad) {
    const palabras = [];
    const palabrasBase = [
        { japones: '言葉', lectura: 'kotoba', opciones: ['Palabra', 'Lenguaje', 'Expresión', 'Término'], respuesta: 0 },
        { japones: '時間', lectura: 'jikan', opciones: ['Tiempo', 'Hora', 'Momento', 'Duración'], respuesta: 0 },
        { japones: '場所', lectura: 'basho', opciones: ['Lugar', 'Espacio', 'Sitio', 'Ubicación'], respuesta: 0 },
        { japones: '人', lectura: 'hito', opciones: ['Persona', 'Gente', 'Humano', 'Individuo'], respuesta: 0 },
        { japones: '物', lectura: 'mono', opciones: ['Cosa', 'Objeto', 'Artículo', 'Elemento'], respuesta: 0 },
        { japones: '事', lectura: 'koto', opciones: ['Asunto', 'Cuestión', 'Tema', 'Problema'], respuesta: 0 },
        { japones: '世界', lectura: 'sekai', opciones: ['Mundo', 'Planeta', 'Tierra', 'Universo'], respuesta: 0 },
        { japones: '生活', lectura: 'seikatsu', opciones: ['Vida', 'Existencia', 'Rutina', 'Día a día'], respuesta: 0 },
        { japones: '仕事', lectura: 'shigoto', opciones: ['Trabajo', 'Empleo', 'Oficio', 'Labor'], respuesta: 0 },
        { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Parientes', 'Clan', 'Linaje'], respuesta: 0 }
    ];
    
    for (let i = 0; i < cantidad; i++) {
        palabras.push({...palabrasBase[i % palabrasBase.length]});
    }
    return palabras;
}

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// Función para obtener la URL de una imagen
function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    // Imagen por defecto si no se encuentra
    return 'imagenes/default.jpg';
}

// Función para obtener un video aleatorio
function obtenerVideoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * videosRecompensa.length);
    return videosRecompensa[indiceAleatorio];
}

// ============================================================================
// FUNCIONES DEL SISTEMA PRINCIPAL
// ============================================================================

function cargarContenedor(idContenedor) {
    if (estructura[idContenedor]) {
        contenedorActual = idContenedor;
        const contenedor = estructura[idContenedor];
        
        document.getElementById('titulo-contenedor').textContent = contenedor.nombre;
        document.getElementById('nombre-contenedor').textContent = `Sub-Contenedores de ${contenedor.nombre}`;
        
        const contenedorSub = document.getElementById('contenedor-subcontenedores');
        contenedorSub.innerHTML = '';
        
        Object.keys(contenedor.subcontenedores).forEach(key => {
            const sub = contenedor.subcontenedores[key];
            const subDiv = document.createElement('div');
            subDiv.className = 'subcontenedor-card';
            subDiv.onclick = () => cargarSubcontenedor(key);
            
            subDiv.innerHTML = `
                <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nombre}" class="subcontenedor-imagen">
                <div class="subcontenedor-texto">${sub.nombre}</div>
                <div class="subcontenedor-info">5 mazos disponibles</div>
            `;
            
            contenedorSub.appendChild(subDiv);
        });
        
        cambiarPantalla('pantalla-subcontenedores');
    }
}

function cargarSubcontenedor(idSubcontenedor) {
    const contenedor = estructura[contenedorActual];
    if (contenedor && contenedor.subcontenedores[idSubcontenedor]) {
        subcontenedorActual = idSubcontenedor;
        const subcontenedor = contenedor.subcontenedores[idSubcontenedor];
        
        document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nombre;
        document.getElementById('nombre-subcontenedor').textContent = `Mazos de ${subcontenedor.nombre}`;
        
        const contenedorMazos = document.getElementById('contenedor-mazos');
        contenedorMazos.innerHTML = '';
        
        Object.keys(subcontenedor.mazos).forEach(key => {
            const mazo = subcontenedor.mazos[key];
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-card';
            mazoDiv.onclick = () => cargarMazo(key);
            
            mazoDiv.innerHTML = `
                <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nombre}" class="mazo-imagen">
                <div class="mazo-texto">${mazo.nombre}</div>
                <div class="mazo-info">10 palabras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        cambiarPantalla('pantalla-mazos');
    }
}

function cargarMazo(idMazo) {
    const contenedor = estructura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    if (subcontenedor && subcontenedor.mazos[idMazo]) {
        mazoActual = [...subcontenedor.mazos[idMazo].palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        mezclarPreguntas();
        cambiarPantalla('pantalla-quiz');
        mostrarPregunta();
    }
}

function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        document.getElementById('palabra-japones').textContent = pregunta.japones;
        document.getElementById('lectura').textContent = '';
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        document.getElementById('boton-siguiente').style.display = 'none';
        
        const contenedorOpciones = document.getElementById('contenedor-opciones');
        contenedorOpciones.innerHTML = '';
        
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    opciones.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        document.getElementById('lectura').textContent = `(${lectura})`;
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
    }
    
    document.getElementById('boton-siguiente').style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // AGREGAR RECOMPENSA ECONÓMICA AL RPG
    if (porcentaje === 100) {
        // Dar 1 Sol por mazo completado al 100%
        rpgNovia.economia.saldo += 1;
        mostrarVideoRecompensa();
        
        // Mostrar mensaje de recompensa
        setTimeout(() => {
            mostrarMensaje("¡Ganaste 1 Sol por completar el mazo al 100%! 💰");
        }, 1000);
    } else if (porcentaje >= 80) {
        mostrarPantallaResultados(porcentaje);
    } else {
        mostrarPantallaResultados(porcentaje);
    }
}

function mostrarPantallaResultados(porcentaje) {
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    
    resultadoFinal.innerHTML = `
        Resumen del Quiz:
        
        Preguntas totales: ${mazoActual.length}
        Respuestas correctas: ${respuestasCorrectas}
        Respuestas incorrectas: ${respuestasIncorrectas}
        Porcentaje de aciertos: ${porcentaje}%
        
        ${porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
          porcentaje >= 60 ? 'Buen trabajo, pero puedes mejorar 👍' : 
          'Sigue practicando, lo harás mejor la próxima vez 💪'}
    `;
}

function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    // Actualizar la pantalla de video con la información del video seleccionado
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    
    cambiarPantalla('pantalla-video-recompensa');
    
    // Reproducir el video automáticamente
    const videoElement = document.getElementById('video-recompensa');
    videoElement.play();
    
    // Cuando el video termine, mostrar los resultados
    videoElement.onended = function() {
        const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
        mostrarPantallaResultados(porcentaje);
    };
}

function saltarVideo() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
}

function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

function volverASubcontenedores() {
    cambiarPantalla('pantalla-subcontenedores');
}

function volverAMazos() {
    cambiarPantalla('pantalla-mazos');
}

function repetirQuiz() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}

// ============================================================================
// FUNCIONES DEL RPG DE NOVIA
// ============================================================================

function iniciarRPGNovia() {
    cambiarPantalla('pantalla-rpg-novia');
    actualizarInterfazRPG();
}

function actualizarInterfazRPG() {
    // Actualizar información básica
    document.getElementById('nombre-novia').textContent = rpgNovia.estado.nombreNovia;
    document.getElementById('nivel-relacion').textContent = `Nivel ${rpgNovia.estado.nivelRelacion}`;
    document.getElementById('afinidad').textContent = `${rpgNovia.estado.afinidad}%`;
    document.getElementById('saldo-rpg').textContent = `${rpgNovia.economia.saldo} ${rpgNovia.economia.moneda}`;
    document.getElementById('condones-inventario').textContent = rpgNovia.economia.inventario.condones;
    
    // Actualizar barra de afinidad
    const barraAfinidad = document.getElementById('barra-afinidad');
    barraAfinidad.style.width = `${rpgNovia.estado.afinidad}%`;
    
    // Actualizar estado de ánimo
    document.getElementById('estado-animo').textContent = obtenerEmojiEstadoAnimo(rpgNovia.estado.estadoAnimo);
    
    // Mostrar/Ocultar sección +18
    const seccionAdulto = document.getElementById('seccion-adulto');
    seccionAdulto.style.display = rpgNovia.contenidoAdulto.desbloqueado ? 'block' : 'none';
    
    // Generar diálogo aleatorio
    generarDialogoAleatorio();
}

function obtenerEmojiEstadoAnimo(estado) {
    const emojis = {
        feliz: "😊",
        enamorada: "🥰",
        excitada: "😳",
        juguetona: "😏",
        timida: "😊",
        pasional: "🔥"
    };
    return emojis[estado] || "😊";
}

function generarDialogoAleatorio() {
    const dialogoElement = document.getElementById('dialogo-novia');
    const saludos = rpgNovia.conversaciones.saludos;
    const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
    
    dialogoElement.innerHTML = `
        <div class="dialogo-burbuja">
            <div class="texto-dialogo">${saludoAleatorio}</div>
            <div class="tiempo-dialogo">Ahora</div>
        </div>
    `;
}

function hablarConNovia() {
    const conversaciones = rpgNovia.estado.afinidad >= 60 ? 
        rpgNovia.conversaciones.conversacionesIntimas : 
        rpgNovia.conversaciones.conversacionesNormales;
    
    const conversacion = conversaciones[Math.floor(Math.random() * conversaciones.length)];
    const respuesta = conversacion.respuestas[Math.floor(Math.random() * conversacion.respuestas.length)];
    
    const dialogoElement = document.getElementById('dialogo-novia');
    dialogoElement.innerHTML = `
        <div class="dialogo-burbuja">
            <div class="pregunta-dialogo">${conversacion.pregunta}</div>
            <div class="texto-dialogo">${respuesta}</div>
            <div class="tiempo-dialogo">Ahora</div>
        </div>
    `;
    
    // Aumentar afinidad por conversación
    aumentarAfinidad(2);
}

function aumentarAfinidad(cantidad) {
    rpgNovia.estado.afinidad = Math.min(100, rpgNovia.estado.afinidad + cantidad);
    actualizarInterfazRPG();
    
    // Verificar si se desbloquea contenido +18
    if (rpgNovia.estado.afinidad >= 30 && !rpgNovia.contenidoAdulto.desbloqueado) {
        rpgNovia.contenidoAdulto.desbloqueado = true;
        mostrarMensaje("¡Nueva sección desbloqueada! 💕");
    }
}

function regalarItem(tipo) {
    const costos = {
        flores: 5,
        chocolates: 10,
        joyas: 20
    };
    
    if (rpgNovia.economia.saldo >= costos[tipo]) {
        rpgNovia.economia.saldo -= costos[tipo];
        rpgNovia.economia.inventario[tipo]++;
        
        // Aumentar afinidad según el regalo
        const afinidadGanada = {
            flores: 5,
            chocolates: 8,
            joyas: 15
        };
        
        aumentarAfinidad(afinidadGanada[tipo]);
        mostrarMensaje(`Le regalaste ${tipo} a ${rpgNovia.estado.nombreNovia} 💝`);
    } else {
        mostrarMensaje("No tienes suficiente dinero 💸");
    }
}

function comprarCondones() {
    const costo = 15;
    if (rpgNovia.economia.saldo >= costo) {
        rpgNovia.economia.saldo -= costo;
        rpgNovia.economia.inventario.condones++;
        actualizarInterfazRPG();
        mostrarMensaje("¡Condones comprados! 💕");
    } else {
        mostrarMensaje("No tienes suficiente dinero para comprar condones 💸");
    }
}

function usarCondon(escenaId) {
    if (rpgNovia.economia.inventario.condones <= 0) {
        mostrarMensaje("No tienes condones disponibles 💔");
        return;
    }
    
    const escena = rpgNovia.contenidoAdulto.escenasDisponibles.find(e => e.id === escenaId);
    
    if (!escena) {
        mostrarMensaje("Escena no encontrada");
        return;
    }
    
    if (rpgNovia.estado.afinidad < escena.afinidadRequerida) {
        mostrarMensaje(`Necesitas ${escena.afinidadRequerida}% de afinidad para esta escena 💝`);
        return;
    }
    
    // Usar condón
    rpgNovia.economia.inventario.condones -= escena.costoCondones;
    
    // Ejecutar escena
    ejecutarEscenaAdulto(escena);
}

function ejecutarEscenaAdulto(escena) {
    const dialogoElement = document.getElementById('dialogo-novia');
    
    // Verificar si existe el video para esta escena
    if (!videosIntimos[escena.id]) {
        // Fallback a texto si no hay video
        const mensajes = {
            beso: [
                "Te acercas lentamente... 💋",
                "Sientes su respiración acelerarse... 🌬️",
                "Tus labios se encuentran en un beso apasionado 🔥",
                "Ella responde con igual intensidad... 💕",
                "El momento se siente mágico ✨"
            ],
            caricias: [
                "Tus manos comienzan a explorar su cuerpo... ✋",
                "Ella emite un suave gemido... 😳",
                "La intimidad crece entre ustedes... 🌹",
                "Sientes su piel suave bajo tus dedos... 💫",
                "El ambiente se carga de deseo... 🔥"
            ],
            intimidad1: [
                "La llevas suavemente hacia la cama... 🛏️",
                "La mirada entre ustedes es intensa... 👁️",
                "Comienzan a quitarse la ropa lentamente... 👗",
                "La pasión los consume por completo... 🌋",
                "Una noche inolvidable comienza... 🌙"
            ],
            intimidad2: [
                "Ya conocen bien los cuerpos del otro... 💞",
                "Cada movimiento es sincronizado perfectamente... 🎶",
                "Los gemidos llenan la habitación... 🎵",
                "Llegan al éxtasis juntos... 🌠",
                "Una experiencia íntima y profunda... 💖"
            ]
        };
        
        let mensajeCompleto = `<div class="escena-adulta">`;
        mensajes[escena.id].forEach((mensaje, index) => {
            mensajeCompleto += `<div class="linea-escena">${mensaje}</div>`;
        });
        mensajeCompleto += `</div>`;
        dialogoElement.innerHTML = mensajeCompleto;
    } else {
        // Mostrar video
        dialogoElement.innerHTML = `
            <div class="video-escena-adulta">
                <h4>${escena.nombre}</h4>
                <video controls autoplay class="video-intimo">
                    <source src="${videosIntimos[escena.id]}" type="video/mp4">
                    Tu navegador no soporta el video. 
                    <div class="fallback-text">
                        💕 Disfruta este momento especial con ${rpgNovia.estado.nombreNovia}
                    </div>
                </video>
                <div class="leyenda-escena">💖 Momento íntimo especial</div>
                <div class="controles-video">
                    <button class="boton-saltar-video" onclick="terminarEscenaIntima()">Finalizar Escena</button>
                </div>
            </div>
        `;
        
        // Configurar evento cuando termine el video
        const videoElement = dialogoElement.querySelector('.video-intimo');
        videoElement.onended = function() {
            terminarEscenaIntima();
        };
        
        // Reproducir automáticamente (con mute para evitar restricciones)
        videoElement.muted = true;
        videoElement.play().catch(e => {
            console.log("Auto-play bloqueado, el usuario debe iniciar manualmente");
        });
    }
    
    // Aumentar afinidad y experiencia
    aumentarAfinidad(10);
    rpgNovia.estado.experiencia += 25;
    
    // Verificar subida de nivel
    verificarSubidaNivel();
    
    // Agregar a escenas completadas
    if (!rpgNovia.contenidoAdulto.escenasCompletadas.includes(escena.id)) {
        rpgNovia.contenidoAdulto.escenasCompletadas.push(escena.id);
    }
    
    actualizarInterfazRPG();
}

function terminarEscenaIntima() {
    // Volver al diálogo normal después de la escena
    generarDialogoAleatorio();
    mostrarMensaje("¡Qué momento tan especial! 💕 La afinidad ha aumentado.");
}

function verificarSubidaNivel() {
    const expNecesaria = rpgNovia.estado.nivelRelacion * 100;
    if (rpgNovia.estado.experiencia >= expNecesaria) {
        rpgNovia.estado.nivelRelacion++;
        rpgNovia.estado.experiencia = 0;
        mostrarMensaje(`¡Subiste al nivel ${rpgNovia.estado.nivelRelacion} de relación! 💕`);
    }
}

function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById('mensaje-rpg');
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = 'block';
    
    setTimeout(() => {
        mensajeElement.style.display = 'none';
    }, 3000);
}
