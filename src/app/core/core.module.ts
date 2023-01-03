import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuizModule } from '../quiz/quiz.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuizModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
