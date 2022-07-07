import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Civilization } from 'src/app/models/civilizations.model';
import civilizationList from 'src/app/data/civilizations.json';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: [
    '../../../../assets/css/civilizations.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class CivilizationsComponent implements OnInit {
  layoutSub?: Subscription;
  civilizations: Civilization[] = civilizationList;

  constructor() {}

  ngOnInit(): void {}
}
