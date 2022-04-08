import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote ( 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis', 'MD Douglas',new Date(2022, 2, 5),0,0),
    new Quote ( 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis', 'MD Douglas',new Date(2022, 2, 5),0,0),
    new Quote ( 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis', 'MD Douglas',new Date(2022, 2, 5),0,0),
    new Quote ( 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis', 'MD Douglas',new Date(2022, 2, 5),0,0),
  ];
// show quote details
  toggleDetails(index:number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  toggleText(index:any) {
    this.quotes[index].showMore = !this.quotes[index].showMore;
    if (this.quotes[index].showMore)
      this.quotes[index].smallText = 'See less';
    else
      this.quotes[index].smallText = 'See more';
  }
  quoteDeleted(deleteQuote:any, index:any) {
    if (deleteQuote) {
      let deleteQuote = confirm(`Are you sure you want to delete this quote?`)
      if (deleteQuote) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highlightHighest() {
    let quotesUpvote = []
    let highestUpVote: number
    for (let i = 0; i < this.quotes.length; i++) {
      quotesUpvote.push(this.quotes[i].upVote)
    }

    quotesUpvote.sort(function (a, b) {
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any > new Date(b.submissionDate) - < any > new Date(a.submissionDate);
    });
  }

  addNewQuote(quote: Quote) {
    this.quotes.unshift(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
