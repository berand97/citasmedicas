import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthCompanyComponent } from './create-health-company.component';

describe('CreateHealthCompanyComponent', () => {
  let component: CreateHealthCompanyComponent;
  let fixture: ComponentFixture<CreateHealthCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHealthCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHealthCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
