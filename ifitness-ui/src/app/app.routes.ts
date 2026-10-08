import { Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivityRegisterComponent } from './activities/activity-register/activity-register.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { authGuard } from './security/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  {
    path: 'activities/:id',
    component: ActivityRegisterComponent,
    canActivate: [authGuard]
  },
  {
    path: 'activities',
    component: ActivitiesListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'activities/new',
    component: ActivityRegisterComponent,
    canActivate: [authGuard]
  },
  { path: 'users/new', component: UserRegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found'} // importante que seja a última rota
];
