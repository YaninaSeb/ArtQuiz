import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit {
  @Input() selectedAnswer!: string;
  @Input() correctAnswer!: string;
  @Input() nameCategory!: string;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.setDefaultStyle();
  }

  setDefaultStyle() {
    if (this.nameCategory == 'artists') {
      this.renderer2.removeStyle(this.el.nativeElement, 'box-shadow');
    } else if (this.nameCategory == 'pictures') {
      this.renderer2.removeStyle(this.el.nativeElement, 'background-color');
      this.renderer2.setStyle(
        this.el.nativeElement,
        'border-color',
        'rgb(255, 255, 255)'
      );
    }
  }

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
      this.renderer2.setStyle(
        this.el.nativeElement,
        'border-color',
        'rgb(61, 218, 105)'
      );
    } else {
      this.renderer2.setStyle(
        this.el.nativeElement,
        'background-color',
        'rgb(255, 126, 126)'
      );
      this.renderer2.setStyle(
        this.el.nativeElement,
        'border-color',
        'rgb(255, 126, 126)'
      );
    }
  }
}
