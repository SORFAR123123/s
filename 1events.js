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
