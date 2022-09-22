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

  numCategory!: number;

  currentQuestion!: IImagesItem;

  private currentQuestionSubscription!: Subscription;

  private subscription!: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((params) => {
      this.numCategory = Number(params['indexCategory']);
    });

    this.currentQuestionSubscription = this.questionService.numberQuestion$.subscribe((numQuestion: number) => {
      this.currentQuestion = this.questionService.getQuestion(this.numCategory, numQuestion);
    })
  }

  nextQuestion() {
    this.questionService.nextQuestion();
  }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
    this.questionService.unsubscribeNumberQuestion();
  }

}
