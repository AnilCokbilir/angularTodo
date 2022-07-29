import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InputArrayService {

  public allTitles: string[] = [];
  public allNotes: string[] = [];

  public trashTitles: string[] = [];
  public trashNotes: string[] = [];


  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  }
}
