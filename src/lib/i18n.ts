// src/lib/i18n.ts
import { Coffee, Snowflake, Droplets, Flame, Leaf, Beer } from "lucide-react";

export const translations = {
  ro: {
    // Navigation
    navHome: "Acasă",
    navMenu: "Meniu",
    navContact: "Contact",

    // Language Switcher
    langRO: "Română",
    langEN: "English",
    langRU: "Русский",

    // Hero Section
    heroTitle: "Bloom Café",
    heroSubtitle: "Oaza Ta de Cafea și Relaxare în Ungheni",
    heroBtnMenu: "Vezi Meniul",
    heroBtnOrder: "Comandă Acum",

    // About Section
    aboutTitle: "Povestea Noastră",
    aboutText:
      "Bloom Café este locul unde aromele autentice se întâlnesc cu atmosfera caldă și primitoare. Ne dedicăm să oferim cea mai bună experiență de cafea în Ungheni, folosind ingrediente proaspete și rețete tradiționale.",
    feature1Title: "Cafea Premium",
    feature1Text: "Boabe de cafea selectate cu grijă pentru aroma perfectă",
    feature2Title: "Atmosferă Unică",
    feature2Text: "Un spațiu elegant și confortabil pentru relaxare",
    feature3Title: "Deschis Zilnic",
    feature3Text: "08:00 - 22:00, pentru toate momentele tale speciale",

    // Signature Items
    specialtiesTitle: "Specialitățile Casei",
    specialtiesText: "Descoperă cele mai apreciate preparate de la Bloom Café",
    specialty1Name: "Spanish Latte",
    specialty1Desc:
      "O combinație perfectă de espresso și lapte condensat dulce",
    specialty2Name: "Ice Caramel Latte",
    specialty2Desc: "Răcoritor și dulce, perfect pentru zilele calde",
    specialty3Name: "Ceai Natural",
    specialty3Desc:
      "Amestecuri naturale de plante pentru o experiență autentică",

    // Location Section
    locationTitle: "Vizitează-ne în Ungheni",
    locationText: "Te așteptăm cu drag în locația noastră din centrul orașului",
    locationBtn: "Vezi Detalii Contact",

    // Footer
    footerSlogan: "Oaza ta de cafea și relaxare în Ungheni, Moldova",
    footerHours: "Program",
    footerHoursDays: "Luni - Duminică",

    // Menu Page
    menuPageTitle: "Meniul Nostru",
    menuPageSubtitle:
      "Descoperă varietatea de băuturi și preparate delicioase de la Bloom Café",
    importantInfo: "Informații Importante",
    program: "Program",
    payments: "Plăți",
    paymentsText: "Acceptăm numerar și plăți cu cardul",

    // Contact Page
    contactTitle: "Contact & Locație",
    contactSubtitle:
      "Vino să ne vizitezi sau trimite-ne un mesaj. Suntem aici pentru tine!",
    ourLocation: "Locația Noastră",
    locationSoon: "Hartă Google Maps va fi disponibilă în curând",
    phone: "Telefon",
    email: "Email",
    workingHours: "Program de Lucru",
    formTitle: "Trimite-ne un Mesaj",
    formName: "Nume *",
    formNamePlaceholder: "Numele tău",
    formEmail: "Email *",
    formEmailPlaceholder: "email@exemplu.com",
    formSubject: "Subiect",
    formSubjectPlaceholder: "Subiectul mesajului",
    formMessage: "Mesaj *",
    formMessagePlaceholder: "Scrie-ne mesajul tău aici...",
    formSubmit: "Trimite Mesajul",
    socialTitle: "Urmărește-ne pe Social Media",
    socialText:
      "Rămâi la curent cu noutățile și ofertele speciale de la Bloom Café",

    // Menu Sections & Items
    menu: {
      cafea: {
        title: "Cafea",
        icon: Coffee,
        items: [
          { name: "Espresso", price: "20 LEI" },
          { name: "Americano", price: "20 LEI" },
          { name: "Latte", price: "35 LEI" },
          { name: "Cappuccino", price: "30 LEI" },
          { name: "Matcha", price: "35 LEI" },
        ],
      },
      ice_drinks: {
        title: "Ice Drinks",
        icon: Snowflake,
        items: [
          { name: "Ice Caramel Latte", price: "40 LEI" },
          { name: "Caramel Frappe", price: "40 LEI" },
          { name: "Ness Frappe", price: "40 LEI" },
          { name: "Oreo Frappe", price: "40 LEI" },
          { name: "Espresso Tonic", price: "40 LEI" },
        ],
      },
      limonade: {
        title: "Limonade",
        icon: Droplets,
        items: [
          { name: "Limonadă Clasică", price: "40 LEI" },
          { name: "Limonadă Strawberry", price: "40 LEI" },
          { name: "Limonadă Passion Fruit", price: "40 LEI" },
          { name: "Limonadă Kiwi", price: "40 LEI" },
          { name: "Limonadă Raspberry", price: "40 LEI" },
        ],
      },
      bauturi_reci: {
        title: "Băuturi Reci",
        icon: Beer,
        items: [
          { name: "Coca Cola 0.330ml", price: "20 LEI" },
          { name: "Fanta 0.330ml", price: "20 LEI" },
          { name: "Sprite 0.330ml", price: "20 LEI" },
          { name: "Schweppes 0.330ml", price: "20 LEI" },
          { name: "Apă plată / carbogazată 0.330ml", price: "20 LEI" },
        ],
      },
      hot_drinks: {
        title: "Hot Drinks",
        icon: Flame,
        items: [
          { name: "Cacao", price: "30 LEI" },
          { name: "Cacao Strawberry", price: "35 LEI" },
          { name: "Latte Caramel", price: "40 LEI" },
          { name: "Hot Chocolate", price: "35 LEI" },
          { name: "Spanish Latte", price: "40 LEI" },
        ],
      },
      ceai: {
        title: "Ceai",
        icon: Leaf,
        items: [
          { name: "Ceai la pliculeț", price: "20 LEI" },
          { name: "Ceai la infuzie", price: "50 LEI" },
          { name: "Ceai natural", price: "60 LEI" },
        ],
      },
    },
  },
  en: {
    // Navigation
    navHome: "Home",
    navMenu: "Menu",
    navContact: "Contact",

    // Language Switcher
    langRO: "Română",
    langEN: "English",
    langRU: "Русский",

    // Hero Section
    heroTitle: "Bloom Café",
    heroSubtitle: "Your Oasis of Coffee and Relaxation in Ungheni",
    heroBtnMenu: "View Menu",
    heroBtnOrder: "Order Now",

    // About Section
    aboutTitle: "Our Story",
    aboutText:
      "Bloom Café is where authentic flavors meet a warm and welcoming atmosphere. We are dedicated to providing the best coffee experience in Ungheni, using fresh ingredients and traditional recipes.",
    feature1Title: "Premium Coffee",
    feature1Text: "Carefully selected coffee beans for the perfect aroma",
    feature2Title: "Unique Atmosphere",
    feature2Text: "An elegant and comfortable space for relaxation",
    feature3Title: "Open Daily",
    feature3Text: "08:00 - 22:00, for all your special moments",

    // Signature Items
    specialtiesTitle: "House Specialties",
    specialtiesText: "Discover the most popular items at Bloom Café",
    specialty1Name: "Spanish Latte",
    specialty1Desc:
      "A perfect combination of espresso and sweet condensed milk",
    specialty2Name: "Iced Caramel Latte",
    specialty2Desc: "Refreshing and sweet, perfect for warm days",
    specialty3Name: "Natural Tea",
    specialty3Desc: "Natural herbal blends for an authentic experience",

    // Location Section
    locationTitle: "Visit Us in Ungheni",
    locationText: "We look forward to welcoming you to our downtown location",
    locationBtn: "View Contact Details",

    // Footer
    footerSlogan: "Your oasis of coffee and relaxation in Ungheni, Moldova",
    footerHours: "Hours",
    footerHoursDays: "Monday - Sunday",

    // Menu Page
    menuPageTitle: "Our Menu",
    menuPageSubtitle:
      "Discover the variety of delicious drinks and dishes at Bloom Café",
    importantInfo: "Important Information",
    program: "Hours",
    payments: "Payments",
    paymentsText: "We accept cash and card payments",

    // Contact Page
    contactTitle: "Contact & Location",
    contactSubtitle: "Come visit us or send us a message. We are here for you!",
    ourLocation: "Our Location",
    locationSoon: "Google Maps will be available soon",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    formTitle: "Send Us a Message",
    formName: "Name *",
    formNamePlaceholder: "Your name",
    formEmail: "Email *",
    formEmailPlaceholder: "email@example.com",
    formSubject: "Subject",
    formSubjectPlaceholder: "Message subject",
    formMessage: "Message *",
    formMessagePlaceholder: "Write your message here...",
    formSubmit: "Send Message",
    socialTitle: "Follow Us on Social Media",
    socialText: "Stay up to date with news and special offers from Bloom Café",

    // Menu Sections & Items
    menu: {
      cafea: {
        title: "Coffee",
        icon: Coffee,
        items: [
          { name: "Espresso", price: "20 LEI" },
          { name: "Americano", price: "20 LEI" },
          { name: "Latte", price: "35 LEI" },
          { name: "Cappuccino", price: "30 LEI" },
          { name: "Matcha", price: "35 LEI" },
        ],
      },
      ice_drinks: {
        title: "Iced Drinks",
        icon: Snowflake,
        items: [
          { name: "Iced Caramel Latte", price: "40 LEI" },
          { name: "Caramel Frappe", price: "40 LEI" },
          { name: "Ness Frappe", price: "40 LEI" },
          { name: "Oreo Frappe", price: "40 LEI" },
          { name: "Espresso Tonic", price: "40 LEI" },
        ],
      },
      limonade: {
        title: "Lemonades",
        icon: Droplets,
        items: [
          { name: "Classic Lemonade", price: "40 LEI" },
          { name: "Strawberry Lemonade", price: "40 LEI" },
          { name: "Passion Fruit Lemonade", price: "40 LEI" },
          { name: "Kiwi Lemonade", price: "40 LEI" },
          { name: "Raspberry Lemonade", price: "40 LEI" },
        ],
      },
      bauturi_reci: {
        title: "Cold Drinks",
        icon: Beer,
        items: [
          { name: "Coca Cola 0.330ml", price: "20 LEI" },
          { name: "Fanta 0.330ml", price: "20 LEI" },
          { name: "Sprite 0.330ml", price: "20 LEI" },
          { name: "Schweppes 0.330ml", price: "20 LEI" },
          { name: "Still / Sparkling Water 0.330ml", price: "20 LEI" },
        ],
      },
      hot_drinks: {
        title: "Hot Drinks",
        icon: Flame,
        items: [
          { name: "Cocoa", price: "30 LEI" },
          { name: "Strawberry Cocoa", price: "35 LEI" },
          { name: "Caramel Latte", price: "40 LEI" },
          { name: "Hot Chocolate", price: "35 LEI" },
          { name: "Spanish Latte", price: "40 LEI" },
        ],
      },
      ceai: {
        title: "Tea",
        icon: Leaf,
        items: [
          { name: "Tea Bag", price: "20 LEI" },
          { name: "Infusion Tea", price: "50 LEI" },
          { name: "Natural Tea", price: "60 LEI" },
        ],
      },
    },
  },
  ru: {
    // Navigation
    navHome: "Главная",
    navMenu: "Меню",
    navContact: "Контакты",

    // Language Switcher
    langRO: "Română",
    langEN: "English",
    langRU: "Русский",

    // Hero Section
    heroTitle: "Bloom Café",
    heroSubtitle: "Ваш Оазис Кофе и Отдыха в Унгенах",
    heroBtnMenu: "Смотреть Меню",
    heroBtnOrder: "Заказать сейчас",

    // About Section
    aboutTitle: "Наша История",
    aboutText:
      "Bloom Café – это место, где подлинные ароматы встречаются с теплой и гостеприимной атмосферой. Мы стремимся предложить лучший кофейный опыт в Унгенах, используя свежие ингредиенты и традиционные рецепты.",
    feature1Title: "Премиум Кофе",
    feature1Text: "Тщательно отобранные кофейные зерна для идеального аромата",
    feature2Title: "Уникальная Атмосфера",
    feature2Text: "Элегантное и удобное пространство для отдыха",
    feature3Title: "Открыто Ежедневно",
    feature3Text: "08:00 - 22:00, для всех ваших особых моментов",

    // Signature Items
    specialtiesTitle: "Фирменные Блюда",
    specialtiesText: "Откройте для себя самые популярные блюда в Bloom Café",
    specialty1Name: "Испанский Латте",
    specialty1Desc: "Идеальное сочетание эспрессо и сладкого сгущенного молока",
    specialty2Name: "Ледяной Карамельный Латте",
    specialty2Desc: "Освежающий и сладкий, идеально подходит для теплых дней",
    specialty3Name: "Натуральный Чай",
    specialty3Desc: "Натуральные травяные сборы для подлинного опыта",

    // Location Section
    locationTitle: "Посетите Нас в Унгенах",
    locationText: "Мы с нетерпением ждем вас в нашем заведении в центре города",
    locationBtn: "Посмотреть Контакты",

    // Footer
    footerSlogan: "Ваш оазис кофе и отдыха в Унгенах, Молдова",
    footerHours: "Часы работы",
    footerHoursDays: "Понедельник - Воскресенье",

    // Menu Page
    menuPageTitle: "Наше Меню",
    menuPageSubtitle:
      "Откройте для себя разнообразие вкусных напитков и блюд в Bloom Café",
    importantInfo: "Важная Информация",
    program: "Часы работы",
    payments: "Платежи",
    paymentsText: "Мы принимаем наличные и карты",

    // Contact Page
    contactTitle: "Контакты и Местоположение",
    contactSubtitle:
      "Приходите к нам или отправьте сообщение. Мы здесь для вас!",
    ourLocation: "Наше Местоположение",
    locationSoon: "Карта Google Maps скоро будет доступна",
    phone: "Телефон",
    email: "Электронная почта",
    workingHours: "Часы Работы",
    formTitle: "Отправьте Нам Сообщение",
    formName: "Имя *",
    formNamePlaceholder: "Ваше имя",
    formEmail: "Электронная почта *",
    formEmailPlaceholder: "email@example.com",
    formSubject: "Тема",
    formSubjectPlaceholder: "Тема сообщения",
    formMessage: "Сообщение *",
    formMessagePlaceholder: "Напишите ваше сообщение здесь...",
    formSubmit: "Отправить Сообщение",
    socialTitle: "Следите за нами в Социальных Сетях",
    socialText:
      "Будьте в курсе новостей и специальных предложений от Bloom Café",

    // Menu Sections & Items
    menu: {
      cafea: {
        title: "Кофе",
        icon: Coffee,
        items: [
          { name: "Эспрессо", price: "20 LEI" },
          { name: "Американо", price: "20 LEI" },
          { name: "Латте", price: "35 LEI" },
          { name: "Капучино", price: "30 LEI" },
          { name: "Матча", price: "35 LEI" },
        ],
      },
      ice_drinks: {
        title: "Холодные Напитки",
        icon: Snowflake,
        items: [
          { name: "Ледяной Карамельный Латте", price: "40 LEI" },
          { name: "Карамельный Фраппе", price: "40 LEI" },
          { name: "Несс Фраппе", price: "40 LEI" },
          { name: "Орео Фраппе", price: "40 LEI" },
          { name: "Эспрессо Тоник", price: "40 LEI" },
        ],
      },
      limonade: {
        title: "Лимонады",
        icon: Droplets,
        items: [
          { name: "Классический Лимонад", price: "40 LEI" },
          { name: "Клубничный Лимонад", price: "40 LEI" },
          { name: "Лимонад с Маракуйей", price: "40 LEI" },
          { name: "Лимонад с Киви", price: "40 LEI" },
          { name: "Малиновый Лимонад", price: "40 LEI" },
        ],
      },
      bauturi_reci: {
        title: "Прохладительные Напитки",
        icon: Beer,
        items: [
          { name: "Coca Cola 0.330ml", price: "20 LEI" },
          { name: "Fanta 0.330ml", price: "20 LEI" },
          { name: "Sprite 0.330ml", price: "20 LEI" },
          { name: "Schweppes 0.330ml", price: "20 LEI" },
          { name: "Вода без газа / с газом 0.330ml", price: "20 LEI" },
        ],
      },
      hot_drinks: {
        title: "Горячие Напитки",
        icon: Flame,
        items: [
          { name: "Какао", price: "30 LEI" },
          { name: "Клубничное Какао", price: "35 LEI" },
          { name: "Карамельный Латте", price: "40 LEI" },
          { name: "Горячий Шоколад", price: "35 LEI" },
          { name: "Испанский Латте", price: "40 LEI" },
        ],
      },
      ceai: {
        title: "Чай",
        icon: Leaf,
        items: [
          { name: "Чай в пакетиках", price: "20 LEI" },
          { name: "Заварной чай", price: "50 LEI" },
          { name: "Натуральный чай", price: "60 LEI" },
        ],
      },
    },
  },
};
