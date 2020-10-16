import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoitemDetailsComponent } from './todoitem-details.component';

describe('TodoitemDetailsComponent', () => {
  let component: TodoitemDetailsComponent;
  let fixture: ComponentFixture<TodoitemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoitemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoitemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
