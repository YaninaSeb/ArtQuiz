import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/quiz/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  category!: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.category = this.categoryService.categoryName;
  }

}
