import { Component, OnInit, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);
  ngOnInit(): void {
    this.getProducts();
  }
  addToCart(message: string) {
    alert(message);
  }

  async getProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    const products  = await response.json();
    this.products.set(products);
  }
}
