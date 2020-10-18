import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  aSub: Subscription;
  registerForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    repeatPassword: [null, [Validators.required, Validators.minLength(4)]]
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }
  register(): void {
    this.registerForm.disable();
    const user = {
      username: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };
    this.aSub = this.auth.register(user).subscribe(() => {
      this.router.navigate(['/login'], {
        queryParams: {
          registered: true
        }
      });
    },
      error => {
      console.warn(error);
      this.registerForm.enable();
      }
    );
  }
}
