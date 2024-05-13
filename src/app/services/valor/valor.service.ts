import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorService {

  private URL = "http://localhost:8080/api/valores";

  constructor(private httpClient: HttpClient) { }

  public getAllValues(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public createValues(user: any): Observable<any> {
    return this.httpClient.post(this.URL, user);
  }
}
