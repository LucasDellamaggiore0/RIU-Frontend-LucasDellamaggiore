import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})
export class UppercaseDirective implements OnChanges {
  @Input('appUppercase') value: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      const uppercaseText = (this.value || '').toUpperCase();
      this.renderer.setProperty(this.el.nativeElement, 'textContent', uppercaseText);
    }
  }
}
