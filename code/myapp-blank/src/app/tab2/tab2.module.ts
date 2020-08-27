import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { Tab2PageRoutingModule } from "./tab2-routing.module";

import { Tab2Page } from "./tab2.page";
import { loginService } from "./login.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: Tab2Page,
      },
    ]),
  ],
  declarations: [Tab2Page],
  providers: [loginService],
})
export class Tab2PageModule {}
