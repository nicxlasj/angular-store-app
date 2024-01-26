import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductComponent } from './domains/products/components/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
];
