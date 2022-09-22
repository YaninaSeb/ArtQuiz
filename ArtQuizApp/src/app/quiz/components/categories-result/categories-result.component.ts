import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IQuiz, IQuizItem } from 'src/assets/db';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-result',
  templateUrl: './categories-result.component.html',
  styleUrls: ['./categories-result.component.css']
})
export class CategoriesResultComponent implements OnInit {

  numCategories!: number[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.numCategories = new Array(this.categoryService.numCategories);
  }

}
