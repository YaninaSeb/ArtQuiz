import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  numCategories = 12;

  numQuestionsInCategory = 10;

  categoryName: string = 'artists';

  constructor() { }

  getCountRightAnswers(numCategory: number): number {    
    // let res = 0;
    // categoryItems.forEach((item: IQuizItem) => {
    //   if (this.categoryName == 'artists') {
    //     res += item.artistsQuizAnswer ? 1 : 0;
    //   } else if (this.categoryName == 'pictures') {
    //     res += item.picturesQuizAnswer ? 1 : 0;
    //   }
    // });
    // return res;
    return 1;
  }

}
