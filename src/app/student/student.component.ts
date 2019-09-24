import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';
import Swal from 'sweetalert2';

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

  delete(id) {
    Swal.fire({
      title: 'Confirma que quiere eliminar este estudiante?',
      text: 'Esta acción no podrá deshacerse',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.allService.delete('student', id).then(() => {
          Swal.fire({
            title: 'Estudiante eliminado correctamente',
            type: 'success',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
          this.loading = true;
          this.loadStudents();
        });
      }
    });
  }

}
