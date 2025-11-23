// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES (SOLO INTERNET)
// ============================================================================

const configImagenes = {
    contenedores: {
        'contenedor1': 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=300&h=300&fit=crop',
        'contenedor2': 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=300&h=300&fit=crop',
        'contenedor3': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop',
        'contenedor4': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop',
        'contenedor5': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=300&fit=crop',
        'contenedor6': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'contenedor7': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop',
        'contenedor8': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop',
        'contenedor9': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=300&fit=crop',
        'contenedor10': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop'
    },
    subcontenedores: {
        'sub1_1': 'https://pbs.twimg.com/media/G5_unInW4AA4bVq?format=png&name=360x360',
        'sub1_2': 'https://pbs.twimg.com/media/G5_vVCEX0AAnsA7?format=jpg&name=360x360',
        'sub1_3': 'https://pbs.twimg.com/media/G5_vDqIXgAAa8et?format=png&name=360x360',
        'sub1_4': 'https://images.unsplash.com/photo-1555099962-7c9c4f3c5c8f4?w=200&h=200&fit=crop',
        'sub1_5': 'https://images.unsplash.com/photo-1555099962-7d9c4f3c5c8f5?w=200&h=200&fit=crop',
        'sub2_1': 'https://images.unsplash.com/photo-1555099962-7e9c4f3c5c8f6?w=200&h=200&fit=crop',
        'sub2_2': 'https://images.unsplash.com/photo-1555099962-7f9c4f3c5c8f7?w=200&h=200&fit=crop',
        'sub2_3': 'https://images.unsplash.com/photo-1555099962-7g9c4f3c5c8f8?w=200&h=200&fit=crop',
        'sub2_4': 'https://images.unsplash.com/photo-1555099962-7h9c4f3c5c8f9?w=200&h=200&fit=crop',
        'sub2_5': 'https://images.unsplash.com/photo-1555099962-7i9c4f3c5c8g0?w=200&h=200&fit=crop',
        'sub3_1': 'https://images.unsplash.com/photo-1555099962-7j9c4f3c5c8g1?w=200&h=200&fit=crop',
        'sub3_2': 'https://images.unsplash.com/photo-1555099962-7k9c4f3c5c8g2?w=200&h=200&fit=crop',
        'sub3_3': 'https://images.unsplash.com/photo-1555099962-7l9c4f3c5c8g3?w=200&h=200&fit=crop',
        'sub3_4': 'https://images.unsplash.com/photo-1555099962-7m9c4f3c5c8g4?w=200&h=200&fit=crop',
        'sub3_5': 'https://images.unsplash.com/photo-1555099962-7n9c4f3c5c8g5?w=200&h=200&fit=crop',
        'sub4_1': 'https://images.unsplash.com/photo-1555099962-7o9c4f3c5c8g6?w=200&h=200&fit=crop',
        'sub4_2': 'https://images.unsplash.com/photo-1555099962-7p9c4f3c5c8g7?w=200&h=200&fit=crop',
        'sub4_3': 'https://images.unsplash.com/photo-1555099962-7q9c4f3c5c8g8?w=200&h=200&fit=crop',
        'sub4_4': 'https://images.unsplash.com/photo-1555099962-7r9c4f3c5c8g9?w=200&h=200&fit=crop',
        'sub4_5': 'https://images.unsplash.com/photo-1555099962-7s9c4f3c5c8h0?w=200&h=200&fit=crop',
        'sub5_1': 'https://images.unsplash.com/photo-1555099962-7t9c4f3c5c8h1?w=200&h=200&fit=crop',
        'sub5_2': 'https://images.unsplash.com/photo-1555099962-7u9c4f3c5c8h2?w=200&h=200&fit=crop',
        'sub5_3': 'https://images.unsplash.com/photo-1555099962-7v9c4f3c5c8h3?w=200&h=200&fit=crop',
        'sub5_4': 'https://images.unsplash.com/photo-1555099962-7w9c4f3c5c8h4?w=200&h=200&fit=crop',
        'sub5_5': 'https://images.unsplash.com/photo-1555099962-7x9c4f3c5c8h5?w=200&h=200&fit=crop',
        'sub6_1': 'https://images.unsplash.com/photo-1555099962-7y9c4f3c5c8h6?w=200&h=200&fit=crop',
        'sub6_2': 'https://images.unsplash.com/photo-1555099962-7z9c4f3c5c8h7?w=200&h=200&fit=crop',
        'sub6_3': 'https://images.unsplash.com/photo-1555099962-8a9c4f3c5c8h8?w=200&h=200&fit=crop',
        'sub6_4': 'https://images.unsplash.com/photo-1555099962-8b9c4f3c5c8h9?w=200&h=200&fit=crop',
        'sub6_5': 'https://images.unsplash.com/photo-1555099962-8c9c4f3c5c8i0?w=200&h=200&fit=crop',
        'sub7_1': 'https://images.unsplash.com/photo-1555099962-8d9c4f3c5c8i1?w=200&h=200&fit=crop',
        'sub7_2': 'https://images.unsplash.com/photo-1555099962-8e9c4f3c5c8i2?w=200&h=200&fit=crop',
        'sub7_3': 'https://images.unsplash.com/photo-1555099962-8f9c4f3c5c8i3?w=200&h=200&fit=crop',
        'sub7_4': 'https://images.unsplash.com/photo-1555099962-8g9c4f3c5c8i4?w=200&h=200&fit=crop',
        'sub7_5': 'https://images.unsplash.com/photo-1555099962-8h9c4f3c5c8i5?w=200&h=200&fit=crop',
        'sub8_1': 'https://images.unsplash.com/photo-1555099962-8i9c4f3c5c8i6?w=200&h=200&fit=crop',
        'sub8_2': 'https://images.unsplash.com/photo-1555099962-8j9c4f3c5c8i7?w=200&h=200&fit=crop',
        'sub8_3': 'https://images.unsplash.com/photo-1555099962-8k9c4f3c5c8i8?w=200&h=200&fit=crop',
        'sub8_4': 'https://images.unsplash.com/photo-1555099962-8l9c4f3c5c8i9?w=200&h=200&fit=crop',
        'sub8_5': 'https://images.unsplash.com/photo-1555099962-8m9c4f3c5c8j0?w=200&h=200&fit=crop',
        'sub9_1': 'https://images.unsplash.com/photo-1555099962-8n9c4f3c5c8j1?w=200&h=200&fit=crop',
        'sub9_2': 'https://images.unsplash.com/photo-1555099962-8o9c4f3c5c8j2?w=200&h=200&fit=crop',
        'sub9_3': 'https://images.unsplash.com/photo-1555099962-8p9c4f3c5c8j3?w=200&h=200&fit=crop',
        'sub9_4': 'https://images.unsplash.com/photo-1555099962-8q9c4f3c5c8j4?w=200&h=200&fit=crop',
        'sub9_5': 'https://images.unsplash.com/photo-1555099962-8r9c4f3c5c8j5?w=200&h=200&fit=crop',
        'sub10_1': 'https://images.unsplash.com/photo-1555099962-8s9c4f3c5c8j6?w=200&h=200&fit=crop',
        'sub10_2': 'https://images.unsplash.com/photo-1555099962-8t9c4f3c5c8j7?w=200&h=200&fit=crop',
        'sub10_3': 'https://images.unsplash.com/photo-1555099962-8u9c4f3c5c8j8?w=200&h=200&fit=crop',
        'sub10_4': 'https://images.unsplash.com/photo-1555099962-8v9c4f3c5c8j9?w=200&h=200&fit=crop',
        'sub10_5': 'https://images.unsplash.com/photo-1555099962-8w9c4f3c5c8k0?w=200&h=200&fit=crop'
    },
    mazos: {
        'mazo1': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop',
        'mazo2': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&h=150&fit=crop',
        'mazo3': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=150&h=150&fit=crop',
        'mazo4': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop',
        'mazo5': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=150&h=150&fit=crop',
        'mazo6': 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=150&h=150&fit=crop',
        'mazo7': 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=150&h=150&fit=crop',
        'mazo8': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop',
        'mazo9': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop',
        'mazo10': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=150&h=150&fit=crop'
    },
    rpg: {
        novia: 'https://pbs.twimg.com/media/G5Q_4LPWIAEiC9X?format=png&name=small',
        fondo: 'https://pbs.twimg.com/media/G5PcNzjXIAAxlsw?format=jpg&name=medium',
        iconoFlores: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=80&h=80&fit=crop',
        iconoChocolates: 'https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=80&h=80&fit=crop',
        iconoJoyas: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&h=80&fit=crop'
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

// ============================================================================
// SISTEMA RPG DE NOVIA
// ============================================================================

const rpgNovia = {
    estado: {
        nombreNovia: "Nino",
        nivelRelacion: 1,
        experiencia: 0,
        afinidad: 50,
        estadoAnimo: "feliz",
        energia: 100,
        ultimaVisita: null,
        conversacionesDesbloqueadas: [],
        escenasDesbloqueadas: []
    },
    
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
// ESTRUCTURA PRINCIPAL
// ============================================================================

const estructura = {
    'contenedor1': {
        nombre: 'Contenedor 1',
        subcontenedores: {
            'sub1_1': { nombre: 'Sub-Contenedor 1.1', mazos: generarMazos(10) },
            'sub1_2': { nombre: 'Sub-Contenedor 1.2', mazos: generarMazos(10) },
            'sub1_3': { nombre: 'Sub-Contenedor 1.3', mazos: generarMazos(10) },
            'sub1_4': { nombre: 'Sub-Contenedor 1.4', mazos: generarMazos(10) },
            'sub1_5': { nombre: 'Sub-Contenedor 1.5', mazos: generarMazos(10) }
        }
    },
    'contenedor2': {
        nombre: 'Contenedor 2',
        subcontenedores: {
            'sub2_1': { nombre: 'Sub-Contenedor 2.1', mazos: generarMazos(10) },
            'sub2_2': { nombre: 'Sub-Contenedor 2.2', mazos: generarMazos(10) },
            'sub2_3': { nombre: 'Sub-Contenedor 2.3', mazos: generarMazos(10) },
            'sub2_4': { nombre: 'Sub-Contenedor 2.4', mazos: generarMazos(10) },
            'sub2_5': { nombre: 'Sub-Contenedor 2.5', mazos: generarMazos(10) }
        }
    },
    'contenedor3': {
        nombre: 'Contenedor 3',
        subcontenedores: {
            'sub3_1': { nombre: 'Sub-Contenedor 3.1', mazos: generarMazos(10) },
            'sub3_2': { nombre: 'Sub-Contenedor 3.2', mazos: generarMazos(10) },
            'sub3_3': { nombre: 'Sub-Contenedor 3.3', mazos: generarMazos(10) },
            'sub3_4': { nombre: 'Sub-Contenedor 3.4', mazos: generarMazos(10) },
            'sub3_5': { nombre: 'Sub-Contenedor 3.5', mazos: generarMazos(10) }
        }
    },
    'contenedor4': {
        nombre: 'Contenedor 4',
        subcontenedores: {
            'sub4_1': { nombre: 'Sub-Contenedor 4.1', mazos: generarMazos(10) },
            'sub4_2': { nombre: 'Sub-Contenedor 4.2', mazos: generarMazos(10) },
            'sub4_3': { nombre: 'Sub-Contenedor 4.3', mazos: generarMazos(10) },
            'sub4_4': { nombre: 'Sub-Contenedor 4.4', mazos: generarMazos(10) },
            'sub4_5': { nombre: 'Sub-Contenedor 4.5', mazos: generarMazos(10) }
        }
    },
    'contenedor5': {
        nombre: 'Contenedor 5',
        subcontenedores: {
            'sub5_1': { nombre: 'Sub-Contenedor 5.1', mazos: generarMazos(10) },
            'sub5_2': { nombre: 'Sub-Contenedor 5.2', mazos: generarMazos(10) },
            'sub5_3': { nombre: 'Sub-Contenedor 5.3', mazos: generarMazos(10) },
            'sub5_4': { nombre: 'Sub-Contenedor 5.4', mazos: generarMazos(10) },
            'sub5_5': { nombre: 'Sub-Contenedor 5.5', mazos: generarMazos(10) }
        }
    },
    'contenedor6': {
        nombre: 'Contenedor 6',
        subcontenedores: {
            'sub6_1': { nombre: 'Sub-Contenedor 6.1', mazos: generarMazos(10) },
            'sub6_2': { nombre: 'Sub-Contenedor 6.2', mazos: generarMazos(10) },
            'sub6_3': { nombre: 'Sub-Contenedor 6.3', mazos: generarMazos(10) },
            'sub6_4': { nombre: 'Sub-Contenedor 6.4', mazos: generarMazos(10) },
            'sub6_5': { nombre: 'Sub-Contenedor 6.5', mazos: generarMazos(10) }
        }
    },
    'contenedor7': {
        nombre: 'Contenedor 7',
        subcontenedores: {
            'sub7_1': { nombre: 'Sub-Contenedor 7.1', mazos: generarMazos(10) },
            'sub7_2': { nombre: 'Sub-Contenedor 7.2', mazos: generarMazos(10) },
            'sub7_3': { nombre: 'Sub-Contenedor 7.3', mazos: generarMazos(10) },
            'sub7_4': { nombre: 'Sub-Contenedor 7.4', mazos: generarMazos(10) },
            'sub7_5': { nombre: 'Sub-Contenedor 7.5', mazos: generarMazos(10) }
        }
    },
    'contenedor8': {
        nombre: 'Contenedor 8',
        subcontenedores: {
            'sub8_1': { nombre: 'Sub-Contenedor 8.1', mazos: generarMazos(10) },
            'sub8_2': { nombre: 'Sub-Contenedor 8.2', mazos: generarMazos(10) },
            'sub8_3': { nombre: 'Sub-Contenedor 8.3', mazos: generarMazos(10) },
            'sub8_4': { nombre: 'Sub-Contenedor 8.4', mazos: generarMazos(10) },
            'sub8_5': { nombre: 'Sub-Contenedor 8.5', mazos: generarMazos(10) }
        }
    },
    'contenedor9': {
        nombre: 'Contenedor 9',
        subcontenedores: {
            'sub9_1': { nombre: 'Sub-Contenedor 9.1', mazos: generarMazos(10) },
            'sub9_2': { nombre: 'Sub-Contenedor 9.2', mazos: generarMazos(10) },
            'sub9_3': { nombre: 'Sub-Contenedor 9.3', mazos: generarMazos(10) },
            'sub9_4': { nombre: 'Sub-Contenedor 9.4', mazos: generarMazos(10) },
            'sub9_5': { nombre: 'Sub-Contenedor 9.5', mazos: generarMazos(10) }
        }
    },
    'contenedor10': {
        nombre: 'Contenedor 10',
        subcontenedores: {
            'sub10_1': { nombre: 'Sub-Contenedor 10.1', mazos: generarMazos(10) },
            'sub10_2': { nombre: 'Sub-Contenedor 10.2', mazos: generarMazos(10) },
            'sub10_3': { nombre: 'Sub-Contenedor 10.3', mazos: generarMazos(10) },
            'sub10_4': { nombre: 'Sub-Contenedor 10.4', mazos: generarMazos(10) },
            'sub10_5': { nombre: 'Sub-Contenedor 10.5', mazos: generarMazos(10) }
        }
    }
};

function generarMazos(cantidadMazos) {
    const mazos = {};
    for (let i = 1; i <= cantidadMazos; i++) {
        mazos[`mazo${i}`] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabras(10)
        };
    }
    return mazos;
}

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

// FUNCIÓN CORREGIDA - SOLO URLs DE INTERNET
function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    // Fallback a placeholder de internet
    return 'https://via.placeholder.com/200x200/4a90e2/ffffff?text=Imagen+No+Encontrada';
}

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
                <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nombre}" class="subcontenedor-imagen" onerror="this.src='https://via.placeholder.com/150x150/4a90e2/ffffff?text=Error'">
                <div class="subcontenedor-texto">${sub.nombre}</div>
                <div class="subcontenedor-info">10 mazos disponibles</div>
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
                <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nombre}" class="mazo-imagen" onerror="this.src='https://via.placeholder.com/120x120/4a90e2/ffffff?text=Error'">
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
        
        // Recompensa económica por respuesta correcta
        rpgNovia.economia.saldo += 0.1; // 0.1 sol por respuesta correcta
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
    
    // RECOMPENSA ECONÓMICA MEJORADA
    if (porcentaje === 100) {
        rpgNovia.economia.saldo += 2; // 2 soles por 100%
        mostrarVideoRecompensa();
    } else if (porcentaje >= 80) {
        rpgNovia.economia.saldo += 1; // 1 sol por 80%+
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
        Dinero ganado: ${porcentaje === 100 ? '2' : porcentaje >= 80 ? '1' : '0'} ${rpgNovia.economia.moneda}
        
        ${porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
          porcentaje >= 60 ? 'Buen trabajo, pero puedes mejorar 👍' : 
          'Sigue practicando, lo harás mejor la próxima vez 💪'}
    `;
}

function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    
    cambiarPantalla('pantalla-video-recompensa');
    
    const videoElement = document.getElementById('video-recompensa');
    videoElement.play();
    
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
    document.getElementById('nombre-novia').textContent = rpgNovia.estado.nombreNovia;
    document.getElementById('nivel-relacion').textContent = `Nivel ${rpgNovia.estado.nivelRelacion}`;
    document.getElementById('afinidad').textContent = `${rpgNovia.estado.afinidad}%`;
    document.getElementById('saldo-rpg').textContent = `${rpgNovia.economia.saldo} ${rpgNovia.economia.moneda}`;
    document.getElementById('condones-inventario').textContent = rpgNovia.economia.inventario.condones;
    
    const barraAfinidad = document.getElementById('barra-afinidad');
    barraAfinidad.style.width = `${rpgNovia.estado.afinidad}%`;
    
    document.getElementById('estado-animo').textContent = obtenerEmojiEstadoAnimo(rpgNovia.estado.estadoAnimo);
    
    const seccionAdulto = document.getElementById('seccion-adulto');
    seccionAdulto.style.display = rpgNovia.contenidoAdulto.desbloqueado ? 'block' : 'none';
    
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
    
    aumentarAfinidad(2);
}

function aumentarAfinidad(cantidad) {
    rpgNovia.estado.afinidad = Math.min(100, rpgNovia.estado.afinidad + cantidad);
    actualizarInterfazRPG();
    
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
    
    rpgNovia.economia.inventario.condones -= escena.costoCondones;
    ejecutarEscenaAdulto(escena);
}

function ejecutarEscenaAdulto(escena) {
    const dialogoElement = document.getElementById('dialogo-novia');
    
    if (!videosIntimos[escena.id]) {
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
        
        const videoElement = dialogoElement.querySelector('.video-intimo');
        videoElement.onended = function() {
            terminarEscenaIntima();
        };
        
        videoElement.muted = true;
        videoElement.play().catch(e => {
            console.log("Auto-play bloqueado, el usuario debe iniciar manualmente");
        });
    }
    
    aumentarAfinidad(10);
    rpgNovia.estado.experiencia += 25;
    verificarSubidaNivel();
    
    if (!rpgNovia.contenidoAdulto.escenasCompletadas.includes(escena.id)) {
        rpgNovia.contenidoAdulto.escenasCompletadas.push(escena.id);
    }
    
    actualizarInterfazRPG();
}

function terminarEscenaIntima() {
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
