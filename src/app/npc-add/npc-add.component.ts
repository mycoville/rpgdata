import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../fakeapiservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'npc-add',
  templateUrl: './npc-add.component.html',
  styleUrls: ['./npc-add.component.css']
})
export class NpcAddComponent implements OnInit {

  constructor(private fakeApi: FakeApiService) { }


  ngOnInit(): void {
  }

  private showFormInfo() {

  }

}
