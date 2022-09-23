import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IImagesItem } from 'src/assets/images';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-questions-artist-item',
  templateUrl: './questions-artist-item.component.html',
  styleUrls: ['./questions-artist-item.component.css']
})
export class QuestionsArtistItemComponent implements OnInit {

  numCategory!: number;

  currentQuestion!: IImagesItem;

  private currentQuestionSubscription!: Subscription;

  private subscription!: Subscription;

  score!: boolean[];

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
    });

    this.score = this.questionService.arrAnswers;
  }

  checkAnswer(numImg: number) {
    this.questionService.checkAnswer(numImg);
  }

  nextQuestion() {
    this.questionService.nextQuestion();
  }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
    this.questionService.destroy();
  }

}
