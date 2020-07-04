import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
