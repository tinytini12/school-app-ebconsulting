import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent }
];

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
