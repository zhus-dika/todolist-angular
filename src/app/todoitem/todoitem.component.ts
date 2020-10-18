import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {TodoitemService} from '../shared/services/todoitem.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem;
  todoitemId: number;
  constructor(
    private todoitemService: TodoitemService
  ) { }

  ngOnInit(): void {

  }
  remove(): void {
    this.todoitemService.delete(this.todoitem.id).subscribe(
      (res) => {
        console.log('Item deleted');
        location.reload();
      } ,
      error => {
        console.warn('error');
      }
    );
  }
}
