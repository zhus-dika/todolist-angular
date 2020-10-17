import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    login: ['', [Validators.required]],
    password: [null, [Validators.required]]
  });
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login() {
    console.log(this.loginForm);
  }
}
