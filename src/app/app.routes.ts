import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/layout/layout.component';
import { AboutComponent } from './domains/info/about/about.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
        path: '',
        loadComponent: ()=> import('./domains/products/pages/list/list.component').then(x => x.ListComponent)
      },
      {
        path: 'about',
        loadComponent: ()=> import('./domains/info/about/about.component').then(x => x.AboutComponent)
      },
      {
        path: 'product/:id',
        loadComponent: ()=> import('./domains/products/pages/product-detail/product-detail.component').then(x => x.ProductDetailComponent)
      }
      ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
