import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img : String = '';
  @Output() addToCart = new EventEmitter<string>();

  addToCartHandler() {
    console.log('from child')
    this.addToCart.emit('Message from father');
  }
}
