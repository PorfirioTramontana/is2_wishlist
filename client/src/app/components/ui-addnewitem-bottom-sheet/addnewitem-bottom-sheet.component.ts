import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { ApiService } from 'src/app/services/api.service';

import { items_categories } from '../../../environments/environment'; // CHECK ho to switch env



@Component({
    selector: 'addnewitem-bottom-sheet',
    templateUrl: 'addnewitem-bottom-sheet.component.html',
    styleUrls: ['addnewitem-bottom-sheet.component.css']
  })
  export class AddNewItemBottomSheet {

    addNewItemForm: FormGroup;
    isLoading = false;
    categories = [];

  itemFormGroup = {
    'title': [null, Validators.required],
    'description': [null, Validators.required],
    'image_url': [null, Validators.required],
    'category_id': [null],
    'shop_url': [null]
  };


  
    constructor(private apiService: ApiService, private formBuilder: FormBuilder, private _bottomSheetRef: MatBottomSheetRef<AddNewItemBottomSheet>) {
         
        this.addNewItemForm = this.formBuilder.group(this.itemFormGroup);
        this.categories = items_categories;
    }
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }

    dismiss(): void {
        this._bottomSheetRef.dismiss();
        
    }
    
    saveNewItem(item: any) {
        console.log(item);
        item['category_id'] = parseInt(item['category_id']);
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
  