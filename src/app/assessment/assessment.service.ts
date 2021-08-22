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

  public url = "api/assessment/question/list";

   /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public getAssessment(){
    return this.http.get(`${this.getAppBaseUrl()}${this.url}`,this.getConfig())
  }
}

