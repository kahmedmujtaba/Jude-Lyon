import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConnecttodayService } from './connecttoday.service';
import { GLOBAL_VARS } from '@app/shared/globals';

@Component({
  selector: 'app-connecttoday',
  templateUrl: './connecttoday.component.html',
  styleUrls: ['./connecttoday.component.scss'],
  providers: [ReactiveFormsModule]
})
export class ConnecttodayComponent implements OnInit {
  visitorData: any;
  visitorForm: FormGroup;
  isFormSubmitted: boolean = false;
  countries: any;
  formSubmissionErrorMsg = '';
  formSubmissionSuccessMsg = '';

  constructor(private connecttodayService: ConnecttodayService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.visitorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [],
      city: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.pattern(GLOBAL_VARS.REGEX.NUMERIC_FIELD),
          //Validators.minLength(8),
          Validators.maxLength(15)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      agreement: [false, Validators.required]
    });
  }

  get fc() {
    return this.visitorForm.controls;
  }

  //whenever form is submitted, this function is called to so that isFormSubmitted get true and all form validations can be checked
  submitContactForm() {
    this.isFormSubmitted = true;
    if (this.visitorForm.invalid) {
      this.formSubmissionErrorMsg = 'Please fix the errors to proceed';
      return;
    }
    // Add validation
    this.connecttodayService.sendData(this.visitorForm.value).subscribe(
      (response: any) => {
        this.isFormSubmitted = false;
        if (response.success) {
          this.formSubmissionErrorMsg = '';
          this.formSubmissionSuccessMsg = response.message;
          this.visitorForm.reset();
        } else {
          this.formSubmissionErrorMsg = response.message;
        }
      },
      err => {
        this.isFormSubmitted = false;
        this.formSubmissionSuccessMsg = '';
        this.formSubmissionErrorMsg = 'Oop! There is some server error, please try later.';
      }
    );
  }
}
