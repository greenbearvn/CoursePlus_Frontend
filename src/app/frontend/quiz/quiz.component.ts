import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { assignment } from 'src/app/Models/frontend/assignment';
import { CompletedComponent } from './completed/completed.component';
import { AccountService } from 'src/app/services/frontend/account/account.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions: any;

  detailTest: any;

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

  assignment: assignment = {
    MaBaiLam: 0,
    MaNguoiDung: 0,
    MaBaiKT: 0,
    ThoiGianNop: new Date(),
    ChinhXac: 0,
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

    this.quizService.getAllData(this.MaBaiKT).subscribe((data) => {
      this.questions = data.data;
      console.log(this.questions);
    });
  }

  getDetailTest() {
    this.quizService.getTestDetail(this.MaBaiKT).subscribe((data) => {
      this.detailTest = data.data;
      console.log(this.detailTest);
    });
  }

  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.user = data.data;
      console.log(this.user);
    });
  }

  checkAnswer(choice: any) {
    console.log(choice);
    this.quizService.checkAnswer(choice).subscribe((data) => {
      this.checkData = data;

      this.mlc = choice.MaLuaChon;
      this.mach = choice.MaCauHoi;

      if (this.checkData.Dung > 0) {
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
    const dialogRef = this.dialog.open(CompletedComponent, {
      data: {
        correctedChoices: correctedChoices,
        totalQues: this.questions.length,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});

    this.assignment = {
      MaBaiLam: 0,
      MaNguoiDung: this.user.MaNguoiDung,
      MaBaiKT: this.MaBaiKT,
      ThoiGianNop: new Date(),
      ChinhXac: correctedChoices,
    };

    this.quizService.saveData(this.assignment).subscribe((data) => {
      this.resSave = data.alert;
      console.log(this.resSave);
    });
  }
}
