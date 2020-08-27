import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";
import {
  ToastController,
  NavController,
  LoadingController,
} from "@ionic/angular";
import { Profile } from "../models/profile";
import { Observable } from "rxjs";
import { async } from "@angular/core/testing";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  profileData: Observable<Profile>;
  private jsonData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private navCtrl: NavController,
    private LoadCtrl: LoadingController,
    private afDatabase: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((data) => {
      if (data && data.email && data.uid) {
        this.toast
          .create({
            message: `Welcome to Manoj_APP, ${data.email}`,
            duration: 2000,
          })
          .then((toastData) => toastData.present());

        this.profileData = this.afDatabase
          .object<Profile>(`profile/${data.uid}`)
          .valueChanges();
      } else {
        this.toast
          .create({
            message: `Could Not Find Authentication details`,
            duration: 2000,
          })
          .then((toastData) => toastData.present());
        this.navCtrl.navigateRoot("tabs/tab2");
      }

      firebase
        .database()
        .ref()
        .child(`profile/${data.uid}`)
        .on(
          "value",
          (snaps) => {
            this.jsonData = snaps.val();
            console.log(this.jsonData);
          },
          (errRes: HttpErrorResponse) => {
            console.log(errRes);
          }
        );
    });
  }

  async logout() {
    let loader = this.LoadCtrl.create({
      message: "Loging Out",
      duration: 3000,
    });
    await (await loader).present();
    try {
      await this.afAuth.auth.signOut().then((data) => {
        console.log(data);
        this.navCtrl.navigateRoot("tabs/tab2");
      });
    } catch (e) {
      console.log("Logout Failed");
    }
  }
}
