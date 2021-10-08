import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ag-img',
  templateUrl: 'image.html'
})
export class ImageComponent {
  @Input() alt: string | null = null;
  @Input() defaultUrl = 'https://static.ancientgaming.io/images/madness.png';
  @Input() url: string | null = null;

  onError(): void {
    this.url = this.defaultUrl;
  }
}
