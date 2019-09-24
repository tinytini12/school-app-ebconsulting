import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AllService } from '../../shared/services/all.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  form: FormGroup;
  buttonLoading = false;
  id: number;
  courses: any = [];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private allService: AllService,
    private activatedRoute: ActivatedRoute) {
    this.formInit(null, null);
    this.loadCourses();

    if (this.activatedRoute.snapshot.params.id !== undefined) {
      this.id = this.activatedRoute.snapshot.params.id;

      this.loadTestData();
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  formInit(name, course) {
    this.form = this.fb.group({
      name: [name, Validators.required],
      course: [course, Validators.required]
    });
  }

  loadCourses() {
    this.allService.get('course').then((courses: any) => {
      this.courses = courses;
      this.form.get('course').setValue(this.courses[0].id_course);
    });
  }

  save(formValues) {
    this.form.controls.name.markAsTouched();

    if (this.form.valid) {
      this.buttonLoading = true;
      const body: any = {
        name: formValues.name.trim(),
        id_course: formValues.course
      };

      if (this.id === undefined) {
        this.allService.post('test', body).then(() => {
          Swal.fire({
            title: 'Prueba registrada correctamente',
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
        body.id_test = this.id;

        this.allService.put('test', body).then(() => {
          Swal.fire({
            title: 'Prueba modificada correctamente',
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

  loadTestData() {
    this.allService.getById('test', this.id).then(data => {
      this.formInit(data[0].name, data[0].id_course);
    });
  }
}
