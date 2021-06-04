import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
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

  addCompany(data: any) {
    return this.http.post(this.url + '/add', data);
  }
  addBetaTest(data: any) {
    return this.http.post(this.url + '/add', data);

  }
  getById(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  getByName(name){
    return this.http.get(this.url + '/getbyname' +name);
  }

  deleteCompany(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }
  getCompanyByEmail(email: String) {
    return this.http.get(this.url + '/getbyemail/' + email);
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
  refreshCompany() {
    this.http
      .get(this.url + '/getbyid/' + this.currentCompany._id)
      .subscribe((companydata) => {
        this.currentCompany =companydata;
        sessionStorage.setItem('company', JSON.stringify(companydata));
      });
  }
}
