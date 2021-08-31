import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider,FacebookLoginProvider,SocialUser } from 'angularx-social-login';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;
  public loginForm : FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean;
  user: any;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router,private socialAuthService: SocialAuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      //type : ["Corporate"],
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(user);
    });
  }

public register(){
  this.router.navigateByUrl('register');
}

  public loginUser() {
    this.loginService.loginUser(this.loginForm.value).subscribe((data) => {
      console.log('login', data)
      let res = <any>data;
      if(res.type === "success"){
        this.user = res.data;
        localStorage.setItem('token',this.user.token);
        this.router.navigateByUrl('dashboard/myexam');
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
      console.log(x);
      this.router.navigateByUrl('assessment');
    });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => {
      console.log(x);
      this.router.navigateByUrl('assessment');
    });
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
