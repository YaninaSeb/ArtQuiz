import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective {
  @Input() selectedAnswer!: string;
  @Input() correctAnswer!: string;
  @Input() nameCategory!: string;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  @HostListener('click') onClick() {
    if (this.nameCategory == 'artists') {
      this.setStyleForArtistAnswer();
    } else {
      this.setStyleForPictureAnswer();
    }
  }

  setStyleForArtistAnswer() {
    if (this.selectedAnswer == this.correctAnswer) {
      this.renderer2.setStyle(
        this.el.nativeElement,
        'box-shadow',
        '0px 0px 10px 0px rgb(61, 218, 105)'
      );
    } else {
      this.renderer2.setStyle(
        this.el.nativeElement,
        'box-shadow',
        '0px 0px 10px 0px rgb(255, 126, 126)'
      );
    }
  }

  setStyleForPictureAnswer() {
    if (this.selectedAnswer == this.correctAnswer) {
      this.renderer2.setStyle(
        this.el.nativeElement,
        'background-color',
        'rgb(61, 218, 105)'
      );
    } else {
      this.renderer2.setStyle(
        this.el.nativeElement,
        'background-color',
        'rgb(255, 126, 126)'
      );
    }
  }
}
