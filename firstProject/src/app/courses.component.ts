import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
// Las sentencias dentro de las etiquedas hw se llama interpolation
@Component({
    selector: 'courses',
    template: `
    <div>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    </div>
    <div>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'" > Save 2</button>
    </div>
    <div (click)="onDivClicked()">
        <button (click)="onSafe($event)" > Save 3 </button>  
    </div>
    <div>
        <input (keyup.enter)="onKeyUp()" />
    </div>
    <div>
        <input #emailBinding (keyup.enter)="catchValue(emailBinding.value)" />
    </div>
    <div>
        <input [value]="email" (keyup.enter)="catchValueBinding()" />
    </div>
    <div>
        <input [(ngModel)]="emailTwoWays" (keyup.enter)="catchValueTwoWays()" />
    </div>
    <div>
        <br/>
        {{ examplePipe.title | uppercase | lowercase }} <br/>
        {{ examplePipe.rating  |number:'1.1-1'}} <br/>
        {{ examplePipe.students | number }} <br/>
        {{ examplePipe.price | currency:'AUD':true:'3.2-2'}} <br/>
        {{ examplePipe.releaseDate | date:'shortDate'}} <br/>
    </div>
    <div>
        {{ customPipeText | summary:10 }}
    </div>
    ` 
}) 
export class CoursesComponent {
    title = 'List of Courses';
    courses;
    isActive = true;
    email="me@example.com";
    emailTwoWays = "two@example.com";
    examplePipe = {
        title: "The complete Angular Course",
        rating : 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2017,12,22)
    }
    customPipeText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis euismod euismod. Aliquam non quam molestie, placerat enim id, ultrices ligula. Aliquam sed odio vel lorem congue mollis. Praesent ac lacinia ligula. Morbi luctus diam ac purus vestibulum euismod. Suspendisse efficitur interdum accumsan. Pellentesque id varius ex.     Fusce semper metus vitae leo ultrices sodales. Maecenas dignissim, elit sed faucibus vehicula, lectus magna fringilla odio, eget tempus urna ipsum in ex. Curabitur nisl dui, varius vitae porttitor elementum, mattis ut neque. Vivamus at elit sapien. Maecenas vehicula libero libero, ut semper eros volutpat quis. Vivamus tristique lorem enim, a ultricies dui sollicitudin ac. Cras sed mauris ut purus placerat condimentum in quis metus. Vestibulum ut consectetur sem. Maecenas justo sem, consectetur in dolor et, luctus auctor ante. Proin a tempus augue. Proin eget sem magna. Pellentesque sollicitudin ornare nisl non varius. Fusce eget placerat massa. Duis rutrum fermentum nisl, at vestibulum mauris ullamcorper nec. Quisque varius diam ut nisl dictum, non tempor lorem vestibulum. Aenean semper consectetur dolor, sed rutrum magna lobortis sed.    Cras accumsan neque id ultricies fringilla. Nullam enim nunc, lobortis nec lacinia condimentum, mattis in elit. Sed dui quam, varius non purus sed, tincidunt dignissim quam. Vestibulum sit.
    `
    imageURL = "http://lorempixel.com/400/200";
    
    constructor(service : CoursesService) { // DependencyInjection --> Se deberá registrar en provider para que funcione
        this.courses = service.getCourses();
    }

    catchValue (email) {
        console.log(email);
    }

    catchValueBinding () {
        console.log(this.email)
    }

    catchValueTwoWays() {
        console.log(this.emailTwoWays);
    }


    onSafe ($event) {
        $event.stopPropagation();
        console.log ("Button was cliked", $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onKeyUp () {
        console.log ("Enter was pressed");
    }

    getTitle() {
        return this.title;
    }
}