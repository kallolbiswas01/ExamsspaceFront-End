import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livetest',
  templateUrl: './livetest.component.html',
  styleUrls: ['./livetest.component.scss']
})
export class LivetestComponent implements OnInit {

  constructor() { }

  public livetestData = [
    {"eventImg":"/assets/img/livetest1.png","eventCompany":"ExamsSpace","eventName":"Innovation Challenge","day":
  ["04", "11", "18"]
  },
  {"eventImg":"/assets/img/livetest2.png","eventCompany":"IBM","eventName":"Reimagine Future","day":
  ["04", "11", "18"]
  }
  
  ];


  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  // triggerModal(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
  //     this.closeModal = `Closed with: ${res}`;
  //   }, (res) => {
  //     this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
  //   });
  // }

  ngOnInit(): void {
  }

}
