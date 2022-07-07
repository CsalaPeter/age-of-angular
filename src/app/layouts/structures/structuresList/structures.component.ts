import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Building } from 'src/app/models/buildings.model';
import buildingList from 'src/app/data/buildings.json';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: [
    '../../../../assets/css/structures.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class StructuresComponent implements OnInit {
  layoutSub?: Subscription;
  building: Building[] = buildingList;

  constructor() {}

  ngOnInit(): void {}
}
