import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-result',
  templateUrl: './categories-result.component.html',
  styleUrls: ['./categories-result.component.css']
})
export class CategoriesResultComponent implements OnInit {

  numCategories!: number[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.numCategories = new Array(this.categoryService.numCategories);
  }

}
