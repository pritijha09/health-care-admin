import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/_services/loaderService/loader.service';
import { NgxSpinnerService } from "ngx-spinner";  



@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;


  constructor(private loaderService: LoaderService, private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show(); 

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.SpinnerService.hide();
    }, 5000);
   }
}
