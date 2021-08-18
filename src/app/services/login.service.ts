import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CommonService } from '../common/common.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CommonService {
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  public url = "Api/core/login/";

   /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public loginUser(reqObj:any){

    return this.http.post(`${this.getAppBaseUrl()}${this.url}`,reqObj,this.getConfig())
  }
}
