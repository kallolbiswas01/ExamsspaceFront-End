import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, OnChanges {
  @Input() data:any;
  constructor() { }

  ngOnChanges(changes:any){
  }

  ngOnInit(): void {
  }

}
