import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
  //@Input() productsCart!: Product[];
  //@Output() deleteProduct = new EventEmitter<Product[]>();
  private cartService = inject(CartService);
  productsCart = this.cartService.productsToCart; 
  deleteProductToCart(newId?: number) {
    this.cartService.deleteProductToCart(newId);
  }
}
