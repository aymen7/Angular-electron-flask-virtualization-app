import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualizationService {

  constructor(private _http: HttpClient) {}
  getHostName(): Observable<any> {
    return this._http.get('http://127.0.0.1:5000/');
  }
  getAllDefinedDomains(): Observable <any> {
    return this._http.get('http://127.0.0.1:5000/vms');
  }

}
