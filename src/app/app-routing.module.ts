import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './components/packages/packages.component';
import { BooknowComponent } from './components/booknow/booknow.component';

const routes: Routes = [
  { path: 'packages', component: PackagesComponent },
  { path: 'app-booknow', component: BooknowComponent },
  { path: '', redirectTo: '/packages', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/packages' } // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
