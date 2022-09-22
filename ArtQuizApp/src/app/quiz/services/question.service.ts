import { Injectable } from '@angular/core';
import { artQuizData, IQuizItem } from 'src/assets/db';
import { IImagesItem, imagesInfo } from 'src/assets/images';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  numQuestionsInCategory = 10;

  getCategory(num: number): IImagesItem[] {
    let numImageFrom = (num - 1) * 10;
    let numImageTo = numImageFrom + this.numQuestionsInCategory - 1;
    let arrCategory = imagesInfo.slice(numImageFrom, numImageTo);
    return arrCategory;
  }

  getRandomNum(numQuestion: number) {
    // let res = [numQuestion];
    // let countImgInQuestion = 4;
    // while (res.length == countImgInQuestion) {
    //   let randomNum = Math.random() * this.countAllQuestion + 1;
    //   if (!res.includes(randomNum)) res.push(randomNum);
    // }
    // return res;
  }




}
