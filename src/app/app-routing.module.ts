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
  { path: 'new-test', loadChildren: './test/test-form/test-form-routing.module#TestFormRoutingModule' },
  { path: 'edit-test', loadChildren: './test/test-form/test-form-routing.module#TestFormRoutingModule' },
  { path: 'teacher', loadChildren: './teacher/teacher-routing.module#TeacherRoutingModule' },
  { path: 'new-teacher', loadChildren: './teacher/teacher-form/teacher-form-routing.module#TeacherFormRoutingModule' },
  { path: 'edit-teacher', loadChildren: './teacher/teacher-form/teacher-form-routing.module#TeacherFormRoutingModule' },
  { path: 'course', loadChildren: './course/course-routing.module#CourseRoutingModule' },
  { path: 'new-course', loadChildren: './course/course-form/course-form-routing.module#CourseFormRoutingModule' },
  { path: 'edit-course', loadChildren: './course/course-form/course-form-routing.module#CourseFormRoutingModule' }
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
