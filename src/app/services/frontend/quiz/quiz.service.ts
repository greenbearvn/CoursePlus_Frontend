import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  data: any;

  getAllData(): Observable<any> {
    return this.http.get('/api/lession/quiz/1');
  }

  getChoices(): Observable<any> {
    return this.http.get('/api/home/home/choices');
  }

  checkAnswer(macauhoi: any, sochon: any): Observable<any> {
    return this.http.post('/api/lession/quiz/checkanswer', { macauhoi, sochon });
  }
}
