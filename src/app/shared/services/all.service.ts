import { Injectable } from '@angular/core';
import { API_URL } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  get(resource): Promise<any> {
    return this.http.get(API_URL + resource).toPromise();
  }
}
