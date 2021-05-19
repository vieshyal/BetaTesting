import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CompanyService } from 'src/app/services/company.service';
import{ BetaTestService} from 'src/app/services/betatest.service';
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
  constructor(
    private fb: FormBuilder,
    private betatestService: BetaTestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initAddBetaTestForm();
  }

  initAddBetaTestForm() {
    this.BetaTestform = this.fb.group({
      title: '',
      type: '',
      eligiblity: '',
      
      users: [],
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
    this.betatestService.uploadAvatar(formData).subscribe((response) => {
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
    formdata.avatar = this.avatarImage;
    this.betatestService.addBetaTest(formdata).subscribe((res) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Great!',
        text: 'Successfully Registered, Now Login to Continue.',
      }).then(() => {
        this.router.navigate(['/company/layout']);
      });
    });
  }
}
