import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpcListComponent } from '../app/npc-list/npc-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LocationListComponent } from './location-list/location-list.component';
import { NpcAddComponent } from './npc-add/npc-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleLocationComponent } from './single-location/single-location.component';
import { SingleNpcComponent } from './single-npc/single-npc.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'npcs', component: NpcListComponent
  },
  { path: 'npcs/:id', component: SingleNpcComponent },
  { path: 'npc-add', component: NpcAddComponent },
  { path: 'locations', component: LocationListComponent },
  {
    path: 'locations/:id', component: SingleLocationComponent
  },
  {
    path: '**', component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
