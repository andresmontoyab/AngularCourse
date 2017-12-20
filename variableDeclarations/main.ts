var number = 1;
let count = 2;

function doSomething() {
    for (var i= 0; i < 5; i++) { // Se pueden definir variables de dos formas Var y Let, var tendrá un scope de la funcion más cercana 
                                //y let solo por funcionalidad.
        console.log(i)
    }
    console.log('Finally' + i);
}

doSomething();