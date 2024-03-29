import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import {  SocialLoginModule,  SocialAuthServiceConfig,} from 'angularx-social-login';
import {  GoogleLoginProvider,  FacebookLoginProvider,} from 'angularx-social-login';
import { RegisterComponent } from './register/register.component';
import { LivetestComponent } from './student/livetest/livetest.component';
import { NotesresourcesComponent } from './student/notesresources/notesresources.component';
import { MentorsComponent } from './student/mentors/mentors.component';
import { SubjectivecourseComponent } from './student/subjectivecourse/subjectivecourse.component';
import { BundleexamComponent } from './student/bundleexam/bundleexam.component';
import { RandomquizComponent } from './student/randomquiz/randomquiz.component';
import { HeaderComponent } from './header/header.component';
import { MyexamsComponent } from './student/myexams/myexams.component';
import { StudentmenuComponent } from './student/studentmenu/studentmenu.component';
import { OlympiadComponent } from './student/olympiad/olympiad.component';
import { EventexamComponent } from './student/eventexam/eventexam.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    LivetestComponent,
    NotesresourcesComponent,
    MentorsComponent,
    SubjectivecourseComponent,
    BundleexamComponent,
    RandomquizComponent,
    HeaderComponent,
    MyexamsComponent,
    StudentmenuComponent,
    OlympiadComponent,
    EventexamComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SocialLoginModule,
    TabsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('375171090687204'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}

