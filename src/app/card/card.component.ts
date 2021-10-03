import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input('item1') item1:any;
@Input('item2') item2:any;

  constructor() { }

  ngOnInit(): void {
  }

}




