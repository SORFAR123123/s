// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES
// ============================================================================

// Aquí puedes cambiar las URLs de todas las imágenes
const configImagenes = {
    contenedores: {
        'contenedor1': 'imagenes/contenedor1.jpg',
        'contenedor2': 'imagenes/contenedor2.jpg',
        'contenedor3': 'imagenes/contenedor3.jpg',
        'contenedor4': 'imagenes/contenedor4.jpg',
        'contenedor5': 'imagenes/contenedor5.jpg',
        'contenedor6': 'imagenes/contenedor6.jpg',
        'contenedor7': 'imagenes/contenedor7.jpg',
        'contenedor8': 'imagenes/contenedor8.jpg',
        'contenedor9': 'imagenes/contenedor9.jpg',
        'contenedor10': 'imagenes/contenedor10.jpg'
    },
    subcontenedores: {
        'sub1_1': 'imagenes/sub1_1.jpg',
        'sub1_2': 'imagenes/sub1_2.jpg',
        'sub1_3': 'imagenes/sub1_3.jpg',
        'sub1_4': 'imagenes/sub1_4.jpg',
        'sub1_5': 'imagenes/sub1_5.jpg',
        'sub2_1': 'imagenes/sub2_1.jpg',
        'sub2_2': 'imagenes/sub2_2.jpg',
        'sub2_3': 'imagenes/sub2_3.jpg',
        'sub2_4': 'imagenes/sub2_4.jpg',
        'sub2_5': 'imagenes/sub2_5.jpg',
        'sub3_1': 'imagenes/sub3_1.jpg',
        'sub3_2': 'imagenes/sub3_2.jpg',
        'sub3_3': 'imagenes/sub3_3.jpg',
        'sub3_4': 'imagenes/sub3_4.jpg',
        'sub3_5': 'imagenes/sub3_5.jpg',
        'sub4_1': 'imagenes/sub4_1.jpg',
        'sub4_2': 'imagenes/sub4_2.jpg',
        'sub4_3': 'imagenes/sub4_3.jpg',
        'sub4_4': 'imagenes/sub4_4.jpg',
        'sub4_5': 'imagenes/sub4_5.jpg',
        'sub5_1': 'imagenes/sub5_1.jpg',
        'sub5_2': 'imagenes/sub5_2.jpg',
        'sub5_3': 'imagenes/sub5_3.jpg',
        'sub5_4': 'imagenes/sub5_4.jpg',
        'sub5_5': 'imagenes/sub5_5.jpg',
        'sub6_1': 'imagenes/sub6_1.jpg',
        'sub6_2': 'imagenes/sub6_2.jpg',
        'sub6_3': 'imagenes/sub6_3.jpg',
        'sub6_4': 'imagenes/sub6_4.jpg',
        'sub6_5': 'imagenes/sub6_5.jpg',
        'sub7_1': 'imagenes/sub7_1.jpg',
        'sub7_2': 'imagenes/sub7_2.jpg',
        'sub7_3': 'imagenes/sub7_3.jpg',
        'sub7_4': 'imagenes/sub7_4.jpg',
        'sub7_5': 'imagenes/sub7_5.jpg',
        'sub8_1': 'imagenes/sub8_1.jpg',
        'sub8_2': 'imagenes/sub8_2.jpg',
        'sub8_3': 'imagenes/sub8_3.jpg',
        'sub8_4': 'imagenes/sub8_4.jpg',
        'sub8_5': 'imagenes/sub8_5.jpg',
        'sub9_1': 'imagenes/sub9_1.jpg',
        'sub9_2': 'imagenes/sub9_2.jpg',
        'sub9_3': 'imagenes/sub9_3.jpg',
        'sub9_4': 'imagenes/sub9_4.jpg',
        'sub9_5': 'imagenes/sub9_5.jpg',
        'sub10_1': 'imagenes/sub10_1.jpg',
        'sub10_2': 'imagenes/sub10_2.jpg',
        'sub10_3': 'imagenes/sub10_3.jpg',
        'sub10_4': 'imagenes/sub10_4.jpg',
        'sub10_5': 'imagenes/sub10_5.jpg'
    },
    mazos: {
        'mazo1': 'imagenes/mazo1.jpg',
        'mazo2': 'imagenes/mazo2.jpg',
        'mazo3': 'imagenes/mazo3.jpg',
        'mazo4': 'imagenes/mazo4.jpg',
        'mazo5': 'imagenes/mazo5.jpg',
        'mazo6': 'imagenes/mazo6.jpg',
        'mazo7': 'imagenes/mazo7.jpg',
        'mazo8': 'imagenes/mazo8.jpg',
        'mazo9': 'imagenes/mazo9.jpg',
        'mazo10': 'imagenes/mazo10.jpg'
    }
};

// Función para obtener la URL de una imagen
function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    // Imagen por defecto si no se encuentra
    return 'imagenes/default.jpg';
}

// ============================================================================
// ESTRUCTURA PRINCIPAL
// ============================================================================

// Estructura de 10 contenedores → 5 sub-contenedores → 10 mazos → 10 palabras
const estructura = {
    'contenedor1': {
        nombre: 'Contenedor 1',
        subcontenedores: {
            'sub1_1': { nombre: 'Sub-Contenedor 1.1', mazos: generarMazos(10) },
            'sub1_2': { nombre: 'Sub-Contenedor 1.2', mazos: generarMazos(10) },
            'sub1_3': { nombre: 'Sub-Contenedor 1.3', mazos: generarMazos(10) },
            'sub1_4': { nombre: 'Sub-Contenedor 1.4', mazos: generarMazos(10) },
            'sub1_5': { nombre: 'Sub-Contenedor 1.5', mazos: generarMazos(10) }
        }
    },
    'contenedor2': {
        nombre: 'Contenedor 2',
        subcontenedores: {
            'sub2_1': { nombre: 'Sub-Contenedor 2.1', mazos: generarMazos(10) },
            'sub2_2': { nombre: 'Sub-Contenedor 2.2', mazos: generarMazos(10) },
            'sub2_3': { nombre: 'Sub-Contenedor 2.3', mazos: generarMazos(10) },
            'sub2_4': { nombre: 'Sub-Contenedor 2.4', mazos: generarMazos(10) },
            'sub2_5': { nombre: 'Sub-Contenedor 2.5', mazos: generarMazos(10) }
        }
    },
    'contenedor3': {
        nombre: 'Contenedor 3',
        subcontenedores: {
            'sub3_1': { nombre: 'Sub-Contenedor 3.1', mazos: generarMazos(10) },
            'sub3_2': { nombre: 'Sub-Contenedor 3.2', mazos: generarMazos(10) },
            'sub3_3': { nombre: 'Sub-Contenedor 3.3', mazos: generarMazos(10) },
            'sub3_4': { nombre: 'Sub-Contenedor 3.4', mazos: generarMazos(10) },
            'sub3_5': { nombre: 'Sub-Contenedor 3.5', mazos: generarMazos(10) }
        }
    },
    'contenedor4': {
        nombre: 'Contenedor 4',
        subcontenedores: {
            'sub4_1': { nombre: 'Sub-Contenedor 4.1', mazos: generarMazos(10) },
            'sub4_2': { nombre: 'Sub-Contenedor 4.2', mazos: generarMazos(10) },
            'sub4_3': { nombre: 'Sub-Contenedor 4.3', mazos: generarMazos(10) },
            'sub4_4': { nombre: 'Sub-Contenedor 4.4', mazos: generarMazos(10) },
            'sub4_5': { nombre: 'Sub-Contenedor 4.5', mazos: generarMazos(10) }
        }
    },
    'contenedor5': {
        nombre: 'Contenedor 5',
        subcontenedores: {
            'sub5_1': { nombre: 'Sub-Contenedor 5.1', mazos: generarMazos(10) },
            'sub5_2': { nombre: 'Sub-Contenedor 5.2', mazos: generarMazos(10) },
            'sub5_3': { nombre: 'Sub-Contenedor 5.3', mazos: generarMazos(10) },
            'sub5_4': { nombre: 'Sub-Contenedor 5.4', mazos: generarMazos(10) },
            'sub5_5': { nombre: 'Sub-Contenedor 5.5', mazos: generarMazos(10) }
        }
    },
    'contenedor6': {
        nombre: 'Contenedor 6',
        subcontenedores: {
            'sub6_1': { nombre: 'Sub-Contenedor 6.1', mazos: generarMazos(10) },
            'sub6_2': { nombre: 'Sub-Contenedor 6.2', mazos: generarMazos(10) },
            'sub6_3': { nombre: 'Sub-Contenedor 6.3', mazos: generarMazos(10) },
            'sub6_4': { nombre: 'Sub-Contenedor 6.4', mazos: generarMazos(10) },
            'sub6_5': { nombre: 'Sub-Contenedor 6.5', mazos: generarMazos(10) }
        }
    },
    'contenedor7': {
        nombre: 'Contenedor 7',
        subcontenedores: {
            'sub7_1': { nombre: 'Sub-Contenedor 7.1', mazos: generarMazos(10) },
            'sub7_2': { nombre: 'Sub-Contenedor 7.2', mazos: generarMazos(10) },
            'sub7_3': { nombre: 'Sub-Contenedor 7.3', mazos: generarMazos(10) },
            'sub7_4': { nombre: 'Sub-Contenedor 7.4', mazos: generarMazos(10) },
            'sub7_5': { nombre: 'Sub-Contenedor 7.5', mazos: generarMazos(10) }
        }
    },
    'contenedor8': {
        nombre: 'Contenedor 8',
        subcontenedores: {
            'sub8_1': { nombre: 'Sub-Contenedor 8.1', mazos: generarMazos(10) },
            'sub8_2': { nombre: 'Sub-Contenedor 8.2', mazos: generarMazos(10) },
            'sub8_3': { nombre: 'Sub-Contenedor 8.3', mazos: generarMazos(10) },
            'sub8_4': { nombre: 'Sub-Contenedor 8.4', mazos: generarMazos(10) },
            'sub8_5': { nombre: 'Sub-Contenedor 8.5', mazos: generarMazos(10) }
        }
    },
    'contenedor9': {
        nombre: 'Contenedor 9',
        subcontenedores: {
            'sub9_1': { nombre: 'Sub-Contenedor 9.1', mazos: generarMazos(10) },
            'sub9_2': { nombre: 'Sub-Contenedor 9.2', mazos: generarMazos(10) },
            'sub9_3': { nombre: 'Sub-Contenedor 9.3', mazos: generarMazos(10) },
            'sub9_4': { nombre: 'Sub-Contenedor 9.4', mazos: generarMazos(10) },
            'sub9_5': { nombre: 'Sub-Contenedor 9.5', mazos: generarMazos(10) }
        }
    },
    'contenedor10': {
        nombre: 'Contenedor 10',
        subcontenedores: {
            'sub10_1': { nombre: 'Sub-Contenedor 10.1', mazos: generarMazos(10) },
            'sub10_2': { nombre: 'Sub-Contenedor 10.2', mazos: generarMazos(10) },
            'sub10_3': { nombre: 'Sub-Contenedor 10.3', mazos: generarMazos(10) },
            'sub10_4': { nombre: 'Sub-Contenedor 10.4', mazos: generarMazos(10) },
            'sub10_5': { nombre: 'Sub-Contenedor 10.5', mazos: generarMazos(10) }
        }
    }
};

function generarMazos(cantidadMazos) {
    const mazos = {};
    for (let i = 1; i <= cantidadMazos; i++) {
        mazos[`mazo${i}`] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabras(10)
        };
    }
    return mazos;
}

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

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

function cargarContenedor(idContenedor) {
    if (estructura[idContenedor]) {
        contenedorActual = idContenedor;
        const contenedor = estructura[idContenedor];
        
        document.getElementById('titulo-contenedor').textContent = contenedor.nombre;
        document.getElementById('nombre-contenedor').textContent = `Sub-Contenedores de ${contenedor.nombre}`;
        
        const contenedorSub = document.getElementById('contenedor-subcontenedores');
        contenedorSub.innerHTML = '';
        
        Object.keys(contenedor.subcontenedores).forEach(key => {
            const sub = contenedor.subcontenedores[key];
            const subDiv = document.createElement('div');
            subDiv.className = 'subcontenedor-card';
            subDiv.onclick = () => cargarSubcontenedor(key);
            
            subDiv.innerHTML = `
                <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nombre}" class="subcontenedor-imagen">
                <div class="subcontenedor-texto">${sub.nombre}</div>
                <div class="subcontenedor-info">10 mazos disponibles</div>
            `;
            
            contenedorSub.appendChild(subDiv);
        });
        
        cambiarPantalla('pantalla-subcontenedores');
    }
}

function cargarSubcontenedor(idSubcontenedor) {
    const contenedor = estructura[contenedorActual];
    if (contenedor && contenedor.subcontenedores[idSubcontenedor]) {
        subcontenedorActual = idSubcontenedor;
        const subcontenedor = contenedor.subcontenedores[idSubcontenedor];
        
        document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nombre;
        document.getElementById('nombre-subcontenedor').textContent = `Mazos de ${subcontenedor.nombre}`;
        
        const contenedorMazos = document.getElementById('contenedor-mazos');
        contenedorMazos.innerHTML = '';
        
        Object.keys(subcontenedor.mazos).forEach(key => {
            const mazo = subcontenedor.mazos[key];
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-card';
            mazoDiv.onclick = () => cargarMazo(key);
            
            mazoDiv.innerHTML = `
                <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nombre}" class="mazo-imagen">
                <div class="mazo-texto">${mazo.nombre}</div>
                <div class="mazo-info">10 palabras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        cambiarPantalla('pantalla-mazos');
    }
}

function cargarMazo(idMazo) {
    const contenedor = estructura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    if (subcontenedor && subcontenedor.mazos[idMazo]) {
        mazoActual = [...subcontenedor.mazos[idMazo].palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        mezclarPreguntas();
        cambiarPantalla('pantalla-quiz');
        mostrarPregunta();
    }
}

function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        document.getElementById('palabra-japones').textContent = pregunta.japones;
        document.getElementById('lectura').textContent = '';
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        document.getElementById('boton-siguiente').style.display = 'none';
        
        const contenedorOpciones = document.getElementById('contenedor-opciones');
        contenedorOpciones.innerHTML = '';
        
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    opciones.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        document.getElementById('lectura').textContent = `(${lectura})`;
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
    }
    
    document.getElementById('boton-siguiente').style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

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

function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

function volverASubcontenedores() {
    cambiarPantalla('pantalla-subcontenedores');
}

function volverAMazos() {
    cambiarPantalla('pantalla-mazos');
}

function repetirQuiz() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}
