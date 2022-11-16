import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../../services/answers.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  nameCategory!: string;

  @Input() indexCategory!: number;

  numQuestions!: number;

  numRightAnswers!:number;

  constructor(
    private categoryService: CategoryService,
    private answersServices: AnswersService
  ) { }

  ngOnInit(): void {
    this.nameCategory = this.categoryService.nameCategory;
    this.numQuestions = this.categoryService.numQuestionsInCategory;
    this.numRightAnswers = this.answersServices.getCountRightAnswers(this.nameCategory, this.indexCategory);
  }

}
