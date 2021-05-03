import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css'],
})
export class ManageUsersComponent implements OnInit {
  usersList: any;
  loadingUsers = true;

  constructor(
    public userService: UserService,
    private router: Router,
    public companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAll().subscribe((res) => {
      this.usersList = res;
      this.loadingUsers = false;
    });
  }

  deleteUser(id) {
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
            text: 'users account has been deleted.',
            icon: 'info',
          }).then(() => {
            this.fetchUsers();
          });
        });
      }
    });
  }

  updateUser(id) {}
}
