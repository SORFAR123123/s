// ============================================================================
// SISTEMA MANGA PRINCIPAL
// ============================================================================

const sistemaManga = {
    estado: {
        mangaActual: null,
        paginaActual: 0
    },
    
    // Base de datos de mangas
    mangas: {
        'sub1_1': {
            id: 'sub1_1',
            titulo: "The Last Summer - Capítulo 1",
            imagenes: [
                "https://pbs.twimg.com/media/G7m3cP9WsAAhwzb?format=jpg&name=large",
                "https://pbs.twimg.com/media/G7rvtWAWcAAohDK?format=png&name=large",
                "https://pbs.twimg.com/media/G7rvtWAWcAAohDK?format=png&name=large",
                "https://via.placeholder.com/800x1200/FFD700/000000?text=P%C3%A1gina+4",
                "https://via.placeholder.com/800x1200/FF9800/FFFFFF?text=P%C3%A1gina+5"
            ],
            descripcion: "El comienzo de una historia de verano inolvidable",
            paginas: 5
        },
        'sub1_2': {
            id: 'sub1_2',
            titulo: "The Last Summer - Capítulo 2",
            imagenes: [
                "https://via.placeholder.com/800x1200/9C27B0/FFFFFF?text=P%C3%A1gina+1",
                "https://via.placeholder.com/800x1200/00BCD4/000000?text=P%C3%A1gina+2",
                "https://via.placeholder.com/800x1200/FF5722/FFFFFF?text=P%C3%A1gina+3"
            ],
            descripcion: "La continuación de la aventura estival",
            paginas: 3
        },
        'sub2_1': {
            id: 'sub2_1',
            titulo: "The Last Summer 2 - Capítulo 1",
            imagenes: [
                "https://via.placeholder.com/800x1200/673AB7/FFFFFF?text=P%C3%A1gina+1",
                "https://via.placeholder.com/800x1200/009688/FFFFFF?text=P%C3%A1gina+2",
                "https://via.placeholder.com/800x1200/E91E63/FFFFFF?text=P%C3%A1gina+3",
                "https://via.placeholder.com/800x1200/3F51B5/FFFFFF?text=P%C3%A1gina+4"
            ],
            descripcion: "Nuevos personajes, nuevas aventuras",
            paginas: 4
        }
    },
    
    // Función para iniciar lectura de manga
    iniciarLecturaManga: function(subcontenedorId) {
        console.log(`📖 Iniciando lectura de manga: ${subcontenedorId}`);
        
        // Buscar el manga o usar uno por defecto
        const manga = this.mangas[subcontenedorId] || this.crearMangaDefault(subcontenedorId);
        
        // Mostrar pantalla del manga
        this.mostrarPantallaManga(manga);
    },
    
    // Crear manga por defecto si no existe
    crearMangaDefault: function(subcontenedorId) {
        return {
            id: subcontenedorId,
            titulo: `Manga de ${subcontenedorId}`,
            imagenes: [
                "https://via.placeholder.com/800x1200/333333/FFFFFF?text=MANGA+EN+DESARROLLO",
                "https://via.placeholder.com/800x1200/666666/FFFFFF?text=P%C3%A1gina+1",
                "https://via.placeholder.com/800x1200/999999/000000?text=P%C3%A1gina+2"
            ],
            descripcion: "Este manga está en desarrollo. ¡Próximamente más páginas!",
            paginas: 3
        };
    },
    
    // Función principal para mostrar el manga
    mostrarPantallaManga: function(manga) {
        this.estado.mangaActual = manga;
        this.estado.paginaActual = 0;
        
        // Crear HTML del lector de manga
        const html = `
            <div class="pantalla activa" id="pantalla-manga">
                <div class="contenedor-manga">
                    <!-- Barra superior -->
                    <div class="barra-superior-manga">
                        <div class="info-manga">
                            <button class="boton-volver-manga" onclick="sistemaManga.volverAlMenu()">
                                ← Volver
                            </button>
                            <div class="titulo-manga">${manga.titulo}</div>
                            <button class="boton-menu-manga" onclick="sistemaManga.mostrarMenuManga()">
                                ☰ Menú
                            </button>
                        </div>
                        
                        <div class="controles-manga">
                            <div class="contador-pagina">
                                Página: <span id="numero-pagina-actual">1</span> / <span id="total-paginas">${manga.paginas}</span>
                            </div>
                            <div class="progreso-lectura">
                                <div class="barra-progreso-manga">
                                    <div class="barra-progreso-fill-manga" id="barra-progreso-manga" style="width: ${(1/manga.paginas)*100}%"></div>
                                </div>
                                <span class="porcentaje-lectura" id="porcentaje-lectura">${Math.round((1/manga.paginas)*100)}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contenedor de lectura -->
                    <div class="contenedor-lectura" onclick="sistemaManga.siguientePagina()">
                        <div class="imagen-manga-container">
                            <div class="contenedor-imagen-zoom" id="contenedor-imagen-zoom">
                                <img src="${manga.imagenes[0]}" 
                                     alt="Página 1" 
                                     class="imagen-manga"
                                     id="imagen-manga-actual">
                                <div class="indicador-click">
                                    <div class="icono-click">🔍</div>
                                    <p>Doble clic para zoom • Rueda para ajustar • Arrastra para mover</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Navegación rápida -->
                    <div class="navegacion-rapida">
                        <button class="boton-nav" onclick="sistemaManga.paginaAnterior(); event.stopPropagation();">
                            ← Anterior
                        </button>
                        <button class="boton-nav-principal" onclick="sistemaManga.siguientePagina(); event.stopPropagation();">
                            Siguiente Página →
                        </button>
                        <button class="boton-nav" onclick="sistemaManga.verEnPantallaCompleta(); event.stopPropagation();" 
                                style="background: linear-gradient(135deg, #ff9800, #ff5722);">
                            ⛶ Pantalla Completa (F)
                        </button>
                    </div>
                    
                    <!-- Controles de salto rápido -->
                    <div class="controles-salto">
                        <div class="grupo-saltos">
                            <button class="boton-salto" onclick="sistemaManga.saltarAPagina(0)">Primera</button>
                            <button class="boton-salto" onclick="sistemaManga.saltarAPagina(${Math.floor(manga.paginas/4)})">25%</button>
                            <button class="boton-salto" onclick="sistemaManga.saltarAPagina(${Math.floor(manga.paginas/2)})">50%</button>
                            <button class="boton-salto" onclick="sistemaManga.saltarAPagina(${Math.floor(manga.paginas*3/4)})">75%</button>
                            <button class="boton-salto" onclick="sistemaManga.saltarAPagina(${manga.paginas-1})">Última</button>
                        </div>
                    </div>
                    
                    <!-- Miniaturas -->
                    <div class="miniaturas-container">
                        <h4>Miniaturas de páginas</h4>
                        <div class="miniaturas-grid" id="miniaturas-grid">
                            <!-- Las miniaturas se generarán dinámicamente -->
                        </div>
                    </div>
                    
                    <!-- Información completa del manga -->
                    <div class="info-completa-manga">
                        <h3>Información del Manga</h3>
                        <div class="descripcion-manga">
                            ${manga.descripcion}
                        </div>
                        <div class="estadisticas-manga">
                            <div class="estadistica">
                                <span class="estadistica-label">Total de páginas</span>
                                <span class="estadistica-valor">${manga.paginas}</span>
                            </div>
                            <div class="estadistica">
                                <span class="estadistica-label">Página actual</span>
                                <span class="estadistica-valor" id="pagina-actual-estadistica">1</span>
                            </div>
                            <div class="estadistica">
                                <span class="estadistica-label">Progreso</span>
                                <span class="estadistica-valor" id="progreso-estadistica">${Math.round((1/manga.paginas)*100)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Reemplazar el contenido del body con el manga
        document.body.innerHTML = html;
        
        // Generar miniaturas
        this.generarMiniaturas();
        
        // Inicializar sistema de zoom
        setTimeout(() => {
            if (typeof sistemaZoomManga !== 'undefined') {
                sistemaZoomManga.inicializarZoom();
            }
        }, 100);
        
        console.log("📚 Manga cargado:", manga.titulo);
    },
    
    // Generar miniaturas de páginas
    generarMiniaturas: function() {
        const miniaturasGrid = document.getElementById('miniaturas-grid');
        if (!miniaturasGrid || !this.estado.mangaActual) return;
        
        miniaturasGrid.innerHTML = '';
        
        this.estado.mangaActual.imagenes.forEach((imagen, index) => {
            const miniatura = document.createElement('div');
            miniatura.className = 'miniatura';
            if (index === this.estado.paginaActual) {
                miniatura.classList.add('miniatura-activa');
            }
            miniatura.onclick = (e) => {
                e.stopPropagation();
                this.saltarAPagina(index);
            };
            
            miniatura.innerHTML = `
                <img src="${imagen}" alt="Página ${index + 1}" loading="lazy">
                <div class="numero-miniatura">${index + 1}</div>
            `;
            
            miniaturasGrid.appendChild(miniatura);
        });
    },
    
    // Navegación entre páginas
    siguientePagina: function() {
        if (!this.estado.mangaActual) return;
        
        if (this.estado.paginaActual < this.estado.mangaActual.paginas - 1) {
            this.estado.paginaActual++;
            this.actualizarPagina();
        } else {
            // Si es la última página, volver al menú
            this.mostrarMensajeFinal();
        }
    },
    
    paginaAnterior: function() {
        if (!this.estado.mangaActual || this.estado.paginaActual === 0) return;
        
        this.estado.paginaActual--;
        this.actualizarPagina();
    },
    
    saltarAPagina: function(numeroPagina) {
        if (!this.estado.mangaActual || numeroPagina < 0 || numeroPagina >= this.estado.mangaActual.paginas) return;
        
        this.estado.paginaActual = numeroPagina;
        this.actualizarPagina();
    },
    
    // Actualizar página actual
    actualizarPagina: function() {
        const manga = this.estado.mangaActual;
        const pagina = this.estado.paginaActual;
        
        // Actualizar imagen
        const imagen = document.getElementById('imagen-manga-actual');
        if (imagen) {
            imagen.src = manga.imagenes[pagina];
            imagen.alt = `Página ${pagina + 1}`;
        }
        
        // Actualizar contadores
        const contadorActual = document.getElementById('numero-pagina-actual');
        const contadorEstadistica = document.getElementById('pagina-actual-estadistica');
        const totalPaginas = document.getElementById('total-paginas');
        const barraProgreso = document.getElementById('barra-progreso-manga');
        const porcentajeLectura = document.getElementById('porcentaje-lectura');
        const progresoEstadistica = document.getElementById('progreso-estadistica');
        
        if (contadorActual) contadorActual.textContent = pagina + 1;
        if (contadorEstadistica) contadorEstadistica.textContent = pagina + 1;
        if (totalPaginas) totalPaginas.textContent = manga.paginas;
        
        const porcentaje = Math.round(((pagina + 1) / manga.paginas) * 100);
        if (barraProgreso) barraProgreso.style.width = `${porcentaje}%`;
        if (porcentajeLectura) porcentajeLectura.textContent = `${porcentaje}%`;
        if (progresoEstadistica) progresoEstadistica.textContent = `${porcentaje}%`;
        
        // Actualizar miniaturas
        this.generarMiniaturas();
        
        // Reiniciar zoom si está activo
        if (typeof sistemaZoomManga !== 'undefined' && sistemaZoomManga.zoomActivado) {
            sistemaZoomManga.resetearZoom();
        }
    },
    
    // Mostrar mensaje final
    mostrarMensajeFinal: function() {
        const html = `
            <div class="pantalla activa" id="pantalla-final-manga">
                <div class="contenedor" style="text-align: center; padding: 50px;">
                    <h1 style="color: #ffd700;">🎉 ¡Manga Completado!</h1>
                    <div class="mensaje-exito" style="margin: 30px 0;">
                        <h3>Has terminado de leer "${this.estado.mangaActual.titulo}"</h3>
                        <p>Total de páginas leídas: ${this.estado.mangaActual.paginas}</p>
                        <p style="color: #00ff88; font-weight: bold;">+2 S/. por completar un manga</p>
                    </div>
                    
                    <div style="display: flex; gap: 20px; justify-content: center; margin-top: 40px;">
                        <button class="boton-principal" onclick="sistemaManga.volverAlMenu()">
                            🏠 Volver al Menú
                        </button>
                        <button class="boton-terciario" onclick="sistemaManga.repetirManga()">
                            🔁 Leer de nuevo
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.innerHTML = html;
        
        // Dar recompensa económica
        if (typeof sistemaEconomia !== 'undefined') {
            sistemaEconomia.agregarDinero(2, "Manga completado");
        }
    },
    
    // Volver al menú principal
    volverAlMenu: function() {
        // Recargar la aplicación completa
        location.reload();
    },
    
    // Mostrar menú del manga
    mostrarMenuManga: function() {
        const html = `
            <div class="pantalla activa" id="pantalla-menu-manga">
                <div class="contenedor" style="text-align: center; padding: 50px;">
                    <h1 style="color: #ffd700;">Menú del Manga</h1>
                    
                    <div style="margin: 40px 0;">
                        <button class="boton-principal" onclick="sistemaManga.continuarLeyendo()" style="margin: 15px; width: 300px;">
                            ▶ Continuar leyendo
                        </button>
                        <button class="boton-terciario" onclick="sistemaManga.saltarAPagina(0)" style="margin: 15px; width: 300px;">
                            ⏪ Volver al inicio
                        </button>
                        <button class="boton-secundario" onclick="sistemaManga.volverAlMenu()" style="margin: 15px; width: 300px;">
                            🏠 Salir al menú
                        </button>
                    </div>
                    
                    <div class="info-completa-manga" style="margin-top: 30px;">
                        <h3>${this.estado.mangaActual.titulo}</h3>
                        <p>${this.estado.mangaActual.descripcion}</p>
                        <p>Página actual: ${this.estado.paginaActual + 1} de ${this.estado.mangaActual.paginas}</p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.innerHTML = html;
    },
    
    // Continuar leyendo desde el menú
    continuarLeyendo: function() {
        this.mostrarPantallaManga(this.estado.mangaActual);
        this.actualizarPagina();
    },
    
    // Repetir manga
    repetirManga: function() {
        this.estado.paginaActual = 0;
        this.mostrarPantallaManga(this.estado.mangaActual);
    }
};

// ============================================================================
// SISTEMA DE ZOOM ESTILO nhentai
// ============================================================================

const sistemaZoomManga = {
    zoomActivado: false,
    escalaActual: 1.0,
    escalaMaxima: 3.0,
    escalaMinima: 1.0,
    escalaPaso: 0.2,
    posicionX: 0,
    posicionY: 0,
    arrastrando: false,
    ultimoX: 0,
    ultimoY: 0,
    
    // Inicializar zoom
    inicializarZoom: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        const imagenManga = document.getElementById('imagen-manga-actual');
        
        if (!contenedorImagen || !imagenManga) return;
        
        // Estilo inicial
        contenedorImagen.style.cssText = `
            position: relative;
            overflow: hidden;
            cursor: grab;
            width: 100%;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `;
        
        imagenManga.style.cssText = `
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: transform 0.2s ease-out;
            transform-origin: center center;
            user-select: none;
            -webkit-user-drag: none;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        `;
        
        // Eventos para imagen
        imagenManga.addEventListener('dblclick', (e) => this.alternarZoomCompleto(e));
        imagenManga.addEventListener('wheel', (e) => this.zoomConRueda(e));
        imagenManga.addEventListener('mousedown', (e) => this.iniciarArrastre(e));
        
        // Eventos globales
        document.addEventListener('mousemove', (e) => this.arrastrarImagen(e));
        document.addEventListener('mouseup', () => this.detenerArrastre());
        document.addEventListener('keydown', (e) => this.controlesTeclado(e));
        
        // Agregar controles visuales
        this.agregarControlesZoom();
        this.agregarIndicadorZoom();
        
        console.log("🔍 Sistema de zoom estilo nhentai inicializado");
    },
    
    // Alternar zoom completo (doble clic)
    alternarZoomCompleto: function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        const imagen = event.target;
        
        if (!this.zoomActivado) {
            // Activar zoom al máximo
            this.zoomActivado = true;
            this.escalaActual = this.escalaMaxima;
            
            // Centrar en el punto del clic
            const rect = imagen.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            
            imagen.style.transformOrigin = `${x}% ${y}%`;
            imagen.style.transform = `scale(${this.escalaActual})`;
            imagen.parentElement.style.cursor = 'grabbing';
            
            this.mostrarOverlay();
            
        } else {
            // Desactivar zoom
            this.resetearZoom();
        }
        
        this.actualizarIndicadorZoom();
    },
    
    // Zoom con rueda del mouse
    zoomConRueda: function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        const imagen = event.target;
        const delta = event.deltaY > 0 ? -this.escalaPaso : this.escalaPaso;
        const nuevaEscala = Math.max(this.escalaMinima, Math.min(this.escalaMaxima, this.escalaActual + delta));
        
        if (nuevaEscala !== this.escalaActual) {
            this.escalaActual = nuevaEscala;
            this.zoomActivado = this.escalaActual > this.escalaMinima;
            
            // Calcular origen del zoom (centro del viewport)
            const rect = imagen.getBoundingClientRect();
            const contRect = imagen.parentElement.getBoundingClientRect();
            
            const x = ((event.clientX - contRect.left) / contRect.width) * 100;
            const y = ((event.clientY - contRect.top) / contRect.height) * 100;
            
            imagen.style.transformOrigin = `${x}% ${y}%`;
            imagen.style.transform = `scale(${this.escalaActual}) translate(${this.posicionX}px, ${this.posicionY}px)`;
            
            if (this.zoomActivado) {
                imagen.parentElement.style.cursor = 'grabbing';
                this.mostrarOverlay();
            } else {
                imagen.parentElement.style.cursor = 'grab';
                this.ocultarOverlay();
                this.posicionX = 0;
                this.posicionY = 0;
            }
            
            this.actualizarIndicadorZoom();
        }
    },
    
    // Iniciar arrastre
    iniciarArrastre: function(event) {
        if (this.zoomActivado && event.button === 0) { // Botón izquierdo
            this.arrastrando = true;
            this.ultimoX = event.clientX;
            this.ultimoY = event.clientY;
            event.target.parentElement.style.cursor = 'grabbing';
        }
    },
    
    // Arrastrar imagen
    arrastrarImagen: function(event) {
        if (!this.arrastrando || !this.zoomActivado) return;
        
        event.preventDefault();
        
        const deltaX = event.clientX - this.ultimoX;
        const deltaY = event.clientY - this.ultimoY;
        
        this.posicionX += deltaX;
        this.posicionY += deltaY;
        
        // Límites para el arrastre (evita que se salga demasiado)
        const maxDrag = 200;
        this.posicionX = Math.max(-maxDrag, Math.min(maxDrag, this.posicionX));
        this.posicionY = Math.max(-maxDrag, Math.min(maxDrag, this.posicionY));
        
        const imagen = document.getElementById('imagen-manga-actual');
        if (imagen) {
            imagen.style.transform = `scale(${this.escalaActual}) translate(${this.posicionX}px, ${this.posicionY}px)`;
        }
        
        this.ultimoX = event.clientX;
        this.ultimoY = event.clientY;
    },
    
    // Detener arrastre
    detenerArrastre: function() {
        this.arrastrando = false;
        const contenedor = document.querySelector('.contenedor-imagen-zoom');
        if (contenedor && this.zoomActivado) {
            contenedor.style.cursor = 'grabbing';
        }
    },
    
    // Controles de teclado
    controlesTeclado: function(event) {
        if (!this.zoomActivado) return;
        
        const paso = 20;
        switch(event.key) {
            case 'ArrowUp':
                event.preventDefault();
                this.posicionY += paso;
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.posicionY -= paso;
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.posicionX += paso;
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.posicionX -= paso;
                break;
            case 'Escape':
                event.preventDefault();
                this.resetearZoom();
                break;
            case '+':
            case '=':
                event.preventDefault();
                this.zoomIn();
                break;
            case '-':
                event.preventDefault();
                this.zoomOut();
                break;
            case '0':
                event.preventDefault();
                this.resetearZoom();
                break;
            case 'f':
            case 'F':
                event.preventDefault();
                sistemaManga.verEnPantallaCompleta();
                break;
        }
        
        // Aplicar transformación
        const imagen = document.getElementById('imagen-manga-actual');
        if (imagen) {
            imagen.style.transform = `scale(${this.escalaActual}) translate(${this.posicionX}px, ${this.posicionY}px)`;
        }
    },
    
    // Zoom in
    zoomIn: function() {
        if (this.escalaActual < this.escalaMaxima) {
            this.escalaActual = Math.min(this.escalaMaxima, this.escalaActual + this.escalaPaso);
            this.aplicarZoom();
        }
    },
    
    // Zoom out
    zoomOut: function() {
        if (this.escalaActual > this.escalaMinima) {
            this.escalaActual = Math.max(this.escalaMinima, this.escalaActual - this.escalaPaso);
            this.aplicarZoom();
        }
    },
    
    // Aplicar zoom
    aplicarZoom: function() {
        const imagen = document.getElementById('imagen-manga-actual');
        if (!imagen) return;
        
        this.zoomActivado = this.escalaActual > this.escalaMinima;
        
        imagen.style.transform = `scale(${this.escalaActual}) translate(${this.posicionX}px, ${this.posicionY}px)`;
        
        if (this.zoomActivado) {
            imagen.parentElement.style.cursor = 'grabbing';
            this.mostrarOverlay();
        } else {
            imagen.parentElement.style.cursor = 'grab';
            this.ocultarOverlay();
            this.posicionX = 0;
            this.posicionY = 0;
        }
        
        this.actualizarIndicadorZoom();
    },
    
    // Resetear zoom
    resetearZoom: function() {
        this.escalaActual = this.escalaMinima;
        this.posicionX = 0;
        this.posicionY = 0;
        this.zoomActivado = false;
        
        const imagen = document.getElementById('imagen-manga-actual');
        const contenedor = document.querySelector('.contenedor-imagen-zoom');
        
        if (imagen) {
            imagen.style.transform = `scale(${this.escalaActual})`;
            imagen.style.transformOrigin = 'center center';
            imagen.parentElement.style.cursor = 'grab';
        }
        
        if (contenedor) {
            contenedor.style.cursor = 'grab';
        }
        
        this.ocultarOverlay();
        this.actualizarIndicadorZoom();
    },
    
    // Mostrar overlay
    mostrarOverlay: function() {
        let overlay = document.getElementById('overlay-zoom-nhentai');
        
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'overlay-zoom-nhentai';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                z-index: 9998;
                pointer-events: none;
            `;
            document.body.appendChild(overlay);
        }
        
        overlay.style.display = 'block';
    },
    
    // Ocultar overlay
    ocultarOverlay: function() {
        const overlay = document.getElementById('overlay-zoom-nhentai');
        if (overlay) {
            overlay.style.display = 'none';
        }
    },
    
    // Agregar controles de zoom
    agregarControlesZoom: function() {
        const navegacion = document.querySelector('.navegacion-rapida');
        if (!navegacion) return;
        
        // Verificar si ya existen controles
        if (document.querySelector('.controles-zoom-nhentai')) return;
        
        const controlesZoom = document.createElement('div');
        controlesZoom.className = 'controles-zoom-nhentai';
        controlesZoom.style.cssText = `
            display: flex;
            gap: 10px;
            margin: 15px auto;
            padding: 10px 20px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 25px;
            justify-content: center;
            align-items: center;
            max-width: 400px;
            border: 1px solid #444;
        `;
        
        controlesZoom.innerHTML = `
            <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.zoomOut()" title="Alejar (Rueda -)">
                🔍−
            </button>
            <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.resetearZoom()" title="Restablecer zoom (0)">
                ↺
            </button>
            <span class="escala-zoom-nhentai" style="color: #ffd700; font-weight: bold; min-width: 70px; text-align: center;">
                100%
            </span>
            <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.zoomIn()" title="Acercar (Rueda +)">
                🔍+
            </button>
            <button class="boton-zoom-nhentai" onclick="sistemaManga.verEnPantallaCompleta()" title="Pantalla completa (F)">
                ⛶
            </button>
        `;
        
        // Insertar después de la navegación
        navegacion.parentNode.insertBefore(controlesZoom, navegacion.nextSibling);
    },
    
    // Agregar indicador de zoom
    agregarIndicadorZoom: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen) return;
        
        const indicador = document.createElement('div');
        indicador.className = 'indicador-zoom-nhentai';
        indicador.style.cssText = `
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: #00ff88;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            font-family: monospace;
            z-index: 10;
            border: 1px solid #00ff88;
            display: none;
        `;
        indicador.textContent = 'Zoom: 100%';
        
        contenedorImagen.appendChild(indicador);
        
        // Mostrar/ocultar al hacer hover
        contenedorImagen.addEventListener('mouseenter', () => {
            if (this.zoomActivado) {
                indicador.style.display = 'block';
            }
        });
        
        contenedorImagen.addEventListener('mouseleave', () => {
            indicador.style.display = 'none';
        });
    },
    
    // Actualizar indicador de zoom
    actualizarIndicadorZoom: function() {
        const indicador = document.querySelector('.escala-zoom-nhentai');
        const indicadorFlotante = document.querySelector('.indicador-zoom-nhentai');
        const porcentaje = Math.round(this.escalaActual * 100);
        
        if (indicador) {
            indicador.textContent = `${porcentaje}%`;
        }
        
        if (indicadorFlotante) {
            indicadorFlotante.textContent = `Zoom: ${porcentaje}%`;
            indicadorFlotante.style.display = this.zoomActivado ? 'block' : 'none';
        }
    }
};

// ============================================================================
// FUNCIÓN DE PANTALLA COMPLETA ESTILO nhentai
// ============================================================================

// Agregar función de pantalla completa al sistema manga
sistemaManga.verEnPantallaCompleta = function() {
    const manga = this.estado.mangaActual;
    if (!manga) return;
    
    const paginaActual = this.estado.paginaActual;
    const imagenUrl = manga.imagenes[paginaActual];
    
    // Crear modal estilo nhentai
    const modal = document.createElement('div');
    modal.id = 'modal-pantalla-completa-nhentai';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    `;
    
    modal.innerHTML = `
        <!-- Barra superior -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: rgba(0, 0, 0, 0.9); border-bottom: 1px solid #333;">
            <div style="color: white; font-weight: bold;">
                ${manga.titulo} - Página ${paginaActual + 1}/${manga.imagenes.length}
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="sistemaZoomMangaPantallaCompleta.zoomOut()" 
                        style="background: #333; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                    🔍−
                </button>
                <button onclick="sistemaZoomMangaPantallaCompleta.resetearZoom()" 
                        style="background: #333; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                    100%
                </button>
                <button onclick="sistemaZoomMangaPantallaCompleta.zoomIn()" 
                        style="background: #333; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                    🔍+
                </button>
                <button onclick="document.getElementById('modal-pantalla-completa-nhentai').remove()" 
                        style="background: #ff4444; color: white; border: none; padding: 5px 15px; border-radius: 3px; cursor: pointer;">
                    ✕
                </button>
            </div>
        </div>
        
        <!-- Contenedor de imagen -->
        <div style="flex: 1; display: flex; justify-content: center; align-items: center; overflow: hidden; position: relative;">
            <div id="contenedor-imagen-pantalla-completa" 
                 style="position: relative; overflow: hidden; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                <img src="${imagenUrl}" 
                     alt="Página ${paginaActual + 1}" 
                     id="imagen-pantalla-completa"
                     style="max-width: none; max-height: none; object-fit: contain; cursor: grab; transition: transform 0.2s ease-out;">
            </div>
            
            <!-- Navegación lateral -->
            <div style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%);">
                <button onclick="sistemaMangaPantallaCompleta.paginaAnterior(); event.stopPropagation()" 
                        style="background: rgba(0,0,0,0.7); color: white; border: none; padding: 20px 10px; border-radius: 5px; cursor: pointer; font-size: 24px;">
                    ←
                </button>
            </div>
            <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%);">
                <button onclick="sistemaMangaPantallaCompleta.paginaSiguiente(); event.stopPropagation()" 
                        style="background: rgba(0,0,0,0.7); color: white; border: none; padding: 20px 10px; border-radius: 5px; cursor: pointer; font-size: 24px;">
                    →
                </button>
            </div>
            
            <!-- Indicador de zoom -->
            <div id="indicador-zoom-pantalla-completa" 
                 style="position: absolute; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); color: #00ff88; padding: 5px 10px; border-radius: 5px; font-family: monospace;">
                100%
            </div>
        </div>
        
        <!-- Barra inferior -->
        <div style="display: flex; justify-content: center; padding: 10px; background: rgba(0, 0, 0, 0.9); border-top: 1px solid #333;">
            <button onclick="sistemaMangaPantallaCompleta.descargarImagen()" 
                    style="background: #2575fc; color: white; border: none; padding: 8px 15px; border-radius: 3px; cursor: pointer; margin: 0 5px;">
                ⬇ Descargar
            </button>
            <button onclick="sistemaMangaPantallaCompleta.copiarEnlace()" 
                    style="background: #00c853; color: white; border: none; padding: 8px 15px; border-radius: 3px; cursor: pointer; margin: 0 5px;">
                🔗 Copiar enlace
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Sistema de zoom para pantalla completa
    const sistemaZoomPantallaCompleta = {
        escalaActual: 1.0,
        escalaMaxima: 5.0,
        escalaMinima: 0.5,
        
        zoomIn: function() {
            this.escalaActual = Math.min(this.escalaMaxima, this.escalaActual + 0.2);
            this.aplicarZoom();
        },
        
        zoomOut: function() {
            this.escalaActual = Math.max(this.escalaMinima, this.escalaActual - 0.2);
            this.aplicarZoom();
        },
        
        resetearZoom: function() {
            this.escalaActual = 1.0;
            this.aplicarZoom();
        },
        
        aplicarZoom: function() {
            const imagen = document.getElementById('imagen-pantalla-completa');
            if (imagen) {
                imagen.style.transform = `scale(${this.escalaActual})`;
                document.getElementById('indicador-zoom-pantalla-completa').textContent = 
                    `${Math.round(this.escalaActual * 100)}%`;
            }
        }
    };
    
    // Sistema de navegación para pantalla completa
    const sistemaMangaPantallaCompleta = {
        paginaAnterior: function() {
            sistemaManga.paginaAnterior();
            // Actualizar imagen en modal
            const nuevaImagen = sistemaManga.estado.mangaActual.imagenes[sistemaManga.estado.paginaActual];
            document.getElementById('imagen-pantalla-completa').src = nuevaImagen;
            document.querySelector('#modal-pantalla-completa-nhentai div:first-child div:first-child').textContent = 
                `${manga.titulo} - Página ${sistemaManga.estado.paginaActual + 1}/${manga.imagenes.length}`;
            sistemaZoomPantallaCompleta.resetearZoom();
        },
        
        paginaSiguiente: function() {
            sistemaManga.siguientePagina();
            // Actualizar imagen en modal
            const nuevaImagen = sistemaManga.estado.mangaActual.imagenes[sistemaManga.estado.paginaActual];
            document.getElementById('imagen-pantalla-completa').src = nuevaImagen;
            document.querySelector('#modal-pantalla-completa-nhentai div:first-child div:first-child').textContent = 
                `${manga.titulo} - Página ${sistemaManga.estado.paginaActual + 1}/${manga.imagenes.length}`;
            sistemaZoomPantallaCompleta.resetearZoom();
        },
        
        descargarImagen: function() {
            const link = document.createElement('a');
            link.href = imagenUrl;
            link.download = `${manga.titulo.replace(/[^a-z0-9]/gi, '_')}_pagina_${paginaActual + 1}.jpg`;
            link.click();
        },
        
        copiarEnlace: function() {
            navigator.clipboard.writeText(imagenUrl).then(() => {
                alert('Enlace copiado al portapapeles');
            });
        }
    };
    
    // Hacer globales para los botones
    window.sistemaZoomMangaPantallaCompleta = sistemaZoomPantallaCompleta;
    window.sistemaMangaPantallaCompleta = sistemaMangaPantallaCompleta;
    
    // Inicializar eventos de zoom
    const imagenPC = document.getElementById('imagen-pantalla-completa');
    imagenPC.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.deltaY > 0 ? sistemaZoomPantallaCompleta.zoomOut() : sistemaZoomPantallaCompleta.zoomIn();
    });
    
    imagenPC.addEventListener('dblclick', (e) => {
        e.preventDefault();
        sistemaZoomPantallaCompleta.resetearZoom();
    });
    
    // Evento de clic en la imagen para cambiar página
    imagenPC.addEventListener('click', (e) => {
        const rect = imagenPC.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        
        if (clickX < rect.width / 3) {
            // Clic en el tercio izquierdo - página anterior
            sistemaMangaPantallaCompleta.paginaAnterior();
        } else if (clickX > rect.width * 2/3) {
            // Clic en el tercio derecho - página siguiente
            sistemaMangaPantallaCompleta.paginaSiguiente();
        }
    });
    
    // Cerrar con ESC
    const cerrarConESC = (e) => {
        if (e.key === 'Escape') modal.remove();
    };
    document.addEventListener('keydown', cerrarConESC);
    
    // Remover event listener cuando se cierre
    modal.addEventListener('remove', () => {
        document.removeEventListener('keydown', cerrarConESC);
    });
};

// ============================================================================
// INICIALIZACIÓN GLOBAL
// ============================================================================

// Hacer el sistema manga global
window.sistemaManga = sistemaManga;
window.sistemaZoomManga = sistemaZoomManga;

// Función global para iniciar lectura de manga
window.iniciarLecturaManga = function(subcontenedorId) {
    sistemaManga.iniciarLecturaManga(subcontenedorId);
};

console.log("📚 Sistema Manga cargado correctamente");
console.log("🔍 Sistema de Zoom cargado correctamente");
