import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    new Quote (1,'MD Douglas','Judge', 'Do not judge each day by the harvest you reap but by the seeds you plant.','Robert Louis',new Date(2022, 2, 5),0,0),
    
  ];
// show details
  displayInfo(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  quoteDelete(isDelete:any, index:number){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
