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
        'sub3_1': 'imagenes/sub3_1.jpg',
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
        'sub5_4': 'imagenes/sub5_4.jpg',
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
        titulo: "¡Excelente Trabajo! ⭐",
        url: "Belinda.mp4",
        duracion: "15s"
    },
    {
        id: 3,
        titulo: "¡Eres Increíble! 💪",
        url: "Belinda.mp4",
        duracion: "12s"
    },
    {
        id: 4,
        titulo: "¡Perfecto! 🏆",
        url: "Belinda.mp4",
        duracion: "8s"
    },
    {
        id: 5,
        titulo: "¡Misión Cumplida! 🚀",
        url: "Belinda.mp4",
        duracion: "11s"
    }
];

// ============================================================================
// SISTEMA DE EVENTOS DIARIOS - MODIFICADO CON VIDEO
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
                video: "NinoIchika.mp4"
            },
            fallo: {
                tipo: "video", 
                titulo: "Necesitas más práctica 📚",
                mensaje: "Mañana será otro día para mejorar",
                video: "videos/practica.mp4"
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
                video: "videos/velocidad.mp4"
            },
            fallo: {
                tipo: "video",
                titulo: "La velocidad lleva tiempo 🕒",
                mensaje: "Sigue practicando para mejorar",
                video: "videos/calma.mp4"
            },
            video: "videos/velocidad.mp4"
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
                video: "videos/memoria.mp4"
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
                video: "videos/estrella.mp4"
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
                video: "videos/combo.mp4"
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
        completado: false,
        fallado: false,
        progreso: 0,
        mazosCompletadosHoy: 0,
        ultimaFecha: null
    },
    
    // Inicializar sistema de eventos
    inicializar: function() {
        console.log("🔧 Inicializando sistema de eventos diarios...");
        const hoy = this.obtenerFechaHoy();
        const datosGuardados = this.cargarDatos();
        
        console.log("📅 Fecha hoy:", hoy);
        console.log("💾 Datos guardados:", datosGuardados);
        
        // Verificar si es un nuevo día o no hay datos
        if (!datosGuardados || datosGuardados.ultimaFecha !== hoy) {
            console.log("🆕 Nuevo día - Reiniciando evento diario");
            this.reiniciarEventoDiario();
        } else {
            console.log("📋 Cargando evento existente");
            this.estado = datosGuardados;
        }
        
        // Mostrar evento diario si no se ha completado ni fallado
        if (!this.estado.completado && !this.estado.fallado && this.estado.eventoActual) {
            console.log("🎁 Mostrando evento diario");
            setTimeout(() => {
                this.mostrarEventoDiario();
            }, 500);
        } else {
            console.log("❌ Evento no mostrado - Razón:", {
                completado: this.estado.completado,
                fallado: this.estado.fallado,
                tieneEvento: !!this.estado.eventoActual
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
            completado: false,
            fallado: false,
            progreso: 0,
            mazosCompletadosHoy: 0,
            ultimaFecha: this.obtenerFechaHoy()
        };
        
        console.log("🎯 Nuevo evento:", eventoAleatorio.nombre);
        this.guardarDatos();
    },
    
    // Mostrar pantalla de evento diario - MODIFICADO CON VIDEO
    mostrarEventoDiario: function() {
        if (!this.estado.eventoActual) {
            console.log("❌ No hay evento actual para mostrar");
            return;
        }
        
        console.log("📱 Creando pantalla de evento diario con video");
        
        // Ocultar pantalla de inicio primero
        document.getElementById('pantalla-inicio').classList.remove('activa');
        
        // Crear y mostrar la pantalla de evento diario con video
        const eventoHTML = `
            <div id="pantalla-evento-diario" class="pantalla activa">
                <div class="contenedor">
                    <div class="evento-diario-container">
                        <div class="evento-header">
                            <h1>🎁 Evento Diario</h1>
                            <p class="evento-fecha">${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        
                        <div class="evento-content">
                            <div class="video-container-evento">
                                <video id="video-evento-presentacion" autoplay muted loop class="video-evento">
                                    <source src="${this.estado.eventoActual.video}" type="video/mp4">
                                    Tu navegador no soporta el elemento video.
                                </video>
                                <div class="video-overlay"></div>
                            </div>
                            
                            <div class="evento-info">
                                <h2 class="evento-nombre">${this.estado.eventoActual.nombre}</h2>
                                <p class="evento-descripcion">${this.estado.eventoActual.descripcion}</p>
                                
                                <div class="evento-progreso">
                                    <div class="progreso-texto">
                                        Progreso: <span id="contador-progreso">${this.estado.progreso}</span>/${this.estado.eventoActual.objetivo}
                                    </div>
                                    <div class="barra-progreso-evento">
                                        <div id="barra-progreso-fill" class="barra-progreso-fill-evento" 
                                             style="width: ${(this.estado.progreso / this.estado.eventoActual.objetivo) * 100}%"></div>
                                    </div>
                                </div>
                                
                                <div class="evento-recompensa">
                                    <h3>🎯 Recompensa:</h3>
                                    <p>${this.estado.eventoActual.recompensa.mensaje}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="evento-actions">
                            <button class="boton-principal" onclick="eventosDiarios.aceptarEvento()">
                                ¡Aceptar Reto! 🚀
                            </button>
                            <button class="boton-secundario" onclick="eventosDiarios.omitirEvento()">
                                Omitir por hoy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Agregar la pantalla al DOM si no existe
        if (!document.getElementById('pantalla-evento-diario')) {
            document.body.insertAdjacentHTML('afterbegin', eventoHTML);
            console.log("✅ Pantalla de evento diario con video creada");
            
            // Configurar el video de presentación
            const videoElement = document.getElementById('video-evento-presentacion');
            if (videoElement) {
                videoElement.muted = true; // Mute para autoplay
                videoElement.play().catch(e => {
                    console.log("Autoplay bloqueado para video de evento");
                });
            }
        } else {
            // Si ya existe, actualizarla
            document.getElementById('pantalla-evento-diario').outerHTML = eventoHTML;
            console.log("✅ Pantalla de evento diario con video actualizada");
        }
    },
    
    // Aceptar el evento diario
    aceptarEvento: function() {
        console.log("✅ Evento diario aceptado");
        this.ocultarPantallaEvento();
        // El evento continúa en segundo plano
    },
    
    // Omitir el evento diario (considerado como fallo)
    omitirEvento: function() {
        console.log("❌ Evento diario omitido");
        this.estado.fallado = true;
        this.guardarDatos();
        this.ocultarPantallaEvento();
        
        // Mostrar mensaje de confirmación
        setTimeout(() => {
            alert("Evento omitido para hoy. ¡Vuelve mañana para un nuevo reto! 📅");
        }, 300);
    },
    
    // Ocultar pantalla de evento
    ocultarPantallaEvento: function() {
        const pantallaEvento = document.getElementById('pantalla-evento-diario');
        if (pantallaEvento) {
            pantallaEvento.remove();
        }
        // Mostrar pantalla de inicio
        document.getElementById('pantalla-inicio').classList.add('activa');
    },
    
    // Registrar mazo completado
    registrarMazoCompletado: function() {
        if (!this.estado.eventoActual || this.estado.completado || this.estado.fallado) {
            console.log("📝 Mazo completado pero evento no activo");
            return;
        }
        
        console.log("📝 Registrando mazo completado para evento diario");
        
        this.estado.mazosCompletadosHoy++;
        this.estado.progreso++;
        
        console.log("📊 Progreso actual:", this.estado.progreso, "/", this.estado.eventoActual.objetivo);
        
        // Actualizar contador visual si está visible
        const contadorProgreso = document.getElementById('contador-progreso');
        const barraProgreso = document.getElementById('barra-progreso-fill');
        
        if (contadorProgreso) {
            contadorProgreso.textContent = this.estado.progreso;
        }
        if (barraProgreso) {
            barraProgreso.style.width = `${(this.estado.progreso / this.estado.eventoActual.objetivo) * 100}%`;
        }
        
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
        
        // Mostrar video de recompensa inmediatamente
        this.mostrarVideoRecompensa();
    },
    
    // Mostrar video de recompensa
    mostrarVideoRecompensa: function() {
        const evento = this.estado.eventoActual;
        console.log("🎬 Mostrando video de recompensa:", evento.recompensa.titulo);
        
        // Crear pantalla de video de recompensa
        const videoHTML = `
            <div id="pantalla-video-evento" class="pantalla activa">
                <div class="contenedor">
                    <div class="contenido-video">
                        <h1>${evento.recompensa.titulo}</h1>
                        <p class="subtitulo-video">${evento.recompensa.mensaje}</p>
                        
                        <div class="video-container">
                            <video id="video-evento-recompensa" controls autoplay class="video-recompensa">
                                <source src="${evento.recompensa.video}" type="video/mp4">
                                Tu navegador no soporta el elemento video.
                            </video>
                        </div>
                        
                        <div class="info-video">
                            <p class="mensaje-video">¡Felicidades por completar el evento diario! 🎉</p>
                        </div>
                        
                        <button class="boton-principal" onclick="eventosDiarios.cerrarVideoRecompensa()">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        document.body.insertAdjacentHTML('beforeend', videoHTML);
        
        // Intentar reproducir video automáticamente
        const videoElement = document.getElementById('video-evento-recompensa');
        if (videoElement) {
            videoElement.muted = true; // Mute para evitar restricciones de autoplay
            videoElement.play().catch(e => {
                console.log("Autoplay bloqueado, el usuario debe iniciar manualmente");
            });
            
            videoElement.onended = function() {
                document.querySelector('#pantalla-video-evento .boton-principal').style.display = 'block';
            };
        }
    },
    
    // Mostrar video de fallo (se llama al día siguiente si falló)
    mostrarVideoFallo: function() {
        const evento = this.estado.eventoActual;
        console.log("📉 Mostrando video de fallo");

        const videoHTML = `
            <div id="pantalla-video-fallo" class="pantalla activa">
                <div class="contenedor">
                    <div class="contenido-video">
                        <h1>${evento.fallo.titulo}</h1>
                        <p class="subtitulo-video">${evento.fallo.mensaje}</p>
                        
                        <div class="video-container">
                            <video id="video-evento-fallo" controls autoplay class="video-recompensa">
                                <source src="${evento.fallo.video}" type="video/mp4">
                                Tu navegador no soporta el elemento video.
                            </video>
                        </div>
                        
                        <div class="info-video">
                            <p class="mensaje-video">¡Hoy es un nuevo día para intentarlo! 💪</p>
                        </div>
                        
                        <button class="boton-principal" onclick="eventosDiarios.cerrarVideoFallo()">
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.classList.remove('activa');
        });
        
        document.body.insertAdjacentHTML('beforeend', videoHTML);
        
        const videoElement = document.getElementById('video-evento-fallo');
        if (videoElement) {
            videoElement.muted = true;
            videoElement.play().catch(e => {
                console.log("Autoplay bloqueado");
            });
            
            videoElement.onended = function() {
                document.querySelector('#pantalla-video-fallo .boton-principal').style.display = 'block';
            };
        }
    },
    
    // Cerrar video de recompensa
    cerrarVideoRecompensa: function() {
        const pantallaVideo = document.getElementById('pantalla-video-evento');
        if (pantallaVideo) {
            pantallaVideo.remove();
        }
        cambiarPantalla('pantalla-inicio');
    },
    
    // Cerrar video de fallo
    cerrarVideoFallo: function() {
        const pantallaVideo = document.getElementById('pantalla-video-fallo');
        if (pantallaVideo) {
            pantallaVideo.remove();
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
// SISTEMA RPG DE NOVIA
// ============================================================================

const rpgNovia = {
    // Estado de la relación
    estado: {
        nombreNovia: "Sakura",
        nivelRelacion: 1,
        experiencia: 0,
        afinidad: 50, // 0-100
        estadoAnimo: "feliz",
        energia: 100,
        ultimaVisita: null,
        conversacionesDesbloqueadas: [],
        escenasDesbloqueadas: []
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
    
    // Sistema +18
    contenidoAdulto: {
        desbloqueado: false,
        escenasDisponibles: [
            { id: "beso", nombre: "Beso Apasionado", costoCondones: 1, afinidadRequerida: 30 },
            { id: "caricias", nombre: "Carícias Íntimas", costoCondones: 1, afinidadRequerida: 50 },
            { id: "intimidad1", nombre: "Primera Noche", costoCondones: 1, afinidadRequerida: 70 },
            { id: "intimidad2", nombre: "Noche de Pasión", costoCondones: 2, afinidadRequerida: 85 }
        ],
        escenasCompletadas: []
    },
    
    // Conversaciones y diálogos
    conversaciones: {
        saludos: [
            "¡Hola mi amor! 💕 ¿Cómo estás?",
            "¡Qué alegría verte! 😊",
            "Te extrañaba tanto... 🥰",
            "¡Mi vida ha llegado! 💖"
        ],
        conversacionesNormales: [
            { pregunta: "¿Qué has hecho hoy?", respuestas: ["Estudié mucho para ti 💪", "Pensé en ti todo el día 😘", "Practiqué japonés para impresionarte 📚"] },
            { pregunta: "¿Te gustaría salir?", respuestas: ["¡Claro! Donde tú quieras 💃", "Solo contigo iría a cualquier lugar 🌸", "Me encanta pasar tiempo contigo 🎮"] },
            { pregunta: "¿Qué te parece mi progreso?", respuestas: ["Estoy muy orgullosa de ti 🏆", "Eres mi campeón favorito ⭐", "Cada día te superas más 💫"] }
        ],
        conversacionesIntimas: [
            { pregunta: "¿Qué sientes por mí?", respuestas: ["Eres el amor de mi vida 💞", "Nunca había sentido esto por nadie 🌹", "Quiero estar contigo para siempre 💍"] },
            { pregunta: "¿Te gusta cuando estamos cerca?", respuestas: ["Tu cercania me vuelve loca 🔥", "Siento mariposas en el estómago 🦋", "Es lo que más espero del día 🌙"] }
        ]
    }
};

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
    // ... (el resto de la estructura se mantiene igual)
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
    
    // Generar 5 mazos específicos para cada subcontenedor
    for (let i = 1; i <= 5; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nombre: `Mazo ${i}`,
            palabras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

// Función para generar palabras específicas para cada mazo
function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    // Base de datos de palabras organizadas por subcontenedor y mazo
    const palabrasDatabase = {
        // THE LAST SUMMER 1
        'sub1_1': {
    1: [
        { japones: '今朝', lectura: 'kesa', opciones: ['Esta mañana', 'Esta tarde', 'Anoche', 'Ayer'], respuesta: 0 },
        { japones: '処', lectura: 'tokoro', opciones: ['Lugar', 'Tiempo', 'Persona', 'Cosa'], respuesta: 0 },
        { japones: '出掛け', lectura: 'dekake', opciones: ['Salir', 'Entrar', 'Quedarse', 'Volver'], respuesta: 0 },
        { japones: '女将', lectura: 'okami', opciones: ['Dueña', 'Mesera', 'Cliente', 'Cocinera'], respuesta: 0 },
        { japones: '寂しい', lectura: 'sabishii', opciones: ['Solitario', 'Alegre', 'Ocupado', 'Ruidoso'], respuesta: 0 },
        { japones: '憩い', lectura: 'ikoi', opciones: ['Descanso', 'Trabajo', 'Ejercicio', 'Estudio'], respuesta: 0 },
        { japones: '手伝い', lectura: 'tetsudai', opciones: ['Ayuda', 'Obstáculo', 'Problema', 'Solución'], respuesta: 0 },
        { japones: '撮る', lectura: 'toru', opciones: ['Tomar foto', 'Escribir', 'Leer', 'Escuchar'], respuesta: 0 },
        { japones: '見送る', lectura: 'miokuru', opciones: ['Despedir', 'Recibir', 'Ignorar', 'Saludar'], respuesta: 0 },
        { japones: '限る', lectura: 'kagiru', opciones: ['Limitar', 'Ampliar', 'Permitir', 'Prohibir'], respuesta: 0 }
    ],
    2: [
        { japones: '吐息', lectura: 'toiki', opciones: ['Suspiro', 'Risa', 'Grito', 'Llanto'], respuesta: 0 },
        { japones: '応援', lectura: 'ouen', opciones: ['Apoyo', 'Crítica', 'Indiferencia', 'Oposición'], respuesta: 0 },
        { japones: '文句', lectura: 'monku', opciones: ['Queja', 'Elogio', 'Sugerencia', 'Pregunta'], respuesta: 0 },
        { japones: '構う', lectura: 'kamau', opciones: ['Preocuparse', 'Ignorar', 'Aceptar', 'Rechazar'], respuesta: 0 },
        { japones: '残り香', lectura: 'nokorika', opciones: ['Aroma residual', 'Sonido', 'Imagen', 'Sabor'], respuesta: 0 },
        { japones: '減る', lectura: 'heru', opciones: ['Disminuir', 'Aumentar', 'Mantener', 'Cambiar'], respuesta: 0 },
        { japones: '誰彼', lectura: 'dareka', opciones: ['Alguien', 'Nadie', 'Todos', 'Algo'], respuesta: 0 },
        { japones: '過激', lectura: 'kageki', opciones: ['Extremo', 'Moderado', 'Suave', 'Normal'], respuesta: 0 },
        { japones: '開き直る', lectura: 'hirakinarou', opciones: ['Cambiar de actitud', 'Mantenerse', 'Rendirse', 'Avanzar'], respuesta: 0 },
        { japones: '関係ない', lectura: 'kankeinai', opciones: ['No relacionado', 'Importante', 'Relevante', 'Conectado'], respuesta: 0 }
    ],
    3: [
        { japones: '刺激', lectura: 'shigeki', opciones: ['Estímulo', 'Calma', 'Aburrimiento', 'Paz'], respuesta: 0 },
        { japones: '否定', lectura: 'hitei', opciones: ['Negación', 'Afirmación', 'Duda', 'Aceptación'], respuesta: 0 },
        { japones: '宝の持ち腐れ', lectura: 'takarano mochiguse', opciones: ['Talento desperdiciado', 'Tesoro', 'Pobreza', 'Generosidad'], respuesta: 0 },
        { japones: '心配', lectura: 'shinpai', opciones: ['Preocupación', 'Tranquilidad', 'Confianza', 'Seguridad'], respuesta: 0 },
        { japones: '性欲', lectura: 'seiyoku', opciones: ['Deseo sexual', 'Hambre', 'Sed', 'Cansancio'], respuesta: 0 },
        { japones: '機会', lectura: 'kikai', opciones: ['Oportunidad', 'Peligro', 'Problema', 'Obstáculo'], respuesta: 0 },
        { japones: '活かす', lectura: 'ikasu', opciones: ['Aprovechar', 'Desperdiciar', 'Ignorar', 'Rechazar'], respuesta: 0 },
        { japones: '経験不足', lectura: 'keiken busoku', opciones: ['Falta de experiencia', 'Mucha experiencia', 'Talento', 'Habilidad'], respuesta: 0 },
        { japones: '言い寄る', lectura: 'iiyoru', opciones: ['Acercarse a alguien', 'Alejarse', 'Ignorar', 'Evitar'], respuesta: 0 },
        { japones: '飽きる', lectura: 'akiru', opciones: ['Cansarse', 'Entusiasmarse', 'Continuar', 'Empezar'], respuesta: 0 }
    ],
    4: [
        { japones: '合格', lectura: 'goukaku', opciones: ['Aprobar', 'Reprobar', 'Intentar', 'Estudiar'], respuesta: 0 },
        { japones: '圧し潰す', lectura: 'asshitsubusu', opciones: ['Aplastar', 'Levantar', 'Construir', 'Reparar'], respuesta: 0 },
        { japones: '密着', lectura: 'micchaku', opciones: ['Pegado', 'Separado', 'Distante', 'Aislado'], respuesta: 0 },
        { japones: '届く', lectura: 'todoku', opciones: ['Llegar', 'Partir', 'Perderse', 'Desaparecer'], respuesta: 0 },
        { japones: '巻きつく', lectura: 'makitsuku', opciones: ['Enrollarse', 'Desenrollar', 'Cortar', 'Pegar'], respuesta: 0 },
        { japones: '惜しい', lectura: 'oshii', opciones: ['Lamentable', 'Afortunado', 'Normal', 'Extraño'], respuesta: 0 },
        { japones: '拒否権', lectura: 'kyohiken', opciones: ['Derecho a veto', 'Permiso', 'Aprobación', 'Acuerdo'], respuesta: 0 },
        { japones: '経験', lectura: 'keiken', opciones: ['Experiencia', 'Ignorancia', 'Teoría', 'Estudio'], respuesta: 0 },
        { japones: '蒸す', lectura: 'musu', opciones: ['Humedecer', 'Secar', 'Calentar', 'Enfriar'], respuesta: 0 }
    ],
    5: [
        { japones: '大体', lectura: 'daitai', opciones: ['Aproximadamente', 'Exactamente', 'Completamente', 'Parcialmente'], respuesta: 0 },
        { japones: '起きる', lectura: 'okiru', opciones: ['Despertar', 'Dormir', 'Soñar', 'Descansar'], respuesta: 0 },
    ]
},
        'sub1_2': {
            1: [
                { japones: '学校', lectura: 'gakkou', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], respuesta: 0 },
                { japones: '勉強', lectura: 'benkyou', opciones: ['Estudio', 'Juego', 'Descanso', 'Trabajo'], respuesta: 0 },
                { japones: '教室', lectura: 'kyoushitsu', opciones: ['Salón de clases', 'Oficina', 'Cocina', 'Baño'], respuesta: 0 },
                { japones: '先生', lectura: 'sensei', opciones: ['Profesor', 'Estudiante', 'Director', 'Padre'], respuesta: 0 },
                { japones: '生徒', lectura: 'seito', opciones: ['Estudiante', 'Profesor', 'Padre', 'Vecino'], respuesta: 0 },
                { japones: '試験', lectura: 'shiken', opciones: ['Examen', 'Tarea', 'Proyecto', 'Presentación'], respuesta: 0 },
                { japones: '宿題', lectura: 'shukudai', opciones: ['Tarea', 'Examen', 'Proyecto', 'Investigación'], respuesta: 0 },
                { japones: '卒業', lectura: 'sotsugyou', opciones: ['Graduación', 'Ingreso', 'Transferencia', 'Abandono'], respuesta: 0 },
                { japones: '入学', lectura: 'nyuugaku', opciones: ['Ingreso', 'Graduación', 'Transferencia', 'Abandono'], respuesta: 0 },
                { japones: 'クラス', lectura: 'kurasu', opciones: ['Clase', 'Escuela', 'Grupo', 'Equipo'], respuesta: 0 }
            ],
            2: [
                { japones: '部活', lectura: 'bukatsu', opciones: ['Club escolar', 'Trabajo', 'Estudio', 'Descanso'], respuesta: 0 },
                { japones: '文化祭', lectura: 'bunkasai', opciones: ['Festival cultural', 'Deporte', 'Examen', 'Vacaciones'], respuesta: 0 },
                { japones: '運動会', lectura: 'undoukai', opciones: ['Día deportivo', 'Ceremonia', 'Examen', 'Fiesta'], respuesta: 0 },
                { japones: '修学旅行', lectura: 'shuugakuryokou', opciones: ['Viaje escolar', 'Vacaciones', 'Trabajo', 'Estudio'], respuesta: 0 },
                { japones: '夏休み', lectura: 'natsuyasumi', opciones: ['Vacaciones de verano', 'Vacaciones de invierno', 'Fin de semana', 'Feriado'], respuesta: 0 },
                { japones: '冬休み', lectura: 'fuyuyasumi', opciones: ['Vacaciones de invierno', 'Vacaciones de verano', 'Fin de semana', 'Feriado'], respuesta: 0 },
                { japones: '春休み', lectura: 'haruyasumi', opciones: ['Vacaciones de primavera', 'Vacaciones de verano', 'Fin de semana', 'Feriado'], respuesta: 0 },
                { japones: '新学期', lectura: 'shingakki', opciones: ['Nuevo semestre', 'Vacaciones', 'Exámenes', 'Graduación'], respuesta: 0 },
                { japones: '終業式', lectura: 'shuugyoushiki', opciones: ['Ceremonia de fin de clases', 'Ceremonia de inicio', 'Graduación', 'Ingreso'], respuesta: 0 },
                { japones: '始業式', lectura: 'shigyoushiki', opciones: ['Ceremonia de inicio de clases', 'Ceremonia de fin', 'Graduación', 'Ingreso'], respuesta: 0 }
            ],
            // ... continuar con los otros mazos para sub1_2 y otros subcontenedores
            3: [
                { japones: '美術', lectura: 'bijutsu', opciones: ['Arte', 'Ciencia', 'Matemáticas', 'Historia'], respuesta: 0 },
                { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Arte', 'Deporte', 'Ciencia'], respuesta: 0 },
                { japones: '体育', lectura: 'taiiku', opciones: ['Educación física', 'Matemáticas', 'Historia', 'Arte'], respuesta: 0 },
                { japones: '理科', lectura: 'rika', opciones: ['Ciencia', 'Matemáticas', 'Historia', 'Arte'], respuesta: 0 },
                { japones: '社会', lectura: 'shakai', opciones: ['Estudios sociales', 'Matemáticas', 'Ciencia', 'Arte'], respuesta: 0 },
                { japones: '国語', lectura: 'kokugo', opciones: ['Lengua japonesa', 'Matemáticas', 'Ciencia', 'Historia'], respuesta: 0 },
                { japones: '数学', lectura: 'suugaku', opciones: ['Matemáticas', 'Ciencia', 'Historia', 'Arte'], respuesta: 0 },
                { japones: '英語', lectura: 'eigo', opciones: ['Inglés', 'Japonés', 'Español', 'Francés'], respuesta: 0 },
                { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Geografía', 'Ciencia', 'Matemáticas'], respuesta: 0 },
                { japones: '地理', lectura: 'chiri', opciones: ['Geografía', 'Historia', 'Ciencia', 'Matemáticas'], respuesta: 0 }
            ],
            4: [
                { japones: '図書館', lectura: 'toshokan', opciones: ['Biblioteca', 'Laboratorio', 'Gimnasio', 'Oficina'], respuesta: 0 },
                { japones: '実験', lectura: 'jikken', opciones: ['Experimento', 'Estudio', 'Investigación', 'Observación'], respuesta: 0 },
                { japones: '研究', lectura: 'kenkyuu', opciones: ['Investigación', 'Estudio', 'Experimento', 'Observación'], respuesta: 0 },
                { japones: '発表', lectura: 'happyou', opciones: ['Presentación', 'Examen', 'Tarea', 'Proyecto'], respuesta: 0 },
                { japones: '討論', lectura: 'touron', opciones: ['Debate', 'Conversación', 'Charla', 'Monólogo'], respuesta: 0 },
                { japones: '質問', lectura: 'shitsumon', opciones: ['Pregunta', 'Respuesta', 'Explicación', 'Afirmación'], respuesta: 0 },
                { japones: '解答', lectura: 'kaitou', opciones: ['Respuesta', 'Pregunta', 'Problema', 'Solución'], respuesta: 0 },
                { japones: '問題', lectura: 'mondai', opciones: ['Problema', 'Solución', 'Pregunta', 'Respuesta'], respuesta: 0 },
                { japones: '理解', lectura: 'rikai', opciones: ['Comprensión', 'Confusión', 'Duda', 'Ignorancia'], respuesta: 0 },
                { japones: '知識', lectura: 'chishiki', opciones: ['Conocimiento', 'Ignorancia', 'Duda', 'Confusión'], respuesta: 0 }
            ],
            5: [
                { japones: '才能', lectura: 'sainou', opciones: ['Talento', 'Esfuerzo', 'Suerte', 'Oportunidad'], respuesta: 0 },
                { japones: '創造', lectura: 'souzou', opciones: ['Creatividad', 'Imitación', 'Copia', 'Repetición'], respuesta: 0 },
                { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Descubrimiento', 'Creación', 'Innovación'], respuesta: 0 },
                { japones: '発見', lectura: 'hakken', opciones: ['Descubrimiento', 'Invención', 'Creación', 'Innovación'], respuesta: 0 },
                { japones: '分析', lectura: 'bunseki', opciones: ['Análisis', 'Síntesis', 'Resumen', 'Conclusión'], respuesta: 0 },
                { japones: '理論', lectura: 'riron', opciones: ['Teoría', 'Práctica', 'Hipótesis', 'Conclusión'], respuesta: 0 },
                { japones: '実践', lectura: 'jissen', opciones: ['Práctica', 'Teoría', 'Estudio', 'Investigación'], respuesta: 0 },
                { japones: '応用', lectura: 'ouyou', opciones: ['Aplicación', 'Teoría', 'Práctica', 'Estudio'], respuesta: 0 },
                { japones: '基礎', lectura: 'kiso', opciones: ['Base', 'Avanzado', 'Complejo', 'Difícil'], respuesta: 0 },
                { japones: '応用', lectura: 'ouyou', opciones: ['Avanzado', 'Básico', 'Simple', 'Fácil'], respuesta: 0 }
            ]
        },
        'sub1_3': {
            1: [
                { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Amigos', 'Vecinos', 'Compañeros'], respuesta: 0 },
                { japones: '父', lectura: 'chichi', opciones: ['Padre', 'Madre', 'Hermano', 'Hermana'], respuesta: 0 },
                { japones: '母', lectura: 'haha', opciones: ['Madre', 'Padre', 'Hermano', 'Hermana'], respuesta: 0 },
                { japones: '兄弟', lectura: 'kyoudai', opciones: ['Hermanos', 'Padres', 'Abuelos', 'Tíos'], respuesta: 0 },
                { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Primos', 'Tíos'], respuesta: 0 },
                { japones: '祖父', lectura: 'sofu', opciones: ['Abuelo', 'Abuela', 'Padre', 'Madre'], respuesta: 0 },
                { japones: '祖母', lectura: 'sobo', opciones: ['Abuela', 'Abuelo', 'Madre', 'Padre'], respuesta: 0 },
                { japones: '親戚', lectura: 'shinseki', opciones: ['Parientes', 'Amigos', 'Vecinos', 'Conocidos'], respuesta: 0 },
                { japones: '家庭', lectura: 'katei', opciones: ['Hogar', 'Escuela', 'Trabajo', 'Comunidad'], respuesta: 0 },
                { japones: '愛情', lectura: 'aijou', opciones: ['Amor familiar', 'Amistad', 'Respeto', 'Admiración'], respuesta: 0 }
            ],
            // ... y así continuar para los demás mazos
            2: [
                { japones: '家', lectura: 'ie', opciones: ['Casa', 'Apartamento', 'Edificio', 'Escuela'], respuesta: 0 },
                { japones: '庭', lectura: 'niwa', opciones: ['Jardín', 'Parque', 'Bosque', 'Campo'], respuesta: 0 },
                { japones: '台所', lectura: 'daidokoro', opciones: ['Cocina', 'Baño', 'Sala', 'Dormitorio'], respuesta: 0 },
                { japones: '寝室', lectura: 'shinshitsu', opciones: ['Dormitorio', 'Sala', 'Cocina', 'Baño'], respuesta: 0 },
                { japones: '浴室', lectura: 'yokushitsu', opciones: ['Baño', 'Cocina', 'Sala', 'Dormitorio'], respuesta: 0 },
                { japones: 'リビング', lectura: 'ribingu', opciones: ['Sala de estar', 'Dormitorio', 'Cocina', 'Baño'], respuesta: 0 },
                { japones: '玄関', lectura: 'genkan', opciones: ['Entrada', 'Salida', 'Pasillo', 'Ventana'], respuesta: 0 },
                { japones: '屋根', lectura: 'yane', opciones: ['Techo', 'Piso', 'Pared', 'Ventana'], respuesta: 0 },
                { japones: '窓', lectura: 'mado', opciones: ['Ventana', 'Puerta', 'Pared', 'Techo'], respuesta: 0 },
                { japones: 'ドア', lectura: 'doa', opciones: ['Puerta', 'Ventana', 'Pared', 'Techo'], respuesta: 0 }
            ],
            3: [
                { japones: '朝食', lectura: 'choushoku', opciones: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], respuesta: 0 },
                { japones: '昼食', lectura: 'chuushoku', opciones: ['Almuerzo', 'Desayuno', 'Cena', 'Merienda'], respuesta: 0 },
                { japones: '夕食', lectura: 'yuushoku', opciones: ['Cena', 'Desayuno', 'Almuerzo', 'Merienda'], respuesta: 0 },
                { japones: '食事', lectura: 'shokuji', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], respuesta: 0 },
                { japones: '料理', lectura: 'ryouri', opciones: ['Cocina', 'Comida', 'Bebida', 'Postre'], respuesta: 0 },
                { japones: '食材', lectura: 'shokuzai', opciones: ['Ingredientes', 'Utensilios', 'Recetas', 'Platos'], respuesta: 0 },
                { japones: '味', lectura: 'aji', opciones: ['Sabor', 'Olor', 'Texto', 'Apariencia'], respuesta: 0 },
                { japones: '栄養', lectura: 'eiyou', opciones: ['Nutrición', 'Sabor', 'Calorías', 'Vitaminas'], respuesta: 0 },
                { japones: '健康', lectura: 'kenkou', opciones: ['Salud', 'Enfermedad', 'Ejercicio', 'Descanso'], respuesta: 0 },
                { japones: '美味しい', lectura: 'oishii', opciones: ['Delicioso', 'Desagradable', 'Normal', 'Amargo'], respuesta: 0 }
            ],
            4: [
                { japones: '習慣', lectura: 'shuukan', opciones: ['Hábito', 'Costumbre', 'Rutina', 'Tradición'], respuesta: 0 },
                { japones: '日常', lectura: 'nichijou', opciones: ['Vida cotidiana', 'Extraordinario', 'Especial', 'Raro'], respuesta: 0 },
                { japones: '規則', lectura: 'kisoku', opciones: ['Regla', 'Excepción', 'Sugerencia', 'Recomendación'], respuesta: 0 },
                { japones: '時間割', lectura: 'jikanwari', opciones: ['Horario', 'Calendario', 'Agenda', 'Lista'], respuesta: 0 },
                { japones: '予定', lectura: 'yotei', opciones: ['Plan', 'Improvisación', 'Sorpresa', 'Accidente'], respuesta: 0 },
                { japones: '準備', lectura: 'junbi', opciones: ['Preparación', 'Improvisación', 'Descuidar', 'Olvidar'], respuesta: 0 },
                { japones: '整理', lectura: 'seiri', opciones: ['Organización', 'Desorden', 'Confusión', 'Caos'], respuesta: 0 },
                { japones: '掃除', lectura: 'souji', opciones: ['Limpieza', 'Suciedad', 'Desorden', 'Confusión'], respuesta: 0 },
                { japones: '洗濯', lectura: 'sentaku', opciones: ['Lavado', 'Secado', 'Planchado', 'Doblar'], respuesta: 0 },
                { japones: '買い物', lectura: 'kaimono', opciones: ['Compras', 'Ventas', 'Intercambio', 'Regalo'], respuesta: 0 }
            ],
            5: [
                { japones: '伝統', lectura: 'dentou', opciones: ['Tradición', 'Innovación', 'Moda', 'Tendencia'], respuesta: 0 },
                { japones: '文化', lectura: 'bunka', opciones: ['Cultura', 'Naturaleza', 'Tecnología', 'Ciencia'], respuesta: 0 },
                { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Futuro', 'Presente', 'Pasado'], respuesta: 0 },
                { japones: '祭事', lectura: 'saiji', opciones: ['Evento ceremonial', 'Fiesta', 'Reunión', 'Celebración'], respuesta: 0 },
                { japones: '正月', lectura: 'shougatsu', opciones: ['Año Nuevo', 'Navidad', 'Cumpleaños', 'Aniversario'], respuesta: 0 },
                { japones: 'お盆', lectura: 'obon', opciones: ['Festival de los muertos', 'Año Nuevo', 'Navidad', 'Cumpleaños'], respuesta: 0 },
                { japones: '七夕', lectura: 'tanabata', opciones: ['Festival de las estrellas', 'Año Nuevo', 'Navidad', 'Cumpleaños'], respuesta: 0 },
                { japones: 'こどもの日', lectura: 'kodomonohi', opciones: ['Día del niño', 'Día de la madre', 'Día del padre', 'Navidad'], respuesta: 0 },
                { japones: '成人式', lectura: 'seijinshiki', opciones: ['Ceremonia de la mayoría de edad', 'Graduación', 'Boda', 'Funeral'], respuesta: 0 },
                { japones: '敬老の日', lectura: 'keirounohi', opciones: ['Día del respeto a los ancianos', 'Día del niño', 'Día de la madre', 'Navidad'], respuesta: 0 }
 ]
                },

// THE LAST SUMMER 2
'sub2_1': {
    1: [
        { japones: '会話', lectura: 'kaiwa', opciones: ['Conversación', 'Discusión', 'Debate', 'Charla'], respuesta: 0 },
        { japones: '質問', lectura: 'shitsumon', opciones: ['Pregunta', 'Respuesta', 'Explicación', 'Afirmación'], respuesta: 0 },
        { japones: '返事', lectura: 'henji', opciones: ['Respuesta', 'Pregunta', 'Solicitud', 'Propuesta'], respuesta: 0 },
        { japones: '説明', lectura: 'setsumei', opciones: ['Explicación', 'Descripción', 'Interpretación', 'Traducción'], respuesta: 0 },
        { japones: '意見', lectura: 'iken', opciones: ['Opinión', 'Hecho', 'Teoría', 'Hipótesis'], respuesta: 0 },
        { japones: '賛成', lectura: 'sansei', opciones: ['Aprobación', 'Desaprobación', 'Neutralidad', 'Indiferencia'], respuesta: 0 },
        { japones: '反対', lectura: 'hantai', opciones: ['Oposición', 'Apoyo', 'Aceptación', 'Acuerdo'], respuesta: 0 },
        { japones: '同意', lectura: 'doui', opciones: ['Consentimiento', 'Rechazo', 'Duda', 'Indecisión'], respuesta: 0 },
        { japones: '議論', lectura: 'giron', opciones: ['Discusión', 'Conversación', 'Monólogo', 'Diálogo'], respuesta: 0 },
        { japones: '話題', lectura: 'wadai', opciones: ['Tema', 'Subtema', 'Asunto', 'Problema'], respuesta: 0 }
    ],
    2: [
        { japones: '感情', lectura: 'kanjou', opciones: ['Emoción', 'Razón', 'Lógica', 'Pensamiento'], respuesta: 0 },
        { japones: '愛情', lectura: 'aijou', opciones: ['Afecto', 'Odio', 'Indiferencia', 'Respeto'], respuesta: 0 },
        { japones: '喜び', lectura: 'yorokobi', opciones: ['Alegría', 'Tristeza', 'Enojo', 'Miedo'], respuesta: 0 },
        { japones: '悲しみ', lectura: 'kanashimi', opciones: ['Tristeza', 'Alegría', 'Sorpresa', 'Expectativa'], respuesta: 0 },
        { japones: '怒り', lectura: 'ikari', opciones: ['Enojo', 'Calma', 'Paz', 'Serenidad'], respuesta: 0 },
        { japones: '驚き', lectura: 'odoroki', opciones: ['Sorpresa', 'Expectativa', 'Rutina', 'Normalidad'], respuesta: 0 },
        { japones: '期待', lectura: 'kitai', opciones: ['Expectativa', 'Decepción', 'Realidad', 'Presente'], respuesta: 0 },
        { japones: '安心', lectura: 'anshin', opciones: ['Tranquilidad', 'Ansiedad', 'Preocupación', 'Estrés'], respuesta: 0 },
        { japones: '不安', lectura: 'fuan', opciones: ['Inseguridad', 'Confianza', 'Seguridad', 'Certeza'], respuesta: 0 },
        { japones: '興奮', lectura: 'koufun', opciones: ['Excitación', 'Calma', 'Aburrimiento', 'Indiferencia'], respuesta: 0 }
    ],
    3: [
        { japones: '行動', lectura: 'koudou', opciones: ['Acción', 'Pensamiento', 'Palabra', 'Intención'], respuesta: 0 },
        { japones: '選択', lectura: 'sentaku', opciones: ['Elección', 'Obligación', 'Azar', 'Destino'], respuesta: 0 },
        { japones: '決断', lectura: 'ketsudan', opciones: ['Decisión', 'Duda', 'Indecisión', 'Vacilación'], respuesta: 0 },
        { japones: '努力', lectura: 'doryoku', opciones: ['Esfuerzo', 'Flojera', 'Suerte', 'Talento'], respuesta: 0 },
        { japones: '成功', lectura: 'seikou', opciones: ['Éxito', 'Fracaso', 'Intento', 'Esfuerzo'], respuesta: 0 },
        { japones: '失敗', lectura: 'shippai', opciones: ['Fallo', 'Logro', 'Victoria', 'Triunfo'], respuesta: 0 },
        { japones: '挑戦', lectura: 'chousen', opciones: ['Desafío', 'Rendición', 'Evitación', 'Rechazo'], respuesta: 0 },
        { japones: '成長', lectura: 'seichou', opciones: ['Desarrollo', 'Estancamiento', 'Retroceso', 'Decadencia'], respuesta: 0 },
        { japones: '変化', lectura: 'henka', opciones: ['Cambio', 'Permanencia', 'Estabilidad', 'Constancia'], respuesta: 0 },
        { japones: '進歩', lectura: 'shinpo', opciones: ['Progreso', 'Regresión', 'Estancamiento', 'Inmovilidad'], respuesta: 0 }
    ],
    4: [
        { japones: '社会', lectura: 'shakai', opciones: ['Sociedad', 'Individuo', 'Familia', 'Comunidad'], respuesta: 0 },
        { japones: '文化', lectura: 'bunka', opciones: ['Cultura', 'Naturaleza', 'Tecnología', 'Ciencia'], respuesta: 0 },
        { japones: '伝統', lectura: 'dentou', opciones: ['Tradición', 'Innovación', 'Moda', 'Modernidad'], respuesta: 0 },
        { japones: '習慣', lectura: 'shuukan', opciones: ['Costumbre', 'Excepción', 'Rareza', 'Anomalía'], respuesta: 0 },
        { japones: '価値観', lectura: 'kachikan', opciones: ['Valores', 'Precio', 'Costo', 'Gasto'], respuesta: 0 },
        { japones: '道德', lectura: 'doutoku', opciones: ['Moral', 'Inmoralidad', 'Neutralidad', 'Indiferencia'], respuesta: 0 },
        { japones: '法律', lectura: 'houritsu', opciones: ['Ley', 'Sugerencia', 'Recomendación', 'Consejo'], respuesta: 0 },
        { japones: '権利', lectura: 'kenri', opciones: ['Derecho', 'Obligación', 'Prohibición', 'Restricción'], respuesta: 0 },
        { japones: '義務', lectura: 'gimu', opciones: ['Deber', 'Derecho', 'Privilegio', 'Beneficio'], respuesta: 0 },
        { japones: '責任', lectura: 'sekinin', opciones: ['Responsabilidad', 'Irresponsabilidad', 'Libertad', 'Despreocupación'], respuesta: 0 }
    ],
    5: [
        { japones: '自然', lectura: 'shizen', opciones: ['Naturaleza', 'Artificial', 'Urbano', 'Industrial'], respuesta: 0 },
        { japones: '環境', lectura: 'kankyou', opciones: ['Medio ambiente', 'Contaminación', 'Tecnología', 'Civilización'], respuesta: 0 },
        { japones: '資源', lectura: 'shigen', opciones: ['Recurso', 'Desperdicio', 'Contaminante', 'Residuo'], respuesta: 0 },
        { japones: '汚染', lectura: 'osen', opciones: ['Contaminación', 'Limpieza', 'Pureza', 'Conservación'], respuesta: 0 },
        { japones: '保護', lectura: 'hogo', opciones: ['Protección', 'Destrucción', 'Abandono', 'Negligencia'], respuesta: 0 },
        { japones: '生態系', lectura: 'seitaikei', opciones: ['Ecosistema', 'Sistema artificial', 'Máquina', 'Tecnología'], respuesta: 0 },
        { japones: '再生', lectura: 'saisei', opciones: ['Reciclaje', 'Desperdicio', 'Contaminación', 'Destrucción'], respuesta: 0 },
        { japones: '持続可能', lectura: 'jizokukanou', opciones: ['Sostenible', 'Insostenible', 'Temporal', 'Limitado'], respuesta: 0 },
        { japones: '地球温暖化', lectura: 'chikyuondanka', opciones: ['Calentamiento global', 'Enfriamiento', 'Estabilidad', 'Equilibrio'], respuesta: 0 },
        { japones: '生物多様性', lectura: 'seibututayousei', opciones: ['Biodiversidad', 'Uniformidad', 'Simplicidad', 'Homogeneidad'], respuesta: 0 }
    ]
},
'sub2_2': {
    1: [
        { japones: '技術', lectura: 'gijutsu', opciones: ['Tecnología', 'Arte', 'Ciencia', 'Filosofía'], respuesta: 0 },
        { japones: '科学', lectura: 'kagaku', opciones: ['Ciencia', 'Arte', 'Literatura', 'Historia'], respuesta: 0 },
        { japones: '研究', lectura: 'kenkyuu', opciones: ['Investigación', 'Improvisación', 'Suposición', 'Adivinanza'], respuesta: 0 },
        { japones: '開発', lectura: 'kaihatsu', opciones: ['Desarrollo', 'Destrucción', 'Abandono', 'Estancamiento'], respuesta: 0 },
        { japones: '発明', lectura: 'hatsumei', opciones: ['Invención', 'Descubrimiento', 'Copia', 'Imitación'], respuesta: 0 },
        { japones: '革新', lectura: 'kakushin', opciones: ['Innovación', 'Tradición', 'Conservación', 'Preservación'], respuesta: 0 },
        { japones: '実験', lectura: 'jikken', opciones: ['Experimento', 'Teoría', 'Hipótesis', 'Conclusión'], respuesta: 0 },
        { japones: '分析', lectura: 'bunseki', opciones: ['Análisis', 'Síntesis', 'Resumen', 'Conclusión'], respuesta: 0 },
        { japones: '理論', lectura: 'riron', opciones: ['Teoría', 'Práctica', 'Evidencia', 'Hecho'], respuesta: 0 },
        { japones: '応用', lectura: 'ouyou', opciones: ['Aplicación', 'Teoría', 'Abstracción', 'Concepto'], respuesta: 0 }
    ],
    2: [
        { japones: '経済', lectura: 'keizai', opciones: ['Economía', 'Política', 'Cultura', 'Sociedad'], respuesta: 0 },
        { japones: '市場', lectura: 'shijou', opciones: ['Mercado', 'Tienda', 'Almacén', 'Fábrica'], respuesta: 0 },
        { japones: '企業', lectura: 'kigyou', opciones: ['Empresa', 'Gobierno', 'Individuo', 'Familia'], respuesta: 0 },
        { japones: '投資', lectura: 'toushi', opciones: ['Inversión', 'Gasto', 'Pérdida', 'Ahorro'], respuesta: 0 },
        { japones: '消費', lectura: 'shouhi', opciones: ['Consumo', 'Producción', 'Distribución', 'Venta'], respuesta: 0 },
        { japones: '生産', lectura: 'seisan', opciones: ['Producción', 'Consumo', 'Destrucción', 'Desperdicio'], respuesta: 0 },
        { japones: '貿易', lectura: 'boueki', opciones: ['Comercio', 'Aislamiento', 'Proteccionismo', 'Autarquía'], respuesta: 0 },
        { japones: '競争', lectura: 'kyousou', opciones: ['Competencia', 'Cooperación', 'Colaboración', 'Asociación'], respuesta: 0 },
        { japones: '需要', lectura: 'juyou', opciones: ['Demanda', 'Oferta', 'Excedente', 'Escasez'], respuesta: 0 },
        { japones: '供給', lectura: 'kyoukyuu', opciones: ['Oferta', 'Demanda', 'Necesidad', 'Deseo'], respuesta: 0 }
    ],
    3: [
        { japones: '政治', lectura: 'seiji', opciones: ['Política', 'Economía', 'Cultura', 'Religión'], respuesta: 0 },
        { japones: '政府', lectura: 'seifu', opciones: ['Gobierno', 'Oposición', 'Sociedad', 'Comunidad'], respuesta: 0 },
        { japones: '選挙', lectura: 'senkyo', opciones: ['Elección', 'Designación', 'Nombramiento', 'Herencia'], respuesta: 0 },
        { japones: '民主主義', lectura: 'minshushugi', opciones: ['Democracia', 'Dictadura', 'Monarquía', 'Oligarquía'], respuesta: 0 },
        { japones: '権力', lectura: 'kenryoku', opciones: ['Poder', 'Debilidad', 'Sumisión', 'Obedeiencia'], respuesta: 0 },
        { japones: '政策', lectura: 'seisaku', opciones: ['Política pública', 'Interés privado', 'Beneficio personal', 'Ventaja individual'], respuesta: 0 },
        { japones: '国際関係', lectura: 'kokusaikankei', opciones: ['Relaciones internacionales', 'Asuntos internos', 'Política local', 'Administración municipal'], respuesta: 0 },
        { japones: '外交', lectura: 'gaikou', opciones: ['Diplomacia', 'Guerra', 'Aislamiento', 'Neutralidad'], respuesta: 0 },
        { japones: '平和', lectura: 'heiwa', opciones: ['Paz', 'Guerra', 'Conflicto', 'Violencia'], respuesta: 0 },
        { japones: '安全保障', lectura: 'anzenhoshou', opciones: ['Seguridad', 'Peligro', 'Riesgo', 'Amenaza'], respuesta: 0 }
    ],
    4: [
        { japones: '芸術', lectura: 'geijutsu', opciones: ['Arte', 'Ciencia', 'Tecnología', 'Deporte'], respuesta: 0 },
        { japones: '音楽', lectura: 'ongaku', opciones: ['Música', 'Pintura', 'Escultura', 'Danza'], respuesta: 0 },
        { japones: '絵画', lectura: 'kaiga', opciones: ['Pintura', 'Música', 'Literatura', 'Teatro'], respuesta: 0 },
        { japones: '文学', lectura: 'bungaku', opciones: ['Literatura', 'Ciencia', 'Filosofía', 'Historia'], respuesta: 0 },
        { japones: '演劇', lectura: 'engeki', opciones: ['Teatro', 'Cine', 'Televisión', 'Radio'], respuesta: 0 },
        { japones: '映画', lectura: 'eiga', opciones: ['Cine', 'Teatro', 'Televisión', 'Radio'], respuesta: 0 },
        { japones: '写真', lectura: 'shashin', opciones: ['Fotografía', 'Pintura', 'Dibujo', 'Escultura'], respuesta: 0 },
        { japones: '建築', lectura: 'kenchiku', opciones: ['Arquitectura', 'Ingeniería', 'Diseño', 'Construcción'], respuesta: 0 },
        { japones: 'デザイン', lectura: 'dezain', opciones: ['Diseño', 'Accidente', 'Improvisación', 'Casualidad'], respuesta: 0 },
        { japones: '創造性', lectura: 'souzousei', opciones: ['Creatividad', 'Imitación', 'Copia', 'Repetición'], respuesta: 0 }
    ],
    5: [
        { japones: 'スポーツ', lectura: 'supootsu', opciones: ['Deporte', 'Arte', 'Ciencia', 'Tecnología'], respuesta: 0 },
        { japones: '競技', lectura: 'kyougi', opciones: ['Competición', 'Práctica', 'Entrenamiento', 'Ejercicio'], respuesta: 0 },
        { japones: '選手', lectura: 'senshu', opciones: ['Atleta', 'Entrenador', 'Árbitro', 'Espectador'], respuesta: 0 },
        { japones: '試合', lectura: 'shiai', opciones: ['Partido', 'Entrenamiento', 'Práctica', 'Calentamiento'], respuesta: 0 },
        { japones: '勝利', lectura: 'shouri', opciones: ['Victoria', 'Derrota', 'Empate', 'Abandono'], respuesta: 0 },
        { japones: '敗北', lectura: 'haiboku', opciones: ['Derrota', 'Victoria', 'Empate', 'Triunfo'], respuesta: 0 },
        { japones: '記録', lectura: 'kiroku', opciones: ['Récord', 'Fracaso', 'Intentó', 'Esfuerzo'], respuesta: 0 },
        { japones: '練習', lectura: 'renshuu', opciones: ['Práctica', 'Teoría', 'Improvisación', 'Talento natural'], respuesta: 0 },
        { japones: 'チームワーク', lectura: 'chiimuwaaku', opciones: ['Trabajo en equipo', 'Individualismo', 'Egoísmo', 'Aislamiento'], respuesta: 0 },
        { japones: 'フェアプレー', lectura: 'feapuree', opciones: ['Juego limpio', 'Trampa', 'Engaño', 'Ventaja injusta'], respuesta: 0 }
    ]
},
'sub2_3': {
    1: [
        { japones: '旅行', lectura: 'ryokou', opciones: ['Viaje', 'Estancia', 'Residencia', 'Hogar'], respuesta: 0 },
        { japones: '観光', lectura: 'kankou', opciones: ['Turismo', 'Trabajo', 'Estudio', 'Residencia'], respuesta: 0 },
        { japones: '目的地', lectura: 'mokutekichi', opciones: ['Destino', 'Origen', 'Partida', 'Llegada'], respuesta: 0 },
        { japones: '出発', lectura: 'shuppatsu', opciones: ['Salida', 'Llegada', 'Estancia', 'Permanencia'], respuesta: 0 },
        { japones: '到着', lectura: 'touchaku', opciones: ['Llegada', 'Salida', 'Partida', 'Inicio'], respuesta: 0 },
        { japones: '宿泊', lectura: 'shukuhaku', opciones: ['Alojamiento', 'Comida', 'Transporte', 'Entretenimiento'], respuesta: 0 },
        { japones: '旅程', lectura: 'ryotei', opciones: ['Itinerario', 'Destino', 'Origen', 'Medio'], respuesta: 0 },
        { japones: '観光地', lectura: 'kankouchi', opciones: ['Atracción turística', 'Zona residencial', 'Área industrial', 'Barrio comercial'], respuesta: 0 },
        { japones: '土産', lectura: 'miyage', opciones: ['Souvenir', 'Recuerdo', 'Regalo', 'Compra'], respuesta: 0 },
        { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Rutina', 'Seguridad', 'Estabilidad'], respuesta: 0 }
    ],
    2: [
        { japones: '交通', lectura: 'koutsuu', opciones: ['Transporte', 'Comunicación', 'Información', 'Entretenimiento'], respuesta: 0 },
        { japones: '手段', lectura: 'shudan', opciones: ['Medio', 'Fin', 'Objetivo', 'Propósito'], respuesta: 0 },
        { japones: '電車', lectura: 'densha', opciones: ['Tren', 'Autobús', 'Avión', 'Barco'], respuesta: 0 },
        { japones: 'バス', lectura: 'basu', opciones: ['Autobús', 'Tren', 'Taxi', 'Avión'], respuesta: 0 },
        { japones: '飛行機', lectura: 'hikouki', opciones: ['Avión', 'Barco', 'Tren', 'Automóvil'], respuesta: 0 },
        { japones: '船', lectura: 'fune', opciones: ['Barco', 'Avión', 'Tren', 'Autobús'], respuesta: 0 },
        { japones: '地下鉄', lectura: 'chikatetsu', opciones: ['Metro', 'Tren superficial', 'Autobús', 'Taxi'], respuesta: 0 },
        { japones: 'タクシー', lectura: 'takushii', opciones: ['Taxi', 'Autobús', 'Tren', 'Avión'], respuesta: 0 },
        { japones: '自転車', lectura: 'jitensha', opciones: ['Bicicleta', 'Automóvil', 'Motocicleta', 'Patineta'], respuesta: 0 },
        { japones: '歩行', lectura: 'hokou', opciones: ['Caminar', 'Correr', 'Nadar', 'Volar'], respuesta: 0 }
    ],
    3: [
        { japones: '食事', lectura: 'shokuji', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], respuesta: 0 },
        { japones: '料理', lectura: 'ryouri', opciones: ['Cocina', 'Comida', 'Bebida', 'Postre'], respuesta: 0 },
        { japones: 'レストラン', lectura: 'resutoran', opciones: ['Restaurante', 'Cafetería', 'Bar', 'Pub'], respuesta: 0 },
        { japones: 'メニュー', lectura: 'menyuu', opciones: ['Menú', 'Receta', 'Ingrediente', 'Utensilio'], respuesta: 0 },
        { japones: '注文', lectura: 'chuumon', opciones: ['Pedido', 'Entrega', 'Preparación', 'Cocción'], respuesta: 0 },
        { japones: 'サービス', lectura: 'saabisu', opciones: ['Servicio', 'Producto', 'Mercancía', 'Artículo'], respuesta: 0 },
        { japones: '会計', lectura: 'kaikei', opciones: ['Cuenta', 'Pedido', 'Menú', 'Reserva'], respuesta: 0 },
        { japones: 'チップ', lectura: 'chippu', opciones: ['Propina', 'Precio', 'Costo', 'Gasto'], respuesta: 0 },
        { japones: '食材', lectura: 'shokuzai', opciones: ['Ingredientes', 'Utensilios', 'Recetas', 'Platos'], respuesta: 0 },
        { japones: '調理', lectura: 'chouri', opciones: ['Cocción', 'Comer', 'Servir', 'Ordenar'], respuesta: 0 }
    ],
    4: [
        { japones: '買い物', lectura: 'kaimono', opciones: ['Compras', 'Ventas', 'Intercambio', 'Regalo'], respuesta: 0 },
        { japones: '商店', lectura: 'shouten', opciones: ['Tienda', 'Almacén', 'Mercado', 'Centro comercial'], respuesta: 0 },
        { japones: '市場', lectura: 'ichiba', opciones: ['Mercado', 'Tienda', 'Almacén', 'Fábrica'], respuesta: 0 },
        { japones: 'デパート', lectura: 'depaato', opciones: ['Grandes almacenes', 'Mercado', 'Tienda', 'Boutique'], respuesta: 0 },
        { japones: 'スーパー', lectura: 'suupaa', opciones: ['Supermercado', 'Tienda', 'Mercado', 'Almacén'], respuesta: 0 },
        { japones: '価格', lectura: 'kakaku', opciones: ['Precio', 'Calidad', 'Cantidad', 'Valor'], respuesta: 0 },
        { japones: '割引', lectura: 'waribiki', opciones: ['Descuento', 'Aumento', 'Mantenimiento', 'Estabilidad'], respuesta: 0 },
        { japones: '品質', lectura: 'hinshitsu', opciones: ['Calidad', 'Cantidad', 'Precio', 'Valor'], respuesta: 0 },
        { japones: 'ブランド', lectura: 'burando', opciones: ['Marca', 'Producto', 'Servicio', 'Artículo'], respuesta: 0 },
        { japones: '消費税', lectura: 'shouhizei', opciones: ['Impuesto al consumo', 'Impuesto a la renta', 'Impuesto corporativo', 'Impuesto patrimonial'], respuesta: 0 }
    ],
    5: [
        { japones: '娯楽', lectura: 'goraku', opciones: ['Entretenimiento', 'Trabajo', 'Estudio', 'Obligación'], respuesta: 0 },
        { japones: '趣味', lectura: 'shumi', opciones: ['Pasatiempo', 'Trabajo', 'Obligación', 'Deber'], respuesta: 0 },
        { japones: '映画館', lectura: 'eigakan', opciones: ['Cine', 'Teatro', 'Museo', 'Galería'], respuesta: 0 },
        { japones: 'コンサート', lectura: 'konsaato', opciones: ['Concierto', 'Obra de teatro', 'Exposición', 'Feria'], respuesta: 0 },
        { japones: '博物館', lectura: 'hakubutsukan', opciones: ['Museo', 'Biblioteca', 'Archivo', 'Galería'], respuesta: 0 },
        { japones: '公園', lectura: 'kouen', opciones: ['Parque', 'Jardín', 'Bosque', 'Montaña'], respuesta: 0 },
        { japones: '遊園地', lectura: 'yuuenchi', opciones: ['Parque de atracciones', 'Parque natural', 'Jardín botánico', 'Zoológico'], respuesta: 0 },
        { japones: '温泉', lectura: 'onsen', opciones: ['Aguas termales', 'Piscina', 'Playa', 'Río'], respuesta: 0 },
        { japones: 'リラックス', lectura: 'rirakkusu', opciones: ['Relajación', 'Estrés', 'Tensión', 'Ansiedad'], respuesta: 0 },
        { japones: 'レジャー', lectura: 'rejaa', opciones: ['Ocio', 'Trabajo', 'Estudio', 'Responsabilidad'], respuesta: 0 }
    ]
},

// THE LAST SUMMER 3
'sub3_1': {
    1: [
        { japones: '健康', lectura: 'kenkou', opciones: ['Salud', 'Enfermedad', 'Debilidad', 'Malestar'], respuesta: 0 },
        { japones: '病気', lectura: 'byouki', opciones: ['Enfermedad', 'Salud', 'Bienestar', 'Vitalidad'], respuesta: 0 },
        { japones: '治療', lectura: 'chiryou', opciones: ['Tratamiento', 'Prevención', 'Diagnóstico', 'Síntoma'], respuesta: 0 },
        { japones: '予防', lectura: 'yobou', opciones: ['Prevención', 'Tratamiento', 'Cura', 'Recuperación'], respuesta: 0 },
        { japones: '症状', lectura: 'shoujou', opciones: ['Síntoma', 'Causa', 'Efecto', 'Consecuencia'], respuesta: 0 },
        { japones: '医者', lectura: 'isha', opciones: ['Médico', 'Paciente', 'Enfermera', 'Farmacéutico'], respuesta: 0 },
        { japones: '病院', lectura: 'byouin', opciones: ['Hospital', 'Clínica', 'Consultorio', 'Farmacia'], respuesta: 0 },
        { japones: '薬', lectura: 'kusuri', opciones: ['Medicamento', 'Veneno', 'Suplemento', 'Vitaminas'], respuesta: 0 },
        { japones: '検査', lectura: 'kensa', opciones: ['Examen', 'Diagnóstico', 'Tratamiento', 'Prevención'], respuesta: 0 },
        { japones: '手術', lectura: 'shujutsu', opciones: ['Cirugía', 'Medicamento', 'Terapia', 'Rehabilitación'], respuesta: 0 }
    ],
    2: [
        { japones: '教育', lectura: 'kyouiku', opciones: ['Educación', 'Ignorancia', 'Analfabetismo', 'Incultura'], respuesta: 0 },
        { japones: '学習', lectura: 'gakshuu', opciones: ['Aprendizaje', 'Enseñanza', 'Estudio', 'Práctica'], respuesta: 0 },
        { japones: '知識', lectura: 'chishiki', opciones: ['Conocimiento', 'Ignorancia', 'Duda', 'Incertidumbre'], respuesta: 0 },
        { japones: '技能', lectura: 'ginou', opciones: ['Habilidad', 'Incapacidad', 'Ineptitud', 'Torpeza'], respuesta: 0 },
        { japones: '資格', lectura: 'shikaku', opciones: ['Certificación', 'Experiencia', 'Práctica', 'Teoría'], respuesta: 0 },
        { japones: '訓練', lectura: 'kunren', opciones: ['Entrenamiento', 'Improvisación', 'Talento natural', 'Suerte'], respuesta: 0 },
        { japones: '指導', lectura: 'shidou', opciones: ['Instrucción', 'Aprendizaje', 'Práctica', 'Ejecución'], respuesta: 0 },
        { japones: '評価', lectura: 'hyouka', opciones: ['Evaluación', 'Ignorancia', 'Desprecio', 'Rechazo'], respuesta: 0 },
        { japones: '成長', lectura: 'seichou', opciones: ['Desarrollo', 'Estancamiento', 'Regresión', 'Decadencia'], respuesta: 0 },
        { japones: '潜在能力', lectura: 'senzainouryoku', opciones: ['Potencial', 'Realidad', 'Actualidad', 'Presente'], respuesta: 0 }
    ],
    3: [
        { japones: '職業', lectura: 'shokugyou', opciones: ['Profesión', 'Pasatiempo', 'Voluntariado', 'Ocio'], respuesta: 0 },
        { japones: '仕事', lectura: 'shigoto', opciones: ['Trabajo', 'Descanso', 'Vacaciones', 'Jubilación'], respuesta: 0 },
        { japones: '雇用', lectura: 'koyou', opciones: ['Empleo', 'Desempleo', 'Subempleo', 'Trabajo informal'], respuesta: 0 },
        { japones: '給料', lectura: 'kyuuryou', opciones: ['Salario', 'Gasto', 'Inversión', 'Ahorro'], respuesta: 0 },
        { japones: 'キャリア', lectura: 'kyaria', opciones: ['Carrera', 'Trabajo temporal', 'Empleo informal', 'Pasatiempo'], respuesta: 0 },
        { japones: 'スキル', lectura: 'sukiru', opciones: ['Habilidad', 'Deficiencia', 'Limitación', 'Restricción'], respuesta: 0 },
        { japones: '経験', lectura: 'keiken', opciones: ['Experiencia', 'Inexperiencia', 'Teoría', 'Conocimiento'], respuesta: 0 },
        { japones: '専門', lectura: 'senmon', opciones: ['Especialidad', 'Generalidad', 'Universalidad', 'Totalidad'], respuesta: 0 },
        { japones: '責任', lectura: 'sekinin', opciones: ['Responsabilidad', 'Irresponsabilidad', 'Libertad', 'Despreocupación'], respuesta: 0 },
        { japones: '成果', lectura: 'seika', opciones: ['Resultado', 'Proceso', 'Método', 'Enfoque'], respuesta: 0 }
    ],
    4: [
        { japones: '人間関係', lectura: 'ningenkankei', opciones: ['Relaciones humanas', 'Aislamiento', 'Soledad', 'Individualismo'], respuesta: 0 },
        { japones: '友情', lectura: 'yuujou', opciones: ['Amistad', 'Enemistad', 'Rivalidad', 'Competencia'], respuesta: 0 },
        { japones: '信頼', lectura: 'shinrai', opciones: ['Confianza', 'Desconfianza', 'Sospecha', 'Duda'], respuesta: 0 },
        { japones: '協力', lectura: 'kyouryoku', opciones: ['Cooperación', 'Competencia', 'Oposición', 'Obstrucción'], respuesta: 0 },
        { japones: 'コミュニケーション', lectura: 'komyunikeeshon', opciones: ['Comunicación', 'Incomunicación', 'Aislamiento', 'Silencio'], respuesta: 0 },
        { japones: '理解', lectura: 'rikai', opciones: ['Comprensión', 'Incomprensión', 'Confusión', 'Malentendido'], respuesta: 0 },
        { japones: '共感', lectura: 'kyoukan', opciones: ['Empatía', 'Apatía', 'Indiferencia', 'Insensibilidad'], respuesta: 0 },
        { japones: '尊敬', lectura: 'sonkei', opciones: ['Respeto', 'Desprecio', 'Menosprecio', 'Irrespeto'], respuesta: 0 },
        { japones: '愛情', lectura: 'aijou', opciones: ['Afecto', 'Odio', 'Indiferencia', 'Rechazo'], respuesta: 0 },
        { japones: '絆', lectura: 'kizuna', opciones: ['Vínculo', 'Separación', 'División', 'Ruptura'], respuesta: 0 }
    ],
    5: [
        { japones: '人生', lectura: 'jinsei', opciones: ['Vida', 'Muerte', 'Existencia', 'Esencia'], respuesta: 0 },
        { japones: '目的', lectura: 'mokuteki', opciones: ['Propósito', 'Azar', 'Casualidad', 'Accidente'], respuesta: 0 },
        { japones: '夢', lectura: 'yume', opciones: ['Sueño', 'Realidad', 'Presente', 'Actualidad'], respuesta: 0 },
        { japones: '目標', lectura: 'mokuhyou', opciones: ['Meta', 'Punto de partida', 'Origen', 'Inicio'], respuesta: 0 },
        { japones: '成功', lectura: 'seikou', opciones: ['Éxito', 'Fracaso', 'Intento', 'Esfuerzo'], respuesta: 0 },
        { japones: '失敗', lectura: 'shippai', opciones: ['Fallo', 'Logro', 'Victoria', 'Triunfo'], respuesta: 0 },
        { japones: '挑戦', lectura: 'chousen', opciones: ['Desafío', 'Rendición', 'Evitación', 'Rechazo'], respuesta: 0 },
        { japones: '成長', lectura: 'seichou', opciones: ['Desarrollo', 'Estancamiento', 'Retroceso', 'Decadencia'], respuesta: 0 },
        { japones: '幸福', lectura: 'koufuku', opciones: ['Felicidad', 'Infelicidad', 'Tristeza', 'Desdicha'], respuesta: 0 },
        { japones: '充実', lectura: 'juujitsu', opciones: ['Plenitud', 'Vacío', 'Insatisfacción', 'Carencia'], respuesta: 0 }
    ]
},
'sub3_2': {
    1: [
        { japones: '自然', lectura: 'shizen', opciones: ['Naturaleza', 'Artificial', 'Urbano', 'Industrial'], respuesta: 0 },
        { japones: '環境', lectura: 'kankyou', opciones: ['Medio ambiente', 'Contaminación', 'Tecnología', 'Civilización'], respuesta: 0 },
        { japones: '動物', lectura: 'doubutsu', opciones: ['Animal', 'Planta', 'Mineral', 'Objeto'], respuesta: 0 },
        { japones: '植物', lectura: 'shokubutsu', opciones: ['Planta', 'Animal', 'Mineral', 'Ser humano'], respuesta: 0 },
        { japones: '風景', lectura: 'fuukei', opciones: ['Paisaje', 'Ciudad', 'Edificio', 'Construcción'], respuesta: 0 },
        { japones: '気候', lectura: 'kikou', opciones: ['Clima', 'Tiempo', 'Estación', 'Temperatura'], respuesta: 0 },
        { japones: '季節', lectura: 'kisetsu', opciones: ['Estación', 'Mes', 'Semana', 'Día'], respuesta: 0 },
        { japones: '天気', lectura: 'tenki', opciones: ['Tiempo atmosférico', 'Clima', 'Estación', 'Temperatura'], respuesta: 0 },
        { japones: '資源', lectura: 'shigen', opciones: ['Recurso', 'Desperdicio', 'Contaminante', 'Residuo'], respuesta: 0 },
        { japones: '保護', lectura: 'hogo', opciones: ['Protección', 'Destrucción', 'Abandono', 'Negligencia'], respuesta: 0 }
    ],
    2: [
        { japones: '宇宙', lectura: 'uchuu', opciones: ['Universo', 'Tierra', 'Planeta', 'Galaxia'], respuesta: 0 },
        { japones: '地球', lectura: 'chikyuu', opciones: ['Planeta Tierra', 'Luna', 'Sol', 'Marte'], respuesta: 0 },
        { japones: '太陽', lectura: 'taiyou', opciones: ['Sol', 'Luna', 'Estrella', 'Planeta'], respuesta: 0 },
        { japones: '月', lectura: 'tsuki', opciones: ['Luna', 'Sol', 'Estrella', 'Planeta'], respuesta: 0 },
        { japones: '星', lectura: 'hoshi', opciones: ['Estrella', 'Planeta', 'Satélite', 'Asteroide'], respuesta: 0 },
        { japones: '銀河', lectura: 'ginga', opciones: ['Galaxia', 'Sistema solar', 'Constelación', 'Nebulosa'], respuesta: 0 },
        { japones: '惑星', lectura: 'wakusei', opciones: ['Planeta', 'Estrella', 'Satélite', 'Asteroide'], respuesta: 0 },
        { japones: '衛星', lectura: 'eisei', opciones: ['Satélite', 'Planeta', 'Estrella', 'Cometa'], respuesta: 0 },
        { japones: '天文', lectura: 'tenmon', opciones: ['Astronomía', 'Astrología', 'Geología', 'Meteorología'], respuesta: 0 },
        { japones: '探査', lectura: 'tansa', opciones: ['Exploración', 'Abandono', 'Ignorancia', 'Desinterés'], respuesta: 0 }
    ],
    3: [
        { japones: '時間', lectura: 'jikan', opciones: ['Tiempo', 'Espacio', 'Materia', 'Energía'], respuesta: 0 },
        { japones: '過去', lectura: 'kako', opciones: ['Pasado', 'Presente', 'Futuro', 'Eterno'], respuesta: 0 },
        { japones: '現在', lectura: 'genzai', opciones: ['Presente', 'Pasado', 'Futuro', 'Eterno'], respuesta: 0 },
        { japones: '未来', lectura: 'mirai', opciones: ['Futuro', 'Pasado', 'Presente', 'Eterno'], respuesta: 0 },
        { japones: '瞬間', lectura: 'shunkan', opciones: ['Instante', 'Eternidad', 'Periodo', 'Duración'], respuesta: 0 },
        { japones: '永遠', lectura: 'eien', opciones: ['Eternidad', 'Momentáneo', 'Temporal', 'Pasajero'], respuesta: 0 },
        { japones: '歴史', lectura: 'rekishi', opciones: ['Historia', 'Futuro', 'Presente', 'Actualidad'], respuesta: 0 },
        { japones: '時代', lectura: 'jidai', opciones: ['Época', 'Momento', 'Instante', 'Segundo'], respuesta: 0 },
        { japones: '周期', lectura: 'shuuki', opciones: ['Ciclo', 'Línea recta', 'Dirección única', 'Camino único'], respuesta: 0 },
        { japones: '速度', lectura: 'sokudo', opciones: ['Velocidad', 'Lentitud', 'Inmovilidad', 'Estancamiento'], respuesta: 0 }
    ],
    4: [
        { japones: '物質', lectura: 'busshitsu', opciones: ['Materia', 'Energía', 'Espíritu', 'Pensamiento'], respuesta: 0 },
        { japones: '元素', lectura: 'genso', opciones: ['Elemento', 'Compuesto', 'Mezcla', 'Sustancia'], respuesta: 0 },
        { japones: '原子', lectura: 'genshi', opciones: ['Átomo', 'Molécula', 'Partícula', 'Elemento'], respuesta: 0 },
        { japones: '分子', lectura: 'bunshi', opciones: ['Molécula', 'Átomo', 'Partícula', 'Elemento'], respuesta: 0 },
        { japones: 'エネルギー', lectura: 'enerugii', opciones: ['Energía', 'Materia', 'Espacio', 'Tiempo'], respuesta: 0 },
        { japones: '力', lectura: 'chikara', opciones: ['Fuerza', 'Debilidad', 'Fragilidad', 'Vulnerabilidad'], respuesta: 0 },
        { japones: '運動', lectura: 'undou', opciones: ['Movimiento', 'Reposo', 'Inmovilidad', 'Estaticidad'], respuesta: 0 },
        { japones: '変化', lectura: 'henka', opciones: ['Cambio', 'Permanencia', 'Estabilidad', 'Constancia'], respuesta: 0 },
        { japones: '状態', lectura: 'joutai', opciones: ['Estado', 'Proceso', 'Transformación', 'Evolución'], respuesta: 0 },
        { japones: '性質', lectura: 'seishitsu', opciones: ['Propiedad', 'Accidente', 'Coincidencia', 'Casualidad'], respuesta: 0 }
    ],
    5: [
        { japones: '生命', lectura: 'seimei', opciones: ['Vida', 'Muerte', 'Existencia', 'Esencia'], respuesta: 0 },
        { japones: '生物', lectura: 'seibutsu', opciones: ['Ser vivo', 'Objeto inanimado', 'Mineral', 'Elemento'], respuesta: 0 },
        { japones: '細胞', lectura: 'saibou', opciones: ['Célula', 'Tejido', 'Órgano', 'Sistema'], respuesta: 0 },
        { japones: '遺伝', lectura: 'iden', opciones: ['Herencia', 'Adquisición', 'Aprendizaje', 'Experiencia'], respuesta: 0 },
        { japones: '進化', lectura: 'shinka', opciones: ['Evolución', 'Involución', 'Estancamiento', 'Regresión'], respuesta: 0 },
        { japones: '生態', lectura: 'seitai', opciones: ['Ecología', 'Anatomía', 'Fisiología', 'Biología'], respuesta: 0 },
        { japones: '繁殖', lectura: 'hanshoku', opciones: ['Reproducción', 'Muerte', 'Extinción', 'Desaparición'], respuesta: 0 },
        { japones: '適応', lectura: 'tekiou', opciones: ['Adaptación', 'Rigidez', 'Inflexibilidad', 'Inadaptación'], respuesta: 0 },
        { japones: '多様性', lectura: 'tayousei', opciones: ['Diversidad', 'Uniformidad', 'Homogeneidad', 'Similitud'], respuesta: 0 },
        { japones: '絶滅', lectura: 'zetsumetsu', opciones: ['Extinción', 'Supervivencia', 'Conservación', 'Preservación'], respuesta: 0 }
    ]
},
'sub3_3': {
    1: [
        { japones: '哲学', lectura: 'tetsugaku', opciones: ['Filosofía', 'Ciencia', 'Arte', 'Religión'], respuesta: 0 },
        { japones: '思想', lectura: 'shisou', opciones: ['Pensamiento', 'Acción', 'Palabra', 'Emoción'], respuesta: 0 },
        { japones: '真理', lectura: 'shinri', opciones: ['Verdad', 'Mentira', 'Error', 'Engaño'], respuesta: 0 },
        { japones: '知識', lectura: 'chishiki', opciones: ['Conocimiento', 'Ignorancia', 'Duda', 'Incertidumbre'], respuesta: 0 },
        { japones: '理性', lectura: 'risei', opciones: ['Razón', 'Emoción', 'Instinto', 'Intuición'], respuesta: 0 },
        { japones: '存在', lectura: 'sonzai', opciones: ['Existencia', 'Inexistencia', 'Nada', 'Vacío'], respuesta: 0 },
        { japones: '意識', lectura: 'ishiki', opciones: ['Conciencia', 'Inconsciencia', 'Sueño', 'Desmayo'], respuesta: 0 },
        { japones: '自由', lectura: 'jiyuu', opciones: ['Libertad', 'Esclavitud', 'Opresión', 'Restricción'], respuesta: 0 },
        { japones: '正義', lectura: 'seigi', opciones: ['Justicia', 'Injusticia', 'Corrupción', 'Abuso'], respuesta: 0 },
        { japones: '道德', lectura: 'doutoku', opciones: ['Moral', 'Inmoralidad', 'Amoralidad', 'Corrupción'], respuesta: 0 }
    ],
    2: [
        { japones: '宗教', lectura: 'shuukyou', opciones: ['Religión', 'Ciencia', 'Filosofía', 'Arte'], respuesta: 0 },
        { japones: '信仰', lectura: 'shinkou', opciones: ['Creencia', 'Duda', 'Escepticismo', 'Agnosticismo'], respuesta: 0 },
        { japones: '神', lectura: 'kami', opciones: ['Dios', 'Humano', 'Animal', 'Objeto'], respuesta: 0 },
        { japones: '祈り', lectura: 'inori', opciones: ['Oración', 'Maldición', 'Bendición', 'Profecía'], respuesta: 0 },
        { japones: '儀式', lectura: 'gishiki', opciones: ['Ceremonia', 'Informalidad', 'Espontaneidad', 'Improvisación'], respuesta: 0 },
        { japones: '寺院', lectura: 'jiin', opciones: ['Templo', 'Casa', 'Escuela', 'Oficina'], respuesta: 0 },
        { japones: '聖書', lectura: 'seisho', opciones: ['Biblia', 'Novela', 'Poesía', 'Ensayo'], respuesta: 0 },
        { japones: '信仰心', lectura: 'shinkoushin', opciones: ['Devoción', 'Ateísmo', 'Agnosticismo', 'Indiferencia'], respuesta: 0 },
        { japones: '来世', lectura: 'raise', opciones: ['Vida después de la muerte', 'Vida presente', 'Reencarnación', 'Nirvana'], respuesta: 0 },
        { japones: '奇跡', lectura: 'kiseki', opciones: ['Milagro', 'Normalidad', 'Rutina', 'Cotidianidad'], respuesta: 0 }
    ],
    3: [
        { japones: '言語', lectura: 'gengo', opciones: ['Lenguaje', 'Silencio', 'Gesto', 'Expresión'], respuesta: 0 },
        { japones: '文法', lectura: 'bunpou', opciones: ['Gramática', 'Vocabulario', 'Pronunciación', 'Escritura'], respuesta: 0 },
        { japones: '語彙', lectura: 'goi', opciones: ['Vocabulario', 'Gramática', 'Pronunciación', 'Escritura'], respuesta: 0 },
        { japones: '発音', lectura: 'hatsuon', opciones: ['Pronunciación', 'Escritura', 'Lectura', 'Comprensión'], respuesta: 0 },
        { japones: '意味', lectura: 'imi', opciones: ['Significado', 'Significante', 'Símbolo', 'Representación'], respuesta: 0 },
        { japones: '翻訳', lectura: 'honyaku', opciones: ['Traducción', 'Interpretación', 'Adaptación', 'Modificación'], respuesta: 0 },
        { japones: '通訳', lectura: 'tsuuyaku', opciones: ['Interpretación', 'Traducción', 'Explicación', 'Aclaración'], respuesta: 0 },
        { japones: '方言', lectura: 'hougen', opciones: ['Dialecto', 'Lengua estándar', 'Idioma', 'Jerga'], respuesta: 0 },
        { japones: '表現', lectura: 'hyougen', opciones: ['Expresión', 'Represión', 'Ocultamiento', 'Silencio'], respuesta: 0 },
        { japones: 'コミュニケーション', lectura: 'komyunikeeshon', opciones: ['Comunicación', 'Incomunicación', 'Aislamiento', 'Soledad'], respuesta: 0 }
    ],
    4: [
        { japones: '文学', lectura: 'bungaku', opciones: ['Literatura', 'Ciencia', 'Arte', 'Filosofía'], respuesta: 0 },
        { japones: '詩', lectura: 'shi', opciones: ['Poesía', 'Prosa', 'Ensayo', 'Novela'], respuesta: 0 },
        { japones: '小説', lectura: 'shousetsu', opciones: ['Novela', 'Poesía', 'Ensayo', 'Teatro'], respuesta: 0 },
        { japones: '物語', lectura: 'monogatari', opciones: ['Historia', 'Hecho', 'Realidad', 'Verdad'], respuesta: 0 },
        { japones: '作者', lectura: 'sakusha', opciones: ['Autor', 'Lector', 'Crítico', 'Editor'], respuesta: 0 },
        { japones: '主人公', lectura: 'shujinkou', opciones: ['Protagonista', 'Antagonista', 'Personaje secundario', 'Narrador'], respuesta: 0 },
        { japones: '文体', lectura: 'buntai', opciones: ['Estilo', 'Contenido', 'Tema', 'Argumento'], respuesta: 0 },
        { japones: '比喩', lectura: 'hiyu', opciones: ['Metáfora', 'Literalidad', 'Realismo', 'Naturalismo'], respuesta: 0 },
        { japones: '象徴', lectura: 'shouchou', opciones: ['Símbolo', 'Realidad', 'Hecho', 'Verdad'], respuesta: 0 },
        { japones: '感動', lectura: 'kandou', opciones: ['Emoción', 'Indiferencia', 'Frialdad', 'Desapego'], respuesta: 0 }
    ],
    5: [
        { japones: '神話', lectura: 'shinwa', opciones: ['Mito', 'Historia', 'Ciencia', 'Filosofía'], respuesta: 0 },
        { japones: '伝説', lectura: 'densetsu', opciones: ['Leyenda', 'Historia', 'Realidad', 'Verdad'], respuesta: 0 },
        { japones: '民話', lectura: 'minwa', opciones: ['Cuento popular', 'Historia oficial', 'Ciencia', 'Filosofía'], respuesta: 0 },
        { japones: '寓話', lectura: 'guuwa', opciones: ['Fábula', 'Historia', 'Realidad', 'Verdad'], respuesta: 0 },
        { japones: '昔話', lectura: 'mukashibanashi', opciones: ['Cuento antiguo', 'Historia contemporánea', 'Noticia', 'Reportaje'], respuesta: 0 },
        { japones: '英雄', lectura: 'eiyuu', opciones: ['Héroe', 'Villano', 'Personaje común', 'Antihéroe'], respuesta: 0 },
        { japones: '怪物', lectura: 'kaibutsu', opciones: ['Monstruo', 'Humano', 'Animal', 'Objeto'], respuesta: 0 },
        { japones: '魔法', lectura: 'mahou', opciones: ['Magia', 'Ciencia', 'Tecnología', 'Realidad'], respuesta: 0 },
        { japones: '冒険', lectura: 'bouken', opciones: ['Aventura', 'Rutina', 'Seguridad', 'Estabilidad'], respuesta: 0 },
        { japones: '運命', lectura: 'unmei', opciones: ['Destino', 'Azar', 'Elección', 'Libre albedrío'], respuesta: 0 }
    ]
}
        // ... continuar para los otros subcontenedores (sub2_1, sub2_2, etc.)
    };

    // Si no hay palabras específicas para este subcontenedor y mazo, usar palabras por defecto
    if (palabrasDatabase[subcontenedorId] && palabrasDatabase[subcontenedorId][numeroMazo]) {
        return palabrasDatabase[subcontenedorId][numeroMazo];
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
// FUNCIONES DEL SISTEMA PRINCIPAL
// ============================================================================

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
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, lectura) {
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
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        document.getElementById('lectura').textContent = `(${lectura})`;
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
    }
    
    document.getElementById('boton-siguiente').style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    // AGREGAR RECOMPENSA ECONÓMICA AL RPG
    if (porcentaje === 100) {
        // Dar 1 Sol por mazo completado al 100%
        rpgNovia.economia.saldo += 1;
        mostrarVideoRecompensa();
        
        // Mostrar mensaje de recompensa
        setTimeout(() => {
            mostrarMensaje("¡Ganaste 1 Sol por completar el mazo al 100%! 💰");
        }, 1000);
        
        // REGISTRAR MAZO COMPLETADO PARA EVENTO DIARIO
        eventosDiarios.registrarMazoCompletado();
    } else if (porcentaje >= 80) {
        mostrarPantallaResultados(porcentaje);
        
        // REGISTRAR MAZO COMPLETADO PARA EVENTO DIARIO (aunque no sea 100%)
        eventosDiarios.registrarMazoCompletado();
    } else {
        mostrarPantallaResultados(porcentaje);
    }
}

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

function mostrarVideoRecompensa() {
    const video = obtenerVideoAleatorio();
    
    // Actualizar la pantalla de video con la información del video seleccionado
    document.getElementById('titulo-video').textContent = video.titulo;
    document.getElementById('video-recompensa').src = video.url;
    document.getElementById('duracion-video').textContent = `Duración: ${video.duracion}`;
    
    cambiarPantalla('pantalla-video-recompensa');
    
    // Reproducir el video automáticamente
    const videoElement = document.getElementById('video-recompensa');
    videoElement.play();
    
    // Cuando el video termine, mostrar los resultados
    videoElement.onended = function() {
        const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
        mostrarPantallaResultados(porcentaje);
    };
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
// FUNCIONES DEL RPG DE NOVIA
// ============================================================================

function iniciarRPGNovia() {
    cambiarPantalla('pantalla-rpg-novia');
    actualizarInterfazRPG();
}

function actualizarInterfazRPG() {
    // Actualizar información básica
    document.getElementById('nombre-novia').textContent = rpgNovia.estado.nombreNovia;
    document.getElementById('nivel-relacion').textContent = `Nivel ${rpgNovia.estado.nivelRelacion}`;
    document.getElementById('afinidad').textContent = `${rpgNovia.estado.afinidad}%`;
    document.getElementById('saldo-rpg').textContent = `${rpgNovia.economia.saldo} ${rpgNovia.economia.moneda}`;
    document.getElementById('condones-inventario').textContent = rpgNovia.economia.inventario.condones;
    
    // Actualizar barra de afinidad
    const barraAfinidad = document.getElementById('barra-afinidad');
    barraAfinidad.style.width = `${rpgNovia.estado.afinidad}%`;
    
    // Actualizar estado de ánimo
    document.getElementById('estado-animo').textContent = obtenerEmojiEstadoAnimo(rpgNovia.estado.estadoAnimo);
    
    // Mostrar/Ocultar sección +18
    const seccionAdulto = document.getElementById('seccion-adulto');
    seccionAdulto.style.display = rpgNovia.contenidoAdulto.desbloqueado ? 'block' : 'none';
    
    // Generar diálogo aleatorio
    generarDialogoAleatorio();
}

function obtenerEmojiEstadoAnimo(estado) {
    const emojis = {
        feliz: "😊",
        enamorada: "🥰",
        excitada: "😳",
        juguetona: "😏",
        timida: "😊",
        pasional: "🔥"
    };
    return emojis[estado] || "😊";
}

function generarDialogoAleatorio() {
    const dialogoElement = document.getElementById('dialogo-novia');
    const saludos = rpgNovia.conversaciones.saludos;
    const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
    
    dialogoElement.innerHTML = `
        <div class="dialogo-burbuja">
            <div class="texto-dialogo">${saludoAleatorio}</div>
            <div class="tiempo-dialogo">Ahora</div>
        </div>
    `;
}

function hablarConNovia() {
    const conversaciones = rpgNovia.estado.afinidad >= 60 ? 
        rpgNovia.conversaciones.conversacionesIntimas : 
        rpgNovia.conversaciones.conversacionesNormales;
    
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
    aumentarAfinidad(2);
}

function aumentarAfinidad(cantidad) {
    rpgNovia.estado.afinidad = Math.min(100, rpgNovia.estado.afinidad + cantidad);
    actualizarInterfazRPG();
    
    // Verificar si se desbloquea contenido +18
    if (rpgNovia.estado.afinidad >= 30 && !rpgNovia.contenidoAdulto.desbloqueado) {
        rpgNovia.contenidoAdulto.desbloqueado = true;
        mostrarMensaje("¡Nueva sección desbloqueada! 💕");
    }
}

function regalarItem(tipo) {
    const costos = {
        flores: 5,
        chocolates: 10,
        joyas: 20
    };
    
    if (rpgNovia.economia.saldo >= costos[tipo]) {
        rpgNovia.economia.saldo -= costos[tipo];
        rpgNovia.economia.inventario[tipo]++;
        
        // Aumentar afinidad según el regalo
        const afinidadGanada = {
            flores: 5,
            chocolates: 8,
            joyas: 15
        };
        
        aumentarAfinidad(afinidadGanada[tipo]);
        mostrarMensaje(`Le regalaste ${tipo} a ${rpgNovia.estado.nombreNovia} 💝`);
    } else {
        mostrarMensaje("No tienes suficiente dinero 💸");
    }
}

function comprarCondones() {
    const costo = 15;
    if (rpgNovia.economia.saldo >= costo) {
        rpgNovia.economia.saldo -= costo;
        rpgNovia.economia.inventario.condones++;
        actualizarInterfazRPG();
        mostrarMensaje("¡Condones comprados! 💕");
    } else {
        mostrarMensaje("No tienes suficiente dinero para comprar condones 💸");
    }
}

function usarCondon(escenaId) {
    if (rpgNovia.economia.inventario.condones <= 0) {
        mostrarMensaje("No tienes condones disponibles 💔");
        return;
    }
    
    const escena = rpgNovia.contenidoAdulto.escenasDisponibles.find(e => e.id === escenaId);
    
    if (!escena) {
        mostrarMensaje("Escena no encontrada");
        return;
    }
    
    if (rpgNovia.estado.afinidad < escena.afinidadRequerida) {
        mostrarMensaje(`Necesitas ${escena.afinidadRequerida}% de afinidad para esta escena 💝`);
        return;
    }
    
    // Usar condón
    rpgNovia.economia.inventario.condones -= escena.costoCondones;
    
    // Ejecutar escena
    ejecutarEscenaAdulto(escena);
}

function ejecutarEscenaAdulto(escena) {
    const dialogoElement = document.getElementById('dialogo-novia');
    
    // Verificar si existe el video para esta escena
    if (!videosIntimos[escena.id]) {
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
        mensajes[escena.id].forEach((mensaje, index) => {
            mensajeCompleto += `<div class="linea-escena">${mensaje}</div>`;
        });
        mensajeCompleto += `</div>`;
        dialogoElement.innerHTML = mensajeCompleto;
    } else {
        // Mostrar video
        dialogoElement.innerHTML = `
            <div class="video-escena-adulta">
                <h4>${escena.nombre}</h4>
                <video controls autoplay class="video-intimo">
                    <source src="${videosIntimos[escena.id]}" type="video/mp4">
                    Tu navegador no soporta el video. 
                    <div class="fallback-text">
                        💕 Disfruta este momento especial con ${rpgNovia.estado.nombreNovia}
                    </div>
                </video>
                <div class="leyenda-escena">💖 Momento íntimo especial</div>
                <div class="controles-video">
                    <button class="boton-saltar-video" onclick="terminarEscenaIntima()">Finalizar Escena</button>
                </div>
            </div>
        `;
        
        // Configurar evento cuando termine el video
        const videoElement = dialogoElement.querySelector('.video-intimo');
        videoElement.onended = function() {
            terminarEscenaIntima();
        };
        
        // Reproducir automáticamente (con mute para evitar restricciones)
        videoElement.muted = true;
        videoElement.play().catch(e => {
            console.log("Auto-play bloqueado, el usuario debe iniciar manualmente");
        });
    }
    
    // Aumentar afinidad y experiencia
    aumentarAfinidad(10);
    rpgNovia.estado.experiencia += 25;
    
    // Verificar subida de nivel
    verificarSubidaNivel();
    
    // Agregar a escenas completadas
    if (!rpgNovia.contenidoAdulto.escenasCompletadas.includes(escena.id)) {
        rpgNovia.contenidoAdulto.escenasCompletadas.push(escena.id);
    }
    
    actualizarInterfazRPG();
}

function terminarEscenaIntima() {
    // Volver al diálogo normal después de la escena
    generarDialogoAleatorio();
    mostrarMensaje("¡Qué momento tan especial! 💕 La afinidad ha aumentado.");
}

function verificarSubidaNivel() {
    const expNecesaria = rpgNovia.estado.nivelRelacion * 100;
    if (rpgNovia.estado.experiencia >= expNecesaria) {
        rpgNovia.estado.nivelRelacion++;
        rpgNovia.estado.experiencia = 0;
        mostrarMensaje(`¡Subiste al nivel ${rpgNovia.estado.nivelRelacion} de relación! 💕`);
    }
}

function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById('mensaje-rpg');
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = 'block';
    
    setTimeout(() => {
        mensajeElement.style.display = 'none';
    }, 3000);
}

// ============================================================================
// INICIALIZACIÓN DEL SISTEMA - MODIFICADO
// ============================================================================

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicación cargada - Inicializando sistemas...");
    
    // Inicializar sistema de eventos diarios
    eventosDiarios.inicializar();
    
    // Verificar si hay un evento fallado del día anterior para mostrar video
    const datosEventos = eventosDiarios.cargarDatos();
    if (datosEventos && datosEventos.fallado && datosEventos.ultimaFecha !== eventosDiarios.obtenerFechaHoy()) {
        console.log("📅 Mostrando video de fallo del día anterior");
        eventosDiarios.mostrarVideoFallo();
        // Reiniciar estado de fallo
        datosEventos.fallado = false;
        eventosDiarios.guardarDatos();
    }
    
    console.log("✅ Sistemas inicializados correctamente");
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
