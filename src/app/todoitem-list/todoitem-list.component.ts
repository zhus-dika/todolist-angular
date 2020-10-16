import { Component, OnInit } from '@angular/core';
import { todoitems } from '../todoitems';

@Component({
  selector: 'app-todoitem-list',
  templateUrl: './todoitem-list.component.html',
  styleUrls: ['./todoitem-list.component.css']
})
export class TodoitemListComponent implements OnInit {
  todoitems = todoitems;
  constructor() { }

  ngOnInit(): void {
  }

}
