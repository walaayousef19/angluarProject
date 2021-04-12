
import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

import { DiscountOffers } from '../Shared class/discount-offers';
import { ICategory } from '../Shared class/icategory';
import { IProduct } from '../Shared class/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  name:string;
  logo:string;
  ProductList:IProduct[]=[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  id:number;
  errorMsg: any;

  constructor(private productservise:ProductService ,private activeRoute:ActivatedRoute ,private router:Router) {
    
    this.Discount=DiscountOffers['No Discount'];
    this.name="Store1";
    this.logo="../assets/3.jpg";
  this.CategoryList=[{ID:1,Name:'Cat1'},{ID:2,Name:'Cat2'}];
    this.ClientName="";
    this.IsPurshased=true;
  
   }
   displaydiv(){
    this.IsPurshased=false;
   }
   /*
 renderValues( ){
  this.ProductList= this.productservise.getAllProduct();
  console.log(this.productservise.getAllProduct());
 

 }
 renderValuesById(id:string){
  this.ProductList=[];
  var prod= this.productservise.getProductById(id);
  if(prod!=null){
    this.ProductList.push(prod);
  } 

 }*/

  ngOnInit(): void {
  
    this.productservise.getAllProduct().subscribe(
      productData=>
      {
        this.ProductList=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )}
    ProductWithDiscount(){
      this.router.navigate(['Discount'],{relativeTo:this.activeRoute});
    }
    ProductWithoutDiscount(){
      this.router.navigate(['NoDiscount'],{relativeTo:this.activeRoute});

    }
}
