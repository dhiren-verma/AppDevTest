import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

  @Input()
  product!: Product;

  @Input()
  isUnchanged!: boolean;

  @Output()
  notify = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  // checkAvailability() {
  //   window.alert(this.product.name+" Course videos are available in your location to purchase");
  // }

  availButtonClicked() {
    this.notify.emit(this.product);
  }

}
