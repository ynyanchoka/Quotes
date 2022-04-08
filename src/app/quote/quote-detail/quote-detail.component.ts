import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input () quote!:Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();
  Delete(yesDelete: boolean) { 
    this.deleteQuote.emit(yesDelete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

