import { Component, OnInit } from '@angular/core';
import { AssessmentService } from './assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  quizs: any;
  constructor(private assessmentService: AssessmentService) { }
  ngOnInit(): void {
    this.getAssessment()

  }
  public getAssessment() {
    this.assessmentService.getAssessment().subscribe((data) => {
      console.log('Assessment', data)
      let res = <any>data;
      if(res.type === "success"){
        this.quizs = res.data;
        //this.router.navigateByUrl('dashboard');
      }
    });
  }
}
