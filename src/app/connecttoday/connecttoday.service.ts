import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnecttodayService {
  constructor(private http: HttpClient) {}

  sendData(data: any) {
    return this.http.post('http://www.mocky.io/v2/5d2f640c34000050b664d841', data);
  }
}
