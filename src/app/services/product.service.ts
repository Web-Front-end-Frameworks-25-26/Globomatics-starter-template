// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Laptop Pro X1',
      price: 1299.99,
      description: 'High-performance laptop with 16GB RAM and 512GB SSD',
      imageUrl: '/assets/laptop.jpg',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 49.99,
      description: 'Ergonomic wireless mouse with precision tracking',
      imageUrl: '/assets/mouse.jpg',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'USB-C Hub',
      price: 79.99,
      description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
      imageUrl: '/assets/hub.jpg',
      category: 'Accessories'
    },
    {
      id: 4,
      name: '4K Monitor',
      price: 599.99,
      description: '27-inch 4K IPS monitor with HDR support',
      imageUrl: '/assets/monitor.jpg',
      category: 'Electronics'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      price: 149.99,
      description: 'RGB mechanical keyboard with Cherry MX switches',
      imageUrl: '/assets/keyboard.jpg',
      category: 'Accessories'
    }
  ];

  constructor() { }

  //getProducts(): Observable<Product[]> {
    // TODO: Return products as Observable
  //}

  //getProduct(id: number): Observable<Product | undefined> {
    // TODO: Find product by id and return as Observable
  //}
}
