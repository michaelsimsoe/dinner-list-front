import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
