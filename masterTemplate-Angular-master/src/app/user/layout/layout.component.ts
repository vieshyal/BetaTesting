import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { app_config } from 'src/config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  title = app_config.title;
  url = app_config.api_url + '/';
  sidebarItems = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: 'profile',
    },
    {
      title: 'Enroll Test',
      icon: 'person-outline',
      link: 'enrolltest',
    },
    
  ];

  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}