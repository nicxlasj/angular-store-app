import { Component, OnInit, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductsService } from '../../../shared/services/products.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductsService);
  products = this.productService.products;
  productsToCart = this.cartService.productsToCart;

  ngOnInit(): void {
    this.productService.getProducts();
    console.log(this.products());
  }
  addToCart(product: Product) {
    product.newId = Math.random() * 10;
    this.cartService.addToCart(product);
  }
}
