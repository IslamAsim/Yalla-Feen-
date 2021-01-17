import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class InfoModule { }
