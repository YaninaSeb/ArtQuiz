import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  numCategories = 12;

  numQuestionsInCategory = 10;

  nameCategory!: string;

  constructor() { }

}
