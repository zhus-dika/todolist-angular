import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    repeatPassword: [null, [Validators.required, Validators.minLength(4)]]
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  register() {
    this.registerForm.disable();
    const user = {
      username: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }
    this.auth.register();
  }
}
