import { Action, Thunk, thunk, action } from "easy-peasy";
import { RequestStatus } from "api";
import { Option } from "utils";

// Data source used to fetch and save data from given API.
// It contains actions and thunks needed to fetch and save the data.
// It also contains information about request status to determine whether the request
// is loading, succeeded or failed.
export type DataSource<T, P = void> = {
  // All possible variants for current selection
  all: T[];
  // Currently selected variant of the data
  selected: Option<T>;
  // Action used to save selected data
  setSelected: Action<DataSource<T, P>, Option<T>>;
  // Thunk used to fetch data from the API
  fetch: Thunk<DataSource<T, P>, P>;
  // Enum with information about request
  requestStatus: RequestStatus;
  // Action to change request's status
  toggleRequestStatus: Action<DataSource<T, P>, RequestStatus>;
  // Action used to save data in all
  save: Action<DataSource<T, P>, T[]>;
};

export const createDataSource = <T, P>(
  request: (payload: P) => Promise<T[]>
): DataSource<T, P> => ({
  all: [],
  selected: Option.none(),
  setSelected: action((state, payload) => {
    // For some reason the state has weirdly shaped type that causes error
    // with the custom defined Option type.
    state.selected = payload as any;
  }),
  // This thunk passes payload to the given API request function
  // and keeps track of the request status to inform components
  // whether they should render loading, error or data screen.
  fetch: thunk(async (actions, payload: P) => {
    actions.toggleRequestStatus(RequestStatus.Loading);
    const requestStatus = await request(payload)
      .then((data) => {
        actions.save(data);
        return RequestStatus.Success;
      })
      .catch(() => RequestStatus.Failed);
    actions.toggleRequestStatus(requestStatus);
  }),
  requestStatus: RequestStatus.Idle,
  toggleRequestStatus: action((state, payload) => {
    state.requestStatus = payload;
  }),
  save: action((state, payload) => {
    state.all = payload;
  })
});
