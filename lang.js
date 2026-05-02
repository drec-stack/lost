// ===== Language Switching System =====
let currentLang = 'en';
let isApplyingLanguage = false;

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
        hiw_step1_label: 'STEP 01',
        hiw_step1_title: 'Report Your Item',
        hiw_step1_desc: 'Describe what you lost or found, add photos, and specify the location and date. Takes under 2 minutes.',
        hiw_step2_label: 'STEP 02',
        hiw_step2_title: 'AI Matches Items',
        hiw_step2_desc: 'Our intelligent system matches lost items with found reports, comparing descriptions, photos, and locations.',
        hiw_step3_label: 'STEP 03',
        hiw_step3_title: 'Get Reunited',
        hiw_step3_desc: 'Connect with the finder or owner through our secure messaging system and arrange the handoff.',

        // Search
        search_placeholder: 'Search lost & found items...',
        search_hint: 'Start typing to search items worldwide',
        search_no_results: 'No results found for',

        // Recent Activity / Catalog Cards
        recent_badge: 'RECENTLY REUNITED',
        recent_title: 'Happy reunions, happening daily',
        recent_subtitle: 'Real stories of items that found their way back to their owners through Reunite.',
        item_status_reunited: 'Reunited',
        item_status_lost: 'Lost',
        item_status_found: 'Found',
        item_reunited: 'Reunited',
        item_lost: 'Lost',
        item_found: 'Found',
        days_ago: 'days ago',
        hours_ago: 'hours ago',
        week_ago: 'week ago',
        weeks_ago: 'weeks ago',

        // Testimonials
        testimonials_badge: 'TESTIMONIALS',
        testimonials_title: 'Loved by thousands',
        testimonial_1_text: 'I couldn\'t believe it when someone found my lost drone! Reunite\'s community is amazing.',
        testimonial_2_text: 'We found a lost cat and within hours the owner contacted us. This site is magical!',
        testimonial_3_text: 'My wallet was returned with all my cards and cash. I\'m forever grateful to Reunite.',
        testimonial_1_name: 'Alex K.',
        testimonial_2_name: 'Maria S.',
        testimonial_3_name: 'John D.',
        testimonial_1_loc: 'Berlin, Germany',
        testimonial_2_loc: 'Paris, France',
        testimonial_3_loc: 'New York, USA',

        // CTA
        cta_title: 'Ready to find what\'s lost?',
        cta_subtitle: 'Join millions who have reunited with their belongings. It\'s fast, free, and easy.',
        cta_btn: 'Report Lost Item',

        // Catalog Page
        catalog_title: 'Lost & Found Catalog',
        catalog_subtitle: 'Browse reported items worldwide. Use filters to find matches.',
        catalog_search_placeholder: 'Search by title or location...',
        catalog_filter_all: 'All Items',
        catalog_filter_lost: 'Lost',
        catalog_filter_found: 'Found',
        catalog_filter_reunited: 'Reunited',
        catalog_empty: 'No items match your filters.',

        // Report Lost Form
        report_lost_title: 'Report a Lost Item',
        report_lost_subtitle: 'Provide details to help the community find your lost item.',
        form_title: 'Item Title *',
        form_title_placeholder: 'e.g., Brown leather wallet',
        form_description: 'Description',
        form_desc_placeholder: 'Brand, color, distinguishing features...',
        form_location: 'Location',
        form_location_placeholder: 'e.g., Central Park, New York',
        form_date: 'Date Lost',
        form_date_placeholder: 'Select date',
        form_category: 'Category',
        form_image_url: 'Image URL (optional)',
        form_image_placeholder: 'https://example.com/photo.jpg',
        form_submit_lost: 'Report Lost Item',
        form_submit_found: 'Report Found Item',
        cat_electronics: 'Electronics',
        cat_pets: 'Pets',
        cat_documents: 'Documents',
        cat_clothing: 'Clothing',
        cat_other: 'Other',

        // Report Found Form
        report_found_title: 'Report a Found Item',
        report_found_subtitle: 'Provide details to help return the item to its owner.',
        form_date_found: 'Date Found',

        // Modal
        modal_contact: 'Contact Owner / Finder',
        modal_close: 'Close',

        // Pricing
        pricing_badge: 'PRICING',
        pricing_title: 'Choose your plan',
        pricing_subtitle: 'Start for free, upgrade as you grow.',
        plan_free_name: 'Free',
        plan_free_desc: 'For individuals testing the waters.',
        plan_free_feature1: '1 item listing per month',
        plan_free_feature2: 'Basic matching',
        plan_free_feature3: 'Community support',
        plan_pro_name: 'Pro',
        plan_pro_desc: 'For active finders and seekers.',
        plan_pro_feature1: 'Up to 5 item listings per month',
        plan_pro_feature2: 'Priority matching',
        plan_pro_feature3: 'Enhanced photos',
        plan_pro_feature4: 'Email notifications',
        plan_enterprise_name: 'Enterprise',
        plan_enterprise_desc: 'For organizations and high volume.',
        plan_enterprise_feature1: 'Unlimited listings',
        plan_enterprise_feature2: 'API access',
        plan_enterprise_feature3: 'Dedicated support',
        plan_enterprise_feature4: 'Custom branding',
        plan_select: 'Get Started',
        plan_select_pro: 'Choose Pro',
        plan_select_enterprise: 'Contact Sales',
        popular_badge: 'MOST POPULAR',

        // Toast messages
        toast_lost_success: 'Lost item reported successfully!',
        toast_found_success: 'Found item reported successfully!',
        toast_enter_title: 'Please enter a title.',
        toast_message_sent: 'Message sent to the owner/finder!',
        
        // Search placeholder in catalog
        search_catalog_placeholder: 'Search by title or location...',
        
        // No results
        no_results: 'No items match your filters.',
        
        // Status
        status_reunited: 'Reunited',
        status_lost: 'Lost',
        status_found: 'Found',
        
        // Map dots tooltips
        map_tooltip_1: '23 items found',
        map_tooltip_2: '45 items found',
        map_tooltip_3: '12 items found',
        map_tooltip_4: '67 items found',
        
        // Footer / additional
        all_rights_reserved: 'All rights reserved',
        
        // Language toggle
        lang_switch: 'Switch language',
        lang_en: 'EN',
        lang_ru: 'RU'
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
        hiw_step1_label: 'ШАГ 01',
        hiw_step1_title: 'Заявите о вещи',
        hiw_step1_desc: 'Опишите, что вы потеряли или нашли, добавьте фото, укажите место и дату. Занимает меньше 2 минут.',
        hiw_step2_label: 'ШАГ 02',
        hiw_step2_title: 'ИИ находит совпадения',
        hiw_step2_desc: 'Наша умная система сопоставляет потерянные вещи с найденными, сравнивая описания, фото и местоположение.',
        hiw_step3_label: 'ШАГ 03',
        hiw_step3_title: 'Верните вещь',
        hiw_step3_desc: 'Свяжитесь с нашедшим или владельцем через нашу безопасную систему сообщений и договоритесь о передаче.',

        // Search
        search_placeholder: 'Поиск потерянных и найденных вещей...',
        search_hint: 'Начните вводить для поиска вещей по всему миру',
        search_no_results: 'Ничего не найдено по запросу',

        // Recent Activity / Catalog Cards
        recent_badge: 'НЕДАВНО ВОЗВРАЩЕНО',
        recent_title: 'Счастливые возвращения каждый день',
        recent_subtitle: 'Реальные истории вещей, которые нашли свой путь обратно к владельцам с помощью Reunite.',
        item_status_reunited: 'Возвращено',
        item_status_lost: 'Потеряно',
        item_status_found: 'Найдено',
        item_reunited: 'Возвращено',
        item_lost: 'Потеряно',
        item_found: 'Найдено',
        days_ago: 'дней назад',
        hours_ago: 'часов назад',
        week_ago: 'неделю назад',
        weeks_ago: 'недель назад',

        // Testimonials
        testimonials_badge: 'ОТЗЫВЫ',
        testimonials_title: 'Тысячи довольных пользователей',
        testimonial_1_text: 'Я не мог поверить, когда кто-то нашёл мой потерянный дрон! Сообщество Reunite потрясающее.',
        testimonial_2_text: 'Мы нашли пропавшего кота, и через несколько часов владелец связался с нами. Этот сайт — чудо!',
        testimonial_3_text: 'Мой бумажник вернули со всеми картами и деньгами. Я навсегда благодарен Reunite.',
        testimonial_1_name: 'Алексей К.',
        testimonial_2_name: 'Мария С.',
        testimonial_3_name: 'Джон Д.',
        testimonial_1_loc: 'Берлин, Германия',
        testimonial_2_loc: 'Париж, Франция',
        testimonial_3_loc: 'Нью-Йорк, США',

        // CTA
        cta_title: 'Готовы найти потерянное?',
        cta_subtitle: 'Присоединяйтесь к миллионам, кто уже вернул свои вещи. Быстро, бесплатно и просто.',
        cta_btn: 'Сообщить о потере',

        // Catalog Page
        catalog_title: 'Каталог потерянных и найденных вещей',
        catalog_subtitle: 'Просматривайте заявки со всего мира. Используйте фильтры для поиска совпадений.',
        catalog_search_placeholder: 'Поиск по названию или городу...',
        catalog_filter_all: 'Все вещи',
        catalog_filter_lost: 'Потерянные',
        catalog_filter_found: 'Найденные',
        catalog_filter_reunited: 'Возвращённые',
        catalog_empty: 'Нет вещей, соответствующих фильтрам.',

        // Report Lost Form
        report_lost_title: 'Сообщить о потере',
        report_lost_subtitle: 'Опишите потерянную вещь, чтобы сообщество помогло её найти.',
        form_title: 'Название *',
        form_title_placeholder: 'Например: Коричневый кожаный кошелёк',
        form_description: 'Описание',
        form_desc_placeholder: 'Бренд, цвет, особые приметы...',
        form_location: 'Местоположение',
        form_location_placeholder: 'Например: Центральный парк, Нью-Йорк',
        form_date: 'Дата потери',
        form_date_placeholder: 'Выберите дату',
        form_category: 'Категория',
        form_image_url: 'Ссылка на фото (необязательно)',
        form_image_placeholder: 'https://example.com/photo.jpg',
        form_submit_lost: 'Сообщить о потере',
        form_submit_found: 'Сообщить о находке',
        cat_electronics: 'Электроника',
        cat_pets: 'Животные',
        cat_documents: 'Документы',
        cat_clothing: 'Одежда',
        cat_other: 'Другое',

        // Report Found Form
        report_found_title: 'Сообщить о находке',
        report_found_subtitle: 'Опишите найденную вещь, чтобы вернуть её владельцу.',
        form_date_found: 'Дата находки',

        // Modal
        modal_contact: 'Связаться с владельцем / нашедшим',
        modal_close: 'Закрыть',

        // Pricing
        pricing_badge: 'ТАРИФЫ',
        pricing_title: 'Выберите план',
        pricing_subtitle: 'Начните бесплатно, расширяйтесь по мере роста.',
        plan_free_name: 'Бесплатный',
        plan_free_desc: 'Для тех, кто только пробует.',
        plan_free_feature1: '1 объявление в месяц',
        plan_free_feature2: 'Базовый поиск совпадений',
        plan_free_feature3: 'Поддержка сообщества',
        plan_pro_name: 'Про',
        plan_pro_desc: 'Для активных искателей.',
        plan_pro_feature1: 'До 5 объявлений в месяц',
        plan_pro_feature2: 'Приоритетный поиск',
        plan_pro_feature3: 'Улучшенные фото',
        plan_pro_feature4: 'Email-уведомления',
        plan_enterprise_name: 'Бизнес',
        plan_enterprise_desc: 'Для организаций и больших объёмов.',
        plan_enterprise_feature1: 'Неограниченные объявления',
        plan_enterprise_feature2: 'Доступ к API',
        plan_enterprise_feature3: 'Персональная поддержка',
        plan_enterprise_feature4: 'Брендирование',
        plan_select: 'Выбрать',
        plan_select_pro: 'Выбрать Pro',
        plan_select_enterprise: 'Связаться с продажами',
        popular_badge: 'САМЫЙ ПОПУЛЯРНЫЙ',

        // Toast messages
        toast_lost_success: 'Сообщение о потере отправлено!',
        toast_found_success: 'Сообщение о находке отправлено!',
        toast_enter_title: 'Пожалуйста, введите название.',
        toast_message_sent: 'Сообщение отправлено владельцу / нашедшему!',
        
        // Search placeholder in catalog
        search_catalog_placeholder: 'Поиск по названию или городу...',
        
        // No results
        no_results: 'Нет вещей, соответствующих фильтрам.',
        
        // Status
        status_reunited: 'Возвращено',
        status_lost: 'Потеряно',
        status_found: 'Найдено',
        
        // Map dots tooltips
        map_tooltip_1: '23 найдено вещей',
        map_tooltip_2: '45 найдено вещей',
        map_tooltip_3: '12 найдено вещей',
        map_tooltip_4: '67 найдено вещей',
        
        // Footer / additional
        all_rights_reserved: 'Все права защищены',
        
        // Language toggle
        lang_switch: 'Сменить язык',
        lang_en: 'EN',
        lang_ru: 'RU'
    }
};

function toggleLanguage() {
    if (isApplyingLanguage) return;
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    applyLanguage();
    // Store preference
    try { localStorage.setItem('reunite-lang', currentLang); } catch(e) {}
}

function applyLanguage() {
    if (isApplyingLanguage) return;
    isApplyingLanguage = true;
    
    const lang = translations[currentLang];
    if (!lang) {
        isApplyingLanguage = false;
        return;
    }

    // Update text content for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key] !== undefined && lang[key] !== null) {
            el.textContent = lang[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (lang[key] !== undefined && lang[key] !== null) {
            el.placeholder = lang[key];
        }
    });

    // Update select options with data-i18n
    document.querySelectorAll('option[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key] !== undefined && lang[key] !== null) {
            el.textContent = lang[key];
        }
    });

    // Update lang toggle label
    const label = document.getElementById('lang-label');
    if (label) {
        label.textContent = currentLang === 'en' ? 'RU' : 'EN';
    }

    // Update html lang attribute
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'ru';

    // Update popular badge in pricing
    const popularBadges = document.querySelectorAll('.popular-badge-text');
    popularBadges.forEach(badge => {
        if (lang.popular_badge) badge.textContent = lang.popular_badge;
    });

    // Update plan select buttons text
    const proSelectBtn = document.querySelector('#page-pricing .btn-premium');
    if (proSelectBtn && lang.plan_select_pro) {
        const span = proSelectBtn.querySelector('span');
        if (span) span.textContent = lang.plan_select_pro;
    }

    // Re-init icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Re-render catalog if open to update item status texts
    const catalogPage = document.getElementById('page-catalog');
    if (catalogPage && catalogPage.classList.contains('active') && typeof renderCatalog === 'function') {
        renderCatalog();
    }
    
    setTimeout(() => { isApplyingLanguage = false; }, 100);
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

// Make functions available globally
window.toggleLanguage = toggleLanguage;
window.applyLanguage = applyLanguage;
