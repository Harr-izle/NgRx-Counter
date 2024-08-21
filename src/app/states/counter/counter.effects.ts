import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from '../app.state';
import { setCount } from './counter.action';

@Injectable()
export class CounterEffects {
  saveCountToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setCount),
        tap(({ count }) => {
          localStorage.setItem('count', count.toString());
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}