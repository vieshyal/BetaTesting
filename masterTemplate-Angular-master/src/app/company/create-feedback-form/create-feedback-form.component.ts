import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { FeedbackService } from 'src/app/services/feedback.service';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';
import { from } from 'rxjs';
import { BetaService } from 'src/app/services/beta.service';

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
  schForm;
  betaList;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private feedbackService: FeedbackService,
    private router: Router,
    private toastr: NbToastrService,
    private betaService: BetaService
  ) {}

  ngOnInit(): void {
    this.scheduleForm();
    this.fetchBeta();
  }

  fetchBeta() {
    this.betaService
      .getByCompany(this.companyService.currentCompany._id)
      .subscribe((data) => {
        console.log(data);
        this.betaList = data;
      });
  }

  scheduleForm() {
    this.schForm = this.fb.group({
      company: this.companyService.currentCompany._id,
      beta: '',
      users: Array,
      endDate: '',
      created: new Date(),
      form: {},
    });
  }
  submitFeedbackForm() {
    let formdata = this.schForm.value;

    this.feedbackService.addFeedback(formdata).subscribe((res) => {
      console.log(res);
      this.toastr.success('Your Feedback has been Recorded', 'Success');
    });
  }

  addQuestion() {
    this.feedbackform.questions.push({
      name: 'Sample Question 1',
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
    let formdata = this.schForm.value;
    formdata.form = this.feedbackform;

    console.log(formdata);

    this.feedbackService.addFeedback(formdata).subscribe((res) => {
      console.log(res);
    });
  }
}
