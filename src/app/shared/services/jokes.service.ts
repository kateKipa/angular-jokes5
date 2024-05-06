import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RandomJoke } from '../interfaces/jokes';

const JOKES_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  //constructor() { }

  http : HttpClient = inject(HttpClient);

  getARandomJoke() {
    return this.http.get<RandomJoke>(JOKES_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }


}
