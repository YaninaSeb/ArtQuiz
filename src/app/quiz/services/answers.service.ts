import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  artistsAnswers: {}[] = [];

  currentAnswers: {[key: string] : boolean} = {};

  score = new Array(10);

  constructor() { }

  completeCategory (numCategory: number) {
    this.artistsAnswers[numCategory-1] = this.currentAnswers;

    console.log('категория завершена', this.artistsAnswers)
  }

  getCountRightAnswers(numCategory: number): number {
    let answers = this.artistsAnswers[numCategory];
    if (!answers) {
      console.log('такая категория еще не сыграна')
      return 0;
    }
    let rightAnswers = Object.values(answers).filter((answ) => answ == true);

    return rightAnswers.length;
  }

  checkAnswer(numQuestion: number, numRightImg: string, numSelectedImg: number) {
    if (+numRightImg == numSelectedImg) {
      this.currentAnswers[numRightImg] = true;
      this.score[numQuestion-1] = true;
    } else {
      this.currentAnswers[numRightImg] = false;
      this.score[numQuestion-1] = false;
    }
  }

  destroy() {
    this.currentAnswers = {};
    this.score = new Array(10);
  }

}
