import { AuthGuard } from './guards/auth.guard';
import { ListClientComponent } from './components/list-client/list-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ShowClientComponent } from './components/show-client/show-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'clients', component: ListClientComponent, canActivate: [AuthGuard]},
  {path: 'clients/add', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'clients/edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
  {path: 'clients/:id', component: ShowClientComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
