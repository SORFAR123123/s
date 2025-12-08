// ============================================================================
// SISTEMA DE PALABRAS FALLADAS - NUEVO
// ============================================================================

const sistemaPalabrasFalladas = {
    // Palabras falladas de hoy
    palabrasFalladasHoy: [],
    
    // Todas las palabras falladas (historial)
    historialFalladas: [],
    
    // Última fecha de reinicio
    ultimaFecha: null,
    
    // Inicializar sistema
    inicializar: function() {
        const hoy = this.obtenerFechaHoy();
        const datosGuardados = this.cargarDatos();
        
        if (!datosGuardados || datosGuardados.ultimaFecha !== hoy) {
            this.reiniciarPalabrasDelDia();
        } else {
            this.palabrasFalladasHoy = datosGuardados.palabrasFalladasHoy || [];
            this.historialFalladas = datosGuardados.historialFalladas || [];
            this.ultimaFecha = datosGuardados.ultimaFecha;
        }
        
        console.log("📝 Sistema de palabras falladas inicializado. Palabras hoy:", this.palabrasFalladasHoy.length);
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
            const datos = localStorage.getItem('palabrasFalladas');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.error("Error cargando palabras falladas:", e);
            return null;
        }
    },
    
    // Guardar datos
    guardarDatos: function() {
        try {
            localStorage.setItem('palabrasFalladas', JSON.stringify({
                palabrasFalladasHoy: this.palabrasFalladasHoy,
                historialFalladas: this.historialFalladas,
                ultimaFecha: this.ultimaFecha
            }));
            return true;
        } catch (e) {
            console.error("Error guardando palabras falladas:", e);
            return false;
        }
    },
    
    // Reiniciar palabras del día
    reiniciarPalabrasDelDia: function() {
        console.log("🔄 Reiniciando palabras falladas del día");
        this.palabrasFalladasHoy = [];
        this.ultimaFecha = this.obtenerFechaHoy();
        this.guardarDatos();
    },
    
    // Registrar palabra fallada
    registrarPalabraFallada: function(palabra, respuestaSeleccionada, respuestaCorrecta, lectura, opcionesOriginales = []) {
        // CORRECCIÓN: Asegurarse de que tenemos las opciones completas
        let opciones = [...opcionesOriginales];
        if (opciones.length < 4) {
            // Si no hay suficientes opciones, generar algunas adicionales
            const opcionesBase = ['Opción A', 'Opción B', 'Opción C', 'Opción D'];
            for (let i = opciones.length; i < 4; i++) {
                if (!opciones.includes(opcionesBase[i])) {
                    opciones.push(opcionesBase[i]);
                }
            }
        }
        
        const palabraFallada = {
            palabra: palabra,
            respuestaSeleccionada: respuestaSeleccionada,
            respuestaCorrecta: respuestaCorrecta,
            lectura: lectura,
            opciones: opciones, // Guardar las opciones completas
            fecha: new Date().toISOString(),
            hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        };
        
        // Agregar a palabras de hoy
        this.palabrasFalladasHoy.push(palabraFallada);
        
        // Agregar al historial
        this.historialFalladas.push(palabraFallada);
        
        this.guardarDatos();
        
        console.log(`❌ Palabra fallada registrada: ${palabra}`, opciones);
    },
    
    // Obtener palabras más falladas del día
    obtenerMasFalladasDelDia: function() {
        const conteo = {};
        
        this.palabrasFalladasHoy.forEach(palabra => {
            if (conteo[palabra.palabra]) {
                conteo[palabra.palabra].veces++;
            } else {
                conteo[palabra.palabra] = {
                    palabra: palabra.palabra,
                    lectura: palabra.lectura,
                    respuestaCorrecta: palabra.respuestaCorrecta,
                    opciones: palabra.opciones,
                    veces: 1
                };
            }
        });
        
        // Convertir a array y ordenar por veces
        return Object.values(conteo)
            .sort((a, b) => b.veces - a.veces)
            .slice(0, 10); // Top 10 más falladas
    },
    
    // Obtener todas las palabras falladas hoy
    obtenerTodasFalladasHoy: function() {
        return this.palabrasFalladasHoy;
    },
    
    // Obtener estadísticas
    obtenerEstadisticas: function() {
        return {
            totalHoy: this.palabrasFalladasHoy.length,
            totalHistorial: this.historialFalladas.length,
            fechaActual: this.ultimaFecha
        };
    },
    
    // Limpiar historial completo
    limpiarHistorialCompleto: function() {
        this.historialFalladas = [];
        this.guardarDatos();
        console.log("🗑️ Historial de palabras falladas limpiado");
    }
};

// ============================================================================
// FUNCIONES DEL SISTEMA DE PALABRAS FALLADAS - NUEVAS Y CORREGIDAS
// ============================================================================

// Función para mostrar la pantalla de palabras falladas
function mostrarPalabrasFalladas() {
    const estadisticas = sistemaPalabrasFalladas.obtenerEstadisticas();
    
    // Crear pantalla dinámica
    const pantallaHTML = `
        <div id="pantalla-palabras-falladas" class="pantalla activa">
            <div class="contenedor">
                <div class="barra-superior">
                    <div class="contador">📝 PALABRAS FALLADAS</div>
                    <div class="botones-superiores">
                        <button class="boton-home" onclick="volverAlInicio()">Volver al Inicio</button>
                        <button class="boton-menu" onclick="irAlMenu()">🏠 Ir al Menú</button>
                    </div>
                </div>
                
                <div class="palabras-falladas-container">
                    <div class="estadisticas-palabras">
                        <div class="estadistica-item">
                            <span class="estadistica-label">Palabras falladas hoy:</span>
                            <span class="estadistica-valor" id="total-hoy">${estadisticas.totalHoy}</span>
                        </div>
                        <div class="estadistica-item">
                            <span class="estadistica-label">Total histórico:</span>
                            <span class="estadistica-valor" id="total-historial">${estadisticas.totalHistorial}</span>
                        </div>
                        <div class="estadistica-item">
                            <span class="estadistica-label">Fecha actual:</span>
                            <span class="estadistica-valor" id="fecha-actual">${estadisticas.fechaActual}</span>
                        </div>
                    </div>
                    
                    <div class="opciones-palabras-falladas">
                        <button class="boton-palabras-falladas" onclick="mostrarMasFalladasDelDia()">
                            🔥 PALABRAS MÁS FALLADAS DEL DÍA
                            <small>Top 10 que más te cuestan</small>
                        </button>
                        
                        <button class="boton-palabras-falladas" onclick="mostrarTodasFalladasHoy()">
                            📋 TODAS LAS PALABRAS FALLADAS HOY
                            <small>Lista completa de hoy</small>
                        </button>
                        
                        <button class="boton-palabras-falladas" onclick="limpiarHistorialFalladas()">
                            🗑️ LIMPIAR HISTORIAL COMPLETO
                            <small>Eliminar todas las palabras falladas</small>
                        </button>
                    </div>
                    
                    <div class="lista-palabras-container" id="lista-palabras-container">
                        <!-- Aquí se mostrarán las listas de palabras -->
                    </div>
                    
                    <div class="acciones-palabras">
                        <button class="boton-secundario" onclick="volverAlInicio()">
                            Volver al Inicio
                        </button>
                        <button class="boton-principal" onclick="practicarPalabrasFalladas()">
                            🎯 PRACTICAR PALABRAS FALLADAS (+3 S/.)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Ocultar pantalla actual
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Agregar la nueva pantalla
    document.body.insertAdjacentHTML('beforeend', pantallaHTML);
}

// Función para mostrar las palabras más falladas del día
function mostrarMasFalladasDelDia() {
    const palabras = sistemaPalabrasFalladas.obtenerMasFalladasDelDia();
    const container = document.getElementById('lista-palabras-container');
    
    if (palabras.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <h3>🎉 ¡Excelente trabajo!</h3>
                <p>No has fallado ninguna palabra hoy.</p>
                <p>¡Sigue así! 💪</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="lista-palabras-header">
            <h3>🔥 TOP 10 PALABRAS MÁS FALLADAS HOY</h3>
            <p class="subtitulo-lista">Estas son las palabras que más te cuestan hoy</p>
        </div>
        <div class="lista-palabras">
    `;
    
    palabras.forEach((palabra, index) => {
        html += `
            <div class="palabra-item ${index < 3 ? 'palabra-destacada' : ''}">
                <div class="palabra-posicion">${index + 1}</div>
                <div class="palabra-info">
                    <div class="palabra-japones">${palabra.palabra}</div>
                    <div class="palabra-lectura">(${palabra.lectura})</div>
                    <div class="palabra-traduccion">✅ ${palabra.respuestaCorrecta}</div>
                </div>
                <div class="palabra-veces">
                    <span class="veces-numero">${palabra.veces}</span>
                    <span class="veces-texto">veces</span>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Función para mostrar todas las palabras falladas hoy
function mostrarTodasFalladasHoy() {
    const palabras = sistemaPalabrasFalladas.obtenerTodasFalladasHoy();
    const container = document.getElementById('lista-palabras-container');
    
    if (palabras.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <h3>🎉 ¡Excelente trabajo!</h3>
                <p>No has fallado ninguna palabra hoy.</p>
                <p>¡Sigue así! 💪</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="lista-palabras-header">
            <h3>📋 TODAS LAS PALABRAS FALLADAS HOY</h3>
            <p class="subtitulo-lista">Total: ${palabras.length} palabras</p>
        </div>
        <div class="lista-palabras-todas">
    `;
    
    // Agrupar por hora
    const palabrasPorHora = {};
    palabras.forEach(palabra => {
        const hora = palabra.hora;
        if (!palabrasPorHora[hora]) {
            palabrasPorHora[hora] = [];
        }
        palabrasPorHora[hora].push(palabra);
    });
    
    Object.keys(palabrasPorHora).forEach(hora => {
        html += `
            <div class="grupo-hora">
                <h4>🕒 ${hora}</h4>
                <div class="palabras-hora">
        `;
        
        palabrasPorHora[hora].forEach((palabra, index) => {
            html += `
                <div class="palabra-item-detalle">
                    <div class="palabra-japones-detalle">${palabra.palabra}</div>
                    <div class="palabra-info-detalle">
                        <span class="palabra-error">❌ ${palabra.respuestaSeleccionada}</span>
                        <span class="palabra-correcta">✅ ${palabra.respuestaCorrecta}</span>
                        <span class="palabra-lectura-detalle">(${palabra.lectura})</span>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Función para limpiar el historial de palabras falladas
function limpiarHistorialFalladas() {
    if (confirm("¿Estás seguro de que quieres eliminar todo el historial de palabras falladas?\nEsta acción no se puede deshacer.")) {
        sistemaPalabrasFalladas.limpiarHistorialCompleto();
        
        // Actualizar estadísticas en pantalla
        document.getElementById('total-hoy').textContent = '0';
        document.getElementById('total-historial').textContent = '0';
        
        // Mostrar mensaje de confirmación
        const container = document.getElementById('lista-palabras-container');
        container.innerHTML = `
            <div class="mensaje-exito">
                <h3>✅ Historial limpiado</h3>
                <p>Todas las palabras falladas han sido eliminadas.</p>
                <p>¡Nuevo comienzo! 🚀</p>
            </div>
        `;
    }
}

// FUNCIÓN CORREGIDA COMPLETAMENTE - Practicar palabras falladas con las opciones correctas
function practicarPalabrasFalladas() {
    const palabrasFalladas = sistemaPalabrasFalladas.obtenerMasFalladasDelDia();
    
    if (palabrasFalladas.length === 0) {
        alert("🎉 ¡No tienes palabras falladas para practicar!\nSigue estudiando y vuelve cuando tengas palabras para repasar.");
        return;
    }
    
    console.log("🔍 Preparando práctica con palabras falladas:", palabrasFalladas);
    
    // CORRECCIÓN: Crear mazo de práctica usando las opciones ORIGINALES guardadas
    // y asegurarse de que la respuesta correcta esté en el índice correcto
    mazoActual = palabrasFalladas.map(palabra => {
        // Usar las opciones ORIGINALES guardadas
        let opciones = palabra.opciones || [];
        
        // Asegurarse de que la respuesta correcta esté en las opciones
        if (!opciones.includes(palabra.respuestaCorrecta)) {
            opciones = [palabra.respuestaCorrecta, ...opciones.slice(0, 3)];
        }
        
        // Asegurarse de que haya exactamente 4 opciones
        while (opciones.length < 4) {
            opciones.push(`Opción ${opciones.length + 1}`);
        }
        
        // Mezclar las opciones para que la respuesta correcta no siempre esté en la misma posición
        for (let i = opciones.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
        }
        
        // Encontrar el índice de la respuesta correcta después de mezclar
        const respuestaIndex = opciones.indexOf(palabra.respuestaCorrecta);
        
        return {
            japones: palabra.palabra,
            lectura: palabra.lectura,
            opciones: opciones,
            respuesta: respuestaIndex // Índice correcto de la respuesta
        };
    });
    
    console.log("📚 Mazo de práctica creado:", mazoActual);
    
    // Limitar a 10 palabras máximo para no hacerlo muy largo
    if (mazoActual.length > 10) {
        mazoActual = mazoActual.slice(0, 10);
    }
    
    // Mezclar preguntas
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
    
    // Configurar para práctica
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Ir a la pantalla de quiz
    cambiarPantalla('pantalla-quiz');
    
    // Cambiar título para indicar que es práctica especial
    document.getElementById('contador-preguntas').innerHTML = `
        🎯 PRÁCTICA ESPECIAL (+3 S/.): <span id="numero-pregunta">1</span>/<span id="total-preguntas">${mazoActual.length}</span>
    `;
    
    // Mostrar primera pregunta
    mostrarPregunta();
}
