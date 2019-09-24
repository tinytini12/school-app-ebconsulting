import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any = [];
  loading = true;

  constructor(private allService: AllService) {
    this.loadStudents();
  }

  ngOnInit() {
  }

  loadStudents() {
    this.allService.get('student').then((students: any) => {
      this.students = students;
      this.loading = false;
    }, e => {
      console.log('Error al cargar estudiantes');
    });
  }

}
