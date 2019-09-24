import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AllService } from '../../shared/services/all.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  form: FormGroup;
  buttonLoading = false;
  id: number;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private allService: AllService,
    private activatedRoute: ActivatedRoute) {
    this.formInit(null, null);

    if (this.activatedRoute.snapshot.params.id !== undefined) {
      this.id = this.activatedRoute.snapshot.params.id;

      this.loadTeacherData();
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  formInit(name, lastname) {
    this.form = this.fb.group({
      name: [name, Validators.required],
      lastname: [lastname, Validators.required]
    });
  }

  save(formValues) {
    Object.keys(this.form.controls).forEach(element => {
      this.form.controls[element].markAsTouched();
    });

    if (this.form.valid) {
      this.buttonLoading = true;
      const body: any = {
        name: formValues.name.trim(),
        lastname: formValues.lastname.trim()
      };

      if (this.id === undefined) {
        this.allService.post('teacher', body).then(() => {
          Swal.fire({
            title: 'Profesor registrado correctamente',
            type: 'success',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
          this.buttonLoading = false;
          this.goBack();
        }, e => {
          this.buttonLoading = false;
          Swal.fire({
            title: 'Error al registrar',
            type: 'error',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
        });
      } else {
        body.id_teacher = this.id;

        this.allService.put('teacher', body).then(() => {
          Swal.fire({
            title: 'Profesor modificado correctamente',
            type: 'success',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2500
          });
          this.buttonLoading = false;
          this.goBack();
        });
      }
    }

  }

  loadTeacherData() {
    this.allService.getById('teacher', this.id).then(data => {
      this.formInit(data[0].name, data[0].lastname);
    });
  }
}
