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
        {{ examplePipe.title }} <br/>
        {{ examplePipe.rating }} <br/>
        {{ examplePipe.students }} <br/>
        {{ examplePipe.price }} <br/>
        {{ examplePipe.releaseDate }} <br/>
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