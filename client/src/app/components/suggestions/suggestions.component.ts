import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  items = [];
  isLoading = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.refreshData();

  }

  refreshData() {
    this.isLoading = true;
    this.apiService.sendGetRequest('/suggestions').pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Array<Item>>)=>{  
      
      this.items = res.body;
      
      this.isLoading = false;
    })
  }

  addToWishList(item) {
    this.apiService.addItemToWishlist(item)
    .subscribe(res => {
        // this.refreshData();          
      }, (err) => {
        console.log(err);
      });
  }
  

}
