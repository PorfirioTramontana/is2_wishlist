import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject, GroupedObservable } from 'rxjs';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

import { ConfirmDialogModel, ConfirmDialogComponent } from '../ui-confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { isNumber } from 'util';
import { Item } from 'src/app/models/item';
import { element } from 'protractor';
import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AddNewItemBottomSheet } from '../ui-addnewitem-bottom-sheet/addnewitem-bottom-sheet.component';



function dynamicSort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productForm: FormGroup;
  isLoading = false;
  items = [];
  displayedItems = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  editingItemIndex: Number;
  _addnewitemBottomSheetRef: MatBottomSheetRef;

  searchAndSortForm: FormGroup;

  searchBar: FormControl;
  sortBy: FormControl;
  previousSortCriteria: string;
  sortAscending = true;

  previousWishListItems: FormArray;

  
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
  
 
  constructor(
    private apiService: ApiService, 
    private formBuilder: FormBuilder, 
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
    ) { 
   
    this.editingItemIndex = -1;
    this.searchBar = new FormControl('');
    this.sortBy = new FormControl('add_date');
    this.previousSortCriteria = this.sortBy.value;
  }


  get wishlistItems() {
    return this.productForm.get('wishlist_items') as FormArray;
  }

  addItem() {
    this.wishlistItems.push(this.formBuilder.group(this.itemFormGroup));
  }

  updateItem(item: Item) {
    this.isLoading = true;
    this.apiService.editItemInWishlist(item)
    .subscribe(res => {
        this.isLoading = false;
        this.refreshData();
      }, (err) => {
        console.log(err);
        this.isLoading = false;
      });  
  }

  
  deleteSellingPoint(index) {
    this.wishlistItems.removeAt(index);
  }

  ngOnInit() {

    this.productForm = this.formBuilder.group({
      title: 'WISHLIST',
      wishlist_items: this.formBuilder.array(this.items)
      // wishlist_items: this.formBuilder.array([this.formBuilder.group(this.itemFormGroup)])
    })

    this.searchAndSortForm = this.formBuilder.group({ 
      searchBar: [null],
      sortBy: [null] 
    });

    this.previousWishListItems = this.formBuilder.array([]);

    this.onSearchBarValueChanges();
    this.onSortByValueChanges();
    this.refreshData();
    
  }

  onSearchBarValueChanges(): void {
    this.searchBar.valueChanges.subscribe(val => {
      this.filterItems(val);
    });
  }

  onSortByValueChanges(): void {
    this.sortBy.valueChanges.subscribe(val => {
      
      this.sortItemsBy(val);
            
    });
  }

  onSortByClick() {
    
    this.sortAscending = !this.sortAscending;
    this.sortItemsBy(this.sortBy.value);
    
  }

  refreshData() {
    this.isLoading = true;
    this.apiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Array<Item>>)=>{  
      
      this.fillFormArrayWithArray(this.wishlistItems, res.body);
      //this.editingItemIndex = this.wishlistItems.length - 1;

      this.fillFormArrayWithArray(this.previousWishListItems, res.body);
      
      this.isLoading = false;
    })
  }


  getCategoryValueById(category_id) {
    if( !isNumber(category_id)) return '';
    let category = this.categories.filter(function (el) { return (el.id === category_id )});
    return category[0].value;
  }

  switchToEdit(index: Number) {

    this.editingItemIndex = index;
    
  }

  cancelEdit() {
    this.editingItemIndex = - 1;
  }
  
  deleteItem(item: Item): void {
    const message = 'Are you sure you want to delete the '+ item.title +' from your wishlist ?';

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == false) return;
      this.isLoading = true;
      this.apiService.deleteItemById(item.id)
        .subscribe(res => {
            //let id = res['id'];
            this.isLoading = false;
            this.refreshData();
            //this.router.navigate(['/user-details', id]);
          }, (err) => {
            console.log(err);
            this.isLoading = false;
          });         
    });
    
    let _wishlistItemsArr = _displayedItemes.filter(item => {
      return (
        item.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1 ||
        item.description.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1 
      );
    });
    this.fillFormArrayWithArray(this.wishlistItems, _wishlistItemsArr);  
    this.editingItemIndex = this.wishlistItems.length - 1;

  }

  fillFormArrayWithArray(formArray: FormArray, array: any[]): FormArray {
    formArray.clear();
    
    for (let i=0;i<array.length;i++) {
      formArray.push(this.formBuilder.group(array[i]));
    }
    // formArray.push(this.formBuilder.group(this.itemFormGroup));
    return formArray;
  }

  

  filterItems(val: string) {

    let _displayedItemes = [];
    this.previousWishListItems.value.forEach(element => {
      if(element.id && element.id > 0) _displayedItemes.push(element);
    });
    
    let _wishlistItemsArr = _displayedItemes.filter(item => {
      return (
        item.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1 ||
        item.description.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1 
      );
    });
    this.fillFormArrayWithArray(this.wishlistItems, _wishlistItemsArr);  
    // this.editingItemIndex = this.wishlistItems.length - 1;

  }

  sortItemsBy(val: string) {
    
    let _displayedItemes = [];
    this.wishlistItems.value.forEach(element => {
      if(element.id && element.id > 0) _displayedItemes.push(element);
    });
    if (val == 'name') {
      _displayedItemes = _displayedItemes.sort(dynamicSort("title"));
    }
    else {
      //console.log(typeof this.displayedItems);
      _displayedItemes = _displayedItemes.sort(function(a, b){
        let keyA = new Date(a.add_date),
            keyB = new Date(b.add_date);
        // Compare the 2 dates
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
      });
    }
    if(!this.sortAscending) _displayedItemes = _displayedItemes.reverse();
    
    this.fillFormArrayWithArray(this.wishlistItems, _displayedItemes);
    this.previousSortCriteria = val;
  }
  
  openBottomSheet(): void {

    this._addnewitemBottomSheetRef = this._bottomSheet.open(AddNewItemBottomSheet, {
      ariaLabel: 'Share on social media'
    });

    this._addnewitemBottomSheetRef.afterDismissed().subscribe(() => {
      
      this.refreshData();
  
    });

  }

  

  
}
