import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
// Las sentencias dentro de las etiquedas hw se llama interpolation
@Component({
    selector: 'courses',
    template: `
        <h2> {{ getTitle()}} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    
    ` 
}) 
export class CoursesComponent {
    title = 'List of Courses';
    courses;
    
    constructor(service : CoursesService) { // DependencyInjection --> Se deberá registrar en provider para que funcione
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}