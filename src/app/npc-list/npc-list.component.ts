import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../fakeapiservice.service';

@Component({
  selector: 'npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {

  constructor(
    private fakeApi: FakeApiService,
  ) { }

  npcData: any[];
  locationData: any[];

  noLocation = { name: '???' };

  ngOnInit(): void {

    this.npcData = this.fakeApi.getAllNpcs();
    this.locationData = this.fakeApi.getAllLocations();
  }

}
