import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultichoiceComponent } from '../shared/components/multichoice/multichoice.component';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonButton,
} from '@ionic/angular/standalone';
import { MultichoiceService } from '../shared/services/multichoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
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
export class Step1Page {
  constructor(
    private multiChoiceService: MultichoiceService,
    private router: Router
  ) {}
  step1Questions = this.multiChoiceService.step1Data;
  allAnswerSelected = false;

  ionViewWillEnter() {
    console.log(this.step1Questions);
    this.step1Questions = this.multiChoiceService.step1Data;
    this.getNextButtonValidation();
  }
  getNextButtonValidation() {
    this.allAnswerSelected = this.multiChoiceService.checkUserSelectedAnswers(
      this.step1Questions
    );
  }

  handleIsUserAnsweredAll(e: any) {
    console.log(e, 'event emit');
    this.allAnswerSelected = e;
  }

  handleNext() {
    localStorage.setItem('step', '2');
    this.multiChoiceService.setLocalStorage('step1', this.step1Questions);
    this.router.navigateByUrl('step2');
  }
}
