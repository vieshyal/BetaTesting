import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BetaService } from 'src/app/services/beta.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
})
export class AddFeedbackComponent implements OnInit {
  beta;
  constructor(
    private userService: UserService,
    private betaService: BetaService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.betaService.getById(id).subscribe((data) => {
      console.log(data);
      this.beta = data;
    });
  }
}
