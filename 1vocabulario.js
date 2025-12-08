// ============================================================================
// VOCABULARIO COMPLETO - ARCHIVO SEPARADO
// Contiene TODO el vocabulario para todos los mazos
// ============================================================================

const vocabularioDatabase = {
    // ================================================
    // THE LAST SUMMER 1
    // ================================================
    
    // Sub-contenedor 1.1
    'sub1_1': {
        1: [
            { japones: '今朝', lectura: 'kesa', opciones: ['Esta mañana', 'Esta tarde', 'Anoche', 'Ayer'], respuesta: 0 },
            { japones: '処', lectura: 'tokoro', opciones: ['Lugar', 'Tiempo', 'Persona', 'Cosa'], respuesta: 0 },
            { japones: '出掛け', lectura: 'dekake', opciones: ['Salir', 'Entrar', 'Quedarse', 'Volver'], respuesta: 0 },
            { japones: '女将', lectura: 'okami', opciones: ['Dueña', 'Mesera', 'Cliente', 'Cocinera'], respuesta: 0 },
            { japones: '寂しい', lectura: 'sabishii', opciones: ['Solitario', 'Alegre', 'Ocupado', 'Ruidoso'], respuesta: 0 },
            { japones: '憩い', lectura: 'ikoi', opciones: ['Descanso', 'Trabajo', 'Ejercicio', 'Estudio'], respuesta: 0 },
            { japones: '手伝い', lectura: 'tetsudai', opciones: ['Ayuda', 'Obstáculo', 'Problema', 'Solución'], respuesta: 0 },
            { japones: '撮る', lectura: 'toru', opciones: ['Tomar foto', 'Escribir', 'Leer', 'Escuchar'], respuesta: 0 },
            { japones: '見送る', lectura: 'miokuru', opciones: ['Despedir', 'Recibir', 'Ignorar', 'Saludar'], respuesta: 0 },
            { japones: '限る', lectura: 'kagiru', opciones: ['Limitar', 'Ampliar', 'Permitir', 'Prohibir'], respuesta: 0 }
        ],
        2: [
            { japones: '吐息', lectura: 'toiki', opciones: ['Suspiro', 'Risa', 'Grito', 'Llanto'], respuesta: 0 },
            { japones: '応援', lectura: 'ouen', opciones: ['Apoyo', 'Crítica', 'Indiferencia', 'Oposición'], respuesta: 0 },
            { japones: '文句', lectura: 'monku', opciones: ['Queja', 'Elogio', 'Sugerencia', 'Pregunta'], respuesta: 0 },
            { japones: '構う', lectura: 'kamau', opciones: ['Preocuparse', 'Ignorar', 'Aceptar', 'Rechazar'], respuesta: 0 },
            { japones: '残り香', lectura: 'nokorika', opciones: ['Aroma residual', 'Sonido', 'Imagen', 'Sabor'], respuesta: 0 },
            { japones: '減る', lectura: 'heru', opciones: ['Disminuir', 'Aumentar', 'Mantener', 'Cambiar'], respuesta: 0 },
            { japones: '誰彼', lectura: 'dareka', opciones: ['Alguien', 'Nadie', 'Todos', 'Algo'], respuesta: 0 },
            { japones: '過激', lectura: 'kageki', opciones: ['Extremo', 'Moderado', 'Suave', 'Normal'], respuesta: 0 },
            { japones: '開き直る', lectura: 'hirakinarou', opciones: ['Cambiar de actitud', 'Mantenerse', 'Rendirse', 'Avanzar'], respuesta: 0 },
            { japones: '関係ない', lectura: 'kankeinai', opciones: ['No relacionado', 'Importante', 'Relevante', 'Conectado'], respuesta: 0 }
        ],
        3: [
            { japones: '刺激', lectura: 'shigeki', opciones: ['Estímulo', 'Calma', 'Aburrimiento', 'Paz'], respuesta: 0 },
            { japones: '否定', lectura: 'hitei', opciones: ['Negación', 'Afirmación', 'Duda', 'Aceptación'], respuesta: 0 },
            { japones: '宝の持ち腐れ', lectura: 'takarano mochiguse', opciones: ['Talento desperdiciado', 'Tesoro', 'Pobreza', 'Generosidad'], respuesta: 0 },
            { japones: '心配', lectura: 'shinpai', opciones: ['Preocupación', 'Tranquilidad', 'Confianza', 'Seguridad'], respuesta: 0 },
            { japones: '性欲', lectura: 'seiyoku', opciones: ['Deseo sexual', 'Hambre', 'Sed', 'Cansancio'], respuesta: 0 },
            { japones: '機会', lectura: 'kikai', opciones: ['Oportunidad', 'Peligro', 'Problema', 'Obstáculo'], respuesta: 0 },
            { japones: '活かす', lectura: 'ikasu', opciones: ['Aprovechar', 'Desperdiciar', 'Ignorar', 'Rechazar'], respuesta: 0 },
            { japones: '経験不足', lectura: 'keiken busoku', opciones: ['Falta de experiencia', 'Mucha experiencia', 'Talento', 'Habilidad'], respuesta: 0 },
            { japones: '言い寄る', lectura: 'iiyoru', opciones: ['Acercarse a alguien', 'Alejarse', 'Ignorar', 'Evitar'], respuesta: 0 },
            { japones: '飽きる', lectura: 'akiru', opciones: ['Cansarse', 'Entusiasmarse', 'Continuar', 'Empezar'], respuesta: 0 }
        ],
        4: [
            { japones: '合格', lectura: 'goukaku', opciones: ['Aprobar', 'Reprobar', 'Intentar', 'Estudiar'], respuesta: 0 },
            { japones: '圧し潰す', lectura: 'asshitsubusu', opciones: ['Aplastar', 'Levantar', 'Construir', 'Reparar'], respuesta: 0 },
            { japones: '密着', lectura: 'micchaku', opciones: ['Pegado', 'Separado', 'Distante', 'Aislado'], respuesta: 0 },
            { japones: '届く', lectura: 'todoku', opciones: ['Llegar', 'Partir', 'Perderse', 'Desaparecer'], respuesta: 0 },
            { japones: '巻きつく', lectura: 'makitsuku', opciones: ['Enrollarse', 'Desenrollar', 'Cortar', 'Pegar'], respuesta: 0 },
            { japones: '惜しい', lectura: 'oshii', opciones: ['Lamentable', 'Afortunado', 'Normal', 'Extraño'], respuesta: 0 },
            { japones: '拒否権', lectura: 'kyohiken', opciones: ['Derecho a veto', 'Permiso', 'Aprobación', 'Acuerdo'], respuesta: 0 },
            { japones: '経験', lectura: 'keiken', opciones: ['Experiencia', 'Ignorancia', 'Teoría', 'Estudio'], respuesta: 0 },
            { japones: '蒸す', lectura: 'musu', opciones: ['Humedecer', 'Secar', 'Calentar', 'Enfriar'], respuesta: 0 }
        ],
        5: [
            { japones: '大体', lectura: 'daitai', opciones: ['Aproximadamente', 'Exactamente', 'Completamente', 'Parcialmente'], respuesta: 0 },
            { japones: '起きる', lectura: 'okiru', opciones: ['Despertar', 'Dormir', 'Soñar', 'Descansar'], respuesta: 0 },
        ]
    },
    
    // Sub-contenedor 1.2
    'sub1_2': {
        1: [
            { japones: '学校', lectura: 'gakkou', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], respuesta: 0 },
            { japones: '勉強', lectura: 'benkyou', opciones: ['Estudio', 'Juego', 'Descanso', 'Trabajo'], respuesta: 0 },
            { japones: '教室', lectura: 'kyoushitsu', opciones: ['Salón de clases', 'Oficina', 'Cocina', 'Baño'], respuesta: 0 },
            { japones: '先生', lectura: 'sensei', opciones: ['Profesor', 'Estudiante', 'Director', 'Padre'], respuesta: 0 },
            { japones: '生徒', lectura: 'seito', opciones: ['Estudiante', 'Profesor', 'Padre', 'Vecino'], respuesta: 0 },
            { japones: '試験', lectura: 'shiken', opciones: ['Examen', 'Tarea', 'Proyecto', 'Presentación'], respuesta: 0 },
            { japones: '宿題', lectura: 'shukudai', opciones: ['Tarea', 'Examen', 'Proyecto', 'Investigación'], respuesta: 0 },
            { japones: '卒業', lectura: 'sotsugyou', opciones: ['Graduación', 'Ingreso', 'Transferencia', 'Abandono'], respuesta: 0 },
            { japones: '入学', lectura: 'nyuugaku', opciones: ['Ingreso', 'Graduación', 'Transferencia', 'Abandono'], respuesta: 0 },
            { japones: 'クラス', lectura: 'kurasu', opciones: ['Clase', 'Escuela', 'Grupo', 'Equipo'], respuesta: 0 }
        ],
        2: [
            { japones: '部活', lectura: 'bukatsu', opciones: ['Club escolar', 'Trabajo', 'Estudio', 'Descanso'], respuesta: 0 },
            { japones: '文化祭', lectura: 'bunkasai', opciones: ['Festival cultural', 'Deporte', 'Examen', 'Vacaciones'], respuesta: 0 },
            { japones: '運動会', lectura: 'undoukai', opciones: ['Día deportivo', 'Ceremonia', 'Examen', 'Fiesta'], respuesta: 0 },
            { japones: '修学旅行', lectura: 'shuugakuryokou', opciones: ['Viaje escolar', 'Vacaciones', 'Trabajo', 'Estudio'], respuesta: 0 },
            { japones: '夏休み', lectura: 'natsuyasumi', opciones: ['Vacaciones de verano', 'Vacaciones de invierno', 'Fin de semana', 'Feriado'], respuesta: 0 },
            { japones: '冬休み', lectura: 'fuyuyasumi', opciones: ['Vacaciones de invierno', 'Vacaciones de verano', 'Fin de semana', 'Feriado'], respuesta: 0 },
            { japones: '春休み', lectura: 'haruyasumi', opciones: ['Vacaciones de primavera', 'Vacaciones de verano', 'Fin de semana', 'Feriado'], respuesta: 0 },
            { japones: '新学期', lectura: 'shingakki', opciones: ['Nuevo semestre', 'Vacaciones', 'Exámenes', 'Graduación'], respuesta: 0 },
            { japones: '終業式', lectura: 'shuugyoushiki', opciones: ['Ceremonia de fin de clases', 'Ceremonia de inicio', 'Graduación', 'Ingreso'], respuesta: 0 },
            { japones: '始業式', lectura: 'shigyoushiki', opciones: ['Ceremonia de inicio de clases', 'Ceremonia de fin', 'Graduación', 'Ingreso'], respuesta: 0 }
        ],
        3: [
            { japones: '美術', lectura: 'bijutsu', opciones: ['Arte', 'Ciencia', 'Matemáticas', 'Historia'], respuesta: 0 },
            { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Arte', 'Deporte', 'Ciencia'], respuesta: 0 },
            { japones: '体育', lectura: 'taiiku', opciones: ['Educación física', 'Matemáticas', 'Historia', 'Arte'], respuesta: 0 },
            { japones: '理科', lectura: 'rika', opciones: ['Ciencia', 'Matemáticas', 'Historia', 'Arte'], respuesta: 0 },
            { japones: '社会', lectura: 'shakai', opciones: ['Estudios sociales', 'Matemáticas', 'Ciencia', 'Arte'], respuesta: 0 },
            { japones: '国語', lectura: 'kokugo', opciones: ['Lengua japonesa', 'Matemáticas', 'Ciencia', 'Historia'], respuesta: 0 },
            { japones: '数学', lectura: 'suugaku', opciones: ['Matemáticas', 'Ciencia', 'Historia', 'Arte'], respuesta: 0 },
            { japones: '英語', lectura: 'eigo', opciones: ['Inglés', 'Japonés', 'Español', 'Francés'], respuesta: 0 },
            { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Geografía', 'Ciencia', 'Matemáticas'], respuesta: 0 },
            { japones: '地理', lectura: 'chiri', opciones: ['Geografía', 'Historia', 'Ciencia', 'Matemáticas'], respuesta: 0 }
        ],
        4: [
            { japones: '図書館', lectura: 'toshokan', opciones: ['Biblioteca', 'Laboratorio', 'Gimnasio', 'Oficina'], respuesta: 0 },
            { japones: '実験', lectura: 'jikken', opciones: ['Experimento', 'Estudio', 'Investigación', 'Observación'], respuesta: 0 },
            { japones: '研究', lectura: 'kenkyuu', opciones: ['Investigación', 'Estudio', 'Experimento', 'Observación'], respuesta: 0 },
            { japones: '発表', lectura: 'happyou', opciones: ['Presentación', 'Examen', 'Tarea', 'Proyecto'], respuesta: 0 },
            { japones: '討論', lectura: 'touron', opciones: ['Debate', 'Conversación', 'Charla', 'Monólogo'], respuesta: 0 },
            { japones: '質問', lectura: 'shitsumon', opciones: ['Pregunta', 'Respuesta', 'Explicación', 'Afirmación'], respuesta: 0 },
            { japones: '解答', lectura: 'kaitou', opciones: ['Respuesta', 'Pregunta', 'Problema', 'Solución'], respuesta: 0 },
            { japones: '問題', lectura: 'mondai', opciones: ['Problema', 'Solución', 'Pregunta', 'Respuesta'], respuesta: 0 },
            { japones: '理解', lectura: 'rikai', opciones: ['Comprensión', 'Confusión', 'Duda', 'Ignorancia'], respuesta: 0 },
            { japones: '知識', lectura: 'chishiki', opciones: ['Conocimiento', 'Ignorancia', 'Duda', 'Confusión'], respuesta: 0 }
        ],
        5: [
            { japones: '才能', lectura: 'sainou', opciones: ['Talento', 'Esfuerzo', 'Suerte', 'Oportunidad'], respuesta: 0 },
            { japones: '創造', lectura: 'souzou', opciones: ['Creatividad', 'Imitación', 'Copia', 'Repetición'], respuesta: 0 },
            { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Descubrimiento', 'Creación', 'Innovación'], respuesta: 0 },
            { japones: '発見', lectura: 'hakken', opciones: ['Descubrimiento', 'Invención', 'Creación', 'Innovación'], respuesta: 0 },
            { japones: '分析', lectura: 'bunseki', opciones: ['Análisis', 'Síntesis', 'Resumen', 'Conclusión'], respuesta: 0 },
            { japones: '理論', lectura: 'riron', opciones: ['Teoría', 'Práctica', 'Hipótesis', 'Conclusión'], respuesta: 0 },
            { japones: '実践', lectura: 'jissen', opciones: ['Práctica', 'Teoría', 'Estudio', 'Investigación'], respuesta: 0 },
            { japones: '応用', lectura: 'ouyou', opciones: ['Aplicación', 'Teoría', 'Práctica', 'Estudio'], respuesta: 0 },
            { japones: '基礎', lectura: 'kiso', opciones: ['Base', 'Avanzado', 'Complejo', 'Difícil'], respuesta: 0 },
            { japones: '応用', lectura: 'ouyou', opciones: ['Avanzado', 'Básico', 'Simple', 'Fácil'], respuesta: 0 }
        ]
    },
    
    // Sub-contenedor 1.3
    'sub1_3': {
        1: [
            { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Amigos', 'Vecinos', 'Compañeros'], respuesta: 0 },
            { japones: '父', lectura: 'chichi', opciones: ['Padre', 'Madre', 'Hermano', 'Hermana'], respuesta: 0 },
            { japones: '母', lectura: 'haha', opciones: ['Madre', 'Padre', 'Hermano', 'Hermana'], respuesta: 0 },
            { japones: '兄弟', lectura: 'kyoudai', opciones: ['Hermanos', 'Padres', 'Abuelos', 'Tíos'], respuesta: 0 },
            { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Primos', 'Tíos'], respuesta: 0 },
            { japones: '祖父', lectura: 'sofu', opciones: ['Abuelo', 'Abuela', 'Padre', 'Madre'], respuesta: 0 },
            { japones: '祖母', lectura: 'sobo', opciones: ['Abuela', 'Abuelo', 'Madre', 'Padre'], respuesta: 0 },
            { japones: '親戚', lectura: 'shinseki', opciones: ['Parientes', 'Amigos', 'Vecinos', 'Conocidos'], respuesta: 0 },
            { japones: '家庭', lectura: 'katei', opciones: ['Hogar', 'Escuela', 'Trabajo', 'Comunidad'], respuesta: 0 },
            { japones: '愛情', lectura: 'aijou', opciones: ['Amor familiar', 'Amistad', 'Respeto', 'Admiración'], respuesta: 0 }
        ],
        2: [
            { japones: '家', lectura: 'ie', opciones: ['Casa', 'Apartamento', 'Edificio', 'Escuela'], respuesta: 0 },
            { japones: '庭', lectura: 'niwa', opciones: ['Jardín', 'Parque', 'Bosque', 'Campo'], respuesta: 0 },
            { japones: '台所', lectura: 'daidokoro', opciones: ['Cocina', 'Baño', 'Sala', 'Dormitorio'], respuesta: 0 },
            { japones: '寝室', lectura: 'shinshitsu', opciones: ['Dormitorio', 'Sala', 'Cocina', 'Baño'], respuesta: 0 },
            { japones: '浴室', lectura: 'yokushitsu', opciones: ['Baño', 'Cocina', 'Sala', 'Dormitorio'], respuesta: 0 },
            { japones: 'リビング', lectura: 'ribingu', opciones: ['Sala de estar', 'Dormitorio', 'Cocina', 'Baño'], respuesta: 0 },
            { japones: '玄関', lectura: 'genkan', opciones: ['Entrada', 'Salida', 'Pasillo', 'Ventana'], respuesta: 0 },
            { japones: '屋根', lectura: 'yane', opciones: ['Techo', 'Piso', 'Pared', 'Ventana'], respuesta: 0 },
            { japones: '窓', lectura: 'mado', opciones: ['Ventana', 'Puerta', 'Pared', 'Techo'], respuesta: 0 },
            { japones: 'ドア', lectura: 'doa', opciones: ['Puerta', 'Ventana', 'Pared', 'Techo'], respuesta: 0 }
        ],
        3: [
            { japones: '朝食', lectura: 'choushoku', opciones: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], respuesta: 0 },
            { japones: '昼食', lectura: 'chuushoku', opciones: ['Almuerzo', 'Desayuno', 'Cena', 'Merienda'], respuesta: 0 },
            { japones: '夕食', lectura: 'yuushoku', opciones: ['Cena', 'Desayuno', 'Almuerzo', 'Merienda'], respuesta: 0 },
            { japones: '食事', lectura: 'shokuji', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], respuesta: 0 },
            { japones: '料理', lectura: 'ryouri', opciones: ['Cocina', 'Comida', 'Bebida', 'Postre'], respuesta: 0 },
            { japones: '食材', lectura: 'shokuzai', opciones: ['Ingredientes', 'Utensilios', 'Recetas', 'Platos'], respuesta: 0 },
            { japones: '味', lectura: 'aji', opciones: ['Sabor', 'Olor', 'Texto', 'Apariencia'], respuesta: 0 },
            { japones: '栄養', lectura: 'eiyou', opciones: ['Nutrición', 'Sabor', 'Calorías', 'Vitaminas'], respuesta: 0 },
            { japones: '健康', lectura: 'kenkou', opciones: ['Salud', 'Enfermedad', 'Ejercicio', 'Descanso'], respuesta: 0 },
            { japones: '美味しい', lectura: 'oishii', opciones: ['Delicioso', 'Desagradable', 'Normal', 'Amargo'], respuesta: 0 }
        ],
        4: [
            { japones: '習慣', lectura: 'shuukan', opciones: ['Hábito', 'Costumbre', 'Rutina', 'Tradición'], respuesta: 0 },
            { japones: '日常', lectura: 'nichijou', opciones: ['Vida cotidiana', 'Extraordinario', 'Especial', 'Raro'], respuesta: 0 },
            { japones: '規則', lectura: 'kisoku', opciones: ['Regla', 'Excepción', 'Sugerencia', 'Recomendación'], respuesta: 0 },
            { japones: '時間割', lectura: 'jikanwari', opciones: ['Horario', 'Calendario', 'Agenda', 'Lista'], respuesta: 0 },
            { japones: '予定', lectura: 'yotei', opciones: ['Plan', 'Improvisación', 'Sorpresa', 'Accidente'], respuesta: 0 },
            { japones: '準備', lectura: 'junbi', opciones: ['Preparación', 'Improvisación', 'Descuidar', 'Olvidar'], respuesta: 0 },
            { japones: '整理', lectura: 'seiri', opciones: ['Organización', 'Desorden', 'Confusión', 'Caos'], respuesta: 0 },
            { japones: '掃除', lectura: 'souji', opciones: ['Limpieza', 'Suciedad', 'Desorden', 'Confusión'], respuesta: 0 },
            { japones: '洗濯', lectura: 'sentaku', opciones: ['Lavado', 'Secado', 'Planchado', 'Doblar'], respuesta: 0 },
            { japones: '買い物', lectura: 'kaimono', opciones: ['Compras', 'Ventas', 'Intercambio', 'Regalo'], respuesta: 0 }
        ],
        5: [
            { japones: '伝統', lectura: 'dentou', opciones: ['Tradición', 'Innovación', 'Moda', 'Tendencia'], respuesta: 0 },
            { japones: '文化', lectura: 'bunka', opciones: ['Cultura', 'Naturaleza', 'Tecnología', 'Ciencia'], respuesta: 0 },
            { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Futuro', 'Presente', 'Pasado'], respuesta: 0 },
            { japones: '祭事', lectura: 'saiji', opciones: ['Evento ceremonial', 'Fiesta', 'Reunión', 'Celebración'], respuesta: 0 },
            { japones: '正月', lectura: 'shougatsu', opciones: ['Año Nuevo', 'Navidad', 'Cumpleaños', 'Aniversario'], respuesta: 0 },
            { japones: 'お盆', lectura: 'obon', opciones: ['Festival de los muertos', 'Año Nuevo', 'Navidad', 'Cumpleaños'], respuesta: 0 },
            { japones: '七夕', lectura: 'tanabata', opciones: ['Festival de las estrellas', 'Año Nuevo', 'Navidad', 'Cumpleaños'], respuesta: 0 },
            { japones: 'こどもの日', lectura: 'kodomonohi', opciones: ['Día del niño', 'Día de la madre', 'Día del padre', 'Navidad'], respuesta: 0 },
            { japones: '成人式', lectura: 'seijinshiki', opciones: ['Ceremonia de la mayoría de edad', 'Graduación', 'Boda', 'Funeral'], respuesta: 0 },
            { japones: '敬老の日', lectura: 'keirounohi', opciones: ['Día del respeto a los ancianos', 'Día del niño', 'Día de la madre', 'Navidad'], respuesta: 0 }
        ]
    },
    
    // ================================================
    // THE LAST SUMMER 2
    // ================================================
    
    // Sub-contenedor 2.1
    'sub2_1': {
        1: [
            { japones: '会話', lectura: 'kaiwa', opciones: ['Conversación', 'Discusión', 'Debate', 'Charla'], respuesta: 0 },
            { japones: '質問', lectura: 'shitsumon', opciones: ['Pregunta', 'Respuesta', 'Explicación', 'Afirmación'], respuesta: 0 },
            { japones: '返事', lectura: 'henji', opciones: ['Respuesta', 'Pregunta', 'Solicitud', 'Propuesta'], respuesta: 0 },
            { japones: '説明', lectura: 'setsumei', opciones: ['Explicación', 'Descripción', 'Interpretación', 'Traducción'], respuesta: 0 },
            { japones: '意見', lectura: 'iken', opciones: ['Opinión', 'Hecho', 'Teoría', 'Hipótesis'], respuesta: 0 },
            { japones: '賛成', lectura: 'sansei', opciones: ['Aprobación', 'Desaprobación', 'Neutralidad', 'Indiferencia'], respuesta: 0 },
            { japones: '反対', lectura: 'hantai', opciones: ['Oposición', 'Apoyo', 'Aceptación', 'Acuerdo'], respuesta: 0 },
            { japones: '同意', lectura: 'doui', opciones: ['Consentimiento', 'Rechazo', 'Duda', 'Indecisión'], respuesta: 0 },
            { japones: '議論', lectura: 'giron', opciones: ['Discusión', 'Conversación', 'Monólogo', 'Diálogo'], respuesta: 0 },
            { japones: '話題', lectura: 'wadai', opciones: ['Tema', 'Subtema', 'Asunto', 'Problema'], respuesta: 0 }
        ],
        2: [
            { japones: '感情', lectura: 'kanjou', opciones: ['Emoción', 'Razón', 'Lógica', 'Pensamiento'], respuesta: 0 },
            { japones: '愛情', lectura: 'aijou', opciones: ['Afecto', 'Odio', 'Indiferencia', 'Respeto'], respuesta: 0 },
            { japones: '喜び', lectura: 'yorokobi', opciones: ['Alegría', 'Tristeza', 'Enojo', 'Miedo'], respuesta: 0 },
            { japones: '悲しみ', lectura: 'kanashimi', opciones: ['Tristeza', 'Alegría', 'Sorpresa', 'Expectativa'], respuesta: 0 },
            { japones: '怒り', lectura: 'ikari', opciones: ['Enojo', 'Calma', 'Paz', 'Serenidad'], respuesta: 0 },
            { japones: '驚き', lectura: 'odoroki', opciones: ['Sorpresa', 'Expectativa', 'Rutina', 'Normalidad'], respuesta: 0 },
            { japones: '期待', lectura: 'kitai', opciones: ['Expectativa', 'Decepción', 'Realidad', 'Presente'], respuesta: 0 },
            { japones: '安心', lectura: 'anshin', opciones: ['Tranquilidad', 'Ansiedad', 'Preocupación', 'Estrés'], respuesta: 0 },
            { japones: '不安', lectura: 'fuan', opciones: ['Inseguridad', 'Confianza', 'Seguridad', 'Certeza'], respuesta: 0 },
            { japones: '興奮', lectura: 'koufun', opciones: ['Excitación', 'Calma', 'Aburrimiento', 'Indiferencia'], respuesta: 0 }
        ],
        3: [
            { japones: '行動', lectura: 'koudou', opciones: ['Acción', 'Pensamiento', 'Palabra', 'Intención'], respuesta: 0 },
            { japones: '選択', lectura: 'sentaku', opciones: ['Elección', 'Obligación', 'Azar', 'Destino'], respuesta: 0 },
            { japones: '決断', lectura: 'ketsudan', opciones: ['Decisión', 'Duda', 'Indecisión', 'Vacilación'], respuesta: 0 },
            { japones: '努力', lectura: 'doryoku', opciones: ['Esfuerzo', 'Flojera', 'Suerte', 'Talento'], respuesta: 0 },
            { japones: '成功', lectura: 'seikou', opciones: ['Éxito', 'Fracaso', 'Intento', 'Esfuerzo'], respuesta: 0 },
            { japones: '失敗', lectura: 'shippai', opciones: ['Fallo', 'Logro', 'Victoria', 'Triunfo'], respuesta: 0 },
            { japones: '挑戦', lectura: 'chousen', opciones: ['Desafío', 'Rendición', 'Evitación', 'Rechazo'], respuesta: 0 },
            { japones: '成長', lectura: 'seichou', opciones: ['Desarrollo', 'Estancamiento', 'Retroceso', 'Decadencia'], respuesta: 0 },
            { japones: '変化', lectura: 'henka', opciones: ['Cambio', 'Permanencia', 'Estabilidad', 'Constancia'], respuesta: 0 },
            { japones: '進歩', lectura: 'shinpo', opciones: ['Progreso', 'Regresión', 'Estancamiento', 'Inmovilidad'], respuesta: 0 }
        ],
        4: [
            { japones: '社会', lectura: 'shakai', opciones: ['Sociedad', 'Individuo', 'Familia', 'Comunidad'], respuesta: 0 },
            { japones: '文化', lectura: 'bunka', opciones: ['Cultura', 'Naturaleza', 'Tecnología', 'Ciencia'], respuesta: 0 },
            { japones: '伝統', lectura: 'dentou', opciones: ['Tradición', 'Innovación', 'Moda', 'Modernidad'], respuesta: 0 },
            { japones: '習慣', lectura: 'shuukan', opciones: ['Costumbre', 'Excepción', 'Rareza', 'Anomalía'], respuesta: 0 },
            { japones: '価値観', lectura: 'kachikan', opciones: ['Valores', 'Precio', 'Costo', 'Gasto'], respuesta: 0 },
            { japones: '道德', lectura: 'doutoku', opciones: ['Moral', 'Inmoralidad', 'Neutralidad', 'Indiferencia'], respuesta: 0 },
            { japones: '法律', lectura: 'houritsu', opciones: ['Ley', 'Sugerencia', 'Recomendación', 'Consejo'], respuesta: 0 },
            { japones: '権利', lectura: 'kenri', opciones: ['Derecho', 'Obligación', 'Prohibición', 'Restricción'], respuesta: 0 },
            { japones: '義務', lectura: 'gimu', opciones: ['Deber', 'Derecho', 'Privilegio', 'Beneficio'], respuesta: 0 },
            { japones: '責任', lectura: 'sekinin', opciones: ['Responsabilidad', 'Irresponsabilidad', 'Libertad', 'Despreocupación'], respuesta: 0 }
        ],
        5: [
            { japones: '自然', lectura: 'shizen', opciones: ['Naturaleza', 'Artificial', 'Urbano', 'Industrial'], respuesta: 0 },
            { japones: '環境', lectura: 'kankyou', opciones: ['Medio ambiente', 'Contaminación', 'Tecnología', 'Civilización'], respuesta: 0 },
            { japones: '資源', lectura: 'shigen', opciones: ['Recurso', 'Desperdicio', 'Contaminante', 'Residuo'], respuesta: 0 },
            { japones: '汚染', lectura: 'osen', opciones: ['Contaminación', 'Limpieza', 'Pureza', 'Conservación'], respuesta: 0 },
            { japones: '保護', lectura: 'hogo', opciones: ['Protección', 'Destrucción', 'Abandono', 'Negligencia'], respuesta: 0 },
            { japones: '生態系', lectura: 'seitaikei', opciones: ['Ecosistema', 'Sistema artificial', 'Máquina', 'Tecnología'], respuesta: 0 },
            { japones: '再生', lectura: 'saisei', opciones: ['Reciclaje', 'Desperdicio', 'Contaminación', 'Destrucción'], respuesta: 0 },
            { japones: '持続可能', lectura: 'jizokukanou', opciones: ['Sostenible', 'Insostenible', 'Temporal', 'Limitado'], respuesta: 0 },
            { japones: '地球温暖化', lectura: 'chikyuondanka', opciones: ['Calentamiento global', 'Enfriamiento', 'Estabilidad', 'Equilibrio'], respuesta: 0 },
            { japones: '生物多様性', lectura: 'seibututayousei', opciones: ['Biodiversidad', 'Uniformidad', 'Homogeneidad', 'Similitud'], respuesta: 0 }
        ]
    },
    
    // Sub-contenedor 2.2
    'sub2_2': {
        1: [
            { japones: '技術', lectura: 'gijutsu', opciones: ['Tecnología', 'Arte', 'Ciencia', 'Filosofía'], respuesta: 0 },
            { japones: '科学', lectura: 'kagaku', opciones: ['Ciencia', 'Arte', 'Literatura', 'Historia'], respuesta: 0 },
            { japones: '研究', lectura: 'kenkyuu', opciones: ['Investigación', 'Improvisación', 'Suposición', 'Adivinanza'], respuesta: 0 },
            { japones: '開発', lectura: 'kaihatsu', opciones: ['Desarrollo', 'Destrucción', 'Abandono', 'Estancamiento'], respuesta: 0 },
            { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Descubrimiento', 'Copia', 'Imitación'], respuesta: 0 },
            { japones: '革新', lectura: 'kakushin', opciones: ['Innovación', 'Tradición', 'Conservación', 'Preservación'], respuesta: 0 },
            { japones: '実験', lectura: 'jikken', opciones: ['Experimento', 'Teoría', 'Hipótesis', 'Conclusión'], respuesta: 0 },
            { japones: '分析', lectura: 'bunseki', opciones: ['Análisis', 'Síntesis', 'Resumen', 'Conclusión'], respuesta: 0 },
            { japones: '理論', lectura: 'riron', opciones: ['Teoría', 'Práctica', 'Evidencia', 'Hecho'], respuesta: 0 },
            { japones: '応用', lectura: 'ouyou', opciones: ['Aplicación', 'Teoría', 'Abstracción', 'Concepto'], respuesta: 0 }
        ],
        2: [
            { japones: '経済', lectura: 'keizai', opciones: ['Economía', 'Política', 'Cultura', 'Sociedad'], respuesta: 0 },
            { japones: '市場', lectura: 'shijou', opciones: ['Mercado', 'Tienda', 'Almacén', 'Fábrica'], respuesta: 0 },
            { japones: '企業', lectura: 'kigyou', opciones: ['Empresa', 'Gobierno', 'Individuo', 'Familia'], respuesta: 0 },
            { japones: '投資', lectura: 'toushi', opciones: ['Inversión', 'Gasto', 'Pérdida', 'Ahorro'], respuesta: 0 },
            { japones: '消費', lectura: 'shouhi', opciones: ['Consumo', 'Producción', 'Distribución', 'Venta'], respuesta: 0 },
            { japones: '生産', lectura: 'seisan', opciones: ['Producción', 'Consumo', 'Destrucción', 'Desperdicio'], respuesta: 0 },
            { japones: '貿易', lectura: 'boueki', opciones: ['Comercio', 'Aislamiento', 'Proteccionismo', 'Autarquía'], respuesta: 0 },
            { japones: '競争', lectura: 'kyousou', opciones: ['Competencia', 'Cooperación', 'Colaboración', 'Asociación'], respuesta: 0 },
            { japones: '需要', lectura: 'juyou', opciones: ['Demanda', 'Oferta', 'Excedente', 'Escasez'], respuesta: 0 },
            { japones: '供給', lectura: 'kyoukyuu', opciones: ['Oferta', 'Demanda', 'Necesidad', 'Deseo'], respuesta: 0 }
        ],
        3: [
            { japones: '政治', lectura: 'seiji', opciones: ['Política', 'Economía', 'Cultura', 'Religión'], respuesta: 0 },
            { japones: '政府', lectura: 'seifu', opciones: ['Gobierno', 'Oposición', 'Sociedad', 'Comunidad'], respuesta: 0 },
            { japones: '選挙', lectura: 'senkyo', opciones: ['Elección', 'Designación', 'Nombramiento', 'Herencia'], respuesta: 0 },
            { japones: '民主主義', lectura: 'minshushugi', opciones: ['Democracia', 'Dictadura', 'Monarquía', 'Oligarquía'], respuesta: 0 },
            { japones: '権力', lectura: 'kenryoku', opciones: ['Poder', 'Debilidad', 'Sumisión', 'Obedeiencia'], respuesta: 0 },
            { japones: '政策', lectura: 'seisaku', opciones: ['Política pública', 'Interés privado', 'Beneficio personal', 'Ventaja individual'], respuesta: 0 },
            { japones: '国際関係', lectura: 'kokusaikankei', opciones: ['Relaciones internacionales', 'Asuntos internos', 'Política local', 'Administración municipal'], respuesta: 0 },
            { japones: '外交', lectura: 'gaikou', opciones: ['Diplomacia', 'Guerra', 'Aislamiento', 'Neutralidad'], respuesta: 0 },
            { japones: '平和', lectura: 'heiwa', opciones: ['Paz', 'Guerra', 'Conflicto', 'Violencia'], respuesta: 0 },
            { japones: '安全保障', lectura: 'anzenhoshou', opciones: ['Seguridad', 'Peligro', 'Riesgo', 'Amenaza'], respuesta: 0 }
        ],
        4: [
            { japones: '芸術', lectura: 'geijutsu', opciones: ['Arte', 'Ciencia', 'Tecnología', 'Deporte'], respuesta: 0 },
            { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Pintura', 'Escultura', 'Danza'], respuesta: 0 },
            { japones: '絵画', lectura: 'kaiga', opciones: ['Pintura', 'Música', 'Literatura', 'Teatro'], respuesta: 0 },
            { japones: '文学', lectura: 'bungaku', opciones: ['Literatura', 'Ciencia', 'Filosofía', 'Historia'], respuesta: 0 },
            { japones: '演劇', lectura: 'engeki', opciones: ['Teatro', 'Cine', 'Televisión', 'Radio'], respuesta: 0 },
            { japones: '映画', lectura: 'eiga', opciones: ['Cine', 'Teatro', 'Televisión', 'Radio'], respuesta: 0 },
            { japones: '写真', lectura: 'shashin', opciones: ['Fotografía', 'Pintura', 'Dibujo', 'Escultura'], respuesta: 0 },
            { japones: '建築', lectura: 'kenchiku', opciones: ['Arquitectura', 'Ingeniería', 'Diseño', 'Construcción'], respuesta: 0 },
            { japones: 'デザイン', lectura: 'dezain', opciones: ['Diseño', 'Accidente', 'Improvisación', 'Casualidad'], respuesta: 0 },
            { japones: '創造性', lectura: 'souzousei', opciones: ['Creatividad', 'Imitación', 'Copia', 'Repetición'], respuesta: 0 }
        ],
        5: [
            { japones: 'スポーツ', lectura: 'supootsu', opciones: ['Deporte', 'Arte', 'Ciencia', 'Tecnología'], respuesta: 0 },
            { japones: '競技', lectura: 'kyougi', opciones: ['Competición', 'Práctica', 'Entrenamiento', 'Ejercicio'], respuesta: 0 },
            { japones: '選手', lectura: 'senshu', opciones: ['Atleta', 'Entrenador', 'Árbitro', 'Espectador'], respuesta: 0 },
            { japones: '試合', lectura: 'shiai', opciones: ['Partido', 'Entrenamiento', 'Práctica', 'Calentamiento'], respuesta: 0 },
            { japones: '勝利', lectura: 'shouri', opciones: ['Victoria', 'Derrota', 'Empate', 'Abandono'], respuesta: 0 },
            { japones: '敗北', lectura: 'haiboku', opciones: ['Derrota', 'Victoria', 'Empate', 'Triunfo'], respuesta: 0 },
            { japones: '記録', lectura: 'kiroku', opciones: ['Récord', 'Fracaso', 'Intentó', 'Esfuerzo'], respuesta: 0 },
            { japones: '練習', lectura: 'renshuu', opciones: ['Práctica', 'Teoría', 'Improvisación', 'Talento natural'], respuesta: 0 },
            { japones: 'チームワーク', lectura: 'chiimuwaaku', opciones: ['Trabajo en equipo', 'Individualismo', 'Egoísmo', 'Aislamiento'], respuesta: 0 },
            { japones: 'フェアプレー', lectura: 'feapuree', opciones: ['Juego limpio', 'Trampa', 'Engaño', 'Ventaja injusta'], respuesta: 0 }
        ]
    },
    
    // Sub-contenedor 2.3
    'sub2_3': {
        1: [
            { japones: '旅行', lectura: 'ryokou', opciones: ['Viaje', 'Estancia', 'Residencia', 'Hogar'], respuesta: 0 },
            { japones: '観光', lectura: 'kankou', opciones: ['Turismo', 'Trabajo', 'Estudio', 'Residencia'], respuesta: 0 },
            { japones: '目的地', lectura: 'mokutekichi', opciones: ['Destino', 'Origen', 'Partida', 'Llegada'], respuesta: 0 },
            { japones: '出発', lectura: 'shuppatsu', opciones: ['Salida', 'Llegada', 'Estancia', 'Permanencia'], respuesta: 0 },
            { japones: '到着', lectura: 'touchaku', opciones: ['Llegada', 'Salida', 'Partida', 'Inicio'], respuesta: 0 },
            { japones: '宿泊', lectura: 'shukuhaku', opciones: ['Alojamiento', 'Comida', 'Transporte', 'Entretenimiento'], respuesta: 0 },
            { japones: '旅程', lectura: 'ryotei', opciones: ['Itinerario', 'Destino', 'Origen', 'Medio'], respuesta: 0 },
            { japones: '観光地', lectura: 'kankouchi', opciones: ['Atracción turística', 'Zona residencial', 'Área industrial', 'Barrio comercial'], respuesta: 0 },
            { japones: '土産', lectura: 'miyage', opciones: ['Souvenir', 'Recuerdo', 'Regalo', 'Compra'], respuesta: 0 },
            { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Rutina', 'Seguridad', 'Estabilidad'], respuesta: 0 }
        ],
        2: [
            { japones: '交通', lectura: 'koutsuu', opciones: ['Transporte', 'Comunicación', 'Información', 'Entretenimiento'], respuesta: 0 },
            { japones: '手段', lectura: 'shudan', opciones: ['Medio', 'Fin', 'Objetivo', 'Propósito'], respuesta: 0 },
            { japones: '電車', lectura: 'densha', opciones: ['Tren', 'Autobús', 'Avión', 'Barco'], respuesta: 0 },
            { japones: 'バス', lectura: 'basu', opciones: ['Autobús', 'Tren', 'Taxi', 'Avión'], respuesta: 0 },
            { japones: '飛行機', lectura: 'hikouki', opciones: ['Avión', 'Barco', 'Tren', 'Automóvil'], respuesta: 0 },
            { japones: '船', lectura: 'fune', opciones: ['Barco', 'Avión', 'Tren', 'Autobús'], respuesta: 0 },
            { japones: '地下鉄', lectura: 'chikatetsu', opciones: ['Metro', 'Tren superficial', 'Autobús', 'Taxi'], respuesta: 0 },
            { japones: 'タクシー', lectura: 'takushii', opciones: ['Taxi', 'Autobús', 'Tren', 'Avión'], respuesta: 0 },
            { japones: '自転車', lectura: 'jitensha', opciones: ['Bicicleta', 'Automóvil', 'Motocicleta', 'Patineta'], respuesta: 0 },
            { japones: '歩行', lectura: 'hokou', opciones: ['Caminar', 'Correr', 'Nadar', 'Volar'], respuesta: 0 }
        ],
        3: [
            { japones: '食事', lectura: 'shokuji', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], respuesta: 0 },
            { japones: '料理', lectura: 'ryouri', opciones: ['Cocina', 'Comida', 'Bebida', 'Postre'], respuesta: 0 },
            { japones: 'レストラン', lectura: 'resutoran', opciones: ['Restaurante', 'Cafetería', 'Bar', 'Pub'], respuesta: 0 },
            { japones: 'メニュー', lectura: 'menyuu', opciones: ['Menú', 'Receta', 'Ingrediente', 'Utensilio'], respuesta: 0 },
            { japones: '注文', lectura: 'chuumon', opciones: ['Pedido', 'Entrega', 'Preparación', 'Cocción'], respuesta: 0 },
            { japones: 'サービス', lectura: 'saabisu', opciones: ['Servicio', 'Producto', 'Mercancía', 'Artículo'], respuesta: 0 },
            { japones: '会計', lectura: 'kaikei', opciones: ['Cuenta', 'Pedido', 'Menú', 'Reserva'], respuesta: 0 },
            { japones: 'チップ', lectura: 'chippu', opciones: ['Propina', 'Precio', 'Costo', 'Gasto'], respuesta: 0 },
            { japones: '食材', lectura: 'shokuzai', opciones: ['Ingredientes', 'Utensilios', 'Recetas', 'Platos'], respuesta: 0 },
            { japones: '調理', lectura: 'chouri', opciones: ['Cocción', 'Comer', 'Servir', 'Ordenar'], respuesta: 0 }
        ],
        4: [
            { japones: '買い物', lectura: 'kaimono', opciones: ['Compras', 'Ventas', 'Intercambio', 'Regalo'], respuesta: 0 },
            { japones: '商店', lectura: 'shouten', opciones: ['Tienda', 'Almacén', 'Mercado', 'Centro comercial'], respuesta: 0 },
            { japones: '市場', lectura: 'ichiba', opciones: ['Mercado', 'Tienda', 'Almacén', 'Fábrica'], respuesta: 0 },
            { japones: 'デパート', lectura: 'depaato', opciones: ['Grandes almacenes', 'Mercado', 'Tienda', 'Boutique'], respuesta: 0 },
            { japones: 'スーパー', lectura: 'suupaa', opciones: ['Supermercado', 'Tienda', 'Mercado', 'Almacén'], respuesta: 0 },
            { japones: '価格', lectura: 'kakaku', opciones: ['Precio', 'Calidad', 'Cantidad', 'Valor'], respuesta: 0 },
            { japones: '割引', lectura: 'waribiki', opciones: ['Descuento', 'Aumento', 'Mantenimiento', 'Estabilidad'], respuesta: 0 },
            { japones: '品質', lectura: 'hinshitsu', opciones: ['Calidad', 'Cantidad', 'Precio', 'Valor'], respuesta: 0 },
            { japones: 'ブランド', lectura: 'burando', opciones: ['Marca', 'Producto', 'Servicio', 'Artículo'], respuesta: 0 },
            { japones: '消費税', lectura: 'shouhizei', opciones: ['Impuesto al consumo', 'Impuesto a la renta', 'Impuesto corporativo', 'Impuesto patrimonial'], respuesta: 0 }
        ],
        5: [
            { japones: '娯楽', lectura: 'goraku', opciones: ['Entretenimiento', 'Trabajo', 'Estudio', 'Obligación'], respuesta: 0 },
            { japones: '趣味', lectura: 'shumi', opciones: ['Pasatiempo', 'Trabajo', 'Obligación', 'Deber'], respuesta: 0 },
            { japones: '映画館', lectura: 'eigakan', opciones: ['Cine', 'Teatro', 'Museo', 'Galería'], respuesta: 0 },
            { japones: 'コンサート', lectura: 'konsaato', opciones: ['Concierto', 'Obra de teatro', 'Exposición', 'Feria'], respuesta: 0 },
            { japones: '博物館', lectura: 'hakubutsukan', opciones: ['Museo', 'Biblioteca', 'Archivo', 'Galería'], respuesta: 0 },
            { japones: '公園', lectura: 'kouen', opciones: ['Parque', 'Jardín', 'Bosque', 'Montaña'], respuesta: 0 },
            { japones: '遊園地', lectura: 'yuuenchi', opciones: ['Parque de atracciones', 'Parque natural', 'Jardín botánico', 'Zoológico'], respuesta: 0 },
            { japones: '温泉', lectura: 'onsen', opciones: ['Aguas termales', 'Piscina', 'Playa', 'Río'], respuesta: 0 },
            { japones: 'リラックス', lectura: 'rirakkusu', opciones: ['Relajación', 'Estrés', 'Tensión', 'Ansiedad'], respuesta: 0 },
            { japones: 'レジャー', lectura: 'rejaa', opciones: ['Ocio', 'Trabajo', 'Estudio', 'Responsabilidad'], respuesta: 0 }
        ]
    },
        // Sub-contenedor 2.4 (NUEVO)
    'sub2_4': {
        1: [
            { japones: 'あらすじ', lectura: 'arasuji', opciones: ['sinopsis', 'título', 'capítulo', 'final'], respuesta: 0 },
            { japones: '親', lectura: 'oya', opciones: ['padre/madre', 'hijo', 'hermano', 'amigo'], respuesta: 0 },
            { japones: '再婚', lectura: 'saikon', opciones: ['nuevo matrimonio', 'divorcio', 'separación', 'compromiso'], respuesta: 0 },
            { japones: '北欧', lectura: 'hokuō', opciones: ['países nórdicos', 'Asia', 'América', 'África'], respuesta: 0 },
            { japones: '義妹', lectura: 'gimai', opciones: ['hermanastra', 'hermana', 'prima', 'sobrina'], respuesta: 0 },
            { japones: '家族', lectura: 'kazoku', opciones: ['familia', 'amigos', 'compañeros', 'vecinos'], respuesta: 0 },
            { japones: '歩み寄る', lectura: 'ayumiyoru', opciones: ['acercarse buscar entendimiento', 'alejarse', 'ignorar', 'confrontar'], respuesta: 0 },
            { japones: '健気', lectura: 'kenage', opciones: ['valiente', 'cobarde', 'débil', 'indiferente'], respuesta: 0 },
            { japones: '義兄', lectura: 'gikei', opciones: ['hermanastro mayor', 'hermano', 'primo', 'tío'], respuesta: 0 },
            { japones: '応える', lectura: 'kotaeru', opciones: ['responder', 'preguntar', 'ignorar', 'escuchar'], respuesta: 0 }
        ],
        2: [
            { japones: '偶然', lectura: 'gūzen', opciones: ['casualidad', 'destino', 'plan', 'intención'], respuesta: 0 },
            { japones: '裸', lectura: 'hadaka', opciones: ['desnudo', 'vestido', 'parcial', 'cubierto'], respuesta: 0 },
            { japones: '理性', lectura: 'risei', opciones: ['razón', 'emoción', 'instinto', 'pasión'], respuesta: 0 },
            { japones: '崩壊', lectura: 'hōkai', opciones: ['colapso', 'construcción', 'estabilidad', 'fortalecimiento'], respuesta: 0 },
            { japones: 'ぽよん', lectura: 'poyon', opciones: ['onomatopeya de rebote', 'sonido de agua', 'sonido de viento', 'sonido de golpe'], respuesta: 0 },
            { japones: 'とうとう', lectura: 'tōtō', opciones: ['finalmente', 'nunca', 'pronto', 'tarde'], respuesta: 0 },
            { japones: 'がっつり', lectura: 'gattsuri', opciones: ['intensamente', 'ligeramente', 'suavemente', 'moderadamente'], respuesta: 0 },
            { japones: '生ハメ交尾', lectura: 'namahame kōbi', opciones: ['sexo sin protección', 'sexo protegido', 'beso', 'abrazo'], respuesta: 0 },
            { japones: 'お国柄', lectura: 'okunikara', opciones: ['costumbres nacionales', 'costumbres familiares', 'costumbres personales', 'costumbres modernas'], respuesta: 0 },
            { japones: '意外', lectura: 'igai', opciones: ['inesperado', 'obvio', 'predecible', 'común'], respuesta: 0 }
        ],
        3: [
            { japones: '寛容', lectura: 'kan\'yō', opciones: ['tolerante', 'intolerante', 'estricto', 'rígido'], respuesta: 0 },
            { japones: '目を盗んで', lectura: 'me o nusunde', opciones: ['a escondidas', 'abiertamente', 'públicamente', 'honestamente'], respuesta: 0 },
            { japones: '禁断', lectura: 'kindan', opciones: ['prohibido', 'permitido', 'recomendado', 'obligatorio'], respuesta: 0 },
            { japones: '関係', lectura: 'kankei', opciones: ['relación', 'separación', 'indiferencia', 'oposición'], respuesta: 0 },
            { japones: 'レジャー', lectura: 'rejā', opciones: ['recreación', 'trabajo', 'obligación', 'estudio'], respuesta: 0 },
            { japones: '午前', lectura: 'gozen', opciones: ['mañana', 'tarde', 'noche', 'medianoche'], respuesta: 0 },
            { japones: '空いてる', lectura: 'aiteru', opciones: ['estar vacío', 'estar lleno', 'estar ocupado', 'estar cerrado'], respuesta: 0 },
            { japones: 'コーチ', lectura: 'kōchi', opciones: ['entrenador', 'alumno', 'jugador', 'árbitro'], respuesta: 0 },
            { japones: 'タプン', lectura: 'tapun', opciones: ['onomatopeya de chapoteo', 'onomatopeya de golpe', 'onomatopeya de risa', 'onomatopeya de llanto'], respuesta: 0 },
            { japones: '任せろ', lectura: 'makasero', opciones: ['¡déjamelo a mí!', 'no lo sé', 'pregunta a otro', 'me rindo'], respuesta: 0 }
        ],
        4: [
            { japones: '昨晩', lectura: 'sakuban', opciones: ['anoche', 'esta mañana', 'mañana', 'hoy'], respuesta: 0 },
            { japones: '来週', lectura: 'raishū', opciones: ['la próxima semana', 'esta semana', 'la semana pasada', 'hoy'], respuesta: 0 },
            { japones: '体育', lectura: 'taiiku', opciones: ['educación física', 'matemáticas', 'historia', 'música'], respuesta: 0 },
            { japones: '水泳', lectura: 'suiei', opciones: ['natación', 'correr', 'saltar', 'levantar pesas'], respuesta: 0 },
            { japones: 'ユウウツ', lectura: 'yūutsu', opciones: ['melancolía', 'alegría', 'ira', 'sorpresa'], respuesta: 0 },
            { japones: 'スウェーデン', lectura: 'Suwēden', opciones: ['Suecia', 'Noruega', 'Finlandia', 'Dinamarca'], respuesta: 0 },
            { japones: '泳げません', lectura: 'oyogemasen', opciones: ['no puedo nadar', 'sé nadar', 'me gusta nadar', 'odio nadar'], respuesta: 0 },
            { japones: '特訓する', lectura: 'tokkun suru', opciones: ['entrenar intensivamente', 'descansar', 'dormir', 'jugar'], respuesta: 0 },
            { japones: '柔軟性', lectura: 'jūnansei', opciones: ['flexibilidad', 'rigidez', 'dureza', 'fragilidad'], respuesta: 0 },
            { japones: '上達する', lectura: 'jōtatsu suru', opciones: ['mejorar', 'empeorar', 'mantener', 'estancar'], respuesta: 0 }
        ],
        5: [
            { japones: '高校時代', lectura: 'kōkō jidai', opciones: ['época de secundaria', 'época de universidad', 'época de primaria', 'época de trabajo'], respuesta: 0 },
            { japones: '競泳', lectura: 'kyōei', opciones: ['natación competitiva', 'natación recreativa', 'correr', 'saltar'], respuesta: 0 },
            { japones: '泳ぎづらそう', lectura: 'oyogizurasō', opciones: ['parece difícil nadar', 'parece fácil nadar', 'nada bien', 'es experto'], respuesta: 0 },
            { japones: '水着姿', lectura: 'mizugi sugata', opciones: ['apariencia en traje de baño', 'apariencia formal', 'apariencia casual', 'apariencia deportiva'], respuesta: 0 },
            { japones: 'ポニテ', lectura: 'ponite', opciones: ['coleta alta / ponytail', 'cabello suelto', 'moño', 'trenzas'], respuesta: 0 },
            { japones: '揉みしだきてえ', lectura: 'momishidakitee', opciones: ['quiero apretarlos', 'quiero soltarlos', 'no me interesan', 'son pequeños'], respuesta: 0 },
            { japones: 'まずは', lectura: 'mazu wa', opciones: ['primero', 'último', 'después', 'nunca'], respuesta: 0 },
            { japones: 'しっかり', lectura: 'shikkari', opciones: ['firmemente', 'débilmente', 'ligeramente', 'inseguramente'], respuesta: 0 },
            { japones: '準備運動', lectura: 'junbi undō', opciones: ['calentamiento', 'enfriamiento', 'ejercicio principal', 'descanso'], respuesta: 0 },
            { japones: '性欲', lectura: 'seiyoku', opciones: ['deseo sexual', 'hambre', 'sed', 'cansancio'], respuesta: 0 }
        ],
        6: [
            { japones: '捨てろ', lectura: 'sutero', opciones: ['desecha', 'conserva', 'guarda', 'protege'], respuesta: 0 },
            { japones: '取り除く', lectura: 'torinozoku', opciones: ['eliminar', 'añadir', 'incrementar', 'multiplicar'], respuesta: 0 },
            { japones: '手ついて', lectura: 'te tsuite', opciones: ['apoyar las manos', 'levantar las manos', 'esconder las manos', 'cruzar las manos'], respuesta: 0 },
            { japones: 'バタ足', lectura: 'bataashi', opciones: ['patada estilo crawl', 'patada estilo pecho', 'patada estilo mariposa', 'patada estilo espalda'], respuesta: 0 },
            { japones: '抑える', lectura: 'osaeru', opciones: ['controlar', 'liberar', 'aumentar', 'acelerar'], respuesta: 0 },
            { japones: '身体伸ばして', lectura: 'karada nobashite', opciones: ['estira el cuerpo', 'contrae el cuerpo', 'dobla el cuerpo', 'relaja el cuerpo'], respuesta: 0 },
            { japones: '浮いてみ', lectura: 'uite mi', opciones: ['intenta flotar', 'intenta hundirte', 'intenta nadar', 'intenta respirar'], respuesta: 0 },
            { japones: '吸い寄せられる', lectura: 'sui yoserareru', opciones: ['ser atraído', 'ser repelido', 'ser ignorado', 'ser rechazado'], respuesta: 0 },
            { japones: 'もみ', lectura: 'momi', opciones: ['apretar', 'soltar', 'acariciar', 'golpear'], respuesta: 0 }
            
        ]
    },
    // ================================================
    // YAMADA
    // ================================================
    
    // Sub-contenedor 3.1
    'sub3_1': {
        1: [
            { japones: 'こんなこと', lectura: 'konna koto', opciones: ['algo así', 'nada', 'todo', 'alguien'], respuesta: 0 },
            { japones: '俺達', lectura: 'oretachi', opciones: ['nosotros', 'ellos', 'ustedes', 'vosotros'], respuesta: 0 },
            { japones: '伝える', lectura: 'tsutaeru', opciones: ['comunicar', 'escuchar', 'escribir', 'leer'], respuesta: 0 },
            { japones: '無事', lectura: 'buji', opciones: ['sin problemas', 'con problemas', 'peligroso', 'difícil'], respuesta: 0 },
            { japones: '順調', lectura: 'junchou', opciones: ['ir bien', 'ir mal', 'empeorar', 'estancarse'], respuesta: 0 },
            { japones: '続', lectura: 'tsuzuku', opciones: ['continuar', 'parar', 'empezar', 'terminar'], respuesta: 0 },
            { japones: '実際', lectura: 'jissai', opciones: ['en realidad', 'en teoría', 'aparentemente', 'posiblemente'], respuesta: 0 },
            { japones: '周', lectura: 'mawari', opciones: ['alrededor', 'dentro', 'fuera', 'lejos'], respuesta: 0 },
            { japones: 'ちょっかい', lectura: 'chokkai', opciones: ['molestias', 'ayuda', 'silencio', 'apoyo'], respuesta: 0 },
            { japones: '厄介', lectura: 'yakkai', opciones: ['problemas', 'soluciones', 'facilidades', 'ventajas'], respuesta: 0 }
        ],
        2: [
            { japones: '大変', lectura: 'taihen', opciones: ['duro', 'fácil', 'simple', 'sencillo'], respuesta: 0 },
            { japones: '男女', lectura: 'danjo', opciones: ['hombre y mujer', 'amigos', 'familia', 'compañeros'], respuesta: 0 },
            { japones: '流', lectura: 'nagare', opciones: ['fluir', 'estancar', 'parar', 'bloquear'], respuesta: 0 },
            { japones: '初体験', lectura: 'hatsu taiken', opciones: ['primera experiencia íntima', 'última vez', 'experiencia común', 'práctica'], respuesta: 0 },
            { japones: '成功', lectura: 'seikou', opciones: ['fue un éxito', 'fue un fracaso', 'fue normal', 'fue mediocre'], respuesta: 0 },
            { japones: '更に', lectura: 'sara ni', opciones: ['todavía más', 'menos', 'igual', 'diferente'], respuesta: 0 },
            { japones: '深まる', lectura: 'fukamaru', opciones: ['profundizar', 'superficial', 'disminuir', 'reducir'], respuesta: 0 },
            { japones: 'タガ', lectura: 'taga', opciones: ['limitación', 'libertad', 'expansión', 'apertura'], respuesta: 0 },
            { japones: '外れる', lectura: 'hazureru', opciones: ['salirse', 'quedarse', 'entrar', 'fijarse'], respuesta: 0 },
            { japones: '初々しい', lectura: 'ui ui shii', opciones: ['primero', 'experimentado', 'viejo', 'usado'], respuesta: 0 }
        ],
        3: [
            { japones: '何処', lectura: 'doko', opciones: ['Dónde', 'Cuándo', 'Cómo', 'Por qué'], respuesta: 0 },
            { japones: 'のやら', lectura: 'noyara', opciones: ['expresión de duda', 'expresión de certeza', 'afirmación', 'negación'], respuesta: 0 },
            { japones: '搾り取る', lectura: 'shiboritoru', opciones: ['exprimir', 'agregar', 'diluir', 'mezclar'], respuesta: 0 },
            { japones: '慣れない', lectura: 'narenai', opciones: ['No estoy acostumbrado', 'Estoy acostumbrado', 'Me gusta', 'Me disgusta'], respuesta: 0 },
            { japones: '毎回', lectura: 'maikai', opciones: ['cada vez', 'a veces', 'nunca', 'siempre'], respuesta: 0 },
            { japones: '全然', lectura: 'zenzen', opciones: ['en absoluto', 'completamente', 'parcialmente', 'ligeramente'], respuesta: 0 },
            { japones: '変える', lectura: 'kaeru', opciones: ['cambiar', 'mantener', 'mejorar', 'empeorar'], respuesta: 0 },
            { japones: '極薄', lectura: 'kiwausu', opciones: ['ultra-delgado', 'grueso', 'normal', 'mediano'], respuesta: 0 },
            { japones: '早速', lectura: 'sassoku', opciones: ['de inmediato', 'después', 'lentamente', 'nunca'], respuesta: 0 },
            { japones: '興奮', lectura: 'koufun', opciones: ['excitarse', 'calmarse', 'dormir', 'descansar'], respuesta: 0 }
        ],
        4: [
            { japones: 'いつもより', lectura: 'itsumo yori', opciones: ['más que de costumbre', 'menos que de costumbre', 'igual que siempre', 'diferente a siempre'], respuesta: 0 },
            { japones: '薄い', lectura: 'usui', opciones: ['delgado', 'grueso', 'fuerte', 'débil'], respuesta: 0 },
            { japones: '擦れる', lectura: 'sureru', opciones: ['rozar', 'separar', 'unir', 'pegar'], respuesta: 0 },
            { japones: '天然', lectura: 'tennen', opciones: ['natural', 'artificial', 'sintético', 'falso'], respuesta: 0 },
            { japones: '尊敬する', lectura: 'sonkei suru', opciones: ['respetar', 'despreciar', 'ignorar', 'olvidar'], respuesta: 0 },
            { japones: '乱れてる', lectura: 'midareteru', opciones: ['desordenado', 'ordenado', 'limpio', 'organizado'], respuesta: 0 },
            { japones: 'お陰', lectura: 'okage', opciones: ['gracias a', 'a pesar de', 'sin ayuda de', 'por culpa de'], respuesta: 0 },
            { japones: '嬉しい', lectura: 'ureshii', opciones: ['feliz', 'triste', 'enojado', 'preocupado'], respuesta: 0 },
            { japones: '取られた', lectura: 'torareta', opciones: ['agarrar', 'soltar', 'dejar', 'perder'], respuesta: 0 },
            { japones: '濃い', lectura: 'koi', opciones: ['espeso', 'diluido', 'claro', 'suave'], respuesta: 0 }
        ],
        5: [
            { japones: '折角', lectura: 'sekkaku', opciones: ['con esfuerzo', 'fácilmente', 'accidentalmente', 'naturalmente'], respuesta: 0 },
            { japones: '勢い', lectura: 'ikioi', opciones: ['fuerza', 'debilidad', 'calma', 'quietud'], respuesta: 0 },
            { japones: '屈託', lectura: 'kuttaku', opciones: ['preocupación', 'alegría', 'tranquilidad', 'seguridad'], respuesta: 0 },
            { japones: '満たされていない', lectura: 'mitasareteinai', opciones: ['insatisfecho', 'satisfecho', 'completo', 'lleno'], respuesta: 0 },
            { japones: '味わえる', lectura: 'ajiw aeru', opciones: ['saborear', 'rechazar', 'ignorar', 'desperdiciar'], respuesta: 0 },
            { japones: '勃つ', lectura: 'tatsu', opciones: ['erección', 'flacidez', 'calma', 'relajación'], respuesta: 0 },
            { japones: '悔しい', lectura: 'kuyashii', opciones: ['frustrante', 'satisfactorio', 'agradable', 'placentero'], respuesta: 0 },
            { japones: 'なんとか', lectura: 'nantoka', opciones: ['de alguna manera', 'imposible', 'fácilmente', 'sin esfuerzo'], respuesta: 0 },
            { japones: '解決', lectura: 'kaiketsu', opciones: ['solución', 'problema', 'conflicto', 'dificultad'], respuesta: 0 },
            { japones: '絶倫', lectura: 'zetsurin', opciones: ['potencia sexual', 'impotencia', 'debilidad', 'falta de energía'], respuesta: 0 }
        ],
        6: [
            { japones: '伝授', lectura: 'denju', opciones: ['transmisión', 'recepción', 'bloqueo', 'ocultamiento'], respuesta: 0 },
            { japones: '知識', lectura: 'chishiki', opciones: ['conocimiento', 'ignorancia', 'duda', 'confusión'], respuesta: 0 },
            { japones: '迎え', lectura: 'mukae', opciones: ['bienvenida', 'despedida', 'rechazo', 'ignorancia'], respuesta: 0 },
            { japones: '積極的', lectura: 'sekkyokuteki', opciones: ['asertivo', 'pasivo', 'timido', 'indeciso'], respuesta: 0 },
            { japones: '用意', lectura: 'youi', opciones: ['preparación', 'improvisación', 'descuidar', 'olvidar'], respuesta: 0 },
            { japones: '購入', lectura: 'kounyuu', opciones: ['compra', 'venta', 'intercambio', 'regalo'], respuesta: 0 },
            { japones: '減らず口', lectura: 'herazuguchi', opciones: ['boca insolente', 'silencio', 'respeto', 'educación'], respuesta: 0 },
            { japones: '使い切る', lectura: 'tsukaikiru', opciones: ['usar completamente', 'ahorrar', 'guardar', 'conservar'], respuesta: 0 },
            { japones: '恐るべし', lectura: 'osorubeshi', opciones: ['formidable', 'débil', 'común', 'ordinario'], respuesta: 0 },
            { japones: '勃つ', lectura: 'tatsu', opciones: ['erección', 'flacidez', 'calma', 'relajación'], respuesta: 0 }
        ]
    },
    
    // Sub-contenedor 3.2
    'sub3_2': {
        1: [
            { japones: '自然', lectura: 'shizen', opciones: ['Naturaleza', 'Artificial', 'Urbano', 'Industrial'], respuesta: 0 },
            { japones: '環境', lectura: 'kankyou', opciones: ['Medio ambiente', 'Contaminación', 'Tecnología', 'Civilización'], respuesta: 0 },
            { japones: '動物', lectura: 'doubutsu', opciones: ['Animal', 'Planta', 'Mineral', 'Objeto'], respuesta: 0 },
            { japones: '植物', lectura: 'shokubutsu', opciones: ['Planta', 'Animal', 'Mineral', 'Ser humano'], respuesta: 0 },
            { japones: '風景', lectura: 'fuukei', opciones: ['Paisaje', 'Ciudad', 'Edificio', 'Construcción'], respuesta: 0 },
            { japones: '気候', lectura: 'kikou', opciones: ['Clima', 'Tiempo', 'Estación', 'Temperatura'], respuesta: 0 },
            { japones: '季節', lectura: 'kisetsu', opciones: ['Estación', 'Mes', 'Semana', 'Día'], respuesta: 0 },
            { japones: '天気', lectura: 'tenki', opciones: ['Tiempo atmosférico', 'Clima', 'Estación', 'Temperatura'], respuesta: 0 },
            { japones: '資源', lectura: 'shigen', opciones: ['Recurso', 'Desperdicio', 'Contaminante', 'Residuo'], respuesta: 0 },
            { japones: '保護', lectura: 'hogo', opciones: ['Protección', 'Destrucción', 'Abandono', 'Negligencia'], respuesta: 0 }
        ],
        2: [
            { japones: '宇宙', lectura: 'uchuu', opciones: ['Universo', 'Tierra', 'Planeta', 'Galaxia'], respuesta: 0 },
            { japones: '地球', lectura: 'chikyuu', opciones: ['Planeta Tierra', 'Luna', 'Sol', 'Marte'], respuesta: 0 },
            { japones: '太陽', lectura: 'taiyou', opciones: ['Sol', 'Luna', 'Estrella', 'Planeta'], respuesta: 0 },
            { japones: '月', lectura: 'tsuki', opciones: ['Luna', 'Sol', 'Estrella', 'Planeta'], respuesta: 0 },
            { japones: '星', lectura: 'hoshi', opciones: ['Estrella', 'Planeta', 'Satélite', 'Asteroide'], respuesta: 0 },
            { japones: '銀河', lectura: 'ginga', opciones: ['Galaxia', 'Sistema solar', 'Constelación', 'Nebulosa'], respuesta: 0 },
            { japones: '惑星', lectura: 'wakusei', opciones: ['Planeta', 'Estrella', 'Satélite', 'Asteroide'], respuesta: 0 },
            { japones: '衛星', lectura: 'eisei', opciones: ['Satélite', 'Planeta', 'Estrella', 'Cometa'], respuesta: 0 },
            { japones: '天文', lectura: 'tenmon', opciones: ['Astronomía', 'Astrología', 'Geología', 'Meteorología'], respuesta: 0 },
            { japones: '探査', lectura: 'tansa', opciones: ['Exploración', 'Abandono', 'Ignorancia', 'Desinterés'], respuesta: 0 }
        ],
        3: [
            { japones: '時間', lectura: 'jikan', opciones: ['Tiempo', 'Espacio', 'Materia', 'Energía'], respuesta: 0 },
            { japones: '過去', lectura: 'kako', opciones: ['Pasado', 'Presente', 'Futuro', 'Eterno'], respuesta: 0 },
            { japones: '現在', lectura: 'genzai', opciones: ['Presente', 'Pasado', 'Futuro', 'Eterno'], respuesta: 0 },
            { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Eterno'], respuesta: 0 },
            { japones: '瞬間', lectura: 'shunkan', opciones: ['Instante', 'Eternidad', 'Periodo', 'Duración'], respuesta: 0 },
            { japones: '永遠', lectura: 'eien', opciones: ['Eternidad', 'Momentáneo', 'Temporal', 'Pasajero'], respuesta: 0 },
            { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Futuro', 'Presente', 'Actualidad'], respuesta: 0 },
            { japones: '時代', lectura: 'jidai', opciones: ['Época', 'Momento', 'Instante', 'Segundo'], respuesta: 0 },
            { japones: '周期', lectura: 'shuuki', opciones: ['Ciclo', 'Línea recta', 'Dirección única', 'Camino único'], respuesta: 0 },
            { japones: '速度', lectura: 'sokudo', opciones: ['Velocidad', 'Lentitud', 'Inmovilidad', 'Estancamiento'], respuesta: 0 }
        ],
        4: [
            { japones: '物質', lectura: 'busshitsu', opciones: ['Materia', 'Energía', 'Espíritu', 'Pensamiento'], respuesta: 0 },
            { japones: '元素', lectura: 'genso', opciones: ['Elemento', 'Compuesto', 'Mezcla', 'Sustancia'], respuesta: 0 },
            { japones: '原子', lectura: 'genshi', opciones: ['Átomo', 'Molécula', 'Partícula', 'Elemento'], respuesta: 0 },
            { japones: '分子', lectura: 'bunshi', opciones: ['Molécula', 'Átomo', 'Partícula', 'Elemento'], respuesta: 0 },
            { japones: 'エネルギー', lectura: 'enerugii', opciones: ['Energía', 'Materia', 'Espacio', 'Tiempo'], respuesta: 0 },
            { japones: '力', lectura: 'chikara', opciones: ['Fuerza', 'Debilidad', 'Fragilidad', 'Vulnerabilidad'], respuesta: 0 },
            { japones: '運動', lectura: 'undou', opciones: ['Movimiento', 'Reposo', 'Inmovilidad', 'Estaticidad'], respuesta: 0 },
            { japones: '変化', lectura: 'henka', opciones: ['Cambio', 'Permanencia', 'Estabilidad', 'Constancia'], respuesta: 0 },
            { japones: '状態', lectura: 'joutai', opciones: ['Estado', 'Proceso', 'Transformación', 'Evolución'], respuesta: 0 },
            { japones: '性質', lectura: 'seishitsu', opciones: ['Propiedad', 'Accidente', 'Coincidencia', 'Casualidad'], respuesta: 0 }
        ],
        5: [
            { japones: '生命', lectura: 'seimei', opciones: ['Vida', 'Muerte', 'Existencia', 'Esencia'], respuesta: 0 },
            { japones: '生物', lectura: 'seibutsu', opciones: ['Ser vivo', 'Objeto inanimado', 'Mineral', 'Elemento'], respuesta: 0 },
            { japones: '細胞', lectura: 'saibou', opciones: ['Célula', 'Tejido', 'Órgano', 'Sistema'], respuesta: 0 },
            { japones: '遺伝', lectura: 'iden', opciones: ['Herencia', 'Adquisición', 'Aprendizaje', 'Experiencia'], respuesta: 0 },
            { japones: '進化', lectura: 'shinka', opciones: ['Evolución', 'Involución', 'Estancamiento', 'Regresión'], respuesta: 0 },
            { japones: '生態', lectura: 'seitai', opciones: ['Ecología', 'Anatomía', 'Fisiología', 'Biología'], respuesta: 0 },
            { japones: '繁殖', lectura: 'hanshoku', opciones: ['Reproducción', 'Muerte', 'Extinción', 'Desaparición'], respuesta: 0 },
            { japones: '適応', lectura: 'tekiou', opciones: ['Adaptación', 'Rigidez', 'Inflexibilidad', 'Inadaptación'], respuesta: 0 },
            { japones: '多様性', lectura: 'tayousei', opciones: ['Diversidad', 'Uniformidad', 'Homogeneidad', 'Similitud'], respuesta: 0 },
            { japones: '絶滅', lectura: 'zetsumetsu', opciones: ['Extinción', 'Supervivencia', 'Conservación', 'Preservación'], respuesta: 0 }
        ]
    },
    
    // Sub-contenedor 3.3
    'sub3_3': {
        1: [
            { japones: '哲学', lectura: 'tetsugaku', opciones: ['Filosofía', 'Ciencia', 'Arte', 'Religión'], respuesta: 0 },
            { japones: '思想', lectura: 'shisou', opciones: ['Pensamiento', 'Acción', 'Palabra', 'Emoción'], respuesta: 0 },
            { japones: '真理', lectura: 'shinri', opciones: ['Verdad', 'Mentira', 'Error', 'Engaño'], respuesta: 0 },
            { japones: '知識', lectura: 'chishiki', opciones: ['Conocimiento', 'Ignorancia', 'Duda', 'Incertidumbre'], respuesta: 0 },
            { japones: '理性', lectura: 'risei', opciones: ['Razón', 'Emoción', 'Instinto', 'Intuición'], respuesta: 0 },
            { japones: '存在', lectura: 'sonzai', opciones: ['Existencia', 'Inexistencia', 'Nada', 'Vacío'], respuesta: 0 },
            { japones: '意識', lectura: 'ishiki', opciones: ['Conciencia', 'Inconsciencia', 'Sueño', 'Desmayo'], respuesta: 0 },
            { japones: '自由', lectura: 'jiyuu', opciones: ['Libertad', 'Esclavitud', 'Opresión', 'Restricción'], respuesta: 0 },
            { japones: '正義', lectura: 'seigi', opciones: ['Justicia', 'Injusticia', 'Corrupción', 'Abuso'], respuesta: 0 },
            { japones: '道德', lectura: 'doutoku', opciones: ['Moral', 'Inmoralidad', 'Amoralidad', 'Corrupción'], respuesta: 0 }
        ],
        2: [
            { japones: '宗教', lectura: 'shuukyou', opciones: ['Religión', 'Ciencia', 'Filosofía', 'Arte'], respuesta: 0 },
            { japones: '信仰', lectura: 'shinkou', opciones: ['Creencia', 'Duda', 'Escepticismo', 'Agnosticismo'], respuesta: 0 },
            { japones: '神', lectura: 'kami', opciones: ['Dios', 'Humano', 'Animal', 'Objeto'], respuesta: 0 },
            { japones: '祈り', lectura: 'inori', opciones: ['Oración', 'Maldición', 'Bendición', 'Profecía'], respuesta: 0 },
            { japones: '儀式', lectura: 'gishiki', opciones: ['Ceremonia', 'Informalidad', 'Espontaneidad', 'Improvisación'], respuesta: 0 },
            { japones: '寺院', lectura: 'jiin', opciones: ['Templo', 'Casa', 'Escuela', 'Oficina'], respuesta: 0 },
            { japones: '聖書', lectura: 'seisho', opciones: ['Biblia', 'Novela', 'Poesía', 'Ensayo'], respuesta: 0 },
            { japones: '信仰心', lectura: 'shinkoushin', opciones: ['Devoción', 'Ateísmo', 'Agnosticismo', 'Indiferencia'], respuesta: 0 },
            { japones: '来世', lectura: 'raise', opciones: ['Vida después de la muerte', 'Vida presente', 'Reencarnación', 'Nirvana'], respuesta: 0 },
            { japones: '奇跡', lectura: 'kiseki', opciones: ['Milagro', 'Normalidad', 'Rutina', 'Cotidianidad'], respuesta: 0 }
        ],
        3: [
            { japones: '言語', lectura: 'gengo', opciones: ['Lenguaje', 'Silencio', 'Gesto', 'Expresión'], respuesta: 0 },
            { japones: '文法', lectura: 'bunpou', opciones: ['Gramática', 'Vocabulario', 'Pronunciación', 'Escritura'], respuesta: 0 },
            { japones: '語彙', lectura: 'goi', opciones: ['Vocabulario', 'Gramática', 'Pronunciación', 'Escritura'], respuesta: 0 },
            { japones: '発音', lectura: 'hatsuon', opciones: ['Pronunciación', 'Escritura', 'Lectura', 'Comprensión'], respuesta: 0 },
            { japones: '意味', lectura: 'imi', opciones: ['Significado', 'Significante', 'Símbolo', 'Representación'], respuesta: 0 },
            { japones: '翻訳', lectura: 'honyaku', opciones: ['Traducción', 'Interpretación', 'Adaptación', 'Modificación'], respuesta: 0 },
            { japones: '通訳', lectura: 'tsuuyaku', opciones: ['Interpretación', 'Traducción', 'Explicación', 'Aclaración'], respuesta: 0 },
            { japones: '方言', lectura: 'hougen', opciones: ['Dialecto', 'Lengua estándar', 'Idioma', 'Jerga'], respuesta: 0 },
            { japones: '表現', lectura: 'hyougen', opciones: ['Expresión', 'Represión', 'Ocultamiento', 'Silencio'], respuesta: 0 },
            { japones: 'コミュニケーション', lectura: 'komyunikeeshon', opciones: ['Comunicación', 'Incomunicación', 'Aislamiento', 'Soledad'], respuesta: 0 }
        ],
        4: [
            { japones: '文学', lectura: 'bungaku', opciones: ['Literatura', 'Ciencia', 'Arte', 'Filosofía'], respuesta: 0 },
            { japones: '詩', lectura: 'shi', opciones: ['Poesía', 'Prosa', 'Ensayo', 'Novela'], respuesta: 0 },
            { japones: '小説', lectura: 'shousetsu', opciones: ['Novela', 'Poesía', 'Ensayo', 'Teatro'], respuesta: 0 },
            { japones: '物語', lectura: 'monogatari', opciones: ['Historia', 'Hecho', 'Realidad', 'Verdad'], respuesta: 0 },
            { japones: '作者', lectura: 'sakusha', opciones: ['Autor', 'Lector', 'Crítico', 'Editor'], respuesta: 0 },
            { japones: '主人公', lectura: 'shujinkou', opciones: ['Protagonista', 'Antagonista', 'Personaje secundario', 'Narrador'], respuesta: 0 },
            { japones: '文体', lectura: 'buntai', opciones: ['Estilo', 'Contenido', 'Tema', 'Argumento'], respuesta: 0 },
            { japones: '比喩', lectura: 'hiyu', opciones: ['Metáfora', 'Literalidad', 'Realismo', 'Naturalismo'], respuesta: 0 },
            { japones: '象徴', lectura: 'shouchou', opciones: ['Símbolo', 'Realidad', 'Hecho', 'Verdad'], respuesta: 0 },
            { japones: '感動', lectura: 'kandou', opciones: ['Emoción', 'Indiferencia', 'Frialdad', 'Desapego'], respuesta: 0 }
        ],
        5: [
            { japones: '神話', lectura: 'shinwa', opciones: ['Mito', 'Historia', 'Ciencia', 'Filosofía'], respuesta: 0 },
            { japones: '伝説', lectura: 'densetsu', opciones: ['Leyenda', 'Historia', 'Realidad', 'Verdad'], respuesta: 0 },
            { japones: '民話', lectura: 'minwa', opciones: ['Cuento popular', 'Historia oficial', 'Ciencia', 'Filosofía'], respuesta: 0 },
            { japones: '寓話', lectura: 'guuwa', opciones: ['Fábula', 'Historia', 'Realidad', 'Verdad'], respuesta: 0 },
            { japones: '昔話', lectura: 'mukashibanashi', opciones: ['Cuento antiguo', 'Historia contemporánea', 'Noticia', 'Reportaje'], respuesta: 0 },
            { japones: '英雄', lectura: 'eiyuu', opciones: ['Héroe', 'Villano', 'Personaje común', 'Antihéroe'], respuesta: 0 },
            { japones: '怪物', lectura: 'kaibutsu', opciones: ['Monstruo', 'Humano', 'Animal', 'Objeto'], respuesta: 0 },
            { japones: '魔法', lectura: 'mahou', opciones: ['Magia', 'Ciencia', 'Tecnología', 'Realidad'], respuesta: 0 },
            { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Rutina', 'Seguridad', 'Estabilidad'], respuesta: 0 },
            { japones: '運命', lectura: 'unmei', opciones: ['Destino', 'Azar', 'Elección', 'Libre albedrío'], respuesta: 0 }
        ]
    },
    
    // ================================================
    // CONTENEDORES 4-10 (EJEMPLOS VACÍOS - PARA COMPLETAR)
    // ================================================
    
    // Sub-contenedor 4.1
    'sub4_1': {
        1: generarPalabras(10),
        2: generarPalabras(10),
        3: generarPalabras(10),
        4: generarPalabras(10),
        5: generarPalabras(10)
    },
    
    // Sub-contenedor 4.2
    'sub4_2': {
        1: generarPalabras(10),
        2: generarPalabras(10),
        3: generarPalabras(10),
        4: generarPalabras(10),
        5: generarPalabras(10)
    },
    
    // Sub-contenedor 4.3
    'sub4_3': {
        1: generarPalabras(10),
        2: generarPalabras(10),
        3: generarPalabras(10),
        4: generarPalabras(10),
        5: generarPalabras(10)
    },
    
    // Sub-contenedor 5.1
    'sub5_1': {
        1: generarPalabras(10),
        2: generarPalabras(10),
        3: generarPalabras(10),
        4: generarPalabras(10),
        5: generarPalabras(10)
    },
    
    // Sub-contenedor 5.2
    'sub5_2': {
        1: generarPalabras(10),
        2: generarPalabras(10),
        3: generarPalabras(10),
        4: generarPalabras(10),
        5: generarPalabras(10)
    },
    
    // Sub-contenedor 5.3
    'sub5_3': {
        1: generarPalabras(10),
        2: generarPalabras(10),
        3: generarPalabras(10),
        4: generarPalabras(10),
        5: generarPalabras(10)
    },
    
    // ... Continúa con los demás subcontenedores 6-10
    // Puedes agregar vocabulario específico cuando lo necesites
    
    // Función auxiliar para generar palabras genéricas
    // (Mantener esta función aquí para poder usarla en los contenedores vacíos)
};

// Función para generar palabras genéricas (para contenedores sin vocabulario específico)
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

// Exportar para uso global (si es necesario)
if (typeof window !== 'undefined') {
    window.vocabularioDatabase = vocabularioDatabase;
    window.generarPalabras = generarPalabras;
}
