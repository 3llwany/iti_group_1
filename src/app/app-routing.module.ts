import { AddUsersComponent } from './views/users/addUser/add-users.component';
import { PostsComponent } from './views/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/shared/Comps/not-found/not-found.component';
import { UsersIndexComponent } from './views/users/users-index/users-index.component';

const routes: Routes = [
  // 404 Not found page
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'users-index', component: UsersIndexComponent },
  { path: 'user', component: AddUsersComponent },

  { path: 'notFound', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
