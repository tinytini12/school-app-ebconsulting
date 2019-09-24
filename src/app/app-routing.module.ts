import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', loadChildren: './student/student-routing.module#StudentRoutingModule' },
  { path: 'student', loadChildren: './student/student-routing.module#StudentRoutingModule' },
  { path: 'test', loadChildren: './test/test-routing.module#TestRoutingModule' },
  { path: 'teacher', loadChildren: './teacher/teacher-routing.module#TeacherRoutingModule' },
  { path: 'course', loadChildren: './course/course-routing.module#CourseRoutingModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
