import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: any = [];
  loading = true;

  constructor(private allService: AllService) {
    this.loadTeachers();
  }

  ngOnInit() {
  }

  loadTeachers() {
    this.allService.get('teacher').then((teachers: any) => {
      this.teachers = teachers;
      this.loading = false;
    }, e => {
      console.log('Error al cargar profesores');
    });
  }

}
