import { Component, OnInit } from '@angular/core';
import { GrainsStoreService } from 'src/app/services/grains-store.service';
import { Grains } from 'src/app/models/grains';
import { SalesDetails } from 'src/app/models/sales-details';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { PurchaseDetails } from 'src/app/models/product-details';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-grain-form',
  templateUrl: './grain-form.component.html',
  styleUrls: ['./grain-form.component.css']
})
export class GrainFormComponent implements OnInit {

  grains: Grains;

  myNumber: FormControl;
  constructor(private grainsStoreService: GrainsStoreService, private validationService: ValidationService) {
    this.grains = new Grains();
    this.grains.salesDetails = new SalesDetails();
    this.grains.purchaseDetails = new PurchaseDetails();
    this.myNumber = new FormControl('defaultValue', [Validators.required, this.validationService.isInteger]);
  }

  ngOnInit() {
  }


  onSubmit(userForm: NgForm) {
    this.grainsStoreService.saveGrains(this.grains).subscribe(
      data => {
        alert('Grain added succesfully');

        userForm.reset()
      },
      error => {
        alert('Failed to add grains details.');
      }
    );
  }
}
