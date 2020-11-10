import { CarAPI } from "api";
import { MakesStore, ModelsStore, VehiclesStore } from "store/model";
import { createDataSource } from "./index";

export const makes: MakesStore = createDataSource(CarAPI.GET.carMakes);

export const models: ModelsStore = createDataSource(CarAPI.GET.carModels);

export const vehicles: VehiclesStore = createDataSource(CarAPI.GET.vehicles);
