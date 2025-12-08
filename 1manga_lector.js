
// ============================================================================
// SISTEMA DE LECTOR DE MANGA COMPLETO
// Cada subcontenedor tiene su propio manga para leer
// ============================================================================

const mangaDatabase = {
    // ================================================
    // THE LAST SUMMER 1
    // ================================================
    
    // Sub-contenedor 1.1
    'sub1_1': {
        titulo: '🌅 Amanecer en la Posada',
        descripcion: 'El primer encuentro en la posada de verano',
        autor: 'Autor The Last Summer',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub1_1/pagina1.jpg',
            'imagenes/manga/sub1_1/pagina2.jpg',
            'imagenes/manga/sub1_1/pagina3.jpg',
            'imagenes/manga/sub1_1/pagina4.jpg',
            'imagenes/manga/sub1_1/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 1.2
    'sub1_2': {
        titulo: '🏫 Días de Escuela',
        descripcion: 'Recuerdos de la vida escolar',
        autor: 'Autor The Last Summer',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub1_2/pagina1.jpg',
            'imagenes/manga/sub1_2/pagina2.jpg',
            'imagenes/manga/sub1_2/pagina3.jpg',
            'imagenes/manga/sub1_2/pagina4.jpg',
            'imagenes/manga/sub1_2/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 1.3
    'sub1_3': {
        titulo: '🏠 La Familia',
        descripcion: 'Historias familiares y tradiciones',
        autor: 'Autor The Last Summer',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub1_3/pagina1.jpg',
            'imagenes/manga/sub1_3/pagina2.jpg',
            'imagenes/manga/sub1_3/pagina3.jpg',
            'imagenes/manga/sub1_3/pagina4.jpg',
            'imagenes/manga/sub1_3/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // ================================================
    // THE LAST SUMMER 2
    // ================================================
    
    // Sub-contenedor 2.1
    'sub2_1': {
        titulo: '💬 Conversaciones Profundas',
        descripcion: 'Diálogos que cambian vidas',
        autor: 'Autor The Last Summer 2',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub2_1/pagina1.jpg',
            'imagenes/manga/sub2_1/pagina2.jpg',
            'imagenes/manga/sub2_1/pagina3.jpg',
            'imagenes/manga/sub2_1/pagina4.jpg',
            'imagenes/manga/sub2_1/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 2.2
    'sub2_2': {
        titulo: '🌍 Mundo Exterior',
        descripcion: 'Explorando el mundo juntos',
        autor: 'Autor The Last Summer 2',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub2_2/pagina1.jpg',
            'imagenes/manga/sub2_2/pagina2.jpg',
            'imagenes/manga/sub2_2/pagina3.jpg',
            'imagenes/manga/sub2_2/pagina4.jpg',
            'imagenes/manga/sub2_2/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 2.3
    'sub2_3': {
        titulo: '✈️ Viaje Inolvidable',
        descripcion: 'Aventuras en tierras lejanas',
        autor: 'Autor The Last Summer 2',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub2_3/pagina1.jpg',
            'imagenes/manga/sub2_3/pagina2.jpg',
            'imagenes/manga/sub2_3/pagina3.jpg',
            'imagenes/manga/sub2_3/pagina4.jpg',
            'imagenes/manga/sub2_3/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 2.4 (TU NUEVO)
    'sub2_4': {
        titulo: '🏊‍♂️ Natación y Amor',
        descripcion: 'Historia de amor en el club de natación',
        autor: 'Fabrizio',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub2_4/pagina1.jpg',
            'imagenes/manga/sub2_4/pagina2.jpg',
            'imagenes/manga/sub2_4/pagina3.jpg',
            'imagenes/manga/sub2_4/pagina4.jpg',
            'imagenes/manga/sub2_4/pagina5.jpg',
            'imagenes/manga/sub2_4/pagina6.jpg',
            'imagenes/manga/sub2_4/pagina7.jpg',
            'imagenes/manga/sub2_4/pagina8.jpg',
            'imagenes/manga/sub2_4/pagina9.jpg',
            'imagenes/manga/sub2_4/pagina10.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 5 // Recompensa especial por ser más largo
    },
    
    // ================================================
    // THE LAST SUMMER 3 (YAMADA)
    // ================================================
    
    // Sub-contenedor 3.1
    'sub3_1': {
        titulo: '🎌 Primer Encuentro',
        descripcion: 'Yamada conoce a su interés amoroso',
        autor: 'Autor Yamada',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub3_1/pagina1.jpg',
            'imagenes/manga/sub3_1/pagina2.jpg',
            'imagenes/manga/sub3_1/pagina3.jpg',
            'imagenes/manga/sub3_1/pagina4.jpg',
            'imagenes/manga/sub3_1/pagina5.jpg',
            'imagenes/manga/sub3_1/pagina6.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 3.2
    'sub3_2': {
        titulo: '🌌 Universo y Tiempo',
        descripcion: 'Reflexiones sobre la existencia',
        autor: 'Autor Yamada',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub3_2/pagina1.jpg',
            'imagenes/manga/sub3_2/pagina2.jpg',
            'imagenes/manga/sub3_2/pagina3.jpg',
            'imagenes/manga/sub3_2/pagina4.jpg',
            'imagenes/manga/sub3_2/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // Sub-contenedor 3.3
    'sub3_3': {
        titulo: '📜 Mitos y Leyendas',
        descripcion: 'Historias antiguas y misterios',
        autor: 'Autor Yamada',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub3_3/pagina1.jpg',
            'imagenes/manga/sub3_3/pagina2.jpg',
            'imagenes/manga/sub3_3/pagina3.jpg',
            'imagenes/manga/sub3_3/pagina4.jpg',
            'imagenes/manga/sub3_3/pagina5.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 3
    },
    
    // ================================================
    // CONTENEDORES 4-10 (COMPLETOS)
    // ================================================
    
    // Sub-contenedor 4.1
    'sub4_1': {
        titulo: '🎭 Nueva Historia 4.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub4_1/pagina1.jpg',
            'imagenes/manga/sub4_1/pagina2.jpg',
            'imagenes/manga/sub4_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 4.2
    'sub4_2': {
        titulo: '🎭 Nueva Historia 4.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub4_2/pagina1.jpg',
            'imagenes/manga/sub4_2/pagina2.jpg',
            'imagenes/manga/sub4_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 4.3
    'sub4_3': {
        titulo: '🎭 Nueva Historia 4.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub4_3/pagina1.jpg',
            'imagenes/manga/sub4_3/pagina2.jpg',
            'imagenes/manga/sub4_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 5.1
    'sub5_1': {
        titulo: '🎭 Nueva Historia 5.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub5_1/pagina1.jpg',
            'imagenes/manga/sub5_1/pagina2.jpg',
            'imagenes/manga/sub5_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 5.2
    'sub5_2': {
        titulo: '🎭 Nueva Historia 5.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub5_2/pagina1.jpg',
            'imagenes/manga/sub5_2/pagina2.jpg',
            'imagenes/manga/sub5_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 5.3
    'sub5_3': {
        titulo: '🎭 Nueva Historia 5.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub5_3/pagina1.jpg',
            'imagenes/manga/sub5_3/pagina2.jpg',
            'imagenes/manga/sub5_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 6.1
    'sub6_1': {
        titulo: '🎭 Nueva Historia 6.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub6_1/pagina1.jpg',
            'imagenes/manga/sub6_1/pagina2.jpg',
            'imagenes/manga/sub6_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 6.2
    'sub6_2': {
        titulo: '🎭 Nueva Historia 6.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub6_2/pagina1.jpg',
            'imagenes/manga/sub6_2/pagina2.jpg',
            'imagenes/manga/sub6_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 6.3
    'sub6_3': {
        titulo: '🎭 Nueva Historia 6.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub6_3/pagina1.jpg',
            'imagenes/manga/sub6_3/pagina2.jpg',
            'imagenes/manga/sub6_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 7.1
    'sub7_1': {
        titulo: '🎭 Nueva Historia 7.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub7_1/pagina1.jpg',
            'imagenes/manga/sub7_1/pagina2.jpg',
            'imagenes/manga/sub7_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 7.2
    'sub7_2': {
        titulo: '🎭 Nueva Historia 7.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub7_2/pagina1.jpg',
            'imagenes/manga/sub7_2/pagina2.jpg',
            'imagenes/manga/sub7_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 7.3
    'sub7_3': {
        titulo: '🎭 Nueva Historia 7.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub7_3/pagina1.jpg',
            'imagenes/manga/sub7_3/pagina2.jpg',
            'imagenes/manga/sub7_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 8.1
    'sub8_1': {
        titulo: '🎭 Nueva Historia 8.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub8_1/pagina1.jpg',
            'imagenes/manga/sub8_1/pagina2.jpg',
            'imagenes/manga/sub8_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 8.2
    'sub8_2': {
        titulo: '🎭 Nueva Historia 8.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub8_2/pagina1.jpg',
            'imagenes/manga/sub8_2/pagina2.jpg',
            'imagenes/manga/sub8_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 8.3
    'sub8_3': {
        titulo: '🎭 Nueva Historia 8.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub8_3/pagina1.jpg',
            'imagenes/manga/sub8_3/pagina2.jpg',
            'imagenes/manga/sub8_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 9.1
    'sub9_1': {
        titulo: '🎭 Nueva Historia 9.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub9_1/pagina1.jpg',
            'imagenes/manga/sub9_1/pagina2.jpg',
            'imagenes/manga/sub9_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 9.2
    'sub9_2': {
        titulo: '🎭 Nueva Historia 9.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub9_2/pagina1.jpg',
            'imagenes/manga/sub9_2/pagina2.jpg',
            'imagenes/manga/sub9_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 9.3
    'sub9_3': {
        titulo: '🎭 Nueva Historia 9.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub9_3/pagina1.jpg',
            'imagenes/manga/sub9_3/pagina2.jpg',
            'imagenes/manga/sub9_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 10.1
    'sub10_1': {
        titulo: '🎭 Nueva Historia 10.1',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub10_1/pagina1.jpg',
            'imagenes/manga/sub10_1/pagina2.jpg',
            'imagenes/manga/sub10_1/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 10.2
    'sub10_2': {
        titulo: '🎭 Nueva Historia 10.2',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub10_2/pagina1.jpg',
            'imagenes/manga/sub10_2/pagina2.jpg',
            'imagenes/manga/sub10_2/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    },
    
    // Sub-contenedor 10.3
    'sub10_3': {
        titulo: '🎭 Nueva Historia 10.3',
        descripcion: 'Comienza una nueva aventura',
        autor: 'Autor Desconocido',
        capitulos: 1,
        paginas: [
            'imagenes/manga/sub10_3/pagina1.jpg',
            'imagenes/manga/sub10_3/pagina2.jpg',
            'imagenes/manga/sub10_3/pagina3.jpg'
        ],
        progreso: 0,
        completado: false,
        recompensa: 2
    }
};

// ============================================================================
// SISTEMA DE PROGRESO Y GUARDADO
// ============================================================================

const sistemaManga = {
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('sistemaManga');
            if (datos) {
                const datosParseados = JSON.parse(datos);
                // Actualizar progreso en la base de datos
                Object.keys(datosParseados).forEach(subcontenedorId => {
                    if (mangaDatabase[subcontenedorId]) {
                        mangaDatabase[subcontenedorId].progreso = datosParseados[subcontenedorId].progreso || 0;
                        mangaDatabase[subcontenedorId].completado = datosParseados[subcontenedorId].completado || false;
                    }
                });
                console.log("📚 Progreso de manga cargado correctamente");
            }
        } catch (e) {
            console.error("Error cargando progreso de manga:", e);
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            const datosAGuardar = {};
            Object.keys(mangaDatabase).forEach(subcontenedorId => {
                datosAGuardar[subcontenedorId] = {
                    progreso: mangaDatabase[subcontenedorId].progreso,
                    completado: mangaDatabase[subcontenedorId].completado
                };
            });
            localStorage.setItem('sistemaManga', JSON.stringify(datosAGuardar));
            console.log("💾 Progreso de manga guardado");
            return true;
        } catch (e) {
            console.error("Error guardando progreso de manga:", e);
            return false;
        }
    },
    
    // Obtener manga de un subcontenedor
    obtenerManga: function(subcontenedorId) {
        return mangaDatabase[subcontenedorId] || null;
    },
    
    // Verificar si tiene manga
    tieneManga: function(subcontenedorId) {
        return !!mangaDatabase[subcontenedorId];
    },
    
    // Iniciar lectura
    iniciarLectura: function(subcontenedorId) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga) return false;
        
        // Si no ha empezado, empezar desde la primera página
        if (manga.progreso === 0) {
            manga.progreso = 1;
            this.guardarDatos();
            console.log(`📖 Iniciando lectura de manga: ${manga.titulo}`);
        }
        
        return true;
    },
    
    // Avanzar página
    avanzarPagina: function(subcontenedorId) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga) return false;
        
        if (manga.progreso < manga.paginas.length) {
            manga.progreso++;
            console.log(`➡️ Avanzando a página ${manga.progreso} de ${manga.titulo}`);
            
            // Marcar como completado si llegó al final
            if (manga.progreso === manga.paginas.length) {
                manga.completado = true;
                console.log(`🎉 Manga completado: ${manga.titulo}`);
                
                // Dar recompensa por completar manga
                if (typeof sistemaEconomia !== 'undefined') {
                    sistemaEconomia.agregarDinero(manga.recompensa || 3, `Manga completado: ${manga.titulo}`);
                }
                
                // Mostrar notificación
                this.mostrarNotificacion(`🎉 ¡Manga completado! +${manga.recompensa || 3} S/.`);
            }
            
            this.guardarDatos();
            return true;
        }
        return false;
    },
    
    // Retroceder página
    retrocederPagina: function(subcontenedorId) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga) return false;
        
        if (manga.progreso > 1) {
            manga.progreso--;
            manga.completado = false; // Ya no está completado
            console.log(`⬅️ Retrocediendo a página ${manga.progreso} de ${manga.titulo}`);
            this.guardarDatos();
            return true;
        }
        return false;
    },
    
    // Ir a página específica
    irAPagina: function(subcontenedorId, numeroPagina) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga) return false;
        
        if (numeroPagina >= 1 && numeroPagina <= manga.paginas.length) {
            manga.progreso = numeroPagina;
            
            // Ajustar estado de completado
            if (manga.progreso === manga.paginas.length) {
                manga.completado = true;
            } else {
                manga.completado = false;
            }
            
            this.guardarDatos();
            console.log(`📄 Yendo a página ${numeroPagina} de ${manga.titulo}`);
            return true;
        }
        return false;
    },
    
    // Obtener página actual
    obtenerPaginaActual: function(subcontenedorId) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga || manga.progreso < 1 || manga.progreso > manga.paginas.length) {
            return null;
        }
        return manga.paginas[manga.progreso - 1];
    },
    
    // Obtener progreso
    obtenerProgreso: function(subcontenedorId) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga) return { actual: 0, total: 0, porcentaje: 0 };
        
        return {
            actual: manga.progreso,
            total: manga.paginas.length,
            porcentaje: Math.round((manga.progreso / manga.paginas.length) * 100)
        };
    },
    
    // Reiniciar lectura
    reiniciarLectura: function(subcontenedorId) {
        const manga = this.obtenerManga(subcontenedorId);
        if (!manga) return false;
        
        manga.progreso = 0;
        manga.completado = false;
        this.guardarDatos();
        console.log(`🔄 Reiniciando manga: ${manga.titulo}`);
        return true;
    },
    
    // Obtener estadísticas
    obtenerEstadisticas: function() {
        let totalMangas = 0;
        let completados = 0;
        let paginasLeidas = 0;
        let paginasTotales = 0;
        
        Object.values(mangaDatabase).forEach(manga => {
            totalMangas++;
            if (manga.completado) completados++;
            paginasLeidas += manga.progreso;
            paginasTotales += manga.paginas.length;
        });
        
        return {
            totalMangas: totalMangas,
            completados: completados,
            porcentajeCompletado: Math.round((completados / totalMangas) * 100),
            paginasLeidas: paginasLeidas,
            paginasTotales: paginasTotales,
            porcentajePaginas: Math.round((paginasLeidas / paginasTotales) * 100)
        };
    },
    
    // Mostrar notificación
    mostrarNotificacion: function(mensaje) {
        // Crear notificación temporal
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff9800, #ff5722);
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
    },
    
    // Inicializar sistema
    inicializar: function() {
        this.cargarDatos();
        console.log(`📚 Sistema de manga inicializado. Mangas disponibles: ${Object.keys(mangaDatabase).length}`);
    }
};

// ============================================================================
// FUNCIONES DE INTERFAZ
// ============================================================================

// Función para mostrar botón de manga en la pantalla de mazos
function agregarBotonManga(subcontenedorId) {
    // Verificar si este subcontenedor tiene manga
    if (!sistemaManga.tieneManga(subcontenedorId)) {
        return '';
    }
    
    const manga = sistemaManga.obtenerManga(subcontenedorId);
    const progreso = sistemaManga.obtenerProgreso(subcontenedorId);
    
    let badge = '';
    let estadoClase = '';
    
    if (manga.completado) {
        badge = '<span class="manga-badge completado">✅ COMPLETADO</span>';
        estadoClase = ' manga-completado';
    } else if (progreso.actual > 0) {
        badge = `<span class="manga-badge en-progreso">📖 ${progreso.actual}/${progreso.total}</span>`;
        estadoClase = ' manga-en-progreso';
    } else {
        estadoClase = ' manga-nuevo';
    }
    
    return `
        <div class="mazo-card manga-card${estadoClase}" onclick="iniciarLecturaManga('${subcontenedorId}')">
            <div class="manga-icon">📖</div>
            <div class="mazo-texto">LEER MANGA</div>
            <div class="manga-titulo">${manga.titulo}</div>
            <div class="manga-descripcion">${manga.descripcion}</div>
            ${badge}
            <div class="mazo-info">${manga.paginas.length} páginas • +${manga.recompensa || 3} S/.</div>
        </div>
    `;
}

// Función para iniciar lectura de manga
function iniciarLecturaManga(subcontenedorId) {
    const manga = sistemaManga.obtenerManga(subcontenedorId);
    if (!manga) {
        console.error("Manga no encontrado para:", subcontenedorId);
        mostrarNotificacion("❌ Error: Manga no disponible");
        return;
    }
    
    // Guardar manga actual
    window.mangaActual = subcontenedorId;
    
    // Actualizar interfaz
    document.getElementById('titulo-manga').textContent = manga.titulo;
    document.getElementById('descripcion-manga').textContent = manga.descripcion;
    document.getElementById('autor-manga').textContent = `✍️ Autor: ${manga.autor}`;
    document.getElementById('capitulos-manga').textContent = `📚 Capítulos: ${manga.capitulos}`;
    document.getElementById('recompensa-manga').textContent = `💰 Recompensa: +${manga.recompensa || 3} S/.`;
    
    // Iniciar lectura si no ha empezado
    sistemaManga.iniciarLectura(subcontenedorId);
    
    // Mostrar primera página
    mostrarPaginaManga(subcontenedorId);
    
    // Cambiar a pantalla de manga
    cambiarPantalla('pantalla-manga');
    
    console.log(`📖 Iniciando lectura: ${manga.titulo}`);
}

// Función para mostrar página actual
function mostrarPaginaManga(subcontenedorId) {
    const manga = sistemaManga.obtenerManga(subcontenedorId);
    const pagina = sistemaManga.obtenerPaginaActual(subcontenedorId);
    const progreso = sistemaManga.obtenerProgreso(subcontenedorId);
    
    if (!pagina || !manga) {
        document.getElementById('imagen-manga').innerHTML = `
            <div class="manga-error">
                <div style="font-size: 3em;">❌</div>
                <p>Error cargando página</p>
                <p>Verifica que la imagen exista:</p>
                <code>${pagina || 'URL no disponible'}</code>
            </div>
        `;
        return;
    }
    
    // Actualizar imagen
    document.getElementById('imagen-manga').innerHTML = `
        <img src="${pagina}" 
             alt="Página ${progreso.actual} - ${manga.titulo}" 
             class="manga-pagina" 
             onload="this.style.opacity='1'; console.log('✅ Imagen cargada: ${pagina}')" 
             onerror="this.onerror=null; 
                      this.src='imagenes/manga/error.jpg';
                      console.error('❌ Error cargando imagen: ${pagina}')"
             onclick="paginaSiguienteManga()">
    `;
    
    // Actualizar contador
    document.getElementById('contador-pagina').textContent = `📄 Página ${progreso.actual} de ${progreso.total}`;
    document.getElementById('contador-pagina').title = `Progreso: ${progreso.porcentaje}%`;
    
    // Actualizar barra de progreso
    document.getElementById('barra-progreso-manga').style.width = `${progreso.porcentaje}%`;
    document.getElementById('barra-progreso-manga').title = `${progreso.porcentaje}% completado`;
    
    // Actualizar botones
    document.getElementById('boton-anterior').disabled = (progreso.actual <= 1);
    document.getElementById('boton-siguiente').disabled = (progreso.actual >= progreso.total);
    
    // Actualizar título de botones
    document.getElementById('boton-anterior').title = progreso.actual <= 1 ? 'Primera página' : `Página ${progreso.actual - 1}`;
    document.getElementById('boton-siguiente').title = progreso.actual >= progreso.total ? 'Última página' : `Página ${progreso.actual + 1}`;
    
    // Actualizar selector de página
    const selectorPagina = document.getElementById('selector-pagina');
    if (selectorPagina) {
        selectorPagina.innerHTML = '';
        for (let i = 1; i <= progreso.total; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Página ${i}`;
            if (i === progreso.actual) option.selected = true;
            selectorPagina.appendChild(option);
        }
        selectorPagina.disabled = false;
    }
    
    // Mostrar mensaje si está completado
    const mensajeCompletado = document.getElementById('mensaje-completado');
    if (mensajeCompletado) {
        if (manga.completado) {
            mensajeCompletado.style.display = 'block';
            mensajeCompletado.innerHTML = `
                <div style="color: #00ff88; font-weight: bold;">🎉 ¡MANGA COMPLETADO!</div>
                <div>Recompensa obtenida: +${manga.recompensa || 3} S/.</div>
            `;
        } else {
            mensajeCompletado.style.display = 'none';
        }
    }
}

// Función para página siguiente
function paginaSiguienteManga() {
    if (!window.mangaActual) return;
    
    if (sistemaManga.avanzarPagina(window.mangaActual)) {
        mostrarPaginaManga(window.mangaActual);
    }
}

// Función para página anterior
function paginaAnteriorManga() {
    if (!window.mangaActual) return;
    
    if (sistemaManga.retrocederPagina(window.mangaActual)) {
        mostrarPaginaManga(window.mangaActual);
    }
}

// Función para ir a página específica
function irAPaginaManga(numeroPagina) {
    if (!window.mangaActual || !numeroPagina) return;
    
    if (sistemaManga.irAPagina(window.mangaActual, parseInt(numeroPagina))) {
        mostrarPaginaManga(window.mangaActual);
    }
}

// Función para volver a mazos desde manga
function volverAMazosDesdeManga() {
    if (window.subcontenedorActual) {
        cargarSubcontenedor(window.subcontenedorActual);
    } else {
        cambiarPantalla('pantalla-mazos');
    }
}

// Función para reiniciar manga actual
function reiniciarMangaActual() {
    if (!window.mangaActual) return;
    
    if (confirm("¿Estás seguro de reiniciar este manga?\nSe perderá tu progreso actual.")) {
        sistemaManga.reiniciarLectura(window.mangaActual);
        mostrarPaginaManga(window.mangaActual);
        mostrarNotificacion("🔄 Manga reiniciado");
    }
}

// Función auxiliar para mostrar notificación
function mostrarNotificacion(mensaje) {
    if (typeof misionesDiarias !== 'undefined' && misionesDiarias.mostrarNotificacion) {
        misionesDiarias.mostrarNotificacion(mensaje);
    } else {
        // Fallback simple
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff9800, #ff5722);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);
        setTimeout(() => notificacion.remove(), 3000);
    }
}

// ============================================================================
// FUNCIONES DE TESTING DESDE CONSOLA
// ============================================================================

window.verTodosMangas = function() {
    console.log("📚 TODOS LOS MANGAS DISPONIBLES:");
    console.log("=================================");
    
    const stats = sistemaManga.obtenerEstadisticas();
    
    console.log(`📊 ESTADÍSTICAS:`);
    console.log(`   Mangas totales: ${stats.totalMangas}`);
    console.log(`   Completados: ${stats.completados} (${stats.porcentajeCompletado}%)`);
    console.log(`   Páginas leídas: ${stats.paginasLeidas}/${stats.paginasTotales} (${stats.porcentajePaginas}%)`);
    console.log("");
    
    // Agrupar por contenedor
    const porContenedor = {};
    Object.entries(mangaDatabase).forEach(([id, manga]) => {
        const contenedor = id.split('_')[0]; // sub1, sub2, etc.
        if (!porContenedor[contenedor]) porContenedor[contenedor] = [];
        porContenedor[contenedor].push({id, manga});
    });
    
    Object.entries(porContenedor).forEach(([contenedor, mangas]) => {
        console.log(`\n📁 ${contenedor.toUpperCase()}:`);
        mangas.forEach(({id, manga}) => {
            const progreso = sistemaManga.obtenerProgreso(id);
            const estado = manga.completado ? '✅' : (progreso.actual > 0 ? '📖' : '🆕');
            console.log(`   ${estado} ${id}: ${manga.titulo}`);
            console.log(`       Progreso: ${progreso.actual}/${progreso.total} (${progreso.porcentaje}%)`);
            console.log(`       Páginas: ${manga.paginas.length}`);
            console.log(`       Recompensa: ${manga.recompensa || 3} S/.`);
        });
    });
};

window.agregarMangaTest = function(subcontenedorId, titulo, paginasCount) {
    const paginas = [];
    for (let i = 1; i <= paginasCount; i++) {
        paginas.push(`imagenes/manga/${subcontenedorId}/pagina${i}.jpg`);
    }
    
    mangaDatabase[subcontenedorId] = {
        titulo: titulo || `Manga de ${subcontenedorId}`,
        descripcion: 'Manga agregado desde testing',
        autor: 'Testing',
        capitulos: 1,
        paginas: paginas,
        progreso: 0,
        completado: false,
        recompensa: 3
    };
    
    console.log(`✅ Manga agregado para ${subcontenedorId}:`);
    console.log(`   Título: ${titulo}`);
    console.log(`   Páginas: ${paginasCount}`);
    console.log(`   Recompensa: 3 S/.`);
    return true;
};

window.reiniciarManga = function(subcontenedorId) {
    if (sistemaManga.reiniciarLectura(subcontenedorId)) {
        console.log(`🔄 Manga ${subcontenedorId} reiniciado`);
        return true;
    }
    return false;
};

window.completarManga = function(subcontenedorId) {
    const manga = sistemaManga.obtenerManga(subcontenedorId);
    if (!manga) {
        console.log(`❌ Manga ${subcontenedorId} no encontrado`);
        return false;
    }
    
    manga.progreso = manga.paginas.length;
    manga.completado = true;
    sistemaManga.guardarDatos();
    
    console.log(`🎉 Manga ${subcontenedorId} marcado como completado`);
    console.log(`   Recompensa: +${manga.recompensa || 3} S/.`);
    
    return true;
};

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

// Inicializar sistema al cargar
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un momento para que otros sistemas se inicialicen
    setTimeout(() => {
        sistemaManga.inicializar();
        console.log("📚 Sistema de manga listo");
        console.log(`🎯 Mangas disponibles: ${Object.keys(mangaDatabase).length}`);
        
        // Mostrar estadísticas en consola
        const stats = sistemaManga.obtenerEstadisticas();
        console.log(`📊 ${stats.completados}/${stats.totalMangas} mangas completados`);
    }, 500);
});

// ============================================================================
// EXPORTAR PARA USO GLOBAL
// ============================================================================

window.mangaDatabase = mangaDatabase;
window.sistemaManga = sistemaManga;
window.agregarBotonManga = agregarBotonManga;
window.iniciarLecturaManga = iniciarLecturaManga;
window.paginaSiguienteManga = paginaSiguienteManga;
window.paginaAnteriorManga = paginaAnteriorManga;
window.irAPaginaManga = irAPaginaManga;
window.volverAMazosDesdeManga = volverAMazosDesdeManga;
window.reiniciarMangaActual = reiniciarMangaActual;

console.log("✅ 1manga_lector.js cargado - Sistema de manga completo");
