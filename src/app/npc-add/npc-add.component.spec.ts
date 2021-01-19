import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcAddComponent } from './npc-add.component';

describe('NpcAddComponent', () => {
  let component: NpcAddComponent;
  let fixture: ComponentFixture<NpcAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
