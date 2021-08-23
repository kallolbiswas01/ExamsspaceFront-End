import { Component, OnInit } from '@angular/core';
import { AssessmentService } from './assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  quizs: any;
  quiz:any ;
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
        this.quiz = this.quizs[0];
        //this.router.navigateByUrl('dashboard');
      }
    });
  }


  previous() {
    const currentIndex = this.quizs.indexOf(this.quiz);
    const newIndex = currentIndex === 0 ? this.quizs.length - 1 : currentIndex - 1;
    this.quiz = this.quizs[newIndex];
};

next() {
    const currentIndex = this.quizs.indexOf(this.quiz);
    const newIndex = currentIndex === this.quizs.length - 1 ? 0 : currentIndex + 1;
    this.quiz = this.quizs[newIndex];
};

}
