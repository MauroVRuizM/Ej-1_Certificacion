import { Materia } from './materia';
import { Alumno } from './alumno';
export class Matricula {
    idmatricula: number;
    fecha: string;
    tipo = 'P';
    costo: number;
    Materia: Materia;
    Alumno: Alumno;
}
