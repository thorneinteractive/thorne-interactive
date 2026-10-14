/* ==========================================================================
   THORNE INTERACTIVE - MASTER JS ENGINE (PL/EN AUTO-DETECT + UI CONTROLLER)
   Wersja: 4.1 - Poprawione i naturalne tłumaczenia językowe (EN/PL)
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
        nav_story: "[06. KULISY]",
        nav_contact: "[07. KONTAKT]",
        hero_tagline: "AUTORSKIE STUDIO GIER // BEZKOMPROMISOWY REALIZM",
        hero_sub: "Wkraczamy w przestrzeń, gdzie technologia spotyka się z brutalnym, bezkompromisowym autorskim storytellingiem.",
        btn_explore: "SPRAWDŹ PROJEKT",
        btn_roadmap: "ROADMAP 2026-2027",
        scroll_down: "SCROLL // ODKRYJ PRAWDĘ",
        about_heading: "FILOZOFIA STUDIO",
        about_subhead: "NIE JESTEŚMY KORPORACJĄ. JESTEŚMY AUTORAMI.",
        about_p1: "Thorne Interactive powstaje z buntu przeciwko sterylnej, wykalkulowanej masowej produkcyjności współczesnego gamedevu. Skupiamy się na tworzeniu doświadczeń dla dojrzałego odbiorcy, w których mechanika gry ściśle współgra z ciężką, egzystencjalną narracją.",
        about_p2: "Nasze projekty budowane są na silniku Unity przez zespół pasjonatów w Polsce. Nie idziemy na skróty, nie stosujemy sztucznej cenzury i nie uginamy się pod trendami rynkowymi.",
        stat_1: "FLAGOWY PROJEKT (GODKILLER)",
        stat_2: "OTWARTY ŚWIAT GRY",
        stat_3: "NIEZALEŻNA WIZJA AUTORSKA",
        project_heading: "FLAGOWY PROJEKT: GODKILLER",
        badge_dev_status: "FAZA PRE-ALPHA // W PRODUKCJI",
        project_desc: "Świat po wojnach z AI w stanie New State (NS) wzorowanym na Nowym Jorku i Manhattanie. Trzy zróżnicowane dzielnice: industrialne Rusty Lands, surowe Lowtown oraz sterylny Vanguard, w którym Velen sprawuje kontrolę.",
        feat_1: "Bezwzględny system walki oparty na fizyce i ciosach krytycznych.",
        feat_2: "Brutalna, nieliniowa fabuła z trudnymi wyborami moralnymi.",
        feat_3: "Industrialna ścieżka dźwiękowa budująca klaustrofobiczny klimat.",
        meta_engine: "SILNIK",
        meta_platform: "PLATFORMA",
        meta_setting: "UNIWERSUM",
        meta_setting_val: "Stan New State (NS) // po wojnach z AI",
        meta_world: "ŚWIAT",
        meta_world_val: "Otwarty, 2 km² (Rusty Lands, Lowtown, Vanguard)",
        roadmap_heading: "HARMONOGRAM ROZWOJU (ROADMAP 2026-2027)",
        rm_curr_stage: "OBECNIE NA FAZIE Q1 2026 [KONCEPT, WWW & MAPA 2 KM²]",
        rm_b_current: "AKTYWNY (TU JESTEŚMY)",
        rm_b_next: "NADCHODZĄCY",
        rm_b_plan: "PLANOWANY",
        rm_b_target: "CEL PREMIERY",
        rm_1_title: "Koncepcja, Strona WWW & Mapa 2 km²",
        rm_1_desc: "Uruchomienie oficjalnego serwera www studia Thorne Interactive. Opracowanie świata gry o powierzchni 2 km² obejmującego sektor przemysłowy (Rusty Lands), slumsy (Lowtown) i strefę korporacyjną (Vanguard).",
        rm_1_c1: "[OK] Oficjalny Hub Strony WWW Thorne Interactive",
        rm_1_c2: "[OK] Koncepcja uniwersum 2040 i tożsamość wizualna",
        rm_1_c3: "[W TRAKCIE] Architektura terenu 2 km² w Unity",
        rm_2_title: "Zarys Fabuły, Lore & Pliki Systemowe",
        rm_2_desc: "Rozbudowa scenariusza głównego (Velen, Kael Cross, Dr. Gero). Przygotowanie pierwszego pakietu plików projektowych, pętli zachowań NPC oraz konfiguracja autorskich skryptów AI i fizyki poruszania się.",
        rm_2_c1: "[ ] Kompletny skrypt dialogowy i drzewka wyborów",
        rm_2_c2: "[ ] Integracja pierwszych plików zasobów w repozytorium",
        rm_2_c3: "[ ] System tras chodnikowych i tłumu dla NPC",
        rm_3_title: "Prototypowanie Unity, LOD & Skrypty C#",
        rm_3_desc: "Intensywne prototype-building na silniku Unity 3D. Tworzenie modeli w Blenderze, programowanie zaawansowanych C# skryptów walki, systemów LOD (Level of Detail) i Occlusion Culling dla stałych 60 FPS.",
        rm_3_c1: "[ ] Testy fizyki walki bronią białą i palną",
        rm_3_c2: "[ ] Optymalizacja wyrenderowanego terenu (Occlusion)",
        rm_3_c3: "[ ] Industrialna ścieżka dźwiękowa i efekty audio",
        rm_4_title: "Faza Pre-Alpha & Testy Wydajności",
        rm_4_desc: "Zamknięta faza Pre-Alpha. Integracja wszystkich systemów w jeden płynny monolit, balans rozgrywki, testy na architekturze Linux oraz szlifowanie brutalnej narracji bez kompromisów.",
        rm_4_c1: "[ ] Pierwszy oficjalny gameplay trailer",
        rm_4_c2: "[ ] Wycieki testowe Pre-Alpha i optymalizacja RAM/GPU",
        rm_4_c3: "[ ] Polerowanie interfejsu HUD oraz reakcji świata",
        rm_5_title: "Premiera Gry GODKILLER (PC)",
        rm_5_desc: "Premiera pełnej wersji GODKILLER na platformy PC (Windows / Linux). Udostępnienie bezkompromisowej, dorosłej gry akcji bez sztucznych ugrzecznień i bez cenzury.",
        rm_5_c1: "[ ] Wydanie dystrybucyjne PC (Steam / Standalone)",
        rm_5_c2: "[ ] Wsparcie po-premierowe i łatki społecznościowe",
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
        faq_a1: "Gra opowiada historię w stanie New State (NS) po wojnach z AI w otwartym świecie o powierzchni 2 km² z podziałem na Rusty Lands, Lowtown i Vanguard.",
        faq_q2: "Na jakim silniku i jak powstaje gra?",
        faq_a2: "Godkiller powstaje w silniku Unity 3D z wykorzystaniem autorskich skryptów C#, modeli 3D z Blendera oraz autorskich systemów optymalizacji terenu (LOD i Occlusion Culling).",
        faq_q3: "Czy gra będzie cenzurowana?",
        faq_a3: "Nie. Gra projektowana jest z myślą o dojrzałym odbiorcy (R-Rated) – bez ugrzeczniania i bez ustępstw komercyjnych.",
        faq_q4: "Kiedy nastąpi premiera gry?",
        faq_a4: "Premiera zaplanowana jest na późne lato / zimę 2027 roku na komputerach osobistych (PC).",
        story_heading: "FABUŁA I PROCES POWSTAWANIA",
        story_subhead_1: "UNIWERSUM I FABUŁA GODKILLER",
        story_p1: "Świat stanu New State (NS) to surowa rzeczywistość po wojnach z AI. Postacie takie jak Kael mieszkają w Lowtown, ponieważ nie mają sektorowej wizy wjazdowej do elitarnego Vanguard, gdzie urzęduje Velen.",
        story_subhead_2: "JAK POWSTAJE GRA? (PROCES DEWELOPERSKI)",
        story_p2: "Projekt tworzony jest w pełni niezależnie w Polsce na silniku Unity 3D. Prace obejmują autorski model fizyki walki, dedykowane shader-graphy, trójwymiarowe modele tworzone od zera w Blenderze oraz industrialną ścieżkę dźwiękową.",
        stat_auteur_label: "BEZ SZTUCZNEJ CENZURY I KOMPROMISÓW",
        story_subhead_3: "STATUS STUDIA",
        story_contact_desc: "Studio znajduje się w aktywnej fazie deweloperskiej. Kod źródłowy i materiały produkcyjne są sukcesywnie przesyłane do głównego repozytorium projektu.",
        contact_heading: "KANAŁY KONTAKTOWE I SPECYFIKACJA",
        contact_subhead: "BEZPOŚREDNI ADRES EMAIL",
        contact_p1: "Masz pytania dotyczące projektu GODKILLER, chcesz dołączyć do zespołu lub nawiązać współpracę wydawniczą? Napisz bezpośrednio do twórców.",
        form_label_name: "IDENTYFIKATOR / IMIĘ:",
        form_label_email: "ADRES E-MAIL NADAWCY:",
        form_label_subject: "TEMAT WIADOMOŚCI:",
        opt_general: "Zapytanie Ogólne / Pytania",
        opt_publisher: "Współpraca / Wydawca",
        opt_media: "Prasa / Media / Redakcja",
        opt_dev: "Dołączenie do zespołu / Dev",
        form_label_msg: "TREŚĆ WIADOMOŚCI:",
        form_btn_send: "WYŚLIJ WIADOMOŚĆ // DISPATCH",
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
        nav_story: "[06. DEVLOG]",
        nav_contact: "[07. CONTACT]",
        hero_tagline: "AUTEUR GAME STUDIO // UNCOMPROMISING REALISM",
        hero_sub: "Stepping into a space where technology meets brutal, uncompromising auteur storytelling.",
        btn_explore: "EXPLORE PROJECT",
        btn_roadmap: "ROADMAP 2026-2027",
        scroll_down: "SCROLL // DISCOVER TRUTH",
        about_heading: "STUDIO PHILOSOPHY",
        about_subhead: "WE ARE NOT A CORPORATION. WE ARE AUTEURS.",
        about_p1: "Thorne Interactive was born out of a rebellion against sterile, calculated mass production in modern gamedev. We focus on crafting mature experiences where gameplay mechanics intertwine tightly with heavy, existential narratives.",
        about_p2: "Our projects are built in Unity by a passionate team based in Poland. We take no shortcuts, enforce no artificial censorship, and bend to no market trends.",
        stat_1: "FLAGSHIP PROJECT (GODKILLER)",
        stat_2: "OPEN GAME WORLD",
        stat_3: "INDEPENDENT AUTEUR VISION",
        project_heading: "FLAGSHIP PROJECT: GODKILLER",
        badge_dev_status: "PRE-ALPHA STAGE // IN DEVELOPMENT",
        project_desc: "Set in the New State (NS) post-AI-war world inspired by New York and Manhattan. Three distinct districts: industrial Rusty Lands, gritty Lowtown, and sterile Vanguard ruled by Velen.",
        feat_1: "Unforgiving physics-driven combat system with critical strikes.",
        feat_2: "Brutal, non-linear storyline featuring difficult moral choices.",
        feat_3: "Industrial soundtrack building a claustrophobic atmosphere.",
        meta_engine: "ENGINE",
        meta_platform: "PLATFORM",
        meta_setting: "SETTING",
        meta_setting_val: "New State (NS) // Post-AI Wars",
        meta_world: "WORLD",
        meta_world_val: "Open World, 2 km² (Rusty Lands, Lowtown, Vanguard)",
        roadmap_heading: "DEVELOPMENT ROADMAP (2026-2027)",
        rm_curr_stage: "CURRENT PHASE: Q1 2026 [CONCEPT, WEB HUB & 2 KM² MAP]",
        rm_b_current: "ACTIVE (YOU ARE HERE)",
        rm_b_next: "UPCOMING",
        rm_b_plan: "PLANNED",
        rm_b_target: "TARGET RELEASE",
        rm_1_title: "Concept, Web Hub & 2 km² Map",
        rm_1_desc: "Launching the official Thorne Interactive web hub. Designing the 2 km² open world layout comprising the industrial sector (Rusty Lands), slums (Lowtown), and corporate sector (Vanguard).",
        rm_1_c1: "[OK] Official Thorne Interactive Web Hub",
        rm_1_c2: "[OK] New State universe concept & visual identity",
        rm_1_c3: "[IN PROGRESS] 2 km² terrain architecture in Unity",
        rm_2_title: "Story Outline, Lore & System Files",
        rm_2_desc: "Expanding the main scenario (Velen, Kael Cross, Dr. Gero). Preparing initial asset file drops, NPC crowd behavior loops, and custom AI/movement physics configuration.",
        rm_2_c1: "[ ] Full dialogue script & decision trees",
        rm_2_c2: "[ ] Core asset files integration in repository",
        rm_2_c3: "[ ] Sidewalk pathfinding and crowd system for NPCs",
        rm_3_title: "Unity Prototyping, LOD & C# Scripts",
        rm_3_desc: "Intensive prototype development in Unity 3D engine. Crafting 3D models in Blender, programming C# combat scripts, LOD implementation, and Occlusion Culling for stable 60 FPS.",
        rm_3_c1: "[ ] Melee and firearm combat physics tests",
        rm_3_c2: "[ ] Terrain rendering optimization (Occlusion Culling)",
        rm_3_c3: "[ ] Industrial soundtrack and audio SFX",
        rm_4_title: "Pre-Alpha Phase & Stress Testing",
        rm_4_desc: "Closed Pre-Alpha stage. Merging code systems into a fluid build, gameplay balancing, testing on Linux architecture, and polishing the uncompromising narrative.",
        rm_4_c1: "[ ] First official gameplay trailer",
        rm_4_c2: "[ ] Pre-Alpha test builds & RAM/GPU optimization",
        rm_4_c3: "[ ] HUD interface & world reaction polishing",
        rm_5_title: "GODKILLER Game Release (PC)",
        rm_5_desc: "Official release of GODKILLER on PC (Windows / Linux). Delivering an uncompromising, mature action game with no artificial sugar-coating and no censorship.",
        rm_5_c1: "[ ] PC distribution build (Steam / Standalone)",
        rm_5_c2: "[ ] Post-launch support and community patches",
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
        faq_q1: "What are the core narrative premises of Godkiller?",
        faq_a1: "The game is set in the New State (NS) after the AI wars within a 2 km² open world split into Rusty Lands, Lowtown, and Vanguard.",
        faq_q2: "What engine and tools are used to build the game?",
        faq_a2: "Godkiller is developed in Unity 3D using custom C# scripts, Blender 3D models, and proprietary terrain optimization systems (LOD & Occlusion Culling).",
        faq_q3: "Will the game be censored?",
        faq_a3: "No. The game is designed for a mature audience (R-Rated) – with no dumbing down and no commercial compromises.",
        faq_q4: "When will the game be released?",
        faq_a4: "The launch is targeted for Late Summer / Winter 2027 on PC.",
        story_heading: "STORY & DEVELOPMENT PROCESS",
        story_subhead_1: "THE GODKILLER UNIVERSE & STORY",
        story_p1: "The New State (NS) world is a raw reality following the AI wars. Characters like Kael reside in Lowtown because they lack the sector visa required to enter elite Vanguard, where Velen reigns.",
        story_subhead_2: "HOW THE GAME IS MADE (DEV PROCESS)",
        story_p2: "The project is developed entirely independently in Poland using Unity 3D. Development includes custom combat physics, dedicated shader graphs, 3D models crafted from scratch in Blender, and an unsettling industrial soundtrack.",
        stat_auteur_label: "NO ARTIFICIAL CENSORSHIP & COMPROMISES",
        stat_auteur_label: "NO ARTIFICIAL CENSORSHIP & COMPROMISES",
        story_subhead_3: "STUDIO STATUS",
        story_contact_desc: "The studio is in an active development phase. Source code and production assets are progressively pushed to the primary repository.",
        contact_heading: "CONTACT CHANNELS & SPECIFICATIONS",
        contact_subhead: "DIRECT EMAIL CONTACT",
        contact_p1: "Have questions regarding the GODKILLER project, want to join the team, or establish publishing inquiries? Reach out directly via the form below.",
        form_label_name: "IDENTIFIER / NAME:",
        form_label_email: "SENDER EMAIL ADDRESS:",
        form_label_subject: "MESSAGE SUBJECT:",
        opt_general: "General Inquiry / Questions",
        opt_publisher: "Publishing / Business Collaboration",
        opt_media: "Press / Media / Editors",
        opt_dev: "Join Team / Game Dev",
        form_label_msg: "MESSAGE CONTENT:",
        form_btn_send: "SEND MESSAGE // DISPATCH",
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

    // Przełączanie po kliknięciu
    document.addEventListener('click', (event) => {
        if (event.target.closest('#language-toggle-btn')) {
            setLanguage(activeLang === 'pl' ? 'en' : 'pl');
        }
    });

    /* 2. Obsługa Formularza Kontaktowego Terminalowego */
    const contactForm = document.getElementById('contact-form');
    const feedbackMsg = document.getElementById('form-feedback');

    if (contactForm && feedbackMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;

            if (name && email) {
                feedbackMsg.style.display = 'block';
                feedbackMsg.style.color = '#00ff66';
                feedbackMsg.innerHTML = activeLang === 'pl' 
                    ? `// WIADOMOŚĆ PRZYJĘTA. ID: ${Math.floor(Math.random() * 899999 + 100000)}.<br>Dziękujemy, odpowiedź zostanie wysłana na adres ${email}.`
                    : `// DISPATCH ACKNOWLEDGED. ID: ${Math.floor(Math.random() * 899999 + 100000)}.<br>Thank you. Reply will be dispatched to ${email}.`;

                contactForm.reset();

                setTimeout(() => {
                    feedbackMsg.style.display = 'none';
                }, 7000);
            }
        });
    }

    /* 3. Menu Mobilne */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function setMenuState(open) {
        if (!hamburgerBtn || !mobileOverlay) return;
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

    /* 4. Filtrowanie Mediów */
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

    /* 5. Efekty Przewijania & Pasek Postępu */
    const header = document.getElementById('top-header');
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    let scrollTicking = false;

    function onScrollFrame() {
        const y = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (header) header.classList.toggle('is-scrolled', y > 40);
        if (progressBar) progressBar.style.width = (maxScroll > 0 ? (y / maxScroll) * 100 : 0) + '%';
        if (backToTop) backToTop.classList.toggle('visible', y > 500);
        scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            scrollTicking = true;
            window.requestAnimationFrame(onScrollFrame);
        }
    }, { passive: true });
    onScrollFrame();

    /* 6. Podświetlanie Sekcji i Animacje IntersectionObserver */
    if ('IntersectionObserver' in window) {
        const navLinks = document.querySelectorAll('.desktop-nav .nav-item');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => {
                    link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-40% 0px -50% 0px' });

        ['about', 'project', 'roadmap', 'media', 'specs', 'story', 'contact'].forEach(id => {
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
        }, { threshold: 0.1 });

        document.querySelectorAll('.section-heading, .stat-card, .roadmap-card, .media-card, .project-meta, .faq-item, .contact-info-col, .contact-form-wrapper')
            .forEach(el => {
                el.classList.add('reveal');
                revealObserver.observe(el);
            });
    }

    console.log('%c THORNE INTERACTIVE %c v4.1 // Core Dispatch Ready ', 'background:#000;color:#fff;font-weight:bold;padding:4px;', 'background:#111;color:#00ff66;padding:4px;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
} else {
    initSite();
}