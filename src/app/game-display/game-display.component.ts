import { Component, Input, OnInit } from '@angular/core';
import { memoryGame } from '../models/formdeclarion.model';
import { puzzleTypeModel } from '../models/puzzleType.model';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss'],
})
export class GameDisplayComponent implements OnInit {
  startGamevalue = 0;
  constructor() {}

  ngOnInit(): void {}
  startGame(value: memoryGame) {
    this.startGamevalue = value.selectedPuzzle;
  }
}
