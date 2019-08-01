import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component'; // not doing anything as of right now 
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full'}, // default
  { path: 'atm', component: AtmComponent},
  { path: 'teller', component: TellerComponent},
  { path: 'contact', component:ContactComponent },

];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class router{}