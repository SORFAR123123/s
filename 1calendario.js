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
// ============================================================================
// CALENDARIO ESPECIAL: COMIENZO 2025 - DICIEMBRE (CON 5 FOTOS POR DÍA)
// ============================================================================

const comienzoDiciembre2025 = {
    // Fechas del 8 al 31 de diciembre 2025 (24 días)
    dias: [
        { numero: 8, nombre: '8 de diciembre' },
        { numero: 9, nombre: '9 de diciembre' },
        { numero: 10, nombre: '10 de diciembre' },
        { numero: 11, nombre: '11 de diciembre' },
        { numero: 12, nombre: '12 de diciembre' },
        { numero: 13, nombre: '13 de diciembre' },
        { numero: 14, nombre: '14 de diciembre' },
        { numero: 15, nombre: '15 de diciembre' },
        { numero: 16, nombre: '16 de diciembre' },
        { numero: 17, nombre: '17 de diciembre' },
        { numero: 18, nombre: '18 de diciembre' },
        { numero: 19, nombre: '19 de diciembre' },
        { numero: 20, nombre: '20 de diciembre' },
        { numero: 21, nombre: '21 de diciembre' },
        { numero: 22, nombre: '22 de diciembre' },
        { numero: 23, nombre: '23 de diciembre' },
        { numero: 24, nombre: '24 de diciembre - Nochebuena 🎄' },
        { numero: 25, nombre: '25 de diciembre - Navidad 🎅' },
        { numero: 26, nombre: '26 de diciembre' },
        { numero: 27, nombre: '27 de diciembre' },
        { numero: 28, nombre: '28 de diciembre' },
        { numero: 29, nombre: '29 de diciembre' },
        { numero: 30, nombre: '30 de diciembre' },
        { numero: 31, nombre: '31 de diciembre - Fin de Año 🎉' }
    ],
    
    // 5 fotos por cada día (del 8 al 31 = 24 días × 5 fotos = 120 fotos total)
    fotos: {
        // Día 8 de diciembre - 5 fotos
        '8_1': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+8-1',
        '8_2': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+8-2',
        '8_3': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+8-3',
        '8_4': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+8-4',
        '8_5': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+8-5',
        
        // Día 9 de diciembre - 5 fotos
        '9_1': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+9-1',
        '9_2': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+9-2',
        '9_3': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+9-3',
        '9_4': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+9-4',
        '9_5': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+9-5',
        
        // Día 10 de diciembre - 5 fotos
        '10_1': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+10-1',
        '10_2': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+10-2',
        '10_3': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+10-3',
        '10_4': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+10-4',
        '10_5': 'https://via.placeholder.com/300x400/ffd700/000000?text=Dia+10-5',
        
        // ... y así para todos los días del 11 al 31
        
        // Día 31 de diciembre - 5 fotos especiales de Fin de Año
        '31_1': 'https://via.placeholder.com/300x400/ff0000/ffffff?text=Fin+Año+1',
        '31_2': 'https://via.placeholder.com/300x400/ff0000/ffffff?text=Fin+Año+2',
        '31_3': 'https://via.placeholder.com/300x400/ff0000/ffffff?text=Fin+Año+3',
        '31_4': 'https://via.placeholder.com/300x400/ff0000/ffffff?text=Fin+Año+4',
        '31_5': 'https://via.placeholder.com/300x400/ff0000/ffffff?text=Fin+Año+5'
    },
    
    // Día seleccionado actualmente
    diaSeleccionado: null,
    
    // Obtener URL de foto
    obtenerFoto: function(dia, numeroFoto) {
        const key = `${dia}_${numeroFoto}`;
        if (this.fotos[key]) {
            return this.fotos[key];
        }
        // Placeholder si no hay foto
        return `https://via.placeholder.com/300x400/ffd700/000000?text=Dia+${dia}-${numeroFoto}`;
    },
    
    // Obtener todas las fotos de un día
    obtenerFotosDelDia: function(dia) {
        const fotos = [];
        for (let i = 1; i <= 5; i++) {
            fotos.push({
                numero: i,
                url: this.obtenerFoto(dia, i)
            });
        }
        return fotos;
    },
    
    // Mostrar todos los días (pantalla principal)
    mostrarDias: function() {
        const contenedor = document.getElementById('contenedor-meses');
        if (!contenedor) return;
        
        let html = `
            <div class="info-calendario" style="margin-bottom: 30px; border: 2px solid #ffd700;">
                <p style="font-size: 1.5rem; color: #ffd700; font-weight: bold;">🎄 COMIENZO 2025 - DICIEMBRE</p>
                <p style="color: #ffffff; font-size: 1.1rem;">Del 8 al 31 de diciembre</p>
                <p style="color: #cccccc; margin-top: 10px;">📸 <strong>5 fotos por cada día</strong> (120 fotos total)</p>
                <p style="color: #00ff88; font-size: 0.9rem;">👆 Toca cualquier día para ver sus 5 fotos</p>
            </div>
            <div class="dias-grid">
        `;
        
        this.dias.forEach(dia => {
            const primeraFoto = this.obtenerFoto(dia.numero, 1);
            const esEspecial = dia.numero === 24 || dia.numero === 25 || dia.numero === 31;
            
            html += `
                <div class="dia-card ${esEspecial ? 'dia-especial' : ''}" onclick="seleccionarDiaDiciembre(${dia.numero})">
                    <div class="dia-numero">${dia.numero}</div>
                    <div class="dia-nombre">${dia.nombre.split(' - ')[0]}</div>
                    <img src="${primeraFoto}" alt="Día ${dia.numero}" class="dia-imagen" 
                         onerror="this.src='https://via.placeholder.com/200x150/ffd700/000000?text=Dia+${dia.numero}'">
                    <div class="dia-info">5 fotos disponibles</div>
                    ${esEspecial ? '<div class="dia-especial-icon">⭐</div>' : ''}
                </div>
            `;
        });
        
        html += '</div>';
        contenedor.innerHTML = html;
    },
    
    // Mostrar las 5 fotos de un día específico
    mostrarFotosDelDia: function(diaNumero) {
        const contenedor = document.getElementById('contenedor-semanas');
        if (!contenedor) return;
        
        const dia = this.dias.find(d => d.numero === diaNumero);
        if (!dia) return;
        
        this.diaSeleccionado = diaNumero;
        
        // Cambiar título
        const titulo = document.getElementById('titulo-mes-seleccionado');
        if (titulo) {
            titulo.textContent = `${dia.nombre} - 5 Fotos`;
        }
        
        let html = `
            <div class="info-semana" style="margin-bottom: 20px; border-left: 4px solid #ffd700;">
                <p style="color: #ffd700; font-weight: bold;">${dia.nombre}</p>
                <p style="color: #cccccc;">5 fotos especiales de este día</p>
                <button onclick="volverADiasDiciembre()" style="background: #ffd700; color: #000; border: none; border-radius: 8px; padding: 8px 15px; margin-top: 10px; cursor: pointer;">
                    ← Volver a todos los días
                </button>
            </div>
            <div class="fotos-dia-grid">
        `;
        
        const fotos = this.obtenerFotosDelDia(diaNumero);
        
        fotos.forEach((foto, index) => {
            html += `
                <div class="foto-dia-card" onclick="verFotoGrandeDiciembre(${diaNumero}, ${foto.numero})">
                    <div class="foto-numero">Foto ${foto.numero}</div>
                    <img src="${foto.url}" alt="Foto ${foto.numero}" class="foto-dia-imagen"
                         onerror="this.src='https://via.placeholder.com/300x400/ffd700/000000?text=Foto+${foto.numero}'">
                    <div class="foto-click">👆 Toca para agrandar</div>
                </div>
            `;
        });
        
        html += '</div>';
        contenedor.innerHTML = html;
        
        // Cambiar a pantalla de semanas (que ahora muestra fotos)
        cambiarPantalla('pantalla-calendario-semanas');
    }
};

// Función para seleccionar un día
function seleccionarDiaDiciembre(diaNumero) {
    comienzoDiciembre2025.mostrarFotosDelDia(diaNumero);
}

// Función para volver a ver todos los días
function volverADiasDiciembre() {
    cambiarPantalla('pantalla-calendario-meses');
    comienzoDiciembre2025.mostrarDias();
}

// Función para ver foto grande de diciembre
function verFotoGrandeDiciembre(dia, numeroFoto) {
    const url = comienzoDiciembre2025.obtenerFoto(dia, numeroFoto);
    const diaInfo = comienzoDiciembre2025.dias.find(d => d.numero === dia);
    
    // Crear modal para ver foto grande
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="position: relative; text-align: center; max-width: 90%;">
            <div style="color: #ffd700; font-size: 1.5rem; margin-bottom: 15px; font-weight: bold;">
                ${diaInfo ? diaInfo.nombre : `Día ${dia}`} - Foto ${numeroFoto}/5
            </div>
            <img src="${url}" alt="Foto grande" 
                 style="max-width: 90vw; max-height: 70vh; border-radius: 10px; border: 3px solid #ffd700; box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);">
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="boton-cerrar-foto" style="position: absolute; top: -15px; right: -15px; background: #ff0000;">
                ×
            </button>
            <div style="color: white; margin-top: 15px; font-size: 0.9rem;">
                🎄 Comienzo 2025 - Diciembre | Día ${dia}, Foto ${numeroFoto} de 5
            </div>
            <div style="margin-top: 10px;">
                <button onclick="this.parentElement.parentElement.remove(); seleccionarDiaDiciembre(${dia})" 
                        style="background: #ffd700; color: #000; border: none; border-radius: 8px; padding: 8px 15px; margin: 5px; cursor: pointer;">
                    Ver más fotos de este día
                </button>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: #666; color: white; border: none; border-radius: 8px; padding: 8px 15px; margin: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Función para iniciar el comienzo de diciembre
function iniciarComienzoDiciembre2025() {
    cambiarPantalla('pantalla-calendario-meses');
    
    // Cambiar el título
    const titulo = document.querySelector('#pantalla-calendario-meses .contador');
    if (titulo) {
        titulo.textContent = '🎄 Comienzo 2025 - Diciembre';
    }
    
    // Mostrar los días
    comienzoDiciembre2025.mostrarDias();
}
// Inicializar calendario cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    if (typeof calendarioFabrizio !== 'undefined' && calendarioFabrizio.inicializar) {
        calendarioFabrizio.inicializar();
    }
});
