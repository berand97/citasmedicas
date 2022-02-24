import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../shared/service/user.service';

import { UsersComponent } from './users.component';

xdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        { provide: UserService, useValue: UserService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
