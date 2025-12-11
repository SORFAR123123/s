// ============================================================================
// SISTEMA DE VISOR DE MANGA/IMÁGENES - COMO NHENTAI
// VERSIÓN COMPLETA + FIX DEFINITIVO DEL BOTÓN ANTERIOR
// ============================================================================

const mangaViewer = {
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
        'sub2_3': [], 
        'sub2_4': [
            'https://pbs.twimg.com/media/G7rOyUmWAAAXB8W?format=png&name=large',
            'https://pbs.twimg.com/media/G7rO_QLXsAAYpHB?format=png&name=large',
            'https://pbs.twimg.com/media/G7rPAWKW8AA1BN9?format=png&name=large',
            'https://pbs.twimg.com/media/G7rPBqkXIAA9kQp?format=png&name=large',
            'https://pbs.twimg.com/media/G7rPC0_XgAAIpjN?format=png&name=large',
            'https://pbs.twimg.com/media/G7rPFZ_WMAAfTgv?format=png&name=large',
            'https://pbs.twimg.com/media/G7s5oVcXUAAK7eQ?format=png&name=large',
            'https://pbs.twimg.com/media/G7s5wXBXwAA-MEU?format=png&name=large',
            'https://pbs.twimg.com/media/G7s53KcWwAAZSMV?format=png&name=large',
            'https://pbs.twimg.com/media/G7s5_e0XEAAO3Cc?format=png&name=large',
            'https://pbs.twimg.com/media/G7s6UlhXAAEXjUu?format=png&name=large',
            'https://pbs.twimg.com/media/G7s6Xi8XgAArmE-?format=png&name=large',
            'https://pbs.twimg.com/media/G7s6cL5WgAAyjRM?format=png&name=large',
            'https://pbs.twimg.com/media/G7s6vvqXsAIrQo2?format=png&name=large',
            'https://pbs.twimg.com/media/G7s68oAWcAA3uZ8?format=png&name=large',
            'https://pbs.twimg.com/media/G7s7BI5XgAAo0Jg?format=png&name=large',
             'https://pbs.twimg.com/media/G7s7GurXgAA4-gS?format=png&name=large',
            'https://pbs.twimg.com/media/G7s7NY4W4AEmxnn?format=png&name=large',
            'https://pbs.twimg.com/media/G7s7UHfWEAALpI6?format=png&name=large',
             'https://pbs.twimg.com/media/G7s7YzzWIAAHWVS?format=png&name=large',
            'https://pbs.twimg.com/media/G7s7d--WcAAe8jL?format=png&name=large',
            'https://pbs.twimg.com/media/G7s7jyrX0AAQEb0?format=png&name=large',
             'https://pbs.twimg.com/media/G7s7phqWQAAjviE?format=png&name=large',
            'https://pbs.twimg.com/media/G7s8WEaXYAEb5cX?format=png&name=large',
            'https://pbs.twimg.com/media/G7s8bjXXIAA1olf?format=png&name=large',
             'https://pbs.twimg.com/media/G7s9FmWW8AE5pDe?format=png&name=large',
            'https://pbs.twimg.com/media/G7s97p6WkAArJXQ?format=png&name=large',
            'https://pbs.twimg.com/media/G7s-KylXIAAvM53?format=png&name=large',
             'https://pbs.twimg.com/media/G7s-dxSWgAAWoFN?format=png&name=large',
            'https://pbs.twimg.com/media/G7s-w-vWcAAqwP1?format=png&name=large',
            'https://pbs.twimg.com/media/G7s_ED2W8AA7U2-?format=png&name=large',
             'https://pbs.twimg.com/media/G7s_f8KXUAAfFjr?format=png&name=large',
            'https://pbs.twimg.com/media/G7tBFEIXoAAg1aQ?format=png&name=large',
            'https://pbs.twimg.com/media/G7tBi6oWcAAcehx?format=png&name=large',
             'https://pbs.twimg.com/media/G7tBn5tXAAAMeVW?format=png&name=large',
            'https://pbs.twimg.com/media/G7tBsVaWIAAI6YB?format=png&name=large',
            'https://pbs.twimg.com/media/G7tBwgWWsAAW3vW?format=png&name=large',
              'https://pbs.twimg.com/media/G7tB7s1X0AAwx4q?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCAfNWcAA5qrA?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCFLEXEAAILpH?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCLOeW4AA4OAD?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCQ3jWsAAWJWj?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCWJ3XkAAg9z8?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCbd7WUAAJdNf?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCfWnXQAAfUTC?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCpDpXsAAoucT?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCuVHXsAAevzE?format=png&name=large',
              'https://pbs.twimg.com/media/G7tCys5WIAAqPqb?format=png&name=large',
              'https://pbs.twimg.com/media/G7tC6SRWIAA2mLt?format=png&name=large',
              'https://pbs.twimg.com/media/G7tDAhiXYAALanw?format=png&name=large',
            'https://pbs.twimg.com/media/G7tDF7WXsAExXGA?format=png&name=large'
            
        ],
        'sub3_1': [
            'https://pbs.twimg.com/media/G67wm2LXMAATzxp?format=jpg&name=small'
        ],
        'sub3_2': [
            
        ], 'sub3_3': [
            
        ],
        'sub4_1': [ 
            'https://pbs.twimg.com/media/G75ku8eWYAA7KbL?format=png&name=large',
              'https://pbs.twimg.com/media/G75kwJlWAAA5IAW?format=png&name=large',
              'https://pbs.twimg.com/media/G75kxGIWYAAo2_f?format=png&name=large',
              'https://pbs.twimg.com/media/G75lJM1X0AI6-Ka?format=png&name=large',
              'https://pbs.twimg.com/media/G75lKoaXsAAGuI0?format=png&name=large',
            'https://pbs.twimg.com/media/G75lL5JXwAERj0b?format=png&name=large'
            
        ], 'sub4_2': [
            
        ], 'sub4_3': [],
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

    inicializar: function() {
        this.crearEstructuraHTML();
        this.configurarEventos();
        this.cargarEstado();
        this.verificarYAgregarBotones();
        setInterval(() => this.verificarYAgregarBotones(), 500);
    },

    verificarYAgregarBotones: function() {
        const pantallaSubcontenedores = document.getElementById('pantalla-subcontenedores');
        if (pantallaSubcontenedores && pantallaSubcontenedores.classList.contains('activa')) {
            setTimeout(() => this.agregarBotonesMangaATarjetas(), 50);
        }
    },

    crearEstructuraHTML: function() {
        this.elementos.contenedor = document.createElement('div');
        this.elementos.contenedor.id = 'visor-manga';
        this.elementos.contenedor.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background-color: ${this.config.backgroundColor};
            z-index: 99999; display: none; overflow-y: auto; overflow-x: hidden;
        `;

        const imagenContainer = document.createElement('div');
        imagenContainer.style.cssText = `
            display: flex; justify-content: center; align-items: flex-start;
            min-height: 100vh; padding: 20px 0; position: relative; z-index: 0;
        `;

        this.elementos.imagen = document.createElement('img');
        this.elementos.imagen.id = 'imagen-manga-actual';
        this.elementos.imagen.style.cssText = `
            max-width: 100%; height: auto; display: block;
            transition: transform 0.2s ease; cursor: zoom-in;
        `;

        this.crearControles();

        const loader = document.createElement('div');
        loader.id = 'manga-loader';
        loader.innerHTML = '🔄';
        loader.style.cssText = `
            position: fixed; top: 50%; left: 50%;
            transform: translate(-50%, -50%); font-size: 3rem;
            z-index: 10; display: none;
        `;

        imagenContainer.appendChild(this.elementos.imagen);
        this.elementos.contenedor.appendChild(loader);
        this.elementos.contenedor.appendChild(imagenContainer);
        this.elementos.contenedor.appendChild(this.elementos.controles);

        document.body.appendChild(this.elementos.contenedor);
    },

    crearControles: function() {
        this.elementos.controles = document.createElement('div');
        this.elementos.controles.style.cssText = `
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            background: rgba(0,0,0,0.7); border-radius: 10px; padding: 10px 20px;
            display: flex; gap: 15px; align-items: center; z-index: 2;
        `;

        this.elementos.contador = document.createElement('div');
        this.elementos.contador.style = "color:white;font-weight:bold;min-width:100px;text-align:center";

        this.elementos.botones = document.createElement('div');
        this.elementos.botones.style = "display:flex;gap:10px;";

        const btn = (id, txt, color, fn) => {
            const b = document.createElement('button');
            b.id = id;
            b.innerHTML = txt;
            b.style.cssText = `
                background:${color};color:white;border:none;border-radius:5px;
                padding:8px 15px;cursor:pointer;font-weight:bold;
            `;
            b.onclick = fn;
            return b;
        };

        this.elementos.botones.appendChild(btn("manga-prev", "◀ Anterior", "#ff6b9d", () => this.imagenAnterior()));
        this.elementos.botones.appendChild(btn("manga-next", "Siguiente ▶", "#4a90e2", () => this.imagenSiguiente()));

        this.elementos.botones.appendChild(btn("manga-zoom-in", "➕", "#00cc6a", () => this.zoomIn()));
        this.elementos.botones.appendChild(btn("manga-zoom-out", "➖", "#ff9800", () => this.zoomOut()));
        this.elementos.botones.appendChild(btn("manga-zoom-reset", "↺", "#7b68ee", () => this.resetZoom()));
        this.elementos.botones.appendChild(btn("manga-close", "✕ Cerrar", "#ff4444", () => this.ocultar()));
        this.elementos.botones.appendChild(btn("manga-fullscreen", "⛶", "#9c27b0", () => this.togglePantallaCompleta()));

        this.elementos.controles.appendChild(this.elementos.contador);
        this.elementos.controles.appendChild(this.elementos.botones);
    },

    configurarEventos: function() {
        document.addEventListener('keydown', (e) => this.manejarTeclado(e));

        this.elementos.imagen.addEventListener('click', (e) => {
            if (e.ctrlKey) this.zoomIn();
            else if (e.shiftKey) this.zoomOut();
            else this.elementos.controles.style.opacity =
                this.elementos.controles.style.opacity === "0" ? "1" : "0";
        });

        this.elementos.contenedor.addEventListener("wheel", (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                e.deltaY < 0 ? this.zoomIn() : this.zoomOut();
            }
        }, { passive: false });

        this.elementos.imagen.addEventListener("dblclick", () => this.resetZoom());
    },

    mostrar: function(imagenes, indiceInicial = 0, subcontenedorId = '') {
        this.estado.imagenes = [...imagenes];
        this.estado.imagenActual = indiceInicial;
        this.estado.zoomActual = this.config.zoomDefault;
        this.estado.pantallaVisible = true;
        this.estado.subcontenedorActual = subcontenedorId;

        this.elementos.contenedor.style.display = "block";
        document.body.style.overflow = "hidden";

        this.cargarImagenActual();
        this.actualizarControles();
        this.guardarEstado();
    },

    ocultar: function() {
        this.estado.pantallaVisible = false;
        this.elementos.contenedor.style.display = "none";
        document.body.style.overflow = "";
        this.elementos.imagen.src = "";
    },

    cargarImagenActual: function() {
        if (!this.estado.imagenes.length) return;

        const loader = document.getElementById("manga-loader");
        loader.style.display = "block";
        this.estado.cargando = true;

        const url = this.estado.imagenes[this.estado.imagenActual];
        const img = new Image();

        img.onload = () => {
            this.elementos.imagen.src = url;
            this.aplicarZoom();
            loader.style.display = "none";
            this.estado.cargando = false;
            this.actualizarContador();
            this.preloadSiguiente();
        };

        img.onerror = () => {
            loader.style.display = "none";
            this.estado.cargando = false;
            this.elementos.imagen.src = "";
        };

        img.src = url;
    },

    preloadSiguiente: function() {
        const i = this.estado.imagenActual + 1;
        if (i < this.estado.imagenes.length) {
            new Image().src = this.estado.imagenes[i];
        }
    },

    // ============================================================================
    // 🔥 FIX DEFINITIVO AQUÍ → actualizarControles() después de cada cambio
    // ============================================================================

    imagenAnterior: function() {
        if (this.estado.cargando) return;

        if (this.estado.imagenActual > 0) {
            this.estado.imagenActual--;
            this.cargarImagenActual();
            this.resetZoom();
        }

        this.actualizarControles();  // ← FIX
    },

    imagenSiguiente: function() {
        if (this.estado.cargando) return;

        if (this.estado.imagenActual < this.estado.imagenes.length - 1) {
            this.estado.imagenActual++;
            this.cargarImagenActual();
            this.resetZoom();
        }

        this.actualizarControles();  // ← FIX
    },

    zoomIn: function() {
        const z = this.estado.zoomActual + this.config.zoomStep;
        if (z <= this.config.maxZoom) {
            this.estado.zoomActual = z;
            this.aplicarZoom();
        }
    },

    zoomOut: function() {
        const z = this.estado.zoomActual - this.config.zoomStep;
        if (z >= this.config.minZoom) {
            this.estado.zoomActual = z;
            this.aplicarZoom();
        }
    },

    resetZoom: function() {
        this.estado.zoomActual = this.config.zoomDefault;
        this.aplicarZoom();
    },

    aplicarZoom: function() {
        this.elementos.imagen.style.transform = `scale(${this.estado.zoomActual})`;
    },

    togglePantallaCompleta: function() {
        if (!this.estado.modoPantallaCompleta) {
            this.elementos.contenedor.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        this.estado.modoPantallaCompleta = !this.estado.modoPantallaCompleta;
    },

    actualizarContador: function() {
        this.elementos.contador.innerHTML = `
            <span style="color:#ff6b9d">${this.estado.imagenActual + 1}</span>
            <span style="color:#ccc"> / </span>
            <span style="color:#4a90e2">${this.estado.imagenes.length}</span>
        `;
    },

    actualizarControles: function() {
        const prev = document.getElementById("manga-prev");
        const next = document.getElementById("manga-next");

        prev.disabled = this.estado.imagenActual === 0;
        next.disabled = this.estado.imagenActual === this.estado.imagenes.length - 1;

        prev.style.opacity = prev.disabled ? "0.5" : "1";
        next.style.opacity = next.disabled ? "0.5" : "1";

        this.actualizarContador();
    },

    manejarTeclado: function(e) {
        if (!this.estado.pantallaVisible) return;

        switch(e.key) {
            case "ArrowLeft": this.imagenAnterior(); break;
            case "ArrowRight": this.imagenSiguiente(); break;
            case "Escape": this.ocultar(); break;
        }
    },

    guardarEstado: function() {
        localStorage.setItem("mangaViewerState", JSON.stringify({
            zoomActual: this.estado.zoomActual,
            ultimoSubcontenedor: this.estado.subcontenedorActual
        }));
    },

    cargarEstado: function() {
        const data = localStorage.getItem("mangaViewerState");
        if (!data) return;

        const s = JSON.parse(data);
        this.estado.zoomActual = s.zoomActual ?? this.config.zoomDefault;
    },

    agregarBotonesMangaATarjetas: function() {
        const tarjetas = document.querySelectorAll('.subcontenedor-card');

        tarjetas.forEach((t) => {
            const texto = t.querySelector('.subcontenedor-texto');
            if (!texto) return;

            const m = texto.textContent.match(/(\d+)\.(\d+)/);
            if (!m) return;

            const subId = `sub${m[1]}_${m[2]}`;
            const tiene = this.mangaDatabase[subId]?.length > 0;

            const old = t.querySelector('.boton-manga');
            if (old) old.remove();

            const btn = document.createElement("button");
            btn.className = "boton-manga";
            btn.innerHTML = tiene
                ? `📖 Leer Manga (${this.mangaDatabase[subId].length} páginas)`
                : "➕ Añadir Manga";

            btn.style.cssText = `
                background:linear-gradient(135deg,${tiene ? "#9C27B0,#673AB7" : "#4a90e2,#7b68ee"});
                color:white;border:none;border-radius:15px;padding:12px 20px;
                margin-top:15px;cursor:pointer;font-weight:bold;width:100%;
                border:2px solid ${tiene ? "#ff6b9d" : "#4a90e2"};
            `;

            btn.onclick = (e) => {
                e.stopPropagation();
                if (tiene) return this.mostrarMangaDeSubcontenedor(subId);

                const urls = prompt("Introduce URLs separadas por comas:");
                if (!urls) return;

                const arr = urls.split(",").map(x => x.trim()).filter(Boolean);
                if (!arr.length) return;

                this.agregarMangaASubcontenedor(subId, arr);
                btn.innerHTML = `📖 Leer Manga (${this.mangaDatabase[subId].length} páginas)`;
            };

            t.appendChild(btn);
        });
    },

    agregarMangaASubcontenedor: function(id, urls) {
        if (!this.mangaDatabase[id]) this.mangaDatabase[id] = [];
        this.mangaDatabase[id].push(...urls);
        this.agregarBotonesMangaATarjetas();
    },

    obtenerMangaDeSubcontenedor: function(id) {
        return this.mangaDatabase[id] || [];
    },

    mostrarMangaDeSubcontenedor: function(id, idx = 0) {
        const imgs = this.obtenerMangaDeSubcontenedor(id);
        if (!imgs.length) {
            alert(`No hay páginas para ${id}`);
            return false;
        }
        this.mostrar(imgs, idx, id);
        return true;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    mangaViewer.inicializar();
    window.mangaViewer = mangaViewer;
});
