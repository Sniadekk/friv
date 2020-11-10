import { CONFIG } from "config";
import { CarMake, CarModel, Vehicle } from "store/model";

const { API } = CONFIG;

export enum RequestStatus {
  Idle,
  Loading,
  Failed,
  Success
}

async function get<T>(url: string): Promise<T> {
  return fetch(`${API}${url}`).then((res) => res.json());
}

function intoParams<P>(payload: P): string {
  const params = Object.entries(payload).map(([key, val]) => `${key}=${val}`);
  return `${params.join("&")}`;
}

function withQueryParams<P>(url: string, payload: P): string {
  return `${url}?${intoParams(payload)}`;
}

// We could as well move all of the car-related api to separate file.
// We could also introduce some sort of cache here
export const CarAPI = {
  GET: {
    carMakes: (): Promise<CarMake[]> => get<CarMake[]>("/makes"),

    carModels: (args: { make: string }): Promise<CarModel[]> =>
      get<CarModel[]>(withQueryParams("/models", args)),

    vehicles: (params: { make: string; model: string }): Promise<Vehicle[]> =>
      get<Vehicle[]>(withQueryParams("/vehicles", params))
  }
};
