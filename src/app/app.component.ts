import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokesComponent } from "./components/jokes/jokes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, JokesComponent]
})
export class AppComponent {
  title = 'angular-jokes';
}
