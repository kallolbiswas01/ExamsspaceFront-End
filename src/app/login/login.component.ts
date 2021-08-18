import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.login();
  }

  private login() {
   

    this.loginForm = this.fb.group({
      user_email: ["", Validators.required],
      user_password: ["", Validators.required],
      name : ["csrf"],
      
      
    });
  }
  public loginUser() {
    this.router.navigateByUrl('dashboard');

    this.loginService.loginUser(this.loginForm.value).subscribe((data) => {
      console.log('login', data)
    });
  }
}
