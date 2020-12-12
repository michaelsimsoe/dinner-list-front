import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.scss'],
})
export class ActiveListComponent implements OnInit {
  public dishes: string[] = [
    'Tomatsuppe',
    'Kjøttboller',
    'Pannekaker',
    'Fiskekaker',
    'Taco',
    'Pizza',
    'Kjøttkaker',
  ];

  constructor() {}

  ngOnInit(): void {}
}
