import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginForm = this.fb.group({
    email:['',Validators.required],
    password:['', Validators.required, Validators.minLength(6), Validators.maxLength(25)]
  })
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value)
    this.router.navigateByUrl('dashboard')
    this.authService
  }

}
