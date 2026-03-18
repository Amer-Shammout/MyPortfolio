import { LANGUAGES } from "../../constants/languages";

const Logo = ({lang}) => {
    return (
      <p className="text-xl lg:text-2xl">
        <span className="text-[var(--color-titles)] font-black">{lang == LANGUAGES.EN ? "My" : "محــ"}</span>
        <span className="text-[var(--color-primary)] font-black">{lang == LANGUAGES.EN ? "Porto." : "فظتني"}</span>
      </p>
    );
  };
  
  export default Logo;