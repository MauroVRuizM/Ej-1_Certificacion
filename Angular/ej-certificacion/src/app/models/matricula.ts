import { Materia } from './materia';
import { Alumno } from './alumno';
export class Matricula {
    idmatricula: number;
    fecha: string;
    costo: number;
    tipo: string;
    alumno: Alumno;
    materia: Materia;
}
