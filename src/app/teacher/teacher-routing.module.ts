import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  { path: '', component: TeacherComponent }
];

@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
