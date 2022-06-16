import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CivilizationsComponent } from './layouts/civilizations/civilizations.component';
import { StructuresComponent } from './layouts/structures/structures.component';
import { TechnologiesComponent } from './layouts/technologies/technologies.component';
import { UnitsComponent } from './layouts/units/units.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CivilizationsComponent,
    StructuresComponent,
    TechnologiesComponent,
    UnitsComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
