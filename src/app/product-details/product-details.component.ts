import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title: string = "E-Comm App!";
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
