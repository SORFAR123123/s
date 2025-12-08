// ============================================================================
// SISTEMA RPG DE 5 QUINTILLIZAS NAKANO - COMPLETAMENTE NUEVO
// ============================================================================

const rpgQuintillizas = {
    // LAS 5 HERMANAS NAKANO
    hermanas: [
        {
            id: "ichika",
            nombre: "Ichika Nakano",
            descripcion: "La hermana mayor, actriz prometedora",
            color: "#ff6b9d",
            personalidad: "Segura, coqueta, protectora",
            imagen: "imagenes/novias/ichika.jpg",
            nivel: 1,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            afecto: 50, // 0-100
            momentosDesbloqueados: [],
            habitacion: {
                nivel: 1,
                items: ["cama_basica", "mesa_pequena", "espejo_maquillaje"],
                estilo: "actriz",
                comodidad: 15,
                decoracion: []
            },
            condonesUsados: 0,
            momentosCompletados: 0
        },
        {
            id: "nino",
            nombre: "Nino Nakano",
            descripcion: "La tsundere, excelente cocinera",
            color: "#ff9d5c",
            personalidad: "Orgullosa, competitiva, cariñosa en secreto",
            imagen: "imagenes/novias/nino.jpg",
            nivel: 1,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            afecto: 30, // Inicialmente más baja (tsundere)
            momentosDesbloqueados: [],
            habitacion: {
                nivel: 1,
                items: ["cocina_basica", "estante_especias", "tabla_cortar"],
                estilo: "cocina",
                comodidad: 12,
                decoracion: []
            },
            condonesUsados: 0,
            momentosCompletados: 0
        },
        {
            id: "miku",
            nombre: "Miku Nakano",
            descripcion: "La tímida, amante de la historia",
            color: "#9d5cff",
            personalidad: "Tímida, inteligente, leal",
            imagen: "imagenes/novias/miku.jpg",
            nivel: 1,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            afecto: 60, // Más alta inicialmente
            momentosDesbloqueados: [],
            habitacion: {
                nivel: 1,
                items: ["audifonos", "estante_libros", "escritorio_estudio"],
                estilo: "estudio",
                comodidad: 18,
                decoracion: []
            },
            condonesUsados: 0,
            momentosCompletados: 0
        },
        {
            id: "yotsuba",
            nombre: "Yotsuba Nakano",
            descripcion: "La atleta, siempre positiva",
            color: "#5cff9d",
            personalidad: "Energética, optimista, deportista",
            imagen: "imagenes/novias/yotsuba.jpg",
            nivel: 1,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            afecto: 70, // Muy alta inicialmente
            momentosDesbloqueados: [],
            habitacion: {
                nivel: 1,
                items: ["trofeos", "equipo_gimnasio", "percha_uniformes"],
                estilo: "deportivo",
                comodidad: 14,
                decoracion: []
            },
            condonesUsados: 0,
            momentosCompletados: 0
        },
        {
            id: "itsuki",
            nombre: "Itsuki Nakano",
            descripcion: "La más joven, amante de la comida",
            color: "#ff5c9d",
            personalidad: "Terca, honesta, glotona",
            imagen: "imagenes/novias/itsuki.jpg",
            nivel: 1,
            experiencia: 0,
            experienciaTotal: 0,
            humorActual: null,
            ultimaFechaHumor: null,
            afecto: 40,
            momentosDesbloqueados: [],
            habitacion: {
                nivel: 1,
                items: ["refrigerador", "sillon_comodo", "mesa_comidas"],
                estilo: "comilon",
                comodidad: 16,
                decoracion: []
            },
            condonesUsados: 0,
            momentosCompletados: 0
        }
    ],
    
    // NOVIA ACTIVA/SELECCIONADA ACTUALMENTE
    noviaActiva: "ichika", // Por defecto
    
    // Economía del RPG (compartida)
    economia: {
        saldo: 0,
        inventario: {
            condones: 0,
            flores: 5,
            chocolates: 3,
            joyas: 1,
            anillos: 0
        }
    },
    
    // Tienda de decoración
    tiendaDecoracion: {
        items: [
            { id: "cama_lujosa", nombre: "Cama King Size", precio: 50, tipo: "cama", comodidad: 20 },
            { id: "sofa_cuero", nombre: "Sofá de Cuero", precio: 35, tipo: "asiento", comodidad: 15 },
            { id: "alfombra_persa", nombre: "Alfombra Persa", precio: 25, tipo: "piso", comodidad: 10 },
            { id: "lampara_cristal", nombre: "Lámpara de Cristal", precio: 20, tipo: "iluminacion", comodidad: 8 },
            { id: "cuadro_arte", nombre: "Cuadro de Arte", precio: 15, tipo: "pared", comodidad: 5 },
            { id: "jacuzzi", nombre: "Jacuzzi", precio: 100, tipo: "lujo", comodidad: 30 },
            { id: "home_cinema", nombre: "Sistema Home Cinema", precio: 75, tipo: "entretenimiento", comodidad: 25 },
            { id: "cocina_profesional", nombre: "Cocina Profesional", precio: 60, tipo: "cocina", comodidad: 18 },
            { id: "biblioteca", nombre: "Biblioteca Elegante", precio: 45, tipo: "estudio", comodidad: 22 },
            { id: "gimnasio_casa", nombre: "Gimnasio en Casa", precio: 80, tipo: "deporte", comodidad: 28 }
        ]
    },
    
    // Sistema de momentos íntimos (5 por cada chica)
    momentosIntimos: {
        ichika: [
            { 
                id: "beso_coqueto", 
                nombre: "Beso Coqueto 💋", 
                costoCondones: 1, 
                nivelRequerido: 1, 
                descripcion: "Ichika te besa con su sonrisa de actriz",
                video: "videos/intimos/ichika/beso_coqueto.mp4",
                duracion: "15s"
            },
            { 
                id: "masaje_actriz", 
                nombre: "Masaje de Actriz ✋", 
                costoCondones: 1, 
                nivelRequerido: 2, 
                descripcion: "Ichika te da un masaje sensual",
                video: "videos/intimos/ichika/masaje_actriz.mp4",
                duracion: "20s"
            },
            { 
                id: "noche_estrellas", 
                nombre: "Noche bajo las Estrellas 🌙", 
                costoCondones: 1, 
                nivelRequerido: 3, 
                descripcion: "Una cita romántica con Ichika",
                video: "videos/intimos/ichika/noche_estrellas.mp4",
                duracion: "25s"
            },
            { 
                id: "escena_pasion", 
                nombre: "Escena de Pasión 🔥", 
                costoCondones: 2, 
                nivelRequerido: 4, 
                descripcion: "Ichika actúa su escena más ardiente",
                video: "videos/intimos/ichika/escena_pasion.mp4",
                duracion: "30s"
            },
            { 
                id: "amanecer_juntos", 
                nombre: "Amanecer Juntos 🌅", 
                costoCondones: 3, 
                nivelRequerido: 5, 
                descripcion: "Pasas la noche completa con Ichika",
                video: "videos/intimos/ichika/amanecer_juntos.mp4",
                duracion: "35s"
            }
        ],
        nino: [
            { 
                id: "beso_tsundere", 
                nombre: "Beso Tsundere 😠💋", 
                costoCondones: 1, 
                nivelRequerido: 1, 
                descripcion: "Nino te besa después de quejarse",
                video: "videos/intimos/nino/beso_tsundere.mp4",
                duracion: "12s"
            },
            { 
                id: "cena_romantica", 
                nombre: "Cena Romántica 🍽️", 
                costoCondones: 1, 
                nivelRequerido: 2, 
                descripcion: "Nino cocina una cena especial",
                video: "videos/intimos/nino/cena_romantica.mp4",
                duracion: "18s"
            },
            { 
                id: "caricias_cocina", 
                nombre: "Caricias en la Cocina 👩‍🍳", 
                costoCondones: 1, 
                nivelRequerido: 3, 
                descripcion: "Nino te acaricia mientras cocina",
                video: "videos/intimos/nino/caricias_cocina.mp4",
                duracion: "22s"
            },
            { 
                id: "postre_pasion", 
                nombre: "Postre de Pasión 🍨", 
                costoCondones: 2, 
                nivelRequerido: 4, 
                descripcion: "Nino te sirve un postre muy especial",
                video: "videos/intimos/nino/postre_pasion.mp4",
                duracion: "28s"
            },
            { 
                id: "desayuno_amor", 
                nombre: "Desayuno con Amor 🍳", 
                costoCondones: 3, 
                nivelRequerido: 5, 
                descripcion: "Desayunas en la cama con Nino",
                video: "videos/intimos/nino/desayuno_amor.mp4",
                duracion: "32s"
            }
        ],
        miku: [
            { 
                id: "beso_timido", 
                nombre: "Beso Tímido 😳💋", 
                costoCondones: 1, 
                nivelRequerido: 1, 
                descripcion: "Miku te da un beso tímido",
                video: "videos/intimos/miku/beso_timido.mp4",
                duracion: "10s"
            },
            { 
                id: "leccion_especial", 
                nombre: "Lección Especial 📖", 
                costoCondones: 1, 
                nivelRequerido: 2, 
                descripcion: "Miku te da una lección muy cercana",
                video: "videos/intimos/miku/leccion_especial.mp4",
                duracion: "16s"
            },
            { 
                id: "historia_noche", 
                nombre: "Historia de Noche 🌌", 
                costoCondones: 1, 
                nivelRequerido: 3, 
                descripcion: "Miku te cuenta una historia íntima",
                video: "videos/intimos/miku/historia_noche.mp4",
                duracion: "24s"
            },
            { 
                id: "tesoro_secreto", 
                nombre: "Tesoro Secreto 💎", 
                costoCondones: 2, 
                nivelRequerido: 4, 
                descripcion: "Miku te muestra su tesoro más preciado",
                video: "videos/intimos/miku/tesoro_secreto.mp4",
                duracion: "26s"
            },
            { 
                id: "promesa_eterna", 
                nombre: "Promesa Eterna 💍", 
                costoCondones: 3, 
                nivelRequerido: 5, 
                descripcion: "Miku hace una promesa muy especial",
                video: "videos/intimos/miku/promesa_eterna.mp4",
                duracion: "30s"
            }
        ],
        yotsuba: [
            { 
                id: "beso_energetico", 
                nombre: "Beso Energético ⚡💋", 
                costoCondones: 1, 
                nivelRequerido: 1, 
                descripcion: "Yotsuba te besa con toda su energía",
                video: "videos/intimos/yotsuba/beso_energetico.mp4",
                duracion: "8s"
            },
            { 
                id: "entrenamiento_especial", 
                nombre: "Entrenamiento Especial 🏃‍♀️", 
                costoCondones: 1, 
                nivelRequerido: 2, 
                descripcion: "Yotsuba te entrena de manera muy cercana",
                video: "videos/intimos/yotsuba/entrenamiento_especial.mp4",
                duracion: "14s"
            },
            { 
                id: "ducha_deportiva", 
                nombre: "Ducha Deportiva 🚿", 
                costoCondones: 1, 
                nivelRequerido: 3, 
                descripcion: "Yotsuba te invita a ducharse juntos",
                video: "videos/intimos/yotsuba/ducha_deportiva.mp4",
                duracion: "20s"
            },
            { 
                id: "victoria_celebra", 
                nombre: "Victoria que se Celebra 🏆", 
                costoCondones: 2, 
                nivelRequerido: 4, 
                descripcion: "Celebran una victoria muy especial",
                video: "videos/intimos/yotsuba/victoria_celebra.mp4",
                duracion: "24s"
            },
            { 
                id: "maraton_noche", 
                nombre: "Maratón Nocturna 🌠", 
                costoCondones: 3, 
                nivelRequerido: 5, 
                descripcion: "Yotsuba corre una maratón muy íntima",
                video: "videos/intimos/yotsuba/maraton_noche.mp4",
                duracion: "28s"
            }
        ],
        itsuki: [
            { 
                id: "beso_gloton", 
                nombre: "Beso Glotón 🍔💋", 
                costoCondones: 1, 
                nivelRequerido: 1, 
                descripcion: "Itsuki te besa con sabor a comida",
                video: "videos/intimos/itsuki/beso_gloton.mp4",
                duracion: "11s"
            },
            { 
                id: "banquete_amor", 
                nombre: "Banquete de Amor 🍱", 
                costoCondones: 1, 
                nivelRequerido: 2, 
                descripcion: "Itsuki te prepara un banquete especial",
                video: "videos/intimos/itsuki/banquete_amor.mp4",
                duracion: "17s"
            },
            { 
                id: "postre_midnight", 
                nombre: "Postre Midnight 🍰", 
                costoCondones: 1, 
                nivelRequerido: 3, 
                descripcion: "Itsuki te sirve un postre a medianoche",
                video: "videos/intimos/itsuki/postre_midnight.mp4",
                duracion: "21s"
            },
            { 
                id: "festin_pasion", 
                nombre: "Festín de Pasión 🍖", 
                costoCondones: 2, 
                nivelRequerido: 4, 
                descripcion: "Itsuki te alimenta de manera muy íntima",
                video: "videos/intimos/itsuki/festin_pasion.mp4",
                duracion: "25s"
            },
            { 
                id: "desayuno_cama", 
                nombre: "Desayuno en Cama 🥞", 
                costoCondones: 3, 
                nivelRequerido: 5, 
                descripcion: "Itsuki te lleva el desayuno a la cama",
                video: "videos/intimos/itsuki/desayuno_cama.mp4",
                duracion: "29s"
            }
        ]
    },
    
    // Regalos recíprocos (video que te dan ellas cuando les regalas)
    regalosReciprocos: {
        flores: {
            ichika: { video: "videos/regalos/ichika/flores.mp4", mensaje: "¡Qué flores tan bonitas! 💐" },
            nino: { video: "videos/regalos/nino/flores.mp4", mensaje: "Hmm... no están mal. 🌹" },
            miku: { video: "videos/regalos/miku/flores.mp4", mensaje: "Gracias... son hermosas. 🌸" },
            yotsuba: { video: "videos/regalos/yotsuba/flores.mp4", mensaje: "¡Wow! ¡Me encantan! 🌻" },
            itsuki: { video: "videos/regalos/itsuki/flores.mp4", mensaje: "Gracias, pero prefiero comida. 🌺" }
        },
        chocolates: {
            ichika: { video: "videos/regalos/ichika/chocolates.mp4", mensaje: "¡Chocolate! Perfecto para una actriz. 🍫" },
            nino: { video: "videos/regalos/nino/chocolates.mp4", mensaje: "Los usaré para postres. 😏" },
            miku: { video: "videos/regalos/miku/chocolates.mp4", mensaje: "Estudiaremos mejor con chocolate. 📚" },
            yotsuba: { video: "videos/regalos/yotsuba/chocolates.mp4", mensaje: "¡Energía extra! ⚡" },
            itsuki: { video: "videos/regalos/itsuki/chocolates.mp4", mensaje: "¡CHOCOLATE! 🍫🍫🍫" }
        },
        joyas: {
            ichika: { video: "videos/regalos/ichika/joyas.mp4", mensaje: "¡Brillaré en el escenario! 💎" },
            nino: { video: "videos/regalos/nino/joyas.mp4", mensaje: "No es necesario... pero gracias. 💍" },
            miku: { video: "videos/regalos/miku/joyas.mp4", mensaje: "Es demasiado... 💖" },
            yotsuba: { video: "videos/regalos/yotsuba/joyas.mp4", mensaje: "¡Brilla como una medalla! ✨" },
            itsuki: { video: "videos/regalos/itsuki/joyas.mp4", mensaje: "¿Se puede comer? 💎" }
        }
    },
    
    // Sistema de experiencia por mazos
    sistemaExperienciaMazos: {
        '100%': { experiencia: 30, afecto: 5 },
        '90-99%': { experiencia: 20, afecto: 3 },
        '80-89%': { experiencia: 15, afecto: 2 },
        '70-79%': { experiencia: 10, afecto: 1 },
        '60-69%': { experiencia: 5, afecto: 0 },
        '50-59%': { experiencia: 3, afecto: -1 },
        '0-49%': { experiencia: 1, afecto: -2 }
    },
    
    // ============================================================================
    // FUNCIONES PRINCIPALES
    // ============================================================================
    
    // Inicializar el sistema RPG
    inicializar: function() {
        const datosGuardados = this.cargarDatos();
        
        if (datosGuardados) {
            this.hermanas = datosGuardados.hermanas;
            this.noviaActiva = datosGuardados.noviaActiva;
            this.economia = datosGuardados.economia;
        } else {
            // Configuración inicial
            this.economia.saldo = sistemaEconomia.saldoTotal;
            
            // Inicializar humores
            this.hermanas.forEach(hermana => {
                this.actualizarHumorDiario(hermana.id);
            });
            
            this.guardarDatos();
        }
        
        console.log("💕 RPG de Quintillizas inicializado. Novia activa:", this.noviaActiva);
    },
    
    // Cargar datos guardados
    cargarDatos: function() {
        try {
            const datos = localStorage.getItem('rpgQuintillizas');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando datos RPG:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('rpgQuintillizas', JSON.stringify({
                hermanas: this.hermanas,
                noviaActiva: this.noviaActiva,
                economia: this.economia
            }));
            return true;
        } catch (e) {
            console.error("Error guardando datos RPG:", e);
            return false;
        }
    },
    
    // Obtener novia activa
    obtenerNoviaActiva: function() {
        return this.hermanas.find(h => h.id === this.noviaActiva);
    },
    
    // Cambiar novia activa
    cambiarNoviaActiva: function(nuevaNoviaId) {
        if (this.hermanas.some(h => h.id === nuevaNoviaId)) {
            this.noviaActiva = nuevaNoviaId;
            this.guardarDatos();
            this.actualizarInterfazRPG();
            console.log("💖 Novia activa cambiada a:", nuevaNoviaId);
            return true;
        }
        return false;
    },
    
    // Actualizar humor diario para una hermana
    actualizarHumorDiario: function(hermanaId) {
        const hoy = new Date().toISOString().split('T')[0];
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        
        if (!hermana) return;
        
        if (!hermana.ultimaFechaHumor || hermana.ultimaFechaHumor !== hoy) {
            // Pool de humores específico por hermana (definido más arriba)
            const pool = this.getHumoresPool(hermanaId);
            const humorAleatorio = pool[Math.floor(Math.random() * pool.length)];
            
            hermana.humorActual = humorAleatorio;
            hermana.ultimaFechaHumor = hoy;
            
            console.log(`😊 ${hermana.nombre} está ${humorAleatorio.nombre} hoy`);
        }
    },
    
    // Obtener pool de humores por hermana
    getHumoresPool: function(hermanaId) {
        // Pool básico si no hay específico
        const pools = {
            ichika: [
                { id: "coqueta", nombre: "Coqueta 😘", multiplicadorExp: 1.8, permiteIntimos: true },
                { id: "actriz", nombre: "En modo actriz 🎭", multiplicadorExp: 1.5, permiteIntimos: true },
                { id: "celosa", nombre: "Celosa 😒", multiplicadorExp: 0.7, permiteIntimos: false }
            ],
            nino: [
                { id: "tsundere", nombre: "Tsundere 😠", multiplicadorExp: 1.0, permiteIntimos: false },
                { id: "cocinera", nombre: "Cocinando 👩‍🍳", multiplicadorExp: 2.0, permiteIntimos: true },
                { id: "cariñosa", nombre: "Cariñosa secreta 💕", multiplicadorExp: 1.8, permiteIntimos: true }
            ],
            miku: [
                { id: "timida", nombre: "Tímida 😳", multiplicadorExp: 1.2, permiteIntimos: false },
                { id: "historiadora", nombre: "Historiadora 📚", multiplicadorExp: 1.7, permiteIntimos: true },
                { id: "confiada", nombre: "Confiada 😊", multiplicadorExp: 1.5, permiteIntimos: true }
            ],
            yotsuba: [
                { id: "energetica", nombre: "Energética ⚡", multiplicadorExp: 1.6, permiteIntimos: true },
                { id: "deportista", nombre: "Deportista 🏃‍♀️", multiplicadorExp: 1.8, permiteIntimos: true },
                { id: "feliz", nombre: "Feliz radiante 😁", multiplicadorExp: 2.0, permiteIntimos: true }
            ],
            itsuki: [
                { id: "glotona", nombre: "Glotona 🍔", multiplicadorExp: 1.9, permiteIntimos: true },
                { id: "estudiosa", nombre: "Estudiosa 🎓", multiplicadorExp: 1.4, permiteIntimos: true },
                { id: "dormilona", nombre: "Dormilona 😴", multiplicadorExp: 0.9, permiteIntimos: false }
            ]
        };
        
        return pools[hermanaId] || pools.ichika;
    },
    
    // Agregar experiencia SOLO a la novia activa
    agregarExperiencia: function(cantidad, motivo, afectoExtra = 0) {
        const novia = this.obtenerNoviaActiva();
        if (!novia) return 0;
        
        // Aplicar multiplicador según humor
        const multiplicador = novia.humorActual ? novia.humorActual.multiplicadorExp : 1.0;
        const cantidadConMultiplicador = Math.round(cantidad * multiplicador);
        
        novia.experiencia += cantidadConMultiplicador;
        novia.experienciaTotal += cantidadConMultiplicador;
        
        // Afecto
        novia.afecto = Math.min(100, Math.max(0, novia.afecto + afectoExtra));
        
        console.log(`💕 ${novia.nombre}: +${cantidadConMultiplicador} XP (${motivo}) | Multiplicador: ${multiplicador}x | Afecto: ${novia.afecto}`);
        
        // Verificar si sube de nivel
        this.verificarSubidaNivel(novia.id);
        
        this.guardarDatos();
        this.actualizarInterfazRPG();
        
        return cantidadConMultiplicador;
    },
    
    // Verificar subida de nivel
    verificarSubidaNivel: function(hermanaId) {
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        if (!hermana) return;
        
        const expNecesaria = this.calcularExpParaNivel(hermana.nivel + 1);
        
        while (hermana.experiencia >= expNecesaria && hermana.experiencia > 0) {
            hermana.nivel++;
            hermana.experiencia -= expNecesaria;
            
            // Subir nivel de habitación cada 5 niveles
            if (hermana.nivel % 5 === 0) {
                hermana.habitacion.nivel++;
                mostrarMensaje(`🏠 ¡La habitación de ${hermana.nombre} subió a nivel ${hermana.habitacion.nivel}!`);
            }
            
            // Verificar qué momentos se desbloquean
            this.verificarMomentosDesbloqueados(hermanaId);
            
            mostrarMensaje(`🎉 ¡${hermana.nombre} subió al nivel ${hermana.nivel}! 💕`);
            
            console.log(`⬆️ ${hermana.nombre} subió a nivel ${hermana.nivel}`);
        }
    },
    
    // Calcular experiencia necesaria para un nivel
    calcularExpParaNivel: function(nivel) {
        // Fórmula: 50 * (nivel * 1.5)
        return Math.round(50 * (nivel * 1.5));
    },
    
    // Verificar qué momentos se desbloquean
    verificarMomentosDesbloqueados: function(hermanaId) {
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        if (!hermana) return;
        
        const momentos = this.momentosIntimos[hermanaId];
        if (!momentos) return;
        
        momentos.forEach(momento => {
            if (hermana.nivel >= momento.nivelRequerido && 
                !hermana.momentosDesbloqueados.includes(momento.id)) {
                hermana.momentosDesbloqueados.push(momento.id);
                mostrarMensaje(`✨ ¡Nuevo momento desbloqueado con ${hermana.nombre}: ${momento.nombre}! 💖`);
            }
        });
    },
    
    // Registrar mazo completado (SOLO para novia activa)
    registrarMazoCompletado: function(porcentaje) {
        const novia = this.obtenerNoviaActiva();
        if (!novia) return;
        
        let experiencia = 0;
        let afecto = 0;
        
        // Determinar cuánta experiencia dar según el porcentaje
        if (porcentaje === 100) {
            experiencia = this.sistemaExperienciaMazos['100%'].experiencia;
            afecto = this.sistemaExperienciaMazos['100%'].afecto;
        } else if (porcentaje >= 90) {
            experiencia = this.sistemaExperienciaMazos['90-99%'].experiencia;
            afecto = this.sistemaExperienciaMazos['90-99%'].afecto;
        } else if (porcentaje >= 80) {
            experiencia = this.sistemaExperienciaMazos['80-89%'].experiencia;
            afecto = this.sistemaExperienciaMazos['80-89%'].afecto;
        } else if (porcentaje >= 70) {
            experiencia = this.sistemaExperienciaMazos['70-79%'].experiencia;
            afecto = this.sistemaExperienciaMazos['70-79%'].afecto;
        } else if (porcentaje >= 60) {
            experiencia = this.sistemaExperienciaMazos['60-69%'].experiencia;
            afecto = this.sistemaExperienciaMazos['60-69%'].afecto;
        } else if (porcentaje >= 50) {
            experiencia = this.sistemaExperienciaMazos['50-59%'].experiencia;
            afecto = this.sistemaExperienciaMazos['50-59%'].afecto;
        } else {
            experiencia = this.sistemaExperienciaMazos['0-49%'].experiencia;
            afecto = this.sistemaExperienciaMazos['0-49%'].afecto;
        }
        
        this.agregarExperiencia(experiencia, `Mazo completado al ${porcentaje}%`, afecto);
    },
    
    // Regalar item a la novia activa
    regalarItem: function(tipo) {
        const novia = this.obtenerNoviaActiva();
        if (!novia) return false;
        
        const precios = {
            flores: 5,
            chocolates: 10,
            joyas: 20,
            anillos: 50
        };
        
        const afectoGanado = {
            flores: 5,
            chocolates: 8,
            joyas: 12,
            anillos: 20
        };
        
        if (!precios[tipo]) {
            mostrarMensaje("Tipo de regalo no válido");
            return false;
        }
        
        if (this.economia.saldo >= precios[tipo]) {
            // Gastar dinero
            this.economia.saldo -= precios[tipo];
            sistemaEconomia.agregarDinero(-precios[tipo], `Regalo de ${tipo} para ${novia.nombre}`);
            
            // Agregar al inventario
            this.economia.inventario[tipo] = (this.economia.inventario[tipo] || 0) - 1;
            if (this.economia.inventario[tipo] < 0) this.economia.inventario[tipo] = 0;
            
            // Agregar afecto
            const afecto = afectoGanado[tipo];
            novia.afecto = Math.min(100, novia.afecto + afecto);
            
            // MOSTRAR VIDEO RECÍPROCO DEL REGALO
            this.mostrarVideoRegaloReciproco(tipo, novia.id);
            
            // Dar experiencia por el regalo
            const expGanada = this.agregarExperiencia(10, `Regalo de ${tipo}`, afecto);
            
            mostrarMensaje(`💝 Le regalaste ${tipo} a ${novia.nombre} (+${afecto} afecto)`);
            this.guardarDatos();
            return true;
        } else {
            mostrarMensaje("No tienes suficiente dinero 💸");
            return false;
        }
    },
    
    // Mostrar video recíproco del regalo
    mostrarVideoRegaloReciproco: function(tipoRegalo, hermanaId) {
        const regalo = this.regalosReciprocos[tipoRegalo];
        if (!regalo || !regalo[hermanaId]) return;
        
        const videoInfo = regalo[hermanaId];
        
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Mostrar pantalla de video de regalo
        const pantallaVideo = document.getElementById('pantalla-video-regalo');
        if (pantallaVideo) {
            pantallaVideo.classList.add('activa');
            
            const hermana = this.hermanas.find(h => h.id === hermanaId);
            
            // Actualizar contenido
            document.getElementById('titulo-video-regalo').textContent = `${hermana.nombre} recibe tu regalo`;
            document.getElementById('mensaje-video-regalo').textContent = videoInfo.mensaje;
            
            const videoElement = document.getElementById('video-regalo-reciproco');
            videoElement.src = videoInfo.video;
            videoElement.controls = true;
            videoElement.muted = true;
            videoElement.loop = false;
            
            // Configurar para que cuando termine vuelva al RPG
            videoElement.onended = function() {
                document.getElementById('pantalla-video-regalo').classList.remove('activa');
                document.getElementById('pantalla-rpg-quintillizas').classList.add('activa');
                actualizarInterfazRPG();
            };
            
            // Reproducir automáticamente
            videoElement.play().catch(e => {
                console.log("Autoplay bloqueado para video de regalo");
                videoElement.controls = true;
            });
        }
    },
    
    // Comprar condones
    comprarCondones: function() {
        const costo = 15;
        if (this.economia.saldo >= costo) {
            this.economia.saldo -= costo;
            sistemaEconomia.agregarDinero(-costo, "Compra de condones");
            this.economia.inventario.condones++;
            
            // Dar un poco de experiencia a la novia activa
            const novia = this.obtenerNoviaActiva();
            if (novia) {
                this.agregarExperiencia(5, "Compra de condones", 1);
            }
            
            this.actualizarInterfazRPG();
            mostrarMensaje("¡Condones comprados! 💕 +5 XP");
            return true;
        } else {
            mostrarMensaje("No tienes suficiente dinero para comprar condones 💸");
            return false;
        }
    },
    
    // Usar momento íntimo con la novia activa
    usarMomentoIntimo: function(momentoId) {
        const novia = this.obtenerNoviaActiva();
        if (!novia) return false;
        
        const momentos = this.momentosIntimos[novia.id];
        if (!momentos) return false;
        
        const momento = momentos.find(m => m.id === momentoId);
        if (!momento) {
            mostrarMensaje("Momento no encontrado");
            return false;
        }
        
        // Verificar nivel requerido
        if (novia.nivel < momento.nivelRequerido) {
            mostrarMensaje(`Necesitas nivel ${momento.nivelRequerido} con ${novia.nombre} para este momento 💔`);
            return false;
        }
        
        // Verificar si está desbloqueado
        if (!novia.momentosDesbloqueados.includes(momentoId)) {
            mostrarMensaje(`Este momento aún no está desbloqueado con ${novia.nombre} 🔒`);
            return false;
        }
        
        // Verificar si el humor actual permite momentos íntimos
        if (!novia.humorActual.permiteIntimos) {
            mostrarMensaje(`${novia.nombre} está ${novia.humorActual.nombre} y no está de humor para momentos íntimos 💔`);
            return false;
        }
        
        // Verificar condones
        if (this.economia.inventario.condones < momento.costoCondones) {
            mostrarMensaje(`Necesitas ${momento.costoCondones} condón(es) para este momento 💔`);
            return false;
        }
        
        // Usar condones
        this.economia.inventario.condones -= momento.costoCondones;
        novia.condonesUsados += momento.costoCondones;
        
        // Dar experiencia por el momento íntimo
        const expPorMomento = 25 * momento.costoCondones;
        const afectoGanado = 10 * momento.costoCondones;
        const expGanada = this.agregarExperiencia(expPorMomento, `Momento íntimo: ${momento.nombre}`, afectoGanado);
        
        // Registrar momento completado
        novia.momentosCompletados++;
        
        // MOSTRAR VIDEO DEL MOMENTO ÍNTIMO
        this.mostrarVideoMomentoIntimo(momento, novia);
        
        mostrarMensaje(`💖 Momento íntimo con ${novia.nombre}: ${momento.nombre} (+${expGanada} XP)`);
        this.guardarDatos();
        return true;
    },
    
    // Mostrar video del momento íntimo
    mostrarVideoMomentoIntimo: function(momento, hermana) {
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        // Mostrar pantalla de video íntimo
        const pantallaVideo = document.getElementById('pantalla-video-intimo');
        if (pantallaVideo) {
            pantallaVideo.classList.add('activa');
            
            // Actualizar contenido
            document.getElementById('titulo-video-intimo').textContent = momento.nombre;
            document.getElementById('descripcion-video-intimo').textContent = momento.descripcion;
            document.getElementById('duracion-video-intimo').textContent = `Duración: ${momento.duracion}`;
            document.getElementById('hermana-video-intimo').textContent = `Con: ${hermana.nombre}`;
            
            const videoElement = document.getElementById('video-intimo-momento');
            videoElement.src = momento.video;
            videoElement.controls = true;
            videoElement.muted = true;
            videoElement.loop = false;
            
            // Configurar para que cuando termine vuelva al RPG
            videoElement.onended = function() {
                document.getElementById('pantalla-video-intimo').classList.remove('activa');
                document.getElementById('pantalla-rpg-quintillizas').classList.add('activa');
                actualizarInterfazRPG();
            };
            
            // Reproducir automáticamente
            videoElement.play().catch(e => {
                console.log("Autoplay bloqueado para video íntimo");
                videoElement.controls = true;
            });
        }
    },
    
    // Comprar item de decoración
    comprarDecoracion: function(itemId, hermanaId) {
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        if (!hermana) return false;
        
        const item = this.tiendaDecoracion.items.find(i => i.id === itemId);
        if (!item) return false;
        
        // Verificar si ya tiene el item
        if (hermana.habitacion.decoracion.includes(itemId)) {
            mostrarMensaje(`Ya tienes ${item.nombre} en la habitación de ${hermana.nombre}`);
            return false;
        }
        
        if (this.economia.saldo >= item.precio) {
            // Gastar dinero
            this.economia.saldo -= item.precio;
            sistemaEconomia.agregarDinero(-item.precio, `Decoración para ${hermana.nombre}`);
            
            // Agregar item a la habitación
            hermana.habitacion.decoracion.push(itemId);
            hermana.habitacion.comodidad += item.comodidad;
            
            // Dar experiencia por decorar
            this.agregarExperiencia(15, `Decoró la habitación de ${hermana.nombre}`, 5);
            
            mostrarMensaje(`🏠 Compraste ${item.nombre} para ${hermana.nombre} (+${item.comodidad} comodidad)`);
            this.guardarDatos();
            this.actualizarInterfazRPG();
            return true;
        } else {
            mostrarMensaje("No tienes suficiente dinero para esta decoración 💸");
            return false;
        }
    },
    
    // Actualizar interfaz RPG completa
    actualizarInterfazRPG: function() {
        // Actualizar todas las hermanas en la pantalla de selección
        this.hermanas.forEach((hermana, index) => {
            // Actualizar en pantalla de selección
            const elementoHermana = document.getElementById(`hermana-${hermana.id}`);
            if (elementoHermana) {
                elementoHermana.querySelector('.nombre-hermana').textContent = hermana.nombre;
                elementoHermana.querySelector('.nivel-hermana').textContent = `Nivel ${hermana.nivel}`;
                elementoHermana.querySelector('.afecto-hermana').textContent = `Afecto: ${hermana.afecto}%`;
                
                // Resaltar la activa
                if (hermana.id === this.noviaActiva) {
                    elementoHermana.classList.add('activa');
                } else {
                    elementoHermana.classList.remove('activa');
                }
            }
            
            // Actualizar en pantalla principal RPG si es la activa
            if (hermana.id === this.noviaActiva) {
                // Información principal
                document.getElementById('nombre-novia-activa').textContent = hermana.nombre;
                document.getElementById('descripcion-novia').textContent = hermana.descripcion;
                document.getElementById('nivel-relacion').textContent = `Nivel ${hermana.nivel}`;
                document.getElementById('afecto-novia').textContent = `${hermana.afecto}%`;
                
                // Barra de afecto
                document.getElementById('barra-afecto-fill').style.width = `${hermana.afecto}%`;
                
                // Experiencia
                const expNecesaria = this.calcularExpParaNivel(hermana.nivel + 1);
                document.getElementById('experiencia-actual').textContent = `${hermana.experiencia}`;
                document.getElementById('experiencia-siguiente-nivel').textContent = `${expNecesaria}`;
                const porcentajeExp = (hermana.experiencia / expNecesaria) * 100;
                document.getElementById('barra-experiencia-fill').style.width = `${porcentajeExp}%`;
                
                // Humor
                if (hermana.humorActual) {
                    document.getElementById('humor-novia').textContent = hermana.humorActual.nombre;
                    document.getElementById('multiplicador-exp').textContent = `${hermana.humorActual.multiplicadorExp}x`;
                }
                
                // Imagen
                const imagenElement = document.getElementById('imagen-novia-activa');
                if (imagenElement) {
                    imagenElement.src = hermana.imagen;
                    imagenElement.style.borderColor = hermana.color;
                }
                
                // Actualizar botones de momentos íntimos
                this.actualizarBotonesMomentos(hermana.id);
                
                // Actualizar información de habitación
                this.actualizarInfoHabitacion(hermana.id);
            }
        });
        
        // Sincronizar saldo con sistema global
        this.economia.saldo = sistemaEconomia.saldoTotal;
        document.getElementById('saldo-rpg').textContent = `${this.economia.saldo} S/.`;
        
        // Actualizar inventario
        document.getElementById('condones-inventario').textContent = this.economia.inventario.condones;
        document.getElementById('flores-inventario').textContent = this.economia.inventario.flores;
        document.getElementById('chocolates-inventario').textContent = this.economia.inventario.chocolates;
        document.getElementById('joyas-inventario').textContent = this.economia.inventario.joyas;
        document.getElementById('anillos-inventario').textContent = this.economia.inventario.anillos || 0;
    },
    
    // Actualizar botones de momentos íntimos
    actualizarBotonesMomentos: function(hermanaId) {
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        if (!hermana) return;
        
        const momentos = this.momentosIntimos[hermanaId];
        if (!momentos) return;
        
        momentos.forEach((momento, index) => {
            const boton = document.getElementById(`momento-${index + 1}`);
            if (boton) {
                boton.textContent = momento.nombre;
                boton.onclick = () => this.usarMomentoIntimo(momento.id);
                boton.title = `${momento.descripcion}\nNivel requerido: ${momento.nivelRequerido}\nCondones: ${momento.costoCondones}`;
                
                const desbloqueado = hermana.momentosDesbloqueados.includes(momento.id);
                const nivelSuficiente = hermana.nivel >= momento.nivelRequerido;
                
                if (desbloqueado) {
                    boton.disabled = false;
                    boton.classList.add('desbloqueado');
                    boton.classList.remove('bloqueado');
                } else if (nivelSuficiente) {
                    // Si tiene el nivel pero no está desbloqueado, agregarlo
                    if (!hermana.momentosDesbloqueados.includes(momento.id)) {
                        hermana.momentosDesbloqueados.push(momento.id);
                        this.guardarDatos();
                    }
                    boton.disabled = false;
                    boton.classList.add('desbloqueado');
                    boton.classList.remove('bloqueado');
                } else {
                    boton.disabled = true;
                    boton.classList.add('bloqueado');
                    boton.classList.remove('desbloqueado');
                }
                
                // Verificar si el humor permite momentos íntimos
                if (!hermana.humorActual.permiteIntimos) {
                    boton.disabled = true;
                    boton.title = `${hermana.nombre} no está de humor para momentos íntimos`;
                }
                
                // Verificar si hay condones suficientes
                if (this.economia.inventario.condones < momento.costoCondones) {
                    boton.disabled = true;
                    boton.title = `Necesitas ${momento.costoCondones} condón(es)`;
                }
            }
        });
    },
    
    // Actualizar información de habitación
    actualizarInfoHabitacion: function(hermanaId) {
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        if (!hermana) return;
        
        document.getElementById('nivel-habitacion').textContent = `Nivel ${hermana.habitacion.nivel}`;
        document.getElementById('comodidad-habitacion').textContent = hermana.habitacion.comodidad;
        document.getElementById('estilo-habitacion').textContent = hermana.habitacion.estilo;
        document.getElementById('items-habitacion').textContent = hermana.habitacion.items.length + hermana.habitacion.decoracion.length;
        
        // Actualizar lista de decoración
        const listaDecoracion = document.getElementById('lista-decoracion');
        if (listaDecoracion) {
            listaDecoracion.innerHTML = '';
            
            // Items básicos
            hermana.habitacion.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `✅ ${item.replace(/_/g, ' ')}`;
                listaDecoracion.appendChild(li);
            });
            
            // Decoración comprada
            hermana.habitacion.decoracion.forEach(itemId => {
                const item = this.tiendaDecoracion.items.find(i => i.id === itemId);
                if (item) {
                    const li = document.createElement('li');
                    li.textContent = `⭐ ${item.nombre}`;
                    listaDecoracion.appendChild(li);
                }
            });
        }
        
        // Actualizar tienda de decoración
        this.actualizarTiendaDecoracion(hermanaId);
    },
    
    // Actualizar tienda de decoración
    actualizarTiendaDecoracion: function(hermanaId) {
        const hermana = this.hermanas.find(h => h.id === hermanaId);
        if (!hermana) return;
        
        const contenedorTienda = document.getElementById('tienda-decoracion');
        if (!contenedorTienda) return;
        
        contenedorTienda.innerHTML = '';
        
        this.tiendaDecoracion.items.forEach(item => {
            const yaTiene = hermana.habitacion.decoracion.includes(item.id);
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-tienda';
            if (yaTiene) itemDiv.classList.add('comprado');
            
            itemDiv.innerHTML = `
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <p class="item-tipo">${item.tipo.replace(/_/g, ' ')}</p>
                    <p class="item-comodidad">+${item.comodidad} comodidad</p>
                </div>
                <div class="item-precio">
                    <span class="precio">${item.precio} S/.</span>
                    <button class="boton-comprar" ${yaTiene ? 'disabled' : ''} 
                            onclick="comprarDecoracion('${item.id}', '${hermanaId}')">
                        ${yaTiene ? '✅ Comprado' : '🛒 Comprar'}
                    </button>
                </div>
            `;
            
            contenedorTienda.appendChild(itemDiv);
        });
    }
};

// ============================================================================
// FUNCIONES GLOBALES DEL RPG - MODIFICADAS PARA QUINTILLIZAS
// ============================================================================

function iniciarRPGQuintillizas() {
    // Mostrar pantalla de selección primero
    cambiarPantalla('pantalla-seleccion-novia');
    actualizarPantallaSeleccion();
}

function actualizarPantallaSeleccion() {
    if (!rpgQuintillizas.hermanas) return;
    
    const contenedor = document.getElementById('contenedor-hermanas');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    rpgQuintillizas.hermanas.forEach(hermana => {
        const hermanaDiv = document.createElement('div');
        hermanaDiv.id = `hermana-${hermana.id}`;
        hermanaDiv.className = 'hermana-card';
        if (hermana.id === rpgQuintillizas.noviaActiva) {
            hermanaDiv.classList.add('activa');
        }
        
        hermanaDiv.onclick = () => seleccionarNovia(hermana.id);
        
        hermanaDiv.innerHTML = `
            <div class="hermana-imagen" style="background-color: ${hermana.color}20; border-left: 4px solid ${hermana.color}">
                <img src="${hermana.imagen}" alt="${hermana.nombre}" loading="lazy">
            </div>
            <div class="hermana-info">
                <h3 class="nombre-hermana">${hermana.nombre}</h3>
                <p class="descripcion-hermana">${hermana.descripcion}</p>
                <div class="estadisticas-hermana">
                    <span class="nivel-hermana">Nivel ${hermana.nivel}</span>
                    <span class="afecto-hermana">Afecto: ${hermana.afecto}%</span>
                </div>
                <div class="personalidad-hermana">
                    <small>${hermana.personalidad}</small>
                </div>
            </div>
            ${hermana.id === rpgQuintillizas.noviaActiva ? '<div class="badge-activa">ACTIVA</div>' : ''}
        `;
        
        contenedor.appendChild(hermanaDiv);
    });
}

function seleccionarNovia(hermanaId) {
    if (rpgQuintillizas.cambiarNoviaActiva(hermanaId)) {
        // Ir a la pantalla principal del RPG
        cambiarPantalla('pantalla-rpg-quintillizas');
        actualizarInterfazRPG();
    }
}

function actualizarInterfazRPG() {
    // Actualizar interfaz RPG
    if (typeof rpgQuintillizas !== 'undefined' && rpgQuintillizas.actualizarInterfazRPG) {
        rpgQuintillizas.actualizarInterfazRPG();
    }
}

// Función para regalar item a la novia activa
function regalarItem(tipo) {
    if (typeof rpgQuintillizas !== 'undefined' && rpgQuintillizas.regalarItem) {
        rpgQuintillizas.regalarItem(tipo);
    }
}

// Función para comprar condones
function comprarCondones() {
    if (typeof rpgQuintillizas !== 'undefined' && rpgQuintillizas.comprarCondones) {
        rpgQuintillizas.comprarCondones();
    }
}

// Función para comprar decoración
function comprarDecoracion(itemId, hermanaId) {
    if (typeof rpgQuintillizas !== 'undefined' && rpgQuintillizas.comprarDecoracion) {
        rpgQuintillizas.comprarDecoracion(itemId, hermanaId);
    }
}

// Función global para mostrar mensaje
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

// Función para cerrar video de regalo
function cerrarVideoRegalo() {
    document.getElementById('pantalla-video-regalo').classList.remove('activa');
    document.getElementById('pantalla-rpg-quintillizas').classList.add('activa');
    actualizarInterfazRPG();
}

// Función para cerrar video íntimo
function cerrarVideoIntimo() {
    document.getElementById('pantalla-video-intimo').classList.remove('activa');
    document.getElementById('pantalla-rpg-quintillizas').classList.add('activa');
    actualizarInterfazRPG();
}

// Función para ver habitación
function verHabitacion() {
    cambiarPantalla('pantalla-habitacion');
    if (typeof rpgQuintillizas !== 'undefined') {
        const novia = rpgQuintillizas.obtenerNoviaActiva();
        if (novia) {
            rpgQuintillizas.actualizarInfoHabitacion(novia.id);
        }
    }
}

// Función para volver al RPG desde habitación
function volverAlRPG() {
    cambiarPantalla('pantalla-rpg-quintillizas');
    actualizarInterfazRPG();
}
