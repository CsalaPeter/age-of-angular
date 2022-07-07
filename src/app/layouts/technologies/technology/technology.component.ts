import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Technology } from 'src/app/models/technologies.model';
import techList from 'src/app/data/technologies.json';

@Component({
  selector: 'app-technologie',
  templateUrl: './technology.component.html',
  styleUrls: [
    '../../../../assets/css/technologies.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class TechnologyComponent implements OnInit {
  layoutSub?: Subscription;
  technology!: Technology;
  building = '';
  units: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ id }) => (this.technology = techList[id - 1]));
  }
}
