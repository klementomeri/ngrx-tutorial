import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServiceListComponent} from 'src/app/service/service-list/service-list.component';
import {ServiceFormComponent} from 'src/app/service/service-form/service-form.component';

const routes: Routes = [
  {path: 'list', component: ServiceListComponent, pathMatch: 'full'},
  {path: 'form', component: ServiceFormComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {
}
