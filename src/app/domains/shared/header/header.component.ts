import { Component, Input, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCartComponent } from '../../products/components/product-cart/product-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showCart = signal(false);
  @Input() cartProducts : Product[] = []; 

  showCartHandler() {
    this.showCart.update(x => !x);
  }

}
