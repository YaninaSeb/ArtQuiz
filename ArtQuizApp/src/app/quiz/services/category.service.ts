import { Injectable } from '@angular/core';
import { artQuizData, IQuizItem } from 'src/assets/db';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categoryName!: string;
  categoryName: string = 'artists';

  constructor() { }

  getAllCategory(): IQuizItem[][] {
    return Object.values(artQuizData);
  }

  getCountRightAnswer(categoryItems: IQuizItem[]): number {    
    let res = 0;
    categoryItems.forEach((item: IQuizItem) => {
      if (this.categoryName == 'artists') {
        res += item.artistsQuizAnswer ? 1 : 0;
      } else if (this.categoryName == 'pictures') {
        res += item.picturesQuizAnswer ? 1 : 0;
      }
    });
    return res;
  }

}
