import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { assignment } from 'src/app/Models/frontend/assignment';
import { CompletedComponent } from './completed/completed.component';

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
  totalPoint: any = 0;
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
    ThoiGianNop: '',
    DiemSo: 0,
  };

  resSave: any;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.MaBaiKT = Number(routeParams.get('id'));

    this.getDetailTest();

    this.quizService.getAllData().subscribe((data) => {
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

  checkAnswer(macauhoi: any, luachon: any, maluachon: any) {
    this.quizService.checkAnswer(macauhoi, luachon).subscribe((data) => {
      this.checkData = data;

      this.totalPoint += this.checkData.Diem;
      this.mlc = maluachon;
      this.mach = macauhoi;

      if (this.checkData.Diem > 0) {
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

  openDialog(totalPoint: number, correctedChoices: number): void {
    const dialogRef = this.dialog.open(CompletedComponent, {
      data: {
        totalPoint: totalPoint,
        correctedChoices: correctedChoices,
        totalQues: this.questions.length,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});

    this.assignment = {
      MaBaiLam: 0,
      MaNguoiDung: 0,
      MaBaiKT: this.MaBaiKT,
      ThoiGianNop: Date(),
      DiemSo: this.totalPoint,
    };

    this.quizService.saveData(this.assignment).subscribe((data) => {
      this.resSave = data.alert;
      console.log(this.resSave);
    });
  }
}
