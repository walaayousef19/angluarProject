import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angluarProject';
  dataFromChild:any='';
  @ViewChild(ProductsComponent) productsComponent:ProductsComponent;
renderval()  
  {
    this.productsComponent.ProductList;
    
  }
  /*
  rendervalById(id:string)  
  { 
    this.productsComponent.renderValuesById(id);
  }

  @ViewChild(CarComponent) carsComponent:CarComponent;
  rendercars()  
    {
      this.carsComponent.renderValues();
      
    }
    rendercarsByName(name:string)  
    { 
      this.carsComponent.renderValuesByname(name);
    }*/
}
