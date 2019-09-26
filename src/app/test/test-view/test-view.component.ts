import { Component, OnInit } from '@angular/core';
import { AllService } from '../../shared/services/all.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {
  students: any = [];
  id: number;
  scores = [];
  scoresForm: FormGroup;
  loading = true;
  inputs: any = [];

  constructor(
    private allService: AllService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
    this.initForm();
    this.id = this.activatedRoute.snapshot.params.id;
    this.loadTestStudents();
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  initForm() {
    this.scoresForm = this.fb.group({
      scoreArray: new FormArray([])
    });
  }

  get scoreArray() {
    return this.scoresForm.get('scoreArray') as FormArray;
  }

  loadTestStudents() {
    this.allService.getById('test/students', this.id).then((students: any) => {
      this.students = students;
      let score = 0;
      let i = 0;
      this.inputs = [];
      for (const student of this.students) {
        this.inputs[i] = false;
        score = (student.score === null) ? 1 : student.score;
        this.scoreArray.push(new FormControl(score, Validators.compose([Validators.required, Validators.min(1), Validators.max(7)])));
        i++;
      }
      this.loading = false;
    }, e => {
      Swal.fire('Error', 'Error al cargar estudiantes', 'error');
    });
  }

  updateScore(idTest, idStudent, value, i) {
    if (this.scoreArray.controls[i].valid) {
      const body: any = {
        id_test: idTest,
        id_student: idStudent,
        score: value
      };

      this.allService.put('test/score', body).then(() => {
        this.loading = true;
        this.inputs[i] = false;
        this.initForm();
        this.loadTestStudents();
        Swal.fire({
          title: 'Calificación asignada correctamente',
          type: 'success',
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2500
        });
      }, e => {
        Swal.fire('Error', 'Se produjo un error al actualizar calificación', 'error');
      });
    }
  }

  showInput(i) {
    this.inputs[i] = true;
  }

}
