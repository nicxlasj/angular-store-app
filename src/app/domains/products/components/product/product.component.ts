import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
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
