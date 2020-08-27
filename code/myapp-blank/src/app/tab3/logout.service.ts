import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class logoutService {
  constructor(public http: HttpClient) {}
  public exit(): Observable<any> {
    return this.http.get("http://localhost:8090/logout");
  }
}
