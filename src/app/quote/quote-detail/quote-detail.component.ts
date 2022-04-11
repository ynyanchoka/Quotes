
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';



@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

@Input () quote!:Quote;
@Output () isDelete = new EventEmitter <boolean> ();

deleteQuote(deletes:boolean){
  this.isDelete.emit(deletes);
}
upvote(){
  this.quote.upVotes+=1;
}
downvote(){
  this.quote.downVotes+=1;
}


  constructor() { }

  ngOnInit(): void {
  }

}

