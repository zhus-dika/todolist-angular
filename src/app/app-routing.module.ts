import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login/login.component';
import {TodoitemListComponent} from './todoitem-list/todoitem-list.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './shared/classes/auth.guard';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {TodoitemComponent} from './todoitem/todoitem.component';
import {NewTodoitemComponent} from './new-todoitem/new-todoitem.component';
import {TodoitemDetailsComponent} from './todoitem-details/todoitem-details.component';
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'list', component: TodoitemListComponent},
      {path: 'new', component: NewTodoitemComponent},
      {path: 'todoitem/:todoitemId', component: TodoitemDetailsComponent},
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    BrowserModule
  ]
})
export class AppRoutingModule {

}
