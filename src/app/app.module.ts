import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { TodoitemListComponent} from './todoitem-list/todoitem-list.component';
import {RouterModule} from '@angular/router';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodoitemDetailsComponent } from './todoitem-details/todoitem-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewTodoitemComponent } from './new-todoitem/new-todoitem.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    TodoitemComponent,
    TodoitemListComponent,
    TodoitemDetailsComponent,
    NewTodoitemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: TodoitemListComponent},
      {path: 'todoitem/:todoitemId', component: TodoitemDetailsComponent},
      {path: 'new', component: NewTodoitemComponent},
      {path: 'login', component: LoginComponent}
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
