import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BetaService } from 'src/app/services/beta.service';
import { CompanyService } from 'src/app/services/company.service';
import { app_config } from 'src/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-beta-test',
  templateUrl: './manage-beta-test.component.html',
  styleUrls: ['./manage-beta-test.component.css'],
})
export class ManageBetaTestComponent implements OnInit {
  betaList: any;
  loadingBeta = true;
  url = app_config.api_url + '/';

  constructor(
    public betaService: BetaService,
    private router: Router,
    private companyService: CompanyService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.fetchTests();
  }

  fetchTests() {
    this.betaService
      .getByCompany(this.companyService.currentCompany._id)
      .subscribe((res) => {
        console.log(res);
        this.betaList = res;
        this.loadingBeta = false;
      });
  }

  deleteBeta(id) {
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
        this.betaService.deleteTest(id).subscribe((res) => {
          console.log(res);
          this.toastrService.info('Your BETA TEST has been deleted', 'Success');
          this.fetchTests();
        });
      }
    });
  }

  updateBeta(id) {}
}
