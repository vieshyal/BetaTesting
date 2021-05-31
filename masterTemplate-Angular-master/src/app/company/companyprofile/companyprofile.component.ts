import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { app_config } from 'src/config';
import Swal from 'sweetalert2';
import {CompanyService} from 'src/app/services/company.service';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css'],
})
export class CompanyprofileComponent implements OnInit {
  url = app_config.api_url + '/';
  currentCompany: any;
  updateForm;
  formReady = false;
  avatarImage: any;
  erroMsg: string;
  imgURL: string | ArrayBuffer;

  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.currentCompany = this.companyService.currentCompany;
    this.initUpdateForm(this.currentCompany);
  }

  initUpdateForm(data) {
    this.updateForm = this.fb.group(data);
    this.formReady = true;
  }
  updatePassword(newPwd, conPwd) {
    if (newPwd != conPwd) {
      Swal.fire({
        icon: 'error',
        title: 'Really?',
        text: "Passwords doesn't match.",
      });
      return;
    }

    this.companyService
      .update(this.currentCompany._id, { password: newPwd })
      .subscribe((res) => {
        this.companyService.refreshCompany();
        this.currentCompany = this.companyService.currentCompany;
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Password updated.',
        });
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
    this.companyService.uploadAvatar(formData).subscribe((response) => {
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

  updateProfile() {
    let formdata = this.updateForm.value;
    formdata.avatar = this.avatarImage;
    this.companyService
      .update(this.currentCompany._id, formdata)
      .subscribe((data) => {
        this.companyService.refreshCompany();
        this.currentCompany = this.companyService.currentCompany;
        this.toastr.success('Profile Updated', 'Success!');
      });
  }
}