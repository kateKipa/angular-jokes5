import { Component, OnInit, inject } from '@angular/core';
import { RandomJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit {
  jokesService = inject(JokesService)

  joke : string = ""

  ngOnInit(): void {
    this.jokesService.getARandomJoke().subscribe((data : RandomJoke) => {
      console.log(data)
      this.joke = data.joke
    })
  }

  refreshJoke() {
    this.jokesService.getARandomJoke().subscribe((data) => {
      this.joke = data.joke
    })

  }
}
