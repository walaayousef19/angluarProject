import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validate } from '../Custom Validator/ConfirmPass.validator';

import { User } from '../Shared class/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
hearingAboutUs2:string[]=["from internet","from friend" ];

  registerForm=this.fb.group({
    userName :['',[Validators.required,Validators.pattern(/^[A-Za-z]/)]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^[A-Za-z]+@[a-zA-Z0-9]/)]],
    hearingAboutUs:['',[Validators.required]]
  },{validators:[validate]})

  get userName ()
  {
    return this.registerForm.get('userName');
  }
  get password ()
  {
    return this.registerForm.get('password');
  }
  get confirmPassword ()
  {
    return this.registerForm.get('confirmPassword');
  }
  get email()
  {
    return this.registerForm.get('email');

  }
  get hearingAboutUs()
  {
    return this.registerForm.get('hearingAboutUs');

  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
}
