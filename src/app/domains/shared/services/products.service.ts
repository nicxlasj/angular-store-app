import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  private httpClient = inject(HttpClient);
  private url : string = 'https://fakestoreapi.com/products';
  products = signal<Product[]>([]);
  getProducts() {
    this.httpClient.get<Product[]>(this.url).subscribe((product)=> {
      this.products.set(product);
    });
  }
}
