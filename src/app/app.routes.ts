import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import {UsersComponent} from './users/users'
import { Contactanos } from './contactanos/contactanos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contactanos', component: Contactanos},
  { path: 'usuarios', component: UsersComponent}
];
