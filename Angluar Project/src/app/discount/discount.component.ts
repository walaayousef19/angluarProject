import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
ProductWithDiscount:any;
  constructor() {
  this.ProductWithDiscount=[{ID:1,Name:"flower",Quantity:2,Price:100,Discount:"20%",image:"../assets/1.jpg"},
    {ID:2,Name:"cat",Quantity:1,Price:150,Discount:"10%",image:"../assets/3.jpg"},
]
   }

  ngOnInit(): void {
  }

}
