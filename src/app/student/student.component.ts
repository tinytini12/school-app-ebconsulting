import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any = [];
  loading = true;

  constructor(private studentService: StudentService) {
    this.loadStudents();
  }

  ngOnInit() {
  }

  loadStudents() {
    this.studentService.get().then((students: any) => {
      this.students = students;
      this.loading = false;
    });
  }

}
