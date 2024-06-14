import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  {
    path: 'step1',
    loadComponent: () => import('./step1/step1.page').then((m) => m.Step1Page),
  },
  {
    path: 'step2',
    loadComponent: () => import('./step2/step2.page').then((m) => m.Step2Page),
  },
  {
    path: 'step3',
    loadComponent: () => import('./step3/step3.page').then((m) => m.Step3Page),
  },
  {
    path: 'step4',
    loadComponent: () => import('./step4/step4.page').then((m) => m.Step4Page),
  },
];
