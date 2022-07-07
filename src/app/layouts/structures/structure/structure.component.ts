import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Building } from 'src/app/models/buildings.model';
import buildingList from 'src/app/data/buildings.json';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: [
    '../../../../assets/css/structures.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class StructureComponent implements OnInit {
  building!: Building;
  layoutSub?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ id }) => {
      this.building = buildingList[id - 1];
    });
  }
}
