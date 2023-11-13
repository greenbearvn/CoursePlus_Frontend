import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './css/icon.css',
    './css/uikit.css',
    './css/tailwin.css',
  ],
})
export class HomeComponent {
  data: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getAllData().subscribe(data => {
      this.data = data
      console.log(data)
    })
  }
}
