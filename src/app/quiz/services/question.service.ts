import { Injectable } from '@angular/core';
import { IImagesItem, imagesInfo } from 'src/assets/images';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  questionsInCategory = 10;

  getQuestion(numCategory: number, numQuestion: number) {
    let category = this.getCategory(numCategory);
    let question = category[numQuestion - 1];
    question.randomNums = this.getRandomNums(numCategory - 1, numQuestion - 1); //получить еще 3 варианта ответа
    console.log('сгенерированные рандомные варианты ответа', question.randomNums)
    return question;
  }

  getCategory(num: number): IImagesItem[] {
    let numFrom = (num - 1) * 10;
    let numTo = numFrom + this.questionsInCategory;
    let category = imagesInfo.slice(numFrom, numTo);
    return category;
  }

  getRandomNums(numCategory: number, numQuestion: number): number[] {
    let rightNum = 10 * numCategory + numQuestion
    let res = [rightNum];
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

}


