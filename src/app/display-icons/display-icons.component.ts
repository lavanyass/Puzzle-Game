import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import lodash from 'lodash';
import { GameCompletedComponent } from '../game-completed/game-completed.component';
import { imageNames } from '../models/imageNames.model';

@Component({
  selector: 'app-display-icons',
  templateUrl: './display-icons.component.html',
  styleUrls: ['./display-icons.component.scss'],
})
export class DisplayIconsComponent implements OnInit {
  iconPositions: number[] = [];
  image: string[] = [];
  iconNames = imageNames;
  image1ClickedPosition = -1;
  image2ClickedPosition = -1;
  correctlyAnsweredposition: number[] = [];
  totalWrong = 0;
  lastClickedPosition = -1;

  @Input() gameNoOfColumns = 0;
  totalIcons = () => (this.gameNoOfColumns * this.gameNoOfColumns) / 2;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const noofIcons = (this.gameNoOfColumns * this.gameNoOfColumns) / 2;
    for (var i = 1; i <= this.totalIcons(); i++) {
      this.iconPositions.push(i);
      this.iconPositions.push(i);
      //this.correctlyAnsweredposition.push(i);
    }

    this.iconPositions = lodash.shuffle(this.iconPositions);
  }
  showImage(i) {
    if (this.lastClickedPosition === i) {
      return;
    }

    this.lastClickedPosition = i;

    if (this.image1ClickedPosition === -1) {
      this.image1ClickedPosition = i;
    } else if (this.image2ClickedPosition === -1) {
      this.image2ClickedPosition = i;
      const image1 = this.getImageIndexbyPosition(this.image1ClickedPosition);
      const image2 = this.getImageIndexbyPosition(this.image2ClickedPosition);

      if (image1 === image2) {
        this.correctlyAnsweredposition.push(image1);
        this.image1ClickedPosition = -1;
        this.image2ClickedPosition = -1;
        this.checkGameCompleted();
      } else {
        this.totalWrong++;
        setTimeout(() => {
          this.image1ClickedPosition = -1;
          this.image2ClickedPosition = -1;
          this.lastClickedPosition = -1;
        }, 500);
      }
    }
  }

  checkGameCompleted() {
    if (this.correctlyAnsweredposition.length === this.totalIcons()) {
      const dialogRef = this.dialog.open(GameCompletedComponent);

      dialogRef.afterClosed().subscribe((result) => {
        this.restartGame();
      });
    }
  }

  restartGame() {
    this.image1ClickedPosition = -1;
    this.image2ClickedPosition = -1;
    this.lastClickedPosition = -1;
    this.totalWrong = 0;
    this.correctlyAnsweredposition = [];
    this.iconPositions = lodash.shuffle(this.iconPositions);
  }

  getColor(i) {
    const imageIndex = this.getImageIndexbyPosition(i);
    return this.correctlyAnsweredposition.findIndex((e) => e === imageIndex) >
      -1
      ? 'accent'
      : 'primary';
  }

  getImage(i) {
    const imageIndex = this.getImageIndexbyPosition(i);
    const isAnswered =
      this.correctlyAnsweredposition.findIndex((e) => e === imageIndex) > -1;

    if (isAnswered) {
      return this.iconNames[imageIndex];
    }

    if (i === this.image1ClickedPosition) {
      return this.iconNames[imageIndex];
    }
    if (i === this.image2ClickedPosition) {
      return this.iconNames[imageIndex];
    }
    return '';
  }

  getImageIndexbyPosition(i) {
    return this.iconPositions[i];
  }
}
