import { Component, Input, inject, signal } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id?: string;
  private productService = inject(ProductsService);
  private cartService = inject(CartService);

  product = signal<Product>({id: 0, newId: 0, price: 0.0, title: '', description: '', category: '', image: ''});
  ngOnInit(){
    this.product.set(this.productService.getOne(parseInt(this.id!)));
    console.log(this.product());
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  };
}
