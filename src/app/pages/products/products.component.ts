import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-products',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public dictionaries = {
    title: 'Produk Makanan paling viral buat kamu!',
    description:
      'Beli paket reseller di Kaldoo dan dapatkan paket konten gratis!',
    search: {
      placeholder: 'Cari makanan disini',
    },
  };
  public datas = [
    {
      id: 1,
      name: 'Paket Reseller Daging Sapi Segar',
      price: 49000,
      image_url: '/images/products/product_1.jpeg',
    },
    {
      id: 1,
      name: 'Paket Reseller Daging Sapi Segar',
      price: 49000,
      image_url: '/images/products/product_1.jpeg',
    },
  ];

  public search: WritableSignal<string> = signal('');

  public handleChangeSearch = () => {
    // this.search.set(e)
  };
}
