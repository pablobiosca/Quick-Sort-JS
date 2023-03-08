//array a ordenar

const x = [50,99,77,4,7,65]

//funcion rescursiva que dividira hasta caso base (n==1) toda la matriz 

let steps = 0

function sort(matriz){

    steps++
    //caso base
    if (matriz.length < 2){
        return matriz
    }

    //este algoritmo disecciona hacia caso base mediante un "pivote",en este caso
    //utilizo siempre el primer elemento,separo de tal manera que los menores a este,
    //se agrupen juntos y lo mismo con sus mayores.
    let pivote = matriz[0]

    let menores = []
    let mayores = []

    //iteramos sobre matriz para rellenar

    // console.log(matriz.slice(1))

    matriz.slice(1).forEach( x => ( x < pivote ? menores.push(x) : mayores.push(x) ) )

    console.log("step "+steps)

    console.log(matriz)

    console.log(menores,mayores)

    sort(menores)
    sort(mayores)
}

sort(x)