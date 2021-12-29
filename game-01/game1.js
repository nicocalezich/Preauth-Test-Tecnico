/*
La funcion findSubset dados una lista de numeros y un numero (n), 
buca los dos primeros numeros que sumados sean igual al numero dado (n).

Recibe 2 (dos) parametros: una lista de Integers y un Integer.
findSubset(array: Integer[], n: Integer)
*/

const findSubset = (array, n) => {
    if (!array.length || !n) return;
    let i = 0;
    let j;
    let found = false;
    let subset = [];
    while (i < array.length && !found) {
        j = 0;
        while (j < array.length && !found) {
            if ((array[i] + array[j]) == n) {
                found = true;
                subset = [array[i], array[j]];
            } else {
                j++;
            }
        }
        i++;
    }
    return subset;
}

console.log(findSubset([2, 5, 8, 14, 0], 10))