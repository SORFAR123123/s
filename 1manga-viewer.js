
// ============================================================================
// SISTEMA DE VISOR DE MANGA/IMÁGENES - COMO NHENTAI
// ============================================================================

const mangaViewer = {
    // Configuración del visor
    config: {
        maxWidth: '100vw',        // Ocupar todo el ancho
        maxHeight: 'auto',        // Altura automática
        zoomDefault: 1.0,         // Zoom por defecto
        zoomStep: 0.2,            // Incremento de zoom
        minZoom: 0.5,             // Zoom mínimo
        maxZoom: 3.0,             // Zoom máximo
        showNavigation: true,     // Mostrar navegación
        autoHideControls: false,  // Ocultar controles automáticamente
        backgroundColor: '#000000' // Fondo negro como nhentai
    },
    
    // Estado del visor
    estado: {
        imagenes: [],             // Array de URLs de imágenes
        imagenActual: 0,          // Índice de la imagen actual
        zoomActual: 1.0,          // Zoom actual
        pantallaVisible: false,   // Si el visor está visible
        modoPantallaCompleta: false,
        cargando: false
    },
    
    // Elementos DOM
    elementos: {
        contenedor: null,
        imagen: null,
        overlay: null,
        controles: null,
        contador: null,
        botones: null
    },
    
    // ============================================================================
    // INICIALIZACIÓN
    // ============================================================================
    
    inicializar: function() {
        console.log("📖 Inicializando visor de manga...");
        
        // Crear la estructura HTML del visor
        this.crearEstructuraHTML();
        
        // Configurar eventos
        this.configurarEventos();
        
        // Cargar estado guardado si existe
        this.cargarEstado();
        
        console.log("✅ Visor de manga listo");
    },
    
    // Crear la estructura HTML del visor
    crearEstructuraHTML: function() {
        // Crear contenedor principal
        this.elementos.contenedor = document.createElement('div');
        this.elementos.contenedor.id = 'visor-manga';
        this.elementos.contenedor.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: ${this.config.backgroundColor};
            z-index: 99999;
            display: none;
            overflow-y: auto;
            overflow-x: hidden;
        `;
        
        // Crear overlay para controles
        this.elementos.overlay = document.createElement('div');
        this.elementos.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        `;
        
        // Crear contenedor de imagen
        const imagenContainer = document.createElement('div');
        imagenContainer.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            padding: 20px 0;
            position: relative;
            z-index: 0;
        `;
        
        // Crear elemento de imagen
        this.elementos.imagen = document.createElement('img');
        this.elementos.imagen.id = 'imagen-manga-actual';
        this.elementos.imagen.style.cssText = `
            max-width: 100%;
            height: auto;
            display: block;
            transition: transform 0.2s ease;
            cursor: zoom-in;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        `;
        
        // Crear controles
        this.crearControles();
        
        // Crear indicador de carga
        const loader = document.createElement('div');
        loader.id = 'manga-loader';
        loader.innerHTML = '🔄';
        loader.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            z-index: 10;
            display: none;
        `;
        
        // Ensamblar todo
        imagenContainer.appendChild(this.elementos.imagen);
        this.elementos.contenedor.appendChild(loader);
        this.elementos.contenedor.appendChild(imagenContainer);
        this.elementos.contenedor.appendChild(this.elementos.overlay);
        this.elementos.contenedor.appendChild(this.elementos.controles);
        
        // Añadir al body
        document.body.appendChild(this.elementos.contenedor);
    },
    
    // Crear controles del visor
    crearControles: function() {
        this.elementos.controles = document.createElement('div');
        this.elementos.controles.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
            padding: 10px 20px;
            display: flex;
            gap: 15px;
            align-items: center;
            z-index: 2;
            transition: opacity 0.3s ease;
            pointer-events: auto;
        `;
        
        // Contador de imágenes
        this.elementos.contador = document.createElement('div');
        this.elementos.contador.id = 'contador-manga';
        this.elementos.contador.style.cssText = `
            color: white;
            font-weight: bold;
            min-width: 100px;
            text-align: center;
        `;
        
        // Contenedor de botones
        this.elementos.botones = document.createElement('div');
        this.elementos.botones.style.cssText = `
            display: flex;
            gap: 10px;
        `;
        
        // Botones básicos
        const botonesHTML = `
            <button id="manga-prev" title="Imagen anterior (←)" style="background: #ff6b9d; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">◀ Anterior</button>
            <button id="manga-next" title="Imagen siguiente (→)" style="background: #4a90e2; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">Siguiente ▶</button>
            <button id="manga-zoom-in" title="Acercar (Ctrl + +)" style="background: #00cc6a; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">➕</button>
            <button id="manga-zoom-out" title="Alejar (Ctrl + -)" style="background: #ff9800; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">➖</button>
            <button id="manga-zoom-reset" title="Restaurar zoom (0)" style="background: #7b68ee; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">↺</button>
            <button id="manga-close" title="Cerrar (ESC)" style="background: #ff4444; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">✕ Cerrar</button>
        `;
        
        this.elementos.botones.innerHTML = botonesHTML;
        
        // Añadir elementos a controles
        this.elementos.controles.appendChild(this.elementos.contador);
        this.elementos.controles.appendChild(this.elementos.botones);
        
        // Botón de pantalla completa (opcional)
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.id = 'manga-fullscreen';
        fullscreenBtn.title = 'Pantalla completa (F)';
        fullscreenBtn.innerHTML = '⛶';
        fullscreenBtn.style.cssText = `
            background: #9c27b0;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            cursor: pointer;
            font-weight: bold;
            font-size: 1.2rem;
        `;
        this.elementos.botones.appendChild(fullscreenBtn);
    },
    
    // Configurar eventos
    configurarEventos: function() {
        // Eventos de botones
        document.getElementById('manga-prev').addEventListener('click', () => this.imagenAnterior());
        document.getElementById('manga-next').addEventListener('click', () => this.imagenSiguiente());
        document.getElementById('manga-zoom-in').addEventListener('click', () => this.zoomIn());
        document.getElementById('manga-zoom-out').addEventListener('click', () => this.zoomOut());
        document.getElementById('manga-zoom-reset').addEventListener('click', () => this.resetZoom());
        document.getElementById('manga-close').addEventListener('click', () => this.ocultar());
        document.getElementById('manga-fullscreen').addEventListener('click', () => this.togglePantallaCompleta());
        
        // Eventos de teclado
        document.addEventListener('keydown', (e) => this.manejarTeclado(e));
        
        // Eventos de la imagen
        this.elementos.imagen.addEventListener('click', (e) => {
            if (e.ctrlKey) {
                this.zoomIn();
            } else if (e.shiftKey) {
                this.zoomOut();
            } else {
                // Click simple: alternar controles
                this.elementos.controles.style.opacity = 
                    this.elementos.controles.style.opacity === '0' ? '1' : '0';
            }
        });
        
        // Evento de rueda del mouse para zoom
        this.elementos.contenedor.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.zoomIn();
                } else {
                    this.zoomOut();
                }
            }
        }, { passive: false });
        
        // Doble click para resetear zoom
        this.elementos.imagen.addEventListener('dblclick', () => this.resetZoom());
    },
    
    // ============================================================================
    // FUNCIONES PRINCIPALES
    // ============================================================================
    
    // Mostrar visor con imágenes
    mostrar: function(imagenes, indiceInicial = 0) {
        console.log("📖 Mostrando visor de manga con", imagenes.length, "imágenes");
        
        // Guardar imágenes
        this.estado.imagenes = [...imagenes];
        this.estado.imagenActual = indiceInicial;
        this.estado.zoomActual = this.config.zoomDefault;
        this.estado.pantallaVisible = true;
        
        // Mostrar contenedor
        this.elementos.contenedor.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Ocultar scroll del body
        
        // Cargar primera imagen
        this.cargarImagenActual();
        
        // Actualizar controles
        this.actualizarControles();
        
        // Guardar estado
        this.guardarEstado();
    },
    
    // Ocultar visor
    ocultar: function() {
        this.estado.pantallaVisible = false;
        this.elementos.contenedor.style.display = 'none';
        document.body.style.overflow = ''; // Restaurar scroll
        
        // Limpiar imagen
        this.elementos.imagen.src = '';
        
        console.log("📖 Visor de manga ocultado");
    },
    
    // Cargar imagen actual
    cargarImagenActual: function() {
        if (this.estado.imagenes.length === 0) {
            console.error("❌ No hay imágenes para mostrar");
            return;
        }
        
        const indice = this.estado.imagenActual;
        const url = this.estado.imagenes[indice];
        
        console.log("🖼️ Cargando imagen", indice + 1, "de", this.estado.imagenes.length);
        
        // Mostrar loader
        document.getElementById('manga-loader').style.display = 'block';
        this.estado.cargando = true;
        
        // Precargar imagen
        const img = new Image();
        img.onload = () => {
            // Asignar URL a la imagen del visor
            this.elementos.imagen.src = url;
            
            // Aplicar zoom actual
            this.aplicarZoom();
            
            // Ocultar loader
            document.getElementById('manga-loader').style.display = 'none';
            this.estado.cargando = false;
            
            console.log("✅ Imagen cargada:", url);
            
            // Actualizar contador
            this.actualizarContador();
            
            // Intentar precargar siguiente imagen
            this.preloadSiguiente();
        };
        
        img.onerror = () => {
            console.error("❌ Error cargando imagen:", url);
            document.getElementById('manga-loader').style.display = 'none';
            this.estado.cargando = false;
            
            // Mostrar mensaje de error
            this.elementos.imagen.src = '';
            this.elementos.imagen.alt = 'Error cargando imagen';
            this.elementos.imagen.style.backgroundColor = '#333';
        };
        
        img.src = url;
    },
    
    // Precargar siguiente imagen
    preloadSiguiente: function() {
        const siguienteIndice = this.estado.imagenActual + 1;
        if (siguienteIndice < this.estado.imagenes.length) {
            const img = new Image();
            img.src = this.estado.imagenes[siguienteIndice];
        }
    },
    
    // ============================================================================
    // NAVEGACIÓN
    // ============================================================================
    
    imagenAnterior: function() {
        if (this.estado.imagenActual > 0) {
            this.estado.imagenActual--;
            this.cargarImagenActual();
            this.resetZoom(); // Resetear zoom al cambiar de imagen
        } else {
            console.log("📖 Ya estás en la primera imagen");
        }
    },
    
    imagenSiguiente: function() {
        if (this.estado.imagenActual < this.estado.imagenes.length - 1) {
            this.estado.imagenActual++;
            this.cargarImagenActual();
            this.resetZoom(); // Resetear zoom al cambiar de imagen
        } else {
            console.log("📖 Ya estás en la última imagen");
        }
    },
    
    irAImagen: function(indice) {
        if (indice >= 0 && indice < this.estado.imagenes.length) {
            this.estado.imagenActual = indice;
            this.cargarImagenActual();
            this.resetZoom();
        }
    },
    
    // ============================================================================
    // ZOOM
    // ============================================================================
    
    zoomIn: function() {
        const nuevoZoom = this.estado.zoomActual + this.config.zoomStep;
        if (nuevoZoom <= this.config.maxZoom) {
            this.estado.zoomActual = nuevoZoom;
            this.aplicarZoom();
        }
    },
    
    zoomOut: function() {
        const nuevoZoom = this.estado.zoomActual - this.config.zoomStep;
        if (nuevoZoom >= this.config.minZoom) {
            this.estado.zoomActual = nuevoZoom;
            this.aplicarZoom();
        }
    },
    
    resetZoom: function() {
        this.estado.zoomActual = this.config.zoomDefault;
        this.aplicarZoom();
    },
    
    aplicarZoom: function() {
        this.elementos.imagen.style.transform = `scale(${this.estado.zoomActual})`;
        
        // Actualizar cursor según zoom
        this.elementos.imagen.style.cursor = this.estado.zoomActual > 1.0 
            ? 'zoom-out' 
            : 'zoom-in';
    },
    
    // ============================================================================
    // PANTALLA COMPLETA
    // ============================================================================
    
    togglePantallaCompleta: function() {
        if (!this.estado.modoPantallaCompleta) {
            this.entrarPantallaCompleta();
        } else {
            this.salirPantallaCompleta();
        }
    },
    
    entrarPantallaCompleta: function() {
        const elem = this.elementos.contenedor;
        
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        
        this.estado.modoPantallaCompleta = true;
    },
    
    salirPantallaCompleta: function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        
        this.estado.modoPantallaCompleta = false;
    },
    
    // ============================================================================
    // INTERFAZ
    // ============================================================================
    
    actualizarContador: function() {
        if (this.elementos.contador) {
            this.elementos.contador.innerHTML = `
                <span style="color: #ff6b9d">${this.estado.imagenActual + 1}</span>
                <span style="color: #cccccc"> / </span>
                <span style="color: #4a90e2">${this.estado.imagenes.length}</span>
            `;
        }
    },
    
    actualizarControles: function() {
        // Actualizar estado de botones
        const prevBtn = document.getElementById('manga-prev');
        const nextBtn = document.getElementById('manga-next');
        
        if (prevBtn) {
            prevBtn.disabled = this.estado.imagenActual === 0;
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.estado.imagenActual === this.estado.imagenes.length - 1;
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        }
        
        this.actualizarContador();
    },
    
    // ============================================================================
    // MANEJO DE TECLADO
    // ============================================================================
    
    manejarTeclado: function(event) {
        // Solo si el visor está visible
        if (!this.estado.pantallaVisible) return;
        
        // Prevenir comportamiento por defecto
        event.preventDefault();
        
        switch(event.key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
                this.imagenAnterior();
                break;
                
            case 'ArrowRight':
            case 'd':
            case 'D':
                this.imagenSiguiente();
                break;
                
            case '+':
            case '=':
                if (event.ctrlKey) {
                    this.zoomIn();
                }
                break;
                
            case '-':
            case '_':
                if (event.ctrlKey) {
                    this.zoomOut();
                }
                break;
                
            case '0':
                this.resetZoom();
                break;
                
            case 'Escape':
                if (this.estado.modoPantallaCompleta) {
                    this.salirPantallaCompleta();
                } else {
                    this.ocultar();
                }
                break;
                
            case 'f':
            case 'F':
                this.togglePantallaCompleta();
                break;
        }
    },
    
    // ============================================================================
    // PERSISTENCIA
    // ============================================================================
    
    guardarEstado: function() {
        try {
            localStorage.setItem('mangaViewerState', JSON.stringify({
                zoomActual: this.estado.zoomActual,
                ultimasImagenes: this.estado.imagenes.slice(0, 10) // Guardar últimas 10
            }));
        } catch (e) {
            console.error("Error guardando estado del visor:", e);
        }
    },
    
    cargarEstado: function() {
        try {
            const datos = localStorage.getItem('mangaViewerState');
            if (datos) {
                const estado = JSON.parse(datos);
                this.estado.zoomActual = estado.zoomActual || this.config.zoomDefault;
            }
        } catch (e) {
            console.error("Error cargando estado del visor:", e);
        }
    },
    
    // ============================================================================
    // API PÚBLICA - FUNCIONES PARA USAR DESDE OTROS ARCHIVOS
    // ============================================================================
    
    // Mostrar una sola imagen
    mostrarImagen: function(urlImagen) {
        this.mostrar([urlImagen], 0);
    },
    
    // Mostrar múltiples imágenes
    mostrarImagenes: function(urlsImagenes, indiceInicial = 0) {
        this.mostrar(urlsImagenes, indiceInicial);
    },
    
    // Añadir imágenes al final (para actualización dinámica)
    agregarImagenes: function(urlsImagenes) {
        this.estado.imagenes.push(...urlsImagenes);
        console.log("➕ Imágenes añadidas. Total:", this.estado.imagenes.length);
        
        // Si el visor está visible, actualizar controles
        if (this.estado.pantallaVisible) {
            this.actualizarControles();
        }
    },
    
    // Limpiar todas las imágenes
    limpiarImagenes: function() {
        this.estado.imagenes = [];
        this.estado.imagenActual = 0;
        console.log("🧹 Todas las imágenes eliminadas");
    },
    
    // Obtener información del estado actual
    obtenerEstado: function() {
        return {
            totalImagenes: this.estado.imagenes.length,
            imagenActual: this.estado.imagenActual + 1,
            zoomActual: this.estado.zoomActual,
            visible: this.estado.pantallaVisible
        };
    }
};

// ============================================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

// Inicializar cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    mangaViewer.inicializar();
    
    // Hacerlo disponible globalmente
    window.mangaViewer = mangaViewer;
    
    console.log("📖 Manga Viewer cargado y listo");
});

// ============================================================================
// FUNCIÓN GLOBAL PARA INTEGRAR CON TUS SUBCONTENEDORES
// ============================================================================

// Función para agregar botón "Leer Manga" a los subcontenedores
function agregarBotonMangaASubcontenedor(subcontenedorId, urlsImagenes) {
    // Buscar la tarjeta del subcontenedor
    const tarjetas = document.querySelectorAll('.subcontenedor-card');
    
    tarjetas.forEach(tarjeta => {
        // Verificar si es la tarjeta correcta (por el texto o atributo)
        const texto = tarjeta.querySelector('.subcontenedor-texto');
        if (texto && texto.textContent.includes(subcontenedorId.replace('_', '.'))) {
            // Crear botón de manga
            const botonManga = document.createElement('button');
            botonManga.innerHTML = '📖 Leer Manga';
            botonManga.style.cssText = `
                background: linear-gradient(135deg, #9C27B0, #673AB7);
                color: white;
                border: none;
                border-radius: 10px;
                padding: 10px 15px;
                margin-top: 10px;
                cursor: pointer;
                font-weight: bold;
                width: 100%;
                transition: all 0.3s ease;
            `;
            
            botonManga.onmouseover = function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(156, 39, 176, 0.4)';
            };
            
            botonManga.onmouseout = function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            };
            
            botonManga.onclick = function() {
                mangaViewer.mostrarImagenes(urlsImagenes);
            };
            
            // Añadir botón a la tarjeta
            tarjeta.appendChild(botonManga);
            
            console.log("✅ Botón de manga añadido a:", subcontenedorId);
        }
    });
}

// Función global para mostrar manga desde cualquier lugar
window.mostrarManga = function(urlsImagenes, indiceInicial = 0) {
    if (mangaViewer && mangaViewer.mostrarImagenes) {
        mangaViewer.mostrarImagenes(urlsImagenes, indiceInicial);
        return true;
    }
    return false;
};

// Función global para mostrar una sola imagen
window.mostrarImagenAmpliada = function(urlImagen) {
    if (mangaViewer && mangaViewer.mostrarImagen) {
        mangaViewer.mostrarImagen(urlImagen);
        return true;
    }
    return false;
};

// Función para añadir imágenes dinámicamente
window.agregarImagenesManga = function(urlsImagenes) {
    if (mangaViewer && mangaViewer.agregarImagenes) {
        mangaViewer.agregarImagenes(urlsImagenes);
        return true;
    }
    return false;
};

// ============================================================================
// EJEMPLOS DE USO (para testing)
// ============================================================================

// Ejemplo 1: Mostrar manga desde consola
window.ejemploManga = function() {
    const imagenesEjemplo = [
        'https://pbs.twimg.com/media/G5_unInW4AA4bVq?format=png&name=large',
        'https://pbs.twimg.com/media/G5_vVCEX0AAnsA7?format=jpg&name=large',
        'https://pbs.twimg.com/media/G5_vDqIXgAAa8et?format=png&name=large'
    ];
    
    mostrarManga(imagenesEjemplo);
    console.log("📖 Ejemplo de manga mostrado. Usa las flechas ← → para navegar.");
};

// Ejemplo 2: Añadir más imágenes dinámicamente
window.agregarMasImagenes = function() {
    const nuevasImagenes = [
        'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
        'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large'
    ];
    
    agregarImagenesManga(nuevasImagenes);
    console.log("➕ Imágenes añadidas dinámicamente");
};

// Ejemplo 3: Ver estado actual
window.verEstadoMangaViewer = function() {
    if (mangaViewer) {
        const estado = mangaViewer.obtenerEstado();
        console.log("📊 Estado MangaViewer:", estado);
        return estado;
    }
    return null;
};
