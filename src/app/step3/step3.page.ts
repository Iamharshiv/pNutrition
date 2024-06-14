import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
} from '@ionic/angular/standalone';
import { MultichoiceComponent } from '../shared/components/multichoice/multichoice.component';
import { Router } from '@angular/router';
import { MultichoiceService } from '../shared/services/multichoice.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonFooter,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    MultichoiceComponent,
  ],
})
export class Step3Page {
  constructor(
    private multiChoiceService: MultichoiceService,
    private router: Router
  ) {}
  step3Questions = this.multiChoiceService.step3Data;
  allAnswerSelected = false;
  ionViewWillEnter() {
    console.log(this.step3Questions);
    this.step3Questions = this.multiChoiceService.step3Data;
    this.getNextButtonValidation();
  }
  getNextButtonValidation() {
    this.allAnswerSelected = this.multiChoiceService.checkUserSelectedAnswers(
      this.step3Questions
    );
  }

  handleIsUserAnsweredAll(e: any): void {
    console.log(e, 'event emit');
    this.allAnswerSelected = e;
  }

  handleNext(): void {
    localStorage.setItem('step', '4');

    this.multiChoiceService.setLocalStorage('step3', this.step3Questions);
    this.router.navigateByUrl('step4');
  }

  handlePrev(): void {
    this.router.navigateByUrl('step2');
  }
}
