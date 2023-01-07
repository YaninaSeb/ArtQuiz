import { Component, Input, OnInit } from '@angular/core';
import { AnswersService } from '../../services/answers.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  @Input() indexCategory!: number;

  nameCategory!: string;

  numQuestions = 10;

  numRightAnswers!:number;

  constructor(
    private answersServices: AnswersService,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.nameCategory = this.questionService.nameCategory;
    this.numRightAnswers = this.answersServices.getCountRightAnswers(this.nameCategory, this.indexCategory);
  }

}
