import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Technologie } from 'src/app/models/technologies.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['../../../assets/css/technologies.component.css'],
})
export class TechnologiesComponent implements OnInit {
  layoutSub?: Subscription;
  technologies: Technologie[] = [];
  headers = ['Name', 'Age', 'Wood', 'Food', 'Stone', 'Gold', 'Description'];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutSub = this.layoutService
      .getAllTechs()
      .subscribe((tech) => (this.technologies = tech));
  }
}
