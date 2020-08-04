import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatriculaService } from '../../services/matricula.service';
import { ActivatedRoute } from '@angular/router';
import { Matricula } from 'src/app/models/matricula';
import { faUser, faIdCard, faCalendar, faMapMarked, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.css']
})
export class AlumnoCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;
  alumno: Alumno = new Alumno();
  matriculas: Matricula[];
  nombreMateria: string;
  idmateria: number;

  constructor(
    private alumnoService: AlumnoService,
    private matriculaService: MatriculaService ,
    private activatedRoute: ActivatedRoute,
    private materiaService: MateriaService
  )
  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']){
          this.alumnoService.retrieve(params['id']).subscribe(
            result => {
              this.alumno = result;
              this.listMatriculas();
            }
          );
        }
      }
    );
  }

  listMatriculas(): void {
    this.matriculaService.list(this.alumno.idalumno).subscribe(
      result => {
        console.log(result);
        this.matriculas = result;
        result.forEach(element => {
          this.idmateria = element.idmateria;
        });
      },
      err => console.log(err),
      () => {
        this.materiaService.retrieve(this.idmateria).subscribe(res => {
          this.nombreMateria = res.nombre;
        });
      }
    );
  }

}
