// ============================================================================
// SISTEMA OPENINGS DE ANIME - 5galeria-opening.js
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN - DATOS DE ANIMES Y OPENINGS
// ============================================================================

const openingsConfig = {
    // 5 animes con openings famosos
    animes: {
        'opening1': {
            id: 'opening1',
            nombre: '🎵 Kimi no Na wa (Your Name)',
            imagen: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80',
            openingDrive: 'https://drive.google.com/file/d/1YOUR_DRIVE_ID_1/preview',
            openingNombre: 'Zenzenzense - RADWIMPS',
            descripcion: 'Opening de la película Your Name - Vocabulario romántico y poético',
            color: '#00b4d8',
            año: 2016,
            episodios: 'Película',
            tipo: 'Película de romance'
        },
        'opening2': {
            id: 'opening2',
            nombre: '🎤 Shingeki no Kyojin (Attack on Titan)',
            imagen: 'https://images.unsplash.com/photo-1639322537502-9e1f6bf2c3a5?w=400&q=80',
            openingDrive: 'https://drive.google.com/file/d/1YOUR_DRIVE_ID_2/preview',
            openingNombre: 'Guren no Yumiya - Linked Horizon',
            descripcion: 'Opening épico - Vocabulario de batalla, libertad y sacrificio',
            color: '#ff6d00',
            año: 2013,
            episodios: 'Season 1',
            tipo: 'Shonen - Acción'
        },
        'opening3': {
            id: 'opening3',
            nombre: '⚡️ Kimetsu no Yaiba (Demon Slayer)',
            imagen: 'https://images.unsplash.com/photo-1637858868790-bb3c8c4b34e1?w=400&q=80',
            openingDrive: 'https://drive.google.com/file/d/1YOUR_DRIVE_ID_3/preview',
            openingNombre: 'Gurenge - LiSA',
            descripcion: 'Opening famoso - Vocabulario de demonios, espadas y familia',
            color: '#dc2f02',
            año: 2019,
            episodios: 'Season 1',
            tipo: 'Shonen - Fantasía'
        },
        'opening4': {
            id: 'opening4',
            nombre: '🎭 Jujutsu Kaisen',
            imagen: 'https://images.unsplash.com/photo-1639322537804-3c3c3c3c3c3c?w=400&q=80',
            openingDrive: 'https://drive.google.com/file/d/1YOUR_DRIVE_ID_4/preview',
            openingNombre: 'Kaikai Kitan - Eve',
            descripcion: 'Opening moderno - Vocabulario de maldiciones, hechicería y escuela',
            color: '#7209b7',
            año: 2020,
            episodios: 'Season 1',
            tipo: 'Shonen - Sobrenatural'
        },
        'opening5': {
            id: 'opening5',
            nombre: '🏀 Slam Dunk',
            imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80',
            openingDrive: 'https://drive.google.com/file/d/1YOUR_DRIVE_ID_5/preview',
            openingNombre: 'Kimi ga Suki da to Sakebitai - BAAD',
            descripcion: 'Opening clásico - Vocabulario deportivo, escuela y amistad',
            color: '#ff006e',
            año: 1993,
            episodios: 'Temporada 1',
            tipo: 'Deportes - Shonen'
        }
    },
    
    // Configuración general
    mazosPorAnime: 5,
    palabrasPorMazo: 10,
    
    // IDs reales de Google Drive (debes reemplazarlos con tus videos)
    driveOpeningIds: {
        'opening1': '1YOUR_DRIVE_ID_1',
        'opening2': '1YOUR_DRIVE_ID_2',
        'opening3': '1YOUR_DRIVE_ID_3',
        'opening4': '1YOUR_DRIVE_ID_4',
        'opening5': '1YOUR_DRIVE_ID_5'
    }
};

// ============================================================================
// 2. VOCABULARIO COMPLETO DE TODOS LOS OPENINGS
// ============================================================================

const openingsVocabulario = {
    // OPENING 1 - Kimi no Na wa (Your Name)
    'opening1': {
        'mazo1': [
            { japones: '夢', lectura: 'yume', opciones: ['Sueño', 'Realidad', 'Pesadilla', 'Fantasía'], respuesta: 0 },
            { japones: '名前', lectura: 'namae', opciones: ['Nombre', 'Apellido', 'Apodo', 'Seudónimo'], respuesta: 0 },
            { japones: '運命', lectura: 'unmei', opciones: ['Destino', 'Azar', 'Suerte', 'Elección'], respuesta: 0 },
            { japones: '出会い', lectura: 'deai', opciones: ['Encuentro', 'Despedida', 'Separación', 'Reunión'], respuesta: 0 },
            { japones: '結び', lectura: 'musubi', opciones: ['Conexión', 'Separación', 'División', 'Distancia'], respuesta: 0 },
            { japones: '時', lectura: 'toki', opciones: ['Tiempo', 'Espacio', 'Lugar', 'Momento'], respuesta: 0 },
            { japones: '世界', lectura: 'sekai', opciones: ['Mundo', 'País', 'Ciudad', 'Pueblo'], respuesta: 0 },
            { japones: '君', lectura: 'kimi', opciones: ['Tú', 'Yo', 'Él', 'Ella'], respuesta: 0 },
            { japones: '想い', lectura: 'omoi', opciones: ['Sentimientos', 'Pensamientos', 'Palabras', 'Acciones'], respuesta: 0 },
            { japones: '愛', lectura: 'ai', opciones: ['Amor', 'Odio', 'Amistad', 'Respeto'], respuesta: 0 }
        ],
        'mazo2': [
            { japones: '涙', lectura: 'namida', opciones: ['Lágrimas', 'Risa', 'Sonrisa', 'Grito'], respuesta: 0 },
            { japones: '笑顔', lectura: 'egao', opciones: ['Sonrisa', 'Llanto', 'Enojo', 'Sorpresa'], respuesta: 0 },
            { japones: '約束', lectura: 'yakusoku', opciones: ['Promesa', 'Mentira', 'Secreto', 'Verdad'], respuesta: 0 },
            { japones: '記憶', lectura: 'kioku', opciones: ['Memoria', 'Olvido', 'Recuerdo', 'Sueño'], respuesta: 0 },
            { japones: '心', lectura: 'kokoro', opciones: ['Corazón', 'Mente', 'Alma', 'Cuerpo'], respuesta: 0 },
            { japones: '手', lectura: 'te', opciones: ['Mano', 'Pie', 'Cabeza', 'Brazo'], respuesta: 0 },
            { japones: '星', lectura: 'hoshi', opciones: ['Estrella', 'Luna', 'Sol', 'Planeta'], respuesta: 0 },
            { japones: '空', lectura: 'sora', opciones: ['Cielo', 'Tierra', 'Mar', 'Montaña'], respuesta: 0 },
            { japones: '光', lectura: 'hikari', opciones: ['Luz', 'Oscuridad', 'Sombra', 'Brillo'], respuesta: 0 },
            { japones: '永遠', lectura: 'eien', opciones: ['Eternidad', 'Momentáneo', 'Temporal', 'Pasajero'], respuesta: 0 }
        ],
        'mazo3': [
            { japones: '声', lectura: 'koe', opciones: ['Voz', 'Sonido', 'Ruido', 'Silencio'], respuesta: 0 },
            { japones: '叫ぶ', lectura: 'sakebu', opciones: ['Gritar', 'Susurrar', 'Hablar', 'Callar'], respuesta: 0 },
            { japones: '探す', lectura: 'sagasu', opciones: ['Buscar', 'Encontrar', 'Perder', 'Ignorar'], respuesta: 0 },
            { japones: '会いたい', lectura: 'aitai', opciones: ['Querer ver', 'Evitar', 'Olvidar', 'Recordar'], respuesta: 0 },
            { japones: '忘れない', lectura: 'wasurenai', opciones: ['No olvidar', 'Olvidar', 'Recordar', 'Rememorar'], respuesta: 0 },
            { japones: '変わらない', lectura: 'kawaranai', opciones: ['No cambiar', 'Cambiar', 'Transformar', 'Modificar'], respuesta: 0 },
            { japones: '信じる', lectura: 'shinjiru', opciones: ['Creer', 'Dudar', 'Negar', 'Aceptar'], respuesta: 0 },
            { japones: '待つ', lectura: 'matsu', opciones: ['Esperar', 'Irse', 'Llegar', 'Partir'], respuesta: 0 },
            { japones: '戻る', lectura: 'modoru', opciones: ['Volver', 'Ir', 'Quedar', 'Avanzar'], respuesta: 0 },
            { japones: '生きる', lectura: 'ikiru', opciones: ['Vivir', 'Morir', 'Existir', 'Sobrevivir'], respuesta: 0 }
        ],
        'mazo4': [
            { japones: '儚い', lectura: 'hakanai', opciones: ['Efímero', 'Eterno', 'Duradero', 'Permanente'], respuesta: 0 },
            { japones: '美しい', lectura: 'utsukushii', opciones: ['Hermoso', 'Feo', 'Común', 'Extraño'], respuesta: 0 },
            { japones: '大切', lectura: 'taisetsu', opciones: ['Importante', 'Insignificante', 'Común', 'Despreciable'], respuesta: 0 },
            { japones: '特別', lectura: 'tokubetsu', opciones: ['Especial', 'Común', 'Normal', 'Ordinario'], respuesta: 0 },
            { japones: '不思議', lectura: 'fushigi', opciones: ['Misterioso', 'Obvio', 'Claro', 'Explicable'], respuesta: 0 },
            { japones: '奇跡', lectura: 'kiseki', opciones: ['Milagro', 'Normalidad', 'Rutina', 'Costumbre'], respuesta: 0 },
            { japones: '幸せ', lectura: 'shiawase', opciones: ['Felicidad', 'Tristeza', 'Enojo', 'Aburrimiento'], respuesta: 0 },
            { japones: '悲しい', lectura: 'kanashii', opciones: ['Triste', 'Alegre', 'Feliz', 'Contento'], respuesta: 0 },
            { japones: '寂しい', lectura: 'sabishii', opciones: ['Solitario', 'Acompañado', 'Social', 'Extrovertido'], respuesta: 0 },
            { japones: '暖かい', lectura: 'atatakai', opciones: ['Cálido', 'Frío', 'Templado', 'Fresco'], respuesta: 0 }
        ],
        'mazo5': [
            { japones: '青春', lectura: 'seishun', opciones: ['Juventud', 'Vejez', 'Madurez', 'Infancia'], respuesta: 0 },
            { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Historia'], respuesta: 0 },
            { japones: '過去', lectura: 'kako', opciones: ['Pasado', 'Futuro', 'Presente', 'Ahora'], respuesta: 0 },
            { japones: '現在', lectura: 'genzai', opciones: ['Presente', 'Pasado', 'Futuro', 'Antes'], respuesta: 0 },
            { japones: '昨日', lectura: 'kinou', opciones: ['Ayer', 'Hoy', 'Mañana', 'Anteayer'], respuesta: 0 },
            { japones: '今日', lectura: 'kyou', opciones: ['Hoy', 'Ayer', 'Mañana', 'Pasado'], respuesta: 0 },
            { japones: '明日', lectura: 'ashita', opciones: ['Mañana', 'Ayer', 'Hoy', 'Pasado'], respuesta: 0 },
            { japones: '季節', lectura: 'kisetsu', opciones: ['Estación', 'Día', 'Mes', 'Año'], respuesta: 0 },
            { japones: '春', lectura: 'haru', opciones: ['Primavera', 'Verano', 'Otoño', 'Invierno'], respuesta: 0 },
            { japones: '夜', lectura: 'yoru', opciones: ['Noche', 'Día', 'Tarde', 'Mañana'], respuesta: 0 }
        ]
    },
    
    // OPENING 2 - Shingeki no Kyojin
    'opening2': {
        'mazo1': [
            { japones: '巨人', lectura: 'kyojin', opciones: ['Gigante', 'Enano', 'Humano', 'Monstruo'], respuesta: 0 },
            { japones: '壁', lectura: 'kabe', opciones: ['Muro', 'Puerta', 'Ventana', 'Camino'], respuesta: 0 },
            { japones: '自由', lectura: 'jiyuu', opciones: ['Libertad', 'Esclavitud', 'Opresión', 'Restricción'], respuesta: 0 },
            { japones: '戦い', lectura: 'tatakai', opciones: ['Batalla', 'Paz', 'Tregua', 'Armisticio'], respuesta: 0 },
            { japones: '兵士', lectura: 'heishi', opciones: ['Soldado', 'Civil', 'Líder', 'Comandante'], respuesta: 0 },
            { japones: '剣', lectura: 'ken', opciones: ['Espada', 'Escudo', 'Lanza', 'Arco'], respuesta: 0 },
            { japones: '血', lectura: 'chi', opciones: ['Sangre', 'Agua', 'Lágrimas', 'Sudor'], respuesta: 0 },
            { japones: '命', lectura: 'inochi', opciones: ['Vida', 'Muerte', 'Alma', 'Cuerpo'], respuesta: 0 },
            { japones: '犠牲', lectura: 'gisei', opciones: ['Sacrificio', 'Ganancia', 'Beneficio', 'Premio'], respuesta: 0 },
            { japones: '勝利', lectura: 'shouri', opciones: ['Victoria', 'Derrota', 'Empate', 'Abandono'], respuesta: 0 }
        ],
        'mazo2': [
            { japones: '人間', lectura: 'ningen', opciones: ['Humano', 'Animal', 'Monstruo', 'Robot'], respuesta: 0 },
            { japones: '敵', lectura: 'teki', opciones: ['Enemigo', 'Aliado', 'Amigo', 'Compañero'], respuesta: 0 },
            { japones: '仲間', lectura: 'nakama', opciones: ['Compañero', 'Rival', 'Extraño', 'Enemigo'], respuesta: 0 },
            { japones: '信頼', lectura: 'shinrai', opciones: ['Confianza', 'Traición', 'Duda', 'Sospecha'], respuesta: 0 },
            { japones: '勇気', lectura: 'yuuki', opciones: ['Valentía', 'Cobardía', 'Miedo', 'Timidez'], respuesta: 0 },
            { japones: '恐怖', lectura: 'kyoufu', opciones: ['Miedo', 'Valentía', 'Calma', 'Confianza'], respuesta: 0 },
            { japones: '希望', lectura: 'kibou', opciones: ['Esperanza', 'Desesperación', 'Duda', 'Desconfianza'], respuesta: 0 },
            { japones: '絶望', lectura: 'zetsubou', opciones: ['Desesperación', 'Esperanza', 'Fé', 'Optimismo'], respuesta: 0 },
            { japones: '真実', lectura: 'shinjitsu', opciones: ['Verdad', 'Mentira', 'Ficción', 'Invento'], respuesta: 0 },
            { japones: '秘密', lectura: 'himitsu', opciones: ['Secreto', 'Publicidad', 'Revelación', 'Transparencia'], respuesta: 0 }
        ],
        'mazo3': [
            { japones: '進撃', lectura: 'shingeki', opciones: ['Ataque/Ofensiva', 'Defensa', 'Retirada', 'Evasión'], respuesta: 0 },
            { japones: '調査', lectura: 'chousa', opciones: ['Investigación', 'Ignorancia', 'Desconocimiento', 'Suposición'], respuesta: 0 },
            { japones: '兵団', lectura: 'heidan', opciones: ['Cuerpo militar', 'Grupo civil', 'Organización', 'Comunidad'], respuesta: 0 },
            { japones: '訓練', lectura: 'kunren', opciones: ['Entrenamiento', 'Descanso', 'Ocio', 'Diversión'], respuesta: 0 },
            { japones: '戦術', lectura: 'senjutsu', opciones: ['Estrategia', 'Improvisación', 'Desorden', 'Caos'], respuesta: 0 },
            { japones: '指揮', lectura: 'shiki', opciones: ['Mando', 'Subordinación', 'Rebeldía', 'Desobediencia'], respuesta: 0 },
            { japones: '命令', lectura: 'meirei', opciones: ['Orden', 'Sugerencia', 'Petición', 'Ruego'], respuesta: 0 },
            { japones: '作戦', lectura: 'sakusen', opciones: ['Operación', 'Plan', 'Idea', 'Propuesta'], respuesta: 0 },
            { japones: '防衛', lectura: 'bouei', opciones: ['Defensa', 'Ataque', 'Ofensiva', 'Asalto'], respuesta: 0 },
            { japones: '包囲', lectura: 'houi', opciones: ['Cerco', 'Retirada', 'Avance', 'Persecución'], respuesta: 0 }
        ],
        'mazo4': [
            { japones: '世界', lectura: 'sekai', opciones: ['Mundo', 'País', 'Continente', 'Región'], respuesta: 0 },
            { japones: '外', lectura: 'soto', opciones: ['Exterior', 'Interior', 'Centro', 'Medio'], respuesta: 0 },
            { japones: '中', lectura: 'naka', opciones: ['Interior', 'Exterior', 'Afuera', 'Alrededor'], respuesta: 0 },
            { japones: '地上', lectura: 'chijou', opciones: ['Superficie', 'Subsuelo', 'Cielo', 'Mar'], respuesta: 0 },
            { japones: '天空', lectura: 'tenkuu', opciones: ['Cielo', 'Tierra', 'Mar', 'Infierno'], respuesta: 0 },
            { japones: '大地', lectura: 'daichi', opciones: ['Tierra', 'Cielo', 'Mar', 'Aire'], respuesta: 0 },
            { japones: '海', lectura: 'umi', opciones: ['Mar', 'Río', 'Lago', 'Montaña'], respuesta: 0 },
            { japones: '山', lectura: 'yama', opciones: ['Montaña', 'Valle', 'Playa', 'Desierto'], respuesta: 0 },
            { japones: '森', lectura: 'mori', opciones: ['Bosque', 'Desierto', 'Pradera', 'Pantano'], respuesta: 0 },
            { japones: '街', lectura: 'machi', opciones: ['Ciudad', 'Pueblo', 'Aldea', 'Campo'], respuesta: 0 }
        ],
        'mazo5': [
            { japones: '正義', lectura: 'seigi', opciones: ['Justicia', 'Injusticia', 'Malicia', 'Corrupción'], respuesta: 0 },
            { japones: '悪', lectura: 'aku', opciones: ['Mal', 'Bien', 'Neutral', 'Indiferente'], respuesta: 0 },
            { japones: '復讐', lectura: 'fukushuu', opciones: ['Venganza', 'Perdón', 'Olvido', 'Reconciliación'], respuesta: 0 },
            { japones: '罪', lectura: 'tsumi', opciones: ['Pecado', 'Inocencia', 'Virtud', 'Bondad'], respuesta: 0 },
            { japones: '罰', lectura: 'batsu', opciones: ['Castigo', 'Premio', 'Recompensa', 'Regalo'], respuesta: 0 },
            { japones: '贖罪', lectura: 'shokuzai', opciones: ['Expiación', 'Ofensa', 'Agresión', 'Provocación'], respuesta: 0 },
            { japones: '裏切り', lectura: 'uragiri', opciones: ['Traición', 'Lealtad', 'Fidelidad', 'Honestidad'], respuesta: 0 },
            { japones: '忠誠', lectura: 'chuusei', opciones: ['Lealtad', 'Traición', 'Deslealtad', 'Infidelidad'], respuesta: 0 },
            { japones: '名誉', lectura: 'meiyo', opciones: ['Honor', 'Deshonor', 'Vergüenza', 'Descrédito'], respuesta: 0 },
            { japones: '誇り', lectura: 'hokori', opciones: ['Orgullo', 'Vergüenza', 'Humildad', 'Modestia'], respuesta: 0 }
        ]
    },
    
    // OPENING 3 - Kimetsu no Yaiba (ejemplo reducido)
    'opening3': {
        'mazo1': generarPalabrasOpening(10),
        'mazo2': generarPalabrasOpening(10),
        'mazo3': generarPalabrasOpening(10),
        'mazo4': generarPalabrasOpening(10),
        'mazo5': generarPalabrasOpening(10)
    },
    
    // OPENING 4 - Jujutsu Kaisen (ejemplo reducido)
    'opening4': {
        'mazo1': generarPalabrasOpening(10),
        'mazo2': generarPalabrasOpening(10),
        'mazo3': generarPalabrasOpening(10),
        'mazo4': generarPalabrasOpening(10),
        'mazo5': generarPalabrasOpening(10)
    },
    
    // OPENING 5 - Slam Dunk (ejemplo reducido)
    'opening5': {
        'mazo1': generarPalabrasOpening(10),
        'mazo2': generarPalabrasOpening(10),
        'mazo3': generarPalabrasOpening(10),
        'mazo4': generarPalabrasOpening(10),
        'mazo5': generarPalabrasOpening(10)
    }
};

// ============================================================================
// 3. FUNCIÓN PARA GENERAR PALABRAS GENÉRICAS DE OPENINGS
// ============================================================================

function generarPalabrasOpening(cantidad) {
    const palabras = [];
    const palabrasBase = [
        { japones: '歌', lectura: 'uta', opciones: ['Canción', 'Música', 'Letra', 'Melodía'], respuesta: 0 },
        { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Silencio', 'Ruido', 'Sonido'], respuesta: 0 },
        { japones: '歌詞', lectura: 'kashi', opciones: ['Letra', 'Música', 'Ritmo', 'Melodía'], respuesta: 0 },
        { japones: '旋律', lectura: 'senritsu', opciones: ['Melodía', 'Ritmo', 'Armonía', 'Acorde'], respuesta: 0 },
        { japones: 'リズム', lectura: 'rizumu', opciones: ['Ritmo', 'Melodía', 'Armonía', 'Tempo'], respuesta: 0 },
        { japones: '音', lectura: 'oto', opciones: ['Sonido', 'Silencio', 'Ruido', 'Eco'], respuesta: 0 },
        { japones: '声', lectura: 'koe', opciones: ['Voz', 'Canto', 'Grito', 'Susurro'], respuesta: 0 },
        { japones: '奏でる', lectura: 'kanaderu', opciones: ['Tocar (instrumento)', 'Cantar', 'Escuchar', 'Componer'], respuesta: 0 },
        { japones: '聴く', lectura: 'kiku', opciones: ['Escuchar', 'Hablar', 'Cantar', 'Gritar'], respuesta: 0 },
        { japones: '感動', lectura: 'kandou', opciones: ['Emoción', 'Indiferencia', 'Aburrimiento', 'Fastidio'], respuesta: 0 }
    ];
    
    for (let i = 0; i < cantidad; i++) {
        palabras.push({...palabrasBase[i % palabrasBase.length]});
    }
    return palabras;
}

// ============================================================================
// 4. VARIABLES GLOBALES DEL SISTEMA OPENINGS
// ============================================================================

let openingActual = '';
let mazoActualOpening = [];
let preguntaActualOpening = 0;
let respuestasCorrectasOpening = 0;
let respuestasIncorrectasOpening = 0;

// ============================================================================
// 5. FUNCIONES PRINCIPALES DEL SISTEMA OPENINGS
// ============================================================================

// Función para iniciar el sistema openings desde el menú principal
function iniciarSistemaOpenings() {
    cambiarPantalla('pantalla-openings-seleccion');
    cargarListaOpenings();
    console.log("🎵 Sistema openings iniciado");
}

// Función para cargar la lista de openings disponibles
function cargarListaOpenings() {
    const contenedor = document.getElementById('contenedor-openings');
    if (!contenedor) {
        console.error("❌ No se encontró el contenedor de openings");
        return;
    }
    
    contenedor.innerHTML = '';
    
    Object.keys(openingsConfig.animes).forEach(openingId => {
        const opening = openingsConfig.animes[openingId];
        const div = document.createElement('div');
        div.className = 'opening-card';
        div.style.borderColor = opening.color;
        div.onclick = () => cargarOpening(openingId);
        
        div.innerHTML = `
            <img src="${opening.imagen}" alt="${opening.nombre}" class="opening-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${opening.nombre}'">
            <div class="opening-texto">${opening.nombre}</div>
            <div class="opening-info">${opening.openingNombre}</div>
            <div class="opening-desc">${opening.descripcion}</div>
            <div class="opening-meta">
                <span class="opening-año">${opening.año}</span>
                <span class="opening-tipo">${opening.tipo}</span>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
}

// Función para cargar un opening específico
function cargarOpening(openingId) {
    openingActual = openingId;
    const opening = openingsConfig.animes[openingId];
    
    // Obtener el ID real de Google Drive
    const driveId = openingsConfig.driveOpeningIds[openingId] || 'TU_ID_POR_DEFECTO';
    const openingUrl = `https://drive.google.com/file/d/${driveId}/preview`;
    
    // Actualizar interfaz
    const tituloElement = document.getElementById('titulo-opening');
    const openingElement = document.getElementById('video-opening');
    const descElement = document.getElementById('descripcion-opening');
    const nombreOpeningElement = document.getElementById('nombre-opening');
    
    if (tituloElement) tituloElement.textContent = opening.nombre;
    if (descElement) descElement.textContent = opening.descripcion;
    if (nombreOpeningElement) nombreOpeningElement.textContent = opening.openingNombre;
    
    if (openingElement) {
        openingElement.src = openingUrl;
        openingElement.title = `${opening.openingNombre} - ${opening.nombre}`;
    }
    
    // Cargar mazos de este opening
    cargarMazosOpening(openingId);
    
    cambiarPantalla('pantalla-opening-detalle');
    console.log(`🎵 Cargando opening: ${opening.nombre}`);
}

// Función para cargar los mazos de un opening
function cargarMazosOpening(openingId) {
    const contenedor = document.getElementById('contenedor-mazos-opening');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    for (let i = 1; i <= openingsConfig.mazosPorAnime; i++) {
        const mazoId = `mazo${i}`;
        const div = document.createElement('div');
        div.className = 'mazo-opening-card';
        div.onclick = () => iniciarQuizOpening(openingId, mazoId);
        
        // Verificar si el mazo tiene palabras
        const tienePalabras = openingsVocabulario[openingId] && 
                             openingsVocabulario[openingId][mazoId] && 
                             openingsVocabulario[openingId][mazoId].length > 0;
        
        div.innerHTML = `
            <div class="mazo-opening-numero">Mazo ${i}</div>
            <div class="mazo-opening-texto">${tienePalabras ? '10 palabras' : 'Próximamente'}</div>
            <div class="mazo-opening-info">${tienePalabras ? '🎵 Disponible' : '🚧 En preparación'}</div>
        `;
        
        if (!tienePalabras) {
            div.classList.add('mazo-inactivo');
            div.onclick = null;
        }
        
        contenedor.appendChild(div);
    }
}

// Función para iniciar el quiz de un mazo de opening
function iniciarQuizOpening(openingId, mazoId) {
    if (openingsVocabulario[openingId] && openingsVocabulario[openingId][mazoId]) {
        mazoActualOpening = [...openingsVocabulario[openingId][mazoId]];
        preguntaActualOpening = 0;
        respuestasCorrectasOpening = 0;
        respuestasIncorrectasOpening = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualOpening.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualOpening[i], mazoActualOpening[j]] = [mazoActualOpening[j], mazoActualOpening[i]];
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz-opening');
        
        // Actualizar contador
        document.getElementById('numero-pregunta-opening').textContent = 1;
        document.getElementById('total-preguntas-opening').textContent = mazoActualOpening.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaOpening();
        
        console.log(`📝 Iniciando quiz opening: ${openingId} - ${mazoId}`);
    } else {
        console.error(`❌ No se encontró el mazo ${mazoId} para ${openingId}`);
        alert('Este mazo aún no está disponible. ¡Próximamente!');
    }
}

// Función para mostrar una pregunta del quiz opening
function mostrarPreguntaOpening() {
    if (preguntaActualOpening < mazoActualOpening.length) {
        const pregunta = mazoActualOpening[preguntaActualOpening];
        
        // Actualizar contador
        document.getElementById('numero-pregunta-opening').textContent = preguntaActualOpening + 1;
        
        // Mostrar palabra japonesa
        document.getElementById('palabra-japones-opening').textContent = pregunta.japones;
        document.getElementById('lectura-opening').textContent = '';
        document.getElementById('resultado-opening').textContent = '';
        document.getElementById('resultado-opening').className = 'resultado';
        document.getElementById('boton-siguiente-opening').style.display = 'none';
        
        // Limpiar opciones anteriores
        const contenedorOpciones = document.getElementById('contenedor-opciones-opening');
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
            botonOpcion.onclick = () => verificarRespuestaOpening(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultadosOpening();
    }
}

// Función para verificar respuesta en quiz opening
function verificarRespuestaOpening(respuestaSeleccionada, respuestaCorrecta, lectura) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-opening .opcion');
    const resultado = document.getElementById('resultado-opening');
    
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
    document.getElementById('lectura-opening').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto! ✅';
        resultado.className = 'resultado correcto';
        respuestasCorrectasOpening++;
        
        // Navegación automática para respuestas correctas
        setTimeout(() => {
            siguientePreguntaOpening();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto ❌. La respuesta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectasOpening++;
        
        // Mostrar botón "Continuar" para respuestas incorrectas
        document.getElementById('boton-siguiente-opening').style.display = 'block';
    }
}

// Función para pasar a la siguiente pregunta opening
function siguientePreguntaOpening() {
    preguntaActualOpening++;
    mostrarPreguntaOpening();
}

// Función para mostrar resultados del quiz opening
function mostrarResultadosOpening() {
    const porcentaje = Math.round((respuestasCorrectasOpening / mazoActualOpening.length) * 100);
    
    // Crear pantalla de resultados dinámica
    const resultadosHTML = `
        <div class="resultado-opening-container">
            <h2>🎵 Resultados del Quiz</h2>
            <div class="resultado-opening-detalle">
                <div class="resultado-item">
                    <span class="resultado-label">Preguntas totales:</span>
                    <span class="resultado-valor">${mazoActualOpening.length}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Respuestas correctas:</span>
                    <span class="resultado-valor">${respuestasCorrectasOpening}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Respuestas incorrectas:</span>
                    <span class="resultado-valor">${respuestasIncorrectasOpening}</span>
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
            
            <div class="botones-resultados-opening">
                <button class="boton-principal" onclick="volverAOpeningDetalle()">
                    Volver al Opening
                </button>
                <button class="boton-secundario" onclick="repetirQuizOpening()">
                    Repetir Quiz
                </button>
                <button class="boton-terciario" onclick="verLetraCompleta()">
                    📜 Ver letra completa
                </button>
            </div>
        </div>
    `;
    
    // Crear o actualizar pantalla de resultados
    let resultadosPantalla = document.getElementById('pantalla-resultados-opening');
    if (!resultadosPantalla) {
        resultadosPantalla = document.createElement('div');
        resultadosPantalla.id = 'pantalla-resultados-opening';
        resultadosPantalla.className = 'pantalla';
        document.body.appendChild(resultadosPantalla);
    }
    
    resultadosPantalla.innerHTML = `
        <div class="contenedor">
            <div class="barra-superior">
                <div class="contador">Resultados del Quiz</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="volverAOpeningDetalle()">Volver al Opening</button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                </div>
            </div>
            ${resultadosHTML}
        </div>
    `;
    
    cambiarPantalla('pantalla-resultados-opening');
    
    // Dar recompensa si es 100%
    if (porcentaje === 100) {
        setTimeout(() => {
            if (typeof sistemaEconomia !== 'undefined') {
                sistemaEconomia.agregarDinero(2, "Quiz opening completado al 100%");
                mostrarNotificacion('🎵 ¡Perfecto! +2 S/. por dominar el opening');
            }
        }, 500);
    }
}

// Función para repetir el quiz opening
function repetirQuizOpening() {
    preguntaActualOpening = 0;
    respuestasCorrectasOpening = 0;
    respuestasIncorrectasOpening = 0;
    
    // Mezclar preguntas de nuevo
    for (let i = mazoActualOpening.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActualOpening[i], mazoActualOpening[j]] = [mazoActualOpening[j], mazoActualOpening[i]];
    }
    
    cambiarPantalla('pantalla-quiz-opening');
    mostrarPreguntaOpening();
}

// Función para ver letra completa (placeholder)
function verLetraCompleta() {
    alert('📜 Función "Ver letra completa" en desarrollo.\nPróximamente podrás ver la letra completa del opening con todas las palabras aprendidas.');
}

// ============================================================================
// 6. FUNCIONES DE NAVEGACIÓN PARA OPENINGS
// ============================================================================

function volverAOpeningsSeleccion() {
    cambiarPantalla('pantalla-openings-seleccion');
}

function volverAOpeningDetalle() {
    if (openingActual) {
        cargarOpening(openingActual);
    } else {
        cambiarPantalla('pantalla-openings-seleccion');
    }
}

// ============================================================================
// 7. FUNCIONES DE INTEGRACIÓN CON TU SISTEMA
// ============================================================================

// Función para crear las pantallas HTML dinámicamente
function crearPantallasOpenings() {
    // Solo crear si no existen
    if (!document.getElementById('pantalla-openings-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE OPENINGS -->
            <div id="pantalla-openings-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎵 OPENINGS DE ANIME</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎵 OPENINGS DE ANIME</h1>
                    <p class="subtitulo">Aprende japonés con los openings más famosos</p>
                    
                    <div class="contenedor-openings" id="contenedor-openings">
                        <!-- Los openings se cargan aquí dinámicamente -->
                    </div>
                    
                    <div class="info-openings">
                        <p>📚 5 openings × 5 mazos cada uno = 25 mazos de vocabulario</p>
                        <p>🎶 Aprende las palabras de tus openings favoritos</p>
                        <p>💫 Recompensa doble: +2 S/. por mazo al 100%</p>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE DETALLE DE OPENING -->
            <div id="pantalla-opening-detalle" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador" id="titulo-opening">Opening</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAOpeningsSeleccion()">← Volver a Openings</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="opening-detalle-container">
                        <div class="video-opening-container">
                            <h3 id="nombre-opening">Nombre del Opening</h3>
                            <div class="video-container-opening">
                                <iframe id="video-opening" 
                                        width="100%" 
                                        height="315"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        title="Video del opening">
                                </iframe>
                            </div>
                            <p class="video-desc" id="descripcion-opening">Escucha el opening y aprende su vocabulario</p>
                        </div>
                        
                        <div class="mazos-opening-container">
                            <h3>📚 Mazos de Vocabulario</h3>
                            <p>Practica las palabras que aparecen en este opening:</p>
                            
                            <div class="contenedor-mazos-opening" id="contenedor-mazos-opening">
                                <!-- Los mazos se cargan aquí dinámicamente -->
                            </div>
                            
                            <div class="opening-tips">
                                <p>💡 <strong>Consejo:</strong> Escucha el opening primero, luego estudia las palabras.</p>
                                <p>🎧 Usa auriculares para una mejor experiencia musical.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PANTALLA DE QUIZ OPENING -->
            <div id="pantalla-quiz-opening" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">Quiz Opening: <span id="numero-pregunta-opening">1</span>/<span id="total-preguntas-opening">10</span></div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAOpeningDetalle()">Volver al Opening</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="contenido-quiz">
                        <div class="palabra-japones" id="palabra-japones-opening">言葉</div>
                        <div class="lectura" id="lectura-opening"></div>
                        
                        <div class="contenedor-opciones" id="contenedor-opciones-opening">
                            <!-- Las opciones se generarán dinámicamente -->
                        </div>
                        
                        <div class="resultado" id="resultado-opening"></div>
                        
                        <button class="boton-principal" id="boton-siguiente-opening" onclick="siguientePreguntaOpening()" style="display: none;">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        console.log("✅ Pantallas openings creadas dinámicamente");
    }
}

// ============================================================================
// 8. FUNCIONES DE TESTING PARA DESARROLLO
// ============================================================================

// Agregar palabras a un opening específico (desde consola)
window.agregarPalabrasOpening = function(openingId, mazoNumero, palabras) {
    if (!openingsVocabulario[openingId]) {
        openingsVocabulario[openingId] = {};
    }
    
    const mazoId = `mazo${mazoNumero}`;
    openingsVocabulario[openingId][mazoId] = palabras;
    console.log(`✅ ${palabras.length} palabras agregadas a ${openingId} - ${mazoId}`);
    return true;
};

// Ver estado del sistema openings
window.verEstadoOpenings = function() {
    console.log("🎵 ESTADO DEL SISTEMA OPENINGS:");
    console.log("- Opening actual:", openingActual);
    console.log("- Mazo actual:", mazoActualOpening.length, "palabras");
    console.log("- Pregunta actual:", preguntaActualOpening);
    console.log("- Openings configurados:", Object.keys(openingsConfig.animes).length);
    
    // Contar palabras por opening
    Object.keys(openingsVocabulario).forEach(openingId => {
        let totalPalabras = 0;
        Object.keys(openingsVocabulario[openingId]).forEach(mazoId => {
            totalPalabras += openingsVocabulario[openingId][mazoId].length;
        });
        console.log(`  ${openingId}: ${totalPalabras} palabras en ${Object.keys(openingsVocabulario[openingId]).length} mazos`);
    });
};

// Cambiar video de Google Drive (testing)
window.cambiarVideoOpening = function(openingId, nuevoDriveId) {
    if (openingsConfig.driveOpeningIds[openingId]) {
        openingsConfig.driveOpeningIds[openingId] = nuevoDriveId;
        console.log(`✅ Video de ${openingId} actualizado a ID: ${nuevoDriveId}`);
        
        // Si este opening está actualmente cargado, actualizar
        if (openingActual === openingId) {
            const videoElement = document.getElementById('video-opening');
            if (videoElement) {
                videoElement.src = `https://drive.google.com/file/d/${nuevoDriveId}/preview`;
            }
        }
        return true;
    }
    return false;
};

// ============================================================================
// 9. INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #7209b7, #3a0ca3);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 Sistema openings cargado y listo");
    
    // Crear las pantallas HTML dinámicamente si no existen
    crearPantallasOpenings();
});

// ============================================================================
// 10. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

// Hacer funciones disponibles globalmente
window.iniciarSistemaOpenings = iniciarSistemaOpenings;
window.cargarOpening = cargarOpening;
window.iniciarQuizOpening = iniciarQuizOpening;
window.verificarRespuestaOpening = verificarRespuestaOpening;
window.siguientePreguntaOpening = siguientePreguntaOpening;
window.volverAOpeningsSeleccion = volverAOpeningsSeleccion;
window.volverAOpeningDetalle = volverAOpeningDetalle;
window.repetirQuizOpening = repetirQuizOpening;
window.crearPantallasOpenings = crearPantallasOpenings;

console.log("✅ Sistema openings de anime cargado correctamente");
console.log("🎵 Usa iniciarSistemaOpenings() para comenzar");
console.log("📁 Archivo: 5galeria-opening.js");
