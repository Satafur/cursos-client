import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CursosComponent } from './cursos.component';
import {CursosRoutingModule} from './cursos-routing.module';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
