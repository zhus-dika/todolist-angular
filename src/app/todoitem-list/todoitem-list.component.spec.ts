import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoitemListComponent } from './todoitem-list.component';

describe('TodoitemListComponent', () => {
  let component: TodoitemListComponent;
  let fixture: ComponentFixture<TodoitemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoitemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
