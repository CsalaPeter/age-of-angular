import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Structure } from 'src/app/models/structures.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['../../../../assets/css/structures.component.css'],
})
export class StructuresComponent implements OnInit {
  layoutSub?: Subscription;
  structures: Structure[] = [];
  headers = ['Name', 'Age', 'Wood', 'Stone', 'Gold', 'More'];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutSub = this.layoutService
      .getAllStructs()
      .subscribe((struct) => (this.structures = struct));
  }
}
