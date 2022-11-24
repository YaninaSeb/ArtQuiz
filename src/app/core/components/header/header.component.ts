import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/quiz/services/question.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nameCategory!: string;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  goToCategories() {
    this.nameCategory = this.questionService.nameCategory;
    this.router.navigate(['art_quiz', this.nameCategory]);
  }

  goToHome() {
    this.nameCategory = '';
    this.router.navigate(['art_quiz']);
  }

}
