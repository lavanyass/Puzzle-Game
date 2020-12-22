import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formkeys, memoryGame } from '../models/formdeclarion.model';
import { puzzleTypes } from '../models/puzzleType.model';

@Component({
  selector: 'app-puzzle-form',
  templateUrl: './puzzle-form.component.html',
  styleUrls: ['./puzzle-form.component.scss'],
})
export class PuzzleFormComponent implements OnInit {
  puzzleTypes = puzzleTypes;
  formKeys = formkeys;
  game: memoryGame;
  @Output()
  gameStarted: EventEmitter<memoryGame> = new EventEmitter<memoryGame>();

  selectPuzzleForm: FormGroup = this.formBuilder.group({
    [this.formKeys.SELECTED_PUZZLE]: [0, Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  getGame() {
    this.game = this.selectPuzzleForm.getRawValue() as memoryGame;
    this.gameStarted.emit(this.game);
  }
}
