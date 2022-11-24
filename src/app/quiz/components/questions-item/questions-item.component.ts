import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IImagesItem } from 'src/assets/images';
import { AnswersService } from '../../services/answers.service';
import { QuestionService } from '../../services/question.service';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questions-item',
  templateUrl: './questions-item.component.html',
  styleUrls: ['./questions-item.component.css']
})
export class QuestionsItemComponent implements OnInit {

  nameCategory!: string;

  numCategory!: number;

  dataCurrentQuestion!: IImagesItem;

  currentQuestionSubscription!: Subscription;

  numberQuestion$$ = new BehaviorSubject<number>(1);

  numberQuestion$ = this.numberQuestion$$.asObservable();

  score: boolean[] = this.answersService.score;

  answerModalRef: MatDialogRef<AnswerModalComponent> | null = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionService: QuestionService,
    private answersService: AnswersService,
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.nameCategory = params['nameCategory']
      this.numCategory = +params['indexCategory'];
    });

    this.currentQuestionSubscription = this.numberQuestion$.subscribe((numQuestion: number) => {
      this.dataCurrentQuestion = this.questionService.getQuestion(this.numCategory, numQuestion);
    });
  }

  checkAnswer(rightAnswer: string, selectedAnswer: string) {
    let isRightAnswer = this.answersService.checkAnswer(this.nameCategory, this.numberQuestion$$.value, rightAnswer, selectedAnswer);

    setTimeout(() => this.openAnswerModal(isRightAnswer), 500)
  }

  openAnswerModal(isAnswer: boolean) {
    this.answerModalRef = this.modal.open(AnswerModalComponent, {
      data: {...this.dataCurrentQuestion, answer: isAnswer}
    });

    this.answerModalRef.afterClosed().subscribe(() => {
      this.nextQuestion()
    });
  }

  nextQuestion() {
    let numQuestion = this.numberQuestion$$.value + 1;

    if (this.numberQuestion$$.value < 10) {
      this.numberQuestion$$.next(numQuestion);
    } else {
      this.answersService.completeCategory(this.nameCategory, this.numCategory);
      console.log('end')
    }
  }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
    this.answersService.destroy();
  }

}
