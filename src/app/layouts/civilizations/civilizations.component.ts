import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Civilizations } from 'src/app/models/civilizations.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['../../../assets/css/civilizations.component.css'],
})
export class CivilizationsComponent implements OnInit {
  layoutSub?: Subscription;
  civilizations: Civilizations[] = [];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutSub = this.layoutService
      .getAll()
      .subscribe((civs) => (this.civilizations = civs));
  }
}
