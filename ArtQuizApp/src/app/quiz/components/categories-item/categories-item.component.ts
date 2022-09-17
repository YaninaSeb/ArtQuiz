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

  @Input() category!: IQuizItem[];

  countQuestions!:number;

  countRightAnswer!:number;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.countQuestions = this.category.length;
    this.countRightAnswer = this.categoryService.getCountRightAnswer(this.category);
  }



}
