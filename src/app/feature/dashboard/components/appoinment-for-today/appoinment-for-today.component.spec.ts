import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentForTodayComponent } from './appoinment-for-today.component';

describe('AppoinmentForTodayComponent', () => {
  let component: AppoinmentForTodayComponent;
  let fixture: ComponentFixture<AppoinmentForTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentForTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
