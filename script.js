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
        novia: 'imagenes/novia.jpg',
        fondo: 'imagenes/fondo-rpg.jpg',
        iconoFlores: 'imagenes/flores.png',
        iconoChocolates: 'imagenes/chocolates.png',
        iconoJoyas: 'imagenes/joyas.png'
    }
};

// ============================================================================
// SISTEMA DE PALABRAS FALLADAS - NUEVO
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
    registrarPalabraFallada: function(palabra, respuestaSeleccionada, respuestaCorrecta, lectura, opcionesOriginales = []) {
        // CORRECCIÓN: Asegurarse de que tenemos las opciones completas
        let opciones = [...opcionesOriginales];
        if (opciones.length < 4) {
            // Si no hay suficientes opciones, generar algunas adicionales
            const opcionesBase = ['Opción A', 'Opción B', 'Opción C', 'Opción D'];
            for (let i = opciones.length; i < 4; i++) {
                if (!opciones.includes(opcionesBase[i])) {
                    opciones.push(opcionesBase[i]);
                }
            }
        }
        
        const palabraFallada = {
            palabra: palabra,
            respuestaSeleccionada: respuestaSeleccionada,
            respuestaCorrecta: respuestaCorrecta,
            lectura: lectura,
            opciones: opciones, // Guardar las opciones completas
            fecha: new Date().toISOString(),
            hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        };
        
        // Agregar a palabras de hoy
        this.palabrasFalladasHoy.push(palabraFallada);
        
        // Agregar al historial
        this.historialFalladas.push(palabraFallada);
        
        this.guardarDatos();
        
        console.log(`❌ Palabra fallada registrada: ${palabra}`, opciones);
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
                    opciones: palabra.opciones,
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
            fechaActual: this.ultimaFecha
        };
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
        },
        {
            id: 3,
            nombre: "🧠 Memoria Fotográfica", 
            descripcion: "Completa 4 mazos diferentes hoy",
            objetivo: 4,
            recompensa: {
                tipo: "video",
                titulo: "¡Memoria de Elefante! 🐘",
                mensaje: "Tu capacidad de retención es increíble",
                video: "videos/memoria.mp4",
                dinero: 5
            },
            fallo: {
                tipo: "video",
                titulo: "La memoria se ejercita 🧩",
                mensaje: "No te rindas, sigue intentándolo",
                video: "videos/ejercicio.mp4"
            },
            video: "videos/memoria.mp4"
        },
        {
            id: 4,
            nombre: "🌟 Estrella Naciente",
            descripcion: "Completa 1 mazo con 100% de aciertos",
            objetivo: 1,
            recompensa: {
                tipo: "video", 
                titulo: "¡Brillas como una estrella! 🌟",
                mensaje: "Tu dedicación está dando frutos",
                video: "videos/estrella.mp4",
                dinero: 5
            },
            fallo: {
                tipo: "video",
                titulo: "Las estrellas también descansan ✨",
                mensaje: "Descansa y vuelve con más energía",
                video: "videos/descanso.mp4"
            },
            video: "videos/estrella.mp4"
        },
        {
            id: 5,
            nombre: "🎮 Combo Perfecto",
            descripcion: "Completa 5 mazos en total hoy",
            objetivo: 5,
            recompensa: {
                tipo: "video",
                titulo: "¡Combo Legendario! 🎯",
                mensaje: "Has alcanzado la perfección hoy",
                video: "videos/combo.mp4",
                dinero: 5
            },
            fallo: {
                tipo: "video",
                titulo: "El combo continúa mañana 🔄",
                mensaje: "Prepárate para el próximo reto",
                video: "videos/continuara.mp4"
            },
            video: "videos/combo.mp4"
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
        vistoHoy: false, // NUEVO: Controla si el evento ya fue visto hoy
        debeMostrarFallo: false
    },
    
    // Inicializar sistema de eventos
    inicializar: function() {
        console.log("🔧 Inicializando sistema de eventos diarios...");
        const hoy = this.obtenerFechaHoy();
        const datosGuardados = this.cargarDatos();
        
        console.log("📅 Fecha hoy:", hoy);
        console.log("💾 Datos guardados:", datosGuardados);
        
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
        console.log("🔍 Verificando si se debe mostrar evento:", {
            tieneEvento: !!this.estado.eventoActual,
            vistoHoy: this.estado.vistoHoy,
            completado: this.estado.completado,
            fallado: this.estado.fallado,
            debeMostrarFallo: this.estado.debeMostrarFallo
        });
        
        // CORRECCIÓN 1: Solo mostrar si hay evento actual, NO ha sido visto hoy, NO está completado, NO está fallado
        if (this.estado.eventoActual && 
            !this.estado.vistoHoy && 
            !this.estado.completado && 
            !this.estado.fallado) {
            console.log("🎁 Mostrando evento diario pendiente");
            
            // CORRECCIÓN 2: Esperar un poco para que cargue la página principal primero
            setTimeout(() => {
                this.mostrarEventoDiario();
            }, 1500);
        } else if (this.estado.debeMostrarFallo) {
            // CORRECCIÓN 3: Si debe mostrar fallo (por evento omitido ayer), mostrar video de fallo
            console.log("📉 Mostrando video de fallo de evento omitido");
            setTimeout(() => {
                this.mostrarVideoFallo();
                // Limpiar el estado después de mostrar
                this.estado.debeMostrarFallo = false;
                this.guardarDatos();
            }, 2000);
        } else {
            console.log("❌ Evento no mostrado - Razón:", {
                tieneEvento: !!this.estado.eventoActual,
                vistoHoy: this.estado.vistoHoy,
                completado: this.estado.completado,
                fallado: this.estado.fallado,
                debeMostrarFallo: this.estado.debeMostrarFallo
            });
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
        
        // CORRECCIÓN 4: Ocultar pantalla de inicio primero
        const pantallaInicio = document.getElementById('pantalla-inicio');
        if (pantallaInicio) {
            pantallaInicio.classList.remove('activa');
        }
        
        // Mostrar pantalla de evento diario (ya existe en el HTML)
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
                // MUTEAR EL VIDEO PARA EVITAR SONIDOS SIMULTÁNEOS
                videoElement.muted = true;
                videoElement.src = evento.video;
                videoElement.loop = true;
                
                // Detectar cuando se empieza a reproducir para ocultar indicador
                videoElement.addEventListener('play', function() {
                    const playIndicator = document.querySelector('.video-play-indicator');
                    if (playIndicator) {
                        playIndicator.style.display = 'none';
                    }
                });
                
                // Detectar cuando se pausa para mostrar indicador
                videoElement.addEventListener('pause', function() {
                    const playIndicator = document.querySelector('.video-play-indicator');
                    if (playIndicator) {
                        playIndicator.style.display = 'flex';
                    }
                });
            }
        }
    },
    
    // Aceptar el evento diario
    aceptarEvento: function() {
        console.log("✅ Evento diario aceptado");
        this.estado.aceptado = true;
        this.guardarDatos();
        this.ocultarPantallaEvento();
        // El evento continúa en segundo plano
    },
    
    // Omitir el evento diario (considerado como fallo inmediato)
    omitirEvento: function() {
        console.log("❌ Evento diario omitido");
        
        // CORRECCIÓN 5: Marcar como fallado y programar fallo para mañana
        this.estado.fallado = true;
        this.estado.debeMostrarFallo = true; // Mostrar fallo al día siguiente
        this.estado.vistoHoy = true; // Marcar como visto
        this.guardarDatos();
        
        // Cerrar pantalla actual
        this.ocultarPantallaEvento();
        
        // NO mostrar video de fallo inmediatamente - se mostrará mañana
        console.log("⏰ Video de fallo programado para mañana");
        
        // Mostrar mensaje al usuario
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
        
        // Actualizar contenido de la pantalla de video existente
        document.getElementById('titulo-video-evento').textContent = evento.recompensa.titulo;
        document.getElementById('mensaje-video-evento').textContent = evento.recompensa.mensaje;
        document.getElementById('recompensa-dinero-evento').textContent = `+${evento.recompensa.dinero} S/. 💰`;
        
        const videoElement = document.getElementById('video-evento-recompensa');
        videoElement.src = evento.recompensa.video;
        videoElement.controls = true;
        videoElement.muted = true; // IMPORTANTE: Mutear para evitar sonidos simultáneos
        videoElement.loop = true; // PONER EN BUCLE
        
        // QUITAR el evento onended para que no se cierre automáticamente
        videoElement.onended = null;
        
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
    
    // Mostrar video de fallo (al día siguiente o si se fuerza)
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

        // Actualizar contenido de la pantalla de video de fallo existente
        document.getElementById('titulo-video-fallo').textContent = evento.fallo.titulo;
        document.getElementById('mensaje-video-fallo').textContent = evento.fallo.mensaje;
        
        const videoElement = document.getElementById('video-evento-fallo');
        videoElement.src = evento.fallo.video;
        videoElement.controls = true;
        videoElement.muted = true; // IMPORTANTE: Mutear para evitar sonidos simultáneos
        videoElement.loop = true; // PONER EN BUCLE
        
        // QUITAR el evento onended para que no se cierre automáticamente
        videoElement.onended = null;
        
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
        // Detener el video antes de cambiar de pantalla
        const videoElement = document.getElementById('video-evento-recompensa');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        
        // Mostrar pantalla de inicio
        cambiarPantalla('pantalla-inicio');
    },
    
    // Cerrar video de fallo
    cerrarVideoFallo: function() {
        // Detener el video antes de cambiar de pantalla
        const videoElement = document.getElementById('video-evento-fallo');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        
        // Mostrar pantalla de inicio
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

// Función para cambiar las URLs de videos íntimos
function cambiarVideoIntimo(escenaId, nuevaUrl) {
    if (videosIntimos[escenaId]) {
        videosIntimos[escenaId] = nuevaUrl;
        console.log(`Video de ${escenaId} actualizado a: ${nuevaUrl}`);
        return true;
    }
    return false;
}

// Funciones globales para cambiar videos desde consola
window.cambiarVideoIntimo = function(escenaId, nuevaUrl) {
    return cambiarVideoIntimo(escenaId, nuevaUrl);
};

window.cambiarTodosVideosIntimos = function(configuraciones) {
    let exitosas = 0;
    configuraciones.forEach(config => {
        if (cambiarVideoIntimo(config.escena, config.url)) {
            exitosas++;
        }
    });
    return exitosas;
};

// ============================================================================
// SISTEMA RPG DE NOVIA - COMPLETAMENTE MODIFICADO
// ============================================================================

const rpgNovia = {
    // Estado de la relación - NUEVA VERSIÓN
    estado: {
        nombreNovia: "Sakura",
        nivel: 0,                // Empieza en nivel 0
        experiencia: 0,          // Empieza en 0 XP
        experienciaTotal: 0,     // XP total acumulada
        humorActual: null,       // Humor del día
        ultimaFechaHumor: null,  // Fecha del último cambio de humor
        energia: 100,
        ultimaVisita: null,
        momentosDesbloqueados: [], // Qué momentos íntimos están desbloqueados
        humorPool: [             // Pool de humores diferentes
            { id: "hot", nombre: "Caliente 🔥", multiplicadorExp: 2.0, permiteIntimos: true, regaloCondones: 1 },
            { id: "feliz", nombre: "Feliz 😊", multiplicadorExp: 1.5, permiteIntimos: true, regaloCondones: 0 },
            { id: "normal", nombre: "Normal 😐", multiplicadorExp: 1.0, permiteIntimos: true, regaloCondones: 0 },
            { id: "enojada", nombre: "Enojada 😠", multiplicadorExp: 0.5, permiteIntimos: false, regaloCondones: 0 },
            { id: "triste", nombre: "Triste 😢", multiplicadorExp: 0.8, permiteIntimos: false, regaloCondones: 0 },
            { id: "timida", nombre: "Tímida 😳", multiplicadorExp: 1.2, permiteIntimos: false, regaloCondones: 0 },
            { id: "juguetona", nombre: "Juguetona 😏", multiplicadorExp: 1.8, permiteIntimos: true, regaloCondones: 0 }
        ]
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
    
    // Sistema de momentos íntimos (siempre visibles pero con requisitos)
    momentosIntimos: [
        { id: "beso", nombre: "Beso Apasionado 💋", costoCondones: 1, nivelRequerido: 1, descripcion: "Un beso intenso y apasionado" },
        { id: "caricias", nombre: "Carícias Íntimas ✋", costoCondones: 1, nivelRequerido: 2, descripcion: "Carícias suaves y tiernas" },
        { id: "intimidad1", nombre: "Primera Noche 🌙", costoCondones: 1, nivelRequerido: 3, descripcion: "Una noche especial juntos" },
        { id: "intimidad2", nombre: "Noche de Pasión 🔥", costoCondones: 2, nivelRequerido: 5, descripcion: "Pasión desenfrenada" }
    ],
    
    // Sistema de regalos y experiencia
    sistemaRegalos: {
        flores: { costo: 5, experiencia: 10 },
        chocolates: { costo: 10, experiencia: 25 },
        joyas: { costo: 20, experiencia: 50 }
    },
    
    // Sistema de experiencia por mazos
    sistemaExperienciaMazos: {
        '100%': { experiencia: 30, descripcion: "Mazo perfecto" },
        '90-99%': { experiencia: 20, descripcion: "Excelente trabajo" },
        '80-89%': { experiencia: 15, descripcion: "Muy buen trabajo" },
        '70-79%': { experiencia: 10, descripcion: "Buen trabajo" },
        '60-69%': { experiencia: 5, descripcion: "Podría mejorar" },
        '50-59%': { experiencia: 3, descripcion: "Sigue practicando" },
        '0-49%': { experiencia: 1, descripcion: "Necesitas más práctica" }
    },
    
    // Inicializar el sistema RPG
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        
        if (datosGuardados) {
            this.estado = datosGuardados.estado;
            this.economia = datosGuardados.economia;
        } else {
            // Configuración inicial
            this.estado.nivel = 0;
            this.estado.experiencia = 0;
            this.estado.experienciaTotal = 0;
            this.economia.saldo = sistemaEconomia.saldoTotal;
            this.actualizarHumorDiario();
            this.guardarDatos();
        }
        
        console.log("💕 RPG de Novia inicializado. Nivel:", this.estado.nivel, "XP:", this.estado.experiencia);
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('rpgNovia');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos RPG:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('rpgNovia', JSON.stringify({
                estado: this.estado,
                economia: this.economia
            }));
            return true;
        } catch (e) {
            console.error("Error guardando datos RPG:", e);
            return false;
        }
    },
    
    // Actualizar humor diario (cambia cada día)
    actualizarHumorDiario: function() {
        const hoy = new Date().toISOString().split('T')[0];
        
        if (!this.estado.ultimaFechaHumor || this.estado.ultimaFechaHumor !== hoy) {
            // Seleccionar humor aleatorio del pool
            const humorAleatorio = this.estado.humorPool[Math.floor(Math.random() * this.estado.humorPool.length)];
            this.estado.humorActual = humorAleatorio;
            this.estado.ultimaFechaHumor = hoy;
            
            console.log(`😊 Humor del día: ${humorAleatorio.nombre}`);
            
            // Si el humor es "hot", regalar condón
            if (humorAleatorio.regaloCondones > 0) {
                this.economia.inventario.condones += humorAleatorio.regaloCondones;
                mostrarMensaje(`¡${this.estado.nombreNovia} está ${humorAleatorio.nombre} y te regala ${humorAleatorio.regaloCondones} condón! 💝`);
            }
            
            this.guardarDatos();
        }
    },
    
    // Agregar experiencia
    agregarExperiencia: function(cantidad, motivo) {
        // Aplicar multiplicador según humor
        const cantidadConMultiplicador = Math.round(cantidad * this.estado.humorActual.multiplicadorExp);
        
        this.estado.experiencia += cantidadConMultiplicador;
        this.estado.experienciaTotal += cantidadConMultiplicador;
        
        console.log(`💕 +${cantidadConMultiplicador} XP (${motivo}) | Multiplicador: ${this.estado.humorActual.multiplicadorExp}x | XP actual: ${this.estado.experiencia}`);
        
        // Verificar si sube de nivel
        this.verificarSubidaNivel();
        
        this.guardarDatos();
        this.actualizarInterfazRPG();
        
        return cantidadConMultiplicador;
    },
    
    // Verificar subida de nivel
    verificarSubidaNivel: function() {
        const expNecesaria = this.calcularExpParaNivel(this.estado.nivel + 1);
        
        while (this.estado.experiencia >= expNecesaria && this.estado.experiencia > 0) {
            this.estado.nivel++;
            this.estado.experiencia -= expNecesaria;
            
            // Verificar qué momentos se desbloquean
            this.verificarMomentosDesbloqueados();
            
            mostrarMensaje(`🎉 ¡${this.estado.nombreNovia} subió al nivel ${this.estado.nivel}! 💕`);
            
            console.log(`⬆️ Subió a nivel ${this.estado.nivel}. XP restante: ${this.estado.experiencia}`);
        }
    },
    
    // Calcular experiencia necesaria para un nivel
    calcularExpParaNivel: function(nivel) {
        // Fórmula: 100 * (nivel + 1)
        return 100 * (nivel + 1);
    },
    
    // Verificar qué momentos se desbloquean
    verificarMomentosDesbloqueados: function() {
        this.momentosIntimos.forEach(momento => {
            if (this.estado.nivel >= momento.nivelRequerido && 
                !this.estado.momentosDesbloqueados.includes(momento.id)) {
                this.estado.momentosDesbloqueados.push(momento.id);
                mostrarMensaje(`✨ ¡Nuevo momento desbloqueado: ${momento.nombre}! 💖`);
            }
        });
    },
    
    // Registrar mazo completado
    registrarMazoCompletado: function(porcentaje) {
        let experiencia = 0;
        
        // Determinar cuánta experiencia dar según el porcentaje
        if (porcentaje === 100) {
            experiencia = this.sistemaExperienciaMazos['100%'].experiencia;
        } else if (porcentaje >= 90) {
            experiencia = this.sistemaExperienciaMazos['90-99%'].experiencia;
        } else if (porcentaje >= 80) {
            experiencia = this.sistemaExperienciaMazos['80-89%'].experiencia;
        } else if (porcentaje >= 70) {
            experiencia = this.sistemaExperienciaMazos['70-79%'].experiencia;
        } else if (porcentaje >= 60) {
            experiencia = this.sistemaExperienciaMazos['60-69%'].experiencia;
        } else if (porcentaje >= 50) {
            experiencia = this.sistemaExperienciaMazos['50-59%'].experiencia;
        } else {
            experiencia = this.sistemaExperienciaMazos['0-49%'].experiencia;
        }
        
        this.agregarExperiencia(experiencia, `Mazo completado al ${porcentaje}%`);
    },
    
    // Regalar item a la novia
    regalarItem: function(tipo) {
        const regalo = this.sistemaRegalos[tipo];
        
        if (!regalo) {
            mostrarMensaje("Tipo de regalo no válido");
            return false;
        }
        
        if (this.economia.saldo >= regalo.costo) {
            // Gastar dinero
            this.economia.saldo -= regalo.costo;
            sistemaEconomia.agregarDinero(-regalo.costo, `Regalo de ${tipo}`);
            
            // Agregar experiencia
            const expGanada = this.agregarExperiencia(regalo.experiencia, `Regalo de ${tipo}`);
            
            // Agregar al inventario
            this.economia.inventario[tipo]++;
            
            mostrarMensaje(`💝 Le regalaste ${tipo} a ${this.estado.nombreNovia} (+${expGanada} XP)`);
            return true;
        } else {
            mostrarMensaje("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // Comprar condones
    comprarCondones: function() {
        const costo = 15;
        if (this.economia.saldo >= costo) {
            this.economia.saldo -= costo;
            sistemaEconomia.agregarDinero(-costo, "Compra de condones");
            this.economia.inventario.condones++;
            
            // Dar un poco de experiencia por la compra
            this.agregarExperiencia(5, "Compra de condones");
            
            this.actualizarInterfazRPG();
            mostrarMensaje("¡Condones comprados! 💕 +5 XP");
            return true;
        } else {
            mostrarMensaje("No tienes suficiente dinero para comprar condones 💸");
            return false;
        }
    },
    
    // Usar momento íntimo
    usarMomentoIntimo: function(momentoId) {
        const momento = this.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) {
            mostrarMensaje("Momento no encontrado");
            return false;
        }
        
        // Verificar nivel requerido
        if (this.estado.nivel < momento.nivelRequerido) {
            mostrarMensaje(`Necesitas nivel ${momento.nivelRequerido} para este momento 💔`);
            return false;
        }
        
        // Verificar si el humor actual permite momentos íntimos
        if (!this.estado.humorActual.permiteIntimos) {
            mostrarMensaje(`${this.estado.nombreNovia} está ${this.estado.humorActual.nombre} y no está de humor para momentos íntimos 💔`);
            return false;
        }
        
        // Verificar condones
        if (this.economia.inventario.condones < momento.costoCondones) {
            mostrarMensaje(`Necesitas ${momento.costoCondones} condón(es) para este momento 💔`);
            return false;
        }
        
        // Usar condones
        this.economia.inventario.condones -= momento.costoCondones;
        
        // Dar experiencia por el momento íntimo
        const expPorMomento = 25 * momento.costoCondones;
        const expGanada = this.agregarExperiencia(expPorMomento, `Momento íntimo: ${momento.nombre}`);
        
        // Ejecutar el momento
        this.ejecutarMomentoIntimo(momento);
        
        mostrarMensaje(`💖 Momento íntimo especial: ${momento.nombre} (+${expGanada} XP)`);
        return true;
    },
    
    // Ejecutar momento íntimo
    ejecutarMomentoIntimo: function(momento) {
        const dialogoElement = document.getElementById('dialogo-novia');
        
        // Verificar si existe el video para este momento
        if (!videosIntimos[momento.id]) {
            // Fallback a texto si no hay video
            const mensajes = {
                beso: [
                    "Te acercas lentamente... 💋",
                    "Sientes su respiración acelerarse... 🌬️",
                    "Tus labios se encuentran en un beso apasionado 🔥",
                    "Ella responde con igual intensidad... 💕",
                    "El momento se siente mágico ✨"
                ],
                caricias: [
                    "Tus manos comienzan a explorar su cuerpo... ✋",
                    "Ella emite un suave gemido... 😳",
                    "La intimidad crece entre ustedes... 🌹",
                    "Sientes su piel suave bajo tus dedos... 💫",
                    "El ambiente se carga de deseo... 🔥"
                ],
                intimidad1: [
                    "La llevas suavemente hacia la cama... 🛏️",
                    "La mirada entre ustedes es intensa... 👁️",
                    "Comienzan a quitarse la ropa lentamente... 👗",
                    "La pasión los consume por completo... 🌋",
                    "Una noche inolvidable comienza... 🌙"
                ],
                intimidad2: [
                    "Ya conocen bien los cuerpos del otro... 💞",
                    "Cada movimiento es sincronizado perfectamente... 🎶",
                    "Los gemidos llenan la habitación... 🎵",
                    "Llegan al éxtasis juntos... 🌠",
                    "Una experiencia íntima y profunda... 💖"
                ]
            };
            
            let mensajeCompleto = `<div class="escena-adulta">`;
            mensajes[momento.id].forEach((mensaje, index) => {
                mensajeCompleto += `<div class="linea-escena">${mensaje}</div>`;
            });
            mensajeCompleto += `</div>`;
            dialogoElement.innerHTML = mensajeCompleto;
        } else {
            // Mostrar video
            dialogoElement.innerHTML = `
                <div class="video-escena-adulta">
                    <h4>${momento.nombre}</h4>
                    <video controls autoplay class="video-intimo">
                        <source src="${videosIntimos[momento.id]}" type="video/mp4">
                        Tu navegador no soporta el video. 
                        <div class="fallback-text">
                            💕 Disfruta este momento especial con ${this.estado.nombreNovia}
                        </div>
                    </video>
                    <div class="leyenda-escena">💖 ${momento.descripcion}</div>
                    <div class="controles-video">
                        <button class="boton-saltar-video" onclick="terminarMomentoIntimo()">Finalizar Momento</button>
                    </div>
                </div>
            `;
            
            // Configurar evento cuando termine el video
            const videoElement = dialogoElement.querySelector('.video-intimo');
            videoElement.onended = function() {
                terminarMomentoIntimo();
            };
            
            // Reproducir automáticamente (con mute para evitar restricciones)
            videoElement.muted = true;
            videoElement.play().catch(e => {
                console.log("Auto-play bloqueado, el usuario debe iniciar manualmente");
            });
        }
    },
    
    // Actualizar interfaz RPG
    actualizarInterfazRPG: function() {
        // Actualizar información básica
        document.getElementById('nombre-novia').textContent = this.estado.nombreNovia;
        document.getElementById('nivel-relacion').textContent = `Nivel ${this.estado.nivel}`;
        document.getElementById('experiencia-actual').textContent = `${this.estado.experiencia}`;
        document.getElementById('experiencia-total').textContent = `${this.estado.experienciaTotal}`;
        
        // Calcular experiencia necesaria para siguiente nivel
        const expNecesaria = this.calcularExpParaNivel(this.estado.nivel + 1);
        document.getElementById('experiencia-siguiente-nivel').textContent = `${expNecesaria}`;
        
        // Actualizar barra de experiencia
        const porcentajeExp = (this.estado.experiencia / expNecesaria) * 100;
        document.getElementById('barra-experiencia-fill').style.width = `${porcentajeExp}%`;
        
        // Actualizar humor
        document.getElementById('humor-novia').textContent = this.estado.humorActual ? this.estado.humorActual.nombre : "Normal 😐";
        
        // Sincronizar saldo con sistema global
        this.economia.saldo = sistemaEconomia.saldoTotal;
        document.getElementById('saldo-rpg').textContent = `${this.economia.saldo} ${this.economia.moneda}`;
        
        // Actualizar inventario
        document.getElementById('condones-inventario').textContent = this.economia.inventario.condones;
        document.getElementById('flores-inventario').textContent = this.economia.inventario.flores;
        document.getElementById('chocolates-inventario').textContent = this.economia.inventario.chocolates;
        document.getElementById('joyas-inventario').textContent = this.economia.inventario.joyas;
        
        // Actualizar botones de momentos íntimos
        this.actualizarBotonesMomentos();
        
        // Actualizar descripción del humor
        this.actualizarDescripcionHumor();
        
        // Actualizar multiplicador de experiencia
        document.getElementById('multiplicador-exp').textContent = `${this.estado.humorActual.multiplicadorExp}x`;
    },
    
    // Actualizar botones de momentos íntimos
    actualizarBotonesMomentos: function() {
        this.momentosIntimos.forEach(momento => {
            const boton = document.getElementById(`boton-${momento.id}`);
            if (boton) {
                const desbloqueado = this.estado.momentosDesbloqueados.includes(momento.id);
                const nivelSuficiente = this.estado.nivel >= momento.nivelRequerido;
                
                if (desbloqueado) {
                    boton.disabled = false;
                    boton.title = momento.descripcion;
                } else if (nivelSuficiente) {
                    // Si tiene el nivel pero no está desbloqueado en la lista, agregarlo
                    if (!this.estado.momentosDesbloqueados.includes(momento.id)) {
                        this.estado.momentosDesbloqueados.push(momento.id);
                    }
                    boton.disabled = false;
                    boton.title = momento.descripcion;
                } else {
                    boton.disabled = true;
                    boton.title = `Nivel ${momento.nivelRequerido} requerido`;
                }
                
                // Verificar si el humor permite momentos íntimos
                if (!this.estado.humorActual.permiteIntimos) {
                    boton.disabled = true;
                    boton.title = `${this.estado.nombreNovia} no está de humor para momentos íntimos`;
                }
                
                // Verificar si hay condones suficientes
                if (this.economia.inventario.condones < momento.costoCondones) {
                    boton.disabled = true;
                    boton.title = `Necesitas ${momento.costoCondones} condón(es)`;
                }
            }
        });
    },
    
    // Actualizar descripción del humor
    actualizarDescripcionHumor: function() {
        const humor = this.estado.humorActual;
        let descripcion = "";
        
        switch(humor.id) {
            case "hot":
                descripcion = "🔥 Hoy está muy caliente. ¡Aprovecha el doble de experiencia y los momentos íntimos!";
                break;
            case "feliz":
                descripcion = "😊 Está feliz. Obtienes 1.5x experiencia y permite momentos íntimos.";
                break;
            case "normal":
                descripcion = "😐 Humor normal. Experiencia estándar y permite momentos íntimos.";
                break;
            case "enojada":
                descripcion = "😠 Está enojada. Solo 0.5x experiencia y NO permite momentos íntimos.";
                break;
            case "triste":
                descripcion = "😢 Está triste. 0.8x experiencia y NO permite momentos íntimos.";
                break;
            case "timida":
                descripcion = "😳 Está tímida. 1.2x experiencia pero NO permite momentos íntimos.";
                break;
            case "juguetona":
                descripcion = "😏 Está juguetona. 1.8x experiencia y permite momentos íntimos.";
                break;
        }
        
        document.getElementById('descripcion-humor').textContent = descripcion;
    }
};

// Función global para terminar momento íntimo
function terminarMomentoIntimo() {
    // Volver al diálogo normal después del momento
    const dialogoElement = document.getElementById('dialogo-novia');
    dialogoElement.innerHTML = `
        <div class="dialogo-burbuja">
            <div class="texto-dialogo">💖 Eso fue increíble... Te amo tanto...</div>
            <div class="tiempo-dialogo">Ahora</div>
        </div>
    `;
}

// ============================================================================
// FUNCIÓN PARA GENERAR PALABRAS ESPECÍFICAS (USANDO VOCABULARIO EXTERNO)
// ============================================================================

// Función para generar palabras específicas para cada mazo
function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    // Usar la base de datos externa de vocabulario
    if (typeof vocabularioDatabase !== 'undefined' && 
        vocabularioDatabase[subcontenedorId] && 
        vocabularioDatabase[subcontenedorId][numeroMazo]) {
        return vocabularioDatabase[subcontenedorId][numeroMazo];
    } else {
        // Fallback a palabras genéricas si no hay específicas
        return generarPalabras(10);
    }
}

// Función de respaldo para generar palabras genéricas
function generarPalabras(cantidad) {
    const palabras = [];
    const palabrasBase = [
        { japones: '言葉', lectura: 'kotoba', opciones: ['Palabra', 'Lenguaje', 'Expresión', 'Término'], respuesta: 0 },
        { japones: '時間', lectura: 'jikan', opciones: ['Tiempo', 'Hora', 'Momento', 'Duración'], respuesta: 0 },
        { japones: '場所', lectura: 'basho', opciones: ['Lugar', 'Espacio', 'Sitio', 'Ubicación'], respuesta: 0 },
        { japones: '人', lectura: 'hito', opciones: ['Persona', 'Gente', 'Humano', 'Individuo'], respuesta: 0 },
        { japones: '物', lectura: 'mono', opciones: ['Cosa', 'Objeto', 'Artículo', 'Elemento'], respuesta: 0 },
        { japones: '事', lectura: 'koto', opciones: ['Asunto', 'Cuestión', 'Tema', 'Problema'], respuesta: 0 },
        { japones: '世界', lectura: 'sekai', opciones: ['Mundo', 'Planeta', 'Tierra', 'Universo'], respuesta: 0 },
        { japones: '生活', lectura: 'seikatsu', opciones: ['Vida', 'Existencia', 'Rutina', 'Día a día'], respuesta: 0 },
        { japones: '仕事', lectura: 'shigoto', opciones: ['Trabajo', 'Empleo', 'Oficio', 'Labor'], respuesta: 0 },
        { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Parientes', 'Clan', 'Linaje'], respuesta: 0 }
    ];
    
    for (let i = 0; i < cantidad; i++) {
        palabras.push({...palabrasBase[i % palabrasBase.length]});
    }
    return palabras;
}

// ============================================================================
// ESTRUCTURA PRINCIPAL MODIFICADA
// ============================================================================

// Nueva estructura: 10 contenedores → 3 sub-contenedores → 5 mazos → 10 palabras específicas
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
    },
    'contenedor4': {
        nombre: 'Contenedor 4',
        subcontenedores: {
            'sub4_1': { 
                nombre: 'Sub-Contenedor 4.1', 
                mazos: generarMazosEspecificos('sub4_1') 
            },
            'sub4_2': { 
                nombre: 'Sub-Contenedor 4.2', 
                mazos: generarMazosEspecificos('sub4_2') 
            },
            'sub4_3': { 
                nombre: 'Sub-Contenedor 4.3', 
                mazos: generarMazosEspecificos('sub4_3') 
            }
        }
    },
    'contenedor5': {
        nombre: 'Contenedor 5',
        subcontenedores: {
            'sub5_1': { 
                nombre: 'Sub-Contenedor 5.1', 
                mazos: generarMazosEspecificos('sub5_1') 
            },
            'sub5_2': { 
                nombre: 'Sub-Contenedor 5.2', 
                mazos: generarMazosEspecificos('sub5_2') 
            },
            'sub5_3': { 
                nombre: 'Sub-Contenedor 5.3', 
                mazos: generarMazosEspecificos('sub5_3') 
            }
        }
    },
    'contenedor6': {
        nombre: 'Contenedor 6',
        subcontenedores: {
            'sub6_1': { 
                nombre: 'Sub-Contenedor 6.1', 
                mazos: generarMazosEspecificos('sub6_1') 
            },
            'sub6_2': { 
                nombre: 'Sub-Contenedor 6.2', 
                mazos: generarMazosEspecificos('sub6_2') 
            },
            'sub6_3': { 
                nombre: 'Sub-Contenedor 6.3', 
                mazos: generarMazosEspecificos('sub6_3') 
            }
        }
    },
    'contenedor7': {
        nombre: 'Contenedor 7',
        subcontenedores: {
            'sub7_1': { 
                nombre: 'Sub-Contenedor 7.1', 
                mazos: generarMazosEspecificos('sub7_1') 
            },
            'sub7_2': { 
                nombre: 'Sub-Contenedor 7.2', 
                mazos: generarMazosEspecificos('sub7_2') 
            },
            'sub7_3': { 
                nombre: 'Sub-Contenedor 7.3', 
                mazos: generarMazosEspecificos('sub7_3') 
            }
        }
    },
    'contenedor8': {
        nombre: 'Contenedor 8',
        subcontenedores: {
            'sub8_1': { 
                nombre: 'Sub-Contenedor 8.1', 
                mazos: generarMazosEspecificos('sub8_1') 
            },
            'sub8_2': { 
                nombre: 'Sub-Contenedor 8.2', 
                mazos: generarMazosEspecificos('sub8_2') 
            },
            'sub8_3': { 
                nombre: 'Sub-Contenedor 8.3', 
                mazos: generarMazosEspecificos('sub8_3') 
            }
        }
    },
    'contenedor9': {
        nombre: 'Contenedor 9',
        subcontenedores: {
            'sub9_1': { 
                nombre: 'Sub-Contenedor 9.1', 
                mazos: generarMazosEspecificos('sub9_1') 
            },
            'sub9_2': { 
                nombre: 'Sub-Contenedor 9.2', 
                mazos: generarMazosEspecificos('sub9_2') 
            },
            'sub9_3': { 
                nombre: 'Sub-Contenedor 9.3', 
                mazos: generarMazosEspecificos('sub9_3') 
            }
        }
    },
    'contenedor10': {
        nombre: 'Contenedor 10',
        subcontenedores: {
            'sub10_1': { 
                nombre: 'Sub-Contenedor 10.1', 
                mazos: generarMazosEspecificos('sub10_1') 
            },
            'sub10_2': { 
                nombre: 'Sub-Contenedor 10.2', 
                mazos: generarMazosEspecificos('sub10_2') 
            },
            'sub10_3': { 
                nombre: 'Sub-Contenedor 10.3', 
                mazos: generarMazosEspecificos('sub10_3') 
            }
        }
    }
};

// Función para generar mazos específicos con palabras únicas para cada subcontenedor
function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    
    // Detectar automáticamente cuántos mazos hay definidos
    // Buscando hasta encontrar el límite
    let numeroMazos = 0;
    let i = 1;
    
    // Seguir buscando mazos mientras existan en generarPalabrasEspecificas
    while (true) {
        const palabras = generarPalabrasEspecificas(subcontenedorId, i);
        // Si no hay palabras o son las genéricas, detenerse
        if (!palabras || palabras.length === 0 || 
            (palabras[0] && palabras[0].japones === '言葉')) { // Palabra genérica por defecto
            break;
        }
        numeroMazos = i;
        i++;
        
        // Límite máximo por seguridad
        if (i > 20) break;
    }
    
    // Si no se encontraron mazos específicos, usar 5 como valor por defecto
    if (numeroMazos === 0) {
        numeroMazos = 5;
    }
    
    // Generar mazos específicos para cada subcontenedor
    for (let i = 1; i <= numeroMazos; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// Función para obtener la URL de una imagen
function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    // Imagen por defecto si no se encuentra
    return 'imagenes/default.jpg';
}

// Función para obtener un video aleatorio
function obtenerVideoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * videosRecompensa.length);
    return videosRecompensa[indiceAleatorio];
}

// ============================================================================
// FUNCIONES DEL SISTEMA PRINCIPAL - CON BOTÓN "IR AL MENÚ"
// ============================================================================

// FUNCIÓN MEJORADA: "Ir al Menú" - Regresa a la pantalla principal
function irAlMenu() {
    cambiarPantalla('pantalla-inicio');
    
    // Detener cualquier video que esté reproduciéndose
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

function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

// FUNCIÓN MEJORADA - NAVEGACIÓN AUTOMÁTICA + REGISTRO DE PALABRAS FALLADAS
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
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

// FUNCIÓN CORREGIDA - REGISTRA PALABRAS FALLADAS Y MUESTRA LA PRONUNCIACIÓN SIEMPRE
function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    const palabraActual = document.getElementById('palabra-japones').textContent;
    
    // CORRECCIÓN: Asegurar que todos los botones son clickeables
    opcionesDOM.forEach(opcion => {
        opcion.disabled = false; // Asegurar que no estén deshabilitados
    });
    
    // Deshabilitar botones después de hacer clic
    opcionesDOM.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Marcar respuestas correctas e incorrectas
    opcionesDOM.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // CORRECCIÓN 1: MOSTRAR LA PRONUNCIACIÓN SIEMPRE, TANTO EN RESPUESTA CORRECTA COMO INCORRECTA
    document.getElementById('lectura').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        // CORRECCIÓN 2: Navegación automática solo para respuestas correctas
        setTimeout(() => {
            siguientePregunta();
        }, 1000);
        
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        // REGISTRAR PALABRA FALLADA CON OPCIONES ORIGINALES
        sistemaPalabrasFalladas.registrarPalabraFallada(
            palabraActual,
            respuestaSeleccionada,
            respuestaCorrecta,
            lectura,
            opciones // Guardar las opciones originales
        );
        
        // Mostrar botón "Continuar" solo para respuestas incorrectas
        document.getElementById('boton-siguiente').style.display = 'block';
        
        // CORRECCIÓN 3: NO NAVEGACIÓN AUTOMÁTICA PARA RESPUESTAS INCORRECTAS
        // El usuario debe hacer clic en "Continuar" manualmente
    }
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

// FUNCIÓN MEJORADA - SOLO EVENTO DIARIO CUANDO HAY DOBLE COMPLETACIÓN
function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    console.log("📊 Mostrando resultados:", {
        porcentaje: porcentaje,
        tieneEventoActivo: !!eventosDiarios.estado.eventoActual,
        eventoCompletado: eventosDiarios.estado.completado,
        eventoProgreso: eventosDiarios.estado.progreso
    });
    
    // Registrar experiencia en RPG de novia
    if (typeof rpgNovia !== 'undefined') {
        rpgNovia.registrarMazoCompletado(porcentaje);
    }
    
    if (porcentaje === 100) {
        // Registrar mazo completado para misiones diarias
        misionesDiarias.registrarMazoCompletado();
        
        // Registrar mazo completado para evento diario (esto podría completar el evento)
        const eventoEstabaIncompleto = !eventosDiarios.estado.completado;
        eventosDiarios.registrarMazoCompletado();
        
        // VERIFICAR: ¿Se completó el evento diario JUSTO AHORA?
        const eventoSeCompletoJustoAhora = eventoEstabaIncompleto && eventosDiarios.estado.completado;
        
        console.log("🎯 Estado evento:", {
            eventoEstabaIncompleto: eventoEstabaIncompleto,
            eventoSeCompletoJustoAhora: eventoSeCompletoJustoAhora
        });
        
        if (eventoSeCompletoJustoAhora) {
            // SOLUCIÓN: Si se completó el evento diario, SOLO mostrar el evento
            console.log("🎁 Evento diario completado - Mostrando SOLO evento");
            // El evento diario automáticamente mostrará su video
            // NO mostramos el video del mazo
        } else {
            // Si NO se completó evento diario, mostrar video normal del mazo
            sistemaEconomia.agregarDinero(1, "Mazo completado al 100%");
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

function mostrarPantallaResultados(porcentaje) {
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    
    resultadoFinal.innerHTML = `
        <div class="resultado-detalle">
            <h3>Resumen del Quiz</h3>
            <div class="resultado-item">
                <span class="resultado-label">Preguntas totales:</span>
                <span class="resultado-valor">${mazoActual.length}</span>
            </div>
            <div class="resultado-item">
                <span class="resultado-label">Respuestas correctas:</span>
                <span class="resultado-valor">${respuestasCorrectas}</span>
            </div>
            <div class="resultado-item">
                <span class="resultado-label">Respuestas incorrectas:</span>
                <span class="resultado-valor">${respuestasIncorrectas}</span>
            </div>
            <div class="resultado-item">
                <span class="resultado-label">Porcentaje de aciertos:</span>
                <span class="resultado-valor resultado-porcentaje">${porcentaje}%</span>
            </div>
            <div class="resultado-mensaje">
                ${porcentaje >= 80 ? '¡Excelente trabajo! 🎉' : 
                  porcentaje >= 60 ? 'Buen trabajo, pero puedes mejorar 👍' : 
                  'Sigue practicando, lo harás mejor la próxima vez 💪'}
            </div>
        </div>
    `;
}

// FUNCIÓN MEJORADA - VIDEO EN BUCLE CON BOTÓN DE CERRAR (MUTEADO)
function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    // Actualizar la pantalla de video con la información del video seleccionado
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    document.getElementById('recompensa-mazo').textContent = '+1 S/. 💰';
    
    cambiarPantalla('pantalla-video-recompensa');
    
    // Reproducir el video automáticamente
    const videoElement = document.getElementById('video-recompensa');
    
    // Configurar para que se repita en bucle
    videoElement.loop = true;
    
    // MUTEAR EL VIDEO PARA QUE NO INTERRUMPA TU ASMR/TWITCH
    videoElement.muted = true;  // <-- ESTA ES LA LÍNEA CLAVE PARA MUTEAR
    
    // QUITAR el evento onended para que no se cierre automáticamente
    videoElement.onended = null;
    
    videoElement.play().catch(e => {
        console.log("Autoplay bloqueado, el usuario debe iniciar manualmente");
    });
}

// NUEVA FUNCIÓN PARA CERRAR VIDEO DE RECOMPENSA DE MAZO
function cerrarVideoRecompensaMazo() {
    // Detener el video
    const videoElement = document.getElementById('video-recompensa');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
    
    // Mostrar resultados
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
}

function saltarVideo() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    mostrarPantallaResultados(porcentaje);
}

function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

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
// FUNCIONES DEL SISTEMA DE PALABRAS FALLADAS - NUEVAS Y CORREGIDAS
// ============================================================================

// Función para mostrar la pantalla de palabras falladas
function mostrarPalabrasFalladas() {
    const estadisticas = sistemaPalabrasFalladas.obtenerEstadisticas();
    
    // Crear pantalla dinámica
    const pantallaHTML = `
        <div id="pantalla-palabras-falladas" class="pantalla activa">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador">📝 PALABRAS FALLADAS</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <div class="palabras-falladas-container">
                    <div class="estadisticas-palabras">
                        <div class="estadistica-item">
                            <span class="estadistica-label">Palabras falladas hoy:</span>
                            <span class="estadistica-valor" id="total-hoy">${estadisticas.totalHoy}</span>
                        </div>
                        <div class="estadistica-item">
                            <span class="estadistica-label">Total histórico:</span>
                            <span class="estadistica-valor" id="total-historial">${estadisticas.totalHistorial}</span>
                        </div>
                        <div class="estadistica-item">
                            <span class="estadistica-label">Fecha actual:</span>
                            <span class="estadistica-valor" id="fecha-actual">${estadisticas.fechaActual}</span>
                        </div>
                    </div>
                    
                    <div class="opciones-palabras-falladas">
                        <button class="boton-palabras-falladas" onclick="mostrarMasFalladasDelDia()">
                            🔥 PALABRAS MÁS FALLADAS DEL DÍA
                            <small>Top 10 que más te cuestan</small>
                        </button>
                        
                        <button class="boton-palabras-falladas" onclick="mostrarTodasFalladasHoy()">
                            📋 TODAS LAS PALABRAS FALLADAS HOY
                            <small>Lista completa de hoy</small>
                        </button>
                        
                        <button class="boton-palabras-falladas" onclick="limpiarHistorialFalladas()">
                            🗑️ LIMPIAR HISTORIAL COMPLETO
                            <small>Eliminar todas las palabras falladas</small>
                        </button>
                    </div>
                    
                    <div class="lista-palabras-container" id="lista-palabras-container">
                        <!-- Aquí se mostrarán las listas de palabras -->
                    </div>
                    
                    <div class="acciones-palabras">
                        <button class="boton-secundario" onclick="volverAlInicio()">
                            Volver al Inicio
                        </button>
                        <button class="boton-principal" onclick="practicarPalabrasFalladas()">
                            🎯 PRACTICAR PALABRAS FALLADAS (+3 S/.)
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

// Función para mostrar las palabras más falladas del día
function mostrarMasFalladasDelDia() {
    const palabras = sistemaPalabrasFalladas.obtenerMasFalladasDelDia();
    const container = document.getElementById('lista-palabras-container');
    
    if (palabras.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <h3>🎉 ¡Excelente trabajo!</h3>
                <p>No has fallado ninguna palabra hoy.</p>
                <p>¡Sigue así! 💪</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="lista-palabras-header">
            <h3>🔥 TOP 10 PALABRAS MÁS FALLADAS HOY</h3>
            <p class="subtitulo-lista">Estas son las palabras que más te cuestan hoy</p>
        </div>
        <div class="lista-palabras">
    `;
    
    palabras.forEach((palabra, index) => {
        html += `
            <div class="palabra-item ${index < 3 ? 'palabra-destacada' : ''}">
                <div class="palabra-posicion">${index + 1}</div>
                <div class="palabra-info">
                    <div class="palabra-japones">${palabra.palabra}</div>
                    <div class="palabra-lectura">(${palabra.lectura})</div>
                    <div class="palabra-traduccion">✅ ${palabra.respuestaCorrecta}</div>
                </div>
                <div class="palabra-veces">
                    <span class="veces-numero">${palabra.veces}</span>
                    <span class="veces-texto">veces</span>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Función para mostrar todas las palabras falladas hoy
function mostrarTodasFalladasHoy() {
    const palabras = sistemaPalabrasFalladas.obtenerTodasFalladasHoy();
    const container = document.getElementById('lista-palabras-container');
    
    if (palabras.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <h3>🎉 ¡Excelente trabajo!</h3>
                <p>No has fallado ninguna palabra hoy.</p>
                <p>¡Sigue así! 💪</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="lista-palabras-header">
            <h3>📋 TODAS LAS PALABRAS FALLADAS HOY</h3>
            <p class="subtitulo-lista">Total: ${palabras.length} palabras</p>
        </div>
        <div class="lista-palabras-todas">
    `;
    
    // Agrupar por hora
    const palabrasPorHora = {};
    palabras.forEach(palabra => {
        const hora = palabra.hora;
        if (!palabrasPorHora[hora]) {
            palabrasPorHora[hora] = [];
        }
        palabrasPorHora[hora].push(palabra);
    });
    
    Object.keys(palabrasPorHora).forEach(hora => {
        html += `
            <div class="grupo-hora">
                <h4>🕒 ${hora}</h4>
                <div class="palabras-hora">
        `;
        
        palabrasPorHora[hora].forEach((palabra, index) => {
            html += `
                <div class="palabra-item-detalle">
                    <div class="palabra-japones-detalle">${palabra.palabra}</div>
                    <div class="palabra-info-detalle">
                        <span class="palabra-error">❌ ${palabra.respuestaSeleccionada}</span>
                        <span class="palabra-correcta">✅ ${palabra.respuestaCorrecta}</span>
                        <span class="palabra-lectura-detalle">(${palabra.lectura})</span>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Función para limpiar el historial de palabras falladas
function limpiarHistorialFalladas() {
    if (confirm("¿Estás seguro de que quieres eliminar todo el historial de palabras falladas?\nEsta acción no se puede deshacer.")) {
        sistemaPalabrasFalladas.limpiarHistorialCompleto();
        
        // Actualizar estadísticas en pantalla
        document.getElementById('total-hoy').textContent = '0';
        document.getElementById('total-historial').textContent = '0';
        
        // Mostrar mensaje de confirmación
        const container = document.getElementById('lista-palabras-container');
        container.innerHTML = `
            <div class="mensaje-exito">
                <h3>✅ Historial limpiado</h3>
                <p>Todas las palabras falladas han sido eliminadas.</p>
                <p>¡Nuevo comienzo! 🚀</p>
            </div>
        `;
    }
}

// FUNCIÓN CORREGIDA COMPLETAMENTE - Practicar palabras falladas con las opciones correctas
function practicarPalabrasFalladas() {
    const palabrasFalladas = sistemaPalabrasFalladas.obtenerMasFalladasDelDia();
    
    if (palabrasFalladas.length === 0) {
        alert("🎉 ¡No tienes palabras falladas para practicar!\nSigue estudiando y vuelve cuando tengas palabras para repasar.");
        return;
    }
    
    console.log("🔍 Preparando práctica con palabras falladas:", palabrasFalladas);
    
    // CORRECCIÓN: Crear mazo de práctica usando las opciones ORIGINALES guardadas
    // y asegurarse de que la respuesta correcta esté en el índice correcto
    mazoActual = palabrasFalladas.map(palabra => {
        // Usar las opciones ORIGINALES guardadas
        let opciones = palabra.opciones || [];
        
        // Asegurarse de que la respuesta correcta esté en las opciones
        if (!opciones.includes(palabra.respuestaCorrecta)) {
            opciones = [palabra.respuestaCorrecta, ...opciones.slice(0, 3)];
        }
        
        // Asegurarse de que haya exactamente 4 opciones
        while (opciones.length < 4) {
            opciones.push(`Opción ${opciones.length + 1}`);
        }
        
        // Mezclar las opciones para que la respuesta correcta no siempre esté en la misma posición
        for (let i = opciones.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
        }
        
        // Encontrar el índice de la respuesta correcta después de mezclar
        const respuestaIndex = opciones.indexOf(palabra.respuestaCorrecta);
        
        return {
            japones: palabra.palabra,
            lectura: palabra.lectura,
            opciones: opciones,
            respuesta: respuestaIndex // Índice correcto de la respuesta
        };
    });
    
    console.log("📚 Mazo de práctica creado:", mazoActual);
    
    // Limitar a 10 palabras máximo para no hacerlo muy largo
    if (mazoActual.length > 10) {
        mazoActual = mazoActual.slice(0, 10);
    }
    
    // Mezclar preguntas
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
    
    // Configurar para práctica
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Ir a la pantalla de quiz
    cambiarPantalla('pantalla-quiz');
    
    // Cambiar título para indicar que es práctica especial
    document.getElementById('contador-preguntas').innerHTML = `
        🎯 PRÁCTICA ESPECIAL (+3 S/.): <span id="numero-pregunta">1</span>/<span id="total-preguntas">${mazoActual.length}</span>
    `;
    
    // Mostrar primera pregunta
    mostrarPregunta();
}

// ============================================================================
// FUNCIONES DEL RPG DE NOVIA - MEJORADAS
// ============================================================================

function iniciarRPGNovia() {
    cambiarPantalla('pantalla-rpg-novia');
    actualizarInterfazRPG();
}

function actualizarInterfazRPG() {
    // Actualizar interfaz RPG
    if (typeof rpgNovia !== 'undefined' && rpgNovia.actualizarInterfazRPG) {
        rpgNovia.actualizarInterfazRPG();
    }
}

// Función para regalar item (ahora llama al nuevo sistema RPG)
function regalarItem(tipo) {
    if (typeof rpgNovia !== 'undefined' && rpgNovia.regalarItem) {
        rpgNovia.regalarItem(tipo);
    }
}

// Función para comprar condones (ahora llama al nuevo sistema RPG)
function comprarCondones() {
    if (typeof rpgNovia !== 'undefined' && rpgNovia.comprarCondones) {
        rpgNovia.comprarCondones();
    }
}

// Función para usar momento íntimo (ahora llama al nuevo sistema RPG)
function usarMomentoIntimo(momentoId) {
    if (typeof rpgNovia !== 'undefined' && rpgNovia.usarMomentoIntimo) {
        rpgNovia.usarMomentoIntimo(momentoId);
    }
}

// Función global para mostrar mensaje (usada por el sistema RPG)
function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById('mensaje-rpg');
    if (mensajeElement) {
        mensajeElement.textContent = mensaje;
        mensajeElement.style.display = 'block';
        
        setTimeout(() => {
            mensajeElement.style.display = 'none';
        }, 3000);
    }
}

// ============================================================================
// INICIALIZACIÓN DEL SISTEMA - MEJORADA
// ============================================================================

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicación cargada - Inicializando sistemas...");
    
    // Inicializar sistemas en orden
    sistemaEconomia.inicializar();
    misionesDiarias.inicializar();
    eventosDiarios.inicializar();
    sistemaPalabrasFalladas.inicializar();
    
    // Inicializar sistema RPG de novia
    if (typeof rpgNovia !== 'undefined' && rpgNovia.inicializar) {
        rpgNovia.inicializar();
    }
    
    console.log("✅ Sistemas inicializados correctamente");
    
    // Asegurarse de que la pantalla de inicio esté activa
    setTimeout(() => {
        if (!document.querySelector('.pantalla.activa')) {
            cambiarPantalla('pantalla-inicio');
        }
    }, 100);
});

// Función para forzar la aparición del evento diario (para testing)
window.mostrarEventoDiarioForzado = function() {
    eventosDiarios.reiniciarEventoDiario();
    eventosDiarios.mostrarEventoDiario();
};

// Función para reiniciar el sistema de eventos (para testing)
window.reiniciarSistemaEventos = function() {
    localStorage.removeItem('eventosDiarios');
    eventosDiarios.reiniciarEventoDiario();
    location.reload();
};

// Función para agregar dinero (testing)
window.agregarDinero = function(cantidad) {
    sistemaEconomia.agregarDinero(cantidad, "Testing");
};

// Función para ver estado de sistemas (testing)
window.verEstadoSistemas = function() {
    console.log("=== ESTADO DE SISTEMAS ===");
    console.log("💰 Economía:", sistemaEconomia.saldoTotal);
    console.log("🎯 Misiones:", misionesDiarias.misiones);
    console.log("📅 Evento Diario:", eventosDiarios.estado);
    console.log("📝 Palabras Falladas:", sistemaPalabrasFalladas.obtenerEstadisticas());
    console.log("💕 RPG Novia:", rpgNovia.estado);
};

// Funciones de testing para palabras falladas
window.verPalabrasFalladas = function() {
    console.log("📝 Palabras falladas hoy:", sistemaPalabrasFalladas.palabrasFalladasHoy);
    console.log("🔥 Más falladas hoy:", sistemaPalabrasFalladas.obtenerMasFalladasDelDia());
};

window.agregarPalabraFalladaTest = function() {
    const palabrasTest = [
        { japones: '難しい', lectura: 'muzukashii', opciones: ['Difícil', 'Fácil', 'Simple', 'Complejo'], respuesta: 0 },
        { japones: '美しい', lectura: 'utsukushii', opciones: ['Hermoso', 'Feo', 'Normal', 'Extraño'], respuesta: 0 },
        { japones: '速い', lectura: 'hayai', opciones: ['Rápido', 'Lento', 'Medio', 'Variable'], respuesta: 0 }
    ];
    
    const palabra = palabrasTest[Math.floor(Math.random() * palabrasTest.length)];
    const respuestaIncorrecta = palabra.opciones[Math.floor(Math.random() * 3) + 1];
    
    sistemaPalabrasFalladas.registrarPalabraFallada(
        palabra.japones,
        respuestaIncorrecta,
        palabra.opciones[palabra.respuesta],
        palabra.lectura,
        palabra.opciones // Guardar opciones originales
    );
    
    console.log("✅ Palabra fallada de test agregada");
};

// Funciones de testing para RPG de novia
window.agregarExperienciaNovia = function(cantidad) {
    if (typeof rpgNovia !== 'undefined' && rpgNovia.agregarExperiencia) {
        rpgNovia.agregarExperiencia(cantidad, "Testing");
    }
};

window.verEstadoNovia = function() {
    console.log("💕 Estado Novia:");
    console.log("- Nivel:", rpgNovia.estado.nivel);
    console.log("- Experiencia:", rpgNovia.estado.experiencia);
    console.log("- Experiencia Total:", rpgNovia.estado.experienciaTotal);
    console.log("- Humor:", rpgNovia.estado.humorActual);
    console.log("- Momentos desbloqueados:", rpgNovia.estado.momentosDesbloqueados);
};

// ============================================================================
// NUEVA FUNCIÓN PARA GANAR DINERO AL COMPLETAR PRÁCTICA DE PALABRAS FALLADAS
// ============================================================================

// Modificar la función mostrarResultados para dar recompensa especial en práctica
function mostrarResultadosPracticaEspecial(porcentaje) {
    const recompensa = 3; // 3 S/. por completar la práctica
    
    if (porcentaje >= 80) {
        sistemaEconomia.agregarDinero(recompensa, "Práctica de palabras falladas completada");
        mostrarNotificacion(`🎉 ¡Práctica completada! +${recompensa} S/.`);
    }
    
    mostrarPantallaResultados(porcentaje);
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
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
}

// Sobrescribir mostrarResultados para detectar si es práctica especial
const mostrarResultadosOriginal = mostrarResultados;
window.mostrarResultados = function() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // Verificar si es práctica especial (por el título)
    const tituloElement = document.getElementById('contador-preguntas');
    if (tituloElement && tituloElement.textContent.includes('PRÁCTICA ESPECIAL')) {
        mostrarResultadosPracticaEspecial(porcentaje);
    } else {
        mostrarResultadosOriginal();
    }
};

// CORRECCIÓN: Función para repasar falladas desde pantalla de resultados
function repetirFalladas() {
    // Llamar a la función de práctica de palabras falladas
    practicarPalabrasFalladas();
}
