import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signUpForm : FormGroup;
  signUpData: any;

  constructor(private fb: FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      name: ["", Validators.required],
      confPassword: ["", Validators.required],
      remember: ["", Validators.required]
    });

  }

  signUp(){
    this.loginService.signUpUser(this.signUpForm.value).subscribe((data) => {
      console.log('login', data)
      let res = <any>data;
      if(res.type === "success"){
       this.signUpData = res.data;
      }
    });
  }

}
