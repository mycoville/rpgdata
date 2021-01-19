import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() { }


  /*** The data would come from via the REST API in the proper version ***/
  public fakeDataBase = {
    npcs: [
      {
        id: 0,
        name: 'Harry',
        age: '44',
        currentAttitude: 'Hostile',
        notes: 'A random dude on the street.'
      },
      {
        id: 1,
        name: 'Michael',
        age: '33',
        currentAttitude: 'Neutral',
        notes: 'A wizard holding the key to the Cave of Horrors.'
      },
      {
        id: 2,
        name: 'Zorgborg',
        location: 1,
        currentAttitude: 'Friendly',
        notes: 'A weird but friendly alien'
      }
    ],
    locations: [
      {
        id: 0,
        name: "The Cave of Horrors",
        notes: "The scariest shit you've ever seen!"
      },
      {
        id: 1,
        name: "Outer Space",
        notes: "Scary, cold and dark outer space!"
      },
      {
        id: 2,
        name: "The Dark Cellar of Doom",
        notes: "Damp, obscure and full of spoiled wine."
      }

    ]
  };

  /*** These would be queries to the actual REST API in the proper version ***/
  public getAllNpcs() {
    return this.fakeDataBase.npcs;
  }

  public getNpcById(npcID: number) {
    return this.fakeDataBase.npcs.find(i => i.id === npcID);
  }

  public getAllLocations() {
    return this.fakeDataBase.locations;
  }

  public getLocationById(locationID: number) {
    return this.fakeDataBase.locations.find(i => i.id === locationID);
  }
}
