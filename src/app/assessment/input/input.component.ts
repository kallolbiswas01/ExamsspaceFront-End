import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() data:any;
  constructor() { }

  ngOnChanges(changes:any){
  }

  ngOnInit(): void {
  }

}

