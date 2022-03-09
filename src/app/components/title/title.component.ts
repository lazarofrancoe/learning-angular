import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() titleText: string = 'This is my title!';

  showTitle: boolean;
  constructor() {
    this.showTitle = true;
  }

  ngOnInit(): void {}
}
