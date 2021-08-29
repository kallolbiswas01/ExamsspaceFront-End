import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit , OnChanges {
  @Input() data:any;
  constructor() { }

  ngOnChanges(changes:any){
  }

  ngOnInit(): void {
  }

}
