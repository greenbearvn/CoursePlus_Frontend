import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CompletedComponent>,
    public dialog: MatDialog,
    private quizService: QuizService,
    private toastService: ToastService
  ) {}

  correctedChoices: any;
  totalQues: any;
  tested: any;

  ngOnInit() {
    this.correctedChoices = this.data.correctedChoices;
    this.totalQues = this.data.totalQues;
    this.tested = this.data.tested;

    console.log(this.tested);

    
    this.quizService.saveData(this.tested).subscribe((data) => {
      if(data){
        this.toastService.success("Bài kiểm tra đã được lưu lại!")
      }
    });
  }

  
}
