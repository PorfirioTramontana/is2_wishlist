import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

import { ConfirmDialogModel, ConfirmDialogComponent } from '../ui-confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { isNumber } from 'util';
import { Item } from 'src/app/models/item';
import { element } from 'protractor';




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
      value: 'Clothes'
    }
  ];
  
  

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog) { 
   
    this.editingItemIndex = -1;
  }


  get wishlistItems() {
    return this.productForm.get('wishlist_items') as FormArray;
  }

  addItem() {
    this.wishlistItems.push(this.formBuilder.group(this.itemFormGroup));
  }

  saveOrUpdateItem(item: Item) {
    this.isLoading = true;
    if (item.id && item.id > 0) {
      this.apiService.editItemInWishlist(item)
      .subscribe(res => {
          this.isLoading = false;
          this.refreshData();
        }, (err) => {
          console.log(err);
          this.isLoading = false;
        });
    }
    else {
      this.apiService.addItemToWishlist(item)
      .subscribe(res => {
        this.isLoading = false;
          this.refreshData();          
        }, (err) => {
          console.log(err);
          this.isLoading = false;
        });
    }
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

    this.refreshData();
    
  }

  refreshData() {
    this.isLoading = true;
    this.apiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Array<Item>>)=>{  
      
      this.items = res.body;
      
      while (this.wishlistItems.length !== 0) {
        this.wishlistItems.removeAt(0)
      }
      this.items.forEach(element => {
        this.wishlistItems.push(this.formBuilder.group(element));
      });
      this.addItem();
      this.editingItemIndex = this.wishlistItems.length - 1;
      // console.log(res.body);  
      this.displayedItems = res.body;
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
    this.editingItemIndex = this.wishlistItems.length - 1;
  }
  
  deleteItem(item: Item): void {
    const message = 'Are you sure you want to delete the '+ item.title +' from your wishlist ?';

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.isLoading = true;
      // FIXME (add check on result, otherwise I'll delete in each case :)
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
  }

  

  
}
