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
import { ScoreHighlightDirective } from './directives/score-highlight.directive';
import { ResultsComponent } from './pages/results/results.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { AnswerModalComponent } from './components/answer-modal/answer-modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: ':nameCategory', component: CategoriesComponent, pathMatch: 'full' },
  { path: ':nameCategory/:indexCategory', component: QuestionsComponent, pathMatch: 'full' },
  { path: ':nameCategory/:indexCategory/results', component: ResultsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    CategoriesResultComponent,
    CategoriesItemComponent,
    QuestionsComponent,
    QuestionsItemComponent,
    ScoreHighlightDirective,
    ResultsComponent,
    ResultsItemComponent,
    AnswerModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
    CategoriesComponent
  ],
  providers: [
    CategoryService
  ]
})
export class QuizModule {}