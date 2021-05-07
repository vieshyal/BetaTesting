import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {CompanyService} from 'src/app/services/company.service';
import { app_config } from 'src/config';

@Component({
  selector: 'company-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class CompanyLayoutComponent implements OnInit {
  title = app_config.title;
  url = app_config.api_url + '/';
  constructor(public CompanyService: CompanyService) {}

  ngOnInit(): void {}
}