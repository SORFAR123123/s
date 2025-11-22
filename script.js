// Datos de ejemplo para los mazos
const mazos = {
    'lastsummer': [
        { japones: '夏', lectura: 'natsu', opciones: ['Verano', 'Invierno', 'Primavera', 'Otoño'], respuesta: 0 },
        { japones: '海', lectura: 'umi', opciones: ['Mar', 'Montaña', 'Río', 'Lago'], respuesta: 0 },
        { japones: '泳ぐ', lectura: 'oyogu', opciones: ['Nadar', 'Correr', 'Saltar', 'Bailar'], respuesta: 0 },
        { japones: '太陽', lectura: 'taiyou', opciones: ['Sol', 'Luna', 'Estrella', 'Nube'], respuesta: 0 },
        { japones: '休暇', lectura: 'kyuuka', opciones: ['Vacaciones', 'Trabajo', 'Estudio', 'Viaje'], respuesta: 0 }
    ],
    'mazo2': [
        { japones: '友達', lectura: 'tomodachi', opciones: ['Amigo', 'Enemigo', 'Vecino', 'Familiar'], respuesta: 0 },
        { japones: '映画', lectura: 'eiga', opciones: ['Película', 'Libro', 'Música', 'Arte'], respuesta: 0 },
        { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Pintura', 'Danza', 'Teatro'], respuesta: 0 },
        { japones: '小説', lectura: 'shousetsu', opciones: ['Novela', 'Poesía', 'Ensayo', 'Cuento'], respuesta: 0 },
        { japones: '芸術', lectura: 'geijutsu', opciones: ['Arte', 'Ciencia', 'Deporte', 'Tecnología'], respuesta: 0 }
    ],
    'mazo3': [
        { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Peligro', 'Misterio', 'Viaje'], respuesta: 0 },
        { japones: '勇者', lectura: 'yuusha', opciones: ['Héroe', 'Villano', 'Guía', 'Aliado'], respuesta: 0 },
        { japones: '魔法', lectura: 'mahou', opciones: ['Magia', 'Tecnología', 'Ciencia', 'Arte'], respuesta: 0 },
        { japones: '戦い', lectura: 'tatakai', opciones: ['Batalla', 'Paz', 'Negociación', 'Alianza'], respuesta: 0 },
        { japones: '勝利', lectura: 'shouri', opciones: ['Victoria', 'Derrota', 'Empate', 'Rendición'], respuesta: 0 }
    ],
    'mazo4': [
        { japones: '闇', lectura: 'yami', opciones: ['Oscuridad', 'Luz', 'Sombra', 'Noche'], respuesta: 0 },
        { japones: '幻想', lectura: 'gensou', opciones: ['Fantasia', 'Realidad', 'Sueño', 'Pesadilla'], respuesta: 0 },
        { japones: '魔物', lectura: 'mamono', opciones: ['Monstruo', 'Ángel', 'Demonio', 'Bestia'], respuesta: 0 },
        { japones: '呪文', lectura: 'jumon', opciones: ['Hechizo', 'Conjuro', 'Bendición', 'Maldición'], respuesta: 0 },
        { japones: '城', lectura: 'shiro', opciones: ['Castillo', 'Fortaleza', 'Palacio', 'Torre'], respuesta: 0 }
    ],
    'mazo5': [
        { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Eternidad'], respuesta: 0 },
        { japones: '宇宙', lectura: 'uchuu', opciones: ['Universo', 'Galaxia', 'Planeta', 'Espacio'], respuesta: 0 },
        { japones: '機械', lectura: 'kikai', opciones: ['Máquina', 'Robot', 'Computadora', 'Tecnología'], respuesta: 0 },
        { japones: '科学', lectura: 'kagaku', opciones: ['Ciencia', 'Tecnología', 'Matemáticas', 'Física'], respuesta: 0 },
        { japones: '人工知能', lectura: 'jinkou chinou', opciones: ['Inteligencia Artificial', 'Robot', 'Computadora', 'Algoritmo'], respuesta: 0 }
    ],
    'mazo6': [
        { japones: '恋愛', lectura: 'renai', opciones: ['Amor Romántico', 'Amistad', 'Familia', 'Pasión'], respuesta: 0 },
        { japones: '星', lectura: 'hoshi', opciones: ['Estrella', 'Planeta', 'Galaxia', 'Constelación'], respuesta: 0 },
        { japones: '運命', lectura: 'unmei', opciones: ['Destino', 'Suerte', 'Azar', 'Fortuna'], respuesta: 0 },
        { japones: '永遠', lectura: 'eien', opciones: ['Eternidad', 'Infinito', 'Immortalidad', 'Perpetuidad'], respuesta: 0 },
        { japones: '約束', lectura: 'yakusoku', opciones: ['Promesa', 'Juramento', 'Compromiso', 'Pacto'], respuesta: 0 }
    ],
    'mazo7': [
        { japones: '海賊', lectura: 'kaizoku', opciones: ['Pirata', 'Marinero', 'Corsario', 'Navegante'], respuesta: 0 },
        { japones: '宝', lectura: 'takara', opciones: ['Tesoro', 'Riqueza', 'Joyas', 'Oro'], respuesta: 0 },
        { japones: '船', lectura: 'fune', opciones: ['Barco', 'Nave', 'Embarcación', 'Velero'], respuesta: 0 },
        { japones: '航海', lectura: 'koukai', opciones: ['Navegación', 'Viaje', 'Travesía', 'Expedición'], respuesta: 0 },
        { japones: '地図', lectura: 'chizu', opciones: ['Mapa', 'Brújula', 'Cartografía', 'Plano'], respuesta: 0 }
    ],
    'mazo8': [
        { japones: '神秘', lectura: 'shinpi', opciones: ['Misterio', 'Secreto', 'Enigma', 'Incógnita'], respuesta: 0 },
        { japones: '古代', lectura: 'kodai', opciones: ['Antigüedad', 'Edad Media', 'Prehistoria', 'Historia'], respuesta: 0 },
        { japones: '遺跡', lectura: 'iseki', opciones: ['Ruinas', 'Templo', 'Monumento', 'Reliquia'], respuesta: 0 },
        { japones: '謎', lectura: 'nazo', opciones: ['Enigma', 'Acertijo', 'Misterio', 'Secreto'], respuesta: 0 },
        { japones: '発見', lectura: 'hakken', opciones: ['Descubrimiento', 'Hallazgo', 'Invención', 'Exploración'], respuesta: 0 }
    ],
    'mazo9': [
        { japones: '電脳', lectura: 'dennou', opciones: ['Cibernético', 'Digital', 'Virtual', 'Electrónico'], respuesta: 0 },
        { japones: '都市', lectura: 'toshi', opciones: ['Ciudad', 'Metrópolis', 'Urbe', 'Capital'], respuesta: 0 },
        { japones: '技術', lectura: 'gijutsu', opciones: ['Tecnología', 'Ciencia', 'Ingeniería', 'Innovación'], respuesta: 0 },
        { japones: '仮想', lectura: 'kasou', opciones: ['Virtual', 'Artificial', 'Simulado', 'Digital'], respuesta: 0 },
        { japones: '現実', lectura: 'genjitsu', opciones: ['Realidad', 'Verdad', 'Existencia', 'Actualidad'], respuesta: 0 }
    ],
    'mazo10': [
        { japones: '蒸気', lectura: 'jouki', opciones: ['Vapor', 'Gas', 'Aire', 'Humo'], respuesta: 0 },
        { japones: '機械', lectura: 'kikai', opciones: ['Máquina', 'Mecanismo', 'Ingenio', 'Artefacto'], respuesta: 0 },
        { japones: '時代', lectura: 'jidai', opciones: ['Época', 'Era', 'Periodo', 'Tiempo'], respuesta: 0 },
        { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Creación', 'Descubrimiento', 'Innovación'], respuesta: 0 },
        { japones: '工場', lectura: 'koujou', opciones: ['Fábrica', 'Taller', 'Planta', 'Industria'], respuesta: 0 }
    ]
};

let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// Función para cargar un mazo específico
function cargarMazo(nombreMazo) {
    if (mazos[nombreMazo]) {
        mazoActual = [...mazos[nombreMazo]];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        // Mezclar las preguntas
        mezclarPreguntas();
        
        // Cambiar a la pantalla del quiz
        cambiarPantalla('pantalla-quiz');
        
        // Mostrar la primera pregunta
        mostrarPregunta();
    } else {
        alert('Mazo no encontrado');
    }
}

// Función para mezclar las preguntas
function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        // Actualizar contador
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        
        // Mostrar palabra japonesa y lectura
        document.getElementById('palabra-japones').textContent = pregunta.japones;
        document.getElementById('lectura').textContent = `(${pregunta.lectura})`;
        
        // Limpiar resultado anterior
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        
        // Ocultar botón siguiente
        document.getElementById('boton-siguiente').style.display = 'none';
        
        // Generar opciones
        const contenedorOpciones = document.getElementById('contenedor-opciones');
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
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta]);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

// Función para verificar la respuesta
function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    // Deshabilitar todos los botones
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Marcar la respuesta correcta e incorrecta
    opciones.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar resultado
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
    }
    
    // Mostrar botón siguiente
    document.getElementById('boton-siguiente').style.display = 'block';
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

// Función para mostrar los resultados finales
function mostrarResultados() {
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    resultadoFinal.innerHTML = `
        Resumen del Quiz:
        
        Preguntas totales: ${mazoActual.length}
        Respuestas correctas: ${respuestasCorrectas}
        Respuestas incorrectas: ${respuestasIncorrectas}
        Porcentaje de aciertos: ${porcentaje}%
        
        ${porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
          porcentaje >= 60 ? 'Buen trabajo, pero puedes mejorar 👍' : 
          'Sigue practicando, lo harás mejor la próxima vez 💪'}
    `;
}

// Función para cambiar entre pantallas
function cambiarPantalla(idPantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Mostrar la pantalla solicitada
    document.getElementById(idPantalla).classList.add('activa');
}

// Función para volver al inicio
function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

// Función para repetir el quiz
function repetirQuiz() {
    // Reiniciar variables
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Mezclar preguntas nuevamente
    mezclarPreguntas();
    
    // Volver al quiz
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}
