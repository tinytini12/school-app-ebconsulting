import { Injectable } from '@angular/core';
import { API_URL } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  resource = 'student';

  constructor(private http: HttpClient) { }

  get(): Promise<any> {
    return this.http.get(API_URL + this.resource).toPromise();
  }
}
