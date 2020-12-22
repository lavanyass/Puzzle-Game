export interface puzzleTypeModel {
  noOfColumns: number;
  displayText: string;
}

export const puzzleTypes: puzzleTypeModel[] = [
  {
    noOfColumns: 4,
    displayText: '4*4 Easy',
  },
  {
    noOfColumns: 6,
    displayText: '6*6 Medium ',
  },
  {
    noOfColumns: 8,
    displayText: '8*8 Hard',
  },
  {
    noOfColumns: 10,
    displayText: '10*10 Difficult',
  },
];
