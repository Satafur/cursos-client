import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {NgbDateNativeAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [
    NgbDateNativeAdapter
  ],
  exports: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
