let arr= new Array(1, 5, 6, 3);
function seriesResistance(arr) {
    let suma;
    let sum= 0;
    arr.forEach(element => {
        sum=sum+element;
        suma=sum;
        console.log(suma);
    });
    return suma;
}

seriesResistance();