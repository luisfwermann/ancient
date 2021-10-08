import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { ImageModule } from './image/image.module';

@NgModule({
  imports: [HeaderModule, ImageModule],
  exports: [HeaderModule, ImageModule]
})
export class SharedModule {}
