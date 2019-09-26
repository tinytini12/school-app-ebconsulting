import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  { path: '', component: TeacherComponent }
];

@NgModule({
  declarations: [TeacherComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
