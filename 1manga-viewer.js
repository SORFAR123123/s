// ============================================================================
// SISTEMA DE VISOR DE MANGA/IMÁGENES - COMO NHENTAI
// ============================================================================

const mangaViewer = {
    // ============================================================================
    // BASE DE DATOS DE IMÁGENES DE MANGA POR SUBCONTENEDOR
    // ============================================================================
    
    mangaDatabase: {
        // THE LAST SUMMER 1
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

        // TOONO ESUKE 2  
        'sub2_1': [
            'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
            'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large'
        ],
        
        'sub2_2': [
            'https://pbs.twimg.com/media/G7rKvyBXEAA81vi?format=png&name=small'
        ],
        
        'sub2_3': [],
        'sub2_4': [],
        
        // YAMADA
        'sub3_1': [
            'https://pbs.twimg.com/media/G67wm2LXMAATzxp?format=jpg&name=small'
        ],
        
        'sub3_2': [],
        'sub3_3': [],
        
        // LOS DEMÁS SUBCONTENEDORES (inicialmente vacíos)
        'sub4_1': [], 'sub4_2': [], 'sub4_3': [],
        'sub5_1': [], 'sub5_2': [], 'sub5_3': [],
        'sub6_1': [], 'sub6_2': [], 'sub6_3': [],
        'sub7_1': [], 'sub7_2': [], 'sub7_3': [],
        'sub8_1': [], 'sub8_2': [], 'sub8_3': [],
        'sub9_1': [], 'sub9_2': [], 'sub9_3': [],
        'sub10_1': [], 'sub10_2': [], 'sub10_3': []
    },
    
    // ============================================================================
    // CONFIGURACIÓN DEL VISOR
    // ============================================================================
    
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
    
    // ============================================================================
    // ESTADO DEL VISOR
    // ============================================================================
    
    estado: {
        imagenes: [],
        imagenActual: 0,
        zoomActual: 1.0,
        pantallaVisible: false,
        modoPantallaCompleta: false,
        cargando: false,
        subcontenedorActual: ''
    },
    
    // ============================================================================
    // ELEMENTOS DOM
    // ============================================================================
    
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
        console.log("📚 Manga database cargada:", Object.keys(this.mangaDatabase).length, "subcontenedores");
        
        this.crearEstructuraHTML();
        this.configurarEventos();
        this.cargarEstado();
        
        console.log("✅ Visor de manga listo");
        
        // Verificar y agregar botones inmediatamente
        this.verificarYAgregarBotones();
        
        // Configurar intervalo para verificar cada 500ms
        setInterval(() => this.verificarYAgregarBotones(), 500);
    },
    
    // ============================================================================
    // VERIFICAR Y AGREGAR BOTONES INMEDIATAMENTE
    // ============================================================================
    
    verificarYAgregarBotones: function() {
        const pantallaSubcontenedores = document.getElementById('pantalla-subcontenedores');
        if (pantallaSubcontenedores && pantallaSubcontenedores.classList.contains('activa')) {
            setTimeout(() => {
                this.agregarBotonesMangaATarjetas();
            }, 50);
        }
    },
    
    // ============================================================================
    // CREAR ESTRUCTURA HTML
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
        
        // Overlay para controles
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
        
        // Crear controles
        this.crearControles();
        
        // Crear loader
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
        this.elementos.contenedor.appendChild(this.elementos.overlay);
        this.elementos.contenedor.appendChild(this.elementos.controles);
        
        // Añadir al body
        document.body.appendChild(this.elementos.contenedor);
    },
    
    // ============================================================================
    // CREAR CONTROLES
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
        
        // Botones
        this.elementos.botones = document.createElement('div');
        this.elementos.botones.style.cssText = `display: flex; gap: 10px;`;
        
        const botonesHTML = `
            <button id="manga-prev" class="manga-prev" title="Imagen anterior (←)" style="background: #ff6b9d; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">◀ Anterior</button>
            <button id="manga-next" class="manga-next" title="Imagen siguiente (→)" style="background: #4a90e2; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">Siguiente ▶</button>
            <button id="manga-zoom-in" title="Acercar (Ctrl + +)" style="background: #00cc6a; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">➕</button>
            <button id="manga-zoom-out" title="Alejar (Ctrl + -)" style="background: #ff9800; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">➖</button>
            <button id="manga-zoom-reset" title="Restaurar zoom (0)" style="background: #7b68ee; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">↺</button>
            <button id="manga-close" title="Cerrar (ESC)" style="background: #ff4444; color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">✕ Cerrar</button>
        `;
        
        this.elementos.botones.innerHTML = botonesHTML;
        
        // Botón pantalla completa
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
        this.elementos.controles.appendChild(this.elementos.contador);
        this.elementos.controles.appendChild(this.elementos.botones);
    },
    
    // ============================================================================
    // CONFIGURAR EVENTOS - ¡VERSIÓN CORREGIDA!
    // ============================================================================
    
    configurarEventos: function() {
        console.log("🔧 Configurando eventos del manga viewer...");
        
        // USAR EVENT DELEGATION PARA TODOS LOS BOTONES
        document.addEventListener('click', (e) => {
            const target = e.target;
            
            if (target.id === 'manga-prev' || target.classList.contains('manga-prev')) {
                console.log("◀ Botón ANTERIOR clickeado");
                e.preventDefault();
                e.stopPropagation();
                this.imagenAnterior();
                return false;
            }
            
            if (target.id === 'manga-next' || target.classList.contains('manga-next')) {
                console.log("▶ Botón SIGUIENTE clickeado");
                e.preventDefault();
                e.stopPropagation();
                this.imagenSiguiente();
                return false;
            }
            
            if (target.id === 'manga-zoom-in') {
                this.zoomIn();
                return false;
            }
            
            if (target.id === 'manga-zoom-out') {
                this.zoomOut();
                return false;
            }
            
            if (target.id === 'manga-zoom-reset') {
                this.resetZoom();
                return false;
            }
            
            if (target.id === 'manga-close') {
                this.ocultar();
                return false;
            }
            
            if (target.id === 'manga-fullscreen') {
                this.togglePantallaCompleta();
                return false;
            }
        });
        
        // Eventos de teclado
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
        
        console.log("✅ Eventos configurados con event delegation");
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
        
        console.log("🖼️ Cargando imagen", indice + 1, "de", this.estado.imagenes.length);
        
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
    // NAVEGACIÓN - VERSIÓN MEJORADA CON LOGS
    // ============================================================================
    
    imagenAnterior: function() {
        console.log("🔄 Intentando ir a imagen ANTERIOR...");
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
        } else {
            console.log("⚠️ Ya estás en la primera imagen");
            this.mostrarFeedback("✨ ¡Primera página!");
        }
    },
    
    imagenSiguiente: function() {
        console.log("🔄 Intentando ir a imagen SIGUIENTE...");
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
        } else {
            console.log("⚠️ Ya estás en la última imagen");
            this.mostrarFeedback("🎉 ¡Última página!");
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
    // MANEJO DE TECLADO - VERSIÓN MEJORADA
    // ============================================================================
    
    manejarTeclado: function(event) {
        if (!this.estado.pantallaVisible) return;
        
        console.log("⌨️ Tecla presionada:", event.key);
        
        const teclasUsadas = ['ArrowLeft', 'ArrowRight', 'a', 'A', 'd', 'D', '+', '=', '-', '_', '0', 'Escape', 'f', 'F'];
        if (teclasUsadas.includes(event.key)) {
            event.preventDefault();
        }
        
        switch(event.key) {
            case 'ArrowLeft': 
            case 'a': 
            case 'A': 
                console.log("← Navegando con tecla IZQUIERDA");
                this.imagenAnterior(); 
                break;
                
            case 'ArrowRight': 
            case 'd': 
            case 'D': 
                console.log("→ Navegando con tecla DERECHA");
                this.imagenSiguiente(); 
                break;
                
            case '+': 
            case '=': 
                if (event.ctrlKey) {
                    console.log("➕ Zoom in con teclado");
                    this.zoomIn(); 
                }
                break;
                
            case '-': 
            case '_': 
                if (event.ctrlKey) {
                    console.log("➖ Zoom out con teclado");
                    this.zoomOut(); 
                }
                break;
                
            case '0': 
                console.log("↺ Reset zoom con teclado");
                this.resetZoom(); 
                break;
                
            case 'Escape': 
                console.log("⎋ Cerrando con Escape");
                if (this.estado.modoPantallaCompleta) this.salirPantallaCompleta();
                else this.ocultar();
                break;
                
            case 'f': 
            case 'F': 
                console.log("⛶ Toggle pantalla completa");
                this.togglePantallaCompleta(); 
                break;
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
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 15px 30px;
                border-radius: 15px;
                font-weight: bold;
                font-size: 1.2rem;
                z-index: 100000;
                display: none;
                animation: fadeInOut 2s ease;
            `;
            document.body.appendChild(feedback);
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
                }
            `;
            document.head.appendChild(style);
        }
        
        feedback.textContent = mensaje;
        feedback.style.display = 'block';
        
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 2000);
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
    // GESTIÓN DE LA BASE DE DATOS DE MANGA
    // ============================================================================
    
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
    
    obtenerTodosLosSubcontenedoresConManga: function() {
        const subcontenedores = [];
        Object.keys(this.mangaDatabase).forEach(key => {
            if (this.mangaDatabase[key] && this.mangaDatabase[key].length > 0) {
                subcontenedores.push({
                    id: key,
                    paginas: this.mangaDatabase[key].length
                });
            }
        });
        return subcontenedores;
    },
    
    // ============================================================================
    // API PÚBLICA
    // ============================================================================
    
    mostrarMangaDeSubcontenedor: function(subcontenedorId, indiceInicial = 0) {
        const imagenes = this.obtenerMangaDeSubcontenedor(subcontenedorId);
        
        if (imagenes.length === 0) {
            console.error("❌ No hay manga para", subcontenedorId);
            alert(`No hay páginas de manga disponibles para ${subcontenedorId}.\n\nPuedes añadir URLs usando:\n\nmangaViewer.agregarMangaASubcontenedor('${subcontenedorId}', ['url1.jpg', 'url2.jpg'])`);
            return false;
        }
        
        this.mostrar(imagenes, indiceInicial, subcontenedorId);
        return true;
    },
    
    mostrarImagenIndividual: function(urlImagen) {
        this.mostrar([urlImagen], 0);
    },
    
    agregarImagenes: function(urlsImagenes) {
        if (this.estado.subcontenedorActual) {
            return this.agregarMangaASubcontenedor(this.estado.subcontenedorActual, urlsImagenes);
        } else {
            this.estado.imagenes.push(...urlsImagenes);
            this.actualizarControles();
            return this.estado.imagenes.length;
        }
    },
    
    limpiarImagenes: function() {
        this.estado.imagenes = [];
        this.estado.imagenActual = 0;
    },
    
    obtenerEstado: function() {
        return {
            totalImagenes: this.estado.imagenes.length,
            imagenActual: this.estado.imagenActual + 1,
            zoomActual: this.estado.zoomActual,
            visible: this.estado.pantallaVisible,
            subcontenedorActual: this.estado.subcontenedorActual
        };
    },
    
    // ============================================================================
    // AGREGAR BOTONES DE MANGA MEJORADO
    // ============================================================================
    
    agregarBotonesMangaATarjetas: function() {
        const tarjetas = document.querySelectorAll('.subcontenedor-card');
        
        console.log("🔍 Buscando tarjetas de subcontenedores... Encontradas:", tarjetas.length);
        
        tarjetas.forEach((tarjeta, index) => {
            const texto = tarjeta.querySelector('.subcontenedor-texto');
            if (!texto) {
                return;
            }
            
            const textoCompleto = texto.textContent;
            const match = textoCompleto.match(/(\d+)\.(\d+)/);
            
            if (!match) {
                return;
            }
            
            const subId = `sub${match[1]}_${match[2]}`;
            const tieneManga = this.mangaDatabase[subId] && this.mangaDatabase[subId].length > 0;
            
            const botonExistente = tarjeta.querySelector('.boton-manga');
            if (botonExistente) {
                botonExistente.remove();
            }
            
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
                visibility: visible !important;
                opacity: 1 !important;
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
                
                console.log("🎯 Click en botón de manga para:", subId);
                
                if (tieneManga) {
                    this.mostrarMangaDeSubcontenedor(subId);
                } else {
                    const urls = prompt(
                        `Introduce las URLs de las páginas del manga para ${subId} (separadas por comas):\n\nEjemplo:\nhttps://ejemplo.com/pag1.jpg, https://ejemplo.com/pag2.jpg`,
                        'https://ejemplo.com/pag1.jpg, https://ejemplo.com/pag2.jpg'
                    );
                    
                    if (urls) {
                        const urlsArray = urls.split(',').map(url => url.trim()).filter(url => url);
                        if (urlsArray.length > 0) {
                            this.agregarMangaASubcontenedor(subId, urlsArray);
                            botonManga.innerHTML = `📖 Leer Manga (${this.mangaDatabase[subId].length} páginas)`;
                            botonManga.style.background = 'linear-gradient(135deg, #9C27B0, #673AB7)';
                            botonManga.style.border = '2px solid #ff6b9d';
                            alert(`✅ ${urlsArray.length} páginas añadidas a ${subId}. ¡Ahora puedes leer el manga!`);
                        }
                    }
                }
            };
            
            tarjeta.appendChild(botonManga);
        });
        
        console.log("🎉 Botones de manga procesados para", tarjetas.length, "tarjetas");
    },
    
    forzarActualizacionBotones: function() {
        console.log("🔄 Forzando actualización de botones de manga...");
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
// FUNCIONES GLOBALES PARA USAR DESDE OTROS ARCHIVOS
// ============================================================================

window.mostrarManga = function(subcontenedorId, indiceInicial = 0) {
    if (mangaViewer && mangaViewer.mostrarMangaDeSubcontenedor) {
        return mangaViewer.mostrarMangaDeSubcontenedor(subcontenedorId, indiceInicial);
    }
    return false;
};

window.mostrarImagenAmpliada = function(urlImagen) {
    if (mangaViewer && mangaViewer.mostrarImagenIndividual) {
        mangaViewer.mostrarImagenIndividual(urlImagen);
        return true;
    }
    return false;
};

window.agregarImagenesManga = function(subcontenedorId, urlsImagenes) {
    if (mangaViewer && mangaViewer.agregarMangaASubcontenedor) {
        return mangaViewer.agregarMangaASubcontenedor(subcontenedorId, urlsImagenes);
    }
    return false;
};

window.agregarBotonesManga = function() {
    console.log("🚀 Llamando a agregarBotonesManga desde main.js");
    if (mangaViewer && mangaViewer.agregarBotonesMangaATarjetas) {
        setTimeout(() => {
            mangaViewer.agregarBotonesMangaATarjetas();
        }, 100);
        return true;
    }
    return false;
};

window.actualizarBotonesManga = function() {
    if (mangaViewer && mangaViewer.forzarActualizacionBotones) {
        mangaViewer.forzarActualizacionBotones();
        return true;
    }
    return false;
};

// ============================================================================
// FUNCIONES DE TESTING DESDE CONSOLA
// ============================================================================

window.ejemploManga = function() {
    mostrarManga('sub1_1');
    console.log("📖 Ejemplo: Mostrando manga de sub1_1");
};

window.agregarPaginasManga = function(subcontenedorId) {
    const urls = prompt("Introduce URLs separadas por comas:");
    if (urls) {
        const urlsArray = urls.split(',').map(url => url.trim()).filter(url => url);
        if (urlsArray.length > 0) {
            const total = agregarImagenesManga(subcontenedorId, urlsArray);
            console.log(`✅ ${urlsArray.length} páginas añadidas a ${subcontenedorId}. Total: ${total}`);
        }
    }
};

window.verSubcontenedoresConManga = function() {
    if (mangaViewer) {
        const subcontenedores = mangaViewer.obtenerTodosLosSubcontenedoresConManga();
        console.log("📚 Subcontenedores con manga:");
        subcontenedores.forEach(sub => {
            console.log(`- ${sub.id}: ${sub.paginas} páginas`);
        });
        return subcontenedores;
    }
    return [];
};

window.verEstadoMangaViewer = function() {
    if (mangaViewer) {
        const estado = mangaViewer.obtenerEstado();
        console.log("📊 Estado MangaViewer:", estado);
        return estado;
    }
    return null;
};

window.cargarMangaDesdeArray = function(subcontenedorId, arrayUrls) {
    if (mangaViewer && arrayUrls && arrayUrls.length > 0) {
        mangaViewer.agregarMangaASubcontenedor(subcontenedorId, arrayUrls);
        console.log(`📚 ${arrayUrls.length} páginas cargadas en ${subcontenedorId}`);
        return true;
    }
    return false;
};

window.testAnterior = function() {
    console.log("🔧 Testeando botón anterior...");
    if (mangaViewer) {
        console.log("Imagen actual:", mangaViewer.estado.imagenActual);
        console.log("Total imágenes:", mangaViewer.estado.imagenes.length);
        mangaViewer.imagenAnterior();
    }
};
