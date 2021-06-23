import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ContactusService } from 'src/app/services/contactus.service';
import Swal from 'sweetalert2';
import{app_config} from 'src/config';
import { NbToastrService } from '@nebular/theme';
//import { AnyMxRecord } from 'node:dns';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.css'],
})
export class ViewqueryComponent implements OnInit {
  queryList: any;
  loadingUsers = true;
  

  constructor(
    public contactService: ContactusService,
    private router: Router,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.fetchQueries();
  }

  fetchQueries() {
    this.contactService.getAll().subscribe((res) => {
      this.queryList = res;
      this.loadingUsers = false;
    });
  }

  deleteQuery(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.delete(id).subscribe((res) => {
          console.log(res);
          this.toastrService.info('Query has been deleted', 'Success');
          this.fetchQueries();
        });
      }
    });
  }

  updateQueries(id) {}
}
