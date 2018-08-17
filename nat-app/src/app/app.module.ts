import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrevComponent } from './prev/prev.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkilBlockComponent } from './header/skil-block/skil-block.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrevComponent,
    AboutComponent,
    EducationComponent,
    SkilBlockComponent,
    SkillComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
