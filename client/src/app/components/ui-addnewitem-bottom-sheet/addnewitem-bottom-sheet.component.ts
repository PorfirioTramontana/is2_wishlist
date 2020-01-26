import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { ApiService } from 'src/app/services/api.service';


@Component({
    selector: 'addnewitem-bottom-sheet',
    templateUrl: 'addnewitem-bottom-sheet.component.html',
    styleUrls: ['addnewitem-bottom-sheet.component.css']
  })
  export class AddNewItemBottomSheet {

    addNewItemForm: FormGroup;
    isLoading = false;

  itemFormGroup = {
    'title': [null, Validators.required],
    'description': [null, Validators.required],
    'image_url': [null, Validators.required],
    'category_id': [null],
    'shop_url': [null]
  };


  categories = [
    {
      id: 1,
      value: 'Electronics'
    },
    {
      id: 2,
      value: 'Clothing'
    },
    {
      id: 3,
      value: 'Shoes'
    },
    {
      id: 4,
      value: 'Books, movies, music and games'
    },
    {
      id: 5,
      value: 'Cosmetic & body Care'
    },
    {
      id: 6,
      value: 'Bags & accessories'
    },
    {
      id: 7,
      value: 'Food & drinks'
    },
    {
      id: 8,
      value: 'Household appliances'
    },
    {
      id: 9,
      value: 'Furniture & household goods'
    },
    {
      id: 10,
      value: 'Sports & outdoor'
    },{
      id: 11,
      value: 'Toys & baby products'
    },
    {
      id: 12,
      value: 'Hobby supplies'
    },{
      id: 13,
      value: 'Bricolage, DIY & gardening'
    },
    {
      id: 14,
      value: 'Pets'
    }
  ];
    
  
    constructor(private apiService: ApiService, private formBuilder: FormBuilder, private _bottomSheetRef: MatBottomSheetRef<AddNewItemBottomSheet>) {
         
        this.addNewItemForm = this.formBuilder.group(this.itemFormGroup);
    }
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }

    dismiss(): void {
        this._bottomSheetRef.dismiss();
        
    }
    
    saveNewItem(item: Item) {
        console.log(item);

        this.isLoading = true;
          this.apiService.addItemToWishlist(item)
          .subscribe(res => {
            this.isLoading = false;
            this.dismiss();
              // this.refreshData();          
            }, (err) => {
              console.log(err);
              this.isLoading = false;
            });
    }
     
}
  