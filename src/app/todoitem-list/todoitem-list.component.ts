import { Component, OnInit } from '@angular/core';
import { todoitems } from '../todoitems';

@Component({
  selector: 'app-todoitem-list',
  templateUrl: './todoitem-list.component.html',
  styleUrls: ['./todoitem-list.component.css']
})
export class TodoitemListComponent implements OnInit {
  todoitems = todoitems;
  filteredTodoitems = todoitems;
  selectedStatus = 'all';
  constructor() { }

  ngOnInit(): void {
    this.filteredTodoitems = this.todoitems.filter(ele => ele.status === this.selectedStatus || this.selectedStatus === 'all');
  }
  // tslint:disable-next-line:typedef
  changeFilter() {
    this.filteredTodoitems = this.todoitems.filter(ele => ele.status === this.selectedStatus || this.selectedStatus === 'all');
  }
}
