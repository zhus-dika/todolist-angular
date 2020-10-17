import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login() {

  }
}
