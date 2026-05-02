// ===== Language Switching System =====
let currentLang = 'en';

const translations = {
    en: {
        // Nav
        nav_home: 'Home',
        nav_catalog: 'Catalog',
        nav_report_lost: 'Report Lost',
        nav_report_found: 'Report Found',
        nav_pricing: 'Pricing',
        nav_report_item: 'Report Item',

        // Hero
        hero_badge: '12,847 items reunited this month',
        hero_title_1: 'Lost it?',
        hero_title_2: "We'll find it.",
        hero_subtitle: "The world's largest lost & found network. Report, search, and reunite with your belongings — powered by a global community.",
        hero_btn_lost: 'I Lost Something',
        hero_btn_found: 'I Found Something',
        hero_stat_items: 'Items Listed',
        hero_stat_countries: 'Countries',
        hero_stat_rate: 'Reunion Rate',
        hero_card_wallet: 'Wallet Found!',
        hero_card_wallet_sub: 'Paris, France • 2min ago',
        hero_card_match: 'New Match',
        hero_card_match_sub: 'Your report has a match!',

        // How It Works
        hiw_badge: 'HOW IT WORKS',
        hiw_title: 'Three simple steps',
        hiw_subtitle: "Whether you've lost or found something, our process makes reuniting items with their owners seamless.",
        hiw_step1_label: 'STEP 1',
        hiw_step1_title: 'Report Your Item',
        hiw_step1_desc: 'Describe what you lost or found, add photos, and specify the location and date. Takes under 2 minutes.',
        hiw_step2_label: 'STEP 2',
        hiw_step2_title: 'AI Matches Items',
        hiw_step2_desc: 'Our intelligent system matches lost items with found reports, comparing descriptions, photos, and locations.',
        hiw_step3_label: 'STEP 3',
        hiw_step3_title: 'Get Reunited',
        hiw_step3_desc: 'Connect with the finder or owner through our secure messaging system and arrange the handoff.',

        // Search
        search_placeholder: 'Search lost & found items...',
        search_hint: 'Start typing to search items worldwide',
    },
    ru: {
        // Nav
        nav_home: 'Главная',
        nav_catalog: 'Каталог',
        nav_report_lost: 'Потерял',
        nav_report_found: 'Нашёл',
        nav_pricing: 'Тарифы',
        nav_report_item: 'Заявить',

        // Hero
        hero_badge: '12 847 вещей возвращены в этом месяце',
        hero_title_1: 'Потеряли?',
        hero_title_2: 'Мы найдём.',
        hero_subtitle: 'Крупнейшая в мире сеть потерянных и найденных вещей. Сообщайте, ищите и возвращайте свои вещи — вместе с глобальным сообществом.',
        hero_btn_lost: 'Я потерял вещь',
        hero_btn_found: 'Я нашёл вещь',
        hero_stat_items: 'Вещей в базе',
        hero_stat_countries: 'Стран',
        hero_stat_rate: 'Возвратов',
        hero_card_wallet: 'Кошелёк найден!',
        hero_card_wallet_sub: 'Париж, Франция • 2 мин назад',
        hero_card_match: 'Новое совпадение',
        hero_card_match_sub: 'Найдено совпадение с вашей заявкой!',

        // How It Works
        hiw_badge: 'КАК ЭТО РАБОТАЕТ',
        hiw_title: 'Три простых шага',
        hiw_subtitle: 'Потеряли или нашли что-то? Наш процесс делает возврат вещей владельцам простым и удобным.',
        hiw_step1_label: 'ШАГ 1',
        hiw_step1_title: 'Заявите о вещи',
        hiw_step1_desc: 'Опишите, что вы потеряли или нашли, добавьте фото, укажите место и дату. Занимает меньше 2 минут.',
        hiw_step2_label: 'ШАГ 2',
        hiw_step2_title: 'ИИ находит совпадения',
        hiw_step2_desc: 'Наша умная система сопоставляет потерянные вещи с найденными, сравнивая описания, фото и местоположение.',
        hiw_step3_label: 'ШАГ 3',
        hiw_step3_title: 'Верните вещь',
        hiw_step3_desc: 'Свяжитесь с нашедшим или владельцем через нашу безопасную систему сообщений и договоритесь о передаче.',

        // Search
        search_placeholder: 'Поиск потерянных и найденных вещей...',
        search_hint: 'Начните вводить для поиска вещей по всему миру',
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    applyLanguage();
}

function applyLanguage() {
    const lang = translations[currentLang];
    if (!lang) return;

    // Update text content for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key] !== undefined) {
            el.textContent = lang[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (lang[key] !== undefined) {
            el.placeholder = lang[key];
        }
    });

    // Update lang toggle label
    const label = document.getElementById('lang-label');
    if (label) {
        label.textContent = currentLang === 'en' ? 'RU' : 'EN';
    }

    // Update html lang attribute
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'ru';

    // Store preference
    try { localStorage.setItem('reunite-lang', currentLang); } catch(e) {}
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', () => {
    try {
        const saved = localStorage.getItem('reunite-lang');
        if (saved && translations[saved]) {
            currentLang = saved;
            applyLanguage();
        }
    } catch(e) {}
});
