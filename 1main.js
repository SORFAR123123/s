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
// FUNCIÓN PARA OBTENER IMAGEN DE MAZO
// ============================================================================

function obtenerImagenMazo(subcontenedorId, mazoId) {
    // Si existe el sistema de imágenes de mazos
    if (typeof imagenesMazos !== 'undefined' && 
        imagenesMazos[subcontenedorId] && 
        imagenesMazos[subcontenedorId][mazoId]) {
        return imagenesMazos[subcontenedorId][mazoId];
    }
    
    // Si no, usar imagen por defecto según config.js
    if (typeof configImagenes !== 'undefined' && 
        configImagenes.mazos && 
        configImagenes.mazos[mazoId]) {
        return configImagenes.mazos[mazoId];
    }
    
    // Último recurso: imagen por defecto
    return 'imagenes/mazos/default.jpg';
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
        nombre: 'Toono esuke',
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
            },
            'sub2_4': { 
                nombre: 'Hermana sueca buenas curvas potona', 
                mazos: generarMazosEspecificos('sub2_4') 
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
// FUNCIONES DE NOTIFICACIÓN
// ============================================================================

function mostrarNotificacion(mensaje) {
    // Crear notificación temporal
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff5722, #ff9800);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Añade la animación CSS si no existe
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

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
    // Guardar para poder volver desde el manga
    window.subcontenedorActual = idSubcontenedor;
    
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
                <img src="${obtenerImagenMazo(subcontenedorActual, key)}" alt="${mazo.nombre}" class="mazo-imagen">
                <div class="mazo-texto">${mazo.nombre}</div>
                <div class="mazo-info">${mazo.palabras ? mazo.palabras.length : 10} palabras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        // AGREGAR BOTÓN DE MANGA SI EXISTE
        const botonMangaHTML = agregarBotonManga(idSubcontenedor);
        if (botonMangaHTML) {
            contenedorMazos.innerHTML += botonMangaHTML;
        }
        
        cambiarPantalla('pantalla-mazos');
    }
}

function cargarMazo(idMazo) {
    // DEBUG: Verificar variables
    console.log("🔍 DEBUG cargarMazo llamado con:", {
        contenedorActual: contenedorActual,
        subcontenedorActual: subcontenedorActual,
        mazoId: idMazo
    });
    
    // Verificar que todo esté correctamente definido
    if (!contenedorActual || !subcontenedorActual) {
        console.error("❌ No hay contenedor o subcontenedor seleccionado");
        mostrarNotificacion("Error: Primero selecciona un subcontenedor");
        return;
    }
    
    const contenedor = estructura[contenedorActual];
    if (!contenedor) {
        console.error(`❌ Contenedor ${contenedorActual} no encontrado`);
        mostrarNotificacion("Error: Contenedor no encontrado");
        return;
    }
    
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    if (!subcontenedor) {
        console.error(`❌ Subcontenedor ${subcontenedorActual} no encontrado`);
        mostrarNotificacion("Error: Subcontenedor no encontrado");
        return;
    }
    
    const mazo = subcontenedor.mazos[idMazo];
    if (!mazo) {
        console.error(`❌ Mazo ${idMazo} no encontrado en ${subcontenedorActual}`);
        mostrarNotificacion(`Error: Mazo ${idMazo} no disponible`);
        return;
    }
    
    // DEBUG: Verificar que el mazo tiene palabras
    console.log("📦 Cargando mazo:", {
        contenedor: contenedorActual,
        subcontenedor: subcontenedorActual,
        mazo: idMazo,
        palabras: mazo.palabras ? mazo.palabras.length : 0,
        nombre: mazo.nombre
    });
    
    if (!mazo.palabras || mazo.palabras.length === 0) {
        console.error("❌ El mazo no tiene palabras");
        mostrarNotificacion("Error: Este mazo no tiene palabras configuradas");
        return;
    }
    
    // Cargar el mazo
    mazoActual = [...mazo.palabras];
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Actualizar título del quiz
    const tituloElement = document.getElementById('contador-preguntas');
    if (tituloElement) {
        tituloElement.textContent = `${subcontenedor.nombre} - ${mazo.nombre}`;
    }
    
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
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
    
    // MOSTRAR LA PRONUNCIACIÓN SIEMPRE
    document.getElementById('lectura').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        // Navegación automática solo para respuestas correctas
        setTimeout(() => {
            siguientePregunta();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        // REGISTRAR PALABRA FALLADA CON OPCIONES ORIGINALES
        if (typeof sistemaPalabrasFalladas !== 'undefined' && sistemaPalabrasFalladas.registrarPalabraFallada) {
            sistemaPalabrasFalladas.registrarPalabraFallada(
                palabraActual,
                respuestaSeleccionada,
                respuestaCorrecta,
                lectura,
                opciones
            );
        }
        
        // Mostrar botón "Continuar" solo para respuestas incorrectas
        document.getElementById('boton-siguiente').style.display = 'block';
    }
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

// FUNCIÓN MEJORADA - SOLO EVENTO DIARIO CUANDO HAY DOBLE COMPLETACIÓN - CORREGIDA
function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    console.log("📊 Mostrando resultados:", {
        porcentaje: porcentaje,
        tieneEventoActivo: typeof eventosDiarios !== 'undefined' && !!eventosDiarios.estado?.eventoActual,
        eventoCompletado: typeof eventosDiarios !== 'undefined' && eventosDiarios.estado?.completado,
        eventoAceptado: typeof eventosDiarios !== 'undefined' && eventosDiarios.estado?.aceptado
    });
    
    // Registrar experiencia en SISTEMA NAKANO (actualizado)
    if (typeof sistemaNakano !== 'undefined') {
        sistemaNakano.registrarMazoCompletado(porcentaje);
        // Sincronizar dinero primero
        if (sistemaNakano.economia && sistemaEconomia) {
            sistemaNakano.economia.saldo = sistemaEconomia.saldoTotal;
        }
    }
    
    if (porcentaje === 100) {
        // Registrar mazo completado para misiones diarias
        if (typeof misionesDiarias !== 'undefined' && misionesDiarias.registrarMazoCompletado) {
            misionesDiarias.registrarMazoCompletado();
        }
        
        // IMPORTANTE: Solo registrar para evento diario si el evento está ACTIVO y ACEPTADO
        if (typeof eventosDiarios !== 'undefined' && 
            eventosDiarios.estado?.eventoActual && 
            eventosDiarios.estado?.aceptado && 
            !eventosDiarios.estado?.completado && 
            !eventosDiarios.estado?.fallado) {
            
            const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
            eventosDiarios.registrarMazoCompletado();
            
            // VERIFICAR: ¿Se completó el evento diario JUSTO AHORA?
            const eventoSeCompletoJustoAhora = eventoEstabaIncompleto && eventosDiarios.estado.completado;
            
            console.log("🎯 Estado evento después de registrar:", {
                eventoEstabaIncompleto: eventoEstabaIncompleto,
                eventoSeCompletoJustoAhora: eventoSeCompletoJustoAhora,
                eventoCompletado: eventosDiarios.estado.completado
            });
            
            if (eventoSeCompletoJustoAhora) {
                // SOLUCIÓN: Si se completó el evento diario, SOLO mostrar el evento
                console.log("🎁 Evento diario completado - Mostrando SOLO evento");
                return; // ¡IMPORTANTE! Salir de la función aquí
            }
        }
        
        // Si NO se completó evento diario, mostrar video normal del mazo
        console.log("🎬 Mostrando video normal del mazo al 100%");
        if (typeof sistemaEconomia !== 'undefined') {
            sistemaEconomia.agregarDinero(1, "Mazo completado al 100%");
        }
        mostrarVideoRecompensa();
        
    } else if (porcentaje >= 80) {
        // Registrar mazo completado para misiones diarias (80% cuenta como completado)
        if (typeof misionesDiarias !== 'undefined' && misionesDiarias.registrarMazoCompletado) {
            misionesDiarias.registrarMazoCompletado();
        }
        
        // Solo registrar evento si está activo y aceptado
        if (typeof eventosDiarios !== 'undefined' && 
            eventosDiarios.estado?.eventoActual && 
            eventosDiarios.estado?.aceptado && 
            !eventosDiarios.estado?.completado && 
            !eventosDiarios.estado?.fallado) {
            eventosDiarios.registrarMazoCompletado();
        }
        
        if (typeof sistemaEconomia !== 'undefined') {
            sistemaEconomia.agregarDinero(0.5, "Mazo completado al 80%");
        }
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
    
    console.log("🎬 Mostrando video de recompensa normal del mazo:", video?.titulo);
    
    // Actualizar la pantalla de video con la información del video seleccionado
    document.getElementById('titulo-video').textContent = video?.titulo || 'Recompensa';
    document.getElementById('video-recompensa').src = video?.url || '';
    document.getElementById('duracion-video').textContent = video?.duracion ? `Duración: ${video.duracion}` : '';
    document.getElementById('recompensa-mazo').textContent = '+1 S/. 💰';
    
    cambiarPantalla('pantalla-video-recompensa');
    
    // Reproducir el video automáticamente
    const videoElement = document.getElementById('video-recompensa');
    
    // Configurar para que se repita en bucle
    videoElement.loop = true;
    
    // MUTEAR EL VIDEO PARA QUE NO INTERRUMPA TU ASMR/TWITCH
    videoElement.muted = true;
    
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
    
    if (porcentaje >= 80 && typeof sistemaEconomia !== 'undefined') {
        sistemaEconomia.agregarDinero(recompensa, "Práctica de palabras falladas completada");
        mostrarNotificacion(`🎉 ¡Práctica completada! +${recompensa} S/.`);
    }
    
    mostrarPantallaResultados(porcentaje);
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
    if (typeof sistemaPalabrasFalladas !== 'undefined' && sistemaPalabrasFalladas.practicarPalabrasFalladas) {
        sistemaPalabrasFalladas.practicarPalabrasFalladas();
    }
}

// ============================================================================
// FUNCIÓN PARA INICIAR SISTEMA NAKANO (REEMPLAZA LA ANTERIOR)
// ============================================================================

function iniciarSistemaNakano() {
    cambiarPantalla('pantalla-rpg-nakano');
    
    // Inicializar sistema Nakano si no está inicializado
    if (typeof sistemaNakano !== 'undefined') {
        sistemaNakano.actualizarInterfazNakano();
    } else {
        console.error("⚠️ Sistema Nakano no cargado");
        mostrarNotificacion("Error: Sistema Nakano no disponible");
    }
}

// ============================================================================
// FUNCIÓN PARA INICIAR CALENDARIO FABRIZIO
// ============================================================================

function iniciarCalendarioFabrizio() {
    cambiarPantalla('pantalla-calendario-meses');
    
    if (typeof calendarioFabrizio !== 'undefined') {
        calendarioFabrizio.actualizarInterfazCalendario();
    } else {
        console.error("⚠️ Calendario Fabrizio no cargado");
        mostrarNotificacion("Error: Calendario no disponible");
    }
}

// ============================================================================
// FUNCIÓN PARA INICIAR COMIENZO DICIEMBRE 2025
// ============================================================================

function iniciarComienzoDiciembre2025() {
    cambiarPantalla('pantalla-calendario-meses');
    
    // Cambiar el título
    const titulo = document.querySelector('#pantalla-calendario-meses .contador');
    if (titulo) {
        titulo.textContent = '🎄 Comienzo 2025 - Diciembre';
    }
    
    // Mostrar los días (si la función existe)
    if (typeof comienzoDiciembre2025 !== 'undefined' && comienzoDiciembre2025.mostrarDias) {
        comienzoDiciembre2025.mostrarDias();
    } else {
        // Fallback si algo falla
        document.getElementById('contenedor-meses').innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2 style="color: #ffd700;">🎄 Comienzo 2025 - Diciembre</h2>
                <p style="color: #cccccc;">Del 8 al 31 de diciembre</p>
                <p style="color: #ff6b9d; margin-top: 20px; font-weight: bold;">¡5 fotos por cada día!</p>
                <p style="color: #00ff88; margin-top: 30px;">Total: 24 días × 5 fotos = 120 fotos</p>
            </div>
        `;
    }
}

// ============================================================================
// INICIALIZACIÓN DEL SISTEMA - ACTUALIZADA PARA NAKANO
// ============================================================================

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicación cargada - Inicializando sistemas...");
    
    // Inicializar sistemas en orden
    if (typeof sistemaEconomia !== 'undefined' && sistemaEconomia.inicializar) {
        sistemaEconomia.inicializar();
    }
    
    if (typeof misionesDiarias !== 'undefined' && misionesDiarias.inicializar) {
        misionesDiarias.inicializar();
    }
    
    if (typeof eventosDiarios !== 'undefined' && eventosDiarios.inicializar) {
        eventosDiarios.inicializar();
    }
    
    if (typeof sistemaPalabrasFalladas !== 'undefined' && sistemaPalabrasFalladas.inicializar) {
        sistemaPalabrasFalladas.inicializar();
    }
    
    // Inicializar sistema NAKANO
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.inicializar) {
        sistemaNakano.inicializar();
    }
    
    // Inicializar manga
    if (typeof sistemaManga !== 'undefined' && sistemaManga.inicializar) {
        sistemaManga.inicializar();
    }
    
    console.log("✅ Sistemas inicializados correctamente");
    
    // Asegurarse de que la pantalla de inicio esté activa
    setTimeout(() => {
        if (!document.querySelector('.pantalla.activa')) {
            cambiarPantalla('pantalla-inicio');
        }
    }, 100);
});

// ============================================================================
// FUNCIONES DE TESTING (ACTUALIZADAS PARA NAKANO)
// ============================================================================

// Función para forzar la aparición del evento diario (para testing)
window.mostrarEventoDiarioForzado = function() {
    if (typeof eventosDiarios !== 'undefined') {
        eventosDiarios.reiniciarEventoDiario();
        eventosDiarios.mostrarEventoDiario();
    }
};

// Función para reiniciar el sistema de eventos (para testing)
window.reiniciarSistemaEventos = function() {
    localStorage.removeItem('eventosDiarios');
    if (typeof eventosDiarios !== 'undefined') {
        eventosDiarios.reiniciarEventoDiario();
    }
    location.reload();
};

// Función para agregar dinero (testing)
window.agregarDinero = function(cantidad) {
    if (typeof sistemaEconomia !== 'undefined') {
        sistemaEconomia.agregarDinero(cantidad, "Testing");
    }
};

// Función para ver estado de sistemas (testing) - ACTUALIZADA
window.verEstadoSistemas = function() {
    console.log("=== ESTADO DE SISTEMAS ===");
    console.log("💰 Economía:", typeof sistemaEconomia !== 'undefined' ? sistemaEconomia.saldoTotal : "No cargado");
    console.log("🎯 Misiones:", typeof misionesDiarias !== 'undefined' ? misionesDiarias.misiones : "No cargado");
    console.log("📅 Evento Diario:", typeof eventosDiarios !== 'undefined' ? eventosDiarios.estado : "No cargado");
    console.log("📝 Palabras Falladas:", typeof sistemaPalabrasFalladas !== 'undefined' ? sistemaPalabrasFalladas.obtenerEstadisticas() : "No cargado");
    
    // Estado Nakano
    if (typeof sistemaNakano !== 'undefined') {
        console.log("💕 Sistema Nakano:");
        console.log("- Novia seleccionada:", sistemaNakano.noviaSeleccionada);
        console.log("- Saldo Nakano:", sistemaNakano.economia?.saldo);
        console.log("- Quintillizas:", Object.keys(sistemaNakano.quintillizas).length);
    } else {
        console.log("❌ Sistema Nakano no cargado");
    }
    
    // Estado Manga
    if (typeof sistemaManga !== 'undefined') {
        const stats = sistemaManga.obtenerEstadisticas();
        console.log("📚 Sistema Manga:");
        console.log("- Mangas completados:", stats.completados + "/" + stats.totalMangas);
    }
};

// Funciones de testing para palabras falladas
window.verPalabrasFalladas = function() {
    if (typeof sistemaPalabrasFalladas !== 'undefined') {
        console.log("📝 Palabras falladas hoy:", sistemaPalabrasFalladas.palabrasFalladasHoy);
        console.log("🔥 Más falladas hoy:", sistemaPalabrasFalladas.obtenerMasFalladasDelDia());
    }
};

window.agregarPalabraFalladaTest = function() {
    if (typeof sistemaPalabrasFalladas !== 'undefined') {
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
            palabra.opciones
        );
        
        console.log("✅ Palabra fallada de test agregada");
    }
};

// Funciones de testing para SISTEMA NAKANO
window.agregarExperienciaNakano = function(cantidad) {
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.agregarExperiencia) {
        sistemaNakano.agregarExperiencia(cantidad, "Testing");
    }
};

window.verEstadoNakano = function() {
    if (typeof sistemaNakano !== 'undefined') {
        const novia = sistemaNakano.obtenerNoviaActual();
        console.log("💕 Estado Nakano:");
        console.log("- Novia actual:", novia?.nombre || "Ninguna");
        console.log("- Nivel:", novia?.nivel || "N/A");
        console.log("- Experiencia:", novia?.experiencia || "N/A");
        console.log("- Experiencia Total:", novia?.experienciaTotal || "N/A");
        console.log("- Humor:", novia?.humorActual ? novia.humorActual.nombre : "N/A");
        console.log("- Quintillizas totales:", Object.keys(sistemaNakano.quintillizas).length);
        console.log("- Items decoración:", sistemaNakano.habitacion?.itemsComprados?.length || 0);
    } else {
        console.log("❌ Sistema Nakano no disponible");
    }
};

// Función para seleccionar quintilliza desde consola
window.seleccionarQuintilliza = function(id) {
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.seleccionarNovia) {
        return sistemaNakano.seleccionarNovia(id);
    }
    return false;
};

// Función para regalar item especial desde consola
window.regalarEspecialNakano = function(tipo) {
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.regalarItemEspecial) {
        return sistemaNakano.regalarItemEspecial(tipo);
    }
    return false;
};

// Función para comprar decoración desde consola
window.comprarDecoracionNakano = function(id) {
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.comprarDecoracion) {
        return sistemaNakano.comprarDecoracion(id);
    }
    return false;
};

// Función para resetear sistema Nakano
window.resetearSistemaNakano = function() {
    if (confirm("¿Estás seguro de resetear TODO el sistema Nakano?\nSe perderán niveles, experiencia y decoraciones.")) {
        localStorage.removeItem('sistemaNakano');
        location.reload();
    }
};

// Función para añadir condones (testing)
window.agregarCondones = function(cantidad) {
    if (typeof sistemaNakano !== 'undefined') {
        if (!sistemaNakano.economia.inventario) {
            sistemaNakano.economia.inventario = { condones: 0 };
        }
        sistemaNakano.economia.inventario.condones += cantidad;
        sistemaNakano.guardarDatos();
        sistemaNakano.actualizarInterfazNakano();
        console.log(`✅ ${cantidad} condones añadidos`);
        return true;
    }
    return false;
};

// Función para ver todas las quintillizas
window.verTodasQuintillizas = function() {
    if (typeof sistemaNakano !== 'undefined') {
        console.log("👥 Todas las Quintillizas:");
        Object.values(sistemaNakano.quintillizas).forEach(quintilliza => {
            console.log(`- ${quintilliza.nombre}: Nivel ${quintilliza.nivel}, XP ${quintilliza.experiencia}`);
        });
    }
};

// Función para simular mazo completado (testing)
window.simularMazoCompletado = function(porcentaje) {
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.registrarMazoCompletado) {
        sistemaNakano.registrarMazoCompletado(porcentaje);
        console.log(`📊 Mazo simulado al ${porcentaje}% para ${sistemaNakano.obtenerNoviaActual()?.nombre || "ninguna novia"}`);
        return true;
    }
    return false;
};

// Función para debuggear carga de mazos
window.debugMazoClick = function(subcontenedorId, mazoId) {
    console.log("🔍 DEBUG Mazo Click:");
    console.log("- Subcontenedor actual:", subcontenedorActual);
    console.log("- Contenedor actual:", contenedorActual);
    console.log("- Mazo a cargar:", mazoId);
    
    const contenedor = estructura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    const mazo = subcontenedor.mazos[mazoId];
    
    console.log("- Mazo encontrado:", !!mazo);
    if (mazo) {
        console.log("- Nombre del mazo:", mazo.nombre);
        console.log("- Número de palabras:", mazo.palabras ? mazo.palabras.length : 0);
        console.log("- Primera palabra:", mazo.palabras ? mazo.palabras[0] : "N/A");
    }
    
    return mazo;
};

// Función para testear sistema completo
window.testearSistemaCompleto = function() {
    console.log("🧪 TESTEANDO SISTEMA COMPLETO");
    console.log("=============================");
    
    // 1. Test estructura
    console.log("1. 📦 Estructura:", Object.keys(estructura).length, "contenedores");
    
    // 2. Test vocabulario
    console.log("2. 📚 Vocabulario:", typeof vocabularioDatabase !== 'undefined' ? "Cargado" : "NO cargado");
    
    // 3. Test imágenes mazos
    console.log("3. 🖼️ Imágenes mazos:", typeof imagenesMazos !== 'undefined' ? "Cargado" : "NO cargado");
    
    // 4. Test funciones principales
    console.log("4. 🔧 Funciones principales:");
    console.log("   - cargarMazo:", typeof cargarMazo);
    console.log("   - obtenerImagenMazo:", typeof obtenerImagenMazo);
    console.log("   - mostrarPregunta:", typeof mostrarPregunta);
    
    // 5. Probar un mazo específico
    console.log("\n5. 🧪 Probando mazo sub1_1/mazo1:");
    const mazoTest = debugMazoClick('sub1_1', 'mazo1');
    
    if (mazoTest && mazoTest.palabras) {
        console.log("   ✅ Mazo tiene", mazoTest.palabras.length, "palabras");
        console.log("   ✅ Primera palabra:", mazoTest.palabras[0].japones);
    } else {
        console.log("   ❌ Mazo no tiene palabras o no existe");
    }
};

// ============================================================================
// EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

window.obtenerImagenMazo = obtenerImagenMazo;
window.mostrarNotificacion = mostrarNotificacion;

console.log("✅ 1main.js cargado correctamente");
console.log("📁 Estructura cargada:", Object.keys(estructura).length, "contenedores");

// Auto-test al cargar
setTimeout(() => {
    console.log("🔧 Sistema principal listo");
    console.log("📊 Variables globales:");
    console.log("- contenedorActual:", contenedorActual);
    console.log("- subcontenedorActual:", subcontenedorActual);
    console.log("- obtenerImagenMazo definida:", typeof obtenerImagenMazo !== 'undefined');
}, 500);
