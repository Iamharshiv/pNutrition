import { Injectable, Query } from '@angular/core';
import { page1, page2, page3 } from 'src/app/shared/questions';
import { MultiChoiceType } from '../model/questionModel';
@Injectable({
  providedIn: 'root',
})
export class MultichoiceService {
  step1Data = [...page1];
  step2Data = [...page2];
  step3Data = [...page3];
  constructor() {
    this.populateFilledData();
  }

  checkUserSelectedAnswers(data: MultiChoiceType[]): boolean {
    console.log(data.every((g) => g.answer != ''));
    return data.every((g) => g.answer != '');
  }

  populateFilledData() {
    this.step1Data = this.getLocalStorage('step1') || [...page1];
    this.step2Data = this.getLocalStorage('step2') || [...page2];
    this.step3Data = this.getLocalStorage('step3') || [...page3];
  }

  resetQuestions() {
    this.step1Data = page1.map((g) => {
      g.answer = '';
      return g;
    });
    this.step2Data = page2.map((g) => {
      g.answer = '';
      return g;
    });
    this.step3Data = page3.map((g) => {
      g.answer = '';
      return g;
    });
  }

  getLocalStorage(key: string) {
    let item: any = localStorage.getItem(key);
    return JSON.parse(item);
  }
  setLocalStorage(key: string, value: MultiChoiceType[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
