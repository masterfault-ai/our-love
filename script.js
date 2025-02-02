// Custom cursor with heart trail
const cursor = document.querySelector('.cursor');
let hearts = [];

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Create heart trail
    if (Math.random() < 0.1) {
        createHeart(e.clientX, e.clientY);
    }
});

function createHeart(x, y) {
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.style.color = 'var(--primary-color)';
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
    heart.style.opacity = '0.8';
    heart.style.transition = 'transform 1s, opacity 1s';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translate(${Math.random() * 100 - 50}px, -100px) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 1000);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Active navigation highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Floating hearts animation
const floatingHearts = document.querySelector('.floating-hearts');
setInterval(() => {
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.setProperty('--tx', Math.random() * 200 - 100 + 'px');
    heart.style.setProperty('--r', Math.random() * 360 + 'deg');
    
    floatingHearts.appendChild(heart);
    
    setTimeout(() => {
        floatingHearts.removeChild(heart);
    }, 6000);
}, 300);

// Love note form handling
const loveNoteForm = document.getElementById('love-note-form');
loveNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add heart burst animation
    const burst = document.createElement('div');
    burst.className = 'heart-burst';
    burst.style.position = 'fixed';
    burst.style.left = '50%';
    burst.style.top = '50%';
    document.body.appendChild(burst);
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'absolute';
        heart.style.color = 'var(--primary-color)';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        heart.style.transition = 'transform 1s, opacity 1s';
        burst.appendChild(heart);
        
        setTimeout(() => {
            const angle = (i / 20) * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            heart.style.transform = `translate(
                calc(-50% + ${Math.cos(angle) * distance}px), 
                calc(-50% + ${Math.sin(angle) * distance}px)
            ) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 50);
    }
    
    setTimeout(() => {
        document.body.removeChild(burst);
    }, 1000);
    
    // Show success message
    const submitBtn = loveNoteForm.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-heart"></i> Sent with Love';
    submitBtn.style.background = 'var(--secondary-color)';
    
    // Reset form
    setTimeout(() => {
        loveNoteForm.reset();
        submitBtn.innerHTML = '<i class="fas fa-heart"></i> Send Love';
        submitBtn.style.background = '';
    }, 3000);
});

// Memory card hover effect
const memoryCards = document.querySelectorAll('.memory-card');
memoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        memoryCards.forEach(other => {
            if (other !== card) {
                other.style.transform = 'scale(0.95)';
                other.style.opacity = '0.7';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        memoryCards.forEach(other => {
            other.style.transform = '';
            other.style.opacity = '';
        });
    });
});
