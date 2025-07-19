document.addEventListener('DOMContentLoaded', () => {

    // 1. Mevcut sayfanın adını al (örn: "index", "about", "contact")
    const getCurrentPageName = () => {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1);
        
        // Eğer sayfa adı boşsa (ana dizin, örn: www.site.com/), "index" kabul et
        if (page === '') {
            return 'index';
        }
        
        // ".html" uzantısını kaldır
        return page.replace('.html', '');
    };

    // 2. Dili değiştirme fonksiyonu (Sayfayı yeniden yükler)
    const changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        // Yeni dilin JSON'unu yüklemek için sayfayı yeniden yüklemek en temiz yöntemdir.
        window.location.reload();
    };
    
    // 3. Metinleri sayfaya uygulama fonksiyonu
    const applyTranslations = (translations) => {
        // Gelen çeviri objesi boşsa veya bir hata varsa işlemi durdur
        if (!translations) {
            console.error("Translations object is empty.");
            return;
        }

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key]) {
                el.innerHTML = translations[key];
            } else {
                console.warn(`Translation key not found: ${key}`);
            }
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (translations[key]) {
                el.placeholder = translations[key];
            } else {
                console.warn(`Translation key not found: ${key}`);
            }
        });

        document.querySelectorAll('[data-translate-value]').forEach(el => {
            const key = el.getAttribute('data-translate-value');
            if (translations[key]) {
                el.value = translations[key];
            } else {
                console.warn(`Translation key not found: ${key}`);
            }
        });
        
        if (translations['page_title']) {
            document.title = translations['page_title'];
        }
    };

    // 4. Sayfa yüklendiğinde çevirileri başlatan ana fonksiyon
    const initializeTranslations = async () => {
        // Dil değiştirme butonlarına olay dinleyicileri ekle
        document.querySelectorAll('.lang-switcher').forEach(switcher => {
            switcher.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = switcher.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });

        const pageName = getCurrentPageName();
        // Kayıtlı dili al veya varsayılan olarak 'tr-tr' kullan
        const currentLang = localStorage.getItem('language') || 'tr-tr'; 

        // Dinamik olarak JSON dosyasının yolunu oluştur
        const jsonPath = `js/translates/${currentLang}/${pageName}.json`;

        try {
            const response = await fetch(jsonPath);
            if (!response.ok) {
                throw new Error(`Could not find or load file: ${jsonPath}`);
            }
            const translations = await response.json();

            // Çevirileri sayfaya uygula
            applyTranslations(translations);

        } catch (error) {
            console.error("Translation Error:", error);
            // Hata durumunda (örn: JSON dosyası yok), kullanıcıya bilgi verilebilir.
            // Örneğin, ana dile geri dönmeye çalışabilir veya bir hata mesajı gösterebilir.
        }
    };

    // Başlangıç
    initializeTranslations();
});