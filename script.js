// Funcionalidades básicas para la página de recetas

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Funcionalidad de búsqueda
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        alert(`Buscando recetas de: ${searchTerm}`);
        // Aquí iría la lógica real de búsqueda
        searchInput.value = '';
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Funcionalidad de favoritos
document.querySelectorAll('.btn-favorito').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.borderColor = '#e74c3c';
            this.style.color = '#e74c3c';
            // Aquí podrías guardar en localStorage
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.borderColor = '#ddd';
            this.style.color = '#7f8c8d';
        }
    });
});

// Funcionalidad del newsletter
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert(`¡Gracias por suscribirte con: ${email}!`);
        this.reset();
    }
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar a las secciones
document.querySelectorAll('.categorias, .recetas-destacadas, .caracteristicas').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Contador de recetas (efecto visual)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Iniciar contadores cuando la sección de características sea visible
const caracteristicasObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Aquí podrías animar números si los tuvieras
            console.log('Características visibles - podrías animar contadores aquí');
        }
    });
});

caracteristicasObserver.observe(document.querySelector('.caracteristicas'));

// Cargar más recetas (simulación)
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('¡Redirigiendo a todas las recetas!');
    // Aquí iría la lógica para cargar más recetas
});

// Funcionalidad para los botones "Ver Receta"
document.querySelectorAll('.btn-ver').forEach(button => {
    button.addEventListener('click', function() {
        const recetaNombre = this.closest('.receta-info').querySelector('h3').textContent;
        alert(`Abriendo receta: ${recetaNombre}\n\nEsta funcionalidad mostraría la receta completa en una nueva página.`);
        // Aquí iría la navegación a la página de receta individual
    });
});

console.log('Página de recetas cargada correctamente! 🍳');
