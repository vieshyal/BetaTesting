import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CompanyService } from 'src/app/services/company.service';
import {app_config} from 'src/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-managecompanys',
  templateUrl: './managecompanys.component.html',
  styleUrls: ['./managecompanys.component.css'],
})
export class ManageCompanysComponent implements OnInit {
  companysList: any;
  loadingCompanys = true;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private toastrService:NbToastrService,
  ) {}

  ngOnInit(): void {
    this.fetchCompanys();
  }

  fetchCompanys() {
    this.companyService.getAll().subscribe((res) => {
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
        this.companyService.deleteCompany(id).subscribe((res) => {
          console.log(res);
          this.toastrService.info('Company has been deleted', 'Success');
          this.fetchCompanys();
        });
      }
    });
  }

  updateCompany(id) {}
}
