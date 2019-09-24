import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', loadChildren: './student/student-routing.module#StudentRoutingModule' },
  { path: 'student', loadChildren: './student/student-routing.module#StudentRoutingModule' },
  { path: 'new-student', loadChildren: './student/student-form/student-form-routing.module#StudentFormRoutingModule' },
  { path: 'edit-student', loadChildren: './student/student-form/student-form-routing.module#StudentFormRoutingModule' },
  { path: 'test', loadChildren: './test/test-routing.module#TestRoutingModule' },
  { path: 'teacher', loadChildren: './teacher/teacher-routing.module#TeacherRoutingModule' },
  { path: 'course', loadChildren: './course/course-routing.module#CourseRoutingModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
