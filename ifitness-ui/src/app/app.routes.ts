import { Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivityRegisterComponent } from './activities/activity-register/activity-register.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'activities/:id', component: ActivityRegisterComponent },
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'activities/new', component: ActivityRegisterComponent },
  { path: 'users/new', component: UserRegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', redirectTo: 'login' }
];
