import { Option } from "utils";
import { Action, Computed } from "easy-peasy";
import { DataSource } from "./data-source";

// Data source store used to contain information about the car makes/brands
export type MakesStore = DataSource<CarMake>;
// Data source store used to contain information about the car models fetched for given brand/make
export type ModelsStore = DataSource<CarModel, { make: string }>;
// Data source store used to contain information about the vehicles fetched for given brand/make and model
export type VehiclesStore = DataSource<
  Vehicle,
  { make: string; model: string }
>;

// Main store used
export type Store = {
  makes: MakesStore;
  models: ModelsStore;
  vehicles: VehiclesStore;
  selectedVehicle: Option<Vehicle>;
  selectVehicle: Action<Store, Vehicle>;
  didNetworkFail: Computed<Store, boolean>;
};

// Car's make, e.g BMW, Ford
export type CarMake = string;
// Car's model, e.g 3er (BMW)
export type CarModel = string;

export type Vehicle = {
  make: CarMake;
  model: CarModel;
  // Engine power in Horsepower units
  enginePowerPS: number;
  // Engine power in KiloWatts
  enginePowerKW: number;
  fuelType: string;
  bodyType: string;
  // Engine capacity in cc
  engineCapacity: number;
};
