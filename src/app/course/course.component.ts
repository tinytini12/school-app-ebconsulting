import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: any = [];
  loading = true;

  constructor(private allService: AllService) {
    this.loadCourses();
  }

  ngOnInit() {
  }

  loadCourses() {
    this.allService.get('course').then((courses: any) => {
      this.courses = courses;
      this.loading = false;
    }, e => {
      console.log('Error al cargar cursos');
    });
  }

}
