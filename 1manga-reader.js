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
// AÑADIR FUNCIÓN DE PANTALLA COMPLETA ESTILO nhentai
// ============================================================================

// En el objeto sistemaManga, añade esta función:
verEnPantallaCompleta: function() {
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
            link.download = `${manga.titulo}_pagina_${paginaActual + 1}.jpg`;
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
    
    // Cerrar con ESC
    const cerrarConESC = (e) => {
        if (e.key === 'Escape') modal.remove();
    };
    document.addEventListener('keydown', cerrarConESC);
    
    // Remover event listener cuando se cierre
    modal.addEventListener('remove', () => {
        document.removeEventListener('keydown', cerrarConESC);
    });
},

// ============================================================================
// MODIFICAR mostrarPantallaManga PARA INCLUIR ZOOM
// ============================================================================

// En mostrarPantallaManga, reemplaza la sección de la imagen con:

<div class="imagen-manga-container">
    <div class="contenedor-imagen-zoom" id="contenedor-imagen-zoom">
        <img src="${manga.imagenes[paginaActual]}" 
             alt="Página ${paginaActual + 1}" 
             class="imagen-manga"
             id="imagen-manga-actual">
        <div class="indicador-click">
            <div class="icono-click">🔍</div>
            <p>Doble clic para zoom • Rueda para ajustar • Arrastra para mover</p>
        </div>
    </div>
</div>

// Y en la navegación rápida, añade el botón de pantalla completa:

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

// ============================================================================
// INICIALIZAR ZOOM AL MOSTRAR PANTALLA
// ============================================================================

// Al final de mostrarPantallaManga, después de agregar el HTML, añade:

// Inicializar sistema de zoom después de un breve delay
setTimeout(() => {
    if (typeof sistemaZoomManga !== 'undefined') {
        sistemaZoomManga.inicializarZoom();
    }
}, 100);
