import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login/login.component';
import {TodoitemListComponent} from './todoitem-list/todoitem-list.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '',
    component: TodoitemListComponent,
    children: [

    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    BrowserModule
  ]
})
export class AppRoutingModule {

}
