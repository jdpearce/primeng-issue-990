import { Component } from '@angular/core';

export class RowItem {
  timestamp: Date;
  name: string;
  description;

  constructor(name: string, description: string) {
    this.timestamp = new Date();
    this.name = name;
    this.description = description;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: RowItem[] = [
    new RowItem('RowItem1', 'The primary, initial, first item in the lovely collection of things.'),
    new RowItem('RowItem2', 'The mighty second item in the collection.'),
    new RowItem('RowItem3', 'The third row item in the collection.'),
  ];
}
