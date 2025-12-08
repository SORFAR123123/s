// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES
// ============================================================================

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
        'sub2_1': 'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
        'sub2_2': 'https://pbs.twimg.com/media/G6FAHBHW8AAX4f1?format=png&name=large',
        'sub2_3': 'https://pbs.twimg.com/media/G6FAe2wWIAAIYTu?format=jpg&name=large',
        'sub3_1': 'https://pbs.twimg.com/media/G67wm2LXMAATzxp?format=jpg&name=small',
        'sub3_2': 'imagenes/sub3_2.jpg',
        'sub3_3': 'imagenes/sub3_3.jpg',
        'sub4_1': 'imagenes/sub4_1.jpg',
        'sub4_2': 'imagenes/sub4_2.jpg',
        'sub4_3': 'imagenes/sub4_3.jpg',
        'sub5_1': 'imagenes/sub5_1.jpg',
        'sub5_2': 'imagenes/sub5_2.jpg',
        'sub5_3': 'imagenes/sub5_3.jpg',
        'sub6_1': 'imagenes/sub6_1.jpg',
        'sub6_2': 'imagenes/sub6_2.jpg',
        'sub6_3': 'imagenes/sub6_3.jpg',
        'sub7_1': 'imagenes/sub7_1.jpg',
        'sub7_2': 'imagenes/sub7_2.jpg',
        'sub7_3': 'imagenes/sub7_3.jpg',
        'sub8_1': 'imagenes/sub8_1.jpg',
        'sub8_2': 'imagenes/sub8_2.jpg',
        'sub8_3': 'imagenes/sub8_3.jpg',
        'sub9_1': 'imagenes/sub9_1.jpg',
        'sub9_2': 'imagenes/sub9_2.jpg',
        'sub9_3': 'imagenes/sub9_3.jpg',
        'sub10_1': 'imagenes/sub10_1.jpg',
        'sub10_2': 'imagenes/sub10_2.jpg',
        'sub10_3': 'imagenes/sub10_3.jpg'
    },
    mazos: {
        'mazo1': 'imagenes/mazo1.jpg',
        'mazo2': 'imagenes/mazo2.jpg',
        'mazo3': 'imagenes/mazo3.jpg',
        'mazo4': 'imagenes/mazo4.jpg',
        'mazo5': 'imagenes/mazo5.jpg'
    },
    // AQUÍ ESTÁN LAS IMÁGENES DE LAS QUINTILLIZAS NAKANO (DENTRO DE configImagenes)
    nakano: {
        'ichika': 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        'nino': 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        'miku': 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        'yotsuba': 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
        'itsuki': 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        'default': 'imagenes/nakano/default.jpg'
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
        titulo: "A miku le gustan los inteligentes y entrega el poto a Fabrizio  y Aldo ⭐",
        url: "miku.mp4",
        duracion: "15s"
    },
    {
        id: 3,
        titulo: "¡ Nino te telaja con su boca! 💪",
        url: "ninocaricia.mp4",
        duracion: "12s"
    },
    {
        id: 4,
        titulo: "¡ Nino te telaja con su boca! 🏆",
        url: "ninocaricia.mp4",
        duracion: "8s"
    },
    {
        id: 5,
        titulo: "¡Nino esta pensando en ti ! 🚀",
        url: "ninopensando.mp4",
        duracion: "11s"
    }
];

// ============================================================================
// VIDEOS +18 PARA MOMENTOS ÍNTIMOS (QUINTILLIZAS NAKANO)
// ============================================================================

const videosIntimosNakano = {
    // Ichika
    'ichika_beso_ichika': 'videos/ichika_beso.mp4',
    'ichika_escena_privada': 'videos/ichika_escena.mp4',
    'ichika_noche_estrellas': 'videos/ichika_noche.mp4',
    'ichika_maquillaje_intimo': 'videos/ichika_maquillaje.mp4',
    
    // Nino
    'nino_beso_nino': 'videos/nino_beso.mp4',
    'nino_cena_romantica': 'videos/nino_cena.mp4',
    'nino_masaje_culinario': 'videos/nino_masaje.mp4',
    'nino_noche_especias': 'videos/nino_especias.mp4',
    
    // Miku
    'miku_beso_miku': 'videos/miku_beso.mp4',
    'miku_leccion_historica': 'videos/miku_leccion.mp4',
    'miku_musica_intima': 'videos/miku_musica.mp4',
    'miku_noche_samurais': 'videos/miku_samurais.mp4',
    
    // Yotsuba
    'yotsuba_beso_yotsuba': 'videos/yotsuba_beso.mp4',
    'yotsuba_ducha_juntos': 'videos/yotsuba_ducha.mp4',
    'yotsuba_masaje_deportivo': 'videos/yotsuba_masaje.mp4',
    'yotsuba_noche_olimpica': 'videos/yotsuba_olimpica.mp4',
    
    // Itsuki
    'itsuki_beso_itsuki': 'videos/itsuki_beso.mp4',
    'itsuki_cena_romantica_itsuki': 'videos/itsuki_cena.mp4',
    'itsuki_degustacion_intima': 'videos/itsuki_degustacion.mp4',
    'itsuki_noche_chocolate': 'videos/itsuki_chocolate.mp4'
};

// ============================================================================
// VIDEOS DE REGALOS RECÍPROCOS NAKANO
// ============================================================================

const videosRegalosNakano = {
    // Ichika
    'ichika_microfono': 'videos/regalos/ichika_microfono.mp4',
    'ichika_maquillaje': 'videos/regalos/ichika_maquillaje.mp4',
    'ichika_guion': 'videos/regalos/ichika_guion.mp4',
    
    // Nino
    'nino_utensilios_cocina': 'videos/regalos/nino_cocinando.mp4',
    'nino_delantal': 'videos/regalos/nino_delantal.mp4',
    'nino_libro_recetas': 'videos/regalos/nino_recetas.mp4',
    
    // Miku
    'miku_audifonos': 'videos/regalos/miku_audifonos.mp4',
    'miku_libro_historia': 'videos/regalos/miku_historia.mp4',
    'miku_daimyou': 'videos/regalos/miku_daimyou.mp4',
    
    // Yotsuba
    'yotsuba_balon': 'videos/regalos/yotsuba_balon.mp4',
    'yotsuba_zapatos_deportivos': 'videos/regalos/yotsuba_corriendo.mp4',
    'yotsuba_medalla': 'videos/regalos/yotsuba_medalla.mp4',
    
    // Itsuki
    'itsuki_libro_cocina': 'videos/regalos/itsuki_cocinando.mp4',
    'itsuki_comida_gourmet': 'videos/regalos/itsuki_comiendo.mp4',
    'itsuki_postre_especial': 'videos/regalos/itsuki_postre.mp4'
};

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

// Función para obtener la URL de una imagen
function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    // Imagen por defecto si no se encuentra
    return 'imagenes/default.jpg';
}

// Función para obtener imagen de quintilliza Nakano
function obtenerImagenNakano(idQuintilliza) {
    if (configImagenes.nakano && configImagenes.nakano[idQuintilliza]) {
        return configImagenes.nakano[idQuintilliza];
    }
    return configImagenes.nakano.default || 'imagenes/nakano/default.jpg';
}

// Función para obtener un video aleatorio de recompensa
function obtenerVideoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * videosRecompensa.length);
    return videosRecompensa[indiceAleatorio];
}

// Función para cambiar video íntimo (testing)
function cambiarVideoIntimoNakano(escenaId, nuevaUrl) {
    if (videosIntimosNakano[escenaId]) {
        videosIntimosNakano[escenaId] = nuevaUrl;
        console.log(`Video de ${escenaId} actualizado a: ${nuevaUrl}`);
        return true;
    }
    return false;
}

// Función para cambiar video de regalo (testing)
function cambiarVideoRegaloNakano(regaloId, nuevaUrl) {
    if (videosRegalosNakano[regaloId]) {
        videosRegalosNakano[regaloId] = nuevaUrl;
        console.log(`Video de regalo ${regaloId} actualizado a: ${nuevaUrl}`);
        return true;
    }
    return false;
}

// Funciones globales para testing desde consola
window.cambiarVideoIntimo = function(escenaId, nuevaUrl) {
    return cambiarVideoIntimoNakano(escenaId, nuevaUrl);
};

window.cambiarVideoRegalo = function(regaloId, nuevaUrl) {
    return cambiarVideoRegaloNakano(regaloId, nuevaUrl);
};

window.obtenerImagenNakano = obtenerImagenNakano;

// Función para actualizar imagen de quintilliza desde consola
window.actualizarImagenNakano = function(idQuintilliza, nuevaUrl) {
    if (configImagenes.nakano && configImagenes.nakano[idQuintilliza]) {
        configImagenes.nakano[idQuintilliza] = nuevaUrl;
        console.log(`✅ Imagen de ${idQuintilliza} actualizada a: ${nuevaUrl}`);
        
        // Si el sistema Nakano está activo, actualizar interfaz
        if (typeof sistemaNakano !== 'undefined' && sistemaNakano.actualizarInterfazNakano) {
            sistemaNakano.actualizarInterfazNakano();
        }
        return true;
    }
    console.log(`❌ Quintilliza ${idQuintilliza} no encontrada`);
    return false;
};

// Función para ver todas las imágenes Nakano
window.verImagenesNakano = function() {
    console.log("🖼️ Imágenes Nakano configuradas:");
    if (configImagenes.nakano) {
        Object.entries(configImagenes.nakano).forEach(([nombre, url]) => {
            console.log(`${nombre}: ${url}`);
        });
    } else {
        console.log("❌ No hay imágenes Nakano configuradas");
    }
};
