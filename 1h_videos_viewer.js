// ============================================================================
// SISTEMA DE VIDEOS H - VISUALIZADOR Y REPRODUCTOR
// ============================================================================

// Esta función se llama desde main.js para iniciar el sistema de videos H
function iniciarVideosH() {
    // Verificar si las pantallas existen, si no, crearlas
    if (!document.getElementById('pantalla-videos-h')) {
        crearPantallasVideosH();
    }
    
    cambiarPantalla('pantalla-videos-h');
    
    // Cargar lista de videos
    if (typeof videosHSystem !== 'undefined' && videosHSystem.cargarListaVideos) {
        videosHSystem.cargarListaVideos();
    } else {
        console.error("⚠️ Sistema de Videos H no cargado");
        mostrarNotificacion("Error: Videos H no disponibles");
    }
}

// ============================================================================
// CREAR PANTALLAS DINÁMICAMENTE (si no existen en el HTML)
// ============================================================================

function crearPantallasVideosH() {
    console.log("🎬 Creando pantallas de Videos H dinámicamente...");
    
    const pantallasHTML = `
        <!-- PANTALLA DE LISTA DE VIDEOS H -->
        <div id="pantalla-videos-h" class="pantalla">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador">🎬 VIDEOS H PARA PAPI FABRI</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <h1>🎬 Videos H para Estudio</h1>
                <p class="subtitulo">Selecciona un video para verlo y estudiar su vocabulario</p>
                
                <div class="contenedor-videos-h" id="contenedor-videos-h">
                    <!-- Los videos se cargarán dinámicamente aquí -->
                </div>
                
                <div class="info-videos-h">
                    <p>🎥 Cada video tiene 5 mazos de vocabulario específico</p>
                    <p>📚 5 videos × 5 mazos = 25 mazos especiales</p>
                </div>
            </div>
        </div>

        <!-- PANTALLA DE VIDEO DETALLADO CON MAZOS -->
        <div id="pantalla-video-h-detalle" class="pantalla">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador" id="titulo-video-h">Video H</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="videosHSystem.volverAListaVideos()">← Volver a Videos</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <h2 id="descripcion-video-h">Video seleccionado</h2>
                
                <!-- REPRODUCTOR DE VIDEO DE GOOGLE DRIVE -->
                <div class="reproductor-video-h-container">
                    <div class="video-h-header">
                        <h3>🎥 Video para Estudio</h3>
                        <p class="video-h-instruction">Mira el video y luego practica el vocabulario</p>
                    </div>
                    
                    <div class="video-h-frame-container">
                        <iframe 
                            id="video-h-frame"
                            class="video-h-frame"
                            src=""
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            loading="lazy">
                        </iframe>
                        <div class="video-h-overlay">
                            <div class="video-h-play-indicator">
                                <div class="play-icon">▶️</div>
                                <p>Video de Google Drive</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="video-h-controls">
                        <p class="video-h-nota">
                            💡 <strong>Nota:</strong> El video se carga desde Google Drive. 
                            Si no se reproduce, haz clic en el botón de pantalla completa.
                        </p>
                    </div>
                </div>
                
                <!-- MAZOS DEL VIDEO -->
                <div class="mazos-video-h-container">
                    <h3>📚 Mazos de Vocabulario de este Video</h3>
                    <p class="subtitulo">Practica el vocabulario específico de este video</p>
                    
                    <div class="contenedor-mazos-video-h" id="contenedor-mazos-video-h">
                        <!-- Los mazos se cargarán dinámicamente aquí -->
                    </div>
                </div>
                
                <div class="acciones-video-h">
                    <button class="boton-secundario" onclick="videosHSystem.volverAListaVideos()">
                        ← Ver otros Videos
                    </button>
                    <button class="boton-principal" onclick="irAlMenu()">
                        🏠 Ir al Menú Principal
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Agregar las pantallas al final del body
    document.body.insertAdjacentHTML('beforeend', pantallasHTML);
    console.log("✅ Pantallas de Videos H creadas");
}

// ============================================================================
// FUNCIONES DE UTILIDAD
// ============================================================================

// Función para mostrar notificación (reutilizada de otros sistemas)
function mostrarNotificacionVideosH(mensaje) {
    // Reutilizar la función de notificación si existe
    if (typeof mostrarNotificacion !== 'undefined') {
        mostrarNotificacion(mensaje);
    } else {
        // Crear una notificación simple
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff1493, #ff69b4);
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
}

// ============================================================================
// INTEGRACIÓN CON EL SISTEMA EXISTENTE
// ============================================================================

// Sobrescribir la función de mostrar resultados para añadir recompensa especial
const mostrarResultadosOriginal = window.mostrarResultados;
window.mostrarResultados = function() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // Verificar si es un mazo de Videos H (por el título)
    const tituloElement = document.getElementById('contador-preguntas');
    const esVideoH = tituloElement && tituloElement.textContent.includes('VIDEO H');
    
    if (esVideoH && porcentaje >= 80) {
        // Recompensa especial para Videos H
        const recompensa = 2; // 2 S/. por completar mazo de video H
        sistemaEconomia.agregarDinero(recompensa, "Mazo de Video H completado");
        mostrarNotificacionVideosH(`🎬 ¡Video H completado! +${recompensa} S/.`);
    }
    
    // Llamar a la función original
    if (mostrarResultadosOriginal) {
        mostrarResultadosOriginal();
    }
};

// ============================================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

// Asegurarse de que la función esté disponible globalmente
window.iniciarVideosH = iniciarVideosH;
window.mostrarNotificacionVideosH = mostrarNotificacionVideosH;

console.log("✅ Sistema de Videos H Viewer cargado");
