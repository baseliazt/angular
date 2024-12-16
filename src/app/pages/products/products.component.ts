import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public datas = [
    {
      id: 1,
      name: 'Paket Reseller Daging Sapi Segar',
      price: 49000,
      image_url: '/images/products/product_1.jpeg',
    },
  ];
}
