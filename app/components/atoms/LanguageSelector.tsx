import { language } from "@/app/utils/constants";
import { useLocalStorage } from "usehooks-ts";

const LanguageSelector = () => {
  const [value, setValue] = useLocalStorage("page-language", language.en);

  const setLanguage = (language: string) => {
    setValue(language);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className={value === language.jp ? "underline underline-offset-8" : ""}
        onClick={() => setLanguage(language.jp)}
      >
        ＪＰ
      </button>
      <p>／</p>
      <button
        className={value !== language.jp ? "underline underline-offset-8" : ""}
        onClick={() => setLanguage(language.en)}
      >
        ＥＮ
      </button>
    </div>
  );
};

export default LanguageSelector;
