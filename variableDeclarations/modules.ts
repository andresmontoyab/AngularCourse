// --> En typeScript puedes pensar como cada archivo como un modulo.
/* --> En TS podemos dividir nuestro programa en multiples archivos y en cada archivo
podemos exponer uno o mas tipos como clases, funciones variables simples o objetos
y cuando necesitemos utilizarlos deberemos importarlos primero, cuando tenemos las tag, export o
import en la parte superior de un archivo TS, este archivo será un modulo.
*/
import { Point } from './point';

let point = new Point(1, 2);
point.draw();