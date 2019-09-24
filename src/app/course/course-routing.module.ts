import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './course.component';

const routes: Routes = [
  { path: '', component: CourseComponent }
];

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
