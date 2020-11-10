import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useStoreState, useStoreActions } from "store";
import { RequestStatus } from "api";
import { Loader } from "components/loader";
import { List } from "components/list";
import { Vehicle } from "store/model";
import { Button } from "components/button";

type ChooseVehicleProps = {
  make: string;
  model: string;
};

const VehicleInfo: React.FC<{ label: string; value: string }> = ({
  label,
  value
}) => (
  <div className="vehicle__info">
    <div className="vehicle__label"> {label} </div>
    <div className="vehicle__value"> {value} </div>
  </div>
);

type VehicleItemProps = {
  data: Vehicle;
  hideSelect?: boolean;
};

const VehicleItem: React.FC<VehicleItemProps> = ({
  data,
  hideSelect = false
}) => {
  const {
    make,
    model,
    engineCapacity,
    enginePowerPS,
    enginePowerKW,
    bodyType,
    fuelType
  } = data;
  const { t } = useTranslation();

  const selectVehicle = useStoreActions((a) => a.selectVehicle);

  const vehicleInformation = [
    { label: t("vehicles.make"), value: make },
    { label: t("vehicles.model"), value: model },
    { label: t("vehicles.engineCapacity"), value: engineCapacity },
    { label: t("vehicles.enginePowerPS"), value: enginePowerPS },
    { label: t("vehicles.enginePowerKW"), value: enginePowerKW },
    { label: t("vehicles.fuelType"), value: fuelType },
    { label: t("vehicles.bodyType"), value: bodyType }
  ];

  return (
    <div className="vehicle">
      {vehicleInformation.map(({ label, value }) => (
        <VehicleInfo label={label} value={value.toString()} />
      ))}
      <div className="vehicle__actions">
        {!hideSelect && (
          <Button
            className="vehicle__select"
            onClick={() => selectVehicle(data)}
          >
            {t("vehicles.select")}
          </Button>
        )}
      </div>
    </div>
  );
};

export const ChooseVehicle: React.FC<ChooseVehicleProps> = ({
  make,
  model
}): JSX.Element => {
  const { t } = useTranslation();
  const fetchVehicles = useStoreActions((s) => s.vehicles.fetch);
  const vehicles = useStoreState((s) => s.vehicles.all);
  const { requestStatus } = useStoreState((s) => s.vehicles);
  useEffect(() => {
    fetchVehicles({ make, model });
  }, [fetchVehicles, make, model]);

  return (
    <Loader
      text={t("vehicles.loading")}
      isLoaded={requestStatus === RequestStatus.Success}
    >
      <div className="vehicles">
        <List
          emptyText={t("vehicles.notAvailable")}
          items={vehicles}
          itemsPerPage={10}
          renderItem={(vehicle, index) => (
            <VehicleItem
              key={`${vehicle.make}-${vehicle.model}-${index}`}
              data={vehicle}
            />
          )}
        />
      </div>
    </Loader>
  );
};

export const SelectedVehicle: React.FC<{ vehicle: Vehicle }> = ({
  vehicle
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="selected-vehicle">
      <div className="selected-vehicle__title"> {t("selected.title")} </div>
      <VehicleItem hideSelect data={vehicle} />
    </div>
  );
};
