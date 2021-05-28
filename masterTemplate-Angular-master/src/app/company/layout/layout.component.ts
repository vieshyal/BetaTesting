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
  url = app_config.api_url + '/companyprofile';
  sidebarItems = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: 'companyprofile',
    },
    {
      title: 'Publish new Test',
      icon: 'file-text',
      link: 'addtest',
    },
    {
      title: 'Manage Tests',
      icon: 'eye',
      link: 'managetests',
    },
    {
      title: 'Feedback Form',
      icon: 'file-text',
      link: 'feedback form',
    },
    {
      title: 'View Feedback',
      icon: 'eye',
      link: 'view feedback',
    },
  ];
  constructor(public companyService: CompanyService) {}

  ngOnInit(): void {}
}
