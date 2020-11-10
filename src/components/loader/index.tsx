import React from "react";
import { useTranslation } from "react-i18next";

const Spinner = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="loader__circle spinner-border text-primary" role="status">
      <span className="sr-only">{t("loading")}</span>
    </div>
  );
};

type LoaderProps = {
  isLoaded: boolean;
  text?: string;
};

// Component used to signalize user that some action is in process. E.g API call
export const Loader: React.FC<LoaderProps> = ({
  isLoaded,
  children,
  text = ""
}) => (
  <div className="loader">
    {isLoaded ? (
      children
    ) : (
      <div className="loader__spinner">
        {text && <div className="loader__info"> {text}</div>}
        <Spinner />
      </div>
    )}
  </div>
);
