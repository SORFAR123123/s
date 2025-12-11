// ============================================================================
// SISTEMA DE EXPERIENCIA GLOBAL - VERSIÓN INDEPENDIENTE
// ============================================================================

const sistemaExperienciaGlobal = {
    // ESTRUCTURA DE NIVELES Y MULTIPLICADORES
    configuracion: {
        // Experiencia base necesaria por nivel
        experienciaBase: 100,
        
        // Multiplicadores de humor/estado
        multiplicadoresHumor: {
            normal: 1.0,
            feliz: 1.5,
            triste: 0.7,
            enojado: 0.5,
            enamorado: 2.0,
            motivado: 1.8,
            cansado: 0.8
        },
        
        // Experiencia por porcentaje de mazo (si es aplicable)
        experienciaPorMazo: {
            '100%': 30,
            '90-99%': 20,
            '80-89%': 15,
            '70-79%': 10,
            '60-69%': 5,
            '50-59%': 3,
            '0-49%': 1
        },
        
        // Regalos y sus valores de experiencia
        regalos: {
            flores: { experiencia: 10, costo: 5 },
            chocolates: { experiencia: 25, costo: 10 },
            joyas: { experiencia: 50, costo: 20 },
            especial: { experiencia: 100, costo: 50 }
        }
    },
    
    // CALCULAR EXPERIENCIA PARA UN NIVEL ESPECÍFICO
    calcularExpParaNivel: function(nivel, formulaPersonalizada = null) {
        if (formulaPersonalizada) {
            return formulaPersonalizada(nivel);
        }
        
        // Fórmula estándar: 100 * (nivel + 1)
        return this.configuracion.experienciaBase * (nivel + 1);
    },
    
    // CALCULAR EXPERIENCIA GANADA CON MULTIPLICADOR
    calcularExperienciaGanada: function(experienciaBase, multiplicador = 1.0) {
        return Math.round(experienciaBase * multiplicador);
    },
    
    // APLICAR EXPERIENCIA Y VERIFICAR SUBIDA DE NIVEL
    aplicarExperiencia: function(personaje, cantidad, motivo = "", aplicarMultiplicador = true) {
        if (!personaje || typeof personaje !== 'object') {
            console.error("Personaje no válido para aplicar experiencia");
            return null;
        }
        
        // Asegurar propiedades básicas
        if (typeof personaje.nivel === 'undefined') personaje.nivel = 0;
        if (typeof personaje.experiencia === 'undefined') personaje.experiencia = 0;
        if (typeof personaje.experienciaTotal === 'undefined') personaje.experienciaTotal = 0;
        
        // Aplicar multiplicador de humor si existe
        let cantidadFinal = cantidad;
        if (aplicarMultiplicador && personaje.multiplicadorExp) {
            cantidadFinal = this.calcularExperienciaGanada(cantidad, personaje.multiplicadorExp);
        }
        
        // Aplicar la experiencia
        personaje.experiencia += cantidadFinal;
        personaje.experienciaTotal += cantidadFinal;
        
        console.log(`📈 ${personaje.nombre || 'Personaje'}: +${cantidadFinal} XP (${motivo})`);
        
        // Verificar subida de nivel
        const resultadoNivel = this.verificarSubidaNivel(personaje);
        
        return {
            experienciaGanada: cantidadFinal,
            nuevoNivel: resultadoNivel.nuevoNivel,
            nivelesSubidos: resultadoNivel.nivelesSubidos,
            experienciaRestante: personaje.experiencia
        };
    },
    
    // VERIFICAR SUBIDA DE NIVEL
    verificarSubidaNivel: function(personaje, formulaPersonalizada = null) {
        let nivelesSubidos = 0;
        const nivelInicial = personaje.nivel;
        
        while (true) {
            const expNecesaria = this.calcularExpParaNivel(personaje.nivel, formulaPersonalizada);
            
            if (personaje.experiencia >= expNecesaria && personaje.experiencia > 0) {
                personaje.nivel++;
                personaje.experiencia -= expNecesaria;
                nivelesSubidos++;
                
                console.log(`⬆️ ${personaje.nombre || 'Personaje'} subió a nivel ${personaje.nivel}`);
            } else {
                break;
            }
        }
        
        return {
            nuevoNivel: personaje.nivel,
            nivelesSubidos: nivelesSubidos,
            subioNivel: nivelesSubidos > 0,
            nivelAnterior: nivelInicial
        };
    },
    
    // CALCULAR PORCENTAJE PARA SIGUIENTE NIVEL
    calcularPorcentajeSiguienteNivel: function(personaje, formulaPersonalizada = null) {
        const expNecesaria = this.calcularExpParaNivel(personaje.nivel, formulaPersonalizada);
        const porcentaje = (personaje.experiencia / expNecesaria) * 100;
        
        return {
            porcentaje: Math.min(100, porcentaje),
            experienciaActual: personaje.experiencia,
            experienciaNecesaria: expNecesaria,
            progreso: `${personaje.experiencia}/${expNecesaria}`
        };
    },
    
    // GENERAR HUMOR ALEATORIO CON MULTIPLICADOR
    generarHumorAleatorio: function(poolPersonalizado = null) {
        const pool = poolPersonalizado || [
            { id: "feliz", nombre: "Feliz 😊", multiplicador: 1.5, permiteEventosEspeciales: true },
            { id: "normal", nombre: "Normal 😐", multiplicador: 1.0, permiteEventosEspeciales: true },
            { id: "triste", nombre: "Triste 😢", multiplicador: 0.7, permiteEventosEspeciales: false },
            { id: "enojado", nombre: "Enojado 😠", multiplicador: 0.5, permiteEventosEspeciales: false },
            { id: "enamorado", nombre: "Enamorado 😍", multiplicador: 2.0, permiteEventosEspeciales: true },
            { id: "motivado", nombre: "Motivado 💪", multiplicador: 1.8, permiteEventosEspeciales: true },
            { id: "cansado", nombre: "Cansado 😴", multiplicador: 0.8, permiteEventosEspeciales: false }
        ];
        
        return pool[Math.floor(Math.random() * pool.length)];
    },
    
    // CALCULAR EXPERIENCIA DE MAZO (para apps de aprendizaje)
    calcularExperienciaMazo: function(porcentajeAcierto, configPersonalizada = null) {
        const config = configPersonalizada || this.configuracion.experienciaPorMazo;
        
        if (porcentajeAcierto === 100) return config['100%'];
        if (porcentajeAcierto >= 90) return config['90-99%'];
        if (porcentajeAcierto >= 80) return config['80-89%'];
        if (porcentajeAcierto >= 70) return config['70-79%'];
        if (porcentajeAcierto >= 60) return config['60-69%'];
        if (porcentajeAcierto >= 50) return config['50-59%'];
        return config['0-49%'];
    },
    
    // CREAR PERSONAJE NUEVO CON SISTEMA DE EXPERIENCIA
    crearPersonaje: function(nombre, configuracionPersonalizada = {}) {
        const personaje = {
            id: `personaje_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            nombre: nombre,
            nivel: configuracionPersonalizada.nivelInicial || 0,
            experiencia: configuracionPersonalizada.experienciaInicial || 0,
            experienciaTotal: configuracionPersonalizada.experienciaInicial || 0,
            multiplicadorExp: configuracionPersonalizada.multiplicadorInicial || 1.0,
            humorActual: configuracionPersonalizada.humorInicial || this.generarHumorAleatorio(),
            ultimaActualizacionHumor: new Date().toISOString(),
            momentosDesbloqueados: [],
            estadisticas: {
                mazosCompletados: 0,
                experienciaHoy: 0,
                regalosRecibidos: 0,
                diasConsecutivos: 0
            }
        };
        
        // Aplicar multiplicador del humor si existe
        if (personaje.humorActual && personaje.humorActual.multiplicador) {
            personaje.multiplicadorExp = personaje.humorActual.multiplicador;
        }
        
        return personaje;
    },
    
    // ACTUALIZAR HUMOR DEL PERSONAJE (diariamente o por evento)
    actualizarHumorPersonaje: function(personaje, forzarNuevoHumor = false) {
        const hoy = new Date().toISOString().split('T')[0];
        const ultimaFecha = personaje.ultimaActualizacionHumor ? 
                           personaje.ultimaActualizacionHumor.split('T')[0] : null;
        
        if (forzarNuevoHumor || !ultimaFecha || ultimaFecha !== hoy) {
            const nuevoHumor = this.generarHumorAleatorio();
            personaje.humorActual = nuevoHumor;
            personaje.multiplicadorExp = nuevoHumor.multiplicador;
            personaje.ultimaActualizacionHumor = new Date().toISOString();
            
            console.log(`😊 ${personaje.nombre} está ahora: ${nuevoHumor.nombre} (${nuevoHumor.multiplicador}x)`);
            return nuevoHumor;
        }
        
        return personaje.humorActual;
    },
    
    // FUNCIÓN PARA OBTENER ESTADÍSTICAS
    obtenerEstadisticas: function(personaje) {
        const progreso = this.calcularPorcentajeSiguienteNivel(personaje);
        
        return {
            nombre: personaje.nombre,
            nivel: personaje.nivel,
            experiencia: {
                actual: personaje.experiencia,
                total: personaje.experienciaTotal,
                siguienteNivel: progreso.experienciaNecesaria,
                porcentaje: progreso.porcentaje
            },
            humor: personaje.humorActual ? {
                nombre: personaje.humorActual.nombre,
                multiplicador: personaje.humorActual.multiplicador,
                permiteEventosEspeciales: personaje.humorActual.permiteEventosEspeciales
            } : null,
            multiplicadorActual: personaje.multiplicadorExp,
            estadisticas: personaje.estadisticas || {}
        };
    },
    
    // FUNCIÓN PARA MOSTRAR BARRA DE PROGRESO EN HTML
    generarBarraProgresoHTML: function(personaje, elementoId = null, configPersonalizada = {}) {
        const progreso = this.calcularPorcentajeSiguienteNivel(personaje);
        const config = {
            altura: configPersonalizada.altura || '20px',
            colorFondo: configPersonalizada.colorFondo || '#333',
            colorRelleno: configPersonalizada.colorRelleno || '#4CAF50',
            mostrarTexto: configPersonalizada.mostrarTexto !== false,
            mostrarPorcentaje: configPersonalizada.mostrarPorcentaje !== false
        };
        
        const html = `
            <div class="barra-experiencia-contenedor" style="width: 100%; background: ${config.colorFondo}; border-radius: 10px; overflow: hidden; height: ${config.altura};">
                <div class="barra-experiencia-relleno" 
                     style="width: ${progreso.porcentaje}%; 
                            background: ${config.colorRelleno}; 
                            height: 100%;
                            transition: width 0.5s ease;
                            display: flex;
                            align-items: center;
                            justify-content: center;">
                    ${config.mostrarTexto ? 
                        `<span class="texto-barra" style="color: white; font-weight: bold; font-size: ${parseInt(config.altura) * 0.6}px;">
                            ${config.mostrarPorcentaje ? 
                                `${Math.round(progreso.porcentaje)}%` : 
                                `${progreso.experienciaActual}/${progreso.experienciaNecesaria}`
                            }
                        </span>` : ''
                    }
                </div>
            </div>
        `;
        
        if (elementoId) {
            const elemento = document.getElementById(elementoId);
            if (elemento) {
                elemento.innerHTML = html;
            }
        }
        
        return html;
    },
    
    // FUNCIÓN PARA MOSTRAR NOTIFICACIÓN DE EXPERIENCIA
    mostrarNotificacionExperiencia: function(cantidad, personaje = null, elementoId = 'notificacion-experiencia') {
        const mensaje = personaje ? 
            `🎉 ${personaje.nombre} ganó ${cantidad} XP!` : 
            `🎉 +${cantidad} experiencia!`;
        
        // Crear elemento de notificación
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 10000;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        notificacion.textContent = mensaje;
        notificacion.id = 'notif-exp-' + Date.now();
        
        // Añadir animaciones CSS si no existen
        if (!document.querySelector('#estilos-animaciones-exp')) {
            const estilos = document.createElement('style');
            estilos.id = 'estilos-animaciones-exp';
            estilos.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `;
            document.head.appendChild(estilos);
        }
        
        document.body.appendChild(notificacion);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.parentNode.removeChild(notificacion);
            }
        }, 3000);
    }
};

// ============================================================================
// FUNCIONES GLOBALES DE ACCESO RÁPIDO
// ============================================================================

// Función global para usar el sistema
window.SistemaExp = sistemaExperienciaGlobal;

// Función rápida para crear personaje
window.crearPersonajeExp = function(nombre, config = {}) {
    return sistemaExperienciaGlobal.crearPersonaje(nombre, config);
};

// Función rápida para agregar experiencia
window.agregarExperiencia = function(personaje, cantidad, motivo = "") {
    return sistemaExperienciaGlobal.aplicarExperiencia(personaje, cantidad, motivo);
};

// Función rápida para calcular experiencia de mazo
window.calcularExpMazo = function(porcentaje) {
    return sistemaExperienciaGlobal.calcularExperienciaMazo(porcentaje);
};

// Función rápida para mostrar barra de progreso
window.mostrarBarraExperiencia = function(personaje, elementoId, config = {}) {
    return sistemaExperienciaGlobal.generarBarraProgresoHTML(personaje, elementoId, config);
};

// ============================================================================
// EJEMPLOS DE USO RÁPIDO
// ============================================================================

/*
// EJEMPLO 1: Crear un personaje
const miPersonaje = SistemaExp.crearPersonaje("Akira");

// EJEMPLO 2: Agregar experiencia
SistemaExp.aplicarExperiencia(miPersonaje, 50, "Mazo completado");

// EJEMPLO 3: Mostrar barra de progreso en un div
SistemaExp.generarBarraProgresoHTML(miPersonaje, "mi-barra-exp", {
    colorRelleno: "#ff6b9d",
    altura: "25px"
});

// EJEMPLO 4: Obtener estadísticas
const stats = SistemaExp.obtenerEstadisticas(miPersonaje);
console.log(stats);

// EJEMPLO 5: Usar función global rápida
agregarExperiencia(miPersonaje, 30, "Regalo recibido");
*/

console.log("✅ Sistema de Experiencia Global cargado y listo para usar!");
