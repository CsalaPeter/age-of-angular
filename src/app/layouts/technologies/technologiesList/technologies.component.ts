import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Technology } from 'src/app/models/technologies.model';
import techList from 'src/app/data/technologies.json';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: [
    '../../../../assets/css/technologies.component.css',
    '../../../../assets/css/components.css',
  ],
})
export class TechnologiesComponent implements OnInit {
  layoutSub?: Subscription;
  technologies: Technology[] = techList;

  constructor() {}

  ngOnInit(): void {}
}
