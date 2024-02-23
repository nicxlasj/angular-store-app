import { Component, inject } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
  private cartService = inject(CartService);
  productsCart = this.cartService.productsToCart;
  deleteProductToCart(newId?: number) {
    this.cartService.deleteProductToCart(newId);
  }
}
