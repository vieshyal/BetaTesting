import { Component, OnInit } from '@angular/core';
import { BetaService } from 'src/app/services/beta.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css'],
})
export class EnrolledComponent implements OnInit {
  betaList;
  constructor(
    private betaService: BetaService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchTests();
  }

  fetchTests() {
    this.betaService
      .getByUser(this.userService.currentUser._id)
      .subscribe((data) => {
        console.log(data);
        this.betaList = data;
      });
  }

  expired(date) {
    return date < new Date();
  }
}
