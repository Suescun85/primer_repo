function suma(a, b){
    return a + b;
}

//multiplicar :: num num -> num
//Función que multiplica dos número s a y b
//Ejemplo multiplicar (3, 5) este debe retornar 15

function multiplicar(a:number, b: number): number {
    let resultado: number = 0;
    resultado = a * b;
    return resultado
}

//test
console.assert(multiplicar(5, 4) == 20);
console.assert(suma(4, 20));//Solo agregue esta linea para comprobar la descarga, modificacion y carga.