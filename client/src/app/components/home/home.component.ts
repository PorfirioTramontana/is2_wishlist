import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ConfirmDialogModel, ConfirmDialogComponent } from '../ui-confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  items = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoading: boolean;
  itemForm: FormGroup;
  
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
    this.isLoading = false;
  }

  public firstPage() {
    this.items = [];
    this.apiService.sendGetRequestToUrl(this.apiService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.items = res.body;
    })
  }
  public previousPage() {

    if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
      this.items = [];
      this.apiService.sendGetRequestToUrl(this.apiService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.items = res.body;
      })
    }

  }
  public nextPage() {
    if (this.apiService.next !== undefined && this.apiService.next !== '') {
      this.items = [];
      this.apiService.sendGetRequestToUrl(this.apiService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.items = res.body;
      })
    }
  }
  public lastPage() {
    this.items = [];
    this.apiService.sendGetRequestToUrl(this.apiService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.items = res.body;
    })
  }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'image_url': [null, Validators.required],
      'category_id': [null],
      'shop_url': [null]
    });

    this.refreshData();
      
  }

  refreshData() {
    this.isLoading = true;
    this.apiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{  
      this.items = res.body;  
      this.isLoading = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  onFormSubmit(form:NgForm) {
    this.isLoading = true;
    this.apiService.addItemToWishlist(form)
      .subscribe(res => {
          //let id = res['id'];
          this.isLoading = false;
          this.refreshData();
          //this.router.navigate(['/user-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoading = false;
        });
  }

  confirmDialog(itemId: number): void {
    const message = `Are you sure you want to delete this item ?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == false) return;
      this.isLoading = true;
      this.apiService.deleteItemById(itemId)
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
