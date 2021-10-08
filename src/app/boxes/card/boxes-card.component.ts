import { Component, Input } from '@angular/core';
import { Box } from 'src/app/core/models/box.model';

@Component({
  selector: 'ag-boxes-card',
  templateUrl: 'boxes-card.html',
  styleUrls: ['boxes-card.scss']
})
export class BoxesCardComponent {
  @Input() box!: Box;
}
