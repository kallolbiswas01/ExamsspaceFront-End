import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../assessment.service';

@Component({
  selector: 'app-viewassessment',
  templateUrl: './viewassessment.component.html',
  styleUrls: ['./viewassessment.component.scss']
})
export class ViewassessmentComponent implements OnInit {
  totalTime: any;
  timeSpent: any;
  totalQues: any;
  yourScore: any;
  passing: any;

  constructor( private assessmentService : AssessmentService) { }

  ngOnInit(): void {
    this.getAssessmentResult()
  }

  /******************************************
   * functionName:   getAssessmentResult(){ 
   * input: []
   * output: 
   * owner: Sushil Yadav
   * date:30/08/2021
   ********************************************/
   getAssessmentResult() {    
    this.assessmentService.getAssessmentResult().subscribe((data) => {
      console.log('Assessment', data);
      let res = <any>data;
      if (res.type === 'success') {
        this.passing = res.Passing;
        this.totalTime = res.totalTime;
        this.timeSpent = res.timeSpent;
        this.totalQues = res.totalQues;
        this.yourScore = res.yourScore;
       }
    });
  }
}
