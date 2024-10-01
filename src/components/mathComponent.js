import { cube } from '../math.js';

export function mathComponent() {

    const element = document.createElement('p');
   
    element.innerHTML = [
   
      '5 ao cubo é igual a ' + cube(5)
   
    ].join('\n\n');
   
     return element;
   }