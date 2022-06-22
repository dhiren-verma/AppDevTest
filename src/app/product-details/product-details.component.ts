import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title: string = "E-Comm App!";
  products : Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

  checkAvailability(product: Product) {
    window.alert(product.name+" Course videos are available in your location to purchase");
  }

}
