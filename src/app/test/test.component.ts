import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';

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

}
