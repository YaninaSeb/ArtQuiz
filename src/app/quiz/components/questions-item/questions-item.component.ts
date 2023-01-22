import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IImagesItem } from 'src/assets/images';
import { AnswersService } from '../../services/answers.service';
import { QuestionService } from '../../services/question.service';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GameoverModalComponent } from '../gameover-modal/gameover-modal.component';

@Component({
  selector: 'app-questions-item',
  templateUrl: './questions-item.component.html',
  styleUrls: ['./questions-item.component.css'],
})
export class QuestionsItemComponent implements OnInit, OnDestroy {
  nameCategory!: string;

  numCategory!: number;

  dataCurrentQuestion!: IImagesItem;

  currentQuestionSubscription!: Subscription;

  numberQuestion$$ = new BehaviorSubject<number>(1);

  numberQuestion$ = this.numberQuestion$$.asObservable();

  score: boolean[] = this.answersService.score;

  answerModalRef: MatDialogRef<AnswerModalComponent> | null = null;

  gameOverModalRef: MatDialogRef<GameoverModalComponent> | null = null;

  isAnswerSelected = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionService: QuestionService,
    private answersService: AnswersService,
    private modal: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.nameCategory = params['nameCategory'];
      this.numCategory = +params['indexCategory'];
    });

    if (this.numCategory >= 1 && this.numCategory <= 12) {
      this.currentQuestionSubscription = this.numberQuestion$.subscribe(
        (numQuestion: number) => {
          this.dataCurrentQuestion = this.questionService.getQuestion(
            this.numCategory,
            numQuestion
          );
        }
      );
    } else {
      this.router.navigate(['/error']);
    }
  }

  checkAnswer(rightAnswer: string, selectedAnswer: string) {
    this.isAnswerSelected = true;
    let isRightAnswer = this.answersService.checkAnswer(
      this.nameCategory,
      this.numberQuestion$$.value,
      rightAnswer,
      selectedAnswer
    );
    setTimeout(() => {
      this.openAnswerModal(isRightAnswer);
      this.isAnswerSelected = false;
    }, 500);
  }

  openAnswerModal(isAnswer: boolean) {
    this.answerModalRef = this.modal.open(AnswerModalComponent, {
      data: { ...this.dataCurrentQuestion, answer: isAnswer },
    });

    this.answerModalRef.afterClosed().subscribe(() => {
      this.nextQuestion();
    });
  }

  openGameOverModal() {
    let rightAnswers = this.score.filter((elem) => elem == true).length;
    this.gameOverModalRef = this.modal.open(GameoverModalComponent, {
      data: { answers: rightAnswers },
    });

    this.gameOverModalRef.afterClosed().subscribe((nameCategory) => {
      if (nameCategory == '') {
        this.router.navigate(['art_quiz']);
      } else {
        this.router.navigate(['art_quiz', nameCategory]);
      }
    });
  }

  nextQuestion() {
    let numQuestion = this.numberQuestion$$.value + 1;

    if (this.numberQuestion$$.value < 10) {
      this.numberQuestion$$.next(numQuestion);
    } else {
      this.answersService.completeCategory(this.nameCategory, this.numCategory);
      setTimeout(() => this.openGameOverModal(), 500);
    }
  }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
    this.answersService.destroy();
  }
}
