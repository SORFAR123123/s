// ============================================================================
// INTEGRACIÓN DEL SISTEMA DE VIDEOS H - MAIN (CORREGIDO)
// ============================================================================

// Variable global para controlar si el sistema está inicializado
let sistemaVideosHInicializado = false;

// ============================================================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Inicializando integración de Videos H...");
    
    // Esperar a que todos los sistemas estén cargados
    setTimeout(() => {
        // Verificar dependencias
        if (typeof configVideosH === 'undefined') {
            console.error("❌ Error: configVideosH no encontrado");
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
    }, 2000); // Esperar 2 segundos para que todo cargue
});

// ============================================================================
// AÑADIR TARJETA AL MENÚ PRINCIPAL
// ============================================================================

function agregarTarjetaVideosHAlMenu() {
    // Esperar a que el DOM esté listo
    setTimeout(() => {
        const seccionModosEspeciales = document.querySelector('.seccion-menu .contenedor-tarjetas');
        
        if (!seccionModosEspeciales) {
            console.log("⚠️ No se encontró la sección de modos especiales");
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
            <img src="https://via.placeholder.com/300x200/9c27b0/ffffff?text=🎬+Videos+H" alt="Videos H" class="lastsummer-imagen">
            <div class="lastsummer-texto">🎬 VIDEOS H PARA PAPI FABRI</div>
            <div class="lastsummer-info">5 colecciones + videos + vocabulario especial</div>
        </div>`;
        
        seccionModosEspeciales.insertAdjacentHTML('beforeend', tarjetaHTML);
        console.log("✅ Tarjeta de Videos H añadida al menú principal");
    }, 1000);
}

// ============================================================================
// FUNCIONES DE TESTING Y DEBUG
// ============================================================================

// Función para ver estado del sistema Videos H
window.verEstadoVideosH = function() {
    console.log("=== ESTADO DE VIDEOS H ===");
    console.log("📊 Sistema inicializado:", sistemaVideosHInicializado);
    console.log("📍 Colección actual:", sistemaVideosH?.estado?.coleccionActual || "Ninguna");
    
    if (sistemaVideosH?.estado?.coleccionActual) {
        const coleccion = obtenerColeccion(sistemaVideosH.estado.coleccionActual);
        if (coleccion) {
            console.log("📋 Colección actual:", coleccion.nombre);
        }
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

// ============================================================================
// EXPORTAR FUNCIONES GLOBALES
// ============================================================================

// Hacer funciones accesibles globalmente
window.agregarTarjetaVideosHAlMenu = agregarTarjetaVideosHAlMenu;

// ============================================================================
// VERIFICACIÓN PERIÓDICA DE INTEGRACIÓN
// ============================================================================

// Verificar periódicamente que la tarjeta esté en el menú
setInterval(() => {
    if (!document.getElementById('tarjeta-videos-h') && sistemaVideosHInicializado) {
        console.log("🔍 Tarjeta de Videos H no encontrada, reintentando...");
        agregarTarjetaVideosHAlMenu();
    }
}, 10000); // Cada 10 segundos
