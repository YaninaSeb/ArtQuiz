import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScoreHighlight]'
})
export class ScoreHighlightDirective implements OnInit {

  @Input() appScoreHighlight!: boolean;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    this.changeScoreHighlight();
  }

  changeScoreHighlight() {
    if (this.appScoreHighlight == true) {
      this.renderer2.setStyle(this.el.nativeElement, 'background-color', '#3DDA69')
    } else if (this.appScoreHighlight == false) {
      this.renderer2.setStyle(this.el.nativeElement, 'background-color', '#FF7E7E')
    }
  }

}
