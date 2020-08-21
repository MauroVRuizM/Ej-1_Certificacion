import { Aporte } from './aporte';
import { Matricula } from './matricula';

export class Calificacion {
    idcalificacion: number;
    unidad: string;
    valor: number;
    fecha: string;
    Matricula: Matricula;
    Aportes: Array<Aporte> = [];
}
