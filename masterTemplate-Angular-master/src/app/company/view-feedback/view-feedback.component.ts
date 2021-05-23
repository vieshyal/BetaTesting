import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import {FeedbackService} from 'src/app/services/feedback.service';

import { CompanyService } from 'src/app/services/company.service';
import { app_config } from 'src/config';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  feedbackList: any;
  loadingFeedback = true;
  url = app_config.api_url + '/';

  constructor(
    public feedbackService: FeedbackService,
    private router: Router,
    private companyService: CompanyService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.fetchTests();
  }

  fetchTests() {
    this.feedbackService.getAll().subscribe((res) => {
      console.log(res);
      this.feedbackList = res;
      this.loadingFeedback = false;
    });
  }

  deletefee(id) {
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
        this.feedbackService.deleteFeedback(id).subscribe((res) => {
          console.log(res);
          this.toastrService.info('Your feedback has been deleted', 'Success');
          this.fetchTests();
        });
      }
    });
  }
  updateFeedback(id) {}

 
}
