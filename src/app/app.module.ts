import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CivilizationsComponent } from './layouts/civilizations/civilizationsList/civilizations.component';
import { BuildingsComponent } from './layouts/buildings/buildingsList/buildings.component';
import { TechnologiesComponent } from './layouts/technologies/technologiesList/technologies.component';
import { UnitsComponent } from './layouts/units/unitsList/units.component';
import { CivilizationComponent } from './layouts/civilizations/civilization/civilization.component';
import { BuildingComponent } from './layouts/buildings/building/building.component';
import { TechnologyComponent } from './layouts/technologies/technology/technology.component';
import { UnitComponent } from './layouts/units/unit/unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CivilizationsComponent,
    CivilizationComponent,
    TechnologiesComponent,
    TechnologyComponent,
    UnitsComponent,
    UnitComponent,
    BuildingsComponent,
    BuildingComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
