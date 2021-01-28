import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getExercises(): Observable<any> {
    return this.http.get('/api/public');
  }

  postAnswer(answer: any) {
    return this.http.post('/api/public/fizyka/atom', answer);
  }
}
