import { BoxesCardModule } from './../card/boxes-card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoxesDetailComponent } from './boxes-detail.component';

@NgModule({
  imports: [BoxesCardModule, CommonModule, SharedModule],
  declarations: [BoxesDetailComponent],
  exports: [BoxesDetailComponent]
})
export class BoxesDetailModule {}
