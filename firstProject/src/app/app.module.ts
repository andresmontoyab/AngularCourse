import { PipeTitleCase } from './title-case.pipe';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { CoursesService } from './courses.service';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author/author.component';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    StarComponent,
    TitleCaseComponent,
    PipeTitleCase,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService, 
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
