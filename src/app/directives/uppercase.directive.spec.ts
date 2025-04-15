import { UppercaseDirective } from './uppercase.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('UppercaseDirective', () => {
  let directive: UppercaseDirective;
  let el: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    el = { nativeElement: document.createElement('div') } as ElementRef;
    renderer = { setProperty: jasmine.createSpy('setProperty') } as unknown as Renderer2;
    
    directive = new UppercaseDirective(el, renderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should transform text to uppercase when value changes', () => {
    directive.value = 'hello';
    directive.ngOnChanges({
      value: {
        currentValue: 'hello',
        firstChange: true,
        previousValue: undefined,
        isFirstChange: function (): boolean {
          throw new Error('Function not implemented.');
        }
      },
    });

    expect(renderer.setProperty).toHaveBeenCalledWith(el.nativeElement, 'textContent', 'HELLO');
  });
});
