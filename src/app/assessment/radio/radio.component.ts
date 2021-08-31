import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Question } from '../question';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, OnChanges {
  @Input() quiz:Question;
  question : string;
  constructor() { }  

  ngOnChanges(changes:any){
  }

  ngOnInit(): void {
  }

  onItemChange(item:Question){    
    let userAnswer = {questionId: item._id, answer: this.question};
  }
}
