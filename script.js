// Datos de ejemplo para la aplicación
const mangaData = [
    {
        id: 1,
        title: "One Piece",
        image: "https://via.placeholder.com/300x400/3498db/ffffff?text=One+Piece",
        decks: [
            {
                id: 1,
                title: "Vocabulario Básico",
                image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Vocabulario",
                questions: [
                    {
                        question: "¿Qué significa 'Nakama'?",
                        image: "https://via.placeholder.com/600x300/3498db/ffffff?text=Nakama",
                        options: [
                            { text: "Amigo/Compañero", correct: true },
                            { text: "Enemigo", correct: false },
                            { text: "Comida", correct: false },
                            { text: "Tesoro", correct: false }
                        ]
                    },
                    {
                        question: "¿Qué es 'Gomu Gomu no Mi'?",
                        image: "https://via.placeholder.com/600x300/3498db/ffffff?text=Gomu+Gomu+no+Mi",
                        options: [
                            { text: "Una fruta del diablo", correct: true },
                            { text: "Un tipo de arma", correct: false },
                            { text: "Un lugar", correct: false },
                            { text: "Una técnica de combate", correct: false }
                        ]
                    },
                    {
                        question: "¿Qué significa 'Kaizoku'?",
                        image: "https://via.placeholder.com/600x300/3498db/ffffff?text=Kaizoku",
                        options: [
                            { text: "Pirata", correct: true },
                            { text: "Marino", correct: false },
                            { text: "Rey", correct: false },
                            { text: "Demonio", correct: false }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Frases Comunes",
                image: "https://via.placeholder.com/300x200/2ecc71/ffffff?text=Frases",
                questions: [
                    {
                        question: "¿Cómo se dice 'Seré el Rey de los Piratas'?",
                        image: "https://via.placeholder.com/600x300/2ecc71/ffffff?text=Rey+de+los+Piratas",
                        options: [
                            { text: "Ore wa Kaizoku Ou ni Naru!", correct: true },
                            { text: "Boku wa senshi da", correct: false },
                            { text: "Watashi wa byouin ni iku", correct: false },
                            { text: "Anata wa kirei desu", correct: false }
                        ]
                    },
                    {
                        question: "¿Qué significa 'Yossha! Ikuzo!'?",
                        image: "https://via.placeholder.com/600x300/2ecc71/ffffff?text=Yossha+Ikuzo",
                        options: [
                            { text: "¡Bien! ¡Vamos!", correct: true },
                            { text: "¡Estoy cansado!", correct: false },
                            { text: "¡Qué miedo!", correct: false },
                            { text: "¡Buena suerte!", correct: false }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Naruto",
        image: "https://via.placeholder.com/300x400/e74c3c/ffffff?text=Naruto",
        decks: [
            {
                id: 1,
                title: "Técnicas Ninja",
                image: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=Técnicas",
                questions: [
                    {
                        question: "¿Qué es un 'Jutsu'?",
                        image: "https://via.placeholder.com/600x300/e74c3c/ffffff?text=Jutsu",
                        options: [
                            { text: "Una técnica ninja", correct: true },
                            { text: "Un tipo de arma", correct: false },
                            { text: "Una aldeana", correct: false },
                            { text: "Un animal", correct: false }
                        ]
                    },
                    {
                        question: "¿Qué significa 'Rasengan'?",
                        image: "https://via.placeholder.com/600x300/e74c3c/ffffff?text=Rasengan",
                        options: [
                            { text: "Esfera Remolino", correct: true },
                            { text: "Bola de Fuego", correct: false },
                            { text: "Técnica de Clones", correct: false },
                            { text: "Ojo de Halcón", correct: false }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Attack on Titan",
        image: "https://via.placeholder.com/300x400/34495e/ffffff?text=Attack+on+Titan",
        decks: [
            {
                id: 1,
                title: "Vocabulario Militar",
                image: "https://via.placeholder.com/300x200/34495e/ffffff?text=Militar",
                questions: [
                    {
                        question: "¿Qué son los 'Titanes'?",
                        image: "https://via.placeholder.com/600x300/34495e/ffffff?text=Titanes",
                        options: [
                            { text: "Seres gigantes que devoran humanos", correct: true },
                            { text: "Soldados de élite", correct: false },
                            { text: "Armas especiales", correct: false },
                            { text: "Estructuras defensivas", correct: false }
                        ]
                    },
                    {
                        question: "¿Qué es el 'Equipo de Exploración'?",
                        image: "https://via.placeholder.com/600x300/34495e/ffffff?text=Exploración",
                        options: [
                            { text: "Unidad que explora fuera de las murallas", correct: true },
                            { text: "Grupo de construcción", correct: false },
                            { text: "Equipo médico", correct: false },
                            { text: "Guardia de la muralla", correct: false }
                        ]
                    }
                ]
            }
        ]
    }
];

// Variables globales
let currentManga = null;
let currentDeck = null;
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;

// Elementos del DOM
const mangaSelectionElement = document.getElementById('manga-selection');
const decksScreenElement = document.getElementById('decks-screen');
const deckSelectionElement = document.getElementById('deck-selection');
const studyScreenElement = document.getElementById('study-screen');
const resultScreenElement = document.getElementById('result-screen');
const currentMangaTitleElement = document.getElementById('current-manga-title');
const questionTextElement = document.getElementById('question-text');
const questionImageElement = document.getElementById('question-image');
const optionsContainerElement = document.getElementById('options-container');
const progressBarElement = document.getElementById('progress-bar');
const scoreDisplayElement = document.getElementById('score-display');
const finalScoreElement = document.getElementById('final-score');
const githubLinkElement = document.getElementById('githubLink');

// Inicializar la aplicación
function initApp() {
    renderMangaSelection();
    setupEventListeners();
    setupGithubLink();
}

// Configurar el enlace de GitHub
function setupGithubLink() {
    const currentUrl = window.location.href;
    githubLinkElement.href = currentUrl;
    githubLinkElement.textContent = '🌐 ' + currentUrl.split('/')[2];
}

// Renderizar la selección de mangas
function renderMangaSelection() {
    mangaSelectionElement.innerHTML = '';
    
    mangaData.forEach(manga => {
        const mangaCard = document.createElement('div');
        mangaCard.className = 'manga-card';
        mangaCard.innerHTML = `
            <img src="${manga.image}" alt="${manga.title}">
            <h3>${manga.title}</h3>
        `;
        mangaCard.addEventListener('click', () => selectManga(manga));
        mangaSelectionElement.appendChild(mangaCard);
    });
}

// Seleccionar un manga
function selectManga(manga) {
    currentManga = manga;
    currentMangaTitleElement.textContent = `Mazos de ${manga.title}`;
    renderDeckSelection();
    mangaSelectionElement.style.display = 'none';
    decksScreenElement.style.display = 'block';
}

// Renderizar la selección de mazos
function renderDeckSelection() {
    deckSelectionElement.innerHTML = '';
    
    currentManga.decks.forEach(deck => {
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.innerHTML = `
            <img src="${deck.image}" alt="${deck.title}">
            <h3>${deck.title}</h3>
            <div class="deck-info">
                <p>${deck.questions.length} preguntas</p>
            </div>
        `;
        deckCard.addEventListener('click', () => selectDeck(deck));
        deckSelectionElement.appendChild(deckCard);
    });
}

// Seleccionar un mazo
function selectDeck(deck) {
    currentDeck = deck;
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = deck.questions.length;
    decksScreenElement.style.display = 'none';
    studyScreenElement.style.display = 'block';
    showQuestion();
}

// Mostrar la pregunta actual
function showQuestion() {
    const question = currentDeck.questions[currentQuestionIndex];
    
    questionTextElement.textContent = question.question;
    questionImageElement.src = question.image;
    questionImageElement.alt = question.question;
    
    optionsContainerElement.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        optionsContainerElement.appendChild(optionElement);
    });
    
    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBarElement.style.width = `${progress}%`;
    
    // Actualizar puntuación
    scoreDisplayElement.textContent = `Puntuación: ${score}/${currentQuestionIndex}`;
}

// Seleccionar una opción
function selectOption(option, optionElement) {
    // Deshabilitar todas las opciones
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Marcar la opción seleccionada como correcta o incorrecta
    if (option.correct) {
        optionElement.classList.add('correct');
        score++;
    } else {
        optionElement.classList.add('incorrect');
        
        // Encontrar y marcar la opción correcta
        const correctOption = currentDeck.questions[currentQuestionIndex].options.find(opt => opt.correct);
        allOptions.forEach(opt => {
            if (opt.textContent === correctOption.text) {
                opt.classList.add('correct');
            }
        });
    }
    
    // Esperar un momento y luego pasar a la siguiente pregunta
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Mostrar resultados
function showResults() {
    studyScreenElement.style.display = 'none';
    resultScreenElement.style.display = 'block';
    finalScoreElement.textContent = `Tu puntuación final: ${score}/${totalQuestions}`;
}

// Configurar event listeners
function setupEventListeners() {
    // Botón para volver a la selección de mangas
    document.getElementById('back-to-manga').addEventListener('click', () => {
        decksScreenElement.style.display = 'none';
        mangaSelectionElement.style.display = 'grid';
    });
    
    // Botón para reiniciar el estudio
    document.getElementById('restart-button').addEventListener('click', () => {
        resultScreenElement.style.display = 'none';
        studyScreenElement.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    });
    
    // Botón para volver a los mazos
    document.getElementById('back-to-decks').addEventListener('click', () => {
        resultScreenElement.style.display = 'none';
        decksScreenElement.style.display = 'block';
    });
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', initApp);
