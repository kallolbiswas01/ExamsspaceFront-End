import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivetestComponent } from './livetest/livetest.component';
import { NotesresourcesComponent } from './notesresources/notesresources.component';

const routes: Routes = [
  { path: 'student/livetest', component: LivetestComponent},
  { path: 'student/notesresources', component: NotesresourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
