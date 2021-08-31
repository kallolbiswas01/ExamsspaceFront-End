import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentRoutingModule } from './assessment-routing.module';
import { AssessmentComponent } from './assessment.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { PlaceholderDirective } from './placeholder.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AssessmentComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    TextareaComponent,
    PlaceholderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AssessmentRoutingModule,
  ]
})
export class AssessmentModule { }
