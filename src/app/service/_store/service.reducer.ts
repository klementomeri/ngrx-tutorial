import {Action, createReducer, on} from '@ngrx/store';
import * as ServiceActions from './service.actions';

export const serviceFeatureKey = 'service';

export interface State {
  services: any[];
  error: any;
}

export const initialState: State = {
  services: [],
  error: null
};

const serviceReducer = createReducer(
  initialState,
  on(ServiceActions.loadServicesSuccess, (state, action) => ({...state, services: action.data})),
  on(ServiceActions.loadServicesFailure, (state, action) => ({...state, error: action.error})),
);


export function reducer(state: State | undefined, action: Action) {
  return serviceReducer(state, action);
}
