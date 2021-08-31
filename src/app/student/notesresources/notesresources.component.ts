import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notesresources',
  templateUrl: './notesresources.component.html',
  styleUrls: ['./notesresources.component.scss']
})
export class NotesresourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public notesesource = [
    {"notesImage":"/assets/img/notes1.png","notesName":"General Knowledge"},
    {"notesImage":"/assets/img/notes2.png","notesName":"Physics"},
    {"notesImage":"/assets/img/notes3.png","notesName":"Biology"},
    {"notesImage":"/assets/img/notes4.png","notesName":"Math"},
    {"notesImage":"/assets/img/notes5.png","notesName":"English"},
    {"notesImage":"/assets/img/notes6.png","notesName":"Computer Science"},
    {"notesImage":"/assets/img/notes7.png","notesName":"Geology"},
    {"notesImage":"/assets/img/notes8.png","notesName":"Electronics"}

  ]

}
