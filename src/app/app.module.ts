import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { NpcListComponent } from './npc-list/npc-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { NpcCardComponent } from './npc-card/npc-card.component';
import { SingleLocationComponent } from './single-location/single-location.component';
import { SingleNpcComponent } from './single-npc/single-npc.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NpcAddComponent } from './npc-add/npc-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RouterOutletComponent,
    NpcListComponent,
    LocationListComponent,
    NpcCardComponent,
    SingleLocationComponent,
    SingleNpcComponent,
    LocationCardComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    NpcAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
