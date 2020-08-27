import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class tokenService {
  public getToken(): any {
    let str = window.localStorage.getItem("user_register");
    let obj = JSON.parse(str);
  }
}
