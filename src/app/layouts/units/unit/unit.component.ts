import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Unit } from 'src/app/models/units.model';
import { LayoutService } from 'src/app/services/layout.service';
import unitList from 'src/app/data/units.json';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: [
    '../../../../assets/css/units.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class UnitComponent implements OnInit {
  layoutSub?: Subscription;
  unit!: Unit;
  building: string = '';

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ id }) => (this.unit = unitList[id - 1]));
  }
}
