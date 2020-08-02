import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MylistComponent } from './mylist/mylist.component';


@NgModule({
  declarations: [MylistComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
