// Con keyword export este archivo será visible en el exterior.
export class Point {

    constructor (private x?:number ,private y?:number) {
    }

    draw () {
        console.log('X: '+this.x +", Y: "+this.y);
    }
}