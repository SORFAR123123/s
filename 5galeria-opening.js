// ============================================================================
// SISTEMA OPENINGS DE ANIME COMPLETO CON TODOS LOS SISTEMAS INTEGRADOS
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
    
    // Sistema de recompensas IDÉNTICO al sistema anime
    recompensasPorcentaje: {
        100: { dinero: 2, experiencia: 30, mensaje: '🎵 ¡Perfecto! Dominio musical absoluto' },
        90: { dinero: 1, experiencia: 20, mensaje: '👏 ¡Excelente! Ritmo perfecto' },
        80: { dinero: 0.5, experiencia: 15, mensaje: '👍 ¡Muy bien! Buen oído' },
        70: { dinero: 0.3, experiencia: 10, mensaje: '✅ Bien, sigue practicando' },
        60: { dinero: 0.2, experiencia: 5, mensaje: '💪 Sigue escuchando' },
        50: { dinero: 0.1, experiencia: 3, mensaje: '📚 Necesitas más estudio' },
        0: { dinero: 0, experiencia: 1, mensaje: '🔁 Repite para mejorar' }
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
    
    // OPENING 3 - Kimetsu no Yaiba
    'opening3': {
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
        ],
        'mazo2': [
            { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Amigos', 'Compañeros', 'Vecinos'], respuesta: 0 },
            { japones: '兄妹', lectura: 'kyoudai', opciones: ['Hermanos', 'Padres', 'Primos', 'Tíos'], respuesta: 0 },
            { japones: '守る', lectura: 'mamoru', opciones: ['Proteger', 'Atacar', 'Abandonar', 'Ignorar'], respuesta: 0 },
            { japones: '強い', lectura: 'tsuyoi', opciones: ['Fuerte', 'Débil', 'Normal', 'Mediano'], respuesta: 0 },
            { japones: '弱い', lectura: 'yowai', opciones: ['Débil', 'Fuerte', 'Robusto', 'Resistente'], respuesta: 0 },
            { japones: '修行', lectura: 'shugyou', opciones: ['Entrenamiento', 'Descanso', 'Diversión', 'Trabajo'], respuesta: 0 },
            { japones: '覚悟', lectura: 'kakugo', opciones: ['Determinación', 'Indecisión', 'Duda', 'Miedo'], respuesta: 0 },
            { japones: '使命', lectura: 'shimei', opciones: ['Misión', 'Hobby', 'Pasatiempo', 'Elección'], respuesta: 0 },
            { japones: '覚醒', lectura: 'kakusei', opciones: ['Despertar', 'Dormir', 'Descansar', 'Soñar'], respuesta: 0 },
            { japones: '絆', lectura: 'kizuna', opciones: ['Vínculo', 'Separación', 'Distancia', 'Soledad'], respuesta: 0 }
        ]
    },
    
    // OPENING 4 - Jujutsu Kaisen
    'opening4': {
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
    
    // OPENING 5 - Slam Dunk
    'opening5': {
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
// 3. SISTEMAS DE PALABRAS FALLADAS Y DIFÍCILES PARA OPENINGS
// ============================================================================

let palabrasFalladasOpenings = [];
let palabrasDificilesOpenings = [];
let openingActual = '';
let mazoActualOpening = [];
let preguntaActualOpening = 0;
let respuestasCorrectasOpening = 0;
let respuestasIncorrectasOpening = 0;
let mazoActualIdOpening = '';

// ============================================================================
// 4. SISTEMA DE PALABRAS FALLADAS PARA OPENINGS
// ============================================================================

const sistemaFalladasOpenings = {
    registrarPalabraFallada: function(palabraJapones, respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
        const yaRegistrada = palabrasFalladasOpenings.some(p => 
            p.japones === palabraJapones && 
            p.opening === openingActual &&
            p.mazo === mazoActualIdOpening
        );
        
        if (!yaRegistrada) {
            const palabraFallada = {
                japones: palabraJapones,
                respuestaSeleccionada: respuestaSeleccionada,
                respuestaCorrecta: respuestaCorrecta,
                lectura: lectura,
                opciones: opciones,
                opening: openingActual,
                mazo: mazoActualIdOpening,
                fecha: new Date().toLocaleString(),
                intentosFallados: 1
            };
            
            palabrasFalladasOpenings.push(palabraFallada);
            console.log(`📝 Palabra fallada opening registrada: ${palabraJapones} (${openingActual})`);
            
            actualizarContadoresFalladasOpenings();
            
            return palabraFallada;
        } else {
            const palabraExistente = palabrasFalladasOpenings.find(p => 
                p.japones === palabraJapones && p.opening === openingActual
            );
            if (palabraExistente) {
                palabraExistente.intentosFallados++;
                palabraExistente.fecha = new Date().toLocaleString();
                console.log(`📝 Palabra fallada opening actualizada: ${palabraJapones} (${palabraExistente.intentosFallados} veces)`);
            }
        }
        
        return null;
    },
    
    obtenerPorOpening: function(openingId) {
        return palabrasFalladasOpenings.filter(p => p.opening === openingId);
    },
    
    obtenerTodas: function() {
        return [...palabrasFalladasOpenings];
    },
    
    obtenerEstadisticas: function() {
        return {
            total: palabrasFalladasOpenings.length,
            porOpening: this.agruparPorOpening(),
            masFalladas: this.obtenerMasFalladas()
        };
    },
    
    agruparPorOpening: function() {
        const grupos = {};
        palabrasFalladasOpenings.forEach(palabra => {
            if (!grupos[palabra.opening]) {
                grupos[palabra.opening] = {
                    nombre: openingsConfig.animes[palabra.opening]?.nombre || palabra.opening,
                    cantidad: 0,
                    palabras: []
                };
            }
            grupos[palabra.opening].cantidad++;
            grupos[palabra.opening].palabras.push(palabra);
        });
        return grupos;
    },
    
    obtenerMasFalladas: function() {
        return [...palabrasFalladasOpenings]
            .sort((a, b) => b.intentosFallados - a.intentosFallados)
            .slice(0, 10);
    },
    
    eliminarPalabra: function(palabraJapones, openingId) {
        const index = palabrasFalladasOpenings.findIndex(p => 
            p.japones === palabraJapones && p.opening === openingId
        );
        
        if (index !== -1) {
            const palabraEliminada = palabrasFalladasOpenings.splice(index, 1)[0];
            console.log(`🗑️ Palabra fallada opening eliminada: ${palabraJapones}`);
            actualizarContadoresFalladasOpenings();
            return palabraEliminada;
        }
        return null;
    },
    
    limpiarTodas: function() {
        const cantidad = palabrasFalladasOpenings.length;
        palabrasFalladasOpenings = [];
        console.log(`🗑️ ${cantidad} palabras falladas openings limpiadas`);
        actualizarContadoresFalladasOpenings();
        return cantidad;
    },
    
    limpiarPorOpening: function(openingId) {
        const cantidadInicial = palabrasFalladasOpenings.length;
        palabrasFalladasOpenings = palabrasFalladasOpenings.filter(p => p.opening !== openingId);
        const cantidadEliminada = cantidadInicial - palabrasFalladasOpenings.length;
        console.log(`🗑️ ${cantidadEliminada} palabras falladas limpiadas de ${openingId}`);
        actualizarContadoresFalladasOpenings();
        return cantidadEliminada;
    },
    
    convertirAMazo: function() {
        return palabrasFalladasOpenings.map(palabra => ({
            japones: palabra.japones,
            lectura: palabra.lectura,
            opciones: palabra.opciones,
            respuesta: palabra.opciones.indexOf(palabra.respuestaCorrecta)
        }));
    },
    
    iniciarPractica: function() {
        if (palabrasFalladasOpenings.length === 0) {
            mostrarNotificacionOpenings('📝 No hay palabras falladas para practicar');
            return false;
        }
        
        mazoActualOpening = this.convertirAMazo();
        mazoActualIdOpening = 'falladas';
        preguntaActualOpening = 0;
        respuestasCorrectasOpening = 0;
        respuestasIncorrectasOpening = 0;
        
        for (let i = mazoActualOpening.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualOpening[i], mazoActualOpening[j]] = [mazoActualOpening[j], mazoActualOpening[i]];
        }
        
        cambiarPantalla('pantalla-quiz-opening');
        
        document.getElementById('numero-pregunta-opening').textContent = 1;
        document.getElementById('total-preguntas-opening').textContent = mazoActualOpening.length;
        
        mostrarPreguntaOpening();
        
        console.log(`📝 Iniciando práctica openings con ${mazoActualOpening.length} palabras falladas`);
        mostrarNotificacionOpenings(`📝 Practicando ${mazoActualOpening.length} palabras falladas`);
        
        return true;
    }
};

// ============================================================================
// 5. SISTEMA DE PALABRAS DIFÍCILES PARA OPENINGS
// ============================================================================

const sistemaDificilesOpenings = {
    marcarComoDificil: function(palabra) {
        const yaMarcada = palabrasDificilesOpenings.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura &&
            p.opening === openingActual
        );
        
        if (!yaMarcada) {
            const palabraDificil = {
                ...palabra,
                opening: openingActual,
                mazo: mazoActualIdOpening,
                fecha: new Date().toLocaleString(),
                motivo: 'Marcada manualmente'
            };
            
            palabrasDificilesOpenings.push(palabraDificil);
            console.log(`💀 Palabra opening marcada como difícil: ${palabra.japones}`);
            return palabraDificil;
        }
        return null;
    },
    
    removerDeDificiles: function(palabra) {
        const index = palabrasDificilesOpenings.findIndex(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura &&
            p.opening === openingActual
        );
        
        if (index !== -1) {
            const palabraRemovida = palabrasDificilesOpenings.splice(index, 1)[0];
            console.log(`✅ Palabra opening removida de difíciles: ${palabra.japones}`);
            return palabraRemovida;
        }
        return null;
    },
    
    esDificil: function(palabra) {
        return palabrasDificilesOpenings.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura
        );
    },
    
    obtenerPorOpening: function(openingId) {
        return palabrasDificilesOpenings.filter(p => p.opening === openingId);
    },
    
    obtenerTodas: function() {
        return [...palabrasDificilesOpenings];
    },
    
    convertirAMazo: function() {
        return palabrasDificilesOpenings.map(palabra => ({
            japones: palabra.japones,
            lectura: palabra.lectura,
            opciones: palabra.opciones,
            respuesta: palabra.respuesta
        }));
    },
    
    iniciarPractica: function() {
        if (palabrasDificilesOpenings.length === 0) {
            mostrarNotificacionOpenings('💀 No hay palabras marcadas como difíciles');
            return false;
        }
        
        mazoActualOpening = this.convertirAMazo();
        mazoActualIdOpening = 'dificiles';
        preguntaActualOpening = 0;
        respuestasCorrectasOpening = 0;
        respuestasIncorrectasOpening = 0;
        
        for (let i = mazoActualOpening.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualOpening[i], mazoActualOpening[j]] = [mazoActualOpening[j], mazoActualOpening[i]];
        }
        
        cambiarPantalla('pantalla-quiz-opening');
        
        document.getElementById('numero-pregunta-opening').textContent = 1;
        document.getElementById('total-preguntas-opening').textContent = mazoActualOpening.length;
        
        mostrarPreguntaOpening();
        
        console.log(`💀 Iniciando práctica openings con ${mazoActualOpening.length} palabras difíciles`);
        mostrarNotificacionOpenings(`💀 Practicando ${mazoActualOpening.length} palabras difíciles`);
        
        return true;
    },
    
    limpiarTodas: function() {
        const cantidad = palabrasDificilesOpenings.length;
        palabrasDificilesOpenings = [];
        console.log(`🗑️ ${cantidad} palabras difíciles openings limpiadas`);
        return cantidad;
    }
};

// ============================================================================
// 6. SISTEMA DE RECOMPENSAS PARA OPENINGS
// ============================================================================

const openingsRecompensas = {
    calcularRecompensa: function(porcentaje) {
        let recompensa = null;
        
        if (porcentaje === 100) {
            recompensa = openingsConfig.recompensasPorcentaje[100];
        } else if (porcentaje >= 90) {
            recompensa = openingsConfig.recompensasPorcentaje[90];
        } else if (porcentaje >= 80) {
            recompensa = openingsConfig.recompensasPorcentaje[80];
        } else if (porcentaje >= 70) {
            recompensa = openingsConfig.recompensasPorcentaje[70];
        } else if (porcentaje >= 60) {
            recompensa = openingsConfig.recompensasPorcentaje[60];
        } else if (porcentaje >= 50) {
            recompensa = openingsConfig.recompensasPorcentaje[50];
        } else {
            recompensa = openingsConfig.recompensasPorcentaje[0];
        }
        
        return recompensa;
    },
    
    aplicarRecompensa: function(porcentaje, openingId, mazoId) {
        const recompensa = this.calcularRecompensa(porcentaje);
        const openingNombre = openingsConfig.animes[openingId] ? openingsConfig.animes[openingId].nombre : openingId;
        
        console.log(`🎵 Aplicando recompensa opening: ${porcentaje}% → +${recompensa.dinero} S/. +${recompensa.experiencia} XP`);
        
        // 1. SISTEMA DE ECONOMÍA
        if (typeof sistemaEconomia !== 'undefined' && sistemaEconomia.agregarDinero) {
            sistemaEconomia.agregarDinero(recompensa.dinero, `Opening: ${openingNombre} - Mazo ${mazoId} (${porcentaje}%)`);
        }
        
        // 2. SISTEMA NAKANO (EXPERIENCIA)
        if (typeof sistemaNakano !== 'undefined' && sistemaNakano.agregarExperiencia) {
            sistemaNakano.agregarExperiencia(recompensa.experiencia, `Quiz opening: ${openingNombre} - ${porcentaje}%`);
        }
        
        // 3. EVENTOS DIARIOS
        if (typeof eventosDiarios !== 'undefined' && 
            eventosDiarios.estado.eventoActual && 
            eventosDiarios.estado.aceptado && 
            !eventosDiarios.estado.completado) {
            
            const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
            eventosDiarios.registrarMazoCompletado();
            
            if (eventoEstabaIncompleto && eventosDiarios.estado.completado) {
                console.log("🎯 Evento diario completado desde openings!");
            }
        }
        
        // 4. MISIONES DIARIAS
        if (typeof misionesDiarias !== 'undefined' && porcentaje >= 80) {
            misionesDiarias.registrarMazoCompletado();
        }
        
        return recompensa;
    },
    
    mostrarResumenRecompensas: function(recompensa, porcentaje) {
        return `
            <div class="recompensa-resumen">
                <h4>🎵 Recompensas Obtenidas</h4>
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

function actualizarContadoresFalladasOpenings() {
    const contadorFalladas = document.getElementById('contador-falladas-opening');
    if (contadorFalladas) {
        const totalFalladas = palabrasFalladasOpenings.length;
        contadorFalladas.textContent = `📝 ${totalFalladas} fallada${totalFalladas !== 1 ? 's' : ''}`;
        contadorFalladas.style.display = totalFalladas > 0 ? 'inline-block' : 'none';
    }
}

function actualizarContadoresDificilesOpenings() {
    const contadorDificiles = document.getElementById('contador-dificiles-opening');
    if (contadorDificiles) {
        const totalDificiles = palabrasDificilesOpenings.length;
        contadorDificiles.textContent = `💀 ${totalDificiles} difícil${totalDificiles !== 1 ? 'es' : ''}`;
        contadorDificiles.style.display = totalDificiles > 0 ? 'inline-block' : 'none';
    }
}

function actualizarBotonDificilOpening(esDificil) {
    const botonDificil = document.getElementById('boton-dificil-opening');
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
// 8. FUNCIONES PRINCIPALES DEL SISTEMA OPENINGS
// ============================================================================

function iniciarSistemaOpenings() {
    cambiarPantalla('pantalla-openings-seleccion');
    cargarListaOpenings();
    console.log("🎵 Sistema openings iniciado (CON TODOS LOS SISTEMAS)");
}

function cargarListaOpenings() {
    const contenedor = document.getElementById('contenedor-openings');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(openingsConfig.animes).forEach(openingId => {
        const opening = openingsConfig.animes[openingId];
        const div = document.createElement('div');
        div.className = 'opening-card';
        div.style.borderColor = opening.color;
        div.onclick = () => cargarOpening(openingId);
        
        // Contar mazos disponibles
        let mazosDisponibles = 0;
        if (openingsVocabulario[openingId]) {
            mazosDisponibles = Object.keys(openingsVocabulario[openingId]).filter(mazoId => {
                return openingsVocabulario[openingId][mazoId] && openingsVocabulario[openingId][mazoId].length >= 1;
            }).length;
        }
        
        // Contar palabras falladas para este opening
        const falladasOpening = sistemaFalladasOpenings.obtenerPorOpening(openingId).length;
        const dificilesOpening = sistemaDificilesOpenings.obtenerPorOpening(openingId).length;
        
        div.innerHTML = `
            <img src="${opening.imagen}" alt="${opening.nombre}" class="opening-imagen" 
                 onerror="this.src='https://via.placeholder.com/300x200/333333/ffffff?text=${opening.nombre}'">
            <div class="opening-texto">${opening.nombre}</div>
            <div class="opening-info">${opening.openingNombre}</div>
            <div class="opening-desc">${opening.descripcion}</div>
            <div class="opening-meta">
                <span class="opening-año">${opening.año}</span>
                <span class="opening-tipo">${opening.tipo}</span>
                <span class="opening-mazos">${mazosDisponibles} mazos</span>
            </div>
            <div class="opening-contadores">
                ${falladasOpening > 0 ? `<span class="contador-falladas-mini">📝 ${falladasOpening}</span>` : ''}
                ${dificilesOpening > 0 ? `<span class="contador-dificiles-mini">💀 ${dificilesOpening}</span>` : ''}
            </div>
            <div class="opening-sistemas">
                <span class="sistema-badge economia" title="Economía">💰</span>
                <span class="sistema-badge rpg" title="RPG Nakano">💕</span>
                ${falladasOpening > 0 ? '<span class="sistema-badge falladas" title="Tiene palabras falladas">📝</span>' : ''}
                ${dificilesOpening > 0 ? '<span class="sistema-badge dificiles" title="Tiene palabras difíciles">💀</span>' : ''}
            </div>
        `;
        
        contenedor.appendChild(div);
    });
}

function cargarOpening(openingId) {
    openingActual = openingId;
    const opening = openingsConfig.animes[openingId];
    
    // Obtener el ID real de Google Drive
    const driveId = extraerDriveId(opening.openingDrive);
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

function extraerDriveId(url) {
    const match = url.match(/\/d\/([^\/]+)/);
    return match ? match[1] : url;
}

function cargarMazosOpening(openingId) {
    const contenedor = document.getElementById('contenedor-mazos-opening');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    // Obtener estadísticas para este opening
    const falladasOpening = sistemaFalladasOpenings.obtenerPorOpening(openingId).length;
    const dificilesOpening = sistemaDificilesOpenings.obtenerPorOpening(openingId).length;
    
    // MAZO ESPECIAL: PALABRAS FALLADAS
    if (falladasOpening > 0) {
        const divFalladas = document.createElement('div');
        divFalladas.className = 'mazo-opening-card mazo-fallado-especial';
        divFalladas.onclick = () => sistemaFalladasOpenings.iniciarPractica();
        divFalladas.title = `Practica ${falladasOpening} palabras que fallaste en este opening`;
        
        divFalladas.innerHTML = `
            <div class="mazo-opening-numero" style="color: #ff4444;">📝 FALLADAS</div>
            <div class="mazo-opening-texto">${falladasOpening} palabra${falladasOpening !== 1 ? 's' : ''}</div>
            <div class="mazo-opening-recompensa">
                <span class="recompensa-mini">💰+3</span>
                <span class="recompensa-mini">💕+40</span>
            </div>
            <div class="mazo-opening-info" style="color: #ff4444;">🔥 ¡Supera errores musicales!</div>
        `;
        contenedor.appendChild(divFalladas);
    }
    
    // MAZO ESPECIAL: PALABRAS DIFÍCILES
    if (dificilesOpening > 0) {
        const divDificiles = document.createElement('div');
        divDificiles.className = 'mazo-opening-card mazo-dificil-especial';
        divDificiles.onclick = () => sistemaDificilesOpenings.iniciarPractica();
        divDificiles.title = `Practica ${dificilesOpening} palabras marcadas como difíciles`;
        
        divDificiles.innerHTML = `
            <div class="mazo-opening-numero" style="color: #ff9800;">💀 DIFÍCILES</div>
            <div class="mazo-opening-texto">${dificilesOpening} palabra${dificilesOpening !== 1 ? 's' : ''}</div>
            <div class="mazo-opening-recompensa">
                <span class="recompensa-mini">💰+2</span>
                <span class="recompensa-mini">💕+30</span>
            </div>
            <div class="mazo-opening-info" style="color: #ff9800;">⚡ ¡Domina retos musicales!</div>
        `;
        contenedor.appendChild(divDificiles);
    }
    
    // MAZOS NORMALES DEL OPENING
    if (openingsVocabulario[openingId]) {
        const mazos = Object.keys(openingsVocabulario[openingId]);
        
        // Ordenar mazos numéricamente
        mazos.sort((a, b) => {
            const numA = parseInt(a.replace('mazo', ''));
            const numB = parseInt(b.replace('mazo', ''));
            return numA - numB;
        });
        
        mazos.forEach(mazoId => {
            const mazoNumero = mazoId.replace('mazo', '');
            const div = document.createElement('div');
            div.className = 'mazo-opening-card';
            
            const tienePalabras = openingsVocabulario[openingId][mazoId] && 
                                 openingsVocabulario[openingId][mazoId].length > 0;
            const cantidadPalabras = tienePalabras ? openingsVocabulario[openingId][mazoId].length : 0;
            
            const disponible = tienePalabras && cantidadPalabras >= 1;
            
            if (disponible) {
                div.onclick = () => iniciarQuizOpening(openingId, mazoId);
                div.title = `Haz clic para practicar ${cantidadPalabras} palabras`;
            } else {
                div.classList.add('mazo-inactivo');
                div.onclick = null;
                div.title = 'Este mazo aún no tiene palabras';
            }
            
            div.innerHTML = `
                <div class="mazo-opening-numero">Mazo ${mazoNumero}</div>
                <div class="mazo-opening-texto">${cantidadPalabras} palabra${cantidadPalabras !== 1 ? 's' : ''}</div>
                <div class="mazo-opening-recompensa">
                    <span class="recompensa-mini">💰+2</span>
                    <span class="recompensa-mini">💕+30</span>
                </div>
                <div class="mazo-opening-info">${disponible ? '🎵 Disponible' : '🚧 En preparación'}</div>
            `;
            
            contenedor.appendChild(div);
        });
    }
}

// ============================================================================
// 9. FUNCIONES DEL QUIZ OPENING (CON SISTEMAS INTEGRADOS)
// ============================================================================

function iniciarQuizOpening(openingId, mazoId) {
    if (openingsVocabulario[openingId] && openingsVocabulario[openingId][mazoId]) {
        mazoActualOpening = [...openingsVocabulario[openingId][mazoId]];
        mazoActualIdOpening = mazoId;
        preguntaActualOpening = 0;
        respuestasCorrectasOpening = 0;
        respuestasIncorrectasOpening = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualOpening.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualOpening[i], mazoActualOpening[j]] = [mazoActualOpening[j], mazoActualOpening[i]];
        }
        
        cambiarPantalla('pantalla-quiz-opening');
        
        // Actualizar contadores en interfaz
        actualizarContadoresInterfazQuizOpening();
        
        // Actualizar título del quiz
        document.getElementById('numero-pregunta-opening').textContent = 1;
        document.getElementById('total-preguntas-opening').textContent = mazoActualOpening.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaOpening();
        
        console.log(`🎵 Iniciando quiz opening: ${openingId} - ${mazoId} (${mazoActualOpening.length} palabras)`);
    } else {
        console.error(`❌ No se encontró el mazo ${mazoId} para ${openingId}`);
        alert('Este mazo aún no está disponible. ¡Próximamente!');
    }
}

function actualizarContadoresInterfazQuizOpening() {
    const contadorFalladasQuiz = document.getElementById('contador-falladas-quiz-opening');
    if (contadorFalladasQuiz) {
        contadorFalladasQuiz.textContent = `📝 Falladas: ${respuestasIncorrectasOpening}`;
        contadorFalladasQuiz.style.display = respuestasIncorrectasOpening > 0 ? 'block' : 'none';
    }
    
    actualizarContadoresFalladasOpenings();
    actualizarContadoresDificilesOpenings();
}

function mostrarPreguntaOpening() {
    if (preguntaActualOpening < mazoActualOpening.length) {
        const pregunta = mazoActualOpening[preguntaActualOpening];
        
        // Actualizar contador de pregunta
        document.getElementById('numero-pregunta-opening').textContent = preguntaActualOpening + 1;
        
        // Mostrar palabra japonesa
        document.getElementById('palabra-japones-opening').textContent = pregunta.japones;
        document.getElementById('lectura-opening').textContent = '';
        document.getElementById('resultado-opening').textContent = '';
        document.getElementById('resultado-opening').className = 'resultado';
        document.getElementById('boton-siguiente-opening').style.display = 'none';
        
        // Actualizar botón de "marcar como difícil"
        const esDificil = sistemaDificilesOpenings.esDificil(pregunta);
        actualizarBotonDificilOpening(esDificil);
        
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
            botonOpcion.onclick = () => verificarRespuestaOpening(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultadosOpening();
    }
}

function verificarRespuestaOpening(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-opening .opcion');
    const resultado = document.getElementById('resultado-opening');
    const palabraActual = document.getElementById('palabra-japones-opening').textContent;
    const preguntaActual = mazoActualOpening[preguntaActualOpening];
    
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
        
        // Si esta palabra estaba marcada como difícil y se respondió correctamente
        if (sistemaDificilesOpenings.esDificil(preguntaActual)) {
            setTimeout(() => {
                const confirmar = confirm(`¡Respondiste correctamente "${palabraActual}"!\n¿Quieres quitarla de las palabras difíciles?`);
                if (confirmar) {
                    sistemaDificilesOpenings.removerDeDificiles(preguntaActual);
                    mostrarNotificacionOpenings(`✅ "${palabraActual}" removida de palabras difíciles`);
                    actualizarContadoresDificilesOpenings();
                }
            }, 500);
        }
        
        // Navegación automática para respuestas correctas
        setTimeout(() => {
            siguientePreguntaOpening();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto ❌. La respuesta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectasOpening++;
        
        // REGISTRAR PALABRA FALLADA EN SISTEMA
        sistemaFalladasOpenings.registrarPalabraFallada(
            palabraActual,
            respuestaSeleccionada,
            respuestaCorrecta,
            lectura,
            opciones
        );
        
        // Actualizar contadores
        actualizarContadoresInterfazQuizOpening();
        
        // Mostrar botón "Continuar" para respuestas incorrectas
        document.getElementById('boton-siguiente-opening').style.display = 'block';
    }
}

function siguientePreguntaOpening() {
    preguntaActualOpening++;
    mostrarPreguntaOpening();
}

// ============================================================================
// 10. FUNCIÓN PARA MOSTRAR RESULTADOS DEL OPENING
// ============================================================================

function mostrarResultadosOpening() {
    const porcentaje = Math.round((respuestasCorrectasOpening / mazoActualOpening.length) * 100);
    const mazoNumero = mazoActualIdOpening === 'falladas' ? 'Palabras Falladas' : 
                      mazoActualIdOpening === 'dificiles' ? 'Palabras Difíciles' : 
                      mazoActualIdOpening;
    
    console.log(`🎵 Resultados opening: ${porcentaje}% (${respuestasCorrectasOpening}/${mazoActualOpening.length})`);
    
    // APLICAR RECOMPENSAS A TODOS LOS SISTEMAS
    const recompensa = openingsRecompensas.aplicarRecompensa(porcentaje, openingActual, mazoNumero);
    
    // Crear pantalla de resultados dinámica
    const resultadosHTML = `
        <div class="resultado-opening-container">
            <h2>${mazoActualIdOpening === 'falladas' ? '📝 Resultados - Palabras Falladas' : 
                  mazoActualIdOpening === 'dificiles' ? '💀 Resultados - Palabras Difíciles' : 
                  '🎵 Resultados del Quiz Opening'}</h2>
            
            <div class="resultado-opening-detalle">
                ${mazoActualIdOpening !== 'falladas' && mazoActualIdOpening !== 'dificiles' ? `
                    <div class="resultado-item">
                        <span class="resultado-label">Opening:</span>
                        <span class="resultado-valor">${openingsConfig.animes[openingActual].nombre}</span>
                    </div>
                    <div class="resultado-item">
                        <span class="resultado-label">Canción:</span>
                        <span class="resultado-valor">${openingsConfig.animes[openingActual].openingNombre}</span>
                    </div>
                ` : ''}
                
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
                    <span class="resultado-label">Porcentaje:</span>
                    <span class="resultado-valor resultado-porcentaje">${porcentaje}%</span>
                </div>
                
                <!-- RECOMPENSAS OBTENIDAS -->
                ${openingsRecompensas.mostrarResumenRecompensas(recompensa, porcentaje)}
                
                <!-- ESTADÍSTICAS ESPECIALES PARA MAZOS ESPECIALES -->
                ${mazoActualIdOpening === 'falladas' || mazoActualIdOpening === 'dificiles' ? `
                    <div class="estadisticas-especiales">
                        <h4>📊 Progreso del Sistema</h4>
                        <div class="estadistica-item">
                            <span>📝 Palabras falladas restantes:</span>
                            <span class="estadistica-valor">${sistemaFalladasOpenings.obtenerTodas().length}</span>
                        </div>
                        <div class="estadistica-item">
                            <span>💀 Palabras difíciles restantes:</span>
                            <span class="estadistica-valor">${sistemaDificilesOpenings.obtenerTodas().length}</span>
                        </div>
                        <p class="estadistica-nota">
                            Las palabras que respondiste correctamente han sido removidas de este sistema especial
                        </p>
                    </div>
                ` : ''}
                
                <div class="resultado-mensaje">
                    ${porcentaje === 100 ? '¡Perfecto! 🎉 Dominas este vocabulario musical' : 
                      porcentaje >= 80 ? '¡Muy bien! 👏 Ritmo perfecto' : 
                      porcentaje >= 60 ? 'Buen trabajo 👍 Sigue practicando' : 
                      'Sigue estudiando 💪 Lo lograrás'}
                </div>
            </div>
            
            <div class="botones-resultados-opening">
                <button class="boton-principal" onclick="volverAOpeningDetalle()">
                    ${mazoActualIdOpening === 'falladas' || mazoActualIdOpening === 'dificiles' ? 'Volver a Openings' : 'Volver al Opening'}
                </button>
                <button class="boton-secundario" onclick="repetirQuizOpening()">
                    Repetir Quiz
                </button>
                
                <!-- BOTONES ESPECIALES PARA LIMPIAR SISTEMAS -->
                ${sistemaFalladasOpenings.obtenerTodas().length > 0 ? `
                    <button class="boton-terciario" onclick="limpiarPalabrasFalladasOpening()" 
                            style="background: linear-gradient(135deg, #ff4444, #cc0000);">
                        🗑️ Limpiar Falladas (${sistemaFalladasOpenings.obtenerTodas().length})
                    </button>
                ` : ''}
                
                ${sistemaDificilesOpenings.obtenerTodas().length > 0 ? `
                    <button class="boton-terciario" onclick="limpiarPalabrasDificilesOpening()" 
                            style="background: linear-gradient(135deg, #ff9800, #ff5722);">
                        🗑️ Limpiar Difíciles (${sistemaDificilesOpenings.obtenerTodas().length})
                    </button>
                ` : ''}
            </div>
            
            <!-- INFO SISTEMAS ACTIVOS -->
            <div class="sistemas-activos-info">
                <h4>🎮 Sistemas activos en este quiz:</h4>
                <div class="sistemas-lista">
                    <span class="sistema-activo">💰 Economía: +${recompensa.dinero} S/.</span>
                    <span class="sistema-activo">💕 RPG Nakano: +${recompensa.experiencia} XP</span>
                    ${respuestasIncorrectasOpening > 0 ? '<span class="sistema-activo">📝 Palabras falladas: Registradas</span>' : ''}
                    ${mazoActualIdOpening === 'falladas' ? '<span class="sistema-activo">📝 Sistema falladas: Activo</span>' : ''}
                    ${mazoActualIdOpening === 'dificiles' ? '<span class="sistema-activo">💀 Sistema difíciles: Activo</span>' : ''}
                </div>
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
                <div class="contador">Resultados Opening</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="volverAOpeningDetalle()">
                        ${mazoActualIdOpening === 'falladas' || mazoActualIdOpening === 'dificiles' ? 'Volver a Openings' : 'Volver al Opening'}
                    </button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                </div>
            </div>
            ${resultadosHTML}
        </div>
    `;
    
    cambiarPantalla('pantalla-resultados-opening');
}

// ============================================================================
// 11. FUNCIONES PARA MANEJAR PALABRAS DIFÍCILES EN OPENINGS
// ============================================================================

function marcarPalabraDificilOpening() {
    if (preguntaActualOpening < mazoActualOpening.length) {
        const palabraActual = mazoActualOpening[preguntaActualOpening];
        
        if (sistemaDificilesOpenings.esDificil(palabraActual)) {
            // Remover de difíciles
            sistemaDificilesOpenings.removerDeDificiles(palabraActual);
            mostrarNotificacionOpenings(`✅ "${palabraActual.japones}" removida de palabras difíciles`);
        } else {
            // Marcar como difícil
            sistemaDificilesOpenings.marcarComoDificil(palabraActual);
            mostrarNotificacionOpenings(`💀 "${palabraActual.japones}" marcada como difícil`);
        }
        
        // Actualizar botón
        actualizarBotonDificilOpening(sistemaDificilesOpenings.esDificil(palabraActual));
        
        // Actualizar contadores
        actualizarContadoresDificilesOpenings();
    }
}

function limpiarPalabrasFalladasOpening() {
    const totalFalladas = sistemaFalladasOpenings.obtenerTodas().length;
    if (totalFalladas === 0) {
        mostrarNotificacionOpenings('📝 No hay palabras falladas para limpiar');
        return;
    }
    
    const confirmar = confirm(`¿Estás seguro de limpiar TODAS las ${totalFalladas} palabras falladas de openings?\nEsta acción no se puede deshacer.`);
    if (confirmar) {
        const cantidad = sistemaFalladasOpenings.limpiarTodas();
        mostrarNotificacionOpenings(`🗑️ ${cantidad} palabras falladas openings limpiadas`);
        
        actualizarContadoresFalladasOpenings();
        if (openingActual) {
            cargarMazosOpening(openingActual);
        }
    }
}

function limpiarPalabrasDificilesOpening() {
    const totalDificiles = sistemaDificilesOpenings.obtenerTodas().length;
    if (totalDificiles === 0) {
        mostrarNotificacionOpenings('💀 No hay palabras difíciles para limpiar');
        return;
    }
    
    const confirmar = confirm(`¿Estás seguro de limpiar TODAS las ${totalDificiles} palabras difíciles de openings?\nEsta acción no se puede deshacer.`);
    if (confirmar) {
        const cantidad = sistemaDificilesOpenings.limpiarTodas();
        mostrarNotificacionOpenings(`🗑️ ${cantidad} palabras difíciles openings limpiadas`);
        
        actualizarContadoresDificilesOpenings();
        if (openingActual) {
            cargarMazosOpening(openingActual);
        }
    }
}

// ============================================================================
// 12. FUNCIONES AUXILIARES PARA OPENINGS
// ============================================================================

function mostrarNotificacionOpenings(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #7209b7, #3a0ca3);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(114, 9, 183, 0.5);
        border-left: 5px solid #00ff88;
    `;
    notificacion.textContent = mensaje;
    notificacion.className = 'notificacion-opening';
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

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

function volverAOpeningsSeleccion() {
    cambiarPantalla('pantalla-openings-seleccion');
}

function volverAOpeningDetalle() {
    if (openingActual && mazoActualIdOpening !== 'falladas' && mazoActualIdOpening !== 'dificiles') {
        cargarOpening(openingActual);
    } else {
        cambiarPantalla('pantalla-openings-seleccion');
    }
}

// ============================================================================
// 13. CREAR PANTALLAS DINÁMICAS PARA OPENINGS
// ============================================================================

function crearPantallasOpenings() {
    if (!document.getElementById('pantalla-openings-seleccion')) {
        const pantallasHTML = `
            <!-- PANTALLA DE SELECCIÓN DE OPENINGS -->
            <div id="pantalla-openings-seleccion" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎵 OPENINGS DE ANIME CON SISTEMAS COMPLETOS</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <h1>🎵 GALERÍA DE OPENINGS COMPLETA</h1>
                    <p class="subtitulo">Aprende japonés con los openings más famosos - ¡Sistemas completos!</p>
                    
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
                    
                    <div class="contenedor-openings" id="contenedor-openings"></div>
                    
                    <div class="estadisticas-globales" id="estadisticas-globales-opening" style="display: none;">
                        <h4>📊 Estadísticas Globales Openings:</h4>
                        <div class="estadisticas-grid">
                            <div class="estadistica-item-global">
                                <span class="estadistica-icon">📝</span>
                                <span class="estadistica-texto">Palabras falladas:</span>
                                <span class="estadistica-valor" id="total-falladas-opening">0</span>
                            </div>
                            <div class="estadistica-item-global">
                                <span class="estadistica-icon">💀</span>
                                <span class="estadistica-texto">Palabras difíciles:</span>
                                <span class="estadistica-valor" id="total-dificiles-opening">0</span>
                            </div>
                            <div class="estadistica-item-global">
                                <span class="estadistica-icon">🎵</span>
                                <span class="estadistica-texto">Openings con falladas:</span>
                                <span class="estadistica-valor" id="openings-falladas-global">0</span>
                            </div>
                        </div>
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
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
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
                            <h3>📚 Mazos de Vocabulario <span id="contador-mazos-opening" style="color: #00ff88; font-size: 0.8em;"></span></h3>
                            <p>Practica las palabras que aparecen en este opening:</p>
                            
                            <div class="contenedor-mazos-opening" id="contenedor-mazos-opening"></div>
                            
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
            
            <!-- PANTALLA DE QUIZ OPENING -->
            <div id="pantalla-quiz-opening" class="pantalla">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">Quiz Opening: <span id="numero-pregunta-opening">1</span>/<span id="total-preguntas-opening">10</span></div>
                        <div class="botones-superiores">
                            <span id="contador-falladas-opening" style="display: none; color: #ff4444; margin-right: 15px; font-weight: bold;"></span>
                            <span id="contador-dificiles-opening" style="display: none; color: #ff9800; margin-right: 15px; font-weight: bold;"></span>
                            <button class="boton-home" onclick="volverAOpeningDetalle()">Volver al Opening</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                    </div>
                    
                    <div class="contenido-quiz">
                        <div class="palabra-japones" id="palabra-japones-opening">言葉</div>
                        <div class="lectura" id="lectura-opening"></div>
                        
                        <div class="contenedor-opciones" id="contenedor-opciones-opening"></div>
                        
                        <div class="resultado" id="resultado-opening"></div>
                        
                        <div class="botones-quiz-opening">
                            <button class="boton-principal" id="boton-siguiente-opening" onclick="siguientePreguntaOpening()" style="display: none;">
                                Continuar
                            </button>
                            <button class="boton-dificil" id="boton-dificil-opening" onclick="marcarPalabraDificilOpening()">
                                💀 Marcar como difícil
                            </button>
                        </div>
                        
                        <div id="contador-falladas-quiz-opening" style="display: none; text-align: center; margin-top: 15px; color: #ff4444; font-weight: bold;"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pantallasHTML);
        
        agregarEstilosOpeningsCompleto();
        
        console.log("✅ Pantallas openings creadas dinámicamente (CON SISTEMAS COMPLETOS)");
    }
}

// ============================================================================
// 14. AGREGAR ESTILOS COMPLETOS PARA OPENINGS
// ============================================================================

function agregarEstilosOpeningsCompleto() {
    if (document.getElementById('estilos-openings-completo')) return;
    
    const estilos = `
        <style id="estilos-openings-completo">
            /* TARJETAS DE OPENINGS */
            .opening-card {
                background: linear-gradient(135deg, rgba(30, 30, 40, 0.9), rgba(20, 20, 30, 0.9));
                border-radius: 15px;
                padding: 15px;
                margin: 15px;
                text-align: center;
                border: 3px solid;
                cursor: pointer;
                transition: all 0.3s ease;
                color: white;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                position: relative;
                overflow: hidden;
            }
            
            .opening-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            }
            
            .opening-imagen {
                width: 100%;
                height: 180px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 10px;
                border: 2px solid rgba(255, 255, 255, 0.1);
            }
            
            .opening-texto {
                font-weight: bold;
                font-size: 1.1em;
                margin-bottom: 5px;
                color: #ffffff;
            }
            
            .opening-info {
                color: #00ff88;
                font-size: 0.9em;
                margin-bottom: 8px;
            }
            
            .opening-desc {
                color: #cccccc;
                font-size: 0.85em;
                margin-bottom: 10px;
                min-height: 40px;
            }
            
            .opening-meta {
                display: flex;
                justify-content: space-between;
                font-size: 0.8em;
                color: #888888;
                margin-bottom: 10px;
            }
            
            .opening-contadores {
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
            
            .opening-sistemas {
                display: flex;
                justify-content: center;
                gap: 5px;
                margin-top: 10px;
            }
            
            .sistema-badge {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8em;
            }
            
            .sistema-badge.economia {
                background: rgba(0, 200, 83, 0.2);
                color: #00c853;
                border: 1px solid #00c853;
            }
            
            .sistema-badge.rpg {
                background: rgba(255, 107, 157, 0.2);
                color: #ff6b9d;
                border: 1px solid #ff6b9d;
            }
            
            .sistema-badge.falladas {
                background: rgba(255, 68, 68, 0.2);
                color: #ff4444;
                border: 1px solid #ff4444;
            }
            
            .sistema-badge.dificiles {
                background: rgba(255, 152, 0, 0.2);
                color: #ff9800;
                border: 1px solid #ff9800;
            }
            
            /* MAZOS DE OPENINGS */
            .mazo-opening-card {
                background: linear-gradient(135deg, rgba(40, 40, 60, 0.8), rgba(30, 30, 50, 0.8));
                border-radius: 12px;
                padding: 15px;
                margin: 10px;
                text-align: center;
                border: 2px solid #7209b7;
                cursor: pointer;
                transition: all 0.3s ease;
                color: white;
                min-width: 150px;
                flex: 1;
            }
            
            .mazo-opening-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(114, 9, 183, 0.4);
                border-color: #00ff88;
            }
            
            .mazo-opening-numero {
                font-weight: bold;
                font-size: 1.1em;
                margin-bottom: 5px;
                color: #7209b7;
            }
            
            .mazo-opening-texto {
                font-size: 0.9em;
                margin-bottom: 8px;
                color: #cccccc;
            }
            
            .mazo-opening-recompensa {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-bottom: 8px;
            }
            
            .recompensa-mini {
                background: rgba(0, 255, 136, 0.1);
                color: #00ff88;
                padding: 2px 6px;
                border-radius: 5px;
                font-size: 0.8em;
                border: 1px solid #00ff88;
            }
            
            .mazo-opening-info {
                font-size: 0.8em;
                color: #888888;
                font-style: italic;
            }
            
            /* MAZOS ESPECIALES */
            .mazo-opening-card.mazo-fallado-especial {
                border: 3px solid #ff4444;
                background: linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(255, 68, 68, 0.2));
                animation: pulseFalladas 2s infinite;
            }
            
            .mazo-opening-card.mazo-dificil-especial {
                border: 3px solid #ff9800;
                background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 152, 0, 0.2));
                animation: pulseDificiles 2s infinite;
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
            
            /* CONTAINERS ESPECÍFICOS */
            .contenedor-openings {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            
            .contenedor-mazos-opening {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
                margin: 20px 0;
            }
            
            .video-container-opening {
                position: relative;
                padding-bottom: 56.25%;
                height: 0;
                overflow: hidden;
                border-radius: 15px;
                margin: 20px 0;
                border: 3px solid #7209b7;
            }
            
            .video-container-opening iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
            }
            
            /* ANIMACIONES */
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
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .contenedor-openings {
                    grid-template-columns: 1fr;
                }
                
                .contenedor-mazos-opening {
                    flex-direction: column;
                    align-items: center;
                }
                
                .mazo-opening-card {
                    width: 100%;
                    max-width: 250px;
                }
                
                .boton-dificil {
                    width: 100%;
                    max-width: 250px;
                }
            }
            
            @media (max-width: 480px) {
                .opening-card {
                    margin: 10px 5px;
                    padding: 10px;
                }
                
                .opening-imagen {
                    height: 150px;
                }
                
                .opening-contadores {
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                }
                
                .mazo-opening-card {
                    padding: 10px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// ============================================================================
// 15. INICIALIZACIÓN Y EXPORTACIÓN
// ============================================================================

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 Sistema openings completo cargado y listo");
    
    // Crear las pantallas HTML dinámicamente si no existen
    crearPantallasOpenings();
});

// Exportar funciones para uso global
window.iniciarSistemaOpenings = iniciarSistemaOpenings;
window.cargarOpening = cargarOpening;
window.iniciarQuizOpening = iniciarQuizOpening;
window.verificarRespuestaOpening = verificarRespuestaOpening;
window.siguientePreguntaOpening = siguientePreguntaOpening;
window.marcarPalabraDificilOpening = marcarPalabraDificilOpening;
window.limpiarPalabrasFalladasOpening = limpiarPalabrasFalladasOpening;
window.limpiarPalabrasDificilesOpening = limpiarPalabrasDificilesOpening;
window.sistemaFalladasOpenings = sistemaFalladasOpenings;
window.sistemaDificilesOpenings = sistemaDificilesOpenings;
window.volverAOpeningsSeleccion = volverAOpeningsSeleccion;
window.volverAOpeningDetalle = volverAOpeningDetalle;
window.repetirQuizOpening = repetirQuizOpening;
window.crearPantallasOpenings = crearPantallasOpenings;

// ============================================================================
// 16. CONSOLA DE AYUDA
// ============================================================================

console.log("✅ Sistema openings COMPLETAMENTE TERMINADO cargado correctamente");
console.log("🎵 SISTEMAS ACTIVOS EN OPENINGS:");
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
console.log("   - sistemaFalladasOpenings.verEstadisticas()");
console.log("   - limpiarPalabrasFalladasOpening()");
console.log("   - limpiarPalabrasDificilesOpening()");
console.log("   - Durante el quiz: Usa el botón 💀 para marcar palabras difíciles");
console.log("");
console.log("💡 PARA COMENZAR:");
console.log("   - Desde el menú: Haz clic en 'Sistema Openings'");
console.log("   - Desde consola: iniciarSistemaOpenings()");
console.log("");
console.log("🎵 ¡Disfruta del sistema openings más completo!");
