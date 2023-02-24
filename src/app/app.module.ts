import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PreviousWorksComponent } from './components/previous-works/previous-works.component';
import { ElementIntersectionDirective } from './directives/element-intersection.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroLandingComponent,
    AboutMeComponent,
    NavigationComponent,
    PreviousWorksComponent,
    ElementIntersectionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
