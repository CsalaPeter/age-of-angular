import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Structure } from 'src/app/models/structures.model';
import { Technology } from 'src/app/models/technologies.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['../../../../assets/css/technologies.component.css'],
})
export class TechnologieComponent implements OnInit {
  layoutSub?: Subscription;
  technology!: Technology;
  building = '';
  units: string[] = [];

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      ({ technology }) => (this.technology = technology)
    );

    this.layoutSub = this.layoutService
      .getTech(this.technology.id)
      .subscribe((tech) => (this.technology = tech));

    this.layoutSub = this.layoutService
      .developsIn(this.technology.develops_in.slice(60))
      .subscribe((building) => (this.building = building[0].name));

    for (let i = 0; i < this.technology.applies_to.length; i++) {
      this.layoutSub = this.layoutService
        .appliesTo(this.technology.applies_to[i].slice(55))
        .subscribe((unit) => {
          this.units.push(unit.name);
        });
    }
  }
}
