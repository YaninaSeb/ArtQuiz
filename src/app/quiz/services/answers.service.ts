import { Injectable } from '@angular/core';
import { imagesInfo } from 'src/assets/images';


@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  artistsAnswers: {}[] = [];

  picturesAnswers: {}[] = [];

  currentAnswers: {[key: string] : boolean} = {};

  score = new Array(10);

  getCountRightAnswers(nameCategory: string, numCategory: number): number {
    let answers = nameCategory == 'artists' ? 
        this.artistsAnswers[numCategory] : this.picturesAnswers[numCategory];

    if (!answers) return -1;

    let rightAnswers = Object.values(answers).filter((answ) => answ == true);

    return rightAnswers.length;
  }

  checkAnswer(nameCategory: string, numQuestion: number, rightAnswer: string, selectedAnswer: string) {    
    let isRightAnswer = (rightAnswer == selectedAnswer);

    if (nameCategory == 'pictures') {
      isRightAnswer = (imagesInfo[+rightAnswer].author == selectedAnswer)
    }

    this.currentAnswers[rightAnswer] = isRightAnswer;
    this.score[numQuestion-1] = isRightAnswer;

    return isRightAnswer;
  }

  completeCategory (nameCategory: string, numCategory: number) {
    if (nameCategory == 'artists') {
      this.artistsAnswers[numCategory-1] = this.currentAnswers;
    } else if (nameCategory == 'pictures') {
      this.picturesAnswers[numCategory-1] = this.currentAnswers;
    }
  }

  destroy() {
    this.currentAnswers = {};
    this.score = new Array(10);
  }

}
