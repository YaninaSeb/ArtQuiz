import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IImagesItem } from 'src/assets/images';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-questions-item',
  templateUrl: './questions-item.component.html',
  styleUrls: ['./questions-item.component.css']
})
export class QuestionsItemComponent implements OnInit {

  // private videos$$ = new Subject<ISearchItem[]>();

  numCategory!: number; //динамически меняет значение

  category!: IImagesItem[];

  currentQuestion!: IImagesItem;

  numberQuestion = 1;

  private subscription!: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((params) => {
      this.numCategory = Number(params['indexCategory']);
    });

    this.category = this.questionService.getCategory(this.numCategory);
    this.currentQuestion = this.category[this.numberQuestion - 1];
  }
  
}
