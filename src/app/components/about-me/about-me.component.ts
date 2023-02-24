import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onRedirect(link: string): void {
    window.open(link);
  };

  onCopyEmailAddress(): void {
    const temp = document.createElement('textarea');
    document.body.appendChild(temp);
    temp.value = 'davidyeungcoding@gmail.com';
    temp.select();
    navigator.clipboard.writeText(temp.value);
    document.body.removeChild(temp);
  };
}
