import { Injectable } from '@angular/core';
import { API_URL } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  get(resource: string): Promise<any> {
    return this.http.get(API_URL + resource).toPromise();
  }

  post(resource: string, body: any) {
    return this.http.post(API_URL + resource, body);
  }

  put(resource: string, body: any) {
    return this.http.put(API_URL + resource, body);
  }

  delete(resource: string, id: number) {
    return this.http.delete(API_URL + resource + '/' + id).toPromise();
  }
}
