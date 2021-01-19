import { Component, OnInit, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'npc-card',
  templateUrl: './npc-card.component.html',
  styleUrls: ['./npc-card.component.css']
})
export class NpcCardComponent implements OnInit {

  @Input() npcInfo: any;
  @Input() npcLocation: any;

  constructor() { }

  faEye = faEye;

  ngOnInit(): void {
    // console.log(this.npcLocation);
  }


}
