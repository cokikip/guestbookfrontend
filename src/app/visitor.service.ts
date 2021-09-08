import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitor } from './Visitor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private apiServerUrl= `${environment.serverUrl}visitor`;

  constructor(private http:HttpClient) { }

  public getVisitor():Observable<Visitor[]>{
    return this.http.get<Visitor[]>(`${this.apiServerUrl}/all`);
  }

  public getVisitorById(visitorId:number):Observable<Visitor>{
    return this.http.get<Visitor>(`${this.apiServerUrl}/find/${visitorId}`);
  }
  public addVisitor(visitor:Visitor):Observable<Visitor>{
    return this.http.post<Visitor>(`${this.apiServerUrl}/add`,visitor);
  }

  public updateVisitor(visitor:Visitor):Observable<Visitor>{
    return this.http.put<Visitor>(`${this.apiServerUrl}/update`,visitor);
  }
  public deleteVisitor(visitorId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${visitorId}`)
  }


}
