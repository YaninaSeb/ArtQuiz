import { Component, OnInit } from '@angular/core';
import { IQuiz, IQuizItem } from 'src/assets/db';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-result',
  templateUrl: './categories-result.component.html',
  styleUrls: ['./categories-result.component.css']
})
export class CategoriesResultComponent implements OnInit {

  allCategories: IQuizItem[][] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.allCategories = this.categoryService.getAllCategory()
  }


}
