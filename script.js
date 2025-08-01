// Floating Hearts Animation - VERBESSERT
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['💖', '💕', '💗', '💘', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 8 + 8) + 's'; // Schneller: 8-16s statt 10-20s
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.getElementById('floating-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 18000); // Länger sichtbar
}

// CSS-Update für schnellere Animation und bessere Schriftarten
const style = document.createElement('style');
style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@300;400;500;600;700&display=swap');

@keyframes float {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    5% {
        opacity: 0.7;
    }
    95% {
        opacity: 0.7;
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
    }
}

/* Überschriften-Fix */
h1, .timer-title, .photo-title {
    font-family: 'Pacifico', cursive !important;
    font-weight: 400 !important;
}

/* Fallback für andere Texte */
body, .subtitle, .cute-button, .nav-btn {
    font-family: 'Quicksand', 'Comfortaa', sans-serif !important;
}
`;
document.head.appendChild(style);

setInterval(createFloatingHeart, 1500); // Schneller: alle 1.5 Sekunden statt 3

// Erstelle gleich am Anfang ein paar Herzen
for(let i = 0; i < 3; i++) {
    setTimeout(() => createFloatingHeart(), i * 500);
}

// Timer Funktionalität - PRÄZISE BERECHNUNG
function updateTimer() {
    const startDate = new Date('2025-03-01T00:00:00');
    const now = new Date();
    
    if (now < startDate) {
        document.getElementById('time-elapsed').innerHTML = '<strong>0</strong> Monate, <strong>0</strong> Wochen und <strong>0</strong> Tage 💖';
        return;
    }
    
    // Präzise Berechnung mit echten Kalenderdaten
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    // Korrektur wenn der Tag noch nicht erreicht wurde
    if (days < 0) {
        months--;
        // Berechne die Tage vom letzten Monat
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Korrektur wenn der Monat noch nicht erreicht wurde
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Gesamtmonate berechnen
    const totalMonths = years * 12 + months;
    
    // Wochen aus den übrigen Tagen berechnen
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    
    // Schöne Ausgabe formatieren
    let parts = [];
    
    if (totalMonths > 0) {
        parts.push(`<strong>${totalMonths}</strong> Monat${totalMonths === 1 ? '' : 'en'}`);
    }
    
    if (weeks > 0) {
        parts.push(`<strong>${weeks}</strong> Woche${weeks === 1 ? '' : 'n'}`);
    }
    
    if (remainingDays > 0 || parts.length === 0) {
        parts.push(`<strong>${remainingDays}</strong> Tag${remainingDays === 1 ? '' : 'en'}`);
    }
    
    let text = parts.join(', ');
    if (parts.length > 1) {
        const lastComma = text.lastIndexOf(', ');
        text = text.substring(0, lastComma) + ' und ' + text.substring(lastComma + 2);
    }
    text = text + ' 💖'; // Nur Herz am Ende
    
    // Debug-Ausgabe für Kontrolle
    const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    console.log(`📅 Präzise Berechnung: ${totalMonths} Monate, ${weeks} Wochen, ${remainingDays} Tage (Gesamt: ${totalDays} Tage)`);
    console.log(`🗓️ Start: ${startDate.toLocaleDateString('de-DE')} | Heute: ${now.toLocaleDateString('de-DE')}`);
    
    document.getElementById('time-elapsed').innerHTML = text;
}

setInterval(updateTimer, 3600000); // Update jede Stunde statt täglich
updateTimer(); // Sofort beim Laden ausführen

// Seitennavigation
const mainPage = document.getElementById('main-page');
const memoriesPage = document.getElementById('memories-page');
const memoriesBtn = document.getElementById('memories-btn');
const backBtn = document.getElementById('back-btn');

memoriesBtn.addEventListener('click', () => {
    window.location.href = 'memories.html';
});

if (backBtn) {
    backBtn.addEventListener('click', () => {
        memoriesPage.style.display = 'none';
        mainPage.style.display = 'block';
    });
}

// Foto-Galerie Funktionalität (falls auf derselben Seite verwendet)
const photos = [
    {
        src: './Bilder/bild1.jpg',
        title: 'Unser erstes Foto zusammen',
        description: 'Der Moment, als alles begann... 💕'
    },
    {
        src: './Bilder/bild2.jpg',
        title: 'Romantischer Spaziergang',
        description: 'Hand in Hand durch die Stadt 🌸'
    },
    {
        src: './Bilder/bild3.jpg',
        title: 'Gemeinsames Abendessen',
        description: 'Kerzenschein und süße Gespräche 🕯️'
    },
    {
        src: './Bilder/bild4.jpg',
        title: 'Unser Lieblingscafé',
        description: 'Wo wir uns zum ersten Mal geküsst haben 😘'
    },
    {
        src: './Bilder/bild5.jpg',
        title: 'Sonnenuntergang am See',
        description: 'Ein perfekter Abend zu zweit 🌅'
    }
];

let currentIndex = 0;
let galleryInitialized = false;

function initializeGallery() {
    if (galleryInitialized) {
        updatePhotoDisplay();
        return;
    }
    
    const photoStack = document.getElementById('photo-stack');
    const totalPhotos = document.getElementById('total-photos');
    
    if (!photoStack || !totalPhotos) return; // Exit if elements don't exist
    
    totalPhotos.textContent = photos.length;
    
    // Erstelle alle Foto-Frames
    photos.forEach((photo, index) => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame';
        frame.innerHTML = `<img src="${photo.src}" alt="${photo.title}" onerror="this.src='https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=400&fit=crop'">`;
        photoStack.appendChild(frame);
    });

    galleryInitialized = true;
    updatePhotoDisplay();
}

function updatePhotoDisplay() {
    const frames = document.querySelectorAll('.photo-frame');
    const currentPhoto = document.getElementById('current-photo');
    const photoTitle = document.getElementById('photo-title');
    const photoDescription = document.getElementById('photo-description');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!currentPhoto || !photoTitle) return; // Exit if elements don't exist

    // Update counter und info
    currentPhoto.textContent = currentIndex + 1;
    photoTitle.textContent = photos[currentIndex].title;
    if (photoDescription) photoDescription.textContent = photos[currentIndex].description;

    // Update button states
    if (prevBtn) {
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    }
    
    if (nextBtn) {
        nextBtn.style.opacity = currentIndex === photos.length - 1 ? '0.5' : '1';
        nextBtn.style.pointerEvents = currentIndex === photos.length - 1 ? 'none' : 'auto';
    }

    // Update photo positions
    frames.forEach((frame, index) => {
        frame.classList.remove('active', 'behind-1', 'behind-2', 'behind-3', 'hidden');
        
        const diff = index - currentIndex;
        
        if (diff === 0) {
            frame.classList.add('active');
        } else if (diff === 1) {
            frame.classList.add('behind-1');
        } else if (diff === 2) {
            frame.classList.add('behind-2');
        } else if (diff === 3) {
            frame.classList.add('behind-3');
        } else {
            frame.classList.add('hidden');
        }
    });
}

function previousPhoto() {
    if (currentIndex > 0) {
        currentIndex--;
        updatePhotoDisplay();
    }
}

function nextPhoto() {
    if (currentIndex < photos.length - 1) {
        currentIndex++;
        updatePhotoDisplay();
    }
}

// Event listeners für die Galerie
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', previousPhoto);
        nextBtn.addEventListener('click', nextPhoto);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (memoriesPage && memoriesPage.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            previousPhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        }
    }
});

// Touch/Swipe support für mobile Geräte
let startX = 0;
let endX = 0;

document.addEventListener('DOMContentLoaded', () => {
    const photoStack = document.getElementById('photo-stack');
    
    if (photoStack) {
        photoStack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        photoStack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }
});

function handleSwipe() {
    if (memoriesPage && memoriesPage.style.display === 'block') {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) { // Mindest-Swipe-Distanz
            if (diff > 0) {
                nextPhoto(); // Swipe left = nächstes Foto
            } else {
                previousPhoto(); // Swipe right = vorheriges Foto
            }
        }
    }
}