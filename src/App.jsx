import MainLayout from "./layouts/MainLayout";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import { useEffect, useState } from "react";
import { LANGUAGES } from "./constants/languages";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (lang === LANGUAGES.AR) {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [lang]);

  return (
    <MainLayout lang={lang} setLang={setLang}>
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <ProjectsSection lang={lang} />
      <ContactSection lang={lang} />
    </MainLayout>
  );
}

export default App;
