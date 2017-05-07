import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './tsScripts/app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
}
