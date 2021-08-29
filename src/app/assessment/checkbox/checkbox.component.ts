import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, OnChanges {
  @Input() data:any;
  constructor() { }

  ngOnChanges(changes:any){
  }

  ngOnInit(): void {
  }

}
