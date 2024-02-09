import { Component, Input, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input() productCart! : Product;
  product = signal<Product>({category: 'clothes', id: 1, description: 'MacBook air 13"', image: 'https://cdn.arstechnica.net/wp-content/uploads/2015/03/DSC00306.jpg', price: 1000, title: 'MacBook air'});
}
