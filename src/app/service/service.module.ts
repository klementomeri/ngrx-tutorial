import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceListComponent} from './service-list/service-list.component';
import {ServiceFormComponent} from './service-form/service-form.component';
import {ServiceRoutingModule} from 'src/app/service/service-routing.module';
import {MatTableModule} from '@angular/material/table';
import {StoreModule} from '@ngrx/store';
import * as fromService from 'src/app/service/_store/service.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ServiceEffects} from 'src/app/service/_store/service.effects';


@NgModule({
  declarations: [ServiceListComponent, ServiceFormComponent],
  imports: [
    ServiceRoutingModule,
    CommonModule,
    MatTableModule,
    StoreModule.forFeature(fromService.serviceFeatureKey, fromService.reducer),
    EffectsModule.forFeature([ServiceEffects])
  ],
})
export class ServiceModule {
}
