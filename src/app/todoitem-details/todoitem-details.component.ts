import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import {TodoitemService} from '../shared/services/todoitem.service';
@Component({
  selector: 'app-todoitem-details',
  templateUrl: './todoitem-details.component.html',
  styleUrls: ['./todoitem-details.component.css']
})
export class TodoitemDetailsComponent implements OnInit {
  todoitem: any;
  detailsForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,
              private todoitemService: TodoitemService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('todoitemId'), 10);
      this.todoitemService.getOne(id).subscribe(
        (res) => {
          this.todoitem = res;
          console.log(this.todoitem);
          this.detailsForm = new FormGroup({
            content: new FormControl(this.todoitem.content, Validators.required),
            status: new FormControl(this.todoitem.status)
          });
        } ,
        error => {
          console.warn('error');
        }
      );
    });
  }
  changeStatus(status): void {
    this.todoitem.status = status;
  }
  saveChanges(): void {
    const updatedTodoitem = {
      id: this.todoitem.id,
      content: this.detailsForm.get('content').value,
      status: this.detailsForm.get('status').value,
      created: this.todoitem.created
    };
    this.todoitemService.update(updatedTodoitem).subscribe(
      (res) => {
        this.todoitem = res;
      } ,
      error => {
        console.warn('error');
      }
    );
  }
}
