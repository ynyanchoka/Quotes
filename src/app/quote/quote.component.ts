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
  constructor() { }

  ngOnInit(): void {
  }

}
