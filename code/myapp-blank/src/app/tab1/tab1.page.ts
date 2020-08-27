import { Component, OnInit } from "@angular/core";
import { registerService } from "./register.service";
//import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user.module";
import {
  ToastController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-tab1",
  templateUrl: "./tab1.page.html",
  styleUrls: ["./tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  user = {} as User;

  constructor(
    public service: registerService,
    public router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}
  public ufirst: any;
  public ulast: any;
  public uname: any;
  public upwd: any;

  ngOnInit() {}

  async register(user: User) {
    if (this.formValidation()) {
      //show
      let loader = this.loadingCtrl.create({
        message: "Please Wait",
      });
      (await loader).present();

      try {
        await this.afAuth.auth
          .createUserWithEmailAndPassword(user.email, user.upwd)
          .then((data) => {
            console.log(data);

            //redirect to login
            this.navCtrl.navigateRoot("tabs/tab2");
          });
      } catch (e) {
        this.showToast(e);
      }
      //dismissing loader
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
