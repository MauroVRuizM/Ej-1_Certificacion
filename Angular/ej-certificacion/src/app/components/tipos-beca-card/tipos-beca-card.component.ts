import { Component, OnInit } from '@angular/core';
import { TiposBeca } from '../../models/tipos-beca';
import { TiposBecaService } from '../../services/tipos-beca.service';
import { ActivatedRoute } from '@angular/router';
import { faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tipos-beca-card',
  templateUrl: './tipos-beca-card.component.html',
  styleUrls: ['./tipos-beca-card.component.css']
})
export class TiposBecaCardComponent implements OnInit {

  faListAlt = faReply;
  tiposBeca: TiposBeca;

  constructor(private _tiposBecaService: TiposBecaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']){
          this._tiposBecaService.retrieve(params['id']).subscribe(
            result => this.tiposBeca = result
          );
        }
      }
    );
  }

  

}
