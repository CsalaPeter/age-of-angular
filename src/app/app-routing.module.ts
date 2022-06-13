import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoutes } from 'src/app/home/home.route';

const Routes = homeRoutes;

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
