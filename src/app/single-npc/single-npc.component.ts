import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeApiService } from '../fakeapiservice.service';

@Component({
  selector: 'app-single-npc',
  templateUrl: './single-npc.component.html',
  styleUrls: ['./single-npc.component.css']
})
export class SingleNpcComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fakeapiservice: FakeApiService) { }

  singleNpc: any;

  ngOnInit(): void {

    const npcID = parseInt(this.route.snapshot.paramMap.get('id'));

    this.singleNpc = this.fakeapiservice.getNpcById(npcID);
    console.log(this.singleNpc);
  }

}
