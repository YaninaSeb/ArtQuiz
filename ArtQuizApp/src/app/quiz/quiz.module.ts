import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesResultComponent } from './components/categories-result/categories-result.component';
import { CategoriesItemComponent } from './components/categories-item/categories-item.component';
import { CommonModule } from "@angular/common";
import { CategoryService } from "./services/category.service";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'artists', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'pictures', component: CategoriesComponent, pathMatch: 'full' }

];

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    CategoriesResultComponent,
    CategoriesItemComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CategoryService]
})
export class QuizModule {}