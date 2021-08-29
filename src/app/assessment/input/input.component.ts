import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() data:any;
  constructor() { }

  ngOnChanges(changes:any){
  }

  ngOnInit(): void {
  }

}

