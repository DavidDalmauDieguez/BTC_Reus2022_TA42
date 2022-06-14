import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPersonajesComponent } from './info-personajes/info-personajes.component';

import { PersonajesComponent} from './personajes/personajes.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

const routes: Routes = [
  { path: 'personajes', component:PersonajesComponent},
  { path: 'infopj', component:InfoPersonajesComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardModeratorComponent},
  { path: 'admin', component: BoardAdminComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
