// ============================================================================
// FUNCIÓN PARA GENERAR PALABRAS ESPECÍFICAS (USANDO VOCABULARIO EXTERNO)
// ============================================================================

// Función para generar palabras específicas para cada mazo
function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    // Usar la base de datos externa de vocabulario
    if (typeof vocabularioDatabase !== 'undefined' && 
        vocabularioDatabase[subcontenedorId] && 
        vocabularioDatabase[subcontenedorId][numeroMazo]) {
        return vocabularioDatabase[subcontenedorId][numeroMazo];
    } else {
        // Fallback a palabras genéricas si no hay específicas
        return generarPalabras(10);
    }
}

// Función de respaldo para generar palabras genéricas
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

// ============================================================================
// ESTRUCTURA PRINCIPAL MODIFICADA
// ============================================================================

// Nueva estructura: 10 contenedores → 3 sub-contenedores → 5 mazos → 10 palabras específicas
const estructura = {
    'contenedor1': {
        nombre: 'The Last Summer 1',
        subcontenedores: {
            'sub1_1': { 
                nombre: 'Sub-Contenedor 1.1', 
                mazos: generarMazosEspecificos('sub1_1') 
            },
            'sub1_2': { 
                nombre: 'Sub-Contenedor 1.2', 
                mazos: generarMazosEspecificos('sub1_2') 
            },
            'sub1_3': { 
                nombre: 'Sub-Contenedor 1.3', 
                mazos: generarMazosEspecificos('sub1_3') 
            }
        }
    },
    'contenedor2': {
        nombre: 'The Last Summer 2',
        subcontenedores: {
            'sub2_1': { 
                nombre: 'Sub-Contenedor 2.1', 
                mazos: generarMazosEspecificos('sub2_1') 
            },
            'sub2_2': { 
                nombre: 'Sub-Contenedor 2.2', 
                mazos: generarMazosEspecificos('sub2_2') 
            },
            'sub2_3': { 
                nombre: 'Sub-Contenedor 2.3', 
                mazos: generarMazosEspecificos('sub2_3') 
            }
        }
    },
    'contenedor3': {
        nombre: 'The Last Summer 3',
        subcontenedores: {
            'sub3_1': { 
                nombre: 'Sub-Contenedor 3.1', 
                mazos: generarMazosEspecificos('sub3_1') 
            },
            'sub3_2': { 
                nombre: 'Sub-Contenedor 3.2', 
                mazos: generarMazosEspecificos('sub3_2') 
            },
            'sub3_3': { 
                nombre: 'Sub-Contenedor 3.3', 
                mazos: generarMazosEspecificos('sub3_3') 
            }
        }
    },
    'contenedor4': {
        nombre: 'Contenedor 4',
        subcontenedores: {
            'sub4_1': { 
                nombre: 'Sub-Contenedor 4.1', 
                mazos: generarMazosEspecificos('sub4_1') 
            },
            'sub4_2': { 
                nombre: 'Sub-Contenedor 4.2', 
                mazos: generarMazosEspecificos('sub4_2') 
            },
            'sub4_3': { 
                nombre: 'Sub-Contenedor 4.3', 
                mazos: generarMazosEspecificos('sub4_3') 
            }
        }
    },
    'contenedor5': {
        nombre: 'Contenedor 5',
        subcontenedores: {
            'sub5_1': { 
                nombre: 'Sub-Contenedor 5.1', 
                mazos: generarMazosEspecificos('sub5_1') 
            },
            'sub5_2': { 
                nombre: 'Sub-Contenedor 5.2', 
                mazos: generarMazosEspecificos('sub5_2') 
            },
            'sub5_3': { 
                nombre: 'Sub-Contenedor 5.3', 
                mazos: generarMazosEspecificos('sub5_3') 
            }
        }
    },
    'contenedor6': {
        nombre: 'Contenedor 6',
        subcontenedores: {
            'sub6_1': { 
                nombre: 'Sub-Contenedor 6.1', 
                mazos: generarMazosEspecificos('sub6_1') 
            },
            'sub6_2': { 
                nombre: 'Sub-Contenedor 6.2', 
                mazos: generarMazosEspecificos('sub6_2') 
            },
            'sub6_3': { 
                nombre: 'Sub-Contenedor 6.3', 
                mazos: generarMazosEspecificos('sub6_3') 
            }
        }
    },
    'contenedor7': {
        nombre: 'Contenedor 7',
        subcontenedores: {
            'sub7_1': { 
                nombre: 'Sub-Contenedor 7.1', 
                mazos: generarMazosEspecificos('sub7_1') 
            },
            'sub7_2': { 
                nombre: 'Sub-Contenedor 7.2', 
                mazos: generarMazosEspecificos('sub7_2') 
            },
            'sub7_3': { 
                nombre: 'Sub-Contenedor 7.3', 
                mazos: generarMazosEspecificos('sub7_3') 
            }
        }
    },
    'contenedor8': {
        nombre: 'Contenedor 8',
        subcontenedores: {
            'sub8_1': { 
                nombre: 'Sub-Contenedor 8.1', 
                mazos: generarMazosEspecificos('sub8_1') 
            },
            'sub8_2': { 
                nombre: 'Sub-Contenedor 8.2', 
                mazos: generarMazosEspecificos('sub8_2') 
            },
            'sub8_3': { 
                nombre: 'Sub-Contenedor 8.3', 
                mazos: generarMazosEspecificos('sub8_3') 
            }
        }
    },
    'contenedor9': {
        nombre: 'Contenedor 9',
        subcontenedores: {
            'sub9_1': { 
                nombre: 'Sub-Contenedor 9.1', 
                mazos: generarMazosEspecificos('sub9_1') 
            },
            'sub9_2': { 
                nombre: 'Sub-Contenedor 9.2', 
                mazos: generarMazosEspecificos('sub9_2') 
            },
            'sub9_3': { 
                nombre: 'Sub-Contenedor 9.3', 
                mazos: generarMazosEspecificos('sub9_3') 
            }
        }
    },
    'contenedor10': {
        nombre: 'Contenedor 10',
        subcontenedores: {
            'sub10_1': { 
                nombre: 'Sub-Contenedor 10.1', 
                mazos: generarMazosEspecificos('sub10_1') 
            },
            'sub10_2': { 
                nombre: 'Sub-Contenedor 10.2', 
                mazos: generarMazosEspecificos('sub10_2') 
            },
            'sub10_3': { 
                nombre: 'Sub-Contenedor 10.3', 
                mazos: generarMazosEspecificos('sub10_3') 
            }
        }
    }
};

// Función para generar mazos específicos con palabras únicas para cada subcontenedor
function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    
    // Detectar automáticamente cuántos mazos hay definidos
    // Buscando hasta encontrar el límite
    let numeroMazos = 0;
    let i = 1;
    
    // Seguir buscando mazos mientras existan en generarPalabrasEspecificas
    while (true) {
        const palabras = generarPalabrasEspecificas(subcontenedorId, i);
        // Si no hay palabras o son las genéricas, detenerse
        if (!palabras || palabras.length === 0 || 
            (palabras[0] && palabras[0].japones === '言葉')) { // Palabra genérica por defecto
            break;
        }
        numeroMazos = i;
        i++;
        
        // Límite máximo por seguridad
        if (i > 20) break;
    }
    
    // Si no se encontraron mazos específicos, usar 5 como valor por defecto
    if (numeroMazos === 0) {
        numeroMazos = 5;
    }
    
    // Generar mazos específicos para cada subcontenedor
    for (let i = 1; i <= numeroMazos; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// ============================================================================
// FUNCIONES DEL SISTEMA PRINCIPAL - CON BOTÓN "IR AL MENÚ"
// ============================================================================

// FUNCIÓN MEJORADA: "Ir al Menú" - Regresa a la pantalla principal
function irAlMenu() {
    cambiarPantalla('pantalla-inicio');
    
    // Detener cualquier video que esté reproduciéndose
    detenerTodosLosVideos();
    
    console.log("🏠 Navegando al menú principal");
}

// Función para detener todos los videos
function detenerTodosLosVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

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
                <div class="subcontenedor-info">5 mazos disponibles</div>
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

// FUNCIÓN MEJORADA - NAVEGACIÓN AUTOMÁTICA + REGISTRO DE PALABRAS FALLADAS
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
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

// FUNCIÓN CORREGIDA - REGISTRA PALABRAS FALLADAS Y MUESTRA LA PRONUNCIACIÓN SIEMPRE
function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    const palabraActual = document.getElementById('palabra-japones').textContent;
    
    // CORRECCIÓN: Asegurar que todos los botones son clickeables
    opcionesDOM.forEach(opcion => {
        opcion.disabled = false; // Asegurar que no estén deshabilitados
    });
    
    // Deshabilitar botones después de hacer clic
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
    
    // CORRECCIÓN 1: MOSTRAR LA PRONUNCIACIÓN SIEMPRE, TANTO EN RESPUESTA CORRECTA COMO INCORRECTA
    document.getElementById('lectura').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        // CORRECCIÓN 2: Navegación automática solo para respuestas correctas
        setTimeout(() => {
            siguientePregunta();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        // REGISTRAR PALABRA FALLADA CON OPCIONES ORIGINALES
        sistemaPalabrasFalladas.registrarPalabraFallada(
            palabraActual,
            respuestaSeleccionada,
            respuestaCorrecta,
            lectura,
            opciones // Guardar las opciones originales
        );
        
        // Mostrar botón "Continuar" solo para respuestas incorrectas
        document.getElementById('boton-siguiente').style.display = 'block';
        
        // CORRECCIÓN 3: NO NAVEGACIÓN AUTOMÁTICA PARA RESPUESTAS INCORRECTAS
        // El usuario debe hacer clic en "Continuar" manualmente
    }
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

// FUNCIÓN MEJORADA - SOLO EVENTO DIARIO CUANDO HAY DOBLE COMPLETACIÓN
function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    console.log("📊 Mostrando resultados:", {
        porcentaje: porcentaje,
        tieneEventoActivo: !!eventosDiarios.estado.eventoActual,
        eventoCompletado: eventosDiarios.estado.completado,
        eventoProgreso: eventosDiarios.estado.progreso
    });
    
    // Registrar experiencia en RPG de novia
    if (typeof rpgNovia !== 'undefined') {
        rpgNovia.registrarMazoCompletado(porcentaje);
    }
    
    if (porcentaje === 100) {
        // Registrar mazo completado para misiones diarias
        misionesDiarias.registrarMazoCompletado();
        
        // Registrar mazo completado para evento diario (esto podría completar el evento)
        const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
        eventosDiarios.registrarMazoCompletado();
        
        // VERIFICAR: ¿Se completó el evento diario JUSTO AHORA?
        const eventoSeCompletoJustoAhora = eventoEstabaIncompleto && eventosDiarios.estado.completado;
        
        console.log("🎯 Estado evento:", {
            eventoEstabaIncompleto: eventoEstabaIncompleto,
            eventoSeCompletoJustoAhora: eventoSeCompletoJustoAhora
        });
        
        if (eventoSeCompletoJustoAhora) {
            // SOLUCIÓN: Si se completó el evento diario, SOLO mostrar el evento
            console.log("🎁 Evento diario completado - Mostrando SOLO evento");
            // El evento diario automáticamente mostrará su video
            // NO mostramos el video del mazo
        } else {
            // Si NO se completó evento diario, mostrar video normal del mazo
            sistemaEconomia.agregarDinero(1, "Mazo completado al 100%");
            mostrarVideoRecompensa();
        }
        
    } else if (porcentaje >= 80) {
        // Registrar mazo completado para misiones diarias (80% cuenta como completado)
        misionesDiarias.registrarMazoCompletado();
        eventosDiarios.registrarMazoCompletado();
        sistemaEconomia.agregarDinero(0.5, "Mazo completado al 80%");
        mostrarPantallaResultados(porcentaje);
        
    } else {
        mostrarPantallaResultados(porcentaje);
    }
}

function mostrarPantallaResultados(porcentaje) {
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    
    resultadoFinal.innerHTML = `
        <div class="resultado-detalle">
            <h3>Resumen del Quiz</h3>
            <div class="resultado-item">
                <span class="resultado-label">Preguntas totales:</span>
                <span class="resultado-valor">${mazoActual.length}</span>
            </div>
            <div class="resultado-item">
                <span class="resultado-label">Respuestas correctas:</span>
                <span class="resultado-valor">${respuestasCorrectas}</span>
            </div>
            <div class="resultado-item">
                <span class="resultado-label">Respuestas incorrectas:</span>
                <span class="resultado-valor">${respuestasIncorrectas}</span>
            </div>
            <div class="resultado-item">
                <span class="resultado-label">Porcentaje de aciertos:</span>
                <span class="resultado-valor resultado-porcentaje">${porcentaje}%</span>
            </div>
            <div class="resultado-mensaje">
                ${porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
                  porcentaje >= 60 ? 'Buen trabajo, pero puedes mejorar 👍' : 
                  'Sigue practicando, lo harás mejor la próxima vez 💪'}
            </div>
        </div>
    `;
}

// FUNCIÓN MEJORADA - VIDEO EN BUCLE CON BOTÓN DE CERRAR (MUTEADO)
function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    // Actualizar la pantalla de video con la información del video seleccionado
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    document.getElementById('recompensa-mazo').textContent = '+1 S/. 💰';
    
    cambiarPantalla('pantalla-video-recompensa');
    
    // Reproducir el video automáticamente
    const videoElement = document.getElementById('video-recompensa');
    
    // Configurar para que se repita en bucle
    videoElement.loop = true;
    
    // MUTEAR EL VIDEO PARA QUE NO INTERRUMPA TU ASMR/TWITCH
    videoElement.muted = true;  // <-- ESTA ES LA LÍNEA CLAVE PARA MUTEAR
    
    // QUITAR el evento onended para que no se cierre automáticamente
    videoElement.onended = null;
    
    videoElement.play().catch(e => {
        console.log("Autoplay bloqueado, el usuario debe iniciar manualmente");
    });
}

// NUEVA FUNCIÓN PARA CERRAR VIDEO DE RECOMPENSA DE MAZO
function cerrarVideoRecompensaMazo() {
    // Detener el video
    const videoElement = document.getElementById('video-recompensa');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
    
    // Mostrar resultados
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
}

function saltarVideo() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
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

// ============================================================================
// NUEVA FUNCIÓN PARA GANAR DINERO AL COMPLETAR PRÁCTICA DE PALABRAS FALLADAS
// ============================================================================

// Modificar la función mostrarResultados para dar recompensa especial en práctica
function mostrarResultadosPracticaEspecial(porcentaje) {
    const recompensa = 3; // 3 S/. por completar la práctica
    
    if (porcentaje >= 80) {
        sistemaEconomia.agregarDinero(recompensa, "Práctica de palabras falladas completada");
        mostrarNotificacion(`🎉 ¡Práctica completada! +${recompensa} S/.`);
    }
    
    mostrarPantallaResultados(porcentaje);
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff9800, #ff5722);
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

// Sobrescribir mostrarResultados para detectar si es práctica especial
const mostrarResultadosOriginal = mostrarResultados;
window.mostrarResultados = function() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // Verificar si es práctica especial (por el título)
    const tituloElement = document.getElementById('contador-preguntas');
    if (tituloElement && tituloElement.textContent.includes('PRÁCTICA ESPECIAL')) {
        mostrarResultadosPracticaEspecial(porcentaje);
    } else {
        mostrarResultadosOriginal();
    }
};

// CORRECCIÓN: Función para repasar falladas desde pantalla de resultados
function repetirFalladas() {
    // Llamar a la función de práctica de palabras falladas
    practicarPalabrasFalladas();
}

// ============================================================================
// INICIALIZACIÓN DEL SISTEMA - MEJORADA
// ============================================================================

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicación cargada - Inicializando sistemas...");
    
    // Inicializar sistemas en orden
    sistemaEconomia.inicializar();
    misionesDiarias.inicializar();
    eventosDiarios.inicializar();
    sistemaPalabrasFalladas.inicializar();
    
    // Inicializar sistema RPG de novia
    if (typeof rpgNovia !== 'undefined' && rpgNovia.inicializar) {
        rpgNovia.inicializar();
    }
    
    console.log("✅ Sistemas inicializados correctamente");
    
    // Asegurarse de que la pantalla de inicio esté activa
    setTimeout(() => {
        if (!document.querySelector('.pantalla.activa')) {
            cambiarPantalla('pantalla-inicio');
        }
    }, 100);
});

// Función para forzar la aparición del evento diario (para testing)
window.mostrarEventoDiarioForzado = function() {
    eventosDiarios.reiniciarEventoDiario();
    eventosDiarios.mostrarEventoDiario();
};

// Función para reiniciar el sistema de eventos (para testing)
window.reiniciarSistemaEventos = function() {
    localStorage.removeItem('eventosDiarios');
    eventosDiarios.reiniciarEventoDiario();
    location.reload();
};

// Función para agregar dinero (testing)
window.agregarDinero = function(cantidad) {
    sistemaEconomia.agregarDinero(cantidad, "Testing");
};

// Función para ver estado de sistemas (testing)
window.verEstadoSistemas = function() {
    console.log("=== ESTADO DE SISTEMAS ===");
    console.log("💰 Economía:", sistemaEconomia.saldoTotal);
    console.log("🎯 Misiones:", misionesDiarias.misiones);
    console.log("📅 Evento Diario:", eventosDiarios.estado);
    console.log("📝 Palabras Falladas:", sistemaPalabrasFalladas.obtenerEstadisticas());
    console.log("💕 RPG Novia:", rpgNovia.estado);
};

// Funciones de testing para palabras falladas
window.verPalabrasFalladas = function() {
    console.log("📝 Palabras falladas hoy:", sistemaPalabrasFalladas.palabrasFalladasHoy);
    console.log("🔥 Más falladas hoy:", sistemaPalabrasFalladas.obtenerMasFalladasDelDia());
};

window.agregarPalabraFalladaTest = function() {
    const palabrasTest = [
        { japones: '難しい', lectura: 'muzukashii', opciones: ['Difícil', 'Fácil', 'Simple', 'Complejo'], respuesta: 0 },
        { japones: '美しい', lectura: 'utsukushii', opciones: ['Hermoso', 'Feo', 'Normal', 'Extraño'], respuesta: 0 },
        { japones: '速い', lectura: 'hayai', opciones: ['Rápido', 'Lento', 'Medio', 'Variable'], respuesta: 0 }
    ];
    
    const palabra = palabrasTest[Math.floor(Math.random() * palabrasTest.length)];
    const respuestaIncorrecta = palabra.opciones[Math.floor(Math.random() * 3) + 1];
    
    sistemaPalabrasFalladas.registrarPalabraFallada(
        palabra.japones,
        respuestaIncorrecta,
        palabra.opciones[palabra.respuesta],
        palabra.lectura,
        palabra.opciones // Guardar opciones originales
    );
    
    console.log("✅ Palabra fallada de test agregada");
};

// Funciones de testing para RPG de novia
window.agregarExperienciaNovia = function(cantidad) {
    if (typeof rpgNovia !== 'undefined' && rpgNovia.agregarExperiencia) {
        rpgNovia.agregarExperiencia(cantidad, "Testing");
    }
};

window.verEstadoNovia = function() {
    console.log("💕 Estado Novia:");
    console.log("- Nivel:", rpgNovia.estado.nivel);
    console.log("- Experiencia:", rpgNovia.estado.experiencia);
    console.log("- Experiencia Total:", rpgNovia.estado.experienciaTotal);
    console.log("- Humor:", rpgNovia.estado.humorActual);
    console.log("- Momentos desbloqueados:", rpgNovia.estado.momentosDesbloqueados);
};
