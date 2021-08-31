import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olympiad',
  templateUrl: './olympiad.component.html',
  styleUrls: ['./olympiad.component.scss']
})
export class OlympiadComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }
  public olypiaddata = [
    {
      "heading":"ANNUAL OLYMPIAD EXAMS", 
      "imgPath":"/assets/img/subjective1.png",
     "subjects":["Hindi", "English","Math"],
    
  },
  {
    "heading":"MONTHLY OLYMPIAD", 
    "imgPath":"assets/img/subjective2.png",
   "subjects":["Topic Wise Questions", "Unlimited Practice","Monthly Assesment"],
  
}, {
  "heading":"VIDEO LEARNING CLASSES", 
  "imgPath":"/assets/img/subjective3.png",
 "subjects":["Video Classes for 6th to 10th class", "More than 600 Videos Explaining concepts with graphical illustrations"],

}
  ];

}
