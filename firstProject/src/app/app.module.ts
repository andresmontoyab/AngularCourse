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
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';


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
    FavoriteComponent,
    BootstrapPanelComponent,
    LikeComponent
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
