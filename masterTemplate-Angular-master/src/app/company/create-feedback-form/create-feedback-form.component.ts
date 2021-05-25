import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { FeedbackService } from 'src/app/services/feedback.service';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-feedback-form',
  templateUrl: './create-feedback-form.component.html',
  styleUrls: ['./create-feedback-form.component.css'],
})
export class CreateFeedbackFormComponent implements OnInit {
  feedbackform = {
    questions: [
      {
        name: 'Question 1',
        answertype: 'text',
        answer: '',
      },
    ],
    options: {},
  };
  loadingform = true;
  erroMsg: string;
  questionTypes = ['text', 'radio', 'checkbox'];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private feedbackService: FeedbackService,
    private router: Router,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    // this.initFeedbackForm();
  }
  // initFeedbackForm() {
  //   this.feedbackform = this.fb.group({
  //     name: '',
  //     email: '',
  //     question1: '',
  //     question2: '',
  //     question3: '',
  //     question4: '',
  //     question5: '',
  //     question6: '',
  //     company: this.companyService.currentCompany._id,
  //     users: Array,
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     created: new Date(),
  //   });
  // }
  // submitFeedbackForm() {
  //   let formdata = this.feedbackform.value;

  //   this.feedbackService.addFeedback(formdata).subscribe((res) => {
  //     console.log(res);
  //     this.toastr.success('Your Feedback has been Recorded', 'Success');
  //   });
  // }

  addQuestion() {
    this.feedbackform.questions.push({
      name: 'Question 1',
      answertype: 'text',
      answer: '',
    });
  }

  setOptions(e, index) {
    let question = this.feedbackform.questions[index];
    if (
      question['answertype'] == this.questionTypes[1] ||
      question['answertype'] == this.questionTypes[2]
    ) {
      if (!question['options']) {
        this.feedbackform.questions[index]['options'] = [{ text: '' }];
        console.log('ya');
      }
    }

    console.log(question);
  }

  addOption(index) {
    this.feedbackform.questions[index]['options'].push({ text: '' });
  }

  submitForm() {
    console.log(this.feedbackform);
  }
}
