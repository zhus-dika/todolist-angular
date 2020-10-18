import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../shared/services/todoitem.service';
import {Todoitem} from '../shared/interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todoitem-list',
  templateUrl: './todoitem-list.component.html',
  styleUrls: ['./todoitem-list.component.css']
})
export class TodoitemListComponent implements OnInit {
  filteredTodoitems: any[];
  selectedStatus = 'all';
  constructor(
    private todoitemService: TodoitemService
  ) { }

  ngOnInit(): void {
    this.todoitemService.getAll().subscribe(
      (res) => {
        this.filteredTodoitems = res;
        console.log(this.filteredTodoitems);
      } ,
      error => {
        console.warn('error');
      }
    );
  }
  changeFilter(): void {
    this.filteredTodoitems = this.filteredTodoitems.filter(ele => ele.status === this.selectedStatus || this.selectedStatus === 'all');
  }
}
