import { PipeTitleCase } from './title-case.pipe';
import { RouterModule } from '@angular/router';
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
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseUdemyTeacherComponent } from './course-udemy-teacher/course-udemy-teacher.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { SomeFollowersComponent } from './some-followers/some-followers.component';
import { AnotherFollowersComponent } from './another-followers/another-followers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseUdemyTeacherComponent,
    NavbarComponent,
    WelcomeComponent,
    FollowersComponent,
    ProfileComponent,
    SomeFollowersComponent,
    AnotherFollowersComponent,
    HomePageComponent,
    ArchiveComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component:  HomePageComponent},
      { path: 'followers', component:  FollowersComponent},
      { path: 'profile', component:  ProfileComponent},
      { path: 'someProfile/:id/:username', component:  SomeFollowersComponent},
      { path: 'anotherFollower', component:  AnotherFollowersComponent},
      { path: 'archive/:year/:month', component:  ArchiveComponent},
      { path: '**', component:  NotFoundComponent},
    ])
  ],
  providers: [
    CoursesService, 
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
