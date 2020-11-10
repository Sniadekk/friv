import { createStore, createTypedHooks, action, computed } from "easy-peasy";

import { Option } from "utils";
import { RequestStatus } from "api";
import { Store } from "./model";
import { makes, models, vehicles } from "./data-source/sources";

export const store = createStore<Store>({
  makes,
  models,
  vehicles,
  selectedVehicle: Option.none(),
  selectVehicle: action((state, vehicle) => {
    state.selectedVehicle = Option.some(vehicle);
  }),
  // Computed property used to determine whether any of the requests has failed
  didNetworkFail: computed((state) => {
    const requests = [
      state.makes.requestStatus,
      state.models.requestStatus,
      state.vehicles.requestStatus
    ];
    return requests.includes(RequestStatus.Failed);
  })
});

export const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore
} = createTypedHooks<Store>();
