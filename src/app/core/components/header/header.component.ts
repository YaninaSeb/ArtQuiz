import { Component, OnInit } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { QuestionService } from 'src/app/quiz/services/question.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  nameCategory!: string;

  isVisibilityHeader!: boolean;

  constructor(
    private questionService: QuestionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e: Event) => e instanceof RouterEvent)
    ).subscribe((e: any) => {
      if (e.url == '/art_quiz') {
        this.isVisibilityHeader = false;
      } else {
        this.isVisibilityHeader = true;
      }
    });
  }

  goToCategories() {
    this.nameCategory = this.questionService.nameCategory;
    this.router.navigate(['art_quiz', this.nameCategory]);
  }

  goToHome() {
    this.nameCategory = '';
    this.router.navigate(['art_quiz']);
  }

}
