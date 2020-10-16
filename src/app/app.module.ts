import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { TodoitemListComponent} from './todoitem-list/todoitem-list.component';
import {RouterModule} from '@angular/router';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodoitemDetailsComponent } from './todoitem-details/todoitem-details.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    TodoitemComponent,
    TodoitemListComponent,
    TodoitemDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: TodoitemListComponent},
      {path: 'todoitem/:todoitemId', component: TodoitemDetailsComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
