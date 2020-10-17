import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService) {
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login() {
    this.auth.login(this.loginForm.value).subscribe(
      () => console.log('login success'),
      error => {
        console.warn('error');
      }
    );
  }
}
