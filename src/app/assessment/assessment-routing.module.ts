import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment.component';
import { ViewassessmentComponent } from './viewassessment/viewassessment.component';
const routes: Routes = [
  { path: '', component: AssessmentComponent },
  { path: 'result', component: ViewassessmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }
