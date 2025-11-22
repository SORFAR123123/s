class AplicacionVocabulario {
    constructor() {
        // SISTEMA RPG NOVIA
        this.sistemaNovia = {
            corazones: 0,
            corazonesMaximos: 1000,
            accionesDiarias: [
                {
                    id: "saludo",
                    nombre: "👋 Saludar",
                    descripcion: "Un dulce saludo mañanero",
                    corazones: 5,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp4"
                },
                {
                    id: "caricia",
                    nombre: "🤗 Acariciar cabeza",
                    descripcion: "Una suave caricia en su cabeza",
                    corazones: 10,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3"
                },
                {
                    id: "abrazar",
                    nombre: "🫂 Abrazar",
                    descripcion: "Un cálido y fuerte abrazo",
                    corazones: 15,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3"
                },
                {
                    id: "beso-mejilla",
                    nombre: "😚 Beso en mejilla",
                    descripcion: "Un tierno beso en la mejilla",
                    corazones: 20,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3"
                },
                {
                    id: "halago",
                    nombre: "💝 Halagar",
                    descripcion: "Decirle lo especial que es",
                    corazones: 8,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp4"
                },
                {
                    id: "cocinar",
                    nombre: "🍳 Cocinar juntos",
                    descripcion: "Preparar una comida especial",
                    corazones: 25,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3"
                },
                {
                    id: "paseo",
                    nombre: "🌅 Paseo nocturno",
                    descripcion: "Caminar bajo las estrellas",
                    corazones: 18,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3"
                },
                {
                    id: "masaje",
                    nombre: "💆‍♀️ Masaje relajante",
                    descripcion: "Un masaje para relajarse",
                    corazones: 22,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3"
                },
                {
                    id: "bailar",
                    nombre: "💃 Bailar juntos",
                    descripcion: "Bailar al ritmo de la música",
                    corazones: 30,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp4"
                },
                {
                    id: "declaracion",
                    nombre: "💌 Declaración de amor",
                    descripcion: "Decirle cuánto la amas",
                    corazones: 50,
                    completada: false,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4"
                }
            ],
            recompensasEspeciales: [
                {
                    id: "flores",
                    nombre: "💐 Ramo de flores",
                    descripcion: "Un hermoso ramo para ella",
                    costo: 50,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp4"
                },
                {
                    id: "cena",
                    nombre: "🍽️ Cena romántica",
                    descripcion: "Una cena a la luz de velas",
                    costo: 100,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3"
                },
                {
                    id: "joyas",
                    nombre: "💎 Joyas elegantes",
                    descripcion: "Un regalo muy especial",
                    costo: 200,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3"
                },
                {
                    id: "viaje",
                    nombre: "✈️ Viaje romántico",
                    descripcion: "Un viaje inolvidable juntos",
                    costo: 500,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3"
                },
                {
                    id: "anillo",
                    nombre: "💍 Anillo de compromiso",
                    descripcion: "La promesa más importante",
                    costo: 1000,
                    video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4"
                }
            ]
        };

        // SISTEMA DE MISIONES SEMANALES
        this.misionesSemanales = {
            misiones: [
                {
                    id: 1,
                    nombre: "Principiante dedicado",
                    descripcion: "Completa 5 mazos al 100% esta semana",
                    mazosRequeridos: 5,
                    recompensa: 10,
                    completada: false,
                    progreso: 0
                },
                {
                    id: 2,
                    nombre: "Estudiante constante",
                    descripcion: "Completa 15 mazos al 100% esta semana",
                    mazosRequeridos: 15,
                    recompensa: 25,
                    completada: false,
                    progreso: 0
                },
                {
                    id: 3,
                    nombre: "Maestro del vocabulario",
                    descripcion: "Completa 30 mazos al 100% esta semana",
                    mazosRequeridos: 30,
                    recompensa: 50,
                    completada: false,
                    progreso: 0
                },
                {
                    id: 4,
                    nombre: "Leyenda japonesa",
                    descripcion: "Completa 50 mazos al 100% esta semana",
                    mazosRequeridos: 50,
                    recompensa: 100,
                    completada: false,
                    progreso: 0
                }
            ],
            semanaActual: this.obtenerNumeroSemana(),
            mazosCompletadosEstaSemana: 0
        };

        // SISTEMA MEJORADO PARA GITHUB PAGES
        this.esPrimeraVez = false;
        
        // SISTEMA DE VIDEOS POR INACTIVIDAD
        this.ultimaVisitaKey = 'ultimaVisitaVocabulario';
        
        // Video cada 1 DÍA (24 horas)
        this.videoInactividadUrl = 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4';
        this.tiempoInactividadDia = 24 * 60 * 60 * 1000;
        
        // Video cada 8 HORAS (Zahiry)
        this.videoZahiryUrl = 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4';
        this.tiempoInactividadZahiry = 8 * 60 * 60 * 1000;

        // NUEVO: Sistema de evento en vivienda - 10 EVENTOS NUEVOS
        this.videosVivienda = {
            si: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4',
            no: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4'
        };

        this.eventosVivienda = [
            {
                id: 1,
                nombre: "Noche Romántica",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino te preparó una cena especial... ¿Quieres pasar una noche romántica con ella?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 30,
                corazonesNo: -15
            },
            {
                id: 2,
                nombre: "Baño Juntos",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino te invita a un baño relajante juntos... ¿Aceptas esta intimidad?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 25,
                corazonesNo: -10
            },
            {
                id: 3,
                nombre: "Masaje Especial",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino quiere darte un masaje muy especial... ¿Te dejas consentir?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 20,
                corazonesNo: -8
            },
            {
                id: 4,
                nombre: "Sorpresa en el Dormitorio",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino tiene una sorpresa especial para ti en el dormitorio... ¿Quieres ver qué es?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 35,
                corazonesNo: -20
            },
            {
                id: 5,
                nombre: "Juego de Roles",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino quiere jugar a los roles contigo... ¿Te animas a esta fantasía?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 28,
                corazonesNo: -12
            },
            {
                id: 6,
                nombre: "Amanecer Juntos",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino te pide que pasen el amanecer juntos en la cama... ¿Aceptas?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 22,
                corazonesNo: -10
            },
            {
                id: 7,
                nombre: "Fotos Íntimas",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino quiere tomar fotos íntimas contigo... ¿Te atreves?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 40,
                corazonesNo: -25
            },
            {
                id: 8,
                nombre: "Cita en la Cocina",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino te espera en la cocina para algo picante... ¿Vas con ella?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 18,
                corazonesNo: -8
            },
            {
                id: 9,
                nombre: "Vestidor Secreto",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino te llama al vestidor para mostrarte algo especial... ¿Entras?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 32,
                corazonesNo: -18
            },
            {
                id: 10,
                nombre: "Noche de Película",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino quiere ver una película 'especial' contigo en el sofá... ¿Qué decides?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 15,
                corazonesNo: -5
            },
            {
                id: 11,
                nombre: "Sorpresa en el Jardín",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                pregunta: "Nino te espera en el jardín con una sorpresa bajo la luz de la luna... ¿Vas?",
                videoSi: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                videoNo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                corazonesSi: 26,
                corazonesNo: -14
            }
        ];

        // SISTEMA DE EVENTOS DIARIOS CON VIDEOS (MODIFICADO)
        this.eventosDiarios = {
            eventos: [
                {
                    id: 1,
                    nombre: "Rescate de Quitillizas",
                    imagenInicio: "https://pbs.twimg.com/media/G6EA3MPW0AAdAIi?format=png&name=small",
                    textoInicio: "¡Las quitillizas están con sus amantes! Recupéralas si no completas 5 mazos desde ahora las perderás",
                    // MODIFICADO: Videos en lugar de imágenes
                    videoExito: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4", 
                    textoExito: "¡Las recuperaste! Bien hecho",
                    videoFallo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                    textoFallo: "¡Fallaste! Las quitillizas se quedaron con sus amantes",
                    mazosRequeridos: 5,
                    completado: false
                },
                {
                    id: 2,
                    nombre: "Defensa contra Ichika",
                    imagenInicio: "https://pbs.twimg.com/media/G6E4i2TWQAA5Eib?format=jpg&name=small",
                    textoInicio: "Ichika está intentando que Nino te olvide y te engañe con otro chico. Si no completas 10 mazos hoy, Nino cedera",
                    // MODIFICADO: Videos en lugar de imágenes
                    videoExito: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                    textoExito: "Demostraste tu dominancia con Nino y no permitiste a Ichika que se la llevara con otro chico",
                    videoFallo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                    textoFallo: "¡Fallaste! Ichika logró que Nino te olvidara y ahora está con otro chico",
                    mazosRequeridos: 10,
                    completado: false
                },
                {
                    id: 3,
                    nombre: "Rescate del Profesor",
                    imagenInicio: "https://pbs.twimg.com/media/G5PbknPWkAAfgjK?format=jpg&name=medium",
                    textoInicio: "El profesor trata de llevarse a Nino de ti. Tendrás que completar 20 mazos hoy para recuperarla",
                    // MODIFICADO: Videos en lugar de imágenes
                    videoExito: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                    textoExito: "No dejaste que el profesor te la robara. ¡Bien hecho! :D",
                    videoFallo: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                    textoFallo: "¡Fallaste! El profesor se llevó a Nino y ahora es suya",
                    mazosRequeridos: 20,
                    completado: false
                }
            ],
            eventoActual: null,
            mazosCompletadosHoy: 0
        };

        // SISTEMA DE TIENDA
        this.tienda = {
            items: [
                { id: 1, nombre: "Figura Coleccionable Nino", descripcion: "Figura exclusiva de Nino Nakano", precio: 15, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 2, nombre: "Poster Autografiado", descripcion: "Poster firmado por el creador", precio: 25, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 3, nombre: "Libro de Arte Exclusivo", descripcion: "Libro con arte conceptual", precio: 35, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 4, nombre: "Set de Stickers", descripcion: "Colección de stickers premium", precio: 10, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 5, nombre: "Fondo de Pantalla HD", descripcion: "Fondo exclusivo para dispositivos", precio: 8, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 6, nombre: "Soundtrack Original", descripcion: "Banda sonora completa", precio: 20, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 7, nombre: "Camiseta Exclusiva", descripcion: "Camiseta de edición limitada", precio: 30, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 8, nombre: "Llavero Personalizado", descripcion: "Llavero con diseño único", precio: 12, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 9, nombre: "Taza Coleccionable", descripcion: "Taza con diseño especial", precio: 18, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" },
                { id: 10, nombre: "Pack de Avatares", descripcion: "Colección de avatares exclusivos", precio: 15, imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small" }
            ]
        };

        // SISTEMA DE AUDIO
        this.audios = {
            beso: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp3',
            nalgada: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3',
            chupada: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3',
            handjob: 'https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3'
        };

        this.audioObjects = {};
        this.cargarAudios();

        // IMAGEN ESPECIAL PARA RECOMPENSAS - CON 66% DE PROBABILIDAD
        this.imagenEspecial = "https://pbs.twimg.com/media/G5_38X-XUAATGFc?format=jpg&name=small";

        // NUEVOS EVENTOS ESPECIALES CON IMÁGENES Y AUDIO (8 eventos)
        this.eventosEspecialesImagen = [
            {
                id: 1,
                nombre: "Nino Sorprendida",
                imagen: "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium",
                audio: "beso",
                probabilidad: 0.15, // 15%
                mensaje: "¡Nino está sorprendida por tu dedicación! 💖"
            },
            {
                id: 2,
                nombre: "Nino Feliz",
                imagen: "https://pbs.twimg.com/media/G4X8IO9XEAAabhy?format=png&name=small",
                audio: "nalgada",
                probabilidad: 0.12, // 12%
                mensaje: "¡Nino está muy feliz contigo! 😊"
            },
            {
                id: 3,
                nombre: "Nino Coqueta",
                imagen: "https://pbs.twimg.com/media/G4X0KxYWIAA1VL_?format=png&name=small",
                audio: "chupada",
                probabilidad: 0.10, // 10%
                mensaje: "¡Nino te mira coquetamente! 😘"
            },
            {
                id: 4,
                nombre: "Nino Enamorada",
                imagen: "https://pbs.twimg.com/media/G6PD1HqXEAARPnr?format=jpg&name=small",
                audio: "handjob",
                probabilidad: 0.08, // 8%
                mensaje: "¡Nino está completamente enamorada de ti! 💕"
            },
            {
                id: 5,
                nombre: "Nino Juguetona",
                imagen: "https://pbs.twimg.com/media/G5_wCzcWsAAmHcA?format=png&name=small",
                audio: "beso",
                probabilidad: 0.07, // 7%
                mensaje: "¡Nino está de humor juguetón! 😄"
            },
            {
                id: 6,
                nombre: "Nino Sensual",
                imagen: "https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small",
                audio: "nalgada",
                probabilidad: 0.06, // 6%
                mensaje: "¡Nino se ve muy sensual hoy! 🔥"
            },
            {
                id: 7,
                nombre: "Nino Tierna",
                imagen: "https://pbs.twimg.com/media/G6EARd6XIAEYjvU?format=jpg&name=360x360",
                audio: "chupada",
                probabilidad: 0.05, // 5%
                mensaje: "¡Nino se ve especialmente tierna! 🥰"
            },
            {
                id: 8,
                nombre: "Nino Especial",
                imagen: "https://pbs.twimg.com/media/G6FDKZyX0AAPZWI?format=jpg&name=small",
                audio: "handjob",
                probabilidad: 0.03, // 3%
                mensaje: "¡Evento especial de Nino! ✨"
            }
        ];

        // NUEVOS EVENTOS ESPECIALES CON VIDEOS (8 eventos)
        this.eventosEspecialesVideo = [
            {
                id: 1,
                nombre: "Nino Bailando",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                probabilidad: 0.20, // 20%
                mensaje: "¡Nino baila feliz para ti! 💃"
            },
            {
                id: 2,
                nombre: "Momento Íntimo",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                probabilidad: 0.15, // 15%
                mensaje: "Un momento íntimo especial con Nino 💖"
            },
            {
                id: 3,
                nombre: "Sorpresa de Nino",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/beso.mp4",
                probabilidad: 0.12, // 12%
                mensaje: "¡Nino tiene una sorpresa para ti! 🎁"
            },
            {
                id: 4,
                nombre: "Aventura Nocturna",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/nalgada.mp3",
                probabilidad: 0.10, // 10%
                mensaje: "Una aventura nocturna con Nino 🌙"
            },
            {
                id: 5,
                nombre: "Encuentro Romántico",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/chupada.mp3",
                probabilidad: 0.08, // 8%
                mensaje: "Un encuentro romántico inolvidable 💕"
            },
            {
                id: 6,
                nombre: "Juego Entretenido",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/handjob.mp3",
                probabilidad: 0.07, // 7%
                mensaje: "¡Nino quiere jugar contigo! 🎮"
            },
            {
                id: 7,
                nombre: "Confesión Especial",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/madre.mp4",
                probabilidad: 0.05, // 5%
                mensaje: "Nino tiene algo importante que decirte 💌"
            },
            {
                id: 8,
                nombre: "Evento Único",
                video: "https://raw.githubusercontent.com/Sorrow12171/Sorrow12171/main/zahiry.mp4",
                probabilidad: 0.03, // 3%
                mensaje: "¡Evento único con Nino! 🌟"
            }
        ];

        // SISTEMA DE TAREAS DIARIAS - MODIFICADO
        this.tareasDiarias = {
            'lectura': { 
                nombre: 'Leer 10 minutos', 
                completada: false,
                recompensa: 5
            },
            'idiomas': { 
                nombre: 'Practicar idiomas - 50 palabras', 
                completada: false,
                recompensa: 5
            },
            'correr': { 
                nombre: 'Correr 100 metros', 
                completada: false,
                recompensa: 5
            },
            'trotar': { 
                nombre: 'Trotar 1000 metros', 
                completada: false,
                recompensa: 5
            },
            'fuerza': { 
                nombre: 'Ejercicios de fuerza - 10 pull ups', 
                completada: false,
                recompensa: 5
            }
        };

        // SISTEMA DE RECOMPENSAS
        this.recompensas = {
            logros: [
                {
                    id: 1,
                    tipo: "logro",
                    nombre: "Beso",
                    descripcion: "Completa 3 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/GohHxZcXAAAzv1p?format=jpg&name=small",
                    requerimiento: 3,
                    progresoActual: 0,
                    desbloqueado: false
                },
                {
                    id: 2,
                    tipo: "logro",
                    nombre: "Nalgada",
                    descripcion: "Completa 10 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/Gov2VBlXwAATAja?format=png&name=small",
                    requerimiento: 10,
                    progresoActual: 0,
                    desbloqueado: false
                },
                {
                    id: 3,
                    tipo: "logro",
                    nombre: "Handjob",
                    descripcion: "Completa 15 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/G5gV7afWgAAtIwI?format=png&name=small",
                    requerimiento: 15,
                    progresoActual: 0,
                    desbloqueado: false
                },
                {
                    id: 4,
                    tipo: "logro",
                    nombre: "Chupada",
                    descripcion: "Completa 25 mazos al 100%",
                    imagen: "https://pbs.twimg.com/media/G5_an4LXEAAnxQY?format=jpg&name=small",
                    requerimiento: 25,
                    progresoActual: 0,
                    desbloqueado: false
                }
            ],
            acciones: [
                {
                    id: 5,
                    tipo: "accion",
                    nombre: "Beso",
                    descripcion: "Desbloqueado al completar 3 mazos",
                    imagen: "https://pbs.twimg.com/media/GohHxZcXAAAzv1p?format=jpg&name=small",
                    logroRequerido: 1,
                    desbloqueado: false,
                    audio: "beso"
                },
                {
                    id: 6,
                    tipo: "accion",
                    nombre: "Nalgada",
                    descripcion: "Desbloqueado al completar 10 mazos",
                    imagen: "https://pbs.twimg.com/media/Gov2VBlXwAATAja?format=png&name=small",
                    logroRequerido: 2,
                    desbloqueado: false,
                    audio: "nalgada"
                },
                {
                    id: 7,
                    tipo: "accion",
                    nombre: "Handjob",
                    descripcion: "Desbloqueado al completar 15 mazos",
                    imagen: "https://pbs.twimg.com/media/G5gV7afWgAAtIwI?format=png&name=small",
                    logroRequerido: 3,
                    desbloqueado: false,
                    audio: "handjob"
                },
                {
                    id: 8,
                    tipo: "accion",
                    nombre: "Chupada",
                    descripcion: "Desbloqueado al completar 25 mazos",
                    imagen: "https://pbs.twimg.com/media/G5_an4LXEAAnxQY?format=jpg&name=small",
                    logroRequerido: 4,
                    desbloqueado: false,
                    audio: "chupada"
                }
            ]
        };

        this.mazos = {
            // LAST SUMMER 1 - 2 mazos
            "LS1 - Verano Inolvidable": [
                ["夏", "Verano", "natsu"],
                ["海", "Mar", "umi"],
                ["太陽", "Sol", "taiyou"],
                ["砂浜", "Playa", "sunahama"],
                ["波", "Ola", "nami"],
                ["貝殻", "Concha", "kaigara"],
                ["夕日", "Atardecer", "yuuhi"],
                ["思い出", "Recuerdo", "omoide"],
                ["祭り", "Festival", "matsuri"],
                ["花火", "Fuegos artificiales", "hanabi"]
            ],
            
            "LS1 - Aventuras Estivales": [
                ["冒険", "Aventura", "bouken"],
                ["旅行", "Viaje", "ryokou"],
                ["友情", "Amistad", "yuujou"],
                ["笑顔", "Sonrisa", "egao"],
                ["自由", "Libertad", "jiyuu"],
                ["青春", "Juventud", "seishun"],
                ["恋", "Amor", "koi"],
                ["秘密", "Secreto", "himitsu"],
                ["成長", "Crecimiento", "seichou"],
                ["未来", "Futuro", "mirai"]
            ],
            
            // LAST SUMMER 2 - 2 mazos
            "LS2 - Básicos": [
                ["言葉", "Palabra", "kotoba"],
                ["本", "Libro", "hon"],
                ["水", "Agua", "mizu"],
                ["学校", "Escuela", "gakkou"],
                ["先生", "Maestro", "sensei"],
                ["学生", "Estudiante", "gakusei"],
                ["友達", "Amigo", "tomodachi"],
                ["家族", "Familia", "kazoku"],
                ["時間", "Tiempo", "jikan"],
                ["今日", "Hoy", "kyou"]
            ],
            
            "LS2 - Tiempo": [
                ["明日", "Mañana", "ashita"],
                ["昨日", "Ayer", "kinou"],
                ["今", "Ahora", "ima"],
                ["後で", "Después", "atode"],
                ["前", "Antes", "mae"],
                ["毎日", "Cada día", "mainichi"],
                ["週末", "Fin de semana", "shuumatsu"],
                ["月曜日", "Lunes", "getsuyoubi"],
                ["火曜日", "Martes", "kayoubi"],
                ["水曜日", "Miércoles", "suiyoubi"]
            ],
            
            // LAST SUMMER 3 - 5 MAZOS
            "LS3 - Mazo 1": [
                ["今朝", "Esta mañana", "kesa"],
                ["処", "Lugar", "sho"],
                ["出掛け", "Salida", "dekake"],
                ["女将", "Dueña", "okami"],
                ["寂しい", "Solitario", "sabishii"],
                ["憩い", "Descanso", "ikoi"],
                ["手伝い", "Ayuda", "tetsudai"],
                ["撮る", "Tomar foto", "toru"],
                ["見送る", "Despedir", "miokuru"],
                ["限る", "Limitar", "kagiru"]
            ],
            
            "LS3 - Mazo 2": [
                ["吐息", "Suspiro", "toiki"],
                ["応援", "Apoyo", "ouen"],
                ["文句", "Queja", "monku"],
                ["構う", "Preocuparse", "kamau"],
                ["残り香", "Aroma residual", "nokorika"],
                ["減る", "Disminuir", "heru"],
                ["誰彼", "Alguien", "darekare"],
                ["過激", "Extremo", "kageki"],
                ["開き直る", "Cambiar de actitud", "hirakinaoru"],
                ["関係ない", "No relacionado", "kankeinai"]
            ],
            
            "LS3 - Mazo 3": [
                ["大きい", "Grande", "ookii"],
                ["小さい", "Pequeño", "chiisai"],
                ["新しい", "Nuevo", "atarashii"],
                ["古い", "Viejo", "furui"],
                ["高い", "Alto/Caro", "takai"],
                ["安い", "Barato", "yasui"],
                ["暑い", "Caliente", "atsui"],
                ["寒い", "Frío", "samui"],
                ["楽しい", "Divertido", "tanoshii"],
                ["難しい", "Difícil", "muzukashii"]
            ],
            
            "LS3 - Mazo 4": [
                ["食べ物", "Comida", "tabemono"],
                ["水", "Agua", "mizu"],
                ["米", "Arroz", "kome"],
                ["魚", "Pescado", "sakana"],
                ["肉", "Carne", "niku"],
                ["野菜", "Vegetales", "yasai"],
                ["果物", "Fruta", "kudamono"],
                ["甘い", "Dulce", "amai"],
                ["辛い", "Picante", "karai"],
                ["美味しい", "Delicioso", "oishii"]
            ],
            
            "LS3 - Mazo 5": [
                ["家族", "Familia", "kazoku"],
                ["父", "Padre", "chichi"],
                ["母", "Madre", "haha"],
                ["兄", "Hermano mayor", "ani"],
                ["姉", "Hermana mayor", "ane"],
                ["弟", "Hermano menor", "otouto"],
                ["妹", "Hermana menor", "imouto"],
                ["祖父", "Abuelo", "sofu"],
                ["祖母", "Abuela", "sobo"],
                ["子供", "Niño", "kodomo"]
            ],

            // TOONO ESUKE - HERMANA RUBIA RUSA - 5 mazos
            "Toono - Hermana Rubia Rusa - Mazo 1": [
                ["金髪", "Cabello rubio", "kinpatsu"],
                ["青い目", "Ojos azules", "aoi me"],
                ["美しい", "Hermosa", "utsukushii"],
                ["優しい", "Amable", "yasashii"],
                ["笑顔", "Sonrisa", "egao"],
                ["ロシア", "Rusia", "roshia"],
                ["姉妹", "Hermanas", "shimai"],
                ["家族", "Familia", "kazoku"],
                ["外国", "País extranjero", "gaikoku"],
                ["文化", "Cultura", "bunka"]
            ],

            "Toono - Hermana Rubia Rusa - Mazo 2": [
                ["雪", "Nieve", "yuki"],
                ["冬", "Invierno", "fuyu"],
                ["寒い", "Frío", "samui"],
                ["暖炉", "Chimenea", "danro"],
                ["毛布", "Manta", "moufu"],
                ["温かい", "Cálido", "atatakai"],
                ["飲み物", "Bebida", "nomimono"],
                ["紅茶", "Té negro", "koucha"],
                ["甘い", "Dulce", "amai"],
                ["幸せ", "Felicidad", "shiawase"]
            ],

            "Toono - Hermana Rubia Rusa - Mazo 3": [
                ["音楽", "Música", "ongaku"],
                ["踊る", "Bailar", "odoru"],
                ["歌う", "Cantar", "utau"],
                ["楽器", "Instrumento musical", "gakki"],
                ["ピアノ", "Piano", "piano"],
                ["美声", "Voz hermosa", "bisei"],
                ["芸術", "Arte", "geijutsu"],
                ["才能", "Talento", "sainou"],
                ["練習", "Práctica", "renshuu"],
                ["上達", "Mejora", "joutatsu"]
            ],

            "Toono - Hermana Rubia Rusa - Mazo 4": [
                ["冒険", "Aventura", "bouken"],
                ["旅行", "Viaje", "ryokou"],
                ["発見", "Descubrimiento", "hakken"],
                ["不思議", "Misterio", "fushigi"],
                ["秘密", "Secreto", "himitsu"],
                ["勇気", "Valentía", "yuuki"],
                ["挑戦", "Desafío", "chousen"],
                ["成功", "Éxito", "seikou"],
                ["成長", "Crecimiento", "seichou"],
                ["思い出", "Recuerdo", "omoide"]
            ],

            "Toono - Hermana Rubia Rusa - Mazo 5": [
                ["料理", "Cocina", "ryouri"],
                ["美味しい", "Delicioso", "oishii"],
                ["食材", "Ingredientes", "shokuzai"],
                ["伝統", "Tradición", "dentou"],
                ["家庭", "Hogar", "katei"],
                ["愛情", "Amor", "aijou"],
                ["手作り", "Hecho a mano", "tezukuri"],
                ["味", "Sabor", "aji"],
                ["香り", "Aroma", "kaori"],
                ["満足", "Satisfacción", "manzoku"]
            ],

            // TOONO ESUKE - HERMANA Y MADRE - 5 mazos
            "Toono - Hermana y Madre - Mazo 1": [
                ["母親", "Madre", "hahaoya"],
                ["娘", "Hija", "musume"],
                ["家族愛", "Amor familiar", "kazokuai"],
                ["絆", "Vínculo", "kizuna"],
                ["保護", "Protección", "hogo"],
                ["育児", "Crianza", "ikuji"],
                ["優しさ", "Dulzura", "yasashisa"],
                ["支え", "Apoyo", "sasae"],
                ["信頼", "Confianza", "shinrai"],
                ["安心", "Tranquilidad", "anshin"]
            ],

            "Toono - Hermana y Madre - Mazo 2": [
                ["家庭", "Hogar", "katei"],
                ["団欒", "Reunión familiar", "danran"],
                ["夕食", "Cena", "yuushoku"],
                ["会話", "Conversación", "kaiwa"],
                ["思いやり", "Consideración", "omoiyari"],
                ["助け合い", "Ayuda mutua", "tasukeai"],
                ["幸せ", "Felicidad", "shiawase"],
                ["平和", "Paz", "heiwa"],
                ["温もり", "Calidez", "nukumori"],
                ["居場所", "Lugar de pertenencia", "ibasho"]
            ],

            "Toono - Hermana y Madre - Mazo 3": [
                ["教育", "Educación", "kyouiku"],
                ["知恵", "Sabiduría", "chie"],
                ["経験", "Experiencia", "keiken"],
                ["教訓", "Lección", "kyoukun"],
                ["成長", "Crecimiento", "seichou"],
                ["未来", "Futuro", "mirai"],
                ["希望", "Esperanza", "kibou"],
                ["夢", "Sueño", "yume"],
                ["努力", "Esfuerzo", "doryoku"],
                ["成功", "Éxito", "seikou"]
            ],

            "Toono - Hermana y Madre - Mazo 4": [
                ["美しさ", "Belleza", "utsukushisa"],
                ["優雅", "Elegancia", "yuuga"],
                ["風格", "Presencia", "fukaku"],
                ["知性", "Inteligencia", "chisei"],
                ["落ち着き", "Calma", "ochitsuki"],
                ["威厳", "Dignidad", "igen"],
                ["愛情", "Amor", "aijou"],
                ["慈愛", "Compasión", "jiai"],
                ["寛容", "Tolerancia", "kanyou"],
                ["理解", "Comprensión", "rikai"]
            ],

            "Toono - Hermana y Madre - Mazo 5": [
                ["伝統", "Tradición", "dentou"],
                ["文化", "Cultura", "bunka"],
                ["価値観", "Valores", "kachikan"],
                ["継承", "Herencia", "keishou"],
                ["歴史", "Historia", "rekishi"],
                ["教え", "Enseñanza", "oshie"],
                ["習慣", "Costumbre", "shuukan"],
                ["儀式", "Ceremonia", "gishiki"],
                ["記念", "Conmemoración", "kinen"],
                ["宝物", "Tesoro", "takaramono"]
            ],

            // TOONO ESUKE - CHICA DE LA ESCUELA - 5 mazos
            "Toono - Chica de la Escuela - Mazo 1": [
                ["学校", "Escuela", "gakkou"],
                ["生徒", "Estudiante", "seito"],
                ["教室", "Aula", "kyoushitsu"],
                ["勉強", "Estudio", "benkyou"],
                ["試験", "Examen", "shiken"],
                ["成績", "Calificaciones", "seiseki"],
                ["友達", "Amigo", "tomodachi"],
                ["クラス", "Clase", "kurasu"],
                ["先生", "Maestro", "sensei"],
                ["学習", "Aprendizaje", "gakushuu"]
            ],

            "Toono - Chica de la Escuela - Mazo 2": [
                ["青春", "Juventud", "seishun"],
                ["思い出", "Recuerdo", "omoide"],
                ["恋愛", "Amor", "renai"],
                ["初恋", "Primer amor", "hatsukoi"],
                ["胸騒ぎ", "Palpitación", "munasawagi"],
                ["告白", "Confesión", "kokuhaku"],
                ["ドキドキ", "Latido acelerado", "dokidoki"],
                ["ロマンス", "Romance", "romansu"],
                ["片思い", "Amor no correspondido", "kataomoi"],
                ["幸せ", "Felicidad", "shiawase"]
            ],

            "Toono - Chica de la Escuela - Mazo 3": [
                ["部活動", "Club escolar", "bukatsudou"],
                ["運動", "Ejercicio", "undou"],
                ["文化祭", "Festival cultural", "bunkasai"],
                ["体育祭", "Festival deportivo", "taiikusai"],
                ["準備", "Preparación", "junbi"],
                ["チームワーク", "Trabajo en equipo", "chiimuwaaku"],
                ["友情", "Amistad", "yuujou"],
                ["協力", "Cooperación", "kyouryoku"],
                ["達成感", "Sensación de logro", "tasseikan"],
                ["思い出", "Recuerdo", "omoide"]
            ],

            "Toono - Chica de la Escuela - Mazo 4": [
                ["未来", "Futuro", "mirai"],
                ["夢", "Sueño", "yume"],
                ["目標", "Objetivo", "mokuhyou"],
                ["進路", "Trayectoria", "shinro"],
                ["選択", "Elección", "sentaku"],
                ["可能性", "Posibilidad", "kanousei"],
                ["挑戦", "Desafío", "chousen"],
                ["成長", "Crecimiento", "seichou"],
                ["希望", "Esperanza", "kibou"],
                ["成功", "Éxito", "seikou"]
            ],

            "Toono - Chica de la Escuela - Mazo 5": [
                ["日常", "Vida cotidiana", "nichijou"],
                ["平凡", "Ordinario", "heibon"],
                ["特別", "Especial", "tokubetsu"],
                ["瞬間", "Momento", "shunkan"],
                ["輝き", "Brillo", "kagayaki"],
                ["宝物", "Tesoro", "takaramono"],
                ["思い出", "Recuerdo", "omoide"],
                ["青春", "Juventud", "seishun"],
                ["一期一会", "Encuentro único", "ichigoichie"],
                ["感謝", "Agradecimiento", "kansha"]
            ]
        };

        this.estado = {
            mazoActual: [],
            nombreMazoActual: "",
            palabraActual: "",
            correcta: "",
            lectura: "",
            aciertos: 0,
            errores: 0,
            totalInicial: 0,
            preguntasRespondidas: 0
        };

        // MEJORA: Detectar si es primera vez en este dominio
        this.detectarPrimeraVez();
        
        this.stats = this.cargarStats();
        
        // Cargar sistemas nuevos
        this.cargarSistemaNovia();
        this.cargarMisionesSemanales();

        this.inicializarApp();
    }

    // NUEVO: Sistema de eventos especiales con imágenes y audio
    mostrarEventoEspecialImagen() {
        const evento = this.seleccionarEventoPorProbabilidad(this.eventosEspecialesImagen);
        if (evento) {
            this.mostrarImagenEspecialConAudio(evento);
        }
    }

    // NUEVO: Sistema de eventos especiales con videos
    mostrarEventoEspecialVideo() {
        const evento = this.seleccionarEventoPorProbabilidad(this.eventosEspecialesVideo);
        if (evento) {
            this.mostrarVideoEspecial(evento);
        }
    }

    // NUEVO: Seleccionar evento basado en probabilidad
    seleccionarEventoPorProbabilidad(eventos) {
        const random = Math.random();
        let acumulado = 0;
        
        for (const evento of eventos) {
            acumulado += evento.probabilidad;
            if (random <= acumulado) {
                return evento;
            }
        }
        
        return null; // No se activó ningún evento
    }

    // NUEVO: Mostrar imagen especial con audio
    mostrarImagenEspecialConAudio(evento) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const imagenContainer = document.createElement('div');
        imagenContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = `🎉 ${evento.nombre} 🎉`;
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const imagen = document.createElement('img');
        imagen.src = evento.imagen;
        imagen.style.cssText = `
            max-width: 400px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;

        const mensaje = document.createElement('div');
        mensaje.textContent = evento.mensaje;
        mensaje.style.cssText = `
            font-size: 1.3rem;
            color: white;
            margin-top: 20px;
            font-weight: bold;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '✨ Continuar ✨';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #4a90e2, #7b68ee);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #4169e1;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
        };

        imagenContainer.appendChild(titulo);
        imagenContainer.appendChild(imagen);
        imagenContainer.appendChild(mensaje);
        imagenContainer.appendChild(botonCerrar);
        overlay.appendChild(imagenContainer);
        document.body.appendChild(overlay);

        // Reproducir audio asociado al evento
        if (evento.audio) {
            setTimeout(() => {
                this.reproducirAudio(evento.audio);
            }, 500);
        }

        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 8000);
    }

    // NUEVO: Mostrar video especial
    mostrarVideoEspecial(evento) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = `🎬 ${evento.nombre} 🎬`;
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const mensaje = document.createElement('div');
        mensaje.textContent = evento.mensaje;
        mensaje.style.cssText = `
            font-size: 1.3rem;
            color: white;
            margin-bottom: 20px;
            font-weight: bold;
        `;

        const video = document.createElement('video');
        video.src = evento.video;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            background: #000;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '❌ Cerrar Video';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #666666, #888888);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #555555;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(102, 102, 102, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        video.onended = () => {
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 2000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video especial');
            mensaje.innerHTML += '<br><small>❌ Error cargando el video</small>';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensaje);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video especial:', error);
                video.muted = true;
                video.play();
            });
        }
    }

    // NUEVO: Sistema de evento en vivienda - CON 10 EVENTOS NUEVOS
    verificarEventoVivienda() {
        // 50% de probabilidad de que aparezca el evento
        const probabilidad = Math.random() < 0.5;
        
        if (probabilidad) {
            console.log('🏠 ¡Evento de vivienda activado!');
            this.mostrarEventoViviendaAleatorio();
            return true;
        } else {
            console.log('🏠 No hay evento de vivienda esta vez');
            return false;
        }
    }

    mostrarEventoViviendaAleatorio() {
        // Seleccionar un evento aleatorio de los 10 disponibles
        const eventoAleatorio = this.eventosVivienda[Math.floor(Math.random() * this.eventosVivienda.length)];
        this.mostrarEventoVivienda(eventoAleatorio);
    }

    mostrarEventoVivienda(evento) {
        const overlay = document.createElement('div');
        overlay.id = 'overlay-evento-vivienda';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const eventoContainer = document.createElement('div');
        eventoContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = `💖 ${evento.nombre} 💖`;
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const imagen = document.createElement('img');
        imagen.src = evento.imagen;
        imagen.style.cssText = `
            max-width: 300px;
            max-height: 300px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
        `;

        const pregunta = document.createElement('div');
        pregunta.textContent = evento.pregunta;
        pregunta.style.cssText = `
            font-size: 1.5rem;
            color: white;
            margin-bottom: 30px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 2px solid white;
        `;

        const contenedorBotones = document.createElement('div');
        contenedorBotones.style.cssText = `
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        `;

        const botonSi = document.createElement('button');
        botonSi.textContent = '✅ SÍ';
        botonSi.style.cssText = `
            background: linear-gradient(135deg, #32cd32, #228b22);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.3rem;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #228b22;
            transition: all 0.3s ease;
            min-width: 120px;
        `;

        const botonNo = document.createElement('button');
        botonNo.textContent = '❌ NO';
        botonNo.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.3rem;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #ff4757;
            transition: all 0.3s ease;
            min-width: 120px;
        `;

        botonSi.onmouseover = () => {
            botonSi.style.transform = 'scale(1.05)';
            botonSi.style.boxShadow = '0 5px 15px rgba(50, 205, 50, 0.4)';
        };

        botonSi.onmouseout = () => {
            botonSi.style.transform = 'scale(1)';
            botonSi.style.boxShadow = 'none';
        };

        botonNo.onmouseover = () => {
            botonNo.style.transform = 'scale(1.05)';
            botonNo.style.boxShadow = '0 5px 15px rgba(255, 107, 107, 0.4)';
        };

        botonNo.onmouseout = () => {
            botonNo.style.transform = 'scale(1)';
            botonNo.style.boxShadow = 'none';
        };

        botonSi.onclick = () => {
            this.reproducirVideoVivienda(evento, 'si');
            document.body.removeChild(overlay);
        };

        botonNo.onclick = () => {
            this.reproducirVideoVivienda(evento, 'no');
            document.body.removeChild(overlay);
        };

        contenedorBotones.appendChild(botonSi);
        contenedorBotones.appendChild(botonNo);

        eventoContainer.appendChild(titulo);
        eventoContainer.appendChild(imagen);
        eventoContainer.appendChild(pregunta);
        eventoContainer.appendChild(contenedorBotones);
        overlay.appendChild(eventoContainer);
        document.body.appendChild(overlay);
    }

    reproducirVideoVivienda(evento, opcion) {
        const videoUrl = opcion === 'si' ? evento.videoSi : evento.videoNo;
        const mensaje = opcion === 'si' ? 
            '💖 ¡Nino está muy feliz! Disfruten este momento especial.' : 
            '😔 Nino se siente rechazada...';

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, ${opcion === 'si' ? '#32cd32, #228b22' : '#ff6b6b, #ff4757'});
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid ${opcion === 'si' ? '#228b22' : '#ff4757'};
            box-shadow: 0 0 50px ${opcion === 'si' ? 'rgba(50, 205, 50, 0.5)' : 'rgba(255, 107, 107, 0.5)'};
        `;

        const titulo = document.createElement('div');
        titulo.textContent = opcion === 'si' ? '💖 MOMENTO ESPECIAL CON NINO 💖' : '💔 DECISIÓN TOMADA 💔';
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const mensajeElement = document.createElement('div');
        mensajeElement.textContent = mensaje;
        mensajeElement.style.cssText = `
            font-size: 1.5rem;
            color: white;
            margin-bottom: 20px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 2px solid white;
        `;

        const video = document.createElement('video');
        video.src = videoUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            background: #000;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '❌ Cerrar Video';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #666666, #888888);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #555555;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(102, 102, 102, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        video.onended = () => {
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 2000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video de vivienda');
            mensajeElement.innerHTML += '<br><small>❌ Error cargando el video</small>';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensajeElement);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de vivienda:', error);
                video.muted = true;
                video.play();
            });
        }

        // Efectos en el sistema según la opción elegida
        if (opcion === 'si') {
            this.agregarCorazones(evento.corazonesSi);
            this.mostrarNotificacion(`💖 +${evento.corazonesSi} corazones - Nino está muy feliz`);
        } else {
            this.quitarCorazones(Math.abs(evento.corazonesNo));
            this.mostrarNotificacion(`💔 ${evento.corazonesNo} corazones - Nino se siente rechazada`);
        }
    }

    // NUEVO: Sistema RPG Novia
    cargarSistemaNovia() {
        const hoy = new Date().toDateString();
        const noviaData = localStorage.getItem('sistemaNovia');
        
        if (noviaData) {
            const data = JSON.parse(noviaData);
            this.sistemaNovia.corazones = data.corazones || 0;
            
            // Verificar si es nuevo día para reiniciar acciones diarias
            if (data.fecha !== hoy) {
                this.reiniciarAccionesDiarias();
                this.verificarPenalizacionDiaAnterior(data);
            } else {
                // Cargar acciones del día actual
                this.sistemaNovia.accionesDiarias = data.accionesDiarias || this.sistemaNovia.accionesDiarias;
            }
        } else {
            // Primera vez - inicializar
            this.guardarSistemaNovia();
        }
    }

    verificarPenalizacionDiaAnterior(datosAnteriores) {
        const accionesCompletadasAyer = datosAnteriores.accionesDiarias.filter(accion => accion.completada).length;
        
        if (accionesCompletadasAyer < 3) {
            // Penalización por no completar al menos 3 acciones
            const penalizacion = 20;
            this.quitarCorazones(penalizacion);
            this.mostrarNotificacion(`💔 -${penalizacion} corazones por no cuidar a tu novia ayer`);
        }
    }

    reiniciarAccionesDiarias() {
        this.sistemaNovia.accionesDiarias.forEach(accion => {
            accion.completada = false;
        });
    }

    guardarSistemaNovia() {
        const datos = {
            fecha: new Date().toDateString(),
            corazones: this.sistemaNovia.corazones,
            accionesDiarias: this.sistemaNovia.accionesDiarias
        };
        localStorage.setItem('sistemaNovia', JSON.stringify(datos));
    }

    agregarCorazones(cantidad) {
        const nuevosCorazones = Math.min(this.sistemaNovia.corazonesMaximos, this.sistemaNovia.corazones + cantidad);
        const diferencia = nuevosCorazones - this.sistemaNovia.corazones;
        
        if (diferencia > 0) {
            this.sistemaNovia.corazones = nuevosCorazones;
            this.guardarSistemaNovia();
            this.actualizarPantallaNoviaRPG();
            this.mostrarNotificacionCorazones(diferencia);
        }
    }

    quitarCorazones(cantidad) {
        this.sistemaNovia.corazones = Math.max(0, this.sistemaNovia.corazones - cantidad);
        this.guardarSistemaNovia();
            this.actualizarPantallaNoviaRPG();
        this.mostrarNotificacion(`💔 -${cantidad} corazones`);
    }

    realizarAccionDiaria(accionId) {
        const accion = this.sistemaNovia.accionesDiarias.find(a => a.id === accionId);
        
        if (accion && !accion.completada) {
            accion.completada = true;
            this.agregarCorazones(accion.corazones);
            this.guardarSistemaNovia();
            this.actualizarPantallaNoviaRPG();
            this.reproducirVideoAccion(accion);
        }
    }

    comprarRecompensaEspecial(recompensaId) {
        const recompensa = this.sistemaNovia.recompensasEspeciales.find(r => r.id === recompensaId);
        
        if (recompensa && this.sistemaNovia.corazones >= recompensa.costo) {
            this.quitarCorazones(recompensa.costo);
            this.reproducirVideoAccion(recompensa);
            this.mostrarNotificacion(`🎁 ¡${recompensa.nombre} entregado!`);
        } else if (recompensa) {
            this.mostrarNotificacion(`❌ No tienes suficientes corazones para ${recompensa.nombre}`);
        }
    }

    reproducirVideoAccion(accion) {
        console.log(`🎬 Reproduciendo video para: ${accion.nombre}`);
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = accion.nombre;
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const video = document.createElement('video');
        video.src = accion.video;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            background: #000;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '❌ Cerrar';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff0000;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 107, 107, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        video.onended = () => {
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 2000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video');
            titulo.innerHTML += '<br><small>❌ Error cargando el video</small>';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video:', error);
                video.muted = true;
                video.play();
            });
        }
    }

    mostrarNotificacionCorazones(cantidad) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.5);
            border: 2px solid #ff4757;
            animation: slideInLeft 0.5s ease;
        `;

        notificacion.innerHTML = `
            <div>💖 +${cantidad} Corazones</div>
            <div style="font-size: 0.8rem;">¡Tu novia está más feliz!</div>
        `;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.5);
            border: 2px solid #ff4757;
            animation: slideInRight 0.5s ease;
        `;

        notificacion.textContent = mensaje;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    actualizarPantallaNoviaRPG() {
        // Actualizar barra de corazones
        const corazonesActual = document.getElementById('corazones-actual');
        const corazonesProgreso = document.getElementById('corazones-progreso');
        
        if (corazonesActual && corazonesProgreso) {
            const porcentaje = (this.sistemaNovia.corazones / this.sistemaNovia.corazonesMaximos) * 100;
            corazonesActual.textContent = this.sistemaNovia.corazones;
            corazonesProgreso.style.width = `${porcentaje}%`;
        }

        // Actualizar acciones diarias
        document.querySelectorAll('.accion-diaria').forEach(elemento => {
            const accionId = elemento.getAttribute('data-id');
            const accion = this.sistemaNovia.accionesDiarias.find(a => a.id === accionId);
            const boton = elemento.querySelector('.boton-accion');
            
            if (accion && boton) {
                if (accion.completada) {
                    boton.textContent = '✅ Completada';
                    boton.disabled = true;
                    elemento.style.opacity = '0.7';
                } else {
                    boton.textContent = 'Realizar';
                    boton.disabled = false;
                    elemento.style.opacity = '1';
                }
            }
        });

        // Actualizar recompensas especiales
        document.querySelectorAll('.recompensa-especial').forEach(elemento => {
            const recompensaId = elemento.getAttribute('data-id');
            const recompensa = this.sistemaNovia.recompensasEspeciales.find(r => r.id === recompensaId);
            const boton = elemento.querySelector('.boton-recompensa');
            
            if (recompensa && boton) {
                if (this.sistemaNovia.corazones >= recompensa.costo) {
                    boton.disabled = false;
                    elemento.style.opacity = '1';
                } else {
                    boton.disabled = true;
                    elemento.style.opacity = '0.6';
                }
            }
        });

        // Actualizar estadísticas globales
        this.actualizarEstadisticasCorazones();
    }

    actualizarEstadisticasCorazones() {
        const statsCorazones = document.getElementById('stats-corazones');
        if (statsCorazones) {
            statsCorazones.textContent = `💖 Corazones: ${this.sistemaNovia.corazones}/1000`;
        }
    }

    // NUEVO: Sistema de Misiones Semanales
    obtenerNumeroSemana() {
        const ahora = new Date();
        const inicioAño = new Date(ahora.getFullYear(), 0, 1);
        const dias = Math.floor((ahora - inicioAño) / (24 * 60 * 60 * 1000));
        return Math.ceil((dias + inicioAño.getDay() + 1) / 7);
    }

    cargarMisionesSemanales() {
        const misionesData = localStorage.getItem('misionesSemanales');
        if (misionesData) {
            const data = JSON.parse(misionesData);
            
            // Verificar si es nueva semana
            if (data.semanaActual !== this.misionesSemanales.semanaActual) {
                // Reiniciar misiones para nueva semana
                this.reiniciarMisionesSemanales();
            } else {
                // Cargar progreso de la semana actual
                this.misionesSemanales.misiones = data.misiones;
                this.misionesSemanales.mazosCompletadosEstaSemana = data.mazosCompletadosEstaSemana || 0;
            }
        }
    }

    guardarMisionesSemanales() {
        localStorage.setItem('misionesSemanales', JSON.stringify({
            semanaActual: this.misionesSemanales.semanaActual,
            misiones: this.misionesSemanales.misiones,
            mazosCompletadosEstaSemana: this.misionesSemanales.mazosCompletadosEstaSemana
        }));
    }

    reiniciarMisionesSemanales() {
        this.misionesSemanales.misiones.forEach(mision => {
            mision.completada = false;
            mision.progreso = 0;
        });
        this.misionesSemanales.mazosCompletadosEstaSemana = 0;
        this.guardarMisionesSemanales();
    }

    completarMazoParaMisiones() {
        this.misionesSemanales.mazosCompletadosEstaSemana++;
        
        // Actualizar progreso de misiones
        let misionesCompletadas = 0;
        
        this.misionesSemanales.misiones.forEach(mision => {
            if (!mision.completada) {
                mision.progreso = this.misionesSemanales.mazosCompletadosEstaSemana;
                if (mision.progreso >= mision.mazosRequeridos) {
                    mision.completada = true;
                    this.entregarRecompensaMision(mision);
                    misionesCompletadas++;
                }
            }
        });
        
        this.guardarMisionesSemanales();
        this.actualizarPantallaMisiones();
        
        // Si se completó alguna misión, mostrar notificación
        if (misionesCompletadas > 0) {
            this.mostrarNotificacion(`🎉 ¡Completaste ${misionesCompletadas} misión(es) semanal(es)!`);
        }
    }

    entregarRecompensaMision(mision) {
        this.agregarSoles(mision.recompensa);
        this.mostrarNotificacion(`💰 +${mision.recompensa} Soles por completar: ${mision.nombre}`);
    }

    actualizarPantallaMisiones() {
        // Actualizar información semanal
        const numeroSemana = document.getElementById('numero-semana');
        const mazosSemana = document.getElementById('mazos-semana');
        
        if (numeroSemana) {
            numeroSemana.textContent = this.misionesSemanales.semanaActual;
        }
        if (mazosSemana) {
            mazosSemana.textContent = this.misionesSemanales.mazosCompletadosEstaSemana;
        }

        // Actualizar misiones
        document.querySelectorAll('.mision-semanal').forEach(elemento => {
            const misionId = parseInt(elemento.getAttribute('data-id'));
            const mision = this.misionesSemanales.misiones.find(m => m.id === misionId);
            
            if (mision) {
                const barraProgreso = elemento.querySelector('.mision-progreso-bar');
                const textoProgreso = elemento.querySelector('.mision-texto');
                const estadoRecompensa = elemento.querySelector('.recompensa-estado');
                
                if (barraProgreso && textoProgreso && estadoRecompensa) {
                    const porcentaje = Math.min(100, (mision.progreso / mision.mazosRequeridos) * 100);
                    barraProgreso.style.width = `${porcentaje}%`;
                    textoProgreso.textContent = `${mision.progreso}/${mision.mazosRequeridos} mazos`;
                    
                    if (mision.completada) {
                        estadoRecompensa.textContent = '✅ Completada';
                        estadoRecompensa.className = 'recompensa-estado completada';
                        elemento.style.opacity = '0.7';
                    } else {
                        estadoRecompensa.textContent = '🔒 Pendiente';
                        estadoRecompensa.className = 'recompensa-estado pendiente';
                        elemento.style.opacity = '1';
                    }
                }
            }
        });
    }

    // MÉTODOS EXISTENTES (se mantienen igual pero se actualizan donde sea necesario)
    detectarPrimeraVez() {
        const dominioActual = window.location.hostname;
        const esGitHubPages = dominioActual.includes('github.io');
        
        if (esGitHubPages) {
            console.log('🌐 Ejecutándose en GitHub Pages');
            const statsExisten = localStorage.getItem('vocabularioStats');
            if (!statsExisten) {
                console.log('🆕 Primera vez en GitHub Pages');
                this.esPrimeraVez = true;
            }
        }
    }

    verificarInactividad() {
        const ahora = new Date().getTime();
        const ultimaVisita = localStorage.getItem(this.ultimaVisitaKey);
        
        console.log('🕒 Verificando inactividad...');
        console.log('Dominio actual:', window.location.hostname);
        console.log('Última visita:', ultimaVisita ? new Date(parseInt(ultimaVisita)).toLocaleString() : 'Primera vez');
        
        if (ultimaVisita) {
            const tiempoDesdeUltimaVisita = ahora - parseInt(ultimaVisita);
            const horasDesdeUltimaVisita = Math.round(tiempoDesdeUltimaVisita / 1000 / 60 / 60);
            const diasDesdeUltimaVisita = Math.round(tiempoDesdeUltimaVisita / 1000 / 60 / 60 / 24);
            
            console.log(`⏰ Tiempo desde última visita: ${horasDesdeUltimaVisita} horas (${diasDesdeUltimaVisita} días)`);
            
            // Verificar si pasó 1 DÍA (24 horas)
            if (tiempoDesdeUltimaVisita > this.tiempoInactividadDia) {
                console.log('🎬 ¡24 horas de inactividad! Reproduciendo video de Nino...');
                setTimeout(() => {
                    this.reproducirVideoInactividad();
                }, 2000);
            }
            
            // Verificar si pasó 8 HORAS (Zahiry)
            if (tiempoDesdeUltimaVisita > this.tiempoInactividadZahiry) {
                console.log('🎬 ¡8 horas de inactividad! Reproduciendo video de Zahiry...');
                setTimeout(() => {
                    this.reproducirVideoZahiry();
                }, 4000);
            }
        }
        
        // Actualizar el timestamp de la última visita
        localStorage.setItem(this.ultimaVisitaKey, ahora.toString());
    }

    reproducirVideoInactividad() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, #1e1e1e, #2d2d2d);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 71, 87, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = '🚨 ALERTA DE CORNUDO 🚨 Descuidaste a Nino y ahora aldo se la esta cogiendo';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: #ff6b6b;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const mensaje = document.createElement('div');
        mensaje.innerHTML = '🔥 <strong>ALDO SE LA ESTA FOLLANDO :D</strong> 🔥';
        mensaje.style.cssText = `
            font-size: 1.8rem;
            color: #ff6b6b;
            margin-bottom: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 107, 107, 0.1);
            border-radius: 10px;
            border: 2px solid #ff4757;
        `;

        const video = document.createElement('video');
        video.src = this.videoInactividadUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid #ff6b6b;
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
            background: #000;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.innerHTML = '❌ CERRAR VIDEO';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff0000;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 0, 0, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        video.onended = () => {
            mensaje.innerHTML = '🎬 <strong>VIDEO TERMINADO - ¿QUÉ HARÁS AHORA?</strong> 🎬';
            mensaje.style.color = '#4a90e2';
            mensaje.style.borderColor = '#4a90e2';
            mensaje.style.background = 'rgba(74, 144, 226, 0.1)';
            
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 3000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video de Nino');
            mensaje.innerHTML = '❌ Error cargando el video<br><small>Pero el mensaje sigue siendo claro 😈</small>';
            mensaje.style.color = '#ffa500';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensaje);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de Nino:', error);
                video.muted = true;
                video.play();
            });
        }

        setTimeout(() => {
            if (document.body.contains(overlay)) {
                video.pause();
                document.body.removeChild(overlay);
            }
        }, 60000);
    }

    reproducirVideoZahiry() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff0000;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = '💔 DESCUIDASTE A ZAHIRY 💔';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const mensaje = document.createElement('div');
        mensaje.innerHTML = '🔥 <strong>FABRIZIO NO APRECIA A ZAHIRY</strong> 🔥';
        mensaje.style.cssText = `
            font-size: 1.8rem;
            color: white;
            margin-bottom: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 2px solid white;
        `;

        const video = document.createElement('video');
        video.src = this.videoZahiryUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
            background: #000;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.innerHTML = '❌ CERRAR VIDEO';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ffffff, #cccccc);
            color: #ff4757;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff4757;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 71, 87, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
        };

        video.onended = () => {
            mensaje.innerHTML = '💔 <strong>VIDEO TERMINADO - CUIDA MEJOR A ZAHIRY</strong> 💔';
            mensaje.style.color = '#ffd700';
            mensaje.style.borderColor = '#ffd700';
            mensaje.style.background = 'rgba(255, 215, 0, 0.1)';
            
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 3000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video de Zahiry');
            mensaje.innerHTML = '❌ Error cargando el video<br><small>Pero el mensaje sobre Zahiry sigue siendo importante 💔</small>';
            mensaje.style.color = '#ffd700';
        };

        videoContainer.appendChild(titulo);
        videoContainer.appendChild(mensaje);
        videoContainer.appendChild(video);
        videoContainer.appendChild(botonCerrar);
        overlay.appendChild(videoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de Zahiry:', error);
                video.muted = true;
                video.play();
            });
        }

        setTimeout(() => {
            if (document.body.contains(overlay)) {
                video.pause();
                document.body.removeChild(overlay);
            }
        }, 60000);
    }

    verificarEventoDiario() {
        const hoy = new Date().toDateString();
        const datosEvento = localStorage.getItem('eventoDiario');
        
        console.log('📅 Verificando evento diario...');
        console.log('Fecha actual:', hoy);
        
        if (datosEvento) {
            const eventoData = JSON.parse(datosEvento);
            console.log('Datos del evento guardados:', eventoData);
            
            // Verificar si es un nuevo día (después de las 3 AM)
            const ahora = new Date();
            const horaActual = ahora.getHours();
            const esNuevoDia = horaActual >= 3 && eventoData.fecha !== hoy;
            
            console.log('Hora actual:', horaActual);
            console.log('¿Es nuevo día?', esNuevoDia);
            
            if (esNuevoDia) {
                console.log('🆕 Nuevo día - verificando si falló el evento anterior');
                
                // Verificar si el evento anterior se completó o falló
                if (eventoData.eventoActual && !eventoData.eventoCompletado && eventoData.yaAceptado) {
                    // El usuario falló el evento del día anterior
                    console.log('❌ El usuario falló el evento del día anterior');
                    this.mostrarFalloEventoAnterior(eventoData.eventoActual);
                } else {
                    console.log('✅ Evento anterior completado o no aceptado - continuando normalmente');
                    this.reiniciarEventosDiarios();
                    this.generarNuevoEvento();
                }
            } else if (eventoData.fecha === hoy) {
                // Cargar evento del día actual
                this.eventosDiarios.eventoActual = eventoData.eventoActual;
                this.eventosDiarios.mazosCompletadosHoy = eventoData.mazosCompletadosHoy || 0;
                
                // Verificar si ya se completó el evento de hoy o si ya se aceptó
                if (eventoData.eventoCompletado || eventoData.yaAceptado) {
                    console.log('✅ Evento ya completado/aceptado hoy - mostrando menú principal');
                    this.mostrarPantalla('seleccion');
                } else {
                    console.log('🎯 Mostrando evento diario pendiente');
                    this.mostrarEventoDiario();
                }
            } else {
                console.log('📅 Fecha diferente - generando nuevo evento');
                this.generarNuevoEvento();
            }
        } else {
            // Primera vez - generar evento
            console.log('🆕 Primera vez - generando nuevo evento');
            this.generarNuevoEvento();
        }
    }

    mostrarFalloEventoAnterior(eventoAnterior) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const falloContainer = document.createElement('div');
        falloContainer.style.cssText = `
            background: linear-gradient(135deg, #8B0000, #B22222);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #FF0000;
            box-shadow: 0 0 50px rgba(255, 0, 0, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = '💔 ¡FALLASTE EL EVENTO! 💔';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        // MODIFICADO: Mostrar video en lugar de imagen
        const video = document.createElement('video');
        video.src = eventoAnterior.videoFallo;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
            background: #000;
        `;

        const mensaje = document.createElement('div');
        mensaje.textContent = eventoAnterior.textoFallo;
        mensaje.style.cssText = `
            font-size: 1.5rem;
            color: white;
            margin-bottom: 15px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const consecuencia = document.createElement('div');
        consecuencia.textContent = '😔 No obtuviste recompensa por este evento';
        consecuencia.style.cssText = `
            font-size: 1.3rem;
            color: #ffd700;
            margin-bottom: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 10px;
            border: 2px solid #ffd700;
        `;

        const botonContinuar = document.createElement('button');
        botonContinuar.textContent = '😞 Continuar';
        botonContinuar.style.cssText = `
            background: linear-gradient(135deg, #666666, #888888);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #555555;
            transition: all 0.3s ease;
        `;

        botonContinuar.onmouseover = () => {
            botonContinuar.style.transform = 'scale(1.05)';
            botonContinuar.style.boxShadow = '0 5px 15px rgba(102, 102, 102, 0.4)';
        };

        botonContinuar.onmouseout = () => {
            botonContinuar.style.transform = 'scale(1)';
            botonContinuar.style.boxShadow = 'none';
        };

        botonContinuar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
            // Reiniciar eventos y generar nuevo evento (el evento fallado vuelve al pool)
            this.reiniciarEventosDiarios();
            this.generarNuevoEvento();
        };

        video.onended = () => {
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 2000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video de fallo');
            mensaje.innerHTML += '<br><small>❌ Error cargando el video</small>';
        };

        falloContainer.appendChild(titulo);
        falloContainer.appendChild(video);
        falloContainer.appendChild(mensaje);
        falloContainer.appendChild(consecuencia);
        falloContainer.appendChild(botonContinuar);
        overlay.appendChild(falloContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de fallo:', error);
                video.muted = true;
                video.play();
            });
        }
    }

    reiniciarEventosDiarios() {
        this.eventosDiarios.mazosCompletadosHoy = 0;
        
        // Reiniciar todos los eventos (los eventos fallados vuelven al pool)
        this.eventosDiarios.eventos.forEach(evento => {
            evento.completado = false;
        });
        
        localStorage.removeItem('eventoDiario');
    }

    generarNuevoEvento() {
        // Seleccionar evento aleatorio que no esté completado (todos están disponibles)
        const eventosDisponibles = this.eventosDiarios.eventos.filter(evento => !evento.completado);
        
        if (eventosDisponibles.length > 0) {
            const eventoAleatorio = eventosDisponibles[Math.floor(Math.random() * eventosDisponibles.length)];
            this.eventosDiarios.eventoActual = eventoAleatorio;
            
            // Guardar evento del día
            this.guardarEventoDiario();
            
            // Mostrar evento
            this.mostrarEventoDiario();
        } else {
            // Todos los eventos completados, reiniciar todos
            console.log('🔄 Todos los eventos completados - reiniciando pool de eventos');
            this.reiniciarEventosDiarios();
            this.generarNuevoEvento();
        }
    }

    mostrarEventoDiario() {
        const evento = this.eventosDiarios.eventoActual;
        if (!evento) {
            console.log('❌ No hay evento actual - mostrando menú principal');
            this.mostrarPantalla('seleccion');
            return;
        }
        
        const contenidoEvento = document.getElementById('contenido-evento');
        contenidoEvento.innerHTML = `
            <img src="${evento.imagenInicio}" alt="${evento.nombre}" class="imagen-evento">
            <div class="titulo-evento">${evento.nombre}</div>
            <div class="descripcion-evento">${evento.textoInicio}</div>
            <div class="progreso-evento">Mazos requeridos: ${evento.mazosRequeridos}</div>
        `;
        
        // Configurar botones
        const botonAceptar = document.getElementById('boton-aceptar-reto');
        const botonCerrar = document.getElementById('boton-cerrar-evento');
        
        // Verificar si ya fue aceptado
        const datosEvento = JSON.parse(localStorage.getItem('eventoDiario') || '{}');
        if (datosEvento.yaAceptado) {
            botonAceptar.textContent = '✅ Ya Aceptado';
            botonAceptar.disabled = true;
            botonAceptar.classList.add('aceptado');
        } else {
            botonAceptar.textContent = 'Aceptar el Reto';
            botonAceptar.disabled = false;
            botonAceptar.classList.remove('aceptado');
        }
        
        this.mostrarPantalla('evento-diario');
    }

    guardarEventoDiario() {
        const datos = {
            fecha: new Date().toDateString(),
            eventoActual: this.eventosDiarios.eventoActual,
            mazosCompletadosHoy: this.eventosDiarios.mazosCompletadosHoy,
            eventoCompletado: false,
            yaAceptado: false
        };
        localStorage.setItem('eventoDiario', JSON.stringify(datos));
    }

    aceptarReto() {
        console.log('🎯 Reto aceptado');
        
        // Actualizar datos del evento
        const datosEvento = JSON.parse(localStorage.getItem('eventoDiario'));
        datosEvento.yaAceptado = true;
        localStorage.setItem('eventoDiario', JSON.stringify(datosEvento));
        
        // Actualizar botón
        const botonAceptar = document.getElementById('boton-aceptar-reto');
        botonAceptar.textContent = '✅ Ya Aceptado';
        botonAceptar.disabled = true;
        botonAceptar.classList.add('aceptado');
        
        // Mostrar notificación
        this.mostrarNotificacionSoles(0, '¡Reto aceptado! Completa los mazos para ganar 30 Soles');
        
        // Ir al menú principal después de un breve delay
        setTimeout(() => {
            this.mostrarPantalla('seleccion');
        }, 1500);
    }

    completarMazoParaEvento() {
        if (!this.eventosDiarios.eventoActual) return;
        
        this.eventosDiarios.mazosCompletadosHoy++;
        
        // Actualizar datos guardados
        const datosEvento = JSON.parse(localStorage.getItem('eventoDiario'));
        datosEvento.mazosCompletadosHoy = this.eventosDiarios.mazosCompletadosHoy;
        localStorage.setItem('eventoDiario', JSON.stringify(datosEvento));
        
        // Actualizar estadística en pantalla principal
        this.actualizarEstadisticaEvento();
        
        // Verificar si se completó el evento
        if (this.eventosDiarios.mazosCompletadosHoy >= this.eventosDiarios.eventoActual.mazosRequeridos) {
            this.mostrarExitoEvento();
        }
    }

    mostrarExitoEvento() {
        const evento = this.eventosDiarios.eventoActual;
        
        // Marcar evento como completado
        evento.completado = true;
        
        // Actualizar datos guardados
        const datosEvento = JSON.parse(localStorage.getItem('eventoDiario'));
        datosEvento.eventoCompletado = true;
        localStorage.setItem('eventoDiario', JSON.stringify(datosEvento));
        
        // Recompensa por completar evento: 30 Soles
        this.agregarSoles(30);
        
        // Mostrar pantalla de éxito con VIDEO
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const exitoContainer = document.createElement('div');
        exitoContainer.style.cssText = `
            background: linear-gradient(135deg, #32cd32, #228b22);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #00ff00;
            box-shadow: 0 0 50px rgba(50, 205, 50, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = '🎉 ¡EVENTO COMPLETADO! 🎉';
        titulo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        // MODIFICADO: Mostrar video en lugar de imagen
        const video = document.createElement('video');
        video.src = evento.videoExito;
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.cssText = `
            max-width: 500px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
            background: #000;
        `;

        const mensaje = document.createElement('div');
        mensaje.textContent = evento.textoExito;
        mensaje.style.cssText = `
            font-size: 1.5rem;
            color: white;
            margin-bottom: 15px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const recompensa = document.createElement('div');
        recompensa.textContent = '💰 ¡Has ganado 30 Soles! 💰';
        recompensa.style.cssText = `
            font-size: 1.8rem;
            color: #ffd700;
            margin-bottom: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 10px;
            border: 2px solid #ffd700;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '✨ Continuar ✨';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #4a90e2, #7b68ee);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #4169e1;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            video.pause();
            document.body.removeChild(overlay);
            this.mostrarPantalla('seleccion');
        };

        video.onended = () => {
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                    this.mostrarPantalla('seleccion');
                }
            }, 2000);
        };

        video.onerror = () => {
            console.log('❌ Error cargando el video de éxito');
            mensaje.innerHTML += '<br><small>❌ Error cargando el video</small>';
        };

        exitoContainer.appendChild(titulo);
        exitoContainer.appendChild(video);
        exitoContainer.appendChild(mensaje);
        exitoContainer.appendChild(recompensa);
        exitoContainer.appendChild(botonCerrar);
        overlay.appendChild(exitoContainer);
        document.body.appendChild(overlay);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('❌ Error reproduciendo video de éxito:', error);
                video.muted = true;
                video.play();
            });
        }
    }

    actualizarEstadisticaEvento() {
        const statsEvento = document.getElementById('stats-evento');
        if (statsEvento && this.eventosDiarios.eventoActual) {
            const evento = this.eventosDiarios.eventoActual;
            statsEvento.textContent = `🎯 Reto de hoy: ${this.eventosDiarios.mazosCompletadosHoy}/${evento.mazosRequeridos} mazos`;
        }
    }

    // SISTEMA DE TAREAS DIARIAS - MODIFICADO
    cargarTareasDiarias() {
        const hoy = new Date().toDateString();
        const tareasGuardadas = localStorage.getItem('tareasDiarias');
        
        if (tareasGuardadas) {
            const datos = JSON.parse(tareasGuardadas);
            
            // Si es un nuevo día, reiniciar tareas
            if (datos.fecha !== hoy) {
                this.reiniciarTareasDiarias(datos);
            } else {
                // Cargar tareas del día actual
                this.tareasDiarias = datos.tareas;
            }
        } else {
            // Primera vez - inicializar
            this.guardarTareasDiarias();
        }
    }

    reiniciarTareasDiarias(datosAnteriores) {
        const hoy = new Date().toDateString();
        const ayer = new Date(Date.now() - 86400000).toDateString();
        
        // Verificar si completó todas las tareas ayer para mantener la racha
        if (datosAnteriores.fecha === ayer) {
            const tareasCompletadasAyer = Object.values(datosAnteriores.tareas).filter(t => t.completada).length;
            if (tareasCompletadasAyer === 5) {
                // Incrementar racha
                this.stats.rachaDiarias = (this.stats.rachaDiarias || 0) + 1;
                if (this.stats.rachaDiarias > (this.stats.mejorRachaDiarias || 0)) {
                    this.stats.mejorRachaDiarias = this.stats.rachaDiarias;
                }
            } else {
                // Reiniciar racha
                this.stats.rachaDiarias = 0;
            }
            this.guardarStats();
        }
        
        // Reiniciar tareas para hoy
        for (let tarea in this.tareasDiarias) {
            this.tareasDiarias[tarea].completada = false;
        }
        
        this.guardarTareasDiarias();
    }

    guardarTareasDiarias() {
        const datos = {
            fecha: new Date().toDateString(),
            tareas: this.tareasDiarias
        };
        localStorage.setItem('tareasDiarias', JSON.stringify(datos));
    }

    toggleTarea(tareaId) {
        if (this.tareasDiarias[tareaId] && !this.tareasDiarias[tareaId].completada) {
            // Solo permitir marcar si no está completada
            this.tareasDiarias[tareaId].completada = true;
            this.guardarTareasDiarias();
            this.actualizarPantallaTareas();
            this.actualizarEstadisticasDiarias();
            
            // Dar recompensa por completar tarea
            const recompensa = this.tareasDiarias[tareaId].recompensa || 5;
            this.agregarSoles(recompensa);
            this.mostrarNotificacionSoles(recompensa, 'Tarea completada');
        }
    }

    actualizarPantallaTareas() {
        for (let tareaId in this.tareasDiarias) {
            const checkbox = document.getElementById(`check-${tareaId}`);
            const estadoElement = document.getElementById(`estado-${tareaId}`);
            const tareaElement = document.getElementById(`tarea-${tareaId}`);
            
            if (checkbox && estadoElement && tareaElement) {
                checkbox.checked = this.tareasDiarias[tareaId].completada;
                checkbox.disabled = this.tareasDiarias[tareaId].completada; // Deshabilitar si ya está completada
                
                if (this.tareasDiarias[tareaId].completada) {
                    estadoElement.textContent = '✅ Completada';
                    estadoElement.className = 'tarea-estado completada';
                    tareaElement.className = 'tarea completada';
                } else {
                    estadoElement.textContent = '⏳ Pendiente';
                    estadoElement.className = 'tarea-estado pendiente';
                    tareaElement.className = 'tarea';
                }
            }
        }
        
        this.actualizarProgresoTareas();
    }

    actualizarProgresoTareas() {
        const tareasCompletadas = Object.values(this.tareasDiarias).filter(t => t.completada).length;
        const totalTareas = Object.keys(this.tareasDiarias).length;
        const porcentaje = (tareasCompletadas / totalTareas) * 100;
        
        const barraProgreso = document.getElementById('barra-progreso-tareas');
        const textoProgreso = document.getElementById('texto-progreso-tareas');
        const rachaActual = document.getElementById('racha-actual');
        const mejorRacha = document.getElementById('mejor-racha');
        
        if (barraProgreso) {
            barraProgreso.style.width = `${porcentaje}%`;
        }
        if (textoProgreso) {
            textoProgreso.textContent = `${tareasCompletadas}/${totalTareas} tareas completadas`;
        }
        if (rachaActual) {
            rachaActual.textContent = `🔥 Racha actual: ${this.stats.rachaDiarias || 0} días`;
        }
        if (mejorRacha) {
            mejorRacha.textContent = `🏆 Mejor racha: ${this.stats.mejorRachaDiarias || 0} días`;
        }
    }

    actualizarEstadisticasDiarias() {
        const tareasCompletadas = Object.values(this.tareasDiarias).filter(t => t.completada).length;
        const statsDiarias = document.getElementById('stats-diarias');
        if (statsDiarias) {
            statsDiarias.textContent = `✅ Tareas de hoy: ${tareasCompletadas}/5`;
        }
    }

    // SISTEMA DE TIENDA Y MONEDA
    agregarSoles(cantidad) {
        if (!this.stats.soles) {
            this.stats.soles = 0;
        }
        this.stats.soles += cantidad;
        this.guardarStats();
        this.actualizarSaldoTienda();
        this.actualizarEstadisticasSoles();
    }

    gastarSoles(cantidad) {
        if (!this.stats.soles || this.stats.soles < cantidad) {
            return false;
        }
        this.stats.soles -= cantidad;
        this.guardarStats();
        this.actualizarSaldoTienda();
        this.actualizarEstadisticasSoles();
        return true;
    }

    actualizarSaldoTienda() {
        const saldoElement = document.getElementById('saldo-soles');
        if (saldoElement) {
            saldoElement.textContent = this.stats.soles || 0;
        }
    }

    actualizarEstadisticasSoles() {
        const statsSoles = document.getElementById('stats-soles');
        if (statsSoles) {
            statsSoles.textContent = `💰 Soles: ${this.stats.soles || 0}`;
        }
    }

    mostrarNotificacionSoles(cantidad, motivo) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ffd700, #ffa500);
            color: #8b4513;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.5);
            border: 2px solid #ff8c00;
            animation: slideIn 0.5s ease;
        `;

        notificacion.innerHTML = `
            <div>💰 +${cantidad} Soles</div>
            <div style="font-size: 0.8rem;">${motivo}</div>
        `;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    comprarItem(itemId) {
        const item = this.tienda.items.find(i => i.id === itemId);
        if (!item) return;

        if (this.gastarSoles(item.precio)) {
            console.log(`🛒 Item comprado: ${item.nombre}`);
            this.mostrarNotificacionCompra(item);
        } else {
            console.log('❌ Fondos insuficientes');
            this.mostrarNotificacionError('Fondos insuficientes');
        }
    }

    mostrarNotificacionCompra(item) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #32cd32, #228b22);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(50, 205, 50, 0.5);
            border: 2px solid #228b22;
            animation: slideIn 0.5s ease;
        `;

        notificacion.innerHTML = `
            <div>✅ ¡Comprado!</div>
            <div style="font-size: 0.8rem;">${item.nombre}</div>
        `;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    mostrarNotificacionError(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.5);
            border: 2px solid #ff4757;
            animation: slideIn 0.5s ease;
        `;

        notificacion.textContent = `❌ ${mensaje}`;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    // SISTEMA DE IMÁGENES GRANDES
    mostrarImagenGrande(url, titulo = '') {
        const overlay = document.createElement('div');
        overlay.className = 'overlay-imagen';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            flex-direction: column;
        `;

        const contenedor = document.createElement('div');
        contenedor.className = 'contenedor-imagen-grande';
        contenedor.style.cssText = `
            background: linear-gradient(135deg, #2d2d2d, #3d3d3d);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff6b6b;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        if (titulo) {
            const tituloElement = document.createElement('div');
            tituloElement.textContent = titulo;
            tituloElement.style.cssText = `
                font-size: 1.8rem;
                font-weight: bold;
                color: white;
                margin-bottom: 20px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            `;
            contenedor.appendChild(tituloElement);
        }

        const imagen = document.createElement('img');
        imagen.src = url;
        imagen.className = 'imagen-grande';
        imagen.style.cssText = `
            max-width: 500px;
            max-height: 500px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '❌ Cerrar';
        botonCerrar.className = 'boton-cerrar-imagen';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff0000;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 107, 107, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
        };

        contenedor.appendChild(imagen);
        contenedor.appendChild(botonCerrar);
        overlay.appendChild(contenedor);
        document.body.appendChild(overlay);

        // Cerrar al hacer click fuera de la imagen
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        };
    }

    cargarAudios() {
        console.log('🎵 Iniciando carga de audios...');
        
        for (const [nombre, url] of Object.entries(this.audios)) {
            console.log(`📥 Cargando: ${nombre} -> ${url}`);
            
            const audio = new Audio();
            audio.src = url;
            audio.preload = 'auto';
            
            audio.addEventListener('canplaythrough', () => {
                console.log(`✅ ${nombre} cargado y listo!`);
                this.audioObjects[nombre] = audio;
            });
            
            audio.addEventListener('error', (e) => {
                console.log(`❌ Error cargando ${nombre}:`, audio.error);
            });
            
            audio.load();
        }
        
        setTimeout(() => {
            console.log('🔍 Estado final de audios:');
            Object.keys(this.audios).forEach(nombre => {
                console.log(`- ${nombre}:`, this.audioObjects[nombre] ? '✅ Cargado' : '❌ No cargado');
            });
        }, 3000);
    }

    reproducirAudio(nombre) {
        console.log(`🎵 Intentando reproducir: ${nombre}`);
        
        const audio = this.audioObjects[nombre];
        if (audio) {
            console.log(`🔊 Audio encontrado, reproduciendo...`);
            audio.currentTime = 0;
            
            audio.play().then(() => {
                console.log(`✅ ${nombre} reproduciéndose!`);
            }).catch(error => {
                console.log(`❌ Error al reproducir ${nombre}:`, error);
            });
        } else {
            console.log(`❌ Audio no disponible: ${nombre}`);
        }
    }

    mostrarImagenEspecial() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            flex-direction: column;
        `;

        const imagenContainer = document.createElement('div');
        imagenContainer.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #ff4757;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = '🎉 Nino esta feliz :D te la podras coger pronto  🎉';
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const imagen = document.createElement('img');
        imagen.src = this.imagenEspecial;
        imagen.style.cssText = `
            max-width: 400px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;

        const mensaje = document.createElement('div');
        mensaje.textContent = '¡Felicidades por completar el mazo al 100%!';
        mensaje.style.cssText = `
            font-size: 1.3rem;
            color: white;
            margin-top: 20px;
            font-weight: bold;
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '✨ Continuar ✨';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #4a90e2, #7b68ee);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #4169e1;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
        };

        imagenContainer.appendChild(titulo);
        imagenContainer.appendChild(imagen);
        imagenContainer.appendChild(mensaje);
        imagenContainer.appendChild(botonCerrar);
        overlay.appendChild(imagenContainer);
        document.body.appendChild(overlay);

        setTimeout(() => {
            this.reproducirAudio('beso');
        }, 500);

        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 8000);
    }

    cargarStats() {
        const statsGuardadas = localStorage.getItem('vocabularioStats');
        
        if (statsGuardadas) {
            const stats = JSON.parse(statsGuardadas);
            if (!stats.recompensasDesbloqueadas) {
                stats.recompensasDesbloqueadas = [];
            }
            
            // Inicializar estadísticas de tareas diarias si no existen
            if (!stats.rachaDiarias) stats.rachaDiarias = 0;
            if (!stats.mejorRachaDiarias) stats.mejorRachaDiarias = 0;
            
            // Inicializar soles si no existen
            if (!stats.soles) stats.soles = 0;
            
            for (const nombreMazo in this.mazos) {
                if (!stats.mazos[nombreMazo]) {
                    stats.mazos[nombreMazo] = this.crearStatsMazoVacio();
                }
            }
            
            return stats;
        }
        
        const stats = { 
            mazosCompletados: 0, 
            mazos: {},
            recompensasDesbloqueadas: [],
            rachaDiarias: 0,
            mejorRachaDiarias: 0,
            soles: 0
        };
        
        for (const nombreMazo in this.mazos) {
            stats.mazos[nombreMazo] = this.crearStatsMazoVacio();
        }
        
        return stats;
    }

    crearStatsMazoVacio() {
        return {
            vecesJugado: 0,
            mejorPuntuacion: 0,
            ultimaPuntuacion: 0,
            aciertosTotales: 0,
            erroresTotales: 0,
            rachaActual: 0,
            mejorRacha: 0,
            completados100: 0
        };
    }

    guardarStats() {
        localStorage.setItem('vocabularioStats', JSON.stringify(this.stats));
    }

    inicializarApp() {
    this.pantallas = {
        seleccion: document.getElementById('pantalla-seleccion'),
        quiz: document.getElementById('pantalla-quiz'),
        resultados: document.getElementById('pantalla-resultados'),
        novia: document.getElementById('pantalla-novia'),
        lastsummer: document.getElementById('pantalla-lastsummer'),
        lastsummer1: document.getElementById('pantalla-lastsummer1-mazos'),
        lastsummer2: document.getElementById('pantalla-lastsummer2-mazos'),
        lastsummer3: document.getElementById('pantalla-lastsummer3-mazos'),
        diarias: document.getElementById('pantalla-diarias'),
        tienda: document.getElementById('pantalla-tienda'),
        toono: document.getElementById('pantalla-toono'),
        eventoDiario: document.getElementById('pantalla-evento-diario'),
        fabrizio: document.getElementById('pantalla-fabrizio'),
        // NUEVAS PANTALLAS
        noviaRpg: document.getElementById('pantalla-novia-rpg'),
        misiones: document.getElementById('pantalla-misiones'),
        vivienda: document.getElementById('pantalla-vivienda'),
        tienda18: document.getElementById('pantalla-tienda-18')
    };

    // Cargar sistema de tareas diarias
    this.cargarTareasDiarias();
    
    this.inicializarPantallaSeleccion();
    this.inicializarPantallaQuiz();
    this.inicializarPantallaResultados();
    this.inicializarPantallaNovia();
    this.inicializarPantallaLastSummer();
    this.inicializarSeccionLastSummer();
    this.inicializarPantallasLastSummerMazos();
    this.inicializarPantallaDiarias();
    this.inicializarPantallaTienda();
    this.inicializarPantallaToono();
    this.inicializarPantallaEventos();
    this.inicializarPantallaFabrizio();
    
    // NUEVO: Inicializar pantallas RPG
    this.inicializarPantallaNoviaRPG();
    this.inicializarPantallaMisiones();
    this.inicializarPantallaVivienda();
    this.inicializarPantallaTienda18();
    
    // NUEVO: Inicializar tarjeta de tareas diarias
    const diariasCard = document.getElementById('diarias-card');
    if (diariasCard) {
        diariasCard.addEventListener('click', () => {
            this.mostrarPantalla('diarias');
            this.actualizarPantallaTareas();
        });
    }

    // NUEVO: Inicializar tarjeta de misiones semanales
    const misionesCard = document.getElementById('misiones-card');
    if (misionesCard) {
        misionesCard.addEventListener('click', () => {
            this.mostrarPantalla('misiones');
            this.actualizarPantallaMisiones();
        });
    }

    // NUEVO: Inicializar tarjeta de novia RPG
    const noviaRpgCard = document.getElementById('novia-rpg-card');
    if (noviaRpgCard) {
        noviaRpgCard.addEventListener('click', () => {
            this.mostrarPantalla('noviaRpg');
            this.actualizarPantallaNoviaRPG();
        });
    }

    // NUEVO: Inicializar tarjeta de vivienda
    const viviendaCard = document.getElementById('vivienda-card');
    if (viviendaCard) {
        viviendaCard.addEventListener('click', () => {
            this.mostrarPantalla('vivienda');
            // Verificar evento al entrar a la vivienda
            const hayEvento = this.verificarEventoVivienda();
            if (!hayEvento) {
                this.actualizarPantallaVivienda();
            }
        });
    }

    // NUEVO: Inicializar tarjeta de tienda +18
    const tienda18Card = document.getElementById('tienda-18-card');
    if (tienda18Card) {
        tienda18Card.addEventListener('click', () => {
            this.mostrarPantalla('tienda18');
            this.actualizarPantallaTienda18();
        });
    }
    
    // Verificar evento diario
    this.verificarEventoDiario();
    
    // Verificar inactividad
    this.verificarInactividad();
    
    // Mostrar mensaje si es primera vez en GitHub Pages
    if (this.esPrimeraVez) {
        setTimeout(() => {
            alert('🌐Belinda y zahiry las mas culonas de pocollay');
        }, 1000);
    }
}

    // NUEVO: Inicializar pantalla Vivienda
    inicializarPantallaVivienda() {
        const viviendaCard = document.getElementById('vivienda-card');
        if (viviendaCard) {
            viviendaCard.addEventListener('click', () => {
                this.mostrarPantalla('vivienda');
                // Verificar evento al entrar a la vivienda
                const hayEvento = this.verificarEventoVivienda();
                if (!hayEvento) {
                    this.actualizarPantallaVivienda();
                }
            });
        }

        document.getElementById('boton-volver-menu-vivienda').onclick = () => {
            this.mostrarPantalla('seleccion');
        };

        // Event listeners para botones de ropa
        document.querySelectorAll('.boton-ropa').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const tipoRopa = e.target.dataset.ropa;
                this.cambiarRopaNino(tipoRopa);
            });
        });

        // Event listener para botón de intimidad
        document.getElementById('boton-intimidad').addEventListener('click', () => {
            this.iniciarIntimidad();
        });

        // Event listeners para mejoras de vivienda
        document.querySelectorAll('.boton-mejora').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const mejoraId = e.target.closest('.mejora-vivienda').dataset.mejora;
                this.comprarMejoraVivienda(mejoraId);
            });
        });
    }

    // NUEVO: Inicializar pantalla Tienda +18
    inicializarPantallaTienda18() {
        const tienda18Card = document.getElementById('tienda-18-card');
        if (tienda18Card) {
            tienda18Card.addEventListener('click', () => {
                this.mostrarPantalla('tienda18');
                this.actualizarPantallaTienda18();
            });
        }

        document.getElementById('boton-volver-menu-tienda-18').onclick = () => {
            this.mostrarPantalla('seleccion');
        };

        // Event listeners para botones de compra +18
        document.querySelectorAll('.boton-comprar-18').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const itemId = e.target.closest('.item-tienda-18').getAttribute('data-id');
                this.comprarItem18(itemId);
            });
        });

        // Event listeners para imágenes de items +18
        document.querySelectorAll('.item-imagen-18').forEach(imagen => {
            imagen.addEventListener('click', (e) => {
                const itemId = e.target.closest('.item-tienda-18').getAttribute('data-id');
                const item = this.getTienda18Item(itemId);
                if (item) {
                    this.mostrarImagenGrande(item.imagen, item.nombre);
                }
            });
        });
    }

    // NUEVO: Métodos para Vivienda
    cambiarRopaNino(tipoRopa) {
        console.log(`👕 Cambiando ropa de Nino a: ${tipoRopa}`);
        const ninoImagen = document.getElementById('nino-imagen');
        
        // Actualizar imagen según el tipo de ropa
        switch(tipoRopa) {
            case 'normal':
                ninoImagen.src = "https://pbs.twimg.com/media/G5hROymXUAAGb2R?format=jpg&name=medium";
                break;
            case 'elegante':
                ninoImagen.src = "https://pbs.twimg.com/media/G4X8IO9XEAAabhy?format=png&name=small";
                break;
            case 'casual':
                ninoImagen.src = "https://pbs.twimg.com/media/G4X0KxYWIAA1VL_?format=png&name=small";
                break;
            case 'intima':
                ninoImagen.src = "https://pbs.twimg.com/media/G6PD1HqXEAARPnr?format=jpg&name=small";
                break;
        }
        
        // Actualizar botones activos
        document.querySelectorAll('.boton-ropa').forEach(boton => {
            boton.classList.remove('activo');
        });
        event.target.classList.add('activo');
        
        this.mostrarNotificacion(`👕 Nino ahora está vestida de forma ${tipoRopa}`);
    }

    iniciarIntimidad() {
        console.log('🔞 Iniciando intimidad con Nino');
        
        // Verificar si hay condones disponibles
        const condones = this.stats.condones || 0;
        if (condones <= 0) {
            this.mostrarNotificacionError('❌ Necesitas condones para la intimidad. Compra en la Tienda +18');
            return;
        }

        // Usar un condón
        this.stats.condones--;
        this.guardarStats();
        this.actualizarPantallaVivienda();

        // Probabilidad de bebé (5%)
        const probabilidadBebe = 0.05;
        const tuvoBebe = Math.random() < probabilidadBebe;

        if (tuvoBebe) {
            this.agregarBebe();
            this.mostrarNotificacion('👶 ¡Felicidades! Nino está embarazada');
        }

        this.mostrarNotificacion('💖 Intimidad completada con Nino');
        
        // Actualizar contador de intimidad
        const contadorIntimidad = document.getElementById('contador-intimidad');
        if (contadorIntimidad) {
            let contadorActual = parseInt(contadorIntimidad.textContent) || 0;
            contadorIntimidad.textContent = contadorActual + 1;
            
            // Deshabilitar botón si se alcanza el límite diario (3 veces)
            if (contadorActual + 1 >= 3) {
                document.getElementById('boton-intimidad').disabled = true;
            }
        }
    }

    agregarBebe() {
        if (!this.stats.bebes) {
            this.stats.bebes = [];
        }
        
        const nombresBebe = ['Akira', 'Haruki', 'Yuki', 'Sakura', 'Hikari', 'Ren', 'Kai', 'Sora'];
        const nombre = nombresBebe[Math.floor(Math.random() * nombresBebe.length)];
        
        const nuevoBebe = {
            id: Date.now(),
            nombre: nombre,
            fechaNacimiento: new Date().toLocaleDateString(),
            edad: '0 días'
        };
        
        this.stats.bebes.push(nuevoBebe);
        this.guardarStats();
        this.actualizarPantallaVivienda();
    }

    comprarMejoraVivienda(mejoraId) {
        console.log(`🏗️ Comprando mejora: ${mejoraId}`);
        // Implementar lógica de compra de mejoras
        this.mostrarNotificacion(`🏗️ Mejora ${mejoraId} comprada`);
    }

    actualizarPantallaVivienda() {
        // Actualizar estadísticas de vivienda
        const nivelVivienda = document.getElementById('nivel-vivienda');
        const mejorasDisponibles = document.getElementById('mejoras-disponibles');
        const estadoNino = document.getElementById('estado-nino');
        const humorNino = document.getElementById('humor-nino');
        const contadorIntimidad = document.getElementById('contador-intimidad');
        const cantidadBebes = document.getElementById('cantidad-bebes');
        const probabilidadBebe = document.getElementById('probabilidad-bebe');
        const contenedorBebes = document.getElementById('contenedor-bebes');

        if (nivelVivienda) nivelVivienda.textContent = this.stats.nivelVivienda || 1;
        if (mejorasDisponibles) mejorasDisponibles.textContent = this.stats.mejorasDisponibles || 3;
        if (estadoNino) estadoNino.textContent = '😊 Feliz';
        if (humorNino) humorNino.textContent = '85%';
        if (contadorIntimidad) contadorIntimidad.textContent = this.stats.intimidadHoy || 0;
        if (cantidadBebes) cantidadBebes.textContent = this.stats.bebes ? this.stats.bebes.length : 0;
        if (probabilidadBebe) probabilidadBebe.textContent = '5%';

        // Actualizar lista de bebés
        if (contenedorBebes && this.stats.bebes) {
            contenedorBebes.innerHTML = '';
            this.stats.bebes.forEach(bebe => {
                const bebeCard = document.createElement('div');
                bebeCard.className = 'bebe-card';
                bebeCard.innerHTML = `
                    <div class="bebe-nombre">👶 ${bebe.nombre}</div>
                    <div class="bebe-edad">${bebe.edad}</div>
                `;
                contenedorBebes.appendChild(bebeCard);
            });
        }

        // Actualizar botón de intimidad
        const botonIntimidad = document.getElementById('boton-intimidad');
        if (botonIntimidad) {
            const condones = this.stats.condones || 0;
            const intimidadHoy = this.stats.intimidadHoy || 0;
            
            botonIntimidad.disabled = condones <= 0 || intimidadHoy >= 3;
        }
    }

    // NUEVO: Métodos para Tienda +18
    getTienda18Item(itemId) {
        const items18 = {
            'condones-3': { nombre: 'Pack de 3 Condones', precio: 25, imagen: 'https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small' },
            'condones-10': { nombre: 'Pack de 10 Condones', precio: 70, imagen: 'https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small' },
            'lubricante': { nombre: 'Lubricante Íntimo', precio: 40, imagen: 'https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small' },
            'juguetes': { nombre: 'Juguetes Eróticos', precio: 120, imagen: 'https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small' },
            'lenceria': { nombre: 'Lencería Erótica', precio: 80, imagen: 'https://pbs.twimg.com/media/G6Jd5qjXcAAvQj0?format=png&name=small' }
        };
        return items18[itemId];
    }

    comprarItem18(itemId) {
        const item = this.getTienda18Item(itemId);
        if (!item) return;

        if (this.gastarSoles(item.precio)) {
            console.log(`🛒 Item +18 comprado: ${item.nombre}`);
            
            // Actualizar estadísticas según el item comprado
            switch(itemId) {
                case 'condones-3':
                    this.stats.condones = (this.stats.condones || 0) + 3;
                    break;
                case 'condones-10':
                    this.stats.condones = (this.stats.condones || 0) + 10;
                    break;
                case 'lubricante':
                    // Efecto especial para lubricante
                    break;
                case 'juguetes':
                    // Efecto especial para juguetes
                    break;
                case 'lenceria':
                    // Efecto especial para lencería
                    break;
            }
            
            this.guardarStats();
            this.actualizarPantallaTienda18();
            this.mostrarNotificacionCompra18(item);
        } else {
            this.mostrarNotificacionError('Fondos insuficientes');
        }
    }

    mostrarNotificacionCompra18(item) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #8b0000, #b22222);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(139, 0, 0, 0.5);
            border: 2px solid #800000;
            animation: slideIn 0.5s ease;
        `;

        notificacion.innerHTML = `
            <div>🔞 ¡Comprado!</div>
            <div style="font-size: 0.8rem;">${item.nombre}</div>
        `;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 3000);
    }

    actualizarPantallaTienda18() {
        const saldoSoles18 = document.getElementById('saldo-soles-18');
        const saldoCondones = document.getElementById('saldo-condones');
        
        if (saldoSoles18) {
            saldoSoles18.textContent = this.stats.soles || 0;
        }
        if (saldoCondones) {
            saldoCondones.textContent = this.stats.condones || 0;
        }
    }

    // NUEVO: Inicializar pantalla Novia RPG
    inicializarPantallaNoviaRPG() {
        const noviaRpgCard = document.getElementById('novia-rpg-card');
        if (noviaRpgCard) {
            noviaRpgCard.addEventListener('click', () => {
                this.mostrarPantalla('noviaRpg');
                this.actualizarPantallaNoviaRPG();
            });
        }

        document.getElementById('boton-volver-menu-novia-rpg').onclick = () => {
            this.mostrarPantalla('seleccion');
        };

        // Event listeners para acciones diarias
        document.querySelectorAll('.boton-accion').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const accionId = e.target.closest('.accion-diaria').getAttribute('data-id');
                this.realizarAccionDiaria(accionId);
            });
        });

        // Event listeners para recompensas especiales
        document.querySelectorAll('.boton-recompensa').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const recompensaId = e.target.closest('.recompensa-especial').getAttribute('data-id');
                this.comprarRecompensaEspecial(recompensaId);
            });
        });

        // Event listeners para imágenes de recompensas
        document.querySelectorAll('.recompensa-imagen').forEach(imagen => {
            imagen.addEventListener('click', (e) => {
                const recompensaId = e.target.closest('.recompensa-especial').getAttribute('data-id');
                const recompensa = this.sistemaNovia.recompensasEspeciales.find(r => r.id === recompensaId);
                if (recompensa) {
                    this.mostrarImagenGrande(recompensa.imagen, recompensa.nombre);
                }
            });
        });
    }

    // NUEVO: Inicializar pantalla Misiones
    inicializarPantallaMisiones() {
        const misionesCard = document.getElementById('misiones-card');
        if (misionesCard) {
            misionesCard.addEventListener('click', () => {
                this.mostrarPantalla('misiones');
                this.actualizarPantallaMisiones();
            });
        }

        document.getElementById('boton-volver-menu-misiones').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
    }

    // NUEVO: Inicializar pantalla Toono Esuke - MODIFICADA
    inicializarPantallaToono() {
        const toonoCard = document.getElementById('toono-card');
        if (toonoCard) {
            toonoCard.addEventListener('click', () => {
                this.mostrarPantalla('toono');
                // Asegurarse de que se muestren los personajes al entrar
                this.volverAPersonajes();
            });
        }
        
        document.getElementById('boton-volver-menu-toono').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
        
        // Event listeners para tarjetas de personajes - MODIFICADO
        document.querySelectorAll('.personaje-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const personaje = e.currentTarget.getAttribute('data-personaje');
                this.mostrarMazosPersonaje(personaje);
            });
        });

        // Event listener para el botón "Volver a Personajes"
        document.getElementById('boton-volver-personajes').addEventListener('click', () => {
            this.volverAPersonajes();
        });

        // NUEVO: Event listeners para los mazos de Toono Esuke
        document.querySelectorAll('.boton-mazo-toono').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const nombreMazo = e.target.getAttribute('data-mazo');
                this.iniciarQuiz(nombreMazo);
            });
        });
    }

    // NUEVO: Método para mostrar los mazos de un personaje específico
    mostrarMazosPersonaje(personaje) {
        console.log(`🎭 Mostrando mazos para: ${personaje}`);
        
        const contenedorPersonajes = document.querySelector('.contenedor-personajes');
        const contenedorMazos = document.getElementById('contenedor-mazos-toono');
        
        // Ocultar personajes y mostrar mazos
        if (contenedorPersonajes) contenedorPersonajes.style.display = 'none';
        if (contenedorMazos) contenedorMazos.style.display = 'block';
        
        // Ocultar todos los grupos de mazos
        document.querySelectorAll('.personaje-mazos').forEach(grupo => {
            grupo.style.display = 'none';
        });
        
        // Mostrar solo los mazos del personaje seleccionado
        const mazosPersonaje = document.querySelector(`.personaje-mazos[data-personaje="${personaje}"]`);
        if (mazosPersonaje) {
            mazosPersonaje.style.display = 'block';
        }
    }

    // NUEVO: Método para volver a la vista de personajes
    volverAPersonajes() {
        console.log('🔄 Volviendo a vista de personajes');
        
        const contenedorPersonajes = document.querySelector('.contenedor-personajes');
        const contenedorMazos = document.getElementById('contenedor-mazos-toono');
        
        // Mostrar personajes y ocultar mazos
        if (contenedorPersonajes) contenedorPersonajes.style.display = 'flex';
        if (contenedorMazos) contenedorMazos.style.display = 'none';
    }

    inicializarPantallaEventos() {
        document.getElementById('boton-aceptar-reto').onclick = () => {
            this.aceptarReto();
        };
        
        document.getElementById('boton-cerrar-evento').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
    }

    inicializarPantallaTienda() {
        const tiendaCard = document.getElementById('tienda-card');
        if (tiendaCard) {
            tiendaCard.addEventListener('click', () => {
                this.mostrarPantalla('tienda');
            });
        }
        
        document.getElementById('boton-volver-menu-tienda').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
        
        // Event listeners para botones de compra
        document.querySelectorAll('.boton-comprar').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.item-tienda').getAttribute('data-id'));
                this.comprarItem(itemId);
            });
        });
        
        // Event listeners para imágenes de items
        document.querySelectorAll('.item-imagen').forEach(imagen => {
            imagen.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.item-tienda').getAttribute('data-id'));
                const item = this.tienda.items.find(i => i.id === itemId);
                if (item) {
                    this.mostrarImagenGrande(item.imagen, item.nombre);
                }
            });
        });
        
        this.actualizarSaldoTienda();
    }

    inicializarPantallaFabrizio() {
        const fabrizioCard = document.getElementById('fabrizio-card');
        if (fabrizioCard) {
            fabrizioCard.addEventListener('click', () => {
                this.mostrarPantalla('fabrizio');
            });
        }
        
        document.getElementById('boton-volver-menu-fabrizio').onclick = () => {
            this.mostrarPantalla('seleccion');
        };
        
        // Agregar event listeners para las imágenes de meses
        document.querySelectorAll('.mes-card').forEach(card => {
            card.addEventListener('click', () => {
                const mes = card.getAttribute('data-mes');
                this.mostrarImagenMes(mes);
            });
        });
    }

    mostrarImagenMes(mes) {
        const imagenUrl = "https://pbs.twimg.com/media/G4xCUqJWQAAZQRQ?format=png&name=small";
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            flex-direction: column;
        `;

        const imagenContainer = document.createElement('div');
        imagenContainer.style.cssText = `
            background: linear-gradient(135deg, #4a90e2, #7b68ee);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            max-width: 90%;
            max-height: 90%;
            border: 4px solid #4169e1;
            box-shadow: 0 0 50px rgba(74, 144, 226, 0.5);
        `;

        const titulo = document.createElement('div');
        titulo.textContent = `📅 ${mes.charAt(0).toUpperCase() + mes.slice(1)} 2025`;
        titulo.style.cssText = `
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;

        const imagen = document.createElement('img');
        imagen.src = imagenUrl;
        imagen.style.cssText = `
            max-width: 400px;
            max-height: 400px;
            border-radius: 15px;
            border: 3px solid white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = '❌ Cerrar';
        botonCerrar.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            border: 3px solid #ff0000;
            transition: all 0.3s ease;
        `;

        botonCerrar.onmouseover = () => {
            botonCerrar.style.transform = 'scale(1.05)';
            botonCerrar.style.boxShadow = '0 5px 15px rgba(255, 107, 107, 0.4)';
        };

        botonCerrar.onmouseout = () => {
            botonCerrar.style.transform = 'scale(1)';
            botonCerrar.style.boxShadow = 'none';
        };

        botonCerrar.onclick = () => {
            document.body.removeChild(overlay);
        };

        imagenContainer.appendChild(titulo);
        imagenContainer.appendChild(imagen);
        imagenContainer.appendChild(botonCerrar);
        overlay.appendChild(imagenContainer);
        document.body.appendChild(overlay);
    }

    inicializarPantallaDiarias() {
        // Botón volver
        document.getElementById('boton-volver-menu-diarias').onclick = () => {
            this.mostrarPantalla('seleccion');
        };

        // Event listeners para checkboxes - MODIFICADO
        document.getElementById('check-lectura').addEventListener('change', () => this.toggleTarea('lectura'));
        document.getElementById('check-idiomas').addEventListener('change', () => this.toggleTarea('idiomas'));
        document.getElementById('check-correr').addEventListener('change', () => this.toggleTarea('correr'));
        document.getElementById('check-trotar').addEventListener('change', () => this.toggleTarea('trotar'));
        document.getElementById('check-fuerza').addEventListener('change', () => this.toggleTarea('fuerza'));

        // Actualizar pantalla
        this.actualizarPantallaTareas();
    }

    inicializarPantallasLastSummerMazos() {
        document.getElementById('boton-volver-lastsummer1').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
        
        document.getElementById('boton-volver-lastsummer2').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
        
        document.getElementById('boton-volver-lastsummer3').onclick = () => {
            this.mostrarPantalla('lastsummer');
        };
    }

    inicializarPantallaSeleccion() {
        this.statsGlobal = document.getElementById('stats-global');
        
        // MODIFICADO: Toono Esuke ahora está en Aprendizaje junto a Last Summer
        const toonoCard = document.getElementById('toono-card');
        if (toonoCard) {
            toonoCard.addEventListener('click', () => {
                this.mostrarPantalla('toono');
            });
        }
        
        // Inicializar tarjeta de tienda
        const tiendaCard = document.getElementById('tienda-card');
        if (tiendaCard) {
            tiendaCard.addEventListener('click', () => {
                this.mostrarPantalla('tienda');
            });
        }
        
        // Inicializar tarjeta de Fabrizio
        const fabrizioCard = document.getElementById('fabrizio-card');
        if (fabrizioCard) {
            fabrizioCard.addEventListener('click', () => {
                this.mostrarPantalla('fabrizio');
            });
        }
        
        this.inicializarSeccionNovia();
        this.actualizarPantallaSeleccion();
    }

    inicializarSeccionNovia() {
        const noviaCard = document.getElementById('novia-card');
        if (noviaCard) {
            noviaCard.addEventListener('click', () => {
                this.mostrarPantallaNovia();
            });
        }
    }

    inicializarSeccionLastSummer() {
        const lastSummerCard = document.getElementById('lastsummer-card');
        if (lastSummerCard) {
            lastSummerCard.addEventListener('click', () => {
                this.mostrarPantallaLastSummer();
            });
        }
    }

    inicializarPantallaLastSummer() {
        this.botonVolverMenuLastSummer = document.getElementById('boton-volver-menu-lastsummer');
        this.botonVolverMenuLastSummer.onclick = () => this.mostrarPantalla('seleccion');
        
        document.getElementById('lastsummer1').onclick = () => this.mostrarMazosLastSummer1();
        document.getElementById('lastsummer2').onclick = () => this.mostrarMazosLastSummer2();
        document.getElementById('lastsummer3').onclick = () => this.mostrarMazosLastSummer3();
    }

    mostrarMazosLastSummer1() {
        this.mostrarMazosPorCategoria('LS1', 'lastsummer1', 'contenedor-lastsummer1-mazos');
    }

    mostrarMazosLastSummer2() {
        this.mostrarMazosPorCategoria('LS2', 'lastsummer2', 'contenedor-lastsummer2-mazos');
    }

    mostrarMazosLastSummer3() {
        this.mostrarMazosPorCategoria('LS3', 'lastsummer3', 'contenedor-lastsummer3-mazos');
    }

    mostrarMazosPorCategoria(prefijo, pantallaId, contenedorId) {
        const contenedor = document.getElementById(contenedorId);
        contenedor.innerHTML = '';
        
        for (const nombreMazo in this.mazos) {
            if (nombreMazo.startsWith(prefijo)) {
                const statsMazo = this.stats.mazos[nombreMazo];
                const boton = document.createElement('button');
                boton.className = 'boton-mazo';
                boton.innerHTML = `
                    ${nombreMazo.replace(prefijo + ' - ', '')}<br>
                    Mejor: ${statsMazo.mejorPuntuacion}%<br>
                    Jugado: ${statsMazo.vecesJugado} veces<br>
                    Récord: ${statsMazo.mejorRacha} aciertos<br>
                    100%: ${statsMazo.completados100} veces
                `;
                boton.onclick = () => this.iniciarQuiz(nombreMazo);
                contenedor.appendChild(boton);
            }
        }
        
        this.mostrarPantalla(pantallaId);
    }

    mostrarPantallaLastSummer() {
        this.mostrarPantalla('lastsummer');
    }

    inicializarPantallaNovia() {
        this.contenedorLogros = document.getElementById('contenedor-logros');
        this.contenedorAcciones = document.getElementById('contenedor-acciones');
        this.botonVolverMenuNovia = document.getElementById('boton-volver-menu-novia');
        
        this.botonVolverMenuNovia.onclick = () => this.mostrarPantalla('seleccion');
    }

    mostrarPantallaNovia() {
        this.actualizarPantallaRecompensas();
        this.mostrarPantalla('novia');
    }

    actualizarPantallaRecompensas() {
        this.actualizarProgresoRecompensas();
        
        this.contenedorLogros.innerHTML = '';
        this.recompensas.logros.forEach(logro => {
            const logroElement = this.crearElementoRecompensa(logro);
            this.contenedorLogros.appendChild(logroElement);
        });

        this.contenedorAcciones.innerHTML = '';
        this.recompensas.acciones.forEach(accion => {
            const accionElement = this.crearElementoRecompensa(accion);
            this.contenedorAcciones.appendChild(accionElement);
        });
    }

    crearElementoRecompensa(recompensa) {
        const elemento = document.createElement('div');
        const esDesbloqueado = recompensa.desbloqueado;
        const esLogro = recompensa.tipo === 'logro';
        
        elemento.className = `recompensa ${esDesbloqueado ? 'desbloqueado' : 'recompensa-bloqueado'}`;
        
        let contenidoHTML = '';
        
        if (esLogro) {
            const porcentaje = Math.min(100, (recompensa.progresoActual / recompensa.requerimiento) * 100);
            contenidoHTML = `
                <img src="${recompensa.imagen}" alt="${recompensa.nombre}" class="recompensa-imagen">
                <div class="recompensa-titulo">${recompensa.nombre}</div>
                <div class="recompensa-descripcion">${recompensa.descripcion}</div>
                <div class="recompensa-progreso">
                    <div class="recompensa-progreso-bar" style="width: ${porcentaje}%"></div>
                </div>
                <div class="recompensa-progreso-texto">
                    ${recompensa.progresoActual}/${recompensa.requerimiento} mazos completados
                </div>
            `;
        } else {
            contenidoHTML = `
                ${!esDesbloqueado ? '<div class="candado">🔒</div>' : ''}
                <img src="${recompensa.imagen}" alt="${recompensa.nombre}" class="recompensa-imagen">
                <div class="recompensa-titulo">${recompensa.nombre}</div>
                <div class="recompensa-descripcion">${recompensa.descripcion}</div>
            `;
        }
        
        contenidoHTML += `
            <div class="recompensa-estado ${esDesbloqueado ? 'recompensa-desbloqueado' : 'recompensa-bloqueado-texto'}">
                ${esDesbloqueado ? '✅ Desbloqueado' : '🔒 Bloqueado'}
            </div>
        `;
        
        elemento.innerHTML = contenidoHTML;
        
        // Agregar event listener para mostrar imagen en grande
        const imagen = elemento.querySelector('.recompensa-imagen');
        if (imagen) {
            imagen.addEventListener('click', () => {
                this.mostrarImagenGrande(recompensa.imagen, recompensa.nombre);
            });
        }
        
        if (!esLogro && esDesbloqueado) {
            elemento.style.cursor = 'pointer';
            elemento.addEventListener('click', (event) => {
                console.log(`🖱️ Clic en acción: ${recompensa.nombre}`);
                this.reproducirAudioAccion(recompensa, event);
            });
        }
        
        return elemento;
    }

    reproducirAudioAccion(accion, event) {
        console.log('🎵 ReproducirAudioAccion llamado para:', accion.nombre);
        console.log('Audio a reproducir:', accion.audio);
        
        if (accion.audio) {
            this.reproducirAudio(accion.audio);
            
            const elemento = event.currentTarget;
            elemento.style.transform = 'scale(0.95)';
            elemento.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
            
            setTimeout(() => {
                elemento.style.transform = 'scale(1)';
                elemento.style.boxShadow = '';
            }, 200);
        }
    }

    actualizarProgresoRecompensas() {
        const mazosCompletados = this.stats.mazosCompletados;
        
        this.recompensas.logros.forEach(logro => {
            logro.progresoActual = mazosCompletados;
            logro.desbloqueado = mazosCompletados >= logro.requerimiento;
        });

        this.recompensas.acciones.forEach(accion => {
            const logroRequerido = this.recompensas.logros.find(l => l.id === accion.logroRequerido);
            accion.desbloqueado = logroRequerido ? logroRequerido.desbloqueado : false;
        });
    }

    verificarRecompensas() {
        this.actualizarProgresoRecompensas();
        
        const recompensasDesbloqueadas = [
            ...this.recompensas.logros.filter(l => l.desbloqueado),
            ...this.recompensas.acciones.filter(a => a.desbloqueado)
        ].map(r => r.id);

        recompensasDesbloqueadas.forEach(id => {
            if (!this.stats.recompensasDesbloqueadas.includes(id)) {
                const recompensa = [...this.recompensas.logros, ...this.recompensas.acciones].find(r => r.id === id);
                if (recompensa) {
                    console.log(`🎉 ¡${recompensa.tipo === 'logro' ? 'Logro' : 'Acción'} desbloqueado: ${recompensa.nombre}!`);
                    this.stats.recompensasDesbloqueadas.push(id);
                }
            }
        });

        this.guardarStats();
    }

    actualizarPantallaSeleccion() {
        this.statsGlobal.textContent = `🏆 Mazos completados al 100%: ${this.stats.mazosCompletados}`;
        this.actualizarEstadisticasDiarias();
        this.actualizarEstadisticaEvento();
        this.actualizarEstadisticasSoles();
        this.actualizarEstadisticasCorazones();
        
        // Actualizar estadísticas de Vivienda y Tienda +18
        const statsCondones = document.getElementById('stats-condones');
        const statsBebes = document.getElementById('stats-bebes');
        
        if (statsCondones) {
            statsCondones.textContent = `🔞 Condones: ${this.stats.condones || 0}`;
        }
        if (statsBebes) {
            statsBebes.textContent = `👶 Bebés: ${this.stats.bebes ? this.stats.bebes.length : 0}`;
        }
    }

    inicializarPantallaQuiz() {
        this.contador = document.getElementById('contador');
        this.botonHome = document.getElementById('boton-home');
        this.palabraJapones = document.getElementById('palabra-japones');
        this.lecturaElement = document.getElementById('lectura');
        this.contenedorOpciones = document.getElementById('contenedor-opciones');
        this.resultado = document.getElementById('resultado');

        this.botonHome.onclick = () => this.volverMenu();
        this.opciones = Array.from(document.getElementsByClassName('opcion'));
    }

    inicializarPantallaResultados() {
        this.resultadoFinal = document.getElementById('resultado-final');
        this.botonVolverMenu = document.getElementById('boton-volver-menu');
        this.botonReintentar = document.getElementById('boton-reintentar');

        this.botonVolverMenu.onclick = () => this.volverMenu();
        this.botonReintentar.onclick = () => this.reintentarMazo();
    }

    mostrarPantalla(nombrePantalla) {
        for (const pantalla in this.pantallas) {
            if (this.pantallas[pantalla]) {
                this.pantallas[pantalla].classList.remove('activa');
            }
        }
        if (this.pantallas[nombrePantalla]) {
            this.pantallas[nombrePantalla].classList.add('activa');
        }
    }

    iniciarQuiz(nombreMazo) {
        this.estado.nombreMazoActual = nombreMazo;
        this.estado.mazoActual = [...this.mazos[nombreMazo]];
        this.mezclarArray(this.estado.mazoActual);
        
        this.estado.aciertos = 0;
        this.estado.errores = 0;
        this.estado.totalInicial = this.estado.mazoActual.length;
        this.estado.preguntasRespondidas = 0;
        
        this.stats.mazos[nombreMazo].vecesJugado++;
        
        this.mostrarPantalla('quiz');
        this.mostrarSiguientePalabra();
    }

    mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    mostrarSiguientePalabra() {
        if (this.estado.mazoActual.length === 0) {
            this.finalizarQuiz();
            return;
        }

        const [palabraActual, correcta, lectura] = this.estado.mazoActual[0];
        this.estado.palabraActual = palabraActual;
        this.estado.correcta = correcta;
        this.estado.lectura = lectura;

        const opciones = [correcta];
        const todasTraducciones = [];
        
        for (const mazo in this.mazos) {
            for (const palabra of this.mazos[mazo]) {
                todasTraducciones.push(palabra[1]);
            }
        }

        while (opciones.length < 4) {
            const opcionFalsa = todasTraducciones[Math.floor(Math.random() * todasTraducciones.length)];
            if (!opciones.includes(opcionFalsa)) {
                opciones.push(opcionFalsa);
            }
        }

        this.mezclarArray(opciones);

        this.palabraJapones.textContent = palabraActual;
        this.lecturaElement.textContent = '';
        this.resultado.textContent = '';
        this.resultado.className = 'resultado';

        this.actualizarContador();

        this.opciones.forEach((boton, i) => {
            boton.textContent = opciones[i];
            boton.className = 'opcion';
            boton.disabled = false;
            boton.onclick = () => this.verificarRespuesta(opciones[i], boton);
        });
    }

    actualizarContador() {
        this.contador.textContent = 
            `Aciertos: ${this.estado.aciertos} | Errores: ${this.estado.errores} | Progreso: ${this.estado.preguntasRespondidas}/${this.estado.totalInicial}`;
    }

    verificarRespuesta(opcionSeleccionada, boton) {
        this.estado.preguntasRespondidas++;

        this.opciones.forEach(boton => boton.disabled = true);

        if (opcionSeleccionada === this.estado.correcta) {
            this.estado.aciertos++;
            this.resultado.textContent = '✅ ¡Correcto!';
            this.resultado.className = 'resultado correcto';

            this.opciones.forEach(boton => {
                if (boton.textContent === this.estado.correcta) {
                    boton.classList.add('correcta');
                }
            });

            this.stats.mazos[this.estado.nombreMazoActual].rachaActual++;
            const rachaActual = this.stats.mazos[this.estado.nombreMazoActual].rachaActual;
            const mejorRacha = this.stats.mazos[this.estado.nombreMazoActual].mejorRacha;
            
            if (rachaActual > mejorRacha) {
                this.stats.mazos[this.estado.nombreMazoActual].mejorRacha = rachaActual;
            }

            this.estado.mazoActual.shift();

            this.lecturaElement.textContent = `Lectura: ${this.estado.lectura}`;

            setTimeout(() => this.mostrarSiguientePalabra(), 1500);

        } else {
            this.estado.errores++;
            this.resultado.textContent = '❌ Incorrecto';
            this.resultado.className = 'resultado incorrecto';

            this.opciones.forEach(boton => {
                if (boton.textContent === this.estado.correcta) {
                    boton.classList.add('correcta');
                } else if (boton.textContent === opcionSeleccionada) {
                    boton.classList.add('incorrecta');
                }
            });

            this.stats.mazos[this.estado.nombreMazoActual].rachaActual = 0;

            this.estado.mazoActual.push(this.estado.mazoActual.shift());

            this.lecturaElement.textContent = `Lectura: ${this.estado.lectura}`;

            setTimeout(() => this.mostrarSiguientePalabra(), 2000);
        }

        this.actualizarContador();
    }

    finalizarQuiz() {
        const porcentaje = Math.max(0, ((this.estado.aciertos - this.estado.errores) / this.estado.totalInicial) * 100);
        
        const statsMazo = this.stats.mazos[this.estado.nombreMazoActual];
        statsMazo.ultimaPuntuacion = porcentaje;
        statsMazo.aciertosTotales += this.estado.aciertos;
        statsMazo.erroresTotales += this.estado.errores;
        
        if (porcentaje > statsMazo.mejorPuntuacion) {
            statsMazo.mejorPuntuacion = porcentaje;
        }
        
        if (porcentaje === 100) {
            this.stats.mazosCompletados++;
            statsMazo.completados100++;
            
            // Recompensa por completar mazo al 100%: 1 Sol
            this.agregarSoles(1);
            this.mostrarNotificacionSoles(1, 'Mazo completado al 100%');
            
            // NUEVO: Agregar corazones por completar mazo
            this.agregarCorazones(5);
            
            // NUEVO: Contar para misiones semanales
            this.completarMazoParaMisiones();
            
            // CONTAR PARA EVENTO DIARIO
            this.completarMazoParaEvento();
            
            // NUEVO: Sistema de eventos especiales con 66% de probabilidad para imagen especial
            const probabilidadImagenEspecial = Math.random();
            if (probabilidadImagenEspecial < 0.66) {
                console.log('🎰 ¡Probabilidad ganadora! Mostrando imagen especial...');
                setTimeout(() => {
                    this.mostrarImagenEspecial();
                }, 1000);
            } else {
                console.log('🎰 Esta vez no tocó la imagen especial');
            }
            
            // NUEVO: Sistema de eventos especiales con imágenes y audio
            this.mostrarEventoEspecialImagen();
            
            // NUEVO: Sistema de eventos especiales con videos
            this.mostrarEventoEspecialVideo();
            
        } else {
            // NUEVO: Penalización por no completar mazo al 100%
            this.quitarCorazones(2);
        }
        
        this.verificarRecompensas();
        
        this.guardarStats();
        this.mostrarPantalla('resultados');
        
        const textoResultados = this.crearTextoResultados(porcentaje, statsMazo);
        this.resultadoFinal.textContent = textoResultados;
    }

    crearTextoResultados(porcentaje, statsMazo) {
        let emoji, mensajeEspecial;
        
        if (porcentaje === 100) {
            emoji = "🎉";
            mensajeEspecial = `\n🌟 ¡PERFECTO! Has completado este mazo al 100% por ${statsMazo.completados100}ª vez!`;
        } else if (porcentaje >= 90) {
            emoji = "🎉";
            mensajeEspecial = "\n¡Excelente trabajo!";
        } else if (porcentaje >= 70) {
            emoji = "👍";
            mensajeEspecial = "\n¡Buen trabajo!";
        } else if (porcentaje >= 50) {
            emoji = "😊";
            mensajeEspecial = "\n¡Sigue practicando!";
        } else {
            emoji = "💪";
            mensajeEspecial = "\n¡No te rindas!";
        }
        
        return `${emoji} Quiz Completado - ${this.estado.nombreMazoActual} ${emoji}

📊 RESULTADO ACTUAL:
   Puntuación: ${porcentaje.toFixed(1)}%
   Aciertos: ${this.estado.aciertos} | Errores: ${this.estado.errores}
   Total de palabras: ${this.estado.totalInicial}${mensajeEspecial}

🏆 ESTADÍSTICAS DEL MAZO:
   Mejor puntuación: ${statsMazo.mejorPuntuacion.toFixed(1)}%
   Veces jugado: ${statsMazo.vecesJugado}
   Mejor racha: ${statsMazo.mejorRacha} aciertos
   Aciertos totales: ${statsMazo.aciertosTotales}
   ErroresTotales: ${statsMazo.erroresTotales}
   Completados al 100%: ${statsMazo.completados100} veces

⭐ LOGROS GLOBALES:
   Mazos completados al 100%: ${this.stats.mazosCompletados}
   💰 Soles obtenidos: ${porcentaje === 100 ? '1 Sol' : '0 Soles'}
   💖 Corazones obtenidos: ${porcentaje === 100 ? '+5 corazones' : '-2 corazones'}`;
    }

    reintentarMazo() {
        this.iniciarQuiz(this.estado.nombreMazoActual);
    }

    volverMenu() {
        this.actualizarPantallaSeleccion();
        this.mostrarPantalla('seleccion');
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AplicacionVocabulario();
});
