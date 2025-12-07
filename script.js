// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES
// ============================================================================

// Aquí puedes cambiar las URLs de todas las imágenes
const configImagenes = {
    contenedores: {
        'contenedor1': 'imagenes/contenedor1.jpg',
        'contenedor2': 'imagenes/contenedor2.jpg',
        'contenedor3': 'imagenes/contenedor3.jpg',
        'contenedor4': 'imagenes/contenedor4.jpg',
        'contenedor5': 'imagenes/contenedor5.jpg',
        'contenedor6': 'imagenes/contenedor6.jpg',
        'contenedor7': 'imagenes/contenedor7.jpg',
        'contenedor8': 'imagenes/contenedor8.jpg',
        'contenedor9': 'imagenes/contenedor9.jpg',
        'contenedor10': 'imagenes/contenedor10.jpg'
    },
    subcontenedores: {
        'sub1_1': 'https://pbs.twimg.com/media/G5_unInW4AA4bVq?format=png&name=large',
        'sub1_2': 'https://pbs.twimg.com/media/G5_vVCEX0AAnsA7?format=jpg&name=large',
        'sub1_3': 'https://pbs.twimg.com/media/G5_vDqIXgAAa8et?format=png&name=large',
        'sub1_4': '',
        'sub1_5': '',
        'sub2_1': 'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
        'sub2_2': 'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large',
        'sub2_3': 'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
        'sub2_4': '',
        'sub2_5': '',
        'sub3_1': 'https://pbs.twimg.com/media/G67wm2LXMAATzxp?format=jpg&name=small',
        'sub3_2': 'imagenes/sub3_2.jpg',
        'sub3_3': 'imagenes/sub3_3.jpg',
        'sub3_4': 'imagenes/sub3_4.jpg',
        'sub3_5': 'imagenes/sub3_5.jpg',
        'sub4_1': 'imagenes/sub4_1.jpg',
        'sub4_2': 'imagenes/sub4_2.jpg',
        'sub4_3': 'imagenes/sub4_3.jpg',
        'sub4_4': 'imagenes/sub4_4.jpg',
        'sub4_5': 'imagenes/sub4_5.jpg',
        'sub5_1': 'imagenes/sub5_1.jpg',
        'sub5_2': 'imagenes/sub5_2.jpg',
        'sub5_3': 'imagenes/sub5_3.jpg',
        'sub5_4': 'imagenes/sub5_5.jpg',
        'sub5_5': 'imagenes/sub5_5.jpg',
        'sub6_1': 'imagenes/sub6_1.jpg',
        'sub6_2': 'imagenes/sub6_2.jpg',
        'sub6_3': 'imagenes/sub6_3.jpg',
        'sub6_4': 'imagenes/sub6_4.jpg',
        'sub6_5': 'imagenes/sub6_5.jpg',
        'sub7_1': 'imagenes/sub7_1.jpg',
        'sub7_2': 'imagenes/sub7_2.jpg',
        'sub7_3': 'imagenes/sub7_3.jpg',
        'sub7_4': 'imagenes/sub7_4.jpg',
        'sub7_5': 'imagenes/sub7_5.jpg',
        'sub8_1': 'imagenes/sub8_1.jpg',
        'sub8_2': 'imagenes/sub8_2.jpg',
        'sub8_3': 'imagenes/sub8_3.jpg',
        'sub8_4': 'imagenes/sub8_4.jpg',
        'sub8_5': 'imagenes/sub8_5.jpg',
        'sub9_1': 'imagenes/sub9_1.jpg',
        'sub9_2': 'imagenes/sub9_2.jpg',
        'sub9_3': 'imagenes/sub9_3.jpg',
        'sub9_4': 'imagenes/sub9_4.jpg',
        'sub9_5': 'imagenes/sub9_5.jpg',
        'sub10_1': 'imagenes/sub10_1.jpg',
        'sub10_2': 'imagenes/sub10_2.jpg',
        'sub10_3': 'imagenes/sub10_3.jpg',
        'sub10_4': 'imagenes/sub10_4.jpg',
        'sub10_5': 'imagenes/sub10_5.jpg'
    },
    mazos: {
        'mazo1': 'imagenes/mazo1.jpg',
        'mazo2': 'imagenes/mazo2.jpg',
        'mazo3': 'imagenes/mazo3.jpg',
        'mazo4': 'imagenes/mazo4.jpg',
        'mazo5': 'imagenes/mazo5.jpg'
    },
    rpg: {
        novia: 'https://static.wikia.nocookie.net/5hanayome/images/6/64/Nino_Nakano_Anime.png',
        fondo: 'imagenes/fondo-rpg.jpg',
        iconoFlores: 'imagenes/flores.png',
        iconoChocolates: 'imagenes/chocolates.png',
        iconoJoyas: 'imagenes/joyas.png'
    }
};

// ============================================================================
// SISTEMA DE ANÁLISIS DE PROGRESO - NUEVO
// ============================================================================

const sistemaAnalisis = {
    // Historial de aprendizaje
    historialAprendizaje: [],
    
    // Estadísticas por día
    estadisticasDia: {
        fecha: '',
        mazosCompletados: 0,
        palabrasAprendidas: 0,
        palabrasFalladas: 0,
        porcentajeAcierto: 0,
        tiempoEstudio: 0
    },
    
    // Palabras clasificadas por tipo
    palabrasPorTipo: {
        sustantivos: { aprendidas: 0, falladas: 0 },
        verbos: { aprendidas: 0, falladas: 0 },
        adjetivos: { aprendidas: 0, falladas: 0 },
        adverbios: { aprendidas: 0, falladas: 0 },
        expresiones: { aprendidas: 0, falladas: 0 }
    },
    
    // Inicializar sistema
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        if (datosGuardados) {
            this.historialAprendizaje = datosGuardados.historialAprendizaje || [];
            this.palabrasPorTipo = datosGuardados.palabrasPorTipo || this.palabrasPorTipo;
        }
        
        this.iniciarNuevoDia();
        console.log("📊 Sistema de análisis inicializado");
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('sistemaAnalisis');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando análisis:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('sistemaAnalisis', JSON.stringify({
                historialAprendizaje: this.historialAprendizaje,
                palabrasPorTipo: this.palabrasPorTipo
            }));
            return true;
        } catch (e) {
            console.error("Error guardando análisis:", e);
            return false;
        }
    },
    
    // Iniciar nuevo día
    iniciarNuevoDia: function() {
        const hoy = this.obtenerFechaHoy();
        
        // Verificar si ya existe estadística para hoy
        const estadisticaHoy = this.historialAprendizaje.find(e => e.fecha === hoy);
        
        if (!estadisticaHoy) {
            this.estadisticasDia = {
                fecha: hoy,
                mazosCompletados: 0,
                palabrasAprendidas: 0,
                palabrasFalladas: 0,
                porcentajeAcierto: 0,
                tiempoEstudio: 0
            };
            
            // Si no es el primer día, guardar estadística del día anterior
            if (this.historialAprendizaje.length > 0) {
                const ultimaEstadistica = this.historialAprendizaje[this.historialAprendizaje.length - 1];
                if (ultimaEstadistica.fecha !== hoy) {
                    this.historialAprendizaje.push(ultimaEstadistica);
                }
            }
        } else {
            this.estadisticasDia = estadisticaHoy;
        }
    },
    
    // Obtener fecha actual
    obtenerFechaHoy: function() {
        const ahora = new Date();
        if (ahora.getHours() < 3) {
            ahora.setDate(ahora.getDate() - 1);
        }
        return ahora.toISOString().split('T')[0];
    },
    
    // Registrar resultado de quiz
    registrarQuiz: function(mazoCompletado, palabrasTotales, palabrasCorrectas, palabrasFalladas) {
        const hoy = this.obtenerFechaHoy();
        
        if (mazoCompletado) {
            this.estadisticasDia.mazosCompletados++;
        }
        
        this.estadisticasDia.palabrasAprendidas += palabrasCorrectas;
        this.estadisticasDia.palabrasFalladas += palabrasFalladas;
        
        // Calcular porcentaje de acierto
        const totalPalabras = palabrasCorrectas + palabrasFalladas;
        if (totalPalabras > 0) {
            this.estadisticasDia.porcentajeAcierto = Math.round((palabrasCorrectas / totalPalabras) * 100);
        }
        
        // Actualizar historial
        const index = this.historialAprendizaje.findIndex(e => e.fecha === hoy);
        if (index !== -1) {
            this.historialAprendizaje[index] = { ...this.estadisticasDia };
        } else {
            this.historialAprendizaje.push({ ...this.estadisticasDia });
        }
        
        // Limitar historial a 30 días
        if (this.historialAprendizaje.length > 30) {
            this.historialAprendizaje.shift();
        }
        
        this.guardarDatos();
    },
    
    // Registrar palabra aprendida (clasificada)
    registrarPalabraAprendida: function(palabra, tipo) {
        if (this.palabrasPorTipo[tipo]) {
            this.palabrasPorTipo[tipo].aprendidas++;
        }
        this.guardarDatos();
    },
    
    // Registrar palabra fallada (clasificada)
    registrarPalabraFallada: function(palabra, tipo) {
        if (this.palabrasPorTipo[tipo]) {
            this.palabrasPorTipo[tipo].falladas++;
        }
        this.guardarDatos();
    },
    
    // Obtener estadísticas generales
    obtenerEstadisticas: function() {
        return {
            totalMazosCompletados: this.historialAprendizaje.reduce((sum, dia) => sum + dia.mazosCompletados, 0),
            totalPalabrasAprendidas: this.historialAprendizaje.reduce((sum, dia) => sum + dia.palabrasAprendidas, 0),
            totalPalabrasFalladas: this.historialAprendizaje.reduce((sum, dia) => sum + dia.palabrasFalladas, 0),
            diasActivos: this.historialAprendizaje.length,
            porcentajeAciertoPromedio: this.calcularPorcentajePromedio(),
            palabrasPorTipo: this.palabrasPorTipo,
            rachaActual: this.calcularRacha(),
            mejorRacha: this.calcularMejorRacha()
        };
    },
    
    // Calcular porcentaje promedio de acierto
    calcularPorcentajePromedio: function() {
        if (this.historialAprendizaje.length === 0) return 0;
        
        const total = this.historialAprendizaje.reduce((sum, dia) => sum + dia.porcentajeAcierto, 0);
        return Math.round(total / this.historialAprendizaje.length);
    },
    
    // Calcular racha actual (días consecutivos)
    calcularRacha: function() {
        if (this.historialAprendizaje.length === 0) return 0;
        
        const fechasOrdenadas = [...this.historialAprendizaje]
            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
            .map(d => d.fecha);
        
        let racha = 0;
        const hoy = new Date(this.obtenerFechaHoy());
        
        for (let i = 0; i < fechasOrdenadas.length; i++) {
            const fechaEstudio = new Date(fechasOrdenadas[i]);
            const diferenciaDias = Math.floor((hoy - fechaEstudio) / (1000 * 60 * 60 * 24));
            
            if (diferenciaDias === i) {
                racha++;
            } else {
                break;
            }
        }
        
        return racha;
    },
    
    // Calcular mejor racha
    calcularMejorRacha: function() {
        if (this.historialAprendizaje.length === 0) return 0;
        
        const fechasOrdenadas = [...this.historialAprendizaje]
            .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
            .map(d => new Date(d.fecha));
        
        let mejorRacha = 0;
        let rachaActual = 1;
        
        for (let i = 1; i < fechasOrdenadas.length; i++) {
            const diferenciaDias = Math.floor((fechasOrdenadas[i] - fechasOrdenadas[i - 1]) / (1000 * 60 * 60 * 24));
            
            if (diferenciaDias === 1) {
                rachaActual++;
                if (rachaActual > mejorRacha) {
                    mejorRacha = rachaActual;
                }
            } else if (diferenciaDias > 1) {
                rachaActual = 1;
            }
        }
        
        return Math.max(mejorRacha, rachaActual);
    },
    
    // Obtener recomendaciones inteligentes
    obtenerRecomendaciones: function() {
        const recomendaciones = [];
        
        // Analizar palabras por tipo
        const tipos = Object.keys(this.palabrasPorTipo);
        let tipoMasDificil = null;
        let mayorPorcentajeFallo = 0;
        
        tipos.forEach(tipo => {
            const datos = this.palabrasPorTipo[tipo];
            const total = datos.aprendidas + datos.falladas;
            
            if (total > 0) {
                const porcentajeFallo = (datos.falladas / total) * 100;
                
                if (porcentajeFallo > mayorPorcentajeFallo) {
                    mayorPorcentajeFallo = porcentajeFallo;
                    tipoMasDificil = tipo;
                }
            }
        });
        
        if (tipoMasDificil) {
            recomendaciones.push({
                tipo: 'debilidad',
                mensaje: `Tienes dificultad con ${tipoMasDificil}. Te recomendamos practicar más este tipo de palabras.`,
                accion: 'Practicar ' + tipoMasDificil
            });
        }
        
        // Recomendación basada en racha
        const racha = this.calcularRacha();
        if (racha >= 3) {
            recomendaciones.push({
                tipo: 'motivacion',
                mensaje: `¡Llevas ${racha} días seguidos estudiando! ¡Sigue así!`,
                accion: 'Mantener la racha'
            });
        }
        
        // Recomendación basada en porcentaje
        const porcentajePromedio = this.calcularPorcentajePromedio();
        if (porcentajePromedio < 70) {
            recomendaciones.push({
                tipo: 'mejora',
                mensaje: `Tu porcentaje de acierto es ${porcentajePromedio}%. Intenta repasar las palabras falladas.`,
                accion: 'Revisar palabras falladas'
            });
        }
        
        return recomendaciones;
    },
    
    // Generar gráfico de progreso (datos para gráfico)
    generarDatosGrafico: function(dias = 7) {
        const ultimosDias = [...this.historialAprendizaje]
            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
            .slice(0, dias)
            .reverse();
        
        return {
            fechas: ultimosDias.map(d => {
                const fecha = new Date(d.fecha);
                return `${fecha.getDate()}/${fecha.getMonth() + 1}`;
            }),
            palabrasAprendidas: ultimosDias.map(d => d.palabrasAprendidas),
            porcentajeAcierto: ultimosDias.map(d => d.porcentajeAcierto),
            mazosCompletados: ultimosDias.map(d => d.mazosCompletados)
        };
    }
};

// ============================================================================
// SISTEMA DE PALABRAS FALLADAS - MEJORADO
// ============================================================================

const sistemaPalabrasFalladas = {
    // Palabras falladas de hoy
    palabrasFalladasHoy: [],
    
    // Todas las palabras falladas (historial)
    historialFalladas: [],
    
    // Última fecha de reinicio
    ultimaFecha: null,
    
    // Inicializar sistema
    inicializar: function() {
        const hoy = this.obtenerFechaHoy();
        const datosGuardados = this.cargarDatos();
        
        if (!datosGuardados || datosGuardados.ultimaFecha !== hoy) {
            this.reiniciarPalabrasDelDia();
        } else {
            this.palabrasFalladasHoy = datosGuardados.palabrasFalladasHoy || [];
            this.historialFalladas = datosGuardados.historialFalladas || [];
            this.ultimaFecha = datosGuardados.ultimaFecha;
        }
        
        console.log("📝 Sistema de palabras falladas inicializado. Palabras hoy:", this.palabrasFalladasHoy.length);
    },
    
    // Obtener fecha actual
    obtenerFechaHoy: function() {
        const ahora = new Date();
        if (ahora.getHours() < 3) {
            ahora.setDate(ahora.getDate() - 1);
        }
        return ahora.toISOString().split('T')[0];
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('palabrasFalladas');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando palabras falladas:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('palabrasFalladas', JSON.stringify({
                palabrasFalladasHoy: this.palabrasFalladasHoy,
                historialFalladas: this.historialFalladas,
                ultimaFecha: this.ultimaFecha
            }));
            return true;
        } catch (e) {
            console.error("Error guardando palabras falladas:", e);
            return false;
        }
    },
    
    // Reiniciar palabras del día
    reiniciarPalabrasDelDia: function() {
        console.log("🔄 Reiniciando palabras falladas del día");
        this.palabrasFalladasHoy = [];
        this.ultimaFecha = this.obtenerFechaHoy();
        this.guardarDatos();
    },
    
    // Registrar palabra fallada
    registrarPalabraFallada: function(palabra, respuestaSeleccionada, respuestaCorrecta, lectura) {
        // Clasificar tipo de palabra (simplificado)
        const tipo = this.clasificarPalabra(palabra);
        
        const palabraFallada = {
            palabra: palabra,
            respuestaSeleccionada: respuestaSeleccionada,
            respuestaCorrecta: respuestaCorrecta,
            lectura: lectura,
            tipo: tipo,
            fecha: new Date().toISOString(),
            hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        };
        
        // Agregar a palabras de hoy
        this.palabrasFalladasHoy.push(palabraFallada);
        
        // Agregar al historial
        this.historialFalladas.push(palabraFallada);
        
        this.guardarDatos();
        
        // Registrar en análisis
        sistemaAnalisis.registrarPalabraFallada(palabra, tipo);
        
        console.log(`❌ Palabra fallada registrada: ${palabra} (${tipo})`);
    },
    
    // Clasificar palabra por tipo
    clasificarPalabra: function(palabra) {
        // Clasificación simplificada basada en terminaciones comunes
        if (palabra.endsWith('る') || palabra.endsWith('う')) return 'verbos';
        if (palabra.endsWith('い') || palabra.endsWith('な')) return 'adjetivos';
        if (palabra.endsWith('に') || palabra.endsWith('く')) return 'adverbios';
        if (palabra.includes('こと') || palabra.includes('の') || palabra.length <= 2) return 'expresiones';
        return 'sustantivos';
    },
    
    // Obtener palabras más falladas del día
    obtenerMasFalladasDelDia: function() {
        const conteo = {};
        
        this.palabrasFalladasHoy.forEach(palabra => {
            if (conteo[palabra.palabra]) {
                conteo[palabra.palabra].veces++;
            } else {
                conteo[palabra.palabra] = {
                    palabra: palabra.palabra,
                    lectura: palabra.lectura,
                    respuestaCorrecta: palabra.respuestaCorrecta,
                    tipo: palabra.tipo,
                    veces: 1
                };
            }
        });
        
        // Convertir a array y ordenar por veces
        return Object.values(conteo)
            .sort((a, b) => b.veces - a.veces)
            .slice(0, 10); // Top 10 más falladas
    },
    
    // Obtener todas las palabras falladas hoy
    obtenerTodasFalladasHoy: function() {
        return this.palabrasFalladasHoy;
    },
    
    // Obtener estadísticas
    obtenerEstadisticas: function() {
        return {
            totalHoy: this.palabrasFalladasHoy.length,
            totalHistorial: this.historialFalladas.length,
            fechaActual: this.ultimaFecha,
            porTipo: this.obtenerEstadisticasPorTipo()
        };
    },
    
    // Obtener estadísticas por tipo
    obtenerEstadisticasPorTipo: function() {
        const porTipo = {};
        
        this.palabrasFalladasHoy.forEach(palabra => {
            if (!porTipo[palabra.tipo]) {
                porTipo[palabra.tipo] = 0;
            }
            porTipo[palabra.tipo]++;
        });
        
        return porTipo;
    },
    
    // Limpiar historial completo
    limpiarHistorialCompleto: function() {
        this.historialFalladas = [];
        this.guardarDatos();
        console.log("🗑️ Historial de palabras falladas limpiado");
    }
};

// ============================================================================
// SISTEMA DE ECONOMÍA GLOBAL
// ============================================================================

const sistemaEconomia = {
    saldoTotal: 0,
    
    // Inicializar sistema de economía
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        if (datosGuardados) {
            this.saldoTotal = datosGuardados.saldoTotal || 0;
        }
        this.actualizarInterfaz();
        console.log("💰 Sistema de economía inicializado. Saldo:", this.saldoTotal);
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('sistemaEconomia');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos de economía:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('sistemaEconomia', JSON.stringify({
                saldoTotal: this.saldoTotal
            }));
            return true;
        } catch (e) {
            console.error("Error guardando datos de economía:", e);
            return false;
        }
    },
    
    // Agregar dinero
    agregarDinero: function(cantidad, motivo = "") {
        this.saldoTotal += cantidad;
        this.guardarDatos();
        this.actualizarInterfaz();
        
        console.log(`💰 +${cantidad} S/. ${motivo ? `(${motivo})` : ''} | Saldo total: ${this.saldoTotal} S/.`);
        
        // Sincronizar con RPG si está activo
        if (typeof rpgNovia !== 'undefined') {
            rpgNovia.economia.saldo = this.saldoTotal;
        }
        
        return this.saldoTotal;
    },
    
    // Actualizar interfaz
    actualizarInterfaz: function() {
        const saldoElement = document.getElementById('saldo-total');
        if (saldoElement) {
            saldoElement.textContent = this.saldoTotal;
        }
        
        // Actualizar también en RPG si está visible
        const saldoRpgElement = document.getElementById('saldo-rpg');
        if (saldoRpgElement) {
            saldoRpgElement.textContent = `${this.saldoTotal} S/.`;
        }
    }
};

// ============================================================================
// SISTEMA DE MISIONES DIARIAS
// ============================================================================

const misionesDiarias = {
    misiones: [
        { id: 1, nombre: "Completar 1 mazo al 100%", objetivo: 1, progreso: 0, recompensa: 1, completada: false },
        { id: 2, nombre: "Completar 3 mazos al 100%", objetivo: 3, progreso: 0, recompensa: 3, completada: false },
        { id: 3, nombre: "Completar 5 mazos al 100%", objetivo: 5, progreso: 0, recompensa: 5, completada: false }
    ],
    
    mazosCompletadosHoy: 0,
    ultimaFecha: null,
    
    // Inicializar sistema de misiones
    inicializar: function() {
        const hoy = this.obtenerFechaHoy();
        const datosGuardados = this.cargarDatos();
        
        if (!datosGuardados || datosGuardados.ultimaFecha !== hoy) {
            this.reiniciarMisiones();
        } else {
            this.misiones = datosGuardados.misiones;
            this.mazosCompletadosHoy = datosGuardados.mazosCompletadosHoy;
            this.ultimaFecha = datosGuardados.ultimaFecha;
        }
        
        this.actualizarInterfaz();
        console.log("🎯 Sistema de misiones inicializado");
    },
    
    // Obtener fecha actual
    obtenerFechaHoy: function() {
        const ahora = new Date();
        if (ahora.getHours() < 3) {
            ahora.setDate(ahora.getDate() - 1);
        }
        return ahora.toISOString().split('T')[0];
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('misionesDiarias');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando misiones:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('misionesDiarias', JSON.stringify({
                misiones: this.misiones,
                mazosCompletadosHoy: this.mazosCompletadosHoy,
                ultimaFecha: this.ultimaFecha
            }));
            return true;
        } catch (e) {
            console.error("Error guardando misiones:", e);
            return false;
        }
    },
    
    // Reiniciar misiones
    reiniciarMisiones: function() {
        this.misiones.forEach(mision => {
            mision.progreso = 0;
            mision.completada = false;
        });
        this.mazosCompletadosHoy = 0;
        this.ultimaFecha = this.obtenerFechaHoy();
        this.guardarDatos();
        console.log("🔄 Misiones diarias reiniciadas");
    },
    
    // Registrar mazo completado
    registrarMazoCompletado: function() {
        this.mazosCompletadosHoy++;
        
        this.misiones.forEach(mision => {
            if (!mision.completada) {
                mision.progreso = this.mazosCompletadosHoy;
                
                if (mision.progreso >= mision.objetivo) {
                    this.completarMision(mision);
                }
            }
        });
        
        this.guardarDatos();
        this.actualizarInterfaz();
        
        console.log(`📊 Mazo completado. Total hoy: ${this.mazosCompletadosHoy}`);
    },
    
    // Completar misión
    completarMision: function(mision) {
        mision.completada = true;
        sistemaEconomia.agregarDinero(mision.recompensa, `Misión ${mision.id} completada`);
        
        console.log(`🎉 Misión ${mision.id} completada! Recompensa: +${mision.recompensa} S/.`);
        
        // Mostrar notificación
        this.mostrarNotificacion(`¡Misión completada! +${mision.recompensa} S/.`);
    },
    
    // Mostrar notificación
    mostrarNotificacion: function(mensaje) {
        // Crear notificación temporal
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00ff88, #00cc6a);
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
    
    // Actualizar interfaz
    actualizarInterfaz: function() {
        this.misiones.forEach((mision, index) => {
            const progresoElement = document.getElementById(`mision${index + 1}-progreso`);
            if (progresoElement) {
                progresoElement.textContent = `${Math.min(mision.progreso, mision.objetivo)}/${mision.objetivo}`;
                
                // Cambiar color si está completada
                if (mision.completada) {
                    progresoElement.style.color = '#00ff88';
                    progresoElement.style.fontWeight = 'bold';
                }
            }
        });
    }
};

// ============================================================================
// SISTEMA DE MINI-JUEGOS INTERACTIVOS - NUEVO
// ============================================================================

const sistemaMinijuegos = {
    // Estado actual
    estado: {
        minijuegoActual: null,
        enProgreso: false,
        resultado: null,
        puntuacion: 0,
        tiempoRestante: 60
    },
    
    // Tipos de minijuegos
    tiposMinijuegos: [
        {
            id: 'poema',
            nombre: '📜 Escribir Poema',
            descripcion: 'Completa el poema romántico en japonés',
            dificultad: 'media',
            afinidadGanada: 15,
            afinidadPerdida: 8,
            probabilidadAparicion: 0.3 // 30%
        },
        {
            id: 'cancion',
            nombre: '🎵 Cantar Juntos',
            descripcion: 'Sigue la letra de la canción en japonés',
            dificultad: 'alta',
            afinidadGanada: 20,
            afinidadPerdida: 10,
            probabilidadAparicion: 0.2 // 20%
        },
        {
            id: 'adivinanza',
            nombre: '❓ Adivinanzas',
            descripcion: 'Responde adivinanzas en japonés',
            dificultad: 'baja',
            afinidadGanada: 10,
            afinidadPerdida: 5,
            probabilidadAparicion: 0.4 // 40%
        },
        {
            id: 'conversacion',
            nombre: '💬 Conversación',
            descripcion: 'Mantén una conversación fluida',
            dificultad: 'media',
            afinidadGanada: 12,
            afinidadPerdida: 6,
            probabilidadAparicion: 0.3 // 30%
        },
        {
            id: 'memoria',
            nombre: '🧠 Juego de Memoria',
            descripcion: 'Memoriza palabras y repítelas',
            dificultad: 'baja',
            afinidadGanada: 8,
            afinidadPerdida: 4,
            probabilidadAparicion: 0.25 // 25%
        }
    ],
    
    // Datos de minijuegos
    datosMinijuegos: {
        poema: {
            titulo: "Escribe un poema romántico para Nino",
            instrucciones: "Completa el poema con las palabras correctas en japonés",
            poemas: [
                {
                    lineas: [
                        "君の笑顔が", // Tu sonrisa
                        "私の________になる", // se convierte en mi ________
                        "毎日が________に", // Cada día se vuelve ________
                        "君がいるから" // Porque estás aquí
                    ],
                    opciones: [
                        { palabra: "幸せ", posicion: 1, opciones: ["幸せ", "悲しみ", "普通", "退屈"] }, // felicidad
                        { palabra: "輝く", posicion: 2, opciones: ["輝く", "暗い", "同じ", "寂しい"] } // brillar
                    ],
                    soluciones: ["幸せ", "輝く"]
                },
                {
                    lineas: [
                        "桜の花びら", // Pétalos de cerezo
                        "舞い散る________で", // En el ________ que cae
                        "君の________思い出す", // Recuerdo tu ________
                        "春の________" // ________ de primavera
                    ],
                    opciones: [
                        { palabra: "中", posicion: 1, opciones: ["中", "上", "下", "外"] }, // en medio
                        { palabra: "優しい", posicion: 2, opciones: ["優しい", "厳しい", "冷たい", "熱い"] }, // amable
                        { palabra: "風", posicion: 3, opciones: ["風", "雨", "雪", "雷"] } // viento
                    ],
                    soluciones: ["中", "優しい", "風"]
                }
            ]
        },
        
        cancion: {
            titulo: "Canta con Nino",
            instrucciones: "Completa la letra de la canción que Nino está cantando",
            canciones: [
                {
                    titulo: "恋のうた", // Canción de amor
                    letra: [
                        "君に________初めて", // La primera vez que te ________
                        "心が________音", // El sonido de mi corazón ________
                        "この________伝えたい", // Quiero transmitir este ________
                        "ずっと________から" // Porque ________ para siempre
                    ],
                    opciones: [
                        { palabra: "会った", posicion: 0, opciones: ["会った", "離れた", "忘れた", "嫌った"] }, // conocí
                        { palabra: "鳴った", posicion: 1, opciones: ["鳴った", "止んだ", "壊れた", "消えた"] }, // sonó
                        { palabra: "気持ち", posicion: 2, opciones: ["気持ち", "秘密", "痛み", "怒り"] }, // sentimiento
                        { palabra: "好き", posicion: 3, opciones: ["好き", "嫌い", "普通", "無関心"] } // me gustas
                    ],
                    soluciones: ["会った", "鳴った", "気持ち", "好き"]
                }
            ]
        },
        
        adivinanza: {
            titulo: "Adivinanzas con Nino",
            instrucciones: "Responde las adivinanzas que Nino te hace en japonés",
            adivinanzas: [
                {
                    pregunta: "朝は四本足、昼は二本足、夜は三本足。これは何？",
                    opciones: ["人間", "動物", "椅子", "時計"],
                    respuesta: 0, // Humano (bebé, adulto, anciano con bastón)
                    explicacion: "Es un humano: bebé (cuatro patas gateando), adulto (dos piernas), anciano (dos piernas + bastón)"
                },
                {
                    pregunta: "持つと軽い、放すと重い。これは何？",
                    opciones: ["風船", "石", "水", "影"],
                    respuesta: 0, // Globo
                    explicacion: "Un globo: cuando lo sostienes es ligero, cuando lo sueltas se hace pesado (porque sube)"
                },
                {
                    pregunta: "食べると減る、飲むと増える。これは何？",
                    opciones: ["飴", "火", "水", "パン"],
                    respuesta: 1, // Fuego
                    explicacion: "El fuego: cuando 'comes' leña disminuye, cuando 'bebes' aire aumenta"
                }
            ]
        },
        
        conversacion: {
            titulo: "Conversa con Nino",
            instrucciones: "Elige las respuestas correctas para mantener la conversación",
            conversaciones: [
                {
                    escena: "Nino te invita a salir",
                    dialogos: [
                        { personaje: "Nino", texto: "今日、一緒に映画を見に行かない？" },
                        { personaje: "Jugador", opciones: ["いいよ、行こう！", "すみません、忙しいです", "映画は好きじゃない", "また今度ね"], respuesta: 0 },
                        { personaje: "Nino", texto: "どんな映画が好き？" },
                        { personaje: "Jugador", opciones: ["アクション映画", "恋愛映画", "ホラー映画", "アニメ"], respuesta: 1 },
                        { personaje: "Nino", texto: "私も恋愛映画が好き！じゃあ、この新しい映画はどう？" }
                    ],
                    respuestasCorrectas: [0, 1]
                }
            ]
        },
        
        memoria: {
            titulo: "Juego de Memoria con Nino",
            instrucciones: "Memoriza las palabras que Nino dice y repítelas en orden",
            niveles: [
                {
                    palabras: ["桜", "愛", "春", "風"],
                    tiempoMemorizacion: 10
                },
                {
                    palabras: ["幸せ", "未来", "一緒", "永遠", "約束"],
                    tiempoMemorizacion: 12
                },
                {
                    palabras: ["星", "月", "夜", "夢", "希望", "光"],
                    tiempoMemorizacion: 15
                }
            ]
        }
    },
    
    // Verificar si aparece minijuego después de completar mazo
    verificarAparicionMinijuego: function() {
        const probabilidad = Math.random();
        let minijuegoDisponible = null;
        
        // Calcular probabilidad total
        this.tiposMinijuegos.forEach(minijuego => {
            if (probabilidad <= minijuego.probabilidadAparicion && !minijuegoDisponible) {
                minijuegoDisponible = minijuego;
            }
        });
        
        return minijuegoDisponible;
    },
    
    // Iniciar minijuego
    iniciarMinijuego: function(tipoMinijuego) {
        const minijuego = this.tiposMinijuegos.find(m => m.id === tipoMinijuego);
        
        if (!minijuego) {
            console.error("Minijuego no encontrado:", tipoMinijuego);
            return false;
        }
        
        this.estado.minijuegoActual = minijuego;
        this.estado.enProgreso = true;
        this.estado.resultado = null;
        this.estado.puntuacion = 0;
        this.estado.tiempoRestante = 60;
        
        // Mostrar pantalla de minijuego
        this.mostrarPantallaMinijuego(tipoMinijuego);
        
        return true;
    },
    
    // Mostrar pantalla de minijuego
    mostrarPantallaMinijuego: function(tipoMinijuego) {
        const datos = this.datosMinijuegos[tipoMinijuego];
        
        if (!datos) {
            console.error("Datos de minijuego no encontrados:", tipoMinijuego);
            return;
        }
        
        // Crear HTML para el minijuego
        let html = '';
        
        switch(tipoMinijuego) {
            case 'poema':
                html = this.generarHTMLPoema();
                break;
            case 'cancion':
                html = this.generarHTMLCancion();
                break;
            case 'adivinanza':
                html = this.generarHTMLAdivinanza();
                break;
            case 'conversacion':
                html = this.generarHTMLConversacion();
                break;
            case 'memoria':
                html = this.generarHTMLMemoria();
                break;
            default:
                html = `<h2>Minijuego no disponible</h2>`;
        }
        
        // Crear pantalla completa
        const pantallaHTML = `
            <div id="pantalla-minijuego" class="pantalla activa">
                <div class="contenedor">
                    <div class="barra-superior">
                        <div class="contador">🎮 ${datos.titulo}</div>
                        <div class="botones-superiores">
                            <button class="boton-home" onclick="rechazarMinijuego()">Rechazar</button>
                            <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                        </div>
                    </div>
                    
                    <div class="minijuego-container">
                        <div class="minijuego-header">
                            <h2>${datos.titulo}</h2>
                            <p class="minijuego-instrucciones">${datos.instrucciones}</p>
                            <div class="minijuego-info">
                                <span class="minijuego-dificultad">Dificultad: ${this.estado.minijuegoActual.dificultad}</span>
                                <span class="minijuego-tiempo">⏱️ <span id="tiempo-minijuego">60</span>s</span>
                                <span class="minijuego-puntos">⭐ <span id="puntos-minijuego">0</span></span>
                            </div>
                        </div>
                        
                        <div class="minijuego-contenido">
                            ${html}
                        </div>
                        
                        <div class="minijuego-controles">
                            <button class="boton-secundario" onclick="rechazarMinijuego()">
                                ❌ Rechazar
                            </button>
                            <button class="boton-principal" onclick="completarMinijuego()" id="boton-completar-minijuego">
                                ✅ Completar
                            </button>
                        </div>
                        
                        <div class="minijuego-mensaje" id="mensaje-minijuego"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar pantalla actual
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Agregar la nueva pantalla
        document.body.insertAdjacentHTML('beforeend', pantallaHTML);
        
        // Iniciar temporizador
        this.iniciarTemporizador();
    },
    
    // Generar HTML para poema
    generarHTMLPoema: function() {
        const datos = this.datosMinijuegos.poema;
        const poema = datos.poemas[Math.floor(Math.random() * datos.poemas.length)];
        
        let html = `
            <div class="minijuego-poema">
                <div class="poema-contenido">
        `;
        
        poema.lineas.forEach((linea, indexLinea) => {
            const opcion = poema.opciones.find(o => o.posicion === indexLinea);
            
            if (opcion) {
                html += `
                    <div class="poema-linea">
                        <span>${linea.replace('________', '')}</span>
                        <select class="opcion-poema" data-posicion="${indexLinea}">
                            <option value="">Selecciona...</option>
                `;
                
                opcion.opciones.forEach((op, index) => {
                    html += `<option value="${op}">${op}</option>`;
                });
                
                html += `
                        </select>
                    </div>
                `;
            } else {
                html += `<div class="poema-linea">${linea}</div>`;
            }
        });
        
        html += `
                </div>
                <div class="poema-traduccion">
                    <small>Traducción aproximada del poema</small>
                </div>
            </div>
        `;
        
        return html;
    },
    
    // Generar HTML para canción
    generarHTMLCancion: function() {
        const datos = this.datosMinijuegos.cancion;
        const cancion = datos.canciones[0]; // Por simplicidad, usamos la primera
        
        let html = `
            <div class="minijuego-cancion">
                <h3>${cancion.titulo}</h3>
                <div class="cancion-letra">
        `;
        
        cancion.letra.forEach((linea, indexLinea) => {
            const opcion = cancion.opciones.find(o => o.posicion === indexLinea);
            
            if (opcion) {
                html += `
                    <div class="cancion-linea">
                        <span>${linea.replace('________', '')}</span>
                        <input type="text" class="opcion-cancion" data-posicion="${indexLinea}" placeholder="Escribe la palabra">
                        <div class="opciones-cancion" style="display: none;">
                `;
                
                opcion.opciones.forEach(op => {
                    html += `<span class="opcion-sugerida" onclick="seleccionarOpcionCancion(this, ${indexLinea})">${op}</span>`;
                });
                
                html += `
                        </div>
                    </div>
                `;
            } else {
                html += `<div class="cancion-linea">${linea}</div>`;
            }
        });
        
        html += `
                </div>
            </div>
        `;
        
        return html;
    },
    
    // Generar HTML para adivinanza
    generarHTMLAdivinanza: function() {
        const datos = this.datosMinijuegos.adivinanza;
        const adivinanzas = [...datos.adivinanzas].sort(() => Math.random() - 0.5).slice(0, 3);
        
        let html = `
            <div class="minijuego-adivinanza">
        `;
        
        adivinanzas.forEach((adivinanza, index) => {
            html += `
                <div class="adivinanza-item" data-index="${index}">
                    <h4>Adivinanza ${index + 1}</h4>
                    <p class="adivinanza-pregunta">${adivinanza.pregunta}</p>
                    <div class="adivinanza-opciones">
            `;
            
            adivinanza.opciones.forEach((opcion, opcionIndex) => {
                html += `
                    <button class="opcion-adivinanza" onclick="seleccionarRespuestaAdivinanza(${index}, ${opcionIndex})">
                        ${opcion}
                    </button>
                `;
            });
            
            html += `
                    </div>
                    <div class="adivinanza-explicacion" id="explicacion-${index}" style="display: none;">
                        ${adivinanza.explicacion}
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        
        return html;
    },
    
    // Generar HTML para conversación
    generarHTMLConversacion: function() {
        const datos = this.datosMinijuegos.conversacion;
        const conversacion = datos.conversaciones[0];
        
        let html = `
            <div class="minijuego-conversacion">
                <div class="conversacion-dialogos">
        `;
        
        conversacion.dialogos.forEach((dialogo, index) => {
            if (dialogo.personaje === 'Nino') {
                html += `
                    <div class="dialogo-nino">
                        <div class="dialogo-personaje">Nino:</div>
                        <div class="dialogo-texto">${dialogo.texto}</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="dialogo-jugador">
                        <div class="dialogo-personaje">Tú:</div>
                        <div class="dialogo-opciones">
                `;
                
                dialogo.opciones.forEach((opcion, opcionIndex) => {
                    html += `
                        <button class="opcion-dialogo" onclick="seleccionarOpcionDialogo(${index}, ${opcionIndex})">
                            ${opcion}
                        </button>
                    `;
                });
                
                html += `
                        </div>
                    </div>
                `;
            }
        });
        
        html += `
                </div>
            </div>
        `;
        
        return html;
    },
    
    // Generar HTML para memoria
    generarHTMLMemoria: function() {
        const datos = this.datosMinijuegos.memoria;
        const nivel = datos.niveles[0]; // Primer nivel
        
        let html = `
            <div class="minijuego-memoria">
                <h3>Memoriza estas palabras:</h3>
                <div class="palabras-memoria" id="palabras-memoria">
        `;
        
        nivel.palabras.forEach((palabra, index) => {
            html += `<span class="palabra-memoria" data-index="${index}">${palabra}</span>`;
        });
        
        html += `
                </div>
                <div class="memoria-input" style="display: none;" id="memoria-input">
                    <p>Escribe las palabras en orden:</p>
                    <input type="text" id="input-memoria" placeholder="Escribe las palabras separadas por comas">
                    <button onclick="verificarMemoria()">Verificar</button>
                </div>
                <div class="memoria-contador" id="contador-memoria">
                    Memorizando... <span id="tiempo-memoria">${nivel.tiempoMemorizacion}</span>s
                </div>
            </div>
        `;
        
        return html;
    },
    
    // Iniciar temporizador del minijuego
    iniciarTemporizador: function() {
        const temporizador = setInterval(() => {
            if (this.estado.tiempoRestante > 0) {
                this.estado.tiempoRestante--;
                const tiempoElement = document.getElementById('tiempo-minijuego');
                if (tiempoElement) {
                    tiempoElement.textContent = this.estado.tiempoRestante;
                }
            } else {
                clearInterval(temporizador);
                this.terminarMinijuego(false, "¡Se acabó el tiempo!");
            }
        }, 1000);
        
        // Guardar referencia al intervalo
        this.temporizadorInterval = temporizador;
    },
    
    // Verificar respuesta de minijuego
    verificarRespuesta: function(tipoMinijuego, respuestas) {
        const datos = this.datosMinijuegos[tipoMinijuego];
        let correctas = 0;
        let total = 0;
        
        switch(tipoMinijuego) {
            case 'poema':
                const poema = datos.poemas[0]; // Usamos el primero por simplicidad
                poema.opciones.forEach((opcion, index) => {
                    total++;
                    if (respuestas[index] === opcion.palabra) {
                        correctas++;
                        this.estado.puntuacion += 10;
                    }
                });
                break;
                
            case 'adivinanza':
                respuestas.forEach((respuesta, index) => {
                    total++;
                    if (respuesta === true) {
                        correctas++;
                        this.estado.puntuacion += 15;
                    }
                });
                break;
        }
        
        return { correctas, total };
    },
    
    // Terminar minijuego
    terminarMinijuego: function(ganado, mensaje) {
        if (this.temporizadorInterval) {
            clearInterval(this.temporizadorInterval);
        }
        
        this.estado.enProgreso = false;
        this.estado.resultado = ganado ? 'ganado' : 'perdido';
        
        // Calcular afinidad ganada/perdida
        let afinidadCambio = 0;
        
        if (ganado) {
            afinidadCambio = this.estado.minijuegoActual.afinidadGanada;
            sistemaEconomia.agregarDinero(5, `Minijuego ${this.estado.minijuegoActual.nombre} ganado`);
        } else {
            afinidadCambio = -this.estado.minijuegoActual.afinidadPerdida;
        }
        
        // Aplicar cambios a RPG
        if (typeof rpgNovia !== 'undefined') {
            rpgNovia.aumentarAfinidad(afinidadCambio);
        }
        
        // Mostrar resultado
        const mensajeElement = document.getElementById('mensaje-minijuego');
        if (mensajeElement) {
            mensajeElement.innerHTML = `
                <div class="resultado-minijuego ${ganado ? 'ganado' : 'perdido'}">
                    <h3>${ganado ? '🎉 ¡Ganaste!' : '😔 Perdiste'}</h3>
                    <p>${mensaje}</p>
                    <p>Afinidad ${ganado ? '+' : ''}${afinidadCambio}%</p>
                    <p>Puntuación: ${this.estado.puntuacion} puntos</p>
                    <button class="boton-principal" onclick="cerrarMinijuego()">
                        Continuar
                    </button>
                </div>
            `;
        }
        
        // Registrar en análisis
        sistemaAnalisis.registrarQuiz(
            false, // No es mazo completado
            0, // palabrasTotales
            ganado ? 1 : 0, // palabrasCorrectas
            ganado ? 0 : 1 // palabrasFalladas
        );
    },
    
    // Iniciar minijuego desde RPG
    iniciarDesdeRPG: function(tipoMinijuego) {
        return this.iniciarMinijuego(tipoMinijuego);
    }
};

// ============================================================================
// SISTEMA RPG DE NOVIA - MEJORADO CON NINO NAKANO
// ============================================================================

const rpgNovia = {
    // Estado de la relación con Nino Nakano
    estado: {
        nombreNovia: "Nino Nakano",
        nivelRelacion: 1,
        experiencia: 0,
        afinidad: 50, // 0-100
        estadoAnimo: "feliz",
        energia: 100,
        ultimaVisita: null,
        conversacionesDesbloqueadas: [],
        escenasDesbloqueadas: [],
        fechaInicio: null,
        totalMinijuegosGanados: 0,
        totalMinijuegosPerdidos: 0
    },
    
    // Economía del RPG
    economia: {
        moneda: "S/.",
        nombre: "Soles",
        saldo: 0,
        inventario: {
            condones: 0,
            flores: 0,
            chocolates: 0,
            joyas: 0
        }
    },
    
    // Sistema +18 con niveles de desbloqueo
    contenidoAdulto: {
        desbloqueado: false,
        nivelesDesbloqueo: {
            beso: 1,       // Nivel 1
            caricias: 2,    // Nivel 2
            intimidad1: 3,  // Nivel 3
            intimidad2: 4   // Nivel 4
        },
        escenasDisponibles: [
            { id: "beso", nombre: "Beso Apasionado", costoCondones: 1, nivelRequerido: 1, afinidadRequerida: 30 },
            { id: "caricias", nombre: "Carícias Íntimas", costoCondones: 1, nivelRequerido: 2, afinidadRequerida: 50 },
            { id: "intimidad1", nombre: "Primera Noche", costoCondones: 1, nivelRequerido: 3, afinidadRequerida: 70 },
            { id: "intimidad2", nombre: "Noche de Pasión", costoCondones: 2, nivelRequerido: 4, afinidadRequerida: 85 }
        ],
        escenasCompletadas: []
    },
    
    // Conversaciones específicas de Nino Nakano
    conversaciones: {
        saludos: [
            "ふふっ、来てくれたのね。", // Hehe, viniste.
            "今日も一緒に勉強しましょう！", // ¡Estudiemos juntos hoy también!
            "あなたが来るのを待ってたわ。", // Estaba esperando que vinieras.
            "勉強の調子はどう？", // ¿Cómo va el estudio?
            "私、今日は特別な気分なの…" // Hoy me siento especial...
        ],
        conversacionesNormales: [
            { 
                pregunta: "今日は何を勉強したの？", // ¿Qué estudiaste hoy?
                respuestas: [
                    "たくさん単語を覚えたよ！", // ¡Memoricé muchas palabras!
                    "文法を勉強してたんだ", // Estaba estudiando gramática
                    "Ninoと話す練習をしてた" // Estaba practicando hablar con Nino
                ]
            },
            { 
                pregunta: "私の料理、食べたい？", // ¿Quieres comer mi comida?
                respuestas: [
                    "もちろん！Ninoの料理は美味しいよね", // ¡Claro! La comida de Nino es deliciosa
                    "どんな料理を作るの？", // ¿Qué tipo de comida preparas?
                    "手伝おうか？" // ¿Te ayudo?
                ]
            },
            { 
                pregunta: "将来、日本に行きたい？", // ¿Quieres ir a Japón en el futuro?
                respuestas: [
                    "Ninoと一緒に行きたいな", // Me gustaría ir con Nino
                    "日本語がもっと上手くなったらね", // Cuando mejore mi japonés
                    "絶対に行くよ！" // ¡Definitivamente iré!
                ]
            }
        ],
        conversacionesIntimas: [
            { 
                pregunta: "私のこと、どう思ってる？", // ¿Qué piensas de mí?
                respuestas: [
                    "世界で一番可愛いと思う", // Creo que eres la más linda del mundo
                    "大切な人だよ", // Eres una persona importante para mí
                    "もっと近づきたい…" // Quiero acercarme más...
                ]
            },
            { 
                pregunta: "二人でどこか行きたいところある？", // ¿Hay algún lugar al que quieras ir los dos juntos?
                respuestas: [
                    "お花見に行きたいな", // Quiero ir a ver los cerezos en flor
                    "海に行って夕日を見たい", // Quiero ir al mar a ver el atardecer
                    "どこでもNinoと一緒ならいいよ" // Cualquier lugar está bien si estoy con Nino
                ]
            }
        ]
    },
    
    // Inicializar RPG
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        
        if (datosGuardados) {
            this.estado = datosGuardados.estado;
            this.economia = datosGuardados.economia;
            this.contenidoAdulto = datosGuardados.contenidoAdulto;
            
            // Verificar si es el primer día
            if (!this.estado.fechaInicio) {
                this.estado.fechaInicio = new Date().toISOString();
            }
        } else {
            this.estado.fechaInicio = new Date().toISOString();
        }
        
        // Sincronizar saldo con sistema global
        this.economia.saldo = sistemaEconomia.saldoTotal;
        
        console.log("💕 RPG de Nino Nakano inicializado. Nivel:", this.estado.nivelRelacion);
        return true;
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('rpgNovia');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando RPG:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('rpgNovia', JSON.stringify({
                estado: this.estado,
                economia: this.economia,
                contenidoAdulto: this.contenidoAdulto
            }));
            return true;
        } catch (e) {
            console.error("Error guardando RPG:", e);
            return false;
        }
    },
    
    // Aumentar afinidad
    aumentarAfinidad: function(cantidad) {
        const afinidadAnterior = this.estado.afinidad;
        this.estado.afinidad = Math.min(100, this.estado.afinidad + cantidad);
        
        // Ganar experiencia por aumentar afinidad
        if (cantidad > 0) {
            this.ganarExperiencia(Math.floor(cantidad / 2));
        }
        
        // Verificar desbloqueos
        this.verificarDesbloqueos();
        
        this.guardarDatos();
        this.actualizarInterfazRPG();
        
        console.log(`💝 Afinidad: ${afinidadAnterior}% → ${this.estado.afinidad}% (+${cantidad})`);
        
        return this.estado.afinidad;
    },
    
    // Ganar experiencia
    ganarExperiencia: function(cantidad) {
        this.estado.experiencia += cantidad;
        console.log(`✨ Experiencia: +${cantidad} (Total: ${this.estado.experiencia})`);
        
        // Verificar subida de nivel
        this.verificarSubidaNivel();
        
        return this.estado.experiencia;
    },
    
    // Verificar subida de nivel
    verificarSubidaNivel: function() {
        const expNecesaria = this.estado.nivelRelacion * 100;
        
        if (this.estado.experiencia >= expNecesaria) {
            this.estado.nivelRelacion++;
            this.estado.experiencia = 0;
            
            // Recompensa por subir de nivel
            const recompensa = this.estado.nivelRelacion * 10;
            sistemaEconomia.agregarDinero(recompensa, `Subida a nivel ${this.estado.nivelRelacion} con Nino`);
            
            this.mostrarMensaje(`🎉 ¡Subiste al nivel ${this.estado.nivelRelacion} con Nino! +${recompensa} S/.`);
            
            // Verificar desbloqueos por nivel
            this.verificarDesbloqueos();
            
            console.log(`🏆 Nivel Up! Nivel ${this.estado.nivelRelacion}`);
        }
    },
    
    // Verificar desbloqueos
    verificarDesbloqueos: function() {
        const nivel = this.estado.nivelRelacion;
        const afinidad = this.estado.afinidad;
        
        // Verificar desbloqueo de contenido +18
        if (!this.contenidoAdulto.desbloqueado && nivel >= 1 && afinidad >= 30) {
            this.contenidoAdulto.desbloqueado = true;
            this.mostrarMensaje("💖 ¡Contenido especial desbloqueado! Ahora puedes tener momentos más íntimos con Nino.");
        }
        
        // Verificar desbloqueo de minijuegos
        const seccionMinijuegos = document.getElementById('seccion-minijuegos');
        if (seccionMinijuegos && nivel >= 2) {
            seccionMinijuegos.style.display = 'block';
        }
        
        this.guardarDatos();
    },
    
    // Hablar con Nino
    hablarConNovia: function() {
        const conversaciones = this.estado.afinidad >= 60 ? 
            this.conversaciones.conversacionesIntimas : 
            this.conversaciones.conversacionesNormales;
        
        const conversacion = conversaciones[Math.floor(Math.random() * conversaciones.length)];
        const respuesta = conversacion.respuestas[Math.floor(Math.random() * conversacion.respuestas.length)];
        
        const dialogoElement = document.getElementById('dialogo-novia');
        dialogoElement.innerHTML = `
            <div class="dialogo-burbuja">
                <div class="pregunta-dialogo">${conversacion.pregunta}</div>
                <div class="texto-dialogo">${respuesta}</div>
                <div class="tiempo-dialogo">Ahora</div>
            </div>
        `;
        
        // Aumentar afinidad por conversación
        this.aumentarAfinidad(2);
    },
    
    // Regalar item a Nino
    regalarItem: function(tipo) {
        const costos = {
            flores: 5,
            chocolates: 10,
            joyas: 20
        };
        
        const afinidadGanada = {
            flores: 5,
            chocolates: 8,
            joyas: 15
        };
        
        if (this.economia.saldo >= costos[tipo]) {
            this.economia.saldo -= costos[tipo];
            sistemaEconomia.agregarDinero(-costos[tipo], `Regalo de ${tipo} para Nino`);
            this.economia.inventario[tipo]++;
            
            // Aumentar afinidad
            this.aumentarAfinidad(afinidadGanada[tipo]);
            
            // Mensaje especial según el regalo
            const mensajes = {
                flores: "💐 花、ありがとう。私、花が大好きなの。", // Flores, gracias. Me encantan las flores.
                chocolates: "🍫 チョコレート！嬉しい！", // ¡Chocolate! ¡Qué alegría!
                joyas: "💎 まさかこんなものを…本当にありがとう。", // No puedo creer que me des esto... Muchas gracias de verdad.
            };
            
            this.mostrarMensaje(`Le regalaste ${tipo} a Nino 💝`);
            
            // Mostrar diálogo especial
            const dialogoElement = document.getElementById('dialogo-novia');
            dialogoElement.innerHTML = `
                <div class="dialogo-burbuja">
                    <div class="texto-dialogo">${mensajes[tipo]}</div>
                    <div class="tiempo-dialogo">Ahora</div>
                </div>
            `;
        } else {
            this.mostrarMensaje("No tienes suficiente dinero 💸");
        }
    },
    
    // Comprar condones
    comprarCondones: function() {
        const costo = 15;
        if (this.economia.saldo >= costo) {
            this.economia.saldo -= costo;
            sistemaEconomia.agregarDinero(-costo, "Compra de condones");
            this.economia.inventario.condones++;
            this.actualizarInterfazRPG();
            this.mostrarMensaje("¡Condones comprados! 💕");
        } else {
            this.mostrarMensaje("No tienes suficiente dinero para comprar condones 💸");
        }
    },
    
    // Usar condón para escena +18
    usarCondon: function(escenaId) {
        if (this.economia.inventario.condones <= 0) {
            this.mostrarMensaje("No tienes condones disponibles 💔");
            return;
        }
        
        const escena = this.contenidoAdulto.escenasDisponibles.find(e => e.id === escenaId);
        
        if (!escena) {
            this.mostrarMensaje("Escena no encontrada");
            return;
        }
        
        // Verificar requisitos de nivel
        if (this.estado.nivelRelacion < escena.nivelRequerido) {
            this.mostrarMensaje(`Necesitas nivel ${escena.nivelRequerido} para esta escena 💝`);
            return;
        }
        
        // Verificar requisitos de afinidad
        if (this.estado.afinidad < escena.afinidadRequerida) {
            this.mostrarMensaje(`Necesitas ${escena.afinidadRequerida}% de afinidad para esta escena 💝`);
            return;
        }
        
        // Usar condón
        this.economia.inventario.condones -= escena.costoCondones;
        
        // Ejecutar escena
        this.ejecutarEscenaAdulto(escena);
    },
    
    // Ejecutar escena +18
    ejecutarEscenaAdulto: function(escena) {
        const dialogoElement = document.getElementById('dialogo-novia');
        
        // Mensajes específicos de Nino para cada escena
        const mensajesNino = {
            beso: [
                "ん…ちゅっ…", // Mmm... beso...
                "あなたの唇、柔らかい…", // Tus labios son suaves...
                "もっと…", // Más...
                "好き…", // Me gustas...
                "ちゅっ、ちゅっ…" // Beso, beso...
            ],
            caricias: [
                "あっ…そこ…", // Ah... ahí...
                "優しくして…", // Sé amable...
                "気持ちいい…", // Se siente bien...
                "あなたの手、温かい…", // Tus manos están calientes...
                "ん…だめ…恥ずかしい…" // Mmm... no... es vergonzoso...
            ],
            intimidad1: [
                "今夜は…私を…", // Esta noche... a mí...
                "怖くないよ…あなたとなら…", // No tengo miedo... si es contigo...
                "優しく抱きしめて…", // Abrázame suavemente...
                "愛してる…", // Te amo...
                "一緒になりたい…" // Quiero estar contigo...
            ],
            intimidad2: [
                "もう…我慢できない…", // Ya no... puedo aguantar...
                "激しく…", // Intensamente...
                "あなただけ…", // Solo tú...
                "幸せ…", // Felicidad...
                "ずっと一緒…" // Juntos para siempre...
            ]
        };
        
        let mensajeCompleto = `<div class="escena-adulta">`;
        const mensajes = mensajesNino[escena.id] || mensajesNino.beso;
        
        mensajes.forEach((mensaje, index) => {
            mensajeCompleto += `<div class="linea-escena">${mensaje}</div>`;
            
            // Añadir traducción alternada
            if (index % 2 === 0) {
                const traducciones = {
                    beso: ["Mmm... beso...", "Tus labios son suaves...", "Más...", "Me gustas...", "Beso, beso..."],
                    caricias: ["Ah... ahí...", "Sé amable...", "Se siente bien...", "Tus manos están calientes...", "Mmm... no... es vergonzoso..."],
                    intimidad1: ["Esta noche... a mí...", "No tengo miedo... si es contigo...", "Abrázame suavemente...", "Te amo...", "Quiero estar contigo..."],
                    intimidad2: ["Ya no... puedo aguantar...", "Intensamente...", "Solo tú...", "Felicidad...", "Juntos para siempre..."]
                };
                
                const traduccion = traducciones[escena.id] || traducciones.beso;
                if (traduccion[index]) {
                    mensajeCompleto += `<div class="linea-traduccion"><small>${traduccion[index]}</small></div>`;
                }
            }
        });
        
        mensajeCompleto += `</div>`;
        dialogoElement.innerHTML = mensajeCompleto;
        
        // Aumentar afinidad y experiencia
        this.aumentarAfinidad(10);
        this.ganarExperiencia(25);
        
        // Agregar a escenas completadas
        if (!this.contenidoAdulto.escenasCompletadas.includes(escena.id)) {
            this.contenidoAdulto.escenasCompletadas.push(escena.id);
        }
        
        this.guardarDatos();
        this.actualizarInterfazRPG();
    },
    
    // Iniciar minijuego desde RPG
    iniciarMinijuego: function(tipo) {
        const resultado = sistemaMinijuegos.iniciarDesdeRPG(tipo);
        
        if (resultado) {
            // Registrar en estadísticas
            this.estado.totalMinijuegosGanados++;
            this.guardarDatos();
        }
        
        return resultado;
    },
    
    // Actualizar interfaz RPG
    actualizarInterfazRPG: function() {
        // Actualizar información básica
        document.getElementById('nombre-novia').textContent = this.estado.nombreNovia;
        document.getElementById('nivel-relacion').textContent = `Nivel ${this.estado.nivelRelacion}`;
        document.getElementById('afinidad').textContent = `${this.estado.afinidad}%`;
        
        // Sincronizar saldo con sistema global
        this.economia.saldo = sistemaEconomia.saldoTotal;
        document.getElementById('saldo-rpg').textContent = `${this.economia.saldo} ${this.economia.moneda}`;
        
        document.getElementById('condones-inventario').textContent = this.economia.inventario.condones;
        
        // Actualizar barra de afinidad
        const barraAfinidad = document.getElementById('barra-afinidad');
        barraAfinidad.style.width = `${this.estado.afinidad}%`;
        
        // Actualizar estado de ánimo
        document.getElementById('estado-animo').textContent = this.obtenerEmojiEstadoAnimo(this.estado.estadoAnimo);
        
        // Mostrar/Ocultar sección +18 según nivel
        const seccionAdulto = document.getElementById('seccion-adulto');
        if (seccionAdulto) {
            seccionAdulto.style.display = this.contenidoAdulto.desbloqueado ? 'block' : 'none';
            
            // Actualizar botones según nivel
            const botonesAdulto = seccionAdulto.querySelectorAll('.boton-adulto');
            botonesAdulto.forEach(boton => {
                const escenaId = boton.onclick.toString().match(/usarCondon\('(.+?)'\)/)[1];
                const escena = this.contenidoAdulto.escenasDisponibles.find(e => e.id === escenaId);
                
                if (escena) {
                    const desbloqueado = this.estado.nivelRelacion >= escena.nivelRequerido;
                    boton.disabled = !desbloqueado;
                    
                    if (!desbloqueado) {
                        boton.title = `Desbloquea en nivel ${escena.nivelRequerido}`;
                    }
                }
            });
        }
        
        // Mostrar/Ocultar sección de minijuegos según nivel
        const seccionMinijuegos = document.getElementById('seccion-minijuegos');
        if (seccionMinijuegos) {
            seccionMinijuegos.style.display = this.estado.nivelRelacion >= 2 ? 'block' : 'none';
        }
        
        // Generar diálogo aleatorio si no hay diálogo activo
        const dialogoElement = document.getElementById('dialogo-novia');
        if (!dialogoElement.innerHTML.includes('linea-escena')) {
            this.generarDialogoAleatorio();
        }
    },
    
    // Obtener emoji según estado de ánimo
    obtenerEmojiEstadoAnimo: function(estado) {
        const emojis = {
            feliz: "😊",
            enamorada: "🥰",
            excitada: "😳",
            juguetona: "😏",
            timida: "😊",
            pasional: "🔥",
            concentrada: "🧠",
            cariñosa: "💕"
        };
        return emojis[estado] || "😊";
    },
    
    // Generar diálogo aleatorio
    generarDialogoAleatorio: function() {
        const dialogoElement = document.getElementById('dialogo-novia');
        const saludos = this.conversaciones.saludos;
        const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
        
        // Traducciones de los saludos
        const traducciones = [
            "Hehe, viniste.",
            "¡Estudiemos juntos hoy también!",
            "Estaba esperando que vinieras.",
            "¿Cómo va el estudio?",
            "Hoy me siento especial..."
        ];
        
        const indice = saludos.indexOf(saludoAleatorio);
        const traduccion = indice !== -1 ? traducciones[indice] : "";
        
        dialogoElement.innerHTML = `
            <div class="dialogo-burbuja">
                <div class="texto-dialogo">${saludoAleatorio}</div>
                <div class="traduccion-dialogo"><small>${traduccion}</small></div>
                <div class="tiempo-dialogo">Ahora</div>
            </div>
        `;
    },
    
    // Mostrar mensaje en RPG
    mostrarMensaje: function(mensaje) {
        const mensajeElement = document.getElementById('mensaje-rpg');
        mensajeElement.textContent = mensaje;
        mensajeElement.style.display = 'block';
        
        setTimeout(() => {
            mensajeElement.style.display = 'none';
        }, 3000);
    },
    
    // Obtener estadísticas de RPG
    obtenerEstadisticas: function() {
        const fechaInicio = new Date(this.estado.fechaInicio);
        const diasConocidos = Math.floor((new Date() - fechaInicio) / (1000 * 60 * 60 * 24));
        
        return {
            nivelActual: this.estado.nivelRelacion,
            afinidadActual: this.estado.afinidad,
            experiencia: this.estado.experiencia,
            experienciaNecesaria: this.estado.nivelRelacion * 100,
            diasConocidos: diasConocidos,
            totalMinijuegosGanados: this.estado.totalMinijuegosGanados,
            totalMinijuegosPerdidos: this.estado.totalMinijuegosPerdidos,
            escenasCompletadas: this.contenidoAdulto.escenasCompletadas.length,
            inventario: this.economia.inventario
        };
    }
};

// ============================================================================
// SISTEMA DE NOVELA VISUAL - NUEVO
// ============================================================================

const sistemaNovelaVisual = {
    // Estado de la novela visual
    estado: {
        capituloActual: 0,
        escenaActual: 0,
        decisionActual: 0,
        caminoElegido: [],
        finalAlcanzado: null,
        progreso: 0
    },
    
    // Datos de la novela visual (Nino Nakano como protagonista)
    novela: {
        titulo: "La Quinta Hermana: Una Historia con Nino",
        descripcion: "Una historia interactiva donde tu comprensión del japonés determina el desarrollo de la relación con Nino Nakano.",
        capitulos: [
            {
                titulo: "Capítulo 1: El Encuentro",
                escenas: [
                    {
                        imagen: "https://static.wikia.nocookie.net/5hanayome/images/6/64/Nino_Nakano_Anime.png",
                        dialogo: "はじめまして。私は中野二乃です。よろしくお願いします。",
                        traduccion: "Mucho gusto. Soy Nino Nakano. Encantada de conocerte.",
                        opciones: [
                            { texto: "はじめまして。よろしくお願いします。", correcta: true, efecto: "afinidad+5" },
                            { texto: "こんにちは。元気ですか？", correcta: true, efecto: "afinidad+3" },
                            { texto: "さようなら。", correcta: false, efecto: "afinidad-5" },
                            { texto: "私は日本語を勉強しています。", correcta: true, efecto: "afinidad+2" }
                        ]
                    },
                    {
                        imagen: "https://static.wikia.nocookie.net/5hanayome/images/6/64/Nino_Nakano_Anime.png",
                        dialogo: "日本語を勉強しているんですか？それは素晴らしいですね。",
                        traduccion: "¿Estás estudiando japonés? Eso es maravilloso.",
                        opciones: [
                            { texto: "はい、頑張っています。", correcta: true, efecto: "afinidad+5" },
                            { texto: "少し難しいですが、楽しいです。", correcta: true, efecto: "afinidad+7" },
                            { texto: "いいえ、勉強していません。", correcta: false, efecto: "afinidad-10" },
                            { texto: "日本語が話せますか？", correcta: true, efecto: "afinidad+3" }
                        ]
                    }
                ]
            },
            {
                titulo: "Capítulo 2: La Primera Cita",
                escenas: [
                    {
                        imagen: "https://static.wikia.nocookie.net/5hanayome/images/6/64/Nino_Nakano_Anime.png",
                        dialogo: "今度、一緒にお茶しない？",
                        traduccion: "¿Quieres tomar té conmigo la próxima vez?",
                        opciones: [
                            { texto: "はい、喜んで！", correcta: true, efecto: "afinidad+10" },
                            { texto: "ごめんなさい、忙しいです。", correcta: false, efecto: "afinidad-8" },
                            { texto: "どこに行きたいですか？", correcta: true, efecto: "afinidad+5" },
                            { texto: "お茶が好きです。", correcta: true, efecto: "afinidad+3" }
                        ]
                    }
                ]
            }
        ],
        finales: [
            {
                id: "bueno",
                titulo: "Final Bueno: Juntos para Siempre",
                descripcion: "Tu dominio del japonés y tus decisiones correctas hicieron que Nino se enamorara de ti.",
                requisito: "Afinidad > 80, Todas las decisiones correctas"
            },
            {
                id: "normal",
                titulo: "Final Normal: Buenos Amigos",
                descripcion: "Te llevas bien con Nino, pero la barrera del idioma impidió una relación más profunda.",
                requisito: "Afinidad > 50"
            },
            {
                id: "malo",
                titulo: "Final Malo: Extraños",
                descripcion: "Los malentendidos por el idioma llevaron a que Nino se alejara.",
                requisito: "Afinidad < 30"
            }
        ]
    },
    
    // Iniciar novela visual
    iniciar: function() {
        this.estado.capituloActual = 0;
        this.estado.escenaActual = 0;
        this.estado.decisionActual = 0;
        this.estado.caminoElegido = [];
        this.estado.finalAlcanzado = null;
        this.estado.progreso = 0;
        
        this.mostrarPantallaNovela();
        return true;
    },
    
    // Mostrar pantalla de novela
    mostrarPantallaNovela: function() {
        const capitulo = this.novela.capitulos[this.estado.capituloActual];
        const escena = capitulo.escenas[this.estado.escenaActual];
        
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Mostrar pantalla de novela
        document.getElementById('pantalla-novela-visual').classList.add('activa');
        
        // Actualizar contenido
        document.getElementById('imagen-fondo-novela').src = escena.imagen;
        document.getElementById('texto-dialogo-novela').textContent = escena.dialogo;
        document.getElementById('traduccion-dialogo').innerHTML = `<strong>Traducción:</strong> ${escena.traduccion}`;
        
        // Generar opciones
        const opcionesContainer = document.getElementById('opciones-dialogo');
        opcionesContainer.innerHTML = '';
        
        escena.opciones.forEach((opcion, index) => {
            const boton = document.createElement('button');
            boton.className = 'opcion-novela';
            boton.textContent = opcion.texto;
            boton.onclick = () => this.seleccionarOpcion(index);
            opcionesContainer.appendChild(boton);
        });
        
        // Actualizar progreso
        this.actualizarProgreso();
    },
    
    // Seleccionar opción en la novela
    seleccionarOpcion: function(indiceOpcion) {
        const capitulo = this.novela.capitulos[this.estado.capituloActual];
        const escena = capitulo.escenas[this.estado.escenaActual];
        const opcion = escena.opciones[indiceOpcion];
        
        // Registrar decisión
        this.estado.caminoElegido.push({
            capitulo: this.estado.capituloActual,
            escena: this.estado.escenaActual,
            opcion: indiceOpcion,
            correcta: opcion.correcta
        });
        
        // Aplicar efecto a RPG si la opción es correcta
        if (opcion.correcta) {
            if (opcion.efecto.includes('afinidad+')) {
                const cantidad = parseInt(opcion.efecto.replace('afinidad+', ''));
                rpgNovia.aumentarAfinidad(cantidad);
            }
        } else {
            if (opcion.efecto.includes('afinidad-')) {
                const cantidad = parseInt(opcion.efecto.replace('afinidad-', ''));
                rpgNovia.aumentarAfinidad(-cantidad);
            }
        }
        
        // Avanzar a la siguiente escena
        this.estado.escenaActual++;
        
        // Verificar si terminó el capítulo
        if (this.estado.escenaActual >= capitulo.escenas.length) {
            this.estado.capituloActual++;
            this.estado.escenaActual = 0;
            
            // Verificar si terminó la novela
            if (this.estado.capituloActual >= this.novela.capitulos.length) {
                this.terminarNovela();
                return;
            }
        }
        
        // Mostrar siguiente escena
        this.mostrarPantallaNovela();
    },
    
    // Avanzar diálogo (para diálogos sin opciones)
    avanzarDialogo: function() {
        this.estado.escenaActual++;
        const capitulo = this.novela.capitulos[this.estado.capituloActual];
        
        if (this.estado.escenaActual >= capitulo.escenas.length) {
            this.estado.capituloActual++;
            this.estado.escenaActual = 0;
            
            if (this.estado.capituloActual >= this.novela.capitulos.length) {
                this.terminarNovela();
                return;
            }
        }
        
        this.mostrarPantallaNovela();
    },
    
    // Terminar novela y mostrar final
    terminarNovela: function() {
        // Calcular afinidad final basada en decisiones
        const decisionesCorrectas = this.estado.caminoElegido.filter(d => d.correcta).length;
        const totalDecisiones = this.estado.caminoElegido.length;
        const porcentajeCorrectas = totalDecisiones > 0 ? (decisionesCorrectas / totalDecisiones) * 100 : 0;
        
        // Determinar final basado en afinidad y decisiones
        const afinidadRPG = rpgNovia.estado.afinidad;
        let final;
        
        if (afinidadRPG > 80 && porcentajeCorrectas > 90) {
            final = this.novela.finales[0]; // Final bueno
        } else if (afinidadRPG > 50) {
            final = this.novela.finales[1]; // Final normal
        } else {
            final = this.novela.finales[2]; // Final malo
        }
        
        this.estado.finalAlcanzado = final.id;
        
        // Mostrar pantalla de final
        const htmlFinal = `
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador">📖 FINAL ALCANZADO</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <div class="final-novela-container">
                    <h1>${final.titulo}</h1>
                    <div class="final-imagen">
                        <img src="https://static.wikia.nocookie.net/5hanayome/images/6/64/Nino_Nakano_Anime.png" alt="Final">
                    </div>
                    <div class="final-descripcion">
                        <p>${final.descripcion}</p>
                        <div class="final-estadisticas">
                            <h3>📊 Tus Estadísticas:</h3>
                            <p>Afinidad con Nino: ${afinidadRPG}%</p>
                            <p>Decisiones correctas: ${decisionesCorrectas}/${totalDecisiones} (${Math.round(porcentajeCorrectas)}%)</p>
                            <p>Camino elegido: ${this.estado.caminoElegido.length} escenas</p>
                        </div>
                        <div class="final-recompensa">
                            <h3>🎁 Recompensas:</h3>
                            <p>+${Math.floor(afinidadRPG / 10) * 5} S/. por completar la novela</p>
                            <p>+10% de afinidad con Nino</p>
                        </div>
                    </div>
                    
                    <div class="final-opciones">
                        <button class="boton-principal" onclick="volverAlInicio()">
                            Volver al Menú Principal
                        </button>
                        <button class="boton-secundario" onclick="sistemaNovelaVisual.reiniciar()">
                            🔄 Reintentar Novela
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar pantalla actual
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Crear pantalla de final
        const pantallaFinal = document.createElement('div');
        pantallaFinal.className = 'pantalla activa';
        pantallaFinal.id = 'pantalla-final-novela';
        pantallaFinal.innerHTML = htmlFinal;
        
        document.body.appendChild(pantallaFinal);
        
        // Dar recompensas
        const recompensaDinero = Math.floor(afinidadRPG / 10) * 5;
        sistemaEconomia.agregarDinero(recompensaDinero, "Completar novela visual");
        rpgNovia.aumentarAfinidad(10);
    },
    
    // Reiniciar novela
    reiniciar: function() {
        this.iniciar();
        
        // Eliminar pantalla de final si existe
        const pantallaFinal = document.getElementById('pantalla-final-novela');
        if (pantallaFinal) {
            pantallaFinal.remove();
        }
    },
    
    // Actualizar progreso
    actualizarProgreso: function() {
        const totalEscenas = this.novela.capitulos.reduce((total, capitulo) => total + capitulo.escenas.length, 0);
        const escenasCompletadas = this.estado.capituloActual * this.novela.capitulos[0].escenas.length + this.estado.escenaActual;
        this.estado.progreso = totalEscenas > 0 ? Math.round((escenasCompletadas / totalEscenas) * 100) : 0;
    }
};

// ============================================================================
// VIDEOS DE RECOMPENSA
// ============================================================================

const videosRecompensa = [
    {
        id: 1,
        titulo: "Belinda te ayuda a relajarte despues de estudiar",
        url: "Belinda.mp4",
        duracion: "10s"
    },
    {
        id: 2,
        titulo: "A miku le gustan los inteligentes y entrega el poto a Fabrizio  y Aldo ⭐",
        url: "miku.mp4",
        duracion: "15s"
    },
    {
        id: 3,
        titulo: "¡ Nino te telaja con su boca! 💪",
        url: "ninocaricia.mp4",
        duracion: "12s"
    },
    {
        id: 4,
        titulo: "¡ Nino te telaja con su boca! 🏆",
        url: "ninocaricia.mp4",
        duracion: "8s"
    },
    {
        id: 5,
        titulo: "¡Nino esta pensando en ti ! 🚀",
        url: "ninopensando.mp4",
        duracion: "11s"
    }
];

// ============================================================================
// SISTEMA DE EVENTOS DIARIOS - CORREGIDO Y MEJORADO
// ============================================================================

const eventosDiarios = {
    // Pool de 5 eventos diarios diferentes
    poolEventos: [
        {
            id: 1,
            nombre: "🎯 Reto de Maestría",
            descripcion: "Completa 3 mazos al 100% hoy",
            objetivo: 3,
            recompensa: {
                tipo: "video",
                titulo: "¡Dominio Total! 🏆",
                mensaje: "Has demostrado tu maestría en japonés",
                video: "NinoIchikaCompletado.mp4",
                dinero: 5
            },
            fallo: {
                tipo: "video", 
                titulo: "Necesitas más práctica 📚",
                mensaje: "Mañana será otro día para mejorar",
                video: "NinoIchikaFallado.mp4"
            },
            video: "NinoIchika.mp4"
        },
        {
            id: 2,
            nombre: "⚡ Velocidad Relámpago",
            descripcion: "Completa 2 mazos consecutivos sin errores",
            objetivo: 2,
            recompensa: {
                tipo: "video",
                titulo: "¡Velocidad Asombrosa! ⚡",
                mensaje: "Tu rapidez mental es impresionante",
                video: "profesorcompletado.mp4",
                dinero: 5
            },
            fallo: {
                tipo: "video",
                titulo: "La velocidad lleva tiempo 🕒",
                mensaje: "Sigue practicando para mejorar",
                video: "profesorfallo.mp4"
            },
            video: "profesor.mp4"
        }
    ],
    
    // Estado del evento diario actual
    estado: {
        eventoActual: null,
        aceptado: false,
        completado: false,
        fallado: false,
        progreso: 0,
        mazosCompletadosHoy: 0,
        ultimaFecha: null,
        vistoHoy: false, // Controla si el evento ya fue visto hoy
        debeMostrarFallo: false
    },
    
    // Inicializar sistema de eventos
    inicializar: function() {
        console.log("🔧 Inicializando sistema de eventos diarios...");
        const hoy = this.obtenerFechaHoy();
        const datosGuardados = this.cargarDatos();
        
        // Verificar si es un nuevo día
        if (!datosGuardados || datosGuardados.ultimaFecha !== hoy) {
            console.log("🆕 Nuevo día - Configurando nuevo evento");
            
            // Si hay datos guardados y tiene debeMostrarFallo, limpiarlo
            if (datosGuardados && datosGuardados.debeMostrarFallo) {
                console.log("🧹 Limpiando estado de fallo del día anterior");
                datosGuardados.debeMostrarFallo = false;
            }
            
            this.reiniciarEventoDiario();
        } else {
            console.log("📋 Cargando evento existente para hoy");
            this.estado = datosGuardados;
        }
        
        // Mostrar evento diario si NO ha sido visto hoy
        this.mostrarEventoSiEsNecesario();
    },
    
    // Mostrar evento si es necesario
    mostrarEventoSiEsNecesario: function() {
        // Solo mostrar si hay evento actual, NO ha sido visto hoy, NO está completado, NO está fallado
        if (this.estado.eventoActual && 
            !this.estado.vistoHoy && 
            !this.estado.completado && 
            !this.estado.fallado) {
            console.log("🎁 Mostrando evento diario pendiente");
            
            // Esperar un poco para que cargue la página principal primero
            setTimeout(() => {
                this.mostrarEventoDiario();
            }, 1500);
        } else if (this.estado.debeMostrarFallo) {
            // Si debe mostrar fallo (por evento omitido ayer), mostrar video de fallo
            console.log("📉 Mostrando video de fallo de evento omitido");
            setTimeout(() => {
                this.mostrarVideoFallo();
                // Limpiar el estado después de mostrar
                this.estado.debeMostrarFallo = false;
                this.guardarDatos();
            }, 2000);
        }
    },
    
    // Obtener fecha actual en formato YYYY-MM-DD
    obtenerFechaHoy: function() {
        const ahora = new Date();
        // Ajustar a hora de reinicio (3 AM)
        if (ahora.getHours() < 3) {
            ahora.setDate(ahora.getDate() - 1);
        }
        return ahora.toISOString().split('T')[0];
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('eventosDiarios');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('eventosDiarios', JSON.stringify(this.estado));
            return true;
        } catch (e) {
            console.error("Error guardando datos:", e);
            return false;
        }
    },
    
    // Reiniciar evento diario
    reiniciarEventoDiario: function() {
        console.log("🔄 Reiniciando evento diario...");
        // Seleccionar evento aleatorio del pool
        const eventoAleatorio = this.poolEventos[Math.floor(Math.random() * this.poolEventos.length)];
        
        this.estado = {
            eventoActual: eventoAleatorio,
            aceptado: false,
            completado: false,
            fallado: false,
            progreso: 0,
            mazosCompletadosHoy: 0,
            ultimaFecha: this.obtenerFechaHoy(),
            vistoHoy: false, // IMPORTANTE: Nuevo día, no visto
            debeMostrarFallo: false
        };
        
        console.log("🎯 Nuevo evento:", eventoAleatorio.nombre);
        this.guardarDatos();
    },
    
    // Mostrar pantalla de evento diario
    mostrarEventoDiario: function() {
        if (!this.estado.eventoActual) {
            console.log("❌ No hay evento actual para mostrar");
            return;
        }
        
        console.log("📱 Mostrando pantalla de evento diario");
        
        // Marcar como visto hoy
        this.estado.vistoHoy = true;
        this.guardarDatos();
        
        // Ocultar pantalla de inicio primero
        const pantallaInicio = document.getElementById('pantalla-inicio');
        if (pantallaInicio) {
            pantallaInicio.classList.remove('activa');
        }
        
        // Mostrar pantalla de evento diario
        const pantallaEvento = document.getElementById('pantalla-evento-diario');
        if (pantallaEvento) {
            pantallaEvento.classList.add('activa');
            
            // Actualizar contenido
            const evento = this.estado.eventoActual;
            document.getElementById('fecha-evento').textContent = new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            document.getElementById('nombre-evento').textContent = evento.nombre;
            document.getElementById('descripcion-evento').textContent = evento.descripcion;
            document.getElementById('contador-progreso').textContent = this.estado.progreso;
            document.getElementById('objetivo-evento').textContent = evento.objetivo;
            document.getElementById('recompensa-evento').textContent = `+${evento.recompensa.dinero} S/. 💰`;
            
            // Actualizar barra de progreso
            const porcentaje = (this.estado.progreso / evento.objetivo) * 100;
            document.getElementById('barra-progreso-fill').style.width = `${porcentaje}%`;
            
            // Configurar el video de presentación
            const videoElement = document.getElementById('video-evento-presentacion');
            if (videoElement) {
                videoElement.muted = true;
                videoElement.src = evento.video;
                videoElement.loop = true;
            }
        }
    },
    
    // Aceptar el evento diario
    aceptarEvento: function() {
        console.log("✅ Evento diario aceptado");
        this.estado.aceptado = true;
        this.guardarDatos();
        this.ocultarPantallaEvento();
    },
    
    // Omitir el evento diario (considerado como fallo inmediato)
    omitirEvento: function() {
        console.log("❌ Evento diario omitido");
        
        this.estado.fallado = true;
        this.estado.debeMostrarFallo = true; // Mostrar fallo al día siguiente
        this.estado.vistoHoy = true;
        this.guardarDatos();
        
        this.ocultarPantallaEvento();
        
        alert("Evento omitido. Mañana verás el resultado.");
    },
    
    // Ocultar pantalla de evento
    ocultarPantallaEvento: function() {
        // Detener cualquier video antes de cambiar
        const videoElement = document.getElementById('video-evento-presentacion');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        
        // Ocultar pantalla de evento
        const pantallaEvento = document.getElementById('pantalla-evento-diario');
        if (pantallaEvento) {
            pantallaEvento.classList.remove('activa');
        }
        
        // Mostrar pantalla de inicio
        document.getElementById('pantalla-inicio').classList.add('activa');
    },
    
    // Registrar mazo completado
    registrarMazoCompletado: function() {
        // Solo registrar si hay evento activo y aceptado
        if (!this.estado.eventoActual || this.estado.completado || this.estado.fallado || !this.estado.aceptado) {
            console.log("📝 Mazo completado pero evento no activo o ya finalizado");
            return;
        }
        
        console.log("📝 Registrando mazo completado para evento diario");
        
        this.estado.mazosCompletadosHoy++;
        this.estado.progreso++;
        
        console.log("📊 Progreso actual:", this.estado.progreso, "/", this.estado.eventoActual.objetivo);
        
        // Verificar si se completó el evento
        if (this.estado.progreso >= this.estado.eventoActual.objetivo) {
            this.completarEvento();
        }
        
        this.guardarDatos();
    },
    
    // Completar evento exitosamente
    completarEvento: function() {
        console.log("🎉 Evento diario completado!");
        this.estado.completado = true;
        this.guardarDatos();
        
        // Dar recompensa monetaria
        const recompensa = this.estado.eventoActual.recompensa.dinero;
        sistemaEconomia.agregarDinero(recompensa, "Evento diario completado");
        
        // MOSTRAR VIDEO DEL EVENTO INMEDIATAMENTE
        this.mostrarVideoRecompensa();
    },
    
    // Mostrar video de recompensa
    mostrarVideoRecompensa: function() {
        const evento = this.estado.eventoActual;
        console.log("🎬 Mostrando video de recompensa:", evento.recompensa.titulo);
        
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Actualizar contenido
        document.getElementById('titulo-video-evento').textContent = evento.recompensa.titulo;
        document.getElementById('mensaje-video-evento').textContent = evento.recompensa.mensaje;
        document.getElementById('recompensa-dinero-evento').textContent = `+${evento.recompensa.dinero} S/. 💰`;
        
        const videoElement = document.getElementById('video-evento-recompensa');
        videoElement.src = evento.recompensa.video;
        videoElement.controls = true;
        videoElement.muted = true;
        videoElement.loop = true;
        
        // Mostrar pantalla de video
        document.getElementById('pantalla-video-evento').classList.add('activa');
        
        // Intentar reproducir automáticamente
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => {
                console.log("Autoplay bloqueado para video de recompensa:", e);
                videoElement.controls = true;
            });
        }
    },
    
    // Mostrar video de fallo
    mostrarVideoFallo: function() {
        const evento = this.estado.eventoActual;
        if (!evento) {
            console.error("No hay evento para mostrar fallo");
            return;
        }
        
        console.log("📉 Mostrando video de fallo");

        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });

        // Actualizar contenido
        document.getElementById('titulo-video-fallo').textContent = evento.fallo.titulo;
        document.getElementById('mensaje-video-fallo').textContent = evento.fallo.mensaje;
        
        const videoElement = document.getElementById('video-evento-fallo');
        videoElement.src = evento.fallo.video;
        videoElement.controls = true;
        videoElement.muted = true;
        videoElement.loop = true;
        
        // Mostrar pantalla de video de fallo
        document.getElementById('pantalla-video-fallo').classList.add('activa');
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => {
                console.log("Autoplay bloqueado:", e);
                videoElement.controls = true;
            });
        }
        
        // Resetear estado después de mostrar fallo
        this.estado.debeMostrarFallo = false;
        this.guardarDatos();
    },
    
    // Cerrar video de recompensa
    cerrarVideoRecompensa: function() {
        const videoElement = document.getElementById('video-evento-recompensa');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        
        cambiarPantalla('pantalla-inicio');
    },
    
    // Cerrar video de fallo
    cerrarVideoFallo: function() {
        const videoElement = document.getElementById('video-evento-fallo');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        
        cambiarPantalla('pantalla-inicio');
    }
};

// ============================================================================
// VIDEOS +18 PARA MOMENTOS ÍNTIMOS
// ============================================================================

const videosIntimos = {
    beso: "https://assets.mixkit.co/videos/preview/mixkit-couple-kissing-on-the-bed-44463-large.mp4",
    caricias: "https://assets.mixkit.co/videos/preview/mixkit-hands-caressing-a-woman-s-back-44462-large.mp4",
    intimidad1: "https://assets.mixkit.co/videos/preview/mixkit-romantic-bedroom-scene-44461-large.mp4",
    intimidad2: "https://assets.mixkit.co/videos/preview/mixkit-passionate-romantic-scene-44460-large.mp4"
};

// ============================================================================
// ESTRUCTURA PRINCIPAL MODIFICADA
// ============================================================================

// Estructura de mazos (mantenida igual)
const estructura = {
    'contenedor1': {
        nombre: 'The Last Summer 1',
        subcontenedores: {
            'sub1_1': { 
                nombre: 'Sub-Contenedor 1.1', 
                mazos: generarMazosEspecificos('sub1_1') 
            },
            'sub1_2': { 
                nombre: 'Sub-Contenedor 1.2', 
                mazos: generarMazosEspecificos('sub1_2') 
            },
            'sub1_3': { 
                nombre: 'Sub-Contenedor 1.3', 
                mazos: generarMazosEspecificos('sub1_3') 
            }
        }
    },
    'contenedor2': {
        nombre: 'The Last Summer 2',
        subcontenedores: {
            'sub2_1': { 
                nombre: 'Sub-Contenedor 2.1', 
                mazos: generarMazosEspecificos('sub2_1') 
            },
            'sub2_2': { 
                nombre: 'Sub-Contenedor 2.2', 
                mazos: generarMazosEspecificos('sub2_2') 
            },
            'sub2_3': { 
                nombre: 'Sub-Contenedor 2.3', 
                mazos: generarMazosEspecificos('sub2_3') 
            }
        }
    },
    'contenedor3': {
        nombre: 'The Last Summer 3',
        subcontenedores: {
            'sub3_1': { 
                nombre: 'Sub-Contenedor 3.1', 
                mazos: generarMazosEspecificos('sub3_1') 
            },
            'sub3_2': { 
                nombre: 'Sub-Contenedor 3.2', 
                mazos: generarMazosEspecificos('sub3_2') 
            },
            'sub3_3': { 
                nombre: 'Sub-Contenedor 3.3', 
                mazos: generarMazosEspecificos('sub3_3') 
            }
        }
    }
};

// Funciones de generación de mazos (mantenidas igual)
function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    for (let i = 1; i <= 5; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    return mazos;
}

function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    // Base de datos de palabras (simplificada para este ejemplo)
    const palabrasDatabase = {
        'sub1_1': {
            1: [
                { japones: '今朝', lectura: 'kesa', opciones: ['Esta mañana', 'Esta tarde', 'Anoche', 'Ayer'], respuesta: 0 },
                { japones: '処', lectura: 'tokoro', opciones: ['Lugar', 'Tiempo', 'Persona', 'Cosa'], respuesta: 0 }
            ]
        }
    };
    
    if (palabrasDatabase[subcontenedorId] && palabrasDatabase[subcontenedorId][numeroMazo]) {
        return palabrasDatabase[subcontenedorId][numeroMazo];
    } else {
        return generarPalabras(10);
    }
}

function generarPalabras(cantidad) {
    const palabras = [];
    const palabrasBase = [
        { japones: '言葉', lectura: 'kotoba', opciones: ['Palabra', 'Lenguaje', 'Expresión', 'Término'], respuesta: 0 },
        { japones: '時間', lectura: 'jikan', opciones: ['Tiempo', 'Hora', 'Momento', 'Duración'], respuesta: 0 }
    ];
    
    for (let i = 0; i < cantidad; i++) {
        palabras.push({...palabrasBase[i % palabrasBase.length]});
    }
    return palabras;
}

// ============================================================================
// VARIABLES GLOBALES DEL SISTEMA PRINCIPAL
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// ============================================================================
// FUNCIONES GLOBALES DEL SISTEMA
// ============================================================================

// Función para obtener la URL de una imagen
function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    return 'imagenes/default.jpg';
}

// Función para obtener un video aleatorio
function obtenerVideoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * videosRecompensa.length);
    return videosRecompensa[indiceAleatorio];
}

// FUNCIÓN MEJORADA: "Ir al Menú" - Regresa a la pantalla principal
function irAlMenu() {
    cambiarPantalla('pantalla-inicio');
    detenerTodosLosVideos();
    console.log("🏠 Navegando al menú principal");
}

// Función para detener todos los videos
function detenerTodosLosVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

// Función para cargar contenedor
function cargarContenedor(idContenedor) {
    if (estructura[idContenedor]) {
        contenedorActual = idContenedor;
        const contenedor = estructura[idContenedor];
        
        document.getElementById('titulo-contenedor').textContent = contenedor.nombre;
        document.getElementById('nombre-contenedor').textContent = `Sub-Contenedores de ${contenedor.nombre}`;
        
        const contenedorSub = document.getElementById('contenedor-subcontenedores');
        contenedorSub.innerHTML = '';
        
        Object.keys(contenedor.subcontenedores).forEach(key => {
            const sub = contenedor.subcontenedores[key];
            const subDiv = document.createElement('div');
            subDiv.className = 'subcontenedor-card';
            subDiv.onclick = () => cargarSubcontenedor(key);
            
            subDiv.innerHTML = `
                <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nombre}" class="subcontenedor-imagen">
                <div class="subcontenedor-texto">${sub.nombre}</div>
                <div class="subcontenedor-info">5 mazos disponibles</div>
            `;
            
            contenedorSub.appendChild(subDiv);
        });
        
        cambiarPantalla('pantalla-subcontenedores');
    }
}

// Función para cargar subcontenedor
function cargarSubcontenedor(idSubcontenedor) {
    const contenedor = estructura[contenedorActual];
    if (contenedor && contenedor.subcontenedores[idSubcontenedor]) {
        subcontenedorActual = idSubcontenedor;
        const subcontenedor = contenedor.subcontenedores[idSubcontenedor];
        
        document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nombre;
        document.getElementById('nombre-subcontenedor').textContent = `Mazos de ${subcontenedor.nombre}`;
        
        const contenedorMazos = document.getElementById('contenedor-mazos');
        contenedorMazos.innerHTML = '';
        
        Object.keys(subcontenedor.mazos).forEach(key => {
            const mazo = subcontenedor.mazos[key];
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-card';
            mazoDiv.onclick = () => cargarMazo(key);
            
            mazoDiv.innerHTML = `
                <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nombre}" class="mazo-imagen">
                <div class="mazo-texto">${mazo.nombre}</div>
                <div class="mazo-info">10 palabras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        cambiarPantalla('pantalla-mazos');
    }
}

// Función para cargar mazo
function cargarMazo(idMazo) {
    const contenedor = estructura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    if (subcontenedor && subcontenedor.mazos[idMazo]) {
        mazoActual = [...subcontenedor.mazos[idMazo].palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        mezclarPreguntas();
        cambiarPantalla('pantalla-quiz');
        mostrarPregunta();
    }
}

// Función para mezclar preguntas
function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

// FUNCIÓN MEJORADA - MOSTRAR PREGUNTA CON SISTEMA DE MINIJUEGOS
function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        document.getElementById('palabra-japones').textContent = pregunta.japones;
        document.getElementById('lectura').textContent = '';
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        document.getElementById('boton-siguiente').style.display = 'none';
        
        const contenedorOpciones = document.getElementById('contenedor-opciones');
        contenedorOpciones.innerHTML = '';
        
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.japones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

// FUNCIÓN CORREGIDA - VERIFICAR RESPUESTA CON SISTEMA DE ANÁLISIS
function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura, palabraJapones) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    opciones.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar la pronunciación SIEMPRE
    document.getElementById('lectura').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        // Registrar palabra aprendida en análisis
        const tipo = sistemaPalabrasFalladas.clasificarPalabra(palabraJapones);
        sistemaAnalisis.registrarPalabraAprendida(palabraJapones, tipo);
        
        // Navegación automática solo para respuestas correctas
        setTimeout(() => {
            siguientePregunta();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        // REGISTRAR PALABRA FALLADA
        sistemaPalabrasFalladas.registrarPalabraFallada(
            palabraJapones,
            respuestaSeleccionada,
            respuestaCorrecta,
            lectura
        );
        
        // Mostrar botón "Continuar" solo para respuestas incorrectas
        document.getElementById('boton-siguiente').style.display = 'block';
    }
}

// Función siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

// FUNCIÓN MEJORADA - MOSTRAR RESULTADOS CON SISTEMA DE MINIJUEGOS
function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // Registrar quiz en análisis
    sistemaAnalisis.registrarQuiz(
        porcentaje === 100,
        mazoActual.length,
        respuestasCorrectas,
        respuestasIncorrectas
    );
    
    console.log("📊 Mostrando resultados:", {
        porcentaje: porcentaje,
        tieneEventoActivo: !!eventosDiarios.estado.eventoActual
    });
    
    if (porcentaje === 100) {
        // Registrar mazo completado para misiones diarias
        misionesDiarias.registrarMazoCompletado();
        
        // Registrar mazo completado para evento diario
        const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
        eventosDiarios.registrarMazoCompletado();
        
        // Verificar si se completó el evento diario JUSTO AHORA
        const eventoSeCompletoJustoAhora = eventoEstabaIncompleto && eventosDiarios.estado.completado;
        
        if (eventoSeCompletoJustoAhora) {
            // Si se completó evento diario, SOLO mostrar el evento
            console.log("🎁 Evento diario completado - Mostrando SOLO evento");
        } else {
            // Si NO se completó evento diario
            sistemaEconomia.agregarDinero(1, "Mazo completado al 100%");
            
            // VERIFICAR SI APARECE MINIJUEGO (30% de probabilidad)
            const probabilidadMinijuego = Math.random();
            if (probabilidadMinijuego <= 0.3) { // 30% de probabilidad
                const minijuegoDisponible = sistemaMinijuegos.verificarAparicionMinijuego();
                if (minijuegoDisponible) {
                    // Mostrar oferta de minijuego
                    mostrarOfertaMinijuego(minijuegoDisponible);
                    return;
                }
            }
            
            // Si no hay minijuego, mostrar video normal
            mostrarVideoRecompensa();
        }
        
    } else if (porcentaje >= 80) {
        // Registrar mazo completado para misiones diarias (80% cuenta como completado)
        misionesDiarias.registrarMazoCompletado();
        eventosDiarios.registrarMazoCompletado();
        sistemaEconomia.agregarDinero(0.5, "Mazo completado al 80%");
        mostrarPantallaResultados(porcentaje);
        
    } else {
        mostrarPantallaResultados(porcentaje);
    }
}

// Función para mostrar oferta de minijuego
function mostrarOfertaMinijuego(minijuego) {
    const htmlOferta = `
        <div class="contenedor">
            <div class="barra-superior">
                <div class="contador">🎮 OFERTA ESPECIAL</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="rechazarMinijuego()">Rechazar</button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                </div>
            </div>
            
            <div class="oferta-minijuego-container">
                <h1>¡Oferta Especial! 🎮</h1>
                <div class="oferta-content">
                    <div class="oferta-imagen">
                        <img src="https://static.wikia.nocookie.net/5hanayome/images/6/64/Nino_Nakano_Anime.png" alt="Nino">
                    </div>
                    <div class="oferta-info">
                        <h2>${minijuego.nombre}</h2>
                        <p>Nino quiere jugar contigo después de tu excelente desempeño.</p>
                        <div class="oferta-detalles">
                            <p><strong>Dificultad:</strong> ${minijuego.dificultad}</p>
                            <p><strong>Recompensa por ganar:</strong> +${minijuego.afinidadGanada}% afinidad</p>
                            <p><strong>Riesgo por perder:</strong> -${minijuego.afinidadPerdida}% afinidad</p>
                        </div>
                        <div class="oferta-advertencia">
                            <small>⚠️ Tu afinidad con Nino aumentará o disminuirá según el resultado</small>
                        </div>
                    </div>
                </div>
                
                <div class="oferta-opciones">
                    <button class="boton-secundario" onclick="rechazarMinijuego()">
                        ❌ Rechazar Oferta
                    </button>
                    <button class="boton-principal" onclick="aceptarMinijuego('${minijuego.id}')">
                        ✅ ¡Aceptar y Jugar!
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Crear pantalla de oferta
    const pantallaOferta = document.createElement('div');
    pantallaOferta.className = 'pantalla activa';
    pantallaOferta.id = 'pantalla-oferta-minijuego';
    pantallaOferta.innerHTML = htmlOferta;
    
    document.body.appendChild(pantallaOferta);
}

// Función para aceptar minijuego
function aceptarMinijuego(tipoMinijuego) {
    // Eliminar pantalla de oferta
    const pantallaOferta = document.getElementById('pantalla-oferta-minijuego');
    if (pantallaOferta) {
        pantallaOferta.remove();
    }
    
    // Iniciar minijuego
    sistemaMinijuegos.iniciarMinijuego(tipoMinijuego);
}

// Función para rechazar minijuego
function rechazarMinijuego() {
    // Eliminar pantalla de oferta
    const pantallaOferta = document.getElementById('pantalla-oferta-minijuego');
    if (pantallaOferta) {
        pantallaOferta.remove();
    }
    
    // Mostrar video normal de recompensa
    sistemaEconomia.agregarDinero(1, "Mazo completado al 100%");
    mostrarVideoRecompensa();
}

// Función para completar minijuego
function completarMinijuego() {
    // Esta función será implementada por cada tipo de minijuego
    console.log("Completando minijuego...");
}

// Función para cerrar minijuego
function cerrarMinijuego() {
    cambiarPantalla('pantalla-inicio');
}

// Función para mostrar pantalla de resultados
function mostrarPantallaResultados(porcentaje) {
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    
    resultadoFinal.innerHTML = `
        Resumen del Quiz:
        
        Preguntas totales: ${mazoActual.length}
        Respuestas correctas: ${respuestasCorrectas}
        Respuestas incorrectas: ${respuestasIncorrectas}
        Porcentaje de aciertos: ${porcentaje}%
        
        ${porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
          porcentaje >= 60 ? 'Buen trabajo, pero puedes mejorar 👍' : 
          'Sigue practicando, lo harás mejor la próxima vez 💪'}
    `;
}

// FUNCIÓN MEJORADA - VIDEO EN BUCLE
function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    document.getElementById('recompensa-mazo').textContent = '+1 S/. 💰';
    
    cambiarPantalla('pantalla-video-recompensa');
    
    const videoElement = document.getElementById('video-recompensa');
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.onended = null;
    
    videoElement.play().catch(e => {
        console.log("Autoplay bloqueado, el usuario debe iniciar manualmente");
    });
}

// Función para cerrar video de recompensa de mazo
function cerrarVideoRecompensaMazo() {
    const videoElement = document.getElementById('video-recompensa');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
    
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
}

// Función para saltar video
function saltarVideo() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
}

// Función para cambiar pantalla
function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

// Funciones de navegación
function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

function volverASubcontenedores() {
    cambiarPantalla('pantalla-subcontenedores');
}

function volverAMazos() {
    cambiarPantalla('pantalla-mazos');
}

function repetirQuiz() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}

// ============================================================================
// FUNCIONES DEL SISTEMA DE ANÁLISIS - NUEVAS
// ============================================================================

// Función para mostrar análisis de progreso
function mostrarAnalisisProgreso() {
    const estadisticas = sistemaAnalisis.obtenerEstadisticas();
    const recomendaciones = sistemaAnalisis.obtenerRecomendaciones();
    const datosGrafico = sistemaAnalisis.generarDatosGrafico(7);
    
    // Crear pantalla dinámica
    const pantallaHTML = `
        <div id="pantalla-analisis" class="pantalla activa">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador">📊 ANÁLISIS DE PROGRESO</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <div class="analisis-container">
                    <!-- ESTADÍSTICAS PRINCIPALES -->
                    <div class="analisis-estadisticas">
                        <h2>📈 Tu Progreso General</h2>
                        <div class="estadisticas-grid">
                            <div class="estadistica-grande">
                                <div class="estadistica-valor">${estadisticas.totalMazosCompletados}</div>
                                <div class="estadistica-label">Mazos Completados</div>
                            </div>
                            <div class="estadistica-grande">
                                <div class="estadistica-valor">${estadisticas.totalPalabrasAprendidas}</div>
                                <div class="estadistica-label">Palabras Aprendidas</div>
                            </div>
                            <div class="estadistica-grande">
                                <div class="estadistica-valor">${estadisticas.porcentajeAciertoPromedio}%</div>
                                <div class="estadistica-label">Tasa de Acierto</div>
                            </div>
                            <div class="estadistica-grande">
                                <div class="estadistica-valor">${estadisticas.diasActivos}</div>
                                <div class="estadistica-label">Días Activos</div>
                            </div>
                        </div>
                        
                        <div class="racha-info">
                            <div class="racha-item">
                                <span class="racha-label">🔥 Racha Actual:</span>
                                <span class="racha-valor">${estadisticas.rachaActual} días</span>
                            </div>
                            <div class="racha-item">
                                <span class="racha-label">🏆 Mejor Racha:</span>
                                <span class="racha-valor">${estadisticas.mejorRacha} días</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- GRÁFICO DE PROGRESO (simulado con HTML) -->
                    <div class="analisis-grafico">
                        <h2>📅 Progreso de los Últimos 7 Días</h2>
                        <div class="grafico-simulado">
                            <div class="grafico-barras">
                                ${datosGrafico.palabrasAprendidas.map((valor, index) => `
                                    <div class="barra-container">
                                        <div class="barra" style="height: ${(valor / Math.max(...datosGrafico.palabrasAprendidas)) * 100}%"></div>
                                        <div class="barra-label">${datosGrafico.fechas[index]}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="grafico-leyenda">
                                <span class="leyenda-item"><div class="color-barra"></div> Palabras aprendidas por día</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- ANÁLISIS POR TIPO DE PALABRA -->
                    <div class="analisis-tipos">
                        <h2>🔤 Desempeño por Tipo de Palabra</h2>
                        <div class="tipos-grid">
                            ${Object.entries(estadisticas.palabrasPorTipo).map(([tipo, datos]) => {
                                const total = datos.aprendidas + datos.falladas;
                                const porcentaje = total > 0 ? Math.round((datos.aprendidas / total) * 100) : 0;
                                return `
                                    <div class="tipo-item">
                                        <div class="tipo-nombre">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</div>
                                        <div class="tipo-progreso">
                                            <div class="progreso-bar">
                                                <div class="progreso-fill" style="width: ${porcentaje}%"></div>
                                            </div>
                                            <div class="tipo-estadisticas">
                                                <span class="tipo-correctas">✅ ${datos.aprendidas}</span>
                                                <span class="tipo-falladas">❌ ${datos.falladas}</span>
                                                <span class="tipo-porcentaje">${porcentaje}%</span>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <!-- RECOMENDACIONES INTELIGENTES -->
                    <div class="analisis-recomendaciones">
                        <h2>💡 Recomendaciones Personalizadas</h2>
                        <div class="recomendaciones-lista">
                            ${recomendaciones.length > 0 ? recomendaciones.map(rec => `
                                <div class="recomendacion-item recomendacion-${rec.tipo}">
                                    <div class="recomendacion-icono">
                                        ${rec.tipo === 'debilidad' ? '⚠️' : 
                                          rec.tipo === 'motivacion' ? '🔥' : 
                                          rec.tipo === 'mejora' ? '📈' : '💡'}
                                    </div>
                                    <div class="recomendacion-contenido">
                                        <div class="recomendacion-texto">${rec.mensaje}</div>
                                        <div class="recomendacion-accion">${rec.accion}</div>
                                    </div>
                                </div>
                            `).join('') : `
                                <div class="recomendacion-item">
                                    <div class="recomendacion-icono">🎉</div>
                                    <div class="recomendacion-contenido">
                                        <div class="recomendacion-texto">¡Tu progreso es excelente! Sigue estudiando con consistencia.</div>
                                        <div class="recomendacion-accion">Mantener el ritmo actual</div>
                                    </div>
                                </div>
                            `}
                        </div>
                    </div>
                    
                    <!-- HISTORIAL COMPLETO -->
                    <div class="analisis-historial">
                        <h2>📋 Historial de Aprendizaje</h2>
                        <div class="historial-lista">
                            ${sistemaAnalisis.historialAprendizaje.slice(-5).reverse().map(dia => `
                                <div class="historial-item">
                                    <div class="historial-fecha">${dia.fecha}</div>
                                    <div class="historial-datos">
                                        <span class="historial-dato">📚 ${dia.mazosCompletados} mazos</span>
                                        <span class="historial-dato">📝 ${dia.palabrasAprendidas} palabras</span>
                                        <span class="historial-dato">🎯 ${dia.porcentajeAcierto}% acierto</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- ACCIONES -->
                    <div class="analisis-acciones">
                        <button class="boton-secundario" onclick="exportarDatosAnalisis()">
                            📤 Exportar Datos
                        </button>
                        <button class="boton-principal" onclick="volverAlInicio()">
                            🏠 Volver al Inicio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Ocultar pantalla actual
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Agregar la nueva pantalla
    document.body.insertAdjacentHTML('beforeend', pantallaHTML);
}

// Función para exportar datos de análisis
function exportarDatosAnalisis() {
    const estadisticas = sistemaAnalisis.obtenerEstadisticas();
    const datos = {
        fechaExportacion: new Date().toISOString(),
        estadisticas: estadisticas,
        historial: sistemaAnalisis.historialAprendizaje,
        recomendaciones: sistemaAnalisis.obtenerRecomendaciones()
    };
    
    const datosTexto = JSON.stringify(datos, null, 2);
    const blob = new Blob([datosTexto], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `analisis-japones-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert("📤 Datos exportados correctamente. El archivo se descargará automáticamente.");
}

// ============================================================================
// FUNCIONES DEL RPG - NUEVAS
// ============================================================================

// Función para iniciar RPG de novia
function iniciarRPGNovia() {
    rpgNovia.inicializar();
    cambiarPantalla('pantalla-rpg-novia');
    rpgNovia.actualizarInterfazRPG();
}

// Función para actualizar interfaz RPG
function actualizarInterfazRPG() {
    rpgNovia.actualizarInterfazRPG();
}

// Función para hablar con novia
function hablarConNovia() {
    rpgNovia.hablarConNovia();
}

// Función para regalar item
function regalarItem(tipo) {
    rpgNovia.regalarItem(tipo);
}

// Función para comprar condones
function comprarCondones() {
    rpgNovia.comprarCondones();
}

// Función para usar condón
function usarCondon(escenaId) {
    rpgNovia.usarCondon(escenaId);
}

// Función para iniciar minijuego desde RPG
function iniciarMinijuego(tipo) {
    rpgNovia.iniciarMinijuego(tipo);
}

// ============================================================================
// FUNCIONES DE NOVELA VISUAL - NUEVAS
// ============================================================================

// Función para iniciar novela visual
function iniciarNovelaVisual() {
    sistemaNovelaVisual.iniciar();
}

// Función para avanzar diálogo en novela
function avanzarDialogoNovela() {
    sistemaNovelaVisual.avanzarDialogo();
}

// Función para repetir diálogo
function repetirDialogo() {
    // Esta función podría implementar síntesis de voz en el futuro
    alert("🔊 Esta función reproducirá el diálogo en voz alta (síntesis de voz)");
}

// ============================================================================
// INICIALIZACIÓN DEL SISTEMA COMPLETO
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicación cargada - Inicializando todos los sistemas...");
    
    // Inicializar sistemas en orden
    sistemaEconomia.inicializar();
    misionesDiarias.inicializar();
    eventosDiarios.inicializar();
    sistemaPalabrasFalladas.inicializar();
    sistemaAnalisis.inicializar();
    rpgNovia.inicializar();
    
    console.log("✅ Todos los sistemas inicializados correctamente");
    
    // Asegurarse de que la pantalla de inicio esté activa
    setTimeout(() => {
        if (!document.querySelector('.pantalla.activa')) {
            cambiarPantalla('pantalla-inicio');
        }
    }, 100);
});

// ============================================================================
// FUNCIONES DE TESTING Y DEBUG
// ============================================================================

// Función para forzar la aparición del evento diario
window.mostrarEventoDiarioForzado = function() {
    eventosDiarios.reiniciarEventoDiario();
    eventosDiarios.mostrarEventoDiario();
};

// Función para reiniciar el sistema de eventos
window.reiniciarSistemaEventos = function() {
    localStorage.removeItem('eventosDiarios');
    eventosDiarios.reiniciarEventoDiario();
    location.reload();
};

// Función para agregar dinero
window.agregarDinero = function(cantidad) {
    sistemaEconomia.agregarDinero(cantidad, "Testing");
};

// Función para ver estado de sistemas
window.verEstadoSistemas = function() {
    console.log("=== ESTADO DE SISTEMAS ===");
    console.log("💰 Economía:", sistemaEconomia.saldoTotal);
    console.log("🎯 Misiones:", misionesDiarias.misiones);
    console.log("📅 Evento Diario:", eventosDiarios.estado);
    console.log("📝 Palabras Falladas:", sistemaPalabrasFalladas.obtenerEstadisticas());
    console.log("📊 Análisis:", sistemaAnalisis.obtenerEstadisticas());
    console.log("💕 RPG Nino:", rpgNovia.obtenerEstadisticas());
    console.log("🎮 Minijuegos:", sistemaMinijuegos.estado);
    console.log("📖 Novela Visual:", sistemaNovelaVisual.estado);
};

// Funciones de testing para palabras falladas
window.verPalabrasFalladas = function() {
    console.log("📝 Palabras falladas hoy:", sistemaPalabrasFalladas.palabrasFalladasHoy);
    console.log("🔥 Más falladas hoy:", sistemaPalabrasFalladas.obtenerMasFalladasDelDia());
};

// Función para agregar palabra fallada de test
window.agregarPalabraFalladaTest = function() {
    const palabrasTest = [
        { japones: '難しい', lectura: 'muzukashii', opciones: ['Difícil', 'Fácil', 'Simple', 'Complejo'], respuesta: 0 },
        { japones: '美しい', lectura: 'utsukushii', opciones: ['Hermoso', 'Feo', 'Normal', 'Extraño'], respuesta: 0 }
    ];
    
    const palabra = palabrasTest[Math.floor(Math.random() * palabrasTest.length)];
    const respuestaIncorrecta = palabra.opciones[Math.floor(Math.random() * 3) + 1];
    
    sistemaPalabrasFalladas.registrarPalabraFallada(
        palabra.japones,
        respuestaIncorrecta,
        palabra.opciones[palabra.respuesta],
        palabra.lectura
    );
    
    console.log("✅ Palabra fallada de test agregada");
};

// Función para probar minijuegos
window.probarMinijuego = function(tipo) {
    sistemaMinijuegos.iniciarMinijuego(tipo);
};

// Función para ver estadísticas de RPG
window.verEstadisticasRPG = function() {
    console.log("💕 Estadísticas RPG:", rpgNovia.obtenerEstadisticas());
};

// Función para aumentar nivel RPG
window.subirNivelRPG = function() {
    rpgNovia.ganarExperiencia(1000);
    rpgNovia.actualizarInterfazRPG();
    console.log("⬆️ Nivel RPG aumentado");
};

// Función para resetear todo
window.resetearTodo = function() {
    if (confirm("¿ESTÁS SEGURO? Esto eliminará TODOS tus datos de progreso.")) {
        localStorage.clear();
        location.reload();
    }
};
