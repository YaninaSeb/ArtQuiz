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

  getQuestion(numCategory: number, numQuestion: number) {
    let category = this.getCategory(numCategory);
    let question = category[numQuestion - 1];
    question.randomNums = this.getRandomNums(numQuestion - 1); //получить еще 3 варианта ответа
    return question;
  }

  getCategory(num: number): IImagesItem[] {
    let numFrom = (num - 1) * 10;
    let numTo = numFrom + this.questionsInCategory;
    let category = imagesInfo.slice(numFrom, numTo);
    return category;
  }

  getRandomNums(numQuestion: number): number[] {
    let res = [numQuestion];
    let countImgInQuestion = 4;
    let countAllQuestion = imagesInfo.length;
    while (res.length < countImgInQuestion) {
      let randomNum = Math.round(Math.random() * (countAllQuestion - 1));
      if (!res.includes(randomNum)) res.push(randomNum);
    }
    return this.shuffle(res);
  }

  shuffle(array: number[]) { //перемешать ответы
    return array.sort(() => Math.random() - 0.5);
  }

  nextQuestion() {
    let numQuestion = this.numberQuestion$$.value + 1;

    if (this.numberQuestion$$.value < this.questionsInCategory) {
      this.numberQuestion$$.next(numQuestion);
    } else {
      // this.answersService.completeCategory();
    }
  }


  destroy() {
    this.numberQuestion$$.next(1);
  }


}


