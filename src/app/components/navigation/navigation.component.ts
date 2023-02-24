import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onScrollTo(target: string): void {
    const positionY = $(`#${target}`).offset()!.top - 58;
    window.scrollTo({ top: positionY, behavior: 'smooth' });
  };

  onGoToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
