import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  isSubmit=false;
constructor(private fb:FormBuilder ){

}
ngOnInit(): void {
  this.loginForm= this.fb.group({
    email :["",Validators.required,Validators.email],
    password:["",Validators.required],
  })
  
}
get fc(){
    return this.loginForm.controls;
}
submit(){
  this.isSubmit =true; 
  if(this.loginForm.invalid) return;
  alert(`'Login Successful',
  'Welcome to Foodcorner'`)
}
}


