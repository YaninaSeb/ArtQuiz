import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-categories-result',
  templateUrl: './categories-result.component.html',
  styleUrls: ['./categories-result.component.css']
})
export class CategoriesResultComponent implements OnInit {

  nameCategory!: string;

  numCategories!: number[];

  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.nameCategory = params['nameCategory'];
      this.questionService.nameCategory = this.nameCategory; // придумать другой способ
    });

    this.categoryService.nameCategory = this.nameCategory;

    this.numCategories = new Array(this.categoryService.numCategories);
  }

}
