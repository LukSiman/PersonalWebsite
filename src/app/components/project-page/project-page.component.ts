import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {

  images: String[] = [];

  constructor() { 
    this.images = [
      "./assets/images/PMlogin.png",
      "./assets/images/PMmain.png",
      "./assets/images/PMcreate.png",
    ];
  }

  ngOnInit(): void {
  }

}
