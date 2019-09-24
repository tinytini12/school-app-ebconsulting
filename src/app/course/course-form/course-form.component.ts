import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AllService } from '../../shared/services/all.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  buttonLoading = false;
  id: number;
  teachers: any = [];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private allService: AllService,
    private activatedRoute: ActivatedRoute) {
    this.formInit(null, null);
    this.loadTeachers();

    if (this.activatedRoute.snapshot.params.id !== undefined) {
      this.id = this.activatedRoute.snapshot.params.id;

      this.loadCoursetData();
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  formInit(name, teacher) {
    this.form = this.fb.group({
      name: [name, Validators.required],
      teacher: [teacher, Validators.required]
    });
  }

  loadTeachers() {
    this.allService.get('teacher').then((teachers: any) => {
      this.teachers = teachers;
      this.form.get('teacher').setValue(this.teachers[0].id_teacher);
    });
  }

  save(formValues) {
    this.form.controls.name.markAsTouched();

    if (this.form.valid) {
      this.buttonLoading = true;
      const body: any = {
        name: formValues.name.trim(),
        id_teacher: formValues.teacher
      };

      if (this.id === undefined) {
        this.allService.post('course', body).then(() => {
          Swal.fire({
            title: 'Curso registrado correctamente',
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
        body.id_course = this.id;

        this.allService.put('course', body).then(() => {
          Swal.fire({
            title: 'Curso modificado correctamente',
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

  loadCoursetData() {
    this.allService.getById('course', this.id).then(data => {
      this.formInit(data[0].name, data[0].id_teacher);
    });
  }

}
