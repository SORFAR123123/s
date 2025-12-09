// ============================================================================
// CONFIGURACIÓN DE VIDEOS H - PARA PAPI FABRI
// ============================================================================

const configVideosH = {
    // Colecciones disponibles (5 iniciales)
    colecciones: {
        'coleccion1': {
            id: 'coleccion1',
            nombre: 'Colección 1 - Hermana Mayor',
            imagen: 'https://via.placeholder.com/300x200/ff6b9d/ffffff?text=Hermana+Mayor',
            videoDriveId: '1A2B3C4D5E6F7G8H9I0J', // ID de Google Drive
            descripcion: 'Hermana mayor coqueta y dominante',
            mazos: 5,
            palabrasPorMazo: 10
        },
        'coleccion2': {
            id: 'coleccion2',
            nombre: 'Colección 2 - Tsundere Enojada',
            imagen: 'https://via.placeholder.com/300x200/ff4444/ffffff?text=Tsundere',
            videoDriveId: '2B3C4D5E6F7G8H9I0J1K',
            descripcion: 'Tsundere que al final se derrite',
            mazos: 5,
            palabrasPorMazo: 10
        },
        'coleccion3': {
            id: 'coleccion3',
            nombre: 'Colección 3 - Timida Inocente',
            imagen: 'https://via.placeholder.com/300x200/7b68ee/ffffff?text=Timida',
            videoDriveId: '3C4D5E6F7G8H9I0J1K2L',
            descripcion: 'Timidez que esconde pasión',
            mazos: 5,
            palabrasPorMazo: 10
        },
        'coleccion4': {
            id: 'coleccion4',
            nombre: 'Colección 4 - Deportista Activa',
            imagen: 'https://via.placeholder.com/300x200/00ff88/000000?text=Deportista',
            videoDriveId: '4D5E6F7G8H9I0J1K2L3M',
            descripcion: 'Energía deportiva en la cama',
            mazos: 5,
            palabrasPorMazo: 10
        },
        'coleccion5': {
            id: 'coleccion5',
            nombre: 'Colección 5 - Glotona Juguetona',
            imagen: 'https://via.placeholder.com/300x200/ff9800/ffffff?text=Glotona',
            videoDriveId: '5E6F7G8H9I0J1K2L3M4N',
            descripcion: 'Hambre de comida y placer',
            mazos: 5,
            palabrasPorMazo: 10
        }
    },

    // URLs base para videos de Google Drive
    driveBaseUrls: {
        directo: 'https://drive.google.com/uc?export=download&id=',
        vista: 'https://drive.google.com/file/d/',
        embed: 'https://drive.google.com/file/d/ID/preview'
    },

    // Configuración del reproductor
    playerConfig: {
        autoplay: true,
        controls: true,
        muted: true,
        loop: false,
        width: '100%',
        height: 'auto',
        preload: 'auto'
    }
};

// ============================================================================
// FUNCIONES DE AYUDA PARA VIDEOS
// ============================================================================

// Obtener URL de video de Google Drive
function obtenerUrlVideoDrive(driveId, tipo = 'embed') {
    if (!driveId) return '';
    
    switch(tipo) {
        case 'directo':
            return `${configVideosH.driveBaseUrls.directo}${driveId}`;
        case 'vista':
            return `${configVideosH.driveBaseUrls.vista}${driveId}/view`;
        case 'embed':
            return `${configVideosH.driveBaseUrls.vista}${driveId}/preview`;
        default:
            return `${configVideosH.driveBaseUrls.vista}${driveId}/preview`;
    }
}

// Obtener información de colección
function obtenerColeccion(id) {
    return configVideosH.colecciones[id] || null;
}

// Obtener todas las colecciones
function obtenerTodasColecciones() {
    return Object.values(configVideosH.colecciones);
}

// Verificar si una colección existe
function existeColeccion(id) {
    return !!configVideosH.colecciones[id];
}

// Actualizar URL de video de una colección (para testing)
function actualizarVideoColeccion(id, nuevoDriveId) {
    if (configVideosH.colecciones[id]) {
        configVideosH.colecciones[id].videoDriveId = nuevoDriveId;
        console.log(`✅ Video de ${id} actualizado a: ${nuevoDriveId}`);
        return true;
    }
    return false;
}

// Añadir nueva colección
function agregarColeccion(id, datos) {
    if (!configVideosH.colecciones[id]) {
        configVideosH.colecciones[id] = {
            id: id,
            ...datos
        };
        console.log(`✅ Nueva colección agregada: ${datos.nombre}`);
        return true;
    }
    console.log(`❌ Ya existe colección con ID: ${id}`);
    return false;
}

// ============================================================================
// FUNCIONES GLOBALES PARA TESTING
// ============================================================================

// Función para ver todas las colecciones
window.verColeccionesVideosH = function() {
    console.log('🎬 Colecciones de Videos H disponibles:');
    obtenerTodasColecciones().forEach(coleccion => {
        console.log(`- ${coleccion.nombre} (${coleccion.id})`);
        console.log(`  Video: ${obtenerUrlVideoDrive(coleccion.videoDriveId)}`);
        console.log(`  Mazos: ${coleccion.mazos}`);
    });
};

// Función para cambiar video desde consola
window.cambiarVideoH = function(coleccionId, nuevoDriveId) {
    return actualizarVideoColeccion(coleccionId, nuevoDriveId);
};

// Función para añadir nueva colección desde consola
window.agregarColeccionH = function(id, nombre, driveId) {
    return agregarColeccion(id, {
        nombre: nombre,
        imagen: 'https://via.placeholder.com/300x200/9c27b0/ffffff?text=Nueva',
        videoDriveId: driveId,
        descripcion: 'Nueva colección agregada',
        mazos: 5,
        palabrasPorMazo: 10
    });
};

// Hacer funciones globalmente accesibles
window.obtenerUrlVideoDrive = obtenerUrlVideoDrive;
window.obtenerColeccion = obtenerColeccion;
window.obtenerTodasColecciones = obtenerTodasColecciones;
