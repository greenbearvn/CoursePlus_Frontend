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
    return this.http.get('/api/test/detail/' + id);
  }

  getAllData(id:number): Observable<any> {
    return this.http.get('/api/lession/quiz/' + id);
  }

  getChoices(): Observable<any> {
    return this.http.get('/api/home/home/choices');
  }

  checkAnswer(choice: any): Observable<any> {
    return this.http.post('/api/v1/choice/check', choice);
  }

  saveData(assignment: assignment): Observable<any> {
    return this.http.post('/api/lession/quiz/assignment/save', assignment);
  }
}
