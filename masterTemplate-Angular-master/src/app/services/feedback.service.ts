import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  url = app_config.api_url + '/feedback';
  constructor(private http: HttpClient, private router: Router) {}

  getById(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  addFeedback(data: any) {
    return this.http.post(this.url + '/add/', data);
  }

  deleteFeedback(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }

  getAll() {
    return this.http.get(this.url + '/getall');
  }

  update(id: String, data: Object) {
    return this.http.put(this.url + '/update/' + id, data);
  }
}
