import { LANGUAGES } from "./languages";

export const headerData = {
  nav: {
    [LANGUAGES.EN]: [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Services", id: "services" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" },
    ],

    [LANGUAGES.AR]: [
      { label: "الرئيسية", id: "home" },
      { label: "من أنا", id: "about" },
      { label: "الخدمات", id: "services" },
      { label: "المشاريع", id: "projects" },
      { label: "تواصل", id: "contact" },
    ],
  },

  languageSwitcher: {
    [LANGUAGES.EN]: {
      en: "English",
      ar: "Arabic",
    },

    [LANGUAGES.AR]: {
      en: "الإنجليزية",
      ar: "العربية",
    },
  },
};
