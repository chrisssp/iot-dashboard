import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  private URL = "http://localhost:8080/api/componentes";

  constructor(private httpClient: HttpClient) { }

  public getAllComponents(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public updateComponent(elemento: any, estado:any, component: any) {
    return this.httpClient.put(this.URL + "/" + elemento + "/" + estado, component);
  }
}
