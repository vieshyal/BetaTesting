import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BetaService } from 'src/app/services/beta.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enroll-test',
  templateUrl: './enroll-test.component.html',
  styleUrls: ['./enroll-test.component.css'],
})
export class EnrollTestComponent implements OnInit {
  betaData;
  constructor(
    private betaService: BetaService,
    private userService: UserService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchBeta();
  }

  fetchBeta() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.betaService.getById(id).subscribe((data) => {
      console.log(data);
      this.betaData = data;
    });
  }

  alreadyEnrolled() {
    return this.betaData.users.includes(this.userService.currentUser._id);
  }

  enroll() {
    if (!this.alreadyEnrolled()) {
      this.betaService
        .enrollUser(this.betaData._id, {
          users: this.userService.currentUser._id,
        })
        .subscribe((res) => {
          console.log(res);
          this.fetchBeta();
        });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'You are Already Enrolled',
      });
    }
  }
}
