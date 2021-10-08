import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/core/models/box.model';
import { Router } from '@angular/router';
import { BoxesService } from 'src/app/core/services/boxes.service';

@Component({
  selector: 'ag-boxes-list',
  templateUrl: 'boxes-list.html',
  styleUrls: ['boxes-list.scss']
})
export class BoxesListComponent implements OnInit {
  boxes: Box[] = [];

  constructor(private boxesService: BoxesService, private router: Router) {}

  ngOnInit(): void {
    this.refresh();
  }

  async refresh(): Promise<void> {
    this.boxes = await this.boxesService.list();
  }

  onClickBox(box: Box): void {
    this.router.navigate(['boxes', box.id]);
  }
}
