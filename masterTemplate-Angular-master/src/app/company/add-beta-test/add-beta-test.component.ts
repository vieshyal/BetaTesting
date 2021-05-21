import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BetaService } from 'src/app/services/beta.service';

import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-beta-test',
  templateUrl: './add-beta-test.component.html',
  styleUrls: ['./add-beta-test.component.css'],
})
export class AddBetaTestComponent implements OnInit {
  BetaTestform: any;
  avatarImage: any;
  erroMsg: string;
  imgURL: string | ArrayBuffer;
  types = ['Webapp', 'Software', 'Game'];
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private betaService: BetaService,
    private router: Router,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.initAddBetaTestForm();
  }

  initAddBetaTestForm() {
    this.BetaTestform = this.fb.group({
      title: '',
      type: '',
      eligibility: '',
      company: this.companyService.currentCompany._id,
      users: Array,
      startDate: new Date(),
      endDate: new Date(),
      created: new Date(),
    });
  }

  uploadAvatar(event: any) {
    let files = event.target.files;
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire('Images Only');
      return;
    }
    this.preview(event.target.files);
    let formData = new FormData();
    this.avatarImage = files[0].name;
    formData.append('image', files[0], files[0].name);
    this.betaService.uploadAvatar(formData).subscribe((response) => {
      console.log(response);
    });
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.erroMsg = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  submitAddBetaTestForm() {
    let formdata = this.BetaTestform.value;
    formdata.thumb = this.avatarImage;
    this.betaService.addBetaTest(formdata).subscribe((res) => {
      console.log(res);
      this.toastr.success('Your BETA TEST has been published', 'Success');
    });
  }
}
