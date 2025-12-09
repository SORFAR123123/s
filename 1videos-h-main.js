// ============================================================================
// INTEGRACIÓN DEL SISTEMA DE VIDEOS H - MAIN
// ============================================================================

// Variable global para controlar si el sistema está inicializado
let sistemaVideosHInicializado = false;

// ============================================================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Inicializando integración de Videos H...");
    
    // Verificar dependencias
    if (typeof configVideosH === 'undefined') {
        console.error("❌ Error: configVideosH no encontrado");
        return;
    }
    
    if (typeof vocabularioH === 'undefined') {
        console.error("❌ Error: vocabularioH no encontrado");
        return;
    }
    
    if (typeof sistemaVideosH === 'undefined') {
        console.error("❌ Error: sistemaVideosH no encontrado");
        return;
    }
    
    // Inicializar sistema de Videos H
    sistemaVideosH.inicializar();
    sistemaVideosHInicializado = true;
    
    // Añadir tarjeta al menú principal
    agregarTarjetaVideosHAlMenu();
    
    console.log("✅ Integración de Videos H completada");
});

// ============================================================================
// AÑADIR TARJETA AL MENÚ PRINCIPAL
// ============================================================================

function agregarTarjetaVideosHAlMenu() {
    // Esperar a que el DOM esté listo
    setTimeout(() => {
        const seccionModosEspeciales = document.querySelector('.seccion-menu .contenedor-tarjetas');
        
        if (!seccionModosEspeciales) {
            console.log("⚠️ No se encontró la sección de modos especiales, reintentando...");
            setTimeout(agregarTarjetaVideosHAlMenu, 500);
            return;
        }
        
        // Verificar si ya existe la tarjeta
        if (document.getElementById('tarjeta-videos-h')) {
            console.log("✅ Tarjeta de Videos H ya existe");
            return;
        }
        
        // Crear tarjeta
        const tarjetaHTML = `
        <div class="lastsummer-card" id="tarjeta-videos-h" onclick="iniciarVideosH()">
            <img src="https://via.placeholder.com/300x200/9c27b0/ffffff?text=Videos+H" alt="Videos H" class="lastsummer-imagen">
            <div class="lastsummer-texto">🎬 VIDEOS H PARA PAPI FABRI</div>
            <div class="lastsummer-info">5 colecciones + videos + vocabulario especial</div>
        </div>`;
        
        seccionModosEspeciales.insertAdjacentHTML('beforeend', tarjetaHTML);
        console.log("✅ Tarjeta de Videos H añadida al menú principal");
    }, 1000);
}

// ============================================================================
// MODIFICACIONES AL SISTEMA DE QUIZ EXISTENTE
// ============================================================================

// Guardar referencia original de mostrarResultados
const mostrarResultadosOriginal = window.mostrarResultados;

// Sobrescribir para detectar si es quiz de Videos H
window.mostrarResultados = function() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // Verificar si es quiz de Videos H (por el título)
    const tituloElement = document.getElementById('contador-preguntas');
    const esQuizVideosH = tituloElement && tituloElement.textContent.includes('VIDEOS H');
    
    if (esQuizVideosH) {
        console.log("🎬 Resultados de quiz de Videos H detectados");
        
        // Registrar mazo completado para misiones diarias (si aplica)
        if (typeof misionesDiarias !== 'undefined' && porcentaje >= 80) {
            misionesDiarias.registrarMazoCompletado();
        }
        
        // Registrar para evento diario (si aplica)
        if (typeof eventosDiarios !== 'undefined' && 
            eventosDiarios.estado.eventoActual && 
            eventosDiarios.estado.aceptado && 
            !eventosDiarios.estado.completado && 
            !eventosDiarios.estado.fallado &&
            porcentaje >= 80) {
            eventosDiarios.registrarMazoCompletado();
        }
        
        // Dar recompensa si es 100%
        if (porcentaje === 100) {
            sistemaEconomia.agregarDinero(1, "Mazo de Videos H completado al 100%");
            
            // Mostrar video de recompensa (si no se completó evento diario)
            if (!eventosDiarios.estado.completado) {
                mostrarVideoRecompensa();
                return; // No mostrar pantalla de resultados todavía
            }
        }
        
        // Mostrar pantalla de resultados normal
        mostrarPantallaResultados(porcentaje);
    } else {
        // Usar el comportamiento original
        mostrarResultadosOriginal();
    }
};

// ============================================================================
// FUNCIONES DE INTEGRACIÓN CON SISTEMA NAKANO
// ============================================================================

// Registrar experiencia en sistema Nakano cuando se completa mazo de Videos H
function registrarExperienciaNakanoDesdeVideosH(porcentaje) {
    if (typeof sistemaNakano !== 'undefined' && sistemaNakano.registrarMazoCompletado) {
        // Dar un poco más de experiencia por contenido especial
        const experienciaBase = Math.floor(porcentaje / 10);
        const experienciaExtra = Math.floor(porcentaje / 20);
        const experienciaTotal = experienciaBase + experienciaExtra;
        
        sistemaNakano.agregarExperiencia(experienciaTotal, "Mazo de Videos H completado");
        console.log(`💕 +${experienciaTotal} XP para Nakano por mazo de Videos H`);
    }
}

// ============================================================================
// FUNCIONES DE TESTING Y DEBUG
// ============================================================================

// Función para ver estado del sistema Videos H
window.verEstadoVideosH = function() {
    console.log("=== ESTADO DE VIDEOS H ===");
    console.log("📊 Sistema inicializado:", sistemaVideosHInicializado);
    console.log("📁 Colecciones cargadas:", obtenerTodasColecciones().length);
    console.log("📍 Colección actual:", sistemaVideosH.estado.coleccionActual);
    console.log("🎬 Modo video:", sistemaVideosH.estado.modoVideo);
    console.log("🏠 Pantalla actual:", sistemaVideosH.estado.pantallaActual);
    
    if (sistemaVideosH.estado.coleccionActual) {
        const coleccion = obtenerColeccion(sistemaVideosH.estado.coleccionActual);
        console.log("📋 Colección actual:", coleccion.nombre);
        console.log("🎥 Video ID:", coleccion.videoDriveId);
        console.log("🔗 URL:", obtenerUrlVideoDrive(coleccion.videoDriveId));
    }
};

// Función para forzar reinicio del sistema Videos H
window.reiniciarSistemaVideosH = function() {
    if (confirm("¿Reiniciar TODO el sistema de Videos H?\nSe perderá el progreso actual.")) {
        localStorage.removeItem('sistemaVideosH');
        location.reload();
    }
};

// Función para probar una colección específica
window.probarColeccionVideosH = function(id) {
    if (!sistemaVideosHInicializado) {
        console.error("Sistema Videos H no inicializado");
        return;
    }
    
    if (existeColeccion(id)) {
        sistemaVideosH.cargarColeccionDetalle(id);
    } else {
        console.error(`Colección ${id} no encontrada`);
    }
};

// Función para simular mazo completado
window.simularMazoVideosH = function(coleccionId, mazoId) {
    const palabras = obtenerMazoColeccion(coleccionId, mazoId);
    if (!palabras || palabras.length === 0) {
        console.error("Mazo no encontrado");
        return;
    }
    
    window.mazoActual = [...palabras];
    window.preguntaActual = 0;
    window.respuestasCorrectas = palabras.length; // 100% correcto
    window.respuestasIncorrectas = 0;
    
    // Forzar mostrar resultados
    mostrarResultados();
};

// ============================================================================
// INTEGRACIÓN CON SISTEMA DE PALABRAS FALLADAS
// ============================================================================

// Asegurar que las palabras falladas de Videos H se registren
const verificarRespuestaOriginal = window.verificarRespuesta;
if (verificarRespuestaOriginal) {
    window.verificarRespuesta = function(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
        // Llamar a la función original
        verificarRespuestaOriginal(respuestaSeleccionada, respuestaCorrecta, lectura, opciones);
        
        // Verificar si es quiz de Videos H
        const tituloElement = document.getElementById('contador-preguntas');
        const esQuizVideosH = tituloElement && tituloElement.textContent.includes('VIDEOS H');
        
        if (esQuizVideosH && respuestaSeleccionada !== respuestaCorrecta) {
            const palabraActual = document.getElementById('palabra-japones').textContent;
            console.log(`📝 Palabra fallada de Videos H registrada: ${palabraActual}`);
        }
    };
}

// ============================================================================
// EXPORTAR FUNCIONES GLOBALES
// ============================================================================

// Hacer funciones accesibles globalmente
window.agregarTarjetaVideosHAlMenu = agregarTarjetaVideosHAlMenu;
window.registrarExperienciaNakanoDesdeVideosH = registrarExperienciaNakanoDesdeVideosH;

// ============================================================================
// VERIFICACIÓN PERIÓDICA DE INTEGRACIÓN
// ============================================================================

// Verificar periódicamente que la tarjeta esté en el menú
setInterval(() => {
    if (!document.getElementById('tarjeta-videos-h') && sistemaVideosHInicializado) {
        console.log("🔍 Tarjeta de Videos H no encontrada, reintentando...");
        agregarTarjetaVideosHAlMenu();
    }
}, 5000);
