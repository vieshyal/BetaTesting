import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class BetaTestService {
  url = app_config.api_url + '/company';
  loggedin = false;
  currentCompany: any;
  constructor(private http: HttpClient, private router: Router) {
    let company = sessionStorage.getItem('company');
    if (company) {
      this.loggedin = true;
      this.currentCompany = JSON.parse(company);
    }
  }

  logout() {
    sessionStorage.removeItem('company');
    this.router.navigate(['/company/login']);
    this.loggedin = false;
  }

  
  addBetaTest(data: any) {
    return this.http.post(this.url + '/add', data);
  }

  deleteBetaTest(data:any) {
    return this.http.delete(this.url + '/delete/' + data);
  }
  getBetaTestById(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }
  getBetaTestByType(type:String) {
    return this.http.get(this.url + '/getbytype/' + type);
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
