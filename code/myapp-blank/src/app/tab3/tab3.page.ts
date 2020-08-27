import { Component, OnInit } from "@angular/core";
import { logoutService } from "./logout.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.page.html",
  styleUrls: ["./tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  constructor(public service: logoutService, public router: Router) {}
  public logout(): any {
    return this.service.exit().subscribe(
      (posRes) => {
        if (posRes.logout == "success") {
          window.localStorage.removeItem("user_register");
          this.router.navigate(["/tabs/tab2"]);
        }
      },
      (errRes: HttpErrorResponse) => {
        if (errRes.error instanceof Error) {
          console.log("Client Side Error");
        } else {
          console.log("Server Side Error");
        }
      }
    );
  }
  public funn1() {
    console.log("Manoj");
  }
  ngOnInit() {}
}
