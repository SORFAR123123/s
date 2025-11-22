// Estructura de datos: 10 categorías, cada una con 5 mazos de 10 palabras
const categorias = {
    'categoria1': {
        nombre: 'Anime',
        mazos: {
            'mazo1_1': {
                nombre: 'Naruto',
                palabras: [
                    { japones: '忍', opciones: ['Ninja', 'Samurai', 'Guerrero', 'Mago'], respuesta: 0 },
                    { japones: '影', opciones: ['Sombra', 'Luz', 'Fuego', 'Agua'], respuesta: 0 },
                    { japones: '写輪眼', opciones: ['Sharingan', 'Byakugan', 'Rinnegan', 'Jougan'], respuesta: 0 },
                    { japones: '螺旋丸', opciones: ['Rasengan', 'Chidori', 'Kamehameha', 'Hadouken'], respuesta: 0 },
                    { japones: '火影', opciones: ['Hokage', 'Kazekage', 'Mizukage', 'Raikage'], respuesta: 0 },
                    { japones: '查克拉', opciones: ['Chakra', 'Ki', 'Mana', 'Energía'], respuesta: 0 },
                    { japones: '尾獣', opciones: ['Biju', 'Kaiju', 'Youkai', 'Oni'], respuesta: 0 },
                    { japones: '木ノ葉', opciones: ['Konoha', 'Suna', 'Kiri', 'Kumo'], respuesta: 0 },
                    { japones: '忍術', opciones: ['Ninjutsu', 'Genjutsu', 'Taijutsu', 'Doujutsu'], respuesta: 0 },
                    { japones: '里', opciones: ['Aldea', 'Pueblo', 'Ciudad', 'País'], respuesta: 0 }
                ]
            },
            'mazo1_2': {
                nombre: 'One Piece',
                palabras: [
                    { japones: '海賊', opciones: ['Pirata', 'Marinero', 'Explorador', 'Cazador'], respuesta: 0 },
                    { japones: '悪魔の実', opciones: ['Fruta del Diablo', 'Fruta Mágica', 'Fruta Prohibida', 'Fruta Sagrada'], respuesta: 0 },
                    { japones: '麦わら', opciones: ['Sombrero de Paja', 'Sombrero Negro', 'Bandana', 'Gorro'], respuesta: 0 },
                    { japones: '海軍', opciones: ['Marina', 'Piratas', 'Revolucionarios', 'Cazadores'], respuesta: 0 },
                    { japones: '将軍', opciones: ['Shogun', 'Almirante', 'Yonkou', 'Rey'], respuesta: 0 },
                    { japones: '覇気', opciones: ['Haki', 'Chakra', 'Nen', 'Ki'], respuesta: 0 },
                    { japones: '仲間', opciones: ['Compañero', 'Enemigo', 'Rival', 'Maestro'], respuesta: 0 },
                    { japones: '冒険', opciones: ['Aventura', 'Viaje', 'Expedición', 'Travesía'], respuesta: 0 },
                    { japones: '宝', opciones: ['Tesoro', 'Riqueza', 'Joyas', 'Oro'], respuesta: 0 },
                    { japones: '船', opciones: ['Barco', 'Nave', 'Bote', 'Velero'], respuesta: 0 }
                ]
            },
            'mazo1_3': {
                nombre: 'Attack on Titan',
                palabras: [
                    { japones: '巨人', opciones: ['Titán', 'Gigante', 'Monstruo', 'Cíclope'], respuesta: 0 },
                    { japones: '立体機動', opciones: ['Equipo de Maniobra', 'Arma Anti-Titán', 'Cuerda de Escape', 'Gancho de Ataque'], respuesta: 0 },
                    { japones: '壁', opciones: ['Muro', 'Pared', 'Barrera', 'Frontera'], respuesta: 0 },
                    { japones: '兵団', opciones: ['Cuerpo', 'Ejército', 'Escuadrón', 'División'], respuesta: 0 },
                    { japones: '自由', opciones: ['Libertad', 'Justicia', 'Igualdad', 'Paz'], respuesta: 0 },
                    { japones: '進撃', opciones: ['Avance', 'Ataque', 'Carga', 'Asalto'], respuesta: 0 },
                    { japones: '座標', opciones: ['Coordenada', 'Punto', 'Posición', 'Ubicación'], respuesta: 0 },
                    { japones: '始祖', opciones: ['Fundador', 'Origen', 'Primero', 'Antepasado'], respuesta: 0 },
                    { japones: '戦士', opciones: ['Guerrero', 'Soldado', 'Luchador', 'Combatiente'], respuesta: 0 },
                    { japones: '真実', opciones: ['Verdad', 'Realidad', 'Hecho', 'Certidumbre'], respuesta: 0 }
                ]
            },
            'mazo1_4': {
                nombre: 'Dragon Ball',
                palabras: [
                    { japones: '気', opciones: ['Ki', 'Energía', 'Fuerza', 'Poder'], respuesta: 0 },
                    { japones: '悟空', opciones: ['Goku', 'Vegeta', 'Gohan', 'Piccolo'], respuesta: 0 },
                    { japones: '超サイヤ人', opciones: ['Super Saiyajin', 'Saiyajin Dios', 'Ultra Instinto', 'Kaio-ken'], respuesta: 0 },
                    { japones: '神龍', opciones: ['Shenlong', 'Polunga', 'Porunga', 'Dragón'], respuesta: 0 },
                    { japones: '界王', opciones: ['Kaio', 'Kami', 'Kaioshin', 'Dios'], respuesta: 0 },
                    { japones: '元気玉', opciones: ['Genkidama', 'Kamehameha', 'Makankosappo', 'Final Flash'], respuesta: 0 },
                    { japones: '戦闘力', opciones: ['Poder de Pelea', 'Nivel de Ki', 'Fuerza de Ataque', 'Capacidad de Combate'], respuesta: 0 },
                    { japones: '武道', opciones: ['Artes Marciales', 'Camino del Guerrero', 'Disciplina', 'Entrenamiento'], respuesta: 0 },
                    { japones: '天下一', opciones: ['El Más Fuerte', 'Campeón', 'Número Uno', 'Invencible'], respuesta: 0 },
                    { japones: '修行', opciones: ['Entrenamiento', 'Práctica', 'Ejercicio', 'Disciplina'], respuesta: 0 }
                ]
            },
            'mazo1_5': {
                nombre: 'My Hero Academia',
                palabras: [
                    { japones: '個性', opciones: ['Quirk', 'Poder', 'Habilidad', 'Don'], respuesta: 0 },
                    { japones: '英雄', opciones: ['Héroe', 'Protector', 'Defensor', 'Guardián'], respuesta: 0 },
                    { japones: '緑谷', opciones: ['Midoriya', 'Bakugo', 'Todoroki', 'All Might'], respuesta: 0 },
                    { japones: 'ワン・フォー・オール', opciones: ['One For All', 'All For One', 'Full Cowl', 'Delaware Smash'], respuesta: 0 },
                    { japones: '敵', opciones: ['Villano', 'Enemigo', 'Antagonista', 'Rival'], respuesta: 0 },
                    { japones: '雄英', opciones: ['U.A.', 'Academia', 'Escuela', 'Instituto'], respuesta: 0 },
                    { japones: '爆豪', opciones: ['Bakugo', 'Midoriya', 'Kirishima', 'Uraraka'], respuesta: 0 },
                    { japones: '轟', opciones: ['Todoroki', 'Iida', 'Tokoyami', 'Asui'], respuesta: 0 },
                    { japones: '無個性', opciones: ['Sin Quirk', 'Normal', 'Débil', 'Común'], respuesta: 0 },
                    { japones: 'プラスアルトラ', opciones: ['Plus Ultra', 'Más Allá', 'Sin Límites', 'Extremo'], respuesta: 0 }
                ]
            }
        }
    },
    'categoria2': {
        nombre: 'Videojuegos',
        mazos: {
            'mazo2_1': {
                nombre: 'The Legend of Zelda',
                palabras: [
                    { japones: 'ゼルダ', opciones: ['Zelda', 'Link', 'Ganon', 'Impa'], respuesta: 0 },
                    { japones: 'トライフォース', opciones: ['Trifuerza', 'Triforce', 'Triángulo Dorado', 'Reliquia Sagrada'], respuesta: 0 },
                    { japones: 'ハイラル', opciones: ['Hyrule', 'Termina', 'Holodrum', 'Labrynna'], respuesta: 0 },
                    { japones: 'マスターソード', opciones: ['Espada Maestra', 'Espada Legendaria', 'Espada Divina', 'Espada del Héroe'], respuesta: 0 },
                    { japones: 'ルピー', opciones: ['Rupia', 'Moneda', 'Gema', 'Dinero'], respuesta: 0 },
                    { japones: '神殿', opciones: ['Templo', 'Santuario', 'Mazmorra', 'Fortaleza'], respuesta: 0 },
                    { japones: '勇者', opciones: ['Héroe', 'Guerrero', 'Elegido', 'Salvador'], respuesta: 0 },
                    { japones: '魔王', opciones: ['Rey Demonio', 'Señor Oscuro', 'Antagonista', 'Villano'], respuesta: 0 },
                    { japones: '妖精', opciones: ['Hada', 'Espíritu', 'Ser Mágico', 'Guía'], respuesta: 0 },
                    { japones: '冒険', opciones: ['Aventura', 'Viaje', 'Expedición', 'Búsqueda'], respuesta: 0 }
                ]
            },
            'mazo2_2': {
                nombre: 'Final Fantasy',
                palabras: [
                    { japones: 'ファイナルファンタジー', opciones: ['Final Fantasy', 'Fantasy Final', 'Ultimate Fantasy', 'Last Fantasy'], respuesta: 0 },
                    { japones: '召喚獣', opciones: ['Invocación', 'Eidolon', 'Esper', 'Guardián'], respuesta: 0 },
                    { japones: '魔法', opciones: ['Magia', 'Hechizo', 'Conjuro', 'Poder'], respuesta: 0 },
                    { japones: 'クリスタル', opciones: ['Cristal', 'Gema', 'Piedra', 'Orbe'], respuesta: 0 },
                    { japones: 'チョコボ', opciones: ['Chocobo', 'Ave Grande', 'Pájaro Montura', 'Animal de Carga'], respuesta: 0 },
                    { japones: 'モーグリ', opciones: ['Moogle', 'Criatura Mágica', 'Animal Fantástico', 'Ser Alado'], respuesta: 0 },
                    { japones: 'ジョブ', opciones: ['Clase', 'Oficio', 'Profesión', 'Especialidad'], respuesta: 0 },
                    { japones: 'エーテル', opciones: ['Éter', 'Mana', 'Puntos Mágicos', 'Energía Espiritual'], respuesta: 0 },
                    { japones: '飛空艇', opciones: ['Aeronave', 'Nave Voladora', 'Dirigible', 'Transporte Aéreo'], respuesta: 0 },
                    { japones: '世界', opciones: ['Mundo', 'Planeta', 'Tierra', 'Universo'], respuesta: 0 }
                ]
            },
            'mazo2_3': { nombre: 'Pokémon', palabras: generarPalabrasAleatorias() },
            'mazo2_4': { nombre: 'Mario Bros', palabras: generarPalabrasAleatorias() },
            'mazo2_5': { nombre: 'Dark Souls', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria3': {
        nombre: 'Películas',
        mazos: {
            'mazo3_1': { nombre: 'Studio Ghibli', palabras: generarPalabrasAleatorias() },
            'mazo3_2': { nombre: 'Marvel', palabras: generarPalabrasAleatorias() },
            'mazo3_3': { nombre: 'DC Comics', palabras: generarPalabrasAleatorias() },
            'mazo3_4': { nombre: 'Harry Potter', palabras: generarPalabrasAleatorias() },
            'mazo3_5': { nombre: 'Star Wars', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria4': {
        nombre: 'Música',
        mazos: {
            'mazo4_1': { nombre: 'Rock', palabras: generarPalabrasAleatorias() },
            'mazo4_2': { nombre: 'Pop', palabras: generarPalabrasAleatorias() },
            'mazo4_3': { nombre: 'J-Pop', palabras: generarPalabrasAleatorias() },
            'mazo4_4': { nombre: 'K-Pop', palabras: generarPalabrasAleatorias() },
            'mazo4_5': { nombre: 'Clásica', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria5': {
        nombre: 'Ciencia',
        mazos: {
            'mazo5_1': { nombre: 'Física', palabras: generarPalabrasAleatorias() },
            'mazo5_2': { nombre: 'Química', palabras: generarPalabrasAleatorias() },
            'mazo5_3': { nombre: 'Biología', palabras: generarPalabrasAleatorias() },
            'mazo5_4': { nombre: 'Astronomía', palabras: generarPalabrasAleatorias() },
            'mazo5_5': { nombre: 'Matemáticas', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria6': {
        nombre: 'Historia',
        mazos: {
            'mazo6_1': { nombre: 'Antigua', palabras: generarPalabrasAleatorias() },
            'mazo6_2': { nombre: 'Medieval', palabras: generarPalabrasAleatorias() },
            'mazo6_3': { nombre: 'Moderna', palabras: generarPalabrasAleatorias() },
            'mazo6_4': { nombre: 'Contemporánea', palabras: generarPalabrasAleatorias() },
            'mazo6_5': { nombre: 'Japonesa', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria7': {
        nombre: 'Arte',
        mazos: {
            'mazo7_1': { nombre: 'Pintura', palabras: generarPalabrasAleatorias() },
            'mazo7_2': { nombre: 'Escultura', palabras: generarPalabrasAleatorias() },
            'mazo7_3': { nombre: 'Arquitectura', palabras: generarPalabrasAleatorias() },
            'mazo7_4': { nombre: 'Fotografía', palabras: generarPalabrasAleatorias() },
            'mazo7_5': { nombre: 'Digital', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria8': {
        nombre: 'Deportes',
        mazos: {
            'mazo8_1': { nombre: 'Fútbol', palabras: generarPalabrasAleatorias() },
            'mazo8_2': { nombre: 'Baloncesto', palabras: generarPalabrasAleatorias() },
            'mazo8_3': { nombre: 'Tenis', palabras: generarPalabrasAleatorias() },
            'mazo8_4': { nombre: 'Natación', palabras: generarPalabrasAleatorias() },
            'mazo8_5': { nombre: 'Atletismo', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria9': {
        nombre: 'Tecnología',
        mazos: {
            'mazo9_1': { nombre: 'Programación', palabras: generarPalabrasAleatorias() },
            'mazo9_2': { nombre: 'Robótica', palabras: generarPalabrasAleatorias() },
            'mazo9_3': { nombre: 'IA', palabras: generarPalabrasAleatorias() },
            'mazo9_4': { nombre: 'Internet', palabras: generarPalabrasAleatorias() },
            'mazo9_5': { nombre: 'Hardware', palabras: generarPalabrasAleatorias() }
        }
    },
    'categoria10': {
        nombre: 'Literatura',
        mazos: {
            'mazo10_1': { nombre: 'Novela', palabras: generarPalabrasAleatorias() },
            'mazo10_2': { nombre: 'Poesía', palabras: generarPalabrasAleatorias() },
            'mazo10_3': { nombre: 'Teatro', palabras: generarPalabrasAleatorias() },
            'mazo10_4': { nombre: 'Ensayo', palabras: generarPalabrasAleatorias() },
            'mazo10_5': { nombre: 'Cuento', palabras: generarPalabrasAleatorias() }
        }
    }
};

// Función para generar palabras aleatorias para mazos vacíos
function generarPalabrasAleatorias() {
    const palabrasComunes = [
        { japones: '言葉', opciones: ['Palabra', 'Lenguaje', 'Expresión', 'Término'], respuesta: 0 },
        { japones: '時間', opciones: ['Tiempo', 'Hora', 'Momento', 'Duración'], respuesta: 0 },
        { japones: '場所', opciones: ['Lugar', 'Espacio', 'Sitio', 'Ubicación'], respuesta: 0 },
        { japones: '人', opciones: ['Persona', 'Gente', 'Humano', 'Individuo'], respuesta: 0 },
        { japones: '物', opciones: ['Cosa', 'Objeto', 'Artículo', 'Elemento'], respuesta: 0 },
        { japones: '事', opciones: ['Asunto', 'Cuestión', 'Tema', 'Problema'], respuesta: 0 },
        { japones: '世界', opciones: ['Mundo', 'Planeta', 'Tierra', 'Universo'], respuesta: 0 },
        { japones: '生活', opciones: ['Vida', 'Existencia', 'Rutina', 'Día a día'], respuesta: 0 },
        { japones: '仕事', opciones: ['Trabajo', 'Empleo', 'Oficio', 'Labor'], respuesta: 0 },
        { japones: '家族', opciones: ['Familia', 'Parientes', 'Clan', 'Linaje'], respuesta: 0 }
    ];
    return [...palabrasComunes];
}

let categoriaActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// Función para cargar una categoría
function cargarCategoria(idCategoria) {
    if (categorias[idCategoria]) {
        categoriaActual = idCategoria;
        const categoria = categorias[idCategoria];
        
        document.getElementById('titulo-categoria').textContent = categoria.nombre;
        document.getElementById('nombre-categoria').textContent = `Mazos de ${categoria.nombre}`;
        
        const contenedorMazos = document.getElementById('contenedor-mazos');
        contenedorMazos.innerHTML = '';
        
        // Crear tarjetas para cada mazo
        Object.keys(categoria.mazos).forEach(key => {
            const mazo = categoria.mazos[key];
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-categoria';
            mazoDiv.onclick = () => cargarMazo(key);
            
            mazoDiv.innerHTML = `
                <img src="imagenes/${key}.jpg" alt="${mazo.nombre}" class="mazo-categoria-imagen">
                <div class="mazo-categoria-texto">${mazo.nombre}</div>
                <div class="mazo-categoria-info">10 palabras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        cambiarPantalla('pantalla-mazos');
    }
}

// Función para cargar un mazo específico
function cargarMazo(idMazo) {
    const categoria = categorias[categoriaActual];
    if (categoria && categoria.mazos[idMazo]) {
        mazoActual = [...categoria.mazos[idMazo].palabras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        // Mezclar las preguntas
        mezclarPreguntas();
        
        // Cambiar a la pantalla del quiz
        cambiarPantalla('pantalla-quiz');
        
        // Mostrar la primera pregunta
        mostrarPregunta();
    }
}

// Función para mezclar las preguntas
function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        // Actualizar contador
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        
        // Mostrar palabra japonesa
        document.getElementById('palabra-japones').textContent = pregunta.japones;
        
        // Limpiar resultado anterior
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        
        // Ocultar botón siguiente
        document.getElementById('boton-siguiente').style.display = 'none';
        
        // Generar opciones
        const contenedorOpciones = document.getElementById('contenedor-opciones');
        contenedorOpciones.innerHTML = '';
        
        // Mezclar opciones
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        // Crear botones de opciones
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.respuesta], pregunta.japones);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

// Función para verificar la respuesta
function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, palabraJapones) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    // Deshabilitar todos los botones
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Marcar la respuesta correcta e incorrecta
    opciones.forEach(opcion => {
        if (opcion.textContent === respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar resultado
    if (respuestaSeleccionada === respuestaCorrecta) {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
    }
    
    // Mostrar botón siguiente
    document.getElementById('boton-siguiente').style.display = 'block';
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

// Función para mostrar los resultados finales
function mostrarResultados() {
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
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

// Función para cambiar entre pantallas
function cambiarPantalla(idPantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Mostrar la pantalla solicitada
    document.getElementById(idPantalla).classList.add('activa');
}

// Función para volver al inicio
function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

// Función para volver a la categoría
function volverACategoria() {
    cambiarPantalla('pantalla-mazos');
}

// Función para repetir el quiz
function repetirQuiz() {
    // Reiniciar variables
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Mezclar preguntas nuevamente
    mezclarPreguntas();
    
    // Volver al quiz
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}
