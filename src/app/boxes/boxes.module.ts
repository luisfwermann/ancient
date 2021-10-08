import { BoxesCardModule } from './card/boxes-card.module';
import { BoxesDetailModule } from './detail/boxes-detail.module';
import { NgModule } from '@angular/core';
import { BoxesListModule } from './list/boxes-list.module';

@NgModule({
  imports: [BoxesCardModule, BoxesDetailModule, BoxesListModule]
})
export class BoxesModule {}
