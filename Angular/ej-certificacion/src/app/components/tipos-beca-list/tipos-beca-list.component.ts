import { Component, OnInit,EventEmitter } from '@angular/core';
import { faPlus, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { TiposBeca } from '../../models/tipos-beca';
import { TiposBecaService } from '../../services/tipos-beca.service';

@Component({
  selector: 'app-tipos-beca-list',
  templateUrl: './tipos-beca-list.component.html',
  styleUrls: ['./tipos-beca-list.component.css']
})
export class TiposBecaListComponent implements OnInit {

  faEye = faEye;
  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  tiposBeca: TiposBeca[];

  constructor(private _tiposBecaService: TiposBecaService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this._tiposBecaService.list().subscribe(result => this.tiposBeca = result);
  }

  delete(a: TiposBeca): void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: 'El registro de ' + a.nombre + ' será eliminado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._tiposBecaService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        );
      }
    });
  }

}
