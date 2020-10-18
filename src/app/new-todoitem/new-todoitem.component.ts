import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TodoitemService} from '../shared/services/todoitem.service';

@Component({
  selector: 'app-new-todoitem',
  templateUrl: './new-todoitem.component.html',
  styleUrls: ['./new-todoitem.component.css']
})
export class NewTodoitemComponent implements OnInit {
  detailsForm: FormGroup;
  // tslint:disable-next-line:new-parens
  created = (new Date).toISOString();
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,
              private todoitemService: TodoitemService) { }
  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      content: new FormControl(null, Validators.required),
      status: new FormControl('created')
    });
  }
  // tslint:disable-next-line:typedef
  saveChanges() {
    this.todoitemService.create(this.detailsForm.get('content').value).subscribe(
      (res) => {
        console.log(res);
      } ,
      error => {
        console.warn('error');
      }
    );
    this.location.back();
  }

}
