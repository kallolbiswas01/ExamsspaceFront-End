import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService extends CommonService {
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  public getAssessmenturl = "api/assessment/question/list";
  public submitAssesmentUrl = "api/assessment/question/submit";
  public getAssessmentResultUrl = "api/assessment/result/list";
   /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public getAssessment(){
    return this.http.get(`${this.getAppBaseUrl()}${this.getAssessmenturl}`,this.getConfig())
  }

  public submitAssessment(reqObj:any){
    return this.http.post(`${this.getAppBaseUrl()}${this.submitAssesmentUrl}`,reqObj,this.getConfig())
  }

  getAssessmentResult(){
    return this.http.get(`${this.getAppBaseUrl()}${this.getAssessmentResultUrl}`,this.getConfig())
  }
}

