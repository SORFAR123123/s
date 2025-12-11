// ============================================================================
// SISTEMA RPG "MI HIJA KANA" - COMPLETO CON HUMORES QUE PERMITEN/NO ÍNTIMOS
// ============================================================================

const sistemaKana = {
    // Sistema de relación padre-hija
    relacion: {
        tipo: 'padre_hija',
        hijaSeleccionada: 'kana',
        
        // Estados de relación
        hijas: {
            'kana': {
                id: 'kana',
                nombre: 'Kana',
                apodo: 'Mi princesa',
                edad: 18, // Versión adulta para momentos íntimos
                descripcion: 'Tu hija adoptiva que ha crecido y ahora tiene sentimientos especiales por ti',
                nivelRelacion: 0,
                experiencia: 0,
                experienciaTotal: 0,
                humorActual: null,
                ultimaFechaHumor: null,
                momentosDesbloqueados: [],
                necesidades: {
                    hambre: 100,
                    felicidad: 100,
                    energia: 100,
                    higiene: 100,
                    afecto: 100
                },
                ultimaActualizacionNecesidades: null,
                
                // HUMORES ÚNICOS DE KANA - Algunos permiten íntimos, otros no
                humorPool: [
                    // HUMORES QUE PERMITEN MOMENTOS ÍNTIMOS
                    { id: "feliz", nombre: "Feliz y cariñosa 😊", multiplicadorExp: 2.0, permiteIntimos: true, descripcion: "Kana está muy feliz y receptiva a muestras de cariño" },
                    { id: "cariñosa", nombre: "Muy cariñosa y afectuosa 🥰", multiplicadorExp: 2.2, permiteIntimos: true, descripcion: "Kana busca contacto físico y muestra mucho afecto" },
                    { id: "romantica", nombre: "Romántica y soñadora 💖", multiplicadorExp: 2.5, permiteIntimos: true, descripcion: "Kana está en un estado romántico y sentimental" },
                    { id: "juguetona", nombre: "Juguetona y coqueta 😄", multiplicadorExp: 1.8, permiteIntimos: true, descripcion: "Kana está juguetona y con ganas de bromear" },
                    { id: "timida", nombre: "Tímida pero receptiva 😳", multiplicadorExp: 1.2, permiteIntimos: true, descripcion: "Kana está tímida pero abierta a momentos especiales" },
                    { id: "pasional", nombre: "Pasional y ardiente 🔥", multiplicadorExp: 2.8, permiteIntimos: true, descripcion: "Kana muestra una pasión intensa y deseo" },
                    
                    // HUMORES QUE NO PERMITEN MOMENTOS ÍNTIMOS
                    { id: "triste", nombre: "Triste o melancólica 😔", multiplicadorExp: 0.5, permiteIntimos: false, descripcion: "Kana está triste y necesita consuelo" },
                    { id: "enferma", nombre: "Enferma o cansada 🤒", multiplicadorExp: 0.3, permiteIntimos: false, descripcion: "Kana no se siente bien físicamente" },
                    { id: "celosa", nombre: "Celosa y de mal humor 😤", multiplicadorExp: 0.8, permiteIntimos: false, descripcion: "Kana está celosa o molesta contigo" },
                    { id: "estresada", nombre: "Estresada o preocupada 😟", multiplicadorExp: 0.7, permiteIntimos: false, descripcion: "Kana tiene muchas preocupaciones" },
                    { id: "enojada", nombre: "Enojada o irritada 😠", multiplicadorExp: 0.4, permiteIntimos: false, descripcion: "Kana está molesta contigo" },
                    { id: "indiferente", nombre: "Indiferente o distante 😐", multiplicadorExp: 1.0, permiteIntimos: false, descripcion: "Kana está distante emocionalmente" }
                ],
                
                // REGALOS ESPECIALES PARA KANA (con videos recíprocos)
                regalosEspeciales: {
                    'osito': { 
                        costo: 15, 
                        experiencia: 30, 
                        videoReciproco: 'videos/kana_osito.mp4',
                        mensaje: '¡Un osito de peluche! ¡Gracias papi! 🧸'
                    },
                    'vestido': { 
                        costo: 25, 
                        experiencia: 50, 
                        videoReciproco: 'videos/kana_vestido.mp4',
                        mensaje: '¡Qué vestido tan bonito! ¿Te gusto cómo me queda? 👗'
                    },
                    'joyas': { 
                        costo: 50, 
                        experiencia: 100, 
                        videoReciproco: 'videos/kana_joyas.mp4',
                        mensaje: '¡Son hermosas! Me siento como una princesa 💎'
                    },
                    'chocolates': { 
                        costo: 20, 
                        experiencia: 40, 
                        videoReciproco: 'videos/kana_chocolate.mp4',
                        mensaje: '¡Chocolates! ¿Los compartimos? 🍫'
                    },
                    'lenceria': { 
                        costo: 60, 
                        experiencia: 120, 
                        videoReciproco: 'videos/kana_lenceria.mp4',
                        mensaje: '¡Es tan bonita! ¿Quieres ver cómo me queda? 💕'
                    },
                    'perfume': { 
                        costo: 40, 
                        experiencia: 80, 
                        videoReciproco: 'videos/kana_perfume.mp4',
                        mensaje: '¡Huele delicioso! ¿Te gusta cómo huelo? 🌹'
                    }
                },
                
                // ACTIVIDADES PADRE-HIJA CON VIDEOS
                actividades: [
                    { 
                        id: "jugar_parque", 
                        nombre: "Jugar en el parque 🎠", 
                        costoDinero: 0, 
                        experiencia: 25, 
                        tiempo: 30, 
                        descripcion: "Pasamos tiempo juntos en el parque",
                        video: 'videos/actividad_parque.mp4',
                        permiteIntimos: false
                    },
                    { 
                        id: "leer_cuento", 
                        nombre: "Leer un cuento 📚", 
                        costoDinero: 0, 
                        experiencia: 20, 
                        tiempo: 15, 
                        descripcion: "Leemos un cuento antes de dormir",
                        video: 'videos/actividad_cuento.mp4',
                        permiteIntimos: false
                    },
                    { 
                        id: "ver_pelicula", 
                        nombre: "Ver una película 🍿", 
                        costoDinero: 10, 
                        experiencia: 30, 
                        tiempo: 90, 
                        descripcion: "Vemos una película familiar",
                        video: 'videos/actividad_pelicula.mp4',
                        permiteIntimos: true
                    },
                    { 
                        id: "cocinar_juntos", 
                        nombre: "Cocinar juntos 🍪", 
                        costoDinero: 5, 
                        experiencia: 35, 
                        tiempo: 45, 
                        descripcion: "Preparamos galletas o pastelitos",
                        video: 'videos/actividad_cocinar.mp4',
                        permiteIntimos: true
                    },
                    { 
                        id: "dibujar", 
                        nombre: "Dibujar y pintar 🎨", 
                        costoDinero: 0, 
                        experiencia: 15, 
                        tiempo: 20, 
                        descripcion: "Hacemos arte juntos",
                        video: 'videos/actividad_dibujar.mp4',
                        permiteIntimos: false
                    },
                    { 
                        id: "paseo_naturaleza", 
                        nombre: "Paseo por la naturaleza 🌳", 
                        costoDinero: 0, 
                        experiencia: 40, 
                        tiempo: 60, 
                        descripcion: "Caminamos por el bosque o parque",
                        video: 'videos/actividad_paseo.mp4',
                        permiteIntimos: true
                    },
                    { 
                        id: "baile_juntos", 
                        nombre: "Bailar juntos 💃", 
                        costoDinero: 0, 
                        experiencia: 45, 
                        tiempo: 25, 
                        descripcion: "Bailamos nuestra canción favorita",
                        video: 'videos/actividad_baile.mp4',
                        permiteIntimos: true
                    },
                    { 
                        id: "masaje_espalda", 
                        nombre: "Darle un masaje 💆‍♀️", 
                        costoDinero: 0, 
                        experiencia: 50, 
                        tiempo: 30, 
                        descripcion: "Le das un masaje relajante",
                        video: 'videos/actividad_masaje.mp4',
                        permiteIntimos: true
                    }
                ],
                
                // MOMENTOS ÍNTIMOS ESPECIALES (requieren condones y nivel)
                momentosIntimos: [
                    { 
                        id: "primer_beso", 
                        nombre: "Nuestro primer beso 💋", 
                        costoCondones: 0, 
                        nivelRequerido: 3, 
                        descripcion: "Compartes un beso especial con Kana",
                        video: 'videos/intimo_beso.mp4'
                    },
                    { 
                        id: "abrazo_calido", 
                        nombre: "Abrazo cálido y cercano 🤗", 
                        costoCondones: 0, 
                        nivelRequerido: 5, 
                        descripcion: "Un abrazo que se convierte en algo más",
                        video: 'videos/intimo_abrazo.mp4'
                    },
                    { 
                        id: "noche_romantica", 
                        nombre: "Noche romántica a la luz de velas 🕯️", 
                        costoCondones: 1, 
                        nivelRequerido: 8, 
                        descripcion: "Una cena especial que termina en intimidad",
                        video: 'videos/intimo_noche_romantica.mp4'
                    },
                    { 
                        id: "amanecer_juntos", 
                        nombre: "Amanecer en tus brazos 🌅", 
                        costoCondones: 1, 
                        nivelRequerido: 10, 
                        descripcion: "Pasas toda la noche con ella",
                        video: 'videos/intimo_amanecer.mp4'
                    },
                    { 
                        id: "lluvia_pasion", 
                        nombre: "Lluvia de pasión 🌧️", 
                        costoCondones: 2, 
                        nivelRequerido: 12, 
                        descripcion: "Una tarde de lluvia se vuelve ardiente",
                        video: 'videos/intimo_lluvia.mp4'
                    },
                    { 
                        id: "viaje_romantico", 
                        nombre: "Viaje romántico de fin de semana ✈️", 
                        costoCondones: 3, 
                        nivelRequerido: 15, 
                        descripcion: "Un viaje especial donde la pasión florece",
                        video: 'videos/intimo_viaje.mp4'
                    },
                    { 
                        id: "aniversario_especial", 
                        nombre: "Aniversario inolvidable 🎉", 
                        costoCondones: 2, 
                        nivelRequerido: 18, 
                        descripcion: "Celebras vuestra relación de manera íntima",
                        video: 'videos/intimo_aniversario.mp4'
                    },
                    { 
                        id: "luna_miel", 
                        nombre: "Noche de luna de miel 🌙", 
                        costoCondones: 4, 
                        nivelRequerido: 20, 
                        descripcion: "La noche más especial de vuestra relación",
                        video: 'videos/intimo_luna_miel.mp4'
                    }
                ]
            }
        }
    },
    
    // SISTEMA DE DECORACIÓN DE CASA
    casa: {
        fondoActual: 'salon_default',
        itemsComprados: [],
        habitaciones: {
            salon: { nombre: 'Salón Principal', decoracion: 'basica', mejoras: [] },
            habitacion_kana: { nombre: 'Habitación de Kana', decoracion: 'infantil', mejoras: [] },
            habitacion_padre: { nombre: 'Tu habitación', decoracion: 'simple', mejoras: [] },
            bano: { nombre: 'Baño', decoracion: 'basica', mejoras: [] },
            cocina: { nombre: 'Cocina', decoracion: 'basica', mejoras: [] }
        },
        dineroGastado: 0
    },
    
    // ECONOMÍA COMPARTIDA
    economia: {
        moneda: "S/.",
        nombre: "Soles",
        saldo: 100, // Saldo inicial
        inventario: {
            condones: 0,
            flores: 0,
            chocolates: 0,
            joyas: 0,
            juguetes: 0,
            libros: 0
        }
    },
    
    // REGALOS GENERALES (para Kana)
    sistemaRegalos: {
        flores: { costo: 10, experiencia: 20 },
        chocolates: { costo: 15, experiencia: 30 },
        joyas: { costo: 30, experiencia: 60 },
        juguetes: { costo: 20, experiencia: 25 },
        libros: { costo: 25, experiencia: 35 }
    },
    
    // EXPERIENCIA POR MAZOS (ganancia por estudiar)
    sistemaExperienciaMazos: {
        '100%': { experiencia: 50, descripcion: "¡Perfecto! Kana está muy orgullosa" },
        '90-99%': { experiencia: 40, descripcion: "Excelente trabajo, mi amor" },
        '80-89%': { experiencia: 30, descripcion: "Muy buen trabajo, papi" },
        '70-79%': { experiencia: 20, descripcion: "Buen trabajo, sigue así" },
        '60-69%': { experiencia: 15, descripcion: "No está mal, pero puedes mejorar" },
        '50-59%': { experiencia: 10, descripcion: "Necesitas practicar más" },
        '0-49%': { experiencia: 5, descripcion: "Kana te anima a seguir intentándolo" }
    },
    
    // DECORACIONES DISPONIBLES PARA LA CASA
    decoracionesDisponibles: [
        { id: 'poster_kana', nombre: 'Poster de Kana', precio: 30, tipo: 'poster', habitacion: 'habitacion_padre' },
        { id: 'cama_matrimonial', nombre: 'Cama Matrimonial', precio: 300, tipo: 'mueble', habitacion: 'habitacion_padre', mejora: 'cama' },
        { id: 'sillon_romantico', nombre: 'Sillón Romántico', precio: 200, tipo: 'mueble', habitacion: 'salon', mejora: 'sillon' },
        { id: 'alfombra_piel', nombre: 'Alfombra de Piel', precio: 150, tipo: 'decoracion', habitacion: 'habitacion_padre' },
        { id: 'jacuzzi', nombre: 'Jacuzzi para dos', precio: 500, tipo: 'mejora', habitacion: 'bano' },
        { id: 'iluminacion_romantica', nombre: 'Iluminación Romántica', precio: 100, tipo: 'decoracion', habitacion: 'habitacion_padre' },
        { id: 'mesa_romantica', nombre: 'Mesa para Cenas Románticas', precio: 180, tipo: 'mueble', habitacion: 'salon' },
        { id: 'estanteria_libros', nombre: 'Estantería de Libros', precio: 120, tipo: 'mueble', habitacion: 'salon' },
        { id: 'tv_pantalla_plana', nombre: 'TV Pantalla Plana 50"', precio: 400, tipo: 'electrodomestico', habitacion: 'salon' },
        { id: 'sistema_audio', nombre: 'Sistema de Audio Romántico', precio: 250, tipo: 'electrodomestico', habitacion: 'salon' }
    ],
    
    // INICIALIZAR SISTEMA
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        
        if (datosGuardados) {
            this.relacion.hijas = datosGuardados.hijas || this.relacion.hijas;
            this.relacion.hijaSeleccionada = datosGuardados.hijaSeleccionada || 'kana';
            this.casa = datosGuardados.casa || this.casa;
            this.economia = datosGuardados.economia || this.economia;
        } else {
            // Configuración inicial
            this.actualizarHumorDiario();
            this.actualizarNecesidades();
        }
        
        console.log("👨‍👧 Sistema Kana inicializado. Nivel de relación:", this.obtenerKana().nivelRelacion);
        this.guardarDatos();
        this.actualizarInterfazKana();
    },
    
    // CARGAR DATOS
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('sistemaKana');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos Kana:", e);
            return null;
        }
    },
    
    // GUARDAR DATOS
    guardarDatos: function() {
        try {
            localStorage.setItem('sistemaKana', JSON.stringify({
                relacion: this.relacion,
                casa: this.casa,
                economia: this.economia
            }));
            return true;
        } catch (e) {
            console.error("Error guardando datos Kana:", e);
            return false;
        }
    },
    
    // OBTENER KANA ACTUAL
    obtenerKana: function() {
        return this.relacion.hijas[this.relacion.hijaSeleccionada];
    },
    
    // ACTUALIZAR HUMOR DIARIO
    actualizarHumorDiario: function() {
        const kana = this.obtenerKana();
        const hoy = new Date().toISOString().split('T')[0];
        
        if (!kana.ultimaFechaHumor || kana.ultimaFechaHumor !== hoy) {
            const humorAleatorio = kana.humorPool[Math.floor(Math.random() * kana.humorPool.length)];
            kana.humorActual = humorAleatorio;
            kana.ultimaFechaHumor = hoy;
            
            console.log(`😊 ${kana.nombre} está: ${humorAleatorio.nombre} (Intimos: ${humorAleatorio.permiteIntimos ? 'Sí' : 'No'})`);
            
            this.guardarDatos();
        }
    },
    
    // ACTUALIZAR NECESIDADES
    actualizarNecesidades: function() {
        const kana = this.obtenerKana();
        const ahora = Date.now();
        
        if (!kana.ultimaActualizacionNecesidades) {
            kana.ultimaActualizacionNecesidades = ahora;
            return;
        }
        
        const horasPasadas = (ahora - kana.ultimaActualizacionNecesidades) / (1000 * 60 * 60);
        
        if (horasPasadas >= 1) {
            // Reducir necesidades gradualmente
            kana.necesidades.hambre = Math.max(0, kana.necesidades.hambre - (10 * horasPasadas));
            kana.necesidades.energia = Math.max(0, kana.necesidades.energia - (8 * horasPasadas));
            kana.necesidades.higiene = Math.max(0, kana.necesidades.higiene - (5 * horasPasadas));
            kana.necesidades.afecto = Math.max(0, kana.necesidades.afecto - (3 * horasPasadas));
            
            // La felicidad depende de otras necesidades
            const promedio = (kana.necesidades.hambre + kana.necesidades.energia + 
                            kana.necesidades.higiene + kana.necesidades.afecto) / 4;
            kana.necesidades.felicidad = Math.min(100, promedio);
            
            kana.ultimaActualizacionNecesidades = ahora;
            this.guardarDatos();
        }
    },
    
    // SATISFACER NECESIDAD
    satisfacerNecesidad: function(tipo, cantidad) {
        const kana = this.obtenerKana();
        
        if (kana.necesidades[tipo] !== undefined) {
            kana.necesidades[tipo] = Math.min(100, kana.necesidades[tipo] + cantidad);
            
            // Recalcular felicidad
            const promedio = (kana.necesidades.hambre + kana.necesidades.energia + 
                            kana.necesidades.higiene + kana.necesidades.afecto) / 4;
            kana.necesidades.felicidad = Math.min(100, promedio);
            
            this.guardarDatos();
            this.actualizarInterfazKana();
            
            return true;
        }
        return false;
    },
    
    // AGREGAR EXPERIENCIA
    agregarExperiencia: function(cantidad, motivo) {
        const kana = this.obtenerKana();
        
        if (!kana.humorActual) {
            this.actualizarHumorDiario();
        }
        
        const cantidadConMultiplicador = Math.round(cantidad * kana.humorActual.multiplicadorExp);
        
        kana.experiencia += cantidadConMultiplicador;
        kana.experienciaTotal += cantidadConMultiplicador;
        
        console.log(`💕 ${kana.nombre}: +${cantidadConMultiplicador} XP (${motivo}) | Multiplicador: ${kana.humorActual.multiplicadorExp}x`);
        
        this.verificarSubidaNivel(kana);
        this.guardarDatos();
        this.actualizarInterfazKana();
        
        return cantidadConMultiplicador;
    },
    
    // VERIFICAR SUBIDA DE NIVEL
    verificarSubidaNivel: function(kana) {
        const expNecesaria = this.calcularExpParaNivel(kana.nivelRelacion + 1);
        
        while (kana.experiencia >= expNecesaria && kana.experiencia > 0) {
            kana.nivelRelacion++;
            kana.experiencia -= expNecesaria;
            
            this.verificarMomentosDesbloqueados(kana);
            
            this.mostrarMensajeKana(`🎉 ¡${kana.nombre} subió al nivel ${kana.nivelRelacion}! 💕`);
            
            console.log(`⬆️ ${kana.nombre} subió a nivel ${kana.nivelRelacion}. XP restante: ${kana.experiencia}`);
        }
    },
    
    // CALCULAR EXPERIENCIA NECESARIA PARA NIVEL
    calcularExpParaNivel: function(nivel) {
        // Fórmula: 100 * nivel * 1.5
        return Math.round(100 * nivel * 1.5);
    },
    
    // VERIFICAR MOMENTOS DESBLOQUEADOS
    verificarMomentosDesbloqueados: function(kana) {
        kana.momentosIntimos.forEach(momento => {
            if (kana.nivelRelacion >= momento.nivelRequerido && 
                !kana.momentosDesbloqueados.includes(momento.id)) {
                kana.momentosDesbloqueados.push(momento.id);
                this.mostrarMensajeKana(`✨ ¡Nuevo momento desbloqueado con ${kana.nombre}: ${momento.nombre}! 💖`);
            }
        });
    },
    
    // REGISTRAR MAZO COMPLETADO
    registrarMazoCompletado: function(porcentaje) {
        let experiencia = 0;
        let mensaje = "";
        
        if (porcentaje === 100) {
            experiencia = this.sistemaExperienciaMazos['100%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['100%'].descripcion;
        } else if (porcentaje >= 90) {
            experiencia = this.sistemaExperienciaMazos['90-99%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['90-99%'].descripcion;
        } else if (porcentaje >= 80) {
            experiencia = this.sistemaExperienciaMazos['80-89%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['80-89%'].descripcion;
        } else if (porcentaje >= 70) {
            experiencia = this.sistemaExperienciaMazos['70-79%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['70-79%'].descripcion;
        } else if (porcentaje >= 60) {
            experiencia = this.sistemaExperienciaMazos['60-69%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['60-69%'].descripcion;
        } else if (porcentaje >= 50) {
            experiencia = this.sistemaExperienciaMazos['50-59%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['50-59%'].descripcion;
        } else {
            experiencia = this.sistemaExperienciaMazos['0-49%'].experiencia;
            mensaje = this.sistemaExperienciaMazos['0-49%'].descripcion;
        }
        
        const expGanada = this.agregarExperiencia(experiencia, `Mazo completado al ${porcentaje}%`);
        this.mostrarMensajeKana(`${mensaje} (+${expGanada} XP)`);
    },
    
    // REALIZAR ACTIVIDAD CON KANA
    realizarActividad: function(actividadId) {
        const kana = this.obtenerKana();
        const actividad = kana.actividades.find(a => a.id === actividadId);
        
        if (!actividad) {
            this.mostrarMensajeKana("Actividad no encontrada");
            return false;
        }
        
        // Verificar si el humor permite esta actividad
        if (actividad.permiteIntimos && !kana.humorActual.permiteIntimos) {
            this.mostrarMensajeKana(`💔 ${kana.nombre} no está de humor para esta actividad ahora`);
            return false;
        }
        
        // Verificar dinero si hay costo
        if (actividad.costoDinero > 0 && this.economia.saldo < actividad.costoDinero) {
            this.mostrarMensajeKana(`No tienes suficiente dinero para ${actividad.nombre} 💸`);
            return false;
        }
        
        // Gastar dinero si es necesario
        if (actividad.costoDinero > 0) {
            this.economia.saldo -= actividad.costoDinero;
        }
        
        // Ganar experiencia
        const expGanada = this.agregarExperiencia(actividad.experiencia, `Actividad: ${actividad.nombre}`);
        
        // Satisfacer necesidades según la actividad
        let necesidadesMejoradas = [];
        
        switch(actividadId) {
            case 'cocinar_juntos':
                this.satisfacerNecesidad('hambre', 30);
                necesidadesMejoradas.push('hambre');
                break;
            case 'ver_pelicula':
                this.satisfacerNecesidad('afecto', 20);
                this.satisfacerNecesidad('felicidad', 15);
                necesidadesMejoradas.push('afecto', 'felicidad');
                break;
            case 'masaje_espalda':
                this.satisfacerNecesidad('afecto', 40);
                this.satisfacerNecesidad('energia', 25);
                necesidadesMejoradas.push('afecto', 'energia');
                break;
            case 'paseo_naturaleza':
                this.satisfacerNecesidad('energia', -10); // Cansa
                this.satisfacerNecesidad('felicidad', 30);
                necesidadesMejoradas.push('felicidad');
                break;
            default:
                this.satisfacerNecesidad('felicidad', 15);
                this.satisfacerNecesidad('afecto', 10);
                necesidadesMejoradas.push('felicidad', 'afecto');
        }
        
        // Mostrar video de la actividad
        this.mostrarVideoActividad(actividad.video, actividad.nombre, actividad.descripcion, expGanada);
        
        this.mostrarMensajeKana(`👨‍👧 Realizaste: ${actividad.nombre} (+${expGanada} XP)`);
        return true;
    },
    
    // MOSTRAR VIDEO DE ACTIVIDAD
    mostrarVideoActividad: function(urlVideo, titulo, descripcion, experiencia) {
        const pantallaVideo = document.createElement('div');
        pantallaVideo.id = 'pantalla-video-actividad';
        pantallaVideo.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: white;
            font-family: Arial, sans-serif;
        `;
        
        pantallaVideo.innerHTML = `
            <div style="text-align: center; max-width: 800px;">
                <h2 style="color: #ff6b9d; margin-bottom: 10px;">${titulo}</h2>
                <p style="color: #ccc; margin-bottom: 20px;">${descripcion}</p>
                <div style="background: #222; padding: 10px; border-radius: 10px; margin-bottom: 10px;">
                    <span style="color: #4CAF50;">+${experiencia} XP ganados</span>
                </div>
                <video id="video-actividad-kana" controls autoplay 
                       style="width: 100%; max-width: 800px; border-radius: 15px; box-shadow: 0 0 20px rgba(255, 107, 157, 0.3);">
                    <source src="${urlVideo}" type="video/mp4">
                    Tu navegador no soporta el video.
                </video>
                <button onclick="this.parentElement.parentElement.remove(); sistemaKana.actualizarInterfazKana();" 
                        style="margin-top: 20px; padding: 12px 30px; 
                               background: linear-gradient(135deg, #ff6b9d, #ff4081); 
                               color: white; border: none; border-radius: 25px; 
                               cursor: pointer; font-size: 16px; font-weight: bold;
                               transition: transform 0.2s;">
                    Continuar
                </button>
            </div>
        `;
        
        document.body.appendChild(pantallaVideo);
        
        const videoElement = document.getElementById('video-actividad-kana');
        videoElement.muted = true;
        videoElement.play().catch(e => console.log("Autoplay bloqueado, el usuario debe iniciar manualmente"));
    },
    
    // REGALAR ITEM GENERAL
    regalarItem: function(tipo) {
        const regalo = this.sistemaRegalos[tipo];
        
        if (!regalo) {
            this.mostrarMensajeKana("Tipo de regalo no válido");
            return false;
        }
        
        if (this.economia.saldo >= regalo.costo) {
            this.economia.saldo -= regalo.costo;
            
            const expGanada = this.agregarExperiencia(regalo.experiencia, `Regalo de ${tipo}`);
            
            this.economia.inventario[tipo]++;
            
            // Satisfacer necesidades según el regalo
            switch(tipo) {
                case 'flores':
                    this.satisfacerNecesidad('afecto', 25);
                    break;
                case 'chocolates':
                    this.satisfacerNecesidad('hambre', 15);
                    this.satisfacerNecesidad('felicidad', 20);
                    break;
                case 'joyas':
                    this.satisfacerNecesidad('afecto', 40);
                    this.satisfacerNecesidad('felicidad', 30);
                    break;
            }
            
            this.mostrarMensajeKana(`💝 Le regalaste ${tipo} a ${this.obtenerKana().nombre} (+${expGanada} XP)`);
            return true;
        } else {
            this.mostrarMensajeKana("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // REGALAR ITEM ESPECIAL (con video recíproco)
    regalarItemEspecial: function(tipo) {
        const kana = this.obtenerKana();
        const regalo = kana.regalosEspeciales[tipo];
        
        if (!regalo) {
            this.mostrarMensajeKana("Este regalo no está disponible");
            return false;
        }
        
        if (this.economia.saldo >= regalo.costo) {
            this.economia.saldo -= regalo.costo;
            
            const expGanada = this.agregarExperiencia(regalo.experiencia, `Regalo especial: ${tipo}`);
            
            // Satisfacer necesidades
            this.satisfacerNecesidad('afecto', 30);
            this.satisfacerNecesidad('felicidad', 25);
            
            // MOSTRAR VIDEO RECÍPROCO
            this.mostrarVideoRegaloReciproco(regalo.videoReciproco, regalo.mensaje);
            
            this.mostrarMensajeKana(`💖 ${regalo.mensaje} (+${expGanada} XP)`);
            return true;
        } else {
            this.mostrarMensajeKana("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // MOSTRAR VIDEO DE REGALO RECÍPROCO
    mostrarVideoRegaloReciproco: function(urlVideo, mensaje) {
        const pantallaVideo = document.createElement('div');
        pantallaVideo.id = 'pantalla-video-regalo';
        pantallaVideo.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: white;
        `;
        
        pantallaVideo.innerHTML = `
            <div style="text-align: center; max-width: 600px;">
                <h2 style="color: #ff6b9d; margin-bottom: 20px; font-size: 24px;">💝</h2>
                <h3 style="color: #ffd700; margin-bottom: 30px; font-size: 20px;">${mensaje}</h3>
                <video id="video-regalo-reciproco" controls autoplay 
                       style="width: 100%; max-width: 500px; border-radius: 10px;">
                    <source src="${urlVideo}" type="video/mp4">
                </video>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="margin-top: 30px; padding: 12px 25px; 
                               background: #ff6b9d; color: white; 
                               border: none; border-radius: 20px; 
                               cursor: pointer; font-size: 16px;">
                    Cerrar
                </button>
            </div>
        `;
        
        document.body.appendChild(pantallaVideo);
        
        const videoElement = document.getElementById('video-regalo-reciproco');
        videoElement.muted = true;
        videoElement.play().catch(e => console.log("Autoplay bloqueado"));
    },
    
    // COMPRAR CONDONES
    comprarCondones: function() {
        const costo = 20;
        
        if (this.economia.saldo >= costo) {
            this.economia.saldo -= costo;
            this.economia.inventario.condones++;
            
            this.agregarExperiencia(10, "Compra de condones");
            
            this.actualizarInterfazKana();
            this.mostrarMensajeKana("¡Condones comprados! 🔞 +10 XP");
            return true;
        } else {
            this.mostrarMensajeKana("No tienes suficiente dinero para comprar condones 💸");
            return false;
        }
    },
    
    // USAR MOMENTO ÍNTIMO
    usarMomentoIntimo: function(momentoId) {
        const kana = this.obtenerKana();
        const momento = kana.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) {
            this.mostrarMensajeKana("Momento no encontrado");
            return false;
        }
        
        // Verificar nivel requerido
        if (kana.nivelRelacion < momento.nivelRequerido) {
            this.mostrarMensajeKana(`💔 Necesitas nivel ${momento.nivelRequerido} para este momento`);
            return false;
        }
        
        // Verificar si el humor permite momentos íntimos
        if (!kana.humorActual.permiteIntimos) {
            this.mostrarMensajeKana(`💔 ${kana.nombre} no está de humor para momentos íntimos ahora`);
            return false;
        }
        
        // Verificar condones si son necesarios
        if (momento.costoCondones > 0 && this.economia.inventario.condones < momento.costoCondones) {
            this.mostrarMensajeKana(`💔 Necesitas ${momento.costoCondones} condón(es) para este momento`);
            return false;
        }
        
        // Gastar condones si es necesario
        if (momento.costoCondones > 0) {
            this.economia.inventario.condones -= momento.costoCondones;
        }
        
        // Ganar experiencia
        const expBase = 50 + (kana.nivelRelacion * 10);
        const expGanada = this.agregarExperiencia(expBase, `Momento íntimo: ${momento.nombre}`);
        
        // Satisfacer necesidades
        this.satisfacerNecesidad('afecto', 50);
        this.satisfacerNecesidad('felicidad', 40);
        
        // Mostrar el momento íntimo
        this.ejecutarMomentoIntimo(kana, momento, expGanada);
        
        this.mostrarMensajeKana(`💖 ${momento.nombre} (+${expGanada} XP)`);
        return true;
    },
    
    // EJECUTAR MOMENTO ÍNTIMO
    ejecutarMomentoIntimo: function(kana, momento, experiencia) {
        const dialogoElement = document.getElementById('dialogo-kana');
        
        // Crear pantalla de momento íntimo
        const pantallaIntimo = document.createElement('div');
        pantallaIntimo.id = 'pantalla-momento-intimo';
        pantallaIntimo.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.98);
            z-index: 10001;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: white;
            text-align: center;
        `;
        
        // Verificar si hay video para este momento
        if (momento.video) {
            pantallaIntimo.innerHTML = `
                <div style="max-width: 900px; width: 100%;">
                    <h2 style="color: #ff4081; margin-bottom: 10px; font-size: 28px;">${momento.nombre}</h2>
                    <p style="color: #ffb3d9; margin-bottom: 20px; font-size: 18px;">${momento.descripcion}</p>
                    <div style="background: rgba(255, 64, 129, 0.2); padding: 15px; border-radius: 15px; margin-bottom: 20px;">
                        <span style="color: #4CAF50; font-size: 20px;">+${experiencia} XP</span>
                    </div>
                    <video id="video-momento-intimo" controls autoplay 
                           style="width: 100%; max-width: 800px; border-radius: 15px; 
                                  box-shadow: 0 0 30px rgba(255, 64, 129, 0.4);">
                        <source src="${momento.video}" type="video/mp4">
                        <div style="padding: 50px; background: #333; border-radius: 10px; margin: 20px 0;">
                            <p style="color: #ffb3d9; font-size: 18px;">💕 Disfruta este momento especial con ${kana.nombre}</p>
                            <p style="color: #ccc; margin-top: 10px;">${momento.descripcion}</p>
                        </div>
                    </video>
                    <div style="margin-top: 30px;">
                        <button onclick="terminarMomentoIntimoKana()" 
                                style="padding: 15px 40px; background: linear-gradient(135deg, #ff4081, #ff6b9d); 
                                       color: white; border: none; border-radius: 25px; cursor: pointer; 
                                       font-size: 18px; font-weight: bold;">
                            Finalizar 💖
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(pantallaIntimo);
            
            const videoElement = document.getElementById('video-momento-intimo');
            videoElement.muted = true;
            videoElement.play().catch(e => {
                console.log("Auto-play bloqueado, mostrando fallback");
                // Mostrar mensaje si el video no se puede reproducir
                const fallback = pantallaIntimo.querySelector('div[style*="padding: 50px"]');
                if (fallback) {
                    fallback.style.display = 'block';
                }
            });
            
        } else {
            // Fallback a texto descriptivo si no hay video
            const mensajesIntimos = [
                `Te acercas a ${kana.nombre} lentamente... 💕`,
                `Sus ojos te miran con una mezcla de amor y deseo... 😳`,
                `"Papi..." susurra suavemente mientras se acerca... 👄`,
                `Sus manos te tocan con ternura y pasión... ✨`,
                `Un beso apasionado que lo dice todo... 💋`,
                `La intimidad fluye naturalmente entre ustedes... 🥰`,
                `En este momento, solo existen ustedes dos... 💫`,
                `El amor y la pasión se funden en un solo ser... 🔥`
            ];
            
            let mensajeCompleto = `<div style="max-width: 600px; padding: 30px;">`;
            mensajeCompleto += `<h2 style="color: #ff4081;">${momento.nombre}</h2>`;
            mensajeCompleto += `<p style="color: #ffb3d9; margin-bottom: 30px;">${momento.descripcion}</p>`;
            mensajeCompleto += `<div style="background: rgba(255, 64, 129, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 30px;">`;
            
            mensajesIntimos.forEach((mensaje, index) => {
                mensajeCompleto += `<p style="color: white; margin: 10px 0; font-size: 18px; animation: fadeIn 0.5s ${index * 0.3}s both;">${mensaje}</p>`;
            });
            
            mensajeCompleto += `</div>`;
            mensajeCompleto += `<div style="background: rgba(76, 175, 80, 0.2); padding: 15px; border-radius: 10px; margin-bottom: 20px;">`;
            mensajeCompleto += `<span style="color: #4CAF50; font-size: 20px;">+${experiencia} XP ganados</span>`;
            mensajeCompleto += `</div>`;
            mensajeCompleto += `<button onclick="terminarMomentoIntimoKana()" 
                                       style="padding: 15px 40px; background: #ff4081; color: white; 
                                              border: none; border-radius: 25px; cursor: pointer; font-size: 18px;">
                                  Continuar 💖
                               </button>`;
            mensajeCompleto += `</div>`;
            
            pantallaIntimo.innerHTML = mensajeCompleto;
            document.body.appendChild(pantallaIntimo);
        }
    },
    
    // COMPRAR DECORACIÓN
    comprarDecoracion: function(idDecoracion) {
        const decoracion = this.decoracionesDisponibles.find(d => d.id === idDecoracion);
        
        if (!decoracion) {
            this.mostrarMensajeKana("Decoración no encontrada");
            return false;
        }
        
        if (this.economia.saldo >= decoracion.precio) {
            this.economia.saldo -= decoracion.precio;
            this.casa.dineroGastado += decoracion.precio;
            
            // Añadir a items comprados
            if (!this.casa.itemsComprados.includes(idDecoracion)) {
                this.casa.itemsComprados.push(idDecoracion);
            }
            
            // Aplicar mejora si corresponde
            if (decoracion.tipo === 'mueble' && decoracion.mejora && decoracion.habitacion) {
                const habitacion = this.casa.habitaciones[decoracion.habitacion];
                if (habitacion) {
                    if (!habitacion.mejoras.includes(decoracion.mejora)) {
                        habitacion.mejoras.push(decoracion.mejora);
                    }
                    habitacion.decoracion = 'mejorada';
                }
            }
            
            // Dar experiencia por compra
            this.agregarExperiencia(25, `Decoración: ${decoracion.nombre}`);
            
            this.guardarDatos();
            this.actualizarInterfazKana();
            
            this.mostrarMensajeKana(`🏠 ¡Comprado: ${decoracion.nombre}! +25 XP`);
            return true;
        } else {
            this.mostrarMensajeKana("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // ACTUALIZAR INTERFAZ COMPLETA
    actualizarInterfazKana: function() {
        const kana = this.obtenerKana();
        
        // 1. ACTUALIZAR INFORMACIÓN PRINCIPAL DE KANA
        if (document.getElementById('nombre-kana')) {
            document.getElementById('nombre-kana').textContent = kana.nombre;
            document.getElementById('edad-kana').textContent = `${kana.edad} años`;
            document.getElementById('nivel-relacion-kana').textContent = `Nivel ${kana.nivelRelacion}`;
            document.getElementById('experiencia-actual-kana').textContent = `${kana.experiencia}`;
            document.getElementById('experiencia-total-kana').textContent = `${kana.experienciaTotal}`;
            document.getElementById('humor-kana').textContent = kana.humorActual ? kana.humorActual.nombre : "Normal 😐";
            document.getElementById('descripcion-kana').textContent = kana.descripcion;
        }
        
        // 2. ACTUALIZAR BARRA DE EXPERIENCIA
        const expNecesaria = this.calcularExpParaNivel(kana.nivelRelacion + 1);
        if (document.getElementById('experiencia-siguiente-nivel-kana')) {
            document.getElementById('experiencia-siguiente-nivel-kana').textContent = `${expNecesaria}`;
            const porcentajeExp = (kana.experiencia / expNecesaria) * 100;
            document.getElementById('barra-experiencia-fill-kana').style.width = `${porcentajeExp}%`;
        }
        
        // 3. ACTUALIZAR MULTIPLICADOR Y DESCRIPCIÓN DEL HUMOR
        if (document.getElementById('multiplicador-exp-kana')) {
            document.getElementById('multiplicador-exp-kana').textContent = `${kana.humorActual ? kana.humorActual.multiplicadorExp : 1.0}x`;
            
            const humorDesc = document.getElementById('descripcion-humor-kana');
            if (humorDesc && kana.humorActual) {
                humorDesc.textContent = kana.humorActual.descripcion;
                humorDesc.title = `Multiplicador: ${kana.humorActual.multiplicadorExp}x | Intimos permitidos: ${kana.humorActual.permiteIntimos ? 'Sí ✅' : 'No ❌'}`;
                
                // Cambiar color según permita íntimos
                if (kana.humorActual.permiteIntimos) {
                    humorDesc.style.color = '#4CAF50';
                } else {
                    humorDesc.style.color = '#ff6b9d';
                }
            }
        }
        
        // 4. ACTUALIZAR ECONOMÍA
        if (document.getElementById('saldo-kana')) {
            document.getElementById('saldo-kana').textContent = `${this.economia.saldo} ${this.economia.moneda}`;
        }
        
        // 5. ACTUALIZAR INVENTARIO
        if (document.getElementById('condones-inventario-kana')) {
            document.getElementById('condones-inventario-kana').textContent = this.economia.inventario.condones;
            document.getElementById('flores-inventario-kana').textContent = this.economia.inventario.flores;
            document.getElementById('chocolates-inventario-kana').textContent = this.economia.inventario.chocolates;
            document.getElementById('joyas-inventario-kana').textContent = this.economia.inventario.joyas;
        }
        
        // 6. ACTUALIZAR NECESIDADES (BARRAS)
        this.actualizarBarrasNecesidades(kana);
        
        // 7. ACTUALIZAR BOTONES DE ACTIVIDADES
        this.actualizarBotonesActividades(kana);
        
        // 8. ACTUALIZAR BOTONES DE MOMENTOS ÍNTIMOS
        this.actualizarBotonesMomentos(kana);
        
        // 9. ACTUALIZAR BOTONES DE REGALOS
        this.actualizarBotonesRegalos(kana);
        
        // 10. ACTUALIZAR DECORACIÓN
        this.actualizarInterfazDecoracion();
        
        // 11. ACTUALIZAR IMAGEN DE KANA (si existe el elemento)
        const imgKana = document.getElementById('imagen-kana');
        if (imgKana) {
            imgKana.src = this.obtenerImagenKana(kana.humorActual ? kana.humorActual.id : 'normal');
        }
    },
    
    // ACTUALIZAR BARRAS DE NECESIDADES
    actualizarBarrasNecesidades: function(kana) {
        const necesidades = kana.necesidades;
        
        // Actualizar cada barra si existe
        ['hambre', 'felicidad', 'energia', 'higiene', 'afecto'].forEach(tipo => {
            const barraFill = document.getElementById(`barra-${tipo}-fill`);
            const barraTexto = document.getElementById(`barra-${tipo}-texto`);
            
            if (barraFill && barraTexto) {
                const valor = necesidades[tipo] || 0;
                barraFill.style.width = `${valor}%`;
                barraTexto.textContent = `${Math.round(valor)}%`;
                
                // Cambiar color según el nivel
                if (valor > 70) {
                    barraFill.style.background = '#4CAF50'; // Verde
                } else if (valor > 40) {
                    barraFill.style.background = '#FFC107'; // Amarillo
                } else {
                    barraFill.style.background = '#F44336'; // Rojo
                }
            }
        });
    },
    
    // ACTUALIZAR BOTONES DE ACTIVIDADES
    actualizarBotonesActividades: function(kana) {
        kana.actividades.forEach(actividad => {
            const boton = document.getElementById(`boton-actividad-${actividad.id}`);
            if (boton) {
                // Verificar si el humor permite esta actividad
                if (actividad.permiteIntimos && !kana.humorActual.permiteIntimos) {
                    boton.disabled = true;
                    boton.title = `${kana.nombre} no está de humor para esta actividad`;
                    boton.style.opacity = '0.6';
                } else if (actividad.costoDinero > 0 && this.economia.saldo < actividad.costoDinero) {
                    boton.disabled = true;
                    boton.title = `Necesitas ${actividad.costoDinero} ${this.economia.moneda}`;
                    boton.style.opacity = '0.6';
                } else {
                    boton.disabled = false;
                    boton.title = actividad.descripcion;
                    boton.style.opacity = '1';
                }
            }
        });
    },
    
    // ACTUALIZAR BOTONES DE MOMENTOS ÍNTIMOS
    actualizarBotonesMomentos: function(kana) {
        kana.momentosIntimos.forEach(momento => {
            const boton = document.getElementById(`boton-momento-${momento.id}`);
            if (boton) {
                const desbloqueado = kana.momentosDesbloqueados.includes(momento.id);
                const nivelSuficiente = kana.nivelRelacion >= momento.nivelRequerido;
                const condonesSuficientes = momento.costoCondones <= this.economia.inventario.condones;
                const humorPermite = kana.humorActual.permiteIntimos;
                
                if (desbloqueado) {
                    boton.disabled = false;
                    boton.title = momento.descripcion;
                    boton.style.display = 'block';
                } else if (nivelSuficiente) {
                    if (!kana.momentosDesbloqueados.includes(momento.id)) {
                        kana.momentosDesbloqueados.push(momento.id);
                    }
                    boton.disabled = false;
                    boton.title = momento.descripcion;
                    boton.style.display = 'block';
                } else {
                    boton.disabled = true;
                    boton.title = `Nivel ${momento.nivelRequerido} requerido`;
                    boton.style.display = 'none'; // Ocultar si no se ha alcanzado el nivel
                }
                
                // Verificaciones adicionales
                if (!humorPermite) {
                    boton.disabled = true;
                    boton.title = `${kana.nombre} no está de humor para momentos íntimos`;
                }
                
                if (momento.costoCondones > 0 && !condonesSuficientes) {
                    boton.disabled = true;
                    boton.title = `Necesitas ${momento.costoCondones} condón(es)`;
                }
                
                // Actualizar texto del botón con condones requeridos
                if (momento.costoCondones > 0) {
                    const textoOriginal = boton.textContent.replace(/🛡️\d*/, '');
                    boton.innerHTML = `${textoOriginal} 🛡️${momento.costoCondones}`;
                }
            }
        });
    },
    
    // ACTUALIZAR BOTONES DE REGALOS
    actualizarBotonesRegalos: function(kana) {
        // Actualizar botones generales de regalos
        ['flores', 'chocolates', 'joyas', 'juguetes', 'libros'].forEach(tipo => {
            const boton = document.getElementById(`boton-regalo-${tipo}`);
            if (boton) {
                const puedeComprar = this.economia.saldo >= this.sistemaRegalos[tipo].costo;
                boton.disabled = !puedeComprar;
                boton.innerHTML = `${this.obtenerIconoRegalo(tipo)} ${this.formatearNombreRegalo(tipo)} (S/.${this.sistemaRegalos[tipo].costo})`;
                
                if (!puedeComprar) {
                    boton.title = `Necesitas ${this.sistemaRegalos[tipo].costo} ${this.economia.moneda}`;
                } else {
                    boton.title = `Dar ${this.formatearNombreRegalo(tipo).toLowerCase()} a ${kana.nombre}`;
                }
            }
        });
        
        // Actualizar botones especiales
        Object.keys(kana.regalosEspeciales).forEach(tipo => {
            const boton = document.getElementById(`boton-especial-${tipo}`);
            if (boton) {
                const regalo = kana.regalosEspeciales[tipo];
                const puedeComprar = this.economia.saldo >= regalo.costo;
                boton.disabled = !puedeComprar;
                boton.innerHTML = `${this.obtenerIconoRegaloEspecial(tipo)} ${this.formatearNombreRegaloEspecial(tipo)} (S/.${regalo.costo})`;
                
                if (!puedeComprar) {
                    boton.title = `Necesitas ${regalo.costo} ${this.economia.moneda}`;
                } else {
                    boton.title = regalo.mensaje;
                }
            }
        });
        
        // Actualizar botón de condones
        const botonCondones = document.getElementById('boton-comprar-condones');
        if (botonCondones) {
            const puedeComprar = this.economia.saldo >= 20;
            botonCondones.disabled = !puedeComprar;
            
            if (!puedeComprar) {
                botonCondones.title = "Necesitas 20 S/. para comprar condones";
            }
        }
    },
    
    // ACTUALIZAR INTERFAZ DE DECORACIÓN
    actualizarInterfazDecoracion: function() {
        const contenedor = document.getElementById('decoracion-contenedor-kana');
        if (!contenedor) return;
        
        let html = `
            <div class="estado-casa">
                <h4>🏠 Nuestra Casa</h4>
                <div class="dinero-gastado">Invertido: ${this.casa.dineroGastado} S/.</div>
                <div class="items-totales">Decoraciones: ${this.casa.itemsComprados.length}</div>
            </div>
            
            <div class="habitaciones-actuales">
                <h5>Habitaciones:</h5>
                ${Object.values(this.casa.habitaciones).map(habitacion => 
                    `<div class="habitacion-item">
                        <span class="habitacion-nombre">${habitacion.nombre}</span>
                        <span class="habitacion-estado">${habitacion.mejoras.length > 0 ? '✨ Mejorada' : '🏠 Básica'}</span>
                    </div>`
                ).join('')}
            </div>
            
            <div class="decoraciones-disponibles-kana">
                <h5>🛍️ Tienda de Decoración:</h5>
                <div class="decoraciones-grid-kana">
        `;
        
        this.decoracionesDisponibles.forEach(decoracion => {
            const comprado = this.casa.itemsComprados.includes(decoracion.id);
            const puedeComprar = this.economia.saldo >= decoracion.precio;
            const icono = decoracion.tipo === 'poster' ? '📌' : 
                         decoracion.tipo === 'mueble' ? '🛋️' : 
                         decoracion.tipo === 'electrodomestico' ? '📺' : '✨';
            
            html += `
                <div class="decoracion-item-kana ${comprado ? 'comprado' : ''} ${!comprado && !puedeComprar ? 'no-dinero' : ''}">
                    <div class="decoracion-icono">${icono}</div>
                    <div class="decoracion-info">
                        <div class="decoracion-nombre">${decoracion.nombre}</div>
                        <div class="decoracion-precio">${decoracion.precio} S/.</div>
                        <div class="decoracion-lugar">Para: ${decoracion.habitacion ? this.casa.habitaciones[decoracion.habitacion]?.nombre || 'Casa' : 'Casa'}</div>
                    </div>
                    ${!comprado ? 
                        `<button class="boton-comprar-kana" onclick="sistemaKana.comprarDecoracion('${decoracion.id}')" 
                                ${!puedeComprar ? 'disabled' : ''}>
                            ${puedeComprar ? 'Comprar' : 'Sin saldo'}
                        </button>` :
                        '<div class="comprado-label-kana">✅ Comprado</div>'
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
    
    // OBTENER ICONO PARA REGALO GENERAL
    obtenerIconoRegalo: function(tipo) {
        const iconos = {
            'flores': '💐',
            'chocolates': '🍫',
            'joyas': '💎',
            'juguetes': '🎮',
            'libros': '📚'
        };
        return iconos[tipo] || '🎁';
    },
    
    // OBTENER ICONO PARA REGALO ESPECIAL
    obtenerIconoRegaloEspecial: function(tipo) {
        const iconos = {
            'osito': '🧸',
            'vestido': '👗',
            'joyas': '💎',
            'chocolates': '🍫',
            'lenceria': '👙',
            'perfume': '🌹'
        };
        return iconos[tipo] || '💝';
    },
    
    // FORMATEAR NOMBRE DE REGALO GENERAL
    formatearNombreRegalo: function(tipo) {
        const nombres = {
            'flores': 'Flores',
            'chocolates': 'Chocolates',
            'joyas': 'Joyas',
            'juguetes': 'Juguetes',
            'libros': 'Libros'
        };
        return nombres[tipo] || tipo;
    },
    
    // FORMATEAR NOMBRE DE REGALO ESPECIAL
    formatearNombreRegaloEspecial: function(tipo) {
        const nombres = {
            'osito': 'Osito de Peluche',
            'vestido': 'Vestido Elegante',
            'joyas': 'Collar de Diamantes',
            'chocolates': 'Chocolates Finos',
            'lenceria': 'Lencería Especial',
            'perfume': 'Perfume Exclusivo'
        };
        return nombres[tipo] || tipo;
    },
    
    // OBTENER IMAGEN DE KANA SEGÚN HUMOR
    obtenerImagenKana: function(humorId) {
        const imagenes = {
            'feliz': 'imagenes/kana_feliz.jpg',
            'cariñosa': 'imagenes/kana_carinosa.jpg',
            'romantica': 'imagenes/kana_romantica.jpg',
            'juguetona': 'imagenes/kana_juguetona.jpg',
            'timida': 'imagenes/kana_timida.jpg',
            'pasional': 'imagenes/kana_pasional.jpg',
            'triste': 'imagenes/kana_triste.jpg',
            'enferma': 'imagenes/kana_enferma.jpg',
            'celosa': 'imagenes/kana_celosa.jpg',
            'estresada': 'imagenes/kana_estresada.jpg',
            'enojada': 'imagenes/kana_enojada.jpg',
            'indiferente': 'imagenes/kana_indiferente.jpg',
            'normal': 'imagenes/kana_normal.jpg'
        };
        return imagenes[humorId] || imagenes.normal;
    },
    
    // MOSTRAR MENSAJE EN LA INTERFAZ
    mostrarMensajeKana: function(mensaje) {
        const mensajeElement = document.getElementById('mensaje-kana');
        if (mensajeElement) {
            mensajeElement.textContent = mensaje;
            mensajeElement.style.display = 'block';
            mensajeElement.style.animation = 'fadeInOut 3s ease-in-out';
            
            setTimeout(() => {
                mensajeElement.style.display = 'none';
            }, 3000);
        }
        
        // También mostrar en consola
        console.log(`👨‍👧 ${mensaje}`);
    },
    
    // AGREGAR DINERO (desde sistema económico externo)
    agregarDinero: function(cantidad, motivo) {
        this.economia.saldo += cantidad;
        console.log(`💰 ${motivo}: ${cantidad >= 0 ? '+' : ''}${cantidad} ${this.economia.moneda}`);
        this.guardarDatos();
        this.actualizarInterfazKana();
        
        if (cantidad > 0) {
            this.mostrarMensajeKana(`💰 Recibiste ${cantidad} ${this.economia.moneda} (${motivo})`);
        }
    }
};

// ============================================================================
// FUNCIONES GLOBALES PARA EL SISTEMA KANA
// ============================================================================

function iniciarSistemaKana() {
    // Cambiar a pantalla del sistema Kana
    cambiarPantalla('pantalla-rpg-kana');
    
    // Inicializar sistema
    sistemaKana.inicializar();
    
    // Actualizar interfaz
    sistemaKana.actualizarInterfazKana();
    
    console.log("👨‍👧 Sistema Kana iniciado correctamente");
}

function terminarMomentoIntimoKana() {
    const pantalla = document.getElementById('pantalla-momento-intimo');
    if (pantalla) {
        pantalla.remove();
    }
    
    // Actualizar interfaz
    sistemaKana.actualizarInterfazKana();
}

function realizarActividadKana(actividadId) {
    sistemaKana.realizarActividad(actividadId);
}

function regalarItemKana(tipo) {
    sistemaKana.regalarItem(tipo);
}

function regalarItemEspecialKana(tipo) {
    sistemaKana.regalarItemEspecial(tipo);
}

function comprarCondonesKana() {
    sistemaKana.comprarCondones();
}

function usarMomentoIntimoKana(momentoId) {
    sistemaKana.usarMomentoIntimo(momentoId);
}

function completarMazoKana(porcentaje) {
    sistemaKana.registrarMazoCompletado(porcentaje);
}

function satisfacerNecesidadKana(tipo, cantidad) {
    sistemaKana.satisfacerNecesidad(tipo, cantidad);
}

// Inicializar sistema cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .comprado {
            opacity: 0.7;
            background: rgba(76, 175, 80, 0.1);
        }
        
        .no-dinero {
            opacity: 0.5;
        }
        
        .comprado-label-kana {
            color: #4CAF50;
            font-weight: bold;
            padding: 5px 10px;
            background: rgba(76, 175, 80, 0.1);
            border-radius: 5px;
        }
        
        .boton-comprar-kana {
            background: #ff6b9d;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .boton-comprar-kana:hover:not(:disabled) {
            background: #ff4081;
        }
        
        .boton-comprar-kana:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
        
        .decoracion-item-kana {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            margin: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: transform 0.2s;
        }
        
        .decoracion-item-kana:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .decoracion-icono {
            font-size: 24px;
        }
        
        .decoracion-info {
            flex: 1;
        }
        
        .decoracion-nombre {
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .decoracion-precio {
            color: #ff6b9d;
            font-weight: bold;
        }
        
        .decoracion-lugar {
            font-size: 12px;
            color: #666;
        }
        
        .decoraciones-grid-kana {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        
        #mensaje-kana {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 107, 157, 0.9);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 9999;
            display: none;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(style);
    
    // Inicializar sistema si existe el botón o elemento correspondiente
    if (document.getElementById('btn-iniciar-kana')) {
        document.getElementById('btn-iniciar-kana').addEventListener('click', iniciarSistemaKana);
    }
    
    // Inicializar automáticamente si estamos en la pantalla correcta
    if (window.location.hash === '#kana' || document.getElementById('pantalla-rpg-kana')) {
        setTimeout(iniciarSistemaKana, 100);
    }
});

// Función para cambiar entre pantallas (simulada)
function cambiarPantalla(pantallaId) {
    // Esta función depende de tu implementación de navegación
    console.log(`Cambiando a pantalla: ${pantallaId}`);
    // Aquí iría tu lógica para mostrar/ocultar pantallas
}

// Exportar funciones para uso global
window.sistemaKana = sistemaKana;
window.iniciarSistemaKana = iniciarSistemaKana;
window.terminarMomentoIntimoKana = terminarMomentoIntimoKana;
window.realizarActividadKana = realizarActividadKana;
window.regalarItemKana = regalarItemKana;
window.regalarItemEspecialKana = regalarItemEspecialKana;
window.comprarCondonesKana = comprarCondonesKana;
window.usarMomentoIntimoKana = usarMomentoIntimoKana;
window.completarMazoKana = completarMazoKana;
window.satisfacerNecesidadKana = satisfacerNecesidadKana;
