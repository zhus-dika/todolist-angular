import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoitemComponent } from './new-todoitem.component';

describe('NewTodoitemComponent', () => {
  let component: NewTodoitemComponent;
  let fixture: ComponentFixture<NewTodoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
