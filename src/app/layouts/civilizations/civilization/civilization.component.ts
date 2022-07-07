import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Civilization } from 'src/app/models/civilizations.model';
import civilizationList from 'src/app/data/civilizations.json';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ id }) => {
      this.civilization = civilizationList[id - 1];
    });
  }
}
