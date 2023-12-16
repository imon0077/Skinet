import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [FontAwesomeModule], // alternatively, individual components can be imported
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    setTheme('bs5'); // or 'bs4'
  }
  //faCoffee = faCoffee;
  title = 'Skinet';
}
