import { Routes } from '@angular/router';
import { Users } from './pages/users/users';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  {path:'',component:Users},
  {path:'user/:id',component:UserDetail},
];
