import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Box } from 'src/app/core/models/box.model';
import { Item } from 'src/app/core/models/item.model';
import { BoxesService } from 'src/app/core/services/boxes.service';

@Component({
  selector: 'ag-boxes-detail',
  templateUrl: 'boxes-detail.html',
  styleUrls: ['boxes-detail.scss']
})
export class BoxesDetailComponent implements OnInit {
  box!: Box;
  openedItem!: Item | null;

  constructor(private boxesService: BoxesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      try {
        this.box = await this.boxesService.get(params.id);
      } catch (err: any) {
        alert('An error occurred while loading this box details. ' + err.message);
        this.goBack();
      }

      this.openedItem = null;
    });
  }

  goBack(): void {
    this.router.navigate(['/boxes']);
  }

  async onOpen(): Promise<void> {
    if (!this.box) {
      return;
    }

    this.openedItem = null;
    const isSure = confirm('Are you sure you want to open this box?');
    if (!isSure) {
      return;
    }

    this.onConfirmOpen();
  }

  private async onConfirmOpen(): Promise<void> {
    try {
      this.openedItem = await this.boxesService.openBox(this.box.id);
    } catch (err: any) {
      alert('An error occurred while opening the box. ' + err.message);
    }
  }
}
