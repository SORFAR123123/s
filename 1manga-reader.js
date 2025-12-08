// ============================================================================
// SISTEMA DE LECTURA DE MANGA - LECTOR DE COMICS/IMÁGENES
// ============================================================================

const sistemaManga = {
    // Configuración de mangas por subcontenedor
    mangasPorSubcontenedor: {
        // Subcontenedores del contenedor 1
        'sub1_1': {
            titulo: 'The Last Summer - Capítulo 1',
            descripcion: 'Primer capítulo del manga The Last Summer',
            imagenes: [
                'https://pbs.twimg.com/media/G5_unInW4AA4bVq?format=png&name=large',
                'https://pbs.twimg.com/media/G5_vVCEX0AAnsA7?format=jpg&name=large',
                'https://pbs.twimg.com/media/G5_vDqIXgAAa8et?format=png&name=large'
                // AÑADE TANTAS IMÁGENES COMO QUIERAS AQUÍ
                // Ejemplo: 'https://example.com/manga/page4.jpg',
                // 'https://example.com/manga/page5.jpg',
                // 'https://example.com/manga/page6.jpg',
                // ¡Y ASÍ SUCESIVAMENTE!
            ]
        },
        'sub1_2': {
            titulo: 'The Last Summer - Capítulo 2',
            descripcion: 'Segundo capítulo del manga The Last Summer',
            imagenes: [
                'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
                'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large',
                'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
                'https://pbs.twimg.com/media/G7rKvyBXEAA81vi?format=png&name=small'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        },
        'sub1_3': {
            titulo: 'The Last Summer - Capítulo 3',
            descripcion: 'Tercer capítulo del manga The Last Summer',
            imagenes: [
                'https://example.com/manga/sub1_3/page1.jpg',
                'https://example.com/manga/sub1_3/page2.jpg',
                'https://example.com/manga/sub1_3/page3.jpg'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        },
        
        // Subcontenedores del contenedor 2
        'sub2_1': {
            titulo: 'Toono Esuke - Capítulo 1',
            descripcion: 'Primer capítulo de Toono Esuke',
            imagenes: [
                'https://example.com/manga/sub2_1/page1.jpg',
                'https://example.com/manga/sub2_1/page2.jpg'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        },
        'sub2_2': {
            titulo: 'Toono Esuke - Capítulo 2',
            descripcion: 'Segundo capítulo de Toono Esuke',
            imagenes: [
                'https://example.com/manga/sub2_2/page1.jpg',
                'https://example.com/manga/sub2_2/page2.jpg'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        },
        'sub2_3': {
            titulo: 'Toono Esuke - Capítulo 3',
            descripcion: 'Tercer capítulo de Toono Esuke',
            imagenes: [
                'https://example.com/manga/sub2_3/page1.jpg',
                'https://example.com/manga/sub2_3/page2.jpg'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        },
        'sub2_4': {
            titulo: 'Toono Esuke - Capítulo 4',
            descripcion: 'Cuarto capítulo de Toono Esuke',
            imagenes: [
                'https://pbs.twimg.com/media/G7rOyUmWAAAXB8W?format=png&name=large',
                'https://i2.nhentai.net/galleries/3670573/5.webp'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        },
        
        // EJEMPLO: Agregar más subcontenedores así:
        'sub3_1': {
            titulo: 'Yamada - Capítulo 1',
            descripcion: 'Primer capítulo de Yamada',
            imagenes: [
                'https://example.com/manga/sub3_1/page1.jpg',
                'https://example.com/manga/sub3_1/page2.jpg',
                'https://example.com/manga/sub3_1/page3.jpg'
                // AÑADE MÁS IMÁGENES AQUÍ
            ]
        }
        // ¡Puedes agregar TODOS los subcontenedores que quieras!
    },
    
    // Estado actual del lector
    estado: {
        subcontenedorActual: '',
        mangaActual: null,
        paginaActual: 0,
        pantallaActiva: false
    },
    
    // ============================================================================
    // FUNCIONES PRINCIPALES
    // ============================================================================
    
    // Inicializar el sistema
    inicializar: function() {
        console.log("📚 Sistema de manga inicializado");
        this.cargarDatos();
    },
    
    // Cargar datos guardados (progreso de lectura)
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('progresoManga');
            if (datos) {
                const progreso = JSON.parse(datos);
                // Restaurar la última página vista para cada manga
                Object.keys(progreso).forEach(subId => {
                    if (this.mangasPorSubcontenedor[subId]) {
                        this.mangasPorSubcontenedor[subId].paginaActual = progreso[subId] || 0;
                    }
                });
            }
        } catch (e) {
            console.error("Error cargando progreso de manga:", e);
        }
    },
    
    // Guardar progreso de lectura
    guardarProgreso: function(subcontenedorId, pagina) {
        try {
            let progreso = {};
            const datosGuardados = localStorage.getItem('progresoManga');
            if (datosGuardados) {
                progreso = JSON.parse(datosGuardados);
            }
            
            progreso[subcontenedorId] = pagina;
            localStorage.setItem('progresoManga', JSON.stringify(progreso));
            
            console.log(`💾 Progreso guardado: ${subcontenedorId} - Página ${pagina + 1}`);
        } catch (e) {
            console.error("Error guardando progreso:", e);
        }
    },
    
    // Iniciar lectura de manga desde un subcontenedor
    iniciarLectura: function(subcontenedorId) {
        if (!this.mangasPorSubcontenedor[subcontenedorId]) {
            console.error(`❌ No hay manga configurado para: ${subcontenedorId}`);
            alert("Este subcontenedor no tiene manga disponible todavía.");
            return;
        }
        
        this.estado.subcontenedorActual = subcontenedorId;
        this.estado.mangaActual = this.mangasPorSubcontenedor[subcontenedorId];
        
        // Inicializar página actual si no existe
        if (typeof this.estado.mangaActual.paginaActual === 'undefined') {
            this.estado.mangaActual.paginaActual = 0;
        }
        
        this.estado.paginaActual = this.estado.mangaActual.paginaActual;
        this.estado.pantallaActiva = true;
        
        console.log(`📖 Iniciando lectura: ${this.estado.mangaActual.titulo}`);
        console.log(`📄 Páginas disponibles: ${this.estado.mangaActual.imagenes.length}`);
        
        this.mostrarPantallaManga();
    },
    
    // Mostrar pantalla de lectura de manga
    mostrarPantallaManga: function() {
        const manga = this.estado.mangaActual;
        if (!manga) return;
        
        const totalPaginas = manga.imagenes.length;
        const paginaActual = this.estado.paginaActual;
        
        // Crear pantalla HTML
        const pantallaHTML = `
            <div id="pantalla-lectura-manga" class="pantalla activa">
                <div class="contenedor-manga">
                    <!-- BARRA SUPERIOR -->
                    <div class="barra-superior-manga">
                        <div class="info-manga">
                            <button class="boton-volver-manga" onclick="sistemaManga.volverASubcontenedor()">
                                ← Volver
                            </button>
                            <div class="titulo-manga">${manga.titulo}</div>
                            <button class="boton-menu-manga" onclick="irAlMenu()">🏠 Menú</button>
                        </div>
                        <div class="controles-manga">
                            <span class="contador-pagina">Página ${paginaActual + 1} de ${totalPaginas}</span>
                            <div class="progreso-lectura">
                                <div class="barra-progreso-manga">
                                    <div class="barra-progreso-fill-manga" 
                                         style="width: ${((paginaActual + 1) / totalPaginas) * 100}%">
                                    </div>
                                </div>
                                <span class="porcentaje-lectura">${Math.round(((paginaActual + 1) / totalPaginas) * 100)}% leído</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- CONTENEDOR PRINCIPAL DE LECTURA -->
                    <div class="contenedor-lectura" onclick="sistemaManga.siguientePagina()">
                        <!-- IMAGEN ACTUAL -->
                        <div class="imagen-manga-container">
                            <img src="${manga.imagenes[paginaActual]}" 
                                 alt="Página ${paginaActual + 1}" 
                                 class="imagen-manga"
                                 id="imagen-manga-actual">
                            <div class="indicador-click">
                                <div class="icono-click">👉</div>
                                <p>Haz clic en cualquier lado para continuar</p>
                            </div>
                        </div>
                        
                        <!-- NAVEGACIÓN RÁPIDA (OPCIONAL) -->
                        <div class="navegacion-rapida">
                            <button class="boton-nav" onclick="sistemaManga.paginaAnterior()">
                                ← Anterior
                            </button>
                            <button class="boton-nav-principal" onclick="sistemaManga.siguientePagina()">
                                Siguiente Página →
                            </button>
                        </div>
                        
                        <!-- CONTROLES DE SALTO -->
                        <div class="controles-salto">
                            <div class="grupo-saltos">
                                <button class="boton-salto" onclick="sistemaManga.irAPagina(0)">
                                    ⏮️ Inicio
                                </button>
                                <button class="boton-salto" onclick="sistemaManga.irAPaginaEspecifica()">
                                    🔢 Ir a página
                                </button>
                                <button class="boton-salto" onclick="sistemaManga.irAPagina(${totalPaginas - 1})">
                                    ⏭️ Final
                                </button>
                            </div>
                        </div>
                        
                        <!-- MINIATURAS DE PÁGINAS (OPCIONAL) -->
                        <div class="miniaturas-container" id="miniaturas-container">
                            <h4>📄 Todas las páginas (${totalPaginas})</h4>
                            <div class="miniaturas-grid">
                                ${manga.imagenes.map((url, index) => `
                                    <div class="miniatura ${index === paginaActual ? 'miniatura-activa' : ''}" 
                                         onclick="sistemaManga.irAPagina(${index})">
                                        <img src="${url}" alt="Página ${index + 1}">
                                        <div class="numero-miniatura">${index + 1}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <!-- INFORMACIÓN DEL MANGA -->
                    <div class="info-completa-manga">
                        <h3>📖 ${manga.titulo}</h3>
                        <p class="descripcion-manga">${manga.descripcion}</p>
                        <div class="estadisticas-manga">
                            <div class="estadistica">
                                <span class="estadistica-label">Total de páginas:</span>
                                <span class="estadistica-valor">${totalPaginas}</span>
                            </div>
                            <div class="estadistica">
                                <span class="estadistica-label">Páginas restantes:</span>
                                <span class="estadistica-valor">${totalPaginas - (paginaActual + 1)}</span>
                            </div>
                            <div class="estadistica">
                                <span class="estadistica-label">Progreso:</span>
                                <span class="estadistica-valor">${Math.round(((paginaActual + 1) / totalPaginas) * 100)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar pantalla actual
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Agregar nueva pantalla
        document.body.insertAdjacentHTML('beforeend', pantallaHTML);
        
        // Guardar progreso
        this.guardarProgreso(this.estado.subcontenedorActual, paginaActual);
    },
    
    // ============================================================================
    // FUNCIONES DE NAVEGACIÓN
    // ============================================================================
    
    // Ir a la página siguiente
    siguientePagina: function() {
        const totalPaginas = this.estado.mangaActual.imagenes.length;
        
        if (this.estado.paginaActual < totalPaginas - 1) {
            this.estado.paginaActual++;
            this.estado.mangaActual.paginaActual = this.estado.paginaActual;
            this.guardarProgreso(this.estado.subcontenedorActual, this.estado.paginaActual);
            
            console.log(`➡️ Página ${this.estado.paginaActual + 1} de ${totalPaginas}`);
            
            // Si ya está la pantalla, actualizarla
            if (this.estado.pantallaActiva) {
                this.actualizarPantallaManga();
            }
            
            return true;
        } else {
            // ¡Última página!
            this.mostrarFinDelManga();
            return false;
        }
    },
    
    // Ir a la página anterior
    paginaAnterior: function() {
        if (this.estado.paginaActual > 0) {
            this.estado.paginaActual--;
            this.estado.mangaActual.paginaActual = this.estado.paginaActual;
            this.guardarProgreso(this.estado.subcontenedorActual, this.estado.paginaActual);
            
            console.log(`⬅️ Página ${this.estado.paginaActual + 1}`);
            
            if (this.estado.pantallaActiva) {
                this.actualizarPantallaManga();
            }
            
            return true;
        }
        return false;
    },
    
    // Ir a una página específica
    irAPagina: function(numeroPagina) {
        const totalPaginas = this.estado.mangaActual.imagenes.length;
        
        if (numeroPagina >= 0 && numeroPagina < totalPaginas) {
            this.estado.paginaActual = numeroPagina;
            this.estado.mangaActual.paginaActual = numeroPagina;
            this.guardarProgreso(this.estado.subcontenedorActual, numeroPagina);
            
            console.log(`🔢 Saltando a página ${numeroPagina + 1} de ${totalPaginas}`);
            
            if (this.estado.pantallaActiva) {
                this.actualizarPantallaManga();
            }
            
            return true;
        }
        return false;
    },
    
    // Ir a una página específica (pide número)
    irAPaginaEspecifica: function() {
        const totalPaginas = this.estado.mangaActual.imagenes.length;
        const paginaDeseada = prompt(
            `Introduce el número de página (1-${totalPaginas}):`,
            this.estado.paginaActual + 1
        );
        
        if (paginaDeseada !== null) {
            const numero = parseInt(paginaDeseada) - 1;
            if (!isNaN(numero) && numero >= 0 && numero < totalPaginas) {
                this.irAPagina(numero);
            } else {
                alert(`Por favor, introduce un número entre 1 y ${totalPaginas}`);
            }
        }
    },
    
    // Actualizar la pantalla sin recargarla completamente
    actualizarPantallaManga: function() {
        const manga = this.estado.mangaActual;
        const totalPaginas = manga.imagenes.length;
        const paginaActual = this.estado.paginaActual;
        
        // Actualizar elementos si existen
        const imagenElement = document.getElementById('imagen-manga-actual');
        if (imagenElement) {
            imagenElement.src = manga.imagenes[paginaActual];
        }
        
        const contadorElement = document.querySelector('.contador-pagina');
        if (contadorElement) {
            contadorElement.textContent = `Página ${paginaActual + 1} de ${totalPaginas}`;
        }
        
        const barraProgreso = document.querySelector('.barra-progreso-fill-manga');
        if (barraProgreso) {
            barraProgreso.style.width = `${((paginaActual + 1) / totalPaginas) * 100}%`;
        }
        
        const porcentajeElement = document.querySelector('.porcentaje-lectura');
        if (porcentajeElement) {
            porcentajeElement.textContent = `${Math.round(((paginaActual + 1) / totalPaginas) * 100)}% leído`;
        }
        
        // Actualizar miniaturas activas
        document.querySelectorAll('.miniatura').forEach((miniatura, index) => {
            if (index === paginaActual) {
                miniatura.classList.add('miniatura-activa');
            } else {
                miniatura.classList.remove('miniatura-activa');
            }
        });
        
        // Actualizar estadísticas
        const estadisticas = document.querySelectorAll('.estadistica-valor');
        if (estadisticas.length >= 2) {
            estadisticas[1].textContent = totalPaginas - (paginaActual + 1);
            estadisticas[2].textContent = `${Math.round(((paginaActual + 1) / totalPaginas) * 100)}%`;
        }
    },
    
    // Mostrar mensaje de fin del manga
    mostrarFinDelManga: function() {
        alert("🎉 ¡Felicidades! Has terminado de leer este manga.\n\n¿Quieres volver al inicio o continuar en otra sección?");
        
        // Opcional: Dar recompensa por completar
        if (typeof sistemaEconomia !== 'undefined') {
            sistemaEconomia.agregarDinero(2, "Manga completado");
        }
        
        // Volver al subcontenedor
        this.volverASubcontenedor();
    },
    
    // Volver al subcontenedor
    volverASubcontenedor: function() {
        // Eliminar pantalla de manga
        const pantallaManga = document.getElementById('pantalla-lectura-manga');
        if (pantallaManga) {
            pantallaManga.remove();
        }
        
        // Restaurar pantalla de subcontenedores
        this.estado.pantallaActiva = false;
        
        // Mostrar pantalla de subcontenedores
        const pantallaSubcontenedores = document.getElementById('pantalla-subcontenedores');
        if (pantallaSubcontenedores) {
            pantallaSubcontenedores.classList.add('activa');
        } else {
            // Si no existe, ir al inicio
            cambiarPantalla('pantalla-inicio');
        }
        
        console.log("🔙 Volviendo al subcontenedor");
    },
    
    // ============================================================================
    // FUNCIONES DE CONFIGURACIÓN DESDE CONSOLA
    // ============================================================================
    
    // Agregar un nuevo manga desde consola
    agregarManga: function(subcontenedorId, titulo, descripcion, imagenes = []) {
        if (!this.mangasPorSubcontenedor[subcontenedorId]) {
            this.mangasPorSubcontenedor[subcontenedorId] = {
                titulo: titulo || `Manga de ${subcontenedorId}`,
                descripcion: descripcion || 'Sin descripción',
                imagenes: imagenes
            };
            console.log(`✅ Manga agregado para ${subcontenedorId}: "${titulo}"`);
            console.log(`📄 ${imagenes.length} imágenes agregadas`);
            return true;
        } else {
            console.log(`⚠️ ${subcontenedorId} ya tiene manga. Usa agregarImagenesManga()`);
            return false;
        }
    },
    
    // Agregar imágenes a un manga existente
    agregarImagenesManga: function(subcontenedorId, nuevasImagenes = []) {
        if (this.mangasPorSubcontenedor[subcontenedorId]) {
            const manga = this.mangasPorSubcontenedor[subcontenedorId];
            const imagenesPrevias = manga.imagenes.length;
            
            manga.imagenes = [...manga.imagenes, ...nuevasImagenes];
            
            console.log(`✅ ${nuevasImagenes.length} imágenes agregadas a ${subcontenedorId}`);
            console.log(`📊 Total ahora: ${manga.imagenes.length} imágenes (antes: ${imagenesPrevias})`);
            return true;
        } else {
            console.log(`❌ ${subcontenedorId} no tiene manga configurado`);
            return false;
        }
    },
    
    // Ver todos los mangas configurados
    verTodosLosMangas: function() {
        console.log("📚 Todos los mangas configurados:");
        Object.entries(this.mangasPorSubcontenedor).forEach(([subId, manga]) => {
            console.log(`${subId}:`);
            console.log(`  Título: ${manga.titulo}`);
            console.log(`  Descripción: ${manga.descripcion}`);
            console.log(`  Páginas: ${manga.imagenes.length}`);
            console.log(`  Progreso: ${manga.paginaActual || 0}/${manga.imagenes.length}`);
            console.log("---");
        });
    },
    
    // Reiniciar progreso de un manga
    reiniciarProgresoManga: function(subcontenedorId) {
        if (this.mangasPorSubcontenedor[subcontenedorId]) {
            this.mangasPorSubcontenedor[subcontenedorId].paginaActual = 0;
            this.guardarProgreso(subcontenedorId, 0);
            console.log(`🔄 Progreso reiniciado para ${subcontenedorId}`);
            return true;
        }
        return false;
    },
    
    // Reiniciar TODOS los progresos
    reiniciarTodosLosProgresos: function() {
        Object.keys(this.mangasPorSubcontenedor).forEach(subId => {
            this.mangasPorSubcontenedor[subId].paginaActual = 0;
            this.guardarProgreso(subId, 0);
        });
        console.log("🔄 Todos los progresos de manga reiniciados");
    }
};

// ============================================================================
// FUNCIONES GLOBALES PARA USAR DESDE OTROS ARCHIVOS
// ============================================================================

// Función global para iniciar lectura desde subcontenedor
function iniciarLecturaManga(subcontenedorId) {
    sistemaManga.iniciarLectura(subcontenedorId);
}

// Función global para agregar manga desde consola
window.agregarManga = function(subcontenedorId, titulo, descripcion, imagenes = []) {
    return sistemaManga.agregarManga(subcontenedorId, titulo, descripcion, imagenes);
};

// Función global para agregar imágenes
window.agregarImagenesManga = function(subcontenedorId, nuevasImagenes = []) {
    return sistemaManga.agregarImagenesManga(subcontenedorId, nuevasImagenes);
};

// Función global para ver todos los mangas
window.verTodosLosMangas = function() {
    sistemaManga.verTodosLosMangas();
};

// Función global para reiniciar progreso
window.reiniciarProgresoManga = function(subcontenedorId) {
    return sistemaManga.reiniciarProgresoManga(subcontenedorId);
};

// Función global para reiniciar todos los progresos
window.reiniciarTodosLosProgresosManga = function() {
    sistemaManga.reiniciarTodosLosProgresos();
};

// Inicializar sistema cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        sistemaManga.inicializar();
        console.log("📚 Sistema de manga listo para usar");
    }, 100);
});
