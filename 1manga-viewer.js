// ============================================================================
// SISTEMA DE VISOR DE MANGA/IMÁGENES - COMO NHENTAI
// VERSIÓN CORREGIDA - BOTÓN ANTERIOR FUNCIONA
// ============================================================================

const mangaViewer = {
    // ============================================================================
    // BASE DE DATOS DE IMÁGENES DE MANGA POR SUBCONTENEDOR
    // ============================================================================
    
    mangaDatabase: {
        'sub1_1': [
            'https://pbs.twimg.com/media/G7rvtWAWcAAohDK?format=png&name=small',
            'https://pbs.twimg.com/media/G7rPFZ_WMAAfTgv?format=png&name=small',
            'https://pbs.twimg.com/media/G5_vDqIXgAAa8et?format=png&name=large',
            'https://pbs.twimg.com/media/G7fxkYUXUAAtCCz?format=png&name=small',
            'https://pbs.twimg.com/media/G7fxbA5WsAAMcky?format=png&name=small'
        ],
        'sub1_2': [
            'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
            'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large'
        ],
        'sub1_3': [],
        'sub2_1': [
            'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
            'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large'
        ],
        'sub2_2': [
            'https://pbs.twimg.com/media/G7rKvyBXEAA81vi?format=png&name=small'
        ],
        'sub2_3': [], 'sub2_4': [],
        'sub3_1': [
            'https://pbs.twimg.com/media/G67wm2LXMAATzxp?format=jpg&name=small'
        ],
        'sub3_2': [], 'sub3_3': [],
        'sub4_1': [], 'sub4_2': [], 'sub4_3': [],
        'sub5_1': [], 'sub5_2': [], 'sub5_3': [],
        'sub6_1': [], 'sub6_2': [], 'sub6_3': [],
        'sub7_1': [], 'sub7_2': [], 'sub7_3': [],
        'sub8_1': [], 'sub8_2': [], 'sub8_3': [],
        'sub9_1': [], 'sub9_2': [], 'sub9_3': [],
        'sub10_1': [], 'sub10_2': [], 'sub10_3': []
    },
    
    config: {
        maxWidth: '100vw',
        maxHeight: 'auto',
        zoomDefault: 1.0,
        zoomStep: 0.2,
        minZoom: 0.5,
        maxZoom: 3.0,
        showNavigation: true,
        autoHideControls: false,
        backgroundColor: '#000000'
    },
    
    estado: {
        imagenes: [],
        imagenActual: 0,
        zoomActual: 1.0,
        pantallaVisible: false,
        modoPantallaCompleta: false,
        cargando: false,
        subcontenedorActual: ''
    },
    
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
        
        this.crearEstructuraHTML();
        this.configurarEventos();
        this.cargarEstado();
        
        console.log("✅ Visor de manga listo");
        
        this.verificarYAgregarBotones();
        setInterval(() => this.verificarYAgregarBotones(), 500);
    },
    
    verificarYAgregarBotones: function() {
        const pantallaSubcontenedores = document.getElementById('pantalla-subcontenedores');
        if (pantallaSubcontenedores && pantallaSubcontenedores.classList.contains('activa')) {
            setTimeout(() => {
                this.agregarBotonesMangaATarjetas();
            }, 50);
        }
    },
    
    // ============================================================================
    // CREAR ESTRUCTURA HTML - VERSIÓN SIMPLIFICADA
    // ============================================================================
    
    crearEstructuraHTML: function() {
        // Contenedor principal
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
        
        // Contenedor de imagen
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
        
        // Elemento de imagen
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
        
        // Crear controles (SIMPLIFICADO)
        this.crearControles();
        
        // Loader
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
        
        // Ensamblar
        imagenContainer.appendChild(this.elementos.imagen);
        this.elementos.contenedor.appendChild(loader);
        this.elementos.contenedor.appendChild(imagenContainer);
        this.elementos.contenedor.appendChild(this.elementos.controles);
        
        document.body.appendChild(this.elementos.contenedor);
    },
    
    // ============================================================================
    // CREAR CONTROLES - VERSIÓN MEJORADA
    // ============================================================================
    
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
        
        // Contador
        this.elementos.contador = document.createElement('div');
        this.elementos.contador.id = 'contador-manga';
        this.elementos.contador.style.cssText = `
            color: white;
            font-weight: bold;
            min-width: 100px;
            text-align: center;
        `;
        
        // Botones - AHORA CON onclick DIRECTAMENTE
        this.elementos.botones = document.createElement('div');
        this.elementos.botones.style.cssText = `display: flex; gap: 10px;`;
        
        this.elementos.botones.innerHTML = `
            <button onclick="window.mangaViewer.imagenAnterior()" 
                    id="manga-prev" 
                    title="Imagen anterior (←)" 
                    style="background: #ff6b9d; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                ◀ Anterior
            </button>
            <button onclick="window.mangaViewer.imagenSiguiente()" 
                    id="manga-next" 
                    title="Imagen siguiente (→)" 
                    style="background: #4a90e2; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                Siguiente ▶
            </button>
            <button onclick="window.mangaViewer.zoomIn()" 
                    id="manga-zoom-in" 
                    title="Acercar (Ctrl + +)" 
                    style="background: #00cc6a; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                ➕
            </button>
            <button onclick="window.mangaViewer.zoomOut()" 
                    id="manga-zoom-out" 
                    title="Alejar (Ctrl + -)" 
                    style="background: #ff9800; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                ➖
            </button>
            <button onclick="window.mangaViewer.resetZoom()" 
                    id="manga-zoom-reset" 
                    title="Restaurar zoom (0)" 
                    style="background: #7b68ee; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                ↺
            </button>
            <button onclick="window.mangaViewer.ocultar()" 
                    id="manga-close" 
                    title="Cerrar (ESC)" 
                    style="background: #ff4444; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                ✕ Cerrar
            </button>
            <button onclick="window.mangaViewer.togglePantallaCompleta()" 
                    id="manga-fullscreen" 
                    title="Pantalla completa (F)" 
                    style="background: #9c27b0; color: white; border: none; border-radius: 5px; padding: 8px 12px; cursor: pointer; font-weight: bold; font-size: 1.2rem;">
                ⛶
            </button>
        `;
        
        this.elementos.controles.appendChild(this.elementos.contador);
        this.elementos.controles.appendChild(this.elementos.botones);
    },
    
    // ============================================================================
    // CONFIGURAR EVENTOS - VERSIÓN SIMPLIFICADA
    // ============================================================================
    
    configurarEventos: function() {
        console.log("🔧 Configurando eventos del manga viewer...");
        
        // Configurar eventos de teclado
        document.addEventListener('keydown', (e) => this.manejarTeclado(e));
        
        // Eventos en la imagen
        this.elementos.imagen.addEventListener('click', (e) => {
            if (e.ctrlKey) this.zoomIn();
            else if (e.shiftKey) this.zoomOut();
            else {
                // Mostrar/ocultar controles
                this.elementos.controles.style.opacity = 
                    this.elementos.controles.style.opacity === '0' ? '1' : '0';
            }
        });
        
        // Zoom con rueda
        this.elementos.contenedor.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                e.deltaY < 0 ? this.zoomIn() : this.zoomOut();
            }
        }, { passive: false });
        
        // Doble click para resetear zoom
        this.elementos.imagen.addEventListener('dblclick', () => this.resetZoom());
        
        console.log("✅ Eventos configurados");
    },
    
    // ============================================================================
    // FUNCIONES PRINCIPALES
    // ============================================================================
    
    mostrar: function(imagenes, indiceInicial = 0, subcontenedorId = '') {
        console.log("📖 Mostrando manga:", imagenes.length, "páginas");
        
        this.estado.imagenes = [...imagenes];
        this.estado.imagenActual = indiceInicial;
        this.estado.zoomActual = this.config.zoomDefault;
        this.estado.pantallaVisible = true;
        this.estado.subcontenedorActual = subcontenedorId;
        
        this.elementos.contenedor.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        this.cargarImagenActual();
        this.actualizarControles();
        this.guardarEstado();
    },
    
    ocultar: function() {
        this.estado.pantallaVisible = false;
        this.elementos.contenedor.style.display = 'none';
        document.body.style.overflow = '';
        this.elementos.imagen.src = '';
        console.log("📖 Visor ocultado");
    },
    
    // ============================================================================
    // CARGA DE IMÁGENES
    // ============================================================================
    
    cargarImagenActual: function() {
        if (this.estado.imagenes.length === 0) {
            console.error("❌ No hay imágenes");
            return;
        }
        
        const indice = this.estado.imagenActual;
        const url = this.estado.imagenes[indice];
        
        document.getElementById('manga-loader').style.display = 'block';
        this.estado.cargando = true;
        
        const img = new Image();
        img.onload = () => {
            this.elementos.imagen.src = url;
            this.aplicarZoom();
            document.getElementById('manga-loader').style.display = 'none';
            this.estado.cargando = false;
            this.actualizarContador();
            this.preloadSiguiente();
        };
        
        img.onerror = () => {
            console.error("❌ Error cargando:", url);
            document.getElementById('manga-loader').style.display = 'none';
            this.estado.cargando = false;
            this.elementos.imagen.src = '';
            this.elementos.imagen.alt = 'Error cargando imagen';
            this.elementos.imagen.style.backgroundColor = '#333';
        };
        
        img.src = url;
    },
    
    preloadSiguiente: function() {
        const siguienteIndice = this.estado.imagenActual + 1;
        if (siguienteIndice < this.estado.imagenes.length) {
            const img = new Image();
            img.src = this.estado.imagenes[siguienteIndice];
        }
    },
    
    // ============================================================================
    // NAVEGACIÓN - VERSIÓN CORREGIDA
    // ============================================================================
    
    imagenAnterior: function() {
        console.log("🔄 imagenAnterior() llamado");
        console.log("Imagen actual:", this.estado.imagenActual);
        console.log("Total imágenes:", this.estado.imagenes.length);
        
        if (this.estado.cargando) {
            console.log("⚠️ Está cargando, espera...");
            return;
        }
        
        if (this.estado.imagenActual > 0) {
            this.estado.imagenActual--;
            console.log("✅ Nueva imagen:", this.estado.imagenActual + 1);
            this.cargarImagenActual();
            this.resetZoom();
            
            // Feedback visual
            this.mostrarFeedback(`Página ${this.estado.imagenActual + 1} de ${this.estado.imagenes.length}`);
        } else {
            console.log("⚠️ Ya estás en la primera imagen");
            this.mostrarFeedback("✨ ¡Primera página!");
        }
    },
    
    imagenSiguiente: function() {
        console.log("🔄 imagenSiguiente() llamado");
        console.log("Imagen actual:", this.estado.imagenActual);
        console.log("Total imágenes:", this.estado.imagenes.length);
        
        if (this.estado.cargando) {
            console.log("⚠️ Está cargando, espera...");
            return;
        }
        
        if (this.estado.imagenActual < this.estado.imagenes.length - 1) {
            this.estado.imagenActual++;
            console.log("✅ Nueva imagen:", this.estado.imagenActual + 1);
            this.cargarImagenActual();
            this.resetZoom();
            
            // Feedback visual
            this.mostrarFeedback(`Página ${this.estado.imagenActual + 1} de ${this.estado.imagenes.length}`);
        } else {
            console.log("⚠️ Ya estás en la última imagen");
            this.mostrarFeedback("🎉 ¡Última página!");
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
        this.elementos.imagen.style.cursor = this.estado.zoomActual > 1.0 ? 'zoom-out' : 'zoom-in';
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
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        this.estado.modoPantallaCompleta = true;
    },
    
    salirPantallaCompleta: function() {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
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
        if (!this.estado.pantallaVisible) return;
        
        switch(event.key) {
            case 'ArrowLeft': case 'a': case 'A': 
                this.imagenAnterior(); 
                break;
            case 'ArrowRight': case 'd': case 'D': 
                this.imagenSiguiente(); 
                break;
            case '+': case '=': if (event.ctrlKey) this.zoomIn(); break;
            case '-': case '_': if (event.ctrlKey) this.zoomOut(); break;
            case '0': this.resetZoom(); break;
            case 'Escape': 
                if (this.estado.modoPantallaCompleta) this.salirPantallaCompleta();
                else this.ocultar();
                break;
            case 'f': case 'F': this.togglePantallaCompleta(); break;
        }
    },
    
    // ============================================================================
    // FEEDBACK VISUAL
    // ============================================================================
    
    mostrarFeedback: function(mensaje) {
        let feedback = document.getElementById('manga-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.id = 'manga-feedback';
            feedback.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px 20px;
                border-radius: 10px;
                font-weight: bold;
                z-index: 100000;
                display: none;
            `;
            document.body.appendChild(feedback);
        }
        
        feedback.textContent = mensaje;
        feedback.style.display = 'block';
        
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 1500);
    },
    
    // ============================================================================
    // PERSISTENCIA
    // ============================================================================
    
    guardarEstado: function() {
        try {
            localStorage.setItem('mangaViewerState', JSON.stringify({
                zoomActual: this.estado.zoomActual,
                ultimoSubcontenedor: this.estado.subcontenedorActual
            }));
        } catch (e) {
            console.error("Error guardando estado:", e);
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
            console.error("Error cargando estado:", e);
        }
    },
    
    // ============================================================================
    // AGREGAR BOTONES DE MANGA
    // ============================================================================
    
    agregarBotonesMangaATarjetas: function() {
        const tarjetas = document.querySelectorAll('.subcontenedor-card');
        
        tarjetas.forEach((tarjeta) => {
            const texto = tarjeta.querySelector('.subcontenedor-texto');
            if (!texto) return;
            
            const textoCompleto = texto.textContent;
            const match = textoCompleto.match(/(\d+)\.(\d+)/);
            if (!match) return;
            
            const subId = `sub${match[1]}_${match[2]}`;
            const tieneManga = this.mangaDatabase[subId] && this.mangaDatabase[subId].length > 0;
            
            const botonExistente = tarjeta.querySelector('.boton-manga');
            if (botonExistente) botonExistente.remove();
            
            const botonManga = document.createElement('button');
            botonManga.className = 'boton-manga';
            botonManga.innerHTML = tieneManga ? 
                `📖 Leer Manga (${this.mangaDatabase[subId].length} páginas)` : 
                '➕ Añadir Manga';
            botonManga.style.cssText = `
                background: linear-gradient(135deg, ${tieneManga ? '#9C27B0, #673AB7' : '#4a90e2, #7b68ee'});
                color: white;
                border: none;
                border-radius: 15px;
                padding: 12px 20px;
                margin-top: 15px;
                cursor: pointer;
                font-weight: bold;
                width: 100%;
                transition: all 0.3s ease;
                font-size: 1rem;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                border: 2px solid ${tieneManga ? '#ff6b9d' : '#4a90e2'};
                display: block !important;
            `;
            
            botonManga.onmouseover = function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = tieneManga ? 
                    '0 8px 20px rgba(156, 39, 176, 0.5)' : 
                    '0 8px 20px rgba(74, 144, 226, 0.5)';
            };
            
            botonManga.onmouseout = function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
            };
            
            botonManga.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                
                if (tieneManga) {
                    this.mostrarMangaDeSubcontenedor(subId);
                } else {
                    const urls = prompt(
                        `Introduce las URLs de las páginas del manga para ${subId} (separadas por comas):`,
                        'https://ejemplo.com/pag1.jpg, https://ejemplo.com/pag2.jpg'
                    );
                    
                    if (urls) {
                        const urlsArray = urls.split(',').map(url => url.trim()).filter(url => url);
                        if (urlsArray.length > 0) {
                            this.agregarMangaASubcontenedor(subId, urlsArray);
                            botonManga.innerHTML = `📖 Leer Manga (${this.mangaDatabase[subId].length} páginas)`;
                            botonManga.style.background = 'linear-gradient(135deg, #9C27B0, #673AB7)';
                            botonManga.style.border = '2px solid #ff6b9d';
                            alert(`✅ ${urlsArray.length} páginas añadidas a ${subId}`);
                        }
                    }
                }
            };
            
            tarjeta.appendChild(botonManga);
        });
    },
    
    agregarMangaASubcontenedor: function(subcontenedorId, urlsImagenes) {
        if (!this.mangaDatabase[subcontenedorId]) {
            this.mangaDatabase[subcontenedorId] = [];
        }
        
        this.mangaDatabase[subcontenedorId].push(...urlsImagenes);
        console.log("➕ Manga añadido a", subcontenedorId, "Total:", this.mangaDatabase[subcontenedorId].length, "páginas");
        
        this.agregarBotonesMangaATarjetas();
        return this.mangaDatabase[subcontenedorId].length;
    },
    
    obtenerMangaDeSubcontenedor: function(subcontenedorId) {
        return this.mangaDatabase[subcontenedorId] || [];
    },
    
    mostrarMangaDeSubcontenedor: function(subcontenedorId, indiceInicial = 0) {
        const imagenes = this.obtenerMangaDeSubcontenedor(subcontenedorId);
        
        if (imagenes.length === 0) {
            alert(`No hay páginas de manga disponibles para ${subcontenedorId}.`);
            return false;
        }
        
        this.mostrar(imagenes, indiceInicial, subcontenedorId);
        return true;
    },
    
    forzarActualizacionBotones: function() {
        this.agregarBotonesMangaATarjetas();
        return true;
    }
};

// ============================================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    mangaViewer.inicializar();
    window.mangaViewer = mangaViewer;
    
    console.log("📖 Manga Viewer cargado y listo");
    
    setTimeout(() => {
        mangaViewer.verificarYAgregarBotones();
    }, 1000);
});

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

window.mostrarManga = function(subcontenedorId, indiceInicial = 0) {
    if (mangaViewer && mangaViewer.mostrarMangaDeSubcontenedor) {
        return mangaViewer.mostrarMangaDeSubcontenedor(subcontenedorId, indiceInicial);
    }
    return false;
};

window.agregarBotonesManga = function() {
    if (mangaViewer && mangaViewer.agregarBotonesMangaATarjetas) {
        setTimeout(() => {
            mangaViewer.agregarBotonesMangaATarjetas();
        }, 100);
        return true;
    }
    return false;
};

// Función para test desde consola
window.testManga = function() {
    console.log("🔧 Testeando manga viewer...");
    if (window.mangaViewer) {
        console.log("✅ mangaViewer está disponible");
        console.log("Estado:", mangaViewer.estado);
        return true;
    }
    return false;
};
