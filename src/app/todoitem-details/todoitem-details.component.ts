import { Component, OnInit } from '@angular/core';
import {todoitems} from '../todoitems';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
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
              private location: Location) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.todoitem = todoitems[+params.get('todoitemId')];
    });
    this.detailsForm = new FormGroup({
      content: new FormControl('learn Angular', Validators.required),
      status: new FormControl('created')
    });
  }
  // tslint:disable-next-line:typedef
  saveChanges() {
    console.log(this.detailsForm);
    this.location.back();
  }
}
