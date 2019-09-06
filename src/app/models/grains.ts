import { ClassMethod } from '@angular/compiler';
import { SalesDetails } from './sales-details';
import { PurchaseDetails } from './product-details';

export class Grains {
   grainName : string;
   purchaseDetails : PurchaseDetails;
   salesDetails : SalesDetails;
}