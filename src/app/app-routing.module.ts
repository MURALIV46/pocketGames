import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlamesComponent } from './flames/flames.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RpsComponent } from './rps/rps.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'flames', component: FlamesComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'rps', component: RpsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/landing' } // Wildcard route for undefined paths
];
// Explanation:
// - Each route maps a URL path to a corresponding component.
// - redirectTo: '/flames' ensures users land on the FLAMES page if they access the root (/).
// - The wildcard ('**') catches invalid URLs and redirects them to the FLAMES page.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
