import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';

const routes: Routes = [
  { path: '', component: CourseComponent }
];

@NgModule({
  declarations: [CourseComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
