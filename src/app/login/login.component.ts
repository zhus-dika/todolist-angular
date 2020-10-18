import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  aSub: Subscription;
  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']){
      } else if(params['accessDenied']){
        //You have to authorize
      }
    })
  }
  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  // tslint:disable-next-line:typedef
  login() {
    this.loginForm.disable();
    this.aSub = this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/list']);
      },
      error => {
        console.warn('error');
        this.loginForm.enable();
      }
    );
  }
}
