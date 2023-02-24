import { Component, OnInit } from '@angular/core';

import { Project, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-previous-works',
  templateUrl: './previous-works.component.html',
  styleUrls: ['./previous-works.component.css']
})
export class PreviousWorksComponent implements OnInit {
  projects: Project[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

  onRedirect(link: string): void {
    window.open(link);
  };
}
