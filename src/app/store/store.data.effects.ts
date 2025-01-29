import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ApiService } from '../services/api.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadData,
  loadDataFailure,
  loadDataSuccess,
} from './store.data.actions';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      switchMap(() =>
        this.apiService.getData().pipe(
          map((data) => loadDataSuccess({ data })),
          catchError((error) => of(loadDataFailure({ error: error.message })))
        )
      )
    )
  );
}
