import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
