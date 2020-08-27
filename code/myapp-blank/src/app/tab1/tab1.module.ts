import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { Tab1PageRoutingModule } from "./tab1-routing.module";

import { Tab1Page } from "./tab1.page";
import { registerService } from "./register.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }]),
  ],
  declarations: [Tab1Page],
  providers: [registerService],
})
export class Tab1PageModule {}
