import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';
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

  getByHashtag(): Observable<any> {
    return this.http.get<any>('https://anymind-recruitment-python-backend.adasia.biz/hashtags/Python?offset=0',
      {headers: this.headers});
  }
}
