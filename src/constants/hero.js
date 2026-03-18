import heroImg from "../assets/images/hero_image.png";
import heroImgAR from "../assets/images/hero-image-ar.png";
import { LANGUAGES } from "./languages";

export const HERO_DATA = {
  [LANGUAGES.EN]: {
    image: heroImg,

    greeting: "Hello!",

    title: {
      beforeName: "I’m ",
      name: "Amer Shammout",
      afterName: ", UI / UX Designer & Flutter Developer",
    },

    body: "I'm Amer Shammout, I combine creative design with precise programming to create beautiful, easy-to-use apps using Flutter.",
    button1: "Download CV",
    button2: "View My Work",
  },

  [LANGUAGES.AR]: {
    image: heroImgAR,

    greeting: "مرحباً!",

    title: {
      beforeName: "أنا ",
      name: "عامر شمّوط",
      afterName: "، مصمم UI/UX ومطور Flutter",
    },

    body: "أنا عامر شمّوط، أدمج بين التصميم الإبداعي والبرمجة الدقيقة لإنشاء تطبيقات جميلة وسهلة الاستخدام باستخدام Flutter.",
    button1: "تحميل الـ CV",
    button2: "شاهد أعمالي",
  },
};
