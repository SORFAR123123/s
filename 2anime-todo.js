// ============================================================================
// SISTEMA ANIME PARA FABRI - CON TIMESTAMPS Y VIDEO EN JAPONÉS RAW
// VERSIÓN MODIFICADA: DETECCIÓN DINÁMICA DE MAZOS
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN MEJORADA - CON 2 VIDEOS POR ANIME (ESPAÑOL/JAPONÉS)
// ============================================================================

const animeConfig = {
    // 5 animes para estudiar - CON TIMESTAMPS Y 2 IDIOMAS
    animes: {
        'anime1': {
            id: 'anime1',
            nombre: '✨ Quintillizas Nakano',
            imagen: 'https://pbs.twimg.com/media/G7fvMrtWcAA1Y-W?format=png&name=900x900',
            descripcion: 'Aprende japonés con las quintillizas',
            color: '#ff6b9d',
            // 2 VIDEOS: ESPAÑOL Y JAPONÉS RAW
            videos: {
                español: {
                    driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                    nombre: 'Español',
                    timestamps: [
                        { tiempo: '1:53', descripcion: ' Quiero a una novia con ese poto', segundos: 113 },
                        { tiempo: '3:55', descripcion: ' Potona', segundos: 235 },
                        { tiempo: '12:40', descripcion: 'Momento romántico', segundos: 760 },
                        { tiempo: '20:20', descripcion: 'Final del capítulo', segundos: 1220 }
                    ]
                },
                japones: {
                    driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japones',
                    timestamps: [
                         { tiempo: '1:53', descripcion: ' Quiero a una novia con ese poto', segundos: 113 },
                        { tiempo: '3:55', descripcion: ' Potona', segundos: 235 },
                        { tiempo: '12:40', descripcion: 'Diálogo rápido', segundos: 760 }
                    ]
                }
            }
        },
        'anime2': {
            id: 'anime2',
            nombre: '🏫 Yamada Lv999',
            imagen: 'https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900',
            descripcion: 'Vocabulario de romance escolar',
            color: '#00b4d8',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_2', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        },
        'anime3': {
            id: 'anime3',
            nombre: '🌙 Kimetsu no Yaiba',
            imagen: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400',
            descripcion: 'Vocabulario de acción y fantasía',
            color: '#ff6d00',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_3', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        },
        'anime4': {
            id: 'anime4',
            nombre: '⚔️ Jujutsu Kaisen',
            imagen: 'https://images.unsplash.com/photo-1639322537502-9e1f6bf2c3a5?w-400',
            descripcion: 'Términos de hechicería y batallas',
            color: '#7209b7',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_4', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        },
        'anime5': {
            id: 'anime5',
            nombre: '🏀 Slam Dunk',
            imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
            descripcion: 'Vocabulario deportivo y escolar',
            color: '#ff006e',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_5', // <-- REEMPLAZA CON TU ID DE JAPONÉS RAW
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        }
    },
    
    // Configuración general - MODIFICADO PARA DETECCIÓN DINÁMICA
    // mazosPorAnime: 5, // ¡Ya no necesitamos esto fijo!
    palabrasPorMazo: 10,
    
    // Idioma por defecto
    idiomaPorDefecto: 'español'
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS ANIMES (AGREGA TODOS LOS MAZOS QUE QUIERAS)
// ============================================================================

const animeVocabulario = {
   // ANIME 1 - Quintillizas Nakano (COMPLETAMENTE REEMPLAZADO)
'anime1': {
    'mazo1': [
        { japones: 'ご視聴', lectura: 'go shichou', opciones: ['Ver/Audiencia (formal)', 'Escuchar', 'Hablar', 'Leer'], respuesta: 0 },
        { japones: '覚えました', lectura: 'oboemashita', opciones: ['Lo recordé', 'Lo olvidé', 'Lo escribí', 'Lo borré'], respuesta: 0 },
        { japones: '綺麗', lectura: 'kirei', opciones: ['Hermoso/Bonito', 'Feo', 'Común', 'Extraño'], respuesta: 0 },
        { japones: '嫌', lectura: 'iya', opciones: ['Odio/Disgusto', 'Amor', 'Indiferencia', 'Alegría'], respuesta: 0 },
        { japones: '感情', lectura: 'kanjou', opciones: ['Emoción', 'Razón', 'Pensamiento', 'Acción'], respuesta: 0 },
        { japones: '礼儀正しくて', lectura: 'reigitadashikute', opciones: ['Ser educado', 'Ser grosero', 'Ser tímido', 'Ser valiente'], respuesta: 0 },
        { japones: '格ゲー', lectura: 'kaku gee', opciones: ['Juego de pelea', 'Juego de rol', 'Juego de estrategia', 'Juego de deportes'], respuesta: 0 },
        { japones: '歩み寄ろう', lectura: 'ayumiyorou', opciones: ['Vamos a acercarnos', 'Vamos a alejarnos', 'Vamos a pelear', 'Vamos a esperar'], respuesta: 0 },
        { japones: '寿司', lectura: 'sushi', opciones: ['Sushi', 'Ramen', 'Tempura', 'Takoyaki'], respuesta: 0 },
        { japones: '誘惑', lectura: 'yuuwaku', opciones: ['Tentación', 'Rechazo', 'Ayuda', 'Castigo'], respuesta: 0 }
    ],
    'mazo2': [
        { japones: '騎士', lectura: 'kishi', opciones: ['Caballero', 'Princesa', 'Mago', 'Campesino'], respuesta: 0 },
        { japones: '裏切る', lectura: 'uragiru', opciones: ['Traicionar', 'Proteger', 'Ayudar', 'Enseñar'], respuesta: 0 },
        { japones: 'こちらこそ', lectura: 'kochirakoso', opciones: ['Igualmente/Yo también', 'Gracias', 'Lo siento', 'De nada'], respuesta: 0 },
        { japones: '色素', lectura: 'shikiso', opciones: ['Pigmento/Color', 'Sabor', 'Olor', 'Textura'], respuesta: 0 },
        { japones: '薄い', lectura: 'usui', opciones: ['Delgado/Diluido', 'Grueso', 'Largo', 'Corto'], respuesta: 0 },
        { japones: '乳輪', lectura: 'nyuurin', opciones: ['Areola', 'Pezón', 'Pecho', 'Espalda'], respuesta: 0 },
        { japones: '血もませろ', lectura: 'chimomasero', opciones: ['¡Mezcla tu sangre!', '¡Bebe agua!', '¡Corre rápido!', '¡Come bien!'], respuesta: 0 },
        { japones: 'ぶちこませろ', lectura: 'buchikomasero', opciones: ['¡Mételo a la fuerza!', '¡Sácalo!', '¡Espera!', '¡Cálmate!'], respuesta: 0 },
        { japones: 'いい加減', lectura: 'iikagen', opciones: ['Ya es suficiente', 'Más por favor', 'Es temprano', 'Es tarde'], respuesta: 0 },
        { japones: '体拭いてあげる', lectura: 'karada fui te ageru', opciones: ['Te secaré el cuerpo', 'Te bañaré', 'Te vestiré', 'Te peinaré'], respuesta: 0 }
    ],
    'mazo3': [
        { japones: '結構ですけど', lectura: 'kekkou desu kedo', opciones: ['Está bien, pero...', 'No gracias', 'Sí por favor', 'Tal vez'], respuesta: 0 },
        { japones: '凶悪', lectura: 'kyouaku', opciones: ['Malvado/Feroz', 'Amable', 'Débil', 'Inteligente'], respuesta: 0 },
        { japones: '肉厚', lectura: 'nikuatsu', opciones: ['Carnoso/Grueso', 'Delgado', 'Duro', 'Suave'], respuesta: 0 },
        { japones: '抵抗', lectura: 'teikou', opciones: ['Resistencia', 'Sumisión', 'Ayuda', 'Ataque'], respuesta: 0 },
        { japones: '怒ってます', lectura: 'okottemasu', opciones: ['Estoy enojado', 'Estoy feliz', 'Estoy triste', 'Estoy cansado'], respuesta: 0 },
        { japones: '気づかない', lectura: 'kidzukanai', opciones: ['No darse cuenta', 'Darse cuenta', 'Ignorar', 'Observar'], respuesta: 0 },
        { japones: '母国', lectura: 'bokoku', opciones: ['País natal', 'País extranjero', 'Ciudad', 'Pueblo'], respuesta: 0 },
        { japones: '平等', lectura: 'byoudou', opciones: ['Igualdad', 'Desigualdad', 'Libertad', 'Justicia'], respuesta: 0 },
        { japones: '尊重して', lectura: 'sonchou shite', opciones: ['Respeta', 'Ignora', 'Critica', 'Ayuda'], respuesta: 0 },
        { japones: '相手', lectura: 'aite', opciones: ['Compañero/Contrincante', 'Amigo', 'Enemigo', 'Extraño'], respuesta: 0 }
    ],
    'mazo4': [
        { japones: '切度を', lectura: 'setsudo wo', opciones: ['Con sinceridad', 'Con mentiras', 'Con miedo', 'Con alegría'], respuesta: 0 },
        { japones: 'もって', lectura: 'motte', opciones: '['Con/Tener', 'Sin', 'Para', 'Desde'], respuesta: 0 },
        { japones: '接することが', lectura: 'sesshi suru koto ga', opciones: ['Interactuar con', 'Evitar a', 'Observar a', 'Hablar de'], respuesta: 0 },
        { japones: 'ブラブラ', lectura: 'burabura', opciones: ['Vagar/Sin rumbo', 'Correr rápido', 'Trabajar duro', 'Descansar'], respuesta: 0 },
        { japones: '揺らして', lectura: 'yurashite', opciones: ['Sacudiendo', 'Sosteniendo', 'Empujando', 'Jalando'], respuesta: 0 },
        { japones: '欲煽り', lectura: 'yoku aori', opciones: ['Incitando deseos', 'Calmando', 'Enseñando', 'Criticando'], respuesta: 0 },
        { japones: '女性', lectura: 'josei', opciones: ['Mujer', 'Hombre', 'Niño', 'Animal'], respuesta: 0 },
        { japones: '差別', lectura: 'sabetsu', opciones: ['Discriminación', 'Igualdad', 'Respeto', 'Amor'], respuesta: 0 },
        { japones: '正しい', lectura: 'tadashii', opciones: ['Correcto', 'Incorrecto', 'Difícil', 'Fácil'], respuesta: 0 },
        { japones: '勝負', lectura: 'shoubu', opciones: ['Competencia', 'Amistad', 'Estudio', 'Trabajo'], respuesta: 0 }
    ],
    'mazo5': [
        { japones: '負けですね', lectura: 'make desu ne', opciones: ['Es una derrota, ¿verdad?', 'Es una victoria', 'Es un empate', 'Es difícil'], respuesta: 0 },
        { japones: '腹め', lectura: 'harame', opciones: ['Vientre/Panza', 'Cabeza', 'Pies', 'Manos'], respuesta: 0 },
        { japones: 'ジュポジュポ', lectura: 'jupojupo', opciones: ['Sonido de líquido', 'Sonido de pasos', 'Sonido de risa', 'Sonido de llanto'], respuesta: 0 },
        { japones: '北欧', lectura: 'hokuou', opciones: ['Países nórdicos', 'Sudamérica', 'Asia', 'África'], respuesta: 0 },
        { japones: '先進国', lectura: 'senshinkoku', opciones: ['País desarrollado', 'País en desarrollo', 'País pobre', 'País grande'], respuesta: 0 },
        { japones: '突っ込まれて', lectura: 'tsukkomarete', opciones: ['Ser penetrado', 'Ser tocado', 'Ser mirado', 'Ser hablado'], respuesta: 0 },
        { japones: '深度', lectura: 'shindo', opciones: ['Profundidad', 'Altura', 'Longitud', 'Ancho'], respuesta: 0 },
        { japones: '頃顔してる', lectura: 'korogao shiteru', opciones: ['Haciendo una cara', 'Haciendo ejercicio', 'Haciendo tarea', 'Haciendo comida'], respuesta: 0 },
        { japones: '喜ぶ', lectura: 'yorokobu', opciones: ['Alegrarse', 'Enojarse', 'Tristarse', 'Sorprenderse'], respuesta: 0 },
        { japones: '一杯', lectura: 'ippai', opciones: ['Lleno/Una copa', 'Vacío', 'Medio', 'Mucho'], respuesta: 0 }
    ],
    'mazo6': [
        { japones: '性欲', lectura: 'seiyoku', opciones: ['Deseo sexual', 'Hambre', 'Sed', 'Sueño'], respuesta: 0 },
        { japones: '身も心も', lectura: 'mimo kokoromo', opciones: ['Cuerpo y alma', 'Solo cuerpo', 'Solo mente', 'Ninguno'], respuesta: 0 },
        { japones: '健康', lectura: 'kenkou', opciones: ['Salud', 'Enfermedad', 'Fuerza', 'Debilidad'], respuesta: 0 },
        { japones: '証拠ですよ', lectura: 'shouko desu yo', opciones: ['Es evidencia', 'Es mentira', 'Es verdad', 'Es secreto'], respuesta: 0 },
        { japones: '掃除', lectura: 'souji', opciones: ['Limpieza', 'Desorden', 'Construcción', 'Destrucción'], respuesta: 0 },
        { japones: 'やましい', lectura: 'yamashii', opciones: ['Culpable/Avergonzado', 'Inocente', 'Orgulloso', 'Feliz'], respuesta: 0 },
        { japones: '言い訳', lectura: 'iiwake', opciones: ['Excusa', 'Verdad', 'Mentira', 'Pregunta'], respuesta: 0 },
        { japones: '普通に', lectura: 'futsuu ni', opciones: ['Normalmente', 'Extrañamente', 'Rápidamente', 'Lentamente'], respuesta: 0 },
        { japones: '誘えば', lectura: 'sasoeba', opciones: ['Si invitas', 'Si rechazas', 'Si aceptas', 'Si esperas'], respuesta: 0 },
        { japones: 'ごまかさず', lectura: 'gomakasazu', opciones: ['Sin engañar', 'Con engaño', 'Con honestidad', 'Con mentiras'], respuesta: 0 }
    ],
    'mazo7': [
        { japones: '隠さずに', lectura: 'kakasazu ni', opciones: ['Sin esconder', 'Escondiendo', 'Mintiendo', 'Revelando'], respuesta: 0 },
        { japones: '求め合える', lectura: 'motome aeru', opciones: ['Poder buscarse mutuamente', 'Poder evitarse', 'Poder ignorarse', 'Poder odiarse'], respuesta: 0 },
        { japones: '刺さるぞ', lectura: 'sasaru zo', opciones: '['¡Va a penetrar!', '¡Va a salir!', '¡Va a entrar!', '¡Va a romper!'], respuesta: 0 },
        { japones: '冷め、', lectura: 'same,', opciones: ['Enfriarse,', 'Calentarse,', 'Secarse,', 'Mojarse,'], respuesta: 0 },
        { japones: '呼吸', lectura: 'kokyuu', opciones: ['Respiración', 'Circulación', 'Digestión', 'Sudoración'], respuesta: 0 },
        { japones: '至急', lectura: 'shikyuu', opciones: ['Urgente', 'Lento', 'Normal', 'Ocasional'], respuesta: 0 },
        { japones: '受け取って', lectura: 'uketotte', opciones: ['Recibe', 'Da', 'Toma', 'Deja'], respuesta: 0 },
        { japones: '特選してやる', lectura: 'tokusen shite yaru', opciones: ['Te lo seleccionaré especialmente', 'Te lo daré común', 'Te lo quitaré', 'Te lo esconderé'], respuesta: 0 },
        { japones: 'ゴキサビピストン', lectura: 'gokisabipisuton', opciones: ['Gokisabi pistón', 'Motor turbo', 'Frenos ABS', 'Suspensión'], respuesta: 0 },
        { japones: '金玉', lectura: 'kintama', opciones: ['Testículos', 'Ovarios', 'Corazón', 'Cerebro'], respuesta: 0 }
    ],
    'mazo8': [
        { japones: '楽しみにしていた', lectura: 'tanoshimi ni shiteita', opciones: ['Estaba esperando con ansias', 'Estaba temiendo', 'Estaba olvidando', 'Estaba ignorando'], respuesta: 0 },
        { japones: '書いていない', lectura: 'kaite inai', opciones: ['No está escrito', 'Está escrito', 'Está borrado', 'Está tachado'], respuesta: 0 },
        { japones: '所有権', lectura: 'shoyuuken', opciones: ['Derecho de propiedad', 'Derecho de uso', 'Derecho de venta', 'Derecho de préstamo'], respuesta: 0 },
        { japones: '白黒つけるぞ', lectura: 'shirokuro tsukeru zo', opciones: ['¡Voy a aclarar las cosas!', '¡Voy a confundir!', '¡Voy a esconder!', '¡Voy a olvidar!'], respuesta: 0 }
    ]
},
    
    // ANIME 2 - Yamada Lv999
    'anime2': {
        'mazo1': [
            { japones: 'ゲーマー', lectura: 'geemaa', opciones: ['Gamer', 'Deportista', 'Estudiante', 'Trabajador'], respuesta: 0 },
            { japones: 'オンライン', lectura: 'onrain', opciones: ['Online', 'Offline', 'Presencial', 'Directo'], respuesta: 0 },
            { japones: 'レベル', lectura: 'reberu', opciones: ['Nivel', 'Puntos', 'Experiencia', 'Habilidad'], respuesta: 0 },
            { japones: '経験値', lectura: 'keikenchi', opciones: ['Puntos de experiencia', 'Vida', 'Fuerza', 'Magia'], respuesta: 0 },
            { japones: 'ギルド', lectura: 'girudo', opciones: ['Gremio', 'Equipo', 'Grupo', 'Clan'], respuesta: 0 },
            { japones: 'クエスト', lectura: 'kuesuto', opciones: ['Misión', 'Tarea', 'Objetivo', 'Meta'], respuesta: 0 },
            { japones: 'アイテム', lectura: 'aitemu', opciones: ['Item', 'Arma', 'Armadura', 'Poción'], respuesta: 0 },
            { japones: 'ボス', lectura: 'bosu', opciones: ['Jefe', 'Enemigo', 'Aliado', 'NPC'], respuesta: 0 },
            { japones: 'ダンジョン', lectura: 'danjon', opciones: ['Mazmorra', 'Castillo', 'Bosque', 'Ciudad'], respuesta: 0 },
            { japones: 'パーティー', lectura: 'paatii', opciones: ['Grupo/Party', 'Solo', 'Dúo', 'Equipo'], respuesta: 0 }
        ],
        'mazo2': [
            { japones: 'スキル', lectura: 'sukiru', opciones: ['Habilidad', 'Poder', 'Magia', 'Técnica'], respuesta: 0 },
            { japones: '攻撃', lectura: 'kougeki', opciones: ['Ataque', 'Defensa', 'Curación', 'Apoyo'], respuesta: 0 },
            { japones: '防御', lectura: 'bougyo', opciones: ['Defensa', 'Ataque', 'Evasión', 'Contraataque'], respuesta: 0 },
            { japones: '回復', lectura: 'kaifuku', opciones: ['Curación', 'Daño', 'Estado', 'Efecto'], respuesta: 0 },
            { japones: '魔法', lectura: 'mahou', opciones: ['Magia', 'Técnica', 'Habilidad', 'Poder'], respuesta: 0 },
            { japones: '剣', lectura: 'ken', opciones: ['Espada', 'Escudo', 'Lanza', 'Arco'], respuesta: 0 },
            { japones: '弓', lectura: 'yumi', opciones: ['Arco', 'Espada', 'Lanza', 'Daga'], respuesta: 0 },
            { japones: '盾', lectura: 'tate', opciones: ['Escudo', 'Espada', 'Armadura', 'Casco'], respuesta: 0 },
            { japones: '鎧', lectura: 'yoroi', opciones: ['Armadura', 'Ropa', 'Túnica', 'Vestido'], respuesta: 0 },
            { japones: 'ポーション', lectura: 'pooshon', opciones: ['Poción', 'Elixir', 'Hierba', 'Mineral'], respuesta: 0 }
        ],
        'mazo3': [
            { japones: '現実', lectura: 'genjitsu', opciones: ['Realidad', 'Fantasía', 'Sueño', 'Ilusión'], respuesta: 0 },
            { japones: '仮想', lectura: 'kasou', opciones: ['Virtual', 'Real', 'Físico', 'Concreto'], respuesta: 0 },
            { japones: '世界', lectura: 'sekai', opciones: ['Mundo', 'Universo', 'Planeta', 'Dimensión'], respuesta: 0 },
            { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Rutina', 'Seguridad', 'Estabilidad'], respuesta: 0 },
            { japones: '仲間', lectura: 'nakama', opciones: ['Compañero', 'Enemigo', 'Extraño', 'Rival'], respuesta: 0 },
            { japones: '友情', lectura: 'yuujou', opciones: ['Amistad', 'Enemistad', 'Amor', 'Odio'], respuesta: 0 },
            { japones: '信頼', lectura: 'shinrai', opciones: ['Confianza', 'Traición', 'Duda', 'Sospecha'], respuesta: 0 },
            { japones: '裏切り', lectura: 'uragiri', opciones: ['Traición', 'Lealtad', 'Fidelidad', 'Honestidad'], respuesta: 0 },
            { japones: '復讐', lectura: 'fukushuu', opciones: ['Venganza', 'Perdón', 'Olvido', 'Reconciliación'], respuesta: 0 },
            { japones: '救済', lectura: 'kyuusai', opciones: ['Salvación', 'Condena', 'Castigo', 'Destrucción'], respuesta: 0 }
        ],
        'mazo4': [
            { japones: '恋愛', lectura: 'renai', opciones: ['Romance', 'Amistad', 'Odio', 'Indiferencia'], respuesta: 0 },
            { japones: '片思い', lectura: 'kataomoi', opciones: ['Amor no correspondido', 'Amor mutuo', 'Amistad', 'Odio'], respuesta: 0 },
            { japones: '告白', lectura: 'kokuhaku', opciones: ['Confesión', 'Secreto', 'Mentira', 'Silencio'], respuesta: 0 },
            { japones: '嫉妬', lectura: 'shitto', opciones: ['Celos', 'Alegría', 'Aceptación', 'Indiferencia'], respuesta: 0 },
            { japones: '嫉妬', lectura: 'yakimochi', opciones: ['Celos', 'Generosidad', 'Compartir', 'Alegría'], respuesta: 0 },
            { japones: 'デート', lectura: 'deeto', opciones: ['Cita', 'Reunión', 'Encuentro', 'Pelea'], respuesta: 0 },
            { japones: 'キス', lectura: 'kisu', opciones: ['Beso', 'Abrazo', 'Apreton de manos', 'Saludo'], respuesta: 0 },
            { japones: 'ハグ', lectura: 'hagu', opciones: ['Abrazo', 'Beso', 'Saludo', 'Reverencia'], respuesta: 0 },
            { japones: '手をつなぐ', lectura: 'te wo tsunagu', opciones: ['Tomar de la mano', 'Soltar', 'Empujar', 'Alejar'], respuesta: 0 },
            { japones: '抱きしめる', lectura: 'dakishimeru', opciones: ['Abrazar fuerte', 'Soltar', 'Empujar', 'Ignorar'], respuesta: 0 }
        ],
        'mazo5': [
            { japones: '日常', lectura: 'nichijou', opciones: ['Vida cotidiana', 'Aventura', 'Emergencia', 'Excepcional'], respuesta: 0 },
            { japones: '学校', lectura: 'gakkou', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], respuesta: 0 },
            { japones: 'クラスメート', lectura: 'kurasumeeto', opciones: ['Compañero de clase', 'Profesor', 'Director', 'Amigo'], respuesta: 0 },
            { japones: '放課後', lectura: 'houkago', opciones: ['Después de clases', 'Antes de clases', 'Durante clases', 'Fin de semana'], respuesta: 0 },
            { japones: 'アルバイト', lectura: 'arubaito', opciones: ['Trabajo de medio tiempo', 'Trabajo completo', 'Estudio', 'Descanso'], respuesta: 0 },
            { japones: '趣味', lectura: 'shumi', opciones: ['Pasatiempo', 'Obligación', 'Trabajo', 'Deber'], respuesta: 0 },
            { japones: 'サークル', lectura: 'saakuru', opciones: ['Club/círculo', 'Clase', 'Trabajo', 'Casa'], respuesta: 0 },
            { japones: '試験', lectura: 'shiken', opciones: ['Examen', 'Tarea', 'Proyecto', 'Presentación'], respuesta: 0 },
            { japones: '勉強会', lectura: 'benkyoukai', opciones: ['Sesión de estudio', 'Fiesta', 'Reunión', 'Juego'], respuesta: 0 },
            { japones: '図書館', lectura: 'toshokan', opciones: ['Biblioteca', 'Laboratorio', 'Gimnasio', 'Oficina'], respuesta: 0 }
        ]
        // También puedes agregar más mazos a los otros animes si quieres
    },
    
    // ANIME 3 - Kimetsu no Yaiba (ejemplo reducido)
    'anime3': {
        'mazo1': generarPalabrasGenericas(10),
        'mazo2': generarPalabrasGenericas(10),
        'mazo3': generarPalabrasGenericas(10),
        'mazo4': generarPalabrasGenericas(10),
        'mazo5': generarPalabrasGenericas(10)
    },
    
    // ANIME 4 - Jujutsu Kaisen (ejemplo reducido)
    'anime4': {
        'mazo1': generarPalabrasGenericas(10),
        'mazo2': generarPalabrasGenericas(10),
        'mazo3': generarPalabrasGenericas(10),
        'mazo4': generarPalabrasGenericas(10),
        'mazo5': generarPalabrasGenericas(10)
    },
    
    // ANIME 5 - Slam Dunk (ejemplo reducido)
    'anime5': {
        'mazo1': generarPalabrasGenericas(10),
        'mazo2': generarPalabrasGenericas(10),
        'mazo3': generarPalabrasGenericas(10),
        'mazo4': generarPalabrasGenericas(10),
        'mazo5': generarPalabrasGenericas(10)
    }
};

// ============================================================================
// 3. FUNCIÓN PARA GENERAR PALABRAS GENÉRICAS
// ============================================================================

function generarPalabrasGenericas(cantidad) {
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
// 4. VARIABLES GLOBALES MEJORADAS
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;

// ============================================================================
// 5. FUNCIONES PRINCIPALES - SISTEMA DE ANIME
// ============================================================================

// Función para iniciar el sistema anime desde el menú principal
function iniciarSistemaAnime() {
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado (con detección dinámica de mazos)");
}

// Función para cargar la lista de animes disponibles
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
        
        // Contar mazos disponibles para este anime
        let totalMazos = 0;
        if (animeVocabulario[animeId]) {
            totalMazos = Object.keys(animeVocabulario[animeId]).length;
        }
        
        // Contar timestamps totales
        let totalTimestamps = 0;
        if (anime.videos) {
            Object.values(anime.videos).forEach(video => {
                if (video.timestamps) {
                    totalTimestamps += video.timestamps.length;
                }
            });
        }
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">${totalMazos} mazos de vocabulario</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-extra-info">
                <span class="anime-idiomas">🎬 2 idiomas</span>
                <span class="anime-timestamps-count">⏱️ ${totalTimestamps} timestamps</span>
                <span class="anime-mazos-count">📚 ${totalMazos} mazos</span>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
}

// Función para cargar un anime específico
function cargarAnime(animeId) {
    animeActual = animeId;
    const anime = animeConfig.animes[animeId];
    
    // Restablecer idioma al por defecto
    idiomaVideoActual = animeConfig.idiomaPorDefecto;
    
    // Obtener video según idioma actual
    videoAnimeActual = anime.videos[idiomaVideoActual];
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-anime');
    const descElement = document.getElementById('descripcion-anime');
    
    if (tituloElement) tituloElement.textContent = anime.nombre;
    if (descElement) descElement.textContent = anime.descripcion;
    
    // Cargar mazos de este anime
    cargarMazosAnime(animeId);
    
    // Cargar el video
    cargarVideoAnime(animeId, idiomaVideoActual);
    
    cambiarPantalla('pantalla-anime-detalle');
    console.log(`🎬 Cargando anime: ${anime.nombre} (${idiomaVideoActual})`);
    console.log(`📚 Mazos disponibles: ${animeVocabulario[animeId] ? Object.keys(animeVocabulario[animeId]).length : 0}`);
}

// ============================================================================
// FUNCIÓN MODIFICADA: Cargar mazos dinámicamente
// ============================================================================

function cargarMazosAnime(animeId) {
    const contenedor = document.getElementById('contenedor-mazos-anime');
    if (!contenedor) {
        console.error("❌ No se encontró el contenedor de mazos anime");
        return;
    }
    
    contenedor.innerHTML = '';
    
    // Verificar si el anime tiene vocabulario
    if (!animeVocabulario[animeId]) {
        console.log(`⚠️ No hay vocabulario para ${animeId}`);
        contenedor.innerHTML = '<p style="color: #ff6b9d; text-align: center; padding: 30px;">No hay mazos disponibles para este anime</p>';
        return;
    }
    
    // Obtener todos los mazos del anime (detectar dinámicamente)
    const mazos = Object.keys(animeVocabulario[animeId]);
    
    console.log(`🔍 Detectando mazos para ${animeId}:`, mazos);
    
    // Ordenar mazos numéricamente (mazo1, mazo2, mazo3...)
    mazos.sort((a, b) => {
        const numA = parseInt(a.replace('mazo', ''));
        const numB = parseInt(b.replace('mazo', ''));
        return numA - numB;
    });
    
    // Crear un botón para cada mazo detectado
    mazos.forEach(mazoId => {
        const mazoNumero = mazoId.replace('mazo', '');
        const div = document.createElement('div');
        div.className = 'mazo-anime-card';
        div.onclick = () => iniciarQuizAnime(animeId, mazoId);
        
        // Verificar si el mazo tiene palabras
        const tienePalabras = animeVocabulario[animeId][mazoId] && 
                             animeVocabulario[animeId][mazoId].length > 0;
        const cantidadPalabras = tienePalabras ? animeVocabulario[animeId][mazoId].length : 0;
        
        // Determinar si está disponible o no
        const disponible = tienePalabras && cantidadPalabras >= 5; // Mínimo 5 palabras para considerarlo disponible
        
        div.innerHTML = `
            <div class="mazo-anime-numero">Mazo ${mazoNumero}</div>
            <div class="mazo-anime-texto">${disponible ? cantidadPalabras + ' palabras' : 'Incompleto'}</div>
            <div class="mazo-anime-info">${disponible ? '✅ Disponible' : '🚧 En preparación'}</div>
        `;
        
        // Marcar como inactivo si no está disponible
        if (!disponible) {
            div.classList.add('mazo-inactivo');
            div.onclick = null;
            div.title = 'Este mazo aún no está completo';
        } else {
            div.title = `Haz clic para practicar ${cantidadPalabras} palabras`;
        }
        
        contenedor.appendChild(div);
    });
    
    // Mostrar estadísticas
    console.log(`✅ Cargados ${mazos.length} mazos para ${animeId}`);
    
    // Si no hay mazos, mostrar mensaje
    if (mazos.length === 0) {
        contenedor.innerHTML = '<p style="color: #ff6b9d; text-align: center; padding: 30px;">No hay mazos configurados para este anime</p>';
    }
}

// ============================================================================
// 6. NUEVA FUNCIÓN: Contar mazos disponibles
// ============================================================================

function contarMazosDisponibles(animeId) {
    if (!animeVocabulario[animeId]) return 0;
    
    const mazos = Object.keys(animeVocabulario[animeId]);
    let contador = 0;
    
    mazos.forEach(mazoId => {
        const mazo = animeVocabulario[animeId][mazoId];
        if (mazo && mazo.length >= 5) { // Considerar disponible si tiene al menos 5 palabras
            contador++;
        }
    });
    
    return contador;
}

// ============================================================================
// 7. NUEVA FUNCIÓN: Agregar mazo desde consola (para testing)
// ============================================================================

window.agregarMazoAnime = function(animeId, mazoNumero, palabras) {
    // Validar parámetros
    if (!animeId || !mazoNumero || !palabras || !Array.isArray(palabras)) {
        console.log("❌ Parámetros inválidos. Uso: agregarMazoAnime('anime1', 6, [...palabras])");
        return false;
    }
    
    const mazoId = `mazo${mazoNumero}`;
    
    // Inicializar anime si no existe
    if (!animeVocabulario[animeId]) {
        animeVocabulario[animeId] = {};
    }
    
    // Agregar o reemplazar mazo
    animeVocabulario[animeId][mazoId] = palabras;
    
    console.log(`✅ Mazo ${mazoNumero} agregado a ${animeId} con ${palabras.length} palabras`);
    
    // Si este anime está actualmente cargado, actualizar la interfaz
    if (animeActual === animeId) {
        cargarMazosAnime(animeId);
        mostrarNotificacionAnime(`✅ Mazo ${mazoNumero} agregado (${palabras.length} palabras)`);
    }
    
    return true;
};

// ============================================================================
// 8. NUEVA FUNCIÓN: Ver todos los mazos de un anime
// ============================================================================

window.verMazosAnime = function(animeId) {
    if (!animeVocabulario[animeId]) {
        console.log(`❌ No hay mazos para ${animeId}`);
        return;
    }
    
    const mazos = Object.keys(animeVocabulario[animeId]);
    console.log(`📚 Mazos de ${animeId} (${mazos.length} total):`);
    
    mazos.sort((a, b) => {
        const numA = parseInt(a.replace('mazo', ''));
        const numB = parseInt(b.replace('mazo', ''));
        return numA - numB;
    });
    
    mazos.forEach(mazoId => {
        const palabras = animeVocabulario[animeId][mazoId];
        console.log(`   ${mazoId}: ${palabras ? palabras.length : 0} palabras`);
    });
    
    // Mostrar estadísticas
    const totalPalabras = mazos.reduce((total, mazoId) => {
        const palabras = animeVocabulario[animeId][mazoId];
        return total + (palabras ? palabras.length : 0);
    }, 0);
    
    console.log(`📊 Estadísticas:`);
    console.log(`   - Total mazos: ${mazos.length}`);
    console.log(`   - Total palabras: ${totalPalabras}`);
    console.log(`   - Mazos completos (10 palabras): ${mazos.filter(mId => animeVocabulario[animeId][mId] && animeVocabulario[animeId][mId].length === 10).length}`);
};

// ============================================================================
// (El resto del código se mantiene igual desde aquí...)
// Las funciones de video, quiz y navegación NO necesitan cambios
// ============================================================================

// NUEVA FUNCIÓN: Cargar video con opción de idioma
function cargarVideoAnime(animeId, idioma = 'español') {
    const anime = animeConfig.animes[animeId];
    if (!anime || !anime.videos[idioma]) {
        console.error(`❌ No hay video en ${idioma} para ${animeId}`);
        return;
    }
    
    idiomaVideoActual = idioma;
    videoAnimeActual = anime.videos[idioma];
    
    // Construir URL del video
    const videoUrl = `https://drive.google.com/file/d/${videoAnimeActual.driveId}/preview`;
    
    // Actualizar iframe
    const videoElement = document.getElementById('video-anime');
    if (videoElement) {
        videoElement.src = videoUrl;
        videoElement.title = `${anime.nombre} - ${videoAnimeActual.nombre}`;
    }
    
    // Actualizar información de video
    const videoInfoElement = document.getElementById('info-video-anime');
    if (videoInfoElement) {
        videoInfoElement.innerHTML = `
            <div class="video-info-header">
                <span class="video-idioma-badge">🎬 ${videoAnimeActual.nombre}</span>
                <span class="video-timestamps-badge">⏱️ ${videoAnimeActual.timestamps ? videoAnimeActual.timestamps.length : 0} timestamps</span>
                <button class="boton-pequeno" onclick="mostrarTimestampsAnime()">Ver Timestamps</button>
            </div>
        `;
    }
    
    // Actualizar botones de idioma
    actualizarBotonesIdioma(animeId);
    
    // Mostrar notificación
    mostrarNotificacionAnime(`🎬 Idioma cambiado a: ${videoAnimeActual.nombre}`);
}

// NUEVA FUNCIÓN: Cambiar idioma del video
function cambiarIdiomaVideo(idioma) {
    if (!animeActual) return;
    
    cargarVideoAnime(animeActual, idioma);
}

// NUEVA FUNCIÓN: Actualizar botones de idioma
function actualizarBotonesIdioma(animeId) {
    const anime = animeConfig.animes[animeId];
    const contenedor = document.getElementById('botones-idioma-anime');
    
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(anime.videos).forEach(idioma => {
        const video = anime.videos[idioma];
        const boton = document.createElement('button');
        boton.className = `boton-idioma ${idioma === idiomaVideoActual ? 'activo' : ''}`;
        boton.textContent = `${video.nombre} ${video.timestamps && video.timestamps.length > 0 ? '⏱️' : ''}`;
        boton.onclick = () => cambiarIdiomaVideo(idioma);
        boton.title = `Cambiar a ${video.nombre}`;
        
        contenedor.appendChild(boton);
    });
}

// NUEVA FUNCIÓN: Mostrar timestamps del video actual
function mostrarTimestampsAnime() {
    if (!videoAnimeActual || !videoAnimeActual.timestamps || videoAnimeActual.timestamps.length === 0) {
        mostrarNotificacionAnime('📝 Este video no tiene timestamps configurados');
        return;
    }
    
    // Crear ventana emergente de timestamps
    const modal = document.createElement('div');
    modal.id = 'modal-timestamps-anime';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
    `;
    
    let timestampsHTML = '<div class="timestamps-header">⏱️ Puntos destacados:</div>';
    
    videoAnimeActual.timestamps.forEach((ts, index) => {
        timestampsHTML += `
            <div class="timestamp-item" onclick="saltarATimestampAnime(${ts.segundos})">
                <span class="timestamp-tiempo">${ts.tiempo}</span>
                <span class="timestamp-desc">${ts.descripcion}</span>
                <span class="timestamp-saltar">▶️ Ir</span>
            </div>
        `;
    });
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #2d2d2d, #1a1a1a);
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 100%;
            border: 3px solid #ff6b9d;
            box-shadow: 0 10px 40px rgba(255, 107, 157, 0.3);
            max-height: 80vh;
            overflow-y: auto;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #ff6b9d;
            ">
                <h2 style="color: #ff6b9d; margin: 0;">🎬 Timestamps del Video</h2>
                <button onclick="document.getElementById('modal-timestamps-anime').remove()" 
                        style="
                            background: #ff4444;
                            color: white;
                            border: none;
                            padding: 8px 15px;
                            border-radius: 10px;
                            cursor: pointer;
                            font-weight: bold;
                        ">
                    ✖ Cerrar
                </button>
            </div>
            
            <div style="color: white; margin-bottom: 15px;">
                <p><strong>Anime:</strong> ${animeConfig.animes[animeActual].nombre}</p>
                <p><strong>Idioma:</strong> ${videoAnimeActual.nombre}</p>
                <p><strong>Total timestamps:</strong> ${videoAnimeActual.timestamps.length}</p>
            </div>
            
            <div style="margin: 20px 0;">
                ${timestampsHTML}
            </div>
            
            <div style="
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                text-align: center;
            ">
                <button onclick="agregarTimestampAnimeDesdeConsola()"
                        style="
                            background: rgba(0, 255, 136, 0.2);
                            color: #00ff88;
                            border: 1px solid #00ff88;
                            padding: 10px 20px;
                            border-radius: 10px;
                            cursor: pointer;
                            margin: 5px;
                            font-weight: bold;
                        ">
                    ⚡ Agregar timestamp desde consola
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// NUEVA FUNCIÓN: Saltar a timestamp específico
function saltarATimestampAnime(segundos) {
    if (!animeActual || !videoAnimeActual) return;
    
    // Construir URL con timestamp
    const videoUrl = `https://drive.google.com/file/d/${videoAnimeActual.driveId}/preview?t=${segundos}s`;
    
    // Actualizar iframe
    const videoElement = document.getElementById('video-anime');
    if (videoElement) {
        videoElement.src = videoUrl;
    }
    
    // Cerrar modal si está abierto
    const modal = document.getElementById('modal-timestamps-anime');
    if (modal) {
        modal.remove();
    }
    
    mostrarNotificacionAnime(`⏱️ Saltando a ${Math.floor(segundos/60)}:${(segundos%60).toString().padStart(2, '0')}`);
}

// ============================================================================
// FUNCIONES DEL QUIZ (SIN CAMBIOS NECESARIOS)
// ============================================================================

// Función para iniciar el quiz de un mazo de anime
function iniciarQuizAnime(animeId, mazoId) {
    if (animeVocabulario[animeId] && animeVocabulario[animeId][mazoId]) {
        mazoActualAnime = [...animeVocabulario[animeId][mazoId]];
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz-anime');
        
        // Actualizar contador
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaAnime();
        
        console.log(`📝 Iniciando quiz: ${animeId} - ${mazoId} (${mazoActualAnime.length} palabras)`);
    } else {
        console.error(`❌ No se encontró el mazo ${mazoId} para ${animeId}`);
        alert('Este mazo aún no está disponible. ¡Próximamente!');
    }
}

// Función para mostrar una pregunta del quiz anime
function mostrarPreguntaAnime() {
    if (preguntaActualAnime < mazoActualAnime.length) {
        const pregunta = mazoActualAnime[preguntaActualAnime];
        
        // Actualizar contador
        document.getElementById('numero-pregunta-anime').textContent = preguntaActualAnime + 1;
        
        // Mostrar palabra japonesa
        document.getElementById('palabra-japones-anime').textContent = pregunta.japones;
        document.getElementById('lectura-anime').textContent = '';
        document.getElementById('resultado-anime').textContent = '';
        document.getElementById('resultado-anime').className = 'resultado';
        document.getElementById('boton-siguiente-anime').style.display = 'none';
        
        // Limpiar opciones anteriores
        const contenedorOpciones = document.getElementById('contenedor-opciones-anime');
        contenedorOpciones.innerHTML = '';
        
        // Mezclar opciones
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        // Crear botones de opciones
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuestaAnime(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultadosAnime();
    }
}

// Función para verificar respuesta en quiz anime
function verificarRespuestaAnime(respuestaSeleccionada, respuestaCorrecta, lectura) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-anime .opcion');
    const resultado = document.getElementById('resultado-anime');
    
    // Deshabilitar botones
    opcionesDOM.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Marcar respuestas correctas e incorrectas
    opcionesDOM.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar lectura
    document.getElementById('lectura-anime').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto! ✅';
        resultado.className = 'resultado correcto';
        respuestasCorrectasAnime++;
        
        // Navegación automática para respuestas correctas
        setTimeout(() => {
            siguientePreguntaAnime();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto ❌. La respuesta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectasAnime++;
        
        // Mostrar botón "Continuar" para respuestas incorrectas
        document.getElementById('boton-siguiente-anime').style.display = 'block';
    }
}

// Función para pasar a la siguiente pregunta anime
function siguientePreguntaAnime() {
    preguntaActualAnime++;
    mostrarPreguntaAnime();
}

// Función para mostrar resultados del quiz anime
function mostrarResultadosAnime() {
    const porcentaje = Math.round((respuestasCorrectasAnime / mazoActualAnime.length) * 100);
    
    // Crear pantalla de resultados dinámica
    const resultadosHTML = `
        <div class="resultado-anime-container">
            <h2>🎬 Resultados del Quiz</h2>
            <div class="resultado-anime-detalle">
                <div class="resultado-item">
                    <span class="resultado-label">Preguntas totales:</span>
                    <span class="resultado-valor">${mazoActualAnime.length}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Respuestas correctas:</span>
                    <span class="resultado-valor">${respuestasCorrectasAnime}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Respuestas incorrectas:</span>
                    <span class="resultado-valor">${respuestasIncorrectasAnime}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Porcentaje de aciertos:</span>
                    <span class="resultado-valor resultado-porcentaje">${porcentaje}%</span>
                </div>
                <div class="resultado-mensaje">
                    ${porcentaje === 100 ? '¡Perfecto! 🎉 Dominas este vocabulario' : 
                      porcentaje >= 80 ? '¡Muy bien! 👏 Casi perfecto' : 
                      porcentaje >= 60 ? 'Buen trabajo 👍 Sigue practicando' : 
                      'Sigue estudiando 💪 Lo lograrás'}
                </div>
            </div>
            
            <div class="botones-resultados-anime">
                <button class="boton-principal" onclick="volverAAnimeDetalle()">
                    Volver al Anime
                </button>
                <button class="boton-secundario" onclick="repetirQuizAnime()">
                    Repetir Quiz
                </button>
            </div>
        </div>
    `;
    
    // Crear o actualizar pantalla de resultados
    let resultadosPantalla = document.getElementById('pantalla-resultados-anime');
    if (!resultadosPantalla) {
        resultadosPantalla = document.createElement('div');
        resultadosPantalla.id = 'pantalla-resultados-anime';
        resultadosPantalla.className = 'pantalla';
        document.body.appendChild(resultadosPantalla);
    }
    
    resultadosPantalla.innerHTML = `
        <div class="contenedor">
            <div class="barra-superior">
                <div class="contador">Resultados</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="volverAAnimeDetalle()">Volver al Anime</button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                </div>
            </div>
            ${resultadosHTML}
        </div>
    `;
    
    cambiarPantalla('pantalla-resultados-anime');
    
    // Dar recompensa si es 100%
    if (porcentaje === 100) {
        setTimeout(() => {
            if (typeof sistemaEconomia !== 'undefined') {
                sistemaEconomia.agregarDinero(1, "Quiz anime completado al 100%");
            }
        }, 500);
    }
}

// Función para repetir el quiz anime
function repetirQuizAnime() {
    preguntaActualAnime = 0;
    respuestasCorrectasAnime = 0;
    respuestasIncorrectasAnime = 0;
    
    // Mezclar preguntas de nuevo
    for (let i = mazoActualAnime.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
    }
    
    cambiarPantalla('pantalla-quiz-anime');
    mostrarPreguntaAnime();
}

// ============================================================================
// FUNCIONES DE NAVEGACIÓN
// ============================================================================

function volverAAnimeSeleccion() {
    cambiarPantalla('pantalla-anime-seleccion');
}

function volverAAnimeDetalle() {
    if (animeActual) {
        cargarAnime(animeActual);
    } else {
        cambiarPantalla('pantalla-anime-seleccion');
    }
}

// ============================================================================
// FUNCIONES DE NOTIFICACIÓN
// ============================================================================

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
        border-left: 5px solid #00ff88;
    `;
    notificacion.textContent = mensaje;
    notificacion.className = 'notificacion-anime';
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// ============================================================================
// FUNCIONES DE CONSOLA PARA TIMESTAMPS
// ============================================================================

// Agregar timestamp a un video de anime desde consola
window.agregarTimestampAnime = function(animeId, idioma, segundos, descripcion) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return false;
    }
    
    const video = anime.videos[idioma];
    if (!video) {
        console.log(`❌ No hay video en ${idioma} para ${animeId}`);
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
    
    console.log(`✅ Timestamp agregado a "${anime.nombre}" (${idioma}):`);
    console.log(`   ⏱️ ${tiempoFormateado} - ${descripcion}`);
    
    // Si este video está actualmente seleccionado, actualizar
    if (animeActual === animeId && idiomaVideoActual === idioma) {
        mostrarNotificacionAnime(`⏱️ Timestamp agregado: ${tiempoFormateado}`);
    }
    
    return true;
};

// Agregar timestamps desde consola (interfaz amigable)
window.agregarTimestampAnimeDesdeConsola = function() {
    if (!animeActual || !videoAnimeActual) {
        console.log("❌ No hay anime o video seleccionado");
        return;
    }
    
    console.log("⚡ AGREGAR TIMESTAMPS A ANIME DESDE CONSOLA");
    console.log(`Anime: ${animeConfig.animes[animeActual].nombre}`);
    console.log(`ID Anime: ${animeActual}`);
    console.log(`Idioma actual: ${idiomaVideoActual}`);
    console.log(`ID Video: ${videoAnimeActual.driveId}`);
    console.log("");
    console.log("📝 Ejemplo de comando:");
    console.log(`   agregarTimestampAnime('${animeActual}', '${idiomaVideoActual}', 30, 'Inicio del capítulo')`);
    console.log(`   agregarTimestampAnime('${animeActual}', '${idiomaVideoActual}', 135, 'Diálogo importante')`);
    console.log(`   agregarTimestampAnime('${animeActual}', '${idiomaVideoActual}', 340, 'Vocabulario clave')`);
    console.log("");
    console.log("🔄 Para cambiar de idioma:");
    console.log(`   cargarVideoAnime('${animeActual}', 'español') // Para español`);
    console.log(`   cargarVideoAnime('${animeActual}', 'japones') // Para japonés raw`);
};

// Cambiar ID de Drive para un video específico
window.cambiarDriveIdAnime = function(animeId, idioma, nuevoDriveId) {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return false;
    }
    
    if (!anime.videos[idioma]) {
        console.log(`❌ No hay video en ${idioma} para ${animeId}`);
        return false;
    }
    
    anime.videos[idioma].driveId = nuevoDriveId;
    console.log(`✅ ID de Drive actualizado para ${anime.nombre} (${idioma}): ${nuevoDriveId}`);
    
    // Si este video está actualmente reproduciéndose, actualizar
    if (animeActual === animeId && idiomaVideoActual === idioma) {
        cargarVideoAnime(animeId, idioma);
    }
    
    return true;
};

// Ver timestamps de un anime
window.verTimestampsAnime = function(animeId, idioma = 'español') {
    const anime = animeConfig.animes[animeId];
    if (!anime) {
        console.log(`❌ Anime ${animeId} no encontrado`);
        return;
    }
    
    const video = anime.videos[idioma];
    if (!video) {
        console.log(`❌ No hay video en ${idioma} para ${animeId}`);
        return;
    }
    
    if (!video.timestamps || video.timestamps.length === 0) {
        console.log(`📝 "${anime.nombre}" (${idioma}) no tiene timestamps`);
        return;
    }
    
    console.log(`⏱️ Timestamps de "${anime.nombre}" (${idioma}):`);
    video.timestamps.forEach((ts, index) => {
        console.log(`   ${index + 1}. ${ts.tiempo} - ${ts.descripcion} (${ts.segundos}s)`);
    });
};

// ============================================================================
// NUEVAS FUNCIONES DE CONSOLA PARA MAZOS
// ============================================================================

// Función para agregar un mazo rápido desde consola
window.agregarMazoRapido = function(animeId, mazoNumero) {
    const palabrasEjemplo = [
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
    
    return agregarMazoAnime(animeId, mazoNumero, palabrasEjemplo);
};

// Función para eliminar un mazo
window.eliminarMazoAnime = function(animeId, mazoNumero) {
    const mazoId = `mazo${mazoNumero}`;
    
    if (!animeVocabulario[animeId] || !animeVocabulario[animeId][mazoId]) {
        console.log(`❌ El mazo ${mazoNumero} no existe en ${animeId}`);
        return false;
    }
    
    delete animeVocabulario[animeId][mazoId];
    console.log(`🗑️ Mazo ${mazoNumero} eliminado de ${animeId}`);
    
    // Si este anime está cargado, actualizar
    if (animeActual === animeId) {
        cargarMazosAnime(animeId);
        mostrarNotificacionAnime(`🗑️ Mazo ${mazoNumero} eliminado`);
    }
    
    return true;
};

// ============================================================================
// 10. FUNCIÓN PARA CREAR PANTALLAS DINÁMICAS - VERSIÓN MEJORADA
// ============================================================================

function crearPantallasAnime() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME - MEJORADA -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME CON TIMESTAMPS + JAPONÉS RAW</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 VIDEOS PARA FABRI</h1>
                    <p class="subtitulo">Selecciona un anime - Detección dinámica de mazos 🔄</p>
                    
                    <div class="info-idiomas">
                        <div class="idioma-info-item">
                            <span class="idioma-badge español">🇪🇸 Español</span>
                            <span>Audio en español para contexto</span>
                        </div>
                        <div class="idioma-info-item">
                            <span class="idioma-badge japones">🇯🇵 Japonés Raw</span>
                            <span>Audio original para práctica avanzada</span>
                        </div>
                        <div class="idioma-info-item">
                            <span class="idioma-badge timestamps">⏱️ Timestamps</span>
                            <span>Saltar a partes específicas del video</span>
                        </div>
                        <div class="idioma-info-item">
                            <span class="idioma-badge mazos-dinamicos">🔄 Mazos Dinámicos</span>
                            <span>Agrega mazos y aparecen automáticamente</span>
                        </div>
                    </div>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-anime">
                        <p>📚 Sistema detecta automáticamente todos los mazos que agregues</p>
                        <p>🎬 Cada anime tiene 2 versiones: Español y Japonés Raw</p>
                        <p>⏱️ Timestamps para navegación rápida en videos</p>
                        <p>🔄 Desde consola usa: <code>agregarMazoAnime('anime1', 11, [...palabras])</code></p>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE DETALLE DE ANIME - MEJORADA CON SELECTOR DE IDIOMA -->
            <div id="pantalla-anime-detalle" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-anime">Anime</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAAnimeSeleccion()">← Volver a Animes</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="anime-detalle-container">
                        <!-- SELECTOR DE IDIOMA -->
                        <div class="selector-idioma-container">
                            <h3>🎬 Selecciona el idioma del video:</h3>
                            <div class="botones-idioma" id="botones-idioma-anime">
                                <!-- Los botones de idioma se generan aquí -->
                            </div>
                            <div class="info-video-anime" id="info-video-anime">
                                <!-- Información del video actual -->
                            </div>
                        </div>
                        
                        <!-- REPRODUCTOR DE VIDEO CON TIMESTAMPS -->
                        <div class="video-anime-container">
                            <div class="video-container-anime">
                                <iframe id="video-anime" 
                                        width="100%" 
                                        height="315"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        title="Video del anime">
                                </iframe>
                            </div>
                            
                            <!-- BOTÓN DE TIMESTAMPS -->
                            <div class="controles-video-anime">
                                <button class="boton-principal" onclick="mostrarTimestampsAnime()" 
                                        style="background: linear-gradient(135deg, #00ff88, #00cc6a);">
                                    ⏱️ Ver Timestamps
                                </button>
                                <button class="boton-secundario" onclick="saltarATimestampAnime(0)">
                                    🔄 Reiniciar Video
                                </button>
                            </div>
                            
                            <p class="video-desc" id="descripcion-anime">Mira el video y luego practica el vocabulario</p>
                        </div>
                        
                        <!-- MAZOS DE VOCABULARIO - DETECCIÓN DINÁMICA -->
                        <div class="mazos-anime-container">
                            <h3>📚 Mazos de Vocabulario <span id="contador-mazos" style="color: #00ff88; font-size: 0.8em;">(0 detectados)</span></h3>
                            <p>Practica las palabras que aparecen en este anime (detectados automáticamente):</p>
                            
                            <div class="contenedor-mazos-anime" id="contenedor-mazos-anime">
                                <!-- Los mazos se cargan aquí dinámicamente -->
                            </div>
                            
                            <div class="mazos-info" style="margin-top: 15px; padding: 10px; background: rgba(0, 255, 136, 0.1); border-radius: 10px; color: #00ff88; font-size: 0.9em;">
                                <p><strong>💡 Sistema de mazos dinámico:</strong></p>
                                <p>• Agrega mazos en la variable <code>animeVocabulario</code></p>
                                <p>• Se detectan automáticamente al cargar</p>
                                <p>• Desde consola: <code>verMazosAnime('${animeActual || 'anime1'}')</code></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE QUIZ ANIME -->
            <div id="pantalla-quiz-anime" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">Quiz Anime: <span id="numero-pregunta-anime">1</span>/<span id="total-preguntas-anime">10</span></div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAAnimeDetalle()">Volver al Anime</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="contenido-quiz">
                        <div class="palabra-japones" id="palabra-japones-anime">言葉</div>
                        <div class="lectura" id="lectura-anime"></div>
                        
                        <div class="contenedor-opciones" id="contenedor-opciones-anime">
                            <!-- Las opciones se generarán dinámicamente -->
                        </div>
                        
                        <div class="resultado" id="resultado-anime"></div>
                        
                        <button class="boton-principal" id="boton-siguiente-anime" onclick="siguientePreguntaAnime()" style="display: none;">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        
        // Agregar estilos específicos para el sistema anime mejorado
        agregarEstilosAnimeMejorado();
        
        console.log("✅ Pantallas anime creadas dinámicamente (con detección dinámica de mazos)");
    }
}

// Función para agregar estilos específicos del sistema anime mejorado
function agregarEstilosAnimeMejorado() {
    // Verificar si los estilos ya existen
    if (document.getElementById('estilos-anime-mejorado')) return;
    
    const estilos = `
        <style id="estilos-anime-mejorado">
            /* ESTILOS PARA EL SISTEMA ANIME MEJORADO */
            
            /* INFO IDIOMAS EN PANTALLA DE SELECCIÓN */
            .info-idiomas {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin: 20px 0;
                flex-wrap: wrap;
                padding: 15px;
                background: rgba(255, 107, 157, 0.1);
                border-radius: 15px;
                border: 2px solid #ff6b9d;
            }
            
            .idioma-info-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                min-width: 150px;
                padding: 10px;
            }
            
            .idioma-badge {
                padding: 8px 15px;
                border-radius: 10px;
                font-weight: bold;
                margin-bottom: 8px;
                display: inline-block;
                font-size: 1rem;
            }
            
            .idioma-badge.español {
                background: linear-gradient(135deg, #4a90e2, #2a6ec7);
                color: white;
            }
            
            .idioma-badge.japones {
                background: linear-gradient(135deg, #ff4444, #cc0000);
                color: white;
            }
            
            .idioma-badge.timestamps {
                background: linear-gradient(135deg, #00ff88, #00cc6a);
                color: white;
            }
            
            .idioma-badge.mazos-dinamicos {
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
            }
            
            .idioma-info-item span:last-child {
                color: #cccccc;
                font-size: 0.9rem;
            }
            
            /* SELECTOR DE IDIOMA */
            .selector-idioma-container {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px;
                margin-bottom: 20px;
                border: 2px solid #4a90e2;
            }
            
            .selector-idioma-container h3 {
                color: #4a90e2;
                margin-bottom: 15px;
                text-align: center;
            }
            
            .botones-idioma {
                display: flex;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
                margin-bottom: 15px;
            }
            
            .boton-idioma {
                padding: 12px 25px;
                border-radius: 12px;
                border: 2px solid #4a90e2;
                background: rgba(74, 144, 226, 0.2);
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                min-width: 120px;
                font-size: 1rem;
            }
            
            .boton-idioma:hover {
                background: rgba(74, 144, 226, 0.4);
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(74, 144, 226, 0.4);
            }
            
            .boton-idioma.activo {
                background: linear-gradient(135deg, #4a90e2, #2a6ec7);
                border-color: #00ff88;
                box-shadow: 0 0 15px rgba(74, 144, 226, 0.6);
            }
            
            .info-video-anime {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                padding: 15px;
                margin-top: 10px;
                border-left: 4px solid #ff6b9d;
            }
            
            .video-info-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .video-idioma-badge {
                background: rgba(255, 107, 157, 0.2);
                color: #ff6b9d;
                padding: 8px 15px;
                border-radius: 20px;
                font-weight: bold;
                border: 1px solid #ff6b9d;
            }
            
            .video-timestamps-badge {
                background: rgba(0, 255, 136, 0.2);
                color: #00ff88;
                padding: 8px 15px;
                border-radius: 20px;
                font-weight: bold;
                border: 1px solid #00ff88;
            }
            
            /* CONTROLES DE VIDEO */
            .controles-video-anime {
                display: flex;
                gap: 15px;
                margin: 15px 0;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            /* TIMESTAMPS EN MODAL */
            .timestamp-item {
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
            
            .timestamp-item:hover {
                background: rgba(0, 255, 136, 0.2);
                transform: translateX(5px);
            }
            
            .timestamp-tiempo {
                color: #00ff88;
                font-weight: bold;
                min-width: 50px;
                font-family: monospace;
            }
            
            .timestamp-desc {
                color: #ffffff;
                flex: 1;
                margin: 0 15px;
            }
            
            .timestamp-saltar {
                color: #ff6b9d;
                font-weight: bold;
                background: rgba(255, 107, 157, 0.1);
                padding: 5px 10px;
                border-radius: 5px;
                transition: all 0.2s ease;
                font-size: 0.9rem;
            }
            
            .timestamp-item:hover .timestamp-saltar {
                background: rgba(255, 107, 157, 0.3);
            }
            
            /* ANIME CARD MEJORADA */
            .anime-card {
                position: relative;
                overflow: hidden;
            }
            
            .anime-card::after {
                content: '🎬';
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 10px;
                font-size: 0.9rem;
                z-index: 2;
            }
            
            .anime-card::before {
                content: '⏱️';
                position: absolute;
                top: 10px;
                left: 10px;
                background: rgba(0, 255, 136, 0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 10px;
                font-size: 0.9rem;
                z-index: 2;
            }
            
            /* NOTIFICACIONES ESPECÍFICAS */
            .notificacion-anime {
                background: linear-gradient(135deg, #ff6b9d, #ff4081) !important;
                border-left: 5px solid #00ff88 !important;
            }
            
            /* ANIME EXTRA INFO */
            .anime-extra-info {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .anime-idiomas, .anime-timestamps-count, .anime-mazos-count {
                font-size: 0.8rem;
                padding: 3px 8px;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.1);
            }
            
            .anime-idiomas {
                color: #4a90e2;
            }
            
            .anime-timestamps-count {
                color: #00ff88;
            }
            
            .anime-mazos-count {
                color: #ff9800;
            }
            
            /* MAZOS DINÁMICOS */
            .contenedor-mazos-anime {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                gap: 15px;
                margin-top: 20px;
            }
            
            .mazo-anime-card {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 15px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 2px solid #4a90e2;
            }
            
            .mazo-anime-card:hover:not(.mazo-inactivo) {
                background: rgba(74, 144, 226, 0.2);
                transform: translateY(-5px);
                box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
            }
            
            .mazo-anime-card.mazo-inactivo {
                opacity: 0.5;
                border-color: #666;
                cursor: not-allowed;
            }
            
            .mazo-anime-numero {
                font-size: 1.2em;
                font-weight: bold;
                color: #4a90e2;
                margin-bottom: 5px;
            }
            
            .mazo-anime-texto {
                font-size: 0.9em;
                color: #cccccc;
                margin-bottom: 5px;
            }
            
            .mazo-anime-info {
                font-size: 0.8em;
                color: #00ff88;
                font-weight: bold;
            }
            
            .mazo-anime-card.mazo-inactivo .mazo-anime-info {
                color: #ff6b9d;
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .info-idiomas {
                    flex-direction: column;
                    align-items: center;
                }
                
                .idioma-info-item {
                    width: 100%;
                    max-width: 250px;
                }
                
                .botones-idioma {
                    flex-direction: column;
                    align-items: center;
                }
                
                .boton-idioma {
                    width: 100%;
                    max-width: 200px;
                }
                
                .video-info-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                }
                
                .controles-video-anime {
                    flex-direction: column;
                    align-items: center;
                }
                
                .controles-video-anime button {
                    width: 100%;
                    max-width: 250px;
                }
                
                .contenedor-mazos-anime {
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                }
                
                .anime-extra-info {
                    flex-direction: column;
                    align-items: center;
                }
            }
            
            @media (max-width: 480px) {
                .anime-card::before,
                .anime-card::after {
                    font-size: 0.8rem;
                    padding: 4px 8px;
                }
                
                .idioma-badge {
                    font-size: 0.9rem;
                    padding: 6px 12px;
                }
                
                .boton-idioma {
                    padding: 10px 15px;
                    font-size: 0.9rem;
                }
                
                .contenedor-mazos-anime {
                    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
                }
                
                .mazo-anime-card {
                    padding: 10px;
                }
                
                .mazo-anime-numero {
                    font-size: 1em;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 11. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

// Hacer funciones disponibles globalmente
window.iniciarSistemaAnime = iniciarSistemaAnime;
window.cargarAnime = cargarAnime;
window.cargarMazosAnime = cargarMazosAnime;
window.iniciarQuizAnime = iniciarQuizAnime;
window.verificarRespuestaAnime = verificarRespuestaAnime;
window.siguientePreguntaAnime = siguientePreguntaAnime;
window.volverAAnimeSeleccion = volverAAnimeSeleccion;
window.volverAAnimeDetalle = volverAAnimeDetalle;
window.repetirQuizAnime = repetirQuizAnime;
window.crearPantallasAnime = crearPantallasAnime;
window.contarMazosDisponibles = contarMazosDisponibles;

// Funciones nuevas
window.cargarVideoAnime = cargarVideoAnime;
window.cambiarIdiomaVideo = cambiarIdiomaVideo;
window.mostrarTimestampsAnime = mostrarTimestampsAnime;
window.saltarATimestampAnime = saltarATimestampAnime;
window.agregarTimestampAnime = agregarTimestampAnime;
window.agregarTimestampAnimeDesdeConsola = agregarTimestampAnimeDesdeConsola;
window.cambiarDriveIdAnime = cambiarDriveIdAnime;
window.verTimestampsAnime = verTimestampsAnime;

// Funciones nuevas para mazos dinámicos
window.agregarMazoAnime = agregarMazoAnime;
window.agregarMazoRapido = agregarMazoRapido;
window.eliminarMazoAnime = eliminarMazoAnime;
window.verMazosAnime = verMazosAnime;

console.log("✅ Sistema anime MEJORADO cargado correctamente");
console.log("🎬 Novedades:");
console.log("   - ✅ Detección dinámica de mazos");
console.log("   - ✅ 2 idiomas por anime: Español y Japonés Raw");
console.log("   - ✅ Timestamps clicables para navegación rápida");
console.log("   - ✅ Selector de idioma en tiempo real");
console.log("   - ✅ Funciones de administración desde consola");
console.log("");
console.log("🔧 Funciones nuevas desde consola (MAZOS):");
console.log("   - agregarMazoAnime('anime1', 11, [...palabras])");
console.log("   - verMazosAnime('anime1')");
console.log("   - eliminarMazoAnime('anime1', 11)");
console.log("   - verMazosAnime('anime1') para ver todos los mazos");
console.log("");
console.log("🔧 Funciones nuevas desde consola (VIDEOS):");
console.log("   - cargarVideoAnime(animeId, idioma)");
console.log("   - agregarTimestampAnime(animeId, idioma, segundos, descripcion)");
console.log("   - cambiarDriveIdAnime(animeId, idioma, nuevoDriveId)");
console.log("   - verTimestampsAnime(animeId, idioma)");
console.log("");
console.log("💡 Usa iniciarSistemaAnime() para comenzar");
console.log("💡 El sistema ahora detecta automáticamente todos los mazos que agregues a animeVocabulario");
console.log("");
console.log("📚 YA INCLUIDOS para anime1:");
console.log("   - Mazo 1 al 5: Vocabulario de quintillizas");
console.log("   - Mazo 6 al 10: Adjetivos básicos en japonés");
console.log("   - Total: 10 mazos × 10 palabras = 100 palabras");
console.log("");
console.log("🚀 Para agregar más mazos, solo añádelos en animeVocabulario['anime1']:");
console.log("   'mazo11': [...],");
console.log("   'mazo12': [...],");
console.log("   'mazo13': [...], etc.");
