import { createReducer, on } from '@ngrx/store';
import {
  loadData,
  loadDataFailure,
  loadDataSuccess,
} from './store.data.actions';
import { StoreData } from '../models/store-data.model';

export interface DataState {
  data: StoreData | null;
  loading: boolean;
  error: string | null;
}

export const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

export const dataReducer = createReducer(
  initialState,
  on(loadData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadDataSuccess, (state, { data }) => ({
    ...state,
    data: data,
    loading: false,
    error: null,
  })),
  on(loadDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
