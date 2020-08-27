// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";

// import { DashboardPage } from "./dashboard.page";

// const routes: Routes = [
//   {
//     path: "",
//     component: DashboardPage,
//   },
//   {
//     path: "",
//     redirectTo: "info",
//     pathMatch: "full",
//   },
//   {
//     path: "info",
//     loadChildren: "./info/info.module#InfoPageModule",
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class DashboardPageRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardPage } from "./dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: DashboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
