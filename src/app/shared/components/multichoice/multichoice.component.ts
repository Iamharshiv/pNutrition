import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonRadio,
  IonRadioGroup,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

import { MultiChoiceType } from '../../model/questionModel';
import { MultichoiceService } from '../../services/multichoice.service';
@Component({
  selector: 'app-multichoice',
  templateUrl: './multichoice.component.html',
  styleUrls: ['./multichoice.component.scss'],
  standalone: true,
  imports: [
    IonRadioGroup,
    IonRadio,
    IonCardSubtitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonRadio,
    IonGrid,
    IonRow,
    IonCol,
    NgFor,
    CommonModule,
  ],
})
export class MultichoiceComponent implements OnInit {
  @Input() questions!: MultiChoiceType[];
  @Output() outputEvent = new EventEmitter();
  constructor(private multiChoiceService: MultichoiceService) {}

  ngOnInit() {}
  handleChange(event: any, obj: MultiChoiceType) {
    obj.answer = event.detail.value;
    this.outputEvent.emit(
      this.multiChoiceService.checkUserSelectedAnswers(this.questions)
    );
  }
}
