import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {environment} from '../../environments/environment';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataWrapperService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getData(serviceUrl: string): Observable<any> {
    return this.http.get<any>(environment.api.base + serviceUrl,
      {headers: this.headers});
  }
}
