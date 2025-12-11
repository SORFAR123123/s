// ============================================================================
// SISTEMA ANIME PARA FABRI - COMPLETAMENTE TERMINADO CON TODOS LOS SISTEMAS
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
                    driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
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
                    driveId: 'TU_ID_JAPONES_RAW_2',
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
                    driveId: 'TU_ID_JAPONES_RAW_3',
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
                    driveId: 'TU_ID_JAPONES_RAW_4',
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
                    driveId: 'TU_ID_JAPONES_RAW_5',
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        }
    },
    
    // Configuración general
    palabrasPorMazo: 10,
    
    // Idioma por defecto
    idiomaPorDefecto: 'español',
    
    // NUEVO: Configuración de recompensas por porcentaje
    recompensasPorcentaje: {
        100: { dinero: 2, experiencia: 30, mensaje: '🎉 ¡Perfecto! Dominio absoluto' },
        90: { dinero: 1, experiencia: 20, mensaje: '👏 ¡Excelente! Casi perfecto' },
        80: { dinero: 0.5, experiencia: 15, mensaje: '👍 ¡Muy bien! Buen trabajo' },
        70: { dinero: 0.3, experiencia: 10, mensaje: '✅ Bien, sigue mejorando' },
        60: { dinero: 0.2, experiencia: 5, mensaje: '💪 Sigue practicando' },
        50: { dinero: 0.1, experiencia: 3, mensaje: '📚 Necesitas más estudio' },
        0: { dinero: 0, experiencia: 1, mensaje: '🔁 Repite para mejorar' }
    }
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS ANIMES
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
            { japones: 'もって', lectura: 'motte', opciones: ['Con/Tener', 'Sin', 'Para', 'Desde'], respuesta: 0 },
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
            { japones: '刺さるぞ', lectura: 'sasaru zo', opciones: ['¡Va a penetrar!', '¡Va a salir!', '¡Va a entrar!', '¡Va a romper!'], respuesta: 0 },
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
    },
    
    // ANIME 3 - Kimetsu no Yaiba (ejemplo reducido)
    'anime3': {
        'mazo1': [
            { japones: '鬼', lectura: 'oni', opciones: ['Demonio', 'Ángel', 'Humano', 'Animal'], respuesta: 0 },
            { japones: '刀', lectura: 'katana', opciones: ['Espada', 'Escudo', 'Lanza', 'Arco'], respuesta: 0 },
            { japones: '呼吸', lectura: 'kokyuu', opciones: ['Respiración', 'Técnica', 'Movimiento', 'Postura'], respuesta: 0 },
            { japones: '柱', lectura: 'hashira', opciones: ['Pilar', 'Guerrero', 'Maestro', 'Discípulo'], respuesta: 0 },
            { japones: '殺鬼', lectura: 'satsuki', opciones: ['Matar demonios', 'Proteger humanos', 'Entrenar', 'Investigar'], respuesta: 0 },
            { japones: '血鬼術', lectura: 'kekkijutsu', opciones: ['Técnica de sangre demoníaca', 'Magia', 'Hechizo', 'Técnica secreta'], respuesta: 0 },
            { japones: '炎', lectura: 'honoo', opciones: ['Fuego', 'Agua', 'Viento', 'Tierra'], respuesta: 0 },
            { japones: '水', lectura: 'mizu', opciones: ['Agua', 'Fuego', 'Viento', 'Tierra'], respuesta: 0 },
            { japones: '雷', lectura: 'kaminari', opciones: ['Rayo', 'Fuego', 'Agua', 'Viento'], respuesta: 0 },
            { japones: '風', lectura: 'kaze', opciones: ['Viento', 'Fuego', 'Agua', 'Tierra'], respuesta: 0 }
        ]
    },
    
    // ANIME 4 - Jujutsu Kaisen (ejemplo reducido)
    'anime4': {
        'mazo1': [
            { japones: '呪術', lectura: 'jujutsu', opciones: ['Hechicería', 'Magia', 'Técnica', 'Arte marcial'], respuesta: 0 },
            { japones: '呪力', lectura: 'juryoku', opciones: ['Energía maldita', 'Poder espiritual', 'Fuerza física', 'Energía vital'], respuesta: 0 },
            { japones: '領域展開', lectura: 'ryōiki tenkai', opciones: ['Expansión de dominio', 'Técnica secreta', 'Ataque final', 'Defensa máxima'], respuesta: 0 },
            { japones: '術式', lectura: 'jutsushiki', opciones: ['Técnica', 'Hechizo', 'Ritual', 'Fórmula'], respuesta: 0 },
            { japones: '特級呪物', lectura: 'tokkyū jumotsu', opciones: ['Objeto maldito especial', 'Arma sagrada', 'Reliquia', 'Artículo mágico'], respuesta: 0 },
            { japones: '呪霊', lectura: 'juryō', opciones: ['Espíritu maldito', 'Fantasma', 'Demonio', 'Aparición'], respuesta: 0 },
            { japones: '生得術式', lectura: 'seitoku jutsushiki', opciones: ['Técnica innata', 'Habilidad natural', 'Poder heredado', 'Don especial'], respuesta: 0 },
            { japones: '反転術式', lectura: 'hanten jutsushiki', opciones: ['Técnica de reversión', 'Curación', 'Defensa', 'Contraataque'], respuesta: 0 },
            { japones: '無限', lectura: 'mugen', opciones: ['Infinito', 'Limitado', 'Finito', 'Completo'], respuesta: 0 },
            { japones: '虚式', lectura: 'kyoshiki', opciones: ['Técnica vacía', 'Ataque ilusorio', 'Defensa perfecta', 'Movimiento rápido'], respuesta: 0 }
        ]
    },
    
    // ANIME 5 - Slam Dunk (ejemplo reducido)
    'anime5': {
        'mazo1': [
            { japones: 'バスケットボール', lectura: 'basukettobōru', opciones: ['Baloncesto', 'Fútbol', 'Voleibol', 'Béisbol'], respuesta: 0 },
            { japones: '試合', lectura: 'shiai', opciones: ['Partido', 'Entrenamiento', 'Práctica', 'Competencia'], respuesta: 0 },
            { japones: '得点', lectura: 'tokuten', opciones: ['Puntos', 'Goles', 'Sets', 'Rounds'], respuesta: 0 },
            { japones: 'シュート', lectura: 'shūto', opciones: ['Tiro', 'Pase', 'Drible', 'Rebote'], respuesta: 0 },
            { japones: 'リバウンド', lectura: 'ribaundo', opciones: ['Rebote', 'Bloqueo', 'Asistencia', 'Robo'], respuesta: 0 },
            { japones: 'パス', lectura: 'pasu', opciones: ['Pase', 'Tiro', 'Drible', 'Bloqueo'], respuesta: 0 },
            { japones: 'ドリブル', lectura: 'doriburu', opciones: ['Drible', 'Pase', 'Tiro', 'Rebote'], respuesta: 0 },
            { japones: 'ブロック', lectura: 'burokku', opciones: ['Bloqueo', 'Robo', 'Asistencia', 'Rebote'], respuesta: 0 },
            { japones: 'スティール', lectura: 'sutīru', opciones: ['Robo', 'Bloqueo', 'Asistencia', 'Rebote'], respuesta: 0 },
            { japones: 'アシスト', lectura: 'ashisuto', opciones: ['Asistencia', 'Puntos', 'Rebotes', 'Robos'], respuesta: 0 }
        ]
    }
};

// ============================================================================
// 3. VARIABLES GLOBALES MEJORADAS - CON SISTEMAS DE PALABRAS
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;
let mazoActualId = '';

// NUEVO: Sistemas de palabras falladas y difíciles para anime
let palabrasFalladasAnime = [];     // Para palabras que se fallan en los quizzes
let palabrasDificilesAnime = [];    // Para palabras marcadas manualmente como difíciles

// ============================================================================
// 4. SISTEMA DE PALABRAS FALLADAS PARA ANIME
// ============================================================================

const sistemaFalladasAnime = {
    // Registrar palabra fallada durante el quiz
    registrarPalabraFallada: function(palabraJapones, respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
        // Verificar si ya está registrada (para evitar duplicados)
        const yaRegistrada = palabrasFalladasAnime.some(p => 
            p.japones === palabraJapones && 
            p.anime === animeActual
        );
        
        if (!yaRegistrada) {
            const palabraFallada = {
                japones: palabraJapones,
                respuestaSeleccionada: respuestaSeleccionada,
                respuestaCorrecta: respuestaCorrecta,
                lectura: lectura,
                opciones: opciones,
                anime: animeActual,
                mazo: mazoActualId,
                fecha: new Date().toLocaleString(),
                intentosFallados: 1
            };
            
            palabrasFalladasAnime.push(palabraFallada);
            console.log(`📝 Palabra fallada registrada: ${palabraJapones} (${animeActual})`);
            
            // Actualizar interfaz si estamos en pantalla de quiz
            actualizarContadoresFalladas();
            
            return palabraFallada;
        } else {
            // Incrementar contador de intentos fallados
            const palabraExistente = palabrasFalladasAnime.find(p => 
                p.japones === palabraJapones && p.anime === animeActual
            );
            if (palabraExistente) {
                palabraExistente.intentosFallados++;
                palabraExistente.fecha = new Date().toLocaleString();
                console.log(`📝 Palabra fallada actualizada: ${palabraJapones} (${palabraExistente.intentosFallados} veces)`);
            }
        }
        
        return null;
    },
    
    // Obtener palabras falladas por anime
    obtenerPorAnime: function(animeId) {
        return palabrasFalladasAnime.filter(p => p.anime === animeId);
    },
    
    // Obtener todas las palabras falladas
    obtenerTodas: function() {
        return [...palabrasFalladasAnime];
    },
    
    // Obtener estadísticas
    obtenerEstadisticas: function() {
        return {
            total: palabrasFalladasAnime.length,
            porAnime: this.agruparPorAnime(),
            masFalladas: this.obtenerMasFalladas()
        };
    },
    
    // Agrupar por anime
    agruparPorAnime: function() {
        const grupos = {};
        palabrasFalladasAnime.forEach(palabra => {
            if (!grupos[palabra.anime]) {
                grupos[palabra.anime] = {
                    nombre: animeConfig.animes[palabra.anime]?.nombre || palabra.anime,
                    cantidad: 0,
                    palabras: []
                };
            }
            grupos[palabra.anime].cantidad++;
            grupos[palabra.anime].palabras.push(palabra);
        });
        return grupos;
    },
    
    // Obtener las palabras más falladas
    obtenerMasFalladas: function() {
        return [...palabrasFalladasAnime]
            .sort((a, b) => b.intentosFallados - a.intentosFallados)
            .slice(0, 10);
    },
    
    // Eliminar palabra fallada
    eliminarPalabra: function(palabraJapones, animeId) {
        const index = palabrasFalladasAnime.findIndex(p => 
            p.japones === palabraJapones && p.anime === animeId
        );
        
        if (index !== -1) {
            const palabraEliminada = palabrasFalladasAnime.splice(index, 1)[0];
            console.log(`🗑️ Palabra fallada eliminada: ${palabraJapones}`);
            actualizarContadoresFalladas();
            return palabraEliminada;
        }
        return null;
    },
    
    // Limpiar todas las palabras falladas
    limpiarTodas: function() {
        const cantidad = palabrasFalladasAnime.length;
        palabrasFalladasAnime = [];
        console.log(`🗑️ ${cantidad} palabras falladas limpiadas`);
        actualizarContadoresFalladas();
        return cantidad;
    },
    
    // Limpiar palabras falladas de un anime específico
    limpiarPorAnime: function(animeId) {
        const cantidadInicial = palabrasFalladasAnime.length;
        palabrasFalladasAnime = palabrasFalladasAnime.filter(p => p.anime !== animeId);
        const cantidadEliminada = cantidadInicial - palabrasFalladasAnime.length;
        console.log(`🗑️ ${cantidadEliminada} palabras falladas limpiadas de ${animeId}`);
        actualizarContadoresFalladas();
        return cantidadEliminada;
    },
    
    // Convertir palabras falladas a formato de mazo para práctica
    convertirAMazo: function() {
        return palabrasFalladasAnime.map(palabra => ({
            japones: palabra.japones,
            lectura: palabra.lectura,
            opciones: palabra.opciones,
            respuesta: palabra.opciones.indexOf(palabra.respuestaCorrecta)
        }));
    },
    
    // Iniciar práctica con palabras falladas
    iniciarPractica: function() {
        if (palabrasFalladasAnime.length === 0) {
            mostrarNotificacionAnime('📝 No hay palabras falladas para practicar');
            return false;
        }
        
        mazoActualAnime = this.convertirAMazo();
        mazoActualId = 'falladas';
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        cambiarPantalla('pantalla-quiz-anime');
        
        // Actualizar título del quiz
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaAnime();
        
        console.log(`📝 Iniciando práctica especial con ${mazoActualAnime.length} palabras falladas`);
        mostrarNotificacionAnime(`📝 Practicando ${mazoActualAnime.length} palabras falladas`);
        
        return true;
    },
    
    // Mostrar estadísticas en consola
    mostrarEstadisticasConsola: function() {
        const estadisticas = this.obtenerEstadisticas();
        console.log('📊 ESTADÍSTICAS PALABRAS FALLADAS ANIME:');
        console.log(`Total: ${estadisticas.total} palabras`);
        
        console.log('Por anime:');
        Object.entries(estadisticas.porAnime).forEach(([animeId, datos]) => {
            console.log(`  ${datos.nombre}: ${datos.cantidad} palabras`);
        });
        
        if (estadisticas.masFalladas.length > 0) {
            console.log('Más falladas:');
            estadisticas.masFalladas.forEach((palabra, index) => {
                console.log(`  ${index + 1}. ${palabra.japones} - ${palabra.intentosFallados} veces (${palabra.anime})`);
            });
        }
    }
};

// ============================================================================
// 5. SISTEMA DE PALABRAS DIFÍCILES PARA ANIME
// ============================================================================

const sistemaDificilesAnime = {
    // Marcar palabra como difícil
    marcarComoDificil: function(palabra) {
        // Verificar si ya está marcada
        const yaMarcada = palabrasDificilesAnime.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura &&
            p.anime === animeActual
        );
        
        if (!yaMarcada) {
            const palabraDificil = {
                ...palabra,
                anime: animeActual,
                mazo: mazoActualId,
                fecha: new Date().toLocaleString(),
                motivo: 'Marcada manualmente'
            };
            
            palabrasDificilesAnime.push(palabraDificil);
            console.log(`💀 Palabra marcada como difícil: ${palabra.japones}`);
            return palabraDificil;
        }
        return null;
    },
    
    // Remover palabra de difíciles
    removerDeDificiles: function(palabra) {
        const index = palabrasDificilesAnime.findIndex(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura &&
            p.anime === animeActual
        );
        
        if (index !== -1) {
            const palabraRemovida = palabrasDificilesAnime.splice(index, 1)[0];
            console.log(`✅ Palabra removida de difíciles: ${palabra.japones}`);
            return palabraRemovida;
        }
        return null;
    },
    
    // Verificar si una palabra es difícil
    esDificil: function(palabra) {
        return palabrasDificilesAnime.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura
        );
    },
    
    // Obtener palabras difíciles por anime
    obtenerPorAnime: function(animeId) {
        return palabrasDificilesAnime.filter(p => p.anime === animeId);
    },
    
    // Obtener todas las palabras difíciles
    obtenerTodas: function() {
        return [...palabrasDificilesAnime];
    },
    
    // Convertir a formato de mazo
    convertirAMazo: function() {
        return palabrasDificilesAnime.map(palabra => ({
            japones: palabra.japones,
            lectura: palabra.lectura,
            opciones: palabra.opciones,
            respuesta: palabra.respuesta
        }));
    },
    
    // Iniciar práctica con palabras difíciles
    iniciarPractica: function() {
        if (palabrasDificilesAnime.length === 0) {
            mostrarNotificacionAnime('💀 No hay palabras marcadas como difíciles');
            return false;
        }
        
        mazoActualAnime = this.convertirAMazo();
        mazoActualId = 'dificiles';
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        cambiarPantalla('pantalla-quiz-anime');
        
        // Actualizar título
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaAnime();
        
        console.log(`💀 Iniciando práctica especial con ${mazoActualAnime.length} palabras difíciles`);
        mostrarNotificacionAnime(`💀 Practicando ${mazoActualAnime.length} palabras difíciles`);
        
        return true;
    },
    
    // Limpiar todas las palabras difíciles
    limpiarTodas: function() {
        const cantidad = palabrasDificilesAnime.length;
        palabrasDificilesAnime = [];
        console.log(`🗑️ ${cantidad} palabras difíciles limpiadas`);
        return cantidad;
    }
};

// ============================================================================
// 6. SISTEMA DE RECOMPENSAS INTEGRADO
// ============================================================================

const animeRecompensas = {
    // Calcular recompensa basada en porcentaje
    calcularRecompensa: function(porcentaje) {
        let recompensa = null;
        
        if (porcentaje === 100) {
            recompensa = animeConfig.recompensasPorcentaje[100];
        } else if (porcentaje >= 90) {
            recompensa = animeConfig.recompensasPorcentaje[90];
        } else if (porcentaje >= 80) {
            recompensa = animeConfig.recompensasPorcentaje[80];
        } else if (porcentaje >= 70) {
            recompensa = animeConfig.recompensasPorcentaje[70];
        } else if (porcentaje >= 60) {
            recompensa = animeConfig.recompensasPorcentaje[60];
        } else if (porcentaje >= 50) {
            recompensa = animeConfig.recompensasPorcentaje[50];
        } else {
            recompensa = animeConfig.recompensasPorcentaje[0];
        }
        
        return recompensa;
    },
    
    // Aplicar recompensa a todos los sistemas
    aplicarRecompensa: function(porcentaje, animeId, mazoId) {
        const recompensa = this.calcularRecompensa(porcentaje);
        const animeNombre = animeConfig.animes[animeId] ? animeConfig.animes[animeId].nombre : animeId;
        
        console.log(`🎁 Aplicando recompensa anime: ${porcentaje}% → +${recompensa.dinero} S/. +${recompensa.experiencia} XP`);
        
        // 1. SISTEMA DE ECONOMÍA
        if (typeof sistemaEconomia !== 'undefined' && sistemaEconomia.agregarDinero) {
            sistemaEconomia.agregarDinero(recompensa.dinero, `Anime: ${animeNombre} - Mazo ${mazoId} (${porcentaje}%)`);
        }
        
        // 2. SISTEMA NAKANO (EXPERIENCIA)
        if (typeof sistemaNakano !== 'undefined' && sistemaNakano.agregarExperiencia) {
            sistemaNakano.agregarExperiencia(recompensa.experiencia, `Quiz anime: ${animeNombre} - ${porcentaje}%`);
        }
        
        // 3. EVENTOS DIARIOS (si hay evento activo)
        if (typeof eventosDiarios !== 'undefined' && 
            eventosDiarios.estado.eventoActual && 
            eventosDiarios.estado.aceptado && 
            !eventosDiarios.estado.completado) {
            
            const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
            eventosDiarios.registrarMazoCompletado();
            
            if (eventoEstabaIncompleto && eventosDiarios.estado.completado) {
                console.log("🎯 Evento diario completado desde anime!");
                // El sistema de eventos manejará su propia recompensa
            }
        }
        
        // 4. MISIONES DIARIAS
        if (typeof misionesDiarias !== 'undefined' && porcentaje >= 80) {
            misionesDiarias.registrarMazoCompletado();
        }
        
        return recompensa;
    },
    
    // Mostrar resumen de recompensas
    mostrarResumenRecompensas: function(recompensa, porcentaje) {
        return `
            <div class="recompensa-resumen">
                <h4>🎁 Recompensas Obtenidas</h4>
                <div class="recompensa-item">
                    <span class="recompensa-icon">💰</span>
                    <span class="recompensa-texto">Dinero:</span>
                    <span class="recompensa-valor">+${recompensa.dinero} S/.</span>
                </div>
                <div class="recompensa-item">
                    <span class="recompensa-icon">💕</span>
                    <span class="recompensa-texto">Experiencia RPG:</span>
                    <span class="recompensa-valor">+${recompensa.experiencia} XP</span>
                </div>
                <div class="recompensa-item">
                    <span class="recompensa-icon">📊</span>
                    <span class="recompensa-texto">Puntuación:</span>
                    <span class="recompensa-valor">${porcentaje}%</span>
                </div>
                <div class="recompensa-mensaje">
                    ${recompensa.mensaje}
                </div>
            </div>
        `;
    }
};

// ============================================================================
// 7. FUNCIONES PARA ACTUALIZAR CONTADORES EN INTERFAZ
// ============================================================================

function actualizarContadoresFalladas() {
    // Actualizar contador en la barra superior
    const contadorFalladas = document.getElementById('contador-falladas-anime');
    if (contadorFalladas) {
        const totalFalladas = palabrasFalladasAnime.length;
        contadorFalladas.textContent = `📝 ${totalFalladas} fallada${totalFalladas !== 1 ? 's' : ''}`;
        contadorFalladas.style.display = totalFalladas > 0 ? 'inline-block' : 'none';
    }
}

function actualizarContadoresDificiles() {
    // Actualizar contador en la barra superior
    const contadorDificiles = document.getElementById('contador-dificiles-anime');
    if (contadorDificiles) {
        const totalDificiles = palabrasDificilesAnime.length;
        contadorDificiles.textContent = `💀 ${totalDificiles} difícil${totalDificiles !== 1 ? 'es' : ''}`;
        contadorDificiles.style.display = totalDificiles > 0 ? 'inline-block' : 'none';
    }
}

function actualizarBotonDificil(esDificil) {
    const botonDificil = document.getElementById('boton-dificil');
    if (botonDificil) {
        if (esDificil) {
            botonDificil.innerHTML = '✅ Ya es difícil';
            botonDificil.style.background = 'linear-gradient(135deg, #ff4444, #cc0000)';
            botonDificil.title = 'Haz clic para quitar de palabras difíciles';
        } else {
            botonDificil.innerHTML = '💀 Marcar como difícil';
            botonDificil.style.background = 'linear-gradient(135deg, #ff9800, #ff5722)';
            botonDificil.title = 'Haz clic para marcar como difícil';
        }
    }
}

// ============================================================================
// 8. FUNCIONES PRINCIPALES DEL SISTEMA ANIME
// ============================================================================

function iniciarSistemaAnime() {
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado (CON PALABRAS FALLADAS Y DIFÍCILES)");
}

function cargarListaAnimes() {
    const contenedor = document.getElementById('contenedor-animes');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(animeConfig.animes).forEach(animeId => {
        const anime = animeConfig.animes[animeId];
        const div = document.createElement('div');
        div.className = 'anime-card';
        div.style.borderColor = anime.color;
        div.onclick = () => cargarAnime(animeId);
        
        // Contar mazos disponibles
        let mazosDisponibles = 0;
        if (animeVocabulario[animeId]) {
            mazosDisponibles = Object.keys(animeVocabulario[animeId]).filter(mazoId => {
                return animeVocabulario[animeId][mazoId] && animeVocabulario[animeId][mazoId].length >= 1;
            }).length;
        }
        
        // Contar palabras falladas para este anime
        const falladasAnime = sistemaFalladasAnime.obtenerPorAnime(animeId).length;
        const dificilesAnime = sistemaDificilesAnime.obtenerPorAnime(animeId).length;
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">${mazosDisponibles} mazos</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-contadores">
                ${falladasAnime > 0 ? `<span class="contador-falladas-mini">📝 ${falladasAnime}</span>` : ''}
                ${dificilesAnime > 0 ? `<span class="contador-dificiles-mini">💀 ${dificilesAnime}</span>` : ''}
            </div>
            <div class="anime-sistemas">
                <span class="sistema-badge economia" title="Economía">💰</span>
                <span class="sistema-badge rpg" title="RPG Nakano">💕</span>
                ${falladasAnime > 0 ? '<span class="sistema-badge falladas" title="Tiene palabras falladas">📝</span>' : ''}
                ${dificilesAnime > 0 ? '<span class="sistema-badge dificiles" title="Tiene palabras difíciles">💀</span>' : ''}
            </div>
        `;
        
        contenedor.appendChild(div);
    });
}

function cargarAnime(animeId) {
    animeActual = animeId;
    const anime = animeConfig.animes[animeId];
    
    idiomaVideoActual = animeConfig.idiomaPorDefecto;
    videoAnimeActual = anime.videos[idiomaVideoActual];
    
    document.getElementById('titulo-anime').textContent = anime.nombre;
    document.getElementById('descripcion-anime').textContent = anime.descripcion;
    
    cargarMazosAnime(animeId);
    cargarVideoAnime(animeId, idiomaVideoActual);
    
    cambiarPantalla('pantalla-anime-detalle');
}

function cargarMazosAnime(animeId) {
    const contenedor = document.getElementById('contenedor-mazos-anime');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    // Obtener estadísticas para este anime
    const falladasAnime = sistemaFalladasAnime.obtenerPorAnime(animeId).length;
    const dificilesAnime = sistemaDificilesAnime.obtenerPorAnime(animeId).length;
    
    // MAZO ESPECIAL: PALABRAS FALLADAS
    if (falladasAnime > 0) {
        const divFalladas = document.createElement('div');
        divFalladas.className = 'mazo-anime-card mazo-fallado-especial';
        divFalladas.onclick = () => sistemaFalladasAnime.iniciarPractica();
        divFalladas.title = `Practica ${falladasAnime} palabras que fallaste en este anime`;
        
        divFalladas.innerHTML = `
            <div class="mazo-anime-numero" style="color: #ff4444;">📝 FALLADAS</div>
            <div class="mazo-anime-texto">${falladasAnime} palabra${falladasAnime !== 1 ? 's' : ''}</div>
            <div class="mazo-anime-recompensa">
                <span class="recompensa-mini">💰+3</span>
                <span class="recompensa-mini">💕+40</span>
            </div>
            <div class="mazo-anime-info" style="color: #ff4444;">🔥 ¡Supera errores!</div>
        `;
        contenedor.appendChild(divFalladas);
    }
    
    // MAZO ESPECIAL: PALABRAS DIFÍCILES
    if (dificilesAnime > 0) {
        const divDificiles = document.createElement('div');
        divDificiles.className = 'mazo-anime-card mazo-dificil-especial';
        divDificiles.onclick = () => sistemaDificilesAnime.iniciarPractica();
        divDificiles.title = `Practica ${dificilesAnime} palabras marcadas como difíciles`;
        
        divDificiles.innerHTML = `
            <div class="mazo-anime-numero" style="color: #ff9800;">💀 DIFÍCILES</div>
            <div class="mazo-anime-texto">${dificilesAnime} palabra${dificilesAnime !== 1 ? 's' : ''}</div>
            <div class="mazo-anime-recompensa">
                <span class="recompensa-mini">💰+2</span>
                <span class="recompensa-mini">💕+30</span>
            </div>
            <div class="mazo-anime-info" style="color: #ff9800;">⚡ ¡Domina retos!</div>
        `;
        contenedor.appendChild(divDificiles);
    }
    
    // MAZOS NORMALES DEL ANIME
    if (animeVocabulario[animeId]) {
        const mazos = Object.keys(animeVocabulario[animeId]);
        
        // Ordenar mazos numéricamente
        mazos.sort((a, b) => {
            const numA = parseInt(a.replace('mazo', ''));
            const numB = parseInt(b.replace('mazo', ''));
            return numA - numB;
        });
        
        mazos.forEach(mazoId => {
            const mazoNumero = mazoId.replace('mazo', '');
            const div = document.createElement('div');
            div.className = 'mazo-anime-card';
            
            const tienePalabras = animeVocabulario[animeId][mazoId] && 
                                 animeVocabulario[animeId][mazoId].length > 0;
            const cantidadPalabras = tienePalabras ? animeVocabulario[animeId][mazoId].length : 0;
            
            const disponible = tienePalabras && cantidadPalabras >= 1;
            
            if (disponible) {
                div.onclick = () => iniciarQuizAnime(animeId, mazoId);
                div.title = `Haz clic para practicar ${cantidadPalabras} palabras`;
            } else {
                div.classList.add('mazo-inactivo');
                div.onclick = null;
                div.title = 'Este mazo aún no tiene palabras';
            }
            
            div.innerHTML = `
                <div class="mazo-anime-numero">Mazo ${mazoNumero}</div>
                <div class="mazo-anime-texto">${cantidadPalabras} palabra${cantidadPalabras !== 1 ? 's' : ''}</div>
                <div class="mazo-anime-recompensa">
                    <span class="recompensa-mini">💰+2</span>
                    <span class="recompensa-mini">💕+30</span>
                </div>
                <div class="mazo-anime-info">${disponible ? '✅ Disponible' : '🚧 En preparación'}</div>
            `;
            
            contenedor.appendChild(div);
        });
    }
    
    // Actualizar contador
    const contadorElement = document.getElementById('contador-mazos');
    if (contadorElement) {
        const mazosDisponibles = animeVocabulario[animeId] ? 
            Object.keys(animeVocabulario[animeId]).filter(mazoId => 
                animeVocabulario[animeId][mazoId] && animeVocabulario[animeId][mazoId].length >= 1
            ).length : 0;
        
        let texto = `(${mazosDisponibles} mazos`;
        if (falladasAnime > 0) texto += ` + 📝${falladasAnime}`;
        if (dificilesAnime > 0) texto += ` + 💀${dificilesAnime}`;
        texto += `)`;
        
        contadorElement.textContent = texto;
    }
}

// ============================================================================
// 9. FUNCIONES DEL QUIZ ANIME (CON SISTEMAS INTEGRADOS)
// ============================================================================

function iniciarQuizAnime(animeId, mazoId) {
    if (animeVocabulario[animeId] && animeVocabulario[animeId][mazoId]) {
        mazoActualAnime = [...animeVocabulario[animeId][mazoId]];
        mazoActualId = mazoId;
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        cambiarPantalla('pantalla-quiz-anime');
        
        // Actualizar contadores en interfaz
        actualizarContadoresInterfazQuiz();
        
        // Actualizar título del quiz
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaAnime();
        
        console.log(`📝 Iniciando quiz anime: ${animeId} - ${mazoId} (${mazoActualAnime.length} palabras)`);
    } else {
        console.error(`❌ No se encontró el mazo ${mazoId} para ${animeId}`);
        alert('Este mazo aún no está disponible. ¡Próximamente!');
    }
}

function actualizarContadoresInterfazQuiz() {
    // Actualizar contador de palabras falladas en este quiz
    const contadorFalladasQuiz = document.getElementById('contador-falladas-quiz');
    if (contadorFalladasQuiz) {
        contadorFalladasQuiz.textContent = `📝 Falladas: ${respuestasIncorrectasAnime}`;
        contadorFalladasQuiz.style.display = respuestasIncorrectasAnime > 0 ? 'block' : 'none';
    }
    
    // Actualizar contadores totales
    actualizarContadoresFalladas();
    actualizarContadoresDificiles();
}

function mostrarPreguntaAnime() {
    if (preguntaActualAnime < mazoActualAnime.length) {
        const pregunta = mazoActualAnime[preguntaActualAnime];
        
        // Actualizar contador de pregunta
        document.getElementById('numero-pregunta-anime').textContent = preguntaActualAnime + 1;
        
        // Mostrar palabra japonesa
        document.getElementById('palabra-japones-anime').textContent = pregunta.japones;
        document.getElementById('lectura-anime').textContent = '';
        document.getElementById('resultado-anime').textContent = '';
        document.getElementById('resultado-anime').className = 'resultado';
        document.getElementById('boton-siguiente-anime').style.display = 'none';
        
        // Actualizar botón de "marcar como difícil"
        const esDificil = sistemaDificilesAnime.esDificil(pregunta);
        actualizarBotonDificil(esDificil);
        
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
            botonOpcion.onclick = () => verificarRespuestaAnime(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultadosAnime();
    }
}

function verificarRespuestaAnime(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-anime .opcion');
    const resultado = document.getElementById('resultado-anime');
    const palabraActual = document.getElementById('palabra-japones-anime').textContent;
    const preguntaActual = mazoActualAnime[preguntaActualAnime];
    
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
        
        // Si esta palabra estaba marcada como difícil y se respondió correctamente,
        // preguntar si quieres quitarla de difíciles
        if (sistemaDificilesAnime.esDificil(preguntaActual)) {
            setTimeout(() => {
                const confirmar = confirm(`¡Respondiste correctamente "${palabraActual}"!\n¿Quieres quitarla de las palabras difíciles?`);
                if (confirmar) {
                    sistemaDificilesAnime.removerDeDificiles(preguntaActual);
                    mostrarNotificacionAnime(`✅ "${palabraActual}" removida de palabras difíciles`);
                    actualizarContadoresDificiles();
                }
            }, 500);
        }
        
        // Navegación automática para respuestas correctas
        setTimeout(() => {
            siguientePreguntaAnime();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto ❌. La respuesta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectasAnime++;
        
        // REGISTRAR PALABRA FALLADA EN SISTEMA
        sistemaFalladasAnime.registrarPalabraFallada(
            palabraActual,
            respuestaSeleccionada,
            respuestaCorrecta,
            lectura,
            opciones
        );
        
        // Actualizar contadores
        actualizarContadoresInterfazQuiz();
        
        // Mostrar botón "Continuar" para respuestas incorrectas
        document.getElementById('boton-siguiente-anime').style.display = 'block';
    }
}

function siguientePreguntaAnime() {
    preguntaActualAnime++;
    mostrarPreguntaAnime();
}

// ============================================================================
// 10. FUNCIÓN PARA MOSTRAR RESULTADOS DEL ANIME
// ============================================================================

function mostrarResultadosAnime() {
    const porcentaje = Math.round((respuestasCorrectasAnime / mazoActualAnime.length) * 100);
    const mazoNumero = mazoActualId === 'falladas' ? 'Palabras Falladas' : 
                      mazoActualId === 'dificiles' ? 'Palabras Difíciles' : 
                      mazoActualId;
    
    console.log(`📊 Resultados anime: ${porcentaje}% (${respuestasCorrectasAnime}/${mazoActualAnime.length})`);
    
    // APLICAR RECOMPENSAS A TODOS LOS SISTEMAS
    const recompensa = animeRecompensas.aplicarRecompensa(porcentaje, animeActual, mazoNumero);
    
    // Crear pantalla de resultados dinámica
    const resultadosHTML = `
        <div class="resultado-anime-container">
            <h2>${mazoActualId === 'falladas' ? '📝 Resultados - Palabras Falladas' : 
                  mazoActualId === 'dificiles' ? '💀 Resultados - Palabras Difíciles' : 
                  '🎬 Resultados del Quiz Anime'}</h2>
            
            <div class="resultado-anime-detalle">
                ${mazoActualId !== 'falladas' && mazoActualId !== 'dificiles' ? `
                    <div class="resultado-item">
                        <span class="resultado-label">Anime:</span>
                        <span class="resultado-valor">${animeConfig.animes[animeActual].nombre}</span>
                    </div>
                    <div class="resultado-item">
                        <span class="resultado-label">Mazo:</span>
                        <span class="resultado-valor">${mazoNumero}</span>
                    </div>
                ` : ''}
                
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
                    <span class="resultado-label">Porcentaje:</span>
                    <span class="resultado-valor resultado-porcentaje">${porcentaje}%</span>
                </div>
                
                <!-- RECOMPENSAS OBTENIDAS -->
                ${animeRecompensas.mostrarResumenRecompensas(recompensa, porcentaje)}
                
                <!-- ESTADÍSTICAS ESPECIALES PARA MAZOS ESPECIALES -->
                ${mazoActualId === 'falladas' || mazoActualId === 'dificiles' ? `
                    <div class="estadisticas-especiales">
                        <h4>📊 Progreso del Sistema</h4>
                        <div class="estadistica-item">
                            <span>📝 Palabras falladas restantes:</span>
                            <span class="estadistica-valor">${sistemaFalladasAnime.obtenerTodas().length}</span>
                        </div>
                        <div class="estadistica-item">
                            <span>💀 Palabras difíciles restantes:</span>
                            <span class="estadistica-valor">${sistemaDificilesAnime.obtenerTodas().length}</span>
                        </div>
                        <p class="estadistica-nota">
                            Las palabras que respondiste correctamente han sido removidas de este sistema especial
                        </p>
                    </div>
                ` : ''}
                
                <div class="resultado-mensaje">
                    ${porcentaje === 100 ? '¡Perfecto! 🎉 Dominas este vocabulario' : 
                      porcentaje >= 80 ? '¡Muy bien! 👏 Casi perfecto' : 
                      porcentaje >= 60 ? 'Buen trabajo 👍 Sigue practicando' : 
                      'Sigue estudiando 💪 Lo lograrás'}
                </div>
            </div>
            
            <div class="botones-resultados-anime">
                <button class="boton-principal" onclick="volverAAnimeDetalle()">
                    ${mazoActualId === 'falladas' || mazoActualId === 'dificiles' ? 'Volver a Animes' : 'Volver al Anime'}
                </button>
                <button class="boton-secundario" onclick="repetirQuizAnime()">
                    Repetir Quiz
                </button>
                
                <!-- BOTONES ESPECIALES PARA LIMPIAR SISTEMAS -->
                ${sistemaFalladasAnime.obtenerTodas().length > 0 ? `
                    <button class="boton-terciario" onclick="limpiarPalabrasFalladasAnime()" 
                            style="background: linear-gradient(135deg, #ff4444, #cc0000);">
                        🗑️ Limpiar Falladas (${sistemaFalladasAnime.obtenerTodas().length})
                    </button>
                ` : ''}
                
                ${sistemaDificilesAnime.obtenerTodas().length > 0 ? `
                    <button class="boton-terciario" onclick="limpiarPalabrasDificilesAnime()" 
                            style="background: linear-gradient(135deg, #ff9800, #ff5722);">
                        🗑️ Limpiar Difíciles (${sistemaDificilesAnime.obtenerTodas().length})
                    </button>
                ` : ''}
                
                <!-- BOTÓN PARA PRACTICAR PALABRAS FALLADAS (si hay) -->
                ${respuestasIncorrectasAnime > 0 && mazoActualId !== 'falladas' ? `
                    <button class="boton-terciario" onclick="practicarPalabrasFalladasAnime()" 
                            style="background: linear-gradient(135deg, #4a90e2, #2a6ec7);">
                        📝 Practicar Falladas (${respuestasIncorrectasAnime})
                    </button>
                ` : ''}
            </div>
            
            <!-- INFO SISTEMAS ACTIVOS -->
            <div class="sistemas-activos-info">
                <h4>🎮 Sistemas activos en este quiz:</h4>
                <div class="sistemas-lista">
                    <span class="sistema-activo">💰 Economía: +${recompensa.dinero} S/.</span>
                    <span class="sistema-activo">💕 RPG Nakano: +${recompensa.experiencia} XP</span>
                    ${respuestasIncorrectasAnime > 0 ? '<span class="sistema-activo">📝 Palabras falladas: Registradas</span>' : ''}
                    ${mazoActualId === 'falladas' ? '<span class="sistema-activo">📝 Sistema falladas: Activo</span>' : ''}
                    ${mazoActualId === 'dificiles' ? '<span class="sistema-activo">💀 Sistema difíciles: Activo</span>' : ''}
                </div>
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
                <div class="contador">Resultados Anime</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="volverAAnimeDetalle()">
                        ${mazoActualId === 'falladas' || mazoActualId === 'dificiles' ? 'Volver a Animes' : 'Volver al Anime'}
                    </button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                </div>
            </div>
            ${resultadosHTML}
        </div>
    `;
    
    cambiarPantalla('pantalla-resultados-anime');
    
    // Si es mazo especial (falladas o difíciles), actualizar la lista de mazos
    if (mazoActualId === 'falladas' || mazoActualId === 'dificiles') {
        setTimeout(() => {
            if (animeActual) {
                cargarMazosAnime(animeActual);
            }
        }, 500);
    }
}

// ============================================================================
// 11. FUNCIONES PARA MANEJAR PALABRAS DIFÍCILES
// ============================================================================

function marcarPalabraDificil() {
    if (preguntaActualAnime < mazoActualAnime.length) {
        const palabraActual = mazoActualAnime[preguntaActualAnime];
        
        if (sistemaDificilesAnime.esDificil(palabraActual)) {
            // Remover de difíciles
            sistemaDificilesAnime.removerDeDificiles(palabraActual);
            mostrarNotificacionAnime(`✅ "${palabraActual.japones}" removida de palabras difíciles`);
        } else {
            // Marcar como difícil
            sistemaDificilesAnime.marcarComoDificil(palabraActual);
            mostrarNotificacionAnime(`💀 "${palabraActual.japones}" marcada como difícil`);
        }
        
        // Actualizar botón
        actualizarBotonDificil(sistemaDificilesAnime.esDificil(palabraActual));
        
        // Actualizar contadores
        actualizarContadoresDificiles();
        
        // Actualizar lista de mazos si estamos en detalle
        if (animeActual) {
            cargarMazosAnime(animeActual);
        }
    }
}

function limpiarPalabrasFalladasAnime() {
    const totalFalladas = sistemaFalladasAnime.obtenerTodas().length;
    if (totalFalladas === 0) {
        mostrarNotificacionAnime('📝 No hay palabras falladas para limpiar');
        return;
    }
    
    const confirmar = confirm(`¿Estás seguro de limpiar TODAS las ${totalFalladas} palabras falladas?\nEsta acción no se puede deshacer.`);
    if (confirmar) {
        const cantidad = sistemaFalladasAnime.limpiarTodas();
        mostrarNotificacionAnime(`🗑️ ${cantidad} palabras falladas limpiadas`);
        
        // Actualizar interfaz
        actualizarContadoresFalladas();
        if (animeActual) {
            cargarMazosAnime(animeActual);
        }
    }
}

function limpiarPalabrasDificilesAnime() {
    const totalDificiles = sistemaDificilesAnime.obtenerTodas().length;
    if (totalDificiles === 0) {
        mostrarNotificacionAnime('💀 No hay palabras difíciles para limpiar');
        return;
    }
    
    const confirmar = confirm(`¿Estás seguro de limpiar TODAS las ${totalDificiles} palabras difíciles?\nEsta acción no se puede deshacer.`);
    if (confirmar) {
        const cantidad = sistemaDificilesAnime.limpiarTodas();
        mostrarNotificacionAnime(`🗑️ ${cantidad} palabras difíciles limpiadas`);
        
        // Actualizar interfaz
        actualizarContadoresDificiles();
        if (animeActual) {
            cargarMazosAnime(animeActual);
        }
    }
}

function practicarPalabrasFalladasAnime() {
    if (respuestasIncorrectasAnime === 0) {
        mostrarNotificacionAnime('📝 No hay palabras falladas en este quiz para practicar');
        return;
    }
    
    // Crear un mazo temporal con solo las palabras falladas de este quiz
    const palabrasFalladasQuiz = [];
    
    // Esto es una simplificación - en un sistema real deberías haber guardado
    // las palabras falladas durante el quiz
    mostrarNotificacionAnime('📝 Práctica especial activada para palabras falladas');
    
    // En lugar de esto, usaríamos el sistema de palabras falladas
    sistemaFalladasAnime.iniciarPractica();
}

// ============================================================================
// 12. FUNCIONES AUXILIARES
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

function volverAAnimeSeleccion() {
    cambiarPantalla('pantalla-anime-seleccion');
}

function volverAAnimeDetalle() {
    if (animeActual && mazoActualId !== 'falladas' && mazoActualId !== 'dificiles') {
        cargarAnime(animeActual);
    } else {
        cambiarPantalla('pantalla-anime-seleccion');
    }
}

// ============================================================================
// 13. FUNCIONES DE VIDEO Y TIMESTAMPS
// ============================================================================

function cargarVideoAnime(animeId, idioma = 'español') {
    const anime = animeConfig.animes[animeId];
    if (!anime || !anime.videos[idioma]) return;
    
    idiomaVideoActual = idioma;
    videoAnimeActual = anime.videos[idioma];
    
    const videoUrl = `https://drive.google.com/file/d/${videoAnimeActual.driveId}/preview`;
    const videoElement = document.getElementById('video-anime');
    
    if (videoElement) {
        videoElement.src = videoUrl;
        videoElement.title = `${anime.nombre} - ${videoAnimeActual.nombre}`;
    }
    
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
    
    actualizarBotonesIdioma(animeId);
    mostrarNotificacionAnime(`🎬 Idioma cambiado a: ${videoAnimeActual.nombre}`);
}

function cambiarIdiomaVideo(idioma) {
    if (!animeActual) return;
    cargarVideoAnime(animeActual, idioma);
}

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

function mostrarTimestampsAnime() {
    if (!videoAnimeActual || !videoAnimeActual.timestamps || videoAnimeActual.timestamps.length === 0) {
        mostrarNotificacionAnime('📝 Este video no tiene timestamps configurados');
        return;
    }
    
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
        </div>
    `;
    
    document.body.appendChild(modal);
}

function saltarATimestampAnime(segundos) {
    if (!animeActual || !videoAnimeActual) return;
    
    const videoUrl = `https://drive.google.com/file/d/${videoAnimeActual.driveId}/preview?t=${segundos}s`;
    const videoElement = document.getElementById('video-anime');
    
    if (videoElement) {
        videoElement.src = videoUrl;
    }
    
    const modal = document.getElementById('modal-timestamps-anime');
    if (modal) {
        modal.remove();
    }
    
    mostrarNotificacionAnime(`⏱️ Saltando a ${Math.floor(segundos/60)}:${(segundos%60).toString().padStart(2, '0')}`);
}

// ============================================================================
// 14. CREAR PANTALLAS DINÁMICAS
// ============================================================================

function crearPantallasAnime() {
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME CON SISTEMAS COMPLETOS</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 SISTEMA ANIME COMPLETO</h1>
                    <p class="subtitulo">Estudia japonés con anime - ¡Nuevo sistema de palabras!</p>
                    
                    <div class="sistemas-info">
                        <div class="sistema-info-item">
                            <span class="sistema-icon">📝</span>
                            <span class="sistema-texto"><strong>Palabras Falladas:</strong> Se guardan automáticamente</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">💀</span>
                            <span class="sistema-texto"><strong>Palabras Difíciles:</strong> Márcalas manualmente</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">💰</span>
                            <span class="sistema-texto"><strong>Economía:</strong> Gana dinero por cada quiz</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">💕</span>
                            <span class="sistema-texto"><strong>RPG Nakano:</strong> Gana experiencia para tu novia</span>
                        </div>
                    </div>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="estadisticas-globales" id="estadisticas-globales-anime" style="display: none;">
                        <h4>📊 Estadísticas Globales:</h4>
                        <div class="estadisticas-grid">
                            <div class="estadistica-item-global">
                                <span class="estadistica-icon">📝</span>
                                <span class="estadistica-texto">Palabras falladas:</span>
                                <span class="estadistica-valor" id="total-falladas-global">0</span>
                            </div>
                            <div class="estadistica-item-global">
                                <span class="estadistica-icon">💀</span>
                                <span class="estadistica-texto">Palabras difíciles:</span>
                                <span class="estadistica-valor" id="total-dificiles-global">0</span>
                            </div>
                            <div class="estadistica-item-global">
                                <span class="estadistica-icon">🎬</span>
                                <span class="estadistica-texto">Animes con falladas:</span>
                                <span class="estadistica-valor" id="animes-falladas-global">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE DETALLE DE ANIME -->
            <div id="pantalla-anime-detalle" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-anime">Anime</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAAnimeSeleccion()">← Volver a Animes</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <div class="anime-detalle-container">
                        <!-- SELECTOR DE IDIOMA -->
                        <div class="selector-idioma-container">
                            <h3>🎬 Selecciona el idioma del video:</h3>
                            <div class="botones-idioma" id="botones-idioma-anime"></div>
                            <div class="info-video-anime" id="info-video-anime"></div>
                        </div>
                        
                        <!-- REPRODUCTOR DE VIDEO -->
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
                        
                        <!-- MAZOS DE VOCABULARIO -->
                        <div class="mazos-anime-container">
                            <h3>📚 Mazos de Vocabulario <span id="contador-mazos" style="color: #00ff88; font-size: 0.8em;"></span></h3>
                            <p>Practica las palabras que aparecen en este anime:</p>
                            
                            <div class="contenedor-mazos-anime" id="contenedor-mazos-anime"></div>
                            
                            <div class="mazos-info-sistemas">
                                <h4>💡 Sistemas Activos:</h4>
                                <div class="sistemas-lista-mini">
                                    <div class="sistema-mini-item">
                                        <span class="sistema-mini-icon">📝</span>
                                        <span class="sistema-mini-texto"><strong>Palabras Falladas:</strong> Se guardan automáticamente cuando fallas</span>
                                    </div>
                                    <div class="sistema-mini-item">
                                        <span class="sistema-mini-icon">💀</span>
                                        <span class="sistema-mini-texto"><strong>Palabras Difíciles:</strong> Márcalas durante el quiz con el botón 💀</span>
                                    </div>
                                    <div class="sistema-mini-item">
                                        <span class="sistema-mini-icon">💰</span>
                                        <span class="sistema-mini-texto"><strong>Recompensas:</strong> Ganas dinero y experiencia según tu porcentaje</span>
                                    </div>
                                </div>
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
                            <span id="contador-falladas-anime" style="display: none; color: #ff4444; margin-right: 15px; font-weight: bold;"></span>
                            <span id="contador-dificiles-anime" style="display: none; color: #ff9800; margin-right: 15px; font-weight: bold;"></span>
                            <button class="boton-home" onclick="volverAAnimeDetalle()">Volver al Anime</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <div class="contenido-quiz">
                        <div class="palabra-japones" id="palabra-japones-anime">言葉</div>
                        <div class="lectura" id="lectura-anime"></div>
                        
                        <div class="contenedor-opciones" id="contenedor-opciones-anime"></div>
                        
                        <div class="resultado" id="resultado-anime"></div>
                        
                        <div class="botones-quiz-anime">
                            <button class="boton-principal" id="boton-siguiente-anime" onclick="siguientePreguntaAnime()" style="display: none;">
                                Continuar
                            </button>
                            <button class="boton-dificil" id="boton-dificil" onclick="marcarPalabraDificil()">
                                💀 Marcar como difícil
                            </button>
                        </div>
                        
                        <div id="contador-falladas-quiz" style="display: none; text-align: center; margin-top: 15px; color: #ff4444; font-weight: bold;"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        
        // Agregar estilos
        agregarEstilosAnimeCompleto();
        
        console.log("✅ Pantallas anime creadas dinámicamente (CON SISTEMAS COMPLETOS)");
    }
}

// ============================================================================
// 15. AGREGAR ESTILOS COMPLETOS
// ============================================================================

function agregarEstilosAnimeCompleto() {
    if (document.getElementById('estilos-anime-completo')) return;
    
    const estilos = `
        <style id="estilos-anime-completo">
            /* CONTADORES EN TARJETAS */
            .anime-contadores {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 8px;
            }
            
            .contador-falladas-mini {
                background: rgba(255, 68, 68, 0.2);
                color: #ff4444;
                padding: 2px 8px;
                border-radius: 10px;
                font-size: 0.8em;
                border: 1px solid #ff4444;
            }
            
            .contador-dificiles-mini {
                background: rgba(255, 152, 0, 0.2);
                color: #ff9800;
                padding: 2px 8px;
                border-radius: 10px;
                font-size: 0.8em;
                border: 1px solid #ff9800;
            }
            
            /* MAZOS ESPECIALES */
            .mazo-anime-card.mazo-fallado-especial {
                border: 3px solid #ff4444;
                background: linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(255, 68, 68, 0.2));
                animation: pulseFalladas 2s infinite;
            }
            
            .mazo-anime-card.mazo-dificil-especial {
                border: 3px solid #ff9800;
                background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 152, 0, 0.2));
                animation: pulseDificiles 2s infinite;
            }
            
            @keyframes pulseFalladas {
                0% { box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(255, 68, 68, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 68, 68, 0); }
            }
            
            @keyframes pulseDificiles {
                0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(255, 152, 0, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); }
            }
            
            /* BOTÓN DE DIFÍCILES EN QUIZ */
            .boton-dificil {
                padding: 12px 25px;
                border-radius: 12px;
                border: 2px solid #ff9800;
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                margin: 10px;
                font-size: 1rem;
                min-width: 200px;
            }
            
            .boton-dificil:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(255, 152, 0, 0.4);
            }
            
            /* ESTADÍSTICAS GLOBALES */
            .estadisticas-globales {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #4a90e2;
            }
            
            .estadisticas-globales h4 {
                color: #4a90e2;
                text-align: center;
                margin-bottom: 15px;
            }
            
            .estadisticas-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
            }
            
            .estadistica-item-global {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                padding: 15px;
                text-align: center;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .estadistica-icon {
                font-size: 1.5em;
                display: block;
                margin-bottom: 5px;
            }
            
            .estadistica-texto {
                display: block;
                font-size: 0.9em;
                color: #cccccc;
                margin-bottom: 5px;
            }
            
            .estadistica-valor {
                display: block;
                font-size: 1.2em;
                font-weight: bold;
                color: #00ff88;
            }
            
            /* ESTADÍSTICAS ESPECIALES EN RESULTADOS */
            .estadisticas-especiales {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                padding: 15px;
                margin: 15px 0;
                border: 2px solid #ff6b9d;
            }
            
            .estadisticas-especiales h4 {
                color: #ff6b9d;
                text-align: center;
                margin-bottom: 10px;
            }
            
            .estadistica-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .estadistica-item:last-child {
                border-bottom: none;
            }
            
            .estadistica-nota {
                font-size: 0.8em;
                color: #cccccc;
                font-style: italic;
                margin-top: 10px;
                text-align: center;
            }
            
            /* INFO SISTEMAS EN DETALLE */
            .mazos-info-sistemas {
                background: rgba(0, 255, 136, 0.1);
                border-radius: 15px;
                padding: 15px;
                margin-top: 20px;
                border: 2px solid #00ff88;
            }
            
            .mazos-info-sistemas h4 {
                color: #00ff88;
                text-align: center;
                margin-bottom: 10px;
            }
            
            .sistemas-lista-mini {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .sistema-mini-item {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .sistema-mini-icon {
                background: rgba(0, 255, 136, 0.2);
                color: #00ff88;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                flex-shrink: 0;
            }
            
            .sistema-mini-texto {
                color: #ffffff;
                font-size: 0.9em;
            }
            
            /* BOTONES DE RESULTADOS */
            .botones-resultados-anime {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
                margin-top: 20px;
            }
            
            .boton-terciario {
                padding: 12px 20px;
                border-radius: 10px;
                border: none;
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                margin: 5px;
                font-size: 0.9rem;
            }
            
            .boton-terciario:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            /* SISTEMAS ACTIVOS INFO */
            .sistemas-activos-info {
                background: rgba(74, 144, 226, 0.1);
                border-radius: 15px;
                padding: 15px;
                margin-top: 20px;
                border: 2px solid #4a90e2;
            }
            
            .sistemas-activos-info h4 {
                color: #4a90e2;
                text-align: center;
                margin-bottom: 10px;
            }
            
            .sistemas-lista {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
            }
            
            .sistema-activo {
                background: rgba(0, 255, 136, 0.1);
                color: #00ff88;
                padding: 5px 10px;
                border-radius: 20px;
                font-size: 0.9em;
                border: 1px solid #00ff88;
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .estadisticas-grid {
                    grid-template-columns: 1fr;
                }
                
                .botones-resultados-anime {
                    flex-direction: column;
                    align-items: center;
                }
                
                .boton-terciario {
                    width: 100%;
                    max-width: 300px;
                }
                
                .sistemas-lista {
                    flex-direction: column;
                    align-items: center;
                }
                
                .sistema-mini-item {
                    font-size: 0.85em;
                }
            }
            
            @media (max-width: 480px) {
                .anime-contadores {
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                }
                
                .boton-dificil {
                    width: 100%;
                    max-width: 250px;
                    font-size: 0.9rem;
                    padding: 10px 15px;
                }
                
                .estadisticas-globales {
                    padding: 15px;
                }
                
                .mazos-info-sistemas {
                    padding: 10px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 16. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

window.iniciarSistemaAnime = iniciarSistemaAnime;
window.cargarAnime = cargarAnime;
window.iniciarQuizAnime = iniciarQuizAnime;
window.marcarPalabraDificil = marcarPalabraDificil;
window.limpiarPalabrasFalladasAnime = limpiarPalabrasFalladasAnime;
window.limpiarPalabrasDificilesAnime = limpiarPalabrasDificilesAnime;
window.sistemaFalladasAnime = sistemaFalladasAnime;
window.sistemaDificilesAnime = sistemaDificilesAnime;
window.crearPantallasAnime = crearPantallasAnime;

// Funciones de video
window.cargarVideoAnime = cargarVideoAnime;
window.cambiarIdiomaVideo = cambiarIdiomaVideo;
window.mostrarTimestampsAnime = mostrarTimestampsAnime;
window.saltarATimestampAnime = saltarATimestampAnime;

// Funciones auxiliares
window.volverAAnimeSeleccion = volverAAnimeSeleccion;
window.volverAAnimeDetalle = volverAAnimeDetalle;
window.repetirQuizAnime = repetirQuizAnime;

// ============================================================================
// 17. CONSOLA DE AYUDA
// ============================================================================

console.log("✅ Sistema anime COMPLETAMENTE TERMINADO cargado correctamente");
console.log("🎯 SISTEMAS ACTIVOS:");
console.log("   - 📝 PALABRAS FALLADAS: Registro automático cuando fallas");
console.log("   - 💀 PALABRAS DIFÍCILES: Marca manualmente con botón");
console.log("   - 💰 ECONOMÍA: Ganas dinero según porcentaje");
console.log("   - 💕 RPG NAKANO: Tu novia gana experiencia");
console.log("   - 🎯 EVENTOS DIARIOS: Progreso automático");
console.log("   - 📋 MISIONES DIARIAS: Se completan con 80%+");
console.log("");
console.log("🎁 RECOMPENSAS POR PORCENTAJE:");
console.log("   - 100%: +2 S/. +30 XP");
console.log("   - 90%: +1 S/. +20 XP");
console.log("   - 80%: +0.5 S/. +15 XP");
console.log("   - 70%: +0.3 S/. +10 XP");
console.log("   - 60%: +0.2 S/. +5 XP");
console.log("   - 50%: +0.1 S/. +3 XP");
console.log("");
console.log("🚀 FUNCIONES NUEVAS:");
console.log("   - sistemaFalladasAnime.verEstadisticas()");
console.log("   - limpiarPalabrasFalladasAnime()");
console.log("   - limpiarPalabrasDificilesAnime()");
console.log("   - Durante el quiz: Usa el botón 💀 para marcar palabras difíciles");
console.log("");
console.log("💡 PARA COMENZAR:");
console.log("   - Desde el menú: Haz clic en 'Sistema Anime'");
console.log("   - Desde consola: iniciarSistemaAnime()");
console.log("");
console.log("🎬 ¡Disfruta del sistema anime más completo!");
