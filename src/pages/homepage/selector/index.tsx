import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useStoreActions, useStoreState } from "store";
import { Select, SelectOption } from "components/select";
import { Loader } from "components/loader";
import { RequestStatus } from "api";

type SelectorProps = {
  isLoaded: boolean;
  title: string;
  onSelect: (selected: SelectOption) => void;
  options: SelectOption[];
};

const Selector: React.FC<SelectorProps> = ({
  isLoaded,
  onSelect,
  options,
  title
}) => {
  const { t } = useTranslation();
  return (
    <Loader text={t("selector.loading")} isLoaded={isLoaded}>
      <div className="selector">
        <h2 className="selector__title"> {title}</h2>
        <Select onSelect={onSelect} options={options} />
      </div>
    </Loader>
  );
};

type ChooseModelProps = {
  make: string;
  onSelect: (selected: SelectOption) => void;
};

export const ChooseModel: React.FC<ChooseModelProps> = ({
  make,
  onSelect
}): JSX.Element => {
  const { t } = useTranslation();
  const fetchModels = useStoreActions((s) => s.models.fetch);
  const models = useStoreState((s) => s.models.all).map((model) => ({
    label: model,
    value: model
  }));
  const { requestStatus } = useStoreState((s) => s.models);
  useEffect(() => {
    fetchModels({ make });
  }, [fetchModels, make]);
  return (
    <Selector
      onSelect={onSelect}
      options={models}
      title={t("models.choose")}
      isLoaded={requestStatus === RequestStatus.Success}
    />
  );
};

type ChooseMakeProps = {
  onSelect: (selected: SelectOption) => void;
};

export const ChooseMake: React.FC<ChooseMakeProps> = ({
  onSelect
}): JSX.Element => {
  const { t } = useTranslation();
  const { fetch } = useStoreActions((s) => s.makes);
  const { requestStatus } = useStoreState((s) => s.makes);
  const makes = useStoreState((s) => s.makes.all).map((make) => ({
    label: make,
    value: make
  }));

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Selector
      onSelect={onSelect}
      options={makes}
      title={t("makes.choose")}
      isLoaded={requestStatus === RequestStatus.Success}
    />
  );
};
