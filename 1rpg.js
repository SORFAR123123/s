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
