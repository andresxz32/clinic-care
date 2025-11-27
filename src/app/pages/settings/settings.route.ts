import {Routes} from '@angular/router';
import {ServiceComponent} from '@pages/settings/service/service.component';
import {ServiceListComponent} from '@pages/settings/service/components/service-list/service-list.component';
export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'services',
  },
  {
    path: 'services',
    component: ServiceComponent,
    children: [
      {
        path: '',
        component: ServiceListComponent,
      }
    ],
  },
] as Routes;
