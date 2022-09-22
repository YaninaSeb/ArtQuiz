import { Component, Input, OnInit } from '@angular/core';
import { IQuizItem } from 'src/assets/db';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  @Input() indexCategory!: number;

  numQuestions!: number;

  numRightAnswers!:number;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.numQuestions = this.categoryService.numQuestionsInCategory;
    this.numRightAnswers = this.categoryService.getCountRightAnswers(this.indexCategory);
  }

}
