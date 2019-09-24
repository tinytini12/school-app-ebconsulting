import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  tests: any = [];
  loading = true;

  constructor(private allService: AllService) {
    this.loadTests();
  }

  ngOnInit() {
  }

  loadTests() {
    this.allService.get('test').then((teachers: any) => {
      this.tests = teachers;
      this.loading = false;
    }, e => {
      console.log('Error al cargar pruebas');
    });
  }

  delete(id) {
    Swal.fire({
      title: 'Confirma que quiere eliminar esta prueba?',
      text: 'Esta acción no podrá deshacerse',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.allService.delete('test', id).then(() => {
          Swal.fire({
            title: 'Prueba eliminado correctamente',
            type: 'success',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
          this.loading = true;
          this.loadTests();
        });
      }
    });
  }

}
