import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoxesCardComponent } from './boxes-card.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BoxesCardComponent],
  exports: [BoxesCardComponent]
})
export class BoxesCardModule {}
