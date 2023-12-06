import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { assignment } from 'src/app/Models/frontend/assignment';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getTestDetail(id: number): Observable<any> {
    return this.http.get('/api/lession/test/detail/' + id);
  }

  getAllData(): Observable<any> {
    return this.http.get('/api/lession/quiz/1');
  }

  getChoices(): Observable<any> {
    return this.http.get('/api/home/home/choices');
  }

  checkAnswer(macauhoi: any, sochon: any): Observable<any> {
    return this.http.post('/api/lession/quiz/checkanswer', {
      macauhoi,
      sochon,
    });
  }

  saveData(assignment: assignment): Observable<any> {
    return this.http.post('/api/lession/quiz/assignment/save', assignment);
  }
}
