import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-gameover-modal',
  templateUrl: './gameover-modal.component.html',
  styleUrls: ['./gameover-modal.component.css']
})
export class GameoverModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<GameoverModalComponent>,
    private questionService: QuestionService,
    private router: Router
  ) { }

  goHome() {
    this.dialogRef.close()
    this.router.navigate(['art_quiz']);
  }

  goCategories() {
    let nameCategory = this.questionService.nameCategory;
    this.dialogRef.close();
    this.router.navigate(['art_quiz', nameCategory]);
  }

}
