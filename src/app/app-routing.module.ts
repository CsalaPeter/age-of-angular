import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoutes } from 'src/app/home/home.route';
import { civilizationRoutes } from 'src/app/layouts/civilizations/civilization.router';
import { buildingRoutes } from './layouts/buildings/building.router';
import { techRoutes } from './layouts/technologies/technology.router';
import { unitRoutes } from './layouts/units/unit.router';

const routes: Routes = [
  ...homeRoutes,
  ...unitRoutes,
  ...techRoutes,
  ...buildingRoutes,
  ...civilizationRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
