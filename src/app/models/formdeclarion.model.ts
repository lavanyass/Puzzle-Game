const SELECTED_PUZZLE = 'selectedPuzzle';

export const formkeys = {
  SELECTED_PUZZLE,
};

export interface memoryGame {
  [SELECTED_PUZZLE]: number;
}
