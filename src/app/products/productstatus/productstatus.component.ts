import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-productstatus',
  templateUrl: './productstatus.component.html',
  styleUrls: ['./productstatus.component.css']
})
export class ProductstatusComponent implements OnInit {
  response: any;
  error: any;

  constructor(private fetch:ProductsService) { }

  ngOnInit(): void {
    this.fetch.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.response = res;
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
  }

}
