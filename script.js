/* ==========================================================================
   THORNE INTERACTIVE - MASTER JS ENGINE (PL/EN AUTO-DETECT + UI CONTROLLER)
   Wersja: 3.3 - Auto-detekcja języka + zaktualizowane treści fabuły / FAQ
   ========================================================================== */

const translations = {
    pl: {
        page_title: "THORNE INTERACTIVE // OFICJALNE STUDIO AUTORSKIE",
        page_desc: "Thorne Interactive - niezależne autorskie studio gier. Bez cenzury, brutalny worldbuilding, bezkompromisowa wizja.",
        skip_link: "PRZEJDŹ DO TREŚCI",
        lang_btn_aria: "Zmień język",
        menu_btn_aria: "Otwórz menu",
        top_btn_aria: "Wróć na górę",
        alt_logo: "Logo Thorne Interactive",
        alt_banner: "Główny baner Thorne Interactive",
        alt_keyart: "Grafika promocyjna Godkiller",
        alt_render: "Render świata gry",
        alt_concept: "Concept art",
        nav_about: "[01. STUDIO]",
        nav_project: "[02. GODKILLER]",
        nav_roadmap: "[03. ROADMAP]",
        nav_media: "[04. MEDIA]",
        nav_specs: "[05. SPECS]",
        nav_story: "[06. FABUŁA & KULISY]",
        hero_tagline: "AUTORSKIE STUDIO GIER // BEZKOMPROMISOWY REALIZM",
        hero_sub: "Wkraczamy w przestrzeń, gdzie technologia spotyka się z brutalnym, bezkompromisowym autorskim storytellingiem.",
        btn_explore: "SPRAWDŹ PROJEKT",
        btn_story: "FABUŁA I KULISY",
        scroll_down: "SCROLL //ODKRYJ PRAWDĘ",
        about_heading: "FILOZOFIA STUDIO",
        about_subhead: "NIE JESTEŚMY KORPORACJĄ. JESTEŚMY AUTORAMI.",
        about_p1: "Thorne Interactive powstało z buntu przeciwko sterylnej, wykalkulowanej masowej produkcyjności współczesnego gamedevu. Skupiamy się na tworzeniu doświadczeń dla dojrzałego odbiorcy, w których mechanika gry ściśle współgra z ciężką, egzystencjalną narracją.",
        about_p2: "Nasze projekty budowane są na silniku Unity przez zespół pasjonatów w Polsce. Nie idziemy na skróty, nie stosujemy sztucznej cenzury i nie uginamy się pod trendami rynkowymi.",
        stat_1: "FLAGOWY PROJEKT (GODKILLER)",
        stat_2: "OTWARTY ŚWIAT GRY",
        stat_3: "NIEZALEŻNA WIZJA AUTORSKA",
        project_heading: "FLAGOWY PROJEKT: GODKILLER",
        badge_dev_status: "FAZA PRE-ALPHA // W PRODUKCJI",
        project_desc: "Rok 2040. Świat po cichej zapaści infrastrukturalnej. Wcielasz się w Kaela Crossa – jednostkę operacyjną uwikłaną w spisek korporacyjny, która odkrywa, że bogowie współczesnego świata cyfrowego to krwawa fikcja.",
        feat_1: "Bezwzględny system walki oparty na fizyce i ciosach krytycznych.",
        feat_2: "Brutalna, nieliniowa fabuła z trudnymi wyborami moralnymi.",
        feat_3: "Industrialna ścieżka dźwiękowa budująca klaustrofobiczny klimat.",
        meta_engine: "SILNIK",
        meta_platform: "PLATFORMA",
        meta_setting: "UNIWERSUM",
        meta_setting_val: "Rok 2040 // po cichej zapaści infrastruktury",
        meta_world: "ŚWIAT",
        meta_world_val: "Otwarty, 2 km²",
        roadmap_heading: "HARMONOGRAM ROZWOJU (ROADMAP)",
        rm_1_title: "Koncepcja i R&D",
        rm_1_desc: "Prototypowanie mechanik w Unity, ustalenie stylu graficznego i mrocznej palety barw.",
        rm_2_title: "Pre-Alpha & Strona WWW",
        rm_2_desc: "Uruchomienie oficjalnej bazy studia, budowa otwartego świata 2km² i autorskich narzędzi.",
        rm_3_title: "Szlifowanie i Beta",
        rm_3_desc: "Finalizacja systemów walki, optymalizacja silnika i dopracowywanie dojrzałej narracji.",
        media_heading: "MATERIAŁY I MULTIMEDIA",
        filt_all: "WSZYSTKO",
        filt_screens: "SCREENSHOTY",
        filt_art: "CONCEPT ART",
        m_cap_1: "Test oświetlenia i struktur architektonicznych w silniku gry.",
        m_cap_2: "Wstępny projekt symboliki i tożsamości wizualnej studia.",
        specs_heading: "WYMAGANIA SYSTEMOWE (PROJEKT GODKILLER)",
        th_spec: "PARAMETR",
        th_min: "MINIMALNE (1080p / 30 FPS)",
        th_rec: "ZALECANE (1440p / 60 FPS)",
        td_os: "SYSTEM OPERACYJNY",
        td_os_min: "Windows 10 / 11 (64-bit) lub Linux (Garuda/Arch)",
        td_cpu: "PROCESOR (CPU)",
        td_gpu: "KARTA GRAFICZNA (GPU)",
        td_ram: "PAMIĘĆ RAM",
        faq_heading: "CZĘSTE PYTANIA",
        faq_q1: "Jakie są główne założenia fabularne Godkillera?",
        faq_a1: "Gra opowiada historię Kaela Crossa w 2040 roku. To mroczna, egzystencjalna opowieść o walce z cyfrowymi klanami w opuszczonym, otwartym świecie o powierzchni 2 km².",
        faq_q2: "Na jakim silniku i jak powstaje gra?",
        faq_a2: "Godkiller powstaje w silniku Unity 3D z wykorzystaniem autorskich skryptów C#, modeli 3D z Blendera oraz autorskich systemów optymalizacji terenu.",
        faq_q3: "Czy gra będzie cenzurowana?",
        faq_a3: "Nie. Gra projektowana jest z myślą o dojrzałym odbiorcy (R-Rated) – bez ugrzeczniania i bez ustępstw komercyjnych.",
        faq_q4: "Na jakich platformach pojawi się gra?",
        faq_a4: "Główną platformą docelową jest PC (systemy Windows oraz Linux).",
        story_heading: "FABUŁA I PROCES POWSTAWANIA",
        story_subhead_1: "UNIWERSUM I FABUŁA GODKILLERA",
        story_p1: "Świat roku 2040 to nie cyberpunkowa utopia z neonami, ale surowa rzeczywistość po cichej zapaści infrastruktury cyfrowej. Główny bohater, Kael Cross, trafia w sam środek konfliktu między niedobitkami ludzkości a technologicznymi klanami rywalizującymi o zasoby starych serwerowni.",
        story_subhead_2: "JAK POWSTAJE GRA? (PROCES DEWELOPERSKI)",
        story_p2: "Projekt tworzony jest w pełni niezależnie w Polsce na silniku Unity 3D. Prace obejmują autorski model fizyki walki, dedykowane shader-graphy, trójwymiarowe modele tworzone od zera w Blenderze oraz industrialną ścieżkę dźwiękową budującą niepokojącą atmosferę.",
        stat_auteur_label: "BEZ SZTUCZNEJ CENZURY I KOMPROMISÓW",
        story_subhead_3: "KONTAKT BEZPOŚREDNI",
        story_contact_desc: "Masz pytania dotyczące projektu, jesteś dziennikarzem lub twórcą? Napisz bezpośrednio na nasz adres e-mail – bez zbędnych pośredników.",
        dm_label: "BEZPOŚREDNI KONTAKT E-MAIL:",
        footer_rights: "© 2026 THORNE INTERACTIVE. WSZELKIE PRAWA ZASTRZEŻONE."
    },
    en: {
        page_title: "THORNE INTERACTIVE // OFFICIAL AUTEUR STUDIO",
        page_desc: "Thorne Interactive - Independent Auteur Game Studio. No censorship, brutal worldbuilding, uncompromising vision.",
        skip_link: "SKIP TO CONTENT",
        lang_btn_aria: "Change language",
        menu_btn_aria: "Open menu",
        top_btn_aria: "Back to top",
        alt_logo: "Thorne Interactive Logo",
        alt_banner: "Thorne Interactive Main Banner",
        alt_keyart: "Godkiller Artwork",
        alt_render: "Game world render",
        alt_concept: "Concept art",
        nav_about: "[01. STUDIO]",
        nav_project: "[02. GODKILLER]",
        nav_roadmap: "[03. ROADMAP]",
        nav_media: "[04. MEDIA]",
        nav_specs: "[05. SPECS]",
        nav_story: "[06. STORY & DEVLOG]",
        hero_tagline: "AUTEUR GAME STUDIO // UNCOMPROMISING REALISM",
        hero_sub: "Stepping into a space where technology meets brutal, uncompromising auteur storytelling.",
        btn_explore: "EXPLORE PROJECT",
        btn_story: "STORY & DEVLOG",
        scroll_down: "SCROLL //DISCOVER TRUTH",
        about_heading: "STUDIO PHILOSOPHY",
        about_subhead: "WE ARE NOT A CORPORATION. WE ARE AUTEURS.",
        about_p1: "Thorne Interactive was born out of a rebellion against sterile, calculated mass production in modern gamedev. We focus on crafting mature experiences where gameplay mechanics intertwine tightly with heavy, existential narrative.",
        about_p2: "Our projects are built in Unity by a passionate team based in Poland. We take no shortcuts, enforce no artificial censorship, and bend to no market trends.",
        stat_1: "FLAGSHIP PROJECT (GODKILLER)",
        stat_2: "OPEN GAME WORLD",
        stat_3: "INDEPENDENT AUTEUR VISION",
        project_heading: "FLAGSHIP PROJECT: GODKILLER",
        badge_dev_status: "PRE-ALPHA STAGE // IN DEVELOPMENT",
        project_desc: "Year 2040. A world after a silent infrastructure collapse. You play as Kael Cross – an operative entangled in a corporate conspiracy who discovers that the gods of the digital world are a bloody fiction.",
        feat_1: "Unforgiving physics-driven combat system with critical strikes.",
        feat_2: "Brutal, non-linear storyline featuring difficult moral choices.",
        feat_3: "Industrial soundtrack building a claustrophobic atmosphere.",
        meta_engine: "ENGINE",
        meta_platform: "PLATFORM",
        meta_setting: "SETTING",
        meta_setting_val: "Year 2040 // after a silent infrastructure collapse",
        meta_world: "WORLD",
        meta_world_val: "Open world, 2 km²",
        roadmap_heading: "DEVELOPMENT ROADMAP",
        rm_1_title: "Concept & R&D",
        rm_1_desc: "Mechanics prototyping in Unity, establishing art style and dark color palette.",
        rm_2_title: "Pre-Alpha & Web Hub",
        rm_2_desc: "Launching official studio hub, 2km² open world building and custom tooling.",
        rm_3_title: "Polishing & Beta",
        rm_3_desc: "Finalizing combat systems, engine optimization, and refining mature storytelling.",
        media_heading: "MEDIA & ASSETS",
        filt_all: "ALL",
        filt_screens: "SCREENSHOTS",
        filt_art: "CONCEPT ART",
        m_cap_1: "Lighting and architectural structure test inside the game engine.",
        m_cap_2: "Preliminary design of studio symbolism and visual identity.",
        specs_heading: "SYSTEM REQUIREMENTS (GODKILLER PROJECT)",
        th_spec: "PARAMETER",
        th_min: "MINIMUM (1080p / 30 FPS)",
        th_rec: "RECOMMENDED (1440p / 60 FPS)",
        td_os: "OPERATING SYSTEM",
        td_os_min: "Windows 10 / 11 (64-bit) or Linux (Garuda/Arch)",
        td_cpu: "PROCESSOR (CPU)",
        td_gpu: "GRAPHICS CARD (GPU)",
        td_ram: "RAM MEMORY",
        faq_heading: "FAQ",
        faq_q1: "What are the main story premises of Godkiller?",
        faq_a1: "The game follows Kael Cross in 2040. It is a dark, existential story about fighting digital clans in a deserted 2 km² open world.",
        faq_q2: "What engine and tools are used to build the game?",
        faq_a2: "Godkiller is developed in Unity 3D using custom C# scripts, Blender 3D models, and proprietary terrain optimization systems.",
        faq_q3: "Will the game be censored?",
        faq_a3: "No. The game is designed for a mature audience (R-Rated) – with no dumbing down and no commercial compromises.",
        faq_q4: "What platforms will the game be released on?",
        faq_a4: "The primary target platform is PC (Windows and Linux systems).",
        story_heading: "STORY & DEVELOPMENT PROCESS",
        story_subhead_1: "THE GODKILLER UNIVERSE & STORY",
        story_p1: "The world of 2040 is not a neon cyberpunk utopia, but a raw reality after a quiet digital infrastructure collapse. The protagonist, Kael Cross, finds himself in the middle of a conflict between the remnants of humanity and tech clans competing for server resources.",
        story_subhead_2: "HOW THE GAME IS MADE (DEV PROCESS)",
        story_p2: "The project is developed independently in Poland using Unity 3D. Development includes custom combat physics, dedicated shader graphs, 3D models crafted from scratch in Blender, and an unsettling industrial soundtrack.",
        stat_auteur_label: "NO ARTIFICIAL CENSORSHIP & COMPROMISES",
        story_subhead_3: "DIRECT CONTACT",
        story_contact_desc: "Have questions about the project, or are you a journalist or creator? Write directly to our e-mail address – no middleman.",
        dm_label: "DIRECT CONTACT E-MAIL:",
        footer_rights: "© 2026 THORNE INTERACTIVE. ALL RIGHTS RESERVED."
    }
};

const LANG_STORAGE_KEY = 'thorne_lang';
const DEFAULT_LANG = 'pl';
const I18N_ATTRIBUTES = ['alt', 'aria-label', 'placeholder', 'title'];

function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (err) { return null; }
}

function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); return true; } catch (err) { return false; }
}

function isSupportedLang(lang) {
    return Object.prototype.hasOwnProperty.call(translations, lang);
}

function initSite() {

    /* 1. Automatyczna Detekcja Języka (PL / EN) */
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('pl') ? 'pl' : 'en';
    const langToggleBtn = document.getElementById('language-toggle-btn');
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    
    // Priorytet: 1. URL (?lang=en) -> 2. Zapamiętany w localStorage -> 3. Język przeglądarki -> 4. Domyślny (PL)
    let activeLang = [urlLang, storageGet(LANG_STORAGE_KEY), browserLang, DEFAULT_LANG].find(isSupportedLang);

    function updateLangButton() {
        if (!langToggleBtn) return;
        langToggleBtn.innerHTML = activeLang === 'pl'
            ? '<span class="lang-indicator">PL</span> / <span class="lang-muted">EN</span>'
            : '<span class="lang-muted">PL</span> / <span class="lang-indicator">EN</span>';
    }

    function setLanguage(lang) {
        if (!isSupportedLang(lang)) lang = DEFAULT_LANG;
        activeLang = lang;
        storageSet(LANG_STORAGE_KEY, lang);
        const dict = translations[lang];

        document.documentElement.lang = lang;
        if (dict.page_title) document.title = dict.page_title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict.page_desc) metaDesc.setAttribute('content', dict.page_desc);

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                element.textContent = dict[key];
            }
        });

        I18N_ATTRIBUTES.forEach(attr => {
            document.querySelectorAll('[data-i18n-' + attr + ']').forEach(element => {
                const key = element.getAttribute('data-i18n-' + attr);
                if (dict[key] !== undefined) element.setAttribute(attr, dict[key]);
            });
        });

        updateLangButton();
    }

    // Uruchomienie języka
    setLanguage(activeLang);

    // Przełączanie ręczne po kliknięciu
    document.addEventListener('click', (event) => {
        if (event.target.closest('#language-toggle-btn')) {
            setLanguage(activeLang === 'pl' ? 'en' : 'pl');
        }
    });

    /* 2. Menu Mobilne */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function setMenuState(open) {
        hamburgerBtn.classList.toggle('active', open);
        mobileOverlay.classList.toggle('active', open);
        document.body.classList.toggle('no-scroll', open);
        hamburgerBtn.setAttribute('aria-expanded', String(open));
    }

    if (hamburgerBtn && mobileOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            setMenuState(!mobileOverlay.classList.contains('active'));
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => setMenuState(false));
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setMenuState(false);
        });
    }

    /* 3. Filtrowanie Mediów */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const mediaCards = document.querySelectorAll('.media-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterCategory = btn.getAttribute('data-filter');

            mediaCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                card.style.display = (filterCategory === 'all' || cardCategory === filterCategory) ? 'block' : 'none';
            });
        });
    });

    /* 4. Efekty Przewijania */
    const header = document.getElementById('top-header');
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    let scrollTicking = false;

    function onScrollFrame() {
        const y = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (header) header.classList.toggle('is-scrolled', y > 40);
        if (progressBar) progressBar.style.width = (maxScroll > 0 ? (y / maxScroll) * 100 : 0) + '%';
        if (backToTop) backToTop.classList.toggle('visible', y > 600);
        scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            scrollTicking = true;
            window.requestAnimationFrame(onScrollFrame);
        }
    }, { passive: true });
    onScrollFrame();

    /* 5. Podświetlanie Sekcji i Animacje Wejścia */
    if ('IntersectionObserver' in window) {
        const navLinks = document.querySelectorAll('.desktop-nav .nav-item');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => {
                    link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        ['about', 'project', 'roadmap', 'media', 'specs', 'story'].forEach(id => {
            const section = document.getElementById(id);
            if (section) navObserver.observe(section);
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.section-heading, .stat-card, .roadmap-item, .media-card, .project-meta, .faq-item')
            .forEach(el => {
                el.classList.add('reveal');
                revealObserver.observe(el);
            });
    }

    console.log('%c THORNE INTERACTIVE %c v3.3 // System Kernel Online ', 'background:#000;color:#fff;font-weight:bold;padding:4px;', 'background:#111;color:#888;padding:4px;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
} else {
    initSite();
}