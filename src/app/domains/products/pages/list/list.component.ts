import { Component, OnInit, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/header/header.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);
  productsToCart = signal<Product[]>([]);
  ngOnInit(): void {
    this.getProducts();
  }
  addToCart(product: Product) {
    this.productsToCart.update(prevState => {
      const products = [...prevState, product];
      return products;
    })
  }

  async getProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    const products  = await response.json();
    this.products.set(products);
  }
}
