import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children, lang, setLang }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-1 pt-24  xl:pt-32 flex-col flex gap-[var(--spacing-section-mobile)] md:gap-[var(--spacing-section-tablet)] lg:gap-[var(--spacing-section-desktop)]">
        {children}
      </main>

    </div>
  );
};

export default MainLayout;
