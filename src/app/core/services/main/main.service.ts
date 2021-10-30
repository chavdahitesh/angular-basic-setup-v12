import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  _india_universities_list_url = environment.india_universities_list;
  constructor(private httpClient: HttpClient) {}

  getUniList() {
    try {
      return this.httpClient.get(this._india_universities_list_url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
      });
    } catch (error) {
      console.log('error::', error);

      return Observable.throw(error.message);
    }
  }
}
