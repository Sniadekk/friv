import React, { useState, Dispatch } from "react";
import { useTranslation } from "react-i18next";
import { useStoreState } from "store";

import { Option } from "utils";
import { CarMake, CarModel } from "store/model";
import { NetworkError } from "components/network-error";
import { LanguageSwitcher } from "components/lang-switcher";
import { ChooseVehicle, SelectedVehicle } from "./vehicle";
import { ChooseMake, ChooseModel } from "./selector";

// Placeholder component to use with Option combinators
const None = () => <> </>;

// Component used to choose brand, model and vehicle.
// It displays each of the selector components only if data they need
// to fetch their own data from the API is available.
const VehicleSelector = () => {
  const [selectedMake, selectMake]: [
    Option<CarMake>,
    Dispatch<Option<CarMake>>
  ] = useState(Option.none());

  const [selectedModel, selectModel]: [
    Option<CarModel>,
    Dispatch<Option<CarModel>>
  ] = useState(Option.none());
  const { t } = useTranslation();

  return (
    <>
      <h1 className="homepage__header">{t("header")}</h1>
      <ChooseMake onSelect={(o) => selectMake(Option.some(o.value))} />
      {selectedMake
        .map((make) => (
          <ChooseModel
            make={make}
            onSelect={(o) => selectModel(Option.some(o.value))}
          />
        ))
        .getOr(<None />)}
      {selectedMake
        .map((make) =>
          selectedModel
            .map((model) => <ChooseVehicle make={make} model={model} />)
            .getOr(<None />)
        )
        .getOr(<None />)}
    </>
  );
};

// Default route component with logic to choose vehicle
export const Homepage = (): JSX.Element => {
  const selectedVehicle = useStoreState((s) => s.selectedVehicle);
  const didNetworkFail = useStoreState((s) => s.didNetworkFail);

  const ActiveView = () =>
    didNetworkFail ? (
      <NetworkError />
    ) : (
      selectedVehicle
        .map((vehicle) => <SelectedVehicle vehicle={vehicle} />)
        .getOr(<VehicleSelector />)
    );

  return (
    <main className="homepage">
      <LanguageSwitcher />
      <ActiveView />
    </main>
  );
};
