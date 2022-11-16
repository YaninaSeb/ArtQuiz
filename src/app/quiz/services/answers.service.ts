import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  artistsAnswers: {}[] = [];

  picturesAnswers: {}[] = [];

  currentAnswers: {[key: string] : boolean} = {};

  score = new Array(10);

  constructor() { }

  completeCategory (numCategory: number) {
    this.artistsAnswers[numCategory-1] = this.currentAnswers;
  }

  getCountRightAnswers(numCategory: number): number {
    let answers = this.artistsAnswers[numCategory];
    if (!answers) return -1;

    let rightAnswers = Object.values(answers).filter((answ) => answ == true);

    return rightAnswers.length;
  }

  checkAnswer(numQuestion: number, numRightImg: string, numSelectedImg: string) {
    if (numRightImg == numSelectedImg) {
      this.currentAnswers[numRightImg] = true;
      this.score[numQuestion-1] = true;
      return true
    } else {
      this.currentAnswers[numRightImg] = false;
      this.score[numQuestion-1] = false;
      return false
    }
  }

  destroy() {
    this.currentAnswers = {};
    this.score = new Array(10);
  }

}
