import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';
import Swal from 'sweetalert2';

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

  delete(id) {
    Swal.fire({
      title: 'Confirma que quiere eliminar este profesor?',
      text: 'Esta acción no podrá deshacerse',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.allService.delete('teacher', id).then(() => {
          Swal.fire({
            title: 'Profesor eliminado correctamente',
            type: 'success',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
          this.loading = true;
          this.loadTeachers();
        }, e => {
          if (e.error.message === 'Professor has courses') {
            Swal.fire('Error', 'Profesor no se puede eliminar, tiene cursos asociados', 'error');
          } else {
            Swal.fire('Error', 'Se produjo un error al eliminar', 'error');
          }
        });
      }
    });
  }

}
