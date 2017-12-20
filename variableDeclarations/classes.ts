class Point {   // creacion de la clase
    private x: number;  // Atributos de la clase
    private y: number;  // Access Modifier --> Public, Private, public --> Restringuir la modificacion de los atributos.    

    constructor(x?:number, y?:number) {  // para el constructor en tsc se tiene la palabra reserva constructor, 
        this.x = x;                         //cuando agrego "?" estare diciendo que los parametros de creacion del objeto son opcionales
        this.y = y;
    }

    draw() {        // metodos de la clase
       console.log("X: "+ this.x + ', Y: '+ this.y);
    }
}
let point = new Point(1, 2); // aplicacion del constructor
point.draw();

let point_withoutParameteres = new Point();

// Con la siguiente creacion de la clase, haremos exactamente lo mismo que la anterior, sin embargo typescript nos ofrece estrategias 
// simplificar el codigo

class Point_Reduced {
    constructor (private _x?: number , private _y?: number) { // crea por defecto los atributos x y y como privados y ademas los inicializa.
    }

    newDraw (){
        console.log("X: "+ this._x + ', Y: '+ this._y);
    }
    // Los setter y getter se pueden definir de dos maneras, la convencional getX o get X en el cual "X" es una propiedad y bastara
    // con llamar point.X y retornará el valor deseado.

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x (x: number){
        if (x < 0)
            throw new Error('value connot be less than 0');

        this._x = x;
    }
    
    set y (y: number){
        if (y < 0)
            throw new Error('value connot be less than 0');
            
    }
}

let newPoint = new Point_Reduced();
newPoint.newDraw();
let x_value = newPoint.x; // Uso de getters por medio de la propiedad get "Property"
let y_value = newPoint.y;
newPoint.x = 15;    // USo de setters con la propiedad set "property"
newPoint.y = 8;