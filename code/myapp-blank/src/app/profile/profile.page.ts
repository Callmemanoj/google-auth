import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { NavController, ToastController } from "@ionic/angular";
import { AngularFireDatabase } from "angularfire2/database";
import { ViewChild } from "@angular/core";

import { Profile } from "../models/profile";
import { Observable } from "rxjs";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profile = {} as Profile;
  // @ViewChild("content") navCtrl: NavController;
  profileData: Observable<Profile>;
  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private navCtrl: NavController,
    private toast: ToastController
  ) {}

  createProfile() {
    this.afAuth.authState.subscribe((auth) => {
      this.afDatabase
        .object(`profile/${auth.uid}`)
        .set(this.profile)
        .then(() => {
          this.navCtrl.navigateForward("/dashboard");
        });
    });
    console.log("Hello");
  }

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
            duration: 0,
          })
          .then((toastData) => toastData.present());
        this.navCtrl.navigateRoot("tabs/tab2");
      }
    });
  }
}
