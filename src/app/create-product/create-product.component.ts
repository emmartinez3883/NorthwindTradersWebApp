import { Component, OnInit } from '@angular/core';
import { Product } from '../view-models/product';
import { DataService } from '../data-service/data-service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories: any;
  product: Product;
  productSaved: any;

  constructor(private _dataService: DataService) {
    this.product = {
      ProductID: null,
      ProductName: null,
      UnitPrice: null,
      CategoryID: 0
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

  createProduct()
  {
    // add post call to data service
    this._dataService.createProduct(this.product)
      .subscribe(       
          data => {this.productSaved = data,
          error => console.log(error)
        }
      )
  }
}
