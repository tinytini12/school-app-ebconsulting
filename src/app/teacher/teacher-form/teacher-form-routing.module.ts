import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherFormComponent } from './teacher-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: TeacherFormComponent },
  { path: ':id', component: TeacherFormComponent }
];

@NgModule({
  declarations: [TeacherFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TeacherFormRoutingModule { }
