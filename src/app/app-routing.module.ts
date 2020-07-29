import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowseComponent} from './all/browse/browse.component';


const routes: Routes = [
  { path: 'browse',  component: BrowseComponent },
  { path: '',  redirectTo: 'browse', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
