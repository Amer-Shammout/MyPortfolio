import uxIcon from "../assets/icons/ux.svg";
import uiIcon from "../assets/icons/ui.svg";
import flutterIcon from "../assets/icons/mobile.svg";
import { LANGUAGES } from "./languages";

export const ABOUT_DATA = {
  [LANGUAGES.EN]: {
    title: {
      highlight: "About",
      rest: " Me",
    },

    cards: [
      {
        icon: uxIcon,

        title: {
          highlight: "UX",
          rest: " Design",
        },

        body: "I started with UX by learning user research, wireframing, and usability testing through courses like Google UX Design and Satr. This phase taught me to create solutions focused on real user needs.",
      },

      {
        icon: uiIcon,

        title: {
          highlight: "UI",
          rest: " Design",
        },

        body: "I then explored UI design, studying layout, color theory, and visual hierarchy. Using Figma and Adobe XD, I worked on real and training projects to turn ideas into clear, engaging interfaces.",
      },

      {
        icon: flutterIcon,

        title: {
          highlight: "Flutter",
          rest: " Dev.",
        },

        body: "Finally, I specialized in Flutter, mastering Dart, state management, and MVVM architecture. I built real-world apps that combine design creativity with solid development skills.",
      },
    ],
  },

  [LANGUAGES.AR]: {
    title: {
      highlight: "من",
      rest: " أنا",
    },

    cards: [
      {
        icon: uxIcon,

        title: {
          highlight: "تصميم",
          rest: " تجربة المستخدم",
        },

        body: "بدأتُ مسيرتي في مجال تجربة المستخدم من خلال تعلم أبحاث المستخدمين، وتصميم النماذج الأولية، واختبارات سهولة الاستخدام عبر دورات مثل دورة تصميم تجربة المستخدم من جوجل ودورة Satr. وقد علمتني هذه المرحلة كيفية ابتكار حلول تركز على احتياجات المستخدمين الحقيقية.",
      },

      {
        icon: uiIcon,

        title: {
          highlight: "تصميم",
          rest: " واجهة المستخدم",
        },

        body: "ثم استكشفت تصميم واجهات المستخدم، ودرست مبادئ التخطيط، ونظرية الألوان، والتسلسل الهرمي البصري. وباستخدام برنامجي Figma وAdobe XD عملت على مشاريع تدريبية وحقيقية، مما ساعدني على تحويل الأفكار الأولية إلى واجهات واضحة، متناسقة، وجذابة بصريًا للمستخدمين.",
      },

      {
        icon: flutterIcon,

        title: {
          highlight: "تطوير",
          rest: " فلاتر",
        },

        body: "وأخيرًا تخصصت في تطوير تطبيقات Flutter، حيث أتقنت لغة Dart وإدارة الحالة وهندسة MVVM. وخلال هذه المرحلة أنشأت عدة تطبيقات عملية تجمع بين التفكير التصميمي وتجربة المستخدم الجيدة مع مهارات تطوير قوية لبناء تطبيقات حديثة وفعّالة وقابلة للتوسع.",
      },
    ],
  },
};
