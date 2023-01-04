import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-categories-result',
  templateUrl: './categories-result.component.html',
  styleUrls: ['./categories-result.component.css']
})
export class CategoriesResultComponent implements OnInit {

  nameCategory!: string;

  numCategories!: number[];

  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.nameCategory = params['nameCategory'];

      if (this.nameCategory == 'artists' || this.nameCategory == 'pictures') {
        this.questionService.nameCategory = this.nameCategory;
        this.numCategories = new Array(12);
      } else {
        this.router.navigate(['/error']);
      }

    });
  }

}
