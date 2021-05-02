import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-companys',
  templateUrl: './manage-companys.component.html',
  styleUrls: ['./manage-companys.component.css'],
})
export class ManageCompanysComponent implements OnInit {
  companysList: any;
  loadingCompanys = true;

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCompanys();
  }

  fetchCompanys() {
    this.userService.getAll().subscribe((res) => {
      this.companysList = res;
      this.loadingCompanys = false;
    });
  }

  deleteCompany(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe((res) => {
          console.log(res);
          Swal.fire({
            title: 'Deleted!',
            text: 'companys account has been deleted.',
            icon: 'info',
          }).then(() => {
            this.fetchCompanys();
          });
        });
      }
    });
  }

  updateCompany(id) {}
}