import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMenuPage } from './user-menu';

@NgModule({
  declarations: [
    UserMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMenuPage),
  ],
})
export class UserMenuPageModule {}
