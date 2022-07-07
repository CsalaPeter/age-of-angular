import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Building } from 'src/app/models/buildings.model';
import buildingList from 'src/app/data/buildings.json';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: [
    '../../../../assets/css/structures.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class BuildingsComponent implements OnInit {
  layoutSub?: Subscription;
  building: Building[] = buildingList;

  constructor() {}

  ngOnInit(): void {}
}
