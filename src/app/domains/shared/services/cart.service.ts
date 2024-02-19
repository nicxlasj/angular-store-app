import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsToCart = signal<Product[]>([]);
  totalPrice = computed(() => {
    const cart = this.productsToCart();
    let total = cart.reduce((prev, curr)=> prev + curr.price, 0);
    return total;
  });

  addToCart(product: Product) {
    this.productsToCart.update((prevState) => {
      console.log(prevState);
      const products = [...prevState, product];
      console.log(this.productsToCart().length);
      return products;
    });
  }
  constructor() {}
  deleteProductToCart(newId?: number) {
    this.productsToCart.set(
      this.productsToCart().filter((x) => x.newId !== newId)
    );
  }
}
