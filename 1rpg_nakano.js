// ============================================================================
// SISTEMA RPG DE LAS 5 QUINTILLIZAS NAKANO - COMPLETAMENTE NUEVO
// ============================================================================

const sistemaNakano = {
    // Novia seleccionada actualmente
    noviaSeleccionada: 'ichika',
    
    // Estado de las 5 hermanas
    quintillizas: {
        'ichika': {
            id: 'ichika',
            nombre: 'Ichika Nakano',
            descripcion: 'La hermana mayor, actriz y coqueta',
            nivel: 0,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            momentosDesbloqueados: [],
            // HUMORES ÚNICOS DE ICHIKA
            humorPool: [
                { id: "coqueta", nombre: "Coqueta 😘", multiplicadorExp: 1.8, permiteIntimos: true },
                { id: "actriz", nombre: "En modo actriz 🎭", multiplicadorExp: 2.0, permiteIntimos: false },
                { id: "hermana_mayor", nombre: "Responsable 👩‍🏫", multiplicadorExp: 1.2, permiteIntimos: false },
                { id: "juguetona", nombre: "Juguetona 😏", multiplicadorExp: 1.5, permiteIntimos: true },
                { id: "cansada", nombre: "Cansada 😴", multiplicadorExp: 0.8, permiteIntimos: false }
            ],
            // REGALOS ESPECIALES DE ICHIKA (con videos recíprocos)
            regalosEspeciales: {
                'microfono': { 
                    costo: 25, 
                    experiencia: 50, 
                    videoReciproco: 'videos/ichika_microfono.mp4',
                    mensaje: '¡Gracias por el micrófono! Te canto algo especial 🎤'
                },
                'maquillaje': { 
                    costo: 20, 
                    experiencia: 40, 
                    videoReciproco: 'videos/ichika_maquillaje.mp4',
                    mensaje: 'Con este maquillaje me veré hermosa para ti 💄'
                },
                'guion': { 
                    costo: 30, 
                    experiencia: 60, 
                    videoReciproco: 'videos/ichika_guion.mp4',
                    mensaje: '¡Un guion nuevo! Practicaremos juntos 📖'
                }
            },
            // MOMENTOS ÍNTIMOS ÚNICOS
            momentosIntimos: [
                { id: "beso_ichika", nombre: "Beso tras bambalinas 🎬", costoCondones: 1, nivelRequerido: 1, descripcion: "Un beso apasionado después de un ensayo" },
                { id: "escena_privada", nombre: "Escena privada contigo 🎭", costoCondones: 1, nivelRequerido: 2, descripcion: "Una actuación especial sólo para ti" },
                { id: "noche_estrellas", nombre: "Noche bajo las estrellas 🌟", costoCondones: 2, nivelRequerido: 4, descripcion: "Romance bajo el cielo nocturno" },
                { id: "maquillaje_intimo", nombre: "Maquillaje íntimo 💋", costoCondones: 3, nivelRequerido: 6, descripcion: "Una sesión de maquillaje muy especial" }
            ]
        },
        
        'nino': {
            id: 'nino',
            nombre: 'Nino Nakano',
            descripcion: 'La chef tsundere, dulce pero temperamental',
            nivel: 0,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            momentosDesbloqueados: [],
            // HUMORES ÚNICOS DE NINO
            humorPool: [
                { id: "tsundere", nombre: "Tsundere 😠➡️😊", multiplicadorExp: 1.6, permiteIntimos: true },
                { id: "chef", nombre: "Modo chef 👩‍🍳", multiplicadorExp: 1.8, permiteIntimos: false },
                { id: "dulce", nombre: "Dulce y cariñosa 🍬", multiplicadorExp: 2.0, permiteIntimos: true },
                { id: "celosa", nombre: "Celosa 😤", multiplicadorExp: 0.7, permiteIntimos: false },
                { id: "protectora", nombre: "Protectora 🛡️", multiplicadorExp: 1.3, permiteIntimos: false }
            ],
            // REGALOS ESPECIALES DE NINO
            regalosEspeciales: {
                'utensilios_cocina': { 
                    costo: 20, 
                    experiencia: 45, 
                    videoReciproco: 'ninocaricia.mp4',
                    mensaje: '¡Utensilios nuevos! Te cocinaré algo especial 👩‍🍳'
                },
                'delantal': { 
                    costo: 15, 
                    experiencia: 35, 
                    videoReciproco: 'ninocaricia.mp4',
                    mensaje: 'Con este delantal cocinaré sólo para ti 💖'
                },
                'libro_recetas': { 
                    costo: 25, 
                    experiencia: 55, 
                    videoReciproco: 'ninocaricia.mp4',
                    mensaje: '¡Nuevas recetas! Prepararemos algo juntos 📚'
                }
            },
            // MOMENTOS ÍNTIMOS ÚNICOS
            momentosIntimos: [
                { id: "beso_nino", nombre: "Beso con sabor a postre 🍰", costoCondones: 1, nivelRequerido: 1, descripcion: "Un beso dulce después de cocinar" },
                { id: "cena_romantica", nombre: "Cena romántica a la luz de velas 🕯️", costoCondones: 1, nivelRequerido: 3, descripcion: "Una cena especial sólo para dos" },
                { id: "masaje_culinario", nombre: "Masaje con aceites especiales 💆‍♀️", costoCondones: 2, nivelRequerido: 5, descripcion: "Relajación con toques culinarios" },
                { id: "noche_especias", nombre: "Noche de especias picantes 🌶️", costoCondones: 3, nivelRequerido: 7, descripcion: "Pasión intensa y ardiente" }
            ]
        },
        
        'miku': {
            id: 'miku',
            nombre: 'Miku Nakano',
            descripcion: 'La tímida amante de la historia y audífonos',
            nivel: 0,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            momentosDesbloqueados: [],
            // HUMORES ÚNICOS DE MIKU
            humorPool: [
                { id: "timida", nombre: "Tímida 😳", multiplicadorExp: 1.4, permiteIntimos: false },
                { id: "historica", nombre: "Modo histórico 📜", multiplicadorExp: 1.7, permiteIntimos: false },
                { id: "audifonos", nombre: "Con audífonos 🎧", multiplicadorExp: 1.9, permiteIntimos: true },
                { id: "concentrada", nombre: "Concentrada 🤔", multiplicadorExp: 1.5, permiteIntimos: false },
                { id: "valiente", nombre: "Valiente 💪", multiplicadorExp: 2.0, permiteIntimos: true }
            ],
            // REGALOS ESPECIALES DE MIKU
            regalosEspeciales: {
                'audifonos': { 
                    costo: 30, 
                    experiencia: 65, 
                    videoReciproco: 'videos/miku_audifonos.mp4',
                    mensaje: '¡Audífonos nuevos! Escucharemos juntos 🎧'
                },
                'libro_historia': { 
                    costo: 15, 
                    experiencia: 35, 
                    videoReciproco: 'videos/miku_historia.mp4',
                    mensaje: '¡Un libro de historia! Te enseñaré algo 📖'
                },
                'daimyou': { 
                    costo: 40, 
                    experiencia: 80, 
                    videoReciproco: 'videos/miku_daimyou.mp4',
                    mensaje: '¡Figura de daimyō! Hablaremos de historia japonesa 🏯'
                }
            },
            // MOMENTOS ÍNTIMOS ÚNICOS
            momentosIntimos: [
                { id: "beso_miku", nombre: "Beso tímido tras los audífonos 🎧", costoCondones: 1, nivelRequerido: 1, descripcion: "Un beso suave y tímido" },
                { id: "leccion_historica", nombre: "Lección histórica privada 📜", costoCondones: 1, nivelRequerido: 3, descripcion: "Una lección muy personal" },
                { id: "musica_intima", nombre: "Música íntima compartida 🎵", costoCondones: 2, nivelRequerido: 5, descripcion: "Compartiendo audífonos y más" },
                { id: "noche_samurais", nombre: "Noche de samuráis y pasión ⚔️", costoCondones: 3, nivelRequerido: 7, descripcion: "Pasión histórica y épica" }
            ]
        },
        
        'yotsuba': {
            id: 'yotsuba',
            nombre: 'Yotsuba Nakano',
            descripcion: 'La atleta energética y siempre positiva',
            nivel: 0,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            momentosDesbloqueados: [],
            // HUMORES ÚNICOS DE YOTSUBA
            humorPool: [
                { id: "energetica", nombre: "Energética ⚡", multiplicadorExp: 1.9, permiteIntimos: true },
                { id: "deportista", nombre: "Modo deportista 🏃‍♀️", multiplicadorExp: 1.7, permiteIntimos: false },
                { id: "positiva", nombre: "¡Siempre positiva! 🌟", multiplicadorExp: 2.0, permiteIntimos: true },
                { id: "cansada_deporte", nombre: "Cansada del deporte 😅", multiplicadorExp: 1.0, permiteIntimos: false },
                { id: "competitiva", nombre: "Competitiva 🏆", multiplicadorExp: 1.8, permiteIntimos: true }
            ],
            // REGALOS ESPECIALES DE YOTSUBA
            regalosEspeciales: {
                'balon': { 
                    costo: 10, 
                    experiencia: 30, 
                    videoReciproco: 'videos/yotsuba_balon.mp4',
                    mensaje: '¡Un balón nuevo! Jugaremos juntos ⚽'
                },
                'zapatos_deportivos': { 
                    costo: 35, 
                    experiencia: 70, 
                    videoReciproco: 'videos/yotsuba_corriendo.mp4',
                    mensaje: '¡Zapatos deportivos! Correremos juntos 👟'
                },
                'medalla': { 
                    costo: 50, 
                    experiencia: 100, 
                    videoReciproco: 'videos/yotsuba_medalla.mp4',
                    mensaje: '¡Una medalla! Ganaremos juntos 🥇'
                }
            },
            // MOMENTOS ÍNTIMOS ÚNICOS
            momentosIntimos: [
                { id: "beso_yotsuba", nombre: "Beso energético tras el deporte 🏃‍♀️", costoCondones: 1, nivelRequerido: 1, descripcion: "Un beso lleno de energía" },
                { id: "ducha_juntos", nombre: "Ducha después del ejercicio 🚿", costoCondones: 1, nivelRequerido: 3, descripcion: "Relajación después del deporte" },
                { id: "masaje_deportivo", nombre: "Masaje deportivo especial 💪", costoCondones: 2, nivelRequerido: 5, descripcion: "Cuidado para músculos cansados" },
                { id: "noche_olimpica", nombre: "Noche olímpica de pasión 🏅", costoCondones: 3, nivelRequerido: 7, descripcion: "Pasión atlética y vigorosa" }
            ]
        },
        
        'itsuki': {
            id: 'itsuki',
            nombre: 'Itsuki Nakano',
            descripcion: 'La glotona estudiosa y la más joven',
            nivel: 0,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            momentosDesbloqueados: [],
            // HUMORES ÚNICOS DE ITSUKI
            humorPool: [
                { id: "estudiosa", nombre: "Estudiosa 📚", multiplicadorExp: 1.6, permiteIntimos: false },
                { id: "glotona", nombre: "Glotona 🍔", multiplicadorExp: 1.8, permiteIntimos: true },
                { id: "inocente", nombre: "Inocente y pura 🍓", multiplicadorExp: 1.4, permiteIntimos: false },
                { id: "hambrienta", nombre: "¡Hambrienta! 🍜", multiplicadorExp: 0.9, permiteIntimos: false },
                { id: "culinaria", nombre: "Modo culinario (come) 🍽️", multiplicadorExp: 1.7, permiteIntimos: true }
            ],
            // REGALOS ESPECIALES DE ITSUKI
            regalosEspeciales: {
                'libro_cocina': { 
                    costo: 20, 
                    experiencia: 45, 
                    videoReciproco: 'videos/itsuki_cocinando.mp4',
                    mensaje: '¡Libro de cocina! Cocinaré algo delicioso 📖'
                },
                'comida_gourmet': { 
                    costo: 25, 
                    experiencia: 55, 
                    videoReciproco: 'videos/itsuki_comiendo.mp4',
                    mensaje: '¡Comida gourmet! La compartiremos 🍱'
                },
                'postre_especial': { 
                    costo: 15, 
                    experiencia: 35, 
                    videoReciproco: 'videos/itsuki_postre.mp4',
                    mensaje: '¡Un postre especial! Para los dos 🍰'
                }
            },
            // MOMENTOS ÍNTIMOS ÚNICOS
            momentosIntimos: [
                { id: "beso_itsuki", nombre: "Beso con sabor a postre 🍦", costoCondones: 1, nivelRequerido: 1, descripcion: "Un beso dulce y suave" },
                { id: "cena_romantica_itsuki", nombre: "Cena romántica gourmet 🍽️", costoCondones: 1, nivelRequerido: 3, descripcion: "Una cena especial para dos" },
                { id: "degustacion_intima", nombre: "Degustación íntima 👅", costoCondones: 2, nivelRequerido: 5, descripcion: "Probar sabores juntos" },
                { id: "noche_chocolate", nombre: "Noche de chocolate y pasión 🍫", costoCondones: 3, nivelRequerido: 7, descripcion: "Dulzura y pasión combinadas" }
            ]
        }
    },
    
    // SISTEMA DE DECORACIÓN DE HABITACIÓN
    habitacion: {
        fondoActual: 'default',
        itemsComprados: [],
        muebles: {
            cama: { tipo: 'cama', nombre: 'Cama Simple', precio: 0, comprado: true, activo: true },
            escritorio: { tipo: 'escritorio', nombre: 'Escritorio Básico', precio: 0, comprado: true, activo: true },
            silla: { tipo: 'silla', nombre: 'Silla Simple', precio: 0, comprado: true, activo: true },
            lampara: { tipo: 'lampara', nombre: 'Lámpara Básica', precio: 0, comprado: true, activo: true }
        },
        posters: [], // Posters de las quintillizas
        decoracionesEspeciales: [], // Items especiales
        dineroGastado: 0
    },
    
    // ECONOMÍA COMPARTIDA
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
    
    // REGALOS GENERALES (para todas)
    sistemaRegalos: {
        flores: { costo: 5, experiencia: 10 },
        chocolates: { costo: 10, experiencia: 25 },
        joyas: { costo: 20, experiencia: 50 }
    },
    
    // EXPERIENCIA POR MAZOS (igual para todas)
    sistemaExperienciaMazos: {
        '100%': { experiencia: 30, descripcion: "Mazo perfecto" },
        '90-99%': { experiencia: 20, descripcion: "Excelente trabajo" },
        '80-89%': { experiencia: 15, descripcion: "Muy buen trabajo" },
        '70-79%': { experiencia: 10, descripcion: "Buen trabajo" },
        '60-69%': { experiencia: 5, descripcion: "Podría mejorar" },
        '50-59%': { experiencia: 3, descripcion: "Sigue practicando" },
        '0-49%': { experiencia: 1, descripcion: "Necesitas más práctica" }
    },
    
    // INVENTARIO DE DECORACIONES DISPONIBLES
    decoracionesDisponibles: [
        { id: 'poster_ichika', nombre: 'Poster de Ichika', precio: 50, tipo: 'poster', quintilliza: 'ichika' },
        { id: 'poster_nino', nombre: 'Poster de Nino', precio: 50, tipo: 'poster', quintilliza: 'nino' },
        { id: 'poster_miku', nombre: 'Poster de Miku', precio: 50, tipo: 'poster', quintilliza: 'miku' },
        { id: 'poster_yotsuba', nombre: 'Poster de Yotsuba', precio: 50, tipo: 'poster', quintilliza: 'yotsuba' },
        { id: 'poster_itsuki', nombre: 'Poster de Itsuki', precio: 50, tipo: 'poster', quintilliza: 'itsuki' },
        { id: 'cama_lujo', nombre: 'Cama de Lujo', precio: 200, tipo: 'mueble', mejora: 'cama' },
        { id: 'escritorio_gaming', nombre: 'Escritorio Gaming', precio: 150, tipo: 'mueble', mejora: 'escritorio' },
        { id: 'silla_gamer', nombre: 'Silla Gamer', precio: 180, tipo: 'mueble', mejora: 'silla' },
        { id: 'lampara_neon', nombre: 'Lámpara Neon RGB', precio: 100, tipo: 'mueble', mejora: 'lampara' },
        { id: 'alfombra_premium', nombre: 'Alfombra Premium', precio: 120, tipo: 'decoracion' },
        { id: 'figura_coleccion', nombre: 'Figura de Colección', precio: 300, tipo: 'decoracion' },
        { id: 'tv_4k', nombre: 'TV 4K 55"', precio: 400, tipo: 'decoracion' },
        { id: 'sonido_ambiente', nombre: 'Sistema de Sonido', precio: 250, tipo: 'decoracion' }
    ],
    
    // INICIALIZAR SISTEMA
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        
        if (datosGuardados) {
            this.quintillizas = datosGuardados.quintillizas || this.quintillizas;
            this.noviaSeleccionada = datosGuardados.noviaSeleccionada || 'ichika';
            this.habitacion = datosGuardados.habitacion || this.habitacion;
            this.economia = datosGuardados.economia || this.economia;
        } else {
            // Configuración inicial
            this.economia.saldo = sistemaEconomia.saldoTotal;
            this.actualizarHumorDiario();
        }
        
        console.log("💕 Sistema Nakano inicializado. Novia seleccionada:", this.noviaSeleccionada);
        this.guardarDatos();
        this.actualizarInterfazNakano();
    },
    
    // CARGAR DATOS
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('sistemaNakano');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos Nakano:", e);
            return null;
        }
    },
    
    // GUARDAR DATOS
    guardarDatos: function() {
        try {
            localStorage.setItem('sistemaNakano', JSON.stringify({
                quintillizas: this.quintillizas,
                noviaSeleccionada: this.noviaSeleccionada,
                habitacion: this.habitacion,
                economia: this.economia
            }));
            return true;
        } catch (e) {
            console.error("Error guardando datos Nakano:", e);
            return false;
        }
    },
    
    // SELECCIONAR NOVIA
    seleccionarNovia: function(idNovia) {
        if (this.quintillizas[idNovia]) {
            this.noviaSeleccionada = idNovia;
            this.actualizarHumorDiario();
            this.guardarDatos();
            this.actualizarInterfazNakano();
            
            const novia = this.quintillizas[idNovia];
            mostrarMensajeNakano(`Ahora estás con ${novia.nombre} 💕`);
            
            console.log("💖 Novia seleccionada:", novia.nombre);
            return true;
        }
        return false;
    },
    
    // OBTENER NOVIA ACTUAL
    obtenerNoviaActual: function() {
        return this.quintillizas[this.noviaSeleccionada];
    },
    
    // ACTUALIZAR HUMOR DIARIO (para la novia actual)
    actualizarHumorDiario: function() {
        const novia = this.obtenerNoviaActual();
        const hoy = new Date().toISOString().split('T')[0];
        
        if (!novia.ultimaFechaHumor || novia.ultimaFechaHumor !== hoy) {
            const humorAleatorio = novia.humorPool[Math.floor(Math.random() * novia.humorPool.length)];
            novia.humorActual = humorAleatorio;
            novia.ultimaFechaHumor = hoy;
            
            console.log(`😊 ${novia.nombre} está: ${humorAleatorio.nombre}`);
            
            this.guardarDatos();
        }
    },
    
    // AGREGAR EXPERIENCIA (sólo a la novia actual)
    agregarExperiencia: function(cantidad, motivo) {
        const novia = this.obtenerNoviaActual();
        
        if (!novia.humorActual) {
            this.actualizarHumorDiario();
        }
        
        const cantidadConMultiplicador = Math.round(cantidad * novia.humorActual.multiplicadorExp);
        
        novia.experiencia += cantidadConMultiplicador;
        novia.experienciaTotal += cantidadConMultiplicador;
        
        console.log(`💕 ${novia.nombre}: +${cantidadConMultiplicador} XP (${motivo}) | Multiplicador: ${novia.humorActual.multiplicadorExp}x`);
        
        this.verificarSubidaNivel(novia);
        this.guardarDatos();
        this.actualizarInterfazNakano();
        
        return cantidadConMultiplicador;
    },
    
    // VERIFICAR SUBIDA DE NIVEL
    verificarSubidaNivel: function(novia) {
        const expNecesaria = this.calcularExpParaNivel(novia.nivel + 1);
        
        while (novia.experiencia >= expNecesaria && novia.experiencia > 0) {
            novia.nivel++;
            novia.experiencia -= expNecesaria;
            
            this.verificarMomentosDesbloqueados(novia);
            
            mostrarMensajeNakano(`🎉 ¡${novia.nombre} subió al nivel ${novia.nivel}! 💕`);
            
            console.log(`⬆️ ${novia.nombre} subió a nivel ${novia.nivel}. XP restante: ${novia.experiencia}`);
        }
    },
    
    // CALCULAR EXPERIENCIA NECESARIA
    calcularExpParaNivel: function(nivel) {
        return 100 * (nivel + 1);
    },
    
    // VERIFICAR MOMENTOS DESBLOQUEADOS
    verificarMomentosDesbloqueados: function(novia) {
        novia.momentosIntimos.forEach(momento => {
            if (novia.nivel >= momento.nivelRequerido && 
                !novia.momentosDesbloqueados.includes(momento.id)) {
                novia.momentosDesbloqueados.push(momento.id);
                mostrarMensajeNakano(`✨ ¡Nuevo momento desbloqueado con ${novia.nombre}: ${momento.nombre}! 💖`);
            }
        });
    },
    
    // REGISTRAR MAZO COMPLETADO (para la novia actual)
    registrarMazoCompletado: function(porcentaje) {
        let experiencia = 0;
        
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
    
    // REGALAR ITEM GENERAL
    regalarItem: function(tipo) {
        const regalo = this.sistemaRegalos[tipo];
        
        if (!regalo) {
            mostrarMensajeNakano("Tipo de regalo no válido");
            return false;
        }
        
          if (sistemaEconomia.saldoTotal >= regalo.costo) {
        sistemaEconomia.agregarDinero(-regalo.costo, `Regalo de ${tipo}`);
        this.economia.saldo = sistemaEconomia.saldoTotal;
            
            const expGanada = this.agregarExperiencia(regalo.experiencia, `Regalo de ${tipo}`);
            
            this.economia.inventario[tipo]++;
            
            mostrarMensajeNakano(`💝 Le regalaste ${tipo} a ${this.obtenerNoviaActual().nombre} (+${expGanada} XP)`);
            return true;
        } else {
            mostrarMensajeNakano("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // REGALAR ITEM ESPECIAL (con video recíproco)
    regalarItemEspecial: function(tipo) {
        const novia = this.obtenerNoviaActual();
        const regalo = novia.regalosEspeciales[tipo];
        
        if (!regalo) {
            mostrarMensajeNakano("Este regalo no es para esta hermana");
            return false;
        }
        
          if (sistemaEconomia.saldoTotal >= regalo.costo) {
        sistemaEconomia.agregarDinero(-regalo.costo, `Regalo especial de ${tipo}`);
        this.economia.saldo = sistemaEconomia.saldoTotal;
            
            const expGanada = this.agregarExperiencia(regalo.experiencia, `Regalo especial: ${tipo}`);
            
            // MOSTRAR VIDEO RECÍPROCO
            this.mostrarVideoRegaloReciproco(regalo.videoReciproco, regalo.mensaje);
            
            mostrarMensajeNakano(`💖 ${regalo.mensaje} (+${expGanada} XP)`);
            return true;
        } else {
            mostrarMensajeNakano("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // MOSTRAR VIDEO DE REGALO RECÍPROCO
    mostrarVideoRegaloReciproco: function(urlVideo, mensaje) {
        // Crear pantalla temporal para video
        const pantallaVideo = document.createElement('div');
        pantallaVideo.id = 'pantalla-video-regalo';
        pantallaVideo.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        `;
        
        pantallaVideo.innerHTML = `
            <h2 style="color: #ff6b9d; margin-bottom: 20px;">${mensaje}</h2>
            <video id="video-regalo-reciproco" controls autoplay style="width: 80%; max-width: 800px; border-radius: 15px;">
                <source src="${urlVideo}" type="video/mp4">
                Tu navegador no soporta el video.
            </video>
            <button onclick="this.parentElement.remove()" 
                    style="margin-top: 20px; padding: 10px 20px; background: #ff6b9d; color: white; border: none; border-radius: 10px; cursor: pointer;">
                Cerrar
            </button>
        `;
        
        document.body.appendChild(pantallaVideo);
        
        const videoElement = document.getElementById('video-regalo-reciproco');
        videoElement.muted = true;
        videoElement.play().catch(e => console.log("Autoplay bloqueado"));
    },
    
    // COMPRAR CONDONES
    comprarCondones: function() {
        const costo = 15;
  if (sistemaEconomia.saldoTotal >= costo) {
        sistemaEconomia.agregarDinero(-costo, "Compra de condones");
        this.economia.saldo = sistemaEconomia.saldoTotal;
            this.economia.inventario.condones++;
            
            this.agregarExperiencia(5, "Compra de condones");
            
            this.actualizarInterfazNakano();
            mostrarMensajeNakano("¡Condones comprados! 💕 +5 XP");
            return true;
        } else {
            mostrarMensajeNakano("No tienes suficiente dinero para comprar condones 💸");
            return false;
        }
    },
    
    // COMPRAR DECORACIÓN
    comprarDecoracion: function(idDecoracion) {
        const decoracion = this.decoracionesDisponibles.find(d => d.id === idDecoracion);
        
        if (!decoracion) {
            mostrarMensajeNakano("Decoración no encontrada");
            return false;
        }
        
       if (sistemaEconomia.saldoTotal >= decoracion.precio) {
        sistemaEconomia.agregarDinero(-decoracion.precio, `Compra Nakano: ${decoracion.nombre}`);
        this.economia.saldo = sistemaEconomia.saldoTotal;
            
            this.habitacion.dineroGastado += decoracion.precio;
            
            // Añadir a items comprados
            if (!this.habitacion.itemsComprados.includes(idDecoracion)) {
                this.habitacion.itemsComprados.push(idDecoracion);
            }
            
            // Si es un poster de la novia actual, dar experiencia
            if (decoracion.tipo === 'poster' && decoracion.quintilliza === this.noviaSeleccionada) {
                this.agregarExperiencia(20, `Poster de ${this.obtenerNoviaActual().nombre}`);
            }
            
            // Si es mueble, actualizar
            if (decoracion.tipo === 'mueble' && decoracion.mejora) {
                this.habitacion.muebles[decoracion.mejora].nombre = decoracion.nombre;
                this.habitacion.muebles[decoracion.mejora].precio = decoracion.precio;
                this.habitacion.muebles[decoracion.mejora].comprado = true;
            }
            
            this.guardarDatos();
            this.actualizarInterfazNakano();
            
            mostrarMensajeNakano(`🛒 ¡Comprado: ${decoracion.nombre}!`);
            return true;
        } else {
            mostrarMensajeNakano("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // USAR MOMENTO ÍNTIMO
    usarMomentoIntimo: function(momentoId) {
        const novia = this.obtenerNoviaActual();
        const momento = novia.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) {
            mostrarMensajeNakano("Momento no encontrado");
            return false;
        }
        
        if (novia.nivel < momento.nivelRequerido) {
            mostrarMensajeNakano(`Necesitas nivel ${momento.nivelRequerido} para este momento 💔`);
            return false;
        }
        
        if (!novia.humorActual.permiteIntimos) {
            mostrarMensajeNakano(`${novia.nombre} no está de humor para momentos íntimos 💔`);
            return false;
        }
        
        if (this.economia.inventario.condones < momento.costoCondones) {
            mostrarMensajeNakano(`Necesitas ${momento.costoCondones} condón(es) para este momento 💔`);
            return false;
        }
        
        this.economia.inventario.condones -= momento.costoCondones;
        
        const expPorMomento = 25 * momento.costoCondones;
        const expGanada = this.agregarExperiencia(expPorMomento, `Momento íntimo: ${momento.nombre}`);
        
        this.ejecutarMomentoIntimo(novia, momento);
        
        mostrarMensajeNakano(`💖 ${momento.nombre} con ${novia.nombre} (+${expGanada} XP)`);
        return true;
    },
    
    // EJECUTAR MOMENTO ÍNTIMO
    ejecutarMomentoIntimo: function(novia, momento) {
        const dialogoElement = document.getElementById('dialogo-nakano');
        
        // Verificar si hay video para este momento
        const videoKey = `${novia.id}_${momento.id}`;
        if (videosIntimosNakano && videosIntimosNakano[videoKey]) {
            // Mostrar video
            dialogoElement.innerHTML = `
                <div class="video-escena-adulta">
                    <h4>${momento.nombre}</h4>
                    <video controls autoplay class="video-intimo">
                        <source src="${videosIntimosNakano[videoKey]}" type="video/mp4">
                        <div class="fallback-text">
                            💕 Disfruta este momento especial con ${novia.nombre}
                        </div>
                    </video>
                    <div class="leyenda-escena">💖 ${momento.descripcion}</div>
                    <div class="controles-video">
                        <button class="boton-saltar-video" onclick="terminarMomentoIntimoNakano()">Finalizar</button>
                    </div>
                </div>
            `;
            
            const videoElement = dialogoElement.querySelector('.video-intimo');
            videoElement.muted = true;
            videoElement.play().catch(e => console.log("Auto-play bloqueado"));
            
        } else {
            // Fallback a texto descriptivo
            const mensajes = {
                ichika: [
                    `Te acercas a Ichika entre bambalinas... 🎬`,
                    `Ella te mira con una sonrisa coqueta... 😘`,
                    `"¿Quieres ensayar una escena especial?" te susurra... 🎭`,
                    `Sus labios se encuentran con los tuyos en un beso apasionado... 💋`,
                    `La pasión de la actriz se desata en este momento íntimo... ✨`
                ],
                nino: [
                    `Nino termina de cocinar y se acerca a ti... 👩‍🍳`,
                    `"La cena está lista... pero primero el postre" dice con una sonrisa... 🍰`,
                    `Su actitud tsundere se derrite por completo... ❄️➡️🔥`,
                    `Un beso dulce con sabor a vainilla... 🍨`,
                    `La chef muestra su lado más dulce y apasionado... 💖`
                ],
                miku: [
                    `Miku se quita los audífonos tímidamente... 🎧`,
                    `"Puedo escuchar tu corazón" susurra sonrojada... 💓`,
                    `Te acerca su rostro lentamente... 😳`,
                    `Un beso suave como una melodía... 🎵`,
                    `La tímida Miku se entrega por completo en este momento... 🌸`
                ],
                yotsuba: [
                    `Yotsuba llega llena de energía del deporte... ⚡`,
                    `"¡Ganamos! Ahora mi recompensa eres tú" dice sonriendo... 🏆`,
                    `Te abraza con fuerza, aún sudorosa... 💪`,
                    `Un beso lleno de vitalidad y pasión... 🔥`,
                    `La atleta demuestra su resistencia en el amor... ❤️‍🔥`
                ],
                itsuki: [
                    `Itsuki termina de comer y te mira curiosamente... 🍔`,
                    `"El postre fue delicioso... pero quiero probar algo más" dice inocente... 🍦`,
                    `Se acerca lentamente, con un brillo juguetón en los ojos... 👀`,
                    `Un beso dulce con sabor a chocolate... 🍫`,
                    `La glotona descubre nuevos sabores en el amor... 💝`
                ]
            };
            
            let mensajeCompleto = `<div class="escena-adulta">`;
            mensajes[novia.id].forEach((mensaje, index) => {
                mensajeCompleto += `<div class="linea-escena">${mensaje}</div>`;
            });
            mensajeCompleto += `</div>`;
            dialogoElement.innerHTML = mensajeCompleto;
        }
    },
    
    // ACTUALIZAR INTERFAZ COMPLETA
    actualizarInterfazNakano: function() {
        const novia = this.obtenerNoviaActual();
        
        // 1. ACTUALIZAR SELECTOR DE NOVIAS
        this.actualizarSelectorNovias();
        
        // 2. ACTUALIZAR PERFIL DE NOVIA ACTUAL
        document.getElementById('nombre-nakano').textContent = novia.nombre;
        document.getElementById('nivel-relacion').textContent = `Nivel ${novia.nivel}`;
        document.getElementById('experiencia-actual').textContent = `${novia.experiencia}`;
        document.getElementById('experiencia-total').textContent = `${novia.experienciaTotal}`;
        document.getElementById('humor-nakano').textContent = novia.humorActual ? novia.humorActual.nombre : "Normal 😐";
         document.getElementById('imagen-nakano').src = obtenerImagenNakano(novia.id);
    document.getElementById('descripcion-nakano').textContent = novia.descripcion;
        
        // 3. ACTUALIZAR BARRA DE EXPERIENCIA
        const expNecesaria = this.calcularExpParaNivel(novia.nivel + 1);
        document.getElementById('experiencia-siguiente-nivel').textContent = `${expNecesaria}`;
        const porcentajeExp = (novia.experiencia / expNecesaria) * 100;
        document.getElementById('barra-experiencia-fill').style.width = `${porcentajeExp}%`;
        
        // 4. ACTUALIZAR MULTIPLICADOR
        document.getElementById('multiplicador-exp').textContent = `${novia.humorActual ? novia.humorActual.multiplicadorExp : 1.0}x`;
        
        // 5. ACTUALIZAR DESCRIPCIÓN DEL HUMOR
        this.actualizarDescripcionHumor(novia);
        
        // 6. ACTUALIZAR ECONOMÍA
        this.economia.saldo = sistemaEconomia.saldoTotal;
        document.getElementById('saldo-nakano').textContent = `${this.economia.saldo} ${this.economia.moneda}`;
        
        // 7. ACTUALIZAR INVENTARIO
        document.getElementById('condones-inventario').textContent = this.economia.inventario.condones;
        document.getElementById('flores-inventario').textContent = this.economia.inventario.flores;
        document.getElementById('chocolates-inventario').textContent = this.economia.inventario.chocolates;
        document.getElementById('joyas-inventario').textContent = this.economia.inventario.joyas;
        
        // 8. ACTUALIZAR DECORACIÓN
        this.actualizarInterfazDecoracion();
        
        // 9. ACTUALIZAR BOTONES DE MOMENTOS ÍNTIMOS
        this.actualizarBotonesMomentos(novia);
        
        // 10. ACTUALIZAR BOTONES DE REGALOS ESPECIALES
        this.actualizarBotonesRegalosEspeciales(novia);
    },
    
    // ACTUALIZAR SELECTOR DE NOVIAS
    actualizarSelectorNovias: function() {
        const contenedor = document.getElementById('selector-nakano');
        if (!contenedor) return;
        
        let html = '<div class="nakano-grid">';
        
        Object.values(this.quintillizas).forEach(quintilliza => {
            const seleccionada = quintilliza.id === this.noviaSeleccionada;
            html += `
                <div class="nakano-card ${seleccionada ? 'seleccionada' : ''}" onclick="sistemaNakano.seleccionarNovia('${quintilliza.id}')">
                    <img src="${obtenerImagenNakano(quintilliza.id)}" alt="${quintilliza.nombre}" class="nakano-imagen">
                    <div class="nakano-info">
                        <div class="nakano-nombre">${quintilliza.nombre}</div>
                        <div class="nakano-nivel">Nivel ${quintilliza.nivel}</div>
                        <div class="nakano-xp">${quintilliza.experiencia} XP</div>
                    </div>
                    ${seleccionada ? '<div class="seleccion-indicator">❤️</div>' : ''}
                </div>
            `;
        });
        
        html += '</div>';
        contenedor.innerHTML = html;
    },
    
    // ACTUALIZAR DESCRIPCIÓN DEL HUMOR
    actualizarDescripcionHumor: function(novia) {
        const humor = novia.humorActual;
        let descripcion = "";
        
        switch(humor.id) {
            case "coqueta":
                descripcion = "😘 Ichika está coqueta. 1.8x experiencia y permite momentos íntimos.";
                break;
            case "tsundere":
                descripcion = "😠➡️😊 Nino en modo tsundere. 1.6x experiencia y permite momentos íntimos.";
                break;
            case "timida":
                descripcion = "😳 Miku está tímida. 1.4x experiencia pero NO permite momentos íntimos.";
                break;
            case "energetica":
                descripcion = "⚡ Yotsuba llena de energía. 1.9x experiencia y permite momentos íntimos.";
                break;
            case "estudiosa":
                descripcion = "📚 Itsuki está estudiando. 1.6x experiencia pero NO permite momentos íntimos.";
                break;
            default:
                descripcion = humor.nombre ? `${humor.nombre}. ${humor.multiplicadorExp}x experiencia.` : "Humor normal del día.";
        }
        
        const elemento = document.getElementById('descripcion-humor');
        if (elemento) {
            elemento.textContent = descripcion;
            elemento.title = `Multiplicador: ${humor.multiplicadorExp}x | Intimos: ${humor.permiteIntimos ? 'Sí' : 'No'}`;
        }
    },
    
    // ACTUALIZAR INTERFAZ DE DECORACIÓN
    actualizarInterfazDecoracion: function() {
        const contenedor = document.getElementById('decoracion-contenedor');
        if (!contenedor) return;
        
        let html = `
            <div class="estado-habitacion">
                <h4>🛏️ Tu Habitación</h4>
                <div class="dinero-gastado">Gastado: ${this.habitacion.dineroGastado} S/.</div>
                <div class="items-totales">Items: ${this.habitacion.itemsComprados.length}</div>
            </div>
            
            <div class="muebles-actuales">
                <h5>Muebles:</h5>
                ${Object.values(this.habitacion.muebles).map(mueble => 
                    `<div class="mueble-item">${mueble.nombre}</div>`
                ).join('')}
            </div>
            
            <div class="decoraciones-disponibles">
                <h5>🛒 Tienda de Decoración:</h5>
                <div class="decoraciones-grid">
        `;
        
        this.decoracionesDisponibles.forEach(decoracion => {
            const comprado = this.habitacion.itemsComprados.includes(decoracion.id);
            const puedeComprar = this.economia.saldo >= decoracion.precio;
            
            html += `
                <div class="decoracion-item ${comprado ? 'comprado' : ''} ${!comprado && !puedeComprar ? 'no-dinero' : ''}">
                    <div class="decoracion-nombre">${decoracion.nombre}</div>
                    <div class="decoracion-precio">${decoracion.precio} S/.</div>
                    <div class="decoracion-tipo">${decoracion.tipo === 'poster' ? '📌' : 
                                                   decoracion.tipo === 'mueble' ? '🛋️' : '✨'}</div>
                    ${!comprado ? 
                        `<button class="boton-comprar" onclick="sistemaNakano.comprarDecoracion('${decoracion.id}')" 
                                ${!puedeComprar ? 'disabled' : ''}>
                            ${puedeComprar ? 'Comprar' : 'Sin dinero'}
                        </button>` :
                        '<div class="comprado-label">✅ Comprado</div>'
                    }
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        contenedor.innerHTML = html;
    },
    
    // ACTUALIZAR BOTONES DE MOMENTOS ÍNTIMOS
    actualizarBotonesMomentos: function(novia) {
        novia.momentosIntimos.forEach(momento => {
            const boton = document.getElementById(`boton-${momento.id}`);
            if (boton) {
                const desbloqueado = novia.momentosDesbloqueados.includes(momento.id);
                const nivelSuficiente = novia.nivel >= momento.nivelRequerido;
                
                if (desbloqueado) {
                    boton.disabled = false;
                    boton.title = momento.descripcion;
                } else if (nivelSuficiente) {
                    if (!novia.momentosDesbloqueados.includes(momento.id)) {
                        novia.momentosDesbloqueados.push(momento.id);
                    }
                    boton.disabled = false;
                    boton.title = momento.descripcion;
                } else {
                    boton.disabled = true;
                    boton.title = `Nivel ${momento.nivelRequerido} requerido`;
                }
                
                if (!novia.humorActual.permiteIntimos) {
                    boton.disabled = true;
                    boton.title = `${novia.nombre} no está de humor para momentos íntimos`;
                }
                
                if (this.economia.inventario.condones < momento.costoCondones) {
                    boton.disabled = true;
                    boton.title = `Necesitas ${momento.costoCondones} condón(es)`;
                }
            }
        });
    },
    
    // ACTUALIZAR BOTONES DE REGALOS ESPECIALES
    actualizarBotonesRegalosEspeciales: function(novia) {
        // Actualizar botones generales de regalos
        ['flores', 'chocolates', 'joyas'].forEach(tipo => {
            const boton = document.getElementById(`boton-regalo-${tipo}`);
            if (boton) {
                const puedeComprar = this.economia.saldo >= this.sistemaRegalos[tipo].costo;
                boton.disabled = !puedeComprar;
                if (!puedeComprar) {
                    boton.title = `Necesitas ${this.sistemaRegalos[tipo].costo} S/.`;
                }
            }
        });
        
        // Actualizar botones especiales (si existen en el HTML)
        Object.keys(novia.regalosEspeciales).forEach(tipo => {
            const boton = document.getElementById(`boton-especial-${tipo}`);
            if (boton) {
                const regalo = novia.regalosEspeciales[tipo];
                const puedeComprar = this.economia.saldo >= regalo.costo;
                boton.disabled = !puedeComprar;
                boton.innerHTML = `${this.obtenerIconoRegalo(tipo)} ${this.formatearNombreRegalo(tipo)} (S/.${regalo.costo})`;
                if (!puedeComprar) {
                    boton.title = `Necesitas ${regalo.costo} S/.`;
                } else {
                    boton.title = regalo.mensaje;
                }
            }
        });
    },
    
    // OBTENER ICONO PARA REGALO
    obtenerIconoRegalo: function(tipo) {
        const iconos = {
            'microfono': '🎤',
            'maquillaje': '💄',
            'guion': '📖',
            'utensilios_cocina': '🔪',
            'delantal': '👩‍🍳',
            'libro_recetas': '📚',
            'audifonos': '🎧',
            'libro_historia': '📜',
            'daimyou': '🏯',
            'balon': '⚽',
            'zapatos_deportivos': '👟',
            'medalla': '🥇',
            'libro_cocina': '🍳',
            'comida_gourmet': '🍱',
            'postre_especial': '🍰'
        };
        return iconos[tipo] || '🎁';
    },
    
    // FORMATEAR NOMBRE DE REGALO
    formatearNombreRegalo: function(tipo) {
        const nombres = {
            'microfono': 'Micrófono',
            'maquillaje': 'Kit de Maquillaje',
            'guion': 'Guion Especial',
            'utensilios_cocina': 'Utensilios de Cocina',
            'delantal': 'Delantal Personalizado',
            'libro_recetas': 'Libro de Recetas',
            'audifonos': 'Audífonos Premium',
            'libro_historia': 'Libro de Historia',
            'daimyou': 'Figura Daimyō',
            'balon': 'Balón Deportivo',
            'zapatos_deportivos': 'Zapatos Deportivos',
            'medalla': 'Medalla de Oro',
            'libro_cocina': 'Libro de Cocina',
            'comida_gourmet': 'Cena Gourmet',
            'postre_especial': 'Postre Especial'
        };
        return nombres[tipo] || tipo;
    }
};

// ============================================================================
// FUNCIONES GLOBALES PARA EL SISTEMA NAKANO
// ============================================================================

function iniciarSistemaNakano() {
    cambiarPantalla('pantalla-rpg-nakano');
    sistemaNakano.actualizarInterfazNakano();
}

function terminarMomentoIntimoNakano() {
    const dialogoElement = document.getElementById('dialogo-nakano');
    const novia = sistemaNakano.obtenerNoviaActual();
    
    dialogoElement.innerHTML = `
        <div class="dialogo-burbuja">
            <div class="texto-dialogo">💖 Eso fue increíble... Te amo tanto, ${novia.nombre.split(' ')[0]}...</div>
            <div class="tiempo-dialogo">Ahora</div>
        </div>
    `;
}

function mostrarMensajeNakano(mensaje) {
    const mensajeElement = document.getElementById('mensaje-nakano');
    if (mensajeElement) {
        mensajeElement.textContent = mensaje;
        mensajeElement.style.display = 'block';
        
        setTimeout(() => {
            mensajeElement.style.display = 'none';
        }, 3000);
    }
}

// Función global para regalar item (mantener compatibilidad)
function regalarItem(tipo) {
    sistemaNakano.regalarItem(tipo);
}

// Función global para comprar condones (mantener compatibilidad)
function comprarCondones() {
    sistemaNakano.comprarCondones();
}

// Función global para usar momento íntimo (actualizada)
function usarMomentoIntimo(momentoId) {
    sistemaNakano.usarMomentoIntimo(momentoId);
}

// Función para obtener imagen de quintilliza
function obtenerImagenNakano(idQuintilliza) {
    const imagenes = {
        'ichika': 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        'nino': 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        'miku': 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        'yotsuba': 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
        'itsuki': 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small'
    };
    return imagenes[idQuintilliza] || 'imagenes/nakano/default.jpg';
}

// Función para mostrar video de regalo especial
function regalarItemEspecial(tipo) {
    sistemaNakano.regalarItemEspecial(tipo);
}
