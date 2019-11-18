import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnecttodayService {
  constructor(private http: HttpClient) {}

  sendData(data: any) {
    return this.http.post('http://localhost/saveContactForm.php', data);
  }
}
