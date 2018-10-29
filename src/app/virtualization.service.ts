import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DefinedDomain } from './DefinedDomain.model';

@Injectable({
  providedIn: 'root'
})
export class VirtualizationService {

  constructor(private _http: HttpClient) {}
  getAllDefinedDomains(): Observable <any> {
    return this._http.get('http://127.0.0.1:5000/vms');
  }
}
