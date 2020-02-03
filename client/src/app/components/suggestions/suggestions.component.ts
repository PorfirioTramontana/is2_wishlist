import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { Subject } from 'rxjs';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  items = [];
  isLoadingSuggestions = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  

  constructor(private apiService: ApiService, private messageService: MessageService) { }

  ngOnInit() {

    this.refreshData();

  }

  refreshData() {
    this.isLoadingSuggestions = true;
    this.apiService.sendGetRequest('/suggestions').pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Array<Item>>)=>{  
      
      this.items = res.body;
      
      this.isLoadingSuggestions = false;
    })
  }

  addToWishList(item) {
    this.apiService.addItemToWishlist(item)
    .subscribe(res => {
        this.messageService.sendMessage('item_added');  // notify homecomponent via messageservice       
      }, (err) => {
        console.log(err);
      });
  }


  clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
  }
  

}
