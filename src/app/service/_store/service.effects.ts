import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadServices, loadServicesFailure, loadServicesSuccess} from 'src/app/service/_store/service.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ServiceService} from 'src/app/service/_store/service.service';
import {of} from 'rxjs';


@Injectable()
export class ServiceEffects {

  loadServices$ = createEffect(() => this.actions$.pipe(
    ofType(loadServices),
    switchMap(() => this.service.getServices().pipe(
      map((response: any) => loadServicesSuccess({data: response.data})),
      catchError(err => of(loadServicesFailure({error: err.error})))
    ))
  ));


  constructor(private actions$: Actions, private service: ServiceService) {
  }

}
