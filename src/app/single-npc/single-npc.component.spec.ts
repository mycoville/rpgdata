import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNpcComponent } from './single-npc.component';

describe('SingleNpcComponent', () => {
  let component: SingleNpcComponent;
  let fixture: ComponentFixture<SingleNpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
