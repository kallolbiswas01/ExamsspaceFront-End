import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  public quizs = [
    { "question" : "How many letters are there in 'JS' ?"},
    {"options" : ['1', '2', '3', '4']},
    { "question" : "How many letters are there in 'BMX'?"},
    {"options" : ['1', '2', '3', '4']},
    { "question" : "How many letters are there in 'A' ?"},
    {"options" : ['1', '2', '3', '4']}
   
  ];


  constructor() { }

  ngOnInit(): void {
    console.log(this.quizs);
  }

}
