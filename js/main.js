'use strict';
// suma i iloczyn elementów tablicy

function suma(tablicaLiczb) {
    var suma = 0;
    tablicaLiczb.forEach(function (element, index) {
        suma += element;
    });

    return suma;
};

function mnozenie(tablicaLiczb) {
    var iloczyn = 1;
    tablicaLiczb.forEach(
        function (element, index) {
            iloczyn *= element;
        });
    return iloczyn;
}

var tablica = [1, 2, 3, 4, 5, 6];
console.log(suma(tablica));
console.log(mnozenie(tablica));
