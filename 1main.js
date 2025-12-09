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
// ============================================================================
// ESTRUCTURA PRINCIPAL - MODIFICADA
// ============================================================================

// Función para crear siempre 5 subcontenedores por contenedor
function crearSubcontenedores(numContenedor) {
    const subs = {};
    for (let i = 1; i <= 5; i++) { // SIEMPRE 5 subcontenedores
        const id = `sub${numContenedor}_${i}`;
        subs[id] = {
            nombre: `Sub-Contenedor ${numContenedor}.${i}`,
            mazos: generarMazosEspecificos(id)
        };
    }
    return subs;
}

const estructura = {
    // Contenedor 1: The Last Summer 1 - 5 subcontenedores
    contenedor1: { 
        nombre: 'The Last Summer 1', 
        subcontenedores: crearSubcontenedores(1)
    },
    
    // Contenedor 2: The Last Summer 2 - 5 subcontenedores + el especial
    contenedor2: { 
        nombre: 'The Last Summer 2', 
        subcontenedores: {
            ...crearSubcontenedores(2),
            sub2_6: {  // Puedes mantener sub2_4 como sub2_6 ahora
                nombre: 'Sub-Contenedor 2.6 (Especial)', 
                mazos: generarMazosEspecificos('sub2_4') 
            } 
        }
    },
    
    // Contenedor 3: The Last Summer 3 - 5 subcontenedores
    contenedor3: { 
        nombre: 'The Last Summer 3', 
        subcontenedores: crearSubcontenedores(3)
    },
    
    // Contenedor 4: 5 subcontenedores
    contenedor4: { 
        nombre: 'Contenedor 4', 
        subcontenedores: crearSubcontenedores(4)
    },
    
    // Contenedor 5: 5 subcontenedores
    contenedor5: { 
        nombre: 'Contenedor 5', 
        subcontenedores: crearSubcontenedores(5)
    },
    
    // Contenedor 6: 5 subcontenedores
    contenedor6: { 
        nombre: 'Contenedor 6', 
        subcontenedores: crearSubcontenedores(6)
    },
    
    // Contenedor 7: 5 subcontenedores
    contenedor7: { 
        nombre: 'Contenedor 7', 
        subcontenedores: crearSubcontenedores(7)
    },
    
    // Contenedor 8: 5 subcontenedores
    contenedor8: { 
        nombre: 'Contenedor 8', 
        subcontenedores: crearSubcontenedores(8)
    },
    
    // Contenedor 9: 5 subcontenedores
    contenedor9: { 
        nombre: 'Contenedor 9', 
        subcontenedores: crearSubcontenedores(9)
    },
    
    // Contenedor 10: 5 subcontenedores
    contenedor10: { 
        nombre: 'Contenedor 10', 
        subcontenedores: crearSubcontenedores(10)
    }
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
    
    // Agregar botones manga y videos después de cargar
    setTimeout(() => {
        window.agregarBotonesManga?.();
        agregarBotonesVideosATarjetas();
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
// SISTEMA DE VIDEOS H
// ============================================================================

function iniciarVisorVideosH() {
    cambiarPantalla('pantalla-visor-videos-h');
    console.log("🎬 Navegando al visor de videos H");
}

function cargarVideosColeccion(coleccionId, subcoleccionId) {
    if (!videosViewer) {
        console.error("❌ Sistema de videos no disponible");
        alert("El sistema de videos no está disponible. Asegúrate de que 1videos-viewer.js está cargado.");
        return;
    }
    
    console.log(`🎬 Cargando videos: ${coleccionId} > ${subcoleccionId}`);
    
    // Ocultar todas las pantallas primero
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    
    // Mostrar el visor de videos
    const exito = videosViewer.mostrar(coleccionId, subcoleccionId);
    
    if (!exito) {
        // Si no hay videos, volver a la pantalla principal
        cambiarPantalla('pantalla-visor-videos-h');
    }
}

function agregarBotonesVideosATarjetas() {
    // Esta función agrega botones de video a las tarjetas de subcontenedores
    const tarjetas = document.querySelectorAll('.subcontenedor-card');
    
    tarjetas.forEach(tarjeta => {
        const subcontenedorId = tarjeta.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (!subcontenedorId) return;
        
        // Verificar si hay videos disponibles para este subcontenedor
        const tieneVideos = verificarSiTieneVideos(subcontenedorId);
        
        if (tieneVideos) {
            const botonVideo = document.createElement('button');
            botonVideo.className = 'boton-video-tarjeta';
            botonVideo.innerHTML = '🎬 Videos';
            botonVideo.style.cssText = `
                position: absolute; top: 10px; right: 10px;
                background: linear-gradient(135deg, #ff6b9d, #ff4081);
                color: white; border: none; border-radius: 8px;
                padding: 5px 10px; font-size: 0.8rem; cursor: pointer;
                z-index: 10; transition: all 0.3s ease;
            `;
            
            botonVideo.onclick = (e) => {
                e.stopPropagation();
                abrirVideosSubcontenedor(subcontenedorId);
            };
            
            tarjeta.style.position = 'relative';
            tarjeta.appendChild(botonVideo);
        }
    });
}

function verificarSiTieneVideos(subcontenedorId) {
    // Esta función verifica si un subcontenedor tiene videos asociados
    // Puedes personalizar esta lógica según tu estructura de datos
    if (!videosViewer) return false;
    
    // Mapeo de subcontenedores a colecciones/subcolecciones
    const mapeoVideos = {
        'sub1_1': ['coleccion1', 'subcoleccion1'],
        'sub2_1': ['coleccion1', 'subcoleccion2'],
        'sub2_4': ['coleccion1', 'subcoleccion3'],
        'sub3_1': ['coleccion2', 'subcoleccion1'],
        // Agrega más mapeos según sea necesario
    };
    
    return mapeoVideos[subcontenedorId] !== undefined;
}

function abrirVideosSubcontenedor(subcontenedorId) {
    // Mapear subcontenedor a colección/subcolección
    const mapeoVideos = {
        'sub1_1': ['coleccion1', 'subcoleccion1'],
        'sub2_1': ['coleccion1', 'subcoleccion2'],
        'sub2_4': ['coleccion1', 'subcoleccion3'],
        'sub3_1': ['coleccion2', 'subcoleccion1'],
    };
    
    const [coleccion, subcoleccion] = mapeoVideos[subcontenedorId] || [];
    
    if (coleccion && subcoleccion) {
        cargarVideosColeccion(coleccion, subcoleccion);
    } else {
        console.log(`⚠️ No hay videos mapeados para ${subcontenedorId}`);
        alert('No hay videos disponibles para este subcontenedor.');
    }
}

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

function obtenerUrlImagen(tipo, id) {
    // Función para obtener URLs de imágenes
    const rutas = {
        'subcontenedores': {
            'sub1_1': 'https://via.placeholder.com/150/ff6b9d/ffffff?text=Sub1.1',
            'sub2_1': 'https://via.placeholder.com/150/4a90e2/ffffff?text=Sub2.1',
            'sub2_4': 'https://via.placeholder.com/150/00ff88/ffffff?text=Sub2.4',
            'sub3_1': 'https://via.placeholder.com/150/ffd700/000000?text=Sub3.1',
        },
        'mazos': {
            'mazo1': 'https://via.placeholder.com/120/ff6b9d/ffffff?text=M1',
            'mazo2': 'https://via.placeholder.com/120/4a90e2/ffffff?text=M2',
            'mazo3': 'https://via.placeholder.com/120/00ff88/ffffff?text=M3',
            'mazo4': 'https://via.placeholder.com/120/ffd700/000000?text=M4',
            'mazo5': 'https://via.placeholder.com/120/9c27b0/ffffff?text=M5',
        }
    };
    
    return rutas[tipo]?.[id] || `https://via.placeholder.com/150/cccccc/333333?text=${id}`;
}

function obtenerVideoAleatorio() {
    const videos = [
        { titulo: '¡Felicidades!', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', duracion: '10s' },
        { titulo: 'Recompensa Especial', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', duracion: '15s' },
        { titulo: '¡Excelente Trabajo!', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', duracion: '12s' }
    ];
    
    return videos[Math.floor(Math.random() * videos.length)];
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Aplicación cargada");
    
    // Inicializar sistemas
    sistemaEconomia?.inicializar();
    misionesDiarias?.inicializar();
    eventosDiarios?.inicializar();
    sistemaPalabrasFalladas?.inicializar();
    sistemaNakano?.inicializar?.();
    videosViewer?.inicializar();
    
    console.log("✅ Sistemas inicializados:");
    console.log("- 💰 Economía:", sistemaEconomia ? "✓" : "✗");
    console.log("- 🎯 Misiones:", misionesDiarias ? "✓" : "✗");
    console.log("- 🎁 Eventos:", eventosDiarios ? "✓" : "✗");
    console.log("- 📝 Falladas:", sistemaPalabrasFalladas ? "✓" : "✗");
    console.log("- 💕 Nakano:", sistemaNakano ? "✓" : "✗");
    console.log("- 🎬 Videos H:", videosViewer ? "✓" : "✗");
    
    // Verificar si estamos en la pantalla correcta
    setTimeout(() => {
        if (!document.querySelector('.pantalla.activa')) {
            cambiarPantalla('pantalla-inicio');
        }
        
        // Mostrar evento diario si existe
        if (eventosDiarios?.estado?.eventoActual && !eventosDiarios.estado.aceptado) {
            setTimeout(() => {
                eventosDiarios.mostrarEventoDiario();
            }, 500);
        }
    }, 100);
});

// ============================================================================
// FUNCIONES DE TESTING Y DESARROLLO
// ============================================================================

Object.assign(window, {
    // Eventos diarios
    mostrarEventoDiarioForzado: () => { eventosDiarios?.reiniciarEventoDiario(); eventosDiarios?.mostrarEventoDiario(); },
    reiniciarSistemaEventos: () => { localStorage.removeItem('eventosDiarios'); eventosDiarios?.reiniciarEventoDiario(); location.reload(); },
    
    // Economía
    agregarDinero: (cantidad) => sistemaEconomia?.agregarDinero(cantidad, "Testing"),
    
    // Estado de sistemas
    verEstadoSistemas: () => {
        console.log("=== ESTADO DE SISTEMAS ===");
        console.log("💰 Economía:", sistemaEconomia?.saldoTotal);
        console.log("🎯 Misiones:", misionesDiarias?.misiones);
        console.log("📅 Evento:", eventosDiarios?.estado);
        console.log("📝 Falladas:", sistemaPalabrasFalladas?.obtenerEstadisticas());
        if (sistemaNakano) console.log("💕 Nakano:", sistemaNakano.noviaSeleccionada, sistemaNakano.economia.saldo);
        if (videosViewer) console.log("🎬 Videos:", videosViewer.estado);
    },
    
    // Palabras falladas
    verPalabrasFalladas: () => console.log("📝", sistemaPalabrasFalladas?.palabrasFalladasHoy),
    
    // Sistema Nakano
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
    
    // Mazos
    simularMazoCompletado: (porcentaje) => {
        if (sistemaNakano?.registrarMazoCompletado) {
            sistemaNakano.registrarMazoCompletado(porcentaje);
            console.log(`📊 Mazo ${porcentaje}% simulado`);
            return true;
        }
        return false;
    },
    
    // Sistema de Videos H
    cargarVideoAleatorio: (coleccionId, subcoleccionId) => {
        if (videosViewer) {
            videosViewer.mostrar(coleccionId || 'coleccion1', subcoleccionId || 'subcoleccion1');
        }
    },
    verVideosDisponibles: () => {
        if (videosViewer) {
            console.log("🎬 Videos disponibles:", videosViewer.videosDatabase);
        }
    },
    activarModoQuizVideos: () => {
        if (videosViewer) {
            videosViewer.iniciarQuiz();
        }
    },
    
    // Navegación rápida
    irAVideosH: () => iniciarVisorVideosH(),
    irANakano: () => iniciarSistemaNakano(),
    irACalendario: () => iniciarCalendarioFabrizio(),
    
    // Reset general
    resetearTodo: () => {
        if (confirm("¿Resetear TODOS los datos de la aplicación?")) {
            localStorage.clear();
            location.reload();
        }
    }
});

// ============================================================================
// COMPATIBILIDAD Y POLYFILLS
// ============================================================================

// Asegurar que las funciones esenciales existan
if (typeof mostrarPalabrasFalladas === 'undefined') {
    window.mostrarPalabrasFalladas = function() {
        console.log("⚠️ Sistema de palabras falladas no disponible");
        alert("El sistema de palabras falladas no está disponible.");
    };
}

if (typeof practicarPalabrasFalladas === 'undefined') {
    window.practicarPalabrasFalladas = function() {
        console.log("⚠️ Práctica de palabras falladas no disponible");
        alert("El sistema de práctica de palabras falladas no está disponible.");
    };
}

console.log("🚀 1main.js cargado completamente");
