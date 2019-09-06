import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GrainFormComponent } from './components/grain-form/grain-form.component';
import { GrainListComponent } from './components/grain-list/grain-list.component';


const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'addGrains', component: GrainFormComponent, canActivate: [AuthGuard] },
{ path: 'viewGrainsList', component: GrainListComponent, canActivate: [AuthGuard] },
{ path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
