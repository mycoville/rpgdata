import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeApiService } from '../fakeapiservice.service';

@Component({
  selector: 'app-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.css']
})
export class SingleLocationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fakeapiservice: FakeApiService) { }

  singleLocation: any;

  ngOnInit(): void {
    const locationID = parseInt(this.route.snapshot.paramMap.get('id'));

    this.singleLocation = this.fakeapiservice.getLocationById(locationID);
    console.log(this.singleLocation);
  }

}
