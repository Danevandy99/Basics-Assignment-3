import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecretText = true;
  clicks = [];

  toggleText() {
    this.showSecretText = !this.showSecretText;
    this.clicks.push(new Date());
  }

  getBackgroundColor(click) {
    return this.clicks.indexOf(click) > 3 ? 'blue' : 'white';
  }
}
