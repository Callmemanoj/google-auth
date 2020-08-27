import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { Tab3PageRoutingModule } from "./tab3-routing.module";

import { Tab3Page } from "./tab3.page";
import { logoutService } from "./logout.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: Tab3Page,
      },
    ]),
  ],
  declarations: [Tab3Page],
  providers: [logoutService],
})
export class Tab3PageModule {}
