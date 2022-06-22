import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

  @Input()
  product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  checkAvailability() {
    window.alert(this.product.name+" Course videos are available in your location to purchase");
  }

}
