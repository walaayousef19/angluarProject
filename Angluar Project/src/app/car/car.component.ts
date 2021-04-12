import { Component, OnInit } from '@angular/core';
import { CarService } from '../Services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  CarList:any;
  constructor(private carservise:CarService ) { }

  ngOnInit(): void {
  }
  renderValues( ){
    this.CarList= this.carservise.getAllCars();
   
  
   }
   renderValuesByname(name:string){
    this.CarList=[];
    var car= this.carservise.getCarByName(name);
    if(car!=null){
      this.CarList.push(car);
    } 

}
}
