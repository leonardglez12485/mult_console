
import * as fs from 'fs';

let output = '';
const number = 5;

output += `========================= \n`;
output += `     Tabla del ${number} \n`;
output += `========================= \n`;

for (let index = 1; index < 11; index++) {
    output += `    ${index} x ${number} = ${index * number}\n`;
}

const folder = `outputs`;
fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(`${folder}/tabla_del_5.txt`, output);

console.log('La tabla de multiplicar se ha guardado en tabla_del_5.txt');
console.log(output);