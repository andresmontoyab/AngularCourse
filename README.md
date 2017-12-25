# Angular Documentacion

Este será el repositorio donde se guardará todo lo aprendido para el curso de The Complete Angular Course

## Configuracion del entorno e Instalacion Angular.

 1. Inicialmente se deberá version estable(LTS) de nodeJS

 2. Cuando instalamos node tambien se instalará Node Package Manager(npm), el cual se encargará de libreria de terceros.

 3. Instalar angular cli
    npm install -g @angular/cli.

 4. Se podrá verficiar que cada uno de los diferentes componentes este instalado con los siguientes comandos.
    Node node --version
    npm  npm --version
    angular cli ng --version

 5. Para crear un proyecto Angular deberemos escribir lo siguiente.
    ng new nameProject

 6. Descargar librerias de terceros.
    Entramos a el folder de nuestro proyecto y copiamos "npm install"
    
 7. Desplegar app
    Dentro del mismo folder cd folderProject
    ng serve

## Cambiar compilacion a ES5    

Cambiar de compiler tsc main.ts --target ES5

## Componentes

Los componentes encapsulan la informacion, la vista y la logica.
La creacion de los componentes tienens 3 pasos.
En una clase componente no puede haber nada que no sea logica de la vista.

1. Create Component.
    src --> app --> create new file nameFile.ts
    crear una clase de TS.
    Importar libreria  @angular/core.

2. Registrar el componente.
    Se deberá añadir en el file app.modules.ts el componente creado en las declaraciones.
    Tambien se deberá importar para que pueda ser utilizado.

3. Añadir elemento al HTML
    Con el componente creado y su selector se podrá añadir sencillamente al HTML

Sin embargo los dos primeros pasos se pueden reducir, utilizando la funcionalidad de angular CLI de crear comnponentes por consola, para esto usaremos el siguiente comando.
    ng g c course 
    Lo que seria el equivalente a ng generate component nameComponent

## Directivas

Se usan para manipular el dom (Documento Object Model, el dom es construido como un arbol de objetos) puede ser usado para añadir elementos al DOM o eleminar un elemento existente, o cambiar la clase de un elemento del dom etc.

 1. Directivas
    1.1. *ngFor= "course of courses"; Se usa el "*" cuando modificamos la estrucutra del DOM.

    1.2. 


## Services

Los servicios inicialmente nunca se deben crear en los componentes, deberán encapsular su logica en otro archivo para desacoplar lo más posible las clases, adicionalmente para esto se utilizará injeccion de dependecia con el objetivo que si modificamos en un momento el constructor del servicio no debamos tocar cada implementacion de este .     

 1. Crear un archivo nuevo con la estructura name.service.ts
 2. Definir los metodos del servicio.
 3. Llamarlo desde el constructor del componente usando la estructura siguiente.
      constructor(service : CoursesService) { Al tener como parametro el servicio angular creará un objeto de este
        this.courses = service.getCourses();
    }
 4. Agregaremos en app.module en el apartado de provider el servicio CoursesService y angular se encargará de que 
    siempre que alguien llame este servicio injectarle la dependencia.

1.2 Creacion de Servicio por angular CLI
    ng g s email

# Binding Data
 
 ##Binding Attribute

<img [attr.src]="nameAtribute" />

##Binding class

<button class="btn btn-primary" [class.active]="nameAtributeComponent />

Si el valor de nameAtributeComponente class es true, entonces se adicionará esa clase, en caso contrario no lo hará.

## Binding style

<button [style.backgroundColor]="isActive ? 'red' : 'green'" > Save 2</button>

## Binding Event

Los eventos son aquellas acciones que se realizan sobre la vista de la aplicacio, asi como darle un click a una pantalla o a un boton.

     <button (click)="onSafe($event)" > Save 3 </button>  

Existe un comportamiento llamado "bubbling" en el cual si realizamos un evento sobre un elemento, este se propagará con sus elementos superiores. Para poder quitar esta propiedad deberemos poner el elemento que queremos detener la propagacion $event.stopPropagation();

## Event Filtering

Por ejemplo si queremos filtrar por un evento en especifico, angular nos permite la funcionalidad, con el siguiente ejemplo cada vez que presionemos enter en nuestro input este llamará la funcion asignada.

<input (keyup.enter)="onKeyUp()" />

## Mandar la informacion desde el HTML

Si se desea enviar informacion obtenida en un input desde el html se puede utilizar la siguiente linea.

<input #email (keyup.enter)="catchValue(email.value)" />

en donde email.value contendrá lo que se ha escrito en el input.

## Binding Two Ways.

La forma anterior aunque es util para enviar informacion, sigue siendo anticuada debido a que deberemos definir nuestro metodos con parametros, otra opcion es la implementacion Two Binding en la cual podremos enlazar de forma bidireccion la informacion del as variables del componente con el del html.

<input [(ngModel)]="emailTwoWays" (keyup.enter)="catchValueTwoWays()" />

Ademas de esto para poder utilizar la directiva ngModelo deberemos configurar nuestro app.modulo añadiendo la siguiente importacion.

import { FormsModule } from '@angular/forms';

y en imports añadir --> FormsModule

## Pipes

Los pipes son formateadores en angular, en los cuales podremos transformar un string o objeto con ciertas caracteristicas a otro, como por ejemplo un string ponerlo en mayusculas o minusculas.

        {{ examplePipe.title | uppercase | lowercase }}

##Custom Pipes 


Custom pipes nos brindan la misma funcionalidad de las pipe pero permitiendonos realizar configuraciones a libertad de como queremos manipular la informacion de entrada, para esto deberemos hacer lo siguiente.

1. Crear un ts summary.pipe.ts

2. import { Pipe, PipeTransform } from '@angular/core'; 

3. Crear el declarator del pipe 
@Pipe({
    name: 'summary'
})

4. Crear una clase que extienda de PipeTransform e implementar el metodo transform().

5. Agregar en app.modulo --> declaration el pipe Creado.      

Todos estos pasos se pueden resumir usando el siguiente comando

ng g p namePipe       



    
##Adicionar Bootstrap a el proyecto

1. npm install bootstrap --save
2. Luego en el archivo styles.css se deberá poner la siguiente linea
    @import "~bootstrap/dist/css/bootstrap.css";

# Re - usable Componentes

Como hemos visto en secciones anteriores, podemos crear los componentes y llamarlos a voluntad en nuestro app con la etiquieta seleccionada, <favorite></favorite>, sin embargo no podemos pasarle informacion a este componente, el objetivo de este capitulo es como añadirle la propiedad a los componentes de tener inputs y outputs. Esta combinacion es lo que llamamos Componente API.

## Input Properties.

Para tener atributos como entrada en nuestros componentes deberemos seguir los siguientes pasos.

1. Añadir el import "Input" en el componente --> import { Component, OnInit, Input } from '@angular/core';

2. Al lado izquierdo del atributo que queremos que sea un input del componente deberemos añadir el decorator input de la siguiente forma 
    @Input() isFavorite = true;

## Alias para inputs.

Como podemos observar en el numeral anterior definimos un atributo input para nuestro componente que se llamaba isFavorite sin embargo es usual ver que cuando llamemos este atributo desde nuestro app.component.html usemos otra convencion como is-favorite, para este tipo de circunstancias angular brinda la oportunidad de poner un alias, el cual adicionalmente tambien brinda la oportunidad de reducir los cambios generados en caso de que el nombre is favorite sea cambiado, para adicionar un alias deberemos agregar la siguiente a nuestro decorator.

      @Input('is-favorite') isFavorite = true;

## OutPut Propertie

Esto tiene el objetivo de mandar eventos desde el componente cuando se cumpla una condicion en particular, para lograr eso deberemos seguir los siguientes pasos.

1. Crearemos en nuestro componente un Eventemitter @Output() change = new EventEmitter(), adicionalmente tambien deberemos importarl la liberria EventEmitter

2. Para emitir cualquier evento en nuestro Output deberemos llamar la siguiente funcion this.change.emit();

3. Deberemos crear una funcion en nuestro app.component.ts onChangeFavorite()

4. Por ultimo debemos unificar los dos pasos anteriores por medio del app.component.html de la siguiente manera <app-favorite [is-favorite]="post.isFavorite" (change)="onChangeFavorite()"></app-favorite>

## Pasar informacion en OutPuts

Para pasar informacion con el Eventemitter, deberemos añadirle la informacion a la funcion . emit. como mostraremos a continuacion.

1. Añadir informacion. --> this.change.emit(sendData);

2. Pasarle el evento en app.component.html
-->  <app-favorite [is-favorite]="post.isFavorite" (change)="onChangeFavorite($event)"></app-favorite>

3. Agregar parametro en donde guardará la informacion enviada en la funcion que recibe el evento.
--> onChangeFavorite(data: dataOutPut) {