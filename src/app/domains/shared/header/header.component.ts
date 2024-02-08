import { Component, Input, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
