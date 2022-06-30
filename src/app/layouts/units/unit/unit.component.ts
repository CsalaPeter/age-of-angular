import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Unit } from 'src/app/models/units.model';
import { LayoutService } from 'src/app/services/layout.service';

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
    this.route.data.subscribe(({ unit }) => (this.unit = unit));

    this.layoutSub = this.layoutService
      .getUnit(this.unit.id)
      .subscribe((unit) => (this.unit = unit));

    this.layoutSub = this.layoutService
      .createdIn(this.unit.created_in.slice(60))
      .subscribe((building) => (this.building = building[0].name));
  }
}
