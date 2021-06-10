import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BetaService } from 'src/app/services/beta.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
})
export class AddFeedbackComponent implements OnInit {
  beta;
  answerform;
  constructor(
    private userService: UserService,
    private betaService: BetaService,
    private actRoute: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.betaService.getById(id).subscribe((data: any) => {
      console.log(data);
      this.beta = data;
      this.answerform = this.getUnfilledForm(data.forms);
      console.log(this.answerform);
    });
  }

  submitFeedback() {
    let feedbackForm = this.getUnfilledForm(this.beta.forms);
    feedbackForm.users.push(this.userService.currentUser._id);
    // console.log(this.beta);
    // console.log(this.answerform);
    this.feedbackService.getById(this.answerform._id).subscribe((data: any) => {
      console.log(data);
      if (data.answers) {
        data.answers.push(this.answerform.form);
      } else {
        data.answers = [this.answerform.form];
      }

      this.feedbackService
        .update(this.answerform._id, data)
        .subscribe((data) => {
          console.log(data);
        });
    });
  }

  getUnfilledForm(forms) {
    for (let form of forms) {
      if (!form.users.includes(this.userService.currentUser._id)) {
        console.log(form);
        return form;
      }
    }
  }
}
