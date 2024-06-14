import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MultichoiceService } from '../shared/services/multichoice.service';
import { MultichoiceComponent } from '../shared/components/multichoice/multichoice.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
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
export class Step2Page {
  constructor(
    private multiChoiceService: MultichoiceService,
    private router: Router
  ) {}
  step2Questions = this.multiChoiceService.step2Data;
  allAnswerSelected = false;
  ionViewWillEnter() {
    console.log(this.step2Questions);
    this.step2Questions = this.multiChoiceService.step2Data;
    this.getNextButtonValidation();
  }
  getNextButtonValidation() {
    this.allAnswerSelected = this.multiChoiceService.checkUserSelectedAnswers(
      this.step2Questions
    );
  }

  handleIsUserAnsweredAll(e: any): void {
    console.log(e, 'event emit');
    this.allAnswerSelected = e;
  }

  handleNext(): void {
    localStorage.setItem('step', '3');

    this.multiChoiceService.setLocalStorage('step2', this.step2Questions);
    this.router.navigateByUrl('step3');
  }
  handlePrev(): void {
    this.router.navigateByUrl('step1');
  }
}
