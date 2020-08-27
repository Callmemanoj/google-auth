import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
//import { Router } from '@angular/router'

@Injectable({
  providedIn: "root",
})
export class registerService {
  constructor(public http: HttpClient) {}
  public insert(data: any): Observable<any> {
    return this.http.post("http://localhost:8090/register", data);
  }
}
