import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CivilizationsComponent } from './layouts/civilizations/civilizationsList/civilizations.component';
import { StructuresComponent } from './layouts/structures/structuresList/structures.component';
import { TechnologiesComponent } from './layouts/technologies/technologiesList/technologies.component';
import { UnitsComponent } from './layouts/units/unitsList/units.component';
import { CivilizationComponent } from './layouts/civilizations/civilization/civilization.component';
import { StructureComponent } from './layouts/structures/structure/structure.component';
import { TechnologieComponent } from './layouts/technologies/technologie/technologie.component';
import { UnitComponent } from './layouts/units/unit/unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CivilizationsComponent,
    CivilizationComponent,
    TechnologiesComponent,
    TechnologieComponent,
    UnitsComponent,
    UnitComponent,
    StructuresComponent,
    StructureComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
