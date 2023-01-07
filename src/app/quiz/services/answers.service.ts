import { Injectable } from '@angular/core';
import { imagesInfo } from 'src/assets/images';
import { LocalService } from './local.service';


@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  artistsAnswers: {}[] = [];

  picturesAnswers: {}[] = [];

  currentAnswers: {[key: string] : boolean} = {};

  score = new Array(10);

  constructor(
    private localService: LocalService
  ) {
    if (this.localService.getData('artistsAnswers')) {
      this.artistsAnswers = JSON.parse(<string>this.localService.getData('artistsAnswers'));
    }
    if (this.localService.getData('picturesAnswers')) {
      this.picturesAnswers = JSON.parse(<string>this.localService.getData('picturesAnswers'));
    }
  }

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
      this.localService.saveData('artistsAnswers', JSON.stringify(this.artistsAnswers))
    } else if (nameCategory == 'pictures') {
      this.picturesAnswers[numCategory-1] = this.currentAnswers;
      this.localService.saveData('picturesAnswers', JSON.stringify(this.picturesAnswers))
    }
  }

  destroy() {
    this.currentAnswers = {};
    this.score = new Array(10);
  }

}
