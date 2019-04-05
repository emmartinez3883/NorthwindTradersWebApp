import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';
import { Product } from '../view-models/product';
//import { Observable } from 'rxjs';
//import 'rxjs/Rx';
//import { map} from 'rxjs/operators';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { 

  }

//  getProductCount(): Observable<any> {
  getProductCount() {
    //make a rest api call
    return this._http.get('http://localhost:50078/Product/GetProductCount')
//      .pipe(map((resp: Response) => resp.json()
//      .catch(error => Observable.throw(error.json))));
  }

  getProducts() {
    return this._http.get('http://localhost:50078/Product/GetProducts')
  }

  getCategories() {
    return this._http.get('http://localhost:50078/Category/GetCategories')
  }

  getProductsByCategoryID(categoryID: number) {
    return this._http.get(`http://localhost:50078/Product/GetProductsByCategoryID/${categoryID}`)
  }

  getProductByProductID(productID: number) {
    return this._http.get(`http://localhost:50078/Product/GetProductByProductID/${productID}`)
  }

  createProduct(product: Product) {
    return this._http.post('http://localhost:50078/Product/CreateProduct', product)
  }

  updateProduct(product: Product) {
    return this._http.post('http://localhost:50078/Product/UpdateProduct', product)
  }
}
