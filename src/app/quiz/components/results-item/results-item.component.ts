import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../../services/answers.service';
import { imagesInfo } from 'src/assets/images';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.css']
})
export class ResultsItemComponent implements OnInit {

  nameCategory!: string;

  numCategory!: number;

  score!: any;

  allImagesInfo = imagesInfo;

  constructor(
    private activateRoute: ActivatedRoute,
    private answersService: AnswersService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.nameCategory = params['nameCategory'];
      this.numCategory = +params['indexCategory'];
    });

    if (this.nameCategory == 'artists') {
      this.score = Object.entries(this.answersService.artistsAnswers[this.numCategory - 1]);
    } else if (this.nameCategory == 'pictures') {
      this.score = Object.entries(this.answersService.picturesAnswers[this.numCategory - 1]);
    }
  }
}
