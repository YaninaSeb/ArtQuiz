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

  constructor(
    private questionService: QuestionService,
    private activateRoute: ActivatedRoute,
  ) { }

  completeCategory () {
    let numCategory = this.activateRoute.params;
    console.log(numCategory)

    // this.artistsAnswers[numCategory] = this.currentAnswers;
  }

  getCountRightAnswers(numCategory: number): number {
    let answers = this.artistsAnswers[numCategory - 1];
    if (!answers) {
      console.log('такая категория еще не сыграна')
      return 0;
    }
    let rightAnswers = Object.values(answers).filter((answ) => answ == true);

    return rightAnswers.length;
  }

  checkAnswer(numRightImg: string, numSelectedImg: number) {
    let numQuestion = this.questionService.numberQuestion$$.value - 1;

    if (+numRightImg == numSelectedImg) {
      this.currentAnswers[numRightImg] = true;
      this.score[numQuestion] = true;
    } else {
      this.currentAnswers[numRightImg] = false;
      this.score[numQuestion] = false;
    }
  }


  destroy() {
    this.currentAnswers = {};
    this.score = new Array(10);
  }

}
