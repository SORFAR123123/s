// ============================================================================
// GENERACIÓN DE PALABRAS Y VOCABULARIO
// ============================================================================

const PALABRAS_BASE = [
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

function generarPalabras(cantidad) {
    return Array.from({ length: cantidad }, (_, i) => ({...PALABRAS_BASE[i % PALABRAS_BASE.length]}));
}

function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    return (typeof vocabularioDatabase !== 'undefined' && 
            vocabularioDatabase[subcontenedorId]?.[numeroMazo]) || 
           generarPalabras(10);
}

function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    let numeroMazos = 0;
    
    // Detectar mazos disponibles
    for (let i = 1; i <= 20; i++) {
        const palabras = generarPalabrasEspecificas(subcontenedorId, i);
        if (!palabras?.length || palabras[0]?.japones === '言葉') break;
        numeroMazos = i;
    }
    
    numeroMazos = numeroMazos || 5; // Default 5 mazos
    
    // Generar mazos
    for (let i = 1; i <= numeroMazos; i++) {
        mazos[`mazo${i}`] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

// ============================================================================
// ESTRUCTURA PRINCIPAL
// ============================================================================

function crearSubcontenedores(cantidad) {
    const subs = {};
    for (let i = 1; i <= cantidad; i++) {
        const id = `sub${cantidad}_${i}`;
        subs[id] = {
            nombre: `Sub-Contenedor ${cantidad}.${i}`,
            mazos: generarMazosEspecificos(id)
        };
    }
    return subs;
}

const estructura = {
    contenedor1: { nombre: 'The Last Summer 1', subcontenedores: crearSubcontenedores(1) },
    contenedor2: { nombre: 'The Last Summer 2', subcontenedores: { 
        ...crearSubcontenedores(2), 
        sub2_4: { nombre: 'Sub-Contenedor 2.4', mazos: generarMazosEspecificos('sub2_4') } 
    }},
    contenedor3: { nombre: 'The Last Summer 3', subcontenedores: crearSubcontenedores(3) },
    ...Object.fromEntries(
        Array.from({ length: 7 }, (_, i) => [
            `contenedor${i + 4}`,
            { nombre: `Contenedor ${i + 4}`, subcontenedores: crearSubcontenedores(i + 4) }
        ])
    )
};

// ============================================================================
// ESTADO GLOBAL
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// ============================================================================
// FUNCIONES PRINCIPALES
// ============================================================================

function irAlMenu() {
    cambiarPantalla('pantalla-inicio');
    document.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
    console.log("🏠 Navegando al menú principal");
}

function cargarContenedor(idContenedor) {
    const contenedor = estructura[idContenedor];
    if (!contenedor) return;
    
    contenedorActual = idContenedor;
    document.getElementById('titulo-contenedor').textContent = contenedor.nombre;
    document.getElementById('nombre-contenedor').textContent = `Sub-Contenedores de ${contenedor.nombre}`;
    
    const contenedorSub = document.getElementById('contenedor-subcontenedores');
    contenedorSub.innerHTML = Object.entries(contenedor.subcontenedores).map(([key, sub]) => `
        <div class="subcontenedor-card" onclick="cargarSubcontenedor('${key}')">
            <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nombre}" class="subcontenedor-imagen">
            <div class="subcontenedor-texto">${sub.nombre}</div>
            <div class="subcontenedor-info">5 mazos disponibles</div>
        </div>
    `).join('');
    
    cambiarPantalla('pantalla-subcontenedores');
}

function cargarSubcontenedor(idSubcontenedor) {
    const subcontenedor = estructura[contenedorActual]?.subcontenedores[idSubcontenedor];
    if (!subcontenedor) return;
    
    subcontenedorActual = idSubcontenedor;
    document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nombre;
    document.getElementById('nombre-subcontenedor').textContent = `Mazos de ${subcontenedor.nombre}`;
    
    const contenedorMazos = document.getElementById('contenedor-mazos');
    contenedorMazos.innerHTML = Object.entries(subcontenedor.mazos).map(([key, mazo]) => `
        <div class="mazo-card" onclick="cargarMazo('${key}')">
            <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nombre}" class="mazo-imagen">
            <div class="mazo-texto">${mazo.nombre}</div>
            <div class="mazo-info">10 palabras</div>
        </div>
    `).join('');
    
    cambiarPantalla('pantalla-mazos');
    
    setTimeout(() => {
        window.agregarBotonesManga?.();
        console.log(window.agregarBotonesManga ? "✅ Botones manga añadidos" : "⚠️ mangaViewer no cargado");
    }, 300);
}

function cargarMazo(idMazo) {
    const mazo = estructura[contenedorActual]?.subcontenedores[subcontenedorActual]?.mazos[idMazo];
    if (!mazo) return;
    
    mazoActual = [...mazo.palabras];
    preguntaActual = respuestasCorrectas = respuestasIncorrectas = 0;
    
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

function mostrarPregunta() {
    if (preguntaActual >= mazoActual.length) return mostrarResultados();
    
    const pregunta = mazoActual[preguntaActual];
    
    document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
    document.getElementById('total-preguntas').textContent = mazoActual.length;
    document.getElementById('palabra-japones').textContent = pregunta.japones;
    document.getElementById('lectura').textContent = '';
    
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';
    resultado.className = 'resultado';
    document.getElementById('boton-siguiente').style.display = 'none';
    
    // Mezclar opciones
    const opcionesMezcladas = [...pregunta.opciones].sort(() => Math.random() - 0.5);
    
    const contenedorOpciones = document.getElementById('contenedor-opciones');
    contenedorOpciones.innerHTML = opcionesMezcladas.map(opcion => `
        <button class="opcion" onclick="verificarRespuesta('${opcion}', '${pregunta.opciones[pregunta.respuesta]}', '${pregunta.lectura}', ${JSON.stringify(pregunta.opciones).replace(/"/g, '&quot;')})">${opcion}</button>
    `).join('');
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    const palabraActual = document.getElementById('palabra-japones').textContent;
    
    opcionesDOM.forEach(opcion => {
        opcion.disabled = true;
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    document.getElementById('lectura').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        setTimeout(siguientePregunta, 1000);
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        sistemaPalabrasFalladas?.registrarPalabraFallada(palabraActual, respuestaSeleccionada, respuestaCorrecta, lectura, opciones);
        document.getElementById('boton-siguiente').style.display = 'block';
    }
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    console.log("📊 Resultados:", { porcentaje, eventoActivo: !!eventosDiarios?.estado?.eventoActual });
    
    // Registrar en sistema Nakano
    if (typeof sistemaNakano !== 'undefined') {
        sistemaNakano.registrarMazoCompletado(porcentaje);
        sistemaNakano.economia.saldo = sistemaEconomia?.saldoTotal || 0;
    }
    
    if (porcentaje === 100) {
        misionesDiarias?.registrarMazoCompletado();
        
        // Verificar evento diario
        if (eventosDiarios?.estado?.eventoActual && 
            eventosDiarios.estado.aceptado && 
            !eventosDiarios.estado.completado) {
            
            const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
            eventosDiarios.registrarMazoCompletado();
            
            if (eventoEstabaIncompleto && eventosDiarios.estado.completado) {
                console.log("🎁 Evento diario completado");
                return;
            }
        }
        
        sistemaEconomia?.agregarDinero(1, "Mazo 100%");
        mostrarVideoRecompensa();
        
    } else if (porcentaje >= 80) {
        misionesDiarias?.registrarMazoCompletado();
        
        if (eventosDiarios?.estado?.eventoActual && 
            eventosDiarios.estado.aceptado && 
            !eventosDiarios.estado.completado) {
            eventosDiarios.registrarMazoCompletado();
        }
        
        sistemaEconomia?.agregarDinero(0.5, "Mazo 80%");
        mostrarPantallaResultados(porcentaje);
    } else {
        mostrarPantallaResultados(porcentaje);
    }
}

function mostrarPantallaResultados(porcentaje) {
    cambiarPantalla('pantalla-resultados');
    
    const mensaje = porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
                    porcentaje >= 60 ? 'Buen trabajo, puedes mejorar 👍' : 
                    'Sigue practicando 💪';
    
    document.getElementById('resultado-final').innerHTML = `
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
            <div class="resultado-mensaje">${mensaje}</div>
        </div>
    `;
}

function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    document.getElementById('recompensa-mazo').textContent = '+1 S/. 💰';
    
    cambiarPantalla('pantalla-video-recompensa');
    
    const videoElement = document.getElementById('video-recompensa');
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.onended = null;
    videoElement.play().catch(e => console.log("Autoplay bloqueado"));
}

function cerrarVideoRecompensaMazo() {
    const videoElement = document.getElementById('video-recompensa');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
    mostrarPantallaResultados(Math.round((respuestasCorrectas / mazoActual.length) * 100));
}

function saltarVideo() {
    mostrarPantallaResultados(Math.round((respuestasCorrectas / mazoActual.length) * 100));
}

function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById(idPantalla).classList.add('activa');
}

function volverAlInicio() { cambiarPantalla('pantalla-inicio'); }
function volverASubcontenedores() { cambiarPantalla('pantalla-subcontenedores'); }
function volverAMazos() { cambiarPantalla('pantalla-mazos'); }

function repetirQuiz() {
    preguntaActual = respuestasCorrectas = respuestasIncorrectas = 0;
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}

function repetirFalladas() { practicarPalabrasFalladas?.(); }

// ============================================================================
// SISTEMAS ADICIONALES
// ============================================================================

function iniciarSistemaNakano() {
    cambiarPantalla('pantalla-rpg-nakano');
    sistemaNakano?.actualizarInterfazNakano?.() || console.error("⚠️ Sistema Nakano no cargado");
}

function iniciarCalendarioFabrizio() {
    cambiarPantalla('pantalla-calendario-meses');
    calendarioFabrizio?.actualizarInterfazCalendario?.() || console.error("⚠️ Calendario no cargado");
}

function iniciarComienzoDiciembre2025() {
    cambiarPantalla('pantalla-calendario-meses');
    
    const titulo = document.querySelector('#pantalla-calendario-meses .contador');
    if (titulo) titulo.textContent = '🎄 Comienzo 2025 - Diciembre';
    
    if (comienzoDiciembre2025?.mostrarDias) {
        comienzoDiciembre2025.mostrarDias();
    } else {
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
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Aplicación cargada");
    
    sistemaEconomia?.inicializar();
    misionesDiarias?.inicializar();
    eventosDiarios?.inicializar();
    sistemaPalabrasFalladas?.inicializar();
    sistemaNakano?.inicializar?.();
    
    console.log("✅ Sistemas inicializados");
    
    setTimeout(() => {
        if (!document.querySelector('.pantalla.activa')) cambiarPantalla('pantalla-inicio');
    }, 100);
});

// ============================================================================
// TESTING
// ============================================================================

Object.assign(window, {
    mostrarEventoDiarioForzado: () => { eventosDiarios?.reiniciarEventoDiario(); eventosDiarios?.mostrarEventoDiario(); },
    reiniciarSistemaEventos: () => { localStorage.removeItem('eventosDiarios'); eventosDiarios?.reiniciarEventoDiario(); location.reload(); },
    agregarDinero: (cantidad) => sistemaEconomia?.agregarDinero(cantidad, "Testing"),
    verEstadoSistemas: () => {
        console.log("=== ESTADO ===");
        console.log("💰 Economía:", sistemaEconomia?.saldoTotal);
        console.log("🎯 Misiones:", misionesDiarias?.misiones);
        console.log("📅 Evento:", eventosDiarios?.estado);
        console.log("📝 Falladas:", sistemaPalabrasFalladas?.obtenerEstadisticas());
        if (sistemaNakano) console.log("💕 Nakano:", sistemaNakano.noviaSeleccionada, sistemaNakano.economia.saldo);
    },
    verPalabrasFalladas: () => console.log("📝", sistemaPalabrasFalladas?.palabrasFalladasHoy),
    agregarExperienciaNakano: (cantidad) => sistemaNakano?.agregarExperiencia?.(cantidad, "Testing"),
    verEstadoNakano: () => {
        const novia = sistemaNakano?.obtenerNoviaActual();
        if (novia) console.log("💕", novia.nombre, "Nivel", novia.nivel, "XP", novia.experiencia);
    },
    seleccionarQuintilliza: (id) => sistemaNakano?.seleccionarNovia?.(id),
    regalarEspecialNakano: (tipo) => sistemaNakano?.regalarItemEspecial?.(tipo),
    comprarDecoracionNakano: (id) => sistemaNakano?.comprarDecoracion?.(id),
    resetearSistemaNakano: () => {
        if (confirm("¿Resetear TODO Nakano?")) {
            localStorage.removeItem('sistemaNakano');
            location.reload();
        }
    },
    agregarCondones: (cantidad) => {
        if (sistemaNakano) {
            sistemaNakano.economia.inventario.condones += cantidad;
            sistemaNakano.guardarDatos();
            sistemaNakano.actualizarInterfazNakano();
            console.log(`✅ +${cantidad} condones`);
            return true;
        }
        return false;
    },
    verTodasQuintillizas: () => {
        if (sistemaNakano) {
            Object.values(sistemaNakano.quintillizas).forEach(q => 
                console.log(`- ${q.nombre}: Nivel ${q.nivel}, XP ${q.experiencia}`)
            );
        }
    },
    simularMazoCompletado: (porcentaje) => {
        if (sistemaNakano?.registrarMazoCompletado) {
            sistemaNakano.registrarMazoCompletado(porcentaje);
            console.log(`📊 Mazo ${porcentaje}% simulado`);
            return true;
        }
        return false;
    }
});
