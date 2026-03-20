import { LANGUAGES } from "./languages";
import visitSyriaDashboard from "../assets/images/visit_syria_dashboard.png";
import visitSyriaMobile from "../assets/images/visit_syria_mobile.png";
import businessCard from "../assets/images/business_card.png";
import coinCard from "../assets/images/coin_card.png";
import eDelivery from "../assets/images/e-delivery.png";
import babyWorld from "../assets/images/baby_world.png";
import hardSystem from "../assets/images/hard-system.png";
import alNashmi from "../assets/images/al-nashmi.png";
import statBall from "../assets/images/stat-ball.png";
import eastToWest from "../assets/images/east-to-west.png";
import beautyHouse from "../assets/images/beauty_house.png";

function mapProjectCategories(projectCategories, allCategories) {
  return projectCategories.map((value) => {
    const cat = allCategories.find((c) => c.value === value);

    return cat
      ? { label: cat.label, value: cat.value, type: cat.type }
      : { label: value, value, type: "unknown" };
  });
}

export const PROJECTS_DATA = {
  [LANGUAGES.EN]: {
    title: {
      highlight: "Projects",
      rest: " I Did",
    },

    categories: [
      { label: "All Works", value: "all",type:"all" },
      { label: "Flutter", value: "flutter", type: "dev" },
      { label: "React", value: "react", type: "dev" },

      { label: "Website", value: "website", type: "design" },
      { label: "Mobile App", value: "mobile", type: "design" },
      { label: "Dashboard", value: "dashboard", type: "design" },
      { label: "Landing Page", value: "landing_page", type: "design" },
    ],

    projects: [
      {
        id: 1,
        title: "Visit Syria",
        caption: "Smart control panels for companies and ministries",
        image: visitSyriaDashboard,
        categories: ["dashboard"],
        link: "https://www.behance.net/gallery/235424105/_",
      },
      {
        id: 7,
        title: "Hard System",
        caption: "An introductory website about an elevator company",
        image: hardSystem,
        categories: ["website"],
        link: "https://www.behance.net/gallery/245398325/_",
      },

      {
        id: 3,
        title: "Visit Syria",
        caption: "A smart and fun tour guide app",
        image: visitSyriaMobile,
        categories: ["flutter", "mobile"],
        link: "https://www.behance.net/gallery/235421743/_",
      },
      {
        id: 4,
        title: "Coin Card",
        caption: "Top-up & Digital Purchases",
        image: coinCard,
        categories: ["website"],
        link: "https://www.behance.net/gallery/235160383/Coin-Card-Top-up-Digital-Purchases",
      },
      {
        id: 5,
        title: "E-Delivery",
        caption: "Fast & Easy Order Delivery",
        image: eDelivery,
        categories: ["flutter", "mobile"],
        link: "https://www.behance.net/gallery/217579819/E-Delivery-Mobile-Application",
      },
      {
        id: 6,
        title: "Baby World",
        caption: "Babies Clothes Landing Page",
        image: babyWorld,
        categories: ["landing_page"],
        link: "https://www.behance.net/gallery/225988193/Baby-World-(Babies-Clothes-Store-Landing-Page)",
      },
      {
        id: 2,
        title: "Business Card",
        caption: "Manage Payments with Ease",
        image: businessCard,
        categories: ["website"],
        link: null,
      },
      {
        id: 8,
        title: "Al Nashmi",
        caption: "Orginal Arabic Coffee",
        image: alNashmi,
        categories: ["landing_page","react"],
        link: "https://www.behance.net/gallery/216346613/_",
      },
      {
        id: 9,
        title: "Statball",
        caption: "Syrian Basketball Statistics",
        image: statBall,
        categories: ["mobile"],
        link: "https://www.behance.net/gallery/216505509/STATBALL-(Basketball-statistics-mobile-app)",
      },
      {
        id: 10,
        title: "Beauty House",
        caption: "Your world of cosmetics",
        image: beautyHouse,
        categories: ["landing_page"],
        link: "https://www.behance.net/gallery/216351149/Beauty-House-(Landing-Page)",
      },
      {
        id: 11,
        title: "East to West",
        caption: "Weather Forecast",
        image: eastToWest,
        categories: ["mobile"],
        link: "https://www.behance.net/gallery/216348815/East-to-West-(Weather-App)",
      },
    ].map((project) => ({
      ...project,
      categories: mapProjectCategories(project.categories, [
        { label: "All Works", value: "all",type:"all" },
        { label: "Flutter", value: "flutter", type: "dev" },
        { label: "React", value: "react", type: "dev" },
        { label: "Web Design", value: "website", type: "design" },
        { label: "Mobile App", value: "mobile", type: "design" },
        { label: "Dashboard", value: "dashboard", type: "design" },
        { label: "Landing Page", value: "landing_page", type: "design" },
      ]),
    })),
  },

  [LANGUAGES.AR]: {
    title: {
      highlight: "مشاريع",
      rest: " قد أنهيتها",
    },

    categories: [
      { label: "جميع الأعمال", value: "all",type:"all" },
      { label: "فلاتر", value: "flutter", type: "dev" },
      { label: "ريأكت", value: "react", type: "dev" },
      { label: "مواقع ويب", value: "website", type: "design" },
      { label: "تطبيقات موبايل", value: "mobile", type: "design" },
      { label: "لوحات تحكم", value: "dashboard", type: "design" },
      { label: "صفحات هبوط", value: "landing_page", type: "design" },
    ],
    projects: [
      {
        id: 1,
        title: "لفة بــسوريا",
        caption: "لوحات تحكم ذكية للشركات والوزارات",
        image: visitSyriaDashboard,
        categories: ["dashboard"],
        link: "https://www.behance.net/gallery/235424105/_",
      },
      {
        id: 7,
        title: "هارد سيستم",
        caption: "موقع تعريفي عن شركة مصاعد",
        image: hardSystem,
        categories: ["website"],
        link: "https://www.behance.net/gallery/245398325/_",
      },
      {
        id: 3,
        title: "لفة بــسوريا",
        caption: "تطبيق دليل سياحي ذكي وممتع",
        image: visitSyriaMobile,
        categories: ["flutter", "mobile"],
        link: "https://www.behance.net/gallery/235421743/_",
      },
      {
        id: 4,
        title: "كويّن كارد",
        caption: "شحن الرصيد والمشتريات الرقمية",
        image: coinCard,
        categories: ["website"],
        link: "https://www.behance.net/gallery/235160383/Coin-Card-Top-up-Digital-Purchases",
      },
      {
        id: 5,
        title: "إي-دليفري",
        caption: "توصيل طلبات سريع وسهل",
        image: eDelivery,
        categories: ["flutter", "mobile"],
        link: "https://www.behance.net/gallery/217579819/E-Delivery-Mobile-Application",
      },
      {
        id: 6,
        title: "بيبي وورلد",
        caption: "صفحة هبوط لملابس الأطفال",
        image: babyWorld,
        categories: ["landing_page"],
        link: "https://www.behance.net/gallery/225988193/Baby-World-(Babies-Clothes-Store-Landing-Page)",
      },
      {
        id: 2,
        title: "بيزنس كارد",
        caption: "إدارة المدفوعات بكل سهولة",
        image: businessCard,
        categories: ["website"],
        link: null,
      },
      {
        id: 8,
        title: "النشمي",
        caption: "قهوة عربية أصلية",
        image: alNashmi,
        categories: ["landing_page","react"],
        link: "https://www.behance.net/gallery/216346613/_",
      },
      {
        id: 9,
        title: "ستيت-بال",
        caption: "احصائيات كرة السلة السورية",
        image: statBall,
        categories: ["mobile"],
        link: "https://www.behance.net/gallery/216505509/STATBALL-(Basketball-statistics-mobile-app)",
      },
      {
        id: 10,
        title: "عالم الجمال",
        caption: "عالمِك لمستحضرات التجميل",
        image: beautyHouse,
        categories: ["landing_page"],
        link: "https://www.behance.net/gallery/216351149/Beauty-House-(Landing-Page)",
      },
      {
        id: 11,
        title: "من الشرق للغرب",
        caption: "تنبؤات الطقس",
        image: eastToWest,
        categories: ["mobile"],
        link: "https://www.behance.net/gallery/216348815/East-to-West-(Weather-App)",
      },
    ].map((project) => ({
      ...project,
      categories: mapProjectCategories(project.categories, [
        { label: "جميع الأعمال", value: "all",type:"all" },
        { label: "فلاتر", value: "flutter", type: "dev" },
        { label: "ريأكت", value: "react", type: "dev" },
        { label: "مواقع ويب", value: "website", type: "design" },
        { label: "تطبيقات موبايل", value: "mobile", type: "design" },
        { label: "لوحات تحكم", value: "dashboard", type: "design" },
        { label: "صفحات هبوط", value: "landing_page", type: "design" },
      ]),
    })),
  },
};
