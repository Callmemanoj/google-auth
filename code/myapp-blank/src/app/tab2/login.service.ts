import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class loginService {
  constructor(public http: HttpClient) {}
  public authenticate(data: any): Observable<any> {
    console.log(data);

    return this.http.post("http://localhost:8090/login", data);
  }
}
