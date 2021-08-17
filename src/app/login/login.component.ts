import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../services/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.login();
  }

  private login() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  public loginUser() {
    this.loginService.loginUser(this.loginForm.value).subscribe((data) => {
    });
  }
}
