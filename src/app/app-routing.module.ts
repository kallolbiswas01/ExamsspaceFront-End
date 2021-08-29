import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { RegisterComponent } from './register/register.component';
import { LivetestComponent } from './student/livetest/livetest.component';
import { NotesresourcesComponent } from './student/notesresources/notesresources.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
// children:[
//   { path: 'student/livetest', component: LivetestComponent },
//   { path: 'student/notesresources', component: NotesresourcesComponent },
// ]
  { path: 'assessment', component: AssessmentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/livetest', component: LivetestComponent},
  { path: 'student/notesresources', component: NotesresourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
