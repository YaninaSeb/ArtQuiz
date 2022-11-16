import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit { 
  nameCategory!: string;

  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.nameCategory = params['nameCategory']
    });
  }
}
