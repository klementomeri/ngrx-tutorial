import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadServices} from 'src/app/service/_store/service.actions';
import {selectServices, selectServicesError} from 'src/app/service/_store/service.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  constructor(private store: Store<any>) {
    this.dataSource = store.select(selectServices);
    this.error = store.select(selectServicesError);
  }

  /** Columns displayed in the table */
  displayedColumns = ['id', 'shop', 'service_types', 'licence_plate'];
  dataSource: Observable<any[]>;
  error: Observable<any>;

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.store.dispatch(loadServices());
  }
}
