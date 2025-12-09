// ============================================================================
// SISTEMA ANIME PARA FABRI - TODO EN UN ARCHIVO
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - DATOS DE ANIMES Y VIDEOS
// ============================================================================

const animeConfig = {
    // 5 animes para estudiar
    animes: {
        'anime1': {
            id: 'anime1',
            nombre: '✨ Quintillizas Nakano',
            imagen: 'https://pbs.twimg.com/media/G7fvMrtWcAA1Y-W?format=png&name=900x900',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view?usp=sharing',
            descripcion: 'Aprende japonés con las quintillizas',
            color: '#ff6b9d'
        },
        'anime2': {
            id: 'anime2',
            nombre: '🏫 Yamada Lv999',
            imagen: 'https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view?usp=sharing',
            descripcion: 'Vocabulario de romance escolar',
            color: '#00b4d8'
        },
        'anime3': {
            id: 'anime3',
            nombre: '🌙 Kimetsu no Yaiba',
            imagen: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view?usp=sharing',
            descripcion: 'Vocabulario de acción y fantasía',
            color: '#ff6d00'
        },
        'anime4': {
            id: 'anime4',
            nombre: '⚔️ Jujutsu Kaisen',
            imagen: 'https://images.unsplash.com/photo-1639322537502-9e1f6bf2c3a5?w-400',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view?usp=sharing',
            descripcion: 'Términos de hechicería y batallas',
            color: '#7209b7'
        },
        'anime5': {
            id: 'anime5',
            nombre: '🏀 Slam Dunk',
            imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
            videoDrive: 'https://drive.google.com/file/d/1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R/view?usp=sharing',
            descripcion: 'Vocabulario deportivo y escolar',
            color: '#ff006e'
        }
    },
    
    // Configuración general
    mazosPorAnime: 5,
    palabrasPorMazo: 10,
    
    // IDs reales de Google Drive (reemplazar con los tuyos)
    driveVideoIds: {
        'anime1': 'TU_ID_REAL_QUINTILLIZAS',
        'anime2': 'TU_ID_REAL_YAMADA',
        'anime3': 'TU_ID_REAL_KIMETSU',
        'anime4': 'TU_ID_REAL_JUJUTSU',
        'anime5': 'TU_ID_REAL_SLAMDUNK'
    }
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS ANIMES
// ============================================================================

const animeVocabulario = {
    // ANIME 1 - Quintillizas Nakano
    'anime1': {
        'mazo1': [
            { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Amigas', 'Compañeras'], respuesta: 0 },
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
            { japones: 'アルバイト', lectura: 'arubaito', lectura: 'arubaito', opciones: ['Trabajo de medio tiempo', 'Trabajo completo', 'Estudio', 'Descanso'], respuesta: 0 },
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
// 3. FUNCIÓN PARA GENERAR PALABRAS GENÉRICAS (PARA ANIMES SIN VOCABULARIO)
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
// 4. VARIABLES GLOBALES DEL SISTEMA ANIME
// ============================================================================

let animeActual = '';
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;

// ============================================================================
// 5. FUNCIONES PRINCIPALES DEL SISTEMA ANIME
// ============================================================================

// Función para iniciar el sistema anime desde el menú principal
function iniciarSistemaAnime() {
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado");
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
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${anime.nombre}'">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">5 mazos de vocabulario</div>
            <div class="anime-desc">${anime.descripcion}</div>
        `;
        
        contenedor.appendChild(div);
    });
}

// Función para cargar un anime específico
function cargarAnime(animeId) {
    animeActual = animeId;
    const anime = animeConfig.animes[animeId];
    
    // Obtener el ID real de Google Drive
    const driveId = animeConfig.driveVideoIds[animeId] || 'TU_ID_POR_DEFECTO';
    const videoUrl = `https://drive.google.com/file/d/${driveId}/preview`;
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-anime');
    const videoElement = document.getElementById('video-anime');
    const descElement = document.getElementById('descripcion-anime');
    
    if (tituloElement) tituloElement.textContent = anime.nombre;
    if (descElement) descElement.textContent = anime.descripcion;
    
    if (videoElement) {
        videoElement.src = videoUrl;
        videoElement.title = `Video de ${anime.nombre}`;
    }
    
    // Cargar mazos de este anime
    cargarMazosAnime(animeId);
    
    cambiarPantalla('pantalla-anime-detalle');
    console.log(`🎬 Cargando anime: ${anime.nombre}`);
}

// Función para cargar los mazos de un anime
function cargarMazosAnime(animeId) {
    const contenedor = document.getElementById('contenedor-mazos-anime');
    if (!contenedor) return;
    
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
        
        console.log(`📝 Iniciando quiz: ${animeId} - ${mazoId}`);
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
// 6. FUNCIONES DE NAVEGACIÓN PARA ANIME
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
// 7. INTEGRACIÓN CON TU SISTEMA ACTUAL
// ============================================================================

// Esta función debe agregarse a tu 1main.js actual:
/*
// En la sección de MODOS ESPECIALES del index.html, agregar:
<div class="lastsummer-card" onclick="iniciarSistemaAnime()">
    <img src="https://via.placeholder.com/300x200/ff00ff/ffffff?text=Anime+Videos" 
         alt="Anime para Fabri" class="lastsummer-imagen">
    <div class="lastsummer-texto">🎬 VIDEOS PARA FABRI</div>
    <div class="lastsummer-info">5 animes × 5 mazos cada uno</div>
</div>

// En 1main.js, agregar esta función:
function iniciarSistemaAnime() {
    // Verificar si el sistema anime está cargado
    if (typeof iniciarSistemaAnime !== 'undefined') {
        cambiarPantalla('pantalla-anime-seleccion');
        
        // Inicializar si hay funciones específicas
        if (typeof cargarListaAnimes === 'function') {
            setTimeout(() => cargarListaAnimes(), 100);
        }
    } else {
        console.error("❌ Sistema anime no cargado");
        mostrarNotificacion("Error: Sistema anime no disponible");
    }
}
*/

// ============================================================================
// 8. FUNCIONES DE TESTING PARA DESARROLLO
// ============================================================================

// Agregar palabras a un anime específico (desde consola)
window.agregarPalabrasAnime = function(animeId, mazoNumero, palabras) {
    if (!animeVocabulario[animeId]) {
        animeVocabulario[animeId] = {};
    }
    
    const mazoId = `mazo${mazoNumero}`;
    animeVocabulario[animeId][mazoId] = palabras;
    console.log(`✅ ${palabras.length} palabras agregadas a ${animeId} - ${mazoId}`);
    return true;
};

// Ver estado del sistema anime
window.verEstadoAnime = function() {
    console.log("🎬 ESTADO DEL SISTEMA ANIME:");
    console.log("- Anime actual:", animeActual);
    console.log("- Mazo actual:", mazoActualAnime.length, "palabras");
    console.log("- Pregunta actual:", preguntaActualAnime);
    console.log("- Animes configurados:", Object.keys(animeConfig.animes).length);
    
    // Contar palabras por anime
    Object.keys(animeVocabulario).forEach(animeId => {
        let totalPalabras = 0;
        Object.keys(animeVocabulario[animeId]).forEach(mazoId => {
            totalPalabras += animeVocabulario[animeId][mazoId].length;
        });
        console.log(`  ${animeId}: ${totalPalabras} palabras en ${Object.keys(animeVocabulario[animeId]).length} mazos`);
    });
};

// Cambiar video de Google Drive (testing)
window.cambiarVideoAnime = function(animeId, nuevoDriveId) {
    if (animeConfig.driveVideoIds[animeId]) {
        animeConfig.driveVideoIds[animeId] = nuevoDriveId;
        console.log(`✅ Video de ${animeId} actualizado a ID: ${nuevoDriveId}`);
        
        // Si este anime está actualmente cargado, actualizar
        if (animeActual === animeId) {
            const videoElement = document.getElementById('video-anime');
            if (videoElement) {
                videoElement.src = `https://drive.google.com/file/d/${nuevoDriveId}/preview`;
            }
        }
        return true;
    }
    return false;
};

// ============================================================================
// 9. INICIALIZACIÓN AUTOMÁTICA (OPCIONAL)
// ============================================================================

// Descomentar si quieres que se inicialice automáticamente
/*
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎬 Sistema anime cargado y listo");
    
    // Crear las pantallas HTML dinámicamente si no existen
    crearPantallasAnime();
});
*/

// Función para crear las pantallas HTML dinámicamente
function crearPantallasAnime() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-anime-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE ANIME -->
            <div id="pantalla-anime-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎬 VIDEOS PARA FABRI</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎬 VIDEOS PARA FABRI</h1>
                    <p class="subtitulo">Selecciona un anime para estudiar japonés</p>
                    
                    <div class="contenedor-animes" id="contenedor-animes">
                        <!-- Los animes se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-anime">
                        <p>📚 5 animes × 5 mazos cada uno = 25 mazos de vocabulario</p>
                        <p>🎥 Cada anime incluye video para contexto</p>
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
                        <div class="video-anime-container">
                            <h3>🎥 Video del Anime</h3>
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
                            <p class="video-desc" id="descripcion-anime">Mira el video y luego practica el vocabulario</p>
                        </div>
                        
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
        console.log("✅ Pantallas anime creadas dinámicamente");
    }
}

// ============================================================================
// 10. EXPORTAR FUNCIONES PARA USO GLOBAL
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

console.log("✅ Sistema anime para Fabri cargado correctamente");
console.log("🎬 Usa iniciarSistemaAnime() para comenzar");
