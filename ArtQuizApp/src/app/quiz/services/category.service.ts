import { Injectable } from '@angular/core';
import { artQuizData, IQuizItem } from 'src/assets/db';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categoryName!: string;
  categoryName: string = 'artists';

  constructor() { }

  getAllCategory() {
    return Object.values(artQuizData);
  }

  getCountQuestions(indCategory: number) {
    return artQuizData[`${indCategory}`].length;
  }

  getCountRightAnswer(category: IQuizItem[]): number {    
    let res = 0;
    category.forEach((item: IQuizItem) => {
      if (this.categoryName == 'artists') {
        res += item.artistsQuizAnswer ? 1 : 0
      }
      if (this.categoryName == 'pictures') {
        res += item.picturesQuizAnswer ? 1 : 0
      }
    });
    return res;
  }

}
