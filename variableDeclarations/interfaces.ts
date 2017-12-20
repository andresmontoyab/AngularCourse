// Las interfaces se usan para declaraciones más no para implementaciones 
interface Point { // Creacion de firmas para los diferentes atributos
    x: number,      // La primera letra de cada palabra de la interfaz será mayuscula.
    y: number
}

let drawPoint = (Point) => { // definicion de una funcion arrow con variables x, y basadas en una interface
    // -*****
}

drawPoint({
    x:1,
    y:2
})