import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';
import Swal from 'sweetalert2';

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

  delete(id) {
    Swal.fire({
      title: 'Confirma que quiere eliminar este curso?',
      text: 'Esta acción no podrá deshacerse',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.allService.delete('course', id).then(() => {
          Swal.fire({
            title: 'Curso eliminado correctamente',
            type: 'success',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
          this.loading = true;
          this.loadCourses();
        }, e => {
          if (e.error.message === 'Course has students or tests') {
            Swal.fire('Error', 'No se puede eliminar este curso, tiene estudiantes o pruebas asociadas', 'error');
          } else {
            Swal.fire('Error', 'Se produjo un error al eliminar', 'error');
          }
        });
      }
    });
  }

}
