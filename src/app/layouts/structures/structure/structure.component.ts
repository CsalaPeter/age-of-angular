import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Structure } from 'src/app/models/structures.model';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['../../../../assets/css/structures.component.css'],
})
export class StructureComponent implements OnInit {
  structure!: Structure;
  layoutSub?: Subscription;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ structure }) => {
      this.structure = structure;
    });

    this.layoutSub = this.layoutService
      .getStructure(this.structure.id)
      .subscribe((struct) => (this.structure = struct));
  }
}
