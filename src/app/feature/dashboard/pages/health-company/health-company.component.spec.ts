import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCompanyComponent } from './health-company.component';

describe('HealthCompanyComponent', () => {
  let component: HealthCompanyComponent;
  let fixture: ComponentFixture<HealthCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
