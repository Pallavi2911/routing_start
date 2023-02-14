import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

//to define all the routes of our application
//children indicate child routes
//routes get parsed from top to bottom
const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },

  {
    path: 'servers',
    //to protect parent servers
    canActivate: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  { path: 'not-found', component: PageNotFoundComponent },
  //If you don't want to specify a component to load ,use redirectTo by specifying a path
  // ** is a wildcard route, it should be last one always
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  //no need to add declarations here because these are already declared in app module
  imports: [
    //to register routes in our app or in other words to add routing functionality to our app
    //forRoot allows us to register some routes for our main application
    RouterModule.forRoot(appRoutes),
  ],
  //exports help to add this module to the imports of another module
  exports: [RouterModule],
})
export class AppRoutingModule {}
