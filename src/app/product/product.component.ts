import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title:string = "Ürün Listesi"
  products :any = [
    {id:1,name:"laptop",price:5000,categoryId:1,description:"asus"},
    {id:2,name:"maouse",price:500,categoryId:2,description:"A4 tech"}
  ]
  ngOnInit(): void {
  }

}
