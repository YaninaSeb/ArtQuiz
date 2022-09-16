import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './quiz/pages/categories/categories.component';
import { HomeComponent } from './quiz/pages/home/home.component';

const routes: Routes = [
  // {path: '', component: HomeComponent },
  { path: '', redirectTo: 'art_quiz', pathMatch: 'full' },

  { 
    path: 'art_quiz',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
