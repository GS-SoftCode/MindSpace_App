import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LogInComponent } from './pages/log-in/log-in.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'log-in', component: LogInComponent},
];