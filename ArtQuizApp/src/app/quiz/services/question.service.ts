import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IImagesItem, imagesInfo } from 'src/assets/images';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  numberQuestion$$ = new BehaviorSubject<number>(1);

  numberQuestion$ = this.numberQuestion$$.asObservable();

  questionsInCategory = 10;

  arrAnswers: boolean[] = new Array(this.questionsInCategory);

  getQuestion(numCategory: number, numQuestion: number) {
    let category = this.getCategory(numCategory);
    let question = category[numQuestion - 1];
    question.randomNums = this.getRandomImg(numQuestion - 1);
    return question;
  }

  getCategory(num: number): IImagesItem[] {
    let numImageFrom = (num - 1) * 10;
    let numImageTo = numImageFrom + this.questionsInCategory;
    let category = imagesInfo.slice(numImageFrom, numImageTo);
    return category;
  }

  getRandomImg(numQuestion: number): number[] {
    let res = [numQuestion];
    let countImgInQuestion = 4;
    let countAllQuestion = imagesInfo.length;
    while (res.length < countImgInQuestion) {
      let randomNum = Math.round(Math.random() * (countAllQuestion - 1));
      if (!res.includes(randomNum)) res.push(randomNum);
    }
    return this.shuffle(res);
  }

  shuffle(array: number[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  checkAnswer(numImg: number) {
    if (numImg == (this.numberQuestion$$.value - 1))  {
      this.arrAnswers[this.numberQuestion$$.value - 1] = true;
    } else {
      this.arrAnswers[this.numberQuestion$$.value - 1] = false;
    }
  }

  nextQuestion() {
    let numQuestion = this.numberQuestion$$.value + 1;
    this.numberQuestion$$.next(numQuestion);
  }

  destroy() {
    this.numberQuestion$$.next(1);
    this.arrAnswers = [];
    this.arrAnswers = new Array(this.questionsInCategory);
  }


}


