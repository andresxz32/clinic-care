import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {AuthenticationLayoutComponent} from './layout/authentication-layout/authentication-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(component => component.DashboardComponent),
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(component => component.HomeComponent),
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.route')
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'authentication',
    component: AuthenticationLayoutComponent,
    children: [
      {
        path: 'sign-in',
        title: 'Sign In',
        loadComponent: () => import('./pages/authentication/sign-in/sign-in.component').then(component => component.SignInComponent),
      },
      {
        path: 'sign-up',
        title: 'Sign Up',
        loadComponent: () => import('./pages/authentication/sign-in/sign-in.component').then(component => component.SignInComponent),
      },
      {
        path: 'forgot-password',
        title: 'Password recovery',
        loadComponent: () => import('./pages/authentication/sign-in/sign-in.component').then(component => component.SignInComponent),
      },
      {
        path: 'complete-registration',
        title: 'Complete registration',
        loadComponent: () => import('./pages/authentication/complete-registration/complete-registration.component').then(component => component.CompleteRegistrationComponent),
      },
      {path: '', redirectTo: 'sign-in', pathMatch: 'full'}
    ]
  },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];
