import React from "react";
import { Button } from "components/button";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;

  const toPolish = () => i18n.changeLanguage("pl");
  const toEnglish = () => i18n.changeLanguage("en");

  return (
    <div className="lang-switcher">
      <div className="lang-switcher__variant">
        <Button disabled={activeLanguage === "pl"} onClick={toPolish}>
          {t("lang.pl")}
        </Button>
      </div>
      <div className="lang-switcher__variant">
        <Button disabled={activeLanguage === "en"} onClick={toEnglish}>
          {t("lang.en")}
        </Button>
      </div>
    </div>
  );
};
