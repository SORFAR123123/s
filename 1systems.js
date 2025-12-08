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
