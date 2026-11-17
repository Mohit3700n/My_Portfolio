// Add your contact details and profile URLs here. Leave unused links empty.
const portfolioLinks = {
    email: '',
    phone: '',
    github: 'https://github.com/Mohit3700n',
    linkedin: 'https://www.linkedin.com/in/mohit-prajapati-941626309',
    twitter: '',
    instagram: '',
    whatsapp: 'https://wa.me/917558446589'
};

// Add or edit project cards and their URLs in this array.
const projects = [
    {
        title: 'Bible Khazana - Mobile App',
        description: 'Full-featured Flutter-based mobile app for Bible study and prayer tracking. Available on Playstore.',
        technologies: ['FLUTTER', 'DART', 'FIREBASE', 'JAVASCRIPT', 'SQL DATABASES'],
        icon: 'fa-solid fa-book-bible',
        theme: 'project-bible',
        repo: '',
        demo: 'https://play.google.com/store/apps/details?id=com.wigm.biblekhazana'
    },
    {
        title: 'HARP INDIA - Website',
        description: 'A modern website for HARP INDIA, showcasing their services and achievements.',
        technologies: ['HTML', 'CSS', 'PHP', 'PYTHON'],
        icon: 'fa-solid fa-hand-holding-heart',
        theme: 'project-harp',
        repo: '',
        demo: 'https://harpistinindia.com'
    },
    {
        title: 'CPU Scheduling Desktop App',
        description: 'A desktop application for visualizing and simulating CPU scheduling algorithms.',
        technologies: ['FLUTTER', 'DART'],
        icon: 'fa-solid fa-microchip',
        theme: 'project-cpu',
        repo: 'https://github.com/Mohit3700n/CPU_Scheduling_Algorithms.git',
        demo: ''
    },
    {
        title: 'Fake News Detection System',
        description: 'A web application for detecting and identifying fake news articles using machine learning techniques.',
        technologies: ['HTML', 'CSS', 'PYTHON'],
        icon: 'fa-solid fa-newspaper',
        theme: 'project-fakenews',
        repo: 'https://github.com/Mohit3700n/FakeNewsDetectionML.git',
        demo: ''
    },
    {
        title: 'Movies Recommendation System',
        description: 'A web application for recommending movies based on user preferences and viewing history.',
        technologies: ['HTML', 'PYTHON'],
        icon: 'fa-solid fa-film',
        theme: 'project-movies',
        repo: 'https://github.com/Mohit3700n/MoviesRecommendationSystem.git',
        demo: ''
    },
    {
        title: 'Face Expression Recognition',
        description: 'A web application for recognizing face expressions using machine learning techniques.',
        technologies: ['HTML', 'PYTHON'],
        icon: 'fa-solid fa-face-smile',
        theme: 'project-face',
        repo: 'https://github.com/Mohit3700n/FaceExpressionDetectionModel.git',
        demo: ''
    },
    {
        title: 'Smart Attendence System YOLO',
        description: 'A web application for recognizing face expressions using machine learning techniques.',
        technologies: ['HTML', 'PYTHON'],
        icon: 'fa-solid fa-user-check',
        theme: 'project-attendance',
        repo: 'https://github.com/Mohit3700n/YoloAttendanceSystem.git',
        demo: ''
    },
    {
        title: 'Queue Prediction System',
        description: 'A web application for predicting queue lengths in real-time using machine learning models.',
        technologies: ['HTML', 'PYTHON'],
        icon: 'fa-solid fa-users-line',
        theme: 'project-queue',
        repo: 'https://github.com/Mohit3700n/QueuePredictionSystem.git',
        demo: ''
    },
    {
        title: 'Urban Company - AI agent',
        description: 'An AI-powered agent for providing personalized recommendations to users.',
        technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON'],
        icon: 'fa-solid fa-wand-magic-sparkles',
        theme: 'project-urban',
        repo: 'https://github.com/Mohit3700n/UrbanCompany.git',
        demo: ''
    },
    {
        title: 'Deeplogs Web Attacks Desktop App',
        description: 'A desktop application for analyzing and visualizing web attack data.',
        technologies: ['HTML', 'PYTHON'],
        icon: 'fa-solid fa-shield-halved',
        theme: 'project-deeplogs',
        repo: 'https://github.com/Mohit3700n/Deeplogs_Web_Attack.git',
        demo: ''
    },
    {
        title: 'Campus Chatbot',
        description: 'A web application for providing automated assistance to students and faculty members.',
        technologies: ['HTML', 'PYTHON'],
        icon: 'fa-solid fa-robot',
        theme: 'project-chatbot',
        repo: 'https://github.com/Mohit3700n/CampusChatbot.git',
        demo: ''
    },
    {
        title: 'LOCAL GO – E-Commerce Website',
        description: 'Full-featured PHP-based e-commerce website with user authentication, product catalog, cart management, order tracking, and SQL database integration.',
        technologies: ['PHP', 'CSS', 'PYTHON', 'HTML', 'SQL DATABASES'],
        icon: 'fa-solid fa-store',
        theme: 'project-localgo',
        repo: 'https://github.com/Mohit3700n/E_Commerece_Website.git',
        demo: ''
    },
    {
        title: 'Expresso – Real-Time Messenger',
        description: 'Cross-platform chat app with real-time messaging, media sharing, push notifications, and beautiful dark UI built in Flutter.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        icon: 'fa-solid fa-comments',
        theme: 'project-expresso',
        repo: 'https://github.com/Mohit3700n/Expresso.git',
        demo: ''
    },
    {
        title: 'College Market Place',
        description: 'A platform for students to buy and sell used textbooks, electronics, and other items within the college campus.',
        technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON'],
        icon: 'fa-solid fa-bag-shopping',
        theme: 'project-market',
        repo: 'https://github.com/Mohit3700n/CollegeMarketPlace.git',
        demo: 'https://college-market-place-liard.vercel.app/'
    }
];

function getWebUrl(value) {
    try {
        const url = new URL(value);
        return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch {
        return '';
    }
}

function createProjectLink(url, type, label, iconClass) {
    const link = document.createElement('a');
    link.className = `project-link project-link--${type}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const icon = document.createElement('i');
    icon.className = iconClass;
    icon.setAttribute('aria-hidden', 'true');
    link.append(icon, document.createTextNode(label));

    const validUrl = getWebUrl(url);
    if (validUrl) {
        link.href = validUrl;
    } else {
        link.setAttribute('aria-disabled', 'true');
        link.title = 'Add this URL in the projects array at the top of script.js';
    }

    return link;
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = `project-card ${project.theme} reveal`;

    const banner = document.createElement('div');
    banner.className = 'project-banner';
    const bannerIcon = document.createElement('i');
    bannerIcon.className = project.icon;
    bannerIcon.setAttribute('aria-hidden', 'true');
    banner.append(bannerIcon);

    const body = document.createElement('div');
    body.className = 'project-body';

    const tags = document.createElement('div');
    tags.className = 'project-tags';
    project.technologies.forEach(technology => {
        const tag = document.createElement('span');
        tag.className = 'project-tag';
        tag.textContent = technology;
        tags.append(tag);
    });

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'project-desc';
    description.textContent = project.description;

    const links = document.createElement('div');
    links.className = 'project-links';
    links.append(
        createProjectLink(project.repo, 'github', 'GitHub', 'fab fa-github'),
        createProjectLink(project.demo, 'demo', 'Live Demo', 'fas fa-external-link-alt')
    );

    body.append(tags, title, description, links);
    card.append(banner, body);
    return card;
}

function renderProjects() {
    const projectGrid = document.getElementById('projectsGrid');
    if (!projectGrid) throw new Error('Project grid element #projectsGrid was not found.');

    projectGrid.replaceChildren(...projects.map(createProjectCard));
}

function configurePortfolioLinks() {
    document.querySelectorAll('[data-profile]').forEach(link => {
        const key = link.dataset.profile;
        const url = getWebUrl(portfolioLinks[key] || '');
        if (!url) {
            link.hidden = true;
            return;
        }

        link.href = url;
        const detail = link.querySelector('[data-contact-value]');
        if (detail) detail.textContent = new URL(url).host + new URL(url).pathname.replace(/\/$/, '');
    });

    document.querySelectorAll('[data-contact-link="email"]').forEach(link => {
        const email = portfolioLinks.email.trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            link.hidden = true;
            return;
        }

        link.href = `mailto:${email}`;
        link.querySelector('[data-contact-value]').textContent = email;
    });

    document.querySelectorAll('[data-contact-link="phone"]').forEach(link => {
        const phone = portfolioLinks.phone.trim();
        const tel = phone.replace(/[^\d+]/g, '');
        if (!/^\+?\d{7,15}$/.test(tel)) {
            link.hidden = true;
            return;
        }

        link.href = `tel:${tel}`;
        link.querySelector('[data-contact-value]').textContent = phone;
    });

}

renderProjects();
configurePortfolioLinks();
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ---- PARTICLES ----
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.dx; p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(124,58,237,${p.alpha})`;
            ctx.fill();
        });

        // Draw connecting lines
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // ---- NAVBAR SCROLL ----
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // ---- TYPING EFFECT ----
    const words = [
        'Android Apps 📱',
        'Flutter Apps 💙',
        'Websites 🌐',
        'PHP Backends 🐘',
        'Databases 🗄️',
        'AI Solutions 🤖',
        'UI/UX Designs 🎨',
        'Machine Learning Models 🧠',
    ];

    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const el = document.getElementById('typingText');
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            el.textContent = currentWord.slice(0, ++charIndex);
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1800);
                return;
            }
        } else {
            el.textContent = currentWord.slice(0, --charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        setTimeout(type, isDeleting ? 60 : 100);
    }

    type();

    // ---- COUNTER ANIMATION ----
    function animateCounter(id, target, suffix = '+') {
        let count = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            count += step;
            if (count >= target) {
                document.getElementById(id).textContent = target + suffix;
                clearInterval(timer);
            } else {
                document.getElementById(id).textContent = Math.floor(count) + suffix;
            }
        }, 25);
    }

    let countersStarted = false;
    const heroObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !countersStarted) {
            countersStarted = true;
            setTimeout(() => {
                animateCounter('count1', 24);
                animateCounter('count2', 15);
                animateCounter('count3', 8);
                animateCounter('count4', 3);
            }, 600);
        }
    });
    heroObserver.observe(document.querySelector('.hero-stats'));

    // ---- SCROLL REVEAL ----
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ---- SKILL BARS ----
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.skill-fill').forEach(fill => {
                    fill.style.width = fill.dataset.width + '%';
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('#skillsGrid').forEach(el => skillObserver.observe(el));

    // ---- SKILLS FILTER ----
    function showSkills(cat, btn) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.skill-card').forEach(card => {
            if (cat === 'all' || card.dataset.cat === cat) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // ---- MOBILE MENU ----
    function openMobileMenu() {
        document.getElementById('mobileMenu').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        document.getElementById('mobileMenu').classList.remove('open');
        document.body.style.overflow = '';
    }

    // ---- CONTACT FORM ----
    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        const status = document.getElementById('formStatus');
        const email = portfolioLinks.email.trim();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            status.textContent = 'Please add your email address in script.js before using this form.';
            return;
        }

        const formData = new FormData(event.currentTarget);
        const subject = formData.get('subject').toString();
        const body = [
            `Name: ${formData.get('name')}`,
            `Email: ${formData.get('email')}`,
            `Budget: ${formData.get('budget') || 'Not specified'}`,
            '',
            formData.get('message')
        ].join('\n');

        status.textContent = 'Your email app is opening with the message ready to send.';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

    // ---- SMOOTH SCROLL ----
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
