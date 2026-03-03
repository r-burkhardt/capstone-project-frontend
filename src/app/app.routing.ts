import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { PlayersComponent } from './pages/players/players.component';
import { OrgProfileComponent } from './pages/organizations/org-profile/org-profile.component';
import { PlayersProfileComponent } from './pages/players/players-profile/players-profile.component';
import { ErrorPageComponent } from './shared/errors/error-page/error-page.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/sign-up/sign-up.component';
import { BuildPlayerComponent } from './user/build-player/build-player.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'organizations/:id', component: OrgProfileComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:id', component: PlayersProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'build-player', component: BuildPlayerComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];
