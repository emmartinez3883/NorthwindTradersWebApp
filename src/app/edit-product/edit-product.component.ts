import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data-service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  categories: any;
  productID: string;
  product: any;
  productUpdated: any;

  constructor(private _dataService: DataService) {
    this.product = {
      ProductID: null,
      ProductName: null,
      UnitPrice: null,
      CategoryID: null
    };
   }

  ngOnInit() {
    this._dataService.getCategories()
      .subscribe(
        data => {this.categories = data,
        error => console.log(error)
        }
      )
  }

  onSearchClick() {
    this._dataService.getProductByProductID(+this.productID)
    .subscribe(
      data => { 
        if(data){
          this.product = data;
        }
        else {
          this.product.ProductID = null;
        }
      error => console.log(error)
      }
    )
  }

  updateProduct()
  {
    this._dataService.updateProduct(this.product)
      .subscribe(       
          data => {this.productUpdated = data,
          error => console.log(error)
        }
      )
  }
}
