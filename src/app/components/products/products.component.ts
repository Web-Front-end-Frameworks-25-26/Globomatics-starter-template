import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  private productService = inject(ProductService);
  // TODO: Inject Router services

  constructor(
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  viewProduct(id: number): void {
    // TODO: Navigate to product detail
  }
}
