import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent }
];

@NgModule({
  declarations: [StudentComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
