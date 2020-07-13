import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class ALumnoFormComponent implements OnInit {

  faUserPlus =faUserPlus ;

  constructor() { }

  ngOnInit(): void {
  }

}
