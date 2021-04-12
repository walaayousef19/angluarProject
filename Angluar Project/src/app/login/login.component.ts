import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from '../Shared class/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  LoginForm=this.fb.group({
    password:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^[A-Za-z]+@[a-zA-Z0-9]/)]]
  
  })


  get password ()
  {
    return this.LoginForm.get('password');
  }
  get email()
  {
    return this.LoginForm.get('email');

  }
  ngOnInit(): void {
  }

}
