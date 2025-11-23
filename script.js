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
        'mazo5': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=150&h=150&fit=crop'
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
        url: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
        duracion: "10s"
    },
    {
        id: 2,
        titulo: "¡Excelente Trabajo! ⭐",
        url: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
        duracion: "15s"
    },
    {
        id: 3,
        titulo: "¡Eres Increíble! 💪",
        url: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
        duracion: "12s"
    },
    {
        id: 4,
        titulo: "¡Perfecto! 🏆",
        url: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
        duracion: "8s"
    },
    {
        id: 5,
        titulo: "¡Misión Cumplida! 🚀",
        url: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
        duracion: "11s"
    }
];

// ============================================================================
// VIDEOS +18 PARA MOMENTOS ÍNTIMOS
// ============================================================================

const videosIntimos = {
    beso: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
    caricias: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
    intimidad1: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4",
    intimidad2: "https://github.com/SORFAR123123/s/blob/main/Belinda.mp4"
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
// BANCO DE PALABRAS ÚNICAS PARA CADA MAZO
// ============================================================================

const bancoPalabras = {
    // MAZOS PARA SUBCONTENEDORES DEL CONTENEDOR 1
    sub1_1: {
        mazo1: [
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
        ],
        mazo2: [
            { japones: '学校', lectura: 'gakkou', opciones: ['Escuela', 'Colegio', 'Instituto', 'Academia'], respuesta: 0 },
            { japones: '学生', lectura: 'gakusei', opciones: ['Estudiante', 'Alumno', 'Discípulo', 'Aprendiz'], respuesta: 0 },
            { japones: '先生', lectura: 'sensei', opciones: ['Profesor', 'Maestro', 'Instructor', 'Educador'], respuesta: 0 },
            { japones: '勉強', lectura: 'benkyou', opciones: ['Estudio', 'Aprendizaje', 'Práctica', 'Preparación'], respuesta: 0 },
            { japones: '本', lectura: 'hon', opciones: ['Libro', 'Volumen', 'Texto', 'Publicación'], respuesta: 0 },
            { japones: '紙', lectura: 'kami', opciones: ['Papel', 'Hoja', 'Documento', 'Folio'], respuesta: 0 },
            { japones: '鉛筆', lectura: 'enpitsu', opciones: ['Lápiz', 'Portaminas', 'Lapicero', 'Grafito'], respuesta: 0 },
            { japones: '机', lectura: 'tsukue', opciones: ['Escritorio', 'Mesa', 'Bureau', 'Pupitre'], respuesta: 0 },
            { japones: '椅子', lectura: 'isu', opciones: ['Silla', 'Asiento', 'Banco', 'Taburete'], respuesta: 0 },
            { japones: '教室', lectura: 'kyoushitsu', opciones: ['Aula', 'Sala de clase', 'Salón', 'Clase'], respuesta: 0 }
        ],
        mazo3: [
            { japones: '食べ物', lectura: 'tabemono', opciones: ['Comida', 'Alimento', 'Plato', 'Vianda'], respuesta: 0 },
            { japones: '水', lectura: 'mizu', opciones: ['Agua', 'Líquido', 'H2O', 'Elemento'], respuesta: 0 },
            { japones: '米', lectura: 'kome', opciones: ['Arroz', 'Grano', 'Cereal', 'Semilla'], respuesta: 0 },
            { japones: '魚', lectura: 'sakana', opciones: ['Pescado', 'Peces', 'Marisco', 'Especie marina'], respuesta: 0 },
            { japones: '肉', lectura: 'niku', opciones: ['Carne', 'Filete', 'Bistec', 'Res'], respuesta: 0 },
            { japones: '野菜', lectura: 'yasai', opciones: ['Verdura', 'Hortaliza', 'Legumbre', 'Vegetal'], respuesta: 0 },
            { japones: '果物', lectura: 'kudamono', opciones: ['Fruta', 'Fruto', 'Pieza de fruta', 'Frutal'], respuesta: 0 },
            { japones: '牛乳', lectura: 'gyuunyuu', opciones: ['Leche', 'Lácteo', 'Bebida blanca', 'Líquido nutritivo'], respuesta: 0 },
            { japones: '卵', lectura: 'tamago', opciones: ['Huevo', 'Óvulo', 'Blanquillo', 'Célula reproductiva'], respuesta: 0 },
            { japones: 'パン', lectura: 'pan', opciones: ['Pan', 'Bollo', 'Pieza de pan', 'Masa horneada'], respuesta: 0 }
        ],
        mazo4: [
            { japones: '天気', lectura: 'tenki', opciones: ['Tiempo', 'Clima', 'Condiciones atmosféricas', 'Meteorología'], respuesta: 0 },
            { japones: '太陽', lectura: 'taiyou', opciones: ['Sol', 'Astro rey', 'Estrella', 'Luminaria'], respuesta: 0 },
            { japones: '月', lectura: 'tsuki', opciones: ['Luna', 'Satélite', 'Astro nocturno', 'Fases lunares'], respuesta: 0 },
            { japones: '星', lectura: 'hoshi', opciones: ['Estrella', 'Astro', 'Cuerpo celeste', 'Luminaria nocturna'], respuesta: 0 },
            { japones: '雨', lectura: 'ame', opciones: ['Lluvia', 'Precipitación', 'Aguacero', 'Chubasco'], respuesta: 0 },
            { japones: '雪', lectura: 'yuki', opciones: ['Nieve', 'Precipitación congelada', 'Copo de nieve', 'Nevada'], respuesta: 0 },
            { japones: '風', lectura: 'kaze', opciones: ['Viento', 'Corriente de aire', 'Brisa', 'Ráfaga'], respuesta: 0 },
            { japones: '雲', lectura: 'kumo', opciones: ['Nube', 'Neblina', 'Vapor de agua', 'Cúmulo'], respuesta: 0 },
            { japones: '雷', lectura: 'kaminari', opciones: ['Trueno', 'Rayo', 'Tormenta eléctrica', 'Estruendo'], respuesta: 0 },
            { japones: '虹', lectura: 'niji', opciones: ['Arcoíris', 'Espectro de colores', 'Fenómeno óptico', 'Semicírculo de colores'], respuesta: 0 }
        ],
        mazo5: [
            { japones: '色', lectura: 'iro', opciones: ['Color', 'Tono', 'Matiz', 'Pigmento'], respuesta: 0 },
            { japones: '赤', lectura: 'aka', opciones: ['Rojo', 'Color rojo', 'Escarlata', 'Carmesí'], respuesta: 0 },
            { japones: '青', lectura: 'ao', opciones: ['Azul', 'Color azul', 'Celeste', 'Añil'], respuesta: 0 },
            { japones: '緑', lectura: 'midori', opciones: ['Verde', 'Color verde', 'Esmeralda', 'Verde hierba'], respuesta: 0 },
            { japones: '黄色', lectura: 'kiiro', opciones: ['Amarillo', 'Color amarillo', 'Dorado', 'Amarillo brillante'], respuesta: 0 },
            { japones: '白', lectura: 'shiro', opciones: ['Blanco', 'Color blanco', 'Albo', 'Inmaculado'], respuesta: 0 },
            { japones: '黒', lectura: 'kuro', opciones: ['Negro', 'Color negro', 'Ébano', 'Oscuro'], respuesta: 0 },
            { japones: '茶色', lectura: 'chairo', opciones: ['Marrón', 'Color marrón', 'Café', 'Pardo'], respuesta: 0 },
            { japones: '紫', lectura: 'murasaki', opciones: ['Morado', 'Color morado', 'Violeta', 'Púrpura'], respuesta: 0 },
            { japones: '灰色', lectura: 'haiiro', opciones: ['Gris', 'Color gris', 'Plata', 'Ceniza'], respuesta: 0 }
        ]
    },
    
    // MAZOS PARA SUBCONTENEDORES DEL CONTENEDOR 2
    sub2_1: {
        mazo1: [
            { japones: '動物', lectura: 'doubutsu', opciones: ['Animal', 'Bestia', 'Criatura', 'Ser vivo'], respuesta: 0 },
            { japones: '犬', lectura: 'inu', opciones: ['Perro', 'Can', 'Canino', 'Mascota'], respuesta: 0 },
            { japones: '猫', lectura: 'neko', opciones: ['Gato', 'Felino', 'Minino', 'Michi'], respuesta: 0 },
            { japones: '鳥', lectura: 'tori', opciones: ['Pájaro', 'Ave', 'Volátil', 'Alado'], respuesta: 0 },
            { japones: '魚', lectura: 'sakana', opciones: ['Pez', 'Escama', 'Especie acuática', 'Animal marino'], respuesta: 0 },
            { japones: '馬', lectura: 'uma', opciones: ['Caballo', 'Equino', 'Corcel', 'Pura sangre'], respuesta: 0 },
            { japones: '牛', lectura: 'ushi', opciones: ['Vaca', 'Bovino', 'Res', 'Ganado'], respuesta: 0 },
            { japones: '豚', lectura: 'buta', opciones: ['Cerdo', 'Puerco', 'Cochino', 'Marrano'], respuesta: 0 },
            { japones: '羊', lectura: 'hitsuji', opciones: ['Oveja', 'Ovino', 'Cordero', 'Lanar'], respuesta: 0 },
            { japones: '猿', lectura: 'saru', opciones: ['Mono', 'Simio', 'Primate', 'Chango'], respuesta: 0 }
        ],
        mazo2: [
            { japones: '花', lectura: 'hana', opciones: ['Flor', 'Blossom', 'Pétalo', 'Planta ornamental'], respuesta: 0 },
            { japones: '桜', lectura: 'sakura', opciones: ['Cerezo', 'Flor de cerezo', 'Sakura', 'Flor japonesa'], respuesta: 0 },
            { japones: '菊', lectura: 'kiku', opciones: ['Crisantemo', 'Flor de otoño', 'Planta ornamental', 'Flor nacional'], respuesta: 0 },
            { japones: '薔薇', lectura: 'bara', opciones: ['Rosa', 'Flor espinosa', 'Rosal', 'Flor fragante'], respuesta: 0 },
            { japones: '百合', lectura: 'yuri', opciones: ['Lirio', 'Azucena', 'Flor blanca', 'Planta bulbosa'], respuesta: 0 },
            { japones: '向日葵', lectura: 'himawari', opciones: ['Girasol', 'Flor solar', 'Mirasol', 'Planta heliotrópica'], respuesta: 0 },
            { japones: '蓮', lectura: 'hasu', opciones: ['Loto', 'Flor acuática', 'Nelumbo', 'Planta sagrada'], respuesta: 0 },
            { japones: '菖蒲', lectura: 'ayame', opciones: ['Iris', 'Lirio japonés', 'Flor de mayo', 'Planta perenne'], respuesta: 0 },
            { japones: '椿', lectura: 'tsubaki', opciones: ['Camelia', 'Flor de invierno', 'Planta ornamental', 'Flor japonesa'], respuesta: 0 },
            { japones: '牡丹', lectura: 'botan', opciones: ['Peonía', 'Flor exuberante', 'Planta herbácea', 'Flor china'], respuesta: 0 }
        ],
        mazo3: [
            { japones: '国', lectura: 'kuni', opciones: ['País', 'Nación', 'Estado', 'Territorio'], respuesta: 0 },
            { japones: '日本', lectura: 'nihon', opciones: ['Japón', 'País del sol naciente', 'Nippon', 'Archipiélago japonés'], respuesta: 0 },
            { japones: 'アメリカ', lectura: 'amerika', opciones: ['Estados Unidos', 'América', 'USA', 'Norteamérica'], respuesta: 0 },
            { japones: '中国', lectura: 'chuugoku', opciones: ['China', 'República Popular China', 'Imperio Celestial', 'Asia Oriental'], respuesta: 0 },
            { japones: '韓国', lectura: 'kankoku', opciones: ['Corea del Sur', 'República de Corea', 'Hanguk', 'Península coreana'], respuesta: 0 },
            { japones: 'フランス', lectura: 'furansu', opciones: ['Francia', 'República Francesa', 'Galía', 'Europa Occidental'], respuesta: 0 },
            { japones: 'イギリス', lectura: 'igirisu', opciones: ['Reino Unido', 'Gran Bretaña', 'Inglaterra', 'Islas Británicas'], respuesta: 0 },
            { japones: 'ドイツ', lectura: 'doitsu', opciones: ['Alemania', 'República Federal de Alemania', 'Deutschland', 'Europa Central'], respuesta: 0 },
            { japones: 'イタリア', lectura: 'itaria', opciones: ['Italia', 'República Italiana', 'Peninsula Itálica', 'Europa del Sur'], respuesta: 0 },
            { japones: 'スペイン', lectura: 'supein', opciones: ['España', 'Reino de España', 'Península Ibérica', 'Europa del Sur'], respuesta: 0 }
        ],
        mazo4: [
            { japones: '都市', lectura: 'toshi', opciones: ['Ciudad', 'Metrópolis', 'Urbe', 'Centro urbano'], respuesta: 0 },
            { japones: '東京', lectura: 'toukyou', opciones: ['Tokio', 'Capital de Japón', 'Metrópolis de Tokio', 'Kanto'], respuesta: 0 },
            { japones: '大阪', lectura: 'oosaka', opciones: ['Osaka', 'Ciudad de Osaka', 'Kansai', 'Puerto comercial'], respuesta: 0 },
            { japones: '京都', lectura: 'kyouto', opciones: ['Kioto', 'Antigua capital', 'Ciudad imperial', 'Kansai'], respuesta: 0 },
            { japones: '名古屋', lectura: 'nagoya', opciones: ['Nagoya', 'Ciudad de Nagoya', 'Chubu', 'Centro de Japón'], respuesta: 0 },
            { japones: '横浜', lectura: 'yokohama', opciones: ['Yokohama', 'Ciudad portuaria', 'Kanagawa', 'Area de Tokio'], respuesta: 0 },
            { japones: '福岡', lectura: 'fukuoka', opciones: ['Fukuoka', 'Ciudad de Fukuoka', 'Kyushu', 'Sur de Japón'], respuesta: 0 },
            { japones: '札幌', lectura: 'sapporo', opciones: ['Sapporo', 'Ciudad de Sapporo', 'Hokkaido', 'Norte de Japón'], respuesta: 0 },
            { japones: '神戸', lectura: 'koube', opciones: ['Kobe', 'Ciudad de Kobe', 'Hyogo', 'Puerto internacional'], respuesta: 0 },
            { japones: '広島', lectura: 'hiroshima', opciones: ['Hiroshima', 'Ciudad de Hiroshima', 'Chugoku', 'Oeste de Japón'], respuesta: 0 }
        ],
        mazo5: [
            { japones: 'スポーツ', lectura: 'supootsu', opciones: ['Deporte', 'Actividad física', 'Ejercicio', 'Competición'], respuesta: 0 },
            { japones: '野球', lectura: 'yakyuu', opciones: ['Béisbol', 'Pelota base', 'Juego de bate', 'Deporte americano'], respuesta: 0 },
            { japones: 'サッカー', lectura: 'sakkaa', opciones: ['Fútbol', 'Balompié', 'Deporte de equipo', 'Juego con pelota'], respuesta: 0 },
            { japones: 'テニス', lectura: 'tenisu', opciones: ['Tenis', 'Deporte de raqueta', 'Juego individual', 'Competición en cancha'], respuesta: 0 },
            { japones: 'バスケットボール', lectura: 'basukettobooru', opciones: ['Baloncesto', 'Básquetbol', 'Deporte de canasta', 'Juego con pelota'], respuesta: 0 },
            { japones: '水泳', lectura: 'suiei', opciones: ['Natación', 'Deporte acuático', 'Estilo libre', 'Competición en piscina'], respuesta: 0 },
            { japones: '卓球', lectura: 'takkyuu', opciones: ['Tenis de mesa', 'Ping pong', 'Deporte de mesa', 'Juego con raqueta pequeña'], respuesta: 0 },
            { japones: '柔道', lectura: 'juudou', opciones: ['Judo', 'Arte marcial', 'Deporte de combate', 'Defensa personal'], respuesta: 0 },
            { japones: '剣道', lectura: 'kendou', opciones: ['Kendo', 'Esgrima japonesa', 'Arte marcial con espada', 'Camino de la espada'], respuesta: 0 },
            { japones: '相撲', lectura: 'sumou', opciones: ['Sumo', 'Lucha japonesa', 'Deporte tradicional', 'Combate en dohyo'], respuesta: 0 }
        ]
    },
    
    // MAZOS PARA SUBCONTENEDORES DEL CONTENEDOR 3
    sub3_1: {
        mazo1: [
            { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Sonido organizado', 'Melodía', 'Arte sonoro'], respuesta: 0 },
            { japones: '歌', lectura: 'uta', opciones: ['Canción', 'Canto', 'Melodía vocal', 'Composición musical'], respuesta: 0 },
            { japones: 'ピアノ', lectura: 'piano', opciones: ['Piano', 'Instrumento de teclado', 'Pianoforte', 'Instrumento musical'], respuesta: 0 },
            { japones: 'ギター', lectura: 'gitaa', opciones: ['Guitarra', 'Instrumento de cuerda', 'Guitarra acústica', 'Instrumento musical'], respuesta: 0 },
            { japones: 'ドラム', lectura: 'doramu', opciones: ['Batería', 'Tambores', 'Percusión', 'Instrumento de percusión'], respuesta: 0 },
            { japones: 'バイオリン', lectura: 'baiorin', opciones: ['Violín', 'Instrumento de cuerda frotada', 'Violino', 'Instrumento musical'], respuesta: 0 },
            { japones: 'フルート', lectura: 'furuuto', opciones: ['Flauta', 'Instrumento de viento', 'Flauta traversa', 'Instrumento musical'], respuesta: 0 },
            { japones: 'トランペット', lectura: 'toranpetto', opciones: ['Trompeta', 'Instrumento de viento metal', 'Corneta', 'Instrumento musical'], respuesta: 0 },
            { japones: 'オーケストラ', lectura: 'ookesutora', opciones: ['Orquesta', 'Conjunto musical', 'Agrupación instrumental', 'Banda sinfónica'], respuesta: 0 },
            { japones: 'コンサート', lectura: 'konsaato', opciones: ['Concierto', 'Recital', 'Presentación musical', 'Espectáculo en vivo'], respuesta: 0 }
        ],
        mazo2: [
            { japones: '映画', lectura: 'eiga', opciones: ['Película', 'Cine', 'Film', 'Producción cinematográfica'], respuesta: 0 },
            { japones: '俳優', lectura: 'haiyuu', opciones: ['Actor', 'Intérprete', 'Artista', 'Protagonista'], respuesta: 0 },
            { japones: '女優', lectura: 'joyuu', opciones: ['Actriz', 'Intérprete femenina', 'Artista', 'Protagonista femenina'], respuesta: 0 },
            { japones: '監督', lectura: 'kantoku', opciones: ['Director', 'Realizador', 'Cineasta', 'Guionista principal'], respuesta: 0 },
            { japones: '脚本', lectura: 'kyakuhon', opciones: ['Guion', 'Libreto', 'Argumento', 'Texto cinematográfico'], respuesta: 0 },
            { japones: '舞台', lectura: 'butai', opciones: ['Escenario', 'Tablas', 'Teatro', 'Plataforma de actuación'], respuesta: 0 },
            { japones: '演技', lectura: 'engi', opciones: ['Actuación', 'Interpretación', 'Representación', 'Performance'], respuesta: 0 },
            { japones: '観客', lectura: 'kankyaku', opciones: ['Audiencia', 'Espectadores', 'Público', 'Asistentes'], respuesta: 0 },
            { japones: '拍手', lectura: 'hakushu', opciones: ['Aplausos', 'Palmas', 'Ovación', 'Reconocimiento'], respuesta: 0 },
            { japones: '喝采', lectura: 'kassai', opciones: ['Ovación', 'Aplausos entusiastas', 'Aclamación', 'Reconocimiento caluroso'], respuesta: 0 }
        ],
        mazo3: [
            { japones: '文学', lectura: 'bungaku', opciones: ['Literatura', 'Letras', 'Escritos', 'Obras escritas'], respuesta: 0 },
            { japones: '小説', lectura: 'shousetsu', opciones: ['Novela', 'Ficción', 'Narrativa', 'Relato extenso'], respuesta: 0 },
            { japones: '詩', lectura: 'shi', opciones: ['Poesía', 'Poema', 'Verso', 'Composición lírica'], respuesta: 0 },
            { japones: '物語', lectura: 'monogatari', opciones: ['Cuento', 'Historia', 'Relato', 'Narración'], respuesta: 0 },
            { japones: '作家', lectura: 'sakka', opciones: ['Escritor', 'Autor', 'Literato', 'Novelista'], respuesta: 0 },
            { japones: '詩人', lectura: 'shijin', opciones: ['Poeta', 'Versificador', 'Bardo', 'Escritor de poesía'], respuesta: 0 },
            { japones: '登場人物', lectura: 'toujoujinbutsu', opciones: ['Personaje', 'Protagonista', 'Actor en la trama', 'Figura literaria'], respuesta: 0 },
            { japones: 'プロット', lectura: 'purotto', opciones: ['Trama', 'Argumento', 'Estructura narrativa', 'Desarrollo de la historia'], respuesta: 0 },
            { japones: '結末', lectura: 'ketsumatsu', opciones: ['Final', 'Desenlace', 'Conclusión', 'Resolución'], respuesta: 0 },
            { japones: '主人公', lectura: 'shujinkou', opciones: ['Protagonista', 'Personaje principal', 'Héroe', 'Figura central'], respuesta: 0 }
        ],
        mazo4: [
            { japones: '科学', lectura: 'kagaku', opciones: ['Ciencia', 'Conocimiento sistemático', 'Investigación', 'Estudio'], respuesta: 0 },
            { japones: '物理', lectura: 'butsuri', opciones: ['Física', 'Ciencia natural', 'Estudio de la materia', 'Ciencia fundamental'], respuesta: 0 },
            { japones: '化学', lectura: 'kagaku', opciones: ['Química', 'Ciencia de la materia', 'Estudio de sustancias', 'Ciencia molecular'], respuesta: 0 },
            { japones: '生物', lectura: 'seibutsu', opciones: ['Biología', 'Ciencia de la vida', 'Estudio de seres vivos', 'Ciencia natural'], respuesta: 0 },
            { japones: '数学', lectura: 'suugaku', opciones: ['Matemáticas', 'Ciencia exacta', 'Estudio de números', 'Cálculo'], respuesta: 0 },
            { japones: '天文学', lectura: 'tenmongaku', opciones: ['Astronomía', 'Ciencia del espacio', 'Estudio de cuerpos celestes', 'Cosmología'], respuesta: 0 },
            { japones: '地理', lectura: 'chiri', opciones: ['Geografía', 'Ciencia de la Tierra', 'Estudio del territorio', 'Cartografía'], respuesta: 0 },
            { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Estudio del pasado', 'Cronología', 'Registro histórico'], respuesta: 0 },
            { japones: '哲学', lectura: 'tetsugaku', opciones: ['Filosofía', 'Amor a la sabiduría', 'Pensamiento crítico', 'Reflexión'], respuesta: 0 },
            { japones: '心理学', lectura: 'shinrigaku', opciones: ['Psicología', 'Ciencia de la mente', 'Estudio del comportamiento', 'Conductismo'], respuesta: 0 }
        ],
        mazo5: [
            { japones: '技術', lectura: 'gijutsu', opciones: ['Tecnología', 'Técnica', 'Habilidad', 'Conocimiento aplicado'], respuesta: 0 },
            { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Creación', 'Innovación', 'Descubrimiento'], respuesta: 0 },
            { japones: '機械', lectura: 'kikai', opciones: ['Máquina', 'Mecanismo', 'Aparato', 'Dispositivo'], respuesta: 0 },
            { japones: '電気', lectura: 'denki', opciones: ['Electricidad', 'Energía eléctrica', 'Corriente', 'Flujo de electrones'], respuesta: 0 },
            { japones: 'コンピューター', lectura: 'konpyuutaa', opciones: ['Computadora', 'Ordenador', 'PC', 'Equipo informático'], respuesta: 0 },
            { japones: 'インターネット', lectura: 'intaanetto', opciones: ['Internet', 'Red global', 'World Wide Web', 'Conexión digital'], respuesta: 0 },
            { japones: 'スマートフォン', lectura: 'sumaatofon', opciones: ['Teléfono inteligente', 'Smartphone', 'Dispositivo móvil', 'Celular avanzado'], respuesta: 0 },
            { japones: 'ロボット', lectura: 'robotto', opciones: ['Robot', 'Autómata', 'Máquina programable', 'Androide'], respuesta: 0 },
            { japones: '人工知能', lectura: 'jinkouchinou', opciones: ['Inteligencia artificial', 'IA', 'Algoritmo inteligente', 'Sistema cognitivo'], respuesta: 0 },
            { japones: '革新', lectura: 'kakushin', opciones: ['Innovación', 'Renovación', 'Cambio radical', 'Transformación'], respuesta: 0 }
        ]
    }
};

// ============================================================================
// ESTRUCTURA PRINCIPAL CORREGIDA - 5 MAZOS POR SUBCONTENEDOR
// ============================================================================

const estructura = {
    'contenedor1': {
        nombre: 'Last summer',
        subcontenedores: {
            'sub1_1': { nombre: 'Last summer 1', mazos: generarMazosEspecificos('sub1_1') },
            'sub1_2': { nombre: 'Last summer 2', mazos: generarMazosEspecificos('sub1_1') },
            'sub1_3': { nombre: 'Last summer 3', mazos: generarMazosEspecificos('sub1_1') },
            'sub1_4': { nombre: 'Last summer 4', mazos: generarMazosEspecificos('sub1_1') },
            'sub1_5': { nombre: 'Last summer 5', mazos: generarMazosEspecificos('sub1_1') }
        }
    },
    'contenedor2': {
        nombre: 'Toono esuke',
        subcontenedores: {
            'sub2_1': { nombre: 'Sub-Contenedor 2.1', mazos: generarMazosEspecificos('sub2_1') },
            'sub2_2': { nombre: 'Sub-Contenedor 2.2', mazos: generarMazosEspecificos('sub2_1') },
            'sub2_3': { nombre: 'Sub-Contenedor 2.3', mazos: generarMazosEspecificos('sub2_1') },
            'sub2_4': { nombre: 'Sub-Contenedor 2.4', mazos: generarMazosEspecificos('sub2_1') },
            'sub2_5': { nombre: 'Sub-Contenedor 2.5', mazos: generarMazosEspecificos('sub2_1') }
        }
    },
    'contenedor3': {
        nombre: 'Contenedor 3',
        subcontenedores: {
            'sub3_1': { nombre: 'Hermana rusa', mazos: generarMazosEspecificos('sub3_1') },
            'sub3_2': { nombre: 'Madre hija oyakodon', mazos: generarMazosEspecificos('sub3_1') },
            'sub3_3': { nombre: 'De la escuela', mazos: generarMazosEspecificos('sub3_1') },
            'sub3_4': { nombre: 'Sub-Contenedor 3.4', mazos: generarMazosEspecificos('sub3_1') },
            'sub3_5': { nombre: 'Sub-Contenedor 3.5', mazos: generarMazosEspecificos('sub3_1') }
        }
    },
    'contenedor4': {
        nombre: 'Contenedor 4',
        subcontenedores: {
            'sub4_1': { nombre: 'Sub-Contenedor 4.1', mazos: generarMazosEspecificos('sub1_1') },
            'sub4_2': { nombre: 'Sub-Contenedor 4.2', mazos: generarMazosEspecificos('sub1_1') },
            'sub4_3': { nombre: 'Sub-Contenedor 4.3', mazos: generarMazosEspecificos('sub1_1') },
            'sub4_4': { nombre: 'Sub-Contenedor 4.4', mazos: generarMazosEspecificos('sub1_1') },
            'sub4_5': { nombre: 'Sub-Contenedor 4.5', mazos: generarMazosEspecificos('sub1_1') }
        }
    },
    'contenedor5': {
        nombre: 'Contenedor 5',
        subcontenedores: {
            'sub5_1': { nombre: 'Sub-Contenedor 5.1', mazos: generarMazosEspecificos('sub2_1') },
            'sub5_2': { nombre: 'Sub-Contenedor 5.2', mazos: generarMazosEspecificos('sub2_1') },
            'sub5_3': { nombre: 'Sub-Contenedor 5.3', mazos: generarMazosEspecificos('sub2_1') },
            'sub5_4': { nombre: 'Sub-Contenedor 5.4', mazos: generarMazosEspecificos('sub2_1') },
            'sub5_5': { nombre: 'Sub-Contenedor 5.5', mazos: generarMazosEspecificos('sub2_1') }
        }
    },
    'contenedor6': {
        nombre: 'Contenedor 6',
        subcontenedores: {
            'sub6_1': { nombre: 'Sub-Contenedor 6.1', mazos: generarMazosEspecificos('sub3_1') },
            'sub6_2': { nombre: 'Sub-Contenedor 6.2', mazos: generarMazosEspecificos('sub3_1') },
            'sub6_3': { nombre: 'Sub-Contenedor 6.3', mazos: generarMazosEspecificos('sub3_1') },
            'sub6_4': { nombre: 'Sub-Contenedor 6.4', mazos: generarMazosEspecificos('sub3_1') },
            'sub6_5': { nombre: 'Sub-Contenedor 6.5', mazos: generarMazosEspecificos('sub3_1') }
        }
    },
    'contenedor7': {
        nombre: 'Contenedor 7',
        subcontenedores: {
            'sub7_1': { nombre: 'Sub-Contenedor 7.1', mazos: generarMazosEspecificos('sub1_1') },
            'sub7_2': { nombre: 'Sub-Contenedor 7.2', mazos: generarMazosEspecificos('sub1_1') },
            'sub7_3': { nombre: 'Sub-Contenedor 7.3', mazos: generarMazosEspecificos('sub1_1') },
            'sub7_4': { nombre: 'Sub-Contenedor 7.4', mazos: generarMazosEspecificos('sub1_1') },
            'sub7_5': { nombre: 'Sub-Contenedor 7.5', mazos: generarMazosEspecificos('sub1_1') }
        }
    },
    'contenedor8': {
        nombre: 'Contenedor 8',
        subcontenedores: {
            'sub8_1': { nombre: 'Sub-Contenedor 8.1', mazos: generarMazosEspecificos('sub2_1') },
            'sub8_2': { nombre: 'Sub-Contenedor 8.2', mazos: generarMazosEspecificos('sub2_1') },
            'sub8_3': { nombre: 'Sub-Contenedor 8.3', mazos: generarMazosEspecificos('sub2_1') },
            'sub8_4': { nombre: 'Sub-Contenedor 8.4', mazos: generarMazosEspecificos('sub2_1') },
            'sub8_5': { nombre: 'Sub-Contenedor 8.5', mazos: generarMazosEspecificos('sub2_1') }
        }
    },
    'contenedor9': {
        nombre: 'Contenedor 9',
        subcontenedores: {
            'sub9_1': { nombre: 'Sub-Contenedor 9.1', mazos: generarMazosEspecificos('sub3_1') },
            'sub9_2': { nombre: 'Sub-Contenedor 9.2', mazos: generarMazosEspecificos('sub3_1') },
            'sub9_3': { nombre: 'Sub-Contenedor 9.3', mazos: generarMazosEspecificos('sub3_1') },
            'sub9_4': { nombre: 'Sub-Contenedor 9.4', mazos: generarMazosEspecificos('sub3_1') },
            'sub9_5': { nombre: 'Sub-Contenedor 9.5', mazos: generarMazosEspecificos('sub3_1') }
        }
    },
    'contenedor10': {
        nombre: 'Contenedor 10',
        subcontenedores: {
            'sub10_1': { nombre: 'Sub-Contenedor 10.1', mazos: generarMazosEspecificos('sub1_1') },
            'sub10_2': { nombre: 'Sub-Contenedor 10.2', mazos: generarMazosEspecificos('sub1_1') },
            'sub10_3': { nombre: 'Sub-Contenedor 10.3', mazos: generarMazosEspecificos('sub1_1') },
            'sub10_4': { nombre: 'Sub-Contenedor 10.4', mazos: generarMazosEspecificos('sub1_1') },
            'sub10_5': { nombre: 'Sub-Contenedor 10.5', mazos: generarMazosEspecificos('sub1_1') }
        }
    }
};

// FUNCIÓN CORREGIDA - GENERAR MAZOS ESPECÍFICOS CON PALABRAS ÚNICAS
function generarMazosEspecificos(tipoSubcontenedor) {
    const mazos = {};
    
    // Solo generamos 5 mazos por subcontenedor
    for (let i = 1; i <= 5; i++) {
        const mazoKey = `mazo${i}`;
        
        // Verificamos si existe el banco de palabras para este tipo de subcontenedor
        if (bancoPalabras[tipoSubcontenedor] && bancoPalabras[tipoSubcontenedor][mazoKey]) {
            mazos[mazoKey] = {
                nombre: `Mazo ${i}`,
                palabras: [...bancoPalabras[tipoSubcontenedor][mazoKey]] // Copia del array para evitar modificaciones
            };
        } else {
            // Fallback en caso de que no existan palabras definidas
            mazos[mazoKey] = {
                nombre: `Mazo ${i}`,
                palabras: generarPalabrasUnicas(10, tipoSubcontenedor + mazoKey)
            };
        }
    }
    
    return mazos;
}

// Función de respaldo para generar palabras únicas
function generarPalabrasUnicas(cantidad, identificador) {
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
    
    // Usamos el identificador para crear una semilla única
    const semilla = hashCode(identificador);
    
    for (let i = 0; i < cantidad; i++) {
        const indice = (semilla + i) % palabrasBase.length;
        palabras.push({...palabrasBase[indice]});
    }
    
    return palabras;
}

// Función auxiliar para generar un código hash simple
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
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
// FUNCIONES DEL SISTEMA PRINCIPAL (MANTENIDAS SIN CAMBIOS)
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
// FUNCIONES DEL RPG DE NOVIA (MANTENIDAS SIN CAMBIOS)
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
