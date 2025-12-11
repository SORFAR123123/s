// ============================================================================
// SISTEMA ANIME PARA FABRI - CON TIMESTAMPS Y VIDEO EN JAPONÉS RAW
// VERSIÓN MEJORADA: DETECCIÓN DINÁMICA DE MAZOS + SISTEMA DE PALABRAS DIFÍCILES
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
    
    palabrasPorMazo: 10,
    idiomaPorDefecto: 'español'
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS ANIMES
// ============================================================================

const animeVocabulario = {
   // ANIME 1 - Quintillizas Nakano
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
    },
    
    'anime3': {
        'mazo1': generarPalabrasGenericas(10)
    },
    
    'anime4': {
        'mazo1': generarPalabrasGenericas(10)
    },
    
    'anime5': {
        'mazo1': generarPalabrasGenericas(10)
    }
};

// ============================================================================
// 3. SISTEMA DE PALABRAS DIFÍCILES
// ============================================================================

// Array global para almacenar palabras difíciles
let palabrasDificiles = [];

// Función para inicializar el sistema de palabras difíciles
function inicializarSistemaPalabrasDificiles() {
    // Reiniciar array de palabras difíciles
    palabrasDificiles = [];
    console.log("📝 Sistema de palabras difíciles inicializado");
}

// Función para marcar/desmarcar una palabra como difícil
function marcarComoDificil(palabra, esDificil = true) {
    if (esDificil) {
        // Verificar si la palabra ya está marcada
        const yaMarcada = palabrasDificiles.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura
        );
        
        if (!yaMarcada) {
            // Clonar la palabra para no modificar el original
            const palabraClonada = {
                ...palabra,
                marcadaComoDificil: true,
                timestamp: new Date().toLocaleTimeString()
            };
            
            palabrasDificiles.push(palabraClonada);
            console.log(`📌 Palabra marcada como difícil: ${palabra.japones} (${palabra.lectura})`);
            mostrarNotificacionAnime(`📌 "${palabra.japones}" marcada como difícil`);
        }
    } else {
        // Quitar de la lista
        const indice = palabrasDificiles.findIndex(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura
        );
        
        if (indice !== -1) {
            palabrasDificiles.splice(indice, 1);
            console.log(`❌ Palabra quitada de difíciles: ${palabra.japones}`);
            mostrarNotificacionAnime(`❌ "${palabra.japones}" quitada de difíciles`);
        }
    }
}

// Función para verificar si una palabra está marcada como difícil
function esPalabraDificil(palabra) {
    return palabrasDificiles.some(p => 
        p.japones === palabra.japones && 
        p.lectura === palabra.lectura
    );
}

// Función para obtener el total de palabras difíciles
function obtenerTotalPalabrasDificiles() {
    return palabrasDificiles.length;
}

// Función para mostrar el botón de palabra difícil
function crearBotonPalabraDificil(palabra) {
    const esDificil = esPalabraDificil(palabra);
    
    const boton = document.createElement('button');
    boton.className = `boton-dificil ${esDificil ? 'dificil-activo' : ''}`;
    boton.innerHTML = esDificil ? '⭐ Quitar de difíciles' : '📌 Marcar como difícil';
    boton.title = esDificil ? 
        `"${palabra.japones}" está marcada como difícil. Haz clic para quitarla.` : 
        `Marcar "${palabra.japones}" como palabra difícil para repasar después`;
    
    boton.onclick = (e) => {
        e.stopPropagation(); // Prevenir interferencia con otros eventos
        
        const nuevaEsDificil = !esPalabraDificil(palabra);
        marcarComoDificil(palabra, nuevaEsDificil);
        
        // Actualizar el botón
        boton.innerHTML = nuevaEsDificil ? '⭐ Quitar de difíciles' : '📌 Marcar como difícil';
        boton.className = `boton-dificil ${nuevaEsDificil ? 'dificil-activo' : ''}`;
        boton.title = nuevaEsDificil ? 
            `"${palabra.japones}" está marcada como difícil. Haz clic para quitarla.` : 
            `Marcar "${palabra.japones}" como palabra difícil para repasar después`;
    };
    
    return boton;
}

// Función para mostrar el mazo de palabras difíciles
function mostrarMazoDificil() {
    if (palabrasDificiles.length === 0) {
        mostrarNotificacionAnime('📝 No hay palabras marcadas como difíciles');
        return false;
    }
    
    // Crear copia de las palabras difíciles
    mazoActualAnime = [...palabrasDificiles];
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
    
    // Actualizar título especial para mazo difícil
    const tituloElement = document.querySelector('#pantalla-quiz-anime .contador');
    if (tituloElement) {
        tituloElement.innerHTML = `📚 MAZO DIFÍCIL: <span id="numero-pregunta-anime">1</span>/<span id="total-preguntas-anime">${mazoActualAnime.length}</span>`;
    } else {
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
    }
    
    // Mostrar primera pregunta
    mostrarPreguntaAnime();
    
    console.log(`📚 Iniciando mazo difícil con ${palabrasDificiles.length} palabras`);
    mostrarNotificacionAnime(`📚 Mazo difícil iniciado: ${palabrasDificiles.length} palabras`);
    
    return true;
}

// Función para reiniciar el mazo difícil
function reiniciarMazoDificil() {
    palabrasDificiles = [];
    console.log("🔄 Mazo difícil reiniciado");
    mostrarNotificacionAnime('🔄 Mazo difícil reiniciado');
}

// ============================================================================
// 4. VARIABLES GLOBALES
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;
let palabraActualIndex = -1; // Para saber qué palabra se está mostrando

// ============================================================================
// 5. FUNCIONES PRINCIPALES - SISTEMA DE ANIME
// ============================================================================

// Función para iniciar el sistema anime desde el menú principal
function iniciarSistemaAnime() {
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    inicializarSistemaPalabrasDificiles();
    console.log("🎬 Sistema anime iniciado (con sistema de palabras difíciles)");
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
        
        // Contar mazos disponibles
        let mazosDisponibles = 0;
        if (animeVocabulario[animeId]) {
            mazosDisponibles = Object.keys(animeVocabulario[animeId]).filter(mazoId => {
                const mazo = animeVocabulario[animeId][mazoId];
                return mazo && mazo.length >= 1;
            }).length;
        }
        
        const totalMazos = animeVocabulario[animeId] ? Object.keys(animeVocabulario[animeId]).length : 0;
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">${mazosDisponibles} mazos disponibles de ${totalMazos}</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-extra-info">
                <span class="anime-idiomas">🎬 2 idiomas</span>
                <span class="anime-timestamps-count">⏱️ Timestamps</span>
                <span class="anime-mazos-count">📚 ${mazosDisponibles}/${totalMazos} mazos</span>
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
    
    // Reiniciar mazo difícil si se cambia de anime
    reiniciarMazoDificil();
    
    // Cargar mazos de este anime
    cargarMazosAnime(animeId);
    
    // Cargar el video
    cargarVideoAnime(animeId, idiomaVideoActual);
    
    cambiarPantalla('pantalla-anime-detalle');
    console.log(`🎬 Cargando anime: ${anime.nombre} (${idiomaVideoActual})`);
}

// ============================================================================
// 6. FUNCIÓN MODIFICADA: Cargar mazos dinámicamente
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
    
    // Obtener todos los mazos del anime
    const mazos = Object.keys(animeVocabulario[animeId]);
    
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
            <div class="mazo-anime-info">${disponible ? '✅ Disponible' : '🚧 En preparación'}</div>
        `;
        
        contenedor.appendChild(div);
    });
    
    // Agregar botón especial para mazo difícil (si hay palabras)
    if (obtenerTotalPalabrasDificiles() > 0) {
        const divDificil = document.createElement('div');
        divDificil.className = 'mazo-anime-card mazo-dificil-especial';
        divDificil.onclick = () => mostrarMazoDificil();
        divDificil.title = `Repasar ${obtenerTotalPalabrasDificiles()} palabras marcadas como difíciles`;
        
        divDificil.innerHTML = `
            <div class="mazo-anime-numero" style="color: #ffcc00;">⭐ DIFÍCILES</div>
            <div class="mazo-anime-texto" style="color: #ffcc00;">${obtenerTotalPalabrasDificiles()} palabra${obtenerTotalPalabrasDificiles() !== 1 ? 's' : ''}</div>
            <div class="mazo-anime-info" style="color: #ffcc00;">📌 Haz clic para repasar</div>
        `;
        
        contenedor.appendChild(divDificil);
    }
    
    // Mostrar estadísticas
    const contadorElement = document.getElementById('contador-mazos');
    if (contadorElement) {
        const mazosDisponibles = mazos.filter(mazoId => {
            const mazo = animeVocabulario[animeId][mazoId];
            return mazo && mazo.length >= 1;
        }).length;
        contadorElement.textContent = `(${mazosDisponibles} disponibles de ${mazos.length})`;
    }
}

// ============================================================================
// 7. FUNCIONES DEL QUIZ ANIME MEJORADAS
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

// FUNCIÓN MEJORADA: Mostrar una pregunta del quiz anime CON BOTÓN DE PALABRA DIFÍCIL
function mostrarPreguntaAnime() {
    if (preguntaActualAnime < mazoActualAnime.length) {
        const pregunta = mazoActualAnime[preguntaActualAnime];
        palabraActualIndex = preguntaActualAnime;
        
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
        
        // Crear contenedor para el botón de palabra difícil
        const contenedorBotonDificil = document.createElement('div');
        contenedorBotonDificil.className = 'contenedor-boton-dificil';
        
        // Agregar botón de palabra difícil
        const botonDificil = crearBotonPalabraDificil(pregunta);
        contenedorBotonDificil.appendChild(botonDificil);
        contenedorOpciones.appendChild(contenedorBotonDificil);
        
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
    
    // Deshabilitar también el botón de palabra difícil
    const botonDificil = document.querySelector('.boton-dificil');
    if (botonDificil) {
        botonDificil.disabled = true;
    }
    
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

// ============================================================================
// 8. FUNCIÓN MEJORADA: Mostrar resultados del quiz anime CON MAZO DIFÍCIL
// ============================================================================

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
                
                <!-- SECCIÓN DE PALABRAS DIFÍCILES -->
                ${obtenerTotalPalabrasDificiles() > 0 ? `
                <div class="seccion-dificil">
                    <h3 style="color: #ffcc00; margin-top: 20px;">⭐ Palabras marcadas como difíciles</h3>
                    <p>Tienes ${obtenerTotalPalabrasDificiles()} palabra${obtenerTotalPalabrasDificiles() !== 1 ? 's' : ''} marcada${obtenerTotalPalabrasDificiles() !== 1 ? 's' : ''} como difícil.</p>
                    <div class="lista-palabras-dificiles">
                        ${palabrasDificiles.map(p => `
                            <div class="palabra-dificil-item">
                                <span class="palabra-jp">${p.japones}</span>
                                <span class="palabra-lectura">(${p.lectura})</span>
                                <span class="palabra-significado">${p.opciones[p.respuesta]}</span>
                            </div>
                        `).join('')}
                    </div>
                    <button class="boton-dificil-especial" onclick="mostrarMazoDificil()">
                        📚 Repasar palabras difíciles (${obtenerTotalPalabrasDificiles()})
                    </button>
                    <button class="boton-dificil-limpiar" onclick="reiniciarMazoDificil(); location.reload();">
                        🗑️ Limpiar todas las palabras difíciles
                    </button>
                </div>
                ` : `
                <div class="seccion-dificil-vacio">
                    <p style="color: #cccccc; margin-top: 20px;">
                        💡 <strong>Consejo:</strong> Puedes marcar palabras como difíciles durante el quiz 
                        usando el botón 📌. Luego podrás repasarlas todas juntas.
                    </p>
                </div>
                `}
            </div>
            
            <div class="botones-resultados-anime">
                <button class="boton-principal" onclick="volverAAnimeDetalle()">
                    Volver al Anime
                </button>
                <button class="boton-secundario" onclick="repetirQuizAnime()">
                    Repetir Quiz
                </button>
                ${obtenerTotalPalabrasDificiles() > 0 ? `
                <button class="boton-dificil-resultados" onclick="mostrarMazoDificil()">
                    📚 Repasar difíciles
                </button>
                ` : ''}
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

// ============================================================================
// 9. FUNCIONES DE NAVEGACIÓN
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
// 10. FUNCIONES ADICIONALES (VIDEO, TIMESTAMPS, ETC.)
// ============================================================================

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

// ============================================================================
// 11. FUNCIONES DE NOTIFICACIÓN
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
// 12. FUNCIONES DE CONSOLA PARA TESTING
// ============================================================================

window.verPalabrasDificiles = function() {
    console.log("⭐ PALABRAS DIFÍCILES:");
    if (palabrasDificiles.length === 0) {
        console.log("📭 No hay palabras marcadas como difíciles");
    } else {
        palabrasDificiles.forEach((palabra, index) => {
            console.log(`${index + 1}. ${palabra.japones} (${palabra.lectura}) - ${palabra.opciones[palabra.respuesta]}`);
        });
    }
    console.log(`Total: ${palabrasDificiles.length} palabra${palabrasDificiles.length !== 1 ? 's' : ''}`);
};

window.agregarPalabraDificilTest = function() {
    const palabrasTest = [
        { japones: '難しい', lectura: 'muzukashii', opciones: ['Difícil', 'Fácil', 'Simple', 'Complejo'], respuesta: 0 },
        { japones: '美しい', lectura: 'utsukushii', opciones: ['Hermoso', 'Feo', 'Normal', 'Extraño'], respuesta: 0 },
        { japones: '速い', lectura: 'hayai', opciones: ['Rápido', 'Lento', 'Medio', 'Variable'], respuesta: 0 }
    ];
    
    const palabra = palabrasTest[Math.floor(Math.random() * palabrasTest.length)];
    marcarComoDificil(palabra, true);
    
    console.log(`✅ Palabra difícil de test agregada: ${palabra.japones}`);
    return palabra.japones;
};

window.reiniciarPalabrasDificiles = function() {
    if (confirm("¿Estás seguro de reiniciar TODAS las palabras difíciles?")) {
        reiniciarMazoDificil();
        console.log("✅ Palabras difíciles reiniciadas");
        return true;
    }
    return false;
};

// ============================================================================
// 13. FUNCIÓN PARA CREAR PANTALLAS DINÁMICAS - VERSIÓN COMPLETA
// ============================================================================

function crearPantallasAnime() {
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME CON SISTEMA DE PALABRAS DIFÍCILES</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 VIDEOS PARA FABRI</h1>
                    <p class="subtitulo">Selecciona un anime - Con sistema de palabras difíciles 📌</p>
                    
                    <div class="info-sistema-dificil">
                        <div class="sistema-dificil-item">
                            <span class="dificil-badge">📌 Sistema de palabras difíciles</span>
                            <span>Marca palabras durante el quiz y repásalas después</span>
                        </div>
                    </div>
                    
                    <div class="contenedor-animes" id="contenedor-animes"></div>
                    
                    <div class="info-anime">
                        <p>📌 <strong>NUEVO:</strong> Sistema de palabras difíciles</p>
                        <p>• Marca palabras como difíciles durante el quiz</p>
                        <p>• Se agregan automáticamente a un mazo especial</p>
                        <p>• Repasa todas las palabras difíciles al final</p>
                        <p>• El mazo difícil se reinicia al cambiar de anime</p>
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
                        <div class="selector-idioma-container">
                            <h3>🎬 Selecciona el idioma del video:</h3>
                            <div class="botones-idioma" id="botones-idioma-anime"></div>
                        </div>
                        
                        <div class="video-anime-container">
                            <div class="video-container-anime">
                                <iframe id="video-anime" width="100%" height="315" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen title="Video del anime">
                                </iframe>
                            </div>
                            <p class="video-desc" id="descripcion-anime">Mira el video y luego practica el vocabulario</p>
                        </div>
                        
                        <div class="mazos-anime-container">
                            <h3>📚 Mazos de Vocabulario <span id="contador-mazos" style="color: #00ff88; font-size: 0.8em;"></span></h3>
                            <p>Practica las palabras que aparecen en este anime:</p>
                            <div class="contenedor-mazos-anime" id="contenedor-mazos-anime"></div>
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
        agregarEstilosAnimeCompletos();
        console.log("✅ Pantallas anime creadas dinámicamente");
    }
}

// ============================================================================
// 14. ESTILOS COMPLETOS PARA EL SISTEMA ANIME
// ============================================================================

function agregarEstilosAnimeCompletos() {
    if (document.getElementById('estilos-anime-completos')) return;
    
    const estilos = `
        <style id="estilos-anime-completos">
            /* ESTILOS PARA EL SISTEMA DE PALABRAS DIFÍCILES */
            .contenedor-boton-dificil {
                display: flex;
                justify-content: center;
                margin: 15px 0;
                padding: 10px;
            }
            
            .boton-dificil {
                background: rgba(255, 204, 0, 0.2);
                color: #ffcc00;
                border: 2px solid #ffcc00;
                padding: 10px 20px;
                border-radius: 10px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .boton-dificil:hover {
                background: rgba(255, 204, 0, 0.4);
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(255, 204, 0, 0.3);
            }
            
            .boton-dificil.dificil-activo {
                background: linear-gradient(135deg, #ffcc00, #ffaa00);
                color: #000;
                border-color: #ffaa00;
                box-shadow: 0 0 15px rgba(255, 204, 0, 0.6);
            }
            
            .boton-dificil.dificil-activo:hover {
                background: linear-gradient(135deg, #ffaa00, #ff8800);
            }
            
            /* MAZO DIFÍCIL ESPECIAL EN LA LISTA */
            .mazo-dificil-especial {
                border: 3px solid #ffcc00 !important;
                background: rgba(255, 204, 0, 0.1) !important;
                animation: pulse-dificil 2s infinite;
            }
            
            @keyframes pulse-dificil {
                0%, 100% { box-shadow: 0 0 5px rgba(255, 204, 0, 0.3); }
                50% { box-shadow: 0 0 20px rgba(255, 204, 0, 0.6); }
            }
            
            /* SECCIÓN DE PALABRAS DIFÍCILES EN RESULTADOS */
            .seccion-dificil {
                background: rgba(255, 204, 0, 0.1);
                border-radius: 15px;
                padding: 20px;
                margin-top: 20px;
                border: 2px solid #ffcc00;
            }
            
            .lista-palabras-dificiles {
                max-height: 200px;
                overflow-y: auto;
                margin: 15px 0;
                padding: 10px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
            }
            
            .palabra-dificil-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                margin: 5px 0;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border-left: 3px solid #ffcc00;
            }
            
            .palabra-jp {
                font-weight: bold;
                color: #ffcc00;
                min-width: 80px;
            }
            
            .palabra-lectura {
                color: #cccccc;
                font-style: italic;
                min-width: 100px;
            }
            
            .palabra-significado {
                color: #00ff88;
                flex: 1;
                text-align: right;
            }
            
            .boton-dificil-especial {
                background: linear-gradient(135deg, #ffcc00, #ffaa00);
                color: #000;
                border: none;
                padding: 12px 25px;
                border-radius: 10px;
                font-weight: bold;
                cursor: pointer;
                margin: 10px 5px;
                width: 100%;
                transition: all 0.3s ease;
            }
            
            .boton-dificil-especial:hover {
                background: linear-gradient(135deg, #ffaa00, #ff8800);
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(255, 204, 0, 0.5);
            }
            
            .boton-dificil-limpiar {
                background: rgba(255, 68, 68, 0.2);
                color: #ff4444;
                border: 2px solid #ff4444;
                padding: 10px 20px;
                border-radius: 10px;
                font-weight: bold;
                cursor: pointer;
                margin: 5px;
                width: 100%;
                transition: all 0.3s ease;
            }
            
            .boton-dificil-limpiar:hover {
                background: rgba(255, 68, 68, 0.4);
                transform: translateY(-3px);
            }
            
            .boton-dificil-resultados {
                background: linear-gradient(135deg, #ffcc00, #ffaa00);
                color: #000;
                border: none;
                padding: 10px 20px;
                border-radius: 10px;
                font-weight: bold;
                cursor: pointer;
                margin: 5px;
                transition: all 0.3s ease;
            }
            
            .boton-dificil-resultados:hover {
                background: linear-gradient(135deg, #ffaa00, #ff8800);
            }
            
            /* INFO SISTEMA DIFÍCIL */
            .info-sistema-dificil {
                background: rgba(255, 204, 0, 0.1);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid #ffcc00;
                text-align: center;
            }
            
            .sistema-dificil-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
            
            .dificil-badge {
                background: linear-gradient(135deg, #ffcc00, #ffaa00);
                color: #000;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 1.1em;
            }
            
            .sistema-dificil-item span:last-child {
                color: #cccccc;
                font-size: 0.9em;
            }
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .palabra-dificil-item {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 5px;
                }
                
                .palabra-significado {
                    text-align: left;
                    width: 100%;
                }
                
                .boton-dificil {
                    padding: 8px 15px;
                    font-size: 0.9em;
                }
                
                .boton-dificil-especial,
                .boton-dificil-limpiar {
                    padding: 10px 15px;
                    font-size: 0.9em;
                }
            }
            
            @media (max-width: 480px) {
                .seccion-dificil {
                    padding: 15px;
                }
                
                .boton-dificil {
                    width: 100%;
                    justify-content: center;
                }
                
                .dificil-badge {
                    font-size: 1em;
                    padding: 8px 15px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 15. FUNCIONES AUXILIARES
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
// 16. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

// Hacer funciones disponibles globalmente
window.iniciarSistemaAnime = iniciarSistemaAnime;
window.cargarAnime = cargarAnime;
window.iniciarQuizAnime = iniciarQuizAnime;
window.verificarRespuestaAnime = verificarRespuestaAnime;
window.siguientePreguntaAnime = siguientePreguntaAnime;
window.volverAAnimeSeleccion = volverAAnimeSeleccion;
window.volverAAnimeDetalle = volverAAnimeDetalle;
window.repetirQuizAnime = repetirQuizAnime;
window.crearPantallasAnime = crearPantallasAnime;

// Funciones del sistema de palabras difíciles
window.marcarComoDificil = marcarComoDificil;
window.mostrarMazoDificil = mostrarMazoDificil;
window.reiniciarMazoDificil = reiniciarMazoDificil;
window.obtenerTotalPalabrasDificiles = obtenerTotalPalabrasDificiles;

// Funciones de consola para testing
window.verPalabrasDificiles = verPalabrasDificiles;
window.agregarPalabraDificilTest = agregarPalabraDificilTest;
window.reiniciarPalabrasDificiles = reiniciarPalabrasDificiles;

console.log("✅ Sistema anime MEJORADO cargado correctamente");
console.log("📌 NUEVO: Sistema de palabras difíciles activado");
console.log("🎬 Características:");
console.log("   - ✅ Marca palabras como difíciles durante el quiz");
console.log("   - ✅ Botón 📌 en cada pregunta para marcar/desmarcar");
console.log("   - ✅ Mazo especial de palabras difíciles");
console.log("   - ✅ Repasa todas las palabras difíciles al final");
console.log("   - ✅ El mazo difícil se reinicia al cambiar de anime");
console.log("");
console.log("🔧 Comandos de consola:");
console.log("   - verPalabrasDificiles() - Ver palabras marcadas");
console.log("   - agregarPalabraDificilTest() - Agregar palabra de test");
console.log("   - reiniciarPalabrasDificiles() - Limpiar todas");
console.log("");
console.log("💡 Usa iniciarSistemaAnime() para comenzar");
