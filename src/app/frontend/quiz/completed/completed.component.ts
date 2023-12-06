import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CompletedComponent>,
    public dialog: MatDialog
  ) {}
  totalPoint: any;
  correctedChoices: any;
  totalQues:any;

  ngOnInit() {
    this.totalPoint = this.data.totalPoint;
    this.correctedChoices = this.data.correctedChoices;
    this.totalQues = this.data.totalQues;
  }
}
