import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() cartCounter = new EventEmitter<Product>();

  addToCartHandler() {
    this.cartCounter.emit(this.product);
  }
}
