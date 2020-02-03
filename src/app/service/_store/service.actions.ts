import { createAction, props } from '@ngrx/store';

export const loadServices = createAction(
  '[Service] Load Services'
);

export const loadServicesSuccess = createAction(
  '[Service] Load Services Success',
  props<{ data: any }>()
);

export const loadServicesFailure = createAction(
  '[Service] Load Services Failure',
  props<{ error: any }>()
);
