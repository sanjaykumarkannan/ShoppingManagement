import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClientService } from '../service/http-client.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  products:Product[];
  
  constructor(private httpService:HttpClientService) { }

  ngOnInit() {
//     this.httpService.loginStatusObservable.subscribe((data)=>
//   {
//     console.log(data);
//   },
// (error)=>
// {
//   console.log("Error while logging in");
// })
    this.getAllFiles();
  }

  getAllFiles():void
  {
    this.httpService.getAllFiles().subscribe(
      (productData:Product[])=>
    {
      this.products=productData,
      console.log(this.products)
    },
    (error)=>{
      console.log(error)  
    } 
  )
  }

  viewCardInfo (product:Product)
  {
    console.log(product);
  }

  //Deleting a product
  deleteProduct(product:Product)
  {
    this.httpService.deleteProduct(product);
  }
}
