// ============================================================================
// SISTEMA ANIME PARA FABRI - COMPLETAMENTE INTEGRADO CON TODOS LOS SISTEMAS
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
        ]
    }
};

// ============================================================================
// 3. VARIABLES GLOBALES MEJORADAS
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;

// ============================================================================
// 4. NUEVO: SISTEMA DE RECOMPENSAS ANIME INTEGRADO
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
        
        // 5. PALABRAS FALLADAS (si hay incorrectas)
        if (typeof sistemaPalabrasFalladas !== 'undefined' && respuestasIncorrectasAnime > 0) {
            // Las palabras ya se registraron durante el quiz
            console.log(`📝 ${respuestasIncorrectasAnime} palabras falladas registradas`);
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
// 5. FUNCIONES PRINCIPALES - SISTEMA DE ANIME INTEGRADO
// ============================================================================

// Función para iniciar el sistema anime desde el menú principal
function iniciarSistemaAnime() {
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado (COMPLETAMENTE INTEGRADO)");
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
        
        // Contar mazos disponibles (con al menos 1 palabra)
        let mazosDisponibles = 0;
        if (animeVocabulario[animeId]) {
            mazosDisponibles = Object.keys(animeVocabulario[animeId]).filter(mazoId => {
                const mazo = animeVocabulario[animeId][mazoId];
                return mazo && mazo.length >= 1;
            }).length;
        }
        
        // Mostrar sistema integrado
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">${mazosDisponibles} mazos</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-sistemas">
                <span class="sistema-badge economia">💰</span>
                <span class="sistema-badge rpg">💕</span>
                <span class="sistema-badge eventos">🎯</span>
                <span class="sistema-badge misiones">📋</span>
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
    console.log(`🎬 Cargando anime: ${anime.nombre}`);
}

// Función para cargar mazos dinámicamente
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
    
    // Obtener todos los mazos del anime
    const mazos = Object.keys(animeVocabulario[animeId]);
    
    console.log(`🔍 Detectando mazos para ${animeId}:`, mazos);
    
    // Ordenar mazos numéricamente
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
        
        // Verificar si el mazo tiene palabras
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
    
    // Mostrar estadísticas
    const mazosDisponibles = mazos.filter(mazoId => {
        const mazo = animeVocabulario[animeId][mazoId];
        return mazo && mazo.length >= 1;
    }).length;
    
    console.log(`✅ Cargados ${mazos.length} mazos para ${animeId} (${mazosDisponibles} disponibles)`);
    
    // Actualizar contador en la interfaz
    const contadorElement = document.getElementById('contador-mazos');
    if (contadorElement) {
        contadorElement.textContent = `(${mazosDisponibles} disponibles de ${mazos.length})`;
    }
}

// ============================================================================
// 6. FUNCIÓN PARA INICIAR QUIZ ANIME - CON SISTEMAS INTEGRADOS
// ============================================================================

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
        
        console.log(`📝 Iniciando quiz anime: ${animeId} - ${mazoId} (${mazoActualAnime.length} palabras)`);
        console.log(`🎮 Sistemas activos: Economía, RPG Nakano, Eventos, Misiones`);
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
            botonOpcion.onclick = () => verificarRespuestaAnime(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultadosAnime();
    }
}

// Función para verificar respuesta en quiz anime (CON SISTEMAS INTEGRADOS)
function verificarRespuestaAnime(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-anime .opcion');
    const resultado = document.getElementById('resultado-anime');
    const palabraActual = document.getElementById('palabra-japones-anime').textContent;
    
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
        
        // REGISTRAR PALABRA FALLADA EN SISTEMA
        if (typeof sistemaPalabrasFalladas !== 'undefined') {
            sistemaPalabrasFalladas.registrarPalabraFallada(
                palabraActual,
                respuestaSeleccionada,
                respuestaCorrecta,
                lectura,
                opciones
            );
        }
        
        // Mostrar botón "Continuar" para respuestas incorrectas
        document.getElementById('boton-siguiente-anime').style.display = 'block';
    }
}

// Función para pasar a la siguiente pregunta anime
function siguientePreguntaAnime() {
    preguntaActualAnime++;
    mostrarPreguntaAnime();
}

// ============================================================================
// 7. FUNCIÓN PARA MOSTRAR RESULTADOS DEL ANIME - CON TODOS LOS SISTEMAS
// ============================================================================

function mostrarResultadosAnime() {
    const porcentaje = Math.round((respuestasCorrectasAnime / mazoActualAnime.length) * 100);
    const mazoNumero = mazoActualAnime.length > 0 ? 
        Object.keys(animeVocabulario[animeActual]).find(key => 
            animeVocabulario[animeActual][key] === mazoActualAnime
        ) : 'desconocido';
    
    console.log(`📊 Resultados anime: ${porcentaje}% (${respuestasCorrectasAnime}/${mazoActualAnime.length})`);
    
    // APLICAR RECOMPENSAS A TODOS LOS SISTEMAS
    const recompensa = animeRecompensas.aplicarRecompensa(porcentaje, animeActual, mazoNumero);
    
    // Verificar si hay evento diario completado
    let mostrarVideoEvento = false;
    if (typeof eventosDiarios !== 'undefined' && 
        eventosDiarios.estado.completado && 
        eventosDiarios.estado.eventoActual) {
        mostrarVideoEvento = true;
        console.log("🎁 Evento diario completado desde anime - mostrando video de evento");
    }
    
    // Crear pantalla de resultados dinámica
    const resultadosHTML = `
        <div class="resultado-anime-container">
            <h2>🎬 Resultados del Quiz Anime</h2>
            <div class="resultado-anime-detalle">
                <div class="resultado-item">
                    <span class="resultado-label">Anime:</span>
                    <span class="resultado-valor">${animeConfig.animes[animeActual].nombre}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Mazo:</span>
                    <span class="resultado-valor">${mazoNumero}</span>
                </div>
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
                
                <!-- NUEVO: MOSTRAR RECOMPENSAS INTEGRADAS -->
                ${animeRecompensas.mostrarResumenRecompensas(recompensa, porcentaje)}
                
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
                ${respuestasIncorrectasAnime > 0 ? 
                    `<button class="boton-terciario" onclick="practicarFalladasAnime()">
                        📝 Práctica Especial (${respuestasIncorrectasAnime} falladas)
                    </button>` : ''
                }
            </div>
            
            <div class="sistemas-activos-info">
                <h4>🎮 Sistemas activos:</h4>
                <div class="sistemas-lista">
                    <span class="sistema-activo">💰 Economía: +${recompensa.dinero} S/.</span>
                    <span class="sistema-activo">💕 RPG Nakano: +${recompensa.experiencia} XP</span>
                    ${mostrarVideoEvento ? '<span class="sistema-activo">🎯 Evento diario: ¡Completado!</span>' : ''}
                    ${porcentaje >= 80 ? '<span class="sistema-activo">📋 Misión diaria: Registrada</span>' : ''}
                    ${respuestasIncorrectasAnime > 0 ? '<span class="sistema-activo">📝 Palabras falladas: Registradas</span>' : ''}
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
                    <button class="boton-home" onclick="volverAAnimeDetalle()">Volver al Anime</button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                </div>
            </div>
            ${resultadosHTML}
        </div>
    `;
    
    cambiarPantalla('pantalla-resultados-anime');
    
    // IMPORTANTE: Si se completó evento diario, mostrar su video
    if (mostrarVideoEvento && typeof eventosDiarios !== 'undefined') {
        setTimeout(() => {
            eventosDiarios.mostrarVideoRecompensa();
        }, 1000);
    }
}

// NUEVA FUNCIÓN: Práctica especial de palabras falladas en anime
function practicarFalladasAnime() {
    if (typeof sistemaPalabrasFalladas === 'undefined') {
        alert("Sistema de palabras falladas no disponible");
        return;
    }
    
    // Obtener palabras falladas de este quiz específico
    const palabrasFalladas = [];
    
    // Simular la obtención de las palabras falladas
    // En un sistema real, deberíamos haberlas guardado durante el quiz
    if (mazoActualAnime.length > 0) {
        alert("Práctica especial de palabras falladas activada");
        // Aquí iría la lógica para practicar solo las palabras falladas
    }
}

// ============================================================================
// 8. FUNCIONES AUXILIARES INTEGRADAS
// ============================================================================

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

// Función para volver al detalle del anime
function volverAAnimeDetalle() {
    if (animeActual) {
        cargarAnime(animeActual);
    } else {
        cambiarPantalla('pantalla-anime-seleccion');
    }
}

// Función para volver a selección de animes
function volverAAnimeSeleccion() {
    cambiarPantalla('pantalla-anime-seleccion');
}

// ============================================================================
// 9. FUNCIONES DE VIDEO Y TIMESTAMPS (SIN CAMBIOS NECESARIOS)
// ============================================================================

// [Aquí van las funciones de video y timestamps existentes...]
// Función para cargar video con opción de idioma
function cargarVideoAnime(animeId, idioma = 'español') {
    const anime = animeConfig.animes[animeId];
    if (!anime || !anime.videos[idioma]) {
        console.error(`❌ No hay video en ${idioma} para ${animeId}`);
        return;
    }
    
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

// Función para cambiar idioma del video
function cambiarIdiomaVideo(idioma) {
    if (!animeActual) return;
    cargarVideoAnime(animeActual, idioma);
}

// Función para actualizar botones de idioma
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

// Función para mostrar timestamps del video actual
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

// Función para saltar a timestamp específico
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
// 10. FUNCIONES DE NOTIFICACIÓN Y CONSOLA
// ============================================================================

// Función para mostrar notificación
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
// 11. FUNCIÓN PARA CREAR PANTALLAS DINÁMICAS - VERSIÓN MEJORADA CON SISTEMAS
// ============================================================================

function crearPantallasAnime() {
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME - MEJORADA -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME CON SISTEMAS INTEGRADOS</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 SISTEMA ANIME COMPLETO</h1>
                    <p class="subtitulo">Estudia japonés con anime - Todos los sistemas activos</p>
                    
                    <div class="sistemas-info">
                        <div class="sistema-info-item">
                            <span class="sistema-icon">💰</span>
                            <span class="sistema-texto">Economía: Gana dinero por cada quiz</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">💕</span>
                            <span class="sistema-texto">RPG Nakano: Gana experiencia para tu novia</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">🎯</span>
                            <span class="sistema-texto">Eventos Diarios: Completa retos especiales</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">📋</span>
                            <span class="sistema-texto">Misiones Diarias: Progreso automático</span>
                        </div>
                        <div class="sistema-info-item">
                            <span class="sistema-icon">📝</span>
                            <span class="sistema-texto">Palabras Falladas: Registro automático</span>
                        </div>
                    </div>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="recompensas-info">
                        <h4>🎁 Recompensas por porcentaje:</h4>
                        <div class="recompensas-grid">
                            <div class="recompensa-item">
                                <span class="porcentaje">100%</span>
                                <span class="recompensa">💰+2 S/. + 💕+30 XP</span>
                            </div>
                            <div class="recompensa-item">
                                <span class="porcentaje">90%</span>
                                <span class="recompensa">💰+1 S/. + 💕+20 XP</span>
                            </div>
                            <div class="recompensa-item">
                                <span class="porcentaje">80%</span>
                                <span class="recompensa">💰+0.5 S/. + 💕+15 XP</span>
                            </div>
                            <div class="recompensa-item">
                                <span class="porcentaje">70%</span>
                                <span class="recompensa">💰+0.3 S/. + 💕+10 XP</span>
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
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
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
                            
                            <div class="mazos-info">
                                <p><strong>💡 Todos los sistemas activos en cada quiz:</strong></p>
                                <p>• Economía: Ganas dinero según tu porcentaje</p>
                                <p>• RPG Nakano: Tu novia gana experiencia</p>
                                <p>• Eventos Diarios: Progreso automático</p>
                                <p>• Misiones Diarias: Completas objetivos</p>
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
                        
                        <div class="contenedor-opciones" id="contenedor-opciones-anime"></div>
                        
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
        
        console.log("✅ Pantallas anime creadas dinámicamente (CON SISTEMAS INTEGRADOS)");
    }
}

// ============================================================================
// 12. AGREGAR ESTILOS PARA SISTEMAS INTEGRADOS
// ============================================================================

function agregarEstilosAnimeMejorado() {
    if (document.getElementById('estilos-anime-mejorado')) return;
    
    const estilos = `
        <style id="estilos-anime-mejorado">
            /* SISTEMAS INFO */
            .sistemas-info {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin: 20px 0;
                padding: 15px;
                background: rgba(255, 107, 157, 0.1);
                border-radius: 15px;
                border: 2px solid #ff6b9d;
            }
            
            .sistema-info-item {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 8px 0;
            }
            
            .sistema-icon {
                background: rgba(0, 255, 136, 0.2);
                color: #00ff88;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                border: 2px solid #00ff88;
            }
            
            .sistema-texto {
                color: #ffffff;
                flex: 1;
            }
            
            /* RECOMPENSAS INFO */
            .recompensas-info {
                background: rgba(0, 255, 136, 0.1);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #00ff88;
            }
            
            .recompensas-info h4 {
                color: #00ff88;
                margin-bottom: 15px;
                text-align: center;
            }
            
            .recompensas-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 10px;
            }
            
            .recompensa-item {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                padding: 10px;
                text-align: center;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .porcentaje {
                display: block;
                font-weight: bold;
                color: #ff6b9d;
                font-size: 1.1em;
            }
            
            .recompensa {
                display: block;
                font-size: 0.9em;
                color: #00ff88;
            }
            
            /* SISTEMAS EN TARJETAS */
            .anime-sistemas {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .sistema-badge {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.9em;
            }
            
            .sistema-badge.economia {
                background: rgba(255, 215, 0, 0.2);
                color: #ffd700;
                border: 1px solid #ffd700;
            }
            
            .sistema-badge.rpg {
                background: rgba(255, 107, 157, 0.2);
                color: #ff6b9d;
                border: 1px solid #ff6b9d;
            }
            
            .sistema-badge.eventos {
                background: rgba(0, 255, 136, 0.2);
                color: #00ff88;
                border: 1px solid #00ff88;
            }
            
            .sistema-badge.misiones {
                background: rgba(74, 144, 226, 0.2);
                color: #4a90e2;
                border: 1px solid #4a90e2;
            }
            
            /* RECOMPENSAS EN MAZOS */
            .mazo-anime-recompensa {
                display: flex;
                justify-content: center;
                gap: 5px;
                margin: 5px 0;
            }
            
            .recompensa-mini {
                background: rgba(0, 255, 136, 0.1);
                color: #00ff88;
                padding: 2px 6px;
                border-radius: 5px;
                font-size: 0.8em;
                border: 1px solid #00ff88;
            }
            
            /* RECOMPENSA RESUMEN */
            .recompensa-resumen {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                padding: 15px;
                margin: 15px 0;
                border: 2px solid #00ff88;
            }
            
            .recompensa-resumen h4 {
                color: #00ff88;
                text-align: center;
                margin-bottom: 15px;
            }
            
            .recompensa-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .recompensa-item:last-child {
                border-bottom: none;
            }
            
            .recompensa-icon {
                font-size: 1.2em;
                min-width: 30px;
                text-align: center;
            }
            
            .recompensa-texto {
                flex: 1;
                color: #cccccc;
            }
            
            .recompensa-valor {
                color: #00ff88;
                font-weight: bold;
            }
            
            .recompensa-mensaje {
                text-align: center;
                font-style: italic;
                color: #ff6b9d;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
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
            
            /* BOTONES ESPECIALES */
            .boton-terciario {
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 10px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                margin: 5px;
            }
            
            .boton-terciario:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(255, 152, 0, 0.4);
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .sistemas-info {
                    padding: 10px;
                }
                
                .sistema-info-item {
                    font-size: 0.9em;
                }
                
                .recompensas-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .sistemas-lista {
                    flex-direction: column;
                    align-items: center;
                }
            }
            
            @media (max-width: 480px) {
                .recompensas-grid {
                    grid-template-columns: 1fr;
                }
                
                .sistema-icon {
                    width: 25px;
                    height: 25px;
                    font-size: 0.9em;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 13. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

// Hacer funciones disponibles globalmente
window.iniciarSistemaAnime = iniciarSistemaAnime;
window.cargarAnime = cargarAnime;
window.cargarMazosAnime = cargarMazosAnime;
window.iniciarQuizAnime = iniciarQuizAnime;
window.verificarRespuestaAnime = verificarRespuestaAnime;
window.siguientePreguntaAnime = siguientePreguntaAnime;
window.mostrarResultadosAnime = mostrarResultadosAnime;
window.repetirQuizAnime = repetirQuizAnime;
window.volverAAnimeSeleccion = volverAAnimeSeleccion;
window.volverAAnimeDetalle = volverAAnimeDetalle;
window.crearPantallasAnime = crearPantallasAnime;

// Funciones de video
window.cargarVideoAnime = cargarVideoAnime;
window.cambiarIdiomaVideo = cambiarIdiomaVideo;
window.mostrarTimestampsAnime = mostrarTimestampsAnime;
window.saltarATimestampAnime = saltarATimestampAnime;

// NUEVAS funciones para testing
window.verRecompensasAnime = function(porcentaje) {
    return animeRecompensas.calcularRecompensa(porcentaje);
};

window.simularQuizAnime = function(animeId, mazoId, porcentaje) {
    console.log(`🎮 Simulando quiz anime: ${animeId} - ${mazoId} (${porcentaje}%)`);
    const recompensa = animeRecompensas.aplicarRecompensa(porcentaje, animeId, mazoId);
    console.log(`✅ Recompensa aplicada: +${recompensa.dinero} S/. +${recompensa.experiencia} XP`);
    return recompensa;
};

// ============================================================================
// 14. CONSOLA DE AYUDA
// ============================================================================

console.log("✅ Sistema anime COMPLETAMENTE INTEGRADO cargado correctamente");
console.log("🎮 SISTEMAS ACTIVOS:");
console.log("   - 💰 ECONOMÍA: Ganas dinero según tu porcentaje");
console.log("   - 💕 RPG NAKANO: Tu novia gana experiencia");
console.log("   - 🎯 EVENTOS DIARIOS: Progreso automático");
console.log("   - 📋 MISIONES DIARIAS: Se completan con 80%+");
console.log("   - 📝 PALABRAS FALLADAS: Registro automático");
console.log("");
console.log("🎁 RECOMPENSAS POR PORCENTAJE:");
console.log("   - 100%: +2 S/. +30 XP");
console.log("   - 90%: +1 S/. +20 XP");
console.log("   - 80%: +0.5 S/. +15 XP");
console.log("   - 70%: +0.3 S/. +10 XP");
console.log("   - 60%: +0.2 S/. +5 XP");
console.log("   - 50%: +0.1 S/. +3 XP");
console.log("");
console.log("🚀 PARA COMENZAR:");
console.log("   - Usa iniciarSistemaAnime() desde el menú");
console.log("   - O desde consola: iniciarSistemaAnime()");
console.log("");
console.log("🧪 FUNCIONES DE TESTING:");
console.log("   - verRecompensasAnime(95) // Ver recompensa para 95%");
console.log("   - simularQuizAnime('anime1', 'mazo1', 85) // Simular quiz");
console.log("");
console.log("💖 ¡Disfruta del sistema anime completamente integrado!");
