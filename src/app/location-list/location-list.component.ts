import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../fakeapiservice.service';

@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(private fakeApi: FakeApiService) { }

  locationData: any[];

  ngOnInit(): void {
    this.locationData = this.fakeApi.getAllLocations();
  }

}
