// ============================================================================
// SISTEMA MANGA PRINCIPAL - CON ZOOM AUTOMÁTICO 240% nhentai
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
                    <div class="contenedor-lectura">
                        <div class="imagen-manga-container">
                            <div class="contenedor-imagen-zoom" id="contenedor-imagen-zoom">
                                <img src="${manga.imagenes[0]}" 
                                     alt="Página 1" 
                                     class="imagen-manga"
                                     id="imagen-manga-actual">
                                <div class="indicador-click">
                                    <div class="icono-click">↔️</div>
                                    <p><strong>Modo nhentai activado (240%)</strong></p>
                                    <p>Usa la barra inferior para navegar • Flechas ←→ para desplazarte</p>
                                    <p>Rueda del mouse para scroll horizontal • Doble clic para zoom normal</p>
                                    <p><code>Z</code> +5% • <code>X</code> -5% • <code>F</code> pantalla completa • <code>R</code> reiniciar zoom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Navegación rápida -->
                    <div class="navegacion-rapida">
                        <button class="boton-nav" onclick="sistemaManga.paginaAnterior(); event.stopPropagation();">
                            ← Página Anterior
                        </button>
                        <button class="boton-nav-principal" onclick="sistemaManga.siguientePagina(); event.stopPropagation();">
                            Siguiente Página →
                        </button>
                        <button class="boton-nav" onclick="sistemaManga.verEnPantallaCompleta(); event.stopPropagation();" 
                                style="background: linear-gradient(135deg, #ff9800, #ff5722);">
                            ⛶ Pantalla Completa (F)
                        </button>
                    </div>
                    
                    <!-- Controles de zoom nhentai -->
                    <div class="controles-zoom-nhentai">
                        <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.ajustarZoomNhentai(-0.05)" title="Disminuir zoom 5% (X)">
                            🔍−
                        </button>
                        <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.reiniciarZoomNhentai()" title="Reiniciar a 240% (R)">
                            240%
                        </button>
                        <span class="escala-zoom-nhentai" id="escala-zoom-nhentai" style="color: #ffd700; font-weight: bold; min-width: 100px; text-align: center;">
                            240%
                        </span>
                        <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.ajustarZoomNhentai(0.05)" title="Aumentar zoom 5% (Z)">
                            🔍+
                        </button>
                        <button class="boton-zoom-nhentai" onclick="sistemaZoomManga.toggleModoNhentai()" title="Cambiar modo (Doble clic)">
                            ${sistemaZoomManga.modoNhentai ? '📱' : '🔍'}
                        </button>
                    </div>
                    
                    <!-- Barra de progreso horizontal -->
                    <div class="barra-progreso-horizontal">
                        <div class="barra-progreso-horizontal-container">
                            <div class="barra-progreso-horizontal-fill" id="barra-progreso-horizontal-fill"></div>
                            <div class="indicador-posicion-horizontal" id="indicador-posicion-horizontal"></div>
                        </div>
                        <div class="controles-horizontal">
                            <button onclick="sistemaZoomManga.scrollIzquierda()">◀◀</button>
                            <button onclick="sistemaZoomManga.scrollIzquierdaPoco()">◀</button>
                            <span>Scroll Horizontal</span>
                            <button onclick="sistemaZoomManga.scrollDerechaPoco()">▶</button>
                            <button onclick="sistemaZoomManga.scrollDerecha()">▶▶</button>
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
                            <div class="estadistica">
                                <span class="estadistica-label">Zoom actual</span>
                                <span class="estadistica-valor" id="zoom-estadistica">240%</span>
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
        
        // Inicializar sistema de zoom nhentai con 240% por defecto
        setTimeout(() => {
            sistemaZoomManga.inicializarZoomNhentai();
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
        
        // Resetear scroll horizontal
        sistemaZoomManga.reiniciarScrollHorizontal();
        
        console.log(`📄 Cambiado a página ${pagina + 1}`);
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
                        <p>Zoom actual: <span id="zoom-menu-estadistica">${Math.round(sistemaZoomManga.zoomNhentai * 100)}%</span></p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.innerHTML = html;
        
        // Actualizar estadística de zoom en el menú
        setTimeout(() => {
            const zoomEstadistica = document.getElementById('zoom-menu-estadistica');
            if (zoomEstadistica) {
                zoomEstadistica.textContent = `${Math.round(sistemaZoomManga.zoomNhentai * 100)}%`;
            }
        }, 100);
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
    },
    
    // Ver en pantalla completa (modo nhentai)
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
                    <span style="color: #ffd700; margin-left: 15px;">Zoom: ${Math.round(sistemaZoomManga.zoomNhentai * 100)}%</span>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="sistemaZoomMangaPantallaCompleta.ajustarZoom(-0.05)" 
                            style="background: #333; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                        🔍−
                    </button>
                    <button onclick="sistemaZoomMangaPantallaCompleta.resetearZoom()" 
                            style="background: #333; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                        240%
                    </button>
                    <button onclick="sistemaZoomMangaPantallaCompleta.ajustarZoom(0.05)" 
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
            <div style="flex: 1; display: flex; justify-content: flex-start; align-items: flex-start; overflow-x: auto; overflow-y: hidden; position: relative;">
                <div id="contenedor-imagen-pantalla-completa" 
                     style="min-width: ${sistemaZoomManga.zoomNhentai * 100}%; height: 100%; display: flex; justify-content: flex-start; align-items: flex-start;">
                    <img src="${imagenUrl}" 
                         alt="Página ${paginaActual + 1}" 
                         id="imagen-pantalla-completa"
                         style="width: auto; height: 100%; object-fit: contain; cursor: grab;">
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
                
                <!-- Indicador de posición -->
                <div id="indicador-posicion-pantalla-completa" 
                     style="position: absolute; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); color: #00ff88; padding: 5px 10px; border-radius: 5px; font-family: monospace;">
                    0%
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
            zoomActual: sistemaZoomManga.zoomNhentai,
            
            ajustarZoom: function(incremento) {
                this.zoomActual = Math.max(1.0, Math.min(4.0, this.zoomActual + incremento));
                this.aplicarZoom();
                sistemaZoomManga.mostrarNotificacionZoom(`Zoom: ${Math.round(this.zoomActual * 100)}%`);
            },
            
            resetearZoom: function() {
                this.zoomActual = 2.4; // 240%
                this.aplicarZoom();
                sistemaZoomManga.mostrarNotificacionZoom('Zoom reiniciado: 240%');
            },
            
            aplicarZoom: function() {
                const contenedor = document.getElementById('contenedor-imagen-pantalla-completa');
                if (contenedor) {
                    contenedor.style.minWidth = `${this.zoomActual * 100}%`;
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
                document.querySelector('#modal-pantalla-completa-nhentai div:first-child div:first-child').innerHTML = 
                    `${manga.titulo} - Página ${sistemaManga.estado.paginaActual + 1}/${manga.imagenes.length}
                    <span style="color: #ffd700; margin-left: 15px;">Zoom: ${Math.round(sistemaZoomPantallaCompleta.zoomActual * 100)}%</span>`;
            },
            
            paginaSiguiente: function() {
                sistemaManga.siguientePagina();
                // Actualizar imagen en modal
                const nuevaImagen = sistemaManga.estado.mangaActual.imagenes[sistemaManga.estado.paginaActual];
                document.getElementById('imagen-pantalla-completa').src = nuevaImagen;
                document.querySelector('#modal-pantalla-completa-nhentai div:first-child div:first-child').innerHTML = 
                    `${manga.titulo} - Página ${sistemaManga.estado.paginaActual + 1}/${manga.imagenes.length}
                    <span style="color: #ffd700; margin-left: 15px;">Zoom: ${Math.round(sistemaZoomPantallaCompleta.zoomActual * 100)}%</span>`;
            },
            
            descargarImagen: function() {
                const link = document.createElement('a');
                link.href = imagenUrl;
                link.download = `${manga.titulo.replace(/[^a-z0-9]/gi, '_')}_pagina_${paginaActual + 1}.jpg`;
                link.click();
            },
            
            copiarEnlace: function() {
                navigator.clipboard.writeText(imagenUrl).then(() => {
                    sistemaZoomManga.mostrarNotificacionZoom('Enlace copiado al portapapeles');
                });
            }
        };
        
        // Hacer globales para los botones
        window.sistemaZoomMangaPantallaCompleta = sistemaZoomPantallaCompleta;
        window.sistemaMangaPantallaCompleta = sistemaMangaPantallaCompleta;
        
        // Configurar eventos de scroll
        const contenedorPC = document.getElementById('contenedor-imagen-pantalla-completa').parentElement;
        contenedorPC.addEventListener('scroll', () => {
            const scrollPorcentaje = Math.round(
                (contenedorPC.scrollLeft / (contenedorPC.scrollWidth - contenedorPC.clientWidth)) * 100
            ) || 0;
            document.getElementById('indicador-posicion-pantalla-completa').textContent = `${scrollPorcentaje}%`;
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
        
        console.log("📺 Pantalla completa activada estilo nhentai");
    }
};

// ============================================================================
// SISTEMA DE ZOOM nhentai CON 240% POR DEFECTO
// ============================================================================

const sistemaZoomManga = {
    modoNhentai: true,           // Modo nhentai activado por defecto
    zoomNhentai: 2.4,            // 240% por defecto
    zoomMinimo: 1.0,             // 100%
    zoomMaximo: 4.0,             // 400%
    pasoZoom: 0.05,              // 5% por paso
    arrastrando: false,
    inicioX: 0,
    scrollInicial: 0,
    
    // Inicializar zoom nhentai
    inicializarZoomNhentai: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        const imagenManga = document.getElementById('imagen-manga-actual');
        
        if (!contenedorImagen || !imagenManga) return;
        
        // Activar modo nhentai por defecto
        this.activarModoNhentai();
        
        // Configurar eventos
        this.configurarEventosNhentai();
        
        // Inicializar barra de progreso horizontal
        this.inicializarBarraProgresoHorizontal();
        
        console.log("🔍 Sistema nhentai activado - Zoom inicial: 240%");
    },
    
    // Activar modo nhentai (240% por defecto)
    activarModoNhentai: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        const imagenManga = document.getElementById('imagen-manga-actual');
        
        if (!contenedorImagen || !imagenManga) return;
        
        // Aplicar estilos nhentai
        contenedorImagen.style.cssText = `
            position: relative;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            cursor: grab;
            width: 100%;
            height: 75vh !important;
            display: flex;
            justify-content: flex-start !important;
            align-items: flex-start !important;
            scroll-behavior: smooth;
            background: #111;
            border-radius: 10px;
            border: 2px solid #333;
        `;
        
        // Imagen ampliada 240% por defecto
        imagenManga.style.cssText = `
            width: ${this.zoomNhentai * 100}% !important;
            height: auto !important;
            object-fit: contain;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            pointer-events: auto;
            flex-shrink: 0;
        `;
        
        this.modoNhentai = true;
        
        // Actualizar UI
        this.actualizarUIZoom();
        this.actualizarBarraProgresoHorizontal();
        
        console.log(`📐 Modo nhentai activado - Ancho: ${Math.round(this.zoomNhentai * 100)}%`);
    },
    
    // Configurar eventos para modo nhentai
    configurarEventosNhentai: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        const imagenManga = document.getElementById('imagen-manga-actual');
        
        if (!contenedorImagen || !imagenManga) return;
        
        // Doble clic para alternar entre modo nhentai y normal
        imagenManga.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.toggleModoNhentai();
        });
        
        // Rueda del mouse controla el scroll horizontal
        contenedorImagen.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            if (this.modoNhentai) {
                // Scroll horizontal con la rueda
                contenedorImagen.scrollLeft += e.deltaY * 2;
                this.actualizarBarraProgresoHorizontal();
            }
        });
        
        // Arrastre para navegar
        contenedorImagen.addEventListener('mousedown', (e) => {
            if (this.modoNhentai && e.button === 0) {
                this.arrastrando = true;
                contenedorImagen.style.cursor = 'grabbing';
                this.inicioX = e.pageX;
                this.scrollInicial = contenedorImagen.scrollLeft;
                e.preventDefault();
            }
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!this.arrastrando || !this.modoNhentai) return;
            
            const deltaX = e.pageX - this.inicioX;
            contenedorImagen.scrollLeft = this.scrollInicial - deltaX;
            this.actualizarBarraProgresoHorizontal();
        });
        
        document.addEventListener('mouseup', () => {
            this.arrastrando = false;
            if (this.modoNhentai) {
                contenedorImagen.style.cursor = 'grab';
            }
        });
        
        // Atajos de teclado
        document.addEventListener('keydown', (e) => {
            if (!this.modoNhentai) return;
            
            switch(e.key.toLowerCase()) {
                case 'z':
                    e.preventDefault();
                    this.ajustarZoomNhentai(this.pasoZoom);
                    break;
                case 'x':
                    e.preventDefault();
                    this.ajustarZoomNhentai(-this.pasoZoom);
                    break;
                case 'r':
                    e.preventDefault();
                    this.reiniciarZoomNhentai();
                    break;
                case 'f':
                    e.preventDefault();
                    sistemaManga.verEnPantallaCompleta();
                    break;
                case 'arrowleft':
                    e.preventDefault();
                    this.scrollIzquierdaPoco();
                    break;
                case 'arrowright':
                    e.preventDefault();
                    this.scrollDerechaPoco();
                    break;
                case 'home':
                    e.preventDefault();
                    this.reiniciarScrollHorizontal();
                    break;
                case 'end':
                    e.preventDefault();
                    this.scrollAlFinal();
                    break;
            }
        });
        
        // Actualizar barra de progreso al hacer scroll
        contenedorImagen.addEventListener('scroll', () => {
            this.actualizarBarraProgresoHorizontal();
        });
        
        console.log("🎮 Controles nhentai configurados");
    },
    
    // Ajustar zoom en modo nhentai
    ajustarZoomNhentai: function(incremento) {
        if (!this.modoNhentai) return;
        
        const imagenManga = document.getElementById('imagen-manga-actual');
        if (!imagenManga) return;
        
        // Calcular nuevo zoom
        const nuevoZoom = Math.max(this.zoomMinimo, Math.min(this.zoomMaximo, this.zoomNhentai + incremento));
        
        if (nuevoZoom !== this.zoomNhentai) {
            // Guardar posición de scroll relativa antes del cambio
            const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
            const scrollPorcentaje = contenedorImagen.scrollLeft / (contenedorImagen.scrollWidth - contenedorImagen.clientWidth);
            
            // Aplicar nuevo zoom
            this.zoomNhentai = nuevoZoom;
            imagenManga.style.width = `${this.zoomNhentai * 100}%`;
            
            // Restaurar posición de scroll relativa después del cambio
            setTimeout(() => {
                const nuevoScrollMax = contenedorImagen.scrollWidth - contenedorImagen.clientWidth;
                contenedorImagen.scrollLeft = scrollPorcentaje * nuevoScrollMax;
                this.actualizarBarraProgresoHorizontal();
            }, 10);
            
            // Actualizar UI
            this.actualizarUIZoom();
            this.mostrarNotificacionZoom(`Zoom: ${Math.round(this.zoomNhentai * 100)}%`);
            
            console.log(`🔍 Zoom ajustado a: ${Math.round(this.zoomNhentai * 100)}%`);
        }
    },
    
    // Reiniciar zoom a 240%
    reiniciarZoomNhentai: function() {
        if (!this.modoNhentai) return;
        
        const imagenManga = document.getElementById('imagen-manga-actual');
        if (!imagenManga) return;
        
        this.zoomNhentai = 2.4; // 240%
        imagenManga.style.width = `${this.zoomNhentai * 100}%`;
        
        // Actualizar UI
        this.actualizarUIZoom();
        this.mostrarNotificacionZoom('Zoom reiniciado: 240%');
        this.reiniciarScrollHorizontal();
        
        console.log("🔁 Zoom reiniciado a 240%");
    },
    
    // Alternar entre modo nhentai y modo normal
    toggleModoNhentai: function() {
        if (this.modoNhentai) {
            this.desactivarModoNhentai();
        } else {
            this.activarModoNhentai();
        }
    },
    
    // Desactivar modo nhentai (volver a modo normal)
    desactivarModoNhentai: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        const imagenManga = document.getElementById('imagen-manga-actual');
        
        if (!contenedorImagen || !imagenManga) return;
        
        // Estilo normal
        contenedorImagen.style.cssText = `
            position: relative;
            overflow: hidden;
            cursor: grab;
            width: 100%;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #111;
            border-radius: 10px;
            border: 2px solid #333;
        `;
        
        imagenManga.style.cssText = `
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        `;
        
        this.modoNhentai = false;
        
        // Actualizar UI
        this.actualizarUIZoom();
        this.mostrarNotificacionZoom('Modo normal activado');
        
        console.log("📱 Modo normal activado");
    },
    
    // Actualizar UI del zoom
    actualizarUIZoom: function() {
        const escalaElement = document.getElementById('escala-zoom-nhentai');
        const zoomEstadistica = document.getElementById('zoom-estadistica');
        const botonToggle = document.querySelector('.boton-zoom-nhentai:last-child');
        
        if (escalaElement) {
            escalaElement.textContent = `${Math.round(this.zoomNhentai * 100)}%`;
        }
        
        if (zoomEstadistica) {
            zoomEstadistica.textContent = `${Math.round(this.zoomNhentai * 100)}%`;
        }
        
        if (botonToggle) {
            botonToggle.innerHTML = this.modoNhentai ? '📱' : '🔍';
            botonToggle.title = this.modoNhentai ? 'Cambiar a modo normal' : 'Cambiar a modo nhentai (240%)';
        }
    },
    
    // Inicializar barra de progreso horizontal
    inicializarBarraProgresoHorizontal: function() {
        // La barra ya está en el HTML, solo necesitamos actualizarla
        this.actualizarBarraProgresoHorizontal();
    },
    
    // Actualizar barra de progreso horizontal
    actualizarBarraProgresoHorizontal: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        const barraFill = document.getElementById('barra-progreso-horizontal-fill');
        const indicadorPos = document.getElementById('indicador-posicion-horizontal');
        
        if (!contenedorImagen || !barraFill || !indicadorPos) return;
        
        const scrollMax = contenedorImagen.scrollWidth - contenedorImagen.clientWidth;
        
        if (scrollMax > 0) {
            const scrollPorcentaje = (contenedorImagen.scrollLeft / scrollMax) * 100;
            const posicionPorcentaje = (contenedorImagen.scrollLeft / contenedorImagen.scrollWidth) * 100;
            
            barraFill.style.width = `${scrollPorcentaje}%`;
            indicadorPos.style.left = `${posicionPorcentaje}%`;
        } else {
            barraFill.style.width = '0%';
            indicadorPos.style.left = '0%';
        }
    },
    
    // Controles de scroll horizontal
    scrollIzquierda: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen || !this.modoNhentai) return;
        
        contenedorImagen.scrollLeft -= contenedorImagen.clientWidth * 0.5;
        this.actualizarBarraProgresoHorizontal();
    },
    
    scrollIzquierdaPoco: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen || !this.modoNhentai) return;
        
        contenedorImagen.scrollLeft -= 100;
        this.actualizarBarraProgresoHorizontal();
    },
    
    scrollDerechaPoco: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen || !this.modoNhentai) return;
        
        contenedorImagen.scrollLeft += 100;
        this.actualizarBarraProgresoHorizontal();
    },
    
    scrollDerecha: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen || !this.modoNhentai) return;
        
        contenedorImagen.scrollLeft += contenedorImagen.clientWidth * 0.5;
        this.actualizarBarraProgresoHorizontal();
    },
    
    reiniciarScrollHorizontal: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen || !this.modoNhentai) return;
        
        contenedorImagen.scrollLeft = 0;
        this.actualizarBarraProgresoHorizontal();
    },
    
    scrollAlFinal: function() {
        const contenedorImagen = document.querySelector('.contenedor-imagen-zoom');
        if (!contenedorImagen || !this.modoNhentai) return;
        
        contenedorImagen.scrollLeft = contenedorImagen.scrollWidth;
        this.actualizarBarraProgresoHorizontal();
    },
    
    // Mostrar notificación temporal
    mostrarNotificacionZoom: function(mensaje) {
        // Remover notificación anterior si existe
        const notificacionAnterior = document.querySelector('.notificacion-zoom-nhentai');
        if (notificacionAnterior) {
            notificacionAnterior.remove();
        }
        
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion-zoom-nhentai';
        notificacion.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: #ffd700;
            padding: 12px 18px;
            border-radius: 10px;
            border: 2px solid #ffd700;
            z-index: 10000;
            font-weight: bold;
            font-size: 14px;
            animation: fadeInOutZoom 2s ease-in-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            max-width: 300px;
            text-align: center;
        `;
        
        notificacion.textContent = mensaje;
        notificacion.innerHTML += '<br><small style="color: #aaa; font-size: 11px;">(Notificación desaparecerá en 2s)</small>';
        
        document.body.appendChild(notificacion);
        
        // Remover después de 2 segundos
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.remove();
            }
        }, 2000);
    }
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

console.log("📚 Sistema Manga nhentai cargado correctamente");
console.log("🔍 Zoom automático 240% configurado");
console.log("🎮 Controles: Z(+5%), X(-5%), R(240%), F(pantalla completa), Flechas(←→ navegación)");
