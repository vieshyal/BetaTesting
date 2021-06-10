import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactusform: any;
  
  erroMsg: string;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.initContactusForm();
  }

  initContactusForm() {
    this.contactusform = this.fb.group({
      fullname: '',
      
      email: '',
      subject: '',
      age: 0,
      created: new Date(),
    
    });
  }

  

  
  

  submitContactusForm() {
    let formdata = this.contactusform.value;
   
    this.userService.addProblem(formdata).subscribe((res) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Successfully!',
        text: 'Your Message is sent',

      })
    });
  }
}
