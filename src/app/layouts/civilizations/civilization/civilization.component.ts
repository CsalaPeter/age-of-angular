import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Civilization } from 'src/app/models/civilizations.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization.component.html',
  styleUrls: [
    '../../../../assets/css/civilizations.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class CivilizationComponent implements OnInit {
  civilization!: Civilization;
  layoutSub?: Subscription;
  uniqueUnites: string[] = [];
  uniqueTechs: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ civilization }) => {
      this.civilization = civilization;
    });

    this.layoutSub = this.layoutService
      .getCivilization(this.civilization.id)
      .subscribe((civ) => (this.civilization = civ));

    if (this.civilization.unique_unit.length != 0) {
      for (let i = 0; i < this.civilization.unique_unit.length; i++) {
        this.layoutSub = this.layoutService
          .getUniqueUnit(this.civilization.unique_unit[i].slice(55))
          .subscribe((unit) => {
            this.uniqueUnites.push(unit.name);
          });
      }
    }

    if (this.civilization.unique_tech.length != 0) {
      for (let i = 0; i < this.civilization.unique_tech.length; i++) {
        this.layoutSub = this.layoutService
          .getUniqueTech(this.civilization.unique_tech[i].slice(61))
          .subscribe((tech) => {
            this.uniqueTechs.push(tech.name);
          });
      }
    }
  }
}
