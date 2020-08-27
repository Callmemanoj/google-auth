import { NgModule } from "@angular/core";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { CommonModule } from "@angular/common";

import { tokenService } from "./token.service";

import { auth } from "./auth.filter";
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    tokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: auth,
      multi: true,
    },
  ],
})
export class TokenModule {}
