// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { ChatPageRoutingModule } from './chat-routing.module';

// import { ChatPage } from './chat.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     ChatPageRoutingModule
//   ],
//   declarations: [ChatPage]
// })
// export class ChatPageModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ChatPage } from "./chat.page";

import { ChatPageRoutingModule } from "./chat-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChatPageRoutingModule],
  declarations: [ChatPage],
})
export class ChatPageModule {}
