import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Unit } from 'src/app/models/units.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-unites',
  templateUrl: './units.component.html',
  styleUrls: ['../../../assets/css/units.component.css'],
})
export class UnitsComponent implements OnInit {
  layoutSub?: Subscription;
  units: Unit[] = [];
  headers = ['Name', 'Age', 'Wood', 'Food', 'Stone', 'Gold', 'Description'];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutSub = this.layoutService
      .getAllUnits()
      .subscribe((unit) => (this.units = unit));
  }
}
