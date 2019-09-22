import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnecttodayService } from './connecttoday.service';
import { GLOBAL_VARS } from '@app/shared/globals';

@Component({
  selector: 'app-connecttoday',
  templateUrl: './connecttoday.component.html',
  styleUrls: ['./connecttoday.component.scss']
})
export class ConnecttodayComponent implements OnInit {
  visitorData: any;
  visitorForm: FormGroup;
  isFormSubmitted: boolean = false;
  countries: any;

  constructor() // private connecttodayService: ConnecttodayService,
  // private formBuilder: FormBuilder,
  {}

  ngOnInit() {
    this.countries = ['Pakistan', 'Iran', 'Iraq'];

    //   this.visitorForm = this.formBuilder.group({
    //     firstName: ['', Validators.required],
    //     lastName: [],
    //     city: ['', Validators.required],
    //     phoneNumber: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.pattern(GLOBAL_VARS.REGEX.NUMERIC_FIELD),
    //         Validators.minLength(8),
    //         Validators.maxLength(15)
    //       ]
    //     ],
    //     email: ['', Validators.required],
    //     country: ['', Validators.required],

    //   })
    // }

    // //whenever form is submitted, this function is called to so that isFormSubmitted get true and all form validations can be checked
    // sendData() {
    //   this.isFormSubmitted = true;
    //   // console.log('form Submitted', this.visitorForm.value);

    //   this.connecttodayService.sendData(this.visitorForm.value).subscribe((response: any) => {
    //     // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Customer details updated' });
    //     alert('customer details updated')
    //   });
  }
}
