import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonInput,
  IonToast,
  IonFooter,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MultichoiceService } from '../shared/services/multichoice.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonInput,
    IonList,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonToast,
  ],
})
export class Step4Page implements OnInit {
  submitForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private multiChoiceService: MultichoiceService
  ) {
    this.submitForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  ngOnInit() {
    this.submitForm.reset();
  }
  handlePrev(): void {
    this.router.navigateByUrl('step3');
  }
  submit(): void {
    if (this.submitForm.valid) {
      // Handle form submission
      console.log('Form Submitted!', this.submitForm.value);
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      subHeader: 'Thank you for submitting the form',

      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            localStorage.clear();
            this.multiChoiceService.resetQuestions();
            this.router.navigateByUrl('step1');
          },
        },
      ],
    });

    await alert.present();
  }
}
