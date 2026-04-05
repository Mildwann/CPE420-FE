import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsPage implements OnInit {
  products = signal<Product[]>([]);

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    // สินค้าตัวอย่าง - สามารถแทนที่ด้วยการเรียก API
    this.products.set([
      {
        id: 1,
        name: 'ผลิตภัณฑ์ 1',
        price: 299,
        image: '/assets/images/product1.jpg',
        description: 'คำอธิบายสินค้า 1'
      },
      {
        id: 2,
        name: 'ผลิตภัณฑ์ 2',
        price: 399,
        image: '/assets/images/product2.jpg',
        description: 'คำอธิบายสินค้า 2'
      },
      {
        id: 3,
        name: 'ผลิตภัณฑ์ 3',
        price: 499,
        image: '/assets/images/product3.jpg',
        description: 'คำอธิบายสินค้า 3'
      },
      {
        id: 4,
        name: 'ผลิตภัณฑ์ 4',
        price: 599,
        image: '/assets/images/product4.jpg',
        description: 'คำอธิบายสินค้า 4'
      }
    ]);
  }

  goToInquiry() {
    this.router.navigate(['/inquiry']);
  }
}

