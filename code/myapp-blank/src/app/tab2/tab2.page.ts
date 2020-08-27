import { Component, OnInit } from "@angular/core";
import { loginService } from "./login.service";

import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from "firebase/app";
import { User } from "../models/user.module";
import {
  ToastController,
  LoadingController,
  NavController,
} from "@ionic/angular";

import { Profile } from "../models/profile";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.page.html",
  styleUrls: ["./tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  user = {} as User;
  public prof: any;
  private bio: any;
  constructor(
    public service: loginService,
    public router: Router,
    public afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {}
  public uname: any;
  public upwd: any;

  public google() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log("Manoj");
    this.router.navigate(["/profile"]);
  }

  ngOnInit() {}

  async login(user: User) {
    if (this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please Wait",
      });
      (await loader).present();

      try {
        await this.afAuth.auth
          .signInWithEmailAndPassword(user.email, user.upwd)
          .then((data) => {
            //this.afDatabase.object(`profile/${data.user.uid}`).set(user);

            firebase
              .database()
              .ref()
              .child(`profile/${data.user.uid}`)
              .on("value", (snaps) => {
                if (snaps.val() != null) {
                  this.navCtrl.navigateForward("/dashboard");
                  console.log(snaps.val());
                } else {
                  this.navCtrl.navigateRoot("/profile");
                }
              });
          });
      } catch (e) {
        this.showToast(e);
      }

      //dismiss
      (await loader).dismiss();
    }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast("Enter Username");
      return false;
    }

    if (!this.user.upwd) {
      this.showToast("Enter Password");
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}
