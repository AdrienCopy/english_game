import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWordOfTheDayComponent } from './game-word-of-the-day.component';

describe('GameWordOfTheDayComponent', () => {
  let component: GameWordOfTheDayComponent;
  let fixture: ComponentFixture<GameWordOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWordOfTheDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWordOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
