import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalService } from './../../core/services/global/global.service';
import { ToastrService } from 'ngx-toastr';
import { MainService } from './../../core/services/main/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css'],
})
export class UniversitiesComponent implements OnInit {
  university_data: any = [];
  constructor(
    private gs: GlobalService,
    private mainServie: MainService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.university_data = this.gs.loader;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    // this.getData();
  }

  // async getData() {
  //   await this.mainServie.getUniList().subscribe(
  //     (resp: any) => {
  //       if (resp) {
  //         this.university_data = resp;
  //         console.log('resp::', resp);
  //       }
  //     },
  //     (error: any) => {
  //       this.toastr.error(error);
  //     }
  //   );
  // }
}
