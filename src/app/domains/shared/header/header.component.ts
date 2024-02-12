import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCartComponent } from '../../products/components/product-cart/product-cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showCart = signal(false);
  //@Input() cartProducts: Product[] = [];
  private cartService = inject(CartService);
  cartProducts = this.cartService.productsToCart;  

  showCartHandler() {
    this.showCart.update((x) => !x);
  }
}
