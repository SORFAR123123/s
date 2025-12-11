// ============================================================================
// SISTEMA ANIME PARA FABRI - CON TODOS LOS SISTEMAS + PALABRAS FALLADAS
// ============================================================================

// ============================================================================
// 1. CONFIGURACIÓN MEJORADA
// ============================================================================

const animeConfig = {
    animes: {
        'anime1': {
            id: 'anime1',
            nombre: '✨ Quintillizas Nakano',
            imagen: 'https://pbs.twimg.com/media/G7fvMrtWcAA1Y-W?format=png&name=900x900',
            descripcion: 'Aprende japonés con las quintillizas',
            color: '#ff6b9d',
            videos: {
                español: {
                    driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                    nombre: 'Español',
                    timestamps: [
                        { tiempo: '1:53', descripcion: ' Quiero a una novia con ese poto', segundos: 113 },
                        { tiempo: '3:55', descripcion: ' Potona', segundos: 235 },
                        { tiempo: '12:40', descripcion: 'Momento romántico', segundos: 760 },
                        { tiempo: '20:20', descripcion: 'Final del capítulo', segundos: 1220 }
                    ]
                },
                japones: {
                    driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                    nombre: 'Japones',
                    timestamps: [
                         { tiempo: '1:53', descripcion: ' Quiero a una novia con ese poto', segundos: 113 },
                        { tiempo: '3:55', descripcion: ' Potona', segundos: 235 },
                        { tiempo: '12:40', descripcion: 'Diálogo rápido', segundos: 760 }
                    ]
                }
            }
        },
        'anime2': {
            id: 'anime2',
            nombre: '🏫 Yamada Lv999',
            imagen: 'https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900',
            descripcion: 'Vocabulario de romance escolar',
            color: '#00b4d8',
            videos: {
                español: {
                    driveId: '1Hkzmk9M03_DMPp2znFhderLYNgUFCJ9R',
                    nombre: 'Español',
                    timestamps: []
                },
                japones: {
                    driveId: 'TU_ID_JAPONES_RAW_2',
                    nombre: 'Japonés Raw',
                    timestamps: []
                }
            }
        }
    },
    
    palabrasPorMazo: 10,
    idiomaPorDefecto: 'español',
    
    recompensasPorcentaje: {
        100: { dinero: 2, experiencia: 30, mensaje: '🎉 ¡Perfecto! Dominio absoluto' },
        90: { dinero: 1, experiencia: 20, mensaje: '👏 ¡Excelente! Casi perfecto' },
        80: { dinero: 0.5, experiencia: 15, mensaje: '👍 ¡Muy bien! Buen trabajo' },
        70: { dinero: 0.3, experiencia: 10, mensaje: '✅ Bien, sigue mejorando' },
        60: { dinero: 0.2, experiencia: 5, mensaje: '💪 Sigue practicando' },
        50: { dinero: 0.1, experiencia: 3, mensaje: '📚 Necesitas más estudio' },
        0: { dinero: 0, experiencia: 1, mensaje: '🔁 Repite para mejorar' }
    }
};

// ============================================================================
// 2. VOCABULARIO (RESUMIDO)
// ============================================================================

const animeVocabulario = {
    'anime1': {
        'mazo1': [
            { japones: 'ご視聴', lectura: 'go shichou', opciones: ['Ver/Audiencia (formal)', 'Escuchar', 'Hablar', 'Leer'], respuesta: 0 },
            { japones: '覚えました', lectura: 'oboemashita', opciones: ['Lo recordé', 'Lo olvidé', 'Lo escribí', 'Lo borré'], respuesta: 0 },
            { japones: '綺麗', lectura: 'kirei', opciones: ['Hermoso/Bonito', 'Feo', 'Común', 'Extraño'], respuesta: 0 },
            { japones: '嫌', lectura: 'iya', opciones: ['Odio/Disgusto', 'Amor', 'Indiferencia', 'Alegría'], respuesta: 0 },
            { japones: '感情', lectura: 'kanjou', opciones: ['Emoción', 'Razón', 'Pensamiento', 'Acción'], respuesta: 0 }
        ]
    },
    'anime2': {
        'mazo1': [
            { japones: 'ゲーマー', lectura: 'geemaa', opciones: ['Gamer', 'Deportista', 'Estudiante', 'Trabajador'], respuesta: 0 },
            { japones: 'オンライン', lectura: 'onrain', opciones: ['Online', 'Offline', 'Presencial', 'Directo'], respuesta: 0 },
            { japones: 'レベル', lectura: 'reberu', opciones: ['Nivel', 'Puntos', 'Experiencia', 'Habilidad'], respuesta: 0 }
        ]
    }
};

// ============================================================================
// 3. VARIABLES GLOBALES MEJORADAS
// ============================================================================

let animeActual = '';
let idiomaVideoActual = animeConfig.idiomaPorDefecto;
let videoAnimeActual = null;
let mazoActualAnime = [];
let preguntaActualAnime = 0;
let respuestasCorrectasAnime = 0;
let respuestasIncorrectasAnime = 0;
let mazoActualId = '';

// NUEVO: Sistema de palabras falladas para anime
let palabrasFalladasAnime = [];
let palabrasDificilesAnime = [];

// ============================================================================
// 4. NUEVO: SISTEMA DE PALABRAS FALLADAS PARA ANIME
// ============================================================================

const sistemaFalladasAnime = {
    // Registrar palabra fallada durante quiz
    registrarPalabraFallada: function(palabraJapones, respuestaSeleccionada, respuestaCorrecta, lectura, opciones, animeId, mazoId) {
        const palabraFallada = {
            japones: palabraJapones,
            respuestaSeleccionada: respuestaSeleccionada,
            respuestaCorrecta: respuestaCorrecta,
            lectura: lectura,
            opciones: opciones,
            anime: animeId,
            mazo: mazoId,
            fecha: new Date().toLocaleString(),
            intentosFallados: 1
        };
        
        // Verificar si ya existe
        const index = palabrasFalladasAnime.findIndex(p => 
            p.japones === palabraJapones && p.anime === animeId
        );
        
        if (index !== -1) {
            // Incrementar intentos fallados
            palabrasFalladasAnime[index].intentosFallados++;
            palabrasFalladasAnime[index].fecha = new Date().toLocaleString();
            console.log(`📝 Palabra fallada actualizada: ${palabraJapones} (${palabrasFalladasAnime[index].intentosFallados} veces)`);
        } else {
            // Agregar nueva palabra fallada
            palabrasFalladasAnime.push(palabraFallada);
            console.log(`📝 Nueva palabra fallada registrada: ${palabraJapones}`);
        }
        
        // También registrar en sistema principal si existe
        if (typeof sistemaPalabrasFalladas !== 'undefined') {
            sistemaPalabrasFalladas.registrarPalabraFallada(
                palabraJapones,
                respuestaSeleccionada,
                respuestaCorrecta,
                lectura,
                opciones
            );
        }
        
        return palabraFallada;
    },
    
    // Obtener estadísticas
    obtenerEstadisticas: function() {
        return {
            total: palabrasFalladasAnime.length,
            porAnime: this.agruparPorAnime(),
            masFalladas: this.obtenerMasFalladas()
        };
    },
    
    // Agrupar palabras falladas por anime
    agruparPorAnime: function() {
        const grupos = {};
        palabrasFalladasAnime.forEach(palabra => {
            if (!grupos[palabra.anime]) {
                grupos[palabra.anime] = {
                    nombre: animeConfig.animes[palabra.anime]?.nombre || palabra.anime,
                    cantidad: 0,
                    palabras: []
                };
            }
            grupos[palabra.anime].cantidad++;
            grupos[palabra.anime].palabras.push(palabra);
        });
        return grupos;
    },
    
    // Obtener palabras más falladas
    obtenerMasFalladas: function() {
        return [...palabrasFalladasAnime]
            .sort((a, b) => b.intentosFallados - a.intentosFallados)
            .slice(0, 5);
    },
    
    // Limpiar todas las palabras falladas
    limpiarTodas: function() {
        const cantidad = palabrasFalladasAnime.length;
        palabrasFalladasAnime = [];
        console.log(`🗑️ ${cantidad} palabras falladas limpiadas del sistema anime`);
        return cantidad;
    },
    
    // Iniciar práctica especial con palabras falladas
    iniciarPracticaFalladas: function() {
        if (palabrasFalladasAnime.length === 0) {
            mostrarNotificacionAnime('📝 No hay palabras falladas para practicar');
            return false;
        }
        
        // Convertir palabras falladas a formato de mazo
        mazoActualAnime = palabrasFalladasAnime.map(palabra => ({
            japones: palabra.japones,
            lectura: palabra.lectura,
            opciones: palabra.opciones,
            respuesta: palabra.opciones.indexOf(palabra.respuestaCorrecta)
        }));
        
        mazoActualId = 'falladas';
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz-anime');
        
        // Actualizar título
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaAnime();
        
        console.log(`📝 Iniciando práctica especial con ${mazoActualAnime.length} palabras falladas`);
        return true;
    },
    
    // Ver palabras falladas en consola
    verEnConsola: function() {
        if (palabrasFalladasAnime.length === 0) {
            console.log("📝 No hay palabras falladas en el sistema anime");
            return;
        }
        
        console.log(`📝 Palabras falladas del anime (${palabrasFalladasAnime.length}):`);
        palabrasFalladasAnime.forEach((palabra, index) => {
            console.log(`${index + 1}. ${palabra.japones} (${palabra.lectura})`);
            console.log(`   Anime: ${animeConfig.animes[palabra.anime]?.nombre || palabra.anime}`);
            console.log(`   Mazo: ${palabra.mazo}`);
            console.log(`   Fallada: ${palabra.respuestaSeleccionada}`);
            console.log(`   Correcta: ${palabra.respuestaCorrecta}`);
            console.log(`   Intentos fallados: ${palabra.intentosFallados}`);
            console.log(`   Fecha: ${palabra.fecha}`);
            console.log('');
        });
    }
};

// ============================================================================
// 5. SISTEMA DE PALABRAS DIFÍCILES PARA ANIME
// ============================================================================

const sistemaDificilesAnime = {
    // Marcar palabra como difícil
    marcarComoDificil: function(palabra) {
        const yaMarcada = palabrasDificilesAnime.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura &&
            p.anime === animeActual
        );
        
        if (!yaMarcada) {
            palabrasDificilesAnime.push({
                ...palabra,
                anime: animeActual,
                mazo: mazoActualId,
                fecha: new Date().toLocaleString()
            });
            console.log(`💀 Palabra marcada como difícil: ${palabra.japones}`);
            return true;
        }
        return false;
    },
    
    // Remover palabra de difíciles
    removerDeDificiles: function(palabra) {
        const index = palabrasDificilesAnime.findIndex(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura
        );
        
        if (index !== -1) {
            palabrasDificilesAnime.splice(index, 1);
            console.log(`✅ Palabra removida de difíciles: ${palabra.japones}`);
            return true;
        }
        return false;
    },
    
    // Verificar si una palabra es difícil
    esDificil: function(palabra) {
        return palabrasDificilesAnime.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura
        );
    },
    
    // Iniciar práctica de palabras difíciles
    iniciarPracticaDificiles: function() {
        if (palabrasDificilesAnime.length === 0) {
            mostrarNotificacionAnime('💀 No hay palabras marcadas como difíciles');
            return false;
        }
        
        mazoActualAnime = palabrasDificilesAnime.map(palabra => ({
            japones: palabra.japones,
            lectura: palabra.lectura,
            opciones: palabra.opciones,
            respuesta: palabra.respuesta
        }));
        
        mazoActualId = 'dificiles';
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        // Cambiar a pantalla de quiz
        cambiarPantalla('pantalla-quiz-anime');
        
        // Actualizar título
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        // Mostrar primera pregunta
        mostrarPreguntaAnime();
        
        console.log(`💀 Iniciando práctica especial con ${mazoActualAnime.length} palabras difíciles`);
        return true;
    },
    
    // Limpiar todas las palabras difíciles
    limpiarTodas: function() {
        const cantidad = palabrasDificilesAnime.length;
        palabrasDificilesAnime = [];
        console.log(`🗑️ ${cantidad} palabras difíciles limpiadas`);
        return cantidad;
    }
};

// ============================================================================
// 6. SISTEMA DE RECOMPENSAS INTEGRADO
// ============================================================================

const animeRecompensas = {
    calcularRecompensa: function(porcentaje) {
        if (porcentaje === 100) return animeConfig.recompensasPorcentaje[100];
        if (porcentaje >= 90) return animeConfig.recompensasPorcentaje[90];
        if (porcentaje >= 80) return animeConfig.recompensasPorcentaje[80];
        if (porcentaje >= 70) return animeConfig.recompensasPorcentaje[70];
        if (porcentaje >= 60) return animeConfig.recompensasPorcentaje[60];
        if (porcentaje >= 50) return animeConfig.recompensasPorcentaje[50];
        return animeConfig.recompensasPorcentaje[0];
    },
    
    aplicarRecompensa: function(porcentaje, animeId, mazoId) {
        const recompensa = this.calcularRecompensa(porcentaje);
        const animeNombre = animeConfig.animes[animeId]?.nombre || animeId;
        
        console.log(`🎁 Recompensa anime: ${porcentaje}% → +${recompensa.dinero} S/. +${recompensa.experiencia} XP`);
        
        // Aplicar a todos los sistemas
        if (typeof sistemaEconomia !== 'undefined') {
            sistemaEconomia.agregarDinero(recompensa.dinero, `Anime: ${animeNombre} - ${porcentaje}%`);
        }
        
        if (typeof sistemaNakano !== 'undefined') {
            sistemaNakano.agregarExperiencia(recompensa.experiencia, `Quiz anime: ${animeNombre}`);
        }
        
        if (typeof eventosDiarios !== 'undefined' && 
            eventosDiarios.estado.eventoActual && 
            eventosDiarios.estado.aceptado) {
            eventosDiarios.registrarMazoCompletado();
        }
        
        if (typeof misionesDiarias !== 'undefined' && porcentaje >= 80) {
            misionesDiarias.registrarMazoCompletado();
        }
        
        return recompensa;
    }
};

// ============================================================================
// 7. FUNCIONES PRINCIPALES DEL SISTEMA ANIME
// ============================================================================

function iniciarSistemaAnime() {
    crearPantallasAnime();
    cambiarPantalla('pantalla-anime-seleccion');
    cargarListaAnimes();
    console.log("🎬 Sistema anime iniciado (con palabras falladas y difíciles)");
}

function cargarListaAnimes() {
    const contenedor = document.getElementById('contenedor-animes');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    Object.keys(animeConfig.animes).forEach(animeId => {
        const anime = animeConfig.animes[animeId];
        const div = document.createElement('div');
        div.className = 'anime-card';
        div.style.borderColor = anime.color;
        div.onclick = () => cargarAnime(animeId);
        
        let mazosDisponibles = 0;
        if (animeVocabulario[animeId]) {
            mazosDisponibles = Object.keys(animeVocabulario[animeId]).filter(mazoId => {
                return animeVocabulario[animeId][mazoId] && animeVocabulario[animeId][mazoId].length >= 1;
            }).length;
        }
        
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}" class="anime-imagen">
            <div class="anime-texto">${anime.nombre}</div>
            <div class="anime-info">${mazosDisponibles} mazos</div>
            <div class="anime-desc">${anime.descripcion}</div>
            <div class="anime-sistemas">
                <span class="sistema-badge falladas" title="Palabras falladas">📝</span>
                <span class="sistema-badge dificiles" title="Palabras difíciles">💀</span>
                <span class="sistema-badge economia" title="Economía">💰</span>
                <span class="sistema-badge rpg" title="RPG Nakano">💕</span>
            </div>
        `;
        
        contenedor.appendChild(div);
    });
}

function cargarAnime(animeId) {
    animeActual = animeId;
    const anime = animeConfig.animes[animeId];
    
    idiomaVideoActual = animeConfig.idiomaPorDefecto;
    videoAnimeActual = anime.videos[idiomaVideoActual];
    
    document.getElementById('titulo-anime').textContent = anime.nombre;
    document.getElementById('descripcion-anime').textContent = anime.descripcion;
    
    cargarMazosAnime(animeId);
    cargarVideoAnime(animeId, idiomaVideoActual);
    
    cambiarPantalla('pantalla-anime-detalle');
}

function cargarMazosAnime(animeId) {
    const contenedor = document.getElementById('contenedor-mazos-anime');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    // Contador de palabras falladas y difíciles para este anime
    const falladasAnime = palabrasFalladasAnime.filter(p => p.anime === animeId).length;
    const dificilesAnime = palabrasDificilesAnime.filter(p => p.anime === animeId).length;
    
    // Botón especial para palabras falladas (si hay)
    if (falladasAnime > 0) {
        const divFalladas = document.createElement('div');
        divFalladas.className = 'mazo-anime-card mazo-fallado-especial';
        divFalladas.onclick = () => sistemaFalladasAnime.iniciarPracticaFalladas();
        divFalladas.title = `Practica ${falladasAnime} palabras que fallaste`;
        
        divFalladas.innerHTML = `
            <div class="mazo-anime-numero" style="color: #ff4444;">📝 FALLADAS</div>
            <div class="mazo-anime-texto">${falladasAnime} palabra${falladasAnime !== 1 ? 's' : ''}</div>
            <div class="mazo-anime-info" style="color: #ff4444;">🔥 ¡Repasa errores!</div>
        `;
        contenedor.appendChild(divFalladas);
    }
    
    // Botón especial para palabras difíciles (si hay)
    if (dificilesAnime > 0) {
        const divDificiles = document.createElement('div');
        divDificiles.className = 'mazo-anime-card mazo-dificil-especial';
        divDificiles.onclick = () => sistemaDificilesAnime.iniciarPracticaDificiles();
        divDificiles.title = `Practica ${dificilesAnime} palabras marcadas como difíciles`;
        
        divDificiles.innerHTML = `
            <div class="mazo-anime-numero" style="color: #ff9800;">💀 DIFÍCILES</div>
            <div class="mazo-anime-texto">${dificilesAnime} palabra${dificilesAnime !== 1 ? 's' : ''}</div>
            <div class="mazo-anime-info" style="color: #ff9800;">⚡ ¡Supera retos!</div>
        `;
        contenedor.appendChild(divDificiles);
    }
    
    // Mazos normales del anime
    if (animeVocabulario[animeId]) {
        const mazos = Object.keys(animeVocabulario[animeId]).sort((a, b) => {
            const numA = parseInt(a.replace('mazo', ''));
            const numB = parseInt(b.replace('mazo', ''));
            return numA - numB;
        });
        
        mazos.forEach(mazoId => {
            const mazoNumero = mazoId.replace('mazo', '');
            const div = document.createElement('div');
            div.className = 'mazo-anime-card';
            
            const tienePalabras = animeVocabulario[animeId][mazoId]?.length > 0;
            const cantidad = tienePalabras ? animeVocabulario[animeId][mazoId].length : 0;
            
            if (tienePalabras) {
                div.onclick = () => iniciarQuizAnime(animeId, mazoId);
                div.title = `${cantidad} palabras`;
            } else {
                div.classList.add('mazo-inactivo');
            }
            
            div.innerHTML = `
                <div class="mazo-anime-numero">Mazo ${mazoNumero}</div>
                <div class="mazo-anime-texto">${cantidad} palabra${cantidad !== 1 ? 's' : ''}</div>
                <div class="mazo-anime-recompensa">
                    <span class="recompensa-mini">💰+2</span>
                    <span class="recompensa-mini">💕+30</span>
                </div>
                <div class="mazo-anime-info">${tienePalabras ? '✅' : '🚧'}</div>
            `;
            
            contenedor.appendChild(div);
        });
    }
}

// ============================================================================
// 8. FUNCIONES DEL QUIZ CON PALABRAS FALLADAS Y DIFÍCILES
// ============================================================================

function iniciarQuizAnime(animeId, mazoId) {
    if (animeVocabulario[animeId] && animeVocabulario[animeId][mazoId]) {
        mazoActualAnime = [...animeVocabulario[animeId][mazoId]];
        mazoActualId = mazoId;
        preguntaActualAnime = 0;
        respuestasCorrectasAnime = 0;
        respuestasIncorrectasAnime = 0;
        
        // Mezclar preguntas
        for (let i = mazoActualAnime.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
        }
        
        cambiarPantalla('pantalla-quiz-anime');
        document.getElementById('numero-pregunta-anime').textContent = 1;
        document.getElementById('total-preguntas-anime').textContent = mazoActualAnime.length;
        
        mostrarPreguntaAnime();
    }
}

function mostrarPreguntaAnime() {
    if (preguntaActualAnime >= mazoActualAnime.length) {
        mostrarResultadosAnime();
        return;
    }
    
    const pregunta = mazoActualAnime[preguntaActualAnime];
    
    document.getElementById('numero-pregunta-anime').textContent = preguntaActualAnime + 1;
    document.getElementById('palabra-japones-anime').textContent = pregunta.japones;
    document.getElementById('lectura-anime').textContent = '';
    document.getElementById('resultado-anime').textContent = '';
    document.getElementById('resultado-anime').className = 'resultado';
    document.getElementById('boton-siguiente-anime').style.display = 'none';
    
    // Actualizar botones de palabras difíciles
    const esDificil = sistemaDificilesAnime.esDificil(pregunta);
    actualizarBotonDificil(esDificil);
    
    // Actualizar contadores
    actualizarContadoresInterfaz();
    
    const contenedor = document.getElementById('contenedor-opciones-anime');
    contenedor.innerHTML = '';
    
    const opcionesMezcladas = [...pregunta.opciones];
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    opcionesMezcladas.forEach(opcion => {
        const boton = document.createElement('button');
        boton.className = 'opcion';
        boton.textContent = opcion;
        boton.onclick = () => verificarRespuestaAnime(opcion, pregunta.opciones[pregunta.respuesta], pregunta.lectura, pregunta.opciones);
        contenedor.appendChild(boton);
    });
}

function verificarRespuestaAnime(respuestaSeleccionada, respuestaCorrecta, lectura, opciones) {
    const opcionesDOM = document.querySelectorAll('#contenedor-opciones-anime .opcion');
    const resultado = document.getElementById('resultado-anime');
    const palabraActual = document.getElementById('palabra-japones-anime').textContent;
    
    opcionesDOM.forEach(opcion => {
        opcion.disabled = true;
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    document.getElementById('lectura-anime').textContent = `(${lectura})`;
    
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto! ✅';
        resultado.className = 'resultado correcto';
        respuestasCorrectasAnime++;
        
        setTimeout(() => siguientePreguntaAnime(), 1000);
        
    } else {
        resultado.textContent = `Incorrecto ❌. La respuesta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectasAnime++;
        
        // REGISTRAR PALABRA FALLADA
        sistemaFalladasAnime.registrarPalabraFallada(
            palabraActual,
            respuestaSeleccionada,
            respuestaCorrecta,
            lectura,
            opciones,
            animeActual,
            mazoActualId
        );
        
        document.getElementById('boton-siguiente-anime').style.display = 'block';
    }
    
    // Actualizar contadores después de cada respuesta
    actualizarContadoresInterfaz();
}

function siguientePreguntaAnime() {
    preguntaActualAnime++;
    mostrarPreguntaAnime();
}

// ============================================================================
// 9. FUNCIONES PARA MANEJAR PALABRAS DIFÍCILES EN INTERFAZ
// ============================================================================

function marcarPalabraDificil() {
    if (preguntaActualAnime < mazoActualAnime.length) {
        const palabraActual = mazoActualAnime[preguntaActualAnime];
        
        if (sistemaDificilesAnime.esDificil(palabraActual)) {
            // Remover de difíciles
            sistemaDificilesAnime.removerDeDificiles(palabraActual);
            mostrarNotificacionAnime(`✅ "${palabraActual.japones}" removida de difíciles`);
        } else {
            // Marcar como difícil
            sistemaDificilesAnime.marcarComoDificil(palabraActual);
            mostrarNotificacionAnime(`💀 "${palabraActual.japones}" marcada como difícil`);
        }
        
        // Actualizar botón
        actualizarBotonDificil(sistemaDificilesAnime.esDificil(palabraActual));
        
        // Actualizar contadores
        actualizarContadoresInterfaz();
        
        // Actualizar lista de mazos si estamos en detalle
        if (animeActual) {
            cargarMazosAnime(animeActual);
        }
    }
}

function actualizarBotonDificil(esDificil) {
    const botonDificil = document.getElementById('boton-dificil');
    if (botonDificil) {
        if (esDificil) {
            botonDificil.innerHTML = '✅ Ya es difícil';
            botonDificil.style.background = 'linear-gradient(135deg, #ff4444, #cc0000)';
            botonDificil.title = 'Haz clic para quitar de palabras difíciles';
        } else {
            botonDificil.innerHTML = '💀 Marcar como difícil';
            botonDificil.style.background = 'linear-gradient(135deg, #ff9800, #ff5722)';
            botonDificil.title = 'Haz clic para marcar como difícil';
        }
    }
}

function actualizarContadoresInterfaz() {
    // Contador de palabras falladas en este quiz
    const contadorFalladasQuiz = document.getElementById('contador-falladas-quiz');
    if (contadorFalladasQuiz) {
        contadorFalladasQuiz.textContent = `📝 ${respuestasIncorrectasAnime} fallada${respuestasIncorrectasAnime !== 1 ? 's' : ''} en este quiz`;
    }
    
    // Contador de palabras difíciles totales
    const contadorDificilesTotal = document.getElementById('contador-dificiles-total');
    if (contadorDificilesTotal) {
        contadorDificilesTotal.textContent = `💀 ${palabrasDificilesAnime.length} difícil${palabrasDificilesAnime.length !== 1 ? 'es' : ''}`;
    }
    
    // Contador de palabras falladas totales
    const contadorFalladasTotal = document.getElementById('contador-falladas-total');
    if (contadorFalladasTotal) {
        contadorFalladasTotal.textContent = `📝 ${palabrasFalladasAnime.length} fallada${palabrasFalladasAnime.length !== 1 ? 's' : ''}`;
    }
}

// ============================================================================
// 10. FUNCIONES PARA LIMPIAR SISTEMAS
// ============================================================================

function limpiarPalabrasFalladasAnime() {
    if (palabrasFalladasAnime.length === 0) {
        mostrarNotificacionAnime('📝 No hay palabras falladas para limpiar');
        return;
    }
    
    const confirmar = confirm(`¿Limpiar ${palabrasFalladasAnime.length} palabras falladas?`);
    if (confirmar) {
        const cantidad = sistemaFalladasAnime.limpiarTodas();
        mostrarNotificacionAnime(`🗑️ ${cantidad} palabras falladas limpiadas`);
        actualizarContadoresInterfaz();
        
        if (animeActual) {
            cargarMazosAnime(animeActual);
        }
    }
}

function limpiarPalabrasDificilesAnime() {
    if (palabrasDificilesAnime.length === 0) {
        mostrarNotificacionAnime('💀 No hay palabras difíciles para limpiar');
        return;
    }
    
    const confirmar = confirm(`¿Limpiar ${palabrasDificilesAnime.length} palabras difíciles?`);
    if (confirmar) {
        const cantidad = sistemaDificilesAnime.limpiarTodas();
        mostrarNotificacionAnime(`🗑️ ${cantidad} palabras difíciles limpiadas`);
        actualizarContadoresInterfaz();
        
        if (animeActual) {
            cargarMazosAnime(animeActual);
        }
    }
}

// ============================================================================
// 11. FUNCIÓN PARA MOSTRAR RESULTADOS
// ============================================================================

function mostrarResultadosAnime() {
    const porcentaje = Math.round((respuestasCorrectasAnime / mazoActualAnime.length) * 100);
    const recompensa = animeRecompensas.aplicarRecompensa(porcentaje, animeActual, mazoActualId);
    
    // Crear pantalla de resultados
    const resultadosHTML = `
        <div class="resultado-anime-container">
            <h2>${mazoActualId === 'falladas' ? '📝 Resultados - Palabras Falladas' : 
                  mazoActualId === 'dificiles' ? '💀 Resultados - Palabras Difíciles' : 
                  '🎬 Resultados del Quiz Anime'}</h2>
            
            <div class="resultado-anime-detalle">
                <div class="resultado-item">
                    <span class="resultado-label">Preguntas totales:</span>
                    <span class="resultado-valor">${mazoActualAnime.length}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Respuestas correctas:</span>
                    <span class="resultado-valor">${respuestasCorrectasAnime}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Respuestas incorrectas:</span>
                    <span class="resultado-valor">${respuestasIncorrectasAnime}</span>
                </div>
                <div class="resultado-item">
                    <span class="resultado-label">Porcentaje:</span>
                    <span class="resultado-valor resultado-porcentaje">${porcentaje}%</span>
                </div>
                
                <!-- Recompensas -->
                <div class="recompensa-resumen">
                    <h4>🎁 Recompensas Obtenidas</h4>
                    <div class="recompensa-item">
                        <span class="recompensa-icon">💰</span>
                        <span class="recompensa-texto">Dinero:</span>
                        <span class="recompensa-valor">+${recompensa.dinero} S/.</span>
                    </div>
                    <div class="recompensa-item">
                        <span class="recompensa-icon">💕</span>
                        <span class="recompensa-texto">Experiencia:</span>
                        <span class="recompensa-valor">+${recompensa.experiencia} XP</span>
                    </div>
                    <div class="recompensa-mensaje">${recompensa.mensaje}</div>
                </div>
                
                <!-- Estadísticas especiales -->
                ${mazoActualId === 'falladas' || mazoActualId === 'dificiles' ? `
                    <div class="estadisticas-especiales">
                        <h4>📊 Estadísticas de Práctica</h4>
                        <div class="estadistica-item">
                            <span>📝 Palabras falladas restantes:</span>
                            <span class="estadistica-valor">${palabrasFalladasAnime.length}</span>
                        </div>
                        <div class="estadistica-item">
                            <span>💀 Palabras difíciles restantes:</span>
                            <span class="estadistica-valor">${palabrasDificilesAnime.length}</span>
                        </div>
                        <p style="font-size: 0.9em; color: #cccccc; margin-top: 10px;">
                            Las palabras correctas han sido removidas del sistema especial
                        </p>
                    </div>
                ` : ''}
            </div>
            
            <div class="botones-resultados-anime">
                <button class="boton-principal" onclick="volverAAnimeDetalle()">
                    Volver al Anime
                </button>
                <button class="boton-secundario" onclick="repetirQuizAnime()">
                    Repetir Quiz
                </button>
                
                <!-- Botones especiales -->
                ${palabrasFalladasAnime.length > 0 ? `
                    <button class="boton-terciario" onclick="limpiarPalabrasFalladasAnime()" 
                            style="background: linear-gradient(135deg, #ff4444, #cc0000);">
                        🗑️ Limpiar Falladas (${palabrasFalladasAnime.length})
                    </button>
                ` : ''}
                
                ${palabrasDificilesAnime.length > 0 ? `
                    <button class="boton-terciario" onclick="limpiarPalabrasDificilesAnime()" 
                            style="background: linear-gradient(135deg, #ff9800, #ff5722);">
                        🗑️ Limpiar Difíciles (${palabrasDificilesAnime.length})
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    // Crear/actualizar pantalla de resultados
    let resultadosPantalla = document.getElementById('pantalla-resultados-anime');
    if (!resultadosPantalla) {
        resultadosPantalla = document.createElement('div');
        resultadosPantalla.id = 'pantalla-resultados-anime';
        resultadosPantalla.className = 'pantalla';
        document.body.appendChild(resultadosPantalla);
    }
    
    resultadosPantalla.innerHTML = `
        <div class="contenedor">
            <div class="barra-superior">
                <div class="contador">Resultados</div>
                <div class="botones-superiores">
                    <button class="boton-home" onclick="volverAAnimeDetalle()">Volver al Anime</button>
                    <button class="boton-menu" onclick="irAlMenu()">🏠 Menú</button>
                </div>
            </div>
            ${resultadosHTML}
        </div>
    `;
    
    cambiarPantalla('pantalla-resultados-anime');
    
    // Si es mazo especial, limpiar las palabras que se respondieron correctamente
    if (mazoActualId === 'falladas' || mazoActualId === 'dificiles') {
        // Las palabras ya fueron removidas durante el quiz
        setTimeout(() => {
            if (animeActual) {
                cargarMazosAnime(animeActual);
            }
        }, 1000);
    }
}

// ============================================================================
// 12. FUNCIONES AUXILIARES
// ============================================================================

function mostrarNotificacionAnime(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #ff4081);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(255, 107, 157, 0.5);
        border-left: 5px solid #00ff88;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

function repetirQuizAnime() {
    preguntaActualAnime = 0;
    respuestasCorrectasAnime = 0;
    respuestasIncorrectasAnime = 0;
    
    for (let i = mazoActualAnime.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActualAnime[i], mazoActualAnime[j]] = [mazoActualAnime[j], mazoActualAnime[i]];
    }
    
    cambiarPantalla('pantalla-quiz-anime');
    mostrarPreguntaAnime();
}

// ============================================================================
// 13. EXPORTAR FUNCIONES PARA USO GLOBAL
// ============================================================================

window.iniciarSistemaAnime = iniciarSistemaAnime;
window.cargarAnime = cargarAnime;
window.iniciarQuizAnime = iniciarQuizAnime;
window.marcarPalabraDificil = marcarPalabraDificil;
window.limpiarPalabrasFalladasAnime = limpiarPalabrasFalladasAnime;
window.limpiarPalabrasDificilesAnime = limpiarPalabrasDificilesAnime;
window.sistemaFalladasAnime = sistemaFalladasAnime;
window.sistemaDificilesAnime = sistemaDificilesAnime;

console.log("✅ Sistema anime COMPLETO cargado");
console.log("📝 Sistema de palabras falladas: ACTIVO");
console.log("💀 Sistema de palabras difíciles: ACTIVO");
console.log("💰 Sistema de recompensas: ACTIVO");
