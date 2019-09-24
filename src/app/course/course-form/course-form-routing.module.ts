import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from './course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: CourseFormComponent },
  { path: ':id', component: CourseFormComponent }
];

@NgModule({
  declarations: [CourseFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CourseFormRoutingModule { }
