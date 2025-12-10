// ============================================================================
// SISTEMA ANIME PARA FABRI - CON TIMESTAMPS, VIDEO EN JAPONÉS RAW Y MAZO DE PALABRAS DIFÍCILES
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
    mazosPorAnime: 5,
    palabrasPorMazo: 10,
    
    // Idioma por defecto
    idiomaPorDefecto: 'español'
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS ANIMES
// ============================================================================

const animeVocabulario = {
    // ANIME 1 - Quintillizas Nakano
    'anime1': {
        'mazo1': [
            { japones: 'こちらこそ', lectura: 'kochirakozo', opciones: ['es mi culpa', 'Hermanos', 'Amigas', 'Compañeras'], respuesta: 0 },
            { japones: '恋愛', lectura: 'renai', opciones: ['Amor romántico', 'Amistad', 'Familia', 'Respeto'], respuesta: 0 },
            { japones: '勉強', lectura: 'benkyou', opciones: ['Estudio', 'Trabajo', 'Juego', 'Descanso'], respuesta: 0 },
            { japones: '試験', lectura: 'shiken', opciones: ['Examen', 'Tarea', 'Proyecto', 'Práctica'], respuesta: 0 },
            { japones: '家庭教師', lectura: 'kateikyoushi', opciones: ['Tutor', 'Profesor', 'Estudiante', 'Director'], respuesta: 0 },
            { japones: '笑顔', lectura: 'egao', opciones: ['Sonrisa', 'Llanto', 'Enojo', 'Sorpresa'], respuesta: 0 },
            { japones: '約束', lectura: 'yakusoku', opciones: ['Promesa', 'Mentira', 'Secreto', 'Verdad'], respuesta: 0 },
            { japones: '心配', lectura: 'shinpai', opciones: ['Preocupación', 'Alegría', 'Calma', 'Confianza'], respuesta: 0 },
            { japones: '勇気', lectura: 'yuuki', opciones: ['Valentía', 'Miedo', 'Duda', 'Timidez'], respuesta: 0 },
            { japones: '幸せ', lectura: 'shiawase', opciones: ['Felicidad', 'Tristeza', 'Enojo', 'Aburrimiento'], respuesta: 0 }
        ],
        'mazo2': [
            { japones: '想い', lectura: 'omoi', opciones: ['Sentimientos', 'Pensamientos', 'Palabras', 'Acciones'], respuesta: 0 },
            { japones: '支える', lectura: 'sasaeru', opciones: ['Apoyar', 'Criticar', 'Ignorar', 'Abandonar'], respuesta: 0 },
            { japones: '成長', lectura: 'seichou', opciones: ['Crecimiento', 'Estancamiento', 'Retroceso', 'Cambio'], respuesta: 0 },
            { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Historia'], respuesta: 0 },
            { japones: '信じる', lectura: 'shinjiru', opciones: ['Creer', 'Dudar', 'Negar', 'Olvidar'], respuesta: 0 },
            { japones: '特別', lectura: 'tokubetsu', opciones: ['Especial', 'Común', 'Normal', 'Ordinario'], respuesta: 0 },
            { japones: '大切', lectura: 'taisetsu', opciones: ['Importante', 'Insignificante', 'Común', 'Despreciable'], respuesta: 0 },
            { japones: '頑張る', lectura: 'ganbaru', opciones: ['Esforzarse', 'Rendirse', 'Descansar', 'Evitar'], respuesta: 0 },
            { japones: '絆', lectura: 'kizuna', opciones: ['Vínculo', 'Separación', 'Distancia', 'Aislamiento'], respuesta: 0 },
            { japones: '恋', lectura: 'koi', opciones: ['Amor', 'Odio', 'Indiferencia', 'Amistad'], respuesta: 0 }
        ],
        'mazo3': [
            { japones: '涙', lectura: 'namida', opciones: ['Lágrimas', 'Risa', 'Sonrisa', 'Grito'], respuesta: 0 },
            { japones: '優しさ', lectura: 'yasashisa', opciones: ['Amabilidad', 'Crueldad', 'Indiferencia', 'Dureza'], respuesta: 0 },
            { japones: '守る', lectura: 'mamoru', opciones: ['Proteger', 'Atacar', 'Abandonar', 'Ignorar'], respuesta: 0 },
            { japones: '夢', lectura: 'yume', opciones: ['Sueño', 'Pesadilla', 'Realidad', 'Fantasía'], respuesta: 0 },
            { japones: '希望', lectura: 'kibou', opciones: ['Esperanza', 'Desesperación', 'Duda', 'Miedo'], respuesta: 0 },
            { japones: '努力', lectura: 'doryoku', opciones: ['Esfuerzo', 'Flojera', 'Suerte', 'Talento'], respuesta: 0 },
            { japones: '成功', lectura: 'seikou', opciones: ['Éxito', 'Fracaso', 'Intento', 'Esfuerzo'], respuesta: 0 },
            { japones: '失敗', lectura: 'shippai', opciones: ['Fallo', 'Logro', 'Victoria', 'Triunfo'], respuesta: 0 },
            { japones: '挑戦', lectura: 'chousen', opciones: ['Desafío', 'Rendición', 'Evitación', 'Rechazo'], respuesta: 0 },
            { japones: '勝利', lectura: 'shouri', opciones: ['Victoria', 'Derrota', 'Empate', 'Abandono'], respuesta: 0 }
        ],
        'mazo4': [
            { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Amigos', 'Compañeros', 'Vecinos'], respuesta: 0 },
            { japones: '愛情', lectura: 'aijou', opciones: ['Afecto', 'Odio', 'Indiferencia', 'Respeto'], respuesta: 0 },
            { japones: '理解', lectura: 'rikai', opciones: ['Comprensión', 'Confusión', 'Duda', 'Ignorancia'], respuesta: 0 },
            { japones: '誤解', lectura: 'gokai', opciones: ['Malentendido', 'Comprensión', 'Acuerdo', 'Claridad'], respuesta: 0 },
            { japones: '喧嘩', lectura: 'kenka', opciones: ['Pelea', 'Paz', 'Acuerdo', 'Armonía'], respuesta: 0 },
            { japones: '仲直り', lectura: 'nakanaori', opciones: ['Reconciliación', 'Separación', 'Pelea', 'Distancia'], respuesta: 0 },
            { japones: '安心', lectura: 'anshin', opciones: ['Tranquilidad', 'Ansiedad', 'Preocupación', 'Estrés'], respuesta: 0 },
            { japones: '不安', lectura: 'fuan', opciones: ['Inseguridad', 'Confianza', 'Seguridad', 'Certeza'], respuesta: 0 },
            { japones: '信頼', lectura: 'shinrai', opciones: ['Confianza', 'Desconfianza', 'Duda', 'Sospecha'], respuesta: 0 },
            { japones: '尊敬', lectura: 'sonkei', opciones: ['Respeto', 'Desprecio', 'Indiferencia', 'Menosprecio'], respuesta: 0 }
        ],
        'mazo5': [
            { japones: '変化', lectura: 'henka', opciones: ['Cambio', 'Permanencia', 'Estabilidad', 'Constancia'], respuesta: 0 },
            { japones: '進歩', lectura: 'shinpo', opciones: ['Progreso', 'Regresión', 'Estancamiento', 'Inmovilidad'], respuesta: 0 },
            { japones: '発見', lectura: 'hakken', opciones: ['Descubrimiento', 'Pérdida', 'Ocultamiento', 'Ignorancia'], respuesta: 0 },
            { japones: '秘密', lectura: 'himitsu', opciones: ['Secreto', 'Publicidad', 'Revelación', 'Transparencia'], respuesta: 0 },
            { japones: '真実', lectura: 'shinjitsu', opciones: ['Verdad', 'Mentira', 'Ficción', 'Invento'], respuesta: 0 },
            { japones: '嘘', lectura: 'uso', opciones: ['Mentira', 'Verdad', 'Hecho', 'Realidad'], respuesta: 0 },
            { japones: '選択', lectura: 'sentaku', opciones: ['Elección', 'Obligación', 'Azar', 'Destino'], respuesta: 0 },
            { japones: '決断', lectura: 'ketsudan', opciones: ['Decisión', 'Duda', 'Indecisión', 'Vacilación'], respuesta: 0 },
            { japones: '責任', lectura: 'sekinin', opciones: ['Responsabilidad', 'Irresponsabilidad', 'Libertad', 'Despreocupación'], respuesta: 0 },
            { japones: '自由', lectura: 'jiyuu', opciones: ['Libertad', 'Esclavitud', 'Opresión', 'Restricción'], respuesta: 0 }
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
// 4. VARIABLES GLOBALES MEJORADAS - CON MAZO DE PALABRAS DIFÍCILES
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;

// NUEVAS VARIABLES PARA EL MAZO DE PALABRAS DIFÍCILES
let mazoPalabrasDificilesAnime = []; // Array para almacenar palabras marcadas como difíciles
let mazoDificilActivo = false; // Indica si estamos en el mazo difícil o en el normal

// ============================================================================
// 5. FUNCIONES PRINCIPALES - SISTEMA DE ANIME
// ============================================================================

// Función para iniciar el sistema anime desde el menú principal
function iniciarSistemaAnime() {
    // Reiniciar mazo difícil al entrar al sistema anime
    reiniciarMazoDificilAnime();
    
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado (con mazo de palabras difíciles)");
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
            <div class="anime-info">5 mazos de vocabulario</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-extra-info">
                <span class="anime-idiomas">🎬 2 idiomas</span>
                <span class="anime-timestamps-count">⏱️ ${totalTimestamps} timestamps</span>
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
}

// FUNCIÓN AÑADIDA: Cargar los mazos de un anime
function cargarMazosAnime(animeId) {
    const contenedor = document.getElementById('contenedor-mazos-anime');
    if (!contenedor) {
        console.error("❌ No se encontró el contenedor de mazos anime");
        return;
    }
    
    contenedor.innerHTML = '';
    
    for (let i = 1; i <= animeConfig.mazosPorAnime; i++) {
        const mazoId = `mazo${i}`;
        const div = document.createElement('div');
        div.className = 'mazo-anime-card';
        div.onclick = () => iniciarQuizAnime(animeId, mazoId);
        
        // Verificar si el mazo tiene palabras
        const tienePalabras = animeVocabulario[animeId] && 
                             animeVocabulario[animeId][mazoId] && 
                             animeVocabulario[animeId][mazoId].length > 0;
        
        div.innerHTML = `
            <div class="mazo-anime-numero">Mazo ${i}</div>
            <div class="mazo-anime-texto">${tienePalabras ? '10 palabras' : 'Próximamente'}</div>
            <div class="mazo-anime-info">${tienePalabras ? '✅ Disponible' : '🚧 En preparación'}</div>
        `;
        
        if (!tienePalabras) {
            div.classList.add('mazo-inactivo');
            div.onclick = null;
        }
        
        contenedor.appendChild(div);
    }
}

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
// 6. FUNCIÓN CORREGIDA PARA MOSTRAR PREGUNTA ANIME - LIMPIA EL BOTÓN ANTERIOR
// ============================================================================

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
        
        // Limpiar opciones anteriores y el botón de difícil SI EXISTE
        const contenedorOpciones = document.getElementById('contenedor-opciones-anime');
        contenedorOpciones.innerHTML = '';
        
        // También limpiar cualquier botón de difícil existente fuera del contenedor
        const botonDificilExistente = document.querySelector('.boton-dificil');
        if (botonDificilExistente) {
            botonDificilExistente.remove();
        }
        
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
            botonOpcion.onclick = () => verificarRespuestaAnime(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta);
            contenedorOpciones.appendChild(botonOpcion);
        });
        
        // ============================================================================
        // NUEVO: AGREGAR BOTÓN "✰ AGREGAR A PALABRAS DIFÍCILES" SI ESTAMOS EN MAZO NORMAL
        // ============================================================================
        if (!mazoDificilActivo) {
            // Crear contenedor para el botón de difícil (fuera del contenedor de opciones)
            const contenedorPadre = contenedorOpciones.parentNode;
            
            // Crear un div contenedor para el botón de difícil
            const contenedorBotonDificil = document.createElement('div');
            contenedorBotonDificil.className = 'contenedor-boton-dificil';
            contenedorBotonDificil.style.cssText = 'margin: 15px 0; text-align: center;';
            
            const botonDificil = document.createElement('button');
            botonDificil.className = 'boton-dificil';
            botonDificil.innerHTML = '✰ Marcar como difícil';
            botonDificil.onclick = () => agregarAPalabrasDificilesAnime(pregunta);
            botonDificil.style.cssText = `
                margin: 0 auto;
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 10px rgba(255, 152, 0, 0.3);
            `;
            
            botonDificil.onmouseover = function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 15px rgba(255, 152, 0, 0.4)';
            };
            
            botonDificil.onmouseout = function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 10px rgba(255, 152, 0, 0.3)';
            };
            
            contenedorBotonDificil.appendChild(botonDificil);
            
            // Insertar el botón después del contenedor de opciones
            contenedorPadre.insertBefore(contenedorBotonDificil, contenedorOpciones.nextSibling);
        }
    } else {
        mostrarResultadosAnime();
    }
}

// ============================================================================
// 7. NUEVAS FUNCIONES PARA EL MAZO DE PALABRAS DIFÍCILES
// ============================================================================

// Función para agregar una palabra al mazo de palabras difíciles
function agregarAPalabrasDificilesAnime(palabra) {
    // Verificar que no estemos en el mazo difícil
    if (mazoDificilActivo) {
        mostrarNotificacionAnime('⚠️ No puedes marcar palabras como difíciles en el mazo de palabras difíciles');
        return;
    }
    
    // Verificar si la palabra ya está en el mazo difícil
    const yaExiste = mazoPalabrasDificilesAnime.some(p => p.japones === palabra.japones);
    
    if (yaExiste) {
        mostrarNotificacionAnime('✅ Esta palabra ya está en tu mazo de palabras difíciles');
        return;
    }
    
    // Agregar la palabra al mazo difícil (hacemos una copia)
    const palabraCopia = {
        ...palabra,
        marcadaComoDificil: true // Añadimos una bandera
    };
    
    mazoPalabrasDificilesAnime.push(palabraCopia);
    
    // Mostrar notificación
    mostrarNotificacionAnime(`✰ "${palabra.japones}" agregada al mazo de palabras difíciles`);
    
    console.log(`📝 Palabra agregada a mazo difícil: ${palabra.japones}`);
    console.log(`📊 Total palabras difíciles: ${mazoPalabrasDificilesAnime.length}`);
}

// Función para iniciar el mazo de palabras difíciles
function iniciarMazoDificilAnime() {
    // Verificar si hay palabras en el mazo difícil
    if (mazoPalabrasDificilesAnime.length === 0) {
        mostrarNotificacionAnime('📭 No hay palabras en tu mazo de palabras difíciles');
        return false;
    }
    
    // Cambiar a modo mazo difícil
    mazoDificilActivo = true;
    
    // Copiar las palabras difíciles al mazo actual
    mazoActualAnime = [...mazoPalabrasDificilesAnime];
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
    
    // Actualizar contador con indicador especial
    document.getElementById('numero-pregunta-anime').textContent = 1;
    document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
    
    // Cambiar título para indicar que es el mazo difícil
    const contadorElement = document.querySelector('#pantalla-quiz-anime .contador');
    if (contadorElement) {
        contadorElement.innerHTML = `📚 MAZO DE PALABRAS DIFÍCILES: <span id="numero-pregunta-anime">1</span>/<span id="total-preguntas-anime">${mazoActualAnime.length}</span>`;
    }
    
    // Mostrar primera pregunta
    mostrarPreguntaAnime();
    
    console.log(`📝 Iniciando mazo DIFÍCIL con ${mazoPalabrasDificilesAnime.length} palabras`);
    return true;
}

// Función para reiniciar el mazo de palabras difíciles
function reiniciarMazoDificilAnime() {
    mazoPalabrasDificilesAnime = [];
    mazoDificilActivo = false;
    console.log("🔄 Mazo de palabras difíciles reiniciado");
}

// Función para verificar respuesta en quiz anime - MODIFICADA PARA MANEJAR MAZO DIFÍCIL
function verificarRespuestaAnime(respuestaSeleccionada, respuestaCorrecta, lectura, pregunta) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-anime .opcion');
    const resultado = document.getElementById('resultado-anime');
    
    // Deshabilitar botones
    opcionesDOM.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // También deshabilitar el botón de difícil si existe
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
// 8. FUNCIÓN MEJORADA PARA MOSTRAR RESULTADOS - CON OPCIÓN DE MAZO DIFÍCIL
// ============================================================================

// Función para mostrar resultados del quiz anime
function mostrarResultadosAnime() {
    const porcentaje = Math.round((respuestasCorrectasAnime / mazoActualAnime.length) * 100);
    
    // Determinar si mostrar opción de mazo difícil
    const mostrarOpcionMazoDificil = !mazoDificilActivo && mazoPalabrasDificilesAnime.length > 0;
    
    // Crear pantalla de resultados dinámica
    let resultadosHTML = `
        <div class="resultado-anime-container">
            <h2>${mazoDificilActivo ? '📚 Resultados del Mazo de Palabras Difíciles' : '🎬 Resultados del Quiz'}</h2>
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
    `;
    
    // Mensaje personalizado
    if (mazoDificilActivo) {
        if (porcentaje === 100) {
            resultadosHTML += '¡Excelente! 🎉 Ya dominas estas palabras difíciles';
        } else if (porcentaje >= 80) {
            resultadosHTML += '¡Muy bien! 👏 Casi dominas estas palabras difíciles';
        } else if (porcentaje >= 60) {
            resultadosHTML += 'Buen progreso 👍 Sigue practicando las palabras difíciles';
        } else {
            resultadosHTML += 'Sigue practicando 💪 Las palabras difíciles requieren más tiempo';
        }
    } else {
        if (porcentaje === 100) {
            resultadosHTML += '¡Perfecto! 🎉 Dominas este vocabulario';
        } else if (porcentaje >= 80) {
            resultadosHTML += '¡Muy bien! 👏 Casi perfecto';
        } else if (porcentaje >= 60) {
            resultadosHTML += 'Buen trabajo 👍 Sigue practicando';
        } else {
            resultadosHTML += 'Sigue estudiando 💪 Lo lograrás';
        }
    }
    
    resultadosHTML += `
                </div>
            </div>
            
            <div class="botones-resultados-anime">
    `;
    
    // Si estamos en mazo difícil, agregar botón especial
    if (mazoDificilActivo) {
        resultadosHTML += `
            <button class="boton-principal" onclick="reiniciarYVolverAAnimeDetalle()" 
                    style="background: linear-gradient(135deg, #ff9800, #ff5722);">
                🎬 Volver al Anime
            </button>
        `;
    } else {
        resultadosHTML += `
            <button class="boton-principal" onclick="volverAAnimeDetalle()">
                Volver al Anime
            </button>
            <button class="boton-secundario" onclick="repetirQuizAnime()">
                Repetir Quiz
            </button>
        `;
    }
    
    // Agregar botón para mazo difícil si hay palabras
    if (mostrarOpcionMazoDificil) {
        resultadosHTML += `
            <button class="boton-especial-dificil" onclick="iniciarMazoDificilAnime()">
                📚 Practicar Palabras Difíciles (${mazoPalabrasDificilesAnime.length})
            </button>
        `;
    }
    
    resultadosHTML += `
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
    
    // Determinar título
    const tituloResultados = mazoDificilActivo ? '📚 Resultados Mazo Difícil' : 'Resultados';
    
    resultadosPantalla.innerHTML = `
        <div class="contenedor">
            <div class="barra-superior">
                <div class="contador">${tituloResultados}</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="${mazoDificilActivo ? 'reiniciarYVolverAAnimeDetalle()' : 'volverAAnimeDetalle()'}">
                        ${mazoDificilActivo ? '🎬 Volver al Anime' : 'Volver al Anime'}
                    </button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
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
                const recompensa = mazoDificilActivo ? 2 : 1; // Doble recompensa por mazo difícil
                sistemaEconomia.agregarDinero(recompensa, `Quiz anime ${mazoDificilActivo ? 'difícil' : 'normal'} completado al 100%`);
                mostrarNotificacionAnime(`🎉 ¡Perfecto! +${recompensa} S/.`);
            }
        }, 500);
    }
    
    // Si terminamos el mazo difícil, reiniciarlo
    if (mazoDificilActivo) {
        setTimeout(() => {
            reiniciarMazoDificilAnime();
            console.log("🔄 Mazo difícil reiniciado automáticamente después de completarlo");
        }, 100);
    }
}

// Función para reiniciar y volver al anime (especial para mazo difícil)
function reiniciarYVolverAAnimeDetalle() {
    // Reiniciar mazo difícil
    reiniciarMazoDificilAnime();
    
    // Volver al detalle del anime
    volverAAnimeDetalle();
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
// 9. FUNCIONES DE NAVEGACIÓN
// ============================================================================

function volverAAnimeSeleccion() {
    // Reiniciar mazo difícil al salir del anime
    reiniciarMazoDificilAnime();
    
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
// 10. FUNCIONES DE NOTIFICACIÓN
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
// 11. FUNCIONES DE CONSOLA PARA TIMESTAMPS
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
// 12. FUNCIONES DE CONSOLA PARA EL MAZO DIFÍCIL
// ============================================================================

// Ver estado del mazo difícil desde consola
window.verEstadoMazoDificilAnime = function() {
    console.log("📊 ESTADO DEL MAZO DE PALABRAS DIFÍCILES:");
    console.log(`- Palabras en mazo difícil: ${mazoPalabrasDificilesAnime.length}`);
    console.log(`- Mazo difícil activo: ${mazoDificilActivo ? 'Sí' : 'No'}`);
    
    if (mazoPalabrasDificilesAnime.length > 0) {
        console.log("📝 Palabras en el mazo difícil:");
        mazoPalabrasDificilesAnime.forEach((palabra, index) => {
            console.log(`  ${index + 1}. ${palabra.japones} (${palabra.lectura})`);
        });
    }
};

// Agregar palabra al mazo difícil desde consola
window.agregarPalabraDificilDesdeConsola = function(animeId, mazoId, indicePalabra) {
    if (!animeVocabulario[animeId] || !animeVocabulario[animeId][mazoId]) {
        console.log(`❌ No se encontró el mazo ${mazoId} para ${animeId}`);
        return false;
    }
    
    const mazo = animeVocabulario[animeId][mazoId];
    if (indicePalabra < 0 || indicePalabra >= mazo.length) {
        console.log(`❌ Índice fuera de rango. El mazo tiene ${mazo.length} palabras (0-${mazo.length-1})`);
        return false;
    }
    
    const palabra = mazo[indicePalabra];
    agregarAPalabrasDificilesAnime(palabra);
    return true;
};

// Reiniciar mazo difícil desde consola
window.reiniciarMazoDificilDesdeConsola = function() {
    reiniciarMazoDificilAnime();
    console.log("✅ Mazo de palabras difíciles reiniciado desde consola");
    return true;
};

// ============================================================================
// 13. FUNCIÓN PARA CREAR PANTALLAS DINÁMICAS - VERSIÓN MEJORADA CON MAZO DIFÍCIL
// ============================================================================

function crearPantallasAnime() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME - MEJORADA -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 ANIME CON MAZO DE PALABRAS DIFÍCILES ✰</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 VIDEOS PARA FABRI</h1>
                    <p class="subtitulo">Selecciona un anime - Con ✰ Mazo de Palabras Difíciles</p>
                    
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
                            <span class="idioma-badge dificil">✰ Palabras Difíciles</span>
                            <span>Marca palabras difíciles para repasar después</span>
                        </div>
                    </div>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-anime">
                        <p>📚 5 animes × 5 mazos cada uno = 25 mazos de vocabulario</p>
                        <p>✰ Marca palabras difíciles durante el quiz para crear tu mazo personalizado</p>
                        <p>⏱️ Timestamps para navegación rápida en videos</p>
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
                        
                        <!-- MAZOS DE VOCABULARIO -->
                        <div class="mazos-anime-container">
                            <h3>📚 Mazos de Vocabulario</h3>
                            <p>Practica las palabras que aparecen en este anime:</p>
                            
                            <div class="contenedor-mazos-anime" id="contenedor-mazos-anime">
                                <!-- Los mazos se cargan aquí dinámicamente -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE QUIZ ANIME - CON BOTÓN DE PALABRAS DIFÍCILES -->
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
        
        // Agregar estilos específicos para el sistema anime mejorado CON MAZO DIFÍCIL
        agregarEstilosAnimeMejoradoConMazoDificil();
        
        console.log("✅ Pantallas anime creadas dinámicamente (con ✰ Mazo de Palabras Difíciles)");
    }
}

// Función para agregar estilos específicos del sistema anime mejorado CON MAZO DIFÍCIL
function agregarEstilosAnimeMejoradoConMazoDificil() {
    // Verificar si los estilos ya existen
    if (document.getElementById('estilos-anime-mejorado-con-dificil')) return;
    
    const estilos = `
        <style id="estilos-anime-mejorado-con-dificil">
            /* ESTILOS PARA EL SISTEMA ANIME MEJORADO CON MAZO DIFÍCIL */
            
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
            
            .idioma-badge.dificil {
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
            }
            
            .idioma-badge.timestamps {
                background: linear-gradient(135deg, #00ff88, #00cc6a);
                color: white;
            }
            
            .idioma-info-item span:last-child {
                color: #cccccc;
                font-size: 0.9rem;
            }
            
            /* BOTÓN DE PALABRAS DIFÍCILES */
            .boton-dificil {
                margin: 15px auto;
                display: block;
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 10px rgba(255, 152, 0, 0.3);
            }
            
            .boton-dificil:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(255, 152, 0, 0.4);
                background: linear-gradient(135deg, #ffa726, #ff7043);
            }
            
            .boton-dificil:disabled {
                background: linear-gradient(135deg, #9e9e9e, #757575);
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
            }
            
            /* BOTÓN ESPECIAL PARA MAZO DIFÍCIL EN RESULTADOS */
            .boton-especial-dificil {
                margin: 15px auto;
                display: block;
                background: linear-gradient(135deg, #ff9800, #ff5722);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 15px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 5px 15px rgba(255, 152, 0, 0.4);
                font-size: 1.1rem;
                width: 100%;
                max-width: 400px;
            }
            
            .boton-especial-dificil:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(255, 152, 0, 0.6);
                background: linear-gradient(135deg, #ffa726, #ff7043);
            }
            
            /* BOTONES DE RESULTADOS CON MAZO DIFÍCIL */
            .botones-resultados-anime {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 30px;
            }
            
            .botones-resultados-anime button {
                width: 100%;
                max-width: 400px;
                margin: 0 auto;
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
                content: '✰';
                position: absolute;
                top: 10px;
                left: 10px;
                background: rgba(255, 152, 0, 0.8);
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
            }
            
            .anime-idiomas, .anime-timestamps-count {
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
            
            /* INFO ANIME MEJORADA */
            .info-anime {
                margin-top: 30px;
                padding: 15px;
                background: rgba(255, 152, 0, 0.1);
                border-radius: 15px;
                border: 2px solid #ff9800;
            }
            
            .info-anime p {
                margin: 10px 0;
                color: #ffffff;
                text-align: center;
                font-size: 0.95rem;
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
                
                .boton-dificil, .boton-especial-dificil {
                    width: 100%;
                    max-width: 300px;
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
                
                .boton-dificil, .boton-especial-dificil {
                    padding: 12px 20px;
                    font-size: 1rem;
                }
            }
            
            /* ANIMACIÓN PARA BOTÓN DIFÍCIL */
            @keyframes brilloDificil {
                0% { box-shadow: 0 0 5px rgba(255, 152, 0, 0.5); }
                50% { box-shadow: 0 0 20px rgba(255, 152, 0, 0.8); }
                100% { box-shadow: 0 0 5px rgba(255, 152, 0, 0.5); }
            }
            
            .boton-dificil {
                animation: brilloDificil 2s infinite;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 14. EXPORTAR FUNCIONES PARA USO GLOBAL
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

// Funciones nuevas
window.cargarVideoAnime = cargarVideoAnime;
window.cambiarIdiomaVideo = cambiarIdiomaVideo;
window.mostrarTimestampsAnime = mostrarTimestampsAnime;
window.saltarATimestampAnime = saltarATimestampAnime;
window.agregarTimestampAnime = agregarTimestampAnime;
window.agregarTimestampAnimeDesdeConsola = agregarTimestampAnimeDesdeConsola;
window.cambiarDriveIdAnime = cambiarDriveIdAnime;
window.verTimestampsAnime = verTimestampsAnime;

// Funciones del mazo difícil
window.agregarAPalabrasDificilesAnime = agregarAPalabrasDificilesAnime;
window.iniciarMazoDificilAnime = iniciarMazoDificilAnime;
window.reiniciarMazoDificilAnime = reiniciarMazoDificilAnime;
window.reiniciarYVolverAAnimeDetalle = reiniciarYVolverAAnimeDetalle;

// Funciones de consola
window.verEstadoMazoDificilAnime = verEstadoMazoDificilAnime;
window.agregarPalabraDificilDesdeConsola = agregarPalabraDificilDesdeConsola;
window.reiniciarMazoDificilDesdeConsola = reiniciarMazoDificilDesdeConsola;

console.log("✅ Sistema anime MEJORADO cargado correctamente ✰");
console.log("🎬 Novedades:");
console.log("   - ✰ Mazo de Palabras Difíciles");
console.log("   - 2 idiomas por anime: Español y Japonés Raw");
console.log("   - Timestamps clicables para navegación rápida");
console.log("   - Selector de idioma en tiempo real");
console.log("");
console.log("🔧 Funciones nuevas desde consola:");
console.log("   - verEstadoMazoDificilAnime()");
console.log("   - agregarPalabraDificilDesdeConsola(animeId, mazoId, indice)");
console.log("   - reiniciarMazoDificilDesdeConsola()");
console.log("");
console.log("💡 Usa iniciarSistemaAnime() para comenzar");
console.log("✰ Durante el quiz, haz clic en 'Marcar como difícil' para agregar palabras al mazo especial");
