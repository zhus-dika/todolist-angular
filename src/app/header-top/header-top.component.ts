import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
  logged: boolean;
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logged = this.auth.isAuthenticated();
  }
  logout(): void {
    this.logged = false;
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
