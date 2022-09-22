import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesResultComponent } from './components/categories-result/categories-result.component';
import { CategoriesItemComponent } from './components/categories-item/categories-item.component';
import { CommonModule } from "@angular/common";
import { CategoryService } from "./services/category.service";
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionsItemComponent } from './components/questions-item/questions-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'artists', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'pictures', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'artists/:indexCategory', component: QuestionsComponent, pathMatch: 'full' },
  { path: 'pictures/:indexCategory', component: QuestionsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    CategoriesResultComponent,
    CategoriesItemComponent,
    QuestionsComponent,
    QuestionsItemComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CategoryService
  ]
})
export class QuizModule {}