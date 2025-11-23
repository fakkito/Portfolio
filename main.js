// --- 1. TRADUCTIONS & DONNÉES ---

const translations = {
    fr: {
        // --- Navigation ---
        "txt-cv": "Mon CV", "txt-lang": "EN",
        "nav-home": "Accueil", "nav-projects": "Projets", "nav-skills": "Compétences", "nav-resume": "Parcours", "nav-about": "À propos", "nav-contact": "Contact",
        
        // --- Accueil (Hero) ---
        "hero-badge": "Portfolio 2025", 
        "hero-greeting": "Bonjour, je suis", 
        "hero-name": "Achille Dutel",
        "hero-role": "Développeur <span class='gradient-text'>Full Stack</span>",
        "hero-desc": "Étudiant en Informatique (BUT). Je conçois et développe des applications web performantes et intuitives.",
        "hero-location": "Annecy / Valence / Suisse",
        "hero-permit": "Permis B",
        "btn-hero-projects": "Voir mes projets", "btn-hero-contact": "Me contacter", "btn-view-projects": "Découvrir mes projets",

        // --- Projets ---
        "title-projects": "Mes Réalisations",
        "proj1-title": "App Web & BDD", "proj1-desc": "Laravel, Modèles de données, BPMN",
        "proj2-title": "Gestion Commandes", "proj2-desc": "App C# (WPF/XAML) pour traiteur",
        "proj3-title": "Jeu Vidéo 2D", "proj3-desc": "Style Mario Bros (C#, Sprites)",
        "proj4-title": "Piscine École 42", "proj4-desc": "Bootcamp intensif C (4 semaines)",
        "link-view-1": "Voir le projet →", "link-view-2": "Voir le projet →", "link-view-3": "Voir le projet →", "link-view-4": "Voir le projet →",

        // --- Compétences ---
        "title-skills": "Mes Compétences",
        "cat-web": "Web", "cat-db": "Base de données", "cat-prog": "Programmation", "cat-tools": "Outils & Autres", "skill-agile": "Méthode Agile",

        // --- Parcours (Resume) ---
        "title-resume": "Mon Parcours",
        "cat-edu": "Formation", "cat-exp": "Expérience",
        "btn-dl-cv": "Télécharger le CV complet",
        
        // Éducation
        "date-usmb": "2024 - 2027", "title-usmb": "BUT Informatique", "desc-usmb": "Parcours réalisation d'applications : conception, développement, validation.",
        "date-42": "Juillet 2025", "title-42": "Piscine École 42", "desc-42": "Apprentissage intensif du C en autonomie. Évaluations par les pairs.",
        "title-hs": "Lycée du Dauphiné", "desc-hs": "Baccalauréat STI2D (Systèmes d'Information et Numérique).",
        
        // Expérience
        "date-exp1": "Oct 2025 - Jan 2026", "title-exp1": "Projet Web & BDD", "desc-exp1": "Développement d'une app Web Laravel. Conception de modèles de données et diagrammes BPMN.",
        "date-exp2": "Mai - Juin 2025", "title-exp2": "App Gestion Traiteur", "desc-exp2": "Application C# (WPF/XAML) pour traiteur. Gestion des stocks et commandes.",
        "date-exp3": "Déc 2024", "title-exp3": "Jeu Vidéo 2D", "desc-exp3": "Création d'un jeu de plateforme en C# avec physique et animations.",

        // --- À propos ---
        "title-about": "À propos de moi",
        "about-p1": "Actuellement étudiant à l'Université USMB d'Annecy. Je suis fiable, constant et doté d'un excellent esprit d'équipe.",
        "about-p2": "Je recherche un stage du 6 mai au 28 juin 2026 pour appliquer mes compétences en développement logiciel et innover.",

        // --- Contact ---
        "title-contact": "Contactez-moi",
        "contact-coords": "Mes Réseaux",
        "link-linkedin": "Voir mon profil", "link-github": "Voir mes repos",
        "lbl-name": "Nom", "lbl-email": "Email", "lbl-message": "Message", "btn-send": "Envoyer",

        // --- Footer & Modal ---
        "btn-rgpd": "Données Personnelles & RGPD", "modal-title": "Politique de Confidentialité"
    },
    en: {
        // --- Nav ---
        "txt-cv": "Resume", "txt-lang": "FR",
        "nav-home": "Home", "nav-projects": "Projects", "nav-skills": "Skills", "nav-resume": "Resume", "nav-about": "About", "nav-contact": "Contact",
        
        // --- Hero ---
        "hero-badge": "Portfolio 2025", 
        "hero-greeting": "Hello, I am", 
        "hero-name": "Achille Dutel",
        "hero-role": "Full Stack <span class='gradient-text'>Developer</span>",
        "hero-desc": "Computer Science student (BUT). I design and develop efficient and intuitive web applications.",
        "hero-location": "Annecy / Valence / Switzerland",
        "hero-permit": "Driving License",
        "btn-hero-projects": "See my projects", "btn-hero-contact": "Contact me", "btn-view-projects": "Discover my work",

        // --- Projects ---
        "title-projects": "My Projects",
        "proj1-title": "Web App & DB", "proj1-desc": "Laravel, Data models, BPMN",
        "proj2-title": "Order Management", "proj2-desc": "C# App (WPF/XAML) for delicatessen",
        "proj3-title": "2D Video Game", "proj3-desc": "Mario Bros type (C#, Sprites)",
        "proj4-title": "42 School Piscine", "proj4-desc": "Intensive C Bootcamp (4 weeks)",
        "link-view-1": "View Project →", "link-view-2": "View Project →", "link-view-3": "View Project →", "link-view-4": "View Project →",

        // --- Skills ---
        "title-skills": "My Skills",
        "cat-web": "Web", "cat-db": "Databases", "cat-prog": "Programming", "cat-tools": "Tools & Others", "skill-agile": "Agile Method",

        // --- Resume ---
        "title-resume": "My Journey",
        "cat-edu": "Education", "cat-exp": "Experience",
        "btn-dl-cv": "Download Full Resume",
        
        // Education
        "date-usmb": "2024 - 2027", "title-usmb": "USMB University of Annecy", "desc-usmb": "3-year undergraduate diploma in Computer Science.",
        "date-42": "July 2025", "title-42": "École 42 'Piscine'", "desc-42": "4-week intensive C language bootcamp. Peer evaluations and daily challenges.",
        "title-hs": "Dauphiné High School", "desc-hs": "STI2D High School Diploma. Information Systems and Digital Technology.",
        
        // Experience
        "date-exp1": "Oct 2025 - Jan 2026", "title-exp1": "Web App Project", "desc-exp1": "Developed a Laravel web app. Designed data models and BPMN diagrams.",
        "date-exp2": "May - June 2025", "title-exp2": "Order Management App", "desc-exp2": "C# (WPF/XAML) application for a delicatessen. Interface design and stock management.",
        "date-exp3": "Dec 2024", "title-exp3": "2D Video Game", "desc-exp3": "Development of a C# platform game (Mario type) with physics and animations.",

        // --- About ---
        "title-about": "About Me", "about-p1": "Currently studying at USMB University of Annecy. I am reliable, consistent, and an excellent team player.", "about-p2": "I am seeking an internship to apply my skills in software development from May 6, 2026, to June 28, 2026.",

        // --- Contact ---
        "title-contact": "Contact Me", "contact-coords": "My Details",
        "link-linkedin": "View Profile", "link-github": "View Repos",
        "lbl-name": "Name", "lbl-email": "Email", "lbl-message": "Message", "btn-send": "Send",

        // --- Footer ---
        "btn-rgpd": "Privacy Policy & GDPR", "modal-title": "Privacy Policy"
    }
};

const modalContentFR = `<h4>1. Collecte</h4><p>Données enregistrées : Nom, Email, Message.</p><h4>2. Utilisation</h4><p>Utilisées uniquement pour répondre à votre demande.</p><h4>3. Conservation</h4><p>3 ans maximum.</p>`;
const modalContentEN = `<h4>1. Collection</h4><p>Data recorded: Name, Email, Message.</p><h4>2. Usage</h4><p>Used only to reply to your request.</p><h4>3. Retention</h4><p>3 years maximum.</p>`;

// --- VARIABLES GLOBALES ---
let currentLang = 'en'; // Anglais par défaut
let isDark = true;

// --- GESTION THÈME ---
function toggleTheme() {
    isDark = !isDark;
    applyTheme();
}

function applyTheme() {
    const icon = document.getElementById('theme-icon');
    if (isDark) {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// --- GESTION LANGUE ---
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateTexts();
}

function updateTexts() {
    const texts = translations[currentLang];
    for (const key in texts) {
        const el = document.getElementById(key);
        if (el) {
            // IMPORTANT : Utiliser innerHTML pour que les <span> fonctionnent (ex: Full Stack en bleu)
            el.innerHTML = texts[key];
        }
    }
    const modalBody = document.getElementById('modal-content');
    if (modalBody) modalBody.innerHTML = currentLang === 'fr' ? modalContentFR : modalContentEN;
}

// --- INIT AU CHARGEMENT DE LA PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Vérifier le thème (Logique inversée pour Dark par défaut)
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('theme-icon');

    // Si l'utilisateur a PRÉCÉDEMMENT choisi "light", on force le mode clair
    if (savedTheme === 'light') {
        isDark = false;
        document.body.removeAttribute('data-theme'); // Enlève le mode sombre
        if(icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    } 
    // Sinon (c'est la première visite OU il a choisi dark), on reste en Dark (défini dans le HTML)
    else {
        isDark = true;
        // On s'assure que l'icône est bien un soleil
        if(icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    // 2. Langue (Applique EN par défaut et met à jour le texte)
    updateTexts();

    // 3. ScrollSpy (Navigation active au scroll)
    initScrollSpy();

    // 4. Carrousel (Si présent)
    if(document.querySelector('.carousel-scene')) initCarousel();
});

// --- NAVIGATION ---
function initScrollSpy() {
    const sections = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('.nav-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.querySelector(`button[onclick="scrollToSection('${id}')"]`);
                if (activeBtn) activeBtn.classList.add('active');
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Mise à jour manuelle du bouton actif
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`button[onclick="scrollToSection('${id}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// --- CAROUSEL ---
let currentIndex = 0; let items = []; let dots = []; let totalItems = 0;
let startX = 0; let currentX = 0; let isDragging = false; let startTime = 0;

function initCarousel() {
    items = document.querySelectorAll('.carousel-card');
    dots = document.querySelectorAll('.dot');
    const wrapper = document.querySelector('.carousel-wrapper');
    totalItems = items.length;
    if (totalItems > 0) {
        wrapper.style.touchAction = 'pan-y';
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                if (Math.abs(startX - currentX) > 10) { e.preventDefault(); e.stopPropagation(); return; }
                if (item.classList.contains('next')) { e.preventDefault(); moveCarousel(1); }
                else if (item.classList.contains('prev')) { e.preventDefault(); moveCarousel(-1); }
                else if (!item.classList.contains('active')) { e.preventDefault(); }
            });
            item.addEventListener('dragstart', (e) => e.preventDefault());
        });
        const startSwipe = (e) => { isDragging = true; startX = getX(e); currentX = startX; startTime = new Date().getTime(); wrapper.style.cursor = 'grabbing'; wrapper.style.transition = 'none'; };
        const moveSwipe = (e) => { if (!isDragging) return; currentX = getX(e); };
        const endSwipe = (e) => {
            if (!isDragging) return; isDragging = false; wrapper.style.cursor = 'grab'; wrapper.style.transition = '';
            const diff = startX - (getX(e) || currentX);
            if (Math.abs(diff) > 30 || (new Date().getTime() - startTime < 200 && Math.abs(diff) > 15)) diff > 0 ? moveCarousel(1) : moveCarousel(-1);
            startX = 0; currentX = 0;
        };
        const getX = (e) => e.type.includes('mouse') ? e.pageX : (e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX);
        
        wrapper.addEventListener('mousedown', startSwipe); wrapper.addEventListener('touchstart', startSwipe, {passive: true});
        wrapper.addEventListener('mousemove', moveSwipe); wrapper.addEventListener('touchmove', moveSwipe, {passive: true});
        wrapper.addEventListener('mouseup', endSwipe); wrapper.addEventListener('mouseleave', () => { if(isDragging) endSwipe(); });
        wrapper.addEventListener('touchend', endSwipe);
        updateCarouselClasses();
    }
}
function moveCarousel(dir) { currentIndex = (currentIndex + dir + totalItems) % totalItems; updateCarouselClasses(); }
function updateCarouselClasses() {
    items.forEach(i => { i.className = 'carousel-card'; i.style.opacity = '0'; i.style.zIndex = '0'; i.style.pointerEvents = 'none'; });
    const prev = (currentIndex - 1 + totalItems) % totalItems;
    const next = (currentIndex + 1) % totalItems;
    configItem(items[currentIndex], 'active', 10, 1);
    configItem(items[prev], 'prev', 5, 0.6);
    configItem(items[next], 'next', 5, 0.6);
    dots.forEach((d, i) => d.className = i === currentIndex ? 'dot active' : 'dot');
}
function configItem(el, cls, z, op) { el.classList.add(cls); el.style.zIndex = z; el.style.opacity = op; el.style.pointerEvents = 'auto'; }

// --- GESTION DES MENUS DÉROULANTS (HAUT et BAS) ---

// 1. Menu du Haut (Header)
function toggleCvMenu() { 
    const menu = document.getElementById('cv-menu');
    const wrapper = document.querySelector('.cv-wrapper');
    
    // On s'assure que le menu du bas est fermé
    closeCvMenuBottom();
    
    menu.classList.toggle('active'); 
    wrapper.classList.toggle('open'); 
    event.stopPropagation(); 
}

// 2. Menu du Bas (Compétences) - C'est cette fonction qui manquait !
function toggleCvMenuBottom() {
    const menu = document.getElementById('cv-menu-bottom');
    const wrapper = document.querySelector('.cv-wrapper-bottom');
    
    // On s'assure que le menu du haut est fermé
    const menuTop = document.getElementById('cv-menu');
    const wrapperTop = document.querySelector('.cv-wrapper');
    if(menuTop) menuTop.classList.remove('active');
    if(wrapperTop) wrapperTop.classList.remove('open');

    menu.classList.toggle('active');
    wrapper.classList.toggle('open');
    event.stopPropagation();
}

// Fonction pour fermer le menu du bas
function closeCvMenuBottom() {
    const menu = document.getElementById('cv-menu-bottom');
    const wrapper = document.querySelector('.cv-wrapper-bottom');
    if (menu) menu.classList.remove('active');
    if (wrapper) wrapper.classList.remove('open');
}

// Gestionnaire de clics global (pour fermer les menus si on clique ailleurs)
window.addEventListener('click', (e) => {
    // Fermer menu Haut
    const mTop = document.getElementById('cv-menu'); 
    const bTop = document.getElementById('btn-cv-trigger');
    if (mTop && mTop.classList.contains('active') && !mTop.contains(e.target) && !bTop.contains(e.target)) { 
        mTop.classList.remove('active'); 
        document.querySelector('.cv-wrapper').classList.remove('open'); 
    }

    // Fermer menu Bas
    const mBot = document.getElementById('cv-menu-bottom');
    const bBot = document.getElementById('btn-cv-bottom');
    if (mBot && mBot.classList.contains('active') && !mBot.contains(e.target) && !bBot.contains(e.target)) {
        mBot.classList.remove('active');
        document.querySelector('.cv-wrapper-bottom').classList.remove('open');
    }
});

// --- GESTION FORMULAIRE (AJAX + FORMSPREE) ---

async function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const form = document.getElementById("contact-form");
    const data = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // 1. Message de succès
            const msg = currentLang === 'fr' ? "Message envoyé avec succès !" : "Message sent successfully!";
            alert(msg);
            
            // 2. VIDER LE FORMULAIRE (C'est ici que ça se passe)
            form.reset(); 
        } else {
            // Gestion des erreurs (ex: email invalide)
            const errorMsg = currentLang === 'fr' ? "Oups ! Il y a eu un problème." : "Oops! There was a problem.";
            alert(errorMsg);
        }
    } catch (error) {
        const errorMsg = currentLang === 'fr' ? "Oups ! Il y a eu un problème." : "Oops! There was a problem.";
        alert(errorMsg);
    }
}

// Modale RGPD & Formulaire
function openRgpdModal() { document.getElementById('rgpd-modal').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeRgpdModal(e) { if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-btn')) { document.getElementById('rgpd-modal').classList.remove('open'); document.body.style.overflow = ''; } }
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeRgpdModal({target: document.querySelector('.modal-overlay')}); });