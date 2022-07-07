import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Unit } from 'src/app/models/units.model';
import unitList from 'src/app/data/units.json';

@Component({
  selector: 'app-unites',
  templateUrl: './units.component.html',
  styleUrls: [
    '../../../../assets/css/units.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class UnitsComponent implements OnInit {
  layoutSub?: Subscription;
  units: Unit[] = unitList;

  constructor() {}

  ngOnInit(): void {}
}
