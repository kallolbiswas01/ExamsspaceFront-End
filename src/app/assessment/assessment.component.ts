import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AssessmentService } from './assessment.service';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PlaceholderDirective } from './placeholder.directive';
import { Router } from '@angular/router';
import { Question, QuizConfig } from './models/index';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  quizs: Question[];
  quiz: Question;
  ques: any;

  config: QuizConfig = {
    duration: 1800
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  @ViewChild(PlaceholderDirective) placeholderDirective: PlaceholderDirective;
  private _component: any;
  public totalQuesCount: number = 0;
  public currentQuestionNumber: number = 0;
  checkedQuizList: any;

  constructor(
    private assessmentService: AssessmentService,
    private cfr: ComponentFactoryResolver,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.getAssessment();
  }
  /******************************************
   * functionName: getAssessment
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:30/08/2021
   ********************************************/
  public getAssessment() {
    this.assessmentService.getAssessment().subscribe((data) => {
      console.log('Assessment', data);
      let res = <any>data;
      if (res.type === 'success') {
        this.quizs = res.data;
        this.quiz = this.quizs[0];
        this.totalQuesCount = res.totalCount;
        this.currentQuestionNumber = 1;
        //this.router.navigateByUrl('dashboard');
        // this.loadTabComponent(this.quiz.option);
        this.startTime = new Date();
        this.ellapsedTime = '00:00';
        this.timer = setInterval(() => {
          this.tick();
        }, 1000);
        this.duration = this.parseTime(this.config.duration);
      }
    });
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.submitAssessment();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  loadTabComponent(_component: string) {
    switch (_component) {
      case 'textarea':
        this._component = TextareaComponent;
        break;
      case 'radio':
        this._component = RadioComponent;
        break;
      case 'text':
        this._component = InputComponent;
        break;
      case 'checkbox':
        this._component = CheckboxComponent;
        break;
      default:
        console.log('No such day exists!');
        break;
    }

    const componentFactory = this.cfr.resolveComponentFactory(this._component);
    const viewContainerRef = this.placeholderDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef =
      viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.quiz = this.quiz;
    //componentRef.instance.quizs = this.quizs;
    //this.componentsList.push(componentRef);
  }

  previous() {
    const currentIndex = this.quizs.indexOf(this.quiz);
    const newIndex =
      currentIndex === 0 ? this.quizs.length - 1 : currentIndex - 1;
    this.quiz = this.quizs[newIndex];
    this.currentQuestionNumber--;
    //this.loadTabComponent(this.quiz.option);
  }

  next() {
    const currentIndex = this.quizs.indexOf(this.quiz);
    const newIndex =
      currentIndex === this.quizs.length - 1 ? 0 : currentIndex + 1;
    this.quiz = this.quizs[newIndex];
    this.currentQuestionNumber++;
    //this.loadTabComponent(this.quiz.option);
  }

  /******************************************
   * functionName:   submitAssessment(){
   * input: []
   * output:
   * owner: Sushil Yadav
   * date:30/08/2021
   ********************************************/
  submitAssessment() {
    this.assessmentService.submitAssessment(this.quizs).subscribe((data) => {
      console.log('Assessment', data);
      let res = <any>data;
      if (res.type === 'success') {
        this.quizs = res.data;
        this.router.navigateByUrl('assessment/result');
      }
    });
  }

  onRadioChange(item: Question, index: number) {
    console.log(this.ques);
    this.quizs[
      this.quizs.findIndex((data: { _id: string }) => data._id === item._id)
    ].value[index].checked = true;
  }

  // gotoViewAssessment(){
  //   this.router.navigateByUrl('assessment/result');
  // }
}
