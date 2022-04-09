import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Welcome to quotzilla';

  quotes:Quote[] = [
    new Quote (1,'Francis','Purpose of life', 'The purpose of our lives is to be happy.','Dalai Lama',new Date(2022, 1, 5),0,0),
    new Quote (1,'Ross ','Life happens', 'Life is what happens when you are busy making other plans.','John Lenon',new Date(2022, 3, 6),0,0),
    new Quote (1,'Danny','Live wisely', 'Get busy living or get busy dying.','Stephen King',new Date(2021, 2, 1),0,0),
    new Quote (1,'Lilian','Live right', 'You only live once, but if you do it right, once is enough.','Mae West',new Date(2022, 4, 5),0,0),
    new Quote (1,'Sancho','Live your life', 'Your time is limited, so do not waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.','Steve Jobs',new Date(2022, 2, 5),0,0),
    new Quote (1,'Gertrude','Judge not', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 3, 2),0,0),
    
  ];
  get appquotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  } 

  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  quoteDelete(isDelete:any, index:number){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  
  // show details
  isShowMore = true
  showDetails (index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    this. isShowMore = !this. isShowMore
  }


  highlightHighest() {
    /* function for getting quote with highest vote*/
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quotes.length; j++) {
      quotesUpvote.push(this.quotes[j].upVotes)
    }

    quotesUpvote.sort(function (a, b) {
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
