/* ==========================================================================
   THORNE INTERACTIVE - MASTER JS ENGINE (PL/EN AUTO-DETECT + TIMER + PROGRESS)
   ========================================================================== */

const translations = {
    pl: {
        page_title: "THORNE INTERACTIVE // OFICJALNE STUDIO AUTORSKIE",
        page_desc: "Thorne Interactive - niezależne autorskie studio gier. Unreal Engine 5, C++, bez cenzury.",
        skip_link: "PRZEJDŹ DO TREŚCI",
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
        hero_tagline: "AUTORSKIE STUDIO GIER // UNREAL ENGINE 5 & C++",
        hero_sub: "Wkraczamy w przestrzeń, gdzie technologia spotyka się z brutalnym, bezkompromisowym autorskim storytellingiem.",
        btn_explore: "SPRAWDŹ PROJEKT",
        btn_roadmap: "ROADMAP 2026-2028",
        scroll_down: "SCROLL // ODKRYJ PRAWDĘ",
        cd_title: "SYSTEM TIMER // CEL: PREMIERA GODKILLER (ZIMA 2028)",
        cd_years: "LATA",
        cd_months: "MIESIĄCE",
        cd_days: "DNI",
        cd_hours: "GODZINY",
        cd_minutes: "MINUTY",
        cd_seconds: "SEKUNDY",
        about_heading: "FILOZOFIA STUDIO",
        about_subhead: "NIE JESTEŚMY KORPORACJĄ. JESTEŚMY AUTORAMI.",
        about_p1: "Thorne Interactive powstaje z buntu przeciwko sterylnej, wykalkulowanej masowej produkcyjności współczesnego gamedevu. Skupiamy się na tworzeniu doświadczeń dla dojrzałego odbiorcy, w których mechanika gry ściśle współgra z ciężką, egzystencjalną narracją.",
        about_p2: "Nasze projekty budowane są na zaawansowanym silniku Unreal Engine 5 przy użyciu optymalnego kodu C++ przez zespół pasjonatów w Polsce. Nie idziemy na skróty, nie stosujemy sztucznej cenzury i nie uginamy się pod trendami rynkowymi.",
        stat_1: "FLAGOWY PROJEKT (GODKILLER)",
        stat_2: "SILNIK GRAFICZNY (C++ / BLUEPRINTS)",
        stat_3: "NIEZALEŻNA WIZJA AUTORSKA",
        project_heading: "FLAGOWY PROJEKT: GODKILLER",
        badge_dev_status: "FAZA PRE-ALPHA // W PRODUKCJI",
        project_desc: "Świat po wojnach z AI w stanie New State (NS) wzorowanym na Nowym Jorku i Manhattanie. Trzy zróżnicowane dzielnice: industrialne Rusty Lands, surowe Lowtown oraz sterylny Vanguard, w którym Velen sprawuje kontrolę.",
        feat_1: "Bezwzględny system walki oparty na fizyce silnika Unreal Engine 5 i kodzie C++.",
        feat_2: "Brutalna, nieliniowa fabuła z trudnymi wyborami moralnymi.",
        feat_3: "Dystrybucja bez kosztów wstępnych przez itch.io (wersja PC Windows & Linux/Proton).",
        meta_engine: "SILNIK",
        meta_platform: "PLATFORMA",
        meta_setting: "UNIWERSUM",
        meta_setting_val: "Stan New State (NS) // po wojnach z AI",
        meta_world: "ŚWIAT",
        meta_world_val: "Dystopiczny teatr działań (Rusty Lands, Lowtown, Vanguard)",
        roadmap_heading: "HARMONOGRAM ROZWOJU (ROADMAP 2026-2028)",
        rm_curr_stage: "OBECNIE NA FAZIE Q1 2026 [KONCEPT, C++ & UE5 SETUP]",
        rm_b_current: "AKTYWNY (TU JESTEŚMY)",
        rm_b_next: "NADCHODZĄCY",
        rm_b_plan: "PLANOWANY",
        rm_b_target: "CEL PREMIERY",
        rm_phase_1: "FAZA 01 // Q1 2026",
        rm_phase_2: "FAZA 02 // Q2 2026",
        rm_phase_3: "FAZA 03 // Q3 - Q4 2026",
        rm_phase_4: "FAZA 04 // 2027",
        rm_phase_5: "FAZA 05 // PREMIERA",
        rm_5_date: "PÓŹNE LATO / ZIMA 2028",
        rm_1_title: "Inicjalizacja UE5, C++ & Architektura WWW",
        rm_1_desc: "Konfiguracja środowiska w Unreal Engine 5 oraz Visual Studio Community. Przygotowanie platformy www Thorne Interactive oraz fundamentów pod systemy ruchów i logikę gry.",
        rm_1_c1: "[OK] Oficjalny Hub Strony WWW Thorne Interactive",
        rm_1_c2: "[OK] Konfiguracja Unreal Engine 5 & Visual Studio Community",
        rm_1_c3: "[W TRAKCIE] Podstawowe skrypty ruchu C++ i testy mapy",
        rm_2_title: "System Walki C++ & Lore Uniwersum",
        rm_2_desc: "Rozbudowa mechaniki walki w C++ (wykrywanie trafień, zadawanie obrażeń, staminy). Scenariusz główny oraz prototypowanie lokacji w Nowym Jorku / New State.",
        rm_2_c1: "[ ] Kodowanie systemu ciosów i kolizji broni w C++",
        rm_2_c2: "[ ] Scenariusz fabularny (Kael Cross vs Velen)",
        rm_2_c3: "[ ] Integracja assets i animacji manekina",
        rm_3_title: "Rozbudowa Świata & Shader Graph",
        rm_3_desc: "Tworzenie modeli 3D, dopracowanie surowego klimatu dzielnic Rusty Lands, Lowtown oraz Vanguard. Testy optymalizacyjne w UE5.",
        rm_3_c1: "[ ] Zaawansowane shadery i materiały w Unrealu",
        rm_3_c2: "[ ] Testy wydajności na architekturze Linux / Garuda",
        rm_3_c3: "[ ] Industrialna oprawa audio i efekt komory mazi",
        rm_4_title: "Playable Teaser & Optymalizacja",
        rm_4_desc: "Składanie wersji demonstracyjnej gry. Przygotowanie darmowej publikacji Playable Teasera na platformie itch.io.",
        rm_4_c1: "[ ] Build testowy Playable Teaser na itch.io",
        rm_4_c2: "[ ] Korekta błędów C++ i stabilizacja klatek (FPS)",
        rm_4_c3: "[ ] Zbiorcze testy społecznościowe",
        rm_5_title: "Premiera GODKILLER (PC / itch.io)",
        rm_5_desc: "Oficjalna premiera kompletnej wersji GODKILLER na PC z obsługą systemów Windows i Linux. Zero cenzury, pełna wizja autorska.",
        rm_5_c1: "[ ] Wydanie pełnej wersji na itch.io (0 zł budżetu dystrybucyjnego)",
        rm_5_c2: "[ ] Dedykowane wsparcie dla graczy Linux/Proton",
        media_heading: "MATERIAŁY I MULTIMEDIA",
        filt_all: "WSZYSTKO",
        filt_screens: "SCREENSHOTY",
        filt_art: "CONCEPT ART",
        m_cap_1: "Test oświetlenia Lumen i struktur w silniku Unreal Engine 5.",
        m_cap_2: "Wstępny projekt symboliki i tożsamości wizualnej studia.",
        specs_heading: "WYMAGANIA SYSTEMOWE (PROJEKT GODKILLER)",
        th_spec: "PARAMETR",
        th_min: "MINIMALNE (1080p / 30 FPS)",
        th_rec: "ZALECANE (1440p / 60 FPS)",
        td_os: "SYSTEM OPERACYJNY",
        td_os_min: "Windows 10 / 11 (64-bit) lub Linux (Garuda/Arch przez Proton)",
        td_cpu: "PROCESOR (CPU)",
        td_gpu: "KARTA GRAFICZNA (GPU)",
        td_ram: "PAMIĘĆ RAM",
        faq_heading: "CZĘSTE PYTANIA",
        faq_q1: "Jakie są główne założenia fabularne Godkillera?",
        faq_a1: "Gra opowiada historię w stanie New State (NS) po wojnach z AI w otwartym świecie z podziałem na Rusty Lands, Lowtown i Vanguard.",
        faq_q2: "Na jakim silniku i w jakiej technologii powstaje gra?",
        faq_a2: "Godkiller powstaje w silniku Unreal Engine 5 z autorskimi skryptami pisanymi w C++, co zapewnia najwyższą wydajność i pełną kontrolę nad systemem walki.",
        faq_q3: "Gdzie będzie można zagrać w grę?",
        faq_a3: "Premiera oraz darmowy Playable Teaser pojawią się na platformie itch.io, co pozwala całkowicie ominąć wysokie koszty wydawnicze.",
        faq_q4: "Kiedy nastąpi premiera gry?",
        faq_a4: "Premiera zaplanowana jest na późne lato / zimę 2028 roku na komputerach PC (Windows oraz Linux).",
        story_heading: "FABUŁA I PROCES POWSTAWANIA",
        story_subhead_1: "UNIWERSUM I FABUŁA GODKILLER",
        story_p1: "Świat stanu New State (NS) to surowa rzeczywistość po wojnach z AI. Postacie takie jak Kael mieszkają w Lowtown, ponieważ nie mają sektorowej wizy wjazdowej do elitarnego Vanguard, gdzie urzęduje Velen.",
        story_subhead_2: "JAK POWSTAJE GRA? (PROCES DEWELOPERSKI)",
        story_p2: "Projekt tworzony jest w pełni niezależnie w Polsce przy użyciu Unreal Engine 5 i czystego C++. Wykorzystujemy profesjonalne narzędzia programistyczne, Visual Studio oraz środowiska Linux (Garuda) dla zapewnienia bezkompromisowej stabilności.",
        stat_auteur_label: "BEZ SZTUCZNEJ CENZURY I KOMPROMISÓW",
        story_subhead_3: "STATUS STUDIA",
        story_contact_desc: "Studio znajduje się w aktywnej fazie deweloperskiej. Kod źródłowy C++ oraz zasoby UE5 są sukcesywnie rozwijane.",
        footer_rights: "© 2026 THORNE INTERACTIVE. WSZELKIE PRAWA ZASTRZEŻONE.",
        cd_progress: "UPŁYNĘŁO OD STARTU PROJEKTU",
        man_1: "NIE IDZIEMY NA SKRÓTY.",
        man_2: "BEZ SZTUCZNEJ CENZURY.",
        man_3: "NIE UGINAMY SIĘ POD TRENDAMI.",
        pillars_heading: "FILARY GRY",
        pil_1_t: "WALKA OPARTA NA FIZYCE",
        pil_1_d: "Każde uderzenie ma ciężar. System walki w C++ obsługuje kolizje broni, obrażenia i staminę.",
        pil_2_t: "OTWARTY ŚWIAT",
        pil_2_d: "Trzy dzielnice stanu New State, każda z własną tożsamością wizualną i zasadami.",
        pil_3_t: "NIELINIOWA FABUŁA",
        pil_3_d: "Trudne wybory moralne i mroczna, egzystencjalna narracja o ludziach po wojnie z AI.",
        pil_4_t: "WINDOWS I LINUX",
        pil_4_d: "Gra na PC z natywnym wsparciem Linuxa oraz uruchamianiem przez Proton.",
        districts_heading: "TRZY DZIELNICE NEW STATE",
        d_1_tag: "ZŁOMOWISKO // STREFA PRZEMYSŁOWA",
        d_1_desc: "Przemysłowe złomowisko pełne wraków maszyn z czasów wojny z AI. Rdza, pył i metal, który pamięta konflikt.",
        d_1_pal: "PALETA // RDZA, PYŁ, STAL",
        d_2_tag: "SZARE OSIEDLA // WIELKA PŁYTA",
        d_2_desc: "Szare bloki z wielkiej płyty, surowy beton i gęsta sieć chodników dla NPC. Dom Kaela Crossa.",
        d_2_pal: "PALETA // BETON, SZAROŚĆ, CIEŃ",
        d_3_tag: "SZKLANE WIEŻOWCE // SIEDZIBA VELENA",
        d_3_desc: "Sterylne, elitarne szklane wieżowce i siedziba Velena. Bez sektorowej wizy wstęp zamknięty, także dla Kaela.",
        d_3_pal: "PALETA // SZKŁO, CHROM, BIEL",
        rm_progress: "POSTĘP FAZY",
        rm_lg_done: "UKOŃCZONE",
        rm_lg_wip: "W TRAKCIE",
        rm_lg_todo: "ZAPLANOWANE",
        stack_heading: "STOS TECHNOLOGICZNY",
        lb_close: "ZAMKNIJ [ESC]"
    },
    en: {
        page_title: "THORNE INTERACTIVE // OFFICIAL AUTEUR STUDIO",
        page_desc: "Thorne Interactive - Independent Auteur Game Studio. Unreal Engine 5, C++, no censorship.",
        skip_link: "SKIP TO CONTENT",
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
        hero_tagline: "AUTEUR GAME STUDIO // UNREAL ENGINE 5 & C++",
        hero_sub: "Stepping into a space where technology meets brutal, uncompromising auteur storytelling.",
        btn_explore: "EXPLORE PROJECT",
        btn_roadmap: "ROADMAP 2026-2028",
        scroll_down: "SCROLL // DISCOVER TRUTH",
        cd_title: "SYSTEM TIMER // TARGET: GODKILLER RELEASE (WINTER 2028)",
        cd_years: "YEARS",
        cd_months: "MONTHS",
        cd_days: "DAYS",
        cd_hours: "HOURS",
        cd_minutes: "MINUTES",
        cd_seconds: "SECONDS",
        about_heading: "STUDIO PHILOSOPHY",
        about_subhead: "WE ARE NOT A CORPORATION. WE ARE AUTEURS.",
        about_p1: "Thorne Interactive was born out of a rebellion against sterile, calculated mass production in modern gamedev. We focus on crafting mature experiences where gameplay mechanics intertwine tightly with heavy, existential narratives.",
        about_p2: "Our projects are built in Unreal Engine 5 using optimized C++ code by a passionate team in Poland. We take no shortcuts, enforce no artificial censorship, and bend to no market trends.",
        stat_1: "FLAGSHIP PROJECT (GODKILLER)",
        stat_2: "ENGINE (C++ / BLUEPRINTS)",
        stat_3: "INDEPENDENT AUTEUR VISION",
        project_heading: "FLAGSHIP PROJECT: GODKILLER",
        badge_dev_status: "PRE-ALPHA STAGE // IN DEVELOPMENT",
        project_desc: "Set in the New State (NS) post-AI-war world inspired by New York and Manhattan. Three distinct districts: industrial Rusty Lands, gritty Lowtown, and sterile Vanguard ruled by Velen.",
        feat_1: "Unforgiving physics-driven combat system powered by Unreal Engine 5 and C++.",
        feat_2: "Brutal, non-linear storyline featuring difficult moral choices.",
        feat_3: "Zero-cost distribution via itch.io (PC Windows & Linux/Proton support).",
        meta_engine: "ENGINE",
        meta_platform: "PLATFORM",
        meta_setting: "SETTING",
        meta_setting_val: "New State (NS) // Post-AI Wars",
        meta_world: "WORLD",
        meta_world_val: "Dystopian theater (Rusty Lands, Lowtown, Vanguard)",
        roadmap_heading: "DEVELOPMENT ROADMAP (2026-2028)",
        rm_curr_stage: "CURRENT PHASE: Q1 2026 [CONCEPT, C++ & UE5 SETUP]",
        rm_b_current: "ACTIVE (YOU ARE HERE)",
        rm_b_next: "UPCOMING",
        rm_b_plan: "PLANNED",
        rm_b_target: "TARGET RELEASE",
        rm_phase_1: "PHASE 01 // Q1 2026",
        rm_phase_2: "PHASE 02 // Q2 2026",
        rm_phase_3: "PHASE 03 // Q3 - Q4 2026",
        rm_phase_4: "PHASE 04 // 2027",
        rm_phase_5: "PHASE 05 // LAUNCH",
        rm_5_date: "LATE SUMMER / WINTER 2028",
        rm_1_title: "UE5 Initialization, C++ & Web Architecture",
        rm_1_desc: "Setting up Unreal Engine 5 environment and Visual Studio Community. Building Thorne Interactive web platform and foundational movement/logic code.",
        rm_1_c1: "[OK] Official Thorne Interactive Web Hub",
        rm_1_c2: "[OK] Unreal Engine 5 & Visual Studio Community setup",
        rm_1_c3: "[IN PROGRESS] Basic C++ movement scripts and map tests",
        rm_2_title: "C++ Combat System & Universe Lore",
        rm_2_desc: "Expanding combat mechanics in C++ (hit detection, damage, stamina). Main storyline plotting and location prototyping in New State.",
        rm_2_c1: "[ ] C++ melee hits and weapon collision coding",
        rm_2_c2: "[ ] Storyline script (Kael Cross vs Velen)",
        rm_2_c3: "[ ] Asset and manikin animation integration",
        rm_3_title: "World Expansion & Shader Graph",
        rm_3_desc: "Crafting 3D models, refining gritty environment of Rusty Lands, Lowtown, and Vanguard districts. Performance optimization tests in UE5.",
        rm_3_c1: "[ ] Advanced shaders and Unreal materials",
        rm_3_c2: "[ ] Performance tests on Linux / Garuda architecture",
        rm_3_c3: "[ ] Industrial audio design and goo chamber SFX",
        rm_4_title: "Playable Teaser & Optimization",
        rm_4_desc: "Assembling game demo build. Preparing free release of the Playable Teaser on itch.io platform.",
        rm_4_c1: "[ ] Playable Teaser test build on itch.io",
        rm_4_c2: "[ ] C++ bug fixes and frame rate (FPS) stabilization",
        rm_4_c3: "[ ] Community stress testing",
        rm_5_title: "GODKILLER Game Release (PC / itch.io)",
        rm_5_desc: "Official release of GODKILLER on PC supporting Windows and Linux. No censorship, pure auteur vision.",
        rm_5_c1: "[ ] Full release build on itch.io (0 publisher budget)",
        rm_5_c2: "[ ] Dedicated Linux/Proton player support",
        media_heading: "MEDIA & ASSETS",
        filt_all: "ALL",
        filt_screens: "SCREENSHOTS",
        filt_art: "CONCEPT ART",
        m_cap_1: "Lumen lighting and structure test inside Unreal Engine 5.",
        m_cap_2: "Preliminary design of studio symbolism and visual identity.",
        specs_heading: "SYSTEM REQUIREMENTS (GODKILLER PROJECT)",
        th_spec: "PARAMETER",
        th_min: "MINIMUM (1080p / 30 FPS)",
        th_rec: "RECOMMENDED (1440p / 60 FPS)",
        td_os: "OPERATING SYSTEM",
        td_os_min: "Windows 10 / 11 (64-bit) or Linux (Garuda/Arch via Proton)",
        td_cpu: "PROCESSOR (CPU)",
        td_gpu: "GRAPHICS CARD (GPU)",
        td_ram: "RAM MEMORY",
        faq_heading: "FAQ",
        faq_q1: "What are the core narrative premises of Godkiller?",
        faq_a1: "The game is set in the New State (NS) after the AI wars within an open world split into Rusty Lands, Lowtown, and Vanguard.",
        faq_q2: "What engine and technology is used to build the game?",
        faq_a2: "Godkiller is developed in Unreal Engine 5 using custom C++ scripts, ensuring top performance and full control over the combat system.",
        faq_q3: "Where will the game be available?",
        faq_a3: "The launch and free Playable Teaser will be hosted on itch.io, allowing us to bypass high publishing costs entirely.",
        faq_q4: "When will the game be released?",
        faq_a4: "The launch is targeted for Late Summer / Winter 2028 on PC (Windows and Linux).",
        story_heading: "STORY & DEVELOPMENT PROCESS",
        story_subhead_1: "THE GODKILLER UNIVERSE & STORY",
        story_p1: "The New State (NS) world is a raw reality following the AI wars. Characters like Kael reside in Lowtown because they lack the sector visa required to enter elite Vanguard, where Velen reigns.",
        story_subhead_2: "HOW THE GAME IS MADE (DEV PROCESS)",
        story_p2: "The project is developed entirely independently in Poland using Unreal Engine 5 and pure C++. We utilize professional tools, Visual Studio, and Linux (Garuda) environments to ensure uncompromising stability.",
        stat_auteur_label: "NO ARTIFICIAL CENSORSHIP & COMPROMISES",
        story_subhead_3: "STUDIO STATUS",
        story_contact_desc: "The studio is in an active development phase. C++ source code and UE5 assets are progressively being developed.",
        footer_rights: "© 2026 THORNE INTERACTIVE. ALL RIGHTS RESERVED.",
        cd_progress: "ELAPSED SINCE PROJECT START",
        man_1: "NO SHORTCUTS.",
        man_2: "NO ARTIFICIAL CENSORSHIP.",
        man_3: "BENDING TO NO TRENDS.",
        pillars_heading: "CORE PILLARS",
        pil_1_t: "PHYSICS-DRIVEN COMBAT",
        pil_1_d: "Every strike carries weight. The C++ combat system handles weapon collisions, damage and stamina.",
        pil_2_t: "OPEN WORLD",
        pil_2_d: "Three districts of New State, each with its own visual identity and rules.",
        pil_3_t: "NON-LINEAR STORY",
        pil_3_d: "Difficult moral choices and a dark, existential narrative about people after the AI war.",
        pil_4_t: "WINDOWS & LINUX",
        pil_4_d: "A PC game with native Linux support and Proton compatibility.",
        districts_heading: "THREE DISTRICTS OF NEW STATE",
        d_1_tag: "SCRAPYARD // INDUSTRIAL ZONE",
        d_1_desc: "An industrial scrapyard filled with machine wrecks from the AI war. Rust, dust and metal that remembers the conflict.",
        d_1_pal: "PALETTE // RUST, DUST, STEEL",
        d_2_tag: "GREY ESTATES // CONCRETE BLOCKS",
        d_2_desc: "Grey prefab blocks, raw concrete and a dense web of sidewalks for NPCs. Home of Kael Cross.",
        d_2_pal: "PALETTE // CONCRETE, GREY, SHADOW",
        d_3_tag: "GLASS TOWERS // VELEN'S HQ",
        d_3_desc: "Sterile, elite glass skyscrapers and Velen's headquarters. Without a sector visa entry is barred, Kael included.",
        d_3_pal: "PALETTE // GLASS, CHROME, WHITE",
        rm_progress: "PHASE PROGRESS",
        rm_lg_done: "COMPLETED",
        rm_lg_wip: "IN PROGRESS",
        rm_lg_todo: "PLANNED",
        stack_heading: "TECH STACK",
        lb_close: "CLOSE [ESC]"
    }
};


/* ==========================================================================
   LOGIKA STRONY (i18n, zegar, tło canvas, boot, animacje, roadmapa, lightbox)
   ========================================================================== */

const LANG_STORAGE_KEY = 'thorne_lang';
const BOOT_STORAGE_KEY = 'thorne_boot_seen';
const DEFAULT_LANG = 'pl';
const I18N_ATTRIBUTES = ['alt', 'aria-label', 'placeholder', 'title'];
const PROJECT_START = new Date('2026-01-01T00:00:00').getTime();
const LAUNCH_DATE = new Date('2028-12-21T00:00:00');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (err) { return null; }
}
function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); return true; } catch (err) { return false; }
}
function sessionGet(key) {
    try { return window.sessionStorage.getItem(key); } catch (err) { return null; }
}
function sessionSet(key, value) {
    try { window.sessionStorage.setItem(key, value); } catch (err) { /* ignoruj */ }
}
function isSupportedLang(lang) {
    return Object.prototype.hasOwnProperty.call(translations, lang);
}

/* ---------- ZEGAR DO PREMIERY ---------- */
function initCountdown() {
    const ids = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    const els = {};
    ids.forEach(id => { els[id] = document.getElementById('cd-' + id); });
    if (!els.years) return;

    const progressBar = document.getElementById('cd-progress-bar');
    const progressVal = document.getElementById('cd-progress-val');
    const last = {};
    let firstRun = true;

    function setVal(id, value) {
        const text = String(Math.max(0, value)).padStart(2, '0');
        if (last[id] === text) return;
        last[id] = text;
        const el = els[id];
        el.textContent = text;
        if (!firstRun && !prefersReducedMotion) {
            el.classList.remove('tick');
            void el.offsetWidth; // restart animacji
            el.classList.add('tick');
        }
    }

    function update() {
        const nowMs = Date.now();
        const now = new Date(nowMs);
        const target = LAUNCH_DATE;

        if (target.getTime() - nowMs <= 0) {
            ids.forEach(id => setVal(id, 0));
        } else {
            let years = target.getFullYear() - now.getFullYear();
            let months = target.getMonth() - now.getMonth();
            let days = target.getDate() - now.getDate();
            let hours = target.getHours() - now.getHours();
            let minutes = target.getMinutes() - now.getMinutes();
            let seconds = target.getSeconds() - now.getSeconds();

            if (seconds < 0) { seconds += 60; minutes--; }
            if (minutes < 0) { minutes += 60; hours--; }
            if (hours < 0) { hours += 24; days--; }
            if (days < 0) {
                months--;
                days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
            }
            if (months < 0) { years--; months += 12; }

            setVal('years', years);
            setVal('months', months);
            setVal('days', days);
            setVal('hours', hours);
            setVal('minutes', minutes);
            setVal('seconds', seconds);
        }

        const total = target.getTime() - PROJECT_START;
        const pct = Math.min(100, Math.max(0, ((nowMs - PROJECT_START) / total) * 100));
        if (progressBar) progressBar.style.width = pct.toFixed(2) + '%';
        if (progressVal) progressVal.textContent = pct.toFixed(1) + '%';
        firstRun = false;
    }

    // pasek postępu animuje się od zera przy starcie
    if (progressBar) progressBar.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(update));
    update();
    setInterval(update, 1000);
}

/* ---------- TŁO: EMBERY, PYŁ, SIATKA ---------- */
function initBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, particles = [];
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let running = true;
    let lastTime = 0;

    function spawn(initial) {
        const z = Math.random();
        return {
            x: Math.random() * w,
            y: initial ? Math.random() * h : h + 12,
            z: z,
            r: 0.6 + z * 1.8,
            vy: -(8 + z * 34),
            vx: (Math.random() - 0.5) * 10,
            ph: Math.random() * Math.PI * 2,
            hot: Math.random() < 0.38
        };
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.round(Math.min(110, (w * h) / 16000));
        particles = Array.from({ length: count }, () => spawn(true));
        if (prefersReducedMotion) draw(0);
    }

    function draw(dt) {
        ctx.clearRect(0, 0, w, h);

        mouse.x += (mouse.tx - mouse.x) * 0.04;
        mouse.y += (mouse.ty - mouse.y) * 0.04;
        const ox = (mouse.x - 0.5) * 30;
        const oy = (mouse.y - 0.5) * 30;

        // delikatna siatka
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255,255,255,0.028)';
        const step = 90;
        ctx.beginPath();
        for (let x = (ox % step) - step; x < w + step; x += step) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
        for (let y = (oy % step) - step; y < h + step; y += step) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
        ctx.stroke();

        // cząsteczki
        const t = performance.now() / 1000;
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.y += p.vy * dt;
            p.x += (p.vx + Math.sin(t * 0.8 + p.ph) * 8) * dt;
            if (p.y < -12 || p.x < -12 || p.x > w + 12) {
                particles[i] = spawn(false);
                particles[i].x = Math.random() * w;
                continue;
            }
            const px = p.x + ox * p.z;
            const py = p.y + oy * p.z;
            const flick = 0.55 + Math.sin(t * 3 + p.ph * 5) * 0.25;
            if (p.hot) {
                ctx.fillStyle = 'rgba(' + Math.round(190 + p.z * 65) + ',' + Math.round(190 + p.z * 65) + ',' + Math.round(190 + p.z * 65) + ',' + (0.35 + p.z * 0.5) * flick + ')';
                ctx.shadowColor = 'rgba(255,255,255,0.8)';
                ctx.shadowBlur = 6 + p.z * 8;
            } else {
                ctx.fillStyle = 'rgba(200,200,200,' + (0.10 + p.z * 0.22) + ')';
                ctx.shadowBlur = 0;
            }
            ctx.beginPath();
            ctx.arc(px, py, p.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.shadowBlur = 0;

        // linie łączące bliskie żarzące się cząsteczki
        ctx.lineWidth = 0.6;
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            if (!a.hot) continue;
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                if (!b.hot) continue;
                const dx = a.x - b.x, dy = a.y - b.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < 9000) {
                    ctx.strokeStyle = 'rgba(255,255,255,' + (0.12 * (1 - d2 / 9000)) + ')';
                    ctx.beginPath();
                    ctx.moveTo(a.x + ox * a.z, a.y + oy * a.z);
                    ctx.lineTo(b.x + ox * b.z, b.y + oy * b.z);
                    ctx.stroke();
                }
            }
        }
    }

    function frame(now) {
        if (!running) return;
        const dt = Math.min(0.05, (now - lastTime) / 1000 || 0.016);
        lastTime = now;
        draw(dt);
        requestAnimationFrame(frame);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', (e) => {
        mouse.tx = e.clientX / window.innerWidth;
        mouse.ty = e.clientY / window.innerHeight;
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        if (prefersReducedMotion) return;
        running = !document.hidden;
        if (running) { lastTime = performance.now(); requestAnimationFrame(frame); }
    });

    resize();
    if (!prefersReducedMotion) requestAnimationFrame(frame);
}

/* ---------- EKRAN STARTOWY ---------- */
function initBoot(onDone) {
    const boot = document.getElementById('boot');
    const log = document.getElementById('boot-log');
    const fill = document.getElementById('boot-bar-fill');
    if (!boot || !log) { onDone(); return; }

    if (prefersReducedMotion || sessionGet(BOOT_STORAGE_KEY)) {
        boot.remove();
        onDone();
        return;
    }

    const lines = [
        '> THORNE_INTERACTIVE // BOOT SEQUENCE v6.0',
        '> mounting unreal_engine_5 ........ <span class="dim">[OK]</span>',
        '> linking c++ core ................ <span class="dim">[OK]</span>',
        '> loading new_state (NS) .......... <span class="dim">[OK]</span>',
        '> districts: rusty_lands / lowtown / vanguard',
        '> SYSTEM READY. WELCOME.'
    ];
    let i = 0;
    let finished = false;

    function finish() {
        if (finished) return;
        finished = true;
        sessionSet(BOOT_STORAGE_KEY, '1');
        boot.classList.add('done');
        setTimeout(() => boot.remove(), 800);
        onDone();
    }

    function next() {
        if (finished) return;
        if (i < lines.length) {
            log.innerHTML += lines[i] + '\n';
            i++;
            if (fill) fill.style.width = Math.round((i / lines.length) * 100) + '%';
            setTimeout(next, 230);
        } else {
            setTimeout(finish, 350);
        }
    }

    boot.addEventListener('click', finish);
    document.addEventListener('keydown', finish, { once: true });
    next();
}

/* ---------- ANIMACJE PRZY PRZEWIJANIU ---------- */
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
        items.forEach(el => el.classList.add('is-visible'));
        animateCounters(true);
        updateRoadmapProgress(true);
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target.classList.contains('roadmap-card')) {
                    const fill = entry.target.querySelector('.rm-progress-fill');
                    if (fill) fill.style.width = fill.dataset.target || '0%';
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => observer.observe(el));

    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                counterObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));
}

function runCounter(el) {
    const end = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function animateCounters(instant) {
    document.querySelectorAll('[data-count]').forEach(el => {
        el.textContent = (el.getAttribute('data-count') || '0') + (el.getAttribute('data-suffix') || '');
    });
}

/* ---------- ROADMAPA: POSTĘP FAZ LICZONY Z CHECKLIST ---------- */
function updateRoadmapProgress(instant) {
    document.querySelectorAll('.roadmap-card').forEach(card => {
        const items = card.querySelectorAll('.rm-checklist li');
        if (!items.length) return;
        let score = 0;
        items.forEach(li => {
            if (li.classList.contains('done')) score += 1;
            else if (li.classList.contains('in-progress')) score += 0.5;
        });
        const pct = Math.round((score / items.length) * 100);
        const fill = card.querySelector('.rm-progress-fill');
        const val = card.querySelector('.rm-progress-val');
        if (val) val.textContent = pct + '%';
        if (fill) {
            fill.dataset.target = pct + '%';
            if (instant) fill.style.width = pct + '%';
        }
    });
}

function initRoadmapLine() {
    const timeline = document.getElementById('roadmap-timeline');
    const fill = document.getElementById('rm-line-fill');
    if (!timeline || !fill) return;
    return function update() {
        const rect = timeline.getBoundingClientRect();
        const mid = window.innerHeight * 0.55;
        const progress = Math.min(rect.height, Math.max(0, mid - rect.top));
        fill.style.height = progress + 'px';
    };
}

/* ---------- INTERAKCJE: TILT, KURSOR, DZIELNICE, LIGHTBOX ---------- */
function initTilt() {
    if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = 'perspective(700px) rotateX(' + (-y * 6).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg) translateY(-3px)';
        });
        card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
}

function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow || !window.matchMedia('(hover: hover)').matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, active = false;
    window.addEventListener('pointermove', (e) => {
        tx = e.clientX; ty = e.clientY;
        if (!active) { active = true; x = tx; y = ty; glow.classList.add('on'); loop(); }
    }, { passive: true });
    document.addEventListener('pointerleave', () => glow.classList.remove('on'));
    function loop() {
        x += (tx - x) * 0.12;
        y += (ty - y) * 0.12;
        glow.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
        requestAnimationFrame(loop);
    }
}

function initDistricts() {
    const tabs = document.querySelectorAll('.district-tab');
    const panels = document.querySelectorAll('.district-panel');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const id = tab.getAttribute('data-district');
            tabs.forEach(t => {
                const on = t === tab;
                t.classList.toggle('active', on);
                t.setAttribute('aria-selected', String(on));
            });
            panels.forEach(p => p.classList.toggle('active', p.getAttribute('data-panel') === id));
        });
    });
}

function initLightbox() {
    const box = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-cap');
    const closeBtn = document.getElementById('lightbox-close');
    if (!box || !img) return;
    let lastFocus = null;

    function open(card) {
        const thumb = card.querySelector('.media-thumb');
        const desc = card.querySelector('.media-desc-text');
        if (!thumb) return;
        lastFocus = document.activeElement;
        img.src = thumb.getAttribute('src');
        img.alt = thumb.getAttribute('alt') || '';
        cap.textContent = desc ? desc.textContent : '';
        box.classList.add('active');
        box.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        if (closeBtn) closeBtn.focus();
    }
    function close() {
        box.classList.remove('active');
        box.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll('.media-card').forEach(card => {
        card.addEventListener('click', () => open(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
        });
    });
    box.addEventListener('click', (e) => { if (e.target === box) close(); });
    if (closeBtn) closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && box.classList.contains('active')) close();
    });
}

/* ---------- GŁÓWNA INICJALIZACJA ---------- */
function initSite() {
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
            if (dict[key] !== undefined) element.textContent = dict[key];
        });

        I18N_ATTRIBUTES.forEach(attr => {
            document.querySelectorAll('[data-i18n-' + attr + ']').forEach(element => {
                const key = element.getAttribute('data-i18n-' + attr);
                if (dict[key] !== undefined) element.setAttribute(attr, dict[key]);
            });
        });

        updateLangButton();
    }

    setLanguage(activeLang);
    updateRoadmapProgress(prefersReducedMotion);

    // jeśli IntersectionObserver nie istnieje / reduced motion, initReveal ustawi stan od razu
    initBackground();
    initBoot(() => {
        initCountdown();
        initReveal();
    });
    initTilt();
    initCursorGlow();
    initDistricts();
    initLightbox();

    document.addEventListener('click', (event) => {
        if (event.target.closest('#language-toggle-btn')) {
            setLanguage(activeLang === 'pl' ? 'en' : 'pl');
        }
    });

    /* menu mobilne */
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
        mobileLinks.forEach(link => link.addEventListener('click', () => setMenuState(false)));
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setMenuState(false);
        });
    }

    /* filtry mediów */
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

    /* scroll: pasek postępu, nagłówek, scrollspy, parallax, linia roadmapy */
    const header = document.getElementById('top-header');
    const progressBar = document.getElementById('scroll-progress');
    const progressText = document.getElementById('scroll-progress-text');
    const backToTop = document.getElementById('back-to-top');
    const heroBg = document.getElementById('hero-bg');
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    const spySections = navItems
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
    const updateRoadmapLine = initRoadmapLine();
    let scrollTicking = false;

    function onScrollFrame() {
        const y = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((y / maxScroll) * 100))) : 0;

        if (header) header.classList.toggle('is-scrolled', y > 40);
        if (progressBar) progressBar.style.width = percent + '%';
        if (progressText) progressText.textContent = percent + '%';
        if (backToTop) backToTop.classList.toggle('visible', y > 500);

        if (heroBg && !prefersReducedMotion && y < window.innerHeight * 1.2) {
            heroBg.style.transform = 'translateY(' + (y * 0.18).toFixed(1) + 'px)';
        }

        // scrollspy
        let currentIndex = -1;
        spySections.forEach((sec, idx) => {
            if (sec.getBoundingClientRect().top <= window.innerHeight * 0.35) currentIndex = idx;
        });
        navItems.forEach((a, idx) => a.classList.toggle('is-active', idx === currentIndex));

        if (updateRoadmapLine) updateRoadmapLine();
        scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            scrollTicking = true;
            window.requestAnimationFrame(onScrollFrame);
        }
    }, { passive: true });
    window.addEventListener('resize', onScrollFrame);
    onScrollFrame();

    console.log('%c THORNE INTERACTIVE %c v6.0 // Unreal Engine 5 & C++ Core (Target: 2028) ', 'background:#000;color:#fff;font-weight:bold;padding:4px;', 'background:#111;color:#b0b0b0;padding:4px;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
} else {
    initSite();
}