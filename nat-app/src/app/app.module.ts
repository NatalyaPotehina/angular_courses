import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrevComponent } from './prev/prev.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SummerCounterComponent } from './summer-counter/summer-counter.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrevComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ContactComponent,
    FooterComponent,
    SummerCounterComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
