import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../shared/services/todoitem.service';
import {Todoitem} from '../shared/interfaces';

@Component({
  selector: 'app-todoitem-list',
  templateUrl: './todoitem-list.component.html',
  styleUrls: ['./todoitem-list.component.css']
})
export class TodoitemListComponent implements OnInit {
  todoitems: Todoitem[];
  filteredTodoitems: Todoitem[];
  selectedStatus = 'all';
  constructor(
    private todoitemService: TodoitemService
  ) { }

  ngOnInit(): void {
    this.todoitemService.getAll().subscribe(
      (res) => {
        this.filteredTodoitems = res;
        this.todoitems = res;
        console.log(this.filteredTodoitems);
      } ,
      error => {
        console.warn('error');
      }
    );
  }
  changeFilter(): void {
    this.filteredTodoitems = this.todoitems.filter(ele => ele.status === this.selectedStatus || this.selectedStatus === 'all');
  }
}
