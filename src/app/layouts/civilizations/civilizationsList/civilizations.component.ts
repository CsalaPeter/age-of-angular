import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Civilization } from 'src/app/models/civilizations.model';
import { Unit } from 'src/app/models/units.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['../../../../assets/css/civilizations.component.css'],
})
export class CivilizationsComponent implements OnInit {
  layoutSub?: Subscription;
  civilizations: Civilization[] = [];

  headers = ['Civilization', 'Expension', 'Army Type', 'Team Bonus', 'Details'];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutSub = this.layoutService
      .getAllCivs()
      .subscribe((civ) => (this.civilizations = civ));
  }
}
