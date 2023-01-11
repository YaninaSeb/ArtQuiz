import { Injectable } from '@angular/core';
import { IImagesItem, imagesInfo } from 'src/assets/images';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  nameCategory!: string;

  questionsInCategory = 10;

  constructor(private localService: LocalService) {
    if (this.localService.getData('nameCategory')) {
      this.nameCategory = <string>this.localService.getData('nameCategory');
    }
  }

  getQuestion(numCategory: number, numQuestion: number) {
    let category = this.getCategory(numCategory);
    let question = category[numQuestion - 1];
    question.randomAnswers = this.getRandomAnswers(
      numCategory - 1,
      numQuestion - 1
    );
    return question;
  }

  getCategory(num: number): IImagesItem[] {
    let numFrom = (num - 1) * 10;
    let numTo = numFrom + this.questionsInCategory;
    let category = imagesInfo.slice(numFrom, numTo);
    return category;
  }

  getRandomAnswers(numCategory: number, numQuestion: number): string[] {
    let rightNum = 10 * numCategory + numQuestion;
    let res = [`${rightNum}`];
    let countImgInQuestion = 4;
    let countAllQuestion = imagesInfo.length;
    while (res.length < countImgInQuestion) {
      let randomNum = `${Math.round(Math.random() * (countAllQuestion - 1))}`;
      if (!res.includes(randomNum)) res.push(randomNum);
    }

    if (this.nameCategory == 'pictures') {
      res = [imagesInfo[rightNum].author];
      while (res.length < countImgInQuestion) {
        let randomNum = Math.round(Math.random() * (countAllQuestion - 1));
        let randomName = imagesInfo[randomNum].author;
        if (!res.includes(randomName)) res.push(randomName);
      }
    }

    return this.shuffle(res);
  }

  shuffle(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }
}
