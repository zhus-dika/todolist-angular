import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { TodoitemListComponent} from './todoitem-list/todoitem-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
        { path: '', component: TodoitemListComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
