import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
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

  dataCurrentQuestion!: IImagesItem;

  currentQuestionSubscription!: Subscription;

  numberQuestion$$ = new BehaviorSubject<number>(1);

  numberQuestion$ = this.numberQuestion$$.asObservable();

  score: boolean[] = this.answersService.score;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionService: QuestionService,
    private answersService: AnswersService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.numCategory = Number(params['indexCategory']);
    });

    this.currentQuestionSubscription = this.numberQuestion$.subscribe((numQuestion: number) => {
      this.dataCurrentQuestion = this.questionService.getQuestion(this.numCategory, numQuestion);
    });
  }

  checkAnswer(numRightImg: string, numSelectedImg: number) {
    this.answersService.checkAnswer(this.numberQuestion$$.value, numRightImg, numSelectedImg);
  }

  nextQuestion() {
    let numQuestion = this.numberQuestion$$.value + 1;

    if (this.numberQuestion$$.value < 10) {
      this.numberQuestion$$.next(numQuestion);
    } else {
      this.answersService.completeCategory(this.numCategory);
    }
  }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
    this.answersService.destroy();
  }

}
