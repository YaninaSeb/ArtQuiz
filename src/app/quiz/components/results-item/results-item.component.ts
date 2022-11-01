import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../../services/answers.service';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.css']
})
export class ResultsItemComponent implements OnInit {

  numCategory!: number;

  score!: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private answersService: AnswersService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.numCategory = Number(params['indexCategory']);
    });

    this.score = Object.entries(this.answersService.artistsAnswers[this.numCategory - 1]);
  }

}
