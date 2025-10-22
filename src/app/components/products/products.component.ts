import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    // TODO: Inject required services
  ) { }

  ngOnInit(): void {
    // TODO: Get products from service
  }

  viewProduct(id: number): void {
    // TODO: Navigate to product detail
  }
}
