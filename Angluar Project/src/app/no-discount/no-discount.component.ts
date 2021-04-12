import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-discount',
  templateUrl: './no-discount.component.html',
  styleUrls: ['./no-discount.component.scss']
})
export class NoDiscountComponent implements OnInit {
  ProductWithoutDiscount:any;
  constructor() {
  this.ProductWithoutDiscount=[
    {ID:3,Name:"Product 3",Quantity:5,Price:200,image:"../assets/1.jpg"},
]
   }

  ngOnInit(): void {
  }

}
