import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class ContactusService {
  url = app_config.api_url + '/contactus';

  constructor(private http: HttpClient, private router: Router) {}

  addProblem(data: any) {
    return this.http.post(this.url + '/add', data);
  }

  getById(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  getByEmail(email: String) {
    return this.http.get(this.url + '/getbyemail/' + email);
  }

  delete(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }

  getAll() {
    return this.http.get(this.url + '/getall');
  }

  update(id: String, data: Object) {
    return this.http.put(this.url + '/update/' + id, data);
  }
  addContact(id, user_id) {
    return this.http.put(this.url + '/pushupdate/' + id, { contacts: user_id });
  }
}
