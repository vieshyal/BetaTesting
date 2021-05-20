import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { app_config } from 'src/config';

@Component({
  selector: 'company-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class CompanyLayoutComponent implements OnInit {
  title = app_config.title;
  url = app_config.api_url + '/';
  sidebarItems = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: 'profile',
    },
    {
      title: 'Publish new Test',
      icon: 'person-outline',
      link: 'addtest',
    },
    {
      title: 'Manage Tests',
      icon: 'person-outline',
      link: 'managetests',
    },
  ];
  constructor(public companyService: CompanyService) {}

  ngOnInit(): void {}
}
