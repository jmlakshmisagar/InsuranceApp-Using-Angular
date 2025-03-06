import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecreationComponent } from './employeecreation.component';

describe('EmployeecreationComponent', () => {
  let component: EmployeecreationComponent;
  let fixture: ComponentFixture<EmployeecreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeecreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
