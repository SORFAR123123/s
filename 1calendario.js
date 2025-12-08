// ============================================================================
// CALENDARIO FABRIZIO 2026 - SISTEMA COMPLETO
// ============================================================================

const calendarioFabrizio = {
    // Año actual
    anio: 2026,
    
    // Mes seleccionado actualmente
    mesActual: null,
    
    // Semana seleccionada actualmente
    semanaActual: null,
    
    // Fotos por semana (5 fotos de lunes a viernes)
    fotosPorSemana: 5,
    
    // Estructura completa del calendario 2026
    calendario: {
        1: { // Enero
            nombre: "Enero 2026",
            semanas: 4,
            fotosTotales: 20 // 4 semanas × 5 fotos
        },
        2: { // Febrero
            nombre: "Febrero 2026",
            semanas: 4,
            fotosTotales: 20
        },
        3: { // Marzo
            nombre: "Marzo 2026",
            semanas: 4,
            fotosTotales: 20
        },
        4: { // Abril
            nombre: "Abril 2026",
            semanas: 4,
            fotosTotales: 20
        },
        5: { // Mayo
            nombre: "Mayo 2026",
            semanas: 4,
            fotosTotales: 20
        },
        6: { // Junio
            nombre: "Junio 2026",
            semanas: 4,
            fotosTotales: 20
        },
        7: { // Julio
            nombre: "Julio 2026",
            semanas: 4,
            fotosTotales: 20
        },
        8: { // Agosto
            nombre: "Agosto 2026",
            semanas: 4,
            fotosTotales: 20
        },
        9: { // Septiembre
            nombre: "Septiembre 2026",
            semanas: 4,
            fotosTotales: 20
        },
        10: { // Octubre
            nombre: "Octubre 2026",
            semanas: 4,
            fotosTotales: 20
        },
        11: { // Noviembre
            nombre: "Noviembre 2026",
            semanas: 4,
            fotosTotales: 20
        },
        12: { // Diciembre
            nombre: "Diciembre 2026",
            semanas: 4,
            fotosTotales: 20
        }
    },
    
    // URLs de las fotos (aquí pondrías tus URLs reales)
    fotos: {
        // Ejemplo: '1_1_1' = Mes1_Semana1_Foto1
        '1_1_1': 'https://media.discordapp.net/attachments/1200278976225091684/1353548539031982120/IMG_20250323_205753.jpg?ex=69382b0f&is=6936d98f&hm=f982670f0ed1bf59b6b9fd0adc16df63669223fdb1196fc64c2284a00799898b&=&format=webp&width=414&height=552',
        '1_1_2': 'https://pbs.twimg.com/media/G5RW6DzWgAA_UnX?format=jpg&name=4096x4096',
        '1_1_3': 'imagenes/calendario/enero/semana1/foto3.jpg',
        '1_1_4': 'imagenes/calendario/enero/semana1/foto4.jpg',
        '1_1_5': 'imagenes/calendario/enero/semana1/foto5.jpg',
        // ... y así para todas las 240 fotos (12×4×5)
        // Por ahora pondré placeholders
    },
    
    // Inicializar calendario
    inicializar: function() {
        console.log("📅 Calendario Fabrizio 2026 inicializado");
        this.cargarProgreso();
        this.actualizarInterfazCalendario();
    },
    
    // Cargar progreso guardado
    cargarProgreso: function() {
        try {
            const datos = localStorage.getItem('calendarioFabrizio2026');
            if (datos) {
                const progreso = JSON.parse(datos);
                // Aquí cargarías el progreso si tuvieras
                console.log("📊 Progreso del calendario cargado");
            }
        } catch (e) {
            console.error("Error cargando progreso del calendario:", e);
        }
    },
    
    // Guardar progreso
    guardarProgreso: function() {
        try {
            localStorage.setItem('calendarioFabrizio2026', JSON.stringify({
                anio: this.anio,
                mesActual: this.mesActual,
                semanaActual: this.semanaActual
            }));
            return true;
        } catch (e) {
            console.error("Error guardando progreso del calendario:", e);
            return false;
        }
    },
    
    // Mostrar pantalla de meses
    mostrarMeses: function() {
        this.mesActual = null;
        this.semanaActual = null;
        this.actualizarInterfazCalendario();
        cambiarPantalla('pantalla-calendario-meses');
    },
    
    // Seleccionar un mes
    seleccionarMes: function(numeroMes) {
        if (this.calendario[numeroMes]) {
            this.mesActual = numeroMes;
            this.semanaActual = null;
            this.actualizarInterfazCalendario();
            cambiarPantalla('pantalla-calendario-semanas');
            console.log("📅 Mes seleccionado:", this.calendario[numeroMes].nombre);
            return true;
        }
        return false;
    },
    
    // Seleccionar una semana
    seleccionarSemana: function(numeroSemana) {
        if (this.mesActual && numeroSemana >= 1 && numeroSemana <= 4) {
            this.semanaActual = numeroSemana;
            this.actualizarInterfazCalendario();
            cambiarPantalla('pantalla-calendario-fotos');
            console.log("📅 Semana seleccionada:", numeroSemana, "del mes", this.mesActual);
            return true;
        }
        return false;
    },
    
    // Obtener URL de foto
    obtenerFoto: function(mes, semana, foto) {
        const key = `${mes}_${semana}_${foto}`;
        if (this.fotos[key]) {
            return this.fotos[key];
        }
        // Placeholder si no hay foto
        return `https://via.placeholder.com/300x400/ff6b9d/ffffff?text=Fabrizio+${mes}/${semana}/${foto}`;
    },
    
    // Actualizar interfaz completa
    actualizarInterfazCalendario: function() {
        // 1. Actualizar meses si estamos en esa pantalla
        this.actualizarInterfazMeses();
        
        // 2. Actualizar semanas si estamos en esa pantalla
        this.actualizarInterfazSemanas();
        
        // 3. Actualizar fotos si estamos en esa pantalla
        this.actualizarInterfazFotos();
    },
    
    // Actualizar interfaz de meses
    actualizarInterfazMeses: function() {
        const contenedor = document.getElementById('contenedor-meses');
        if (!contenedor) return;
        
        let html = '<div class="meses-grid">';
        
        for (let mes = 1; mes <= 12; mes++) {
            const mesInfo = this.calendario[mes];
            html += `
                <div class="mes-card" onclick="calendarioFabrizio.seleccionarMes(${mes})">
                    <div class="mes-numero">${mes}</div>
                    <div class="mes-nombre">${mesInfo.nombre.split(' ')[0]}</div>
                    <div class="mes-info">${mesInfo.semanas} semanas</div>
                    <div class="mes-fotos">${mesInfo.fotosTotales} fotos</div>
                </div>
            `;
        }
        
        html += '</div>';
        contenedor.innerHTML = html;
    },
    
    // Actualizar interfaz de semanas
    actualizarInterfazSemanas: function() {
        const contenedor = document.getElementById('contenedor-semanas');
        const titulo = document.getElementById('titulo-mes-seleccionado');
        
        if (!contenedor || !this.mesActual) return;
        
        const mesInfo = this.calendario[this.mesActual];
        
        if (titulo) {
            titulo.textContent = mesInfo.nombre;
        }
        
        let html = '<div class="semanas-grid">';
        
        for (let semana = 1; semana <= mesInfo.semanas; semana++) {
            html += `
                <div class="semana-card" onclick="calendarioFabrizio.seleccionarSemana(${semana})">
                    <div class="semana-numero">Semana ${semana}</div>
                    <div class="semana-info">${this.fotosPorSemana} fotos</div>
                    <div class="dias-lista">
                        <span class="dia">Lun</span>
                        <span class="dia">Mar</span>
                        <span class="dia">Mié</span>
                        <span class="dia">Jue</span>
                        <span class="dia">Vie</span>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        contenedor.innerHTML = html;
    },
    
   // Actualizar interfaz de fotos
actualizarInterfazFotos: function() {
    const contenedor = document.getElementById('contenedor-fotos');
    const titulo = document.getElementById('titulo-semana-seleccionada');
    
    if (!contenedor || !this.mesActual || !this.semanaActual) return;
    
    const mesInfo = this.calendario[this.mesActual];
    
    if (titulo) {
        titulo.textContent = `${mesInfo.nombre} - Semana ${this.semanaActual}`;
    }
    
    let html = '<div class="fotos-grid">';
    
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    
    for (let foto = 1; foto <= this.fotosPorSemana; foto++) {
        const urlFoto = this.obtenerFoto(this.mesActual, this.semanaActual, foto);
        html += `
            <div class="foto-card" onclick="verFotoGrande(${this.mesActual}, ${this.semanaActual}, ${foto})">
                <div class="foto-dia">${dias[foto-1]}</div>
                <img src="${urlFoto}" alt="Foto ${foto}" class="foto-imagen" 
                     onerror="this.src='https://via.placeholder.com/300x400/cccccc/333333?text=Foto+${foto}'">
                <div class="foto-info">Día ${foto} de 5</div>
                <div class="foto-click">👆 Toca para agrandar</div>
            </div>
        `;
    }
    
    html += '</div>';
    contenedor.innerHTML = html;
},
    
    // Navegar atrás desde fotos
    volverASemanas: function() {
        this.semanaActual = null;
        this.actualizarInterfazCalendario();
        cambiarPantalla('pantalla-calendario-semanas');
    },
    
    // Navegar atrás desde semanas
    volverAMeses: function() {
        this.mesActual = null;
        this.semanaActual = null;
        this.actualizarInterfazCalendario();
        cambiarPantalla('pantalla-calendario-meses');
    }
};

// ============================================================================
// FUNCIONES GLOBALES PARA EL CALENDARIO
// ============================================================================

// Función para iniciar el calendario
function iniciarCalendarioFabrizio() {
    cambiarPantalla('pantalla-calendario-meses');
    if (typeof calendarioFabrizio !== 'undefined') {
        calendarioFabrizio.actualizarInterfazCalendario();
    }
}

// Función para ver foto en grande
function verFotoGrande(mes, semana, foto) {
    const url = calendarioFabrizio.obtenerFoto(mes, semana, foto);
    
    // Crear modal para ver foto grande
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="position: relative;">
            <img src="${url}" alt="Foto grande" style="max-width: 90vw; max-height: 90vh; border-radius: 10px;">
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="position: absolute; top: 10px; right: 10px; background: #ff6b9d; color: white; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 20px; cursor: pointer;">
                ×
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Inicializar calendario cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    if (typeof calendarioFabrizio !== 'undefined' && calendarioFabrizio.inicializar) {
        calendarioFabrizio.inicializar();
    }
});
