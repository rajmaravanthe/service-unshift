import { Component } from '@angular/core';
import { UnshiftService } from './unshift.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  persons = [];
  sums = 0;
  constructor(public unshiftService: UnshiftService) {

  }
  ngOnInit() {
    this.persons = this.unshiftService.persons();
    this.sums = this.unshiftService.sum();
  }
}
