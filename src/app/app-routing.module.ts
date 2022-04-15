import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullUserInfoPgComponent } from './full-user-info-pg/full-user-info-pg.component';
import { UserPostsPgComponent } from './user-posts-pg/user-posts-pg.component';
import { UsersPgComponent } from './users-pg/users-pg.component';

const routes: Routes = [
  {path:"",component:UsersPgComponent},
  {path:'FullUserInfo/:id',component:FullUserInfoPgComponent},
  {path: 'UserPosts/:id', component: UserPostsPgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
