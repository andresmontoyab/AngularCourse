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

Cuando se presenta una actualizacion de un objeto o atributo, angular detecta un cambio y actualiza inmediatamente nustro DOM

Cuando la directiva a usar manipulará la estrucutra del DOM deberemos adicionar antes de la directiva el signo "*", cuando angular lea el "*" este creará ng templates con los atributos [ngIf] o [ngFor] dependiendo que directiva se este usando.

 1. Directivas

    1.1. *ngFor= "course of courses"; esta directiva nos permite recorrrer una lista o un objeto e imprimirlo en nuestra vista. Ademas de esto esta directiva tambien tiene propiedades propias como even o index.

        <button (click)="onAdd()">Add Course</button>

        <ul>
            <li *ngFor="let course of courses; even as isEven;trackBy: trackCourse; index as i">
                {{ i}} - {{ course.name }} 
                <button (click)="onDelete(i)">Remove</button>
                <span *ngIf="isEven">(Even)</span>
            </li>
        </ul>

        TracBy es un metodo de busquedad que sirve para optimizar el rendimiento de la aplicacion cuando debe mostrar largas listas, este buscará por medio del track si el id ya ha sido cargado y en caso de que ya este cargado no renderizará de nuevo su elemento DOM en la vista.Es importante notar que la forma de buscar estos objetos debe tener un identificador unico, para nuestro ejemplo será el index.

    1.2. *ngIf ="courses.length > 0; then coursesList else noCourses"  --> Donde coursesList y noCourses son ng-Templates, si la evaluacion del a condicion es verdaderá se añadirá al DOM coursesList y se eliminará del DOM noCourses, en caso contrario quedará noCourses y se eliminará del DOM coursesList.

    ngIf es recomanado utilizar cuando la estructura DOM esta construida por un arbol extenso, en caso de que sea un arbol pequeño se obtiene más rendimiento con la propiedad hidden

        <ng-template #coursesList>
            Courses List
        </ng-template>
        <ng-template #noCourses>
            No Courses Yet!!
        </ng-template>

    1.3 *ngSwitchCase, esta directica se utiliza cuando se quiere comparar un valor o campos contra diferentes valores, por ejemplo si tenemos una variable de la cual depende si se muestran o no varios elementos.

        <div [ngSwitch]="viewMode">
            <div *ngSwitchCase="'map'">Map data</div>
            <div *ngSwitchCase="'list'">List Data</div>
            <div *ngSwitchCaseDefault>Otherwise</div>
        </div>

    1.4 ngClass --> Como se ha visto se puede utilizar la propiedad [class.nameClass] en angular para el manejo de las clases de los elementos, adicionalmente angular tambien nos brinda otra herramienta llamada ngClass.

        <span class="glyphicon"
            [ngClass]="{
            'glyphicon-star': isSelected,
            'glyphicon-star-empty' : !isSelected
            }"
            (click)="onClick()">
        </span>

    1.5 ng Style --> Similar a la etiqueta anterior, tambien tendremos una directiva que nos ayudará al manejo de nuestros estilos. Cada uno de los atributos de stylo estaran asociadas a una variable o condiciones que haga que se cumpla o no el atributo

        <button [ngStyle]="{
            'backgroundColor' : canSave ? 'blue' : 'gray',
            'color': canSave ? 'white' : 'black'
        }"> Save
        </button>
    
## Crear Directivas

Como ya hemos definido las directivas son estructuras de angular utilizadas para la manipulacion del DOM, para customizar el comportamiento de nuestras aplicaciones tenemos la opcion de crear directivas propias.

    1. ng g d nameDirective.

    2. Abriremos el ts de nuestra directiva e importaremos las siguientes librerias.
        import { Directive, HostListener, ElementRef, Input } from '@angular/core';

    3. Deberemos añadir a nuestro constructor el objeto ElementRef.
        constructor(private el: ElementRef) { }

    4. Crearemos un atributo input para nuestra directiva, que nos servirá para enviarle informacion.

        @Input('appInputFormat') format:string;

    5. Deberemos implementar el metodo onBlur para que actue en el instante que el cursor se presionar fuera del elemento a modificar.

        @HostListener('blur') onBlur() {
        let value : string = this.el.nativeElement.value;
            if (this.format == 'lower')
                this.el.nativeElement.value = value.toLowerCase();
            else 
                this.el.nativeElement.value = value.toUpperCase();
            }
    
    6. Como ultimo deberemos crear un elemento DOM y utilizar nuestra nueva directiva
        <input type="text" [appInputFormat]="'lower'">
    
    Como pueden observar [appInputFormat] sirve tanto de directiva como Input de entrada para nuestra directiva


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

4. Por ultimo debemos unificar los dos pasos anteriores por medio del app.component.html de la siguiente manera 
    <app-favorite [is-favorite]="post.isFavorite" (change)="onChangeFavorite()"></app-favorite>

## Pasar informacion en OutPuts

Para pasar informacion con el Eventemitter, deberemos añadirle la informacion a la funcion . emit. como mostraremos a continuacion.

1. Añadir informacion. 
     this.change.emit(sendData);

2. Pasarle el evento en app.component.html
     <app-favorite [is-favorite]="post.isFavorite" (change)="onChangeFavorite($event)"></app-favorite>

3. Agregar parametro en donde guardará la informacion enviada en la funcion que recibe el evento.
    onChangeFavorite(data: dataOutPut)

## Alias para Output

Al igual que para los input tambien tenemos la opcion de configurar un alias para nuestro output, para hacerlo deberemos hacerlo siguiente.

     @Output('change') click = new EventEmitter();

## View Encapsulation y Shadow DOM

shadow DOM es una estrategia que evita que un estilo definido en css impacte otros componentes, es decir limita un scope de aplicacion para un estilo en especifico.

Angular nos brinda el atributo viewEncapsulation para poder generar automaticamente el comportamiento de shadow DOM

## Ng Content && Ng container

Si queremos tener un componente re utilizable, deberemos encontrar formas para pasarle informacion que deseamos adaptar al componente, ng Contente es una etiqueta que nos sirve para esto.

Si tenemos un panel que queremos utilizar en diferentes momentos, con diferentes titulos deberemos tener un html como el siguiente.

        <div class="panel panel-default">
        <div class="panel-heading">
            <ng-content select=".heading"></ng-content>
        </div>
        <div class="panel-body">
            <ng-content select=".body"></ng-content>
        </div>
        </div>


Luego desde donde queremos reutilizar y enviar los parametros que deseamos deberemos hacerlo de la siguiente forma, teniendo en cuenta que el componente anterior se llamada boostrap-panel.

        <bootstrap-panel>
            <div class="heading">Heading</div>
            <div class="body">CHACA</div>
        </bootstrap-panel>.

Si solo queremos enviar un valor más no algun elemento que altere el DOM es decir solo queremos enviar un nombre y no ningun div,h2,h1 podremos utilizar ng-container

        <h1>angular</h1>
        <bootstrap-panel>
            <ng-container class="heading">Ng container Heading</ng-container>
            <ng-container class="body">Ng container Body</ng-container>
        </bootstrap-panel>

## Safe Transversal Operator

En diferentes puntos de nuestra aplicacion podremos tener un objeto el cual posiblemente en algun instante tenga el valor de null, si en un instante tratamos de mostrar este objeto en la vista, nos generará un error, para evitar esto existe el safe transversal operator "?" el cual solo mostrará un valor siempre y cuando no este en nulo.

        {{ task.assignee?.name}}

## Form Control

FormControl representa solamente un input field y el otro es FormGroup es cual representa una grupo de input fields , cuando aplicamos ngModel Directive sobre un input field, angular automaticamente crea un formControlObjetct , por otro lado la directiva ngForm es aplicada a todos los grupos de form elementosy con esto angular creara un FormGruop para nuestro form, ademas si tenemos forms complejas con multiples subgrupos, podremos utilizar ngModelGroupDirective y esta directiva similar como ngForm creará un objeto FormGroup para el grupo, ¿Cual es la diferencia entre ngForm y ngModelGroup? la diferencia entre estas dos es la directiva ngSubmit que ngForm contiene, ngModeloGroup no tiene esta propiedad   

## Routes and Navogation

Para la configuracion de esto deberemos seguir lo siguientes pasos, 

1.Congiurar las rutas, cada ruta determina que componente debe ser visible cuando el usuario navega en una url en especifico . 

2. Segundo deberemos añadir un router Outlet esto es cuando dmostramos el correspondiente componente dado para la ruta activa.

3. Finalmente Añadimos Links.

Como se menciono antes inicialmente se deberan definir la configuracion de las rutas, para esto deberemos ir a nuestro archivo app.module y en la seccion de importaciones colocar las especificaciones y la relaciones entre nuestras URL y componentes.

        RouterModule.forRoot([
            { path: '', component:  WelcomeComponent},
            { path: 'followers', component:  FollowersComponent},
            { path: 'profile', component:  ProfileComponent},
            { path: 'someProfile/:id/:username', component:  SomeFollowersComponent},
            { path: 'anotherFollower', component:  AnotherFollowersComponent},
            ])
        ]

Adicionalmente se deberá adiconar la libreria de router para que la navegacion funcione.

        import { RouterModule } from '@angular/router';

Luego de esto deberemos añadir la etiqueda router outlet en nuestro app.component.html para que sean visible el componente base y nos podamos mover entre la navegacion definida.

    <router-outlet></router-outlet> 

## Links

Para rutas simples podemos utulizar routerLink

<a routerLink="/followers">

si estamos tratando con una ruta con parametros utilizaremos routerLink como atributo y seperamos por comas la url

<a [routerLink]="['followers', followers.id]">
<a [routerLink]="['followers', followers.id, followers.login]">

## RouterLinkActive vs active class

El active class en nuestros paneles nos dirá en cual panel estamos parados o esta seleccionados, sin embargo cuando utilizamos nuestra navegacion se deberá implementar una logica para que defina y muestra el panel seleccionado es decir, decir cual de las diferentes opciones esta "active", con la directiva RouterLinkActive este cambio se hará automaticamente y recien realicemos un cambio de panel este se marcará como se debe.

## Observables

Un observable es una coleccion de informacion asincrona que llega en el momento, si para nuestra aplicacion el usuario tiene la capacidad de moverse entre paginas hacia delante o atras, requeriremos uns observable, en modo de que nuestro usuario no requiera esta funcionalidad podremos utilizar un snapshot.

Se usan usualmente cuando navegamos sobre un mismo componente pero los parametros de la ruta varian en este, por ende es importante tener siempre un observable en el cual cada vez que se identifique un cambio en los route parameter este los detecte

## Suscribir varios Observables

En diferentes ocasiones deberemos tener en un mismo componente observable diferentes componentes, un ejemplo de esto es cuando tenemos una url compuesta, con valores obligatorios y valores opcionales como url/follow?page=1&order=newest, por ende seria optimo tener dos observables que escuchen tanto los Params como los QueryParams(opcionales.)

        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
            ])
            .switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');

            return [ {name: 'Andres', id: 1020}, {name: 'Daniel', id: 1021 } ]

            })
            .subscribe(followers => this.followers);

        }
Inicialmente vemos un objeto "Observable" en el cual esta implemntada la funcion combineLatest, esta es necesaria para combinar los diferentes observables que definiiremos, ademas tambien usamos la funcion switchMap para poder transformar nuestro objetos a observables. Para cada una de estas herramientas utilizadas se deberá realizar su oportuna importacion.

    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/observable/combineLatest';
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/switchMap';

## Map and SwitchMap

Usamos nuestro map operator para transformar nuestros objetos a observables, en nuestra implementacion map nos retornará un Observable<any> lo que se interpretará como una coleccion dentro de otra coleccion y lo que realmente se requeria era un objeto de tipo any, por ende utilizaremos el operator switchMap y asi obtendremos solo un retorno de tipo any

## Navegar Programaticamente.

Ademas de definir toda nuestra navegacion en nuestro app.module, tambien podremos configurar nuestra navegacion desde nuestro component.ts, para esto deberemos realizar la siguiente implementacion.

Definiremos un elemento en nuestro html que invoque una funcion en nuestro componente.ts

    <button class="btn btn-primary" (click)="submit()"> Submit</button>

Importaremos la libreria de router.

    import { Router } from '@angular/router';

Se añade a nuestro constructor.

    constructor(private router: Router) { }    

Se define la navegavcion deseada para esta funcion.

      submit () {
            this.router.navigate(['/followers'], {
            queryParams: { page:1 , order: 'newest'}
            })
        }

##Autenticacion y Autorizacion

Json Web Tokens

Json Web Tokens son herramientas utilizadas para persistir la informacion de una session de usuario en los navegadores, este token usualmente esta codificado, y esta compuesto por 3 partes.

    1. Header --> Header del mensaje a enviar 
    2. Payload --> Informcion del usuario que se requiera, usuario, nombre, email etc
    3. Signature --> Clave secreta con la cual se implementa mayor seguridad al token.

Nota: Si se modifica por alguna razon el contenido del payload tambien se deberá modificar el signature, de modo que si se detecta que el payload se modifico y no el signature podria tratarse de una peticion maliciosa.

## Implementacion Login.

Para que podamos loguearnos en la aplicacion, deberemos ingresar nuestras credenciales, si las credenciales son correctas la peticion generada al backend deberá retornar un token, en el cual estará toda la informacion necesaria, en caso de no ser la indicada entonces enviará null. Con lo anterior se deberá implementar un consumo REST el cual valide si retorno el token o no.

        login(credentials) { 
        return this.http.post('/api/authenticate', 
            JSON.stringify(credentials))
            .map(response => {
                let result = response.json();
                if(result && result.token) {
                localStorage.setItem('token', result.token);
                return true;
                }
                return false;
            });
        }

Adicionalmente si el backend retorna el token, deberemos guardarlo en el localStorage de nuestro browser, esto con el proposito de conservar la session del usuario en el tiempo.


## Conservar la session del usuario.

Como habiamos comentado anteriormente en nuestro localStorage estará nuestro Token, con base en este podremos saber si nuestro usuario esta logueado o no.


        isLoggedIn() { 
        //tokenNotExpired() hace lo mismo

            let jwtHelper = new JwtHelper();
            let token = localStorage.getItem('token')

            if (!token)
            return false; 

            let expirationDate = jwtHelper.getTokenExpirationDate(token);
            let isExpired = jwtHelper.isTokenExpired(token);

            console.log (jwtHelper + '\n'
                        + token + '\n'
                        + expirationDate + '\n'
                        + isExpired + '\n')
            
            return !isExpired;
        }

Adicionalmente si nuestro usuario esta logueado o no, tambien podriamos ocultar o mostrar diferentes elementos de nuestro HTML, asi como el login o el logout, o informacion privilegiada.     

    <li *ngIf="authService.isLoggedIn()"><a routerLink="/admin">Admin</a></li>
    <li *ngIf="!authService.isLoggedIn()"><a  routerLink="/login">Login</a></li>
    <li *ngIf="authService.isLoggedIn()"><a (click)="authService.logout()">Logout</a></li>

## Obtener informacion Token

para obtener la informacion del usuario actual en la aplicacion deberemos aplicar la siguiente logica. 

    get currentUser() {
        let token = localStorage.getItem('token');
        console.log(token);
        if (!token)
        return null;
        return new JwtHelper().decodeToken(token);
    }  

Si queremos visualizar el nombre del usuario en nuestro html deberemos añadir la siguiente directiva.

        <p  *ngIf="authService.isLoggedIn()">
        Welcome {{ authService.currentUser.name }}
        </p>    

## Proteger URL

Partamos del caso que tenemos una como la siguiente something/admin donde el contenido de esta solo puede ser observado por un usuario logueado de tipo Admin, y alguien intenta acceder directamente a la url something/admin la aplicacion le permitirá ver este contenido.

Angular brinda una interface llamada CanActivate la cual nos permitira redireccionar a la ventana del login a cualquier usuario que intente acceder por la url.

Inicialmente deberemos crear una nuevo service

    ng g s authGuard

Luego en nuestro servicio creado deberemos realizar la implementacion de la interface CanActivate

        import { Router,RouterStateSnapshot } from '@angular/router';
        import { AuthService } from './auth.service';
        import { Injectable } from '@angular/core';
        import { CanActivate} from '@angular/router';
        
        @Injectable()
        export class AuthGuard implements CanActivate{

        constructor(
            private authService: AuthService,
            private router: Router) { }

        canActivate(route, state: RouterStateSnapshot) {
            if (this.authService.isLoggedIn()) return true;

            this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
            return false;
            
        }
        }

Como ultimo paso deberemos modificar nuestro archivo app.module.ts en el cual deberemos injectar el nuevo provider y modificar nuestro roter de la siguiente manera.

Router
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},

Como pueden observar en la linea  this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}}); se esta obteniendo la url a la cual se trata de acceder, esto se realiza con el proposito de que si el usuario posteriormente se loguea este sea redireccionado a la url que trato de acceder y no a el home page, adicionalmente de esto en la logica de nuestro login deberemos añadir lo siguiente.

          let url = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([ url || '/']);

## Restriguir URL por usuarios

Como vimos anteriormente podemos tambien restringuir las url para los usuario ya logueados, segun su rol, para esto utulizaremos de nuevo el mismo proceso de CanActivate.

      canActivate() {
        let user = this.AuthService.currentUser;

        if (user && user.admin) return true;

        this.router.navigate(['no-access']);
        return false;
    }    

Y modificamos nuestro app.module como vimos antes tanto en nuestro router como nuestro provider.

 { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AuthAdmin]},

 Es importante notar que los elementos de CanActivate se ejecutaran en secuencia.    

# Deployment

## Enviroments

En el desarrollo de software se utilizan diferentes instancias o ambientes de la aplicacion, entre estos estan desarrollo, laboratorio y produccion. Para el manejo de estos ambientes en angular existen archivo en la direccion assest/enviroment, alli aparecerán unos archivos .ts en el cual se deberan especificar las caracteristicas distinguivas de cada uno de los ambientes, ya sean endpoints o titles para distinguir los ambientes.

Para correr el ambiente utilizaremos:

        ng serve 
        ng serve --environment=test
        ng serve --environment=prod

## Creando nuevos Environments

Para crear nuevos enviroments deberemos añadir un nuevo archivo en nuestra carpeta enviroments con los mismos atributos de los otros enviroments, adicionalmetne deberemos inscribir este nuevo ambiente en el archivo .angular-cli.js en la seccion de enviroments

        environment.test.ts --> new file


.angular-cli.js

        "environments": {
            "dev": "environments/environment.ts",
            "test": "environments/environment.test.ts",
            "prod": "environments/environment.prod.ts"
        }


## TsLint

TsLint es una extension brindada para analizar el codigo, esto con el proposito de que todos los miembros de un equipo se guien por las mismas pautas de desarrollo. Para utilizar esta herramienta con angular tenemos dos opciones.

    1. Podremos en la consola utilizar el comando ng lint y este nos mostrará todos lso errores de sintaxis que contenga nuestra aplicacion, sinembargo este metodo no es muy intuitivo.

    2. Añadir la extension TsLint CodeStudio, para esto deberemos ir a la seccion de extenciones de CodeStudio buscar TsLint y presionar instalar. Una vez hayamos realizado esto cada vez que estemos desarrollando y cometamos un error de sintaxis basado en el archivo tslint.js CodeStudio nos avisará!!.


# FireBase

1. Rapida, escalable y en tiempo real base de datos en la nube.
2. Authentication
3. Cloud Message
4. Storage.
5. Analytics.

Firebase brinda librerias para iOS, android, Javascript y C++.

## Crear proyecto firebase

Nos dirigiremos a la siguiente URL y en ella aparecerá la opcion de crear un nuevo proyecto, solo deberemos seleccionar el nombre y la region a eleccion.

        https://console.firebase.google.com/    

## Firebase Database    

En firebase se manejan base de datos noSql las cuales consisten en nodos los cuales estan definidos por clave/valor y el valor puede ser un atributo simple o un atributo compuesto. Este tipo de base de datos no tiene ningun esquema en espefico, ni tablas, ni relaciones.

            {
                courses : {
                    1: "course1",
                    2: "course2",
                    3: {
                        author: "someName",
                        price:  100,
                        title:  "course3"
                    }
                }
            } 

## Instalando Firebase

Crearemos un nuevo proyecto angular para ejemplificar la instalacion de firebase.

1. Creacion angular project.

        ng new firebase-demo

2. Moverse a la carpeta del proyecto creado.

        cd firebase-demo

3. Instalar librerias de firebase en nuestro proyecto.

        npm install firebase@^4.8.0 --save
        npm install angularfire2 --save

4. Abiremos nuestro proyecto en el edito Code, y nos dirigiremos a la carpeta environment y seleccionaremos el archivo enviroment ts, en este archivo deberemos copiar las credenciales de nuestro firebase de la siguiente manera.

        producion: false,
        firebase: {
                apiKey: "AIzaSyAn1OvnQEmxe_NLRDu-J--hp4wCtq5dCb4",
                authDomain: "fir-demo-16fbb.firebaseapp.com",
                databaseURL: "https://fir-demo-16fbb.firebaseio.com",
                projectId: "fir-demo-16fbb",
                storageBucket: "fir-demo-16fbb.appspot.com",
                messagingSenderId: "250339311858"
        }        

Estas credenciales de obtienen de la pagina de firebase --> Project Overview --> Añade firebase a tu aplicacion.        

5. Actualizar app.modules.js

Inicialmente deberemos añadir las siguientes importaciones.

        import { AngularFireModule } from 'angularfire2';
        import { AngularFireDatabaseModule } from 'angularfire2/database';

Tambien en la seccion de imports, deberemos añadir las siguientes lineas.

        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule 


## Leer informacion Firebase

1. Importamos 

        import { AngularFireDatabase} from 'angularfire2/database';

2. En nuestro constructor realizamos la siguiente configuracion 

          constructor (db: AngularFireDatabase) {
            const list = db.list('courses').valueChanges()
                .subscribe(courses => {
                    this.courses = courses;
                    console.log(this.courses);
                });
            }  

Y con esto ya obtendremos la informacion de nuestros cursos registrados en firebase.

## Leer informacion evitando memory leaks

1. Configuracion del componente

         export class AppComponent {
            courses$;
            constructor (db: AngularFireDatabase) {
                this.courses$ = db.list('courses').valueChanges();
            }
            }

2. Uso de async Pipe

        <ul>
            <li *ngFor = "let course of courses$ | async">
            {{ course }}
            </li>
        </ul>    

## Leyendo Objetos de firebase.

Podemos leer un objeto en especial de nuestro nodo creado en firebase de la siguiente manera.

 1. en nuestro componente.

        this.author$ = db.object('/authors/1').valueChanges();

2. En nuestra vista

         <p> {{ author$ | async | json }}</p>        


## Mostrando atributos del objeto

        <ul *ngIf="author$ | async  as author">
            <li> {{ author?.name }}</li>
            <li> {{ author?.students }}</li>
            <li> {{ author?.premiun }}</li>
        </ul>
    


