import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  url = app_config.api_url + '/company';
 

  constructor(private http: HttpClient, private router: Router) {
    
    
  }

  addCompany(data: any) {
    return this.http.post(this.url + '/add', data);
  }



  deleteCompany(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }

  getAll() {
    return this.http.get(this.url + '/getall');
  }

  update(id: String, data: Object) {
    return this.http.put(this.url + '/update/' + id, data);
  }

  uploadAvatar(file: any) {
    return this.http.post(app_config.api_url + '/util/addimg', file);
  }

  

  
}