import telegramIcon from "../assets/icons/Telegram.svg";
import behanceIcon from "../assets/icons/Behance.svg";
import linkedinIcon from "../assets/icons/Linkedin.svg";
import whatsappIcon from "../assets/icons/Whatsapp.svg";
import facebookIcon from "../assets/icons/Facebook.svg";
import { LANGUAGES } from "./languages";


export const contactData = {
  [LANGUAGES.EN]: {
      title: "Contact.",
  
      body:
        "I’m always open to discussing new projects, creative ideas, or collaboration opportunities. Feel free to reach out—I’d love to hear from you!",
  
      socials: [
        {
          name: "Telegram",
          icon: telegramIcon,
          link: "https://t.me/Amer_Shammout",
        },
        {
          name: "Behance",
          icon: behanceIcon,
          link: "https://www.behance.net/amershammout04",
        },
        {
          name: "LinkedIn",
          icon: linkedinIcon,
          link: "https://www.linkedin.com/in/amer-shammout-04012b26b/",
        },
        {
          name: "WhatsApp",
          icon: whatsappIcon,
          link: "https://wa.me/00963993865338",
        },
        {
          name: "Facebook",
          icon: facebookIcon,
          link: "https://www.facebook.com/amer.sh.779",
        },
      ],
    },
  
    [LANGUAGES.AR]: {
      title: "تواصل.",
  
      body:
        "أنا دائماً منفتح لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو فرص التعاون. لا تتردد في التواصل معي.",
  
        socials: [
          {
            name: "Telegram",
            icon: telegramIcon,
            link: "https://t.me/Amer_Shammout",
          },
          {
            name: "Behance",
            icon: behanceIcon,
            link: "https://www.behance.net/amershammout04",
          },
          {
            name: "LinkedIn",
            icon: linkedinIcon,
            link: "https://www.linkedin.com/in/amer-shammout-04012b26b/",
          },
          {
            name: "WhatsApp",
            icon: whatsappIcon,
            link: "https://wa.me/00963993865338",
          },
          {
            name: "Facebook",
            icon: facebookIcon,
            link: "https://www.facebook.com/amer.sh.779",
          },
        ],
    },
  };