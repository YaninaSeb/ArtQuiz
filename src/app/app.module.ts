import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { QuizModule } from './quiz/quiz.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    CoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
