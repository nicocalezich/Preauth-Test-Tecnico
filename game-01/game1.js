/*
La funcion findSubset dados una lista de numeros y un numero (n), 
buca los dos primeros numeros que sumados sean igual al numero dado (n).

Recibe 2 (dos) parametros: una lista de Integers y un Integer.
findSubset(array: Integer[], n: Integer)
*/

const findSubset = (array, n) => {
    if (!array.length || !n) return;
    let i = 0;
    let found = false;
    let subset = [];
    while (i < array.length && !found) {
        if (array.indexOf(n - array[i]) != -1) {
            found = true;
            subset = [array[i], array[array.indexOf(n - array[i])]]
        }
        else {
            i++;
        }
    }
    return subset
}

console.log(findSubset([2, 5, 8, 14, 0], 10))

