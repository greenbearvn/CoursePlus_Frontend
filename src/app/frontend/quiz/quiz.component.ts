import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { CompletedComponent } from './completed/completed.component';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { Test } from 'src/app/Models/frontend/Test';
import { Tested } from 'src/app/Models/frontend/assignment';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  

  test: Test = {
    questions: [],
    testId: 0,
    testName: "",
    teacherId: 0,
    videoId: 0
};
  
  questions: any;

  MaBaiKT: any;
  choices: any;
  checkData: any;

  /// share data

  correctedChoices: any = 0;

  mlc: any;
  mach: any;

  currentQuestion: number = 0;
  isCorrected: any;

  /// save assignment

  assignment: Tested = {
    testedId: 0,
    userId: 0,
    testId: 0,
    dateFinish: new Date(),
    corrected: 0,
  };

  user: any;

  resSave: any;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.MaBaiKT = Number(routeParams.get('id'));

    this.getDetailTest();
    this.getUser();

  
  }

  getDetailTest() {
    this.quizService.getTestDetail(this.MaBaiKT).subscribe((data) => {
      this.test = data;
      console.log(this.test);

      this.questions = this.test.questions;
    });
  }

  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.user = data.user_current;
      console.log(this.user);
    });
  }

  checkAnswer(choice: any) {

    this.mlc = choice.choiceId;
    this.mach = choice.questionId ;

    console.log("choice: " + this.mlc)
    console.log("question: " + this.mach)
   
    this.quizService.checkAnswer(choice).subscribe((data) => {
      this.checkData = data;

      if (this.checkData==true) {
        this.isCorrected = true;
        this.correctedChoices += 1;
      }
    });
  }

  next() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  openDialog(correctedChoices: number): void {
   
    this.assignment = {
      testedId: 0,
      userId: this.user.userId,
      testId: this.MaBaiKT,
      dateFinish: new Date(),
      corrected: correctedChoices,
    };

    const dialogRef = this.dialog.open(CompletedComponent, {
      data: {
        correctedChoices: correctedChoices,
        totalQues: this.questions.length,
        tested : this.assignment
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});

   

  }
}
