import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LivetestComponent } from './student/livetest/livetest.component';
import { NotesresourcesComponent } from './student/notesresources/notesresources.component';
import { MyexamsComponent } from './student/myexams/myexams.component';
import { MentorsComponent } from './student/mentors/mentors.component';
import { SubjectivecourseComponent } from './student/subjectivecourse/subjectivecourse.component';
import { BundleexamComponent } from './student/bundleexam/bundleexam.component';
import { RandomquizComponent } from './student/randomquiz/randomquiz.component';
import { OlympiadComponent } from './student/olympiad/olympiad.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'assessment',
    loadChildren: () =>     import('./assessment/assessment.module').then(m => m.AssessmentModule)
  },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    {
      path: 'myexam', 
      component: MyexamsComponent, 
    },
    {
      path: 'livetest', 
      component: LivetestComponent, 
    },
    {
      path: 'notesresources',
      component: NotesresourcesComponent, 
    },
    {
      path: 'mentorprofile',
      component: MentorsComponent, 
    },
    {
      path: 'subjectivecourse',
      component: SubjectivecourseComponent, 
    },
    {
      path: 'bundleexam',
      component: BundleexamComponent, 
    },
    {
      path: 'randomquiz',
      component: RandomquizComponent, 
    },
    {
      path: 'olympiad',
      component: OlympiadComponent, 
    }

  ],

}
]
// children:[
//   { path: 'student/livetest', component: LivetestComponent },
//   { path: 'student/notesresources', component: NotesresourcesComponent },
// ]

//   { path: 'register', component: RegisterComponent },
//   { path: 'student/livetest', component: LivetestComponent},
//   { path: 'student/notesresources', component: NotesresourcesComponent}
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
