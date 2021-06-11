import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import {ContactusService} from 'src/app/services/contactus.service';
import Swal from 'sweetalert2';
import { from } from 'rxjs';

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
  
    private contactusService: ContactusService,
    private router: Router,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.initContactusForm();
  }

  initContactusForm() {
    this.contactusform = this.fb.group({
      name: '',
      
      email: '',
      subject: '',
      
      created: new Date(),
    
    });
  }

  

  
  

  submitContactusForm() {
    let formdata = this.contactusform.value;
   
    this.contactusService.addProblem(formdata).subscribe((res) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Successfully!',
        text: 'Your Message is sent',

      })
    });
  }
}
