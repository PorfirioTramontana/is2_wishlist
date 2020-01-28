import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './ui-error.component.html',
  styleUrls: ['./ui-error.component.scss']
})
export class UiErrorComponent implements OnInit {

  @Input() message: string;
  @Input() action = 'GOT IT';

  constructor() { }

  ngOnInit() {
  }

}
