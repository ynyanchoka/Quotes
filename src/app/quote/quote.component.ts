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
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    
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
  showDetails (index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  // toggleText(index:any) {
  //   /* function for toggling quote small text */
  //   this.quotes[index].showMore = !this.quotes[index].showMore;
  //   if (this.quotes[index].showMore)
  //     this.quotes[index].smallText = 'see less';
  //   else
  //     this.quotes[index].smallText = 'see more';
  // }
 
  constructor() { }

  ngOnInit(): void {
  }

}
