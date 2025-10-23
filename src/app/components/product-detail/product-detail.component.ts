import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  // TODO: Inject required services

  constructor(
  ) { }

  ngOnInit(): void {
    // TODO: Get route params and fetch product
  }

  goBack(): void {
    // TODO: Navigate back to products
  }
}
