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

  scrollTo(target: string): void {
    $(`#${target}`)[0].scrollIntoView({ behavior: 'smooth' });
  };
}
