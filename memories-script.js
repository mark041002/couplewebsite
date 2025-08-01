// Foto-Daten mit allen deinen umbenannten Bildern und korrekten Daten
const photos = [
    // März 2025
    { src: './Bilder/08032025.jpg', title: 'Schöne Erinnerung', date: '2025-03-08' },
    { src: './Bilder/080320251.jpg', title: 'Noch mehr vom selben Tag', date: '2025-03-08' },
    
    // April 2025
    { src: './Bilder/05042025.jpg', title: 'Wundervoller Tag', date: '2025-04-05' },
    { src: './Bilder/06042025.jpg', title: 'Gemeinsame Zeit', date: '2025-04-06' },
    { src: './Bilder/060420251.jpg', title: 'Erstes Foto vom Tag', date: '2025-04-06' },
    { src: './Bilder/060420252.jpg', title: 'Zweites Foto vom Tag', date: '2025-04-06' },
    { src: './Bilder/14042025.jpg', title: 'Süßer Moment', date: '2025-04-14' },
    { src: './Bilder/28042025.jpg', title: 'Perfekter Tag', date: '2025-04-28' },
    { src: './Bilder/280420251.jpg', title: 'Mehr von diesem Tag', date: '2025-04-28' },
    { src: './Bilder/280420252.jpg', title: 'Immer noch derselbe Tag', date: '2025-04-28' },
    { src: './Bilder/280420253.jpg', title: 'Letztes vom 28. April', date: '2025-04-28' },
    { src: './Bilder/29042025.jpg', title: 'Neuer Tag, neue Erinnerungen', date: '2025-04-29' },
    { src: './Bilder/290420251.jpg', title: 'Erstes vom 29. April', date: '2025-04-29' },
    { src: './Bilder/290420252.jpg', title: 'Zweites vom 29. April', date: '2025-04-29' },
    { src: './Bilder/290420253.jpg', title: 'Drittes vom 29. April', date: '2025-04-29' },
    
    // Mai 2025
    { src: './Bilder/11052025.jpg', title: 'Magischer Moment', date: '2025-05-11' },
    { src: './Bilder/110520251.jpg', title: 'Erste Erinnerung vom 11. Mai', date: '2025-05-11' },
    { src: './Bilder/110520252.jpg', title: 'Zweite Erinnerung vom 11. Mai', date: '2025-05-11' },
    { src: './Bilder/17052025.jpg', title: 'Traumhafter Tag', date: '2025-05-17' },
    { src: './Bilder/170520251.jpg', title: 'Erste vom 17. Mai', date: '2025-05-17' },
    { src: './Bilder/170520252.jpg', title: 'Zweite vom 17. Mai', date: '2025-05-17' },
    { src: './Bilder/170520253.jpg', title: 'Dritte vom 17. Mai', date: '2025-05-17' },
    { src: './Bilder/170520254.jpg', title: 'Vierte vom 17. Mai', date: '2025-05-17' },
    { src: './Bilder/29052025.jpg', title: 'Besonderer Moment', date: '2025-05-29' },
    { src: './Bilder/30052025.jpg', title: 'Wunderschöner Tag', date: '2025-05-30' },
    { src: './Bilder/300520251.jpg', title: 'Mehr vom 30. Mai', date: '2025-05-30' },
    { src: './Bilder/31052025.jpg', title: 'Letzter Mai-Tag', date: '2025-05-31' },
    { src: './Bilder/310520251.jpg', title: 'Erste vom 31. Mai', date: '2025-05-31' },
    { src: './Bilder/310520252.jpg', title: 'Zweite vom 31. Mai', date: '2025-05-31' },
    { src: './Bilder/310520253.jpg', title: 'Dritte vom 31. Mai', date: '2025-05-31' },
    { src: './Bilder/310520254.jpg', title: 'Vierte vom 31. Mai', date: '2025-05-31' },
    { src: './Bilder/310520255.jpg', title: 'Fünfte vom 31. Mai', date: '2025-05-31' },
    { src: './Bilder/310520256.jpg', title: 'Sechste vom 31. Mai', date: '2025-05-31' },
    
    // Juni 2025
    { src: './Bilder/15062025.jpg', title: 'Sommerliche Stimmung', date: '2025-06-15' },
    { src: './Bilder/20062025.jpg', title: 'Perfekter Sommertag', date: '2025-06-20' }
];

// Floating Hearts Animation
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

/* Bilder-Fix: Komplettes Bild anzeigen statt Crop */
.photo-frame img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important; /* Zeigt das komplette Bild */
    object-position: center !important;
    border-radius: 12px !important;
    background-color: #ffeef8 !important; /* Sanfter Hintergrund falls Bild kleiner ist */
}

/* Alternative: Falls du schwarze Balken nicht magst */
.photo-frame {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 50%, #ffd1e8 100%) !important;
}
`;
document.head.appendChild(style);

setInterval(createFloatingHeart, 1500); // Schneller: alle 1.5 Sekunden statt 3

// Erstelle gleich am Anfang ein paar Herzen
for(let i = 0; i < 3; i++) {
    setTimeout(() => createFloatingHeart(), i * 500);
}

let currentIndex = 0;
let validPhotos = [];

// Funktion zum Formatieren des Datums
function formatGermanDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return date.toLocaleDateString('de-DE', options);
}

function initializeGallery() {
    const photoStack = document.getElementById('photo-stack');
    const totalPhotos = document.getElementById('total-photos');
    
    if (photos.length === 0) {
        totalPhotos.textContent = '0';
        document.getElementById('photo-title').textContent = 'Keine Bilder konfiguriert';
        return;
    }
    
    // ZUFÄLLIGE REIHENFOLGE - Fisher-Yates Shuffle
    const shuffledPhotos = [...photos];
    for (let i = shuffledPhotos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPhotos[i], shuffledPhotos[j]] = [shuffledPhotos[j], shuffledPhotos[i]];
    }
    
    console.log('🎲 Fotos wurden zufällig gemischt!');
    
    let loadedCount = 0;
    let totalToLoad = shuffledPhotos.length;
    
    shuffledPhotos.forEach((photo, index) => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame';
        frame.style.display = 'none';
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        
        console.log(`🔄 Lade Bild ${index + 1}/${totalToLoad}: ${photo.src}`);
        
        img.onload = function() {
            console.log(`✅ Bild geladen: ${photo.src}`);
            
            // Formatiere das Datum schön auf Deutsch
            const formattedDate = formatGermanDate(photo.date);
            
            validPhotos.push({
                ...photo,
                displayTitle: `${formattedDate} ✨`,
                originalTitle: photo.title,
                frame: frame,
                index: validPhotos.length
            });
            
            frame.style.display = 'block';
            totalPhotos.textContent = validPhotos.length;
            
            if (validPhotos.length === 1) {
                updatePhotoDisplay();
            }
            
            loadedCount++;
            checkLoadingComplete(loadedCount, totalToLoad);
        };
        
        img.onerror = function() {
            console.log(`❌ Bild nicht gefunden: ${photo.src}`);
            console.log(`💡 Überprüfe den Pfad: ${photo.src}`);
            frame.remove();
            loadedCount++;
            checkLoadingComplete(loadedCount, totalToLoad);
        };
        
        frame.appendChild(img);
        photoStack.appendChild(frame);
    });
}

function checkLoadingComplete(loaded, total) {
    if (loaded === total) {
        if (validPhotos.length === 0) {
            document.getElementById('photo-title').textContent = 'Keine Bilder gefunden';
            console.log('💡 Tipp: Überprüfe die Bildpfade in deinem Bilder-Ordner!');
        } else {
            console.log(`🎉 ${validPhotos.length} Bilder erfolgreich geladen!`);
            console.log('🎲 Alle Bilder sind in zufälliger Reihenfolge - jedes Mal anders!');
            currentIndex = 0;
            updatePhotoDisplay();
        }
    }
}

function updatePhotoDisplay() {
    if (validPhotos.length === 0) return;
    
    const currentPhoto = document.getElementById('current-photo');
    const photoTitle = document.getElementById('photo-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Zeige die schön formatierte Datumsangabe
    currentPhoto.textContent = currentIndex + 1;
    photoTitle.textContent = validPhotos[currentIndex].displayTitle;

    // Button-Status aktualisieren
    if (prevBtn) {
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    }
    
    if (nextBtn) {
        nextBtn.style.opacity = currentIndex === validPhotos.length - 1 ? '0.5' : '1';
        nextBtn.style.pointerEvents = currentIndex === validPhotos.length - 1 ? 'none' : 'auto';
    }

    // Foto-Stapel aktualisieren
    validPhotos.forEach((photo, index) => {
        const frame = photo.frame;
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
    if (currentIndex < validPhotos.length - 1) {
        currentIndex++;
        updatePhotoDisplay();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', previousPhoto);
        nextBtn.addEventListener('click', nextPhoto);
        
        console.log('🎮 Navigation bereit!');
    }
    
    // Initialisiere die Galerie
    initializeGallery();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousPhoto();
    } else if (e.key === 'ArrowRight') {
        nextPhoto();
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
    const diff = startX - endX;
    if (Math.abs(diff) > 50) { // Mindest-Swipe-Distanz
        if (diff > 0) {
            nextPhoto(); // Swipe left = nächstes Foto
        } else {
            previousPhoto(); // Swipe right = vorheriges Foto
        }
    }
}