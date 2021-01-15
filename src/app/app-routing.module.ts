import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    loadChildren: () => import('../app/components/trip/trip.module').then(m => m.TripModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
