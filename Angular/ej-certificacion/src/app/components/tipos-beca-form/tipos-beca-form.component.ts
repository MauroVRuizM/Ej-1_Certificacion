import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TiposBeca } from '../../models/tipos-beca';
import { TiposBecaService } from '../../services/tipos-beca.service';

@Component({
  selector: 'app-tipos-beca-form',
  templateUrl: './tipos-beca-form.component.html',
  styleUrls: ['./tipos-beca-form.component.css']
})
export class TiposBecaFormComponent implements OnInit {

  title = 'Nuevo registro de tipo de beca';

  tipoBeca: TiposBeca = new TiposBeca();

  form: FormGroup;

  constructor(
    private _tiposBecaService: TiposBecaService,
    private formBuilder: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router: Router
  )
  { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      persona_objetivo: ['', [Validators.required]],
      fecha_aprobacion: ['', [Validators.required]],
      monto: ['', [Validators.required]],
      requisitos: ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']){
          this._tiposBecaService.retrieve(params['id']).subscribe(
              result =>
              {
                this.tipoBeca = result;
                this.tipoBeca.fecha_aprobacion = this.tipoBeca.fecha_aprobacion.replace('T00:00:00', '');
                this.title = 'Actualizando el registro de ' + this.tipoBeca.nombre;
              }
          );
        }
      }
    );
  }

  onSubmit(): void {
    if (this.form.invalid){
      console.error('Error en el formulario');
      return;
    }

    console.log(this.tipoBeca);

    this._tiposBecaService.save(this.tipoBeca).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['tiposBeca/list']);

      }
    );
  }
}
