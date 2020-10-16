import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  remove() {
  }
}
