import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appElementIntersection]'
})
export class ElementIntersectionDirective implements OnInit, AfterViewInit, OnDestroy {
  private elementObserver: IntersectionObserver | undefined;
  private observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
  };

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    this.checkVisible();
  }

  ngAfterViewInit(): void {
    this.elementObserver?.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.elementObserver) {
      this.elementObserver.disconnect();
      this.elementObserver = undefined;
    };
  }

  checkVisible(): void {
    this.elementObserver = new IntersectionObserver(entry => {
      if (entry[0].intersectionRatio > 0) {
        $(`#${entry[0].target.id}Polygon`).css({ 'opacity': '100%', 'transform': 'translateX(0)' });
        $(`#${entry[0].target.id}Name`).css({ 'opacity': '100%', 'transform': 'translateY(0)' });
        $(`#${entry[0].target.id}Description`).css({ 'opacity': '100%', 'transform': 'translateY(0)' });
        $(`#${entry[0].target.id}Git`).css({ 'opacity': '100%', 'transform': 'translateX(0)' });
        $(`#${entry[0].target.id}WorkingSite`).css({ 'opacity': '100%', 'transform': 'translateX(0)' });
        this.elementObserver?.unobserve(entry[0].target);
      };
    }, this.observerConfig);
  };
}
