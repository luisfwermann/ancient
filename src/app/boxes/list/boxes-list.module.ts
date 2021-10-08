import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoxesCardModule } from '../card/boxes-card.module';
import { BoxesListComponent } from './boxes-list.component';

@NgModule({
  imports: [BoxesCardModule, CommonModule, SharedModule],
  declarations: [BoxesListComponent],
  exports: [BoxesListComponent]
})
export class BoxesListModule {}
