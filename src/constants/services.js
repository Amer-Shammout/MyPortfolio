import responsiveIcon from "../assets/icons/web-design.svg?react";
import mobileIcon from "../assets/icons/mobile.svg?react";
import landingIcon from "../assets/icons/landing_page.svg?react";
import flutterIcon from "../assets/icons/flutter.svg?react";
import prototypeIcon from "../assets/icons/prototype.svg?react";
import maintenanceIcon from "../assets/icons/updates.svg?react";
import { LANGUAGES } from "./languages";

export const SERVICES_DATA = {
  [LANGUAGES.EN]: {
    title: {
      highlight: "Services",
      rest: " I Provide",
    },

    cards: [
      {
        icon: responsiveIcon,
        title: {
          highlight: "Responsive",
          rest: " Web Design",
        },
        body: "Designing websites that adapt perfectly to all screen sizes and devices.",
      },

      {
        icon: mobileIcon,
        title: {
          highlight: "Mobile",
          rest: " App Design",
        },
        body: "Creating modern and user-friendly mobile app interfaces for all users worldwide.",
      },

      {
        icon: landingIcon,
        title: {
          highlight: "Landing",
          rest: " Page Design",
        },
        body: "Designing high-conversion landing pages tailored for products and services.",
      },

      {
        icon: flutterIcon,
        title: {
          highlight: "Flutter",
          rest: " App Development",
        },
        body: "Developing scalable cross-platform mobile applications using Flutter framework.",
      },

      {
        icon: prototypeIcon,
        title: {
          highlight: "Prototype",
          rest: " & Testing",
        },
        body: "Creating interactive prototypes and testing usability across different scenarios.",
      },

      {
        icon: maintenanceIcon,
        title: {
          highlight: "Maintenance",
          rest: " & Updates",
        },
        body: "Providing continuous support, performance improvements, and regular updates.",
      },
    ],
  },

  [LANGUAGES.AR]: {
    title: {
      highlight: "الخدمات",
      rest: " التي أقدمها",
    },

    cards: [
      {
        icon: responsiveIcon,
        title: {
          highlight: "تصميم",
          rest: " مواقع متجاوبة",
        },
        body: "تصميم مواقع تعمل بكفاءة على جميع الأجهزة وأحجام الشاشات.",
      },
    
      {
        icon: mobileIcon,
        title: {
          highlight: "تصميم",
          rest: " تطبيقات الموبايل",
        },
        body: "تصميم واجهات تطبيقات حديثة وسهلة الاستخدام على مختلف الأجهزة.",
      },
    
      {
        icon: landingIcon,
        title: {
          highlight: "تصميم",
          rest: " صفحات الهبوط",
        },
        body: "إنشاء صفحات هبوط احترافية موجهة لزيادة التحويل وتحقيق الأهداف.",
      },
    
      {
        icon: flutterIcon,
        title: {
          highlight: "تطوير",
          rest: " تطبيقات Flutter",
        },
        body: "تطوير تطبيقات متعددة المنصات باستخدام Flutter بكفاءة وأداء عالي.",
      },
    
      {
        icon: prototypeIcon,
        title: {
          highlight: "النمذجة",
          rest: " والاختبار",
        },
        body: "إنشاء نماذج تفاعلية واختبار تجربة المستخدم في سيناريوهات مختلفة.",
      },
    
      {
        icon: maintenanceIcon,
        title: {
          highlight: "الصيانة",
          rest: " والتحديث",
        },
        body: "تحسين التطبيقات وتحديثها بشكل مستمر لضمان أفضل أداء وتجربة.",
      },
    ]
  },
};
