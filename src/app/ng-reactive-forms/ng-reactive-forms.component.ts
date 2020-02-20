import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ng-reactive-forms',
  templateUrl: './ng-reactive-forms.component.html',
  styleUrls: ['./ng-reactive-forms.component.css']
})
export class NgReactiveFormsComponent implements OnInit {


  email = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor() { }

  ngOnInit() {
  }
  updateEmail() {
    this.email.setValue('test@shipco.com');
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'test',
      address: {
        street: 'Test'
      }
    });
  }

}
