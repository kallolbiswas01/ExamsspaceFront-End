import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventexam',
  templateUrl: './eventexam.component.html',
  styleUrls: ['./eventexam.component.scss']
})
export class EventexamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public eventData=[
    {"eventImg":"/assets/img/event1.png","heading":"JET EXAM 2021","eventName":"Ahmedabad Entrance Exam","location":"Ann Arbor, MI,  USA"},
    {"eventImg":"/assets/img/event2.png","heading":"NEET EXAM","eventName":"Ahmedabad Entrance Exam","location":"Ann Arbor, MI,  USA"},
    {"eventImg":"/assets/img/event1.png","heading":"JET EXAM 2021","eventName":"Ahmedabad Entrance Exam","location":"Ann Arbor, MI,  USA"},
    {"eventImg":"/assets/img/event2.png","heading":"NEET EXAM","eventName":"Ahmedabad Entrance Exam","location":"Ann Arbor, MI,  USA"}

  ]

}
