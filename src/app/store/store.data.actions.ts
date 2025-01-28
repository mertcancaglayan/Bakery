import { createAction, props } from '@ngrx/store';
import { StoreData } from '../models/store-data.model';

export const loadData = createAction('[User] Load Data');

export const loadDataSuccess = createAction(
  '[User] Load Data Success',
  props<{ data: StoreData }>()
);
export const loadDataFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);
