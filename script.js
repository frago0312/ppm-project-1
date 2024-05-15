/*Gestione eventi navbar*/

document.getElementById('search-btn').addEventListener('click', function(event) {
    let searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block';
    } else {
        window.location.href = 'index.html';
    }
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    let searchBar = document.getElementById('search-bar');
    if (event.target !== searchBar) {
        searchBar.style.display = 'none';
    }
});

/* Gestione eventi per il pulsante del menu */
document.getElementById('menu-button').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    let overlay = document.getElementById('overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        menu.classList.add('show');
        overlay.classList.add('show');
    }
});

/* Gestione eventi per l'overlay */
document.getElementById('overlay').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    let overlay = document.getElementById('overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
    }
});

/* Gestione eventi per il pulsante di ricerca */
let searchIcon = document.querySelector('.search-btn .bi');

searchIcon.addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.querySelector('#bottom-element .close-btn').addEventListener('click', function() {
    document.getElementById('bottom-element').style.display = 'none';
});

/* Funzione per data corrente */
function formatDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
}
const currentDateElement = document.getElementById("currentDate");
currentDateElement.textContent = formatDate();


/* Logo responsivo per pagina piccola */
const image = document.getElementById('responsive-logo');

function changeImage() {
    if (window.innerWidth < 600) {
        // Se la larghezza della finestra è inferiore a 600px, cambia l'immagine
        image.src = 'https://placehold.co/175x30/162B75/D99814?text=SHAW+LOCAL';
        image.alt = 'News Network 2';
    } else {
        // Altrimenti, reimposta l'immagine originale
        image.src = 'https://placehold.co/390x32/162B75/D99814?text=SHAW+LOCAL+News+Network';
        image.alt = 'News Network 1';
    }
}

window.addEventListener('resize', changeImage);

changeImage();



