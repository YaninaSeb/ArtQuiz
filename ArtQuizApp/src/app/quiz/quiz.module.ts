import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';

// const routes: Routes = [
//   { path: '', component: SearchComponent, pathMatch: 'full' },
//   { path: ':id', component: DetailsComponent, pathMatch: 'full' }
// ];

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    RouterModule
  ],
})
export class QuizModule {}