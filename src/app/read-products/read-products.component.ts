import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data-service';

@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.component.html',
  styleUrls: ['./read-products.component.css']
})
export class ReadProductsComponent implements OnInit {
  categories: any;
  products: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getCategories()
      .subscribe(
        data => {this.categories = data,
        error => console.log(error)
      }
      )

/*     this._dataService.getProducts()
      .subscribe(
          data => {this.products = data
            ,error => console.log(error)
          }
      ) */
  }

  onCategoryChange(newVal) {
    let categoryID = newVal;
    if (categoryID !== "") {
    this._dataService.getProductsByCategoryID(categoryID)
      .subscribe(
        data => {this.products = data,
        error => console.log(error)
        }
      )
    }
    else {
      this.products = undefined;
    }
  }  
}
