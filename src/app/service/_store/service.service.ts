import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

const API_HOST = environment.apiHost;
const MANAGER = `${API_HOST}/manager`;
const SERVICE = `${MANAGER}/services`;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getServices() {
    return this.http.get(`${SERVICE}`);
  }
}
