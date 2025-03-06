import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefindComponent } from './employeefind.component';

describe('EmployeefindComponent', () => {
  let component: EmployeefindComponent;
  let fixture: ComponentFixture<EmployeefindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeefindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
