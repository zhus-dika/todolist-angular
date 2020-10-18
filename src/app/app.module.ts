import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { TodoitemListComponent} from './todoitem-list/todoitem-list.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodoitemDetailsComponent } from './todoitem-details/todoitem-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewTodoitemComponent } from './new-todoitem/new-todoitem.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './shared/classes/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    TodoitemComponent,
    TodoitemListComponent,
    TodoitemDetailsComponent,
    NewTodoitemComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
