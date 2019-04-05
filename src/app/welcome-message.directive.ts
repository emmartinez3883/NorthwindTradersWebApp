import { Directive, ElementRef } from '@angular/core';
import { DataService } from './data-service/data-service';

@Directive({
  selector: '[appWelcomeMessage]'
})
export class WelcomeMessageDirective {
  productCount: any;

  constructor(el: ElementRef, private _dataService: DataService) {
   
    this._dataService.getProductCount()
      .subscribe(
        data => {
          this.productCount = data;
          el.nativeElement.innerHTML = `Welcome to Northwind Traders! We have ${this.productCount} products for sale.`;
        },
        error => {
          console.log(error);
        }
          );
   }

}
