import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions: any;

  choices: any;
  checkData: any;

  totalPoint: any = 0;

  mlc: any;
  mach: any;

  currentQuestion: number = 0;

  isCorrected: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getAllData().subscribe((data) => {
      this.questions = data.data;
      console.log(this.questions);
    });
  }

  checkAnswer(macauhoi: any, luachon: any, maluachon: any) {
    this.quizService.checkAnswer(macauhoi, luachon).subscribe((data) => {
      this.checkData = data;
      console.log(this.checkData);
      this.totalPoint += this.checkData.Diem;
      this.mlc = maluachon;
      this.mach = macauhoi;

      if (this.checkData.Diem > 0) {
        this.isCorrected = true;
      }
    });
  }

  next() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }
  submit() {
    alert(this.totalPoint);
  }
}
