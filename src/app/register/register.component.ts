import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ],
    ],
    email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    repeatPassword: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
  });
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  register() {
    console.log(this.registerForm);
  }
}
