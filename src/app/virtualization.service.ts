import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vm } from './Vm.model';

@Injectable({
  providedIn: 'root'
})
export class VirtualizationService {
  private BASE_URL = 'http://127.0.0.1:5000';

  constructor(private _http: HttpClient) {
  }
  getHostName(): Observable<any> {
    return this._http.get(this.BASE_URL);
  }
  getAllDefinedDomains(): Observable <Vm[]> {
    return this._http.get<Vm[]>(`${this.BASE_URL}/vms`);
  }
  createVm(str: string): Observable <any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('content-Type', 'application/json');
    return this._http.post(`${this.BASE_URL}/create`,
    {'vm_name': str},
    {headers: headers}
    );
  }
  deleteVm(str: string): Observable <any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('content-Type', 'application/json');
    return this._http.post(`${this.BASE_URL}/delete`,
    {'vm_name': str},
    {headers: headers}
    );
  }

}
