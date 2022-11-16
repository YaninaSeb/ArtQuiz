import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/quiz/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute
  ) {}

  category: string = 'artists';


  ngOnInit(): void {

  }

}
