import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 cars:any;
  constructor() {
    this.cars=[{ID:1,Name:'Kia',Price:10000,color:'red'},
    {ID:2,Name:'Handia',Price:150000,color:'black'},
    {ID:3,Name:'BMW',Price:200000,color:'yellow'}]
   }
   getAllCars(){
    return this.cars;
  }
  getCarByName(name:any){
    for(var i=0;i<this.cars.length;i++){
      if(name==this.cars[i].Name)
        return this.cars[i];
      else 
      return 'not found';
       
    
    }
}
}

