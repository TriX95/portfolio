import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailJsComponent } from './components/email-js/email-js.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TheNavigationComponent,
    ProfilComponent,
    SkillBarComponent,
    EmailJsComponent,
    ProgressBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
