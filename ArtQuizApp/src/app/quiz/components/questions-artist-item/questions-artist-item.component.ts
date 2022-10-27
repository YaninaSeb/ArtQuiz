import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IImagesItem } from 'src/assets/images';
import { AnswersService } from '../../services/answers.service';
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

  score: boolean[] = this.answersService.score;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionService: QuestionService,
    private answersService: AnswersService
  ) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((params) => {
      this.numCategory = Number(params['indexCategory']);
    });

    this.currentQuestionSubscription = this.questionService.numberQuestion$.subscribe((numQuestion: number) => {
      this.currentQuestion = this.questionService.getQuestion(this.numCategory, numQuestion);
    });

  }

  checkAnswer(numRightImg: string, numSelectedImg: number) {
    this.answersService.checkAnswer(numRightImg, numSelectedImg);
  }

  nextQuestion() {
    this.questionService.nextQuestion();
  }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
    this.questionService.destroy();
    this.answersService.destroy();
  }

}
