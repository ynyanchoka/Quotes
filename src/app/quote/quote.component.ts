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
  constructor() { }

  ngOnInit(): void {
  }

}
