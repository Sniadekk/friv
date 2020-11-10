import React from "react";
import { useTranslation } from "react-i18next";

// Component used to signal network errors during communication with API
export const NetworkError: React.FC = () => {
  const { t } = useTranslation();
  return <div className="network-error"> {t("networkError")} </div>;
};
