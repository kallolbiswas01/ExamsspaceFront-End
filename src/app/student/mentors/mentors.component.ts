import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mentorList = [
  {"mentorPic":"/assets/img/mentor1.png", "mentorName":"Micheal John", "location":"Ann Arbor, MI, USA","industory":"Math/Physics", "profileView":"a"},
  {"mentorPic":"/assets/img/mentor2.png", "mentorName":"White Root", "location":"Ann Arbor, MI, USA","industory":"Math/Physics", "profileView":"b"}


  ]

}
