import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
